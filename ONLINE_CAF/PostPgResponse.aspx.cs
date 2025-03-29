
//'**********************************************************************************
//' File Name             :   Confirmation.aspx.cs
//' Description           :   Confirmation page
//' Created by            :   Sasmita Maharana
//' Created On            :   24-11-2017
//' Modification History   :
//'                        <CR no.>    <Date>      <Modified by>  < Modification Summary>   <instructed by>    '                                      
//' Function Name         : FillHierarchy for dllcolloge dllblock dlldistrict
//' Procedures Used       : SP_CIIP_BUILDINGDETAILS
//' PDK function          : <CR No.>  <PDK Function Name>                                                            <Purpose of use of PDK>
//'                             2    fillBuilding(), SaveData() ,CheckVadidation(),CheckAva()         fill building value, save data,serverside validation.checkAvaliablity of record
//'**************************************************************************************/--


using CommonModels;
using SabPaisaDotNetIntregreation;
using System;
using System.Collections.Generic;

public partial class ONLINE_CAF_PostPgResponse : System.Web.UI.Page
{

    CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, System.EventArgs e)
    {
        if (!IsPostBack)
        {
            
            SabPaisaIntegration sabPaisaIntegration = new SabPaisaIntegration();
            CafPayment objpayment = new CafPayment();
            string query = "";
            try
            {
                if (Request.Form["encResponse"] != null)
                {

                    Dictionary<string, string> sabPaisaRespdict = new Dictionary<string, string>();

                    query = Request.Form["encResponse"].ToString();
                    string authIV = System.Configuration.ConfigurationManager.AppSettings["authIV"].ToString(); //"EHffoCRKOXPVSeqS"; // use AuthIV,which is shared in mail
                    string authKey = System.Configuration.ConfigurationManager.AppSettings["authKey"].ToString(); //use AuthIV,which is shared in mail

                    // Call sabPaisaResponse and pass query, authIV, authKey and its return	object of Dictionary<string, string>
                    sabPaisaRespdict = sabPaisaIntegration.sabPaisaResponse(query, authIV, authKey);

                    // As i got object of  Dictionary<string, string> which have all responsed data which return by sabpaisa, so rotate and capture in foreach loop
                    foreach (KeyValuePair<string, string> pair in sabPaisaRespdict)
                    {
                        if (pair.Key.ToString().ToUpper() == "responseCode")
                        {
                            objpayment.pgRespCode = pair.Value.ToString();
                        }
                        else if (pair.Key.ToString().ToUpper() == "SABPAISATXNID")
                        {

                            objpayment.PGTxnNo = pair.Value.ToString();
                            lblBankTransId.Text = pair.Value.ToString();
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
                            //lblAmount.Text = pair.Value.ToString();
                            objpayment.amount = Convert.ToDecimal(pair.Value.ToString());
                        }

                        else if (pair.Key.ToString().ToUpper() == "CLIENTTXNID")
                        {
                            lblClientTransId.Text = pair.Value.ToString();
                            objpayment.clientTxnId = pair.Value.ToString();

                            objpayment.vch_UniqueRefNo = objpayment.clientTxnId.Substring(11);
                            lblUniqueRefNo.Text = objpayment.vch_UniqueRefNo;
                        }
                        else if (pair.Key.ToString().ToUpper() == "PAYERNAME") 
                        {
                            lblApplicantName.Text = pair.Value.ToString();
                            objpayment.firstName = pair.Value.ToString();
                        }
                        else if (pair.Key.ToString().ToUpper() == "PAYMENTMODE")
                        {
                            objpayment.payMode = pair.Value.ToString();
                        }
                        else if (pair.Key.ToString().ToUpper() == "PAYEREMAIL")
                        {
                            objpayment.email = pair.Value.ToString();
                        }
                        else if (pair.Key.ToString().ToUpper() == "PAYERMOBILE")
                        {
                            objpayment.mobileNo = pair.Value.ToString();
                        }
                        else if (pair.Key.ToString().ToUpper() == "STATUSCODE")
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
                        else if (pair.Key.ToString().ToUpper() == "STATUS")
                        {
                            objpayment.spRespStatus = pair.Value.ToString();
                            if (objpayment.spRespStatus != "success")
                            {
                                lblStatus.Text = "FAIL";
                            }
                            else
                            {
                                lblStatus.Text = objpayment.spRespStatus;
                            }
                               
                        }
                        else if (pair.Key.ToString().ToUpper() == "CHALLANNUMBER")
                        {
                            objpayment.challanNo = pair.Value.ToString();
                        }
                        else if (pair.Key.ToString().ToUpper() == "REMSG")
                        {
                            objpayment.reMsg = pair.Value.ToString();
                        }
                        else if (pair.Key.ToString().ToUpper() == "PAIDAMOUNT")
                        {
                            objpayment.orgTxnAmount = Convert.ToDecimal(pair.Value.ToString());
                        }
                        else if (pair.Key.ToString().ToUpper() == "PROGRAMID")
                        {
                            objpayment.programId = pair.Value.ToString();
                        }
                        else if (pair.Key.ToString().ToUpper() == "PINT_APPLICANTID")
                        {
                            objpayment.programId = pair.Value.ToString();
                        }

                    }
                    if (!string.IsNullOrEmpty(objpayment.clientTxnId))
                    {
                        objpayment.Action = "U";
                        string res = ccobj.ManagePayment_JR(objpayment);
                        if(res== "101")
                        {
                            lblPaymentMsg.ForeColor = System.Drawing.Color.Red;
                            lblPaymentMsg.Text = "Amount MisMatch";
                        }
                        else if(res == "102")
                        {
                            lblPaymentMsg.ForeColor = System.Drawing.Color.Red;
                            lblPaymentMsg.Text = "Transction ID MisMatch";
                        }
                    }
                    else
                    {
                        string res = "";
                    }
                    


                    if (string.Equals(objpayment.spRespStatus, "Success", StringComparison.OrdinalIgnoreCase))
                    {
                        lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                        btnPrintCAF.Visible = true;
                        Util.SendPaymentSMS(lblClientTransId.Text, lblUniqueRefNo.Text, objpayment.mobileNo, "success", "responsePaisa");
                    }
                    else
                    {
                        lblPaymentMsg.Text = Messages.mError_Msg_Payment_Failure;
                         lblPaymentMsg.ForeColor = System.Drawing.Color.Red;
                        btnPrintCAF.Visible = false;
                        Util.SendPaymentSMS(lblClientTransId.Text, lblUniqueRefNo.Text, objpayment.mobileNo, "fail", "responsePaisa");
                    }
                }
                else
                {
                    lblPaymentMsg.ForeColor = System.Drawing.Color.Red;
                    lblPaymentMsg.Text = "No Data Can be Displayed......Session is Null";
                }

            }
            catch (Exception ex)
            {
                Util.LogErrorSBI_sabPaisa(ex, "responsePaisa", query);
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

        Response.Redirect(GetUrl(lblUniqueRefNo.Text), false);
        //   ScriptManager.RegisterStartupScript(btnPrintCAF, this.GetType(), "", "<script>window.open(' " + GetUrl(ViewState["strApplId"].ToString()) + " ','ApplicantCopy','left=20,top=20,width=700,height=700,menubar=1,resizable=1,scrollbars=1');</script>", false);
    }

    public string EncryptQueryString(string strQueryString)
    {
        EncryptDecryptQueryString objEDQueryString = new EncryptDecryptQueryString();
        return objEDQueryString.Encrypt(strQueryString, "r0b1nr0y");
    }
    protected string GetUrl(string AppId)
    {
        string strURL = "CAFJr.aspx?";
        //string strURL = "CAFJrSpot.aspx?";
        string strURLWithData = (strURL + string.Format("AppId1={0}", AppId));
        return strURLWithData;
    }

}
