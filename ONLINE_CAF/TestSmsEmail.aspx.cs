using com.toml.dp.util;
using CommonModels;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ONLINE_CAF_TestSmsEmail : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, EventArgs e)
    {

    }


    protected void btnOTPMSG_Click(object sender, EventArgs e)
    {
        string strStatus = string.Empty;
        string str = "BSEB SMS:";
        try
        {
            SENDMSDSMS objSms = new SENDMSDSMS();
            string status = objSms.sendOTPMSG(txtSMobileNo.Text, txtSMSSubject.Text, txtTemplateId.Text);
            Util.LogError(new Exception(), "TestBSEBSMS" + status);
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + status.ToString().Replace("'", "") + "');", true);
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + strStatus + ex.Message.ToString().Replace("'", "") + "');", true);
            Util.LogError(ex, "TestBSEBSMS");
        }
    }
    protected void btnUnicodeEmail_Click(object sender, EventArgs e)
    {
        string strStatus = string.Empty;
        string str = "BSEB SMS:";
        try
        {
            SENDMSDSMS objSms = new SENDMSDSMS();
            string status = objSms.sendUnicodeSMS(txtSMobileNo.Text, txtSMSSubject.Text, txtTemplateId.Text);
            Util.LogError(new Exception(), "TestBSEBSMS" + status);

        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + strStatus + ex.Message.ToString().Replace("'", "") + "');", true);
            Util.LogError(ex, "TestBSEBSMS");
        }
    }

    protected void btnResentSMS_Click(object sender, EventArgs e)
    {
        string str = "Viva SMS:";
        try
        {

            SendVivaSMS objSms = new SendVivaSMS();
            objSms.SendVivaSMSTest(txtSMobileNo.Text, txtSMSSubject.Text, txtTemplateId.Text.Trim());
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + ex.Message.ToString().Replace("'", "") + "');", true);
            ////LogError(ex, "TestVivaSMS");
        }
    }

    protected void btnVivaEmail_Click(object sender, EventArgs e)
    {
        string str = "Viva Email:";
        try
        {
            string emailSub = "OFSS|| Test Viva Email";
            SENDMAIL objEmail = new SENDMAIL();
            string strCompleteEmail = CreateXmlMsgUtil.GetEmailAppendedContent(txtEmailSub.Text, "test");
            objEmail.SendVivaMail(emailSub, strCompleteEmail, txtGovtEmail.Text);
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('Email sent successfully!!');", true);
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + ex.Message.ToString().Replace("'", "") + "');", true);
            ////LogError(ex, "TestVivaEmail");
        }
    }

    protected void btnEmail_Click(object sender, EventArgs e)
    {
        string str = "Govt Email:";
        try
        {
            string emailSub = "OFSS|| Test Govt Old Email";
            SENDMAIL objEmail = new SENDMAIL();
            string strCompleteEmail = CreateXmlMsgUtil.GetEmailAppendedContent(txtEmailSub.Text, "test");
            objEmail.sendMail(emailSub, strCompleteEmail, txtGovtEmail.Text);
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + ex.Message.ToString().Replace("'", "") + "');", true);
            //LogError(ex, "TestBSEBEmail");
        }
    }

    protected void btnNewEmaill_Click(object sender, EventArgs e)
    {
        string str = "New Govt Email:";
        try
        {
            string emailSub = "OFSS|| Test new Govt. Email";
            SENDMAIL objEmail = new SENDMAIL();
            string strCompleteEmail = CreateXmlMsgUtil.GetEmailAppendedContent(txtEmailSub.Text, "test New");
            sendNewMail(emailSub, strCompleteEmail, txtGovtEmail.Text);
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + ex.Message.ToString().Replace("'", "") + "');", true);
            //LogError(ex, "TestBSEBEmail");
        }
    }

    public void sendNewMail(string Subject, string MailBody, string strMailID)
    {
        // Gmail Address from where you send the mail
        var fromAddress = "verification@bihar.gov.in";
        // any address where the email will be sending
        var toAddress = strMailID;
        //Password of your gmail address
        const string fromPassword = "R2@bH1@hL3";// "csmpl@123";
        // smtp settings
        var smtp = new System.Net.Mail.SmtpClient();
        {
            smtp.Host = "email.gov.in";// "smtp.gmail.com";
            smtp.Port = 587;
            smtp.EnableSsl = true;
            smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
            smtp.Credentials = new NetworkCredential(fromAddress, fromPassword);
            smtp.Timeout = 20000;
        }
        // Passing values to smtp object
        ServicePointManager.ServerCertificateValidationCallback = delegate (object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors) { return true; };
        smtp.Send(fromAddress, toAddress, Subject, MailBody);
    }

    //protected void btnGetKey_Click(object sender, EventArgs eventArgs)
    //{
    //    string encKey = string.Empty;
    //    string decKey = string.Empty;
    //    int intKeySize = 128;
    //    string encodedKey = "/EXQdBSEvnlQZ/xSu009Ug==";
    //    string RequestParameter = "A+Uf6CuXgN6nO2U2l0UtkGSEUwtoXODrBNkthBHqw08=";
    //    string encData = AES128Bit.Decrypt(RequestParameter.ToString(), encodedKey, intKeySize);
    //    lblKey.Text = encData;

    //}

    protected void btnAxisGetKey_Click(object sender, EventArgs e)
    {
        AxisGateway();
    }

    #region "Axis Payment Gateway"
    private void AxisGateway()
    {
        int intApplID = 0;
        string strApplName = "";
        string strReturn = "";
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        AxisJrEntity objAxis = new AxisJrEntity();
        try
        {

            
                obj.Action = "P";
                obj.UID = txtRefNo.Text.Trim();
                list = ccobj.fillconfirmJuniorStream(obj);
           

            if (list != null && list.Count >= 1)
            {
                if (list[0].ApplicantID != null)
                {
                    intApplID = list[0].ApplicantID;
                }
                if (list[0].ApplicantName != null)
                {
                    strApplName = list[0].ApplicantName.ToString();
                }
            }

            string UniqueRefNo = txtRefNo.Text.Trim();
            string PostingAmt = System.Configuration.ConfigurationManager.AppSettings["AxisFeeAmount_Jr"].ToString();
            string AppName = strApplName;
            // string MerOrderNo=Guid.NewGuid().ToString(); ;
            int ApplicantID = intApplID;

            // gatewayType + 10 charaters of GUID + UniqueRefNo
            string Order_Number = ((int)enGateway.Axis).ToString() + Guid.NewGuid().ToString().Replace("-", "").Substring(0, 7).ToUpper() + "" + UniqueRefNo;
            string Other_Details = ApplicantID + "|" + UniqueRefNo + "|" + AppName;

            String strCID = string.Empty;
            String strRID = string.Empty;
            String strCRN = string.Empty;
            String strAMT = string.Empty;
            String strVER = string.Empty;
            String strTYP = string.Empty;
            String strRTU = string.Empty;
            String strPPI = string.Empty;
            String strRE1 = string.Empty;
            String strRE2 = string.Empty;
            String strRE3 = string.Empty;
            String strRE4 = string.Empty;
            String strRE5 = string.Empty;
            String strCNY = string.Empty;


            strCID = System.Configuration.ConfigurationManager.AppSettings["AxisCID"].ToString(); // update the same as assigned by AxisBank
            strRID = Order_Number;
            strCRN = Order_Number;
            strAMT = PostingAmt;
            strVER = System.Configuration.ConfigurationManager.AppSettings["AxisGAtewayVER"].ToString();
            strTYP = System.Configuration.ConfigurationManager.AppSettings["AxisTYPJr"].ToString();
            strRTU = System.Configuration.ConfigurationManager.AppSettings["AxisResponseURLJr"].ToString();
            strPPI = Other_Details;
            strRE1 = "MN";
            strCNY = "INR";
            strPPI = Order_Number + "|" + strRTU + "|" + strAMT;
            //PPI:Unique Transaction Id|Response URL|Amount
            string key = System.Configuration.ConfigurationManager.AppSettings["AxisKey"].ToString();
            string StrCheckSumString = strCID + strRID + strCRN + strAMT + key;

            string Checksum = sha256_hash(StrCheckSumString);
            //Sample values has been passed in each parameter. Please update with your values.

            string PlainText = "CID=" + strCID + "&RID=" + strRID + "&CRN=" + strCRN + "&AMT=" + strAMT + "&VER=" + strVER + "&TYP=" + strTYP + "&CNY=" + strCNY + "&RTU=" + strRTU + "&PPI=" + strPPI + "&RE1=" + strRE1 + "&RE2=&RE3=&RE4=&RE5=&CKS=" + Checksum;

            string encryptedstring = Encrypt(PlainText, System.Configuration.ConfigurationManager.AppSettings["AxisEncDecKey"].ToString());

            NameValueCollection data = new NameValueCollection();
            data.Add("i", encryptedstring);

            //Insert the initial payment data
           
                objAxis.Action = "A";
                objAxis.OrderId = Order_Number;
                objAxis.StudName = AppName;
                objAxis.UniqueRefNo = UniqueRefNo;
                objAxis.GatewayVersion = strVER;
                objAxis.TrnAmt = Convert.ToDecimal(strAMT);
                objAxis.GatewayType = strTYP;
                objAxis.TrnCurrency = strCNY;
                objAxis.CustomerRefNo = strCRN;
                objAxis.strRE1 = strRE1;
                objAxis.strRE2 = "";
                objAxis.strRE3 = "";
                objAxis.strRE4 = "";
                objAxis.strRE5 = "";
                objAxis.EncryptValue = encryptedstring;
                objAxis.PlainText = PlainText;
                strReturn = ccobj.ManagePaymentAxis_JR(objAxis);
            
            string TranUrl = System.Configuration.ConfigurationManager.AppSettings["AxisPostUrl"].ToString();

            if (strReturn == "1")
            {
                AxisRedirectAndPOST(this.Page, TranUrl, data);
            }


        }
        catch (Exception ex)
        {
            Util.LogError(ex, "LoginAxisPayment_Jr");
        }
        finally
        {
            list = null; obj = null; objAxis = null;
        }
    }

    private void AxisRedirectAndPOST(Page page, string TranUrl, NameValueCollection data)
    {

        //Prepare the Posting form
        string strForm = PreparePOSTFormAxis(TranUrl, data);
        //Add a literal control the specified page holding the Post Form, this is to submit the Posting form with the request.
        page.Controls.Add(new LiteralControl(strForm));

    }

    private static String PreparePOSTFormAxis(string url, NameValueCollection data)
    {
        //Set a name for the form
        string formID = "PostForm";

        //Build the form using the specified data to be posted.
        StringBuilder strForm = new StringBuilder();
        strForm.Append("<form id=\"" + formID + "\" name=\"" + formID + "\" action=\"" + url + "\" method=\"POST\">");
        foreach (string key in data)
        {
            strForm.Append("<input type=\"hidden\" name=\"" + key + "\" value=\"" + data[key] + "\">");
        }
        strForm.Append("</form>");

        //Build the JavaScript which will do the Posting operation.
        StringBuilder strScript = new StringBuilder();
        strScript.Append("<script language='javascript'>");
        strScript.Append("var v" + formID + " = document." + formID + ";");
        strScript.Append("v" + formID + ".submit();");
        strScript.Append("</script>");

        //Return the form and the script concatenated. (The order is important, Form then JavaScript)
        return strForm.ToString() + strScript.ToString();

    }

    public static String sha256_hash(String value)
    {
        StringBuilder Sb = new StringBuilder();
        using (SHA256 hash = SHA256Managed.Create())
        {
            Encoding enc = Encoding.UTF8;
            Byte[] result = hash.ComputeHash(enc.GetBytes(value));
            foreach (Byte b in result)
                Sb.Append(b.ToString("x2"));
        }
        return Sb.ToString();
    }

    public string Encrypt(string input, string key)
    {
        byte[] keyArray = UTF8Encoding.UTF8.GetBytes(key);
        byte[] toEncryptArray = UTF8Encoding.UTF8.GetBytes(input);
        Aes kgen = Aes.Create("AES");
        kgen.Mode = CipherMode.ECB;
        //kgen.Padding = PaddingMode.None;
        kgen.Key = keyArray;
        ICryptoTransform cTransform = kgen.CreateEncryptor();
        byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
        return Convert.ToBase64String(resultArray, 0, resultArray.Length);
    }

    public Boolean AcceptAllCertifications(Object sender, System.Security.Cryptography.X509Certificates.X509Certificate certification, System.Security.Cryptography.X509Certificates.X509Chain chain, System.Net.Security.SslPolicyErrors sslPolicyErrors)
    {
        return true;
    }

    #endregion
}