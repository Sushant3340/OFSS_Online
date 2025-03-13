//'**********************************************************************************
//' File Name             :   Confirmation.aspx.cs
//' Description           :   Confirmation page
//' Created by            :   Sasmita Maharana
//' Created On            :   24-11-2017
//' Modification History   :
//'                        <CR no.>    <Date>      <Modified by>  < Modification Summary>   <instructed by>    '                
//'                                                       
//' Function Name         : FillHierarchy for dllcolloge dllblock dlldistrict
//' Procedures Used       : SP_CIIP_BUILDINGDETAILS
//' PDK function          : <CR No.>  <PDK Function Name>                                                            <Purpose of use of PDK>
//'                             2    fillBuilding(), SaveData() ,CheckVadidation(),CheckAva()         fill building value, save data,serverside validation.checkAvaliablity of record
//'**************************************************************************************/--


using System;
using System.Web.UI;
using OFSS_OL_Entity;

public partial class ONLINE_CAF_ConfirmationJr : System.Web.UI.Page
{
    CAFDAL ccobjcaf = new CAFDAL();


    int intApplID = 0;
    string strApplName = "";
    string strPwd = "";
    string strResult = "";
    SENDMAIL objMail = new SENDMAIL();
    SENDMSDSMS objMsg = new SENDMSDSMS();

    string strDynamicPwd = "";

    protected void Page_Load(object sender, System.EventArgs e)
    {

        if (!IsPostBack)
        {
            if (Request.QueryString["AppId"] == null)
            {
                Response.Redirect("JrCAFForm.aspx");
                //hdnMob.Value = Request.QueryString["Mob"].ToString();
                //hdnEmail.Value = Request.QueryString["Email"].ToString();
                //hdnAppNm.Value = Request.QueryString["Nm"].ToString();

            }
            else
            {
                try
                {
                    hdnAppId.Value = Request.QueryString["AppId"].ToString();

                    strDynamicPwd = RandomNumber();

                    //Push OTP DATA 
                    CAFEntity objCAF = new CAFEntity();
                    objCAF.Action = "I";
                    objCAF.strPassword = strDynamicPwd; //modified on 21st April 2021 for performance testing 
                    objCAF.vch_CorMobileNo = string.Empty;
                    objCAF.UID = Request.QueryString["AppId"].ToString();

                    
                        strResult = ccobjcaf.SaveOTP(objCAF);

                    
                    string Result = strResult.Substring(0, 1);

                    if (Result == "3")
                    {
                        string strMobno = strResult.Remove(0, 1);
                        string strMsg = "आपने पहले हीं  Mobile Number: " + strMobno + " से OFSS के माध्यम से आवेदन फॉर्म भर दिया है इसलिए आप दुबारा नया फॉर्म नहीं भर पा रहे हैं | पेमेंट करके अपना फॉर्म जमा करने के लिए Student Login में जाकर अपने मोबाइल नंबर  " + strMobno + "  से Login करें | यदि आपको Login ID एवं  पासवर्ड नहीं पता है तो Forgot Password पर क्लिक करके पासवर्ड Reset कर लें एवं पुन: Login करके अपना फॉर्म भर करके पेमेंट करके फॉर्म जमा कर लें |";
                        ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "alert('" + strMsg + "')", true);

                    }
                    else
                    {
                        string[] strValues = strResult.Split('~');
                        if (strValues != null && strValues.Length > 0)
                        {
                            hdnMob.Value = strValues[1].Trim();
                            hdnAppNm.Value = strValues[2].Trim();
                            hdnEmail.Value = strValues[3].Trim();
                        }
                        if (Result == "1")
                        {
                            //change done by Ritika lath on 25th April 2019 for resend sms
                            Send_SMS_EMAIL_OTP(strDynamicPwd, 1);
                        }
                    }
                }
                catch (Exception ex)
                {
                    Util.LogError(ex, "ConfirmationJr_otp");

                }
                finally
                {
                    lblMsg.Text = "";
                }

            }

        }

    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            CAFEntity objCaf = new CAFEntity();
            objCaf.Action = "C";
            objCaf.strPassword = txtOTP.Text.Trim();
            objCaf.vch_CorMobileNo = hdnMob.Value;
            objCaf.UID = hdnAppId.Value;

            
                strResult = ccobjcaf.SaveOTP(objCaf);
            

        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmationJr");
        }
        if (strResult == "1")
        {
            if (Insert_User() == 1)
            {

                lblMsg.Text = "";
                try
                {
                    Response.Redirect(GetUrl(), false);
                }
                catch
                {
                }
                finally
                {
                    Context.ApplicationInstance.CompleteRequest();
                }

            }
            else
            {
                lblMsg.Text = "OTP Not Validated.";
            }
        }
        else
        {
            lblMsg.Text = "Invalid OTP";
        }


    }

    #region Generate Random Number
    private string RandomNumber()
    {
        Random random = new Random();
        int randNum = random.Next(1000000);
        return randNum.ToString("D6");
    }
    #endregion

    public int Insert_User()
    {
        try
        {
            CAFEntity objCaf = new CAFEntity();
            objCaf.Action = "R";
            strDynamicPwd = RandomNumber();
            objCaf.strPassword = strDynamicPwd;
            objCaf.vch_CorMobileNo = hdnMob.Value;
            objCaf.vch_EMailID = hdnEmail.Value;
            objCaf.UID = hdnAppId.Value;

           
                strResult = ccobjcaf.SaveOTP(objCaf);

            


            string Result = strResult.Substring(0, 1);

            if (Result == "3")
            {
                string strMobno = strResult.Remove(0, 1);
                string strMsg = "आपने पहले हीं  Mobile Number: " + strMobno + " से OFSS के माध्यम से आवेदन फॉर्म भर दिया है इसलिए आप दुबारा नया फॉर्म नहीं भर पा रहे हैं | पेमेंट करके अपना फॉर्म जमा करने के लिए Student Login में जाकर अपने मोबाइल नंबर  " + strMobno + "  से Login करें | यदि आपको Login ID एवं  पासवर्ड नहीं पता है तो Forgot Password पर क्लिक करके पासवर्ड Reset कर लें एवं पुन: Login करके अपना फॉर्म भर करके पेमेंट करके फॉर्म जमा कर लें |";
                ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "alert('" + strMsg + "')", true);

            }
            else if (Result == "1")
            {
                Send_SMS_EMAIL(strDynamicPwd);
            }
            else if (Result == "2")
            {
                string strMsg = "इस मोबाइल नंबर का उपयोग पहले से ही एक अन्य फॉर्म द्वारा किया जा रहा है | कृपया दूसरा मोबाइल नंबर प्रदान करें और फॉर्म भरें |";
                ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "alert('" + strMsg + "')", true);
            }
            else
            {
                ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "alert('Something went wrong. Please try again after sometime!!')", true);
            }

        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmationJr");
        }
        return Convert.ToInt32(strResult);
    }

    public void Send_SMS_EMAIL(string strDynamicPwd)
    {
        if (hdnMob.Value != "")
        {
            //string sms_message = string.Format("Your CAF No is {0} and OTP is {1}. Please visit www.ofssbihar.in and click on student login. Use CAF mobile number and OTP to reset your password.", hdnAppId.Value, strDynamicPwd);

            #region old message given by client
            //  string msgBody =  "You application is successfully applied. " + "\n" +
            string sms_message = "Reference ID - " + hdnAppId.Value + ", User ID - " + hdnMob.Value + " and Password - " + strDynamicPwd + ", For Login please visit to www.ofssbihar.in and click on student login. - BSEB";
            #endregion
            try
            {
                if (System.Configuration.ConfigurationManager.AppSettings["SMSjr"].ToString() == "Y")
                {
                    string response = objMsg.sendUnicodeSMS(hdnMob.Value, sms_message, Util.K_SMS_CAF_Confirm);
                }
            }
            catch (Exception ex)
            {
                Util.LogError(ex, "ConfirmationJr");
            }
            //try
            //{
            //    if (System.Configuration.ConfigurationManager.AppSettings["SMSjr"].ToString() == "Y")
            //    {
            //        SendVivaSMS sendVivaSMS = new SendVivaSMS();
            //        sendVivaSMS.SendVivaSMSTest(hdnMob.Value, sms_message, Util.K_SMS_CAF_Confirm);
            //    }
            //}
            //catch (Exception ex)
            //{
            //    Util.LogError(ex, "ConfirmationJr");
            //}

        }

        if (hdnEmail.Value != "")
        {
            //string email_message = string.Format("Dear {0}s\n, Your CAF No is {1} and Password is {2}. Please visit www.ofssbihar.in, click on student login. Use CAF mobile number and OTP to reset your password.\nआपका CAF No {3} है और OTP {4} है। कृपया www.ofssbihar.in पर जाएँ, Student Login पर क्लिक करें। अपना पासवर्ड रीसेट करने के लिए CAF मोबाइल नंबर और OTP का उपयोग करें।", hdnAppNm.Value.ToUpper(), hdnAppId.Value, strDynamicPwd, hdnAppId.Value, strDynamicPwd);

            #region old email message given by client
            string email_message =
              "Dear " + hdnAppNm.Value.ToUpper() + ",\n" +
            //"You application is successfully applied." + "\n" +
            "Reference ID - " + hdnAppId.Value + ", User ID - " + hdnMob.Value + " and Password - " + strDynamicPwd + ", For Login please visit to www.ofssbihar.in and click on student login." + "\n" + "Reference ID - " + hdnAppId.Value + ",  User ID  - " + hdnMob.Value + " Password - " + strDynamicPwd + ", लॉगिन के लिए कृपया www.ofssbihar.in पर जाएँ और Student Login पर क्लिक करें।";
            #endregion

            string subJect = "Successful Submission of Application";
            try
            {
                if (System.Configuration.ConfigurationManager.AppSettings["SDCEmailjr"].ToString() == "Y")
                {
                    objMail.sendMail(subJect, email_message, hdnEmail.Value);
                }
            }
            catch (Exception ex)
            {
                Util.LogError(ex, "ConfirmationJr");
            }
            try
            {
                if (System.Configuration.ConfigurationManager.AppSettings["Emailjr"].ToString() == "Y")
                {
                    objMail.SendVivaMail(subJect, email_message, hdnEmail.Value);
                }
            }
            catch (Exception ex)
            {
                Util.LogError(ex, "ConfirmationJr");
            }
        }


    }

    //change done by Ritika lath on 25th April 2019 for resend sms
    public void Send_SMS_EMAIL_OTP(string strDynamicPwd, int intType)
    {

        if (hdnMob.Value != "" && (!string.IsNullOrEmpty(strDynamicPwd)))
        {
            string msgBody = "OTP for New OFSS CAF applied is " + strDynamicPwd + ", Please use this OTP within 5 Minutes and Proceed for the Payment - BSEB";

            try
            {
                if (System.Configuration.ConfigurationManager.AppSettings["SMSjr"].ToString() == "Y")
                {
                    string response = objMsg.sendOTPMSG(hdnMob.Value, msgBody, Util.K_SMS_CAF_Validate_OTP);
                }
            }
            catch (Exception ex)
            {
                Util.LogError(ex, "ConfirmationJr");
            }

            //try
            //{
            //    if (System.Configuration.ConfigurationManager.AppSettings["SMSjr"].ToString() == "Y")
            //    {
            //        SendVivaSMS objVivaSms = new SendVivaSMS();
            //        objVivaSms.SendVivaSMSTest(hdnMob.Value, msgBody, Util.K_SMS_CAF_Validate_OTP);
            //    }
            //}
            //catch (Exception ex)
            //{
            //    Util.LogError(ex, "ConfirmationJr");
            //}

        }


        if (hdnEmail.Value != "")
        {
            string mailBody =
             "Dear " + hdnAppNm.Value.ToUpper() + ",\n" +
             "You have received this message in response to your request for one-time password for new Application." + "\n" +
             "OTP for New OFSS CAF applied is " + strDynamicPwd + ", Please use this OTP within 5 Minutes and Proceed for the Payment. " + "\n" +
             "नए OFSS CAF के लिए OTP " + strDynamicPwd + " लागू है, कृपया  5 मिनट के भीतर यह ओटीपी उपयोग करें और उसके बाद भुगतान के लिए आगे बढ़ें ।";
            string subJect = "OTP for New Application";
            if (System.Configuration.ConfigurationManager.AppSettings["SDCEmailjr"].ToString() == "Y")
            {
                try
                {
                    objMail.sendMail(subJect, mailBody, hdnEmail.Value);
                }
                catch (Exception ex)
                {
                    Util.LogError(ex, "Confirmationjr");
                }
            }
            if (System.Configuration.ConfigurationManager.AppSettings["Emailjr"].ToString() == "Y")
            {
                try
                {
                    objMail.SendVivaMail(subJect, mailBody, hdnEmail.Value);
                }
                catch (Exception ex)
                {
                    Util.LogError(ex, "Confirmationjr");
                }
            }

        }

    }

    protected void btnSendOTP_Click(object sender, EventArgs e)
    {
        try
        {
            strDynamicPwd = RandomNumber();
            //Push OTP DATA 
            CAFEntity objCAF = new CAFEntity();
            objCAF.Action = "RS";
            objCAF.strPassword = strDynamicPwd;
            objCAF.vch_CorMobileNo = hdnMob.Value;
            objCAF.UID = Request.QueryString["AppId"].ToString();

            
                strResult = ccobjcaf.SaveOTP(objCAF);
            

            if (!string.IsNullOrEmpty(strResult))
            {
                //change done by Ritika lath on 25th April 2019 for resend sms
                Send_SMS_EMAIL_OTP(strResult, 2);
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmationJr");
        }
    }


    protected string GetUrl()
    {
        string strURLWithData = string.Empty;
        strURLWithData = "CongratulationJr.aspx?AppId=" + hdnAppId.Value + "&Mob=" + hdnMob.Value + "&Email=" + hdnEmail.Value + "&Nm=" + hdnAppNm.Value;
        return strURLWithData;

    }

}
