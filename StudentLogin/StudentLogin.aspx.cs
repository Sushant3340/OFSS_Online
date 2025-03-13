
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Security.Cryptography;
using System.Text;
using System.Net;
using System.Web.SessionState;
using System.Reflection;
using CommonModels;
using System.IO;

public partial class StudentLogin_StudentLogin : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    #region Global Variable Declaration
    string strQuery, encnum;
    string strLoginIP = "";
    string strpassword = null;
    MD5CryptoServiceProvider md5Hasher = new MD5CryptoServiceProvider();
    UTF8Encoding encoder = new UTF8Encoding();
    byte[] hashedBytes = null;
    Random rnd = new Random();
    string pwdString, strLclSalt, strLclPwd1, accl, isAdmin, isRAAllowed, strType;
    #endregion

    #region Page load
    protected void Page_Load(object sender, EventArgs e)
    {
        lblCapMsg.Text = "";
        lblMsg.Text = "";
        if (!IsPostBack)
        {
            txtSMobileNo.Attributes.Add("autocomplete", "off");
            txtSPwd.Attributes.Add("autocomplete", "off");
            txtSPwd.Attributes.Add("autocomplete", "new-password");


            if (Request.QueryString["Logout"] == "y")
            {
                Session.Abandon();
                Session.Clear();
            }
            Session["Type"] = null;
            lblMsg.Visible = false;
            GetRandomText12();
            GetSaltText();
            txtSMobileNo.Focus();
        }
    }
    #endregion

    #region Password Encryption
    public string enc(string rnd)
    {
        string strpass = null;
        hashedBytes = md5Hasher.ComputeHash(encoder.GetBytes(rnd));
        strpass = BitConverter.ToString(hashedBytes);
        strpass = strpass.Replace("-", "");
        return strpass;
    }
    #endregion

    #region generate IP Address
    public string GetIP()
    {
        IPHostEntry host = default(IPHostEntry);
        string localIP = "?";
        host = Dns.GetHostEntry(Dns.GetHostName());
        foreach (IPAddress ip in host.AddressList)
        {
            if (ip.AddressFamily.ToString() == "InterNetwork")
            {
                localIP = ip.ToString();
            }
        }
        return localIP;

    }
    #endregion

    #region generate Captcha
    private void GetRandomText12()
    {
        //Use of the StringBuilder
        StringBuilder randomText = new StringBuilder();
        string alphabets = "0123456789";
        //Use of the Random Class for captcha code generation.
        Random r = new Random();
        for (int j = 0; j <= 5; j++)
        {
            //generating the random code for captcha.
            randomText.Append(alphabets[r.Next(alphabets.Length)]);
        }
        Session["CaptchaCode"] = randomText.ToString();
        imgCapcha.ImageUrl = "../Captcha.aspx";


    }
    #endregion

    #region button Click Events
    protected void ImgbtnRefrsh_Click(object sender, ImageClickEventArgs e)
    {
        try
        {
            GetRandomText12();
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }

    protected void btnSIGNIN_Click(object sender, EventArgs e)
    {
        StudentLogIn objstud = new StudentLogIn();
        try
        {

            if (Convert.ToString(Session["CaptchaCode"]) == txtRandno.Text.Trim())
            {
                if (ViewState["salt"] != null)
                {
                    strLclSalt = ViewState["salt"].ToString();
                    string loginUserId = DecryptStringAES(txtSMobileNo.Text);
                   
                        List<StudentLogIn> view = new List<StudentLogIn>();
                        objstud.char_Action = "L";
                        objstud.vch_UserName = loginUserId;
                        objstud.vch_OPassword = ViewState["salt"].ToString();
                        objstud.vch_Password = hdnPassword.Value.ToUpper().Trim();
                        view = ccobj.ViewNewUser(objstud);
                        if (view.Count > 0)
                        {

                            if (view[0].int_CourseID == 0)
                            {
                                ScriptManager.RegisterStartupScript(this, Page.GetType(), "", "jAlert('txtSMobileNo', '<strong>Invalid Mobile Number or Password</strong>','OFSS Portal, Govt. of Bihar');", true);
                                clear();
                            }
                            else if (view[0].int_CourseID == 2)
                            {
                                string msg = "Your system is locked upto " + view[0].intPaymentStatus.ToString() + " minutes.";
                                ScriptManager.RegisterStartupScript(this, Page.GetType(), "", "jAlert('txtSMobileNo', '<strong>" + msg + "</strong>','OFSS Portal, Govt. of Bihar');", true);
                                clear();

                            }
                            else if (view[0].int_CourseID == 3)
                            {
                                ScriptManager.RegisterStartupScript(this, Page.GetType(), "", "jAlert('txtSMobileNo', '<strong>Invalid Mobile Number or Password</strong>','OFSS Portal, Govt. of Bihar');", true);
                                clear();
                            }
                            else
                            {
                                //Check password =============


                                GenerateNewSessionId();
                                CreateSession(view);
                                Response.Redirect("StudentDashboardJunior.aspx");
                            }
                        }
                        else
                        {
                            ScriptManager.RegisterStartupScript(this, Page.GetType(), "", "jAlert('txtSMobileNo', '<strong>Invalid Mobile Number or Password</strong>','OFSS Portal, Govt. of Bihar');", true);
                            clear();
                        }
                    }
                
            }
            else
            {
                lblCapMsg.Visible = true;
                Captcha.Visible = false;
                lblCapMsg.Text = "Invalid Captcha!!!";
                GetRandomText12();
                txtRandno.Focus();
                lblCapMsg.ForeColor = System.Drawing.Color.Red;
                txtRandno.Text = "";

            }
            txtSMobileNo.Text = string.Empty;
            txtSPwd.Text = string.Empty;
            txtRandno.Text = string.Empty;
        }

        catch (Exception ex)
        {
            clear();
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);

        }
        finally
        {
            GetRandomText12();
        }
    }
    #endregion

    #region Clear Controls
    protected void clear()
    {
        txtSPwd.Text = "";
        txtRandno.Text = "";
        GetRandomText12();
    }
    #endregion

    private void GetSaltText()
    {
        StringBuilder saltText = new StringBuilder();
        string nums = "1234567890";
        Random r = new Random();
        for (int j = 0; j <= 5; j++)
        {
            saltText.Append(nums[r.Next(nums.Length)]);
        }
        ViewState["salt"] = saltText.ToString();

    }

    #region for Generating New SessionId
    private void GenerateNewSessionId()
    {
        //Get the unique session identifier for the session.
        System.Web.SessionState.SessionIDManager manager = new System.Web.SessionState.SessionIDManager();
        //Get the old session ID (Current)
        string oldId = manager.GetSessionID(Context);
        //Create new session Id
        string newId = manager.CreateSessionID(Context);
        bool isAdd = false, isRedir = false;
        //Save the newly created session identifier to the HTTP response
        manager.SaveSessionID(Context, newId, out isRedir, out isAdd);
        //Gets the object for current HTTP request
        HttpApplication ctx = (HttpApplication)HttpContext.Current.ApplicationInstance;
        //Gets the collection of modules for the current application
        HttpModuleCollection mods = ctx.Modules;
        //Get the System.Web.IHttpModule object with the specified name from the System.Web.HttpModuleCollection
        System.Web.SessionState.SessionStateModule ssm = (SessionStateModule)mods.Get("Session");
        //Searche for the fields defined for the current System.Type, using the specified binding constraints
        System.Reflection.FieldInfo[] fields = ssm.GetType().GetFields(BindingFlags.NonPublic | BindingFlags.Instance);
        SessionStateStoreProviderBase store = null;
        System.Reflection.FieldInfo rqIdField = null, rqLockIdField = null, rqStateNotFoundField = null;

        //Override the session field value with the newly created value.
        foreach (System.Reflection.FieldInfo field in fields)
        {
            if (field.Name.Equals("_store")) store = (SessionStateStoreProviderBase)field.GetValue(ssm);
            if (field.Name.Equals("_rqId")) rqIdField = field;
            if (field.Name.Equals("_rqLockId")) rqLockIdField = field;
            if (field.Name.Equals("_rqSessionStateNotFound")) rqStateNotFoundField = field;
        }
        object lockId = rqLockIdField.GetValue(ssm);
        if ((lockId != null) && (oldId != null)) store.ReleaseItemExclusive(Context, oldId, lockId);
        rqStateNotFoundField.SetValue(ssm, true);
        rqIdField.SetValue(ssm, newId);
    }
    #endregion

    #region generate Session
    protected void CreateSession(List<StudentLogIn> view)
    {
        Session["StudNm"] = view[0].vch_FullName;
        Session["UserId"] = view[0].int_UserID;
        Session["MobNumber"] = view[0].vch_MobNo;
        Session["Ctype"] = "2";
        Session["sType"] = 1;
        Session["StudID"] = view[0].vch_UniqueRefNo;
        Session["PaymentStatus"] = view[0].intPaymentStatus;
        Session["StudentNewApply"] = view[0].CollegeType;
        Session["ApplicantStatus"] = view[0].vch_createdBy;
        Session["SpotStartDate"] = view[0].dtm_DOB;
        Session["StudMarkStatus"] = view[0].intSudMarkStatus;
        Session["TransferStudSts"] = view[0].vch_SignatureName;
        Session["AdmittedStreamId"] = view[0].vch_ImageName;
    }
    #endregion

    public string DecryptStringAES(string cipherText)
    {
        var keybytes = Encoding.UTF8.GetBytes("8080808080808080");
        var iv = Encoding.UTF8.GetBytes("8080808080808080");

        var encrypted = Convert.FromBase64String(cipherText);
        var decriptedFromJavascript = DecryptStringFromBytes(encrypted, keybytes, iv);
        return string.Format(decriptedFromJavascript);
    }

    private string DecryptStringFromBytes(byte[] cipherText, byte[] key, byte[] iv)
    {
        // Check arguments.  
        if (cipherText == null || cipherText.Length <= 0)
        {
            throw new ArgumentNullException("cipherText");
        }
        if (key == null || key.Length <= 0)
        {
            throw new ArgumentNullException("key");
        }
        if (iv == null || iv.Length <= 0)
        {
            throw new ArgumentNullException("key");
        }

        // Declare the string used to hold  
        // the decrypted text.  
        string plaintext = null;

        // Create an RijndaelManaged object  
        // with the specified key and IV.  
        using (var rijAlg = new RijndaelManaged())
        {
            //Settings  
            rijAlg.Mode = CipherMode.CBC;
            rijAlg.Padding = PaddingMode.PKCS7;
            rijAlg.FeedbackSize = 128;

            rijAlg.Key = key;
            rijAlg.IV = iv;

            // Create a decrytor to perform the stream transform.  
            var decryptor = rijAlg.CreateDecryptor(rijAlg.Key, rijAlg.IV);

            try
            {
                // Create the streams used for decryption.  
                using (var msDecrypt = new MemoryStream(cipherText))
                {
                    using (var csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                    {

                        using (var srDecrypt = new StreamReader(csDecrypt))
                        {
                            // Read the decrypted bytes from the decrypting stream  
                            // and place them in a string.  
                            plaintext = srDecrypt.ReadToEnd();

                        }

                    }
                }
            }
            catch
            {
                plaintext = "keyError";
            }
        }

        return plaintext;
    }
}