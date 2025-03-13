using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CommonModels;
//using SAMSSkillService;


public partial class ManageStudent_Studentdashboard : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            if (Session["StudID"] != null)
            {
                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "modalpopup();", true);
                FillDashboardDegree(Session["StudID"].ToString());
            }
            else
            {
                Response.Redirect("StudentLogin_Deg.aspx");
            }

        }
    }

    #region FillDashboard
    protected void FillDashboardDegree(string strId)
    {

        CAFEntity obj = new CAFEntity();
        List<CAFEntity> list = new List<CAFEntity>();
        int ReturnMsg = 0;
        string strmsg = "";
        CAFEntity_Deg obj1 = new CAFEntity_Deg();
        // ================================
        try
        {
            string intAppId = strId.ToString();
            

                obj1 = new CAFEntity_Deg();
                obj1.Action = "C";
                obj1.vch_UniqueRefNo = Session["StudID"].ToString();
                //ReturnMsg = Convert.ToInt32(client.ManageSelection(obj1));
                //strmsg = Messages.Message(ReturnMsg);
                //if (ReturnMsg == 1)
                //{
                    
                //}
                //else if (ReturnMsg == 3)
                //{
                
                //}
                //else
                //{
                //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "modalpopup();", true);
                //}

                obj.Action = "P";
                obj.strId = intAppId;// Session["Uid"].ToString();
                list = ccobj.fillstudentdashboard(obj);
                if (list.Count > 0)
                {
                    lblaplcant_name.Text = list[0].vch_ApplicantName;
                    lblgender.Text = list[0].vargender;
                    lblf_name.Text = list[0].vch_FatherName;
                    lbl_mob.Text = list[0].vch_CorMobileNo;
                    lbl_mther_nm.Text = list[0].vch_MotherName;
                    lbl_email_id.Text = list[0].vch_EMailID;
                    lbl_addrss.Text = list[0].vch_CorHouseNo;
                    lbl_dob.Text = list[0].dtm_DOB.ToString("dd/MM/yyyy");
                    lbl_boardname.Text = list[0].vch_CouncilName;
                    lbl_rollNo.Text = list[0].vchRollNo;
                    lbl_rollcode.Text = list[0].vchRollCode;
                    if (list[0].vchTransDate.ToString() == "1/1/0001 12:00:00 AM")
                    {
                        lbldate.Text = "NA";
                    }
                    else
                    {
                        lbldate.Text = list[0].vchTransDate.ToString();
                    }
                    lbltransNo.Text = list[0].vchTransId;
                    lblRefNo.Text = list[0].vch_UniqueRefNo;
                    lblPaymntStatus.Text = list[0].vchTranStatus;
                    lblApplctnFee.Text = list[0].vchTransFee.ToString();
                    lblgatewayname.Text = list[0].vchGateWayName;
                    grdOptions.DataSource = list;
                    grdOptions.DataBind();
                    //ViewState["Request"] = listoption;
                }
            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }
    #endregion


}