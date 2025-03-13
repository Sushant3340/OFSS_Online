#region Page Info
//***************************************************************************************************************
// File Name             : ForgotPassword.aspx.cs
// Description           : Password Recovery
// Created by            : Debaprasad Samal
// Created on            :  27/02/2018
// Modification History  :
//                           <CR no.>                      <Date>             <Modified by>                    <Modification Summary>' 
//Function Name          : 
// Procedures Used       :  USP_NewUserRegistration
// **********************************************************************************************'*****************
#endregion
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Net;
using System.Security.Cryptography;
using System.ServiceModel;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using CommonModels;
using CustomFaults;
using System.IO;
using System.Net.Mail;
public partial class ManageStudent_ForgotPassword : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    #region Member Variables
    string strResult, strMailID, encnum, strSName, mailBody, subJect, msgBody;
    public static int intCounter = 0;
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
            Session["UserFPOTP"] = null;
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
                GenerateOTP(1);
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

    private void GenerateOTP(int OTPType)
    {
        string strDynamicPwd = RandomNumber();
        if (OTPType == 1)
        {
            Session["UserFPOTP"] = strDynamicPwd;
        }
        StudentLogIn objstud = new StudentLogIn();
        string strResult = "", strUniqueRefNo = "", strMobNo = "";
        try
        {
            if (txtUniqueRefId.Text.Trim().Length > 0)
            {
                strUniqueRefNo = DecryptStringAES(txtUniqueRefId.Text.Trim());
            }
            if (txtSMobileNo.Text.Trim().Length > 0)
            {
                strMobNo = DecryptStringAES(txtSMobileNo.Text.Trim());
            }

            
                objstud.char_Action = "otp";
                objstud.vch_UniqueRefNo = Util.CheckSpecialCharValue(strUniqueRefNo.ToUpper());
                objstud.vch_MobNo = Util.CheckSpecialCharValue(strMobNo);
                if (Session["UserFPOTP"] == null)
                {
                    objstud.vch_OTP = RandomNumber();
                }
                else
                {
                    objstud.vch_OTP = Session["UserFPOTP"].ToString();
                }

                strResult = ccobj.ManageForgotPassword(objstud);
                string[] result = strResult.Split(',');
                if (result.Length > 1)
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
                    CookieOTP.Value = Util.EncryptPwd(Session["UserFPOTP"].ToString());

                    //Set the Expiry date.
                    CookieOTP.Expires = DateTime.Now.AddMinutes(2);
                    //Add the Cookie to Browser.
                    Response.Cookies.Add(CookieOTP);

                    #region Send Email and Sms
                    SendEmailandSMS(result[1].ToString(), result[2].ToString(), result[3].ToString(), result[4].ToString(), Session["UserFPOTP"].ToString(), OTPType);
                    #endregion


                    ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtMobileNo', '<strong>OTP sent successfully.</strong>', Title);", true);
                }
                else if (strResult == "1")
                {
                    ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtMobileNo', '<strong>आपने अपनी आवेदन संख्या गलत भरी  है | आवेदन में दिए गयी बारकोड के ऊपर  दी गई संख्या / आवेदन संख्या सही डालें |</strong>', Title);", true);
                    txtUniqueRefId.Focus();
                }
                else if (strResult == "2")
                {
                    ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtMobileNo', '<strong>आपने गलत मोबाइल नंबर भरा है | कृपया वही मोबाइल नंबर डालें जिसके माध्यम से आपने आवेदन पत्र भरा है !</strong>', Title);", true);
                    txtSMobileNo.Focus();
                }
                else
                {
                    string Msg = Messages.Message(Convert.ToInt32(strResult));
                    ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtMobileNo', '<strong>Transaction Failed Due To Error.</strong>', Title);", true);
                    txtSMobileNo.Focus();
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
       
        try
        {
            if (string.IsNullOrEmpty(txtUniqueRefId.Text.Trim()) && string.IsNullOrEmpty(txtSMobileNo.Text.Trim()))
            {
                ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtUniqueRefId').focus(); $('#txtUniqueRefId').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                return txtUniqueRefId.ClientID + ";Please enter either Barcode No. or Mobile No.!";
            }
            if (txtUniqueRefId.Text.Trim() != "" && txtSMobileNo.Text.Trim() != "")
            {
                ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtUniqueRefId').focus(); $('#txtUniqueRefId').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                return txtUniqueRefId.ClientID + ";Please enter either Barcode No. or Mobile No.!";
            }
            if (!string.IsNullOrEmpty(txtUniqueRefId.Text.Trim()))
            {
                if (!Regex.IsMatch(DecryptStringAES(txtUniqueRefId.Text.Trim()), "^[a-zA-Z0-9]+$"))
                {
                    ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtUniqueRefId').focus(); $('#txtUniqueRefId').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                    return txtUniqueRefId.ClientID + ";Please enter only alphabets and numerics !";
                }
                if (DecryptStringAES(txtUniqueRefId.Text.Trim()).Length > 20)
                {
                    ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtUniqueRefId').focus(); $('#txtUniqueRefId').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                    return txtUniqueRefId.ClientID + ";Please enter Reference No. within 20 characters !";
                }
            }
            if (!string.IsNullOrEmpty(txtSMobileNo.Text.Trim()))
            {
                if (!Regex.IsMatch(DecryptStringAES(txtSMobileNo.Text.Trim()), "^[0-9]+$"))
                {
                    ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtSMobileNo').focus(); $('#txtSMobileNo').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                    return txtSMobileNo.ClientID + ";Please enter only numerics !";
                }
                if (DecryptStringAES(txtSMobileNo.Text.Trim()).Length > 10)
                {
                    ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "Click", "setTimeout(function () { $('#txtSMobileNo').focus(); $('#txtSMobileNo').effect('highlight', { color: '#d9534f' }, 1000); }, 3);", true);
                    return txtUniqueRefId.ClientID + ";Please enter Mobile No. within 10 characters !";
                }
            }
            return "1";
        }
        catch(Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message + "');</script>", false);
            return "0";
        }
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



    private void SendEmailandSMS(string strUnqRefNo, string strStudMobNo, string strStudEmail, string strStudName, string strOTP, int OTPType)
    {

        string strCafNo = strUnqRefNo;
        string strMobileNo = strStudMobNo;
        string strEmail = strStudEmail;
        string strApplicantname = strStudName;
        Dictionary<string, string> dcValue = new Dictionary<string, string>();
        dcValue.Add(CreateXmlMsgUtil.hash_cafno, strCafNo);
        dcValue.Add(CreateXmlMsgUtil.hash_FPWDOTP, strOTP);

        string strSMSMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginOTPFPWD, dcValue, 1);
        string strEmailMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginOTPFPWD, dcValue, 2);
        try
        {
            if (ConfigurationManager.AppSettings["SMSjr"].ToString() == "Y")
            {
                if (OTPType == 1)
                {
                    try
                    {
                        SENDMSDSMS objSms = new SENDMSDSMS();
                        string status = objSms.sendOTPMSG(strMobileNo, strSMSMessage, Util.K_SMS_StudLogin_OTP_FPWD);
                    }
                    catch (Exception ex)
                    {
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
                    }
                    //try
                    //{
                    //    SendVivaSMS objSms = new SendVivaSMS();
                    //    objSms.SendVivaSMSTest(strMobileNo, strSMSMessage);
                    //}
                    //catch (Exception ex)
                    //{
                    //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
                    //}

                }
                else
                {
                    try
                    {
                        SENDMSDSMS objSms = new SENDMSDSMS();
                        string status = objSms.sendOTPMSG(strMobileNo, strSMSMessage, Util.K_SMS_StudLogin_OTP_FPWD);
                    }
                    catch (Exception ex)
                    {
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
                    }
                    //try
                    //{
                    //    SendVivaSMS objSms = new SendVivaSMS();
                    //    objSms.SendVivaSMSTest(strMobileNo, strSMSMessage);
                    //}
                    //catch (Exception ex)
                    //{
                    //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
                    //}
                }
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        try
        {
            if (ConfigurationManager.AppSettings["SDCEmailjr"].ToString() == "Y")
            {
                SENDMAIL objEmail = new SENDMAIL();
                string strCompleteEmail = CreateXmlMsgUtil.GetEmailAppendedContent(strEmailMessage, strApplicantname);
                MailMessage mm = new MailMessage();
                mm.Subject = strCompleteEmail;
                mm.IsBodyHtml = true;
                objEmail.sendMail(CreateXmlMsgUtil.K_MailSub_OTPSend, strCompleteEmail, strEmail);

            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

        try
        {
            if (ConfigurationManager.AppSettings["Emailjr"].ToString() == "Y")
            {
                SENDMAIL objEmail = new SENDMAIL();
                string strCompleteEmail = CreateXmlMsgUtil.GetEmailAppendedContent(strEmailMessage, strApplicantname);
                objEmail.SendVivaMail(CreateXmlMsgUtil.K_MailSub_OTPSend, strCompleteEmail, strEmail);

            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

    }

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
        intCounter = intCounter + 1;
        GenerateOTP(2);
        //}
        //else
        //{
        //    ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('txtMobileNo', 'Sorry !! Maximum Try Reached', Title);", true);
        //}
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

    public string DecryptStringAES(string cipherText)
    {
        var keybytes = Encoding.UTF8.GetBytes("8080808080808080");
        var iv = Encoding.UTF8.GetBytes("8080808080808080");

        var encrypted = Convert.FromBase64String(cipherText);
        var decriptedFromJavascript = DecryptStringFromBytes(encrypted, keybytes, iv);
        return string.Format(decriptedFromJavascript);
    }

    protected void btnReset_Click(object sender, EventArgs e)
    {
        //Fetch the Cookie using its Key.
        HttpCookie UIdCookie = Request.Cookies["UId"];
        //If Cookie exists fetch its value.
        string MyUId = UIdCookie != null ? UIdCookie.Value : "0";
        StudentLogIn objStudentLogin = new StudentLogIn();


        string UserPassword = DecryptStringAES(txtPassword.Text.Trim());
        string ConfirmPassword = DecryptStringAES(txtConfirm.Text.Trim());

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
            ScriptManager.RegisterStartupScript(btnSubmit, this.GetType(), "Myalert", "jAlert('', 'Your password reset time exceeds.', Title);", true);
            return;
        }
        else
        {
            try
            {
                
                    objStudentLogin.char_Action = "UP";
                    objStudentLogin.vch_UniqueRefNo = Util.CheckSpecialCharValue(MyUId.ToUpper());
                    objStudentLogin.vch_OTP = Util.CheckSpecialCharValue(txtOTP.Text.Trim());

                    string IPAdd = string.Empty;
                    IPAdd = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                    if (string.IsNullOrEmpty(IPAdd))
                        IPAdd = Request.ServerVariables["REMOTE_ADDR"];
                    objStudentLogin.vch_IPAddress = Util.CheckSpecialCharValue(IPAdd);
                    objStudentLogin.vch_Password = Util.CheckSpecialCharValue(UserPassword);

                    string strVal = ccobj.ManageForgotPassword(objStudentLogin);

                    if (strVal == "31")
                        ScriptManager.RegisterStartupScript(btnReset, this.GetType(), "Myalert", "jAlertSubmit('btnReset', '<strong>Password Reset Sucessfully!</strong>', 'StudentLogin.aspx');", true);
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