//'**********************************************************************************
//' File Name             :   SahajPayConfirmJr.aspx.cs
//' Description           :   Sahaj Payment Confirmation for Intermediate
//' Created by            :   Santosh Kumar Behera
//' Created On            :   01-06-2018
//' Modification History   :
//'                        <CR no.>    <Date>      <Modified by>  < Modification Summary>   <instructed by>    '                                      
//' Function Name         : 
//' Procedures Used       : 
//'**************************************************************************************/--


using System;
using System.Collections.Generic;
using CustomFaults;
using System.Web.UI;
using SabPaisaDotNetIntregreation;
using CommonModels;

public partial class SahajPayConfirmJr : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    int intApplID = 0;
    string strApplName = "";
    string strApplId = "";
    string strResult = "";
    string strMobileNo = string.Empty;
    string strDynamicPwd = "";

    protected void Page_Load(object sender, System.EventArgs e)
    {
        if (!IsPostBack)
        {
            try
            {

                //string str = Convert.ToString(Request.Form["Uniquerefid"]);
                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + Convert.ToString(Request.Form["Uniquerefid"]) + "');", true);




                SahajDeg objpayment = new SahajDeg();
                objpayment.Action = "U";
                objpayment.Uniquerefid = Convert.ToString(Request.Form["Uniquerefid"]);
                objpayment.status = Convert.ToString(Request.Form["status"]);
                objpayment.sahaj_txn_id = Convert.ToInt64(Request.Form["sahaj_txn_id"]);
                objpayment.AppFee = Convert.ToDecimal(Request.Form["Actual_amount"]);

                //Actual_amount
                lblSahajTransId.Text = Convert.ToInt64(Request.Form["sahaj_txn_id"]).ToString();
                lblClientTransId.Text = Convert.ToString(Request.Form["Uniquerefid"]);
                lblStatus.Text = Convert.ToString(Request.Form["status"]);
                lblUniqueRefNo.Text = Request.Form["Uniquerefid"].Substring(11);
                //lblAmount.Text = Request.Form["Actual_amount"];


               
                    string res = ccobj.ManagePaymentSahaj_JR(objpayment);
                    strApplId = res;
                    hidVal.Value = res;
                

                List<CAFEntity> list = new List<CAFEntity>();
                CAFEntity obj = new CAFEntity();
               
                    obj.Action = "P";
                    obj.UID = strApplId;
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
                        lblApplicantName.Text = strApplName;
                    }
                    if (list[0].vch_CorMobileNo != null)
                    {
                        strMobileNo = list[0].vch_CorMobileNo;
                    }

                }

                if (string.Equals(Request.Form["status"], "Success", StringComparison.OrdinalIgnoreCase))
                {
                    lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                    btnPrintCAF.Visible = true;
                    Util.SendPaymentSMS(lblSahajTransId.Text, strApplId, strMobileNo, "success", "SahajPayment_Deg");
                }
                else
                {
                    lblPaymentMsg.Text = Messages.mError_Msg_Payment_Failure;
                    btnPrintCAF.Visible = false;
                    Util.SendPaymentSMS(lblSahajTransId.Text, strApplId, strMobileNo, "Fail", "SahajPayment_Deg");
                }
            }
            catch (Exception ex)
            {
                Util.LogError(ex, "SahajPaymentJr");
            }

        }
    }

    protected void btnPrintCAF_Click(object sender, EventArgs e)
    {
        Response.Redirect(GetUrl(hidVal.Value), false);
    }

    protected string GetUrl(string AppId)
    {
       // string strURL = "CAFJr.aspx?";
        string strURL = "CAFJrSpot.aspx?";
        string strURLWithData = (strURL + string.Format("AppId1={0}", AppId));
        return strURLWithData;
    }
}