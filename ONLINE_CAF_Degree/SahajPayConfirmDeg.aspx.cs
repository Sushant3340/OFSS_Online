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
using OFSS_OL_Entity;
using System.Web.UI;
using SabPaisaDotNetIntregreation;
using OFSS_OL_Entity_deg;
using System.Net;
using System.Text;
using System.IO;

public partial class SahajPayConfirmDeg : System.Web.UI.Page
{
    CAFDegDal ccobjcafdeg = new CAFDegDal();
    int intApplID = 0;
    string strApplName = "";
    static string strApplId = "";
    string strPwd = "";
    string strResult = "";
    SENDMAIL objMail = new SENDMAIL();
    SENDMSDSMS objMsg = new SENDMSDSMS();
    string strDynamicPwd = "";
    string strMobileNo = string.Empty;

    protected void Page_Load(object sender, System.EventArgs e)
    {
        if (!IsPostBack)
        {
            try
            {

                SahajDeg objpayment = new SahajDeg();
                objpayment.Action = "U";
                objpayment.Uniquerefid = Convert.ToString(Request.Form["Uniquerefid"]);
                objpayment.status = Convert.ToString(Request.Form["status"]);
                objpayment.sahaj_txn_id = Convert.ToInt64(Request.Form["sahaj_txn_id"]);

                lblSajaTrnId.Text = Convert.ToInt64(Request.Form["sahaj_txn_id"]).ToString();
                lblBankTrnid.Text = Convert.ToString(Request.Form["Uniquerefid"]);
                lblStatus.Text = Convert.ToString(Request.Form["status"]);

               
                    string res = ccobjcafdeg.ManagePaymentSahajDeg(objpayment);
                    strApplId = res;
                    hidVal.Value = res;


                

                List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
                CAFEntity_Deg obj = new CAFEntity_Deg();
                
                    obj.Action = "P";
                    obj.UID = strApplId;
                    list = ccobjcafdeg.fillConfirmData(obj);
                

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

                    if (list[0].strPassword != null)
                    {
                        strPwd = list[0].strPassword.ToString();
                    }
                    if (list[0].vch_CorMobileNo != null)
                    {
                        strMobileNo = list[0].vch_CorMobileNo;
                    }

                }

                if (string.Equals(Request.Form["status"], "Success", StringComparison.OrdinalIgnoreCase))
                {
                    lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;
                    imgFlag.Visible = true;
                    btnPrintCAF.Visible = true;
                    Util.SendPaymentSMS(lblSajaTrnId.Text, strApplId, strMobileNo, "success", "SahajPayment_Deg");
                }
                else
                {
                    lblPaymentMsg.Text = Messages.mError_Msg_Payment_Failure;
                    imgFlag.Visible = true;
                    btnPrintCAF.Visible = true;
                    Util.SendPaymentSMS(lblSajaTrnId.Text, strApplId, strMobileNo, "Fail", "SahajPayment_Deg");
                }

                //if (Convert.ToString(Request.Form["status"]).ToUpper() == "SUCCESS")
                //{
                //    lblPaymentMsg.Text = Messages.mError_Msg_Payment_Success;

                //}
                //else if (Convert.ToString(Request.Form["status"]).ToUpper() == "FAIL")
                //{
                //    lblPaymentMsg.Text = Messages.mError_Msg_Payment_Failure;
                //    btnPrintCAF.Visible = false;
                //}

            }
            catch (Exception ex)
            {
                Util.LogError(ex, "SahajPayment_Deg");
            }


        }
    }

    //#region "URL Decryption"
    //private string DecryptQueryString(string strQueryString)
    //{
    //    EncryptDecryptQueryString objEDQueryString = new EncryptDecryptQueryString();
    //    return objEDQueryString.Decrypt(strQueryString, "r0b1nr0y");
    //}
    //#endregion

    protected void btnPrintCAF_Click(object sender, EventArgs e)
    {
       
        Response.Redirect(GetUrl(hidVal.Value), false);
        ////  ScriptManager.RegisterStartupScript(btnPrintCAF, this.GetType(), "", "<script>window.open(' " + GetUrl(ViewState["strApplId"].ToString()) + " ','ApplicantCopy','left=20,top=20,width=700,height=700,menubar=1,resizable=1,scrollbars=1');</script>", false);

    }

    //public string EncryptQueryString(string strQueryString)
    //{
    //    EncryptDecryptQueryString objEDQueryString = new EncryptDecryptQueryString();
    //    return objEDQueryString.Encrypt(strQueryString, "r0b1nr0y");
    //}


    protected string GetUrl(string AppId)
    {
        string strURL = "CAFSpot.aspx?";
        string strURLWithData = (strURL + string.Format("AppId1={0}", AppId));
        return strURLWithData;
    }



    //#region show Data
    //protected void ShowData(string strRefID)
    //{
    //    List<CAFEntity> list = new List<CAFEntity>();
    //    try
    //    {
    //        CAFEntity obj = new CAFEntity();
    //        using (SAMSOLBusinessClient client = new SAMSOLBusinessClient())
    //        {
    //            obj.Action = "P";
    //            obj.UID = strRefID;
    //            list = client.fillconfirmJuniorStream(obj);
    //        }

    //        if (list != null && list.Count >= 1)
    //        {
    //            if (list[0].int_ApplicantID != null)
    //            {
    //                intApplID = list[0].int_ApplicantID;
    //            }
    //            if (list[0].vch_ApplicantName != null)
    //            {
    //                strApplName = list[0].vch_ApplicantName.ToString();
    //            }
    //        }
    //        lblName.Text = strApplName.Trim();
    //       // lblAppId.Text = strRefID.Trim();
    //    }
    //    catch (Exception ex)
    //    {
    //        throw ex;
    //    }
    //    finally
    //    {
    //        list.Clear();
    //    }
    //}
    //#endregion



    private void PaymentConfirmation(string Uniquerefid, string SAHAJtxnid)
    {
        var request = (HttpWebRequest)WebRequest.Create("https://uatsrv.sahaj.co.in/BSEBSkash/bsebSkashService/paymentAcknowledgement");

        var postData = "Uniquerefid=" + Uniquerefid;
        postData += "&SAHAJ_txn_id=world" + SAHAJtxnid;
        var data = Encoding.ASCII.GetBytes(postData);

        request.Method = "POST";
        request.ContentType = "application/x-www-form-urlencoded";
        request.ContentLength = data.Length;

        using (var stream = request.GetRequestStream())
        {
            stream.Write(data, 0, data.Length);
        }
        var response = (HttpWebResponse)request.GetResponse();
        var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
    }

}