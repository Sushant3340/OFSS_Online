using System;
using CommonModels;
using System.Text;
using System.Security.Cryptography;

public partial class ONLINE_CAF_SahajJr : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        {
            try
            {

                Uniquerefid.Value = Convert.ToString(Session["Uniquerefid_Jr"]);
                StudName.Value = Convert.ToString(Session["StudName_Jr"]);
                StudId.Value = Convert.ToString(Session["StudId_Jr"]);
                AppFee.Value = Convert.ToString(Session["AppFee_Jr"]);
                service_provider_id.Value = Convert.ToString(Session["service_provider_id_Jr"]);
                response_url.Value = System.Configuration.ConfigurationManager.AppSettings["SahajResUrlIntermediate"].ToString();
               // response_url.Value = "http://localhost/SAMS_Online/ONLINE_CAF/SahajPayConfirmJr.aspx";
                string strCheckSumKey = "ofssgov3eswaq";
                string strMessage = Uniquerefid.Value + StudName.Value + StudId.Value + AppFee.Value + service_provider_id.Value + response_url.Value + strCheckSumKey;
                string strKeyValue = GetSHA256(strMessage);
                Checksumkey.Value = strKeyValue;

                SahajDeg objpayment = new SahajDeg();
                objpayment.Action = "A";
                objpayment.Uniquerefid = Convert.ToString(Session["Uniquerefid_Jr"]);
                objpayment.StudName = Convert.ToString(Session["StudName_Jr"]);
                objpayment.StudId = Convert.ToString(Session["StudId_Jr"]);
                objpayment.AppFee = Convert.ToDecimal(Session["AppFee_Jr"]);
                objpayment.service_provider_id = Convert.ToString(Session["service_provider_id_Jr"]);
                objpayment.AppType = Convert.ToString(Session["AppType_Jr"]);

                Button1.PostBackUrl = System.Configuration.ConfigurationManager.AppSettings["SahajReqUrl"].ToString();
                    //"http://uat2.sahaj.co.in/web/guest/bseb-fees-collection";
                    //

              
                    string res = ccobj.ManagePaymentSahaj_JR(objpayment);
                

            }
            catch (Exception ex)
            {
                Util.LogError(ex, "SahajPayment_Jr");
            }
        }
    }



    private string GetSHA256(string text)
    {
        UTF8Encoding encoder = new UTF8Encoding();

        byte[] hashValue;
        byte[] message = encoder.GetBytes(text);

        SHA256Managed hashString = new SHA256Managed();
        string hex = "";

        hashValue = hashString.ComputeHash(message);
        foreach (byte x in hashValue)
        {
            hex += String.Format("{0:x2}", x);
        }
        return hex;
    }
}