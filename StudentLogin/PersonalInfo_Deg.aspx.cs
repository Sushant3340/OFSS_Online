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
using System.Net;
using CommonModels;



public partial class StudentLogin_PersonalInfo_Deg : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
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
    public string strCategory2 = "4";
    string strMsgTitle = "OFSS Online, Govt. of Bihar";

    protected void Page_Load(object sender, EventArgs e)
    {


        Response.Cache.SetExpires(DateTime.UtcNow.AddMinutes(-1));
        Response.Cache.SetCacheability(HttpCacheability.NoCache);
        Response.Cache.SetNoStore();

        if (!Page.IsPostBack)
        {
            try
            {
                hdnCSRFRandNum.Value = Util.GenerateCSRFRandomNo();
                if (Session["StudID"] != null)
                {
                    List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
                    list = fillDateline();
                    if (list.Count > 0)
                    {
                        DateTime lastAppDate = list[0].ToDate;
                        DateTime dtmToDate = list[0].FromDate;
                        DateTime dtmFromDate = list[0].DateLine;
                        hdnRejectStatus.Value = list[0].intRejectionStatus.ToString();
                        hdnSelectionStatus.Value = list[0].int_AutoValidateStatus.ToString();

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
                                    FillCAFDegree();
                                }
                                else
                                {
                                    divDateLine.Visible = true;
                                    divForm.Visible = false;
                                }
                            }
                            else
                            {

                                divDateLine.Visible = true;
                                divForm.Visible = false;
                                //if (Convert.ToInt32(hdnRejectStatus.Value) > 0 || Convert.ToInt32(hdnSelectionStatus.Value) > 0)
                                //{

                                //    int FromDate = DateTime.Compare(DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59), dtmFromDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                                //    int ToDate = DateTime.Compare(dtmToDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));

                                //    if (ToDate >= 0 && FromDate >= 0)
                                //    {
                                //        divDateLine.Visible = false;
                                //        divForm.Visible = true;
                                //        FillCAFDegree();
                                //    }
                                //}
                            }

                        }
                        else
                        {
                            divDateLine.Visible = false;
                            divForm.Visible = true;
                            FillCAFDegree();


                        }
                    }

                }
                else
                {
                    Response.Redirect("StudentLogout_Deg.aspx");
                }
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
            }
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
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        return list;
    }
    #endregion

    /// <summary>
    /// Function to fill details
    /// </summary>
    protected void FillCAFDegree()
    {
        fillBoard();
        FillDate(ddlDay, ddlMonth, ddlYear);
        fillAddressState();
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
        fillGeneralInformation(Session["StudID"].ToString());

    }
    protected void fillGeneralInformation(string strId)
    {

        CAFEntity_Deg obj = new CAFEntity_Deg();
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        List<CAFEntity_Deg> list1 = new List<CAFEntity_Deg>();
        // ================================
        try
        {
            string intAppId = strId.ToString();

                obj.Action = "R";
                obj.strId = intAppId;// Session["Uid"].ToString();
                list = ccobj.fillPrintOption(obj);

                obj = new CAFEntity_Deg();
                obj.Action = "C";
                obj.strId = intAppId;

                list1 = ccobj.fillPrintOption(obj);
            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

        if (list.Count > 0)
        {

            hdnApplicationId.Value = list[0].ApplicantID.ToString();
            hdnValidateStatus.Value = list[0].int_AutoValidateStatus.ToString();
            //hdnValidateStatus.Value = "0";
            hdnAppliedStreams.Value = list[0].strStreamIDS;
            hdnMathematics.Value = list[0].intMathHonsStatus.ToString();
            hdnChemistry.Value = list[0].intChemHonsStatus.ToString();
            hdnBotany.Value = list[0].intBotHonsStatus.ToString();
            hdnZoology.Value = list[0].intZolHonsStatus.ToString();
            hdnAppliedColleges.Value = list[0].IDs.ToString();

            if (!string.IsNullOrEmpty(Convert.ToString(list[0].BoardId)))
            {
                ddlBoard.ClearSelection();
                ddlBoard.SelectedValue = Convert.ToString(list[0].BoardId);
                ddlBoard.Enabled = false;
                if (list[0].BoardId == 68)
                {
                    ddlBoard.Style.Add("display", "none");
                    txtBoardName.Text = list[0].vch_CouncilName;
                    txtBoardName.Enabled = false;
                }
                else
                {
                    txtBoardName.Style.Add("display", "none");
                }

            }

            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_ExamType)))
            {
                if (Convert.ToInt32(list[0].vch_ExamType) == 1)
                {
                    rbtnAnnual.Checked = true;
                }
                else if (Convert.ToInt32(list[0].vch_ExamType) == 2)
                {
                    rbtnSuppl.Checked = true;
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].int_YearOfPassing)))
            {
                ddlYOP.ClearSelection();
                ddlYOP.SelectedValue = Convert.ToString(list[0].int_YearOfPassing);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_RollNo)))
            {
                txtBoardRoll.Text = list[0].vch_RollNo;
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_RollCode)))
            {
                txtRollCode.Text = list[0].vch_RollCode;
            }

            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_ApplicantName)))
            {
                txtApplName.Text = list[0].vch_ApplicantName;
                // txtApplName.Enabled = false;
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_FatherName)))
            {
                txtFatherName.Text = list[0].vch_FatherName;
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_MotherName)))
            {
                txtMotherName.Text = list[0].vch_MotherName;
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].dtm_DOB)))
            {
                ddlDay.ClearSelection();
                ddlMonth.ClearSelection();
                ddlYear.ClearSelection();

                if (Convert.ToInt32(list[0].dtm_DOB.Day) < 10)
                {

                    ddlDay.SelectedValue = "0" + Convert.ToString(list[0].dtm_DOB.Day);
                }
                else
                {
                    ddlDay.SelectedValue = Convert.ToString(list[0].dtm_DOB.Day);
                }
                if (Convert.ToInt32(list[0].dtm_DOB.Month) < 10)
                {
                    ddlMonth.SelectedValue = "0" + Convert.ToString(list[0].dtm_DOB.Month);
                }
                else
                {
                    ddlMonth.SelectedValue = Convert.ToString(list[0].dtm_DOB.Month);
                }

                ddlYear.SelectedValue = Convert.ToString(list[0].dtm_DOB.Year);
            }

            //--------Stream Information
            if (list[0].int_PrevStremID != null)
            {
                if (list[0].int_PrevStremID == 1)
                {
                    rbtArts.Checked = true;
                    strStream = "Arts";

                }

                if (list[0].int_PrevStremID == 2)
                {
                    rbtScience.Checked = true;
                    strStream = "Science";

                }

                if (list[0].int_PrevStremID == 3)
                {
                    rbtCommerce.Checked = true;
                    strStream = "Commerce";

                }

                if (list[0].int_PrevStremID == 4)
                {
                    rbtVocational.Checked = true;
                    strStream = "Vocational";

                }

                if (list[0].int_PrevStremID == 5)
                {
                    rbtDiploma.Checked = true;
                    strStream = "Diploma";

                }

                if (list[0].int_PrevStremID == 6)
                {
                    rbtUpashastri.Checked = true;
                    strStream = "Upashastri";

                }
                if (list[0].int_PrevStremID == 7)
                {
                    rbtnMaulvi.Checked = true;
                    strStream = "Maulvi";

                }

            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].MAXTOTAL)))
            {
                txtMaxMark.Text = Convert.ToString(list[0].MAXTOTAL);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].TOT)))
            {
                txtTotMark.Text = Convert.ToString(list[0].TOT);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].ENGLISH)))
            {
                txtEnglish.Text = Convert.ToString(list[0].ENGLISH);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].MATH)))
            {
                txtMathematics.Text = Convert.ToString(list[0].MATH);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].MIL)))
            {
                txtMath.Text = Convert.ToString(list[0].MIL);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].CHEMISTRY)))
            {
                txtScience.Text = Convert.ToString(list[0].CHEMISTRY);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].BIOLOGY)))
            {
                txtBiology.Text = Convert.ToString(list[0].BIOLOGY);
            }

            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_Compartmental)))
            {
                if (Convert.ToInt32(list[0].bit_Compartmental) == 0)
                {
                    rbtCompartmentalN.Checked = true;
                    strCompartmentStatus = "Flase";
                }
                else if (Convert.ToInt32(list[0].bit_Compartmental) == 1)
                {
                    rbtCompartmentalY.Checked = true;
                    strCompartmentStatus = "True";
                    if (list1.Count > 0)
                    {
                        txtCompSubject1.Text = list1[0].vch_SubjectName;
                        txtCompFMark1.Text = list1[0].FailMark;
                        txtCompPMark1.Text = list1[0].PassMark;
                        if (list1.Count > 1)
                        {
                            txtCompSubject2.Text = list1[1].vch_SubjectName;
                            txtCompFMark2.Text = list1[1].FailMark;
                            txtCompPMark2.Text = list1[1].PassMark;
                        }
                        if (list1.Count > 2)
                        {
                            txtCompSubject3.Text = list1[2].vch_SubjectName;
                            txtCompFMark3.Text = list1[2].FailMark;
                            txtCompPMark3.Text = list1[2].PassMark;
                        }
                    }

                }
            }

            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_LastInstitute)))
            {
                txtschname.Text = Convert.ToString(list[0].vch_LastInstitute);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_LastInst_Location)))
            {
                txtschloc.Text = Convert.ToString(list[0].vch_LastInst_Location);
            }

            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_LastInst_Location)))
            {
                txtschloc.Text = Convert.ToString(list[0].vch_LastInst_Location);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].LastInstDist)))
            {
                if (Convert.ToInt32(list[0].LastInstDist) == 0)
                {
                    txtdist.Text = list[0].LastInst_District;
                }
                else
                {

                    ddlinstDistrict.ClearSelection();
                    string strinsdist = Convert.ToString(list[0].LastInstDist);
                    ddlinstDistrict.Items.FindByValue(strinsdist).Selected = true;
                }

            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].int_YearOfJoining)))
            {
                ddlYOJ.ClearSelection();
                ddlYOJ.SelectedValue = Convert.ToString(list[0].int_YearOfJoining);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].int_YearOfLeaving)))
            {
                ddlYOL.ClearSelection();
                ddlYOL.SelectedValue = Convert.ToString(list[0].int_YearOfLeaving);
            }

            if (!string.IsNullOrEmpty(Convert.ToString(list[0].BloodGrId)))
            {
                ddlBloodGroup.ClearSelection();
                ddlBloodGroup.SelectedValue = Convert.ToString(list[0].BloodGrId);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].int_Gender)))
            {
                ddlGender.ClearSelection();
                ddlGender.SelectedValue = Convert.ToString(list[0].int_Gender);
                // ddlGender.Enabled = false;
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].ReligionId)))
            {
                ddlReligion.ClearSelection();
                ddlReligion.SelectedValue = Convert.ToString(list[0].ReligionId);
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

            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_CorHouseNo)))
            {
                txtCPS.Text = Convert.ToString(list[0].vch_CorHouseNo);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_CorPinCode)))
            {
                txtCPC.Text = Convert.ToString(list[0].vch_CorPinCode);
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_CorPhoneNo)))
            {
                if (list[0].vch_CorPhoneNo != "-")
                {
                    string[] CorPhNo = list[0].vch_CorPhoneNo.Split('-');
                    txtCTCode.Text = CorPhNo[0];
                    txtCTeleNo.Text = CorPhNo[1];
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_CorMobileNo)))
            {
                txtCMobNo.Text = Convert.ToString(list[0].vch_CorMobileNo);
                txtCMobNo.Enabled = false;
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vch_EMailID)))
            {
                txtCEmail.Text = Convert.ToString(list[0].vch_EMailID);
            }

            if (!string.IsNullOrEmpty(Convert.ToString(list[0].int_CategoryId)))
            {
                if (list[0].int_CategoryId == 2)
                {
                    rbtSC.Checked = true;
                    strCategory1 = "2";
                }
                if (list[0].int_CategoryId == 3)
                {
                    rbtST.Checked = true;
                    strCategory1 = "3";
                }
                if (list[0].int_CategoryId == 4)
                {
                    rbtnOBC.Checked = true;
                    strCategory1 = "4";
                }
                if (list[0].int_CategoryId == 1)
                {
                    rbtGeneral.Checked = true;
                    strCategory1 = "1";
                }
                if (list[0].int_CategoryId == 5)
                {
                    rbtOther.Checked = true;
                    strCategory1 = "5";
                }
                if (list[0].int_CategoryId == 6)
                {
                    rbtBCW.Checked = true;
                    strCategory1 = "6";
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_PHOH)))
            {
                if (list[0].bit_PHOH)
                {
                    chkPHOHY.Checked = true;
                }
                else
                {
                    chkPHOHN.Checked = true;
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_ESM)))
            {
                if (list[0].bit_ESM)
                {
                    rbtESM.Checked = true;
                    strCategory2 = "2";
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_SDP)))
            {
                if (list[0].bit_SDP)
                {
                    rbtSDP.Checked = true;
                    strCategory2 = "1";
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_CoM)))
            {
                if (list[0].bit_CoM)
                {
                    rbtCoM.Checked = true;
                    strCategory2 = "3";
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_NCC_B)))
            {
                if (list[0].bit_NCC_B)
                {
                    chkNCCA.Checked = true;
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_NCC_C)))
            {
                if (list[0].bit_NCC_C)
                {
                    chkNCCC.Checked = true;
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_NSS_U)))
            {
                if (list[0].bit_NSS_U)
                {
                    chkNssU.Checked = true;
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_NSS_S)))
            {
                if (list[0].bit_NSS_S)
                {
                    chkNssS.Checked = true;
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_NSS_N)))
            {
                if (list[0].bit_NSS_N)
                {
                    chkNssN.Checked = true;
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_NSS_IN)))
            {
                if (list[0].bit_NSS_IN)
                {
                    chkNssIN.Checked = true;
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_Sports_S)))
            {
                if (list[0].bit_Sports_S)
                {
                    chkSportsS.Checked = true;
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_Sports_N)))
            {
                if (list[0].bit_Sports_N)
                {
                    chkSportsN.Checked = true;
                }
            }
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].bit_Sports_IN)))
            {
                if (list[0].bit_Sports_IN)
                {
                    chkSportsIN.Checked = true;
                }
            }

            if (!string.IsNullOrEmpty(Convert.ToString(list[0].int_MarkVerfication)))
            {
                if (list[0].int_MarkVerfication == 1)
                {

                    hdnMarkVerification.Value = "1";
                }
                else
                {

                    hdnMarkVerification.Value = "0";
                }
            }
            //===================================================== Bind Photo
            string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].vchImageName)))
            {
                //Directory.GetFiles(pth)
                hdnImgAppl.Value = list[0].vchImageName;
                // ImgAppl.ImageUrl = pthview + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES" + "/" + list[0].CorBlockId.ToString() + "/" + list[0].vchImageName;
                ImgAppl.ImageUrl = "~/DownloadImage.ashx?clsid=2&id=" + list[0].CorBlockId.ToString() + "/" + list[0].vchImageName;
            }


            //================Read only Fields
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].int_AutoValidateStatus)))
            {
                if (list[0].int_AutoValidateStatus == 1)
                {

                    ddlYOP.Enabled = false;
                    rbtnAnnual.Enabled = false;
                    rbtnSuppl.Enabled = false;

                    //ddlDay.Enabled = false;
                    //ddlMonth.Enabled = false;
                    //ddlYear.Enabled = false;

                    txtBoardRoll.Enabled = false;
                    txtRollCode.Enabled = false;
                    txtApplName.Enabled = false;
                    txtFatherName.Enabled = false;
                    txtMotherName.Enabled = false;

                    //=stream details
                    rbtArts.Enabled = false;
                    rbtScience.Enabled = false;
                    rbtCommerce.Enabled = false;
                    rbtVocational.Enabled = false;
                    rbtDiploma.Enabled = false;
                    rbtUpashastri.Enabled = false;
                    rbtnMaulvi.Enabled = false;
                    //=====mark details
                    txtMaxMark.Enabled = false;
                    txtTotMark.Enabled = false;
                    txtEnglish.Enabled = false;
                    txtMath.Enabled = false;
                    txtScience.Enabled = false;
                    txtMathematics.Enabled = false;
                    txtBiology.Enabled = false;

                    ddlinstDistrict.Enabled = false;
                    txtschname.Enabled = false;
                    txtdist.Enabled = false;
                    ddlYOL.Enabled = false;

                    //=====Compartmentally details
                    rbtCompartmentalN.Enabled = false;
                    rbtCompartmentalY.Enabled = false;

                    if (rbtCompartmentalY.Checked)
                    {
                        if (txtCompSubject1.Text.Trim() != "")
                        {
                            txtCompSubject1.Enabled = false;
                            txtCompFMark1.Enabled = false;
                            txtCompPMark1.Enabled = false;

                        }
                        if (txtCompSubject2.Text.Trim() != "")
                        {
                            txtCompSubject2.Enabled = false;
                            txtCompFMark2.Enabled = false;
                            txtCompPMark2.Enabled = false;
                        }
                        if (txtCompSubject3.Text.Trim() != "")
                        {
                            txtCompSubject3.Enabled = false;
                            txtCompFMark3.Enabled = false;
                            txtCompPMark3.Enabled = false;
                        }

                    }
                }
            }
            //===== Disable mark details for all type of board on 20th July 2018
            //if (Convert.ToInt32(hdnRejectStatus.Value) == 1)
            //{
            //    txtMaxMark.Enabled = false;
            //    txtTotMark.Enabled = false;
            //    txtEnglish.Enabled = false;
            //    txtMath.Enabled = false;
            //    txtScience.Enabled = false;
            //    txtMathematics.Enabled = false;
            //    txtBiology.Enabled = false;

            //}


        }

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
        //ddlMt.Items.Insert(0, new ListItem { Text = "-Select-", Value = "0" });

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
        //ddlCState.Items.Insert(0, new ListItem { Text = "-Select-", Value = "0" });

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
        // ddlinstDistrict.Items.Insert(31, "OTHER");
        //ddlinstDistrict.Items.Add(new ListItem["OTHER", 31]);
    }


    //[WebMethod()]
    //public static dynamic fillCHSEMark(string vchRollNo, int intYear, string RollCode)
    //{

    //    List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
    //    CAFEntity_Deg obj = new CAFEntity_Deg();

    //    try
    //    {
    //        obj.vchRollNo = vchRollNo;
    //        obj.Year = Convert.ToInt32(intYear);
    //        obj.vch_RollCode = RollCode;
    //        using (MngtStudentBusinessClient client = new MngtStudentBusinessClient())
    //        {
    //            list = client.FillCHSEMark(obj);
    //        }
    //    }
    //    catch (Exception ex)
    //    {
    //    }
    //    finally { }
    //    return list;
    //}

    #region Check Email Id
    [WebMethod()]
    public static dynamic ChkEmailStatus(string vchEmail)
    {
        CommonClass ccobj = new CommonClass();
        List<ChkStatusDeg> list = new List<ChkStatusDeg>();
        ChkStatusDeg obj = new ChkStatusDeg();

        try
        {
           
                obj.Action = "E";
                obj.vch_EMailID = vchEmail;
                list = ccobj.chkStatusDeg(obj);
            
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
    protected void btnSave_Click(object sender, System.EventArgs e)
    {
        try
        {
            if (Session["CSRFRandNum"].ToString() == hdnCSRFRandNum.Value)
            {
                if (IsValid())
                {
                    if (Convert.ToInt32(hdnValidateStatus.Value) == 1)
                    {
                        AddCAFData("VU");
                    }
                    else
                    {
                        AddCAFData("U");
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
                    vchModuleName = "Update_CSRF"
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
    protected void AddCAFData(string strAction)
    {
        CAFEntity_Deg ObjPAS = new CAFEntity_Deg();
        string strPass = "";
        string strResult = "";

        int intApplID = 0;
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
            else
            {
                ObjPAS.ExamType = "2";
            }

            ObjPAS.pintYOP = Convert.ToInt32(ddlYOP.SelectedValue);
            ObjPAS.RollNo = txtBoardRoll.Text.Trim().ToString();
            ObjPAS.vchrollcode = txtRollCode.Text.Trim().ToString();
            ObjPAS.pintTotOpt = 0;
            // Will Be Added Later
            ObjPAS.ApplicantName = txtApplName.Text.ToString().Trim().ToUpper();
            ObjPAS.FatherName = txtFatherName.Text.Trim().ToUpper();
            ObjPAS.MotherName = txtMotherName.Text.Trim().ToUpper();
            ObjPAS.AdharNo = "";// lblAdharNo.Text.Trim();
            ObjPAS.CorStateId = Convert.ToInt32(ddlCState.SelectedValue);
            ObjPAS.CorDistId = Convert.ToInt32(ddlCDist.SelectedValue);
            ObjPAS.CorBlockId = Convert.ToInt32(ddlCBlock.SelectedValue);
            ObjPAS.CorHouseNo = txtCPS.Text.Trim().ToUpper();
            ObjPAS.CorPinCode = txtCPC.Text.Trim();
            ObjPAS.CorPhNo = txtCTCode.Text.Trim() + "-" + txtCTeleNo.Text.Trim();
            ObjPAS.CorMobileNo = txtCMobNo.Text.Trim();
            ObjPAS.EmailId = txtCEmail.Text.Trim();
            ObjPAS.PerStateId = Convert.ToInt32(ddlCState.SelectedValue);
            ObjPAS.PerDistId = Convert.ToInt32(ddlCDist.SelectedValue);
            ObjPAS.PerBlockId = Convert.ToInt32(ddlCBlock.SelectedValue);
            ObjPAS.PerHouseNo = txtCPS.Text.Trim().ToUpper();
            ObjPAS.PerPinCode = txtCPC.Text.Trim();
            ObjPAS.PerPhNo = txtCTCode.Text.Trim() + "-" + txtCTeleNo.Text.Trim();
            ObjPAS.PerMobileNo = txtCMobNo.Text.Trim();

            ObjPAS.AcNo = "";
            ObjPAS.IFSC = "";
            ObjPAS.MICR = "";
            ObjPAS.BankName = "";
            ObjPAS.BrName = "";

            ObjPAS.AIncome = "0";// strAIncome.Value.Split('~')[0].ToString();
            ObjPAS.strLastInstDist = txtschname.Text.TrimEnd().TrimStart();
            ObjPAS.Nationality = ddlNationality.SelectedValue;
            ObjPAS.MotherTongue = ddlMt.SelectedValue;
            ObjPAS.FathersOccup = "";// strFocu.Value.Split('~')[0];
            ObjPAS.MothersOccup = "";// strMocu.Value.Split('~')[0];
            ObjPAS.LastInst = txtschname.Text.TrimEnd().TrimStart();
            ObjPAS.LastInstLoc = txtschloc.Text.TrimEnd().TrimStart();

            if (ddlinstDistrict.SelectedValue == "0")
            {
                ObjPAS.LastInstDist = 0;
                ObjPAS.LIDistName = txtdist.Text; ;
            }
            else
            {

                ObjPAS.LIDistName = "";
                ObjPAS.LastInstDist = Convert.ToInt32(ddlinstDistrict.SelectedValue);


            }

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


            if (chkSportsS.Checked)
            {
                ObjPAS.SportsS = true;
            }
            else
            {
                ObjPAS.SportsS = false;
            }

            if (chkSportsN.Checked)
            {
                ObjPAS.SportsN = true;
            }
            else
            {
                ObjPAS.SportsN = false;
            }

            if (chkSportsIN.Checked)
            {
                ObjPAS.SportsIN = true;
            }
            else
            {
                ObjPAS.SportsIN = false;
            }

            ObjPAS.OSA = false;

            ObjPAS.OLNS = false;

            // ==============for NSS Camp===========
            if (chkNssU.Checked)
            {
                ObjPAS.bitNssU = true;
            }
            else
            {
                ObjPAS.bitNssU = false;
            }

            if (chkNssS.Checked)
            {
                ObjPAS.bitNssS = true;
            }
            else
            {
                ObjPAS.bitNssS = false;
            }

            if (chkNssN.Checked)
            {
                ObjPAS.bitNssN = true;
            }
            else
            {
                ObjPAS.bitNssN = false;
            }

            if (chkNssIN.Checked)
            {
                ObjPAS.bitNssIN = true;
            }
            else
            {
                ObjPAS.bitNssIN = false;
            }

            // =====================================
            ObjPAS.BloodGrId = Convert.ToInt32(ddlBloodGroup.SelectedValue);
            ObjPAS.ReligionId = Convert.ToInt32(ddlReligion.SelectedValue);
            ObjPAS.GENDER = Convert.ToInt32(ddlGender.SelectedValue);
            //ObjPAS.DOB = ddlDay.SelectedValue + "-" + ddlMonth.SelectedValue + "-" + ddlYear.SelectedValue;
            ObjPAS.DOB = ddlMonth.SelectedValue + "-" + ddlDay.SelectedValue + "-" + ddlYear.SelectedValue;

            if (txtEnglish.Text != "")
            {
                ObjPAS.MarkSL = Convert.ToInt32(txtEnglish.Text);
            }
            else
            {
                ObjPAS.MarkSL = 0;
            }

            if (txtMath.Text != "")
            {
                ObjPAS.MarkMath = Convert.ToInt32(txtMath.Text);
            }
            else
            {
                ObjPAS.MarkMath = 0;
            }

            ObjPAS.Totalmark = Convert.ToInt32(txtTotMark.Text);
            ObjPAS.MaxMark = Convert.ToInt32(txtMaxMark.Text);
            if (rbtArts.Checked)
            {
                ObjPAS.StreamID = 1;
                ObjPAS.MarkScience = 0;
                ObjPAS.MarkSocialStudies = 0;
                ObjPAS.MATH = 0;
            }

            if (rbtScience.Checked)
            {
                ObjPAS.StreamID = 2;
                ObjPAS.MarkScience = Convert.ToInt32(txtScience.Text);
                if (txtBiology.Text != "")
                {
                    ObjPAS.MarkSocialStudies = Convert.ToInt32(txtBiology.Text);
                }
                else
                {
                    ObjPAS.MarkSocialStudies = 0;
                }

                if (txtMathematics.Text != "")
                {
                    ObjPAS.MATH = Convert.ToInt32(txtMathematics.Text);
                }
                else
                {
                    ObjPAS.MATH = 0;
                }

            }

            if (rbtCommerce.Checked)
            {
                ObjPAS.StreamID = 3;
                ObjPAS.MarkScience = 0;
                ObjPAS.MarkSocialStudies = 0;
                ObjPAS.MATH = 0;
            }

            if (rbtVocational.Checked)
            {
                ObjPAS.StreamID = 4;
                if (txtScience.Text != "")
                {
                    ObjPAS.MarkScience = Convert.ToInt32(txtScience.Text);
                }
                else
                {
                    ObjPAS.MarkScience = 0;
                }

                if (txtBiology.Text != "")
                {
                    ObjPAS.MarkSocialStudies = Convert.ToInt32(txtBiology.Text);
                }
                else
                {
                    ObjPAS.MarkSocialStudies = 0;
                }

                if (txtMathematics.Text != "")
                {
                    ObjPAS.MATH = Convert.ToInt32(txtMathematics.Text);
                }
                else
                {
                    ObjPAS.MATH = 0;
                }

            }

            if (rbtDiploma.Checked)
            {
                ObjPAS.StreamID = 5;
                if (txtScience.Text != "")
                {
                    ObjPAS.MarkScience = Convert.ToInt32(txtScience.Text);
                }
                else
                {
                    ObjPAS.MarkScience = 0;
                }

                if (txtBiology.Text != "")
                {
                    ObjPAS.MarkSocialStudies = Convert.ToInt32(txtBiology.Text);
                }
                else
                {
                    ObjPAS.MarkSocialStudies = 0;
                }

                if (txtMathematics.Text != "")
                {
                    ObjPAS.MATH = Convert.ToInt32(txtMathematics.Text);
                }
                else
                {
                    ObjPAS.MATH = 0;
                }

            }

            if (rbtUpashastri.Checked)
            {
                ObjPAS.StreamID = 6;
                ObjPAS.MarkScience = 0;
                ObjPAS.MarkSocialStudies = 0;
                ObjPAS.MATH = 0;
            }
            if (rbtnMaulvi.Checked)
            {
                ObjPAS.StreamID = 7;
                ObjPAS.MarkScience = 0;
                ObjPAS.MarkSocialStudies = 0;
                ObjPAS.MATH = 0;
            }

            // =====================Mark verification===========
            if (hdnMarkVerification.Value == "1")
            {
                if (rbtMarkVerifiedYCpy.Checked)
                {
                    ObjPAS.MarkVerification = 1;
                }
                else
                {
                    ObjPAS.MarkVerification = 2;
                }

            }
            else
            {
                ObjPAS.MarkVerification = 0;
            }

            // =====================================
            if (rbtCompartmentalY.Checked)
            {
                ObjPAS.Compartmental = true;
            }
            else
            {
                ObjPAS.Compartmental = false;
            }

            ObjPAS.YearOfJoining = Convert.ToInt32(ddlYOJ.SelectedValue);
            ObjPAS.YearOfLeaving = Convert.ToInt32(ddlYOL.SelectedValue);
            string strPMark = "";
            string strSubject = "";
            string strFMark = "";

            if (txtCompSubject1.Text != "")
            {
                strSubject = txtCompSubject1.Text + "~";
                strPMark = txtCompPMark1.Text + "~";
                strFMark = txtCompFMark1.Text + "~";
            }

            if (txtCompSubject2.Text != "")
            {
                strSubject = strSubject + txtCompSubject2.Text + "~";
                strPMark = strPMark + txtCompPMark2.Text + "~";
                strFMark = strFMark + txtCompFMark2.Text + "~";
            }

            if (txtCompSubject3.Text != "")
            {
                strSubject = strSubject + txtCompSubject3.Text + "~"; ;
                strPMark = strPMark + txtCompPMark3.Text + "~"; ;
                strFMark = strFMark + txtCompFMark3.Text + "~"; ;
            }

            ObjPAS.strSubject = strSubject;
            ObjPAS.strFMark = strFMark;
            ObjPAS.strPMark = strPMark;


            if (hdnImgAppl.Value != "")
            {
                ObjPAS.bitImageStatus = true;
            }

           
                strResult = ccobj.AddDegCAFData(ObjPAS);
            

            intRetVal = Convert.ToInt32(strResult.Substring(0, 1));

            if (strResult.Contains("D"))
            {
                string[] strApp = strResult.Trim().Split('D');
                strImageName = strResult.Remove(0, 1);
                intApplID = Convert.ToInt32(strApp[1]);
            }

            // Upload Image
            if (hdnUploadStatus.Value == "1")
            {
                if (!string.IsNullOrEmpty(hdnImgAppl.Value))
                {
                    string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
                    pth = (pth + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES");
                    Directory.GetFiles(pth);
                    string srcName = pth + "\\" + hdnImgAppl.Value;
                    string newPath = System.IO.Path.Combine(pth, ObjPAS.CorBlockId.ToString());

                    if (File.Exists(srcName))
                    {
                        if (!Directory.Exists(newPath))
                        {
                            Directory.CreateDirectory(newPath);
                        }

                        string DestName = newPath + "\\" + strImageName + ".jpg";
                        if (File.Exists(DestName))
                        {
                            File.Delete(DestName);
                        }
                        File.Move(srcName, DestName);
                    }
                }
            }
            else
            {

                if (!string.IsNullOrEmpty(hdnImgAppl.Value))
                {
                    if (hdnOldBlockId.Value != ObjPAS.CorBlockId.ToString())
                    {
                        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
                        pth = (pth + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES");
                        Directory.GetFiles(pth);
                        string srcName = System.IO.Path.Combine(pth, hdnOldBlockId.Value) + "\\" + hdnImgAppl.Value;
                        string newPath = System.IO.Path.Combine(pth, ObjPAS.CorBlockId.ToString());

                        if (File.Exists(srcName))
                        {
                            if (!Directory.Exists(newPath))
                            {
                                Directory.CreateDirectory(newPath);
                            }

                            string DestName = newPath + "\\" + strImageName + ".jpg";
                            if (File.Exists(DestName))
                            {
                                File.Delete(DestName);
                            }
                            File.Move(srcName, DestName);
                        }
                    }
                }
            }

            hdnImgAppl.Value = "";
            hdnUploadStatus.Value = "0";
            string url = "&linkm=" + Request.QueryString["linkm"] + "&linkn=" + Request.QueryString["linkn"] + "&btn=" + Request.QueryString["btn"] + "&tab=" + Request.QueryString["tab"];
            string strmsg = Messages.Message(Convert.ToInt32(strResult.Substring(0, 1)));
            ScriptManager.RegisterStartupScript(btnSave, this.GetType(), "Myalert", "jAlertSubmit('btnSave', '<strong>" + strmsg + "</strong>', 'PersonalInfo_Deg.aspx?" + url + "');", true);
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        finally
        {
            Session["StudNm"] = txtApplName.Text.ToUpper();
            ObjPAS = null;
        }


    }

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
            if (ddlYOP.SelectedValue == "0")
            {
                strMsg = "Please select the name of your Examination Board";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlYOP','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlYOP.Focus();
                return false;
            }
            if (!(rbtnAnnual.Checked) && !(rbtnSuppl.Checked))
            {
                strMsg = "Please Choose Exam Type";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('rbtnAnnual','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                rbtnAnnual.Focus();
                return false;
            }
            if (ddlDay.SelectedValue == "0")
            {
                strMsg = "Please select the Day of your Date of Birth";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlDay','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlYOP.Focus();
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
            if ((YOP - BY) <= 15)
            {
                strMsg = "The difference of age between the birth year and +2 passing year should be greater than 15";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlYear','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                ddlYear.Focus();
                return false;
            }
            if (ddlBoard.SelectedValue == "35")
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
            if (ddlGender.SelectedValue == "0")
            {
                strMsg = "Gender cannot be left blank";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtMotherName','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                txtMotherName.Focus();
                return false;

            }
            if (!(rbtArts.Checked) && !(rbtScience.Checked) && !(rbtCommerce.Checked) && !(rbtVocational.Checked) && !(rbtDiploma.Checked))
            {
                strMsg = "Please check stream in Intermediate Board Exam";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('rbtArts','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                rbtArts.Focus();
                return false;
            }
            if (hdnImgAppl.Value == "")
            {
                strMsg = "Please Upload your photo !";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('hdnImgAppl','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);

                return false;
            }
            if (rbtArts.Checked)
            {
                if (hdnAppliedStreams.Value != "" && hdnAppliedStreams.Value != "0")
                {
                    if (hdnAppliedStreams.Value.Contains("2"))
                    {
                        strMsg = "You can not apply for Arts stream because you have given option for Science stream.";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('rbtArts','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        return false;
                    }
                    if (hdnAppliedStreams.Value.Contains("3"))
                    {
                        strMsg = "You can not apply for Arts stream because you have given option for Commerce stream.";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('rbtArts','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        return false;
                    }
                }
            }
            if (rbtCommerce.Checked)
            {
                if (hdnAppliedStreams.Value != "" && hdnAppliedStreams.Value != "0")
                {
                    if (hdnAppliedStreams.Value.Contains("2"))
                    {
                        strMsg = "You can not apply for Commerce stream because you have given option for Science stream.";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('rbtArts','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        return false;
                    }

                }
            }
            if (hdnAppliedColleges.Value != "" && hdnAppliedColleges.Value != "0")
            {
                if (Convert.ToInt32(ddlGender.SelectedValue) == 1 || Convert.ToInt32(ddlGender.SelectedValue) == 3)
                {
                    if (hdnAppliedColleges.Value.Contains("4"))
                    {
                        strMsg = "You must need to delete all selected women college option first and then change your gender and then you will have to select collge option again.";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        return false;
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

    #region drop down selected index change
    protected void ddlCState_SelectedIndexChanged(object sender, EventArgs e)
    {

        try
        {
            ddlCBlock.Items.Clear();
            ddlCBlock.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
            ddlCDist.Items.Clear();
            ddlCDist.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });

            getDistrict(Convert.ToInt32(ddlCState.SelectedValue));
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

    }

    protected void ddlCDist_SelectedIndexChanged(object sender, EventArgs e)
    {

        try
        {

            ddlCBlock.Items.Clear();
            ddlCBlock.Items.Insert(0, new ListItem { Text = "--SELECT--", Value = "0" });
            getBlock(Convert.ToInt32(ddlCDist.SelectedValue));
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }

    }
    protected void ddlGender_SelectedIndexChanged(object sender, EventArgs e)
    {
        string strMsg = "";
        try
        {
            if (hdnAppliedColleges.Value != "" && hdnAppliedColleges.Value != "0")
            {
                if (Convert.ToInt32(ddlGender.SelectedValue) == 1 || Convert.ToInt32(ddlGender.SelectedValue) == 3)
                {
                    if (hdnAppliedColleges.Value.Contains("4"))
                    {
                        strMsg = "You must need to delete all selected women college option first  and then change your gender and then you will have to select collge option again.";
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('ddlGender','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                        return;
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

    protected void txtCEmail_TextChanged(object sender, EventArgs e)
    {
        if (txtCEmail.Text.Trim() != "")
        {
            List<ChkStatusDeg> list = new List<ChkStatusDeg>();
            list = ChkEmailStatus(txtCEmail.Text);
            if (!string.IsNullOrEmpty(Convert.ToString(list[0].int_EmailStatus)))
            {
                if (Convert.ToInt32(list[0].int_EmailStatus) > 0)
                {
                    string strMsg = "This E-mail ID already Registered. Please enter another E-mail ID.";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "jAlert('txtCEmail','<strong>" + strMsg + "</strong>','" + strMsgTitle + "');", true);
                    txtCEmail.Focus();
                    return;
                }
            }
        }
    }
}