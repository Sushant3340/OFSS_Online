/***************************************************************************************************************
 * File Name : FeesPayment.aspx
 * Class Name : StudentLogin_FeesPayment
 * Description : For the Student to complete their payment in case they have not done it earlier
 * [Modification History]
 * [Cr No.]     [Modified By]       [Modified On]       [Description]
 *  1           Ritika Lath         8th june 2018       Added method for all Payment Procedure
 ***************************************************************************************************************/

using System;
using System.Collections.Generic;
using System.Text;
using System.Web.UI;
using com.toml.dp.util;
using CommonModels;
using SabPaisaDotNetIntregreation;
using System.Configuration;
using System.Net;
using System.IO;

public partial class StudentLogin_FeesPayment : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["StudID"] == null)
        {
            Response.Redirect("StudentLogin_Deg.aspx");
        }
        if (!IsPostBack)
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
            FillApplicantDetails();
            FillDashboardDegree(Session["StudID"].ToString());
        }



        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        list = fillDateline();
        DateTime lastCompartmentadteDate = list[0].dtmTranDate;
        int compart = DateTime.Compare(lastCompartmentadteDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
        if (compart >= 0)
        {
            btnProceedToPay.Visible = true;
        }
        else
        {
            btnProceedToPay.Visible = false;
        }



        //DateTime lastAppDate = list[0].ToDate;

        //int result = DateTime.Compare(lastAppDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
        //if (result < 0)
        //{
        //    btnProceedToPay.Visible = false;
        //    if (list[0].SpecialCommunity == 1)
        //    {
        //         DateTime lastCompartmentadteDate = list[0].dtmTranDate;
        //        int compart = DateTime.Compare(lastCompartmentadteDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
        //        if (compart >= 0)
        //        {
        //            btnProceedToPay.Visible = true;
        //        }
        //        else
        //        {
        //            btnProceedToPay.Visible = false;
        //        }
        //    }
        //    else
        //    {
        //        btnProceedToPay.Visible = false;
        //    }
        //}
        //else {
        //    btnProceedToPay.Visible = true;
        //}




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
                lastDt = list[0].ToDate;

            
        }
        catch (Exception ex)
        {
        }
        return list;
    }
    #endregion
    protected void btnProceedToPay_Click(object sender, EventArgs e)
    {
        /*     2 id represent the Sabpaisa
                3 id represent the Sahaj
        */
        try
        {
            //int intPaymentGateway = Convert.ToInt32(ddlGateWay.SelectedValue);
            //if (intPaymentGateway == (int)enGateway.SubPaisa)
            //{
            //    SubPaisa();

            //}
            //else if (intPaymentGateway == (int)enGateway.Sahaj)
            //{
            //    Sahaj();
            //}
            //if (intPaymentGateway == (int)enGateway.SBI)
            //{
            //    SBIePay();
            //}
            if (Session["CSRFRandNum"].ToString() == hdnCSRFRandNum.Value)
            {

                string strUrl = "../ONLINE_CAF_Degree/CongratulationDeg.aspx?AppId=" + Session["StudID"].ToString();
                Response.Redirect(strUrl);
            }
            else
            {
                ClsExpData objExpData = new ClsExpData()
                {
                    strLoggedInUser = Session["UserId"].ToString()
                    ,
                    strPageName = Path.GetFileNameWithoutExtension(Page.AppRelativeVirtualPath)
                    ,
                    vchModuleName = "StudentLogin_FeesPayment_btnProceedToPay_Click_CSRF"
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
            Util.LogError(ex, "LoginPayment_Deg");
        }
        finally
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
        }
    }

    protected void ddlGateWay_SelectedIndexChanged(object sender, EventArgs e)
    {
        try
        {
            GetPaymentAmtByType();
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "LoginPayment_Deg");
        }
    }

    private void FillApplicantDetails()
    {
        try
        {
            
                List<CAFEntity_Deg> lstCafEntity = new List<CAFEntity_Deg>();
                CAFEntity_Deg objCAFEntitySearch = new CAFEntity_Deg();
                objCAFEntitySearch.UID = Session["StudID"].ToString();
                objCAFEntitySearch.Action = "p";
                lstCafEntity = ccobj.fillConfirmData(objCAFEntitySearch);

                if (lstCafEntity != null && lstCafEntity.Count >= 1)
                {

                    lblApplicantNo.Text = Session["StudID"].ToString();
                    if (lstCafEntity[0].ApplicantName != null)
                    {
                        lblApplicantName.Text = lstCafEntity[0].ApplicantName.ToString();
                    }
                    if (lstCafEntity[0].vch_EMailID != null)
                    {
                        lblEmailId.Text = lstCafEntity[0].vch_EMailID.ToString();
                    }
                    if (lstCafEntity[0].vch_CorMobileNo != null)
                    {
                        lblMobileNo.Text = lstCafEntity[0].vch_CorMobileNo.ToString();
                    }
                    //lblApplicationFee.Text = System.Configuration.ConfigurationManager.AppSettings["FeeAmt"].ToString();
                }
            
            GetPaymentAmtByType();
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "LoginPayment_Deg");
        }
    }

    private void GetPaymentAmtByType()
    {
        //int intGatewayType = Convert.ToInt32(ddlGateWay.SelectedValue);
        //if (intGatewayType == (int)enGateway.SBI)
        //{
        //    lblApplicationFee.Text = System.Configuration.ConfigurationManager.AppSettings["SBIFeeAmount"].ToString();
        //}
        //else if (intGatewayType == (int)enGateway.SubPaisa)
        //{
        //    lblApplicationFee.Text = System.Configuration.ConfigurationManager.AppSettings["FeeAmt"].ToString();
        //}
        //else if (intGatewayType == (int)enGateway.Sahaj)
        //{
        //    lblApplicationFee.Text = System.Configuration.ConfigurationManager.AppSettings["SahajFeeAmt"].ToString();
        //}
    }

    protected void FillDashboardDegree(string strId)
    {

        CAFEntity obj = new CAFEntity();
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity_Deg obj1 = new CAFEntity_Deg();
        // ================================
        try
        {
            string intAppId = strId.ToString();
           
                obj.Action = "P";
                obj.strId = intAppId;// Session["Uid"].ToString();
                list = ccobj.FillStudentDashBoardDegree(obj);
                if (list.Count > 0)
                {

                    if (list[0].vchTransDate.ToString() == "1/1/0001 12:00:00 AM")
                    {
                        lbldate.Text = "NA";
                    }
                    else
                    {
                        lbldate.Text = list[0].vchTransDate.ToString();
                    }
                    lbltransNo.Text = list[0].vchTransId;

                    lblPaymntStatus.Text = list[0].vchTranStatus;
                    lblApplctnFee.Text = list[0].vchTransFee.ToString();
                    lblgatewayname.Text = list[0].vchGateWayName;

                }
            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }

    //private void SubPaisa()
    //{
    //    SabPaisaIntegration objsb = new SabPaisaIntegration();
    //    string strRefID = lblApplicantNo.Text.Trim();
    //    int intApplID = 0;
    //    string strApplName = "";
    //    string strPwd = "";
    //    string Emailid = string.Empty;
    //    string MobileNo = string.Empty;
    //    List<CAFEntity_Deg> lstCafEntity = new List<CAFEntity_Deg>();
    //    CafPayment cafobj = new CafPayment();
    //    try
    //    {

    //        using (MngtStudentBusinessClient objClient = new MngtStudentBusinessClient())
    //        {
    //            CAFEntity_Deg objCAFEntitySearch = new CAFEntity_Deg();
    //            objCAFEntitySearch.UID = Session["StudID"].ToString();
    //            objCAFEntitySearch.Action = "p";
    //            lstCafEntity = objClient.fillConfirmData(objCAFEntitySearch);

    //            if (lstCafEntity != null && lstCafEntity.Count >= 1)
    //            {
    //                if (lstCafEntity[0].ApplicantID != null)
    //                {
    //                    intApplID = lstCafEntity[0].ApplicantID;
    //                }
    //                if (lstCafEntity[0].ApplicantName != null)
    //                {
    //                    strApplName = lstCafEntity[0].ApplicantName.ToString();
    //                }

    //                if (lstCafEntity[0].strPassword != null)
    //                {
    //                    strPwd = lstCafEntity[0].strPassword.ToString();
    //                }
    //                if (lstCafEntity[0].vch_EMailID != null)
    //                {
    //                    Emailid = lstCafEntity[0].vch_EMailID.ToString();
    //                }
    //                if (lstCafEntity[0].vch_CorMobileNo != null)
    //                {
    //                    MobileNo = lstCafEntity[0].vch_CorMobileNo.ToString();
    //                }

    //            }
    //        }

    //        // Payment process
    //        SabPaisaRequest sabPaisaMember1 = new SabPaisaRequest();

    //        //"http ://uatsp.sabpaisa.in/SabPaisa2/sabPaisaInit"; // use HitUrl,which is shared in mail
    //        sabPaisaMember1.spHitUrl = System.Configuration.ConfigurationManager.AppSettings["spHitUrl"].ToString();

    //        // "BSEBC";//"SSNC2";   // use clientcode,which is shared in mail
    //        sabPaisaMember1.clientCode = System.Configuration.ConfigurationManager.AppSettings["clientCode"].ToString();

    //        //"pooja.kushwaha_200";// "arvind_25"; // use clientcode,which is shared in mail
    //        sabPaisaMember1.userName = System.Configuration.ConfigurationManager.AppSettings["userName"].ToString();

    //        //"BSEBC_SP200";//"LINKP_SP25";    // use clientcode,which is shared in mail
    //        sabPaisaMember1.pass = System.Configuration.ConfigurationManager.AppSettings["pass"].ToString();

    //        // "ByIB6oS8U5w5EQra";// "diSpuqqOil2C5DpS";  // use AuthIV,which is shared in mail
    //        sabPaisaMember1.authIV = System.Configuration.ConfigurationManager.AppSettings["authIV"].ToString();

    //        //"UK6LZlq2kJr15loP";//"qIuEl3bmjOR0diuG"; // use Auth Key,which is shared in mail
    //        sabPaisaMember1.authKey = System.Configuration.ConfigurationManager.AppSettings["authKey"].ToString();

    //        // Non Mandatory, so you pass NA
    //        sabPaisaMember1.add = "";

    //        //"txnLP1101";      // Client Txn ID must be unique for each request
    //        // gatewayType + 10 charaters of GUID + UniqueRefNo
    //        sabPaisaMember1.clientTxnId = ((int)enGateway.SubPaisa).ToString() + Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + strRefID;

    //        // Amnt field don't have any comma and special character, only numeric value.
    //        sabPaisaMember1.amt = System.Configuration.ConfigurationManager.AppSettings["FeeAmt"].ToString();

    //        sabPaisaMember1.programId = "NA";		  // pass NA

    //        //"http: //203.129.207.124/ofss_online/ONLINE_CAF_Degree/responsePaisa.aspx"; 
    //        //"http: //192.168.43.115:8081/LinkPaisa/ClientResponse.jsp"; //Use you success Url where you can capture response
    //        sabPaisaMember1.successUrl = System.Configuration.ConfigurationManager.AppSettings["successUrlDeg"].ToString();

    //        //"http: //203.129.207.124/ofss_online/ONLINE_CAF_Degree/responsePaisa.aspx";
    //        //"http: //192.168.43.115:8081/LinkPaisa/ClientResponse.jsp"; //Use you fail Url where you can capture response
    //        sabPaisaMember1.failureUrl = System.Configuration.ConfigurationManager.AppSettings["failureUrlDeg"].ToString();

    //        sabPaisaMember1.firstName = strApplName.Trim(); // End User first name
    //        sabPaisaMember1.lastName = "";	// End User last name
    //        sabPaisaMember1.email = Emailid;//"arvind.gangwar@srslive.in";	// End User Email ID
    //        sabPaisaMember1.contactNo = MobileNo;//"8010023689"; // End User Contact No

    //        string sFinalurl = "";
    //        sFinalurl = objsb.forwardToSabPaisa(sabPaisaMember1);
    //        //sFinalurl = "http://192.168.43.115:8081/SabPaisaOld/sabPaisaInit?query=N2cXTmoLz1onb32FlIM6E88LKGQHPHa7MZTYyHykrVOlcwzvWhlDy52qXvS2ptFPqWELMZrShiC7ya5upgj1RLmm1Egx2HR9wML67VWNQWR26hRScQOJWc8h4/Ua1Vl8SzUQAOLDs3QO3E5GBhpFRGQpxJuaW0I6nlbrYEHkep97zxn8AnKV6LsL6WXdDXTqTjQC0rJ7OzLFC3VtikwFDUdP6dyQOJR9QJdB/65dSDNG%2BYl6RyqKfERYpArbX/d7goI0LcePDpAe25H/UVURwbgw18SFnojipZEWA77M8UEwo%2BhYiuv%2BSDFkST6IShjbSPBdtxr7ymZUzRzXMBxHwleM8RfoKT4oBLEUNLh%2BPSpj13AH4Avn4/W3iSrOC3q/QIXcoFhF/BKOPyC3Knpn45ODcTKUQ5dJPwdt/yJiesYGyyNTS5gMjLjgXrMA8FT9&clientName=SSNC2&prodCode=LINKP";


    //        cafobj.Action = "A";
    //        cafobj.clientTxnId = sabPaisaMember1.clientTxnId;
    //        cafobj.vch_UniqueRefNo = strRefID;
    //        cafobj.int_ApplicantID = intApplID;

    //        using (MngtStudentBusinessClient client = new MngtStudentBusinessClient())
    //        {
    //            string strResult = client.ManagePayment(cafobj);
    //        }

    //        // SendPaymentSMS(lblMobileNo.Text, cafobj.clientTxnId);
    //        // SendPaymentEmail(cafobj.clientTxnId.ToString());
    //        Response.Redirect(sFinalurl, true);
    //    }
    //    catch (Exception ex)
    //    {
    //        Util.LogError(ex, "LoginPayment_Deg");
    //    }
    //    finally
    //    {
    //        objsb = null;
    //    }
    //}

    //private void Sahaj()
    //{
    //    int intApplID = 0;
    //    string strApplName = "";
    //    string strPwd = "";
    //    List<CAFEntity_Deg> lstCafEntity = new List<CAFEntity_Deg>();
    //    CAFEntity_Deg obj = new CAFEntity_Deg();
    //    try
    //    {

    //        using (MngtStudentBusinessClient client = new MngtStudentBusinessClient())
    //        {
    //            obj.Action = "P";
    //            obj.UID = Session["StudID"].ToString();
    //            lstCafEntity = client.fillConfirmData(obj);
    //        }

    //        if (lstCafEntity != null && lstCafEntity.Count >= 1)
    //        {
    //            if (lstCafEntity[0].ApplicantID != null)
    //            {
    //                intApplID = lstCafEntity[0].ApplicantID;
    //            }
    //            if (lstCafEntity[0].ApplicantName != null)
    //            {
    //                strApplName = lstCafEntity[0].ApplicantName.ToString();
    //            }

    //            if (lstCafEntity[0].strPassword != null)
    //            {
    //                strPwd = lstCafEntity[0].strPassword.ToString();
    //            }

    //        }

    //        // gatewayType + 10 charaters of GUID + UniqueRefNo
    //        Session["Uniquerefiddeg"] = ((int)enGateway.Sahaj).ToString() + Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + Session["StudID"].ToString();
    //        Session["StudNamedeg"] = strApplName;
    //        Session["StudMob"] = lblMobileNo.Text;
    //        Session["StudIddeg"] = Session["StudID"].ToString();
    //        Session["AppFeedeg"] = System.Configuration.ConfigurationManager.AppSettings["SahajFeeAmt"].ToString();
    //        Session["service_provider_iddeg"] = System.Configuration.ConfigurationManager.AppSettings["SahalClientCode"].ToString();

    //        //AppType 2 indicate payment initiate from Degree caf
    //        Session["AppTypedeg"] = "2";

    //        //SendPaymentSMS(lblMobileNo.Text, Session["Uniquerefiddeg"].ToString());
    //        //SendPaymentEmail(Session["Uniquerefiddeg"].ToString());
    //        Response.Redirect("Sahaj_Deg.aspx");

    //    }
    //    catch (Exception ex)
    //    {
    //        Util.LogError(ex, "LoginPayment_Deg");
    //    }
    //    finally
    //    {
    //        lstCafEntity = null; obj = null;
    //    }
    //}

    //#region SBIePay

    //private void SBIePay()
    //{
    //    int intApplID = 0;
    //    string strApplName = "";
    //    string strReturn = "";
    //    List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
    //    CAFEntity_Deg obj = new CAFEntity_Deg();
    //    SBIePayDeg objSbi=new SBIePayDeg();
    //    try
    //    {

    //        using (MngtStudentBusinessClient client = new MngtStudentBusinessClient())
    //        {
    //            obj.Action = "P";
    //            obj.UID = Session["StudID"].ToString();
    //            list = client.fillConfirmData(obj);
    //        }

    //        if (list != null && list.Count >= 1)
    //        {
    //            if (list[0].ApplicantID != null)
    //            {
    //                intApplID = list[0].ApplicantID;
    //            }
    //            if (list[0].ApplicantName != null)
    //            {
    //                strApplName = list[0].ApplicantName.ToString();
    //            }
    //        }

    //        string UniqueRefNo =Session["StudID"].ToString();
    //        string PostingAmt = System.Configuration.ConfigurationManager.AppSettings["SBIFeeAmount"].ToString();
    //        string AppName = strApplName;
    //        // string MerOrderNo=Guid.NewGuid().ToString(); ;
    //        int ApplicantID = intApplID;

    //        string MID = System.Configuration.ConfigurationManager.AppSettings["SBIMID"].ToString(); //"1000003";
    //        string Collaborator_Id = "SBIEPAY";
    //        string Operating_Mode = "DOM";
    //        string Country = "IN";
    //        string Currency = "INR";
    //        string Amount = PostingAmt;

    //        // gatewayType + 10 charaters of GUID + UniqueRefNo
    //        string Order_Number =((int)enGateway.SBI).ToString() + Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + Session["StudID"].ToString();
    //        string Other_Details = ApplicantID + "^" + UniqueRefNo + "^" + AppName;

    //        //string Success_URL = "https: //test.sbiepay.com/secure/sucess.jsp";
    //        //string Success_URL = "http: //localhost/dhe/ONLINE_CAF/cafpaysucess.aspx";
    //        //string Failure_URL = "https: //test.sbiepay.com/secure/fail.jsp";
    //        //string Failure_URL = "http: //localhost/dhe/ONLINE_CAF/cafpayfail.aspx"; 

    //        string Success_URL = System.Configuration.ConfigurationManager.AppSettings["SBISuccessURLDeg"].ToString();
    //        string Failure_URL = System.Configuration.ConfigurationManager.AppSettings["SBIFailureURLDeg"].ToString();
    //        string EncodedKey = System.Configuration.ConfigurationManager.AppSettings["SBIEncodedKey"].ToString();         //"fBc5628ybRQf88f/aqDUOQ==";

    //        int keysize = 128;

    //        string Requestparameter = MID
    //                            + "|" + Operating_Mode
    //                            + "|" + Country
    //                            + "|" + Currency
    //                            + "|" + Amount
    //                            + "|" + Other_Details
    //                            + "|" + Success_URL
    //                            + "|" + Failure_URL
    //                            + "|" + Collaborator_Id
    //                            + "|" + Order_Number
    //                            + "|" + ApplicantID.ToString()
    //                            + "|" + "NB"
    //                            + "|" + "ONLINE"
    //                            + "|" + "ONLINE";

    //        string EncryptedParam = AES128Bit.Encrypt(Requestparameter, EncodedKey, keysize);


    //        //Insert the initial payment data        
    //        using (MngtStudentBusinessClient client = new MngtStudentBusinessClient())
    //        {
    //            objSbi.Action = "A";
    //            objSbi.MerchantOrderNo = Order_Number;
    //            objSbi.StudName = AppName;
    //            objSbi.Currency = Currency;
    //            objSbi.Country = Country;
    //            objSbi.UniqueRefNo = UniqueRefNo;
    //            objSbi.Amount = Convert.ToDecimal(Amount);
    //            strReturn = client.ManagePaymentSBIePayDeg(objSbi);
    //        }

    //        if (strReturn == "1")
    //        {
    //            // requestparams.Value = EncryptedParam;    
    //            // RedirectAndPOST(this.Page, "https: //www.sbiepay.com/secure/AggregatorHostedListener", MID, EncryptedParam);
    //            //SendPaymentSMS(lblMobileNo.Text, Order_Number);
    //            //SendPaymentEmail(Order_Number);
    //            RedirectAndPOST(this.Page, "https://test.sbiepay.com/secure/AggregatorHostedListener", MID, EncryptedParam);

    //        }


    //    }
    //    catch (Exception ex)
    //    {
    //        Util.LogError(ex, "LoginPayment_Deg");
    //    }
    //    finally
    //    {
    //        list = null; obj = null; objSbi = null;
    //    }
    //}

    //public static void RedirectAndPOST(Page page, string url, string MID, string EncryptedParam)
    //{

    //    //Prepare the Posting form
    //    string strForm = PreparePOSTForm(url, MID, EncryptedParam);
    //    //Add a literal control the specified page holding 
    //    //the Post Form, this is to submit the Posting form with the request.
    //    page.Controls.Add(new LiteralControl(strForm));
    //}

    //public static string PreparePOSTForm(string url, string MID, string EncryptedParam)// post form
    //{
    //    //Set a name for the form
    //    string formID = "PostForm";
    //    //Build the form using the specified data to be posted.
    //    StringBuilder strForm = new StringBuilder();

    //    strForm.Append("<form id=\"" + formID + "\" name=\"" +
    //                   formID + "\" action=\"" + url +
    //                   "\" method=\"POST\">");

    //    strForm.Append("<input type=\"hidden\" name=\"" + "EncryptTrans" +
    //                      "\" value=\"" + EncryptedParam + "\">");

    //    strForm.Append("<input type=\"hidden\" name=\"" + "merchIdVal" +
    //                     "\" value=\"" + MID + "\">");

    //    strForm.Append("</form>");
    //    //Build the JavaScript which will do the Posting operation.
    //    StringBuilder strScript = new StringBuilder();
    //    strScript.Append("<script language='javascript'>");
    //    strScript.Append("var v" + formID + " = document." +
    //                     formID + ";");
    //    strScript.Append("v" + formID + ".submit();");
    //    strScript.Append("</script>");
    //    //Return the form and the script concatenated.
    //    //(The order is important, Form then JavaScript)
    //    return strForm.ToString() + strScript.ToString();
    //}
    //#endregion
}