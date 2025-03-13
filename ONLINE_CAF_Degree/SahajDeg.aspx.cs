using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using OFSS_OL_Entity;
using OFSS_OL_Entity_deg;
using System.Security.Cryptography;
using System.Text;

public partial class ONLINE_CAF_SahajDeg : System.Web.UI.Page
{
    CAFDegDal ccobjcafdeg = new CAFDegDal();
    CAFDAL ccobjcafdal = new CAFDAL();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            try
            {

                Uniquerefid.Value = Convert.ToString(Session["Uniquerefiddeg"]);
                StudName.Value = Convert.ToString(Session["StudNamedeg"]);
                StudId.Value = Convert.ToString(Session["StudIddeg"]);
                AppFee.Value = Convert.ToString(Session["AppFeedeg"]);
                service_provider_id.Value = Convert.ToString(Session["service_provider_iddeg"]);
            
                if (Convert.ToString(Session["AppTypedeg"]) == "1")
                {
                    response_url.Value = System.Configuration.ConfigurationManager.AppSettings["SahajResUrlIntermediate"].ToString(); 
                }
                else if (Convert.ToString(Session["AppTypedeg"]) == "2")
                {
                    response_url.Value = System.Configuration.ConfigurationManager.AppSettings["SahajResUrlDegree"].ToString(); 
                }

                string strCheckSumKey = "ofssgov3eswaq";
                string strMessage = Uniquerefid.Value + StudName.Value + StudId.Value + AppFee.Value + service_provider_id.Value + response_url.Value + strCheckSumKey;
                string strKeyValue = GetSHA256(strMessage);
                Checksumkey.Value = strKeyValue;
                  

                SahajDeg objpayment = new SahajDeg();
                objpayment.Action = "A";
                objpayment.Uniquerefid = Convert.ToString(Session["Uniquerefiddeg"]);
                objpayment.StudName = Convert.ToString(Session["StudNamedeg"]);
                objpayment.StudId = Convert.ToString(Session["StudIddeg"]);
                objpayment.AppFee = Convert.ToDecimal(Session["AppFeedeg"]);
                objpayment.service_provider_id = Convert.ToString(Session["service_provider_iddeg"]);
                objpayment.AppType = Convert.ToString(Session["AppTypedeg"]);


                Button1.PostBackUrl = System.Configuration.ConfigurationManager.AppSettings["SahajReqUrl"].ToString();

                
                    string res = ccobjcafdeg.ManagePaymentSahajDeg(objpayment);
                

            }
            catch (Exception ex)
            {
                Util.LogError(ex, "Sahaj");
            }
        }


        //Uniquerefid.Value = "18D020002";
        //StudName.Value = "Santosh";
        //StudId.Value = "2345";
        //AppFee.Value = "300";
        //service_provider_id.Value ="BSEB";
        //string response_url = "http://localhost/SAMS_Online/ONLINE_CAF_Degree/SahajPayConfirmDeg.aspx";
        //string strCheckSumKey = "ofssgov3eswaq";

        //string strMessage = Uniquerefid.Value + StudName.Value + StudId.Value + AppFee.Value + service_provider_id.Value + response_url + strCheckSumKey;
        //string strKeyValue = GetSHA256(strMessage);

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