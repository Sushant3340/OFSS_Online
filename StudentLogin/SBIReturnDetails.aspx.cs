using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CommonModels;
using com.toml.dp.util;

public partial class StudentLogin_SBIReturnDetails : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        GetSBIResponse();

    }

    private void GetSBIResponse()
    {
        CommonClass ccobj = new CommonClass();
        int IsException = 0;
        string strReturn = string.Empty;
        string strApplId = string.Empty;
        SBIePayDeg objSbi = new SBIePayDeg();
        string EncodedKey = System.Configuration.ConfigurationManager.AppSettings["SBIEncodedKey"].ToString();
        int keysize = 128;

        string response = Request.Form.ToString();
        string encdata = AES128Bit.Decrypt(Request.Form["encStatusData"].ToString(), EncodedKey, keysize);

        // string mechantIdVal = AES128Bit.Decrypt(Request.Form["merchIdVal"].ToString(), EncodedKey, keysize);
        string[] encarray;
        encarray = encdata.Split('|');

        //Util.LogError(new Exception(), encdata);

        //there was an error while getting the values
        if (encarray.Length == 3 && string.Equals(encarray[1], "Error", StringComparison.OrdinalIgnoreCase))
        {
            Response.Redirect("FeesPayment_Jr.aspx?sbi_Jun=3");
        }
        else
        {
            /*
             * 
                atrn|status|country|currency|otherDetails|merchOrderno|amount|message|gatewayCode|traceNumber|instructionDate|Paymode|CIN||||||||||

                5414812608002|SUCCESS|IN|INR|294463^18D294463^BABLI KUMARI|1A6EF455A2E18D294463|1|Payment In Clearing|DECC|116032276555810|2018-06-12 10:16:56|CC
             * |10000032018061213136|1000003|0.87^0.16||||||||||
             */
            try
            {
                objSbi.SBIePayReferenceID = encarray[0].ToString();
                objSbi.Status = encarray[1].ToString();
                objSbi.Country = encarray[2].ToString();
                objSbi.Currency = encarray[3].ToString();
                objSbi.OtherDetails = encarray[4].ToString();
                objSbi.MerchantOrderNo = encarray[5].ToString();
                if (!string.IsNullOrEmpty(Convert.ToString(encarray[6])))
                {
                    objSbi.ActualAmount= Convert.ToDecimal(encarray[6]);
                }
                else
                {
                    objSbi.ActualAmount = Convert.ToDecimal(0.00);
                }

                // objSbi.ActualAmount = Convert.ToDecimal(encarray[6]);
                objSbi.Reason = encarray[7].ToString();
                objSbi.BankCode = encarray[8].ToString();
                objSbi.BankReferenceNumber = encarray[9].ToString();
                objSbi.TransactionDate = encarray[10].ToString();
                objSbi.Paymode = encarray[11].ToString();
                objSbi.CIN = encarray[12].ToString();
                objSbi.Action = "U";
                
                    strApplId = strReturn = ccobj.ManagePaymentSBIePay_JR(objSbi);
                
            }
            catch (Exception ex)
            {
                IsException = 1;
                Util.LogErrorSBI_sabPaisa(ex, "FeespaymentSBI", encdata);
            }
            finally
            {
                Context.ApplicationInstance.CompleteRequest();
            }
            if (IsException == 0)
            {
                //if data was successfully updated
                if (string.Equals(strApplId, objSbi.MerchantOrderNo.Substring(11), StringComparison.OrdinalIgnoreCase))
                {
                    //Session["SBI_Id_Jun"] = objSbi.MerchantOrderNo;
                    if (string.Equals(objSbi.Status, "success", StringComparison.OrdinalIgnoreCase))
                    {
                        Response.Redirect("FeesPayment_Jr.aspx?sbi_Jun=1");
                    }
                    else
                    {
                        Response.Redirect("FeesPayment_Jr.aspx?sbi_Jun=2");
                    }
                }
                else
                {
                    Response.Redirect("FeesPayment_Jr.aspx?sbi_Jun=3");
                }
            }
        }
    }
}