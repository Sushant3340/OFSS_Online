using System;
using System.Collections.Generic;
using System.Web.UI;
using SabPaisaDotNetIntregreation;
using System.Text;
using CommonModels;
using CustomFaults;
using System.Configuration;
using com.awl.MerchantToolKit;
using com.toml.dp.util;
using System.Security.Cryptography;
using System.Collections.Specialized;
using CCA.Util;

public partial class CongratulationJr : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    int intApplID = 0;
    string strApplName = "";
    string strResult = string.Empty;
    int intResult = 0;
    string strOTP = string.Empty;
    SENDMAIL objMail = null;
    SENDMSDSMS objMsg = null;

    protected void Page_Load(object sender, EventArgs e)
    {
        lblAmount.Text = ConfigurationManager.AppSettings["SBIFeeAmount_Jr"].ToString();
        if (!IsPostBack)
        {
            List<CAFEntity> list = new List<CAFEntity>();
            list = fillDateline();
            if (list.Count > 0)
            {
                DateTime lastAppDate = list[0].ToDate;
                DateTime dtmFromDate = list[0].FromDate;

                int FromDate = DateTime.Compare(DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59), dtmFromDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                int ToDate = DateTime.Compare(lastAppDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));

                if (ToDate >= 0 && FromDate >= 0)
                {
                    divDateLine.Visible = false;
                    DivCongratsForm.Visible = true;

                    if (Convert.ToString(Request.QueryString["AppId"]) != null)
                    {
                        //check if there is a user with the caf id
                        CheckUser(Request.QueryString["AppId"].ToString());

                        //in case of error it will continue else it will redirect to error page else it will continue to show data as described
                        ShowData(Request.QueryString["AppId"].ToString());
                    }
                    else
                    {
                        Server.Transfer("JrCAFForm.aspx", true);
                    }
                }
                else
                {
                    if (FromDate < 0)
                    {
                        litMessage.Text = "Dateline for CAF fee payment is not started yet...";
                    }
                    if (ToDate < 0)
                    {
                        litMessage.Text = "Dateline for CAF fee payment is completed...";
                    }
                    divDateLine.Visible = true;
                    DivCongratsForm.Visible = false;
                }
            }
            else
            {
                Response.Write("<script>document.location.href=\'http://online.ofssbihar.org/CAFClosedJr.html\';</script>");
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
           
                list = ccobj.FillCAF(obj);


            
        }
        catch (Exception ex)
        {
        }
        return list;
    }
    #endregion

    #region Check user
    protected void CheckUser(string strRefID)
    {
        Boolean IsException = false;
        List<CAFEntity> lstCafEntity = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
           
                obj.Action = "v";
                obj.UID = strRefID;
                lstCafEntity = ccobj.fillconfirmJuniorStream(obj);
            

            if (lstCafEntity == null || (lstCafEntity != null && lstCafEntity.Count <= 0))
            {
                Exception dummyex = new Exception();
                Util.LogError(dummyex, "CongratulationJr_ misuser#" + strRefID);
               // Response.Redirect("../ErrorPage.aspx");
            }
        }
        catch (Exception ex)
        {
            IsException = true;
            Util.LogError(ex, "CongratulationJr");
        }
        finally
        {
            lstCafEntity.Clear();
        }
        if (IsException)
        {
            Response.Redirect("../ErrorPage.aspx");
        }
    }
    #endregion

    #region show Data
    protected void ShowData(string strRefID)
    {
        int intApplID = 0;
        string strApplName = "";
        string strPwd = "";
        List<CAFEntity> lstCafEntity = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
           
                obj.Action = "P";
                obj.UID = strRefID;
                lstCafEntity = ccobj.fillconfirmJuniorStream(obj);
            

            if (lstCafEntity != null && lstCafEntity.Count >= 1)
            {
                if (lstCafEntity[0].ApplicantID != null)
                {
                    intApplID = lstCafEntity[0].ApplicantID;
                }
                if (lstCafEntity[0].ApplicantName != null)
                {
                    strApplName = lstCafEntity[0].ApplicantName.ToString();
                }

                if (lstCafEntity[0].strPassword != null)
                {
                    strPwd = lstCafEntity[0].strPassword.ToString();
                }
            }
            lblName.Text = strApplName.Trim();
            lblAppId.Text = strRefID.Trim();
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmationJr");
        }
        finally
        {
            lstCafEntity.Clear();
        }
    }
    #endregion

    #region SBIePay
    private void SBIePay()
    {
        //int intApplID = 0;
        //string strApplName = "";
        //string strReturn = "";
        //List<CAFEntity> list = new List<CAFEntity>();
        //CAFEntity obj = new CAFEntity();
        //SBIePayDeg objSbi = new SBIePayDeg();
        //try
        //{

        //    using (MngtStudentBusinessClient client = new MngtStudentBusinessClient())
        //    {
        //        obj.Action = "P";
        //        obj.UID = Request.QueryString["AppId"].ToString();
        //        list = client.fillconfirmJuniorStream(obj);
        //    }

        //    if (list != null && list.Count >= 1)
        //    {
        //        if (list[0].ApplicantID != null)
        //        {
        //            intApplID = list[0].ApplicantID;
        //        }
        //        if (list[0].ApplicantName != null)
        //        {
        //            strApplName = list[0].ApplicantName.ToString();
        //        }
        //    }

            ////ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls;


            //string UniqueRefNo = Request.QueryString["AppId"].ToString();
            //string PostingAmt = System.Configuration.ConfigurationManager.AppSettings["SBIFeeAmount_Jr"].ToString();
            //string AppName = strApplName;
            //// string MerOrderNo=Guid.NewGuid().ToString(); ;
            //int ApplicantID = intApplID;

            //string MID = System.Configuration.ConfigurationManager.AppSettings["SBIMID"].ToString(); //"1000003";
            //string Collaborator_Id = "SBIEPAY";
            //string Operating_Mode = "DOM";
            //string Country = "IN";
            //string Currency = "INR";
            //string Amount = PostingAmt;

            //// gatewayType + 10 charaters of GUID + UniqueRefNo
            //string Order_Number = ((int)enGateway.SBI).ToString() + Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + UniqueRefNo;
            //string Other_Details = ApplicantID + "^" + UniqueRefNo + "^" + AppName;

            ////string Success_URL = "https: //test.sbiepay.com/secure/sucess.jsp";
            ////string Success_URL = "http: //localhost/dhe/ONLINE_CAF/cafpaysucess.aspx";
            ////string Failure_URL = "https: //test.sbiepay.com/secure/fail.jsp";
            ////string Failure_URL = "http: //localhost/dhe/ONLINE_CAF/cafpayfail.aspx"; 

            //string Success_URL = System.Configuration.ConfigurationManager.AppSettings["SBISuccessURLDeg"].ToString();
            //string Failure_URL = System.Configuration.ConfigurationManager.AppSettings["SBIFailureURLDeg"].ToString();
            //string EncodedKey = System.Configuration.ConfigurationManager.AppSettings["SBIEncodedKey"].ToString();         //"fBc5628ybRQf88f/aqDUOQ==";
            ////0/qZNJ2v9f9AlO7tC6Vlkw== as found by using new key format in SBI on 25th June 2020 by ritika lath

            //int keysize = 128;

            //string Requestparameter = MID
            //                    + "|" + Operating_Mode
            //                    + "|" + Country
            //                    + "|" + Currency
            //                    + "|" + Amount
            //                    + "|" + Other_Details
            //                    + "|" + Success_URL
            //                    + "|" + Failure_URL
            //                    + "|" + Collaborator_Id
            //                    + "|" + Order_Number
            //                    + "|" + ApplicantID.ToString()
            //                    + "|" + "NB"
            //                    + "|" + "ONLINE"
            //                    + "|" + "ONLINE";

            //string EncryptedParam = AES128Bit.Encrypt(Requestparameter, EncodedKey, keysize);


            ////Insert the initial payment data        
            //using (MngtStudentBusinessClient client = new MngtStudentBusinessClient())
            //{
            //    objSbi.Action = "A";
            //    objSbi.MerchantOrderNo = Order_Number;
            //    objSbi.StudName = AppName;
            //    objSbi.Currency = Currency;
            //    objSbi.Country = Country;
            //    objSbi.UniqueRefNo = UniqueRefNo;
            //    objSbi.Amount = Convert.ToDecimal(Amount);
            //    strReturn = client.ManagePaymentSBIePay_JR(objSbi);
            //}

            //if (strReturn == "1")
            //{
            //    // requestparams.Value = EncryptedParam;    
            //    // RedirectAndPOST(this.Page, "https: //www.sbiepay.com/secure/AggregatorHostedListener", MID, EncryptedParam);
            //    //SendPaymentSMS(lblMobileNo.Text, Order_Number);
            //    //SendPaymentEmail(Order_Number);
            //    ///  RedirectAndPOST(this.Page, "https://test.sbiepay.sbi/secure/AggregatorHostedListener", MID, EncryptedParam);
            //    RedirectAndPOST(this.Page, "https://www.sbiepay.sbi/secure/AggregatorHostedListener", MID, EncryptedParam);

            //}


        //}
        //catch (Exception ex)
        //{
        //    Util.LogError(ex, "LoginPayment_Jr");
        //}
        //finally
        //{
        //    list = null; obj = null; objSbi = null;
        //}
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

    #region PNB gateway
    private void PNBGateway()
    {
        int intApplID = 0;
        string strApplName = "";
        string strReturn = "";
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        ReqMsgDTO objReqMsgDTO = new ReqMsgDTO();
        PNBJr onjPNB = new PNBJr();
        try
        {

         
                obj.Action = "P";
                obj.UID = Request.QueryString["AppId"].ToString();
                list = ccobj.fillconfirmJuniorStream(obj);
           

            if (list != null && list.Count >= 1)
            {
                if (list[0].ApplicantID.ToString() != null)
                {
                    intApplID = list[0].ApplicantID;
                }
                if (list[0].ApplicantName != null)
                {
                    strApplName = list[0].ApplicantName.ToString();
                }
            }

            string UniqueRefNo = Request.QueryString["AppId"].ToString();
            string AppName = strApplName;
            int ApplicantID = intApplID;

            // gatewayType + 10 charaters of GUID + UniqueRefNo
            string Order_Number = ((int)enGateway.PNB).ToString() + Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + UniqueRefNo;

            string Other_Details = ApplicantID + "_" + UniqueRefNo + "_" + AppName;
            string Response_URL = System.Configuration.ConfigurationManager.AppSettings["PNBResponseURLJr"].ToString();
            string Mid= System.Configuration.ConfigurationManager.AppSettings["PNBMID"].ToString();
            string Enckey = System.Configuration.ConfigurationManager.AppSettings["PNBEncodedKey"].ToString();
            string MeTransReqType = "S";
            string TrnAmt = System.Configuration.ConfigurationManager.AppSettings["PNBFeeAmount_Jr"].ToString();
            string TrnRemarks = "CAF Payment";
            string TrnCurrency = "INR";
           

            objReqMsgDTO.OrderId = Order_Number;
            objReqMsgDTO.Mid = System.Configuration.ConfigurationManager.AppSettings["PNBMID"].ToString();
            objReqMsgDTO.Enckey = System.Configuration.ConfigurationManager.AppSettings["PNBEncodedKey"].ToString();
            objReqMsgDTO.MeTransReqType = MeTransReqType;
            objReqMsgDTO.TrnAmt = TrnAmt;//
            objReqMsgDTO.ResponseUrl = Response_URL;
            objReqMsgDTO.TrnRemarks = TrnRemarks;
            objReqMsgDTO.TrnCurrency = TrnCurrency;
            //Optional Fields
            objReqMsgDTO.AddField1 = Other_Details;
            objReqMsgDTO.AddField2 = System.Configuration.ConfigurationManager.AppSettings["PNBStoreName"].ToString();
            objReqMsgDTO.AddField3 = "";
            objReqMsgDTO.AddField4 ="";
            objReqMsgDTO.AddField5 ="";
            objReqMsgDTO.AddField6 ="";
            objReqMsgDTO.AddField7 ="";
            objReqMsgDTO.AddField8 = "";

            //Insert the initial payment data        
           
                onjPNB.Action = "A";
                onjPNB.OrderId = Order_Number;
                onjPNB.StudName = AppName;
                onjPNB.TrnCurrency = TrnCurrency;
                onjPNB.UniqueRefNo = UniqueRefNo;
                onjPNB.TrnAmt = Convert.ToDecimal(TrnAmt);
                onjPNB.MeTransReqType = MeTransReqType;
                onjPNB.TrnCurrency = TrnCurrency;
                strReturn = ccobj.ManagePaymentPNB_JR(onjPNB);
               
            

            if (strReturn == "1")
            {
                RedirectAndPOSTPNB(this.Page,objReqMsgDTO);
            }


        }
        catch (Exception ex)
        {
            Util.LogError(ex, "LoginPNBPayment_Jr");
        }
        finally
        {
            list = null; obj = null; onjPNB = null;
        }
    }


    public static void RedirectAndPOSTPNB(Page page, ReqMsgDTO objReqMsgDTO)
    {

        //Prepare the Posting form
        string strForm = PNBRedirectAndPOST(objReqMsgDTO);
        //Add a literal control the specified page holding 
        //the Post Form, this is to submit the Posting form with the request.
        page.Controls.Add(new LiteralControl(strForm));
    }
    public static string PNBRedirectAndPOST(ReqMsgDTO objReqMsgDTO)
    {

        // Call API to generate the message
        AWLMEAPI objawlmerchantkit = new AWLMEAPI();
        objReqMsgDTO = objawlmerchantkit.generateTrnReqMsg(objReqMsgDTO);
        string Message="";
        if (objReqMsgDTO.StatusDesc == "Success")
        {
            Message = objReqMsgDTO.ReqMsg;
        }

        string url = System.Configuration.ConfigurationManager.AppSettings["PNBPostUrl"].ToString();
        string Mid = System.Configuration.ConfigurationManager.AppSettings["PNBMID"].ToString();
        //Set a name for the form
        string formID = "AWLPGPos";
        //Build the form using the specified data to be posted.
        StringBuilder strForm = new StringBuilder();
        strForm.Append("<form id=\"" + formID + "\" action=\"" + url +
                              "\" method=\"POST\" runat=\"server\">");
        strForm.Append("<input type=\"hidden\" name=\"merchantRequest\" id=\"merchantRequest\" value=\"" + Message + "\"  />");
        strForm.Append("<input type=\"hidden\" name=\"MID\" id=\"MID\" value=" + Mid + " />");
       

        strForm.Append("</form>");
        //Build the JavaScript which will do the Posting operation.
        StringBuilder strScript = new StringBuilder();
        strScript.Append("<script language='javascript'>");
        strScript.Append("document.getElementById(\"" + formID + "\").submit();");
        strScript.Append("</script>");
        //Return the form and the script concatenated.
        //(The order is important, Form then JavaScript)
        return strForm.ToString() + strScript.ToString();
    }

    #endregion

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
                obj.UID = Request.QueryString["AppId"].ToString();
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

            string UniqueRefNo = Request.QueryString["AppId"].ToString();
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
            strPPI = Order_Number+"|"+ strRTU+"|"+strAMT;
            //PPI:Unique Transaction Id|Response URL|Amount
            string key = System.Configuration.ConfigurationManager.AppSettings["AxisKey"].ToString();
            string StrCheckSumString = strCID + strRID + strCRN + strAMT + key;

            string Checksum = sha256_hash(StrCheckSumString);
            //Sample values has been passed in each parameter. Please update with your values.
           
            string PlainText = "CID=" + strCID + "&RID=" + strRID + "&CRN=" + strCRN + "&AMT=" + strAMT + "&VER="+ strVER + "&TYP=" + strTYP + "&CNY=" + strCNY + "&RTU=" + strRTU+ "&PPI=" + strPPI + "&RE1=" + strRE1 + "&RE2=&RE3=&RE4=&RE5=&CKS=" + Checksum;
         
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

    #endregion

    private void Sahaj()
    {
        int intApplID = 0;
        string strApplName = "";
        string strPwd = "";
        List<CAFEntity> lstCafEntity = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {

         
                obj.Action = "P";
                obj.UID = Request.QueryString["AppId"].ToString();
                lstCafEntity = ccobj.fillconfirmJuniorStream(obj);
            

            if (lstCafEntity != null && lstCafEntity.Count >= 1)
            {
                if (lstCafEntity[0].ApplicantID != null)
                {
                    intApplID = lstCafEntity[0].ApplicantID;
                }
                if (lstCafEntity[0].ApplicantName != null)
                {
                    strApplName = lstCafEntity[0].ApplicantName.ToString();
                }

                if (lstCafEntity[0].strPassword != null)
                {
                    strPwd = lstCafEntity[0].strPassword.ToString();
                }

            }

            // gatewayType + 10 charaters of GUID + UniqueRefNo
            Session["Uniquerefid_Jr"] = ((int)enGateway.Sahaj).ToString() + Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + Request.QueryString["AppId"].ToString();
            Session["StudName_Jr"] = strApplName;
            //Session["StudMob_Jr"] = lblMobileNo.Text;
            Session["StudId_Jr"] = Request.QueryString["AppId"].ToString();
            Session["AppFee_Jr"] = System.Configuration.ConfigurationManager.AppSettings["SahajFeeAmtJr"].ToString();
            Session["service_provider_id_Jr"] = System.Configuration.ConfigurationManager.AppSettings["SahalClientCode"].ToString();

            //AppType 1 indicate payment initiate from Junior CAF
            Session["AppType_Jr"] = "1";
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "LoginPayment_Jr");
        }
        finally
        {
            lstCafEntity = null; obj = null;
        }
        try
        {
            //SendPaymentSMS(lblMobileNo.Text, Session["Uniquerefid_Jr"].ToString());
            //SendPaymentEmail(Session["Uniquerefid_Jr"].ToString());
            Response.Redirect("SahajJr.aspx");
        }
        catch
        {

        }
        finally
        {
            Context.ApplicationInstance.CompleteRequest();
        }


    }

    private void SubPaisa()
    {
        SabPaisaIntegration objsb = new SabPaisaIntegration();
        string strRefID = Request.QueryString["AppId"].ToString();
        int intApplID = 0;
        string strApplName = "";
        string strPwd = "";
        string Emailid = string.Empty;
        string MobileNo = string.Empty;
        List<CAFEntity> lstCafEntity = new List<CAFEntity>();
        CafPayment cafobj = new CafPayment();
        string sFinalurl = "";
        try
        {

           
                CAFEntity objCAFEntitySearch = new CAFEntity();
                objCAFEntitySearch.UID = strRefID;
                objCAFEntitySearch.Action = "p";
                lstCafEntity = ccobj.fillconfirmJuniorStream(objCAFEntitySearch);

                if (lstCafEntity != null && lstCafEntity.Count >= 1)
                {
                    if (lstCafEntity[0].ApplicantID != null)
                    {
                        intApplID = lstCafEntity[0].ApplicantID;
                    }
                    if (lstCafEntity[0].ApplicantName != null)
                    {
                        strApplName = lstCafEntity[0].ApplicantName.ToString();
                    }

                    if (lstCafEntity[0].strPassword != null)
                    {
                        strPwd = lstCafEntity[0].strPassword.ToString();
                    }
                    if (lstCafEntity[0].vch_EMailID != null)
                    {
                        Emailid = lstCafEntity[0].vch_EMailID.ToString();
                    }
                    if (lstCafEntity[0].vch_CorMobileNo != null)
                    {
                        MobileNo = lstCafEntity[0].vch_CorMobileNo.ToString();
                    }

                }
            

            // Payment process
            SabPaisaRequest sabPaisaMember1 = new SabPaisaRequest();

            //"http ://uatsp.sabpaisa.in/SabPaisa2/sabPaisaInit"; // use HitUrl,which is shared in mail
            sabPaisaMember1.spHitUrl = System.Configuration.ConfigurationManager.AppSettings["spHitUrl"].ToString();

            // "BSEBC";//"SSNC2";   // use clientcode,which is shared in mail
            sabPaisaMember1.clientCode = System.Configuration.ConfigurationManager.AppSettings["clientCode"].ToString();

            // use clientcode,which is shared in mail
            sabPaisaMember1.userName = System.Configuration.ConfigurationManager.AppSettings["userName"].ToString();

            // use clientcode,which is shared in mail
            sabPaisaMember1.pass = System.Configuration.ConfigurationManager.AppSettings["pass"].ToString();

            // use AuthIV,which is shared in mail
            sabPaisaMember1.authIV = System.Configuration.ConfigurationManager.AppSettings["authIV"].ToString();

            //use Auth Key,which is shared in mail
            sabPaisaMember1.authKey = System.Configuration.ConfigurationManager.AppSettings["authKey"].ToString();

            // Non Mandatory, so you pass NA
            sabPaisaMember1.add = "";

            //"txnLP1101";      // Client Txn ID must be unique for each request
            // gatewayType + 10 charaters of GUID + UniqueRefNo
            sabPaisaMember1.clientTxnId = ((int)enGateway.SubPaisa).ToString() + Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + strRefID;

            // Amnt field don't have any comma and special character, only numeric value.
            sabPaisaMember1.amt = System.Configuration.ConfigurationManager.AppSettings["FeeAmt_Jr"].ToString();

            sabPaisaMember1.programId = "NA";		  // pass NA

            //"http: //192.168.43.115:8081/LinkPaisa/ClientResponse.jsp"; //Use you success Url where you can capture response
            sabPaisaMember1.successUrl = System.Configuration.ConfigurationManager.AppSettings["successUrl"].ToString();

            //"http: //192.168.43.115:8081/LinkPaisa/ClientResponse.jsp"; //Use you fail Url where you can capture response
            sabPaisaMember1.failureUrl = System.Configuration.ConfigurationManager.AppSettings["failureUrl"].ToString();

            sabPaisaMember1.firstName = strApplName.Trim(); // End User first name
            sabPaisaMember1.lastName = "";	// End User last name
            sabPaisaMember1.email = Emailid;//"arvind.gangwar@srslive.in";	// End User Email ID
            sabPaisaMember1.contactNo = MobileNo;//"8010023689"; // End User Contact No

            //added by Ritika Lath on 12th June 2021
            sabPaisaMember1.udf20 = strRefID;//CAF No of the applicant

            sFinalurl = objsb.forwardToSabPaisa(sabPaisaMember1);
            //sFinalurl = "http://192.168.43.115:8081/SabPaisaOld/sabPaisaInit?query=N2cXTmoLz1onb32FlIM6E88LKGQHPHa7MZTYyHykrVOlcwzvWhlDy52qXvS2ptFPqWELMZrShiC7ya5upgj1RLmm1Egx2HR9wML67VWNQWR26hRScQOJWc8h4/Ua1Vl8SzUQAOLDs3QO3E5GBhpFRGQpxJuaW0I6nlbrYEHkep97zxn8AnKV6LsL6WXdDXTqTjQC0rJ7OzLFC3VtikwFDUdP6dyQOJR9QJdB/65dSDNG%2BYl6RyqKfERYpArbX/d7goI0LcePDpAe25H/UVURwbgw18SFnojipZEWA77M8UEwo%2BhYiuv%2BSDFkST6IShjbSPBdtxr7ymZUzRzXMBxHwleM8RfoKT4oBLEUNLh%2BPSpj13AH4Avn4/W3iSrOC3q/QIXcoFhF/BKOPyC3Knpn45ODcTKUQ5dJPwdt/yJiesYGyyNTS5gMjLjgXrMA8FT9&clientName=SSNC2&prodCode=LINKP";


            cafobj.Action = "A";
            cafobj.clientTxnId = sabPaisaMember1.clientTxnId;
            cafobj.vch_UniqueRefNo = strRefID;
            cafobj.int_ApplicantID = intApplID;

            //added by Ritika lath to add amount in database on 07-04-2020
            cafobj.amount = Convert.ToInt32(System.Configuration.ConfigurationManager.AppSettings["FeeAmt_Jr"]);
          
                string strResult = ccobj.ManagePayment_JR(cafobj);
            
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "LoginPayment_Jr");
        }
        finally
        {
            objsb = null;
        }
        try
        {
            if (!string.IsNullOrEmpty(sFinalurl))
            {
                // SendPaymentSMS(lblMobileNo.Text, cafobj.clientTxnId);
                // SendPaymentEmail(cafobj.clientTxnId.ToString());
                Response.Redirect(sFinalurl, false);
            }
        }
        catch
        {
        }
        finally
        {
            Context.ApplicationInstance.CompleteRequest();
        }

    }

    protected void btnGateWay_Click(object sender, EventArgs e)
    {
       
            CAFEntity objCheckGatewayID = new CAFEntity();
            objCheckGatewayID.GateWayID = ddlGateWay.SelectedValue;
            string GatewayID = ccobj.checkGatewayIdStatus(objCheckGatewayID);
            if (GatewayID == "1")
            {
                ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "alert('Sahaj Vasudha Kendra is down for some time. Please Select any other Gateway');", true);
            }
            else if (GatewayID == "2")
            {
                ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "alert('SBIePay is down for some time. Please Select any other Gateway');", true);
            }
            else if (GatewayID == "3")
            {
                ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "alert('SabPaisa is down for some time. Please Select any other Gateway');", true);
            }
            else if (GatewayID == "4")
            {
                ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "alert('PNB gateway is down for some time. Please Select any other Gateway');", true);
            }
            else if (GatewayID == "5")
            {
                ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "alert('Axis gateway is down for some time. Please Select any other Gateway');", true);
            }
            else if (GatewayID == "6")
            {
                ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "alert('HDFC gateway is down for some time. Please Select any other Gateway');", true);
            }
            else
            {
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
                    SubPaisa();
                }
                else if (ddlGateWay.SelectedValue == "4")
                {
                    PNBGateway();
                }
                else if (ddlGateWay.SelectedValue == "5")
                {
                    AxisGateway();
                }
                else if (ddlGateWay.SelectedValue == "6")
                {
                    HDFCGateway();
                }
            }

        

    }

    #region "HDCF Payment Gateway Integration"
    private void HDFCGateway()
    {
        int intApplID = 0;
        string strApplName = "";
        string strReturn = "";
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        HDFCEntityJr objHDFC = new HDFCEntityJr();

        try
        {
           
                obj.Action = "P";
                obj.UID = Request.QueryString["AppId"].ToString();
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

            string UniqueRefNo = Request.QueryString["AppId"].ToString();
            string PostingAmt = System.Configuration.ConfigurationManager.AppSettings["HDFCFeeAmount_Jr"].ToString();
            string AppName = strApplName;
            int ApplicantID = intApplID;

            string MID = System.Configuration.ConfigurationManager.AppSettings["HDFCMerchantid"].ToString();
            string Currency = "INR";
            string Amount = PostingAmt;
            string Language = "EN";
            var timeSpan1 = (DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0));
            string strOrderID1 = ((long)timeSpan1.TotalSeconds).ToString() + intApplID.ToString();
            string TID = strOrderID1;
           // string TID = System.Configuration.ConfigurationManager.AppSettings["HDFCTID"].ToString();
            // gatewayType + 10 charaters of GUID + UniqueRefNo
            string Order_Number = ((int)enGateway.HDFC).ToString() + Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper() + "" + UniqueRefNo;
            string Other_Details = ApplicantID + "^" + UniqueRefNo + "^" + AppName;


            string Success_URL = System.Configuration.ConfigurationManager.AppSettings["HDFCSuccessURL"].ToString();
            string Cancel_URL = System.Configuration.ConfigurationManager.AppSettings["HDFCCancelURL"].ToString();
            string workingKey = System.Configuration.ConfigurationManager.AppSettings["HDFCEnckey"].ToString();
            string strAccessCode = System.Configuration.ConfigurationManager.AppSettings["HDFCAccesscode"].ToString();

            CCACrypto ccaCrypto = new CCACrypto();
            string strEncRequest = "";


            string ccaRequest = "tid=" + TID
                                + "&merchant_id=" + MID
                                + "&order_id=" + Order_Number
                                + "&amount=" + Amount
                                + "&currency=" + Currency
                                + "&redirect_url=" + Success_URL
                                + "&cancel_url=" + Cancel_URL
                                + "&language=" + Language
                                + "&merchant_param1=" + Other_Details;
                             

            strEncRequest = ccaCrypto.Encrypt(ccaRequest, workingKey);

           
                objHDFC.Action = "A";
                objHDFC.OrderId = Order_Number;
                objHDFC.StudName = AppName;
                objHDFC.UniqueRefNo = UniqueRefNo;
                objHDFC.TrnAmt = Convert.ToDecimal(Amount);
                objHDFC.merchant_param1 = Other_Details;
                objHDFC.TID = TID;
                objHDFC.EncryptValue = strEncRequest;
                objHDFC.PlainText = ccaRequest;
                strReturn = ccobj.ManagePaymentHDFC_JR(objHDFC);
            
           
            if (strReturn == "1")
            {
                RedirectAndPOSTHDFC(this.Page, "https://secure.ccavenue.com/transaction.do?command=initiateTransaction", strAccessCode, strEncRequest);
            }


        }
        catch (Exception ex)
        {
            throw ex;
        }
        
    }

    public static void RedirectAndPOSTHDFC(Page page, string url, string HDFCAccesscode, string EncryptedParam)
    {

        //Prepare the Posting form
        string strForm = PreparePOSTFormHDFC(url, HDFCAccesscode, EncryptedParam);
        //Add a literal control the specified page holding 
        //the Post Form, this is to submit the Posting form with the request.
        page.Controls.Add(new LiteralControl(strForm));
    }
    public static string PreparePOSTFormHDFC(string url, string HDFCAccesscode, string EncryptedParam)// post form
    {
        //Set a name for the form
        string formID = "nonseamless";
        //Build the form using the specified data to be posted.
        StringBuilder strForm = new StringBuilder();

        strForm.Append("<form id=\"" + formID + "\" name=\"" + "redirect" + "\" action=\"" + url +
                    "\" method=\"post\">");

        strForm.Append("<input type=\"hidden\""+ "\" id=\"" + "encRequest" + "\"  name =\"" + "encRequest" +
                          "\" value=\"" + EncryptedParam + "\">");

        strForm.Append("<input type=\"hidden\"" + "\" id=\"" + "Hidden1" + "\"  name =\"" + "access_code" +
                         "\" value=\"" + HDFCAccesscode + "\">");

        strForm.Append("</form>");

   

        //Build the JavaScript which will do the Posting operation.

        StringBuilder strScript = new StringBuilder();
        strScript.Append("<script type='text/javascript'>");
        strScript.Append("$(document).ready(function() {");
        strScript.Append("$(" + "\" #" + formID + "\")");
        strScript.Append(".submit();});");
        strScript.Append("</script>");


        //strScript.Append("<script language='javascript'>");
        //strScript.Append("var v" + formID + " = document." + formID + ";");
        //strScript.Append("v" + formID + ".submit();");
        //strScript.Append("</script>");

        //Return the form and the script concatenated.
        //(The order is important, Form then JavaScript)
        return strForm.ToString() + strScript.ToString();
    }

    #endregion

    public Boolean AcceptAllCertifications(Object sender, System.Security.Cryptography.X509Certificates.X509Certificate certification, System.Security.Cryptography.X509Certificates.X509Chain chain, System.Net.Security.SslPolicyErrors sslPolicyErrors)
    {
        return true;
    }
   
}
