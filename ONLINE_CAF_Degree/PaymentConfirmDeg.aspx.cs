//'**********************************************************************************
//' File Name             :   PaymentConfirmDeg.aspx.cs
//' Description           :   PaymentConfirmDeg page
//' Created by            :   
//' Created On            :  
//' Modification History   :
//'                        <CR no.>    <Date>      <Modified by>  < Modification Summary>   <instructed by>    '                                      
//' Function Name         : 
//' Procedures Used       : 
//' PDK function          : <CR No.>  <PDK Function Name>                                                            <Purpose of use of PDK>
//'                            
//'**************************************************************************************/--


using System;
using System.Collections.Generic;
using System.Web.UI;
using OFSS_OL_Entity;
using SabPaisaDotNetIntregreation;


public partial class ONLINE_CAF_PaymentConfirmDeg : System.Web.UI.Page
{
    CAFDegDal ccobjcafdeg = new CAFDegDal();
    int intApplID = 0;
    string strApplName = "";
    string strApplId = "";
    string strPwd = "";
    string strResult = "";
    SENDMAIL objMail = new SENDMAIL();
    SENDMSDSMS objMsg = new SENDMSDSMS();
    string strDynamicPwd = "";

    protected void Page_Load(object sender, System.EventArgs e)
    {
        if (!IsPostBack)
        {
            SabPaisaIntegration sabPaisaIntegration = new SabPaisaIntegration();
            CafPaymentDeg objpayment = new CafPaymentDeg();
            try
            {

                Dictionary<string, string> sabPaisaRespdict = new Dictionary<string, string>();

                string query = Request.QueryString["query"].ToString();
                string authIV = System.Configuration.ConfigurationManager.AppSettings["authIV"].ToString();// "ByIB6oS8U5w5EQra"; //"diSpuqqOil2C5DpS";		// use AuthIV,which is shared in mail
                string authKey = System.Configuration.ConfigurationManager.AppSettings["authKey"].ToString(); //"UK6LZlq2kJr15loP"; //"qIuEl3bmjOR0diuG";		// use AuthIV,which is shared in mail

                // Call sabPaisaResponse and pass query, authIV, authKey and its return	object of Dictionary<string, string>
                sabPaisaRespdict = sabPaisaIntegration.sabPaisaResponse(query, authIV, authKey);

                // As i got object of  Dictionary<string, string> which have all responsed data which return by sabpaisa, so rotate and capture in foreach loop
                foreach (KeyValuePair<string, string> pair in sabPaisaRespdict)
                {

                    if (pair.Key.ToString().ToUpper() == "PGRESPCODE")
                    {
                        objpayment.pgRespCode = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "PGTXNNO")
                    {
                       // lblBankTrnid.Text = pair.Value.ToString();
                       // objpayment.PGTxnNo = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "SABPAISATXID")
                    {
                        lblBankTrnid.Text = pair.Value.ToString();
                        objpayment.PGTxnNo = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "ISSUERREFNO")
                    {

                        objpayment.issuerRefNo = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "AUTHIDCODE")
                    {

                        objpayment.authIdCode = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "AMOUNT")
                    {
                      
                        objpayment.amount = Convert.ToDecimal(pair.Value.ToString());
                    }

                    else if (pair.Key.ToString().ToUpper() == "CLIENTTXNID")
                    {
                        lblClientTrnId.Text = pair.Value.ToString();
                        objpayment.clientTxnId = pair.Value.ToString();
                        //ViewState["strApplId"] = pair.Value.ToString().Substring(11);//To get the application id
                        //objpayment.vch_UniqueRefNo = Convert.ToString(ViewState["strApplId"]);

                    }
                    else if (pair.Key.ToString().ToUpper() == "FIRSTNAME")
                    {
                       
                        objpayment.firstName = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "PAYMODE")
                    {
                        objpayment.payMode = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "Email")
                    {
                        objpayment.email = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "MobileNO")
                    {
                        objpayment.mobileNo = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "SPRESPCODE")
                    {
                        objpayment.spRespCode = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "CID")
                    {
                        objpayment.cid = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "BID")
                    {
                        objpayment.bid = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "CLIENTCODE")
                    {
                        lblClientTrnId.Text = pair.Value.ToString();
                        objpayment.clientCode = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "PAYEEPROFILE")
                    {
                        objpayment.payeeProfile = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "TRANSDATE")
                    {
                        objpayment.transDate = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "SPRESPSTATUS")
                    {
                        objpayment.spRespStatus = pair.Value.ToString();
                        lblStatus.Text = pair.Value.ToString();
                        ViewState["Paystatus"] = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "CHALLANNO")
                    {
                        objpayment.challanNo = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "REMSG")
                    {
                        objpayment.reMsg = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "ORGTXNAMOUNT")
                    {
                        objpayment.orgTxnAmount = Convert.ToDecimal(pair.Value.ToString());
                    }
                    else if (pair.Key.ToString().ToUpper() == "PROGRAMID")
                    {
                        objpayment.programId = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "PROGRAMID")
                    {
                        objpayment.programId = pair.Value.ToString();
                    }
                    else if (pair.Key.ToString().ToUpper() == "Pint_ApplicantID")
                    {
                        objpayment.programId = pair.Value.ToString();
                    }

                    if (pair.Key.ToString().ToUpper() == "PAYEEPROFILE")
                    {
                        // lblStatus.Text = pair.Value.ToString();
                    }

                }
                

                    objpayment.Action = "U";
                    // objpayment.int_ApplicantID = 0;
                    string res = ccobjcafdeg.ManagePayment(objpayment);
                    ViewState["strApplId"] = res;
                

                btnPrintCAF.Visible = false;
                if (Convert.ToString(ViewState["Paystatus"]).ToUpper() == "SUCCESS")
                {
                    lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                    //imgFlag.Visible = true;
                    btnPrintCAF.Visible = true;
                    Util.SendPaymentSMS(objpayment.clientTxnId, objpayment.vch_UniqueRefNo, objpayment.mobileNo, "Success", "responsePaisa");
                }
                else if (Convert.ToString(ViewState["Paystatus"]).ToUpper() == "FAIL")
                {
                    lblPaymentMsg.Text = Messages.mError_Msg_Payment_Failure;
                    btnPrintCAF.Visible = false;
                    Util.SendPaymentSMS(objpayment.clientTxnId, objpayment.vch_UniqueRefNo, objpayment.mobileNo, "Fail", "responsePaisa");
                }

            }
            catch (Exception ex)
            {
                Util.LogError(ex, "responsePaisa");
            }
        }
    }

    #region "URL Decryption"
    private string DecryptQueryString(string strQueryString)
    {
        EncryptDecryptQueryString objEDQueryString = new EncryptDecryptQueryString();
        return objEDQueryString.Decrypt(strQueryString, "r0b1nr0y");
    }
    #endregion

    protected void btnPrintCAF_Click(object sender, EventArgs e)
    {
        strApplId = ViewState["strApplId"].ToString();
        Response.Redirect(GetUrl(strApplId), false);
        //   ScriptManager.RegisterStartupScript(btnPrintCAF, this.GetType(), "", "<script>window.open(' " + GetUrl(ViewState["strApplId"].ToString()) + " ','ApplicantCopy','left=20,top=20,width=700,height=700,menubar=1,resizable=1,scrollbars=1');</script>", false);
    }

    public string EncryptQueryString(string strQueryString)
    {
        EncryptDecryptQueryString objEDQueryString = new EncryptDecryptQueryString();
        return objEDQueryString.Encrypt(strQueryString, "r0b1nr0y");
    }
    protected string GetUrl(string AppId)
    {
        string strURL = "CAFSpot.aspx?";
        string strURLWithData = (strURL + string.Format("AppId1={0}", AppId));
        return strURLWithData;
    }






}