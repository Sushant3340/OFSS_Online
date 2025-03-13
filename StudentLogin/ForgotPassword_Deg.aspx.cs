using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Security.Cryptography;
using System.Text;
using System.Net;
using System.Text.RegularExpressions;
using System.ServiceModel;
using CommonModels;
using CustomFaults;
using System.Configuration;

public partial class StudentLogin_ForgotPassword_Deg : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    #region Member Variables
    string strResult, strMailID, encnum, strSName, mailBody, subJect, msgBody;
    public int intCounter = 0;
    string strLoginIP = "";
    MD5CryptoServiceProvider md5Hasher = new MD5CryptoServiceProvider();
    UTF8Encoding encoder = new UTF8Encoding();
    byte[] hashedBytes = null;
    Random rnd = new Random();
    HttpCookie CookieOTP;
    #endregion

    #region pageLoad
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            divOTP.Visible = true;
            divSubmit.Visible = false;
            divReset.Visible = false;
        }
    }
    #endregion

    #region security(Cross site request forgery)
    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        ViewStateUserKey = Session.SessionID;
    }
    #endregion

    #region OTP Click
    protected void btnOTP_Click(object sender, EventArgs e)
    {
        try
        {
            string strRetval = string.Empty;
            if ((strRetval = ValidateData()) == "1")
            {
                GenerateOTP();
            }
            else
            {
                string[] outValues = strRetval.Split(';');
                ScriptManager.RegisterStartupScript(this, typeof(Page), "Click", "$('#" + outValues[0].ToString() + "').focus();alert('" + outValues[1].ToString() + "');", true);
                outValues = null;
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
        }
    }
    #endregion

    private void GenerateOTP()
    {
        string strDynamicPwd = RandomNumber();
        StudentLogIn objstud = new StudentLogIn();
        string strResult = "";
        try
        {
            
                objstud.char_Action = "otp";
                objstud.CollegeType = "Dg";
                objstud.vch_UniqueRefNo = txtUniqueRefId.Text.Trim().ToUpper();
                objstud.vch_OTP = strDynamicPwd;
                objstud.vch_MobNo = txtSMobileNo.Text.Trim();
                strResult = ccobj.ManageForgotPassword(objstud);
                string[] result = strResult.Split(',');
                if (result.Length == 3)
                {
                    divOTP.Visible = false;
                    divReset.Visible = false;
                    divSubmit.Visible = true;
                    litMobile.Text = "XXXXX" + result[2].Substring(5, 5);

                    HttpCookie CookieId = new HttpCookie("UId");
                    CookieId.Value = result[1];
                    CookieId.Expires = DateTime.Now.AddMinutes(10);
                    Response.Cookies.Add(CookieId);

                    //Create a Cookie with a suitable Key.
                    CookieOTP = new HttpCookie("otp");
                    //Set the Cookie value.
                    CookieOTP.Value = Util.EncryptPwd(strDynamicPwd);
                    //Set the Expiry date.
                    CookieOTP.Expires = DateTime.Now.AddMinutes(10);
                    //Add the Cookie to Browser.
                    Response.Cookies.Add(CookieOTP);

                    SendOTP(result[2], strDynamicPwd);
                    ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtMobileNo', '<strong>OTP sent successfully.</strong>', Title);", true);
                }
                else if (strResult=="1")
                {
                    ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtMobileNo', '<strong>Invalid Reference No. !</strong>', Title);", true);
                    txtUniqueRefId.Focus();
                }
                else if (strResult == "2")
                {
                    ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtMobileNo', '<strong>Invalid Mobile No. !</strong>', Title);", true);
                    txtSMobileNo.Focus();
                }
                else if (strResult == "3")
                {
                    ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtMobileNo', '<strong>Reference No. and Mobile No. do not belong to a single applicant !</strong>', Title);", true);
                    txtUniqueRefId.Focus();
                }
            
        }
        catch (FaultException<CustomFault> ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
        }
        catch (FaultException ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
        }
        finally { }
    }


    #region get Machine IP
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

    #region validate data
    protected string ValidateData()
    {
        char[] SpecialChars;
        Regex MobExp;

        try
        {
            if (string.IsNullOrEmpty(txtUniqueRefId.Text.Trim()) && string.IsNullOrEmpty(txtSMobileNo.Text.Trim()))
            {
                ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtUniqueRefId').focus(); $('#txtUniqueRefId').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                return txtUniqueRefId.ClientID + ";Please enter either Reference No. or Mobile No.!";
            }
            if (!string.IsNullOrEmpty(txtUniqueRefId.Text.Trim()))
            {
                if (!Regex.IsMatch(txtUniqueRefId.Text.Trim(), "^[a-zA-Z0-9]+$"))
                {
                    ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtUniqueRefId').focus(); $('#txtUniqueRefId').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                    return txtUniqueRefId.ClientID + ";Please enter only alphabets and numerics !";
                }
                if (txtUniqueRefId.Text.Trim().Length > 20)
                {
                    ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtUniqueRefId').focus(); $('#txtUniqueRefId').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                    return txtUniqueRefId.ClientID + ";Please enter Reference No. within 20 characters !";
                }
            }
            if (!string.IsNullOrEmpty(txtSMobileNo.Text.Trim()))
            {
                if (!Regex.IsMatch(txtSMobileNo.Text.Trim(), "^[0-9]+$"))
                {
                    ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtSMobileNo').focus(); $('#txtSMobileNo').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                    return txtSMobileNo.ClientID + ";Please enter only numerics !";
                }
                if (txtSMobileNo.Text.Trim().Length > 10)
                {
                    ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtSMobileNo').focus(); $('#txtSMobileNo').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                    return txtUniqueRefId.ClientID + ";Please enter Mobile No. within 10 characters !";
                }
            }
            return "1";
        }
        catch { return btnSubmit.ClientID + ";Sorry ! You can not generate OTP !"; }
    }
    #endregion

    #region generate Random number
    private string RandomNumber()
    {
        Random random = new Random();
        int randNum = random.Next(1000000);
        return randNum.ToString("D6");
    }
    #endregion

    #region send OTP to mobile
    public void SendOTP(string Mobile, string strOTP)
    {
        SENDMSDSMS objSMSPost = new SENDMSDSMS();
        try
        {
            //Send By SMS
            string MsgBody = "Your One Time Password(OTP) for resetting account password in OFSS is : " + strOTP +
                             " which will be expired in 10 mins. Do not share it with anyone.";
            string status = objSMSPost.sendOTPMSG(Mobile, MsgBody);
            if (status.Split(',').Length == 1 || status.Split(',')[0] != "402")
            {
                ScriptManager.RegisterStartupScript(btnOTP, this.GetType(), "Myalert", "jAlert('', '<strong>SMS Gateway Server is not responding! Please try after sometime</strong>', Title);", true);
                return;
            }
        }
        catch (Exception ex)
        {
            //Response.Write("Error Occured in catch block--" + ex.Message.ToString());
            ScriptManager.RegisterStartupScript(btnOTP, this.GetType(), "Myalert", "jAlert('', '<strong>SMS Gateway Server is not responding! Please try after sometime</strong>', Title);", true);
        }
        finally { objSMSPost = null; }
    }
    #endregion

    #region Encryption
    public string enc(string rnd)
    {
        string strpass = null;
        hashedBytes = md5Hasher.ComputeHash(encoder.GetBytes(rnd));
        strpass = BitConverter.ToString(hashedBytes);
        strpass = strpass.Replace("-", "");
        return strpass;
    }
    #endregion

    #region Send Mail
    protected void sendMail(string Subject, string MailBody, string strMailID)
    {
        // Gmail Address from where you send the mail
        var fromAddress = ConfigurationManager.AppSettings["UserName"]; //reading from web.config  
        // any address where the email will be sending
        var toAddress = strMailID;
        //Password of your gmail address
        string fromPassword = ConfigurationManager.AppSettings["Password"]; //reading from web.config  
        // smtp settings
        var smtp = new System.Net.Mail.SmtpClient();
        {
            smtp.Host = ConfigurationManager.AppSettings["Host"];
            smtp.Port = int.Parse(ConfigurationManager.AppSettings["Port"]);
            smtp.EnableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableSsl"]);
            smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
            smtp.Credentials = new NetworkCredential(fromAddress, fromPassword);
            smtp.Timeout = 20000;
        }
        // Passing values to smtp object
        smtp.Send(fromAddress, toAddress, Subject, MailBody);
    }
    #endregion


   

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            //Fetch the Cookie using its Key.
            HttpCookie nameCookie = Request.Cookies["otp"];
            //If Cookie exists fetch its value.
            string MyOtp = nameCookie != null ? nameCookie.Value : "0";

            if (Util.EncryptPwd(txtOTP.Text) == MyOtp)
            {
                //Set the Expiry date to past date.
                // nameCookie.Expires = DateTime.Now.AddDays(-1);
                //Update the Cookie in Browser.
                // Response.Cookies.Add(nameCookie);

                divOTP.Visible = false;
                divSubmit.Visible = false;
                divReset.Visible = true;
            }
            else if (MyOtp == "0")
            {
                txtOTP.Text = "";
                ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtOTP', 'OTP is expired !', Title);", true);
                txtOTP.Focus();
            }
            else
            {
                txtOTP.Text = "";
                ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtOTP', 'Invalid OTP !', Title);", true);
                txtOTP.Focus();
            }
        }
        catch (FaultException<CustomFault> ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
        }
        catch (FaultException ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
        }
    }

    protected void btnResend_Click(object sender, EventArgs e)
    {
        //if (intCounter < 3)
        //{
        //    intCounter = intCounter + 1;
            GenerateOTP();
        //}
        //else
        //    ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtMobileNo', 'Sorry !! Maximum Try Reached', Title);", true);
    }

    protected void btnReset_Click(object sender, EventArgs e)
    {
        //Fetch the Cookie using its Key.
        HttpCookie UIdCookie = Request.Cookies["UId"];
        //If Cookie exists fetch its value.
        string MyUId = UIdCookie != null ? UIdCookie.Value : "0";
        StudentLogIn objStudentLogin = new StudentLogIn();

        if (txtPassword.Text == "")
        {
            ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtPassword', 'Password cannot be blank', Title);", true);
            return;
        }
        else if (txtConfirm.Text == "")
        {
            ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtConfirm', 'Confirm Password cannot be blank', Title);", true);
            return;
        }
        else if (MyUId == "0")
        {
            ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('', 'oop! Something wrong, please try after some time', Title);", true);
            return;
        }
        else
        {
            try
            {
                
                    objStudentLogin.char_Action = "UP";
                    objStudentLogin.CollegeType = "Dg";
                    objStudentLogin.vch_UniqueRefNo = MyUId.ToUpper(); ;
                    objStudentLogin.vch_OTP = txtOTP.Text.Trim();

                    string IPAdd = string.Empty;
                    IPAdd = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                    if (string.IsNullOrEmpty(IPAdd))
                        IPAdd = Request.ServerVariables["REMOTE_ADDR"];
                    objStudentLogin.vch_IPAddress = IPAdd;
                    objStudentLogin.vch_Password = txtPassword.Text.Trim();

                    string strVal = ccobj.ManageForgotPassword(objStudentLogin);

                    if (strVal == "31")
                        ScriptManager.RegisterStartupScript(btnReset, this.GetType(), "Myalert", "jAlertSubmit('btnReset', '<strong>Password Reset Sucessfully!</strong>', 'StudentLogin_Deg.aspx');", true);
                    else
                        ScriptManager.RegisterStartupScript(btnReset, this.GetType(), "Myalert", "jAlert('txtPassword', 'Error Occured. Please try after sometime.', Title);", true);
                
            }
            catch (FaultException<CustomFault> ex)
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
            }
            catch (FaultException ex)
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
            }
            finally { }
        }
    }


}