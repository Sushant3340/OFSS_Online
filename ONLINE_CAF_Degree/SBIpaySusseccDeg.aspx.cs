using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using com.toml.dp.util;

using CommonModels;

public partial class ONLINE_CAF_Degree_SBIpaySusseccDeg : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    CAFDegDal ccobjcafdeg = new CAFDegDal();
    string strApplId = string.Empty;
    string strMobileNo = string.Empty;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            SBIResponse();
        }
    }

    public void SBIResponse()
    {

        string strReturn = string.Empty;

        string EncodedKey = System.Configuration.ConfigurationManager.AppSettings["SBIEncodedKey"].ToString();
        int keysize = 128;

        //encData=orderReqId|atrn|transStatus|amount|currency|paymode|otherDetails|message|bankCode|bankRefNumber|trascationdate|Country|CIN||||||||||

        string encdata = AES128Bit.Decrypt(Request.Form["encData"].ToString(), EncodedKey, keysize);
        try
        {

            string[] encarray;
            encarray = encdata.Split('|');

            string strClientTransId = encarray[0].ToString();
            string strUniqRefNo = strClientTransId.Substring(11);
            string strStudType = strUniqRefNo.Substring(2, 1);

            //if Degree Transaction
            if (string.Equals(strStudType, "D", StringComparison.OrdinalIgnoreCase))
            {
                SBIePayDeg objSbi = new SBIePayDeg();
                objSbi.MerchantOrderNo = encarray[0].ToString();
                lblClientTrnid.Text = encarray[0].ToString();
                objSbi.SBIePayReferenceID = encarray[1].ToString();
                lblBankTrnId.Text = encarray[1].ToString();
                objSbi.Status = encarray[2].ToString();
                lblStatus.Text = encarray[2].ToString();
                objSbi.ActualAmount = Convert.ToDecimal(encarray[3]);
                objSbi.Currency = encarray[4].ToString();
                objSbi.Paymode = encarray[5].ToString();
                objSbi.OtherDetails = encarray[6].ToString();
                objSbi.Reason = encarray[7].ToString();
                objSbi.BankCode = encarray[8].ToString();
                objSbi.BankReferenceNumber = encarray[9].ToString();
                objSbi.TransactionDate = encarray[10].ToString();
                objSbi.Country = encarray[11].ToString();
                objSbi.CIN = encarray[12].ToString();
                objSbi.Action = "U";


              
                    strApplId = strReturn = ccobj.ManagePaymentSBIePayDeg(objSbi);

                    hdnVal.Value = strApplId;
                

                List<OFSS_OL_Entity_deg.CAFEntity_Deg> list = new List<OFSS_OL_Entity_deg.CAFEntity_Deg>();
                OFSS_OL_Entity_deg.CAFEntity_Deg obj = new OFSS_OL_Entity_deg.CAFEntity_Deg();
                
                    obj.Action = "P";
                    obj.UID = strApplId;
                    list = ccobjcafdeg.fillConfirmData(obj);
                

                if (list != null && list.Count >= 1)
                {
                    if (list[0].vch_CorMobileNo != null)
                    {
                        strMobileNo = list[0].vch_CorMobileNo;
                    }
                }

                lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                btnPrintCAF.Visible = true;
                Util.SendPaymentSMS(lblClientTrnid.Text, strApplId, strMobileNo, "Success", "SBIpaySusseccDeg");
            }
            else if (string.Equals(strStudType, "J", StringComparison.OrdinalIgnoreCase)) //junior Transaction
            {
                CommonModels.SBIePayDeg objSbi = new CommonModels.SBIePayDeg();
                objSbi.MerchantOrderNo = encarray[0].ToString();
                lblClientTrnid.Text = encarray[0].ToString();
                objSbi.SBIePayReferenceID = encarray[1].ToString();
                lblBankTrnId.Text = encarray[1].ToString();
                objSbi.Status = encarray[2].ToString();
                lblStatus.Text = encarray[2].ToString();
                objSbi.ActualAmount = Convert.ToDecimal(encarray[3]);
                objSbi.Currency = encarray[4].ToString();
                objSbi.Paymode = encarray[5].ToString();
                objSbi.OtherDetails = encarray[6].ToString();
                objSbi.Reason = encarray[7].ToString();
                objSbi.BankCode = encarray[8].ToString();
                objSbi.BankReferenceNumber = encarray[9].ToString();
                objSbi.TransactionDate = encarray[10].ToString();
                objSbi.Country = encarray[11].ToString();
                objSbi.CIN = encarray[12].ToString();
                objSbi.Action = "U";
                objSbi.UniqueRefNo = strUniqRefNo;

                
                    strApplId = strReturn = ccobj.ManagePaymentSBIePay_JR(objSbi);
                    hdnVal.Value = strApplId;
                
                lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                btnPrintCafJr.Visible = true;
                Util.SendPaymentSMS(lblClientTrnid.Text, strApplId, strMobileNo, "Success", "SBIPaymentDeg");
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "SBIpaySusseccDeg");
        }
    }

    protected void btnPrintCAF_Click(object sender, EventArgs e)
    {
        strApplId = hdnVal.Value;
        Response.Redirect(GetUrl(strApplId), false);
    }

    protected void btnPrintCafJr_Click(object sender, EventArgs e)
    {
        string strURL = "../ONLINE_CAF/CAFJr.aspx?";
        //string strURL = "../ONLINE_CAF/CAFJrSpot.aspx?";
        string strURLWithData = (strURL + string.Format("AppId1={0}", hdnVal.Value));
        Response.Redirect(strURLWithData, false);
    }

    protected string GetUrl(string AppId)
    {
        //string strURL = "CAFSpot.aspx?";
        string strURL = "CAFJr.aspx?";
        string strURLWithData = (strURL + string.Format("AppId1={0}", AppId));
        return strURLWithData;
    }

}