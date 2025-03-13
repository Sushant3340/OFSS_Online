using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.Security.Cryptography;
using CommonModels;

public partial class ONLINE_CAF_AxisPayConfirmJr : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    string Decryptkey = System.Configuration.ConfigurationManager.AppSettings["AxisEncDecKey"].ToString();
    string strApplId = string.Empty;
    string strMobileNo = string.Empty;
    protected void Page_Load(object sender, EventArgs e)
    {
        string strReturn = string.Empty;
        string strClientRnNo = string.Empty;
        string strTrnAmount = string.Empty;
        if (Request.QueryString["i"] != null)
        {
            string i = Request.QueryString["i"].ToString();
            try
            {
                if (!string.IsNullOrWhiteSpace(i))
                {
                    byte[] keyArray = UTF8Encoding.UTF8.GetBytes(Decryptkey);

                    // byte[] toEncryptArray = Convert.FromBase64String(i);
                    byte[] toEncryptArray = Convert.FromBase64String(i.Replace(" ", "+"));
                    RijndaelManaged rDel = new RijndaelManaged();
                    rDel.Key = keyArray;
                    rDel.Mode = CipherMode.ECB;
                    // rDel.Padding = PaddingMode.Zeros;
                    ICryptoTransform cTransform = rDel.CreateDecryptor();
                    byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
                    string resultData=UTF8Encoding.UTF8.GetString(resultArray).ToString();
                    string[] encarray;
                    encarray = resultData.Split('&');

                    ///--code to get individual data
                    string[] outputResult;
                    outputResult = encarray[0].Split('=');
                    string bankTransId = outputResult[1].ToString();

                    outputResult = encarray[1].Split('=');
                    string StatusCode = outputResult[1].ToString();

                    outputResult = encarray[2].Split('=');
                    string remark = outputResult[1].ToString();

                    outputResult = encarray[3].Split('=');
                    string PGTrnRefid = outputResult[1].ToString();

                    outputResult = encarray[4].Split('=');
                    string tranDate = outputResult[1].ToString();

                    outputResult = encarray[5].Split('=');
                    string PaymentMode = outputResult[1].ToString();

                    outputResult = encarray[6].Split('=');
                    string clienttranId = outputResult[1].ToString();

                    outputResult = encarray[12].Split('=');
                    string amount = outputResult[1].ToString();

                    strClientRnNo = clienttranId;
                    lblClientTrnid.Text = clienttranId;
                    lblBankTrnId.Text = PGTrnRefid;


                    if (StatusCode == "000")
                    {
                        lblStatus.Text = "Success";
                    }
                    else if (StatusCode == "101")
                    {
                        lblStatus.Text = "Pending";
                    }
                    else
                    {
                        lblStatus.Text = "Fail";
                    }

                    if (PaymentMode == "AIB")
                    {
                        hdnPaymentMode.Value = "Axis Internet Banking";
                    }
                    else if (PaymentMode == "CD")
                    {
                        hdnPaymentMode.Value = "Credit Card/Debit Card";
                    }
                    else if (PaymentMode == "NR")
                    {
                        hdnPaymentMode.Value = "NEFT/RTGS";
                    }
                    else if (PaymentMode == "OIB")
                    {
                        hdnPaymentMode.Value = "Other Internet Banking";
                    }
                    else
                    {
                        hdnPaymentMode.Value = "";
                    }

                    AxisJrEntity objAxis = new AxisJrEntity();
                    objAxis.OrderId = clienttranId;
                    objAxis.AxisReferenceID = PGTrnRefid;
                    objAxis.Status = lblStatus.Text.ToUpper();
                    objAxis.StatusCode = StatusCode;
                    // objAxis.TrnAmt = Convert.ToDecimal(amount);
                    strTrnAmount = amount;
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
                    objAxis.PaymentModeDesc = hdnPaymentMode.Value;
                    objAxis.BankTranId = bankTransId;
                    objAxis.resultData = resultData;
                
                    objAxis.Action = "U";
                  

                  
                      
                        strReturn = ccobj.ManagePaymentAxis_JR(objAxis);
                        string[] strUpdateSts = strReturn.Split('~');
                        strApplId = strUpdateSts[0].ToString();

                        if (strUpdateSts.Length > 1)
                        {
                            hdnVal.Value = strApplId;
                            strMobileNo = strUpdateSts[1].ToString();
                        }

                   

                    if (StatusCode == "000")
                    {
                        lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                        btnPrintCafJr.Visible = true;
                        Util.SendPaymentSMS(lblClientTrnid.Text, strApplId, strMobileNo, "Success", "AxisPayment");


                    }
                    else
                    {
                        lblPaymentMsg.Text = Messages.mError_Msg_Payment_Failure;
                        btnPrintCafJr.Visible = false;
                        Util.SendPaymentSMS(lblClientTrnid.Text, strApplId, strMobileNo, "fail", "AxisPayment");


                    }

                    //lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                    //btnPrintCafJr.Visible = true;
                    //Util.SendPaymentSMS(lblClientTrnid.Text, strApplId, strMobileNo, "Success", "AxisPayment");

                }
                else
                {
                    lblPaymentMsg.ForeColor = System.Drawing.Color.Red;
                    lblPaymentMsg.Text = "No Data Can be Displayed......Session is Null";
                }
            }
            catch (Exception ex)
            {

                Util.LogError(ex, "AxisSuccess_ "+ strClientRnNo+"_ "+ strTrnAmount);
            }
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