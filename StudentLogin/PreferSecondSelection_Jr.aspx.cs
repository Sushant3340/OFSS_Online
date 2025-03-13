using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CommonModels;
using CustomFaults;
using System.ServiceModel;
using System.Configuration;
using System.IO;

public partial class StudentLogin_PreferSecondSelection_Jr : System.Web.UI.Page
{
    HttpCookie CookieOTP;
    public static int gIntOTPResendCounter = 0;
    CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
            Session["UserPSOTP"] = null;
            List<CAFEntity> listDetails = new List<CAFEntity>();
            listDetails = fillDateline();

            if (listDetails.Count > 0)
            {
                hdnSlideUpStatus.Value = listDetails[0].int_AutoValidateStatus.ToString();
                hdnSelectOptionNo.Value = listDetails[0].intStatus.ToString();
                DateTime dtmToDate = listDetails[0].ToDate;
                DateTime dtmFromDate = listDetails[0].FromDate;

                int FromDate = DateTime.Compare(DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59), dtmFromDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                int ToDate = DateTime.Compare(dtmToDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));

                if (ToDate >= 0 && FromDate >= 0)
                {
                    if (Convert.ToInt32(hdnSlideUpStatus.Value) > 0)
                    {
                        if (Convert.ToInt32(hdnSelectOptionNo.Value) == 1)
                        {
                            litMessage.Text = "You have got selected in your first option preference. So, You are not authorised to choose slide up.";
                            divForm.Visible = false;
                            divDateLine.Visible = true;
                        }
                        else
                        {
                            divDateLine.Visible = false;
                            divForm.Visible = true;
                            GetAnnexure7Status();
                        }
                    }
                    else
                    {
                        litMessage.Text = "Sorry, Not Selected Candidates are not authorised to choose slide up.";
                        divForm.Visible = false;
                        divDateLine.Visible = true;
                    }
                }
                else
                {
                    if (FromDate < 0)
                    {
                        litMessage.Text = "Dateline for slide up selection is not started yet...";
                    }
                    if (ToDate < 0)
                    {
                        litMessage.Text = "Dateline for slide up selection is completed...";
                    }
                    divDateLine.Visible = true;
                    divForm.Visible = false;
                }


            }
            else
            {
                litMessage.Text = "Dateline for slide up selection is not started yet...";
                divDateLine.Visible = true;
                divForm.Visible = false;
            }
        }
    }

    #region "get date line"
    protected List<CAFEntity> fillDateline()
    {
        DateTime lastDt = DateTime.Today;
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();

        try
        {
            obj.Action = "L";
            obj.vch_UniqueRefNo = Session["StudID"].ToString();

            
            
                list = ccobj.FillCAF(obj);


            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        return list;
    }
    #endregion

    private void GetAnnexure7Status()
    {
        btnGenOTP.Visible = false;
        divNotice.Visible = false;
        divSelect.Visible = false;
        lblMsg.Text = string.Empty;
        chkStatus.Checked = false;
        divOTPEntry.Visible = false;
        OTPdiv.Visible = false;
        int ReturnMsg = 0;
        string strmsg = "";
        CAFEntity obj = new CAFEntity();
        try
        {

             obj = new CAFEntity();
                obj.Action = "C";
                obj.vch_UniqueRefNo = Session["StudID"].ToString();

                ReturnMsg = Convert.ToInt32(ccobj.ManageSelection_Jr(obj));
                strmsg = Messages.Message(ReturnMsg);
                if (ReturnMsg == 1)
                {
                    lblMsg.Text = "This facility will be available after Selection in college";
                }
                else if (ReturnMsg == 3)
                {
                    lblMsg.Text = "You have already agreed for Slide up option. To revert it, generate OTP, validate and confirm the same.";
                    hdnStatus.Value = "r";
                    btnGenOTP.Visible = true;
                }
                else
                {
                    hdnStatus.Value = "u";
                    divNotice.Visible = true;
                    divSelect.Visible = true;
                }
            
        }
        catch (Exception ex)
        { ScriptManager.RegisterStartupScript(Page, this.GetType(), "Myalert", "jAlert('','<strong>" + ex.Message.ToString().Replace("'", "") + "</strong>', Title);", true); }
        finally
        { obj = null; }
    }

    private void GenerateOTP(int intOTPType)
    {
        string strDynamicPwd = RandomNumber();
        if (intOTPType == 1)
        {
            Session["UserPSOTP"] = strDynamicPwd;
        }
        StudentLogIn objstud = new StudentLogIn();
        string strResult = "";
        try
        {
            
                objstud.char_Action = "otp";
                objstud.vch_UniqueRefNo = Session["StudID"].ToString();
                if (Session["UserPSOTP"] == null)
                {
                    objstud.vch_OTP = RandomNumber();
                }
                else
                {
                    objstud.vch_OTP = Session["UserPSOTP"].ToString();
                }

                strResult = ccobj.UpdateSecondSelectionPref_JR(objstud);
                string[] result = strResult.Split(',');
                if (result.Length > 1)
                {
                    hdnApplicantNm.Value = result[4].ToString();
                    hdnStudEmail.Value = result[3].ToString();
                    hdnStudMobile.Value = result[2].ToString();

                    OTPdiv.Visible = true;
                    divOTPEntry.Visible = true;

                    HttpCookie CookieId = new HttpCookie("UId");
                    CookieId.Value = result[1];
                    CookieId.Expires = DateTime.Now.AddMinutes(2);
                    Response.Cookies.Add(CookieId);

                    //Create a Cookie with a suitable Key.
                    CookieOTP = new HttpCookie("otp");
                    //Set the Cookie value.
                    CookieOTP.Value = Util.EncryptPwd(Session["UserPSOTP"].ToString());
                    //Set the Expiry date.
                    CookieOTP.Expires = DateTime.Now.AddMinutes(2);
                    //Add the Cookie to Browser.
                    Response.Cookies.Add(CookieOTP);

                    #region Send Email and Sms
                    SendOTPEmailandSMS(Session["StudID"].ToString(), hdnStudMobile.Value, hdnStudEmail.Value, hdnApplicantNm.Value, Session["UserPSOTP"].ToString(), intOTPType);
                    #endregion

                    if (intOTPType == 1)
                    {
                        lblOtpDetails.Text = " OTP has been sent to your mobile number: XXXXX" + result[2].Substring(5, 5) + ". In case you do not receive the OTP within 2 minutes, please click on the <b>Re-send</b> button to receive the OTP again.";
                    }
                    else if (intOTPType == 2)
                    {
                        if (gIntOTPResendCounter < 3)
                        {
                            btnResend.Visible = true;
                            lblOtpDetails.Text = " OTP has been sent to your mobile number: XXXXX" + result[2].Substring(5, 5) + ". In case you do not receive the OTP within 2 minutes, please click on the <b>Re-send</b> button to receive the OTP again. You can use the Re-Send option " + (3 - gIntOTPResendCounter).ToString() + " more times only.";
                        }
                        else if (gIntOTPResendCounter == 3)
                        {
                            lblOtpDetails.Text = " OTP has been sent to your mobile number: XXXXX" + result[2].Substring(5, 5) + ". Maximum Try for Resend button has reached.";
                            btnResend.Visible = false;
                        }
                    }
                    ScriptManager.RegisterStartupScript(btnGenOTP, this.GetType(), "Myalert", "jAlert('txtMobileNo', '<strong>OTP sent successfully.</strong>', Title);", true);

                }
                else
                {
                    ScriptManager.RegisterStartupScript(btnGenOTP, this.GetType(), "Myalert", "jAlert('txtMobileNo', '<strong>Invalid Mobile No. !</strong>', Title);", true);
                }
            
        }
        catch (FaultException<CustomFault> ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message.ToString().Replace("'", "") + "');</script>", false);
        }
        catch (FaultException ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message.ToString().Replace("'", "") + "');</script>", false);
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message.ToString().Replace("'", "") + "');</script>", false);
        }
        finally { }
    }

    #region generate Random number
    private string RandomNumber()
    {
        Random random = new Random();
        int randNum = random.Next(1000000);
        return randNum.ToString("D6");
    }
    #endregion

    #region send OTP to mobile
    private void SendOTPEmailandSMS(string strUnqRefNo, string strStudMobNo, string strStudEmail, string strStudName, string strOTP, int OTPType)
    {
        string status = "";
        string strCafNo = strUnqRefNo;
        string strMobileNo = strStudMobNo;
        string strEmail = strStudEmail;
        string strApplicantname = strStudName;
        Dictionary<string, string> dcValue = new Dictionary<string, string>();
        dcValue.Add(CreateXmlMsgUtil.hash_cafno, strCafNo);
        dcValue.Add(CreateXmlMsgUtil.hash_FPWDOTP, strOTP);
        string strSMSMessage, strEmailMessage;
        if (chkStatus.Checked)
        {
            strSMSMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginSlideUpOTPActivate, dcValue, 1);
            strEmailMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginSlideUpOTPActivate, dcValue, 2);
        }
        else
        {
            strSMSMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginSlideUpOTPDeactivate, dcValue, 1);
            strEmailMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginSlideUpOTPDeactivate, dcValue, 2);
        }

        try
        {
            if (ConfigurationManager.AppSettings["SMSjr"].ToString() == "Y")
            {
                //if (OTPType == 1)
                //{
                    SENDMSDSMS objSms = new SENDMSDSMS();
                if (chkStatus.Checked)
                {
                     status = objSms.sendOTPMSG(strMobileNo, strSMSMessage,Util.K_SMS_StudLogin_SlideUp_OTP_Active);

                }
                else
                {
                     status = objSms.sendOTPMSG(strMobileNo, strSMSMessage,Util.K_SMS_StudLogin_SlideUp_OTP_Deactive);
                }
               
                //}
                //else
                //{
                //    SendVivaSMS objSms = new SendVivaSMS();
                //    objSms.SendVivaSMSTest(strMobileNo, strSMSMessage);
                //}
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
                if (chkStatus.Checked)
                {
                    if (ConfigurationManager.AppSettings["SDCEmailjr"].ToString() == "Y")
                    {
                        objEmail.sendMail(CreateXmlMsgUtil.K_MailSub_OTPSlideupActivate, strCompleteEmail, strEmail);
                    }
                    else
                    {
                        objEmail.SendVivaMail(CreateXmlMsgUtil.K_MailSub_OTPSlideupActivate, strCompleteEmail, strEmail);

                    }
                }
                else
                {
                    if (ConfigurationManager.AppSettings["SDCEmailjr"].ToString() == "Y")
                    {
                        objEmail.sendMail(CreateXmlMsgUtil.K_MailSub_OTPSlideupDeactivate, strCompleteEmail, strEmail);
                    }
                    else
                    {
                        objEmail.SendVivaMail(CreateXmlMsgUtil.K_MailSub_OTPSlideupDeactivate, strCompleteEmail, strEmail);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

    }

    #endregion

    protected void chkStatus_CheckChanged(object sender, EventArgs e)
    {
        if (chkStatus.Checked)
        {
            btnGenOTP.Visible = true;
        }
        else
        {
            btnGenOTP.Visible = false;
        }
    }

    protected void btnGenerateOTP_Click(object sender, EventArgs e)
    {
        try
        {
            if (Session["CSRFRandNum"].ToString() == hdnCSRFRandNum.Value)
            {
                GenerateOTP(1);
            }
            else
            {
                ClsExpData objExpData = new ClsExpData()
                {
                    strLoggedInUser = Session["UserId"].ToString()
                    ,
                    strPageName = Path.GetFileNameWithoutExtension(Page.AppRelativeVirtualPath)
                    ,
                    vchModuleName = "StudentLogin_PreferSecondSelection_Jr_btnGenerateOTP_Click_CSRF"
                    ,
                    strIpAddress = Request.ServerVariables["REMOTE_ADDR"].ToString()
                    ,
                    intType = 1
                };

                Util.CSRFSecurityLog_Add(objExpData);
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message.ToString().Replace("'", "") + "');</script>", false);
        }
        finally
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
        }
    }

    protected void btnResendOTP_Click(object sender, EventArgs e)
    {
        try
        {
            if (Session["CSRFRandNum"].ToString() == hdnCSRFRandNum.Value)
            {
                if (gIntOTPResendCounter < 3)
                {
                    gIntOTPResendCounter = gIntOTPResendCounter + 1;
                    GenerateOTP(2);
                }
                else
                {
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "Myalert", "jAlert('txtMobileNo', 'Sorry !! Maximum Try Reached', Title);", true);
                }
            }
            else
            {
                ClsExpData objExpData = new ClsExpData()
                {
                    strLoggedInUser = Session["UserId"].ToString()
                    ,
                    strPageName = Path.GetFileNameWithoutExtension(Page.AppRelativeVirtualPath)
                    ,
                    vchModuleName = "StudentLogin_PreferSecondSelection_Jr_btnResendOTP_Click_CSRF"
                    ,
                    strIpAddress = Request.ServerVariables["REMOTE_ADDR"].ToString()
                };

                Util.CSRFSecurityLog_Add(objExpData);
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message.ToString().Replace("'", "") + "');</script>", false);
        }
        finally
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
        }
    }

    protected void btnValidate_Click(object sender, EventArgs e)
    {
        try
        {
            if (Session["CSRFRandNum"].ToString() == hdnCSRFRandNum.Value)
            {
                //Fetch the Cookie using its Key.
                HttpCookie nameCookie = Request.Cookies["otp"];
                //If Cookie exists fetch its value.
                string MyOtp = nameCookie != null ? nameCookie.Value : "0";
                if (MyOtp == "0")
                {
                    txtEOTP.Text = "";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "Myalert", "jAlert('txtOTP', 'OTP is expired !', Title);", true);
                    txtEOTP.Focus();
                }
                else if (Util.EncryptPwd(txtEOTP.Text) == MyOtp)
                {
                    divOTPEntry.Visible = false;
                    //update selection preference 
                    
                        StudentLogIn objstud = new StudentLogIn();
                        objstud.char_Action = hdnStatus.Value;
                        objstud.vch_UniqueRefNo = Session["StudID"].ToString();
                        objstud.vch_OTP = Util.CheckSpecialCharValue(txtEOTP.Text);
                        string strResult = ccobj.UpdateSecondSelectionPref_JR(objstud);
                        divOTPEntry.Visible = false;
                        lblOtpDetails.Text = string.Empty;
                        if (strResult == "1")
                        {
                            if (string.Equals(hdnStatus.Value, "u", StringComparison.OrdinalIgnoreCase))
                            {
                                ScriptManager.RegisterStartupScript(this, this.GetType(), "Myalert", "jAlert('txtEOTP', 'Your apllication has been successfully entered into further Selection process..', Title);", true);
                            }
                            else if (string.Equals(hdnStatus.Value, "r", StringComparison.OrdinalIgnoreCase))
                            {
                                ScriptManager.RegisterStartupScript(this, this.GetType(), "Myalert", "jAlert('txtEOTP', 'Your apllication has been  removed from the further Selection process successfully..', Title);", true);
                            }

                            #region Send Email and Sms
                            SendConfirmEmailandSMS(Session["StudID"].ToString(), hdnStudMobile.Value, hdnStudEmail.Value, hdnApplicantNm.Value);
                            #endregion
                        }
                        GetAnnexure7Status();
                    
                }
                else
                {
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "Myalert", "jAlert('txtEOTP', 'Invalid OTP!', Title);", true);
                }
            }
            else
            {
                ClsExpData objExpData = new ClsExpData()
                {
                    strLoggedInUser = Session["UserId"].ToString()
                    ,
                    strPageName = Path.GetFileNameWithoutExtension(Page.AppRelativeVirtualPath)
                    ,
                    vchModuleName = "StudentLogin_PreferSecondSelection_Jr_btnValidate_Click_CSRF"
                    ,
                    strIpAddress = Request.ServerVariables["REMOTE_ADDR"].ToString()
                };

                Util.CSRFSecurityLog_Add(objExpData);
            }
        }
        catch (FaultException<CustomFault> ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message.ToString().Replace("'", "") + "');</script>", false);
        }
        catch (FaultException ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message.ToString().Replace("'", "") + "');</script>", false);
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "<script>alert('" + ex.Message.ToString().Replace("'", "") + "');</script>", false);
        }
        finally
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
        }
    }

    #region send OTP to mobile
    private void SendConfirmEmailandSMS(string strUnqRefNo, string strStudMobNo, string strStudEmail, string strStudName)
    {
        string status = "";
        string strCafNo = strUnqRefNo;
        string strMobileNo = strStudMobNo;
        string strEmail = strStudEmail;
        string strApplicantname = strStudName;
        Dictionary<string, string> dcValue = new Dictionary<string, string>();
        dcValue.Add(CreateXmlMsgUtil.hash_cafno, strCafNo);
        dcValue.Add(CreateXmlMsgUtil.hash_admDate, DateTime.Now.ToString());
        string strSMSMessage, strEmailMessage;
        if (chkStatus.Checked)
        {
            strSMSMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginSlideUpActivatedConfirm, dcValue, 1);
            strEmailMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginSlideUpActivatedConfirm, dcValue, 2);
        }
        else
        {
            strSMSMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginSlideUpDeactivateConfirm, dcValue, 1);
            strEmailMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginSlideUpDeactivateConfirm, dcValue, 2);
        }

        try
        {
            if (ConfigurationManager.AppSettings["SMSjr"].ToString() == "Y")
            {
                SENDMSDSMS objSms = new SENDMSDSMS();
                if (chkStatus.Checked)
                {
                    status = objSms.sendOTPMSG(strMobileNo, strSMSMessage,Util.K_SMS_StudLogin_SlideUp_Active_Confirm);
                }
                else
                {
                    status = objSms.sendOTPMSG(strMobileNo, strSMSMessage,Util.K_SMS_StudLogin_SlideUp_Deactive_Confirm);
                }
                
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
                if (chkStatus.Checked)
                {
                    if (ConfigurationManager.AppSettings["SDCEmailjr"].ToString() == "Y")
                    {
                        objEmail.sendMail(CreateXmlMsgUtil.K_MailSub_ActivateSlideupConfirm, strCompleteEmail, strEmail);
                    }
                    else
                    {
                        objEmail.SendVivaMail(CreateXmlMsgUtil.K_MailSub_ActivateSlideupConfirm, strCompleteEmail, strEmail);
                    }
                }
                else
                {
                    if (ConfigurationManager.AppSettings["SDCEmailjr"].ToString() == "Y")
                    {
                        objEmail.sendMail(CreateXmlMsgUtil.K_MailSub_DeactivateSlideupConfirm, strCompleteEmail, strEmail);
                    }
                    else
                    {
                        objEmail.SendVivaMail(CreateXmlMsgUtil.K_MailSub_DeactivateSlideupConfirm, strCompleteEmail, strEmail);
                    }

                }

            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }



    }

    #endregion

}