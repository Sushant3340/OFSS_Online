using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using OFSS_OL_Entity;
using SabPaisaDotNetIntregreation;
using System.Text;
using com.toml.dp.util;
using System.Security.Cryptography;
using OFSS_OL_Entity_deg;

public partial class ONLINE_CAF_Degree_CongratulationDeg : System.Web.UI.Page
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
            ShowData(Request.QueryString["AppId"].ToString());
        }
    }

    protected void ShowData(string strRefID)
    {
        int intApplID = 0;
        string strApplName = "";
        string strPwd = "";
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        try
        {
            CAFEntity_Deg obj = new CAFEntity_Deg();
            
                obj.Action = "P";
                obj.UID = strRefID.ToString();
                list = ccobjcafdeg.fillConfirmData(obj);
            

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

                if (list[0].strPassword != null)
                {
                    strPwd = list[0].strPassword.ToString();
                }

            }
            lblName.Text = strApplName.Trim();
            lblAppId.Text = strRefID.Trim();
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "CongratulationDeg");
        }
        finally
        {
            list.Clear();
        }
    }

    #region SBIePay

    private void SBIePay()
    {

        int intApplID = 0;
        string strApplName = "";
        string strReturn = "";
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        SBIePayDeg objSbi = new SBIePayDeg();
        try
        {

              obj.Action = "P";
                obj.UID = Request.QueryString["AppId"].ToString();
                list = ccobjcafdeg.fillConfirmData(obj);
            

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

            string UniqueRefNo = Request.QueryString["AppId"].ToString();
            string PostingAmt = System.Configuration.ConfigurationManager.AppSettings["SBIFeeAmount"].ToString();
            string AppName = strApplName;
            string MerOrderNo = Guid.NewGuid().ToString(); ;
            int ApplicantID = intApplID;

            string MID = System.Configuration.ConfigurationManager.AppSettings["SBIMID"].ToString(); //"1000003";
            string Collaborator_Id = "SBIEPAY";
            string Operating_Mode = "DOM";
            string Country = "IN";
            string Currency = "INR";
            string Amount = PostingAmt;
            string Order_Number = "1" + Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + Request.QueryString["AppId"].ToString();
            string Other_Details = ApplicantID + "^" + UniqueRefNo + "^" + AppName;

            //string Success_URL = "https: //test.sbiepay.com/secure/sucess.jsp";
            //string Success_URL = "http: //localhost/dhe/ONLINE_CAF/cafpaysucess.aspx";
            //string Failure_URL = "https: //test.sbiepay.com/secure/fail.jsp";
            //string Failure_URL = "http: //localhost/dhe/ONLINE_CAF/cafpayfail.aspx"; 
            string SBI_URL = System.Configuration.ConfigurationManager.AppSettings["SBIPostUrl"].ToString();
            string Success_URL = System.Configuration.ConfigurationManager.AppSettings["SBISuccessURLDeg"].ToString();
            string Failure_URL = System.Configuration.ConfigurationManager.AppSettings["SBIFailureURLDeg"].ToString();
            string EncodedKey = System.Configuration.ConfigurationManager.AppSettings["SBIEncodedKey"].ToString();         //"fBc5628ybRQf88f/aqDUOQ==";

            int keysize = 128;

            string Requestparameter = MID
                                + "|" + Operating_Mode
                                + "|" + Country
                                + "|" + Currency
                                + "|" + Amount
                                + "|" + Other_Details
                                + "|" + Success_URL
                                + "|" + Failure_URL
                                + "|" + Collaborator_Id
                                + "|" + Order_Number
                                + "|" + ApplicantID.ToString()
                                + "|" + "NB"
                                + "|" + "ONLINE"
                                + "|" + "ONLINE";

            string EncryptedParam = AES128Bit.Encrypt(Requestparameter, EncodedKey, keysize);


            //Insert the initial payment data        



            
                objSbi.Action = "A";
                objSbi.MerchantOrderNo = Order_Number;
                objSbi.StudName = AppName;
                objSbi.Currency = Currency;
                objSbi.Country = Country;
                objSbi.UniqueRefNo = UniqueRefNo;
                objSbi.Amount = Convert.ToDecimal(Amount);
                strReturn = ccobjcafdeg.ManagePaymentSBIePayDeg(objSbi);
            

            if (strReturn == "1")
            {
            
                // requestparams.Value = EncryptedParam;    
                // RedirectAndPOST(this.Page, "https: //www.sbiepay.com/secure/AggregatorHostedListener", MID, EncryptedParam);
                RedirectAndPOST(this.Page, "https://www.sbiepay.com/secure/AggregatorHostedListener", MID, EncryptedParam);

            }


        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmationDeg");
        }
        finally
        {
            list = null; obj = null; objSbi = null;
        }
    }
    public static void RedirectAndPOST(Page page, string url, string MID, string EncryptedParam)
    {

        //Prepare the Posting form
        string strForm = PreparePOSTForm(url, MID, EncryptedParam);
        //Add a literal control the specified page holding 
        //the Post Form, this is to submit the Posting form with the request.
        page.Controls.Add(new LiteralControl(strForm));
    }
    public static string PreparePOSTForm(string url, string MID, string EncryptedParam)// post form
    {
        //Set a name for the form
        string formID = "PostForm";
        //Build the form using the specified data to be posted.
        StringBuilder strForm = new StringBuilder();

        strForm.Append("<form id=\"" + formID + "\" name=\"" +
                       formID + "\" action=\"" + url +
                       "\" method=\"POST\">");

        strForm.Append("<input type=\"hidden\" name=\"" + "EncryptTrans" +
                          "\" value=\"" + EncryptedParam + "\">");

        strForm.Append("<input type=\"hidden\" name=\"" + "merchIdVal" +
                         "\" value=\"" + MID + "\">");

        strForm.Append("</form>");
        //Build the JavaScript which will do the Posting operation.
        StringBuilder strScript = new StringBuilder();
        strScript.Append("<script language='javascript'>");
        strScript.Append("var v" + formID + " = document." +
                         formID + ";");
        strScript.Append("v" + formID + ".submit();");
        strScript.Append("</script>");
        //Return the form and the script concatenated.
        //(The order is important, Form then JavaScript)
        return strForm.ToString() + strScript.ToString();
    }


    #endregion
    #region SabPaisa
    private void SabPaisa()
    {

        SabPaisaIntegration objsb = new SabPaisaIntegration();
        string strRefID = Request.QueryString["AppId"].ToString();
        int intApplID = 0;
        string strApplName = "";
        string strPwd = "";
        string Emailid = string.Empty;
        string MobileNo = string.Empty;
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CafPaymentDeg cafobj = new CafPaymentDeg();
        try
        {

            CAFEntity_Deg obj = new CAFEntity_Deg();
           
                obj.Action = "P";
                obj.UID = Request.QueryString["AppId"].ToString();
                list = ccobjcafdeg.fillConfirmData(obj);
            

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

                if (list[0].strPassword != null)
                {
                    strPwd = list[0].strPassword.ToString();
                }
                if (list[0].vch_EMailID != null)
                {
                    Emailid = list[0].vch_EMailID.ToString();
                }
                if (list[0].vch_CorMobileNo != null)
                {
                    MobileNo = list[0].vch_CorMobileNo.ToString();
                }

            }
            //lblName.Text = strApplName.Trim();
            //lblAppId.Text = hdnAppId.Value;
            //************************************************************************


            // Payment process
            SabPaisaRequest sabPaisaMember1 = new SabPaisaRequest();
            sabPaisaMember1.spHitUrl = System.Configuration.ConfigurationManager.AppSettings["spHitUrl"].ToString(); //"http ://uatsp.sabpaisa.in/SabPaisa2/sabPaisaInit"; // use HitUrl,which is shared in mail

            sabPaisaMember1.clientCode = System.Configuration.ConfigurationManager.AppSettings["clientCode"].ToString();  // "BSEBC";//"SSNC2";   // use clientcode,which is shared in mail
            sabPaisaMember1.userName = System.Configuration.ConfigurationManager.AppSettings["userName"].ToString(); //"pooja.kushwaha_200";// "arvind_25"; // use clientcode,which is shared in mail
            sabPaisaMember1.pass = System.Configuration.ConfigurationManager.AppSettings["pass"].ToString(); //"BSEBC_SP200";//"LINKP_SP25";    // use clientcode,which is shared in mail

            sabPaisaMember1.authIV = System.Configuration.ConfigurationManager.AppSettings["authIV"].ToString(); // "ByIB6oS8U5w5EQra";// "diSpuqqOil2C5DpS";  // use AuthIV,which is shared in mail
            sabPaisaMember1.authKey = System.Configuration.ConfigurationManager.AppSettings["authKey"].ToString(); //"UK6LZlq2kJr15loP";//"qIuEl3bmjOR0diuG"; // use Auth Key,which is shared in mail

            sabPaisaMember1.add = ""; // Non Mandatory, so you pass NA
            sabPaisaMember1.clientTxnId = "2"+Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + strRefID;  //"txnLP1101";      // Client Txn ID must be unique for each request

            sabPaisaMember1.amt = System.Configuration.ConfigurationManager.AppSettings["FeeAmt"].ToString();   // Amnt field don't have any comma and special character, only numeric value.
            sabPaisaMember1.programId = "NA";		  // pass NA
            sabPaisaMember1.successUrl = System.Configuration.ConfigurationManager.AppSettings["successUrlDeg"].ToString(); //"http: //203.129.207.124/ofss_online/ONLINE_CAF_Degree/responsePaisa.aspx"; //"http: //192.168.43.115:8081/LinkPaisa/ClientResponse.jsp"; //Use you success Url where you can capture response
            sabPaisaMember1.failureUrl = System.Configuration.ConfigurationManager.AppSettings["failureUrlDeg"].ToString(); //"http: //203.129.207.124/ofss_online/ONLINE_CAF_Degree/responsePaisa.aspx";//"http: //192.168.43.115:8081/LinkPaisa/ClientResponse.jsp"; //Use you fail Url where you can capture response

            sabPaisaMember1.firstName = strApplName.Trim(); // End User first name
            sabPaisaMember1.lastName = "";	// End User last name
            sabPaisaMember1.email = Emailid;//"arvind.gangwar@srslive.in";	// End User Email ID
            sabPaisaMember1.contactNo = MobileNo;//"8010023689"; // End User Contact No

            string sFinalurl = "";
            sFinalurl = objsb.forwardToSabPaisa(sabPaisaMember1);
            //sFinalurl = "http://192.168.43.115:8081/SabPaisaOld/sabPaisaInit?query=N2cXTmoLz1onb32FlIM6E88LKGQHPHa7MZTYyHykrVOlcwzvWhlDy52qXvS2ptFPqWELMZrShiC7ya5upgj1RLmm1Egx2HR9wML67VWNQWR26hRScQOJWc8h4/Ua1Vl8SzUQAOLDs3QO3E5GBhpFRGQpxJuaW0I6nlbrYEHkep97zxn8AnKV6LsL6WXdDXTqTjQC0rJ7OzLFC3VtikwFDUdP6dyQOJR9QJdB/65dSDNG%2BYl6RyqKfERYpArbX/d7goI0LcePDpAe25H/UVURwbgw18SFnojipZEWA77M8UEwo%2BhYiuv%2BSDFkST6IShjbSPBdtxr7ymZUzRzXMBxHwleM8RfoKT4oBLEUNLh%2BPSpj13AH4Avn4/W3iSrOC3q/QIXcoFhF/BKOPyC3Knpn45ODcTKUQ5dJPwdt/yJiesYGyyNTS5gMjLjgXrMA8FT9&clientName=SSNC2&prodCode=LINKP";


            cafobj.Action = "A";
            cafobj.clientTxnId = sabPaisaMember1.clientTxnId;
            cafobj.vch_UniqueRefNo = strRefID;
            cafobj.int_ApplicantID = intApplID;

            
                strResult = ccobjcafdeg.ManagePayment(cafobj);
            

            Response.Redirect(sFinalurl, true);
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "CongratulationDeg");
        }
        finally
        {
            objsb = null;
        }
    }
    #endregion

    #region Sahaj
    private void Sahaj()
    {

        int intApplID = 0;
        string strApplName = "";
        string strPwd = "";
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {

          
                obj.Action = "P";
                obj.UID = Request.QueryString["AppId"].ToString();
                list = ccobjcafdeg.fillConfirmData(obj);
            

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
                if (list[0].strPassword != null)
                {
                    strPwd = list[0].strPassword.ToString();
                }
            }


            // First 11 charaters are GUID no 
            Session["Uniquerefiddeg"] = "3"+Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + Request.QueryString["AppId"].ToString();
            Session["StudNamedeg"] = strApplName;
            Session["StudIddeg"] = Request.QueryString["AppId"].ToString();
            Session["AppFeedeg"] = System.Configuration.ConfigurationManager.AppSettings["SahajFeeAmt"].ToString();
            Session["service_provider_iddeg"] = System.Configuration.ConfigurationManager.AppSettings["SahalClientCode"].ToString();

            //AppType 2 indicate payment initiate from Degree caf
            Session["AppTypedeg"] = "2";

            Response.Redirect("SahajDeg.aspx");

        }
        catch (Exception ex)
        {
            Util.LogError(ex, "CongratulationDeg");
        }
        finally
        {
            list = null; obj = null;
        }
    }
    #endregion

 

    protected void btnGateWay_Click(object sender, EventArgs e)
    {

        /*
          1 id represent the Sahaj
          2 id represent the SBIEPAY
          3 id represent the Sabpaisa
        
        */

        if (ddlGateWay.SelectedValue == "1")
        {
            Sahaj();
           
        }
        else if (ddlGateWay.SelectedValue == "2")
        {
            SBIePay();
            
        }  
        else if (ddlGateWay.SelectedValue == "3")
        {
            SabPaisa();
        }

    }
}
