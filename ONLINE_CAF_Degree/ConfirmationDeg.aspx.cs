using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

using SabPaisaDotNetIntregreation;
using System.Text;
using com.toml.dp.util;

public partial class ONLINE_CAF_Degree_ConfirmationDeg : System.Web.UI.Page
{
    CAFDegDal ccobjcafdeg = new CAFDegDal();

    string strResult = string.Empty;
    int intResult = 0;
    string strOTP = string.Empty;
    SENDMAIL objMail = null;
    SENDMSDSMS objMsg = null;
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        {
            if (Request.QueryString["AppId"] != null)
            {
                hdnAppId.Value = Request.QueryString["AppId"].ToString();
                hdnMob.Value = Request.QueryString["Mob"].ToString();
                hdnEmail.Value = Request.QueryString["Email"].ToString();
                hdnAppNm.Value = Request.QueryString["Nm"].ToString();
            }
        }
        lblMsg.Text = "";

        //hdnAppId.Value = "18D294385";
        //hdnMob.Value = "9861450389";
        //hdnEmail.Value = "dashh@cdm.com";
        //hdnAppNm.Value = "Santosh";
        //Response.Redirect("CongratulationDeg.aspx?AppId=18D294385&Mob=9872340984&Email=dashh@cdm.com&Nm=Santosh");
        
        
    }

  

    protected string GetUrl()
    {
       // string strURL = "ConfirmationDeg.aspx?AppId=" + Request.QueryString["AppId"].ToString() + "&Mob=" + Request.QueryString["Mob"].ToString() + "&Email=" + Request.QueryString["Email"].ToString() + "&Nm=" + Request.QueryString["Nm"].ToString();

        string strURL = "CongratulationDeg.aspx?AppId=" + hdnAppId.Value + "&Mob=" + hdnMob.Value + "&Email=" + hdnEmail.Value + "&Nm=" + hdnAppNm.Value;

        return strURL;

        //string strURL = "ConfirmationDeg.aspx?";
        //string strURLWithData = strURL + string.Format("AppId={0}", AppId);
        //return strURLWithData;

    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            //Session["Uid"] = strImageName;
            
                strResult = ccobjcafdeg.SaveOTP("C", hdnMob.Value, txtOTP.Text.Trim(), Request.QueryString["AppId"].ToString(), "");
            

            if (strResult == "1")
            {
                //If user exists it return 2
                intResult = Insert_User();
                if (intResult == 1)
                {
                    lblMsg.Text = "";
                    Response.Redirect(GetUrl());
                }
                else
                {
                    lblMsg.Text = "Invalid OTP";
                }
            }
            else
            {
                lblMsg.Text = "Invalid OTP";
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmationDeg");
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
            strOTP = RandomNumber();
           
                strResult = ccobjcafdeg.SaveOTP("R", hdnMob.Value, strOTP, hdnAppId.Value.Trim(), hdnEmail.Value.Trim());
                Send_SMS_EMAIL(strOTP);
            
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmationDeg");
        }
        return Convert.ToInt32(strResult);
    }
    public void Send_SMS_EMAIL(string strDynamicPwd)
    {
        objMail = new SENDMAIL();
        objMsg = new SENDMSDSMS();
        try
        {
            if (hdnEmail.Value != "")
            {

                try
                {


                    string mailBody =
                      "Dear " + hdnAppNm.Value.ToUpper() + ",\n" +
                        //"You application is successfully applied." + "\n" +
                     "Your Application Reference No. is " + hdnAppId.Value + ". " + "\n" +
                    " Your User ID is " + hdnMob.Value + " and Password is " + strDynamicPwd + " for future reference.";


                    string subJect = "Successfull Submission of Application";
                    if (System.Configuration.ConfigurationManager.AppSettings["EmailDeg"].ToString() == "Y")
                    {
                        objMail.sendMail(subJect, mailBody, hdnEmail.Value);
                    }
                }
                catch (Exception ex) {

                    Util.LogError(ex, "ConfirmationDeg");
                }

            }

            if (hdnMob.Value != "")
            {
                //"You application is successfully applied. " + "\n" +
                //string msgBody = "Your Application Reference No. is " + hdnAppId.Value + " and Password is " + strDynamicPwd + " for future reference.";
                //string response = objMsg.sendOTPMSG(hdnMob.Value, msgBody);


                string msgBody = "Your Application Reference No. is " + hdnAppId.Value + ".  " + "\n" +
    "Your User ID is " + hdnMob.Value + " and Password is " + strDynamicPwd + " for future reference.";
                string response = objMsg.sendOTPMSG(hdnMob.Value, msgBody);
            }
        }
        catch (Exception ex)
        {
            //Server.Transfer("Error.aspx", false);
            Util.LogError(ex, "ConfirmationDeg");
        }
        finally
        {
            objMail = null;
            objMsg = null;
        }
    }

    public void Send_SMS_EMAIL_OTP(string strDynamicPwd)
    {
        objMail = new SENDMAIL();
        objMsg = new SENDMSDSMS();
        try
        {
            if (hdnEmail.Value != "")
            {
                try
                {
                    string mailBody =
                      "Dear " + hdnAppNm.Value.ToUpper() + ",\n" +
                      "You have received this message in response to your request for one-time password for new Application." + "\n" +
                      "Your one-time password:" + strDynamicPwd + "";
                    string subJect = "OTP for New Application";
                    if (System.Configuration.ConfigurationManager.AppSettings["EmailDeg"].ToString() == "Y")
                    {
                        objMail.sendMail(subJect, mailBody, hdnEmail.Value);
                    }
                }
                catch (Exception ex)
                {
                    Util.LogError(ex, "ConfirmationDeg");
                }
            }

            if (hdnMob.Value != "")
            {
                string msgBody = "Your One Time Password(OTP) for New Application is : " + strDynamicPwd +
                                       " which will be expired in 2 mins. Do not share it with anyone.";
                string response = objMsg.sendOTPMSG(hdnMob.Value, msgBody);
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmationDeg");
        }
        finally
        {
            objMail = null;
            objMsg = null;
        }
    }

    //Resend OTP
    protected void btnSendOTP_Click(object sender, EventArgs e)
    {
        strOTP = RandomNumber();
        Send_SMS_EMAIL_OTP(strOTP);

        
           strResult = ccobjcafdeg.SaveOTP("I", hdnMob.Value.Trim(), strOTP, "", "");
        

        lblMsg.Text = "OTP has been sent to your Mobile Number and E-mail ID.";
    }



  


}
