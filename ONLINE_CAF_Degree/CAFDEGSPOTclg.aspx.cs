using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;
using System.Linq;
using System.Globalization;
using OFSS_OL_Entity_deg;

public partial class ONLINE_CAF_CAFForm_DEGclg : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    CAFDegDal ccobjcafdeg = new CAFDegDal();
    private int intRetVal;
    private string strImageName = "";
    public string strOSAStatus = "False";
    public string strOLNSStatus = "False";
    public string strCompartmentStatus = "False";
    public string strStream = "";
    public string strBoard = "";
    public string strState = "";
    public string strCollege = "";
    public string strCategory1 = "";
    public string strCategory2 = "";
    public static int intDistrictID;
    public static int intCollegeID;

    protected void Page_Load(object sender, System.EventArgs e)
    {

        //if ((DateTime.Now <= DateTime.Parse("27-Aug-2018 11:59:59 PM")))
        //{
        //    Response.Write("<script>document.location.href=\'https://online.ofssbihar.in/CAFClosedDeg.html\';</script>");
        //    // Response.Write("<script>document.location.href=\'http://localhost/SAMS_Online/CAFClosedDeg.html\';</script>");
        //}

        //if ((DateTime.Now >= DateTime.Parse("01-Sep-2018 11:59:59 PM")))
        //{
        //    Response.Write("<script>document.location.href=\'https://online.ofssbihar.in/CAFClosedDeg.html\';</script>");
        //    // Response.Write("<script>document.location.href=\'http://localhost/SAMS_Online/CAFClosedDeg.html\';</script>");
        //}

        List<CommonModels.CAFEntity_Deg> list = new List<CommonModels.CAFEntity_Deg>();
        list = fillDateline();
        DateTime lastCompartmentadteDate = list[0].dtmTranDate;
        int compart = DateTime.Compare(lastCompartmentadteDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
        if (compart >= 0)
        {
            //btnProceedToPay.Visible = true;
        }
        else
        {
            Response.Write("<script>document.location.href=\'https://online.ofssbihar.in/CAFClosedDeg.html\';</script>");
        }


        Response.CacheControl = "no-cache";
        Response.Cache.SetCacheability(HttpCacheability.NoCache);
        if (!Page.IsPostBack)
        {
            fillBoard();
            FillDate(ddlDay, ddlMonth, ddlYear);
            fillAddressState();
            fillOSAState();
            fillOLNS();
            //fillCollegeDistricts();
            FillYOP(ddlYOP);
            fillMotherLanguage();
            getInsDistrict(1);
            ddlCState.SelectedValue = "1";
            ddlNationality.SelectedValue = "1";
            ddlMt.SelectedValue = "3";
            if (ddlCState.Items.Count > 20)
            {
                getDistrict(1);
            }

            try
            {
                if (HttpContext.Current.Items["Board"] != null)
                {
                    viewPreviousData();
                }
            }
            catch (Exception ex)
            {
                Server.Transfer("Error.aspx", false);
            }
        }
       
        clientSideMethod();

        intDistrictID = Convert.ToInt32(Request.QueryString["did"]);
        intCollegeID = Convert.ToInt32(Request.QueryString["cid"]);
    }


    #region "get date line"
    protected List<CommonModels.CAFEntity_Deg> fillDateline()
    {
        DateTime lastDt = DateTime.Today;
        List<CommonModels.CAFEntity_Deg> list = new List<CommonModels.CAFEntity_Deg>();
        CommonModels.CAFEntity_Deg obj = new CommonModels.CAFEntity_Deg();

        try
        {
            obj.Action = "DL";
            
                list = ccobj.fillPrintOption(obj);
                lastDt = list[0].ToDate;

            
        }
        catch (Exception ex)
        {
        }
        return list;
    }
    #endregion

    protected void clientSideMethod()
    {

        if ((Request.QueryString["Type"] == "Elective") && (Request.QueryString["CID"] != "") && (Request.QueryString["SID"] != ""))
        {
            FillElectives(Convert.ToInt32(Request.QueryString["CID"]), Convert.ToInt32(Request.QueryString["SID"]));
        }

        ddlCState.Attributes.Add("onchange", "fillDist(" + ddlCState.ClientID + ");RemoveAllOptions('ddlCBlock');");
        ddlCDist.Attributes.Add("onchange", "fillBlock(" + ddlCDist.ClientID + ");resetOptionByCDid();AssignDistHiddenVal()");
        ddlCBlock.Attributes.Add("onChange", "AssignBlockHiddenVal()");
        // ddlCollege.Attributes.Add("onchange", "resetOptionByCid();fillStream(" + ddlCollege.ClientID + "," + rbtUpashastri.ClientID + ");checkHostel();RemoveAllOptions('ddlELE1');clearCutoffMark();");
        ddlCollege.Attributes.Add("onchange", "resetOptionByCid();fillStream(" + ddlCollege.ClientID + "," + rbtUpashastri.ClientID + ");RemoveAllOptions('ddlELE1');CollegeValidate();");
        //ddlStream.Attributes.Add("onchange", "loadCutOffMark();clearElective(); setHonours();fillfElectiveAuto(" + ddlCollege.ClientID + "," + ddlStream.ClientID + ");UncheckStreamPref();return RestrictStream();");
        ddlStream.Attributes.Add("onchange", "fillfElective(" + ddlCollege.ClientID + "," + ddlStream.ClientID + ");loadCutOffMark();return RestrictStream();");
       // ddlELE1.Attributes.Add("onchange", "ColVacancy();");
       // ddlELE1.Attributes.Add("onchange", "IsHonours();");


    }

    protected void fillBoard()
    {
        string strChars = "";
        DataSet ddlDataSource = new DataSet();
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_COUNCIL.xml");
        ddlBoard.DataSource = ddlDataSource;
        ddlBoard.DataTextField = "Row";
        ddlBoard.DataValueField = "cid";
        ddlBoard.DataBind();
        //'===========Assigning values to a string================
        int i = 0;
        for (i = 0; i <= ddlDataSource.Tables[0].Rows.Count - 1; i++)
        {
            if (!string.IsNullOrEmpty(strChars))
            {
                strChars = strChars + "," + ddlDataSource.Tables[0].Rows[i]["Cname"].ToString().TrimStart().Substring(0, 1).ToLower();
            }
            else
            {
                strChars = ddlDataSource.Tables[0].Rows[i]["Cname"].ToString().TrimStart().Substring(0, 1).ToLower();
            }
            strBoard = strChars;
        }
        ddlBoard.SelectedValue = "35";
    }
    protected void FillDate(DropDownList ddlDay, DropDownList ddlMonth, DropDownList ddlYear)
    {
        int i = 0;
        string text = string.Empty;


        for (i = 1; i <= 31; i++)//Fill Day  
        {
            if (i.ToString().Length == 1)
            {
                text = "0" + i.ToString();
            }
            else
            {
                text = i.ToString();
            }
            ListItem lstItem = new ListItem(text, text);
            ddlDay.Items.Add(lstItem);
        }


        text = string.Empty;
        for (i = 1; i <= 12; i++)   //Fill Month  
        {
            //ListItem lstItem = new ListItem(CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(i).ToUpper(), i.ToString());
            //ddlMonth.Items.Add(lstItem);
            if (i.ToString().Length == 1)
            {
                text = "0" + i.ToString();
            }
            else
            {
                text = i.ToString();
            }
            ListItem lstItem = new ListItem(text, text);
            ddlMonth.Items.Add(lstItem);

        }

        for (i = 12; i <= 55; i++)  //Fill Year  
        {
            ListItem lstItem = new ListItem((System.DateTime.Now.Year - i).ToString(), (System.DateTime.Now.Year - i).ToString());
            ddlYear.Items.Add(lstItem);
        }
    }

    protected void fillMotherLanguage()
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvData = new DataView();
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_Language.xml");
        dvData = ddlDataSource.Tables[0].DefaultView;
        ddlMt.DataSource = dvData;
        ddlMt.DataTextField = "vch_Language";
        ddlMt.DataValueField = "int_ID";
        ddlMt.DataBind();
        ddlMt.Items.Insert(0, new ListItem { Text = "-Select-", Value = "0" });

    }

    protected void fillAddressState()
    {
        string strChars = "";
        DataSet ddlDataSource = new DataSet();
        DataView dvData = new DataView();
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_STATE.xml");
        dvData = ddlDataSource.Tables[0].DefaultView;
        ddlCState.DataSource = dvData;
        ddlCState.DataTextField = "Row";
        ddlCState.DataValueField = "int_StateID";
        ddlCState.DataBind();
        ddlCState.Items.Insert(0, new ListItem { Text = "-Select-", Value = "0" });
        //ddlCState.Items.Insert(0, "--SELECT--");
        int i = 0;
        for (i = 0; i <= ddlDataSource.Tables[0].Rows.Count - 1; i++)
        {
            if (!string.IsNullOrEmpty(strChars))
            {
                strChars = strChars + "," + ddlDataSource.Tables[0].Rows[i]["vch_StateName"].ToString().TrimStart().Substring(0, 1).ToLower();
            }
            else
            {
                strChars = ddlDataSource.Tables[0].Rows[i]["vch_StateName"].ToString().TrimStart().Substring(0, 1).ToLower();
            }
            strState = strChars;
        }
    }
    protected void fillOSAState()
    {
        ////ddlOSAState.Items.Clear();
        string strChars = string.Empty;
        DataSet ddlDataSource = new DataSet();
        DataView dvData = new DataView();
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_STATE.xml");
        dvData = ddlDataSource.Tables[0].DefaultView;
        dvData.RowFilter = "vch_StateCode <>1";
        dvData.Sort = "vch_StateName ASC";
        ////ddlOSAState.DataSource = dvData;
        ////ddlOSAState.DataTextField = "vch_StateName";
        ////ddlOSAState.DataValueField = "int_StateID";
        ////ddlOSAState.DataBind();
        //////ddlOSAState.Items.Insert(0, "-SELECT-");
        ////ddlOSAState.Items.Insert(0, new ListItem { Text = "-Select-", Value = "0" });
    }
    protected void fillOLNS()
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvData = new DataView();
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_STATE.xml");
        dvData = ddlDataSource.Tables[0].DefaultView;
        dvData.RowFilter = "vch_StateCode in (0,2)";
        dvData.Sort = "vch_StateCode,vch_StateName ASC";
        //ddlOLNSState.DataSource = dvData;
        //ddlOLNSState.DataTextField = "vch_StateName";
        //ddlOLNSState.DataValueField = "int_StateID";
        //ddlOLNSState.DataBind();
        //ddlOLNSState.Items.Insert(0, new ListItem { Text = "-Select-", Value = "0" });
        //ddlOLNSState.Items.Insert(0, "-SELECT-");
    }

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
        ddlCDist.DataSource = dvSource;
        ddlCDist.DataTextField = "vch_DistrictName";
        ddlCDist.DataValueField = "int_DistrictID";
        ddlCDist.DataBind();
    }

    protected void getBlock(int intDistId)
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvSource;
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_BLOCK.xml");
        dvSource = ddlDataSource.Tables[0].DefaultView;
        dvSource.RowFilter = ("int_DistrictID=" + intDistId);
        dvSource.Sort = "vch_BlockName";
        ddlCBlock.DataSource = dvSource;
        ddlCBlock.DataTextField = "vch_BlockName";
        ddlCBlock.DataValueField = "int_BlockID";
        ddlCBlock.DataBind();
    }

    protected void fillCollege()
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvSource;
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_COLLEGE_DEGREE.xml");
        dvSource = ddlDataSource.Tables[0].DefaultView;
        ddlCollege.DataSource = dvSource;
        ddlCollege.DataTextField = "Row";
        ddlCollege.DataValueField = "int_CollegeID";
        ddlCollege.DataBind();
        // '===========Assigning values to a string================
        int i = 0;
        string strChars = "";

        for (i = 0; (i <= (ddlDataSource.Tables[0].Rows.Count - 1)); i++)
        {
            if (strChars != "")
            {
                strChars = strChars + "," + ddlDataSource.Tables[0].Rows[i]["vch_CollegeName"].ToString().TrimStart().Substring(0, 1).ToLower();
            }
            else
            {
                strChars = ddlDataSource.Tables[0].Rows[i]["vch_CollegeName"].ToString().TrimStart().Substring(0, 1).ToLower();
            }

            strCollege = strChars;
        }

    }

    protected void getStream(int intCollegeID)
    {

        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {
            obj.Action = "D";
            obj.Cid = Convert.ToInt32(intCollegeID);
            
                list = ccobjcafdeg.fillDegStream(obj);
            
            if (list != null && list.Count >= 1)
            {
                ddlStream.Items.Add(new ListItem("Select", "0", true));
                ddlStream.DataSource = list;
                ddlStream.DataValueField = "int_StreamID";
                ddlStream.DataTextField = "vch_StreamName";
                ddlStream.DataBind();
            }
            ddlStream.DataSource = list;
            ddlStream.DataBind();
        }
        catch (Exception ex)
        {
            Server.Transfer("Error.aspx");
        }
        finally
        {

        }

    }
    protected void ddlCBlock_Load(object sender, System.EventArgs e)
    {
        try
        {
            string sel2 = null;
            if (IsPostBack)
            {
                if (ddlCBlock.Enabled == true)
                {
                    ddlCBlock.Items.Clear();
                    ListItem lst = new ListItem("--SELECT--", "0");
                    ddlCBlock.Items.Add(lst);
                    if (ddlCBlock.Items.Count == 1)
                    {
                        getBlock(Convert.ToInt32(ddlCDist.SelectedValue));
                        sel2 = Request.Form["ddlCBlock"];
                        if (ddlCBlock.Items.Count > 1 & sel2 != "0")
                        {
                            ddlCBlock.Items.FindByValue(sel2).Selected = true;
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {

        }
    }

    protected void ddlCDist_Load(object sender, System.EventArgs e)
    {
        try
        {
            string sel2 = null;
            if (IsPostBack)
            {
                if (ddlCDist.Enabled == true)
                {
                    ddlCDist.Items.Clear();
                    ListItem lst = new ListItem("--SELECT--", "0");
                    ddlCDist.Items.Add(lst);
                    if (ddlCDist.Items.Count == 1)
                    {
                        getDistrict(Convert.ToInt32(ddlCState.SelectedValue));
                        sel2 = Request.Form["ddlCDist"];
                        if (ddlCDist.Items.Count > 1 & sel2 != "0")
                        {
                            ddlCDist.Items.FindByValue(sel2).Selected = true;
                        }
                    }
                }

            }
        }
        catch (Exception ex)
        {
            //Server.Transfer("Error.aspx", False)
        }
    }

    protected void ddlStream_Load(object sender, System.EventArgs e)
    {
        try
        {
            string sel2;
            if (IsPostBack)
            {
                if ((ddlStream.Enabled == true))
                {
                    ddlStream.Items.Clear();
                    ListItem lst = new ListItem("--SELECT--", "0");
                    ddlStream.Items.Add(lst);
                    if ((ddlStream.Items.Count == 1))
                    {
                        getStream(int.Parse(ddlCollege.SelectedValue));
                        sel2 = Request.Form["ddlStream"];
                        if ((ddlStream.Items.Count > 1))
                        {
                            ddlStream.Items.FindByValue(sel2.Trim()).Selected = true;
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Server.Transfer("Error.aspx", false);
        }

    }

    protected void getElectives(int intCollegeID, int intStreamID, DropDownList ddlElective)
    {
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {
            obj.Cid = Convert.ToInt32(intCollegeID);
            obj.StreamID = Convert.ToInt32(intStreamID);
            obj.Type = 1;
          
                list = ccobjcafdeg.fillDegSubject(obj);
            

            if (list != null && list.Count >= 1)
            {
                ddlElective.Items.Add(new ListItem("Select", "0", true));
                ddlElective.DataSource = list;
                ddlElective.DataValueField = "int_SubjectID";
                ddlElective.DataTextField = "vch_SubjectName";
                ddlElective.DataBind();

            }

            ddlStream.DataSource = list;
            ddlStream.DataBind();
        }
        catch (Exception ex)
        {
            Server.Transfer("Error.aspx");
        }
        finally
        {

        }
    }

    protected void sendTransferData()
    {
        // ================================================
        HttpContext.Current.Items.Clear();
        HttpContext.Current.Items["Board"] = (ddlBoard.SelectedValue + "~" + ddlBoard.SelectedItem.Text);
        if (rbtnAnnual.Checked == true)
        {
            HttpContext.Current.Items["ExamType"] = 1;
        }
        else
        {
            HttpContext.Current.Items["ExamType"] = 2;
        }

        HttpContext.Current.Items["University"] = txtUniversity.Text.Trim();

        HttpContext.Current.Items["YOP"] = Convert.ToInt32(ddlYOP.SelectedValue);
        HttpContext.Current.Items["Roll"] = txtBoardRoll.Text.Trim();
        HttpContext.Current.Items["RollCode"] = txtRollCode.Text.Trim();
        // =================Personal Informaion==============
        HttpContext.Current.Items["AppName"] = txtApplName.Text;
        HttpContext.Current.Items["Fnam"] = txtFatherName.Text;
        HttpContext.Current.Items["Mname"] = txtMotherName.Text;
        //HttpContext.Current.Items["AdharNo"] = txtadhar.Text.Trim();
        if (Convert.ToInt32(ddlBloodGroup.SelectedValue) == 0)
        {
            HttpContext.Current.Items["Bgroup"] = "0~ ";
        }
        else
        {
            HttpContext.Current.Items["Bgroup"] = (ddlBloodGroup.SelectedValue + "~" + ddlBloodGroup.SelectedItem.Text);
        }

        HttpContext.Current.Items["Religion"] = (ddlReligion.SelectedValue + "~" + ddlReligion.SelectedItem.Text);
        HttpContext.Current.Items["Sex"] = (ddlGender.SelectedValue + "~" + ddlGender.SelectedItem.Text);
        HttpContext.Current.Items["DOB"] = (ddlDay.SelectedValue + "-" + ddlMonth.SelectedItem.Text + "-" + ddlYear.SelectedItem.Text);
        HttpContext.Current.Items["Nationality"] = (ddlNationality.SelectedValue + "~" + ddlNationality.SelectedItem.Text);
        HttpContext.Current.Items["MT"] = (ddlMt.SelectedValue + "~" + ddlMt.SelectedItem.Text);

        // ====================Educational Institute Details===============
        HttpContext.Current.Items["SchName"] = txtschname.Text;
        HttpContext.Current.Items["SchLocation"] = txtschloc.Text;


        if (Convert.ToInt32(ddlinstDistrict.SelectedValue) > 0)
        {
            HttpContext.Current.Items["Idist"] = (ddlinstDistrict.SelectedValue + "~" + ddlinstDistrict.SelectedItem.Text);
        }
        else
        {
            HttpContext.Current.Items["Idist"] = txtdist.Text;
        }

        HttpContext.Current.Items["YOJ"] = ddlYOJ.SelectedValue + "~" + ddlYOJ.SelectedItem.Text;
        HttpContext.Current.Items["YOL"] = ddlYOL.SelectedValue + "~" + ddlYOL.SelectedItem.Text;
        // ====================Address Details===============
        HttpContext.Current.Items["State"] = ddlCState.SelectedValue + "~" + ddlCState.SelectedItem.Text;

        HttpContext.Current.Items["Dist"] = hdfDist.Value + '~' + hdfDistName.Value;          //ddlCDist.SelectedValue + '~' + ddlCDist.SelectedItem.Text;
        HttpContext.Current.Items["Block"] = hdfBlock.Value + '~' + hdfBlockName.Value;         //ddlCBlock.SelectedValue + '~' + ddlCBlock.SelectedItem.Text;

        HttpContext.Current.Items["Address"] = txtCPS.Text.Trim();
        HttpContext.Current.Items["Pin"] = txtCPC.Text;
        HttpContext.Current.Items["Phone"] = txtCTCode.Text + "-" + txtCTeleNo.Text;
        HttpContext.Current.Items["Mobile"] = txtCMobNo.Text;
        HttpContext.Current.Items["Email"] = txtCEmail.Text.Trim();
        // =================Reservation Details===============
        if (rbtSC.Checked == true)
        {
            HttpContext.Current.Items["Cat1"] = 2;
        }
        else if (rbtST.Checked == true)
        {
            HttpContext.Current.Items["Cat1"] = 3;
        }
        else if (rbtOther.Checked == true)
        {
            HttpContext.Current.Items["Cat1"] = 5;
        }
        else if (rbtnOBC.Checked == true)
        {
            HttpContext.Current.Items["Cat1"] = 4;
        }
        else if (rbtGeneral.Checked == true)
        {
            HttpContext.Current.Items["Cat1"] = 1;
        }
        else if (rbtBCW.Checked == true)
        {
            HttpContext.Current.Items["Cat1"] = 6;
        }


        if (chkPHOHN.Checked == true)
        {
            HttpContext.Current.Items["PHOH"] = 0;
        }
        else if (chkPHOHY.Checked == true)
        {
            HttpContext.Current.Items["PHOH"] = 1;
        }

        if (rbtSDP.Checked == true)
        {
            HttpContext.Current.Items["SDP"] = 1;
        }
        else
        {
            HttpContext.Current.Items["SDP"] = 0;
        }

        if (rbtESM.Checked == true)
        {
            HttpContext.Current.Items["ESM"] = 1;
        }
        else
        {
            HttpContext.Current.Items["ESM"] = 0;
        }

        if (rbtCoM.Checked == true)
        {
            HttpContext.Current.Items["COM"] = 1;
        }
        else
        {
            HttpContext.Current.Items["COM"] = 0;
        }

        // ==============Weightage Details=================
        if (chkNCCA.Checked == true)
        {
            HttpContext.Current.Items["NCCA"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NCCA"] = 0;
        }

        if (chkNCCC.Checked == true)
        {
            HttpContext.Current.Items["NCCC"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NCCC"] = 0;
        }

        // =====================NSS CAMP DETAILS===========
        if (chkNssU.Checked == true)
        {
            HttpContext.Current.Items["NSSU"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NSSU"] = 0;
        }

        if (chkNssS.Checked == true)
        {
            HttpContext.Current.Items["NSSS"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NSSS"] = 0;
        }

        if (chkNssN.Checked == true)
        {
            HttpContext.Current.Items["NSSN"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NSSN"] = 0;
        }

        if (chkNssIN.Checked == true)
        {
            HttpContext.Current.Items["NSSIN"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NSSIN"] = 0;
        }

        if (chkSportsS.Checked == true)
        {
            HttpContext.Current.Items["SPS"] = 1;
        }
        else
        {
            HttpContext.Current.Items["SPS"] = 0;
        }

        if (chkSportsN.Checked == true)
        {
            HttpContext.Current.Items["SPN"] = 1;
        }
        else
        {
            HttpContext.Current.Items["SPN"] = 0;
        }

        if (chkSportsIN.Checked == true)
        {
            HttpContext.Current.Items["SPIN"] = 1;
        }
        else
        {
            HttpContext.Current.Items["SPIN"] = 0;
        }

        // ========Previous Stream Details==========
        if (rbtArts.Checked == true)
        {
            HttpContext.Current.Items["PRVSTREAM"] = 1;
        }
        else if ((rbtScience.Checked == true))
        {
            HttpContext.Current.Items["PRVSTREAM"] = 2;
        }
        else if (rbtCommerce.Checked == true)
        {
            HttpContext.Current.Items["PRVSTREAM"] = 3;
        }
        else if (rbtVocational.Checked == true)
        {
            HttpContext.Current.Items["PRVSTREAM"] = 4;
        }
        else if (rbtDiploma.Checked == true)
        {
            HttpContext.Current.Items["PRVSTREAM"] = 5;
        }
        else if (rbtUpashastri.Checked == true)
        {
            HttpContext.Current.Items["PRVSTREAM"] = 6;
        }
       else if (rbtMaulvi.Checked == true)
        {
            HttpContext.Current.Items["PRVSTREAM"] = 7;
        }
        // ================MarkDetails===============


        HttpContext.Current.Items["SLE"] = txtEnglish.Text;
        HttpContext.Current.Items["Math"] = txtMath.Text;
        HttpContext.Current.Items["Science"] = txtScience.Text;
        HttpContext.Current.Items["Biology"] = txtBiology.Text;
        HttpContext.Current.Items["TotMark"] = txtTotMark.Text;
        HttpContext.Current.Items["MaxMark"] = txtMaxMark.Text;
        HttpContext.Current.Items["Mathematics"] = txtMathematics.Text;
        // ========Mark Verification==================
        if (hdnMarkVerification.Value == "1")
        {
            HttpContext.Current.Items["MarkVerificationStatus"] = 1;
            if (rbtMarkVerifiedYCpy.Checked == true)
            {
                HttpContext.Current.Items["MarkVerification"] = 0;
            }
            else
            {
                HttpContext.Current.Items["MarkVerification"] = 1;
            }
        }
        else
        {
            HttpContext.Current.Items["MarkVerificationStatus"] = 0;
        }

        // ================Compartmental Status=========
        if (rbtCompartmentalY.Checked == true)
        {
            HttpContext.Current.Items["CompartmentStatus"] = 1;
            HttpContext.Current.Items["Subject"] = txtCompSubject1.Text + "~" + txtCompSubject2.Text + "~" + txtCompSubject3.Text;
            HttpContext.Current.Items["FailMark"] = txtCompFMark1.Text + "~" + txtCompFMark2.Text + "~" + txtCompFMark3.Text;
            HttpContext.Current.Items["PassMark"] = txtCompPMark1.Text + "~" + txtCompPMark2.Text + "~" + txtCompPMark3.Text;
        }
        else
        {
            HttpContext.Current.Items["CompartmentStatus"] = 0;
        }

        // =================Data For Option Details===================
        string strELE1 = "";
        string strCollegeID = "";
        string strStreamID = "";
        string strStreamPreference = "";
        string strLiveOpt = "";
        string[] strAry1;
        string[] strAry3;
        int i = 0;
        // ======================Getting Elective Ids====================
        if (hidElectives.Value.Contains("/"))
        {
            strAry1 = hidElectives.Value.Split('/');
            for (i = 0; i <= (strAry1.Length - 1); i++)
            {
                strAry3 = strAry1[i].Split('~');
                if ((strELE1 == ""))
                {
                    strELE1 = strAry3[0];
                }
                else
                {
                    strELE1 = strELE1 + "~" + strAry3[0];
                }
            }

        }
        else
        {
            strAry1 = hidElectives.Value.Trim().Split('~');
            if (strELE1 == "")
            {
                strELE1 = strAry1[0];
            }
            else
            {
                strELE1 = (strELE1 + "~" + strAry1[0]);
            }
        }

        strCollegeID = hidCollege.Value.Trim() + "~";
        strStreamID = hidStream.Value.Trim() + "~";
        strStreamPreference = hidStreamPref.Value.Trim() + "~";
        strLiveOpt = hidHostel.Value.Trim() + "~";
        HttpContext.Current.Items["CollegeIds"] = strCollegeID;
        HttpContext.Current.Items["StreamIds"] = strStreamID;
        HttpContext.Current.Items["StremPref"] = strStreamPreference;
        HttpContext.Current.Items["Elective1"] = strELE1 + "~";
        HttpContext.Current.Items["Hostel"] = strLiveOpt;
        // ==================Retrieving Names===============
        string[] strCname = hidCollege.Value.Trim().Split('~');
        string strCnames = "";
        for (i = 0; (i <= (strCname.Length - 1)); i++)
        {
            if (strCnames != "")
            {
                strCnames = strCnames + "~" + this.getCname(strCname[i]);

            }
            else
            {
                strCnames = getCname(strCname[i]);
            }

        }

        string[] strStream = hidStream.Value.Trim().Split('~');
        string strSnames = "";
        for (i = 0; i <= strStream.Length - 1; i++)
        {
            getStream(Convert.ToInt32(strCname[i]));
            if (!string.IsNullOrEmpty(strSnames))
            {
                strSnames = strSnames + "~" + ddlStream.Items.FindByValue(strStream[i]).Text;
            }
            else
            {
                strSnames = ddlStream.Items.FindByValue(strStream[i]).Text;
            }
        }
        // ==================Elective Names====================
        string[] strEleName1 = strELE1.Split('~');
        string strEleNames1 = "";
        for (i = 0; i <= (strEleName1.Length - 1); i++)
        {
            getElectives(Convert.ToInt32(strCname[i]), Convert.ToInt32(strStream[i]), ddlELE1);
            if (strEleNames1 != "")
            {
                strEleNames1 = (strEleNames1 + "~" + ddlELE1.Items.FindByValue(strEleName1[i]).Text);
            }
            else
            {
                strEleNames1 = ddlELE1.Items.FindByValue(strEleName1[i]).Text;
            }

        }


        // ====================================================
        HttpContext.Current.Items["CNames"] = strCnames;
        HttpContext.Current.Items["Snames"] = strSnames;
        HttpContext.Current.Items["EleNames1"] = strEleNames1;
        // =======================Uploading Photo======================
        if (hdnImgAppl.Value != "")
        {
            HttpContext.Current.Items["Photo"] = hdnImgAppl.Value;
        }
        // ============================================================
        Server.Transfer("ConfirmCAFDegSpotClg.aspx", true);
    }

    protected void viewPreviousData()
    {
        // ===============Local Variables==========
        string[] strBoard = null;
        string[] strBloodGroup = null;
        string[] strReligion = null;
        string[] strGender = null;
        string[] strState = null;
        string[] strDist = null;
        string[] strBlock = null;
        string[] strPhone = null;
        string[] strOSA = null;
        string[] strOLNS = null;
        string[] strCompSub = null;
        string[] strFailMark = null;
        string[] strPassMark = null;
        string[] strDob = null;
        string[] strnat = null;
        string[] strmt = null;
        string[] strFocu = null;
        string[] strMocu = null;
        string[] strinsdist = null;
        string[] stryoj = null;
        string[] stryol = null;
        string[] strAincome = null;
        string[] strtelephone = null;





        strBoard = HttpContext.Current.Items["Board"].ToString().Split('~');
        strBloodGroup = HttpContext.Current.Items["Bgroup"].ToString().Split('~');
        strReligion = HttpContext.Current.Items["Religion"].ToString().Split('~');
        strGender = HttpContext.Current.Items["Sex"].ToString().Split('~');
        strState = HttpContext.Current.Items["State"].ToString().Split('~');
        strDist = HttpContext.Current.Items["Dist"].ToString().Split('~');
        strBlock = HttpContext.Current.Items["Block"].ToString().Split('~');
        strDob = HttpContext.Current.Items["DOB"].ToString().Split('-');
        strnat = HttpContext.Current.Items["Nationality"].ToString().Split('~');
        strmt = HttpContext.Current.Items["MT"].ToString().Split('~');
        strtelephone = HttpContext.Current.Items["Phone"].ToString().Split('-');

        stryoj = HttpContext.Current.Items["YOJ"].ToString().Split('~');
        stryol = HttpContext.Current.Items["YOL"].ToString().Split('~');
        // ============================================
        ddlBoard.ClearSelection();
        ddlBoard.Items.FindByValue(strBoard[0]).Selected = true;
        ddlYOP.SelectedValue = HttpContext.Current.Items["YOP"].ToString();

        if (Convert.ToString(HttpContext.Current.Items["ExamType"]) == "1")
        {
            rbtnAnnual.Checked = true;
        }
        else
        {
            rbtnSuppl.Checked = true;
        }
        ddlMt.ClearSelection();
        ddlMt.Items.FindByValue(strmt[0]).Selected = true;
        txtschname.Text = HttpContext.Current.Items["SchName"].ToString().Trim().ToUpper();
        txtschloc.Text = HttpContext.Current.Items["SchLocation"].ToString();


        if (HttpContext.Current.Items["Idist"] != null)
        {

            if (HttpContext.Current.Items["Idist"].ToString().Contains('~'))
            {
                strinsdist = HttpContext.Current.Items["Idist"].ToString().Split('~');

                ddlinstDistrict.Items.FindByValue(strinsdist[0]).Selected = true;

            }
            else
            {
                txtdist.Text = HttpContext.Current.Items["Idist"].ToString();
            }


        }
        ddlYOJ.ClearSelection();
        ddlYOJ.Items.FindByValue(stryoj[0]).Selected = true;
        ddlYOL.ClearSelection();
        ddlYOL.Items.FindByValue(stryol[0]).Selected = true;


        //To Be done By Satyajit 
        //  ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "EnglishOriyaFont();", true);



        // *********************************************************
        if (strBoard[0]=="68")
        {
            txtUniversity.Text = HttpContext.Current.Items["University"].ToString();
 
            divUnivercity.Style.Clear();
        }
       
        txtBoardRoll.Text = HttpContext.Current.Items["Roll"].ToString();
        txtRollCode.Text = HttpContext.Current.Items["RollCode"].ToString();
        txtApplName.Text = HttpContext.Current.Items["AppName"].ToString().Trim().ToUpper();
        txtFatherName.Text = HttpContext.Current.Items["Fnam"].ToString().Trim().ToUpper();
        txtMotherName.Text = HttpContext.Current.Items["Mname"].ToString().Trim().ToUpper();
        //txtadhar.Text = HttpContext.Current.Items["AdharNo"].ToString().Trim().ToUpper();
        ddlBloodGroup.ClearSelection();
        ddlBloodGroup.Items.FindByValue(strBloodGroup[0]).Selected = true;
        ddlGender.ClearSelection();
        ddlGender.Items.FindByValue(strGender[0]).Selected = true;
        LoadCollegeIdGenderBase(4);// 4 is the id to represent the women college.
        ddlReligion.ClearSelection();
        ddlReligion.Items.FindByValue(strReligion[0]).Selected = true;
        ddlDay.ClearSelection();
        ddlDay.Items.FindByValue(strDob[0]).Selected = true;
        ddlMonth.ClearSelection();
        ddlMonth.Items.FindByText(strDob[1]).Selected = true;
        ddlYear.ClearSelection();
        ddlYear.Items.FindByValue(strDob[2]).Selected = true;
        ddlCState.ClearSelection();
        ddlCState.Items.FindByValue(strState[0]).Selected = true;
        getDistrict(Convert.ToInt32(strState[0]));
        ddlCDist.Items.FindByValue(strDist[0]).Selected = true;
        hdfDist.Value = strDist[0];
        hdfDistName.Value = strDist[1];

        getBlock(int.Parse(strDist[0]));
        ddlCBlock.Items.FindByValue(strBlock[0]).Selected = true;
        hdfBlock.Value = strBlock[0];
        hdfBlockName.Value = strBlock[1];

        txtCPS.Text = HttpContext.Current.Items["Address"].ToString().Trim();
        txtCPC.Text = HttpContext.Current.Items["Pin"].ToString().Trim();

        txtCMobNo.Text = HttpContext.Current.Items["Mobile"].ToString().Trim();
        txtCEmail.Text = HttpContext.Current.Items["Email"].ToString().Trim();
        txtCTCode.Text = strtelephone[0];
        txtCTeleNo.Text = strtelephone[1];
        // ======================Reservation Details========================
        if (HttpContext.Current.Items["Cat1"].ToString() == "1")
        {
            strCategory1 = "5";
        }
        else if (HttpContext.Current.Items["Cat1"].ToString() == "2")
        {
            strCategory1 = "2";
        }
        else if (HttpContext.Current.Items["Cat1"].ToString() == "3")
        {
            strCategory1 = "3";
        }
        else if ((HttpContext.Current.Items["Cat1"].ToString() == "4"))
        {
            strCategory1 = "4";
        }
        else if (HttpContext.Current.Items["Cat1"].ToString() == "5")
        {
            strCategory1 = "1";
        }
        else if (HttpContext.Current.Items["Cat1"].ToString() == "6")
        {
            strCategory1 = "6";
        }


        if (HttpContext.Current.Items["PHOH"].ToString() == "1")
        {
            chkPHOHY.Checked = true;
            chkPHOHN.Checked = false;
        }
        else
        {
            chkPHOHY.Checked = false;
            chkPHOHN.Checked = true;
        }

        if (HttpContext.Current.Items["SDP"].ToString() == "1")
        {
            strCategory2 = "1";
            rbtSDP.Checked = true;
        }
        else if (HttpContext.Current.Items["ESM"].ToString() == "1")
        {
            strCategory2 = "2";
            rbtESM.Checked = true;
        }
        else if (HttpContext.Current.Items["COM"].ToString() == "1")
        {
            strCategory2 = "3";
            rbtCoM.Checked = true;
        }
        else
        {
            strCategory2 = "4";
            rbtNon.Checked = true;
        }

        // =====================Weightage Details==============
        if (HttpContext.Current.Items["NCCA"].ToString() == "1")
        {
            chkNCCA.Checked = true;
        }
        else
        {
            chkNCCA.Checked = false;
        }

        if (HttpContext.Current.Items["NCCC"].ToString() == "1")
        {
            chkNCCC.Checked = true;
        }
        else
        {
            chkNCCC.Checked = false;
        }

        if (HttpContext.Current.Items["SPS"].ToString() == "1")
        {
            chkSportsS.Checked = true;
        }
        else
        {
            chkSportsS.Checked = false;
        }

        if (HttpContext.Current.Items["SPN"].ToString() == "1")
        {
            chkSportsN.Checked = true;
        }
        else
        {
            chkSportsN.Checked = false;
        }

        if (HttpContext.Current.Items["SPIN"].ToString() == "1")
        {
            chkSportsIN.Checked = true;
        }
        else
        {
            chkSportsIN.Checked = false;
        }

        // =====================NSS CAMP DETAILS===========
        if (HttpContext.Current.Items["NSSU"].ToString() == "1")
        {
            chkNssU.Checked = true;
        }
        else
        {
            chkNssU.Checked = false;
        }

        if (HttpContext.Current.Items["NSSS"].ToString() == "1")
        {
            chkNssS.Checked = true;
        }
        else
        {
            chkNssS.Checked = false;
        }

        if (HttpContext.Current.Items["NSSN"].ToString() == "1")
        {
            chkNssN.Checked = true;
        }
        else
        {
            chkNssN.Checked = false;
        }

        if (HttpContext.Current.Items["NSSIN"].ToString() == "1")
        {
            chkNssIN.Checked = true;
        }
        else
        {
            chkNssIN.Checked = false;
        }

        // ========Previous Stream Details==========
        if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "1")
        {
            strStream = "Arts";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "2")
        {
            strStream = "Science";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "3")
        {
            strStream = "Commerce";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "4")
        {
            strStream = "Vocational";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "5")
        {
            strStream = "Diploma";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "6")
        {
            strStream = "Upashastri";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "7")
        {
            strStream = "Maulvi";
        }
        // ================Mark Details================
        txtEnglish.Text = HttpContext.Current.Items["SLE"].ToString();
        txtMath.Text = HttpContext.Current.Items["Math"].ToString();
        txtScience.Text = HttpContext.Current.Items["Science"].ToString();
        txtBiology.Text = HttpContext.Current.Items["Biology"].ToString();
        txtTotMark.Text = HttpContext.Current.Items["TotMark"].ToString();
        txtMaxMark.Text = HttpContext.Current.Items["MaxMark"].ToString();
        txtMathematics.Text = HttpContext.Current.Items["Mathematics"].ToString();
        // ==============Mark Verification==============
        if ((HttpContext.Current.Items["MarkVerificationStatus"].ToString() == "1"))
        {
            hdnMarkVerification.Value = "1";
            if ((HttpContext.Current.Items["MarkVerification"].ToString() == "0"))
            {
                rbtMarkVerifiedYCpy.Checked = true;
            }
            else
            {
                rbtMarkVerifiedNCpy.Checked = true;
            }

        }
        else
        {
            hdnMarkVerification.Value = "0";
        }

        // ==============Compartmnet Mark Details========
        if (HttpContext.Current.Items["CompartmentStatus"].ToString() == "1")
        {
            strCompartmentStatus = "True";
            strCompSub = HttpContext.Current.Items["Subject"].ToString().Split('~');
            txtCompSubject1.Text = strCompSub[0];
            txtCompSubject2.Text = strCompSub[1];
            txtCompSubject3.Text = strCompSub[2];
            strFailMark = HttpContext.Current.Items["FailMark"].ToString().Split('~');
            txtCompFMark1.Text = strFailMark[0];
            txtCompFMark2.Text = strFailMark[1];
            txtCompFMark3.Text = strFailMark[2];
            strPassMark = HttpContext.Current.Items["PassMark"].ToString().Split('~');
            txtCompPMark1.Text = strPassMark[0];
            txtCompPMark2.Text = strPassMark[1];
            txtCompPMark3.Text = strPassMark[2];
        }
        else
        {
            strCompartmentStatus = "False";
        }

        // =================Option Details===================
        // ================Option Details=======================
        // hidOptionIds.Value = "1"
        hidCollege.Value = (HttpContext.Current.Items["CollegeIds"].ToString().TrimEnd('~') + "|" + HttpContext.Current.Items["CNames"].ToString().TrimEnd('~'));
        hidStream.Value = (HttpContext.Current.Items["StreamIds"].ToString().TrimEnd('~') + "|" + HttpContext.Current.Items["Snames"].ToString().TrimEnd('~'));
        //  hidElectives.Value = HttpContext.Current.Items("Elective1").ToString.TrimEnd("~") & "/" & HttpContext.Current.Items("Elective2").ToString.TrimEnd("~") & "/" & HttpContext.Current.Items("Elective3").ToString.TrimEnd("~") & "|" & HttpContext.Current.Items("EleNames1").ToString.ToString.TrimEnd("~") & "/" & HttpContext.Current.Items("EleNames2").ToString.ToString.TrimEnd("~") & "/" & HttpContext.Current.Items("EleNames3").ToString.ToString.TrimEnd("~")
        hidElectives.Value = (HttpContext.Current.Items["Elective1"].ToString().TrimEnd('~') + "|" + HttpContext.Current.Items["EleNames1"].ToString().TrimEnd('~'));
        //hidHostel.Value = HttpContext.Current.Items["Hostel"].ToString().TrimEnd('~');
        hidStreamPref.Value = HttpContext.Current.Items["StremPref"].ToString().TrimEnd('~');

        //To be Done By Satyajit

        ///ScriptManager.RegisterStartupScript(this, Page.GetType, "Script", "streamisemark()", true);

        // =====================================================
        string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();
        if (!string.IsNullOrEmpty(HttpContext.Current.Items["Photo"].ToString()))
        {

            hdnImgAppl.Value = HttpContext.Current.Items["Photo"].ToString();
            // ImgAppl.ImageUrl = pthview + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES" + "/" + hdnImgAppl.Value;
            ImgAppl.ImageUrl = "~/DownloadImage.ashx?clsid=2&id=" + hdnImgAppl.Value;

        }

    }

    protected string getCname(string intCid)
    {
        string strChars = string.Empty;
        try
        {
            DataSet ddlDataSource = new DataSet();
            DataView dvSource = default(DataView);
            string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
            ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_COLLEGE_DEGREE.xml");
            dvSource = ddlDataSource.Tables[0].DefaultView;
            dvSource.RowFilter = "CID = '" + intCid + "'";
            if (dvSource.Count > 0)
            {
                strChars = dvSource[0]["CNAME"].ToString();

            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return strChars;

        
    }

    protected void btnSave_Click(object sender, System.EventArgs e)
    {
        sendTransferData();
    }

    [WebMethod()]
    public static dynamic fillDistrict(int intStateId)
    {
        System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        xdoc = XDocument.Load(pth + "SAMS\\MasterXML/M_DISTRICT.xml");

        var qry = (dynamic)null;
        if (intStateId == 1)
        {

            qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                  where Convert.ToInt32(p.Element("int_StateID").Value) == intStateId
                  select new { int_DistrictID = p.Element("int_DistrictID").Value, vch_DistrictName = p.Element("vch_DistrictName").Value.ToString() };
        }
        else
        {
            qry = new[] { new { int_DistrictID = "588", vch_DistrictName = "OTHER" } };
        }
        return qry;
    }

    [WebMethod()]
    public static dynamic fillBlock(int intDistId)
    {

        System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        xdoc = XDocument.Load(pth + "SAMS\\MasterXML/M_BLOCK.xml");
        var qry = (dynamic)null;
        if (intDistId != 588)
        {
            qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                  where Convert.ToInt32(p.Element("int_DistrictID").Value) == intDistId
                  select new { int_BlockID = p.Element("int_BlockID").Value, vch_BlockName = p.Element("vch_BlockName").Value.ToString() };
        }
        else
        {
            qry = new[] { new { int_BlockID = "589", vch_BlockName = "OTHER" } };
        }

        return qry;

       
    }

    //

    [WebMethod()]
    public static dynamic LoadDistrict()
    {

      

        System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        xdoc = XDocument.Load(pth + "SAMS\\MasterXML/M_DISTRICT.xml");

        var qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                  where p.Element("int_StateID").Value == "1" && p.Element("int_DistrictID").Value == Convert.ToString(intDistrictID)
                  select new { IntID = p.Element("int_DistrictID").Value, StrName = p.Element("vch_DistrictName").Value.ToString() };
        return qry;
    }

    #region Markcuttoff College
    [WebMethod()]
    public static dynamic loadCutMark(int CollegeId, int StreamId)
    {
        try
        {
            System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
            string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
            xdoc = XDocument.Load(pth + "sams/MasterXML/CutoffmarksDeg.xml");
            var qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                      where Convert.ToInt32(p.Element("int_collegeid").Value) == CollegeId && Convert.ToInt32(p.Element("int_StreamID").Value) == StreamId
                      select new
                      {
                          int_collegeid = p.Element("int_collegeid") == null ? "0" : p.Element("int_collegeid").Value,
                          int_StreamID = p.Element("int_StreamID") == null ? "0" : p.Element("int_StreamID").Value.ToString(),
                          int_MarkGen_Per = p.Element("int_MarkGen_Per") == null ? "0" : p.Element("int_MarkGen_Per").Value,
                          int_MarkST_Per = p.Element("int_MarkST_Per") == null ? "0" : p.Element("int_MarkST_Per").Value,
                          int_MarkSC_Per = p.Element("int_MarkSC_Per") == null ? "0" : p.Element("int_MarkSC_Per").Value,
                          int_MarkGen_II_Per = p.Element("int_MarkGen_II_Per") == null ? "0" : p.Element("int_MarkGen_II_Per").Value,
                          int_MarkST_II_Per = p.Element("int_MarkST_II_Per") == null ? "0" : p.Element("int_MarkST_II_Per").Value,
                          int_MarkSC_II_Per = p.Element("int_MarkSC_II_Per") == null ? "0" : p.Element("int_MarkSC_II_Per").Value
                      };

            return qry;
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }
    #endregion


    [WebMethod()]
    public static dynamic fillDistWiseColg(int intDistId, int intCType, int intGender)
    {
        CAFDegDal ccobjcafdeg = new CAFDegDal();


        System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);

        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        xdoc = XDocument.Load(pth + "SAMS\\MasterXML/M_COLLEGE_DEGREE.xml");
        dynamic qry = null;
        if (intGender == 2)
        {

            qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                  where Convert.ToInt32(p.Element("DID").Value) == intDistId & Convert.ToInt32(p.Element("CTYPE").Value) == intCType && p.Element("CID").Value == Convert.ToString(intCollegeID)
                  select new { IntID = p.Element("CID").Value, StrName = p.Element("CNAME").Value.ToString() };
        }
        else
        {
            qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                  where Convert.ToInt32(p.Element("DID").Value) == intDistId & Convert.ToInt32(p.Element("CTYPE").Value) == intCType

                  && Convert.ToInt32(p.Element("WomenStatus").Value) != 4 && p.Element("CID").Value == Convert.ToString(intCollegeID)

                  select new { IntID = p.Element("CID").Value, StrName = p.Element("CNAME").Value.ToString() };
        }
        return qry;
    }

    [WebMethod()]
    public static dynamic FillStream(int intCollegeID, int UpsStream)
    {
        CAFDegDal ccobjcafdeg = new CAFDegDal();

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
            
                list = ccobjcafdeg.fillDegStream(obj);
            
        }
        catch (Exception ex)
        {
            Util.LogError(ex,"CAFDEG");
        }
        finally { }
        return list;
    }

    [WebMethod()]
    public static dynamic FillElectives(int intCollegeID, int intStreamId)
    {
        CAFDegDal ccobjcafdeg = new CAFDegDal();

        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {
            obj.Cid = Convert.ToInt32(intCollegeID);
            obj.StreamID = Convert.ToInt32(intStreamId);
            obj.Type = 1;
            
                list = ccobjcafdeg.fillDegSubject(obj);
            
        }
        catch (Exception ex)
        {
        }
        finally { }
        return list;
    }

    protected void FillYOP(DropDownList ddlYop)
    {
        int i;
        for (i = 0; i <= 56; i++)
        {
            ListItem lstItem = new ListItem(((DateTime.Now.Year) - i).ToString(), ((DateTime.Now.Year) - i).ToString());
            ddlYop.Items.Add(lstItem);
        }

    }

    protected void getInsDistrict(int intStateId)
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
            dvSource.RowFilter = "int_StateID in " + intStateId + ",35";
            //'35 for other state
        }
        ddlinstDistrict.DataSource = dvSource;
        ddlinstDistrict.DataTextField = "vch_DistrictName";
        ddlinstDistrict.DataValueField = "int_DistrictID";
        ddlinstDistrict.DataBind();
        ddlinstDistrict.Items.Insert(31, "OTHER");
        //ddlinstDistrict.Items.Add(new ListItem["OTHER", 31]);
    }

    [WebMethod()]
    public static dynamic vacancyColg(int intColId, int intStrid, int intSubid)
    {
        CAFDegDal ccobjcafdeg = new CAFDegDal();

        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {
            obj.Cid = Convert.ToInt32(intColId);
            obj.StreamID = Convert.ToInt32(intStrid);
            obj.int_SubjectID = Convert.ToInt32(intSubid);
           
                list = ccobjcafdeg.VacancyColg(obj);
            
        }
        catch (Exception ex)
        {
        }
        finally { }
        return list;
    }

    [WebMethod()]
    public static dynamic IsHonoursSubject(int intCurStream, int intSubid, int intYOP, string strRollNo, string strRollCode, int intPrevStream, int intTotalMark, int intMaxMark)
    {
        CAFDegDal ccobjcafdeg = new CAFDegDal();

        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        string strResult = "";
        try
        {
            //obj.Cid = Convert.ToInt32(intColId);
            //obj.StreamID = Convert.ToInt32(intStrid);
            //obj.int_SubjectID = Convert.ToInt32(intSubid);
            //using (CAFDegBalClient client = new CAFDegBalClient())
            //{
            //    list = client.VacancyColg(obj);
            //}

            
                strResult = ccobjcafdeg.IsHonoursSubject(intCurStream, intSubid, intYOP, strRollNo, strRollCode, intPrevStream, intTotalMark, intMaxMark);
            


            CAFEntity_Deg objlist = new CAFEntity_Deg();

            objlist.strId = strResult;
            list.Add(objlist);
           
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "HonoursSubject");
        }
        finally { }
        return list;
    }



    [WebMethod()]
    public static dynamic fillCHSEMark(string vchRollNo, int intYear, string RollCode)
    {
        CAFDegDal ccobjcafdeg = new CAFDegDal();

        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        CAFEntity_Deg obj = new CAFEntity_Deg();
        try
        {
            obj.vchRollNo = vchRollNo;
            obj.Year = Convert.ToInt32(intYear);
            obj.vch_RollCode = RollCode;
            
                list = ccobjcafdeg.FillCHSEMark(obj);
            
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally { }
        return list;
    }

    #region Check Email Id
    [WebMethod()]
    public static dynamic ChkEmailStatus(string vchEmail)
    {
        CAFDegDal ccobjcafdeg = new CAFDegDal();

        List<ChkStatusDeg> list = new List<ChkStatusDeg>();
        ChkStatusDeg obj = new ChkStatusDeg();
        try
        {
            
                obj.Action = "E";
                obj.vch_EMailID = vchEmail;
                list = ccobjcafdeg.chkStatusDeg(obj);
            
            return list;
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            //list.Clear();
        }

    }
    #endregion

    [WebMethod()]
    public static dynamic ChkMobStatus(string vchMobNo)
    {
        CAFDegDal ccobjcafdeg = new CAFDegDal();
        List<ChkStatusDeg> list = new List<ChkStatusDeg>();
        ChkStatusDeg obj = new ChkStatusDeg();
        try
        {
            
                obj.Action = "M";
                obj.vch_CorMobileNo = vchMobNo;
                list = ccobjcafdeg.chkStatusDeg(obj);
            
            return list;
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            //list.Clear();
        }

    }

    private void LoadCollegeIdGenderBase(int Gid)
    {
        System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        xdoc = XDocument.Load(pth + "sams/MasterXML/M_COLLEGE_DEGREE.xml");

        var qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                  where Convert.ToInt32(p.Element("WomenStatus").Value) == Gid
                  select new { CID = p.Element("CID").Value };
        hidCollegeidGender.Value = "";
        foreach (var r in qry)
        {
            hidCollegeidGender.Value = hidCollegeidGender.Value + "," + r.CID + "";
        }
        hidCollegeidGender.Value = hidCollegeidGender.Value.TrimStart(',');


    }
}

