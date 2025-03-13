using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CommonModels;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Configuration;
using System.Web.Services;
using System.Xml.Linq;
using System.Xml.Serialization;
using System.Collections;

public partial class StudentLogin_OptionPref_Deg : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
    static int rowIndex = -1;
    string strMsgTitle = "OFSS Online, Govt. of Bihar";
    protected void Page_Load(object sender, EventArgs e)
    {


        if (!IsPostBack)
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
            getDistrict(1);
            if (Session["StudID"] != null)
            {
                List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
                list = fillDateline();
                if (list.Count > 0)
                {
                    DateTime lastAppDate = list[0].ToDate;
                    DateTime dtmToDate = list[0].FromDate;
                    DateTime dtmFromDate = list[0].DateLine;
                    hdnSelectionStatus.Value = list[0].int_AutoValidateStatus.ToString();
                    hdnRejectStatus.Value = list[0].intRejectionStatus.ToString();

                    int result = DateTime.Compare(lastAppDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                    if (result < 0)
                    {

                        divDateLine.Visible = true;
                        divForm.Visible = false;
                        if (list[0].SpecialCommunity == 1)
                        {
                            DateTime lastCompartmentadteDate = list[0].dtmTranDate;
                            int compart = DateTime.Compare(lastCompartmentadteDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                            if (compart >= 0)
                            {
                                divDateLine.Visible = false;
                                divForm.Visible = true;
                                fillGeneralInformation(Session["StudID"].ToString());
                            }
                            else
                            {
                                divDateLine.Visible = true;
                                divForm.Visible = false;
                            }
                        }
                        else
                        {
                            if (Convert.ToInt32(hdnSelectionStatus.Value) > 0 || Convert.ToInt32(hdnRejectStatus.Value) > 0)
                            {

                                int FromDate = DateTime.Compare(DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59), dtmFromDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                                int ToDate = DateTime.Compare(dtmToDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));

                                if (ToDate >= 0 && FromDate >= 0)
                                {
                                    divDateLine.Visible = false;
                                    divForm.Visible = true;
                                    fillGeneralInformation(Session["StudID"].ToString());
                                }


                            }
                        }

                    }
                    else
                    {
                        fillGeneralInformation(Session["StudID"].ToString());
                        // clientSideMethod();
                    }
                }
            }
            else
            {
                Response.Redirect("StudentLogout_Deg.aspx");
            }

        }
        if (grdOptions.Rows.Count > 0)
        {
            divOptionPrefer.Visible = true;
            divOptionPreferBtn.Visible = true;
            divOption.Visible = true;
        }
        else
        {
            divOptionPrefer.Visible = false;
            divOptionPreferBtn.Visible = false;
            divOption.Visible = false;
        }

    }

    #region "get date line"
    protected List<CAFEntity_Deg> fillDateline()
    {
        DateTime lastDt = DateTime.Today;
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();

        try
        {
            obj.Action = "D";
            obj.strId = Session["StudID"].ToString();
            
                list = ccobj.fillPrintOption(obj);


            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "alert('" + ex.Message + "');", true);
        }
        return list;
    }
    #endregion
    protected void fillGeneralInformation(string strId)
    {
       
        List<CAFEntity_Deg> listoption = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj2 = new CAFEntity_Deg();
        try
        {
            listoption = ccobj.fillPrintOption(new CAFEntity_Deg { Action = "B", strId = Session["StudID"].ToString() });
            if (listoption.Count > 0)
            {
                hdnGender.Value = listoption[0].int_Gender.ToString();
                hdnApplicationid.Value = listoption[0].int_ApplicantID.ToString();
                if (listoption[0].int_PrevStremID == 6)
                {
                    hdnUpashastri.Value = "1";
                }
                hdnBiologyMark.Value = listoption[0].MarkSocialStudies.ToString();
                hdnStreamStatus.Value = listoption[0].int_PrevStremID.ToString();
                hdnBoard.Value = listoption[0].BoardId.ToString();
                hdnMathMark.Value = listoption[0].MATH.ToString();
                hdnChemistry.Value = listoption[0].CHEMISTRY.ToString();
            }
            if (listoption[0].UserId > 0)
            {
                grdOptions.DataSource = listoption;
                grdOptions.DataBind();
                ViewState["Request"] = listoption;
            }


            filltext();

        }

        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }

    protected void filltext()
    {
        if (grdOptions.Rows.Count == 0)
        {
            lblOption.Text = "Enter here for 1st Option / अपना पहला विकल्प चुनें ";
            btnAddMore.Text = "2nd Option / दूसरा विकल्प";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 1)
        {
            lblOption.Text = "Choose your 2nd Option /अपना दूसरा विकल्प चुनें ";
            btnAddMore.Text = "3rd Option / तीसरा विकल्प";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 2)
        {
            lblOption.Text = "Choose your 3rd Option / अपना तीसरा विकल्प चुनें";
            btnAddMore.Text = "4th Option / चौथा विकल्प";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 3)
        {
            lblOption.Text = "Choose your 4th Option / अपना चौथा विकल्प चुनें";
            btnAddMore.Text = "5th Option / पांचवां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 4)
        {
            lblOption.Text = "Choose your 5th Option / अपना 5 वां विकल्प चुनें ";
            btnAddMore.Text = "6th Option / 6 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 5)
        {
            lblOption.Text = "Choose your 6th Option / अपना 6 वां विकल्प चुनें";
            btnAddMore.Text = "7th Option / 7 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 6)
        {
            lblOption.Text = "Choose your 7th Option / अपना 7 वां विकल्प चुनें";
            btnAddMore.Text = "8th Option/ 8 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 7)
        {
            lblOption.Text = "Choose your 8th Option / अपना 8 वां विकल्प चुनें";
            btnAddMore.Text = "9th Option / 9 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 8)
        {
            lblOption.Text = "Choose your 9th Option / अपना 9 वां विकल्प चुनें";
            btnAddMore.Text = "10th Option / 10 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 9)
        {
            lblOption.Text = "Choose your 10th Option / अपना 10 वां विकल्प चुनें";
            btnAddMore.Text = "11th Option / 11 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 10)
        {
            lblOption.Text = "Choose your 11th Option / अपना 11 वां विकल्प चुनें";
            btnAddMore.Text = "12th Option / 12 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 11)
        {
            lblOption.Text = "Choose your 12th Option / अपना 12 वां विकल्प चुनें";
            btnAddMore.Text = "13th Option / 13 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 12)
        {
            lblOption.Text = "Choose your 13th Option / अपना 13 वां विकल्प चुनें";
            btnAddMore.Text = "14th Option / 14 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 13)
        {
            lblOption.Text = "Choose your 14th Option / अपना 14 वां विकल्प चुनें";
            btnAddMore.Text = "15th Option / 15 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 14)
        {
            lblOption.Text = "Choose your 15th Option / अपना 15 वां विकल्प चुनें";
            btnAddMore.Text = "16th Option / 16 वां विकल्प चुनें";
        }
        if (grdOptions.Rows.Count == 15)
        {
            lblOption.Text = "Choose your 16th Option / अपना 16 वां विकल्प चुनें";
            btnAddMore.Text = "17th Option / 17 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 16)
        {
            lblOption.Text = "Choose your 17th Option / अपना 17 वां विकल्प चुनें";
            btnAddMore.Text = "18th Option / 18 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 17)
        {
            lblOption.Text = "Choose your 18th Option / अपना 18 वां विकल्प चुनें";
            btnAddMore.Text = "19th Option / 19 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 18)
        {
            lblOption.Text = "Choose your 19th Option / अपना 19 वां विकल्प चुनें";
            btnAddMore.Text = "20th Option / 20 वां विकल्प चुनें";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 19)
        {
            lblOption.Text = "Choose your 20th Option / अपना 20 वां विकल्प चुनें";
            btnAddMore.Text = "Submit Final Option";
            btnAddMore.Visible = true;
        }
        if (grdOptions.Rows.Count == 20)
        {
            lblOption.Text = "You have added 20 Options";
            btnAddMore.Text = "All options are added.";
            btnAddMore.Visible = false;
        }
    }

    #region fillDistWiseColg
    protected void ddlCollegeDistrict_SelectedIndexChanged(object sender, EventArgs e)
    {

        try
        {
            ddlCollege.Items.Clear();
            //ddlCollege.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
            int collegeType = 0;
            if (rbtOthersFinance.Checked)
            {
                collegeType = 0;
            }
            if (rbtSanskrit.Checked)
            {
                collegeType = 7;
            }

            getDistWiseColg(Convert.ToInt32(ddlCollegeDistrict.SelectedValue), collegeType, Convert.ToInt32(hdnGender.Value));
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

    }

    protected void getDistWiseColg(int intDistId, int intCType, int intGender)
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvSource = default(DataView);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_COLLEGE_DEGREE.xml");
        dvSource = ddlDataSource.Tables[0].DefaultView;

        if (intDistId != 0)
        {
            if (intGender != 0)
            {
                if (intGender != 2)
                {
                    dvSource.RowFilter = "DID=" + intDistId.ToString() + " AND CTYPE=" + intCType.ToString() + " AND WomenStatus <> " + Convert.ToString(4);
                }
                else
                {
                    dvSource.RowFilter = "DID=" + intDistId.ToString() + " AND CTYPE=" + intCType.ToString();
                }

            }
        }
        ddlCollege.DataSource = dvSource;
        ddlCollege.DataTextField = "CNAME";
        ddlCollege.DataValueField = "CID";
        ddlCollege.DataBind();
        ddlCollege.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
    }


    #endregion
    #region FillCompulsory

    protected void ddlStream_SelectedIndexChanged(object sender, EventArgs e)
    {

        try
        {
            ddlELE1.Items.Clear();
            // ddlELE1.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
            if (hdnStreamStatus.Value == "1")
            {
                if (Convert.ToInt32(ddlStream.SelectedValue) == 2)
                {
                    string strMsg = "You can apply for Arts/Commerce Stream only";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCollege','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    ddlStream.SelectedValue = "0";
                    ddlStream.Focus();
                    return;

                }
            }

            if (hdnStreamStatus.Value == "3")
            {
                if (Convert.ToInt32(ddlStream.SelectedValue) == 2)
                {
                    string strMsg = "You can apply for Arts/Commerce Stream only";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCollege','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    ddlStream.SelectedValue = "0";
                    ddlStream.Focus();
                    return;

                }
            }
            getElectives();
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

    }

    protected void ddlELE1_SelectedIndexChanged(object sender, EventArgs e)
    {

        try
        {
            if (Convert.ToInt32(ddlStream.SelectedValue) == 2)
            {
                if (hdnMathMark.Value == "0" && Convert.ToInt32(ddlELE1.SelectedValue) == 36)
                {

                    string strMsg = "You can not apply for Mathematics Honours<br/>because you have not taken subject as Mathematics in intermediate";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlELE1','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    ddlELE1.SelectedValue = "0";
                    ddlELE1.Focus();
                    return;

                }

                if (hdnChemistry.Value == "0" && Convert.ToInt32(ddlELE1.SelectedValue) == 35)
                {

                    string strMsg = "You can not apply for Chemistry Honours<br/>because you have not taken subject as Chemistry in intermediate";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlELE1','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    ddlELE1.SelectedValue = "0";
                    ddlELE1.Focus();
                    return;

                }
                if (hdnBiologyMark.Value == "0" && Convert.ToInt32(ddlELE1.SelectedValue) == 34)
                {

                    string strMsg = "You can not apply for Botany Honours<br/>because you have not taken subject as Botany in intermediate";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlELE1','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    ddlELE1.SelectedValue = "0";
                    ddlELE1.Focus();
                    return;

                }
                if (hdnBiologyMark.Value == "0" && Convert.ToInt32(ddlELE1.SelectedValue) == 38)
                {

                    string strMsg = "You can not apply for Zoology Honours<br/>because you have not taken subject as Zoology in intermediate";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlELE1','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    ddlELE1.SelectedValue = "0";
                    ddlELE1.Focus();
                    return;

                }
            }

        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

    }

    protected void getElectives()
    {
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {
            obj.Cid = Convert.ToInt32(ddlCollege.SelectedValue);
            obj.StreamID = Convert.ToInt32(ddlStream.SelectedValue);
            obj.Type = 1;
            
                list = ccobj.fillDegSubject(obj);
            

            ddlELE1.Items.Clear();
            ddlELE1.DataSource = list;
            ddlELE1.DataTextField = "vch_SubjectName";
            ddlELE1.DataValueField = "int_SubjectID";
            ddlELE1.DataBind();
            ddlELE1.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
        }
        catch (Exception ex)
        {
        }
        finally { }
    }


    #endregion

    #region "Client Side Functions"
    protected void clientSideMethod()
    {

        ddlCollege.Attributes.Add("onchange", "resetOptionByCid();RemoveAllOptions('ddlELE1');");

        ddlStream.Attributes.Add("onchange", "return RestrictStream();");
        ddlELE1.Attributes.Add("onchange", "ColVacancy();");

    }
    #endregion

    protected void btnAddMore_Click(object sender, EventArgs e)
    {

        try
        {
            if (IsValidAddMore())
            {
                AddNewRowToGrid();
            }
            if (grdOptions.Rows.Count > 0)
            {
                divOptionPrefer.Visible = true;
                divOptionPreferBtn.Visible = true;
                divOption.Visible = true;
            }
            else
            {
                divOptionPrefer.Visible = false;
                divOptionPreferBtn.Visible = false;
                divOption.Visible = false;
            }
            ddlCollegeDistrict.SelectedValue = "0";
            ddlCollege.Items.Clear();
            ddlStream.Items.Clear();
            ddlELE1.Items.Clear();
            ddlCollege.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
            ddlStream.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
            ddlELE1.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });

        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }

    protected void btnUpdatePreference_Click(object sender, EventArgs e)
    {
        try
        {
            List<CAFEntity_Deg> listoption = new List<CAFEntity_Deg>();
            List<CAFEntity_Deg> listoptionNew = new List<CAFEntity_Deg>();

            var count = 1;
            foreach (GridViewRow row in this.grdOptions.Rows)
            {
                CAFEntity_Deg obj3 = new CAFEntity_Deg();
                obj3.UserId = Convert.ToInt32(((TextBox)row.FindControl("txtSlNo")).Text);
                obj3.vch_CollegeName = row.Cells[1].Text.Trim();
                obj3.Stream = row.Cells[2].Text.Trim();
                obj3.compulsory = ((Label)row.FindControl("lblSubject")).Text;

                //===ids
                obj3.int_CollegeID = Convert.ToInt32(((HiddenField)row.FindControl("hdnCollegeid")).Value);
                obj3.StreamID = Convert.ToInt32(((HiddenField)row.FindControl("hdnStreamid")).Value);
                obj3.CompulsoryId = Convert.ToInt32(((HiddenField)row.FindControl("hdncompulsoryid")).Value);

                listoption.Add(obj3);
            }

            listoptionNew = listoption.OrderBy(o => o.UserId).ToList();
            var listoptionFinal = listoptionNew.Select((s) => new CAFEntity_Deg()
            {
                UserId = count++,
                vch_CollegeName = s.vch_CollegeName,
                Stream = s.Stream,
                compulsory = s.compulsory,

                int_CollegeID = s.int_CollegeID,
                StreamID = s.StreamID,
                CompulsoryId = s.CompulsoryId,

            }).ToList();

            grdOptions.DataSource = listoptionFinal;
            grdOptions.DataBind();
            ViewState["Request"] = listoptionFinal;
            filltext();

        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }
    private void AddNewRowToGrid()
    {
        List<CAFEntity_Deg> listoption = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj2 = new CAFEntity_Deg();
        try
        {
            if (ViewState["Request"] != null)
                listoption = (List<CAFEntity_Deg>)ViewState["Request"];

            obj2.UserId = (grdOptions.Rows.Count) + 1;
            obj2.vch_CollegeName = hdnCollegenm.Value;
            obj2.int_CollegeID = Convert.ToInt32(hdnCollegeid.Value);
            obj2.Stream = hdnStreamnm.Value;
            obj2.StreamID = Convert.ToInt32(hdnStreamid.Value);
            obj2.compulsory = hdnCompulsorynm.Value;
            obj2.CompulsoryId = Convert.ToInt32(hdnCompulsoryid.Value);
            listoption.Add(obj2);

            grdOptions.DataSource = listoption;
            grdOptions.DataBind();
            ViewState["Request"] = listoption;
            if (grdOptions.Rows.Count == 0)
            {
                lblOption.Text = "Enter here for 1st Option / अपना पहला विकल्प चुनें ";
                btnAddMore.Text = "2nd Option / दूसरा विकल्प";
            }
            filltext();
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        finally
        {

        }
    }
    /// <summary>
    /// Grid view Events
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void grdOptions_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        List<CAFEntity_Deg> listoption = new List<CAFEntity_Deg>();
        listoption = OptionList(e.RowIndex);

        grdOptions.DataSource = listoption;
        grdOptions.DataBind();
        ViewState["Request"] = listoption;
        filltext();
        if (grdOptions.Rows.Count > 0)
        {
            divOptionPrefer.Visible = true;
            divOptionPreferBtn.Visible = true;
            divOption.Visible = true;
        }
        else
        {
            divOptionPrefer.Visible = false;
            divOptionPreferBtn.Visible = false;
            divOption.Visible = false;
        }

    }
    protected void grdOptions_RowDataBound(object sender, System.Web.UI.WebControls.GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            try
            {
                LinkButton imgbtnDelete = e.Row.FindControl("imgbtnDelete") as LinkButton;
                imgbtnDelete.OnClientClick = string.Format("return ConfirmProcessing('{0}','{1}');", imgbtnDelete.UniqueID, "<strong>Are you sure you want to delete this option ?</strong>");
            }
            catch (Exception ex)
            {
                ClientScript.RegisterStartupScript(this.GetType(), "key1", "<Script>alert('" + ex.Message.ToString() + "');</Script>");
            }
        }
    }

    private List<CAFEntity_Deg> OptionList(int index)
    {
        List<CAFEntity_Deg> listoption = new List<CAFEntity_Deg>();

        foreach (GridViewRow row in this.grdOptions.Rows)
        {
            if (row.RowIndex != index)
            {
                CAFEntity_Deg obj1 = new CAFEntity_Deg();
                obj1.UserId = (listoption.Count) + 1; ;
                obj1.vch_CollegeName = row.Cells[1].Text.Trim();
                obj1.Stream = row.Cells[2].Text.Trim();
                obj1.compulsory = ((Label)row.FindControl("lblSubject")).Text;

                //===ids
                obj1.int_CollegeID = Convert.ToInt32(((HiddenField)row.FindControl("hdnCollegeid")).Value);
                obj1.StreamID = Convert.ToInt32(((HiddenField)row.FindControl("hdnStreamid")).Value);
                obj1.CompulsoryId = Convert.ToInt32(((HiddenField)row.FindControl("hdncompulsoryid")).Value);

                listoption.Add(obj1);
            }
        }
        return listoption;
    }

    #region "coiilege vacancy"

    //protected void ddlELE1_SelectedIndexChanged(object sender, EventArgs e)
    //{

    //    try
    //    {

    //        vacancyColg(Convert.ToInt32(ddlCollege.SelectedValue), Convert.ToInt32(ddlStream.SelectedValue), Convert.ToInt32(ddlELE1.SelectedValue));

    //    }
    //    catch (Exception ex)
    //    {
    //       ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
    //    }

    //}

    protected void vacancyColg(int intColId, int intStrid, int intSubid)
    {
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {
            obj.Cid = Convert.ToInt32(intColId);
            obj.StreamID = Convert.ToInt32(intStrid);
            obj.int_SubjectID = Convert.ToInt32(intSubid);
           
                list = ccobj.VacancyColg(obj);
            

            if (list.Count > 0)
            {
                if (list[0].Vacancy == 0)
                {
                    string strMsg = "There is No Vacancy of this college !";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlELE1','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    ddlELE1.Focus();
                    return;
                }
            }
        }
        catch (Exception ex)
        {
        }
        finally { }

    }
    #endregion



    protected void getDistrict(int intStateId)
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvSource = default(DataView);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_DISTRICT.xml");
        dvSource = ddlDataSource.Tables[0].DefaultView;
        //'only for orissa
        if (intStateId == 1)
        {
            dvSource.RowFilter = "int_StateID=" + intStateId;
            //'for orisaa
        }
        else
        {
            dvSource.RowFilter = "int_StateID in (" + intStateId + ",35)";
            //'35 for other state
        }
        ddlCollegeDistrict.DataSource = dvSource;
        ddlCollegeDistrict.DataTextField = "vch_DistrictName";
        ddlCollegeDistrict.DataValueField = "int_DistrictID";
        ddlCollegeDistrict.DataBind();
        ddlCollegeDistrict.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
    }


    #region "load district"
    [WebMethod()]
    public static dynamic LoadDistrict()
    {
        try
        {
            System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
            string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
            xdoc = XDocument.Load(pth + "SAMS\\MasterXML/M_DISTRICT.xml");

            var qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                      where p.Element("int_StateID").Value == "1"
                      select new { IntID = p.Element("int_DistrictID").Value, StrName = p.Element("vch_DistrictName").Value.ToString() };
            return qry;

        }
        catch (Exception ex)
        {
            LogError(ex, "OptionPrefDeg");
            return string.Empty;
        }

    }
    #endregion

    #region fillStream


    protected void ddlCollege_SelectedIndexChanged(object sender, EventArgs e)
    {

        try
        {
            ddlStream.Items.Clear();
            //ddlStream.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
            getStream();
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

    }
    protected void getStream()
    {
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {
            int UpsStream = 0;
            if (Convert.ToInt32(hdnUpashastri.Value) == 1 && Convert.ToInt32(hdnBoard.Value) == 24 && rbtOthersFinance.Checked)
            {
                UpsStream = 1;
            }
            else
            {
                UpsStream = 2;
            }
            if (UpsStream == 1)
            {
                obj.Action = "S";
            }
            else
            {
                obj.Action = "D";
            }

            obj.Cid = Convert.ToInt32(ddlCollege.SelectedValue);

                list = ccobj.fillDegStream(obj);
            

            if (list.Count > 0)
            {
                ddlStream.DataSource = list;
                ddlStream.DataTextField = "vch_StreamName";
                ddlStream.DataValueField = "int_StreamID";
                ddlStream.DataBind();

            }
            ddlStream.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
        }
        catch (Exception ex)
        {
        }
        finally
        {
        }

    }
    [WebMethod()]
    public static dynamic FillStream(int intCollegeID, int UpsStream)
    {
        CommonClass ccobj = new CommonClass();
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {
            if (UpsStream == 1)
            {
                obj.Action = "S";
            }
            else
            {
                obj.Action = "D";
            }

            obj.Cid = Convert.ToInt32(intCollegeID);
            
                list = ccobj.fillDegStream(obj);
            
        }
        catch (Exception ex)
        {
        }
        finally { }
        return list;
    }
    #endregion

    public static void LogError(Exception ex, string strModule)
    {
        try
        {
            string strFileName = strModule + "_ErrorLog" + DateTime.Now.ToString("ddMMyyyy") + ".txt";
            string message = string.Format("Time: {0}", DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt"));
            message += Environment.NewLine;
            message += "-----------------------------------------------------------";
            message += Environment.NewLine;
            message += string.Format("Message: {0}", ex.Message);
            message += Environment.NewLine;
            message += string.Format("StackTrace: {0}", ex.StackTrace);
            message += Environment.NewLine;
            message += string.Format("Source: {0}", ex.Source);
            message += Environment.NewLine;
            message += string.Format("TargetSite: {0}", ex.TargetSite.ToString());
            message += Environment.NewLine;
            message += "-----------------------------------------------------------";
            message += Environment.NewLine;
            string path = System.Web.HttpContext.Current.Server.MapPath("~/Errorlogfiles/" + strFileName);
            using (StreamWriter writer = new StreamWriter(path, true))
            {
                writer.WriteLine(message);
                writer.Close();
            }
        }
        catch
        {
        }
    }
    protected void btnSave_Click(object sender, EventArgs e)
    {
        try
        {
            if (Session["CSRFRandNum"].ToString() == hdnCSRFRandNum.Value)
            {
                if (IsValid())
                {
                    SaveRequestDetails();
                }
            }
            else
            {
                ClsExpData objExpData = new ClsExpData()
                {
                    strLoggedInUser = Session["UserId"].ToString()
                    ,
                    strPageName = Path.GetFileNameWithoutExtension(Page.AppRelativeVirtualPath)
                    ,
                    vchModuleName = "btnSave_Click_CSRF"
                    ,
                    strIpAddress = Request.ServerVariables["REMOTE_ADDR"].ToString()
                    ,
                    intType = 2
                };

                Util.CSRFSecurityLog_Add(objExpData);
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        finally
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
        }
    }
    static string ConvertObjectToXMLString(object classObject)
    {
        string xmlString = null;
        XmlSerializer xmlSerializer = new XmlSerializer(classObject.GetType());
        using (MemoryStream memoryStream = new MemoryStream())
        {
            xmlSerializer.Serialize(memoryStream, classObject);
            memoryStream.Position = 0;
            xmlString = new StreamReader(memoryStream).ReadToEnd();
        }
        return xmlString;
    }
    protected void SaveRequestDetails()
    {
        CAFEntity_Deg objc = new CAFEntity_Deg();
      
        string Retval = "";
        try
        {
            List<innerEntityDeg> objNew = new List<innerEntityDeg>();
            objc.Action = "O";
            objc.ApplicantID = Convert.ToInt32(hdnApplicationid.Value);

            if (ViewState["Request"] != null)
            {
                List<CAFEntity_Deg> obj = (List<CAFEntity_Deg>)ViewState["Request"];

                for (int i = 0; i < obj.Count; i++)
                {
                    innerEntityDeg obj1 = new innerEntityDeg();
                    obj1.UserId = Convert.ToInt32(obj[i].UserId);
                    obj1.vch_CollegeName = obj[i].vch_CollegeName;
                    obj1.int_CollegeID = Convert.ToInt32(obj[i].int_CollegeID);
                    obj1.StreamID = Convert.ToInt32(obj[i].StreamID);
                    obj1.CompulsoryId = Convert.ToInt32(obj[i].CompulsoryId);
                    objNew.Add(obj1);
                }
            }
            objc.Total = ViewState["Request"] != null ? ConvertObjectToXMLString(objNew) : "";

            Retval = ccobj.AddDegCAFData(objc);

            if (Retval == "2")
            {

                string url = "&linkm=" + Request.QueryString["linkm"] + "&linkn=" + Request.QueryString["linkn"] + "&btn=" + Request.QueryString["btn"] + "&tab=" + Request.QueryString["tab"];
                string strmsg = Messages.Message(Convert.ToInt32(Retval));
                ScriptManager.RegisterStartupScript(btnSave, this.GetType(), "Myalert", "jAlertSubmit('btnSubmit', '<strong>" + strmsg + "</strong>', 'OptionPref_Deg.aspx?" + url + "');", true);
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }

    protected bool IsValid()
    {
        string strMsg = "";
        int intLargestOption = 0;
        try
        {
            //if (grdOptions.Rows.Count == 0)
            //{
            //    strMsg = "Please select minimum 1 Option details. ";
            //    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCollege','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
            //    ddlCollege.Focus();
            //    return false;
            //}
            //else
            //{
            if (Convert.ToInt32(hdnCollegeid.Value) > 0)
            {
                if (hdnCollegeid.Value == "0")
                {
                    strMsg = "Please select college name. ";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCollege','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    ddlCollege.Focus();
                    return false;
                }
                if (hdnStreamid.Value == "0")
                {
                    strMsg = "Please select stream name. ";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlStream','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    ddlStream.Focus();
                    return false;
                }


                if (hdnCompulsoryid.Value == "0")
                {
                    strMsg = "Please select subject name. ";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlELE1','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    ddlELE1.Focus();
                    return false;
                }
            }

            if (grdOptions.Rows.Count > 0)
            {
                foreach (GridViewRow row in this.grdOptions.Rows)
                {
                    int SlNo = Convert.ToInt32(((TextBox)row.FindControl("txtSlNo")).Text);

                    for (int i = row.RowIndex + 1; i < grdOptions.Rows.Count; i++)
                    {
                        int SlNoNew = Convert.ToInt32(((TextBox)grdOptions.Rows[i].FindControl("txtSlNo")).Text);
                        TextBox TxtSL = (TextBox)grdOptions.Rows[i].FindControl("txtSlNo");
                        if (SlNo == SlNoNew)
                        {
                            strMsg = "Option(s)/Choice(s) Sl# cannot be duplicate, So first change Sl# and then click on update option preference. ";
                            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlStream','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                            TxtSL.Focus();
                            return false;
                        }
                    }

                }
            }

            if (grdOptions.Rows.Count > 0)
            {
                intLargestOption = Convert.ToInt32(((TextBox)grdOptions.Rows[0].FindControl("txtSlNo")).Text); ;
                foreach (GridViewRow row in this.grdOptions.Rows)
                {
                    int SlNo = Convert.ToInt32(((TextBox)row.FindControl("txtSlNo")).Text);

                    if (SlNo > intLargestOption)
                    {
                        intLargestOption = SlNo;
                    }


                }
                if (intLargestOption > grdOptions.Rows.Count)
                {
                    strMsg = "Option(s)/Choice(s) Sl# cannot be skipped, So click on update option preference.";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlStream','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    return false;
                }
            }


            if (!cbAgree1.Checked)
            {
                strMsg = "Please Confirm.";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('cbAgree1','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                cbAgree1.Focus();
                return false;
            }
            if (!cbAgree2.Checked)
            {
                strMsg = "Please Confirm.";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('cbAgree2','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                cbAgree2.Focus();
                return false;
            }

            //}

        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "alert('" + ex.Message + "');", true);
        }
        return true;

    }

    protected bool IsValidAddMore()
    {
        string strMsg = "";
        try
        {

            if (hdnCollegeid.Value == "0")
            {
                strMsg = "Please select college name. ";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCollege','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlCollege.Focus();
                return false;
            }
            if (hdnStreamid.Value == "0")
            {
                strMsg = "Please select stream name. ";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlStream','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlStream.Focus();
                return false;
            }
            if (hdnCompulsoryid.Value == "0")
            {
                strMsg = "Please select subject name. ";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlELE1','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlELE1.Focus();
                return false;
            }

            if (grdOptions.Rows.Count > 0)
            {
                foreach (GridViewRow row in this.grdOptions.Rows)
                {
                    int CollegeId = Convert.ToInt32(((HiddenField)row.FindControl("hdnCollegeid")).Value);
                    int StreamID = Convert.ToInt32(((HiddenField)row.FindControl("hdnStreamid")).Value);
                    int SubjectID = Convert.ToInt32(((HiddenField)row.FindControl("hdncompulsoryid")).Value);

                    if ((CollegeId == Convert.ToInt32(ddlCollege.SelectedValue)) && (StreamID == Convert.ToInt32(ddlStream.SelectedValue) && (SubjectID == Convert.ToInt32(ddlELE1.SelectedValue))))
                    {
                        strMsg = "You cannot add more than 1 option in same college , stream & subject";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlStream','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        ddlStream.Focus();
                        return false;
                    }
                }
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "alert('" + ex.Message + "');", true);
        }
        return true;
    }

}
//[Serializable]
public class innerEntityDeg
{
    public int UserId { get; set; }
    public string vch_CollegeName { get; set; }
    public int int_CollegeID { get; set; }
    public int StreamID { get; set; }
    public int CompulsoryId { get; set; }

    public string Stream { get; set; }
    public string compulsory { get; set; }


}