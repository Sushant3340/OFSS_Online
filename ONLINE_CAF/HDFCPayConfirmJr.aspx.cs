using CCA.Util;
using CommonModels;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ONLINE_CAF_HDFCPayConfirmJr : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    string strApplId = string.Empty;
    string strMobileNo = string.Empty;
    string strReturn = string.Empty;
    protected void Page_Load(object sender, EventArgs e)
    {
        string workingKey = System.Configuration.ConfigurationManager.AppSettings["HDFCEnckey"].ToString();//put in the 32bit alpha numeric key in the quotes provided here
        CCACrypto ccaCrypto = new CCACrypto();
        string strClientRnNo = string.Empty;
        string strTrnAmount = string.Empty;
        string strFailureMsg = string.Empty;
        string bank_ref_no = string.Empty;
        string payment_mode = string.Empty;
        string billing_name = string.Empty;
        try
        {


            if (Request.Form["encResp"] != null)
            {
                string encResponse = ccaCrypto.Decrypt(Request.Form["encResp"], workingKey);
                NameValueCollection Params = new NameValueCollection();
                string[] segments = encResponse.Split('&');

                foreach (string seg in segments)
                {
                    string[] parts = seg.Split('=');
                    if (parts.Length > 0)
                    {
                        string Key = parts[0].Trim();
                        string Value = parts[1].Trim();
                        Params.Add(Key, Value);
                    }
                }

                ///--code to get individual data
                string[] outputResult;
                for (int i = 0; i < Params.Count; i++)
                {
                    if (Params.Keys[i] == "order_id")
                    {
                        lblClientTrnid.Text = Params[i];
                        strClientRnNo = Params[i];
                    }
                    if (Params.Keys[i] == "tracking_id")
                    {
                        lblBankTrnId.Text = Params[i];
                    }

                    if (Params.Keys[i] == "order_status")
                    {
                        lblStatus.Text = Params[i];
                        if (!string.Equals(lblStatus.Text, "Success", StringComparison.OrdinalIgnoreCase))
                        {
                            outputResult = segments[4].Split('=');
                            strFailureMsg = outputResult[1].ToString();
                        }
                        else
                        {
                            strFailureMsg = "";
                        }
                    }
                    if (Params.Keys[i] == "amount")
                    {
                        strTrnAmount = Params[i];
                    }
                    if (Params.Keys[i] == "trans_date")
                    {
                        hdnTrnDate.Value = Params[i];
                    }
                    if (Params.Keys[i] == "merchant_param1")
                    {
                        hdnmerchantparam1.Value = Params[i];
                    }

                    if (Params.Keys[i] == "bank_ref_no")
                    {
                        bank_ref_no = Params[i];
                    }
                    if (Params.Keys[i] == "payment_mode")
                    {
                        payment_mode = Params[i];
                    }

                    if (Params.Keys[i] == "billing_name")
                    {
                        billing_name = Params[i];
                    }

                }

               
               

                HDFCEntityJr objHDFC = new HDFCEntityJr();
                objHDFC.OrderId = lblClientTrnid.Text;
                objHDFC.HDFCReferenceID = lblBankTrnId.Text;
                objHDFC.Status = lblStatus.Text.ToUpper();
                objHDFC.TransactionDate = hdnTrnDate.Value;
                objHDFC.merchant_param1 = hdnmerchantparam1.Value;

                objHDFC.strFailureMsg = strFailureMsg;
                objHDFC.bank_ref_no = bank_ref_no;
                objHDFC.payment_mode = payment_mode;
                objHDFC.billing_name = billing_name;

                if (!string.IsNullOrEmpty(Convert.ToString(strTrnAmount)))
                {
                    objHDFC.TrnAmt = Convert.ToDecimal(strTrnAmount);
                }
                else
                {
                    objHDFC.TrnAmt = Convert.ToDecimal(0.00);
                }
                objHDFC.resultData = encResponse;
                objHDFC.Action = "U";


               

                    strReturn = ccobj.ManagePaymentHDFC_JR(objHDFC);
                    string[] strUpdateSts = strReturn.Split('~');
                    strApplId = strUpdateSts[0].ToString();

                    if (strUpdateSts.Length > 1)
                    {
                        hdnVal.Value = strApplId;
                        strMobileNo = strUpdateSts[1].ToString();
                    }

                

                if (string.Equals(lblStatus.Text, "SUCCESS", StringComparison.OrdinalIgnoreCase))
                {
                    lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                    btnPrintCafJr.Visible = true;
                    Util.SendPaymentSMS(lblClientTrnid.Text, strApplId, strMobileNo, "Success", "HDFCPayment");


                }
                else
                {
                    lblPaymentMsg.Text = Messages.mError_Msg_Payment_Failure;
                    btnPrintCafJr.Visible = false;
                    Util.SendPaymentSMS(lblClientTrnid.Text, strApplId, strMobileNo, "fail", "HDFCPayment");


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

            Util.LogError(ex, "HDFCPayment_ " + strClientRnNo + "_ " + strTrnAmount);
        }


    }

    //protected void btnPrintCAF_Click(object sender, EventArgs e)
    //{
    //    strApplId = hdnVal.Value;
    //    Response.Redirect(GetUrl(strApplId), false);
    //}

    protected void btnPrintCafJr_Click(object sender, EventArgs e)
    {
        //string strURL = "../ONLINE_CAF/CAFJr.aspx?";
        string strURL = "../ONLINE_CAF/CAFJrSpot.aspx?";
        string strURLWithData = (strURL + string.Format("AppId1={0}", hdnVal.Value));
        Response.Redirect(strURLWithData, false);
    }

    //protected string GetUrl(string AppId)
    //{
    //    string strURL = "CAFSpot.aspx?";
    //    //string strURL = "CAFJr.aspx?";
    //    string strURLWithData = (strURL + string.Format("AppId1={0}", AppId));
    //    return strURLWithData;
    //}
}