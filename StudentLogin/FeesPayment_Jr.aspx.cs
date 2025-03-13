/***************************************************************************************************************
 * File Name : FeesPayment_Jr.aspx
 * Class Name : StudentLogin_FeesPayment_Jr
 * Description : For the Student to complete their payment in case they have not done it earlier
 * Created By : Ritika lath
 * Created On : 8th June 2018
 * [Modification History]
 * [Cr No.]     [Modified By]       [Modified On]       [Description]
 ***************************************************************************************************************/

#region namespace
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;
using com.toml.dp.util;
using CommonModels;
using com.awl.MerchantToolKit;
using System.Collections.Specialized;
using System.Security.Cryptography;
using CCA.Util;
#endregion

public partial class StudentLogin_FeesPayment_Jr : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    string strMsgTitle = "OFSS Online, Govt. of Bihar";
   
    protected void Page_Load(object sender, EventArgs e)
    {

        if (Session["StudID"] == null)
        {
            Response.Redirect("StudentLogin.aspx", false);
        }
        else
        {
            if (Request.QueryString["sbi_Jun"] != null)
            {
                try
                {
                    ShowSBIPaymentStatus();
                }
                catch (Exception ex)
                {
                    Util.LogErrorSBI_sabPaisa(ex, "FeesPayment_Jr", Session["StudID"].ToString()) ;
                }
            }

            if (Request.QueryString["PNB_Jun"] != null)
            {
                try
                {
                    ShowPNBPaymentStatus();
                }
                catch (Exception ex)
                {
                    Util.LogErrorSBI_sabPaisa(ex, "FeesPayment_Jr", Session["StudID"].ToString());
                }
            }

            if (!IsPostBack)
            {
                hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();

                List<CAFEntity> listDetails = new List<CAFEntity>();
                listDetails = fillDateline();
                if (listDetails.Count > 0)
                {
                    DateTime lastAppDate = listDetails[0].ToDate;
                    DateTime dtmFromDate = listDetails[0].FromDate;
                    int intPaymentStatus = listDetails[0].intPaymentStatus;
                    int FromDate = DateTime.Compare(DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59), dtmFromDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                    int ToDate = DateTime.Compare(lastAppDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));

                    if (ToDate >= 0 && FromDate >= 0)
                    {
                        FillDashboardIntermediate(Session["StudID"].ToString());
                        divDateLine.Visible = false;
                        divForm.Visible = true;
                        if (intPaymentStatus == 0)
                        {
                            btnProceedToPay.Visible = true;
                        }
                        else
                        {
                            btnProceedToPay.Visible = false;
                        }
                    }
                    else
                    {
                        if (FromDate < 0)
                        {
                            litMessage.Text = "Dateline for CAF Fee Payment is not started yet...";
                        }
                        if (ToDate < 0)
                        {
                            litMessage.Text = "Dateline for CAF Fee Payment is completed...";
                        }
                        divDateLine.Visible = true;
                        divForm.Visible = false;
                    }
                }
                else
                {
                    litMessage.Text = "Dateline for CAF Fee Payment is not started yet...";
                    divDateLine.Visible = true;
                    divForm.Visible = false;
                }

                #region Commented necessar code
                //DateTime lastAppDate = listDetails[0].ToDate;

                //int result = DateTime.Compare(lastAppDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                //if (result < 0)
                //{
                //    btnProceedToPay.Visible = false;
                //    if (listDetails[0].StreID == 1)  //-----------New Apply student
                //    {
                //        DateTime lastCompartmentadteDate = listDetails[0].dtm_Applied;
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
                //else
                //{
                //    btnProceedToPay.Visible = true;
                //}



                //if ((DateTime.Now >= DateTime.Parse("31-July-2018 11:59:59 PM")))
                //{
                //    divDateLine.Visible = true;
                //    divForm.Visible = false;
                //}
                //else
                //{
                //    divDateLine.Visible = false;
                //    divForm.Visible = true;
                //    FillApplicantDetails();
                //    FillDashboardIntermediate(Session["StudID"].ToString());
                //}

                #endregion


            }
        }
    }

    #region FillDashboard
    protected void FillDashboardIntermediate(string strId)
    {

        CAFEntity obj = new CAFEntity();
        List<CafDashboard> list = new List<CafDashboard>();
        // ================================
        try
        {
            string intAppId = strId.ToString();
            
                obj.Action = "P";
                obj.strId = intAppId;// Session["Uid"].ToString();
                list = ccobj.FillStudentDashboardDataset(obj);
                if (list.Count > 0)
                {
                    lblApplicantName.Text = list[0].vch_ApplicantName;
                    lblApplicantNo.Text = intAppId;
                    lblMobileNo.Text = list[0].vch_CorMobileNo;
                    lblEmailId.Text = list[0].vch_EMailID;

                    grdPayment.DataSource = list[0].cafDashboardPayments;
                    grdPayment.DataBind();
                }
            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }
    #endregion

    protected void btnPaymentStatus_Click(object sender, EventArgs e)
    {
        try
        {
            CAFEntity obj = new CAFEntity();
            List<CAFEntity> list = new List<CAFEntity>();
            if (Session["CSRFRandNum"].ToString() == hdnCSRFRandNum.Value)
            {
                string intAppId = Session["StudID"].ToString();
               
                    obj.Action = "Ps";
                    obj.strId = intAppId;// Session["Uid"].ToString();
                    list = ccobj.FillStudentDashBoardJunior(obj);
                    if (list.Count > 0)
                    {
                        grdPayment.DataSource = list;
                        grdPayment.DataBind();
                    }
                
                //int intPaymentTYpe = 0;
                //intPaymentTYpe = Convert.ToInt32(lbltransNo.Text.Substring(0, 1));
                //string strRetValue = string.Empty;
                //string strGateWayStatus = string.Empty;
                //if (intPaymentTYpe == (int)enGateway.SubPaisa)
                //{
                //    SubPaisaPaymentStatus();
                //}
                //else if (intPaymentTYpe == (int)enGateway.Sahaj)
                //{
                //    SahajPaymentStatus();
                //}
                //else if (intPaymentTYpe == (int)enGateway.SBI)
                //{
                //    SBIPaymentStatus();
                //}
            }
            else
            {
                ClsExpData objExpData = new ClsExpData()
                {
                    strLoggedInUser = Session["UserId"].ToString()
                    ,
                    strPageName = Path.GetFileNameWithoutExtension(Page.AppRelativeVirtualPath)
                    ,
                    vchModuleName = "StudentLogin_FeesPaymentJr_btnPaymentStatus_Click_CSRF"
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
            Util.LogErrorSBI_sabPaisa(ex, "FeesPayment_Jr", Session["StudID"].ToString());
        }
        finally
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
            Context.ApplicationInstance.CompleteRequest();
        }
    }

    protected void btnProceedToPay_Click(object sender, EventArgs e)
    {
        if (Session["CSRFRandNum"] != null && hdnCSRFRandNum.Value != "")
        {
            string strUrl = "";
            int IsException = 0;
            try
            {

                if (Session["CSRFRandNum"].ToString() == hdnCSRFRandNum.Value)
                {
                    strUrl = "../ONLINE_CAF/CongratulationJr.aspx?AppId=" + Session["StudID"].ToString();

                }
                else
                {
                    ClsExpData objExpData = new ClsExpData()
                    {
                        strLoggedInUser = Session["UserId"].ToString()
                        ,
                        strPageName = Path.GetFileNameWithoutExtension(Page.AppRelativeVirtualPath)
                        ,
                        vchModuleName = "StudentLogin_FeesPaymentJr_btnProceedToPay_Click_CSRF"
                        ,
                        strIpAddress = Request.ServerVariables["REMOTE_ADDR"].ToString()
                    };

                    Util.CSRFSecurityLog_Add(objExpData);
                }

            }
            catch (Exception ex)
            {
                IsException = 1;
                Util.LogErrorSBI_sabPaisa(ex, "FeesPayment_Jr", Session["StudID"].ToString());
            }
            finally
            {
                hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();

            }
            if (IsException == 0)
            {
                ScriptManager.RegisterStartupScript(btnProceedToPay, this.GetType(), "", "<script>window.open(' " + strUrl + " ','','');</script>", false);
                //Response.Redirect(strUrl, false);
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
            obj.Action = "P";
            obj.vch_UniqueRefNo = Session["StudID"].ToString();

            
                list = ccobj.FillCAF(obj);


            
        }
        catch (Exception ex)
        {
        }
        return list;
    }
    #endregion

    private void FillApplicantDetails()
    {
        try
        {
            
                List<CAFEntity> lstCafEntity = new List<CAFEntity>();
                CAFEntity objCAFEntitySearch = new CAFEntity();
                objCAFEntitySearch.UID = Session["StudID"].ToString();
                objCAFEntitySearch.Action = "p";
                lstCafEntity = ccobj.fillconfirmJuniorStream(objCAFEntitySearch);

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
            

        }
        catch (Exception ex)
        {
            Util.LogErrorSBI_sabPaisa(ex, "LoginPayment_Jr", Session["StudID"].ToString());
        }

    }

    #region "HDFC Payment status check"

    private void HDFCPaymentStatus(string transactionNo, string ccavenueRefNo)
    {

        HDFCEntityJr objHDFC = new HDFCEntityJr();
        String message = "";
        // if (!string.IsNullOrEmpty(transactionNo) && !string.IsNullOrEmpty(ccavenueRefNo))
        if (!string.IsNullOrEmpty(transactionNo))
        {

            try
            {


                string HDFCAccesscode = System.Configuration.ConfigurationManager.AppSettings["HDFCAccesscode"].ToString();
                string HDFCEnckey = System.Configuration.ConfigurationManager.AppSettings["HDFCEnckey"].ToString();
                string HDFCEnquiryUrl = System.Configuration.ConfigurationManager.AppSettings["HDFCEnquiryUrl"].ToString();
                string ccaRequest = ccavenueRefNo + "|" + transactionNo + "|";

                CCACrypto ccaCrypto = new CCACrypto();
                string strEncRequest = ccaCrypto.Encrypt(ccaRequest, HDFCEnckey);
                string authQueryUrlParam = "enc_request=" + strEncRequest + "&access_code=" + HDFCAccesscode + "&command=orderStatusTracker&request_type=STRING&response_type=STRING";
                message = postPaymentRequestToGateway(HDFCEnquiryUrl, authQueryUrlParam);

                NameValueCollection param = getResponseMap(message);
                String status = "";
                String encRes = "";
                if (param != null && param.Count == 2)
                {
                    for (int i = 0; i < param.Count; i++)
                    {
                        if ("status".Equals(param.Keys[i]))
                        {
                            status = param[i];
                        }
                        if ("enc_response".Equals(param.Keys[i]))
                        {
                            encRes = param[i];

                        }
                    }

                    String ResString = ccaCrypto.Decrypt(encRes, HDFCEnckey);
                    string[] finalResponse = ResString.Split('|');


                    if (!"".Equals(status) && status.Equals("0"))
                    {
                        if (!Convert.ToString(finalResponse[0]).Equals("1"))
                        {

                            //Success
                            if (!string.IsNullOrEmpty(Convert.ToString(finalResponse[1])))
                            {
                                if (string.Equals(finalResponse[1], "Shipped", StringComparison.OrdinalIgnoreCase))
                                {
                                    objHDFC.Status = "SUCCESS";
                                    objHDFC.bank_ref_no = finalResponse[3];
                                }
                                else
                                {
                                    objHDFC.Status = finalResponse[1];
                                    objHDFC.strFailureMsg = finalResponse[4];
                                }
                            }
                            if (!string.IsNullOrEmpty(Convert.ToString(finalResponse[2])))
                            {
                                objHDFC.HDFCReferenceID = finalResponse[2];
                            }
                            else
                            {
                                objHDFC.HDFCReferenceID = "";
                            }
                            if (!string.IsNullOrEmpty(Convert.ToString(finalResponse[33])))
                            {
                                objHDFC.TransactionDate = finalResponse[33];
                            }
                            else
                            {
                                objHDFC.TransactionDate = string.Empty;
                            }
                            if (!string.IsNullOrEmpty(Convert.ToString(finalResponse[24])))
                            {
                                objHDFC.payment_mode = finalResponse[24];
                            }
                            else
                            {
                                objHDFC.payment_mode = string.Empty;
                            }
                            if (!string.IsNullOrEmpty(Convert.ToString(finalResponse[5])))
                            {
                                objHDFC.billing_name = finalResponse[5];
                            }
                            else
                            {
                                objHDFC.billing_name = string.Empty;
                            }

                            if (!string.IsNullOrEmpty(Convert.ToString(finalResponse[37])))
                            {
                                objHDFC.TrnAmt = Convert.ToDecimal(finalResponse[37]);
                            }
                            else
                            {
                                objHDFC.TrnAmt = Convert.ToDecimal(0.00);
                            }
                            if (!string.IsNullOrEmpty(Convert.ToString(finalResponse[22])))
                            {
                                objHDFC.OrderId = finalResponse[22];
                            }
                            else
                            {
                                objHDFC.OrderId = transactionNo;
                            }


                            objHDFC.PlainText = authQueryUrlParam;
                            objHDFC.resultData = message;
                            objHDFC.Action = "R";
                            
                                string strReturn = ccobj.ManagePaymentHDFC_JR(objHDFC);

                            

                            FillDashboardIntermediate(Session["StudID"].ToString());
                        }
                        else
                        {
                            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnPaymentStatus','<strong>" + finalResponse[1] + "</strong>','" + strMsgTitle + "');", true);
                        }

                    }
                    else if (!"".Equals(status) && status.Equals("1"))
                    {
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnPaymentStatus','<strong>" + finalResponse[2] + "</strong>','" + strMsgTitle + "');", true);


                    }


                }


            }
            catch (Exception ex)
            {
                Util.LogErrorSBI_sabPaisa(ex, "StudLogin_HDFCUpdStatus", transactionNo + "::" + message);

            }
        }
        else
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnPaymentStatus','<strong>Invalid Transaction</strong>','" + strMsgTitle + "');", true);
        }
    }

    private string postPaymentRequestToGateway(String queryUrl, String urlParam)
    {

        String message = "";
        try
        {
            StreamWriter myWriter = null;// it will open a http connection with provided url
            WebRequest objRequest = WebRequest.Create(queryUrl);//send data using objxmlhttp object
            objRequest.Method = "POST";
            //objRequest.ContentLength = TranRequest.Length;
            objRequest.ContentType = "application/x-www-form-urlencoded";//to set content type
            myWriter = new System.IO.StreamWriter(objRequest.GetRequestStream());
            myWriter.Write(urlParam);//send data
            myWriter.Close();//closed the myWriter object

            // Getting Response
            System.Net.HttpWebResponse objResponse = (System.Net.HttpWebResponse)objRequest.GetResponse();//receive the responce from objxmlhttp object 
            using (System.IO.StreamReader sr = new System.IO.StreamReader(objResponse.GetResponseStream()))
            {
                message = sr.ReadToEnd();
                //Response.Write(message);
            }
        }
        catch (Exception exception)
        {
            Util.LogErrorSBI_sabPaisa(exception, "StudLogin_postPaymentRequestToGateway", Session["StudID"].ToString());
    
        }
        return message;

    }

    private NameValueCollection getResponseMap(String message)
    {
        NameValueCollection Params = new NameValueCollection();
        if (message != null || !"".Equals(message))
        {
            string[] segments = message.Split('&');
            foreach (string seg in segments)
            {
                string[] parts = seg.Split('=');
                string Value = "";
                if (parts.Length > 0)
                {
                    string Key = parts[0].Trim();
                    if (parts.Length > 1)
                    {
                        Value = parts[1].Trim();
                    }
                    else
                    {
                        Value = "";
                    }
                    Params.Add(Key, Value);
                }
            }
        }
        return Params;
    }
    #endregion

    #region "PNB Payment gateway"

    private void PNBPaymentStatus(string transactionNo, string PNBTRansRefNo)
    {
        Boolean IsException = false;
        if (!string.IsNullOrEmpty(transactionNo) && !string.IsNullOrEmpty(PNBTRansRefNo))
        {

            try
            {
                ResMsgDTO objResMsgDTO = new ResMsgDTO();

                string Mid = System.Configuration.ConfigurationManager.AppSettings["PNBMID"].ToString();
                string Enckey = System.Configuration.ConfigurationManager.AppSettings["PNBEncodedKey"].ToString();

                com.awl.MerchantToolKit.AWLMEAPI objawlmerchantkit = new com.awl.MerchantToolKit.AWLMEAPI();
                objResMsgDTO = objawlmerchantkit.getTransactionStatus(Mid, transactionNo, PNBTRansRefNo, Enckey);
                Session["response"] = objResMsgDTO;
            }
            catch (Exception ex)
            {
                IsException = true;
                Util.LogErrorSBI_sabPaisa(ex, "StudLogin_PNBUpdStatus", Session["StudID"].ToString());

            }
            if (!IsException)
            {
                Response.Redirect("PNBQueryStatusRtn_Jr.aspx", false);
            }

        }
        else
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnPaymentStatus','<strong>Invalid Transaction</strong>','" + strMsgTitle + "');", true);
        }
    }
    #endregion

    #region SBI Functions
    private void SBIPaymentStatus(string transactionNo)
    {
        //Atrn|MerchantId|MerchantOrderNo|ReturnUrl
        //|1000003|12765542|https://merchantdomainname/querySuccess.jsp
        //merchantId present in web.config|client transactionId|middle landing page 
        string strMerchantId = System.Configuration.ConfigurationManager.AppSettings["SBIMID"];
        StringBuilder strSBIParam = new StringBuilder();
        strSBIParam.Append("|");//as we donot have update status we donot have the atrn no
        strSBIParam.Append(strMerchantId);
        strSBIParam.Append("|");
        strSBIParam.Append(transactionNo);
        strSBIParam.Append("|");
        strSBIParam.Append("https://online.ofssbihar.in/StudentLogin/SBIReturnDetails.aspx");

        string EncodedKey = System.Configuration.ConfigurationManager.AppSettings["SBIEncodedKey"].ToString();         //"fBc5628ybRQf88f/aqDUOQ==";
        int keysize = 128;
        string EncryptedParam = AES128Bit.Encrypt(strSBIParam.ToString(), EncodedKey, keysize);

        string aggIdVal = "SBIEPAY";
        //RedirectAndPOST(this.Page, "https://www.sbiepay.com/secure/AggMerchantStatusQueryAction", strMerchantId, EncryptedParam, aggIdVal)
        RedirectAndPOST(this.Page, "https://www.sbiepay.sbi/secure/AggMerchantStatusQueryAction", strMerchantId, EncryptedParam, aggIdVal);
    }

    private void ShowSBIPaymentStatus()
    {
        int sbiStatus = Convert.ToInt32(Request.QueryString["sbi_Jun"]);
        if (sbiStatus == 1 || sbiStatus == 2)
        {
            FillDashboardIntermediate(Session["StudID"].ToString());
        }
        else
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnPaymentStatus','<strong>An error occured. Please try again after sometime</strong>','" + strMsgTitle + "');", true);
        }
    }

    private void ShowPNBPaymentStatus()
    {
        int sbiStatus = Convert.ToInt32(Request.QueryString["PNB_Jun"]);
        if (sbiStatus == 1 || sbiStatus == 2)
        {
            FillDashboardIntermediate(Session["StudID"].ToString());
        }
        else
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnPaymentStatus','<strong>An error occured. Please try again after sometime</strong>','" + strMsgTitle + "');", true);
        }
    }

    public static void RedirectAndPOST(Page page, string url, string MID, string EncryptedParam, string aggIdVal)
    {

        //Prepare the Posting form
        string strForm = PreparePOSTForm(url, MID, EncryptedParam, aggIdVal);
        //Add a literal control the specified page holding 
        //the Post Form, this is to submit the Posting form with the request.
        page.Controls.Add(new LiteralControl(strForm));
    }

    public static string PreparePOSTForm(string url, string MID, string EncryptedParam, string aggIdVal)// post form
    {
        //Set a name for the form
        string formID = "PostForm";
        //Build the form using the specified data to be posted.
        StringBuilder strForm = new StringBuilder();

        strForm.Append("<form id=\"" + formID + "\" name=\"" +
                       formID + "\" action=\"" + url +
                       "\" method=\"POST\">");

        strForm.Append("<input type=\"hidden\" name=\"" + "encryptQuery" +
                          "\" value=\"" + EncryptedParam + "\">");

        strForm.Append("<input type=\"hidden\" name=\"" + "merchIdVal" +
                         "\" value=\"" + MID + "\">");

        strForm.Append("<input type=\"hidden\" name=\"" + "aggIdVal" +
                         "\" value=\"" + aggIdVal + "\">");

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

    #region "Axis Payment Gateway"
    private void AxisPaymentStatus(string transactionNo)
    {
        //1. URL
        string TranUrl = System.Configuration.ConfigurationManager.AppSettings["AxisEnquiryUrl"].ToString(); //In production kindly update the url as per production

        //2. method to generate Checksum value. //CID + RID + CRN  + AMT + "axis";

        String strCID = string.Empty;
        String strRID = string.Empty;
        String strCRN = string.Empty;
        String strAmt = string.Empty;
        String key = string.Empty;
        String strVER = string.Empty;
        String strTYP = string.Empty;
       

        strCID = System.Configuration.ConfigurationManager.AppSettings["AxisCID"].ToString();
        strRID = transactionNo;
        strCRN = transactionNo;
        key = System.Configuration.ConfigurationManager.AppSettings["AxisKey"].ToString(); //UAT key
        strVER = System.Configuration.ConfigurationManager.AppSettings["AxisGAtewayVER"].ToString();
        strTYP = System.Configuration.ConfigurationManager.AppSettings["AxisTYPJr"].ToString();


        string StrCheckSumString = strCID + strRID + strCRN + key;


        string Checksum = sha256_hash(StrCheckSumString);


        string PlainText = "CID=" + strCID + "&RID=" + strRID + "&VER=" + strVER + "&TYP=" + strTYP + "&CRN=" + strCRN + "&CKS=" + Checksum;


        string encryptedstring = Encrypt(PlainText, System.Configuration.ConfigurationManager.AppSettings["AxisEncDecKey"].ToString());

 
        //Correct Value with checksum.
        //string encryptedstring = "VNr13VWGrjwB8PQG1DhFxLbqcYbyLkPd8QBbvtVv2hmSamkVvVMGf594mWXHVbFc4JRmWmqUlk8YLHO7Oe84zDk2tbnKLnFWBNrG3cENgSb47yBP1lclKjWOneOtU61T35EjX7lOQJzrWmnly9KZWQq78lGlKavaxkdmXpD3gL8g9iM/YTtl51B8IB4iU4I4zb7jKvSFBdMBZYjFqBDaMBwz8VDepxyBHH4NpemfOn1vyTVMHp7Y3V/ar0Lue8XLvOtx1CsYulC/zqCOQuqMaNo63fz5SsCstrQpGfxXIJkc6oenjsIARginBJjxxu5LfoEfV3odAM405n2J7XMAOw==";

        NameValueCollection data = new NameValueCollection();
        data.Add("i", encryptedstring);



        
            AxisJrEntity objAxis = new AxisJrEntity();
            objAxis.Action = "E";
            objAxis.OrderId = transactionNo;
            objAxis.EncryptValue = encryptedstring;
            objAxis.PlainText = PlainText;
            string strReturn = ccobj.ManagePaymentAxis_JR(objAxis);
        

        string strForm=AxisRedirectAndPOST(this.Page, TranUrl, data, transactionNo);
        updatePaymentStatus(strForm, System.Configuration.ConfigurationManager.AppSettings["AxisEncDecKey"].ToString());
    }

    private string AxisRedirectAndPOST(Page page, string TranUrl, NameValueCollection data ,string transactionNo)
    {
        //Prepare the Posting form
        string strForm = PrepareAxisPOSTForm(TranUrl, data);
        //Add a literal control the specified page holding the Post Form, this is to submit the Posting form with the request.
        page.Controls.Add(new LiteralControl(strForm));
        return strForm;

    }
    private String PrepareAxisPOSTForm(string url, NameValueCollection data)
    {
        try
        {
            //Set a name for the form
            //string strForm = GetWebServiceResponse(data, url, "", 1050, "POST", "", "application/x-www-form-urlencoded");
            //Proxy and port use as per your company policy
            string strForm = GetWebServiceResponse(data, url, "", 1050, "POST", "", "application/x-www-form-urlencoded");
            return strForm.ToString();

        }
        catch (Exception)
        {

            throw;
        }
    }
    public string GetWebServiceResponse(NameValueCollection reqdata, string Url, string Proxy, int Port, string Method, string SOAPAction, string ContentType)
    {
        string Response = string.Empty;
        try
        {
            using (WebClient client = new WebClient())
            {
                //"https://www.payism.biz/FundLoad/AxisService.asmx/ValidateRequest"
                ServicePointManager.ServerCertificateValidationCallback = AcceptAllCertifications;
                ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
                ////Proxy and port use as per your company policy
                if (Proxy != "")
                {
                    WebProxy wp = new WebProxy(Proxy, Port);
                    client.Proxy = wp;
                }

                byte[] responsebytes = client.UploadValues(Url, "POST", reqdata);
                Response = Encoding.UTF8.GetString(responsebytes);

            }
        }
        catch (WebException webex)
        {
            WebResponse errResp = webex.Response;
            using (Stream respStream = errResp.GetResponseStream())
            {
                StreamReader reader = new StreamReader(respStream);
                Response = reader.ReadToEnd();
               
                //  Response = string.Empty;
            }
        }
        return Response;
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
        kgen.Key = keyArray;
        ICryptoTransform cTransform = kgen.CreateEncryptor();
        byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
        return Convert.ToBase64String(resultArray, 0, resultArray.Length);
    }
    public void updatePaymentStatus(string strForm, string Decryptkey)
    {
        string strClientId = string.Empty;
        try
        {

            if (strForm.Contains("error=421") || strForm.Contains("error=422") || strForm.Contains("error=423a") || strForm.Contains("error=423b") || strForm.Contains("error=424") || strForm.Contains("error=424a") || strForm.Contains("error=425") || strForm.Contains("error=426") || strForm.Contains("error=427") || strForm.Contains("error=500"))
            {

                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnPaymentStatus','<strong>An error occured. Please try again after sometime</strong>','" + strMsgTitle + "');", true);
            }
            else
            {

                byte[] keyArray = UTF8Encoding.UTF8.GetBytes(Decryptkey);

                byte[] toEncryptArray = Convert.FromBase64String(strForm.Replace(" ", "+"));
                RijndaelManaged rDel = new RijndaelManaged();
                rDel.Key = keyArray;
                rDel.Mode = CipherMode.ECB;
               
                ICryptoTransform cTransform = rDel.CreateDecryptor();
                byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
                string resultData = UTF8Encoding.UTF8.GetString(resultArray).ToString();

                string[] encarray;
                encarray = resultData.Split('&');


                ///--code to get individual data
                string[] outputResult;
                
                outputResult = encarray[5].Split('=');
                string bankTransId = outputResult[1].ToString();

                outputResult = encarray[8].Split('=');
                string StatusCode = outputResult[1].ToString();

                outputResult = encarray[9].Split('=');
                string remark = outputResult[1].ToString();

                outputResult = encarray[10].Split('=');
                string PGTrnRefid = outputResult[1].ToString();

                outputResult = encarray[11].Split('=');
                string tranDate = outputResult[1].ToString();

                outputResult = encarray[12].Split('=');
                string PaymentMode = outputResult[1].ToString();

                outputResult = encarray[1].Split('=');
                string clienttranId = outputResult[1].ToString();

                outputResult = encarray[7].Split('=');
                string amount = outputResult[1].ToString();

                string strStatus = string.Empty;
                string strPaymentMode = string.Empty;
                if (StatusCode == "000")
                {
                    strStatus = "Success";
                }
                else if (StatusCode == "101")
                {
                    strStatus = "Pending";
                }
                else
                {
                    strStatus = "Fail";
                }

                if (PaymentMode == "AIB")
                {
                    strPaymentMode = "Axis Internet Banking";
                }
                else if (PaymentMode == "CD")
                {
                    strPaymentMode = "Credit Card/Debit Card";
                }
                else if (PaymentMode == "NR")
                {
                    strPaymentMode = "NEFT/RTGS";
                }
                else if (PaymentMode == "OIB")
                {
                    strPaymentMode = "Other Internet Banking";
                }
                else
                {
                    strPaymentMode = "";
                }

                AxisJrEntity objAxis = new AxisJrEntity();
                strClientId = clienttranId;
                objAxis.OrderId = clienttranId;
                objAxis.AxisReferenceID = PGTrnRefid;
                objAxis.Status = strStatus;
                objAxis.StatusCode = StatusCode;
              //  objAxis.TrnAmt = amount == "" ? Convert.ToDecimal(0.00) : Convert.ToDecimal(amount);
                if (!string.IsNullOrEmpty(Convert.ToString(amount)))
                {
                    objAxis.TrnAmt = Convert.ToDecimal(amount);
                }
                else
                {
                    objAxis.TrnAmt = Convert.ToDecimal(0.00);
                }
                objAxis.TransactionDate = tranDate;
                objAxis.TrnRemarks = remark;
                objAxis.PaymentMode = PaymentMode;
                objAxis.PaymentModeDesc = strPaymentMode;
                objAxis.BankTranId = bankTransId;
                objAxis.resultData = strForm;

                objAxis.Action = "R";


                
                    string strReturn = ccobj.ManagePaymentAxis_JR(objAxis);

                
                FillDashboardIntermediate(Session["StudID"].ToString());
            }

        }
        catch (Exception ex)
        {

            Util.LogErrorSBI_sabPaisa(ex, "AxisUpdateStatus_ "+Session["StudID"].ToString(), strForm);
        }
    }

    #endregion

    #region "Sabpaisa Payment Status"
    private void SubPaisaPaymentStatus(string transactionNo)
    {
        string res = string.Empty;

        String urlf = "https://txnenquiry.sabpaisa.in/SPTxtnEnquiry/TransactionEnquiryServlet?clientCode=" + ConfigurationManager.AppSettings["clientCode"].ToString() + "&clientXtnId=" + transactionNo;
        //"https://securepay.sabpaisa.in/SPTxtnEnquiry/TransactionEnquiryServlet?clientXtnId=" + transactionNo + "+&clientCode=BSFS2";
        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(urlf);
        XDocument doc;
        ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
        //System.Net.ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12;
        using (WebResponse response = request.GetResponse())
        {

            using (Stream stream = response.GetResponseStream())
            {
                doc = XDocument.Load(stream);
            }
        }
        if (doc != null)
        {


            XElement rootelement = doc.Root;
            if (rootelement != null)
            {

                CafPayment objCafPayment = new CafPayment();
                if (rootelement.Attributes("sabPaisaRespCode") != null)
                {
                    objCafPayment.spRespCode = rootelement.Attributes("sabPaisaRespCode").First().Value;
                }

                if (!(objCafPayment.spRespCode == Util.K_SubPaisa_Trans_Not_Found || objCafPayment.spRespCode == Util.K_SubPaisa_UnKnown_response))
                {
                    if (rootelement.Attributes("clientTxnId") != null)
                    {
                        objCafPayment.clientTxnId = Util.CheckSpecialCharValue(rootelement.Attributes("clientTxnId").First().Value);
                    }

                    if (rootelement.Attributes("txnId") != null)
                    {
                        objCafPayment.PGTxnNo = Util.CheckSpecialCharValue(rootelement.Attributes("txnId").First().Value);
                    }

                    if (rootelement.Attributes("payeeAmount") != null)
                    {
                        objCafPayment.amount = Convert.ToDecimal(Util.CheckSpecialCharValue(rootelement.Attributes("payeeAmount").First().Value));
                    }

                    if (rootelement.Attributes("status") != null)
                    {
                        objCafPayment.spRespStatus = Util.CheckSpecialCharValue(rootelement.Attributes("status").First().Value);
                    }

                    if (rootelement.Attributes("transCompleteDate") != null)
                    {
                        objCafPayment.transDate = Util.CheckSpecialCharValue(rootelement.Attributes("transCompleteDate").First().Value);
                    }

                    if (rootelement.Attributes("paymentMode") != null)
                    {
                        objCafPayment.payMode = Util.CheckSpecialCharValue(rootelement.Attributes("paymentMode").First().Value);
                    }

                   
                        objCafPayment.Action = "U";
                        res = ccobj.ManagePayment_JR(objCafPayment);
                    
                    if (string.Equals(res, lblApplicantNo.Text.Trim(), StringComparison.OrdinalIgnoreCase))
                    {
                        FillDashboardIntermediate(Session["StudID"].ToString());
                    }
                }
            }
        }
    }

    #endregion

    #region Sahaj Functions
    private void SahajPaymentStatus(string transactionNo)
    {
        System.Net.ServicePointManager.Expect100Continue = false;

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://prodapi.sahaj.co.in/v1/BSEBSKASH/bseb/paymentAcknowledgement");
        //"https://prodapi.sahaj.co.in/v1/BSEBSKASH/bseb/paymentAcknowledgement");
        string postData = "Uniquerefid=" + transactionNo;
        //var data = Encoding.ASCII.GetBytes(postData);

        request.Method = "POST";
        request.ContentType = "text/plain";
        request.ContentType = "application/x-www-form-urlencoded";
        request.ContentLength = postData.Length;
        StreamWriter requestWriter = new StreamWriter(request.GetRequestStream());
        requestWriter.Write(postData);
        requestWriter.Close();

        WebResponse webResponse = (HttpWebResponse)request.GetResponse();
        Stream webStream = webResponse.GetResponseStream();
        StreamReader responseReader = new StreamReader(webStream);

        //3BA69CC087D18D294463|248595950|323.50
        string strGateWayStatus = responseReader.ReadToEnd();
        responseReader.Close();

        //there was no error and no response came
        if (string.IsNullOrEmpty(strGateWayStatus))
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnPaymentStatus','<strong>An error occured. Please try again after sometime</strong>','" + strMsgTitle + "');", true);
        }
        else
        {
            string[] arrStatus = strGateWayStatus.Split('|');
            string strApplId = string.Empty;
            string status = string.Empty;

            //Client TransactionId | -1 -- transaction failed
            if (arrStatus[1] == "-1")
            {
                status = "Fail";
            }

            //Client TransactionId | sahaj transaction Id Success
            else
            {
                status = "Success";
            }

            strApplId = UpdateSahajPayment(arrStatus[1], arrStatus[0], status, Convert.ToDecimal(Util.CheckSpecialCharValue(arrStatus[2]))); //update in database

            //if updated successfully
            if (string.Equals(strApplId, lblApplicantNo.Text.Trim()))
            {
                FillDashboardIntermediate(Session["StudID"].ToString());

            }
            else
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnPaymentStatus','<strong>An error occured. Please try again after sometime</strong>','" + strMsgTitle + "');", true);
            }
        }

    }

    private string UpdateSahajPayment(string strSahajTranId, string strClientTransId, string status, decimal decFee)
    {
        string strApplId = string.Empty;
        SahajDeg objpayment = new SahajDeg();
        objpayment.Action = "U";
        objpayment.Uniquerefid = Util.CheckSpecialCharValue(strClientTransId);
        objpayment.status = Util.CheckSpecialCharValue(status);
        objpayment.AppFee = decFee;
        objpayment.sahaj_txn_id = Convert.ToInt64(strSahajTranId);

           string res = ccobj.ManagePaymentSahaj_JR(objpayment);
            strApplId = res;
        
        return strApplId;
    }
    #endregion

    protected string GetUrl(string AppId)
    {
        string strURL = "CAFJr.aspx?";
        string strURLWithData = (strURL + string.Format("AppId1={0}", AppId));
        return strURLWithData;
    }

    protected void lnkUpdate_Click(object sender, EventArgs eventArgs)
    {
        try
        {
            int rowid = Convert.ToInt32(((LinkButton)sender).CommandArgument);
            string transactiono = grdPayment.Rows[rowid].Cells[2].Text.Trim();
            string gatewayName = grdPayment.Rows[rowid].Cells[5].Text.Trim();
            //int gatewayid = Convert.ToInt32(transactiono.Substring(0, 1));
            HiddenField hdnBankRefNo = (HiddenField)grdPayment.Rows[rowid].FindControl("hdnBankRefNo");
            switch (gatewayName)
            {
                case "SBIEPAY":
                    SBIPaymentStatus(transactiono);
                    break;
                case "SABPAISA":
                    SubPaisaPaymentStatus(transactiono);
                    break;
                case "SAHAJ":
                    SahajPaymentStatus(transactiono);
                    break;
                case "PNB":
                    PNBPaymentStatus(transactiono, hdnBankRefNo.Value);
                    break;
                case "AXIS":
                    AxisPaymentStatus(transactiono);
                    break;
                case "HDFC":
                    HDFCPaymentStatus(transactiono, hdnBankRefNo.Value);
                    break;
            }

            //switch (gatewayid)
            //{
            //    case 1:
            //        SBIPaymentStatus(transactiono);
            //        break;
            //    case 2:
            //        SubPaisaPaymentStatus(transactiono);
            //        break;
            //    case 3:
            //        SahajPaymentStatus(transactiono);
            //        break;
            //    case 4:
            //        PNBPaymentStatus(transactiono, hdnBankRefNo.Value);
            //        break;
            //    case 5:
            //        AxisPaymentStatus(transactiono);
            //        break;
            //}
        }
        catch (Exception ex)
        {
            Util.LogErrorSBI_sabPaisa(ex, "FeesPayment", Session["StudID"].ToString());
            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnPaymentStatus','<strong>An error occured. Please try again after sometime</strong>','" + strMsgTitle + "');", true);
        }
    }

    public Boolean AcceptAllCertifications(Object sender, System.Security.Cryptography.X509Certificates.X509Certificate certification, System.Security.Cryptography.X509Certificates.X509Chain chain, System.Net.Security.SslPolicyErrors sslPolicyErrors)
    {
        return true;
    }


}
