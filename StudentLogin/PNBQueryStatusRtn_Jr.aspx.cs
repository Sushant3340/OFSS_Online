using System;
using CommonModels;
using CustomFaults;
using com.awl.MerchantToolKit;

public partial class StudentLogin_PNBQueryStatusRtn_Jr : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();

    protected void Page_Load(object sender, EventArgs e)
    {
        GetPNBResponse();
    }
    private void GetPNBResponse()
    {
        if (Session["response"] != null)
        {

            int IsException = 0;
            string strReturn = string.Empty;
            string strApplId = string.Empty;

            ResMsgDTO objResMsgDTO = (ResMsgDTO)Session["response"];
            //there was an error while getting the values
            //if (!string.Equals(objResMsgDTO.StatusCode, "F", StringComparison.OrdinalIgnoreCase) && !string.Equals(objResMsgDTO.StatusCode, "S", StringComparison.OrdinalIgnoreCase)) 
            //{
            if (objResMsgDTO.StatusDesc == "Invalid Order ID")
            {
                Response.Redirect("FeesPayment_Jr.aspx?PNB_Jun=3");
            }
            else
            {
               PNBJr objPNB = new PNBJr();
                try
                {

                    string transactionSts = "";
                    if (objResMsgDTO.StatusCode == "S")
                    {
                        transactionSts = "Success";
                    }
                    else
                    {
                        transactionSts = "Fail";
                    }

                    objPNB.OrderId = objResMsgDTO.OrderId;
                    objPNB.PNBReferenceID = objResMsgDTO.PgMeTrnRefNo;
                    objPNB.StatusCode = transactionSts;
                    if (!string.IsNullOrEmpty(Convert.ToString(objResMsgDTO.TrnAmt)))
                    {
                        objPNB.TrnAmt = Convert.ToDecimal(objResMsgDTO.TrnAmt);
                    }
                    else
                    {
                        objPNB.TrnAmt = Convert.ToDecimal(0.00);
                    }
                    // objPNB.TrnAmt = Convert.ToDecimal(objResMsgDTO.TrnAmt);
                    objPNB.AuthZCode = objResMsgDTO.AuthZCode;
                    objPNB.TransactionDate = objResMsgDTO.TrnReqDate;
                    objPNB.RRN = objResMsgDTO.Rrn;
                    objPNB.TrnRemarks = objResMsgDTO.StatusDesc;
                    objPNB.ResponseCode = objResMsgDTO.ResponseCode;
                    objPNB.AddField1 = objResMsgDTO.AddField1;
                    objPNB.AddField2 = objResMsgDTO.AddField2;
                    objPNB.AddField3 = objResMsgDTO.AddField3;
                    objPNB.AddField4 = objResMsgDTO.AddField4;
                    objPNB.AddField5 = objResMsgDTO.AddField5;
                    objPNB.AddField6 = objResMsgDTO.AddField6;
                    objPNB.AddField7 = objResMsgDTO.AddField7;
                    objPNB.AddField8 = objResMsgDTO.AddField8;
                    objPNB.Action = "U";

                    
                        strApplId = strReturn = ccobj.ManagePaymentPNB_JR(objPNB);

                    
                }
                catch (Exception ex)
                {
                    IsException = 1;
                    Util.LogErrorSBI_sabPaisa(ex, "FeespaymentPNB ", Session["response"].ToString());
                }

                finally
                {
                    Context.ApplicationInstance.CompleteRequest();
                }
                if (IsException == 0)
                {
                    //if data was successfully updated
                    if (string.Equals(strApplId, objPNB.OrderId.Substring(11), StringComparison.OrdinalIgnoreCase))
                    {

                        if (string.Equals(objPNB.StatusCode, "S", StringComparison.OrdinalIgnoreCase))
                        {
                            Response.Redirect("FeesPayment_Jr.aspx?PNB_Jun=1");
                        }
                        else
                        {
                            Response.Redirect("FeesPayment_Jr.aspx?PNB_Jun=2");
                        }
                    }
                    else
                    {
                        Response.Redirect("FeesPayment_Jr.aspx?PNB_Jun=3");
                    }
                }
            }

        }
    }
}