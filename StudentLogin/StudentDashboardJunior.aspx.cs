using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CommonModels;

public partial class StudentLogin_StudentDashboardJunior : System.Web.UI.Page
{

    CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            if (Session["StudID"] != null)
            {

                FillDashboardIntermediate(Session["StudID"].ToString());
            }
            else
            {
                Response.Redirect("StudentLogout_Jun.aspx");
            }

        }
    }

    #region FillDashboard
    protected void FillDashboardIntermediate(string strId)
    {

        CAFEntity obj = new CAFEntity();
        List<CafDashboard> list = new List<CafDashboard>();
        // ================================
        try
        {
            string intAppId = strId.ToString();
            
                obj.Action = "P";
                obj.strId = intAppId;// Session["Uid"].ToString();
                list = ccobj.FillStudentDashboards(obj);
                if (list.Count > 0)
                {
                    lblaplcant_name.Text = list[0].vch_ApplicantName;
                    lblgender.Text = list[0].vargender;
                    lblf_name.Text = list[0].vch_FatherName;
                    lbl_mob.Text = list[0].vch_CorMobileNo;
                    lbl_mther_nm.Text = list[0].vch_MotherName;
                    lbl_email_id.Text = list[0].vch_EMailID;
                    lbl_addrss.Text = list[0].vch_CorHouseNo;
                    lbl_dob.Text = list[0].dtm_DOB;
                    lbl_boardname.Text = list[0].vch_CouncilName;
                    lbl_rollNo.Text = list[0].vchRollNo;
                    lbl_rollcode.Text = list[0].vchRollCode;

                    grdOptions.DataSource = list[0].cafDashboardOptions;
                    grdOptions.DataBind();

                    grdPayment.DataSource = list[0].cafDashboardPayments;
                    grdPayment.DataBind();
                    //ViewState["Request"] = listoption;
                    //----------------------------------check mark details for CBSE and ICSE students
                    if (!string.IsNullOrEmpty(Convert.ToString(list[0].BoardId)))
                    {
                        if (Convert.ToInt32(Session["StudMarkStatus"]) == 1)
                        {
                            if ((list[0].BoardId == 46 || list[0].BoardId == 47) && list[0].PassingYear == 2019)
                            {
                                divMarkDtl.Visible = true;
                            }
                            else
                            {
                                divMarkDtl.Visible = false;
                            }
                        }
                        else
                        {
                            divMarkDtl.Visible = false;
                        }

                    }
            
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }

    #endregion
}