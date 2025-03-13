using Amazon.S3.Transfer;
using Amazon.S3;
using Amazon;
using CommonModels;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Data;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Remoting.Contexts;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
using System.Web;


public partial class StudentLogin_PersonalInfo : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    #region OnInit
    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);

    }
    #endregion

    #region Variable
    public string strOSAStatus = "False";
    public string strOLNSStatus = "False";
    public string strCompartmentStatus = "False";
    public string strBoard = "";
    public string strState = "";
    public string strCollege = "";
    public string strCategory1 = "";
    public string strCategory2 = "4";
    public string strCBSE = "False";
    string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
    int intRetVal = 0;
    string strImageName = null;
    string strMsgTitle = ConfigurationManager.AppSettings["msgT"];
    //string Elective1 = null, Elective2 = null, Elective3 = null, FElectinve1 = null, FElectinve2 = null, FElectinve3 = null;
    #endregion

    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        {
            hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
            if (Session["StudID"] != null)
            {
                List<CAFEntity> listDetails = new List<CAFEntity>();
                listDetails = fillDateline();
                if (listDetails.Count > 0)
                {
                    hdnRejectStatus.Value = listDetails[0].ValidateStatus.ToString();
                    hdnSelectionStatus.Value = listDetails[0].int_ApplicationStatus.ToString();

                    divDateLine.Visible = true;
                    divForm.Visible = false;


                    DateTime lastAppDate = listDetails[0].ToDate;
                    DateTime dtmFromDate = listDetails[0].FromDate;

                    int FromDate = DateTime.Compare(DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59), dtmFromDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                    int ToDate = DateTime.Compare(lastAppDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));


                    if (ToDate >= 0 && FromDate >= 0)
                    {
                        if (Convert.ToInt32(hdnSelectionStatus.Value) == 0 || Convert.ToInt32(hdnRejectStatus.Value) > 0)
                        {
                            divDateLine.Visible = false;
                            divForm.Visible = true;
                            fillBoard();
                            FillDate(ddlDay, ddlMonth, ddlYear);
                            fillAddressState();
                            fillCompartmental();
                            getInsDistrict(1);
                            ddlNationality.SelectedValue = "1";
                            ddlMt.SelectedValue = "3";
                            FillCAF();
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
                            litMessage.Text = "Dateline to modify CAF form is not started yet...";
                        }
                        if (ToDate < 0)
                        {
                            litMessage.Text = "Dateline to modify CAF form is completed...";
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

    }


    #region Fill Data
    protected void FillCAF()
    {
        List<CAFEntity> list = new List<CAFEntity>();
        List<CAFEntity> list1 = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        CAFEntity obj1 = new CAFEntity();
        try
        {
            obj.Action = "V";
            obj.vch_UniqueRefNo = Session["StudID"].ToString();
            obj1.Action = "M";
            obj1.vch_UniqueRefNo = Session["StudID"].ToString();

            
                list = ccobj.FillCAF(obj);
                list1 = ccobj.FillCAF(obj1);
           
            if (list != null && list.Count >= 1)
            {
                hdnApplicationId.Value = Convert.ToString(list[0].int_ApplicantID);
                hdnValidateStatus.Value = list[0].ValidateStatus.ToString();
                hdnAppliedColleges.Value = list[0].IDs.ToString();
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].BoardId)))
                {
                    ddlBoard.ClearSelection();
                    ddlBoard.SelectedValue = Convert.ToString(list[0].BoardId);
                    ddlBoard.Enabled = false;
                    if (list[0].BoardId == 131)
                    {
                        ddlBoard.Style.Add("display", "none");
                        txtBoardName.Text = list[0].vch_CouncilName;
                        //txtBoardName.Enabled = false;
                    }
                    else
                    {
                        txtBoardName.Style.Add("display", "none");
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].int_YearOfPassing)))
                {
                    ddlYOP.ClearSelection();
                    ddlYOP.SelectedValue = Convert.ToString(list[0].int_YearOfPassing);
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_ExamType)))
                {
                    //if (list[0].int_YearOfPassing == 2020)
                    //{
                    //    rbtnAnnual.Checked = true;
                    //    rbtnSuppl.Enabled = false;
                    //   // rbtnAnnual.Enabled = false;
                    //}
                    //else
                    //{
                    if (Convert.ToInt32(list[0].vch_ExamType) == 1)
                    {
                        rbtnAnnual.Checked = true;
                    }
                    else if (Convert.ToInt32(list[0].vch_ExamType) == 2)
                    {
                        rbtnSuppl.Checked = true;
                    }
                    else
                    {
                        rbtnAnnual.Checked = true;
                    }
                    //}
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_RollNo)))
                {
                    txtBoardRoll.Text = list[0].vch_RollNo;
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].RollCode)))
                {
                    txtRollCode.Text = list[0].RollCode;
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].pStrName)) && Convert.ToInt32(list[0].BoardId) == 109 && Convert.ToInt32(list[0].int_YearOfPassing) == 2024)
                {
                    divUniqueId.Attributes.Add("style", "");
                    txtUniqueId.Text = list[0].pStrName;
                }
                
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_ApplicantName)))
                {
                    txtApplName.Text = list[0].vch_ApplicantName;
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_FatherName)))
                {
                    txtFatherName.Text = list[0].vch_FatherName;
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_MotherName)))
                {
                    txtMotherName.Text = list[0].vch_MotherName;
                }
                if (list1 != null && list1.Count() > 0)
                {

                    if (((ddlBoard.SelectedValue.ToString() == "46" && Convert.ToInt32(ddlYOP.SelectedValue) >= 2010 && Convert.ToInt32(ddlYOP.SelectedValue) < 2018) || (ddlBoard.SelectedValue.ToString() == "103" && Convert.ToInt32(ddlYOP.SelectedValue) >= 2012)))
                    {
                        strCBSE = "True";
                        ddlEng.Items.FindByValue(list1[0].int_MarkSL.ToString()).Selected = true;
                        ddlMath.Items.FindByValue(list1[0].int_MarkMath.ToString()).Selected = true;
                        ddlSc.Items.FindByValue(list1[0].int_MarkScience.ToString()).Selected = true;
                        ddlSoSc.Items.FindByValue(list1[0].int_MarkSocialStudies.ToString()).Selected = true;
                        txtCGPA.Text = list1[0].int_TotalMark.ToString();
                    }
                    else if (ddlBoard.SelectedValue.ToString() == "116" & Convert.ToInt32(ddlYOP.SelectedValue) >= 2010)
                    {
                        strCBSE = "KERALA";

                        ddlKEnglish.Items.FindByValue(list1[0].int_MarkSL.ToString()).Selected = true;
                        ddlKMath.Items.FindByValue(list1[0].int_MarkMath.ToString()).Selected = true;
                        ddlKScience.Items.FindByValue(list1[0].int_MarkScience.ToString()).Selected = true;
                        ddlKSoSc.Items.FindByValue(list1[0].int_MarkSocialStudies.ToString()).Selected = true;
                        ddlTGrade.Items.FindByValue(list1[0].int_TotalMark.ToString().Substring(0, list1[0].int_TotalMark.ToString().IndexOf('.'))).Selected = true;
                    }
                    else
                    {
                        strCBSE = "False";
                        txtEnglish.Text = list1[0].int_MarkSL.ToString();
                        txtMath.Text = list1[0].int_MarkMath.ToString();
                        txtScience.Text = list1[0].int_MarkScience.ToString();
                        txtSocSci.Text = list1[0].int_MarkSocialStudies.ToString();
                        txtTotMark.Text = list1[0].int_TotalMark.ToString().Substring(0, list1[0].int_TotalMark.ToString().IndexOf('.'));
                        txtMaxMark.Text = list1[0].int_MaximumMark.ToString();
                    }

                    //if ((ddlBoard.SelectedValue == "45") && (Convert.ToInt32(ddlYOP.SelectedValue) >= 2014))
                    //{
                    //    string grade = list1[0].vch_Grade;
                    //    if (!string.IsNullOrEmpty(grade))
                    //    {
                    //        ddlGrade.Items.FindByText(grade).Selected = true;
                    //    }
                    //}
                }

                if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_Compartmental)))
                {
                    if (Convert.ToInt32(list[0].bit_Compartmental) == 0)
                    {
                        rbtCompartmentalN.Checked = true;
                        strCompartmentStatus = "Flase";
                    }
                    else if (Convert.ToInt32(list[0].vch_ExamType) == 1)
                    {
                        rbtCompartmentalY.Checked = true;
                        strCompartmentStatus = "True";
                        ddlCompSubject1.SelectedValue = list[0].Subject;
                        txtCompFMark1.Text = list[0].FailMark;
                        txtCompPMark1.Text = list[0].PassMark;
                        if (list.Count > 1)
                        {
                            ddlCompSubject2.SelectedValue = list[1].Subject;
                            txtCompFMark2.Text = list[1].FailMark;
                            txtCompPMark2.Text = list[1].PassMark;
                        }
                        if (list.Count > 2)
                        {
                            ddlCompSubject3.SelectedValue = list[2].Subject;
                            txtCompFMark3.Text = list[2].FailMark;
                            txtCompPMark3.Text = list[2].PassMark;
                        }
                        if (list.Count > 3)
                        {
                            ddlCompSubject4.SelectedValue = list[3].Subject;
                            txtCompFMark4.Text = list[3].FailMark;
                            txtCompPMark4.Text = list[3].PassMark;
                        }

                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].LastInst)))
                {
                    txtschname.Text = Convert.ToString(list[0].LastInst);
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].LastInstLoc)))
                {
                    txtschloc.Text = Convert.ToString(list[0].LastInstLoc);
                }



                if (!string.IsNullOrEmpty(Convert.ToString(list[0].LastInstDist)))
                {

                    string strinsdist = Convert.ToString(list[0].LastInstDist);
                    ddlinstDistrict.ClearSelection();
                    ddlinstDistrict.Items.FindByValue(strinsdist).Selected = true;

                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].YearOfJoining)))
                {
                    ddlYOJ.ClearSelection();
                    ddlYOJ.SelectedValue = Convert.ToString(list[0].YearOfJoining);
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].YearOfLeaving)))
                {
                    ddlYOL.ClearSelection();
                    ddlYOL.SelectedValue = Convert.ToString(list[0].YearOfLeaving);
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].BloodGrId)))
                {
                    ddlBloodGroup.ClearSelection();
                    ddlBloodGroup.SelectedValue = Convert.ToString(list[0].BloodGrId);
                }

                if (!string.IsNullOrEmpty(Convert.ToString(list[0].GENDER)))
                {
                    ddlGender.ClearSelection();
                    ddlGender.SelectedValue = Convert.ToString(list[0].GENDER);
                    ddlGender.Enabled = false;
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].ReligionId)))
                {
                    ddlReligion.ClearSelection();
                    ddlReligion.SelectedValue = Convert.ToString(list[0].ReligionId);
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].dtm_DOB)))
                {
                    ddlDay.ClearSelection();
                    ddlDay.SelectedValue = Convert.ToString(list[0].dtm_DOB.Day);
                    ddlMonth.ClearSelection();
                    ddlMonth.SelectedValue = Convert.ToString(list[0].dtm_DOB.Month);
                    ddlYear.ClearSelection();
                    ddlYear.SelectedValue = Convert.ToString(list[0].dtm_DOB.Year);
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].Nationality)))
                {
                    ddlNationality.ClearSelection();
                    ddlNationality.SelectedValue = Convert.ToString(list[0].Nationality);
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].MotherTongue)))
                {
                    ddlMt.ClearSelection();
                    ddlMt.SelectedValue = Convert.ToString(list[0].MotherTongue);
                }

                if (!string.IsNullOrEmpty(Convert.ToString(list[0].CorStateId)))
                {
                    ddlCState.ClearSelection();
                    ddlCState.SelectedValue = Convert.ToString(list[0].CorStateId);
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].CorDistId)))
                {

                    getDistrict(Convert.ToInt32(list[0].CorStateId));
                    ddlCDist.ClearSelection();
                    ddlCDist.SelectedValue = Convert.ToString(list[0].CorDistId);

                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].CorBlockId)))
                {
                    getBlock(Convert.ToInt32(list[0].CorDistId));
                    ddlCBlock.ClearSelection();
                    ddlCBlock.SelectedValue = Convert.ToString(list[0].CorBlockId);
                    hdnOldBlockId.Value = list[0].CorBlockId.ToString();
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].CorHouseNo)))
                {
                    txtCPS.Text = Convert.ToString(list[0].CorHouseNo);
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].CorPinCode)))
                {
                    txtCPC.Text = Convert.ToString(list[0].CorPinCode);
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].CorPhNo)))
                {
                    if (list[0].CorPhNo != "-")
                    {
                        string[] CorPhNo = list[0].CorPhNo.Split('-');
                        txtCTCode.Text = CorPhNo[0];
                        txtCTeleNo.Text = CorPhNo[1];
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].CorMobileNo)))
                {
                    txtCMobNo.Text = Convert.ToString(list[0].CorMobileNo);
                    txtCMobNo.Enabled = false;
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].EmailId)))
                {
                    txtCEmail.Text = Convert.ToString(list[0].EmailId);
                    txtCEmail.Enabled = false;
                }

                if (!string.IsNullOrEmpty(Convert.ToString(list[0].CategoryId)))
                {
                    if (list[0].CategoryId == 2)
                    {
                        rbtSC.Checked = true;
                        strCategory1 = "2";
                    }
                    if (list[0].CategoryId == 3)
                    {
                        rbtST.Checked = true;
                        strCategory1 = "3";
                    }
                    if (list[0].CategoryId == 4)
                    {
                        rbtnOBC.Checked = true;
                        strCategory1 = "4";
                    }
                    if (list[0].CategoryId == 1)
                    {
                        rbtGeneral.Checked = true;
                        strCategory1 = "1";
                    }
                    if (list[0].CategoryId == 5)
                    {
                        rbtOther.Checked = true;
                        strCategory1 = "5";
                    }
                    if (list[0].CategoryId == 6)
                    {
                        rbtBCW.Checked = true;
                        strCategory1 = "6";
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].intEWS)))
                {
                    if (list[0].intEWS == 1)
                    {
                        rbtnEWSYes.Checked = true;
                    }
                    else
                    {
                        rbtnEWSNo.Checked = true;
                    }
                }

                if (!string.IsNullOrEmpty(Convert.ToString(list[0].PHOH)))
                {
                    if (list[0].PHOH)
                    {
                        chkPHOHY.Checked = true;
                    }
                    else
                    {
                        chkPHOHN.Checked = true;
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].ESM)))
                {
                    if (list[0].ESM)
                    {
                        rbtESM.Checked = true;
                        strCategory2 = "2";
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].SDP)))
                {
                    if (list[0].SDP)
                    {
                        rbtSDP.Checked = true;
                        strCategory2 = "1";
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].CoM)))
                {
                    if (list[0].CoM)
                    {
                        rbtCoM.Checked = true;
                        strCategory2 = "3";
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].NCCA)))
                {
                    if (list[0].NCCA)
                    {
                        chkNCCA.Checked = true;
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].NCCC)))
                {
                    if (list[0].NCCC)
                    {
                        chkNCCC.Checked = true;
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].ScoutPR)))
                {
                    if (list[0].ScoutPR)
                    {
                        chkSCRP.Checked = true;
                    }
                }

                if (!string.IsNullOrEmpty(Convert.ToString(list[0].ScoutRP)))
                {
                    if (list[0].ScoutRP)
                    {
                        chkSCPR.Checked = true;
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].SportsS)))
                {
                    if (list[0].SportsS)
                    {
                        chkSportsS.Checked = true;
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].SportsN)))
                {
                    if (list[0].SportsN)
                    {
                        chkSportsN.Checked = true;
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].SportsIN)))
                {
                    if (list[0].SportsIN)
                    {
                        chkSportsIN.Checked = true;
                    }
                }
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].KGBACSts)))
                {
                    rbtnKGABC.SelectedValue = list[0].KGBACSts.ToString();
                }
                //===================================================== Bind Photo

                if (!string.IsNullOrEmpty(Convert.ToString(list[0].vchImageName)))
                {

                    hdnImgAppl.Value = list[0].vchImageName;
                    ImgAppl.ImageUrl = "~/DownloadImage.ashx?clsid=1&id=" + list[0].CorBlockId.ToString() + "/" + list[0].vchImageName;
                }


                //==============For Aadhar bind
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].aadharNo)))
                {
                    txtAadhar.Text = list[0].aadharNo;
                    cbAadharAgree.Checked = false;
                }
                else
                {
                    txtAadhar.Text = "";
                    cbAadharAgree.Checked = true;
                }

                //================Read only Fields
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].ValidateStatus))) //----------if data auto fetched
                {
                    if (Convert.ToInt32(list[0].ValidateStatus) == 1 && Convert.ToInt32(ddlBoard.SelectedValue)==109)
                    {

                        ddlYOP.Enabled = false;
                        ddlBoard.Enabled = false;
                        rbtnAnnual.Enabled = false;
                        rbtnSuppl.Enabled = false;

                        ddlDay.Enabled = false;
                        ddlMonth.Enabled = false;
                        ddlYear.Enabled = false;

                        txtBoardRoll.Enabled = false;
                        txtRollCode.Enabled = false;
                        if(!string.IsNullOrEmpty(txtUniqueId.Text))
                        {
                            if (!string.IsNullOrEmpty(list[0].pDname))
                            {
                                txtUniqueId.Enabled = false;
                            }
                            else
                            {
                                txtUniqueId.Enabled = true;

                            }        
                        }
                        else
                        {
                            txtUniqueId.Enabled = true;
                        }
                       
                        txtApplName.Enabled = false;
                        txtFatherName.Enabled = false;
                        txtMotherName.Enabled = false;

                        ddlinstDistrict.Enabled = false;
                        txtschname.Enabled = false;

                        ddlYOL.Enabled = false;
                        //ddlGender.Enabled = false;
                        //=====mark details
                        txtEnglish.Enabled = false;
                        txtMath.Enabled = false;
                        txtScience.Enabled = false;
                        txtSocSci.Enabled = false;
                        txtTotMark.Enabled = false;
                        txtMaxMark.Enabled = false;

                        //=====Compartmentally details
                        rbtCompartmentalN.Enabled = false;
                        rbtCompartmentalY.Enabled = false;

                        if (rbtCompartmentalY.Checked)
                        {
                            if (ddlCompSubject1.SelectedIndex > 0)
                            {
                                ddlCompSubject1.Enabled = false;
                                txtCompFMark1.Enabled = false;
                                txtCompPMark1.Enabled = false;

                            }
                            if (ddlCompSubject2.SelectedIndex > 0)
                            {
                                ddlCompSubject2.Enabled = false;
                                txtCompFMark2.Enabled = false;
                                txtCompPMark2.Enabled = false;
                            }
                            if (ddlCompSubject3.SelectedIndex > 0)
                            {
                                ddlCompSubject3.Enabled = false;
                                txtCompFMark3.Enabled = false;
                                txtCompPMark3.Enabled = false;
                            }
                            if (ddlCompSubject4.SelectedIndex > 0)
                            {
                                ddlCompSubject4.Enabled = false;
                                txtCompFMark4.Enabled = false;
                                txtCompPMark4.Enabled = false;
                            }
                        }
                    }
                }

            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        finally
        { list.Clear(); }
    }
    #endregion

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
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        return list;
    }
    #endregion



    #region FillBoard
    protected void fillBoard()
    {
        string strChars = "";
        DataSet ddlDataSource = new DataSet();
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        //ddlDataSource.ReadXml(Server.MapPath("../MasterXML/M_Board.xml"));
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_Board.xml");
        ddlBoard.DataSource = ddlDataSource;
        ddlBoard.DataTextField = "Row";
        ddlBoard.DataValueField = "int_BoardID";
        ddlBoard.DataBind();
        //ddlBoard.Items.Insert(0, "--SELECT--");

        //'===========Assigning values to a string================
        int i = 0;
        for (i = 0; i <= ddlDataSource.Tables[0].Rows.Count - 1; i++)
        {
            if (!string.IsNullOrEmpty(strChars))
            {
                strChars = strChars + "," + ddlDataSource.Tables[0].Rows[i]["vch_BoardName"].ToString().TrimStart().Substring(0, 1).ToLower();
            }
            else
            {
                strChars = ddlDataSource.Tables[0].Rows[i]["vch_BoardName"].ToString().TrimStart().Substring(0, 1).ToLower();
            }
            strBoard = strChars;
        }

    }

    #endregion

    #region FillDate
    protected void FillDate(DropDownList ddlDay, DropDownList ddlMonth, DropDownList ddlYear)
    {
        int i = 0;
        string si;
        //Fill Day DDL
        for (i = 1; i <= 31; i++)
        {
            if (i < 10)
            {
                si = "0" + i.ToString();
            }
            else
            {
                si = i.ToString();
            }
            ListItem lstItem = new ListItem(si, (i).ToString());
            ddlDay.Items.Add(lstItem);
        }
        //Fill Month DDL
        for (i = 1; i <= 12; i++)
        {
            //ListItem lstItem = new ListItem(CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(i).ToUpper(), i.ToString());
            if (i < 10)
            {
                si = "0" + i.ToString();
            }
            else
            {
                si = i.ToString();
            }
            ListItem lstItem = new ListItem(si, (i).ToString());
            ddlMonth.Items.Add(lstItem);
        }
        //Fill Year DDL
        for (i = 13; i <= 55; i++)
        {
            ListItem lstItem = new ListItem((System.DateTime.Now.Year - i).ToString(), (System.DateTime.Now.Year - i).ToString());
            ddlYear.Items.Add(lstItem);
        }
    }
    #endregion

    #region "Load LOV"
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
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
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
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }
    #endregion

    protected void fillCompartmental()
    {
        DataSet ddlCompSource = new DataSet();
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlCompSource.ReadXml(pth + "SAMS\\MasterXML/Compartment.xml");
        //ddlCompSource.ReadXml(Server.MapPath("../MasterXML/Compartment.xml"));
        ddlCompSubject1.DataSource = ddlCompSource;
        ddlCompSubject1.DataTextField = "Row";
        ddlCompSubject1.DataValueField = "val";
        ddlCompSubject1.DataBind();
        ddlCompSubject2.DataSource = ddlCompSource;
        ddlCompSubject2.DataTextField = "Row";
        ddlCompSubject2.DataValueField = "val";
        ddlCompSubject2.DataBind();
        ddlCompSubject3.DataSource = ddlCompSource;
        ddlCompSubject3.DataTextField = "Row";
        ddlCompSubject3.DataValueField = "val";
        ddlCompSubject3.DataBind();
        ddlCompSubject4.DataSource = ddlCompSource;
        ddlCompSubject4.DataTextField = "Row";
        ddlCompSubject4.DataValueField = "val";
        ddlCompSubject4.DataBind();
    }

    #region Sate
    protected void fillAddressState()
    {
        string strChars = "";
        DataSet ddlDataSource = new DataSet();
        DataView dvData = new DataView();
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_STATE.xml");
        //ddlDataSource.ReadXml(Server.MapPath("../MasterXML/M_STATE.xml"));
        dvData = ddlDataSource.Tables[0].DefaultView;
        ddlCState.DataSource = dvData;
        ddlCState.DataTextField = "Row";
        ddlCState.DataValueField = "int_StateID";
        ddlCState.DataBind();
        //'===========Assigning values to a string================
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
    #endregion



    /// <param name="intDistId">district ID</param>
    /// <remarks>To get All the Block Details</remarks>
    /// 

    protected void getBlock(int intDistId)
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvSource = default(DataView);
        //string strpath = Server.MapPath("../MasterXML/M_BLOCK.xml");
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_BLOCK.xml");
        //ddlDataSource.ReadXml(Server.MapPath("../MasterXML/M_BLOCK.xml"));
        dvSource = ddlDataSource.Tables[0].DefaultView;
        dvSource.RowFilter = "int_DistrictID=" + intDistId;
        dvSource.Sort = "vch_BlockName";
        ddlCBlock.DataSource = dvSource;
        ddlCBlock.DataTextField = "vch_BlockName";
        ddlCBlock.DataValueField = "int_BlockID";
        ddlCBlock.DataBind();


    }

    protected void getDistrict(int intStateId)
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvSource = default(DataView);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "sams/MasterXML/M_DISTRICT.xml");
        //ddlDataSource.ReadXml(Server.MapPath("../MasterXML/M_DISTRICT.xml"));
        dvSource = ddlDataSource.Tables[0].DefaultView;

        //'only for Bihar
        if (intStateId == 1)
        {
            dvSource.RowFilter = "int_StateID=" + intStateId;
            ddlCDist.DataSource = dvSource;
            ddlCDist.DataTextField = "vch_DistrictName";
            ddlCDist.DataValueField = "int_DistrictID";
            ddlCDist.DataBind();
        }
        else
        {
            //Other state
            ddlCDist.Items.Clear();
            ddlCDist.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
            ddlCDist.Items.Insert(1, new ListItem { Text = "OTHER", Value = "588" });
        }

    }

    protected void getInsDistrict(int intStateId)
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvSource;
        //ddlDataSource.ReadXml(Server.MapPath("../MasterXML/M_DISTRICT.xml"));
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "sams/MasterXML/M_DISTRICT.xml");
        dvSource = ddlDataSource.Tables[0].DefaultView;
        if (intStateId == 1)
        {
            dvSource.RowFilter = "int_StateID=" + intStateId;
        }
        else
        {
            dvSource.RowFilter = "int_StateID in (" + intStateId + ",35)";
        }

        ddlinstDistrict.DataSource = dvSource;
        ddlinstDistrict.DataTextField = "vch_DistrictName";
        ddlinstDistrict.DataValueField = "int_DistrictID";
        ddlinstDistrict.DataBind();
      //  ddlinstDistrict.Items.Insert(39, new ListItem("OTHER", "588"));
    }

    protected void ddlCState_SelectedIndexChanged(object sender, EventArgs e)
    {
        ddlCBlock.Items.Clear();
        ddlCBlock.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
        ddlCDist.Items.Clear();
        ddlCDist.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
        getDistrict(Convert.ToInt32(ddlCState.SelectedValue));
    }

    protected void ddlCDist_SelectedIndexChanged(object sender, EventArgs e)
    {
        ddlCBlock.Items.Clear();
        ddlCBlock.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
        getBlock(Convert.ToInt32(ddlCDist.SelectedValue));
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        string ImageName = Session["AdmittedStreamId"].ToString();

        CAFDAL ccobjcaf = new CAFDAL();
        OFSS_OL_Entity.CAFEntity CafObj = new OFSS_OL_Entity.CAFEntity();
        CafObj.photo = new HttpPostedFileWrapper(imgUpload.PostedFile);
        using (var client = new AmazonS3Client(ConfigurationManager.AppSettings["AWSKey"], ConfigurationManager.AppSettings["AWSValue"], RegionEndpoint.APSouth1))
        {

            using (var newMemoryStream = new MemoryStream())
            {
                var uploadRequest = new TransferUtilityUploadRequest
                {
                    InputStream = CafObj.photo.InputStream,
                    Key = string.Format("OFSS2025/SAMS/ONLINE_CAF/APPL_IMAGES/2024/{0}", ImageName),
                    BucketName = "bseb",
                    CannedACL = S3CannedACL.PublicRead
                };

                var fileTransferUtility = new TransferUtility(client);
                fileTransferUtility.Upload(uploadRequest);
            }
        }




        try
        {
            if (Session["CSRFRandNum"].ToString() == hdnCSRFRandNum.Value)
            {
                if (IsValid())
                {
                    if (Convert.ToInt32(hdnValidateStatus.Value) == 1)
                    {
                         ImageName = Session["AdmittedStreamId"].ToString();

                        AddCAFData("VU", ImageName);
                    }
                    else
                    {
                         ImageName = Session["AdmittedStreamId"].ToString();

                        AddCAFData("U", ImageName);
                    }
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
                    vchModuleName = "StudentLogin_PersonalInfo_Update_CSRF"
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

    #region "Add CAF Details"
    protected void AddCAFData(string strAction, string ImageName)
    {
        CAFEntity ObjPAS = new CAFEntity();

        string strPass = "";
        string strResult = "";
        int intApplID = 0;


        //add aws




        try
        {
            ObjPAS.Action = strAction;
            ObjPAS.IPAddress = GetIP();
            ObjPAS.ApplicantID = Convert.ToInt32(hdnApplicationId.Value);
            ObjPAS.BoardId = Convert.ToInt32(ddlBoard.SelectedValue);
            if (rbtnAnnual.Checked)
            {
                ObjPAS.ExamType = "1";
            }
            else if (rbtnSuppl.Checked)
            {
                ObjPAS.ExamType = "2";
            }

            ObjPAS.pintYOP = Convert.ToInt32(Util.CheckSpecialCharValue(ddlYOP.SelectedValue));
            ObjPAS.RollNo = Util.CheckSpecialCharValue(txtBoardRoll.Text.Trim().ToString());
            ObjPAS.vch_RollNo = Util.CheckSpecialCharValue(txtRollCode.Text.Trim().ToString());
            ObjPAS.pintTotOpt = 0;
            ObjPAS.int_AutoValidateStatus = 0;
            //Will Be Added Later
            if (ObjPAS.pintYOP == 2024 && ObjPAS.BoardId == 109)
            {
                divUniqueId.Attributes.Add("style", "");
                ObjPAS.strELE1 = Util.CheckSpecialCharValue(txtUniqueId.Text.Trim().ToUpper());
            }
            else
            {
                ObjPAS.strELE1 = "";
            }
            ObjPAS.ApplicantName = Util.CheckSpecialCharValue(txtApplName.Text.Trim().ToUpper());
            ObjPAS.FatherName = Util.CheckSpecialCharValue(txtFatherName.Text.Trim().ToUpper());
            ObjPAS.MotherName = Util.CheckSpecialCharValue(txtMotherName.Text.Trim().ToUpper());
            ObjPAS.strGuardianName = txtBoardName.Text; //===========For Other Board Name Update
            ObjPAS.CorStateId = Convert.ToInt32(ddlCState.SelectedValue);
            ObjPAS.CorDistId = Convert.ToInt32(ddlCDist.SelectedValue);
            ObjPAS.CorBlockId = Convert.ToInt32(ddlCBlock.SelectedValue);
            ObjPAS.CorVillageName = "";
            ObjPAS.CorHouseNo = Util.CheckSpecialCharValue(txtCPS.Text.Trim().ToUpper());



            ObjPAS.CorPO = "";
            ObjPAS.CorPS = "";
            ObjPAS.CorPinCode = Util.CheckSpecialCharValue(txtCPC.Text.Trim());
            ObjPAS.CorPhNo = Util.CheckSpecialCharValue(txtCTCode.Text.Trim() + "-" + txtCTeleNo.Text.Trim());
            ObjPAS.CorMobileNo = Util.CheckSpecialCharValue(txtCMobNo.Text.Trim());
            ObjPAS.EmailId = Util.CheckSpecialCharValue(txtCEmail.Text.Trim());

            ObjPAS.PerStateId = Convert.ToInt32(ddlCState.SelectedValue);
            ObjPAS.PerDistId = Convert.ToInt32(ddlCDist.SelectedValue);
            ObjPAS.PerBlockId = Convert.ToInt32(ddlCBlock.SelectedValue);
            ObjPAS.PerVillageName = "";
            ObjPAS.PerHouseNo = Util.CheckSpecialCharValue(txtCPS.Text.Trim().ToUpper());
            ObjPAS.PerPO = "";
            ObjPAS.PerPS = "";
            ObjPAS.PerPinCode = Util.CheckSpecialCharValue(txtCPC.Text.ToUpper());
            ObjPAS.PerPhNo = Util.CheckSpecialCharValue(txtCTCode.Text.Trim() + "-" + txtCTeleNo.Text.Trim());
            ObjPAS.PerMobileNo = Util.CheckSpecialCharValue(txtCMobNo.Text.Trim());
            if (rbtST.Checked)
            {
                ObjPAS.pintReserveID = 3;
            }
            if (rbtSC.Checked)
            {
                ObjPAS.pintReserveID = 2;
            }

            if (rbtnOBC.Checked)
            {
                ObjPAS.pintReserveID = 4;
            }
            if (rbtGeneral.Checked)
            {
                ObjPAS.pintReserveID = 1;
            }
            if (rbtOther.Checked)
            {
                ObjPAS.pintReserveID = 5;
            }
            if (rbtBCW.Checked)
            {
                ObjPAS.pintReserveID = 6;
            }
            if (chkPHOHY.Checked)
            {
                ObjPAS.PHOH = true;
            }
            else
            {
                ObjPAS.PHOH = false;
            }

            if (rbtESM.Checked)
            {
                ObjPAS.ESM = true;
            }
            else
            {
                ObjPAS.ESM = false;
            }
            if (rbtSDP.Checked)
            {
                ObjPAS.SDP = true;
            }
            else
            {
                ObjPAS.SDP = false;
            }
            if (rbtCoM.Checked)
            {
                ObjPAS.CoM = true;
            }
            else
            {
                ObjPAS.CoM = false;
            }
            if (chkNCCA.Checked)
            {
                ObjPAS.NCCA = true;
            }
            else
            {
                ObjPAS.NCCA = false;
            }
            if (chkNCCC.Checked)
            {
                ObjPAS.NCCC = true;
            }
            else
            {
                ObjPAS.NCCC = false;
            }

            if (chkSCPR.Checked)
            {
                ObjPAS.ScoutPR = true;
            }
            else
            {
                ObjPAS.ScoutPR = false;

            }
            if (chkSCRP.Checked)
            {
                ObjPAS.ScoutRP = true;
            }
            else
            {
                ObjPAS.ScoutRP = false;
            }
            if (chkSportsS.Checked)
            {
                ObjPAS.SportsS = true;
            }
            else
            {
                ObjPAS.SportsS = false;
            }

            if (chkSportsN.Checked)
                ObjPAS.SportsN = true;
            else
                ObjPAS.SportsN = false;

            if (chkSportsIN.Checked)
            {
                ObjPAS.SportsIN = true;
            }
            else
            {
                ObjPAS.SportsIN = false;
            }

            //added for Economically Weaker Section
            if (rbtnEWSYes.Checked)
            {
                ObjPAS.intEWS = 1;
            }
            else
            {
                ObjPAS.intEWS = 0;
            }

            //End If
            ObjPAS.BloodGrId = Convert.ToInt32(ddlBloodGroup.SelectedValue);
            ObjPAS.ReligionId = Convert.ToInt32(ddlReligion.SelectedValue);
            ObjPAS.GENDER = Convert.ToInt32(ddlGender.SelectedValue);
            //ObjPAS.DOB = ddlDay.SelectedValue + "-" + ddlMonth.SelectedItem.Text + "-" + ddlYear.SelectedValue;
            ObjPAS.DOB = ddlMonth.SelectedValue + "-" + ddlDay.SelectedValue + "-" + ddlYear.SelectedValue;
            ObjPAS.Nationality = ddlNationality.SelectedValue;
            ObjPAS.MotherTongue = ddlMt.SelectedValue;
            ObjPAS.FathersOccup = "";
            ObjPAS.MothersOccup = "";
            ObjPAS.AnnualIncome = 0;
            // ObjPAS.AIncome = 0;
            //===================MarkDetails==========
            if ((ObjPAS.BoardId == 45 & Convert.ToInt32(ddlYOP.SelectedValue) >= 2014))
            {
                ObjPAS.vch_Grade = ddlGrade.SelectedValue;
            }
            else
            {
                ObjPAS.vch_Grade = "0";
            }
            if ((ObjPAS.BoardId == 46 && Convert.ToInt32(ddlYOP.SelectedValue) >= 2010 && Convert.ToInt32(ddlYOP.SelectedValue) < 2018) | (ObjPAS.BoardId == 103 && Convert.ToInt32(ddlYOP.SelectedValue) >= 2012))
            {
                ObjPAS.MarkSL = Convert.ToInt32(ddlEng.SelectedValue);
                ObjPAS.MarkMath = Convert.ToInt32(ddlMath.SelectedValue);
                ObjPAS.MarkScience = Convert.ToInt32(ddlSc.SelectedValue);
                ObjPAS.MarkSocialStudies = Convert.ToInt32(ddlSoSc.SelectedValue);
                ObjPAS.Totalmark = Convert.ToDouble(Util.CheckSpecialCharValue(txtCGPA.Text.Trim()));
                ObjPAS.MaxMark = Convert.ToInt32(10);
            }
            else if (ObjPAS.BoardId == 116 & Convert.ToInt32(ddlYOP.SelectedValue) >= 2010)
            {
                ObjPAS.MarkSL = Convert.ToInt32(ddlKEnglish.SelectedValue);
                ObjPAS.MarkMath = Convert.ToInt32(ddlKMath.SelectedValue);
                ObjPAS.MarkScience = Convert.ToInt32(ddlKScience.SelectedValue);
                ObjPAS.MarkSocialStudies = Convert.ToInt32(ddlKSoSc.SelectedValue);
                ObjPAS.Totalmark = Convert.ToDouble(ddlTGrade.SelectedValue);
                ObjPAS.MaxMark = Convert.ToInt32(10);
            }
            else
            {
                ObjPAS.MarkSL = Convert.ToInt32((!string.IsNullOrEmpty(Util.CheckSpecialCharValue(txtEnglish.Text)) ? Convert.ToInt32(Util.CheckSpecialCharValue(txtEnglish.Text)) : 0));
                ObjPAS.MarkMath = Convert.ToInt32((!string.IsNullOrEmpty(Util.CheckSpecialCharValue(txtMath.Text)) ? Convert.ToInt32(Util.CheckSpecialCharValue(txtMath.Text)) : 0));
                ObjPAS.MarkScience = Convert.ToInt32((!string.IsNullOrEmpty(Util.CheckSpecialCharValue(txtScience.Text)) ? Convert.ToInt32(Util.CheckSpecialCharValue(txtScience.Text)) : 0));
                ObjPAS.MarkSocialStudies = Convert.ToInt32((!string.IsNullOrEmpty(Util.CheckSpecialCharValue(txtSocSci.Text)) ? Convert.ToInt32(Util.CheckSpecialCharValue(txtSocSci.Text)) : 0));
                ObjPAS.Totalmark = Convert.ToDouble(Util.CheckSpecialCharValue(txtTotMark.Text));
                ObjPAS.MaxMark = Convert.ToInt32(Util.CheckSpecialCharValue(txtMaxMark.Text));
            }

            //int Tot = Convert.ToInt32(txtTotMark.Text);
            //int Max = Convert.ToInt32(txtMaxMark.Text);
            //if (Tot == 0)
            //{
            //    //jAlert('', "<strong>Total Marks Obtained cannot be 0(zero)</strong>", Title);
            //    //document.getElementById('txtTotMark').focus();
            //    //return false;
            //    string str = "Total Marks Obtained cannot be 0(zero)";
            //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
            //    txtTotMark.Focus();
            //    return;

            //}

            //if (Tot >= Max)
            //{
            //    string str = "Total Marks Obtained cannot be greater than or equal to Total Full Marks";
            //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
            //    txtTotMark.Focus();
            //    return;
            //    //jAlert('', "<strong>Total Marks Obtained cannot be greater than or equal to Total Full Marks</strong>", Title);
            //    //document.getElementById('txtTotMark').focus();
            //    //return false;
            //}
            //if (Max == 0)
            //{
            //    string str = "Total Full Marks cannot be 0(zero)";
            //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
            //    txtMaxMark.Focus();
            //    return;
            //    //jAlert('', "<strong>Total Full Marks cannot be 0(zero)</strong>", Title);
            //    //document.getElementById('txtMaxMark').focus();
            //    //return false;
            //}

            //========================================
            if (rbtCompartmentalY.Checked)
            {
                ObjPAS.Compartmental = true;
            }
            else
            {
                ObjPAS.Compartmental = false;
            }
            ObjPAS.LastInst = Util.CheckSpecialCharValue(txtschname.Text.Trim());
            ObjPAS.LastInstLoc = Util.CheckSpecialCharValue(txtschloc.Text.Trim());

            if (ddlinstDistrict.SelectedValue == "0")
            {
                ObjPAS.strLastInstDist = "0";
                ObjPAS.LIDistName = "Other";
            }
            else
            {
                ObjPAS.strLastInstDist = ddlinstDistrict.SelectedValue;
                ObjPAS.LIDistName = "";
            }

            ObjPAS.YearOfJoining = Convert.ToInt32(ddlYOJ.SelectedValue);
            ObjPAS.YearOfLeaving = Convert.ToInt32(ddlYOL.SelectedValue);
            //==================Data For Compartment Subject=======================
            string strSubject = "";
            string strFMark = "";
            string strPMark = "";
            if (ddlCompSubject1.SelectedIndex > 0)
            {
                strSubject += ddlCompSubject1.SelectedItem.Text + "~";
                strFMark += Util.CheckSpecialCharValue(txtCompFMark1.Text) + "~";
                strPMark += Util.CheckSpecialCharValue(txtCompPMark1.Text) + "~";
            }
            if (ddlCompSubject2.SelectedIndex > 0)
            {
                strSubject += ddlCompSubject2.SelectedItem.Text + "~";
                strFMark += Util.CheckSpecialCharValue(txtCompFMark2.Text) + "~";
                strPMark += Util.CheckSpecialCharValue(txtCompPMark2.Text) + "~";
            }
            if (ddlCompSubject3.SelectedIndex > 0)
            {
                strSubject += ddlCompSubject3.SelectedItem.Text + "~";
                strFMark += Util.CheckSpecialCharValue(txtCompFMark3.Text) + "~";
                strPMark += Util.CheckSpecialCharValue(txtCompPMark3.Text) + "~";
            }
            if (ddlCompSubject4.SelectedIndex > 0)
            {
                strSubject += ddlCompSubject4.SelectedItem.Text + "~";
                strFMark += Util.CheckSpecialCharValue(txtCompFMark4.Text) + "~";
                strPMark += Util.CheckSpecialCharValue(txtCompPMark4.Text) + "~";
            }
            ObjPAS.strSubject = strSubject;
            ObjPAS.strFMark = strFMark;
            ObjPAS.strPMark = strPMark;

            ObjPAS.photodb = hdnImgAppl.Value;

            //=========Counting Total no. of options=====
            if (!string.IsNullOrEmpty(hdnImgAppl.Value))
            {
                ObjPAS.bitImageStatus = true;
            }

            //added by Ritika Lath on 10th July 2020
            if ((ObjPAS.BoardId == 109 && Convert.ToInt32(ddlYOP.SelectedValue) >= 2010 && ObjPAS.MaxMark != 500)) //bihar board 
            {
                string str = "Total Full Marks should be 500 for BSEB Bihar board for year " + ddlYOP.SelectedValue + "";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            //added by Ritika Lath on 7th July 2020 to check if secured marks in 30% or not
            decimal decPre = 0.00M;
            decPre = (Convert.ToDecimal(ObjPAS.Totalmark) / Convert.ToDecimal(ObjPAS.MaxMark)) * 100.00M;

            if (!((ObjPAS.BoardId == 116 && Convert.ToInt32(ddlYOP.SelectedValue) >= 2010))) // if grade system is not used check if applicant has not got 30% criteria then he cannot apply
            {
                if (decPre < 30.00M)
                {
                    string str = "Invalid marks. You should have secured 30% marks to be enrolled in the CAF";
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                    return;
                }
            }

            if ((ObjPAS.BoardId == 46 && Convert.ToInt32(ddlYOP.SelectedValue) > 2017 && ObjPAS.MaxMark != 500))
            {
                string str = "Total Full Marks should be 500 for CBSE New Delhi board for year " + ddlYOP.SelectedValue + "";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            if ((ObjPAS.BoardId == 46 && Convert.ToInt32(ddlYOP.SelectedValue) >= 2010 && Convert.ToInt32(ddlYOP.SelectedValue) <= 2017 && ObjPAS.MaxMark != 10))
            {
                string str = "Total Full Marks should be 10 for CBSE New Delhi board for year " + ddlYOP.SelectedValue + "";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            if ((ObjPAS.BoardId == 47 && ObjPAS.MaxMark > 1000))
            {
                string str = "Total Full Marks should be less than equal to 1000 for ICSE New Delhi board for year " + ddlYOP.SelectedValue + "";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            //if ((ObjPAS.BoardId == 47 && Convert.ToInt32(ddlYOP.SelectedValue) <= 2017 && ObjPAS.MaxMark != 10))
            //{
            //    string str = "Total Full Marks should be 10 for ICSE New Delhi board for year " + ddlYOP.SelectedValue + "";
            //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
            //    return;
            //}
            if ((ObjPAS.BoardId == 46 && Convert.ToInt32(ddlYOP.SelectedValue) >= 2010 && Convert.ToInt32(ddlYOP.SelectedValue) <= 2017))
            {
                if (ObjPAS.MaxMark < ObjPAS.Totalmark)
                {
                    string str = "Total Marks Obtained cannot be greater than Total Full Marks";
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                    return;
                }
            }
            else
            {
                if (ObjPAS.MaxMark <= ObjPAS.Totalmark)
                {
                    string str = "Total Marks Obtained cannot be greater than or equal to Total Full Marks";
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                    return;
                }
            }

            ObjPAS.KGBACSts=rbtnKGABC.SelectedIndex == -1 ? 0 :Convert.ToInt32(rbtnKGABC.SelectedValue);
            ObjPAS.aadharNo = txtAadhar.Text.Trim();
            ObjPAS.aadharSts = txtAadhar.Text.Trim() == "" ? 0 : 1;

           
                strResult = ccobj.AddCAFData(ObjPAS);
            
            intRetVal = Convert.ToInt32(strResult.Substring(0, 1));

            if (strResult.Contains("J"))
            {
                string[] strApp = strResult.Trim().Split('J');
                strImageName = strResult.Remove(0, 1);
                intApplID = Convert.ToInt32(strApp[1]);

            }

            if (intRetVal == 2)
            {

                string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
                pth = (pth + "SAMS\\ONLINE_CAF\\APPL_IMAGES\\2024");
                string newPath = System.IO.Path.Combine(pth, ObjPAS.CorBlockId.ToString());
                string srcName = System.IO.Path.Combine(pth, hdnOldBlockId.Value) + "\\" + strImageName + ".jpg"; 
                string DestName = newPath + "\\" + strImageName + ".jpg"; 

                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }
                if (imgUpload.HasFile)
                {
                    Random generator = new Random();
                    int randomValue = 0;
                    randomValue = generator.Next(10, 100000000);
                    //string strFilename = randomValue.ToString().Trim().Replace(".", "").Replace(" ", "_") + ".jpeg";
                    //Stream ToStream = null;   
                    Size newSize = new Size(130, 130);
                    Bitmap original = new Bitmap(imgUpload.PostedFile.InputStream);
                    Bitmap reSize = new Bitmap(original, newSize);
                    Graphics thumb = Graphics.FromImage(reSize);
                    thumb.CompositingQuality = CompositingQuality.HighQuality;
                    thumb.SmoothingMode = SmoothingMode.HighQuality;
                    thumb.InterpolationMode = InterpolationMode.HighQualityBicubic;
                    Rectangle rect = new Rectangle(0, 0, 130, 130);
                    thumb.DrawImage(original, rect);

                    if (File.Exists(DestName))
                    {
                        File.Delete(DestName);
                    }
                    //imgUpload.SaveAs(DestName);
                    reSize.Save(DestName, ImageFormat.Jpeg);

                    if (hdnOldBlockId.Value != ObjPAS.CorBlockId.ToString())
                    {

                        if (File.Exists(srcName))
                        {
                            File.Delete(srcName);
                        }
                    }

                }
                else
                {

                    if (hdnOldBlockId.Value != ObjPAS.CorBlockId.ToString())
                    {
                        if (File.Exists(DestName))
                        {
                            File.Delete(DestName);
                        }
                        File.Move(srcName, DestName);
                    }
                }


            }
            hdnImgAppl.Value = "";
            hdnUploadStatus.Value = "0";
            string url = "&linkm=" + Request.QueryString["linkm"] + "&linkn=" + Request.QueryString["linkn"] + "&btn=" + Request.QueryString["btn"] + "&tab=" + Request.QueryString["tab"];
            string strmsg = "";
            if (intRetVal == 5)
            {
                strmsg = "Invalid marks. You should have secured 30% marks to be enrolled in the CAF";
            }
            else if (intRetVal == 6)
            {
                strmsg = "Aadhaar number already exists!";
            }
            else
            {
                strmsg = Messages.Message(Convert.ToInt32(strResult.Substring(0, 1)));
            }
            
            ScriptManager.RegisterStartupScript(btnSave, this.GetType(), "Myalert", "jAlertSubmit('btnSubmit', '<strong>" + strmsg + "</strong>', 'PersonalInfo.aspx?" + url + "');", true);
            if (intRetVal == 2)
            {
                #region Send Email and Sms
                SendEmailandSMS(Session["StudID"].ToString(), txtCMobNo.Text, txtCEmail.Text, txtApplName.Text);
                #endregion
            }

        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        finally
        {
            Session["StudNm"] = txtApplName.Text.ToUpper();
            ObjPAS = null;
            if (intRetVal == 2)
            {
                //if ((Convert.ToInt32(ddlBoard.SelectedValue) == 46 || Convert.ToInt32(ddlBoard.SelectedValue) == 47) && Convert.ToInt32(ddlYOP.SelectedValue) == 2019)
                if ((Convert.ToInt32(ddlBoard.SelectedValue) == 46 || Convert.ToInt32(ddlBoard.SelectedValue) == 47) && Convert.ToInt32(ddlYOP.SelectedValue) == 2024)
                {
                    if (txtTotMark.Text.Trim() != "" && txtMaxMark.Text.Trim() != "")
                    {
                        Session["StudMarkStatus"] = 0;
                    }
                }
            }

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

        string strSMSMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginPersonalInfoJun, dcValue, 1);
        string strEmailMessage = CreateXmlMsgUtil.GetXmlMessageByType(CreateXmlMsgUtil.K_StudLoginPersonalInfoJun, dcValue, 2);

        try
        {
            if (ConfigurationManager.AppSettings["SMSjr"].ToString() == "Y")
            {
                SENDMSDSMS objSms = new SENDMSDSMS();
                string status = objSms.sendOTPMSG(strMobileNo, strSMSMessage, Util.K_SMS_StudLogin_PersonalInfo);
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "PersonalInfoupdate");
        }
       
        try
        {
            if (ConfigurationManager.AppSettings["Emailjr"].ToString() == "Y")
            {
                if (ConfigurationManager.AppSettings["SDCEmailjr"].ToString() == "Y")
                {
                    SENDMAIL objEmail = new SENDMAIL();
                    string strCompleteEmail = CreateXmlMsgUtil.GetEmailAppendedContent(strEmailMessage, strApplicantname);
                    objEmail.sendMail(CreateXmlMsgUtil.K_MailSub_CAFPersonalInfoEditJun, strCompleteEmail, strEmail);
                }
                else
                {
                    SENDMAIL objEmail = new SENDMAIL();
                    string strCompleteEmail = CreateXmlMsgUtil.GetEmailAppendedContent(strEmailMessage, strApplicantname);
                    objEmail.SendVivaMail(CreateXmlMsgUtil.K_MailSub_CAFPersonalInfoEditJun, strCompleteEmail, strEmail);
                }
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "PersonalInfoupdate");
        }
       
    }

    //protected void ddlGender_SelectedIndexChanged(object sender, EventArgs e)
    //{
    //    string strMsg = "";
    //    try
    //    {
    //        if (hdnAppliedColleges.Value != "" && hdnAppliedColleges.Value != "0")
    //        {
    //            if (Convert.ToInt32(ddlGender.SelectedValue) == 1)
    //            {
    //                if (hdnAppliedColleges.Value.Contains("2"))
    //                {
    //                    strMsg = "You must need to delete all selected women college option first and then change your gender and then you will have to select collge option again.";
    //                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
    //                    return ;
    //                }
    //                if (rbtBCW.Checked)
    //                {
    //                    strMsg = "You must need to change the reservation details and then change your gender.";
    //                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
    //                    return ;
    //                }
    //            }
    //            if (Convert.ToInt32(ddlGender.SelectedValue) == 2)
    //            {
    //                if (hdnAppliedColleges.Value.Contains("0"))
    //                {
    //                    strMsg = "You must need to delete all selected Boys college option first and then change your gender and then you will have to select collge option again.";
    //                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
    //                    return ;
    //                }
    //            }
    //            if (Convert.ToInt32(ddlGender.SelectedValue) == 3)
    //            {
    //                if (hdnAppliedColleges.Value.Contains("0") || hdnAppliedColleges.Value.Contains("2"))
    //                {
    //                    strMsg = "You must need to delete all selected Boys and women college option first and then change your gender and then you will have to select collge option again.";
    //                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
    //                    return ;
    //                }
    //                if (rbtBCW.Checked)
    //                {
    //                    strMsg = "You must need to change the reservation details and then change your gender.";
    //                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
    //                    return;
    //                }
    //            }

    //        }
    //    }
    //    catch (Exception ex)
    //    {
    //        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
    //    }

    //}
    protected bool IsValid()
    {
        string strMsg = "";
        try
        {
            if (ddlBoard.SelectedValue == "0")
            {
                strMsg = "Please select the name of your Examination Board";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlBoard','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlBoard.Focus();
                return false;
            }
            if (ddlBoard.SelectedValue == "131" && txtBoardName.Text.Trim().Length == 0)
            {
                strMsg = "Board Name cannot be left blank";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtBoardName','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtBoardName.Focus();
                return false;
            }
            if (ddlYOP.SelectedValue == "0")
            {
                strMsg = "Please select the year of passing";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlYOP','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlYOP.Focus();
                return false;
            }

            //Added by Swapna Prangya Routray on 12/06/2023.
            int yojoining = Convert.ToInt32(ddlYOJ.SelectedValue);
            int yoleaving = Convert.ToInt32(ddlYOL.SelectedValue);
            int yoPassing = Convert.ToInt32(ddlYOP.SelectedValue);
            if (yoPassing < yoleaving && yoPassing > 0 && yoleaving > 0)
            {
                strMsg = "Year of leaving should be less than or equal to Year of passing";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlYOL','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlYOL.Focus();
                return false;
            }

            if (yoPassing <= yojoining && yoPassing > 0 && yojoining > 0)
            {

                strMsg = "Year of joining should be less than Year of passing";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlYOJ','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlYOJ.Focus();
                return false;
            }

            if (!(rbtnAnnual.Checked) && !(rbtnSuppl.Checked))
            {
                strMsg = "Please Choose Exam Type";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('rbtnAnnual','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                rbtnAnnual.Focus();
                return false;
            }

            if(txtschname.Text.Trim()=="")
            {
                strMsg = "Name of the School cannot be left blank !";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtschname','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtschname.Focus();
                return false;
            }

            if (txtschloc.Text.Trim() == "")
            {
                strMsg = "Address of the  cannot be left blank !";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtschloc','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtschloc.Focus();
                return false;
            }

            if (ddlinstDistrict.SelectedValue == "0")
            {
                strMsg = "Please select District!";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlinstDistrict','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlinstDistrict.Focus();
                return false;
            }


            if (ddlYOJ.SelectedValue == "0")
            {
                strMsg = "Please select Year of Joining!";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlYOJ','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlYOJ.Focus();
                return false;
            }


            if (ddlYOL.SelectedValue == "0")
            {
                strMsg = "Please select Year of Leaving!";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlYOL','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlYOL.Focus();
                return false;
            }


            if (ddlDay.SelectedValue == "0")
            {
                strMsg = "Please select the Day of your Date of Birth";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlDay','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlDay.Focus();
                return false;
            }
            if (ddlMonth.SelectedValue == "0")
            {
                strMsg = "Please select the Month of your Date of Birth";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlMonth','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlMonth.Focus();
                return false;
            }
            if (ddlYear.SelectedValue == "0")
            {
                strMsg = "Please select the Year of your Date of Birth";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlYear','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlYear.Focus();
                return false;
            }

            int YOP = Convert.ToInt32(ddlYOP.SelectedValue);
            int BY = Convert.ToInt32(ddlYear.SelectedValue);
            if ((YOP - BY) < 13)
            {
                strMsg = "The difference of age between the birth year and 10th passing year should be greater than 13";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlYear','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlYear.Focus();
                return false;
            }


            if (ddlNationality.SelectedValue == "0")
            {
                strMsg = "Please select Nationality";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlNationality','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlNationality.Focus();
                return false;
            }
            if (ddlMt.SelectedValue == "0")
            {
                strMsg = "Please select Mother Tongue";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlMt','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlMt.Focus();
                return false;
            }

            //===================For Correspondence address===================
            if (ddlCState.SelectedValue == "0")
            {
                strMsg = "Please select State";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCState','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlCState.Focus();
                return false;
            }
            if (ddlCDist.SelectedValue == "0")
            {
                strMsg = "Please select District";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCDist','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlCDist.Focus();
                return false;
            }
            if (ddlCBlock.SelectedValue == "0")
            {
                strMsg = "Please select Block/ULB";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlCBlock','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlCBlock.Focus();
                return false;
            }

            if (txtCPS.Text.Trim() == "")
            {
                strMsg = "House no.,village name,police station cannot be left blank !";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtCPS','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtCPS.Focus();
                return false;
            }
            if (txtCPC.Text.Trim() == "")
            {
                strMsg = "Pin Code cannot be left blank !";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtCPC','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtCPC.Focus();
                return false;
            }
            if (txtCMobNo.Text.Trim() == "")
            {
                strMsg = "Mobile Number cannot be left blank !";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtCMobNo','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtCMobNo.Focus();
                return false;
            }
            if (txtCEmail.Text.Trim() == "")
            {
                strMsg = "e-Mail cannot be left blank !";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtCEmail','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtCEmail.Focus();
                return false;
            }
           
            if (ddlBoard.SelectedValue == "109" || ddlBoard.SelectedValue == "118")
            {
                if (txtRollCode.Text.Trim() == "")
                {
                    strMsg = "Roll Code. cannot be left blank";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtRollCode','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    txtRollCode.Focus();
                    return false;

                }
            }
            if (txtBoardRoll.Text.Trim() == "")
            {
                strMsg = "Roll No. cannot be left blank";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtBoardRoll','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtBoardRoll.Focus();
                return false;

            }
            if (txtBoardRoll.Text.Trim() == "")
            {
                strMsg = "Roll No. cannot be left blank";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtBoardRoll','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtBoardRoll.Focus();
                return false;

            }
            if (txtBoardRoll.Text.Trim() == "0" || txtBoardRoll.Text.Trim() == "00" || txtBoardRoll.Text.Trim() == "000" || txtBoardRoll.Text.Trim() == "0000" || txtBoardRoll.Text.Trim() == "00000" || txtBoardRoll.Text.Trim() == "000000" || txtBoardRoll.Text.Trim() == "0000000" || txtBoardRoll.Text.Trim() == "00000000" || txtBoardRoll.Text.Trim() == "000000000" || txtBoardRoll.Text.Trim() == "0000000000")
            {
                strMsg = "Roll No. cannot be 0";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtBoardRoll','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtBoardRoll.Focus();
                return false;

            }
            
            //if (ddlBoard.SelectedValue == "109" && YOP == 2024)
            //{

            //    if (txtUniqueId.Text.Trim() == "")
            //    {
            //        strMsg = "Applicant Unique Id cannot be left blank";
            //        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtUniqueId','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
            //        txtUniqueId.Focus();
            //        return false;

            //    }
            //}
            if (txtApplName.Text.Trim() == "")
            {
                strMsg = "Applicant Name cannot be left blank";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtApplName','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtApplName.Focus();
                return false;

            }
            if (txtFatherName.Text.Trim() == "")
            {
                strMsg = "Father's Name cannot be left blank";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtFatherName','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtFatherName.Focus();
                return false;

            }
            if (txtMotherName.Text.Trim() == "")
            {
                strMsg = "Mother's Name cannot be left blank";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtMotherName','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtMotherName.Focus();
                return false;

            }
            if (Convert.ToInt32(rbtnKGABC.SelectedValue) == 1 && (Convert.ToInt32(ddlBoard.SelectedValue) != 109 || Convert.ToInt32(ddlGender.SelectedValue) != 2))
            {
                strMsg = "For Choosing Yes, you must be a female student and should have passed Class Tenth examination from Bihar School Examination Board (BSEB), while residing at Kasturba Gandhi Balika Chhatravas.";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('rbtnKGABC','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                rbtnKGABC.Focus();
                return false;
            }
            //if (!imgUpload.HasFile)
            //{
            //    strMsg = "Please Upload your photo !";
            //    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('imgUpload','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
            //    return false;
            //}
            //if (ddlGender.SelectedValue == "0")
            //{
            //    strMsg = "Gender cannot be left blank";
            //    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtMotherName','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
            //    ddlGender.Focus();
            //    return false;

            //}

            if (hdnImgAppl.Value == "")
            {
                strMsg = "Please Upload your photo !";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('hdnImgAppl','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);

                return false;
            }
            else
            {
                if (imgUpload.HasFile)
                {
                    if (imgUpload.PostedFile.ContentLength > (2 * 1024 * 1024))// 2 MB
                    {
                        strMsg = "Please upload a valid image having size less than 2MB";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('hdnImgAppl','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        return false;
                    }
                    else
                    {
                        string[] allowedImageTyps = { "image/jpeg", "image/png", "image/jpg", };
                        string[] allowedExtension = { ".jpg", ".png", ".jpeg" };
                        StringCollection imageTypes = new StringCollection();
                        StringCollection imageExtension = new StringCollection();
                        imageTypes.AddRange(allowedImageTyps);
                        imageExtension.AddRange(allowedExtension);
                        string strFiletype = MimeType.GetMimeType(imgUpload.FileBytes, imgUpload.FileName);
                        string fileExt = System.IO.Path.GetExtension(imgUpload.FileName.ToLower());
                        string filename = System.IO.Path.GetFileNameWithoutExtension(imgUpload.FileName);


                        if (!imageTypes.Contains(strFiletype))
                        {
                            strMsg = "Invalid photo format .";
                            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('hdnImgAppl','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                            return false;
                        }
                        else if (!imageExtension.Contains(fileExt))
                        {
                            strMsg = "Only jpg,png,jpeg files are allowed.";
                            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('hdnImgAppl','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                            return false;
                        }
                        else if (imgUpload.FileName.Count(f => f == '.') != 1) // Validate multiple extensions
                        {

                            strMsg = "Invalid file type.";
                            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('hdnImgAppl','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                            return false;


                        }

                    }
                    

                }
            }

            return true;

        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        return true;

    }
    public string GetIP()
    {
        IPHostEntry host = default(IPHostEntry);
        string localIP = "?";
        host = Dns.GetHostEntry(Dns.GetHostName());
        foreach (IPAddress ip in host.AddressList)
        {
            if (ip.AddressFamily.ToString() == "InterNetwork")
            {
                localIP = ip.ToString();
            }
        }
        return localIP;
    }
    protected string GetUrl(string AppId)
    {
        string strURL = "PersonalInfo.aspx?";
        string strURLWithData = strURL + string.Format("AppId={0}", AppId);
        return strURLWithData;
    }
    private void specialcharatercheck(string strControlId, string redirect)
    {
        string strsplch = "~,`,!,@,#,$,%,^,&,*,(,),-,_,=,+,[,],{,},|,\\,',;,:,>,<,?,/,.";
        int i = 0;
        string[] arrspl;
        arrspl = strsplch.Split(new char[] { '~' });

        for (i = 0; i <= arrspl.GetUpperBound(1); i++)
        {
            ////if (Strings.InStr(strControlId,Trim(arrspl(int i))) > 0)
            ////{
            ////    Response.Redirect(redirect);
            ////}
        }
    }
    private void checkAddress(string strControlId, string redirect)
    {
        string strsplch = "~,`,!,@,#,$,%,^,&,*,(,),_,=,+,[,],{,},|,',;,:,>,<,?";
        int i = 0;
        string[] arrspl = null;
        arrspl = strsplch.Split(new char[] { '~' });

        for (i = 0; i <= arrspl.GetUpperBound(1); i++)
        {
            //if (Strings.InStr(strControlId, Strings.Trim(arrspl(i))) > 0)
            //{

            //}
        }
    }
    private void Numeric(string strControlId, string redirect)
    {
        if (!string.IsNullOrEmpty(strControlId))
        {
            //if (IsNumeric(strControlId) == false)
            //{
            //    Response.Redirect(redirect);
            //}
        }
    }
    #endregion

}