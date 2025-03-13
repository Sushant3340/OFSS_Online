#region File Header
/*
 * Created By : Ritika lath
 * Created On : 13th Aug 2018
 * File name : UpdatePayment_Jr.aspx
 * Class name : ONLINE_CAF_UpdatePayment_Jr
 * Description : For payment update of single records in jr
 */
#endregion

#region namespace
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web.UI;
using System.Xml.Linq;
using com.toml.dp.util;
using CommonModels;
#endregion

public partial class ONLINE_CAF_UpdatePayment_Jr : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.QueryString["sbi_Jun"] != null)
        {
            try
            {
                ShowSBIPaymentStatus();
            }
            catch (Exception ex)
            {
                Util.LogError(ex, "UpdatePayment_Jr");
            }
        }
    }

    protected void btnDetails_Click(object sender, EventArgs e)
    {
        try
        {
            FillApplicantDetails();
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "UpdatePayment_Jr");
        }
    }

    protected void btnUpdatePay_Click(object sender, EventArgs e)
    {
        try
        {
            //hypPrintCAF.Visible = false;
            //hypPrintCAF.NavigateUrl = string.Empty;
            int intPaymentTYpe = 0;
            intPaymentTYpe = Convert.ToInt32(txtClientTId.Text.Substring(0, 1));
            string strRetValue = string.Empty;


            string strGateWayStatus = string.Empty;
            if (intPaymentTYpe == (int)enGateway.SubPaisa)
            {
                SubPaisaPaymentStatus();
            }
            else if (intPaymentTYpe == (int)enGateway.Sahaj)
            {
                SahajPaymentStatus();
            }
            else if (intPaymentTYpe == (int)enGateway.SBI)
            {
                SBIPaymentStatus();
            }
        }

        catch (Exception ex)
        {
            Util.LogError(ex, "UpdatePayment_Jr");
        }
    }

    private void UpdateSBIPaymentStatus()
    {
        string strMerchantId = System.Configuration.ConfigurationManager.AppSettings["SBIMID"];
        string strClientTrnId = txtClientTId.Text.Trim();
        string strUrl = "https://www.sbiepay.sbi/payagg/orderStatusQuery/getOrderStatusQuery";
        ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls;
        var request = (HttpWebRequest)WebRequest.Create(strUrl);
        var postData = "queryRequest=|" + strMerchantId + "|" + strClientTrnId;
        postData += "&aggregatorId=SBIEPAY";
        postData += "&merchantId=" + strMerchantId + "";
        var data = Encoding.ASCII.GetBytes(postData);
        request.Method = "POST";
        request.ContentType = "application/x-www-form-urlencoded";
        request.ContentLength = data.Length;
        using (var stream = request.GetRequestStream())
        {
            stream.Write(data, 0, data.Length);
        }
        var response = (HttpWebResponse)request.GetResponse();
        var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();

        if (responseString != null && !string.IsNullOrEmpty(responseString.ToString()))
        {
            string sbiresponse = responseString.ToString();
            Util.LogError(new Exception(), "srn-" + sbiresponse);
            //live 1000443
            if (sbiresponse.Contains(strMerchantId) && !(sbiresponse.Contains("No Records Found")))
            {
                SBIResponse(sbiresponse.Trim());
            }
            else if (sbiresponse.Contains("No Records Found"))
            {
                //  SBIResponse1(sbiresponse.Trim(), intApplicantID);
                //ScriptManager.RegisterStartupScript(Page, this.GetType(), "alert", "alert('Transaction is failed, Please try again!');", true);
            }
        }
        response.Close();
    }

    public void SBIResponse(string ResParSbi)
    {
        string[] encarray;
        encarray = ResParSbi.Split('|');
        SBIePayDeg objSbi = new SBIePayDeg();
        objSbi.SBIePayReferenceID = encarray[0].ToString();
        objSbi.Status = encarray[1].ToString();
        objSbi.Country = encarray[2].ToString();
        objSbi.Currency = encarray[3].ToString();
        objSbi.OtherDetails = encarray[4].ToString();
        objSbi.MerchantOrderNo = encarray[5].ToString();
        if (!string.IsNullOrEmpty(Convert.ToString(encarray[6])))
        {
            objSbi.ActualAmount = Convert.ToDecimal(encarray[6]);
        }
        else
        {
            objSbi.ActualAmount = 0.00M;
        }

        // objSbi.ActualAmount = Convert.ToDecimal(encarray[6]);
        objSbi.Reason = encarray[7].ToString();
        objSbi.BankCode = encarray[8].ToString();
        objSbi.BankReferenceNumber = encarray[9].ToString();
        objSbi.TransactionDate = encarray[10].ToString();
        objSbi.Paymode = encarray[11].ToString();
        objSbi.CIN = encarray[12].ToString();
        objSbi.Action = "U";
        string strReturn = string.Empty;
        string strApplId = string.Empty;
        
            strApplId = strReturn = ccobj.ManagePaymentSBIePay_JR(objSbi);
        

        if (string.Equals(strApplId, objSbi.MerchantOrderNo.Substring(11), StringComparison.OrdinalIgnoreCase))
        {
            FillApplicantDetails();
        }

    }

    #region SBI Functions
    private void SBIPaymentStatus()
    {
        //Atrn|MerchantId|MerchantOrderNo|ReturnUrl
        //|1000003|12765542|https://merchantdomainname/querySuccess.jsp
        //merchantId present in web.config|client transactionId|middle landing page 
        string strMerchantId = System.Configuration.ConfigurationManager.AppSettings["SBIMID"];
        StringBuilder strSBIParam = new StringBuilder();
        strSBIParam.Append("|");//as we donot have update status we donot have the atrn no
        strSBIParam.Append(strMerchantId);
        strSBIParam.Append("|");
        strSBIParam.Append(txtClientTId.Text.Trim());
        strSBIParam.Append("|");
        strSBIParam.Append("https://online.ofssbihar.in/ONLINE_CAF/SBIQueryStatusRtn_Jun.aspx");

        string EncodedKey = System.Configuration.ConfigurationManager.AppSettings["SBIEncodedKey"].ToString();         //"fBc5628ybRQf88f/aqDUOQ==";
        int keysize = 128;
        string EncryptedParam = AES128Bit.Encrypt(strSBIParam.ToString(), EncodedKey, keysize);

        string aggIdVal = "SBIEPAY";
        // RedirectAndPOST(this.Page, "https://www.sbiepay.com/secure/AggMerchantStatusQueryAction", strMerchantId, EncryptedParam, aggIdVal);

        RedirectAndPOST(this.Page, "https://www.sbiepay.sbi/secure/AggMerchantStatusQueryAction", strMerchantId, EncryptedParam, aggIdVal);
    }

    private void ShowSBIPaymentStatus()
    {
        int sbiStatus = Convert.ToInt32(Request.QueryString["sbi_Jun"]);
        if (sbiStatus == 1 || sbiStatus == 2)
        {
            string clientTransId = Session["SBI_Id_Jun"].ToString();
            string strPaymentType = string.Empty;
            strPaymentType = clientTransId.Substring(0, 1);
            CafPayment objCafPayment = new CafPayment()
            {
                Action = "vr",
                clientTxnId = clientTransId,
                vch_UniqueRefNo = clientTransId.Substring(11),
                intGatewayType = Convert.ToInt32(strPaymentType)
            };
            string strRetValue = string.Empty;
         
                strRetValue = ccobj.UpdatePayment(objCafPayment);
                if (!string.IsNullOrEmpty(strRetValue))
                {
                    //2EDE29C13FA18D294463|0.00|Jun 11 2018 12:03PM|INITIATE
                    string[] arrPayDetails = new string[4];
                    arrPayDetails = strRetValue.Split('|');
                    string strStatus = arrPayDetails[3];
                    if (string.Equals(strStatus, "success", StringComparison.OrdinalIgnoreCase))
                    {
                        lblMessage.Text = "Your payment for the amount of " + arrPayDetails[1] + " was completed successfully on " + arrPayDetails[2] + "./ " + arrPayDetails[1] + " की राशि के लिए के लिए आपका भुगतान " + arrPayDetails[2] + " को सफलतापूर्वक पूरा हो गया था।";
                        ClearAllControls();
                        divMessage.Visible = true;
                    }
                    else
                    {
                        lblMessage.Text = "Your payment for the amount of " + arrPayDetails[1] + "  on " + arrPayDetails[2] + " had failed. Please try again using the Fees Payment Link / " + arrPayDetails[2] + " पर " + arrPayDetails[2] + " की राशि के लिए आपका भुगतान विफल रहा है। कृपया Fees Payment Link का उपयोग करके पुनः प्रयास करें";
                        ClearAllControls();
                        divMessage.Visible = true;
                    }
                }
            }
        
        else
        {
            lblMessage.Text = "There was an error getting the payment status. Please try again after sometime./ भुगतान स्थिति प्राप्त करने में त्रुटि हुई। कृपया कुछ समय बाद पुनः प्रयास करें";
            divMessage.Visible = true;
            ClearAllControls();
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

    private void SubPaisaPaymentStatus()
    {
        string res = string.Empty;


        String urlf = "https://txnenquiry.sabpaisa.in/SPTxtnEnquiry/TransactionEnquiryServlet?clientCode=" + ConfigurationManager.AppSettings["clientCode"].ToString() + "&clientXtnId=" + txtClientTId.Text.Trim();
        //"https://securepay.sabpaisa.in/SPTxtnEnquiry/TransactionEnquiryServlet?clientXtnId=" + txtClientTId.Text.Trim() + "+&clientCode=BSFS2";
        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(urlf);
        XDocument doc;
        //ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
        //System.Net.ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12;
        using (WebResponse response = request.GetResponse())
        {
            using (Stream stream = response.GetResponseStream())
            {
                doc = XDocument.Load(stream);
            }
        }
        XElement rootelement = doc.Root;
        CafPayment objCafPayment = new CafPayment();
        objCafPayment.spRespCode = rootelement.Attributes("sabPaisaRespCode").First().Value;
        //if there was an issue with server
        if (objCafPayment.spRespCode == Util.K_SubPaisa_Trans_Not_Found || objCafPayment.spRespCode == Util.K_SubPaisa_UnKnown_response)
        {
            lblMessage.Text = "There was an error getting the payment status. Please try again after sometime./ भुगतान स्थिति प्राप्त करने में त्रुटि हुई। कृपया कुछ समय बाद पुनः प्रयास करें";
            divMessage.Visible = true;
            ClearAllControls();
        }
        else
        {
            objCafPayment.clientTxnId = rootelement.Attributes("clientTxnId").First().Value;
            objCafPayment.PGTxnNo = rootelement.Attributes("txnId").First().Value;
            objCafPayment.amount = Convert.ToDecimal(rootelement.Attributes("payeeAmount").First().Value);
            objCafPayment.spRespStatus = rootelement.Attributes("status").First().Value;
            objCafPayment.transDate = rootelement.Attributes("transCompleteDate").First().Value;
            objCafPayment.payMode = rootelement.Attributes("paymentMode").First().Value;

           
                objCafPayment.Action = "U";
                res = ccobj.ManagePayment_JR(objCafPayment);
            
            if (string.Equals(res, lblApplicantNo.Text.Trim(), StringComparison.OrdinalIgnoreCase))
            {
                if (objCafPayment.spRespCode == Util.K_SubPaisa_Success)
                {
                    lblMessage.Text = "Your payment for the amount of " + objCafPayment.amount + " was completed successfully on " + objCafPayment.transDate + "./ " + objCafPayment.amount + " की राशि के लिए के लिए आपका भुगतान " + objCafPayment.transDate + " को सफलतापूर्वक पूरा हो गया था।";
                    divMessage.Visible = true;
                    ClearAllControls();
                }

                //|| objCafPayment.spRespCode == "0001" - pending
                else if (objCafPayment.spRespCode == Util.K_SubPaisa_Failure || objCafPayment.spRespCode == Util.K_SubPaisa_Cancelled)
                {
                    lblMessage.Text = "Your payment for the amount of " + objCafPayment.amount + "  on " + objCafPayment.transDate + " has failed. Please try again using the Fees Payment Link / " + objCafPayment.transDate + " पर " + objCafPayment.amount + " की राशि के लिए आपका भुगतान विफल रहा है।";
                    divMessage.Visible = true;
                    ClearAllControls();
                }

            }
        }
    }

    #region Sahaj Functions
    private void SahajPaymentStatus()
    {
        System.Net.ServicePointManager.Expect100Continue = false;

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://prodapi.sahaj.co.in/v1/BSEBSKASH/bseb/paymentAcknowledgement");
        //"https://srv.sevl.co.in/BSEBSkash/bsebSkashService/paymentAcknowledgement");
        //");
        //http://zuul-new-915593246.ap-south-1.elb.amazonaws.com:8765/BSEBSKASH/bseb/paymentAcknowledgement
        string postData = "Uniquerefid=" + txtClientTId.Text.Trim();
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
            lblMessage.Text = "There was an error getting the payment status. Please try again after sometime./ भुगतान स्थिति प्राप्त करने में त्रुटि हुई। कृपया कुछ समय बाद पुनः प्रयास करें";
            divMessage.Visible = true;
            ClearAllControls();
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

            strApplId = UpdateSahajPayment(arrStatus[1], arrStatus[0], status, Convert.ToDecimal(arrStatus[2])); //update in database

            //if updated successfully
            if (string.Equals(strApplId, lblApplicantNo.Text.Trim()))
            {
                if (string.Equals(status, "Success", StringComparison.OrdinalIgnoreCase))
                {
                    lblMessage.Text = "Your payment for the amount of " + arrStatus[2] + " was completed successfully on " + lblAppliedDate.Text + "./ " + arrStatus[2] + " की राशि के लिए के लिए आपका भुगतान " + lblAppliedDate.Text + " को सफलतापूर्वक पूरा हो गया था।";
                    divMessage.Visible = true;
                    ClearAllControls();
                }
                else if (string.Equals(status, "Fail", StringComparison.OrdinalIgnoreCase))
                {
                    lblMessage.Text = lblMessage.Text = "Your payment for the amount of " + arrStatus[2] + "  on " + lblAppliedDate.Text + " has failed./ " + lblAppliedDate.Text + " पर " + arrStatus[2] + " की राशि के लिए आपका भुगतान विफल रहा है। ";
                    divMessage.Visible = true;
                    ClearAllControls();
                }
            }
            else
            {
                lblMessage.Text = "There was an error getting the payment status. Please try again after sometime./ भुगतान स्थिति प्राप्त करने में त्रुटि हुई। कृपया कुछ समय बाद पुनः प्रयास करें";
                divMessage.Visible = true;
                ClearAllControls();
            }
        }

    }

    private string UpdateSahajPayment(string strSahajTranId, string strClientTransId, string status, decimal decFee)
    {
        string strApplId = string.Empty;
        SahajDeg objpayment = new SahajDeg();
        objpayment.Action = "U";
        objpayment.Uniquerefid = strClientTransId;
        objpayment.status = status;
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

    private void FillApplicantDetails()
    {
        ClearAllControls();
        divMessage.Visible = false;
        lblMessage.Text = string.Empty;
        string strMessage = string.Empty;
        
            List<CAFEntity> lstCafEntity = new List<CAFEntity>();
            CAFEntity objCAFEntitySearch = new CAFEntity();
            objCAFEntitySearch.UID = txtClientTId.Text.Trim().Substring(11);
            objCAFEntitySearch.Action = "U";
            lstCafEntity = ccobj.fillconfirmJuniorStream(objCAFEntitySearch);

            if (lstCafEntity != null && lstCafEntity.Count >= 1)
            {

                pnlDetails.Visible = true;
                lblApplicantNo.Text = objCAFEntitySearch.UID;
                if (lstCafEntity[0].ApplicantName != null)
                {
                    lblApplicantName.Text = lstCafEntity[0].ApplicantName.ToString();
                }
                if (lstCafEntity[0].FatherName != null)
                {
                    lblFatherName.Text = lstCafEntity[0].FatherName.ToString();
                }
                if (lstCafEntity[0].vch_CorMobileNo != null)
                {
                    lblMobileNo.Text = lstCafEntity[0].vch_CorMobileNo.ToString();
                }
                if (lstCafEntity[0].CreatedOn != null)
                {
                    lblAppliedDate.Text = lstCafEntity[0].CreatedOn.ToString("dd-MMM-yyyy");
                }
                if (lstCafEntity[0].EmailId != null)//EmailId property represent Gateway name.
                {
                    lblPaymentGateway.Text = lstCafEntity[0].EmailId.ToString();
                }
                strMessage = "Please verify your details and if correct click on update payment / कृपया अपने विवरण की जांच करें और यदि सही है update payment पर click करें";
            }
            else
            {
                strMessage = "Please check your client transaction Id / कृपया अपने ग्राहक लेनदेन आईडी की जांच करें";
            }
            lblMessage.Text = strMessage;
            divMessage.Visible = true;
        
    }

    private void ClearAllControls()
    {
        pnlDetails.Visible = false;
        lblApplicantName.Text = string.Empty;
        lblApplicantNo.Text = string.Empty;
        lblAppliedDate.Text = string.Empty;
        lblFatherName.Text = string.Empty;
        lblMobileNo.Text = string.Empty;
        lblPaymentGateway.Text = string.Empty;
    }
}