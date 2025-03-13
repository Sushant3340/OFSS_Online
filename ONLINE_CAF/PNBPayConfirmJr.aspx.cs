using System;
using com.awl.MerchantToolKit;
using CommonModels;

public partial class ONLINE_CAF_PNBPayConfirmJr : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    string strApplId = string.Empty;
    
    string strMobileNo = string.Empty;
    string key = System.Configuration.ConfigurationManager.AppSettings["PNBEncodedKey"].ToString();
    ResMsgDTO objResMsgDTO = new ResMsgDTO();
    string strAmt = string.Empty;
    string strAdditionafield = string.Empty;
    string strClientTrnsID = string.Empty;
    string strClientTrnsDate = string.Empty;
    protected void Page_Load(object sender, EventArgs e)
    {
        string strReturn = string.Empty;
        try
        {
            if (!IsPostBack)
            {
                if (Request.Form["merchantResponse"] != null)
                {
                    string merchantResponse = Request.Form["merchantResponse"];
                    AWLMEAPI transact = new AWLMEAPI();
                    objResMsgDTO = transact.parseTrnResMsg(merchantResponse, key);

                    lblClientTrnid.Text = objResMsgDTO.OrderId;
                    lblBankTrnId.Text = objResMsgDTO.PgMeTrnRefNo;
                    if(objResMsgDTO.StatusCode=="S")
                    {
                        lblStatus.Text = "Success";
                    }
                    else
                    {
                        lblStatus.Text = "Fail";
                    }
                   

                    string[] encarray;
                    encarray = objResMsgDTO.AddField1.Split('_');

                    PNBJr objPNB = new PNBJr();
                    strClientTrnsID= objResMsgDTO.OrderId;
                    objPNB.OrderId = objResMsgDTO.OrderId;
                    objPNB.PNBReferenceID = objResMsgDTO.PgMeTrnRefNo;
                    objPNB.StatusCode = lblStatus.Text.ToUpper();
                    strAmt = objResMsgDTO.TrnAmt;
                    strAdditionafield = objResMsgDTO.AddField1;
                    strClientTrnsDate= objResMsgDTO.TrnReqDate;
                    if (!string.IsNullOrEmpty(Convert.ToString(objResMsgDTO.TrnAmt)))
                    {
                        objPNB.TrnAmt = Convert.ToDecimal(objResMsgDTO.TrnAmt);
                    }
                    else
                    {
                        objPNB.TrnAmt = Convert.ToDecimal(0.00);
                    }
                   
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
                    objPNB.UniqueRefNo = encarray[1].ToString();

                 
                        strReturn = ccobj.ManagePaymentPNB_JR(objPNB);
                        string[] strUpdateSts = strReturn.Split('~');
                        strApplId = strUpdateSts[0].ToString();
                        
                        if (strUpdateSts.Length > 1)
                        {
                            hdnVal.Value = strApplId;
                            strMobileNo = strUpdateSts[1].ToString();
                        }
                       
                    

                    if (string.Equals(objResMsgDTO.StatusCode, "S", StringComparison.OrdinalIgnoreCase))
                    {
                        lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                        btnPrintCafJr.Visible = true;
                        Util.SendPaymentSMS(lblClientTrnid.Text, strApplId, strMobileNo, "Success", "PNBPayment");

                        
                    }
                    else
                    {
                        lblPaymentMsg.Text = Messages.mError_Msg_Payment_Failure;
                        btnPrintCafJr.Visible = false;
                        Util.SendPaymentSMS(lblClientTrnid.Text, strApplId, strMobileNo, "fail", "PNBPayment");

                       
                    }

                    //lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                    //btnPrintCafJr.Visible = true;
                    //Util.SendPaymentSMS(lblClientTrnid.Text, strApplId, strMobileNo, "Success", "PNBPayment");
                }
                else
                {
                    lblPaymentMsg.ForeColor = System.Drawing.Color.Red;
                    lblPaymentMsg.Text = "No Data Can be Displayed......Session is Null";
                }
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "PNBSuccess_ " + strClientTrnsID + "_ " + strAdditionafield + "_ " + strClientTrnsDate + "_ " + strAmt );
        }
    }

    //protected void btnPrintCAF_Click(object sender, EventArgs e)
    //{
    //    strApplId = hdnVal.Value;
    //    Response.Redirect(GetUrl(strApplId), false);
    //}

    protected void btnPrintCafJr_Click(object sender, EventArgs e)
    {
       // string strURL = "../ONLINE_CAF/CAFJr.aspx?";
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