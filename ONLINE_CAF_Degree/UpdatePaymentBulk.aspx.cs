/*
 * Created by : Ritika lath
 * Created On : 6th August 2018
 * Class name : ONLINE_CAF_Degree_UpdatePaymentBulk
 * File name : UpdatePaymentBulk.aspx.cs
 * [Modification History]
 * [CR No]      [Modified By]       [Modified by]       [Description]
 */

using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;
using CommonModels;

public partial class ONLINE_CAF_Degree_UpdatePaymentBulk : System.Web.UI.Page
{
     CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            try
            {
                CommonHelper.PopulatePageSize(ddlNoOfRec);
                hdnPageIndex.Value = "1";
                ddlNoOfRec.SelectedValue = "10";
                FillGridView(Convert.ToInt32(hdnPageIndex.Value), Convert.ToInt32(ddlNoOfRec.SelectedValue));
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(Page, this.GetType(), "Myalert", "jAlert('', '<strong>" + ex.Message.ToString().Replace("'", "") + "</strong>', Title);", true);
            }
        }
    }

    protected void btnSearchclose_Click(object sender, EventArgs e)
    {
        try
        {
            FillGridView(Convert.ToInt32(hdnPageIndex.Value), Convert.ToInt32(ddlNoOfRec.SelectedValue));
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(Page, this.GetType(), "Myalert", "jAlert('', '<strong>" + ex.Message.ToString().Replace("'", "") + "</strong>', Title);", true);
        }
    }

    protected void ddlNoOfRec_SelectedIndexChanged(object sender, EventArgs e)
    {
        try
        {
            hdnPageIndex.Value = "1";
            FillGridView(Convert.ToInt32(hdnPageIndex.Value), Convert.ToInt32(ddlNoOfRec.SelectedValue));
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(Page, this.GetType(), "Myalert", "jAlert('', '<strong>" + ex.Message.ToString().Replace("'", "") + "</strong>', Title);", true);
        }
    }

    protected void Page_Changed(object sender, EventArgs e)
    {
        try
        {
            hdnPageIndex.Value = ((LinkButton)sender).CommandArgument;
            FillGridView(Convert.ToInt32(hdnPageIndex.Value), Convert.ToInt32(ddlNoOfRec.SelectedValue));
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(Page, this.GetType(), "Myalert", "jAlert('', '<strong>" + ex.Message.ToString().Replace("'", "") + "</strong>', Title);", true);
        }
    }

    protected void lbtnAll_Click(object sender, EventArgs e)
    {
        try
        {
            if (string.Equals(lnkBtnAll.Text, "All", StringComparison.OrdinalIgnoreCase))
            {

                hdnPageIndex.Value = "1";
                FillGridView(1, Convert.ToInt32(hdnTotalRows.Value));
                divNoRecs.Visible = false;
                rptPager.DataSource = null;
                rptPager.DataBind();
                rptPager.Visible = false;
                lnkBtnAll.Visible = true;
                lnkBtnAll.Text = "Paging";
            }
            else
            {
                hdnPageIndex.Value = "1";
                FillGridView(1, 10);
                divNoRecs.Visible = true;
                ddlNoOfRec.SelectedValue = "10";
                rptPager.Visible = true;
                lnkBtnAll.Visible = true;
                lnkBtnAll.Text = "All";
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(Page, this.GetType(), "Myalert", "jAlert('', '<strong>" + ex.Message.ToString().Replace("'", "") + "</strong>', Title);", true);
        }
    }

    protected void gvPaymentList_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            int intPageNo = 0;
            if (Convert.ToInt16(hdnPageIndex.Value) > 1)
            {
                intPageNo = (Convert.ToInt16(hdnPageIndex.Value) - 1) * Convert.ToInt32(ddlNoOfRec.SelectedValue) + e.Row.DataItemIndex + 1;
            }
            else
            {
                intPageNo = e.Row.DataItemIndex + 1;
            }
            e.Row.Cells[0].Text = intPageNo.ToString();
        }
    }

    protected void drpGateway_SelectedIndexChanged(object sender, EventArgs e)
    {
        try
        {
            ClearControls();
            drp_Payment_Mode.Items.Clear();
            drp_Payment_Mode.Items.Insert(0, new ListItem("-Select-", "0"));
            if (drpGateway.SelectedIndex > 0 && drpGateway.SelectedIndex > 0)
            {
                PaySearchEntity obj = new PaySearchEntity();
                obj.Action = "pay";
                obj.intColType = Convert.ToInt32(drpCollegeType.SelectedValue);
                obj.int_Gateway = Convert.ToInt32(drpGateway.SelectedValue);
                DataSet objDa = new DataSet();
                
                    objDa = ccobj.GetInitiatedPaymentList(obj);
                    if (objDa != null && objDa.Tables.Count > 0)
                    {
                        DataTable objDt = objDa.Tables[0];
                        if (objDt != null && objDt.Rows.Count > 0)
                        {
                            drp_Payment_Mode.Items.Clear();
                            drp_Payment_Mode.DataSource = objDt;
                            drp_Payment_Mode.DataTextField = "Paymode";
                            drp_Payment_Mode.DataValueField = "Paymode";
                            drp_Payment_Mode.DataBind();
                            drp_Payment_Mode.Items.Insert(0, new ListItem("-Select-", "0"));
                        }
                    }
               
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(Page, this.GetType(), "Myalert", "jAlert('', '<strong>" + ex.Message.ToString().Replace("'", "") + "</strong>', Title);", true);
        }
    }

    protected void btnUpdatePayment_Click(object sender, EventArgs e)
    {
        try
        {
            int int_Gateway = 0;
            int_Gateway = Convert.ToInt32(drpGateway.SelectedValue);
            if (int_Gateway == 1)
            {
                if (gvSBI.Rows.Count > 0)
                {
                    #region SBI
                    DataTable dt_SBI = new DataTable();
                    dt_SBI.TableName = "dtSBI";
                    dt_SBI.Columns.Add(new DataColumn("ATRN"));
                    dt_SBI.Columns.Add(new DataColumn("ResponseStatus"));
                    dt_SBI.Columns.Add(new DataColumn("countrycode"));
                    dt_SBI.Columns.Add(new DataColumn("currencycode"));
                    dt_SBI.Columns.Add(new DataColumn("merchotherdetails"));
                    dt_SBI.Columns.Add(new DataColumn("merchantposetdamount"));
                    dt_SBI.Columns.Add(new DataColumn("merchantordernumber"));
                    dt_SBI.Columns.Add(new DataColumn("responsemessage"));
                    dt_SBI.Columns.Add(new DataColumn("paygatewaycode"));
                    dt_SBI.Columns.Add(new DataColumn("paygatewaytracenumber"));
                    dt_SBI.Columns.Add(new DataColumn("creationDate"));
                    dt_SBI.Columns.Add(new DataColumn("paymodeCode"));
                    dt_SBI.Columns.Add(new DataColumn("CIN"));

                    for (int cnt = 0; cnt < gvSBI.Rows.Count; cnt++)
                    {
                        CheckBox objCheckBox = (CheckBox)gvSBI.Rows[cnt].FindControl("chkSelectSingle");
                        string updateStatus = gvSBI.Rows[cnt].Cells[gvSBI.Rows[cnt].Cells.Count - 1].Text;

                        //if the checkbox is checked and it is updated by serivce then update the details
                        if (objCheckBox.Checked && string.Equals("updated", updateStatus, StringComparison.OrdinalIgnoreCase))
                        {
                            GridViewRow currGvRow = gvSBI.Rows[cnt];
                            DataRow drow = dt_SBI.NewRow();
                            drow["merchantordernumber"] = currGvRow.Cells[2].Text;
                            drow["ATRN"] = currGvRow.Cells[3].Text;
                            drow["ResponseStatus"] = currGvRow.Cells[4].Text;
                            drow["countrycode"] = currGvRow.Cells[5].Text;
                            drow["currencycode"] = currGvRow.Cells[6].Text;
                            drow["merchotherdetails"] = currGvRow.Cells[7].Text;
                            drow["merchantposetdamount"] = currGvRow.Cells[8].Text;
                            drow["responsemessage"] = currGvRow.Cells[9].Text;
                            drow["paygatewaycode"] = currGvRow.Cells[10].Text;
                            drow["paygatewaytracenumber"] = currGvRow.Cells[11].Text;
                            drow["creationDate"] = currGvRow.Cells[12].Text;
                            drow["paymodeCode"] = currGvRow.Cells[13].Text;
                            drow["CIN"] = currGvRow.Cells[14].Text;
                            dt_SBI.Rows.Add(drow);
                        }
                    }
                    if (dt_SBI != null && dt_SBI.Rows.Count > 0)
                    {
                        string strXml = GetSTRXMLResult(dt_SBI);
                        PaySearchEntity objEntity = new PaySearchEntity();
                        objEntity.int_Gateway = Convert.ToInt32(drpGateway.SelectedValue);
                        objEntity.strXml = strXml;
                        objEntity.Action = "add";
                        objEntity.intColType = Convert.ToInt32(drpCollegeType.SelectedValue);
                        
                            int intRetValue = ccobj.UpdateInitiatedPayment(objEntity);
                            FillGridView(Convert.ToInt32(hdnPageIndex.Value), Convert.ToInt32(ddlNoOfRec.SelectedValue));
                        
                    }
                    #endregion
                }
            }
            else if (int_Gateway == 2)
            {
                if (gvSabPaisa.Rows.Count > 0)
                {
                    #region SabPaisa
                    DataTable dt_Sab_Paisa = new DataTable();
                    dt_Sab_Paisa.TableName = "dtSubPaisa";
                    dt_Sab_Paisa.Columns.Add(new DataColumn("clientTxnId"));
                    dt_Sab_Paisa.Columns.Add(new DataColumn("pnTxnId"));
                    dt_Sab_Paisa.Columns.Add(new DataColumn("sabPaisaTxnId"));
                    dt_Sab_Paisa.Columns.Add(new DataColumn("sabPaisaRespCode"));
                    dt_Sab_Paisa.Columns.Add(new DataColumn("payeeAmount"));
                    dt_Sab_Paisa.Columns.Add(new DataColumn("transCompleteDate"));
                    dt_Sab_Paisa.Columns.Add(new DataColumn("paymentMode"));
                    dt_Sab_Paisa.Columns.Add(new DataColumn("status"));

                    for (int cnt = 0; cnt < gvSabPaisa.Rows.Count; cnt++)
                    {
                        //if the checkbox is checked and it is updated by serivce then update the details
                        CheckBox objCheckBox = (CheckBox)gvSabPaisa.Rows[cnt].FindControl("chkSelectSingle");
                        string updateStatus = gvSabPaisa.Rows[cnt].Cells[gvSabPaisa.Rows[cnt].Cells.Count - 1].Text;

                        if (objCheckBox.Checked && string.Equals("updated", updateStatus, StringComparison.OrdinalIgnoreCase))
                        {
                            GridViewRow currGvRow = gvSabPaisa.Rows[cnt];
                            DataRow drow = dt_Sab_Paisa.NewRow();
                            drow["clientTxnId"] = currGvRow.Cells[2].Text;
                            drow["pnTxnId"] = currGvRow.Cells[3].Text;
                            drow["sabPaisaTxnId"] = currGvRow.Cells[4].Text;
                            drow["paymentMode"] = currGvRow.Cells[5].Text;
                            drow["sabPaisaRespCode"] = currGvRow.Cells[6].Text;
                            drow["status"] = currGvRow.Cells[7].Text;
                            drow["payeeAmount"] = currGvRow.Cells[8].Text;
                            drow["transCompleteDate"] = currGvRow.Cells[9].Text;
                            dt_Sab_Paisa.Rows.Add(drow);
                        }
                    }
                    if (dt_Sab_Paisa != null && dt_Sab_Paisa.Rows.Count > 0)
                    {
                        string strXml = GetSTRXMLResult(dt_Sab_Paisa);
                        PaySearchEntity objEntity = new PaySearchEntity();
                        objEntity.int_Gateway = Convert.ToInt32(drpGateway.SelectedValue);
                        objEntity.strXml = strXml;
                        objEntity.Action = "add";
                        objEntity.intColType = Convert.ToInt32(drpCollegeType.SelectedValue);
                       
                            int intRetValue = ccobj.UpdateInitiatedPayment(objEntity);
                            FillGridView(Convert.ToInt32(hdnPageIndex.Value), Convert.ToInt32(ddlNoOfRec.SelectedValue));
                        
                    }
                    #endregion
                }
            }
            else if (int_Gateway == 3)
            {
                if (gvSahaj.Rows.Count > 0)
                {
                    #region Sahaj
                    DataTable dt_Sahaj = new DataTable();
                    dt_Sahaj.TableName = "dtSahaj";
                    dt_Sahaj.Columns.Add(new DataColumn("uniqueRefId"));
                    dt_Sahaj.Columns.Add(new DataColumn("clientTxnId"));
                    dt_Sahaj.Columns.Add(new DataColumn("payeeAmount"));
                    dt_Sahaj.Columns.Add(new DataColumn("sahajTxnId"));
                    dt_Sahaj.Columns.Add(new DataColumn("status"));
                    for (int cnt = 0; cnt < gvSahaj.Rows.Count; cnt++)
                    {
                        //if the checkbox is checked and it is updated by serivce then update the details
                        CheckBox objCheckBox = (CheckBox)gvSahaj.Rows[cnt].FindControl("chkSelectSingle");
                        string updateStatus = gvSahaj.Rows[cnt].Cells[gvSahaj.Rows[cnt].Cells.Count - 1].Text;

                        if (objCheckBox.Checked && string.Equals("updated", updateStatus, StringComparison.OrdinalIgnoreCase))
                        {
                            GridViewRow currGvRow = gvSahaj.Rows[cnt];
                            DataRow drow = dt_Sahaj.NewRow();
                            drow["uniqueRefId"] = currGvRow.Cells[1].Text;
                            drow["clientTxnId"] = currGvRow.Cells[2].Text;
                            drow["payeeAmount"] = currGvRow.Cells[3].Text;
                            drow["sahajTxnId"] = currGvRow.Cells[4].Text;
                            drow["status"] = currGvRow.Cells[5].Text;
                            dt_Sahaj.Rows.Add(drow);
                        }
                    }
                    if (dt_Sahaj != null && dt_Sahaj.Rows.Count > 0)
                    {
                        string strXml = GetSTRXMLResult(dt_Sahaj);
                        PaySearchEntity objEntity = new PaySearchEntity();
                        objEntity.int_Gateway = Convert.ToInt32(drpGateway.SelectedValue);
                        objEntity.strXml = strXml;
                        objEntity.Action = "add";
                        objEntity.intColType = Convert.ToInt32(drpCollegeType.SelectedValue);
                       
                            int intRetValue = ccobj.UpdateInitiatedPayment(objEntity);
                            FillGridView(Convert.ToInt32(hdnPageIndex.Value), Convert.ToInt32(ddlNoOfRec.SelectedValue));
                        
                    }
                    #endregion
                }
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(Page, this.GetType(), "Myalert", "jAlert('', '<strong>" + ex.Message.ToString().Replace("'", "") + "</strong>', Title);", true);
        }
    }

    protected void btnGetPaymentDetails_Click(object sender, EventArgs e)
    {
        try
        {
            int int_Gateway = 0;
            int_Gateway = Convert.ToInt32(drpGateway.SelectedValue);
            if (int_Gateway == 1)
            {
                if (gvSBI.Rows.Count > 0)
                {
                    for (int cnt = 0; cnt < gvSBI.Rows.Count; cnt++)
                    {
                        CheckBox objCheckBox = (CheckBox)gvSBI.Rows[cnt].FindControl("chkSelectSingle");
                        if (objCheckBox.Checked)
                        {
                            UpdateSBIPayment(gvSBI.Rows[cnt].Cells[2].Text, gvSBI.Rows[cnt]);
                        }
                    }
                }
            }
            if (int_Gateway == 2)
            {
                if (gvSabPaisa.Rows.Count > 0)
                {
                    for (int cnt = 0; cnt < gvSabPaisa.Rows.Count; cnt++)
                    {
                        CheckBox objCheckBox = (CheckBox)gvSabPaisa.Rows[cnt].FindControl("chkSelectSingle");
                        if (objCheckBox.Checked)
                        {
                            UpdateSubPaisaPayStatus(gvSabPaisa.Rows[cnt].Cells[2].Text, gvSabPaisa.Rows[cnt]);
                        }
                    }
                }
            }
            if (int_Gateway == 3)
            {
                if (gvSahaj.Rows.Count > 0)
                {
                    for (int cnt = 0; cnt < gvSahaj.Rows.Count; cnt++)
                    {
                        CheckBox objCheckBox = (CheckBox)gvSahaj.Rows[cnt].FindControl("chkSelectSingle");
                        if (objCheckBox.Checked)
                        {
                            UpdateSahajPayment(gvSahaj.Rows[cnt].Cells[2].Text, gvSahaj.Rows[cnt]);
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(Page, this.GetType(), "Myalert", "jAlert('', '<strong>" + ex.Message.ToString().Replace("'", "") + "</strong>', Title);", true);
        }
    }

    private string GetSTRXMLResult(DataTable dtTable)
    {
        string strXMLResult = "";
        if ((dtTable != null))
        {
            if (dtTable.Rows.Count > 0)
            {
                StringWriter sw = new StringWriter();
                dtTable.WriteXml(sw);
                strXMLResult = sw.ToString();
                sw.Close();
                sw.Dispose();
            }
        }
        return strXMLResult;
    }

    private void ClearControls()
    {
        gvSBI.DataSource = null;
        gvSBI.DataBind();
        gvSBI.Visible = false;
        gvSabPaisa.DataSource = null;
        gvSabPaisa.DataBind();
        gvSabPaisa.Visible = false;
        gvSahaj.DataSource = null;
        gvSahaj.DataBind();
        gvSahaj.Visible = false;
        btnGetPaymentDetails.Visible = false;
        //btnUpdatePayment.Visible = false;
        hdnTotalRows.Value = string.Empty;
        divNoRecs.Visible = false;
        lblPaging.Visible = false;
        lblPaging.Text = string.Empty;
        rptPager.Visible = false;
        lnkBtnAll.Visible = false;
        lnkBtnAll.Text = "All";
    }

    private void FillGridView(int intPageIndex, int intPageSize)
    {

        try
        {
            ClearControls();
           
                PaySearchEntity obj = new PaySearchEntity();
                List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
                obj.Action = "V";
                obj.vch_Unique_Refno = txtrefno.Text;
                obj.str_Client_TxnId = txtrnsctid.Text;
                obj.intColType = Convert.ToInt32(drpCollegeType.SelectedValue);
                if (!string.IsNullOrEmpty(txtFromDate.Text))
                {
                    obj.fromDate = txtFromDate.Text;
                }
                if (!string.IsNullOrEmpty(txtTodate.Text))
                {
                    obj.toDate = txtTodate.Text;
                }
                obj.int_Gateway = Convert.ToInt32(drpGateway.SelectedValue);
                obj.int_Page_Index = intPageIndex;
                obj.int_Page_Size = intPageSize;
                obj.str_Payment_Mode = drp_Payment_Mode.SelectedIndex > 0 ? drp_Payment_Mode.SelectedValue : String.Empty;
                DataSet objDs = new DataSet();
                objDs = ccobj.GetInitiatedPaymentList(obj);
                if (objDs != null && objDs.Tables.Count > 0)
                {
                    if (obj.int_Gateway == 1)
                    {
                        gvSBI.DataSource = objDs.Tables[0];
                        gvSBI.DataBind();
                        gvSBI.Visible = true;
                        if (gvSBI.Rows.Count > 0)
                        {
                            ImplementPaging(gvSBI, Convert.ToInt32(objDs.Tables[0].Rows[0]["row_cnt"]), intPageIndex, intPageSize);
                        }
                        btnGetPaymentDetails.Visible = true;
                        //btnUpdatePayment.Visible = true;
                    }
                    else if (obj.int_Gateway == 2)
                    {
                        gvSabPaisa.DataSource = objDs.Tables[0];
                        gvSabPaisa.DataBind();
                        gvSabPaisa.Visible = true;
                        if (gvSabPaisa.Rows.Count > 0)
                        {
                            ImplementPaging(gvSabPaisa, Convert.ToInt32(objDs.Tables[0].Rows[0]["row_cnt"]), intPageIndex, intPageSize);
                        }
                        btnGetPaymentDetails.Visible = true;
                        // btnUpdatePayment.Visible = true;
                    }
                    else if (obj.int_Gateway == 3)
                    {
                        gvSahaj.DataSource = objDs.Tables[0];
                        gvSahaj.DataBind();
                        gvSahaj.Visible = true;
                        if (gvSahaj.Rows.Count > 0)
                        {
                            ImplementPaging(gvSahaj, Convert.ToInt32(objDs.Tables[0].Rows[0]["row_cnt"]), intPageIndex, intPageSize);
                        }
                        btnGetPaymentDetails.Visible = true;
                        //btnUpdatePayment.Visible = true;
                    }
                }
            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }

    private void ImplementPaging(GridView objGridView, int int_Rec_Count, int int_Page_index, int int_Page_Size)
    {
        divNoRecs.Visible = true;
        lblPaging.Visible = true;
        rptPager.Visible = true;
        CommonHelper.PopulatePager(rptPager, int_Rec_Count, Convert.ToInt32(hdnPageIndex.Value), Convert.ToInt32(ddlNoOfRec.SelectedValue));
        int startCount = ((int_Page_index - 1) * int_Page_Size) + 1;
        int endCount = (int_Page_index * int_Page_Size);
        if (endCount > int_Rec_Count)
        {
            endCount = int_Rec_Count;
        }
        lblPaging.Text = "Results " + startCount + "-" + endCount + " of " + int_Rec_Count;
        hdnTotalRows.Value = int_Rec_Count.ToString();
        if (objGridView.Rows.Count < int_Rec_Count) //means there are more than one page
        {
            lnkBtnAll.Visible = true;
            lnkBtnAll.Text = "All";
        }
    }

    private void UpdateSahajPayment(string strClientTransId, GridViewRow gRow)
    {
        try
        {
            System.Net.ServicePointManager.Expect100Continue = false;

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://prodapi.sahaj.co.in/v1/BSEBSKASH/bseb/paymentAcknowledgement");
            // "https://srv.sevl.co.in/BSEBSkash/bsebSkashService/paymentAcknowledgement");
            string postData = "Uniquerefid=" + strClientTransId;
            //var data = Encoding.ASCII.GetBytes(postData);

            request.Method = "POST";
            request.ContentType = "text/plain";
            request.ContentType = "application/x-www-form-urlencoded";
            request.ContentLength = postData.Length;
            StreamWriter requestWriter = new StreamWriter(request.GetRequestStream());
            requestWriter.Write(postData);
            requestWriter.Close();

            WebResponse webResponse = (HttpWebResponse)request.GetResponse();
            Stream webStream = webResponse.GetResponseStream();
            StreamReader responseReader = new StreamReader(webStream);

            //3BA69CC087D18D294463|248595950|323.50
            string strGateWayStatus = responseReader.ReadToEnd();
            responseReader.Close();

            //there was no error and no response came
            if (!string.IsNullOrEmpty(strGateWayStatus))
            {

                string[] arrStatus = strGateWayStatus.Split('|');
                string strApplId = string.Empty;
                string status = string.Empty;

                //Client TransactionId | -1 -- transaction failed
                if (arrStatus[1] == "-1")
                {
                    status = "Fail";
                    gRow.Cells[6].Text = "Not Found";
                }

                //Client TransactionId | sahaj transaction Id Success
                else
                {
                    status = "Success";
                    gRow.Cells[6].Text = "Status Recieved";
                }
                gRow.Cells[3].Text = arrStatus[2];
                gRow.Cells[4].Text = arrStatus[1];
                gRow.Cells[5].Text = status;

            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "BulkPayment");
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }

    private void UpdateSBIPayment(string strClientTransId, GridViewRow gRow)
    {
        try
        {

            // HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://www.sbiepay.com/payagg/orderStatusQuery/getOrderStatusQuery");
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://www.sbiepay.sbi/secure/AggMerchantStatusQueryAction");
            request.Method = "POST";
            request.ReadWriteTimeout = 10000;
            request.Timeout = 15000;
            request.ContentType = "text/plain";
            request.ContentType = "application/x-www-form-urlencoded";
            //string  postData = "queryRequest=" + "|1000003" + "|" + strClientTransId + "&aggregatorId=SBIEPAY&merchantId=1000003";
            string postData = string.Format("queryRequest=|{0}|{1}&aggregatorId={2}&merchantId={3}", "1000453", strClientTransId, "SBIEPAY", "1000453");

            StreamWriter requestWriter = new StreamWriter(request.GetRequestStream());
            requestWriter.Write(postData);
            requestWriter.Close();

            WebResponse webResponse = (HttpWebResponse)request.GetResponse();
            Stream webStream = webResponse.GetResponseStream();
            StreamReader responseReader = new StreamReader(webStream);

            //3BA69CC087D18D294463|248595950|323.50
            string strGateWayStatus = responseReader.ReadToEnd();
            responseReader.Close();

            //1000003|NA|No Records Found|NA|NA|NA|1DE8632CA2F18D294480|NA|No Records Found|NA|NA|NA|NA|NA|1000003|0.00^0.00||||||||||
            /*success message sample -
        * MerchantId|ATRN|ResponseStatus|countrycode|currencycode|merchotherdetails|merchantposetdamount|responsemessage|merchantordernumber|paygatewaycode|
        * paygatewaytracenumber|creationDate|paymodeCode|CIN||||||||||
          1000453|NA|No Records Found|NA|NA|NA|1DE8632CA2F18D294480|NA|No Records Found|NA|NA|NA|NA|NA|1000453|0.00^0.00||||||||||
*/
            string[] arrReturn = strGateWayStatus.Split('|');
            if (!string.Equals(arrReturn[1], "NA", StringComparison.OrdinalIgnoreCase))
            {
                gRow.Cells[3].Text = arrReturn[1]; //SBIePayReferenceID
                gRow.Cells[4].Text = arrReturn[2];//Status
                gRow.Cells[5].Text = arrReturn[3];//Country
                gRow.Cells[6].Text = arrReturn[4];//Currency
                gRow.Cells[7].Text = arrReturn[5];//OtherDetails
                gRow.Cells[8].Text = arrReturn[7];//Amount
                gRow.Cells[9].Text = arrReturn[8];//Reason	
                gRow.Cells[10].Text = arrReturn[9];//BankCode
                gRow.Cells[11].Text = arrReturn[10];//BankReferenceNumber
                gRow.Cells[12].Text = arrReturn[11];//TransactionDate
                gRow.Cells[13].Text = arrReturn[12];//Paymode
                gRow.Cells[14].Text = arrReturn[13];//CIN
                gRow.Cells[15].Text = "Status Recieved";
                //gRow.Cells[14].Attributes.Add("style", "background-color:green !important");
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "BulkPayment");
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }

    private void UpdateSubPaisaPayStatus(string strClientTransId, GridViewRow gRow)
    {
        try
        {
            string res = string.Empty;
            string urlf = string.Empty;
            int int_college_Type = Convert.ToInt32(drpCollegeType.SelectedValue);

            urlf = "https://txnenquiry.sabpaisa.in/SPTxtnEnquiry/TransactionEnquiryServlet?clientCode=" + ConfigurationManager.AppSettings["clientCode"].ToString() + "&clientXtnId=" + strClientTransId;
            //"https://securepay.sabpaisa.in/SPTxtnEnquiry/TransactionEnquiryServlet?clientXtnId=" + strClientTransId + "&clientCode=BSFS2";

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(urlf);
            XDocument doc;
            using (WebResponse response = request.GetResponse())
            {
                using (Stream stream = response.GetResponseStream())
                {
                    doc = XDocument.Load(stream);
                }
            }
            XElement rootelement = doc.Root;
            string spRespCode = rootelement.Attributes("sabPaisaRespCode").First().Value;

            /*<transaction clientTxnId="2C1FA72412818D000263" txnId="7982420061809111596213554" payeeAmount="300" sabPaisaRespCode="0000" status="success" 
           * transCompleteDate="2018-06-20 09:16:26.0" paymentMode="Debit Cards" />*/
            /*<transaction sabPaisaRespCode="404" errorCode="404" errorMsg="TRANSACTION NOT FOUND" status="TRANSACTION NOT FOUND" />*/
            //if (spRespCode != "404")
            //{
            gRow.Cells[3].Text = rootelement.Attributes("txnId").First().Value;
            gRow.Cells[4].Text = rootelement.Attributes("txnId").First().Value;
            gRow.Cells[5].Text = rootelement.Attributes("paymentMode").First().Value;
            gRow.Cells[6].Text = rootelement.Attributes("sabPaisaRespCode").First().Value;
            gRow.Cells[7].Text = rootelement.Attributes("status").First().Value;
            gRow.Cells[8].Text = rootelement.Attributes("payeeAmount").First().Value;
            gRow.Cells[9].Text = rootelement.Attributes("transCompleteDate").First().Value;
            gRow.Cells[10].Text = "Status Recieved";
            //}
            //else
            //{
            //    gRow.Cells[10].Text = "Not Found";
            //}
        }

        catch (Exception ex)
        {
            Util.LogError(ex, "BulkPayment");
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }
}
