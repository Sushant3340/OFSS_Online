using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Configuration;
using System.ServiceModel;
using System.Data;
using CommonModels;
using CustomFaults;

public partial class StudentLogin_PreferSecondSelection : System.Web.UI.Page
{
    HttpCookie CookieOTP;
    public static int gIntOTPResendCounter = 0;
    CommonClass ccobj = new CommonClass();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
            List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
            list = fillDateline();
            if (list.Count > 0)
            {

                if (list[0].SpecialCommunity == 1)
                {
                    Response.Redirect("Studentdashboard.aspx");
                }
                else
                {
                    DateTime dtmToDate = list[0].FromDate;
                    DateTime dtmFromDate = list[0].DateLine;

                    int FromDate = DateTime.Compare(DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59), dtmFromDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                    int ToDate = DateTime.Compare(dtmToDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));

                    if (ToDate >= 0 && FromDate >= 0)
                    {
                        if (list[0].int_AutoValidateStatus > 0 || list[0].intRejectionStatus > 0)
                        {
                            divDateLine.Visible = false;
                            divForm.Visible = true;
                            GetAnnexure7Status();
                        }
                        else if (list[0].ApplicationStatus > 0)
                        {
                            divDateLine.Visible = false;
                            divForm.Visible = true;
                            GetAnnexure7Status();
                        }
                        else if (list[0].pIntID > 0)
                        {
                            divDateLine.Visible = false;
                            divForm.Visible = true;
                            GetAnnexure7Status();
                        }
                        else
                        {
                            divDateLine.Visible = true;
                            divForm.Visible = false;
                        }

                    }
                    else
                    {
                        divDateLine.Visible = true;
                        divForm.Visible = false;
                    }
                }


            }
        }
    }
    #region "get date line"
    protected List<CAFEntity_Deg> fillDateline()
    {
        DateTime lastDt = DateTime.Today;
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();

        try
        {
            obj.Action = "D";
            obj.strId = Session["StudID"].ToString();
            
                list = ccobj.fillPrintOption(obj);


            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "alert('" + ex.Message + "');", true);
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
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {

           
                obj = new CAFEntity_Deg();
                obj.Action = "C";
                obj.vch_UniqueRefNo = Session["StudID"].ToString();

                ReturnMsg = Convert.ToInt32(ccobj.ManageSelection(obj));
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
        StudentLogIn objstud = new StudentLogIn();
        string strResult = "";
        try
        {
           
                objstud.char_Action = "otp";
                objstud.vch_UniqueRefNo = Session["StudID"].ToString();
                objstud.vch_OTP = strDynamicPwd;
                strResult = ccobj.UpdateSecondSelectionPref(objstud);
                string[] result = strResult.Split(',');
                if (result.Length == 3)
                {
                    OTPdiv.Visible = true;
                    divOTPEntry.Visible = true;

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
            string MsgBody = string.Empty;
            //Send By SMS
            if (string.Equals(hdnStatus.Value, "u", StringComparison.OrdinalIgnoreCase))
            {
                MsgBody = "Your One Time Password(OTP) for Annexure-7 update in OFSS is : " + strOTP +
                                 " which will be expired in 10 mins. Do not share it with anyone.";
            }
            else if (string.Equals(hdnStatus.Value, "r", StringComparison.OrdinalIgnoreCase))
            {
                MsgBody = "Your One Time Password(OTP) for Annexure-7 revert in OFSS is : " + strOTP +
                                                " which will be expired in 10 mins. Do not share it with anyone.";
            }
            string status = objSMSPost.sendOTPMSG(Mobile, MsgBody);
            if (status.Split(',').Length == 1 || status.Split(',')[0] != "402")
            {
                ScriptManager.RegisterStartupScript(btnGenOTP, this.GetType(), "Myalert", "jAlert('', '<strong>SMS Gateway Server is not responding! Please try after sometime</strong>', Title);", true);
                return;
            }
        }
        catch (Exception ex)
        {
            //Response.Write("Error Occured in catch block--" + ex.Message.ToString());
            ScriptManager.RegisterStartupScript(btnGenOTP, this.GetType(), "Myalert", "jAlert('', '<strong>SMS Gateway Server is not responding! Please try after sometime</strong>', Title);", true);
        }
        finally { objSMSPost = null; }
    }
    #endregion

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
                    vchModuleName = "btnGenerateOTP_Click_CSRF"
                    ,
                    strIpAddress = Request.ServerVariables["REMOTE_ADDR"].ToString()
                    ,
                    intType = 2
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
                    vchModuleName = "btnResendOTP_Click_CSRF"
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
                        objstud.vch_OTP = txtEOTP.Text;
                        string strResult = ccobj.UpdateSecondSelectionPref(objstud);
                        divOTPEntry.Visible = false;
                        lblOtpDetails.Text = string.Empty;
                        if (strResult == "1")
                        {
                            if (string.Equals(hdnStatus.Value, "u", StringComparison.OrdinalIgnoreCase))
                            {
                                ScriptManager.RegisterStartupScript(this, this.GetType(), "Myalert", "jAlert('txtEOTP', 'You have successfully sumitted Annexure-7. Your apllication has been entered in the third selection process..', Title);", true);
                            }
                            else if (string.Equals(hdnStatus.Value, "r", StringComparison.OrdinalIgnoreCase))
                            {
                                ScriptManager.RegisterStartupScript(this, this.GetType(), "Myalert", "jAlert('txtEOTP', 'You have successfully reverted your Annexure-7. Your apllication has been removed from the third selection process..', Title);", true);
                            }
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
                    vchModuleName = "btnValidate_Click_CSRF"
                    ,
                    strIpAddress = Request.ServerVariables["REMOTE_ADDR"].ToString()
                };

                Util.CSRFSecurityLog_Add(objExpData);
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
        finally
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
        }
    }
}



