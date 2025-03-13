using CommonModels;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Serialization;

public partial class StudentLogin_OptionPref : System.Web.UI.Page
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
                List<CAFEntity> list = new List<CAFEntity>();
                list = fillDateline();
                if (list.Count > 0)
                {
                    DateTime lastAppDate = list[0].ToDate;
                    DateTime dtmFromDate = list[0].FromDate;

                    int FromDate = DateTime.Compare(DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59), dtmFromDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                    int ToDate = DateTime.Compare(lastAppDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));

                    hdnRejectStatus.Value = list[0].ValidateStatus.ToString();
                    hdnSelectionStatus.Value = list[0].int_ApplicationStatus.ToString();

                    if (ToDate >= 0 && FromDate >= 0)
                    {

                        if (Convert.ToInt32(hdnSelectionStatus.Value) == 0 || Convert.ToInt32(hdnRejectStatus.Value) > 0)
                        {
                            divDateLine.Visible = false;
                            divForm.Visible = true;
                            fillGeneralInformation(Session["StudID"].ToString());
                        }
                        else
                        {
                            litMessage.Text = "Sorry, Selected Candidates in published Merit list are not authorised to update his/her CAF.";
                            divDateLine.Visible = true;
                            divForm.Visible = false;
                        }


                    }
                    else
                    {

                        if (FromDate < 0)
                        {
                            litMessage.Text = "Dateline to modify CAF Option details is not started yet...";
                        }
                        if (ToDate < 0)
                        {
                            litMessage.Text = "Dateline to modify CAF Option details is completed...";
                        }
                        divDateLine.Visible = true;
                        divForm.Visible = false;
                    }




                }
                else
                {
                    divDateLine.Visible = true;
                    divForm.Visible = false;
                }
            }
            else
            {
                Response.Redirect("StudentLogout_Jun.aspx");
            }
        }
        //if (grdOptions.Rows.Count > 0)
        //{
        //    divOptionPrefer.Visible = true;
        //    divOptionPreferBtn.Visible = true;
        //    divOption.Visible = true;
        //}
        //else
        //{
        //    divOptionPrefer.Visible = false;
        //    divOptionPreferBtn.Visible = false;
        //    divOption.Visible = false;
        //}

    }

    #region "get date line"
    protected List<CAFEntity> fillDateline()
    {
        DateTime lastDt = DateTime.Today;
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();

        try
        {
            obj.Action = "D";
            obj.vch_UniqueRefNo = Session["StudID"].ToString();
            
                list = ccobj.FillCAF(obj);
                lastDt = list[0].ToDate;

            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        return list;
    }
    #endregion
    #region "get Option Details Grid"
    protected void fillGeneralInformation(string strId)
    {
        
        List<CAFEntity> listoption = new List<CAFEntity>();
        CAFEntity obj2 = new CAFEntity();
        try
        {
            listoption = ccobj.FillCAF(new CAFEntity { Action = "B", vch_UniqueRefNo = Session["StudID"].ToString() });
            //if (listoption[0].UserId > 0)
            //{
            //    grdOptions.DataSource = listoption;
            //    grdOptions.DataBind();
            //    ViewState["Request"] = listoption;


            //}
            //else
            //{
            //    grdOptions.EmptyDataText = "No Record(s) Found.";
            //    grdOptions.DataBind();


            //}
            if (!string.IsNullOrEmpty(Convert.ToString(listoption[0].vch_UniqueRefNo)))
            {

                hdnGender.Value = listoption[0].int_Gender.ToString();
                hdnApplicationid.Value = listoption[0].int_ApplicantID.ToString();
                ddlGender.SelectedValue = listoption[0].int_Gender.ToString();
                hdnAppliedColleges.Value = listoption[0].IDs.ToString();
                hdnWReservation.Value = listoption[0].CategoryId.ToString();
                hdnApplicantNm.Value = listoption[0].vch_ApplicantName.ToString();
                hdnApplicantEmail.Value = listoption[0].EmailId.ToString();
                hdnApplicantMobNo.Value = listoption[0].CorMobileNo.ToString();
                hdnAppliedClgRes.Value = listoption[0].pstrReservShortName.ToString();
                if (!string.IsNullOrEmpty(Convert.ToString(listoption[0].CategoryId)))
                {
                    if (listoption[0].CategoryId == 2)
                    {
                        rbtSC.Checked = true;

                    }
                    if (listoption[0].CategoryId == 3)
                    {
                        rbtST.Checked = true;

                    }
                    if (listoption[0].CategoryId == 4)
                    {
                        rbtnOBC.Checked = true;

                    }
                    if (listoption[0].CategoryId == 1)
                    {
                        rbtGeneral.Checked = true;

                    }
                    if (listoption[0].CategoryId == 5)
                    {
                        rbtOther.Checked = true;

                    }
                    if (listoption[0].CategoryId == 6)
                    {
                        rbtBCW.Checked = true;

                    }
                }

                if (!string.IsNullOrEmpty(Convert.ToString(listoption[0].intEWS)))
                {
                    if (listoption[0].intEWS == 1)
                    {
                        rbtnEWSYes.Checked = true;
                    }
                    else
                    {
                        rbtnEWSNo.Checked = true;
                    }
                }

                if (!string.IsNullOrEmpty(Convert.ToString(listoption[0].PHOH)))
                {
                    if (listoption[0].PHOH)
                    {
                        chkPHOHY.Checked = true;
                    }
                    else
                    {
                        chkPHOHN.Checked = true;
                    }
                }
            }

            //filltext();

        }

        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }
    #endregion

    //#region "Get college type of all options filled by a student"
    //protected void fillCollegeTypes()
    //{
    //    try
    //    {
    //        hdnAppliedColleges.Value = "";
    //        string appliedCollegeTypes = "";
    //        for (int i = 0; i < grdOptions.Rows.Count; i++)
    //        {
    //            HiddenField hdnCollegeType = (HiddenField)grdOptions.Rows[i].FindControl("hdnCollegeType");
    //            appliedCollegeTypes = appliedCollegeTypes + hdnCollegeType.Value + ',';
    //        }

    //        appliedCollegeTypes = appliedCollegeTypes.Remove(appliedCollegeTypes.Length - 1);
    //        hdnAppliedColleges.Value = appliedCollegeTypes;
    //    }
    //    catch (Exception ex)
    //    {
    //        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
    //    }
    //}

    //protected void fillClgResTypes()
    //{
    //    try
    //    {
    //        hdnAppliedClgRes.Value = "";
    //        string appliedClgResTypes = "";
    //        for (int i = 0; i < grdOptions.Rows.Count; i++)
    //        {
    //            HiddenField hdnClgReservation = (HiddenField)grdOptions.Rows[i].FindControl("hdnClgReservation");
    //            appliedClgResTypes = appliedClgResTypes + hdnClgReservation.Value + ',';
    //        }

    //        appliedClgResTypes = appliedClgResTypes.Remove(appliedClgResTypes.Length - 1);
    //        hdnAppliedClgRes.Value = appliedClgResTypes;
    //    }
    //    catch (Exception ex)
    //    {
    //        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
    //    }
    //}
    //#endregion

    //#region "Change Button text"
    //protected void filltext()
    //{
    //    if (grdOptions.Rows.Count == 0)
    //    {
    //        lblOption.Text = "Enter here for 1st Option / अपना पहला विकल्प चुनें ";
    //        btnAddMore.Text = "2nd Option / दूसरा विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 1)
    //    {
    //        lblOption.Text = "Choose your 2nd Option /अपना दूसरा विकल्प चुनें ";
    //        btnAddMore.Text = "3rd Option / तीसरा विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 2)
    //    {
    //        lblOption.Text = "Choose your 3rd Option / अपना तीसरा विकल्प चुनें";
    //        btnAddMore.Text = "4th Option / चौथा विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 3)
    //    {
    //        lblOption.Text = "Choose your 4th Option / अपना चौथा विकल्प चुनें";
    //        btnAddMore.Text = "5th Option / पांचवां विकल्प चुनें";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 4)
    //    {
    //        lblOption.Text = "Choose your 5th Option / अपना 5 वां विकल्प चुनें ";
    //        btnAddMore.Text = "6th Option / 6 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 5)
    //    {
    //        lblOption.Text = "Choose your 6th Option / अपना 6 वां विकल्प चुनें";
    //        btnAddMore.Text = "7th Option / 7 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 6)
    //    {
    //        lblOption.Text = "Choose your 7th Option / अपना 7 वां विकल्प चुनें";
    //        btnAddMore.Text = "8th Option / 8 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 7)
    //    {
    //        lblOption.Text = "Choose your 8th Option / अपना 8 वां विकल्प चुनें";
    //        btnAddMore.Text = "9th Option / 9 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 8)
    //    {
    //        lblOption.Text = "Choose your 9th Option / अपना 9 वां विकल्प चुनें";
    //        btnAddMore.Text = "10th Option / 10 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 9)
    //    {
    //        lblOption.Text = "Choose your 10th Option / अपना 10 वां विकल्प चुनें";
    //        btnAddMore.Text = "11th Option / 11 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 10)
    //    {
    //        lblOption.Text = "Choose your 11th Option / अपना 11 वां विकल्प चुनें";
    //        btnAddMore.Text = "12th Option / 12 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 11)
    //    {
    //        lblOption.Text = "Choose your 12th Option / अपना 12 वां विकल्प चुनें";
    //        btnAddMore.Text = "13th Option / 13 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 12)
    //    {
    //        lblOption.Text = "Choose your 13th Option / अपना 13 वां विकल्प चुनें";
    //        btnAddMore.Text = "14th Option / 14 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 13)
    //    {
    //        lblOption.Text = "Choose your 14th Option / अपना 14 वां विकल्प चुनें";
    //        btnAddMore.Text = "15th Option / 15 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 14)
    //    {
    //        lblOption.Text = "Choose your 15th Option / अपना 15 वां विकल्प चुनें";
    //        btnAddMore.Text = "16th Option / 16 वां विकल्प";
    //    }
    //    if (grdOptions.Rows.Count == 15)
    //    {
    //        lblOption.Text = "Choose your 16th Option / अपना 16 वां विकल्प चुनें";
    //        btnAddMore.Text = "17th Option / 17 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 16)
    //    {
    //        lblOption.Text = "Choose your 17th Option / अपना 17 वां विकल्प चुनें";
    //        btnAddMore.Text = "18th Option / 18 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 17)
    //    {
    //        lblOption.Text = "Choose your 18th Option / अपना 18 वां विकल्प चुनें";
    //        btnAddMore.Text = "19th Option / 19 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 18)
    //    {
    //        lblOption.Text = "Choose your 19th Option / अपना 19 वां विकल्प चुनें";
    //        btnAddMore.Text = "20th Option / 20 वां विकल्प";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 19)
    //    {
    //        lblOption.Text = "Choose your 20th Option / अपना 20 वां विकल्प चुनें";
    //        btnAddMore.Text = "Submit Final Option";
    //        btnAddMore.Visible = true;
    //    }
    //    if (grdOptions.Rows.Count == 20)
    //    {
    //        lblOption.Text = "You have added 20 Options";
    //        btnAddMore.Text = "All options are added.";
    //        btnAddMore.Visible = false;
    //    }
    //    clear();
    //}
    //#endregion

    protected void getDistrict(int intStateId)
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvSource = default(DataView);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_DISTRICT.xml");
        dvSource = ddlDataSource.Tables[0].DefaultView;
        //'only for Bihar
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
        //ddlCollegeDistrict.DataSource = dvSource;
        //ddlCollegeDistrict.DataTextField = "vch_DistrictName";
        //ddlCollegeDistrict.DataValueField = "int_DistrictID";
        //ddlCollegeDistrict.DataBind();
        //ddlCollegeDistrict.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
    }


    #region fillStream
    [WebMethod()]
    public static dynamic FillStream(int intCollegeID)
    {
        CommonClass ccobj = new CommonClass();
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
            
                obj.Action = "J";
                obj.Cid = intCollegeID;
                list = ccobj.fillJuniorStream(obj);
            
            return list;
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {

        }

    }

    //protected void ddlCollege_SelectedIndexChanged(object sender, EventArgs e)
    //{

    //    try
    //    {
    //        List<CAFEntity> list = new List<CAFEntity>();
    //        ddlStream.Items.Clear();
    //        list = FillStream(Convert.ToInt32(ddlCollege.SelectedValue));
    //        if (list.Count > 0)
    //        {
    //            ddlStream.DataSource = list;
    //            ddlStream.DataTextField = "vch_StreamName";
    //            ddlStream.DataValueField = "int_StreamID";
    //            ddlStream.DataBind();

    //        }
    //        ddlStream.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });

    //    }
    //    catch (Exception ex)
    //    {
    //        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
    //    }

    //}
    #endregion


    #region "Button Click"
    //protected void btnAddMore_Click(object sender, EventArgs e)
    //{

    //    try
    //    {
    //        if (IsValidAddMore())
    //        {
    //            AddNewRowToGrid();
    //        }
    //        if (grdOptions.Rows.Count > 0)
    //        {
    //            divOptionPrefer.Visible = true;
    //            divOptionPreferBtn.Visible = true;
    //            divOption.Visible = true;
    //        }
    //        else
    //        {
    //            divOptionPrefer.Visible = false;
    //            divOptionPreferBtn.Visible = false;
    //            divOption.Visible = false;
    //        }
    //    }
    //    catch (Exception ex)
    //    {
    //        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
    //    }
    //}
    //protected void btnUpdatePreference_Click(object sender, EventArgs e)
    //{
    //    try
    //    {
    //        List<CAFEntity> listoption = new List<CAFEntity>();
    //        List<CAFEntity> listoptionNew = new List<CAFEntity>();
    //        //List<CAFEntity> listoptionFinal = new List<CAFEntity>();

    //        var count = 1;
    //        foreach (GridViewRow row in this.grdOptions.Rows)
    //        {
    //            CAFEntity obj3 = new CAFEntity();

    //            obj3.UserId = Convert.ToInt32(((TextBox)row.FindControl("txtSlNo")).Text);

    //            StringWriter myWriter = new StringWriter();

    //            // Decode the encoded string.
    //            HttpUtility.HtmlDecode(row.Cells[1].Text.Trim(), myWriter);
    //            obj3.vch_CollegeName = myWriter.ToString();

    //            obj3.vch_CollegeName = row.Cells[1].Text.Trim();
    //            obj3.Stream = row.Cells[4].Text.Trim();

    //            //===ids
    //            obj3.int_CollegeID = Convert.ToInt32(((HiddenField)row.FindControl("hdnCollegeid")).Value);
    //            obj3.StreamID = Convert.ToInt32(((HiddenField)row.FindControl("hdnStreamid")).Value);
    //            obj3.Type = Convert.ToInt32(((HiddenField)row.FindControl("hdnCollegeType")).Value);
    //            obj3.pintReserveID = Convert.ToInt32(((HiddenField)row.FindControl("hdnClgReservation")).Value);


    //            listoption.Add(obj3);
    //        }

    //        listoptionNew = listoption.OrderBy(o => o.UserId).ToList();
    //        var listoptionFinal = listoptionNew.Select((s) => new CAFEntity()
    //        {
    //            UserId = count++,
    //            vch_CollegeName = s.vch_CollegeName,
    //            Stream = s.Stream,

    //            int_CollegeID = s.int_CollegeID,
    //            StreamID = s.StreamID,
    //            Type = s.Type,
    //            pintReserveID = s.pintReserveID


    //        }).ToList();

    //        grdOptions.DataSource = listoptionFinal;
    //        grdOptions.DataBind();
    //        ViewState["Request"] = listoptionFinal;
    //        filltext();
    //        fillCollegeTypes();
    //        fillClgResTypes();
    //        string strMsg = "Option Preference updated successfully.";
    //        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnUpdatePreference','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);

    //    }
    //    catch (Exception ex)
    //    {
    //        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
    //    }
    //}
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
                    vchModuleName = "StudentLogin_OptionPref_btnSave_Click_CSRF"
                    ,
                    strIpAddress = Request.ServerVariables["REMOTE_ADDR"].ToString()
                    ,
                    intType = 1
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
    #endregion

    //#region "Add a New Option"
    //private void AddNewRowToGrid()
    //{
    //    DataSet ddlDataSource = new DataSet();
    //    DataView dvSource = default(DataView);
    //    string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
    //    ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_COLLEGE.xml");
    //    dvSource = ddlDataSource.Tables[0].DefaultView;
    //    dvSource.RowFilter = "CID=" + hdnCollegeid.Value;
    //    string collegeType = (string)dvSource[0]["WomenStatus"];
    //    string ReservationType = (string)dvSource[0]["ResStatus"];

    //    List<CAFEntity> listoption = new List<CAFEntity>();
    //    CAFEntity obj2 = new CAFEntity();
    //    try
    //    {


    //        if (ViewState["Request"] != null)
    //            listoption = (List<CAFEntity>)ViewState["Request"];

    //        obj2.UserId = (grdOptions.Rows.Count) + 1;
    //        obj2.vch_CollegeName = hdnCollegenm.Value;
    //        obj2.int_CollegeID = Convert.ToInt32(hdnCollegeid.Value);
    //        obj2.Stream = hdnStreamnm.Value;
    //        obj2.StreamID = Convert.ToInt32(hdnStreamid.Value);
    //        obj2.Type = Convert.ToInt32(collegeType);
    //        obj2.pintReserveID = Convert.ToInt32(ReservationType);

    //        listoption.Add(obj2);

    //        grdOptions.DataSource = listoption;
    //        grdOptions.DataBind();
    //        ViewState["Request"] = listoption;
    //        if (grdOptions.Rows.Count == 0)
    //        {
    //            lblOption.Text = "Enter here for 1st Option / अपना पहला विकल्प चुनें ";
    //            btnAddMore.Text = "2nd Option / दूसरा विकल्प";
    //        }
    //        filltext();
    //        fillCollegeTypes();
    //        fillClgResTypes();
    //    }
    //    catch (Exception ex)
    //    {
    //        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
    //    }
    //    finally
    //    {

    //    }
    //}

    //#endregion
    #region GridView Function
    //protected void grdOptions_RowDeleting(object sender, GridViewDeleteEventArgs e)
    //{
    //    List<CAFEntity> listoption = new List<CAFEntity>();
    //    listoption = OptionList(e.RowIndex);
    //    grdOptions.DataSource = listoption;
    //    grdOptions.DataBind();
    //    ViewState["Request"] = listoption;
    //    filltext();
    //    fillCollegeTypes();
    //    fillClgResTypes();
    //    if (grdOptions.Rows.Count > 0)
    //    {
    //        divOptionPrefer.Visible = true;
    //        divOptionPreferBtn.Visible = true;
    //        divOption.Visible = true;
    //    }
    //    else
    //    {
    //        divOptionPrefer.Visible = false;
    //        divOptionPreferBtn.Visible = false;
    //        divOption.Visible = false;
    //    }

    //}
    protected void grdOptions_RowDataBound(object sender, System.Web.UI.WebControls.GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            try
            {
                LinkButton imgbtnDelete = e.Row.FindControl("imgbtnDelete") as LinkButton;
                imgbtnDelete.OnClientClick = string.Format("return ConfirmProcessing('{0}','{1}');", imgbtnDelete.UniqueID, "<strong>Are you sure you want to delete this option ?</strong>");

                Label lblCollegeType = (Label)e.Row.FindControl("lblCollegeType");
                HiddenField hdnCollegeType = (HiddenField)e.Row.FindControl("hdnCollegeType");


                if (Convert.ToInt32(hdnCollegeType.Value) == 0)
                {
                    lblCollegeType.Text = "Intermediate Boys College";
                }
                else if (Convert.ToInt32(hdnCollegeType.Value) == 1)
                {
                    lblCollegeType.Text = "Intermediate College";
                }
                else
                {
                    lblCollegeType.Text = "Intermediate Women College";
                }

                //=====================college Reservation type
                Label lblClgReservation = (Label)e.Row.FindControl("lblClgReservation");
                HiddenField hdnClgReservation = (HiddenField)e.Row.FindControl("hdnClgReservation");

                if (Convert.ToInt32(hdnClgReservation.Value) == 2)
                {
                    lblClgReservation.Text = "SC";
                }
                else if (Convert.ToInt32(hdnClgReservation.Value) == 3)
                {
                    lblClgReservation.Text = "BC & EBC";
                }
                else if (Convert.ToInt32(hdnClgReservation.Value) == 4)
                {
                    lblClgReservation.Text = "ST";
                }
                else
                {
                    lblClgReservation.Text = "General";
                }
            }
            catch (Exception ex)
            {
                ClientScript.RegisterStartupScript(this.GetType(), "key1", "<Script>alert('" + ex.Message.ToString() + "');</Script>");
            }
        }
    }
    #endregion

    #region Save Data
    protected void SaveRequestDetails()
    {
        CAFEntity objc = new CAFEntity();
      
        string Retval = "";
        try
        {
            List<innerEntity> objNew = new List<innerEntity>();
            objc.Action = "PU";
            objc.ApplicantID = Convert.ToInt32(hdnApplicationid.Value);
            objc.int_Gender = Convert.ToInt32(ddlGender.SelectedValue);

            if (rbtST.Checked)
            {
                objc.pintReserveID = 3;
            }
            if (rbtSC.Checked)
            {
                objc.pintReserveID = 2;
            }

            if (rbtnOBC.Checked)
            {
                objc.pintReserveID = 4;
            }
            if (rbtGeneral.Checked)
            {
                objc.pintReserveID = 1;
            }
            if (rbtOther.Checked)
            {
                objc.pintReserveID = 5;
            }
            if (rbtBCW.Checked)
            {
                objc.pintReserveID = 6;
            }

            if (chkPHOHY.Checked)
            {
                objc.PHOH = true;
            }
            else
            {
                objc.PHOH = false;
            }


            //added for Economically Weaker Section
            if (rbtnEWSYes.Checked && rbtGeneral.Checked)
            {
                objc.intEWS = 1;
            }
            else
            {
                objc.intEWS = 0;
            }


            //if (ViewState["Request"] != null)
            //{
            //    List<CAFEntity> obj = (List<CAFEntity>)ViewState["Request"];

            //    for (int i = 0; i < obj.Count; i++)
            //    {
            //        innerEntity obj1 = new innerEntity();
            //        obj1.UserId = Convert.ToInt32(obj[i].UserId);
            //        obj1.vch_CollegeName = obj[i].vch_CollegeName;
            //        obj1.int_CollegeID = Convert.ToInt32(obj[i].int_CollegeID);
            //        obj1.StreamID = Convert.ToInt32(obj[i].StreamID);
            //        obj1.CompulsoryId = Convert.ToInt32(obj[i].CompulsoryId);
            //        obj1.compulsoryId2 = Convert.ToInt32(obj[i].compulsoryId2);
            //        obj1.compulsoryId3 = Convert.ToInt32(obj[i].compulsoryId3);
            //        obj1.Elective1 = Convert.ToInt32(obj[i].Elective1);
            //        obj1.Elective2 = Convert.ToInt32(obj[i].Elective2);
            //        obj1.Elective3 = Convert.ToInt32(obj[i].Elective3);
            //        obj1.p4thElective1 = Convert.ToInt32(obj[i].p4thElective1);

            //        objNew.Add(obj1);
            //    }
            //}
            objc.Total = ViewState["Request"] != null ? ConvertObjectToXMLString(objNew) : "";
            string strResult = "";
            strResult = ccobj.EDitCAFOption(objc);
            Retval = strResult.Substring(0, 1);
            string url = "&linkm=" + Request.QueryString["linkm"] + "&linkn=" + Request.QueryString["linkn"] + "&btn=" + Request.QueryString["btn"] + "&tab=" + Request.QueryString["tab"];
            string strmsg = string.Empty;
            if (Retval == "3")
            {
                strmsg = "Please select Gender !";
                ScriptManager.RegisterStartupScript(btnSave, this.GetType(), "Myalert", "jAlertSubmit('btnSubmit', '<strong>" + strmsg + "</strong>', 'OptionPref.aspx?" + url + "');", true);
            }
            else if (Retval == "4")
            {
                strmsg = "Please select ST/SC/OBC/General/EBC category !";
                ScriptManager.RegisterStartupScript(btnSave, this.GetType(), "Myalert", "jAlertSubmit('btnSubmit', '<strong>" + strmsg + "</strong>', 'OptionPref.aspx?" + url + "');", true);
            }
            //else if (Retval == "5")
            //{
            //    strmsg = "Invalid Option details !";
            //    ScriptManager.RegisterStartupScript(btnSave, this.GetType(), "Myalert", "jAlertSubmit('btnSubmit', '<strong>" + strmsg + "</strong>', 'OptionPref.aspx?" + url + "');", true);
            //}
            //else if (Retval == "6")
            //{
            //    strmsg = "Invalid Option details !";

            //    string[] strResultArray = strResult.Split('~');
            //    string[] strInvalidArray = strResultArray[1].Split(',');
            //    for (int i = 0; i < strInvalidArray.Count(); i++)
            //    {
            //        int intOptionId = Convert.ToInt32(strInvalidArray[i].ToString());
            //        grdOptions.Rows[intOptionId - 1].BackColor = System.Drawing.ColorTranslator.FromHtml("#f2d9d9");

            //    }
            //    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnSave','<strong>" + strmsg + "</strong>','" + strMsgTitle + "');", true);
            //    return;

            //}
            //else if (Retval == "7")
            //{
            //    strmsg = "Invalid Option details !";

            //    string[] strClgResultArray = strResult.Split('~');
            //    string[] strClgInvalidArray = strClgResultArray[1].Split(',');
            //    for (int i = 0; i < strClgInvalidArray.Count(); i++)
            //    {
            //        int intOptionId = Convert.ToInt32(strClgInvalidArray[i].ToString());
            //        grdOptions.Rows[intOptionId - 1].BackColor = System.Drawing.ColorTranslator.FromHtml("#f2d9d9");

            //    }
            //    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('btnSave','<strong>" + strmsg + "</strong>','" + strMsgTitle + "');", true);
            //    return;

            //}
            else
            {

                strmsg = Messages.Message(Convert.ToInt32(Retval));
                ScriptManager.RegisterStartupScript(btnSave, this.GetType(), "Myalert", "jAlertSubmit('btnSubmit', '<strong>" + strmsg + "</strong>', 'OptionPref.aspx?" + url + "');", true);
            }

            if (Retval == "2")
            {
                #region Send Email and Sms
                SendEmailandSMS(Session["StudID"].ToString(), hdnApplicantMobNo.Value, hdnApplicantEmail.Value, hdnApplicantNm.Value);
                #endregion
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

    }

    private void SendEmailandSMS(string strUnqRefNo, string strStudMobNo, string strStudEmail, string strStudName)
    {

        string strCafNo = strUnqRefNo;
        string strMobileNo = strStudMobNo;
        string strEmail = strStudEmail;
        string strApplicantname = strStudName;
        Dictionary<string, string> dcValue = new Dictionary<string, string>();
        dcValue.Add(CreateXmlMsgUtil.hash_cafno, strCafNo);
        dcValue.Add(CreateXmlMsgUtil.hash_admDate, DateTime.Now.ToString());

        //---------------------------commented code after third selection as there will be no change in otipn details , only change in  personal info part on 28th June 2019
        string strSMSMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginOptionPreferenceJun, dcValue, 1);
        string strEmailMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginOptionPreferenceJun, dcValue, 2);

        try
        {
            if (ConfigurationManager.AppSettings["SMSjr"].ToString() == "Y")
            {
                SENDMSDSMS objSms = new SENDMSDSMS();
                string status = objSms.sendOTPMSG(strMobileNo, strSMSMessage, Util.K_SMS_StudLogin_OptPreference);
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "optionupdate");
        }

        try
        {
            if (ConfigurationManager.AppSettings["Emailjr"].ToString() == "Y")
            {
                if (ConfigurationManager.AppSettings["SDCEmailjr"].ToString() == "Y")
                {
                    SENDMAIL objEmail = new SENDMAIL();
                    string strCompleteEmail = CreateXmlMsgUtil.GetEmailAppendedContent(strEmailMessage, strApplicantname);
                    objEmail.sendMail(CreateXmlMsgUtil.K_MailSub_CAFOptionPreferEditJun, strCompleteEmail, strEmail);
                }
                else
                {
                    SENDMAIL objEmail = new SENDMAIL();
                    string strCompleteEmail = CreateXmlMsgUtil.GetEmailAppendedContent(strEmailMessage, strApplicantname);
                    objEmail.SendVivaMail(CreateXmlMsgUtil.K_MailSub_CAFOptionPreferEditJun, strCompleteEmail, strEmail);
                }
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "optionupdate");

        }


    }

    //private List<CAFEntity> OptionList(int index)
    //{
    //    List<CAFEntity> listoption = new List<CAFEntity>();

    //    foreach (GridViewRow row in this.grdOptions.Rows)
    //    {
    //        if (row.RowIndex != index)
    //        {
    //            CAFEntity obj1 = new CAFEntity();
    //            obj1.UserId = (listoption.Count) + 1; ;
    //            obj1.vch_CollegeName = row.Cells[1].Text.Trim();
    //            obj1.Stream = row.Cells[4].Text.Trim();

    //            //===ids
    //            obj1.int_CollegeID = Convert.ToInt32(((HiddenField)row.FindControl("hdnCollegeid")).Value);
    //            obj1.StreamID = Convert.ToInt32(((HiddenField)row.FindControl("hdnStreamid")).Value);
    //            obj1.Type = Convert.ToInt32(((HiddenField)row.FindControl("hdnCollegeType")).Value);
    //            obj1.pintReserveID = Convert.ToInt32(((HiddenField)row.FindControl("hdnClgReservation")).Value);

    //            listoption.Add(obj1);
    //        }
    //    }
    //    return listoption;
    //}
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
    #endregion
    #region validation

    protected bool IsValid()
    {
        string strMsg = "";
        int intLargestOption = 0;
        try
        {
            if (ddlGender.SelectedValue == "0")
            {
                strMsg = "Please select Gender !";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlGender.Focus();
                return false;

            }
            if (!(rbtST.Checked) && !(rbtSC.Checked) && !(rbtOther.Checked) && !(rbtnOBC.Checked) && !(rbtGeneral.Checked) && !(rbtBCW.Checked))
            {
                strMsg = "Please select ST/SC/OBC/General/EBC category";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('rbtGeneral','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                rbtGeneral.Focus();
                return false;
            }
            //if (grdOptions.Rows.Count < 10)
            //{
            //    strMsg = "Please select minimum 10 Option details. ";
            //    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCollege','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
            //    ddlCollege.Focus();
            //    return false;
            //}
           // else
           // {
                //if (Convert.ToInt32(hdnCollegeid.Value) > 0)
                //{
                //    if (hdnCollegeid.Value == "0")
                //    {
                //        strMsg = "Please select college name. ";
                //        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCollege','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //        ddlCollege.Focus();
                //        return false;
                //    }
                //    if (hdnStreamid.Value == "0")
                //    {
                //        strMsg = "Please select stream name. ";
                //        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlStream','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //        ddlStream.Focus();
                //        return false;
                //    }
                //}

                //if (grdOptions.Rows.Count > 0)
                //{
                //    foreach (GridViewRow row in this.grdOptions.Rows)
                //    {
                //        int SlNo = Convert.ToInt32(((TextBox)row.FindControl("txtSlNo")).Text);

                //        for (int i = row.RowIndex + 1; i < grdOptions.Rows.Count; i++)
                //        {
                //            int SlNoNew = Convert.ToInt32(((TextBox)grdOptions.Rows[i].FindControl("txtSlNo")).Text);
                //            TextBox TxtSL = (TextBox)grdOptions.Rows[i].FindControl("txtSlNo");
                //            if (SlNo == SlNoNew)
                //            {
                //                strMsg = "Option(s)/Choice(s) Sl# cannot be duplicate, So first change Sl# and then click on update option preference. ";
                //                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlStream','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //                TxtSL.Focus();
                //                return false;
                //            }
                //        }

                //    }
                //}

                //if (grdOptions.Rows.Count > 0)
                //{
                //    intLargestOption = Convert.ToInt32(((TextBox)grdOptions.Rows[0].FindControl("txtSlNo")).Text); ;
                //    foreach (GridViewRow row in this.grdOptions.Rows)
                //    {
                //        int SlNo = Convert.ToInt32(((TextBox)row.FindControl("txtSlNo")).Text);

                //        if (SlNo > intLargestOption)
                //        {
                //            intLargestOption = SlNo;
                //        }


                //    }
                //    if (intLargestOption > grdOptions.Rows.Count)
                //    {
                //        strMsg = "Option(s)/Choice(s) Sl# cannot be skipped, So click on update option preference.";
                //        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlStream','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //        return false;
                //    }
                //}
                //if (hdnAppliedColleges.Value != "" && !string.IsNullOrEmpty(hdnAppliedColleges.Value))
                //{
                //    if (Convert.ToInt32(ddlGender.SelectedValue) == 1)
                //    {
                //        if (hdnAppliedColleges.Value.Contains("2"))
                //        {
                //            strMsg = "Please delete all selected women college option first and then change your gender and then you will have to select college option again.";
                //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //            ddlGender.SelectedValue = hdnGender.Value;
                //            return false;
                //        }

                //    }
                //    if (Convert.ToInt32(ddlGender.SelectedValue) == 2)
                //    {
                //        if (hdnAppliedColleges.Value.Contains("0"))
                //        {
                //            strMsg = "Please delete all selected Boys college option first and then change your gender and then you will have to select college option again.";
                //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //            ddlGender.SelectedValue = hdnGender.Value;
                //            return false;
                //        }
                //    }
                //    if (Convert.ToInt32(ddlGender.SelectedValue) == 3)
                //    {
                //        if (hdnAppliedColleges.Value.Contains("0") || hdnAppliedColleges.Value.Contains("2"))
                //        {
                //            strMsg = "Please delete all selected Boys and women college option first and then change your gender and then you will have to select college option again.";
                //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //            ddlGender.SelectedValue = hdnGender.Value;
                //            return false;
                //        }
                //        //if (rbtBCW.Checked)
                //        //{
                //        //    strMsg = "Please change the reservation details and then change your gender.";
                //        //    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //        //    return false;
                //        //}
                //    }

                //}
                //if (hdnAppliedClgRes.Value != "" && !string.IsNullOrEmpty(hdnAppliedClgRes.Value))
                //{
                //    if (rbtGeneral.Checked)
                //    {
                //        if (hdnAppliedClgRes.Value.Contains("2") || hdnAppliedClgRes.Value.Contains("3") || hdnAppliedClgRes.Value.Contains("4"))
                //        {
                //            strMsg = "Please delete all SC,ST,BC and EBC college option first and then change your reservation details and then you will have to select college option again.";
                //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //            reFixResevation();
                //            return false;
                //        }

                //    }
                //    if (rbtSC.Checked)
                //    {
                //        if (hdnAppliedClgRes.Value.Contains("3") || hdnAppliedClgRes.Value.Contains("4"))
                //        {
                //            strMsg = "Please delete all ST,BC and EBC college option first and then change your reservation details and then you will have to select college option again.";
                //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //            reFixResevation();
                //            return false;
                //        }
                //    }
                //    if (rbtST.Checked)
                //    {
                //        if (hdnAppliedClgRes.Value.Contains("2") || hdnAppliedClgRes.Value.Contains("3"))
                //        {
                //            strMsg = "Please delete all SC,BC and EBC college option first and then change your reservation details and then you will have to select college option again.";
                //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //            reFixResevation();
                //            return false;
                //        }

                //    }
                //    if (rbtnOBC.Checked || rbtOther.Checked)
                //    {
                //        if (hdnAppliedClgRes.Value.Contains("2") || hdnAppliedClgRes.Value.Contains("4"))
                //        {
                //            strMsg = "Please delete all ST,SC college option first and then change your reservation details and then you will have to select college option again.";
                //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                //            reFixResevation();
                //            return false;
                //        }

                //    }
                //}


            //}
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

        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "alert('" + ex.Message.Replace("'", "") + "');", true);
        }
        return true;

    }
    //protected bool IsValidAddMore()
    //{
    //    string strMsg = "";
    //    try
    //    {
    //        if (ddlGender.SelectedValue == "0")
    //        {
    //            strMsg = "Please select Gender !";
    //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
    //            ddlGender.Focus();
    //            return false;

    //        }
    //        if (!(rbtST.Checked) && !(rbtSC.Checked) && !(rbtOther.Checked) && !(rbtnOBC.Checked) && !(rbtGeneral.Checked) && !(rbtBCW.Checked))
    //        {
    //            strMsg = "Please select ST/SC/OBC/General/EBC/WBC category";
    //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('rbtGeneral','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
    //            rbtGeneral.Focus();
    //            return false;
    //        }
    //        if (hdnCollegeid.Value == "0")
    //        {
    //            strMsg = "Please select college name. ";
    //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCollege','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
    //            ddlCollege.Focus();
    //            return false;
    //        }
    //        if (hdnStreamid.Value == "0")
    //        {
    //            strMsg = "Please select stream name. ";
    //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlStream','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
    //            ddlStream.Focus();
    //            return false;
    //        }

    //        if (grdOptions.Rows.Count > 0)
    //        {
    //            foreach (GridViewRow row in this.grdOptions.Rows)
    //            {
    //                int CollegeId = Convert.ToInt32(((HiddenField)row.FindControl("hdnCollegeid")).Value);
    //                int StreamID = Convert.ToInt32(((HiddenField)row.FindControl("hdnStreamid")).Value);
    //                if ((CollegeId == Convert.ToInt32(ddlCollege.SelectedValue)) && (StreamID == Convert.ToInt32(ddlStream.SelectedValue)))
    //                {
    //                    strMsg = "You cannot add more than 1 option in same college & stream";
    //                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlStream','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
    //                    ddlStream.Focus();
    //                    return false;
    //                }
    //            }
    //        }
    //    }
    //    catch (Exception ex)
    //    {
    //        ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "alert('" + ex.Message.Replace("'", "") + "');", true);
    //    }
    //    return true;
    //}
    #endregion

    //protected void ddlCollegeDistrict_SelectedIndexChanged(object sender, EventArgs e)
    //{

    //    try
    //    {
    //        ddlCollege.Items.Clear();
    //        int collegeType = 0;
    //        if (rbtOthersFinance.Checked)
    //        {
    //            collegeType = 0;
    //        }

    //        getDistWiseColg(Convert.ToInt32(ddlCollegeDistrict.SelectedValue), collegeType, Convert.ToInt32(ddlGender.SelectedValue));
    //    }
    //    catch (Exception ex)
    //    {
    //        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
    //    }

    //}

    protected void getDistWiseColg(int intDistId, int intCType, int intGender)
    {
        string strMsg = "";
        if (ddlGender.SelectedValue == "0")
        {
            strMsg = "Please select Gender !";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
            ddlGender.Focus();
            return;

        }
        else if (!(rbtST.Checked) && !(rbtSC.Checked) && !(rbtOther.Checked) && !(rbtnOBC.Checked) && !(rbtGeneral.Checked) && !(rbtBCW.Checked))
        {
            strMsg = "Please select ST/SC/OBC/General/EBC category";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('rbtGeneral','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
            rbtGeneral.Focus();
            return;
        }
        else
        {
            DataSet ddlDataSource = new DataSet();
            DataView dvSource = default(DataView);
            string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
            ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_COLLEGE.xml");
            dvSource = ddlDataSource.Tables[0].DefaultView;
            string strFilterDtl = string.Empty;

            int intReserveId = 0;
            if (rbtST.Checked)
            {
                intReserveId = 3;
            }
            else if (rbtSC.Checked)
            {
                intReserveId = 2;
            }

            else if (rbtnOBC.Checked)
            {
                intReserveId = 4;
            }
            else if (rbtGeneral.Checked)
            {
                intReserveId = 1;
            }
            else if (rbtOther.Checked)
            {
                intReserveId = 5;
            }
            else if (rbtBCW.Checked)
            {
                intReserveId = 6;
            }
            else
            {
                intReserveId = 6;
            }

            if (intDistId != 0)
            {
                if (intGender != 0)
                {
                    if (intGender == 2)//female
                    {
                        strFilterDtl = "DID=" + intDistId.ToString() + " AND CTYPE=" + intCType.ToString() + " AND WomenStatus <> " + Convert.ToString(0);

                    }
                    else if (intGender == 1)//male
                    {
                        strFilterDtl = "DID=" + intDistId.ToString() + " AND CTYPE=" + intCType.ToString() + " AND WomenStatus <> " + Convert.ToString(2);

                    }
                    else //Transgender
                    {
                        strFilterDtl = "DID=" + intDistId.ToString() + " AND CTYPE=" + intCType.ToString() + " AND WomenStatus = " + Convert.ToString(1);

                    }
                }

                if (intReserveId != 0)
                {
                    if (intReserveId == 2) //for SC student 
                    {
                        strFilterDtl = strFilterDtl + " and (ResStatus = " + Convert.ToString(1) + " or ResStatus = " + Convert.ToString(2) + ")";

                    }
                    else if (intReserveId == 3)//for  ST student 
                    {
                        strFilterDtl = strFilterDtl + " and (ResStatus = " + Convert.ToString(1) + " or ResStatus = " + Convert.ToString(4) + ")";

                    }
                    else if (intReserveId == 5 || intReserveId == 4)//for BC or EBC student
                    {
                        strFilterDtl = strFilterDtl + " and (ResStatus = " + Convert.ToString(1) + " or ResStatus = " + Convert.ToString(3) + ")";

                    }
                    else //for general student
                    {
                        strFilterDtl = strFilterDtl + " and (ResStatus = " + Convert.ToString(1) + ")";

                    }

                }
                dvSource.RowFilter = strFilterDtl;

            }

            //ddlCollege.DataSource = dvSource;
            //ddlCollege.DataTextField = "CNAME";
            //ddlCollege.DataValueField = "CID";
            //ddlCollege.DataBind();
            //ddlCollege.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
        }

    }

    #region Fill All type of subjects


    protected void ddlStream_SelectedIndexChanged(object sender, EventArgs e)
    {

        //try
        //{
        //    ddlFC.Items.Clear();
        //    ddlMB.Items.Clear();
        //    ddlLL.Items.Clear();
        //    ddlELE1.Items.Clear();
        //    ddlELE2.Items.Clear();
        //    ddlELE3.Items.Clear();
        //    ddl4thELE1.Items.Clear();
        //    FillCompulsory1(Convert.ToInt32(ddlCollege.SelectedValue), Convert.ToInt32(ddlStream.SelectedValue));
        //    FillCompulsory2(Convert.ToInt32(ddlCollege.SelectedValue), Convert.ToInt32(ddlStream.SelectedValue));
        //    FillCompulsory3(Convert.ToInt32(ddlCollege.SelectedValue), Convert.ToInt32(ddlStream.SelectedValue));
        //    FillElectives(Convert.ToInt32(ddlCollege.SelectedValue), Convert.ToInt32(ddlStream.SelectedValue));
        //    fillfElective2(Convert.ToInt32(ddlCollege.SelectedValue), Convert.ToInt32(ddlStream.SelectedValue));
        //    fillfElective3(Convert.ToInt32(ddlCollege.SelectedValue), Convert.ToInt32(ddlStream.SelectedValue));
        //    FillFourthElectives(Convert.ToInt32(ddlCollege.SelectedValue), Convert.ToInt32(ddlStream.SelectedValue));

        //}
        //catch (Exception ex)
        //{
        //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString() + "');", true);
        //}

    }

    //protected void clear()
    //{
    //    ddlCollegeDistrict.SelectedValue = "0";
    //    ddlCollege.Items.Clear();
    //    ddlStream.Items.Clear();
    //    ddlStream.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
    //    ddlCollege.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
    //}

    #endregion

    #region "gender change validation"
    protected void ddlGender_SelectedIndexChanged(object sender, EventArgs e)
    {
        //string strMsg = "";
        //try
        //{

        //    if (hdnAppliedColleges.Value != "" && !string.IsNullOrEmpty(hdnAppliedColleges.Value))
        //    {
        //        if (Convert.ToInt32(ddlGender.SelectedValue) == 1)
        //        {
        //            if (hdnAppliedColleges.Value.Contains("2"))
        //            {
        //                strMsg = "Please delete all selected women college option first and then change your gender and then you will have to select college option again.";
        //                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
        //                ddlGender.SelectedValue = hdnGender.Value;
        //                return;
        //            }

        //        }
        //        if (Convert.ToInt32(ddlGender.SelectedValue) == 2)
        //        {
        //            if (hdnAppliedColleges.Value.Contains("0"))
        //            {
        //                strMsg = "Please delete all selected Boys college option first and then change your gender and then you will have to select college option again.";
        //                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
        //                ddlGender.SelectedValue = hdnGender.Value;
        //                return;
        //            }
        //        }
        //        if (Convert.ToInt32(ddlGender.SelectedValue) == 3)
        //        {
        //            if (hdnAppliedColleges.Value.Contains("0") || hdnAppliedColleges.Value.Contains("2"))
        //            {
        //                strMsg = "Please delete all selected Boys and women college option first and then change your gender and then you will have to select college option again.";
        //                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
        //                ddlGender.SelectedValue = hdnGender.Value;
        //                return;
        //            }

        //        }

        //    }
        //    if (Convert.ToInt32(ddlCollegeDistrict.SelectedValue) > 0 && Convert.ToInt32(ddlGender.SelectedValue) > 0)
        //    {
        //        ddlCollege.Items.Clear();
        //        getDistWiseColg(Convert.ToInt32(ddlCollegeDistrict.SelectedValue), 0, Convert.ToInt32(ddlGender.SelectedValue));
        //    }
        //}
        //catch (Exception ex)
        //{
        //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        //}

    }


    #endregion

    protected void Reservation_CheckedChanged(object sender, EventArgs e)
    {
        try
        {
            string strMsg = "";
            if (hdnAppliedClgRes.Value != "" && !string.IsNullOrEmpty(hdnAppliedClgRes.Value))
            {
                if (rbtGeneral.Checked)
                {
                    if (hdnAppliedClgRes.Value.Contains("2") || hdnAppliedClgRes.Value.Contains("3") || hdnAppliedClgRes.Value.Contains("4"))
                    {
                        strMsg = "Please delete all SC,ST,BC and EBC college option first and then change your reservation details and then you will have to select college option again.";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        reFixResevation();
                        return;
                    }

                }
                if (rbtSC.Checked)
                {
                    if (hdnAppliedClgRes.Value.Contains("3") || hdnAppliedClgRes.Value.Contains("4"))
                    {
                        strMsg = "Please delete all ST,BC and EBC college option first and then change your reservation details and then you will have to select college option again.";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        reFixResevation();
                        return;
                    }
                }
                if (rbtST.Checked)
                {
                    if (hdnAppliedClgRes.Value.Contains("2") || hdnAppliedClgRes.Value.Contains("3"))
                    {
                        strMsg = "Please delete all SC,BC and EBC college option first and then change your reservation details and then you will have to select college option again.";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        reFixResevation();
                        return;
                    }

                }
                if (rbtnOBC.Checked || rbtOther.Checked)
                {
                    if (hdnAppliedClgRes.Value.Contains("2") || hdnAppliedClgRes.Value.Contains("4"))
                    {
                        strMsg = "Please delete all ST,SC college option first and then change your reservation details and then you will have to select college option again.";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        reFixResevation();
                        return;
                    }

                }

            }
            //if (!string.IsNullOrEmpty(ddlCollegeDistrict.SelectedValue) && Convert.ToInt32(ddlCollegeDistrict.SelectedValue) > 0 && !string.IsNullOrEmpty(ddlGender.SelectedValue) && Convert.ToInt32(ddlGender.SelectedValue) > 0)
            //{
            //    ddlCollege.Items.Clear();
            //    getDistWiseColg(Convert.ToInt32(ddlCollegeDistrict.SelectedValue), 0, Convert.ToInt32(ddlGender.SelectedValue));
            //}
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }

    /// <summary>
    /// function to refix the reservation details in cas eof any kind of conflict
    /// </summary>
    private void reFixResevation()
    {
        if (!string.IsNullOrEmpty(hdnWReservation.Value))
        {
            rbtSC.Checked = false;
            rbtST.Checked = false;
            rbtnOBC.Checked = false;
            rbtGeneral.Checked = false;
            rbtOther.Checked = false;
            rbtBCW.Checked = false;

            if (Convert.ToInt32(hdnWReservation.Value) == 2)
            {
                rbtSC.Checked = true;

            }
            if (Convert.ToInt32(hdnWReservation.Value) == 3)
            {
                rbtST.Checked = true;

            }
            if (Convert.ToInt32(hdnWReservation.Value) == 4)
            {
                rbtnOBC.Checked = true;

            }
            if (Convert.ToInt32(hdnWReservation.Value) == 1)
            {
                rbtGeneral.Checked = true;

            }
            if (Convert.ToInt32(hdnWReservation.Value) == 5)
            {
                rbtOther.Checked = true;

            }
            if (Convert.ToInt32(hdnWReservation.Value) == 6)
            {
                rbtBCW.Checked = true;

            }
        }
    }


}
//[Serializable]
public class innerEntity
{
    public int UserId { get; set; }
    public string vch_CollegeName { get; set; }
    public int int_CollegeID { get; set; }
    public int StreamID { get; set; }
    public int CompulsoryId { get; set; }
    public int Elective1 { get; set; }
    public int Elective2 { get; set; }
    public int Elective3 { get; set; }
    public int p4thElective1 { get; set; }
    public int p4thElective2 { get; set; }
    public int p4thElective3 { get; set; }
    public string Stream { get; set; }
    public string compulsory { get; set; }
    public string strElective1 { get; set; }
    public string strElective2 { get; set; }
    public string strElective3 { get; set; }
    public string str4thElective1 { get; set; }
    public string str4thElective2 { get; set; }
    public string str4thElective3 { get; set; }
    public int compulsoryId2 { get; set; }
    public string compulsoryName2 { get; set; }
    public int compulsoryId3 { get; set; }
    public string compulsoryName3 { get; set; }


}

