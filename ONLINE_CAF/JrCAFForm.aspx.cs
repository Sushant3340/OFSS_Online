//' File Name             :   JrCAFForm.aspx.cs
//' Description           :   User addmission page
//' Created by            :   Sasmita Maharana
//' Created On            :   21-11-2017
//' Modification History   :
//'                        <CR no.>    <Date>      <Modified by>  < Modification Summary>   <instructed by>    '                                      
//' Function Name         : FillHierarchy for dllcolloge dllblock dlldistrict
//' Procedures Used       : SP_CIIP_BUILDINGDETAILS
//' PDK function          : <CR No.>  <PDK Function Name>                                                            <Purpose of use of PDK>
//'                             2    fillBuilding(), SaveData() ,CheckVadidation(),CheckAva()         fill building value, save data,serverside validation.checkAvaliablity of record

using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Data;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Configuration;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;
using Amazon;
using Amazon.S3;
using Amazon.S3.Transfer;
using OFSS_OL_Entity;





public partial class ONLINE_CAF_JrCAFForm : System.Web.UI.Page
{
   

    CommonClass ccobj = new CommonClass();
    CAFDAL ccobjcaf = new CAFDAL();

    #region OnInit
    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        //ViewStateUserKey = Session.SessionID;
    }
    #endregion

    #region Variable
    //int intRetVal;
    //string strImageName = "";

    public string strOSAStatus = "False";
    public string strOLNSStatus = "False";
    public string strCompartmentStatus = "False";
    public string strBoard = "";
    public string strState = "";
    public string strCollege = "";
    public string strCategory1 = "";
    public string strCategory2 = "";
    public string strCBSE = "False";

    string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
    #endregion

    protected void Page_Load(object sender, EventArgs e)
    {
       
        //Response.CacheControl = "no-cache";
        //Response.Cache.SetCacheability(HttpCacheability.NoCache);

        //Response.Write("<script>document.location.href=\'https://online.ofssbihar.in/CAFClosedJr.html\';</script>");

        //#region This region code is used to avoid unauthorized entry of CAF application while testing in OFSS live server. Need to remove the code before go live.

        try
        {

            if (!(Request.QueryString["open"] != null && Request.QueryString["open"] == "2293"))
            {
                List<CommonModels.CAFEntity> list = new List<CommonModels.CAFEntity>();
                list = fillDateline();
                if (list.Count > 0)
                {
                    DateTime lastAppDate = list[0].ToDate;
                    DateTime dtmFromDate = list[0].FromDate;

                    int FromDate = DateTime.Compare(DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59), dtmFromDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                    int ToDate = DateTime.Compare(lastAppDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));

                    if (ToDate >= 0 && FromDate >= 0)
                    {
                        //divDateLine.Visible = false;
                        //divForm.Visible = true;
                        //fillGeneralInformation(Session["StudID"].ToString());


                    }
                    else
                    {
                        Response.Write("<script>document.location.href=\'http://online.ofssbihar.org/CAFClosedJr.html\';</script>");
                    }
                }
                else
                {
                    Response.Write("<script>document.location.href='http://online.ofssbihar.org/CAFClosedJr.html\';</script>");
                }

            }

            if (ConfigurationManager.AppSettings["AppInstance"] != null && !string.IsNullOrEmpty(ConfigurationManager.AppSettings["AppInstance"].ToString()) && string.Equals(ConfigurationManager.AppSettings["AppInstance"].ToString(), "staging", StringComparison.OrdinalIgnoreCase))
            {
                StringBuilder sb = new StringBuilder();
                sb.Append("<script type = 'text/javascript'>");
                sb.Append("ShowStagingPopUp();");
                sb.Append("</script>");
                ClientScript.RegisterClientScriptBlock(GetType(), "popupview", sb.ToString());
            }
            else
            {
                // divStaging.Visible = false;
            }

            //#endregion


            if (!IsPostBack)
            {
                btnSave.Text = "आवेदन शुल्क " + ConfigurationManager.AppSettings["FeeAmt_Jr"].ToString() + " रूपए  जमा करने हेतु यहाँ क्लिक करें | Please click here to deposit the application fee of Rs. " + ConfigurationManager.AppSettings["FeeAmt_Jr"].ToString() + ". ";
                fillBoard();


                FillDate(ddlDay, ddlMonth, ddlYear);
                fillAddressState();
                fillOSAState();
                fillOLNS();
                fillCompartmental();
                getInsDistrict(1);
                ddlNationality.SelectedValue = "1";
                ddlMt.SelectedValue = "3";
                //ddlCState.SelectedValue = "1";

                if (HttpContext.Current.Items["Board"] != null)
                {
                    viewPreviousData();
                    AutoValidateDisable();
                    HideShowMainControls();//added by Ritika Lath on 15th April 2020
                }
                else
                {
                    ddlBoard.ClearSelection();
                    ddlBoard.SelectedValue = "109";
                }

            }
            clientSideMethod();
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "JrCAFForm");
        }
    }

    //added by Ritika Lath on 15th April 2020
    private void HideShowMainControls()
    {
        if (ddlBoard.SelectedIndex > 0 && ddlBoard.SelectedValue == "109")
        {
            ddlBoard.Attributes.Add("style", "display:none;");
            ddlYOP.Attributes.Add("style", "display:none;");
            rbtnAnnual.Attributes.Add("style", "display:none;");
            rbtnSuppl.Attributes.Add("style", "display:none;");
            ddlDay.Attributes.Add("style", "display:none;");
            ddlMonth.Attributes.Add("style", "display:none;");
            ddlYear.Attributes.Add("style", "display:none;");
            txtRollCode.Attributes.Add("style", "display:none;");
            txtBoardRoll.Attributes.Add("style", "display:none;");

            lblBoardVal.Attributes.Add("style", "");
            lblYopVal.Attributes.Add("style", "");
            lblExamtypeVal.Attributes.Add("style", "");
            lblDOBVal.Attributes.Add("style", "");
            lblRollCodeVal.Attributes.Add("style", "");
            lblRollNoVal.Attributes.Add("style", "");

            lblBoardVal.Text = ddlBoard.SelectedItem.Text;
            lblYopVal.Text = ddlYOP.SelectedItem.Text;
            lblExamtypeVal.Text = rbtnAnnual.Checked ? "Annual" : "Compartmental";
            lblDOBVal.Text = ddlDay.SelectedItem.Text + "-" + ddlMonth.SelectedItem.Text + "-" + ddlYear.SelectedItem.Text;
            lblRollCodeVal.Text = txtRollCode.Text;
            lblRollNoVal.Text = txtBoardRoll.Text;

            ddlinstDistrict.Attributes.Add("style", "display:none;");
            lblSchoolDistrict.Text = ddlinstDistrict.SelectedItem.Text;
            ddlYOL.Attributes.Add("style", "display:none;");
            lblyearOfLeaving.Text = ddlYOL.SelectedItem.Text;
            lblSchoolDistrict.Attributes.Add("style", "");
            lblyearOfLeaving.Attributes.Add("style", "");
        }
    }

    protected List<CommonModels.CAFEntity> fillDateline()
    {
        DateTime lastDt = DateTime.Today;
        List<CommonModels.CAFEntity> list = new List<CommonModels.CAFEntity>();
        CommonModels.CAFEntity obj = new CommonModels.CAFEntity();

        try
        {
            obj.Action = "AC";

           
                list = ccobj.FillCAF(obj);
                lastDt = list[0].ToDate;

            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
        finally
        {
            obj = null;
        }
        return list;
    }

    #region "Display Data"
    protected void viewPreviousData()
    {
        //===============Local Variables==========
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
        string[] strEng = null;
        string[] strMath = null;
        string[] strSci = null;
        string[] strSoSci = null;
        string[] strGrade = null;
        //string[] strsportsLevel = null;
        //string[] strCommunity = null;
        string[] strnat = null;
        string[] strmt = null;
        string[] strFocu = null;
        string[] strMocu = null;
        string[] stryoj = null;
        string[] stryol = null;
        string[] strAincome = null;
        string[] strinsdist = null;
        try
        {
            rbtnNo.Checked = true;
            cbAgree1.Checked = true;
            cbAgree2.Checked = true;

            hdnValidateSts.Value = HttpContext.Current.Items["ValidateSts"].ToString();

            //========================================
            strBoard = HttpContext.Current.Items["Board"].ToString().Split('~');
            txtOtherBoard.Text = HttpContext.Current.Items["OtherBoard"].ToString();
            strBloodGroup = HttpContext.Current.Items["Bgroup"].ToString().Split('~');
            strReligion = HttpContext.Current.Items["Religion"].ToString().Split('~');
            strGender = HttpContext.Current.Items["Sex"].ToString().Split('~');
            strState = HttpContext.Current.Items["State"].ToString().Split('~');
            strDist = HttpContext.Current.Items["Dist"].ToString().Split('~');
            strBlock = HttpContext.Current.Items["Block"].ToString().Split('~');
            strPhone = HttpContext.Current.Items["Phone"].ToString().Split('-');
            //strOSA = HttpContext.Current.Items["OSAState"].ToString().Split('~');
            //strOLNS = HttpContext.Current.Items["OLNSState"].ToString().Split('~');
            strDob = HttpContext.Current.Items["DOB"].ToString().Split('-');
            strnat = HttpContext.Current.Items["Nationality"].ToString().Split('~');
            strmt = HttpContext.Current.Items["MT"].ToString().Split('~');
            //strFocu = HttpContext.Current.Items["Focu"].ToString().Split('~');
            //strMocu = HttpContext.Current.Items["Mocu"].ToString().Split('~');
            stryoj = HttpContext.Current.Items["YOJ"].ToString().Split('~');
            stryol = HttpContext.Current.Items["YOL"].ToString().Split('~');
            //strAincome = HttpContext.Current.Items["AIncome"].ToString().Split('~');

            if (HttpContext.Current.Items["Aadhaar"].ToString() == "")
            {
                cbAadharAgree.Checked = true;
            }
            txtAadhar.Text = HttpContext.Current.Items["Aadhaar"].ToString();

            if (HttpContext.Current.Items["Idist"] != null)
            {
                strinsdist = HttpContext.Current.Items["Idist"].ToString().Split('~');
                ddlinstDistrict.Items.FindByValue(strinsdist[0]).Selected = true;
                //    ddlinstDistrict.Style.Clear();
                //txtdist.Style.Add("display", "none");
            }


            ddlBoard.Items.FindByValue(strBoard[0]).Selected = true;
            if (strBoard[0] == "109")
            {
                tdRollCdH.Style.Clear();
                tdRollCdF.Style.Clear();
            }
            else
            {
                tdRollCdH.Style.Add("display", "none");
                tdRollCdF.Style.Add("display", "none");
            }

            if (HttpContext.Current.Items["ExamType"].ToString() == "1")
            {
                rbtnAnnual.Checked = true;
                rbtnSuppl.Checked = false;
            }
            else
            {
                rbtnSuppl.Checked = true;
                rbtnAnnual.Checked = false;
            }

            hdnFont.Value = HttpContext.Current.Items["FontOption"].ToString();

            //******************Font Changes************************
            if (hdnFont.Value == "1")
            {
                rbtnEnglish.Checked = true;
                hdnType.Value = "1";
            }
            else if (hdnFont.Value == "2")
            {
                rbtnOriya.Checked = true;
                hdnType.Value = "2";
            }
            ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "EnglishOriyaFont('" + hdnType.Value + "');", true);

            //*********************************************************


            ddlYOP.SelectedValue = HttpContext.Current.Items["YOP"].ToString();
            txtBoardRoll.Text = HttpContext.Current.Items["Roll"].ToString();
            txtRollCode.Text = HttpContext.Current.Items["RollCode"].ToString();
            if (HttpContext.Current.Items["YOP"].ToString() == "2024" && strBoard[0] == "109")
            {
                //tdlblUniqId.Style.Clear();
                //tdtxtuniqueId.Style.Clear();
                tdlblUniqId.Attributes.Add("style", "");
                tdtxtuniqueId.Attributes.Add("style", "");
                lblUniqueId.Attributes.Add("style", "");
                txtUniqueId.Attributes.Add("style", "");
               

                txtUniqueId.Text = HttpContext.Current.Items["UniqueId"].ToString();
            }
            txtApplName.Text = HttpContext.Current.Items["AppName"].ToString().Trim().ToUpper();
            txtFatherName.Text = HttpContext.Current.Items["Fnam"].ToString().Trim().ToUpper();
            txtMotherName.Text = HttpContext.Current.Items["Mname"].ToString().Trim().ToUpper();
            ddlBloodGroup.Items.FindByValue(strBloodGroup[0]).Selected = true;
            ddlGender.SelectedValue = strGender[0];

            // hidGender Used for validation in Juniour_CAF_Hindi.js -- OptionValidation()
            hidGender.Value = strGender[0];

            LoadCollegeIdGenderBase(Convert.ToInt32(strGender[0]));

            ddlReligion.Items.FindByValue(strReligion[0]).Selected = true;
            ddlDay.Items.FindByValue(strDob[0]).Selected = true;
            ddlMonth.Items.FindByText(strDob[1]).Selected = true;
            ddlYear.Items.FindByValue(strDob[2]).Selected = true;

            //added by Ritika lath on 23rd April 2020 to set mother tongue and nationality
            string mtvalue = strmt[0];
            ddlMt.SelectedValue = mtvalue;
            ddlNationality.SelectedValue = strnat[0];



            txtschname.Text = HttpContext.Current.Items["SchName"].ToString().Trim().ToUpper();
            txtschloc.Text = HttpContext.Current.Items["SchLocation"].ToString();


            ddlYOJ.Items.FindByValue(stryoj[0]).Selected = true;
            ddlYOL.Items.FindByValue(stryol[0]).Selected = true;
            ddlCState.Items.FindByValue(strState[0]).Selected = true;
            getDistrict(Convert.ToInt32(strState[0]));
            ddlCDist.Items.FindByValue(strDist[0]).Selected = true;
            getBlock(Convert.ToInt32(strDist[0]));
            ddlCBlock.Items.FindByValue(strBlock[0]).Selected = true;
            txtCPS.Text = HttpContext.Current.Items["Address"].ToString().Trim().ToUpper();
            txtCPC.Text = HttpContext.Current.Items["Pin"].ToString().Trim();
            txtCTCode.Text = strPhone[0].ToString();
            txtCTeleNo.Text = strPhone[1].ToString();
            txtCMobNo.Text = HttpContext.Current.Items["Mobile"].ToString().Trim();
            txtCEmail.Text = HttpContext.Current.Items["Email"].ToString().Trim();

            //'======================Reservation Details========================
            if (HttpContext.Current.Items["Cat1"].ToString() == "5")
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
            else if (HttpContext.Current.Items["Cat1"].ToString() == "4")
            {
                strCategory1 = "4";
            }
            else if (HttpContext.Current.Items["Cat1"].ToString() == "1")
            {
                strCategory1 = "1";

            }
            else if (HttpContext.Current.Items["Cat1"].ToString() == "6")
            {
                strCategory1 = "6";
            }

            //hidCategory Used for validation in Juniour_CAF_Hindi.js -- OptionValidation()
            hidCategory.Value = strCategory1;

            if (HttpContext.Current.Items["PHOH"].ToString() == "1")
            {
                chkPHOHY.Checked = true;
            }
            else
            {
                chkPHOHN.Checked = true;
            }

            if (HttpContext.Current.Items["EWS"].ToString() == "1")
            {
                rbtEWSYes.Checked = true;
            }
            else
            {
                rbtEWSNo.Checked = true;
            }
            if (strCategory1 != "1")
            {
                rbtEWSNo.Enabled = false;
                rbtEWSYes.Enabled = false;
                rbtEWSNo.Checked = true;
            }

            if (HttpContext.Current.Items["SDP"].ToString() == "1")
            {
                strCategory2 = "1";
                rbtSDP.Checked = true;
            }
            else if (HttpContext.Current.Items["ESM"].ToString() == "1")
            {
                strCategory2 = "2";
            }
            else if (HttpContext.Current.Items["COM"].ToString() == "1")
            {
                strCategory2 = "3";
            }
            else
            {
                strCategory2 = "4";
                rbtNon.Checked = true;
            }
            //'=====================Weightage Details==============
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
            if (HttpContext.Current.Items["SCPR"].ToString() == "1")
            {
                chkSCPR.Checked = true;
            }
            else
            {
                chkSCPR.Checked = false;
            }
            if (HttpContext.Current.Items["SCRP"].ToString() == "1")
            {
                chkSCRP.Checked = true;
            }
            else
            {
                chkSCRP.Checked = false;
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

            //================Mark Details================
            if (((strBoard[0] == "46" && Convert.ToInt32(ddlYOP.SelectedValue) >= 2010 && Convert.ToInt32(ddlYOP.SelectedValue) < 2018) || (strBoard[0] == "103" && Convert.ToInt32(ddlYOP.SelectedValue) >= 2012)))
            {
                strCBSE = "True";
                strEng = HttpContext.Current.Items["SLE"].ToString().Split('~');
                strMath = HttpContext.Current.Items["Math"].ToString().Split('~');
                strSci = HttpContext.Current.Items["Science"].ToString().Split('~');
                strSoSci = HttpContext.Current.Items["SocialScience"].ToString().Split('~');
                ddlEng.Items.FindByValue(strEng[0]).Selected = true;
                ddlMath.Items.FindByValue(strMath[0]).Selected = true;
                ddlSc.Items.FindByValue(strSci[0]).Selected = true;
                ddlSoSc.Items.FindByValue(strSoSci[0]).Selected = true;
                txtCGPA.Text = HttpContext.Current.Items["TotMark"].ToString();
            }
            else if (strBoard[0] == "116" && Convert.ToInt32(ddlYOP.SelectedValue) >= 2010)
            {
                strCBSE = "KERALA";
                strEng = HttpContext.Current.Items["SLE"].ToString().Split('~');
                strMath = HttpContext.Current.Items["Math"].ToString().Split('~');
                strSci = HttpContext.Current.Items["Science"].ToString().Split('~');
                strSoSci = HttpContext.Current.Items["SocialScience"].ToString().Split('~');
                strGrade = HttpContext.Current.Items["TotMark"].ToString().Split('~');

                ddlKEnglish.Items.FindByValue(strEng[0]).Selected = true;
                ddlKMath.Items.FindByValue(strMath[0]).Selected = true;
                ddlKScience.Items.FindByValue(strSci[0]).Selected = true;
                ddlKSoSc.Items.FindByValue(strSoSci[0]).Selected = true;
                ddlTGrade.Items.FindByText(strGrade[0]).Selected = true;
            }
            else
            {
                strCBSE = "False";
                txtEnglish.Text = HttpContext.Current.Items["SLE"].ToString();
                txtMath.Text = HttpContext.Current.Items["Math"].ToString();
                txtScience.Text = HttpContext.Current.Items["Science"].ToString();
                txtSocSci.Text = HttpContext.Current.Items["SocialScience"].ToString();
                txtTotMark.Text = HttpContext.Current.Items["TotMark"].ToString();
                txtMaxMark.Text = HttpContext.Current.Items["MaxMark"].ToString();
            }

            //==============Compartmnet Mark Details========
            if (HttpContext.Current.Items["CompartmentStatus"].ToString() == "1")
            {
                strCompartmentStatus = "True";
                strCompSub = HttpContext.Current.Items["Subject"].ToString().Split('~');
                ddlCompSubject1.Items.FindByValue(strCompSub[0]).Selected = true;
                ddlCompSubject2.Items.FindByValue(strCompSub[1]).Selected = true;
                ddlCompSubject3.Items.FindByValue(strCompSub[2]).Selected = true;
                ddlCompSubject4.Items.FindByValue(strCompSub[3]).Selected = true;
                strFailMark = HttpContext.Current.Items["FailMark"].ToString().Split('~');
                txtCompFMark1.Text = strFailMark[0];
                txtCompFMark2.Text = strFailMark[1];
                txtCompFMark3.Text = strFailMark[2];
                txtCompFMark4.Text = strFailMark[3];
                strPassMark = HttpContext.Current.Items["PassMark"].ToString().Split('~');
                txtCompPMark1.Text = strPassMark[0];
                txtCompPMark2.Text = strPassMark[1];
                txtCompPMark3.Text = strPassMark[2];
                txtCompPMark4.Text = strPassMark[3];
            }
            else
            {
                strCompartmentStatus = "False";
            }

            // Validation removed for  CBSE, New Delhi - 46 and  ICSE, New Delhi - 47
            //if ( ddlBoard.SelectedValue == "47" && Convert.ToInt32(ddlYOP.SelectedValue) == 2019)
            //{
            //    HttpContext.Current.Items["MaxMark"] = "";
            //    HttpContext.Current.Items["TotMark"] = "";
            //    txtTotMark.Text = "";
            //    txtMaxMark.Text = "";
            //    txtTotMark.Enabled = false;
            //    txtMaxMark.Enabled = false;
            //}

            //================Option Details=======================

            hidCollege.Value = HttpContext.Current.Items["CollegeIds"].ToString().TrimEnd('~') + "|" + HttpContext.Current.Items["CNames"].ToString().ToString().TrimEnd('~');
            hidStream.Value = HttpContext.Current.Items["StreamIds"].ToString().TrimEnd('~') + "|" + HttpContext.Current.Items["Snames"].ToString().ToString().TrimEnd('~');
            hidComplusory.Value = HttpContext.Current.Items["Compulsory1"].ToString().TrimEnd('~') + "/" + HttpContext.Current.Items["Compulsory2"].ToString().TrimEnd('~') + "/" + HttpContext.Current.Items["Compulsory3"].ToString().TrimEnd('~') + "|" + HttpContext.Current.Items["ComNames1"].ToString().ToString().TrimEnd('~') + "/" + HttpContext.Current.Items["ComNames2"].ToString().ToString().TrimEnd('~') + "/" + HttpContext.Current.Items["ComNames3"].ToString().ToString().TrimEnd('~');
            hidElectives.Value = HttpContext.Current.Items["Elective1"].ToString().TrimEnd('~') + "/" + HttpContext.Current.Items["Elective2"].ToString().TrimEnd('~') + "/" + HttpContext.Current.Items["Elective3"].ToString().TrimEnd('~') + "|" + HttpContext.Current.Items["EleNames1"].ToString().ToString().TrimEnd('~') + "/" + HttpContext.Current.Items["EleNames2"].ToString().ToString().TrimEnd('~') + "/" + HttpContext.Current.Items["EleNames3"].ToString().ToString().TrimEnd('~');
            hidFourthElelectives.Value = HttpContext.Current.Items["FElective1"].ToString().TrimEnd('~') + "|" + HttpContext.Current.Items["FEleNames1"].ToString().ToString().TrimEnd('~');

            // hidHostel.Value = HttpContext.Current.Items["Hostel"].ToString().TrimEnd('~');
            //=====================================================
            // string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();

            //Code added By Kisan Raj 
            if (!string.IsNullOrEmpty(HttpContext.Current.Items["Photo"].ToString()))
            {
                //Image binding on edit
                hdnImgAppl.Value = HttpContext.Current.Items["Photo"].ToString();
                ImgAppl.ImageUrl = hdnImgAppl.Value;//To bind image coming from confirm page
                ViewState["ByteStream"] = HttpContext.Current.Items["ByteStream"]; //Store old image bytestream 
            }

            //------------------KGBAC-----------------------------------
            if (HttpContext.Current.Items["KGBACSts"].ToString() == "1")
            {
                rbtnKGABC.SelectedValue = "1";
            }
            else
            {
                rbtnKGABC.SelectedValue = "2";
            }
        }

        catch (Exception ex) { throw ex; }

    }
    #endregion

    protected void AutoValidateDisable()
    {
        if (hdnValidateSts.Value == "1")
        {
            hdnUniqueId.Value = HttpContext.Current.Items["UniqueId2"].ToString();
            //if (hdnUniqueId.Value != "" && hdnUniqueId.Value != null)
            //{
            //    if (hdnUniqueId.Value != "" && hdnUniqueId.Value != null)
            //    {

            //        txtUniqueId.ReadOnly = true;
            //    }
            //    else
            //    {
            //        txtUniqueId.ReadOnly = false;
            //    }
            //}
            //else
            //{
            //    txtUniqueId.ReadOnly = false;
            //}
            if (hdnUniqueId.Value != "" && hdnUniqueId.Value != null)
            {
                txtUniqueId.ReadOnly = true;
            }
            else
            {
                txtUniqueId.ReadOnly = false;
            }
            txtApplName.ReadOnly = true;
            txtFatherName.ReadOnly = true;
            txtMotherName.ReadOnly = true;
            txtschname.ReadOnly = true;
            txtEnglish.ReadOnly = true;
            txtMath.ReadOnly = true;
            txtScience.ReadOnly = true;
            txtSocSci.ReadOnly = true;
            txtTotMark.ReadOnly = true;
            txtMaxMark.ReadOnly = true;
        }
        else
        {
           
            txtUniqueId.ReadOnly = false;
            txtApplName.ReadOnly = false;
            txtFatherName.ReadOnly = false;
            txtMotherName.ReadOnly = false;
            txtschname.ReadOnly = false;
            txtEnglish.ReadOnly = false;
            txtMath.ReadOnly = false;
            txtScience.ReadOnly = false;
            txtSocSci.ReadOnly = false;
            txtTotMark.ReadOnly = false;
            txtMaxMark.ReadOnly = false;
        }

    }

    #region "Client Side Functions"
    protected void clientSideMethod()
    {
        string strFullPath = pth.Replace(@"\", "-").TrimEnd('-');
        this.ddlCState.Attributes.Add("onchange", "fillDist(" + ddlCState.ClientID + ");RemoveAllOptions('ddlCBlock');");
        this.ddlCDist.Attributes.Add("onchange", "fillBlock(" + ddlCDist.ClientID + ");");
        // this.ddlCollegeDistrict.Attributes.Add("onchange", "RemoveAllOptions('ddlCompulsory');RemoveAllOptions('ddlELE1');RemoveAllOptions('ddlELE2');RemoveAllOptions('ddlELE3');RemoveAllOptions('ddl4thELE1');RemoveAllOptions('ddl4thELE2');RemoveAllOptions('ddl4thELE3');");
        this.ddlCollege.Attributes.Add("onchange", "fillStream(" + ddlCollege.ClientID + ");RemoveAllOptions('ddlELE1');RemoveAllOptions('ddlELE2');RemoveAllOptions('ddlELE3');RemoveAllOptions('ddl4thELE1');");
        //  this.ddlStream.Attributes.Add("onchange", "fillCompulsory1(" + ddlCollege.ClientID + "," + ddlStream.ClientID + ");fillCompulsory2(" + ddlCollege.ClientID + "," + ddlStream.ClientID + ");fillCompulsory3(" + ddlCollege.ClientID + "," + ddlStream.ClientID + ");fillfElective(" + ddlCollege.ClientID + "," + ddlStream.ClientID + ");fillfElective2(" + ddlCollege.ClientID + "," + ddlStream.ClientID + ");fillfElective3(" + ddlCollege.ClientID + "," + ddlStream.ClientID + ");fillfourthElective(" + ddlCollege.ClientID + "," + ddlStream.ClientID + ");"); // ColVacancy();loadCutOffMark('" + strFullPath + "');
        ////this.txtifsc.Attributes.Add("onblur", " isIFSCCode(" + txtifsc.ClientID + ")");
        ////this.ddlAIncome.Attributes.Add("onchange", "isDisplayBankDet(" + ddlAIncome.ClientID + ")");
        this.txtBoardRoll.Attributes.Add("onchange", "BoardMark();");
        this.txtRollCode.Attributes.Add("onchange", "BoardMark();");
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
            throw ex;
            //Server.Transfer("Error.aspx", False)
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
            throw ex;
            //Server.Transfer("Error.aspx", False)
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

    #region osaState
    protected void fillOSAState()
    {
        string strChars = string.Empty;
        DataSet ddlDataSource = new DataSet();
        DataView dvData = new DataView();
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS/MasterXML/M_STATE.xml");
        //ddlDataSource.ReadXml(Server.MapPath("../MasterXML/M_STATE.xml"));
        dvData = ddlDataSource.Tables[0].DefaultView;
        dvData.RowFilter = "vch_StateCode <>1";
        dvData.Sort = "vch_StateName ASC";
        ////ddlOSAState.DataSource = dvData;
        ////ddlOSAState.DataTextField = "vch_StateName";
        ////ddlOSAState.DataValueField = "int_StateID";
        ////ddlOSAState.DataBind();

    }
    #endregion

    #region olns
    protected void fillOLNS()
    {
        DataSet ddlDataSource = new DataSet();
        DataView dvData = new DataView();
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS\\MasterXML/M_STATE.xml");
        //ddlDataSource.ReadXml(Server.MapPath("../MasterXML/M_STATE.xml"));
        dvData = ddlDataSource.Tables[0].DefaultView;
        dvData.RowFilter = "vch_StateCode in (0,2)";
        dvData.Sort = "vch_StateCode,vch_StateName ASC";
        ////ddlOLNSState.DataSource = dvData;
        ////ddlOLNSState.DataTextField = "vch_StateName";
        ////ddlOLNSState.DataValueField = "int_StateID";
        ////ddlOLNSState.DataBind();
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
        ddlDataSource.ReadXml(pth + "SAMS/MasterXML/M_BLOCK.xml");
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
        dvSource.Sort = "vch_DistrictName";
        //'only for orissa
        if (intStateId == 1)
        {
            dvSource.RowFilter = "int_StateID=" + intStateId;
            //'except orisaa
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
        ddlCDist.Items.Add(new ListItem("OTHER", "588"));

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
        ddlinstDistrict.Items.Insert(39, new ListItem("OTHER", "588"));
    }

    protected void ddlCState_SelectedIndexChanged(object sender, EventArgs e)
    {
        ddlCDist.Items.Clear();
        getDistrict(Convert.ToInt32(ddlCState.SelectedValue));
    }

    protected void ddlCDist_SelectedIndexChanged(object sender, EventArgs e)
    {
        ddlCBlock.Items.Clear();
        getBlock(Convert.ToInt32(ddlCDist.SelectedValue));
    }

    protected void fillCollege()
    {
        string strChars = "";
        DataSet ddlDataSource = new DataSet();
        DataView dvSource = default(DataView);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        ddlDataSource.ReadXml(pth + "SAMS/MasterXML/M_COLLEGE.xml");
        //ddlDataSource.ReadXml(Server.MapPath("../MasterXML/M_COLLEGE.xml"));
        dvSource = ddlDataSource.Tables[0].DefaultView;

        ddlCollege.DataSource = dvSource;

        ddlCollege.DataTextField = "Row";
        ddlCollege.DataValueField = "int_CollegeID";
        ddlCollege.DataBind();

        //'===========Assigning values to a string================
        int i = 0;
        for (i = 0; i <= ddlDataSource.Tables[0].Rows.Count - 1; i++)
        {
            if (!string.IsNullOrEmpty(strChars))
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

    #region "get Elective Subjects"
    protected void getElectives1(string intCollegeID, string intStreamId, DropDownList ddlElective1)
    {
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
            obj.Type = 2;
            obj.vch_CollegeName = intCollegeID;
            obj.vch_StreamName = intStreamId;
            
                list = ccobjcaf.getSubject(obj);
            
            if (list != null && list.Count >= 1)
            {
                ddlElective1.DataSource = list;
                ddlElective1.DataValueField = "int_SubjectID";
                ddlElective1.DataTextField = "vch_SubjectName";
                ddlElective1.DataBind();
            }
        }
        catch (Exception ex)
        { throw ex; }
        finally
        { list.Clear(); }
    }
    protected void getElectives2(string intCollegeID, string intStreamId, DropDownList ddlElective2)
    {
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
            obj.Type = 8;
            obj.vch_CollegeName = intCollegeID;
            obj.vch_StreamName = intStreamId;
           
                list = ccobjcaf.getSubject(obj);
            
            if (list != null && list.Count >= 1)
            {
                ddlElective2.DataSource = list;
                ddlElective2.DataValueField = "int_SubjectID";
                ddlElective2.DataTextField = "vch_SubjectName";
                ddlElective2.DataBind();
            }
        }
        catch (Exception ex)
        { throw ex; }
        finally
        { list.Clear(); }
    }
    protected void getElectives3(string intCollegeID, string intStreamId, DropDownList ddlElective3)
    {
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
            obj.Type = 9;
            obj.vch_CollegeName = intCollegeID;
            obj.vch_StreamName = intStreamId;
            
                list = ccobjcaf.getSubject(obj);
            
            if (list != null && list.Count >= 1)
            {
                ddlElective3.DataSource = list;
                ddlElective3.DataValueField = "int_SubjectID";
                ddlElective3.DataTextField = "vch_SubjectName";
                ddlElective3.DataBind();
            }
        }
        catch (Exception ex)
        { throw ex; }
        finally
        { list.Clear(); }
    }
    #endregion

    #region Fill Fourth Elective

    [WebMethod()]
    public static dynamic FillFourthElectives(int intCollegeID, int intStreamId)
    {
        CAFDAL ccobjcaf = new CAFDAL();
        //System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        //string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        //xdoc = XDocument.Load(pth + "sams/MasterXML/M_SUBJECT_4TH_ELECTIVE.xml");
        //dynamic qry = null;
        //qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
        //      where Convert.ToInt32(p.Element("int_CollegeID").Value) == intCollegeID && Convert.ToInt32(p.Element("int_StreamID").Value) == intStreamId
        //      orderby p.Element("vch_SubjectName").Value
        //      select new { int_SubjectID = p.Element("int_SubjectID").Value, vch_SubjectName = p.Element("vch_SubjectName").Value.ToString() };

        //return qry;

        List<CAFEntity> list = new List<CAFEntity>();
        try
        {
            
                list = ccobjcaf.getSubject(new CAFEntity()
                {
                    Type = 4,
                    vch_CollegeName = intCollegeID.ToString(),
                    vch_StreamName = intStreamId.ToString()
                });
            
            return list;
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    #endregion

    #region "Fill 4th Elective Subjects"
    protected void getFourthElectives(string intCollegeID, string intStreamId, DropDownList ddlFElective)
    {
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
            obj.Type = 4;
            obj.vch_CollegeName = intCollegeID;
            obj.vch_StreamName = intStreamId;
            
                list = ccobjcaf.getSubject(obj);
            
            if (list != null && list.Count >= 1)
            {
                ddlFElective.DataSource = list;
                ddlFElective.DataValueField = "int_SubjectID";
                ddlFElective.DataTextField = "vch_SubjectName";
                ddlFElective.DataBind();
            }
        }
        catch (Exception ex)
        { throw ex; }
        finally
        { list.Clear(); }
    }

    #endregion

    protected void btnSave_Click(object sender, EventArgs e)
    {
        //string strMsg = string.Empty; 
        // if (ddlBoard.SelectedValue == "131")
        //{

        //   if( txtOtherBoard.Text.Trim()=="")
        //    {
        //        strMsg = "Board name cannot be left blank";
        //        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "alert('" + strMsg + "');", true);
        //        return;
        //    }

        //}
        //string strMsg = string.Empty;
        //if (hdnImgAppl.Value == "")
        //{
        //    strMsg = "Please Upload your photo !";
        //    ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "alert('" + strMsg + "');", true);
        //    return;
        //}
        //else
        //{
        //    if (imgUpload.HasFile)
        //    {
        //        if (imgUpload.PostedFile.ContentLength > (2 * 1024 * 1024))// 2 MB
        //        {
        //            strMsg = "Please upload a valid image having size less than 2MB";
        //            ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "alert('" + strMsg + "');", true);
        //            return;
        //        }
        //        else
        //        {
        //            string[] allowedImageTyps = { "image/bmp", "image/gif", "image/jpeg", "image/png" };
        //            string[] allowedExtension = { ".bmp", ".gif", ".jpg", ".png", ".jpeg" };
        //            StringCollection imageTypes = new StringCollection();
        //            StringCollection imageExtension = new StringCollection();
        //            imageTypes.AddRange(allowedImageTyps);
        //            imageExtension.AddRange(allowedExtension);
        //            string strFiletype = MimeType.GetMimeType(imgUpload.FileBytes, imgUpload.FileName);
        //            string fileExt = System.IO.Path.GetExtension(imgUpload.FileName.ToLower());
        //            string filename = System.IO.Path.GetFileNameWithoutExtension(imgUpload.FileName);


        //            if (!imageTypes.Contains(strFiletype))
        //            {
        //                strMsg = "Invalid photo format.";
        //                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "alert('" + strMsg + "');", true);
        //                return;
        //            }
        //            else if (!imageExtension.Contains(fileExt))
        //            {
        //                strMsg = "Only jpg,jpeg,png,bmp,gif files are allowed.";
        //                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "alert('" + strMsg + "');", true);
        //                return;
        //            }
        //            else if (imgUpload.FileName.Count(f => f == '.') != 1) // Validate multiple extensions
        //            {
        //                strMsg = "Invalid file Name. Please remove any dots in file name";
        //                ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "alert('" + strMsg + "');", true);
        //                return;
        //            }
        //        }
        //    }
        //}
        sendTransferData();
    }

    #region "Send Data for Confirmation"
    protected void sendTransferData()
    {
        Boolean IsException = false;

        try
        {

            //================================================
            HttpContext.Current.Items.Clear();
            //=================10th Board Details=============
            if (hdnValidateSts.Value == "1")
            {
                HttpContext.Current.Items["ValidateSts"] = 1;
            }
            else
            {
                HttpContext.Current.Items["ValidateSts"] = 0;
            }

            //if (rbtnEnglish.Checked == true)
            //{
            HttpContext.Current.Items["FontOption"] = 1;
            //}
            //else if (rbtnOriya.Checked == true)
            //{
            //    HttpContext.Current.Items["FontOption"] = 2;
            //}

            if (rbtnAnnual.Checked == true)
            {
                HttpContext.Current.Items["ExamType"] = 1;
            }
            else
            {
                HttpContext.Current.Items["ExamType"] = 2;
            }
            HttpContext.Current.Items["UniqueId2"] = hdnUniqueId.Value;
            HttpContext.Current.Items["Board"] = ddlBoard.SelectedValue + '~' + ddlBoard.SelectedItem.Text;
            HttpContext.Current.Items["OtherBoard"] = txtOtherBoard.Text.Trim();
            HttpContext.Current.Items["YOP"] = Convert.ToInt32(ddlYOP.SelectedValue);
            HttpContext.Current.Items["Roll"] = txtBoardRoll.Text.Trim();
            HttpContext.Current.Items["RollCode"] = txtRollCode.Text.Trim();
            //=================Personal Informaion==============
            HttpContext.Current.Items["UniqueId"] = txtUniqueId.Text;
            HttpContext.Current.Items["AppName"] = txtApplName.Text;
            HttpContext.Current.Items["Fnam"] = txtFatherName.Text;
            HttpContext.Current.Items["Mname"] = txtMotherName.Text;
            HttpContext.Current.Items["Bgroup"] = ddlBloodGroup.SelectedValue + '~' + ddlBloodGroup.SelectedItem.Text;
            HttpContext.Current.Items["Religion"] = ddlReligion.SelectedValue + '~' + ddlReligion.SelectedItem.Text;

            HttpContext.Current.Items["Sex"] = ddlGender.SelectedValue + '~' + ddlGender.SelectedItem.Text;
            HttpContext.Current.Items["DOB"] = ddlDay.SelectedValue + "-" + ddlMonth.SelectedItem.Text + "-" + ddlYear.SelectedItem.Text;
            HttpContext.Current.Items["Nationality"] = ddlNationality.SelectedValue + "~" + ddlNationality.SelectedItem.Text;
            HttpContext.Current.Items["MT"] = ddlMt.SelectedValue + "~" + ddlMt.SelectedItem.Text;
            HttpContext.Current.Items["Aadhaar"] = txtAadhar.Text;
            //====================Address Details===============
            HttpContext.Current.Items["State"] = ddlCState.SelectedValue + '~' + ddlCState.SelectedItem.Text;
            //HttpContext.Current.Items["Dist"] = ddlCDist.

            HttpContext.Current.Items["Block"] = ddlCBlock.SelectedValue + '~' + ddlCBlock.SelectedItem.Text;
            HttpContext.Current.Items["Address"] = txtCPS.Text.ToUpper();
            HttpContext.Current.Items["Pin"] = txtCPC.Text;
            HttpContext.Current.Items["Phone"] = txtCTCode.Text + "-" + txtCTeleNo.Text;
            HttpContext.Current.Items["Mobile"] = txtCMobNo.Text;
            HttpContext.Current.Items["Email"] = txtCEmail.Text;

            //'====================Income Details==============================
            ////HttpContext.Current.Items["Focu"] = ddlFOcu.SelectedValue + "~" + ddlFOcu.SelectedItem.Text;
            ////HttpContext.Current.Items["Mocu"] = ddlMOcu.SelectedValue + "~" + ddlMOcu.SelectedItem.Text;
            ////HttpContext.Current.Items["AIncome"] = ddlAIncome.SelectedValue + "~" + ddlAIncome.SelectedItem.Text;
            //'====================Educational Institute Details===============
            HttpContext.Current.Items["SchName"] = txtschname.Text;
            HttpContext.Current.Items["SchLocation"] = txtschloc.Text;

            //if (Convert.ToInt32(ddlinstDistrict.SelectedValue) > 0)
            //{
            HttpContext.Current.Items["Idist"] = ddlinstDistrict.SelectedValue + "~" + ddlinstDistrict.SelectedItem.Text;
            //}
            //else
            //{
            //    HttpContext.Current.Items["Idist1"] = txtdist.Text;
            //}
            HttpContext.Current.Items["YOJ"] = ddlYOJ.SelectedValue + "~" + ddlYOJ.SelectedItem.Text;
            HttpContext.Current.Items["YOL"] = ddlYOL.SelectedValue + "~" + ddlYOL.SelectedItem.Text;

            //=================Reservation Details===============


            //================End of Address of Correspondence Details
            //rbtSC.Enabled = true;
            //rbtST.Enabled = true;
            //rbtnOBC.Enabled = true;
            //rbtGeneral.Enabled = true; 
            //rbtOther.Enabled = true;
            //rbtBCW.Enabled = true;
            if (rbtSC.Checked == true)
            {
                HttpContext.Current.Items["Cat1"] = 2;
            }
            else if (rbtST.Checked == true)
            {
                HttpContext.Current.Items["Cat1"] = 3;
            }
            else if (rbtnOBC.Checked == true)
            {
                HttpContext.Current.Items["Cat1"] = 4;
            }
            else if (rbtGeneral.Checked == true)
            {
                HttpContext.Current.Items["Cat1"] = 1;
            }
            else if (rbtOther.Checked == true)
            {
                HttpContext.Current.Items["Cat1"] = 5;
            }
            else if (rbtBCW.Checked == true)
            {
                HttpContext.Current.Items["Cat1"] = 6;
            }

            if (chkPHOHY.Checked == true)
            {
                HttpContext.Current.Items["PHOH"] = 1;
            }
            else
            {
                HttpContext.Current.Items["PHOH"] = 0;
            }

            if (rbtEWSYes.Checked == true)
            {
                HttpContext.Current.Items["EWS"] = 1;
            }
            else
            {
                HttpContext.Current.Items["EWS"] = 0;
            }

            //HttpContext.Current.Items["PERCENTAGE"] = ddlPercentage.SelectedValue + '~' + ddlPercentage.SelectedItem.Text;
            //HttpContext.Current.Items["LEVEL"] = ddlSportsLevel.SelectedValue + '~' + ddlSportsLevel.SelectedItem.Text;

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
            //'=====================OSA & OLNS================

            ////if (rbtOSAY.Checked == true)
            ////{
            ////    HttpContext.Current.Items["OSA"] = 1;
            ////    HttpContext.Current.Items["OSAState"] = ddlOSAState.SelectedValue + '~' + ddlOSAState.SelectedItem.Text;
            ////}
            ////else
            ////{
            ////    HttpContext.Current.Items["OSA"] = 0;
            ////    HttpContext.Current.Items["OSAState"] = "";
            ////}

            ////if (rbtOLNSY.Checked == true)
            ////{
            ////    HttpContext.Current.Items["OLNS"] = 1;
            ////    HttpContext.Current.Items["OLNSState"] = ddlOLNSState.SelectedValue + '~' + ddlOLNSState.SelectedItem.Text;
            ////}
            ////else
            ////{
            ////    HttpContext.Current.Items["OLNS"] = 0;
            ////    HttpContext.Current.Items["OLNSState"] = "";
            ////}

            //'==============Weightage Details=================

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
            if (chkSCPR.Checked == true)
            {
                HttpContext.Current.Items["SCPR"] = 1;
            }
            else
            {
                HttpContext.Current.Items["SCPR"] = 0;
            }

            if (chkSCRP.Checked == true)
            {
                HttpContext.Current.Items["SCRP"] = 1;
            }
            else
            {
                HttpContext.Current.Items["SCRP"] = 0;
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


            //================MarkDetails===============
            if (((ddlBoard.SelectedValue == "46" && Convert.ToInt32(ddlYOP.SelectedValue) >= 2010 && Convert.ToInt32(ddlYOP.SelectedValue) < 2018) || (ddlBoard.SelectedValue == "103" && Convert.ToInt32(ddlYOP.SelectedValue) >= 2012)))
            {
                HttpContext.Current.Items["SLE"] = ddlEng.SelectedValue + '~' + ddlEng.SelectedItem.Text;
                HttpContext.Current.Items["Math"] = ddlMath.SelectedValue + '~' + ddlMath.SelectedItem.Text;
                HttpContext.Current.Items["Science"] = ddlSc.SelectedValue + '~' + ddlSc.SelectedItem.Text;
                HttpContext.Current.Items["SocialScience"] = ddlSoSc.SelectedValue + '~' + ddlSoSc.SelectedItem.Text;
                HttpContext.Current.Items["TotMark"] = txtCGPA.Text;
                HttpContext.Current.Items["MaxMark"] = 10;

                //=============For Kerela Board====
            }
            else if (ddlBoard.SelectedValue == "116" & Convert.ToInt32(ddlYOP.SelectedValue) >= 2010)
            {
                HttpContext.Current.Items["SLE"] = ddlKEnglish.SelectedValue + '~' + ddlKEnglish.SelectedItem.Text;
                HttpContext.Current.Items["Math"] = ddlKMath.SelectedValue + '~' + ddlKMath.SelectedItem.Text;
                HttpContext.Current.Items["Science"] = ddlKScience.SelectedValue + '~' + ddlKScience.SelectedItem.Text;
                HttpContext.Current.Items["SocialScience"] = ddlKSoSc.SelectedValue + '~' + ddlKSoSc.SelectedItem.Text;
                HttpContext.Current.Items["TotMark"] = ddlTGrade.SelectedValue + '~' + ddlTGrade.SelectedItem.Text;
                HttpContext.Current.Items["MaxMark"] = 10;


            }
            else
            {
                HttpContext.Current.Items["SLE"] = txtEnglish.Text;
                HttpContext.Current.Items["Math"] = txtMath.Text;
                HttpContext.Current.Items["Science"] = txtScience.Text;
                HttpContext.Current.Items["SocialScience"] = txtSocSci.Text;
                HttpContext.Current.Items["TotMark"] = txtTotMark.Text;
                HttpContext.Current.Items["MaxMark"] = txtMaxMark.Text;
            }
            if (((Convert.ToInt32(ddlBoard.SelectedValue) == 45) & (Convert.ToInt32(ddlYOP.SelectedValue) >= 2014)))
            {
                HttpContext.Current.Items["Grade"] = "0";// hdnGrade.Value;
            }
            else
            {
                HttpContext.Current.Items["Grade"] = "0";
            }

            // Validation removed for  CBSE, New Delhi - 46 and  ICSE, New Delhi - 47
            //if ( ddlBoard.SelectedValue == "47" && Convert.ToInt32(ddlYOP.SelectedValue) == 2019)
            //{
            //    HttpContext.Current.Items["MaxMark"] = "";
            //    HttpContext.Current.Items["TotMark"] = "";
            //    txtTotMark.Text = "";
            //    txtMaxMark.Text = "";
            //    txtTotMark.Enabled=false;
            //    txtMaxMark.Enabled=false;
            //}


            //=============Mark Verification============
            ////if (hdnMarkVerification.Value == "1")
            ////{
            ////    HttpContext.Current.Items["MarkVerificationStatus"] = 1;
            ////    if (rbtMarkVerifiedYCpy.Checked == true)
            ////    {
            ////        HttpContext.Current.Items["MarkVerification"] = 0;
            ////    }
            ////    else
            ////    {
            ////        HttpContext.Current.Items["MarkVerification"] = 1;
            ////    }
            ////}
            ////else
            ////{
            ////    HttpContext.Current.Items["MarkVerificationStatus"] = 0;
            ////}
            //'==============Compartmnet Mark Details========
            if (rbtCompartmentalY.Checked == true)
            {
                HttpContext.Current.Items["CompartmentStatus"] = 1;
                HttpContext.Current.Items["Subject"] = ddlCompSubject1.SelectedValue + '~' + ddlCompSubject2.SelectedValue + '~' + ddlCompSubject3.SelectedValue + '~' + ddlCompSubject4.SelectedValue;
                HttpContext.Current.Items["FailMark"] = txtCompFMark1.Text + '~' + txtCompFMark2.Text + '~' + txtCompFMark3.Text + '~' + txtCompFMark4.Text;
                HttpContext.Current.Items["PassMark"] = txtCompPMark1.Text + '~' + txtCompPMark2.Text + '~' + txtCompPMark3.Text + '~' + txtCompPMark4.Text;
            }
            else
            {
                HttpContext.Current.Items["CompartmentStatus"] = 0;
            }
            //===================Option Details===================
            //=================Data For Option Details===================
            string strCollegeID = "";
            string strStreamID = "";
            string strCompulsory = "";
            string strCompulsory1 = "";
            string strCompulsory2 = "";
            string strCompulsory3 = "";
            //===============
            string strdist = "";
            string strblock = "";
            //==============

            string strELE1 = "";
            string strELE2 = "";
            string strELE3 = "";
            string strFELE1 = "";
            string strFELE2 = "";
            string strFELE3 = "";
            string strLiveOpt = "";
            //string strIMC = "";
            string[] strAry1 = null; string[] strAry11 = null;
            string strELE = string.Empty; string strELE11 = string.Empty; string strELE22 = string.Empty; string strELE33 = string.Empty;
            string[] strAry2 = null;
            string[] strAry3 = null;
            string[] strAry4 = null;
            int i = 0;
            #region Code
            //======================Getting Elective Ids====================

            //51~51/60~52/61~60|ECONOMICS~ECONOMICS/HISTORY~EDUCATION/HOME SCIENCE~HISTORY
            ////51~60~61/51~52~60

            //If multiple option added
            ////////if (hidElectives.Value.Contains("/"))
            ////////{
            ////////    strAry11 = hidElectives.Value.Split('|');
            ////////    strAry11 = strAry11[0].Split('/');
            ////////    strAry1 = strAry11;

            ////////    if (hidElectives.Value.Contains('|'))   
            ////////    {
            ////////        //Preparing the data as per the required format(51~60~61/51~52~60)

            ////////        int rowCount = strAry11[0].Split('~').Length - 1;

            ////////        for (int y = 0; y <= rowCount; y++)//4
            ////////        {
            ////////            strELE11 = strAry11[0].Split('~')[y];
            ////////            strELE22 = strAry11[1].Split('~')[y];
            ////////            strELE33 = strAry11[2].Split('~')[y];

            ////////            strELE = strELE + strELE11 + "~" + strELE22 + "~" + strELE33 + "/";
            ////////        }
            ////////        strELE = strELE.TrimEnd('/');
            ////////        strAry1 = strELE.Split('/');
            ////////    }


            ////////    for (i = 0; i <= strAry1.Length - 1; i++)
            ////////    {
            ////////        strAry3 = strAry1[i].Split('~');

            ////////        if (string.IsNullOrEmpty(strELE1))
            ////////        {
            ////////            strELE1 = strAry3[0]; 
            ////////        }
            ////////        else
            ////////        {
            ////////            strELE1 = strELE1 + "~" + strAry3[0];
            ////////        }
            ////////        if (string.IsNullOrEmpty(strELE2))
            ////////        {
            ////////            strELE2 = strAry3[1];
            ////////        }
            ////////        else
            ////////        {
            ////////            strELE2 = strELE2 + "~" + strAry3[1];
            ////////        }
            ////////        if (string.IsNullOrEmpty(strELE3))
            ////////        {
            ////////            strELE3 = strAry3[2];
            ////////        }
            ////////        else
            ////////        {
            ////////            strELE3 = strELE3 + "~" + strAry3[2];
            ////////        }
            ////////    }

            ////////    //for (i = 0; i <= strAry1.Length - 1; i++)
            ////////    //{
            ////////    //    strAry3 = strAry1[i].Split('~');
            ////////    //    if (string.IsNullOrEmpty(strELE1))
            ////////    //    {
            ////////    //        strELE1 = strAry3[0].Split('~')[0];
            ////////    //    }
            ////////    //    else
            ////////    //    {
            ////////    //        strELE1 = strELE1 + "~" + strAry3[0];
            ////////    //    }
            ////////    //    if (string.IsNullOrEmpty(strELE2))
            ////////    //    {
            ////////    //        strELE2 = strAry3[1];
            ////////    //    }
            ////////    //    else
            ////////    //    {
            ////////    //        strELE2 = strELE2 + "~" + strAry3[1];
            ////////    //    }
            ////////    //    if (string.IsNullOrEmpty(strELE3))
            ////////    //    {
            ////////    //        strELE3 = strAry3[2];
            ////////    //    }
            ////////    //    else
            ////////    //    {
            ////////    //        strELE3 = strELE3 + "~" + strAry3[2];
            ////////    //    }
            ////////    //}


            ////////}
            ////////else
            ////////{
            ////////    //51~60~61/51~52~60
            ////////    if (hidElectives.Value.Contains("NA"))
            ////////    {
            ////////        string s = string.Empty;
            ////////        s = hidElectives.Value;
            ////////        hidElectives.Value = s.Replace("NA", "0");
            ////////    }

            ////////    strAry1 = hidElectives.Value.Trim().Split('~');
            ////////    if (strELE1 == "")
            ////////    {
            ////////        strELE1 = strAry1[0];
            ////////    }
            ////////    else
            ////////    {
            ////////        strELE1 = strELE1 + "~" + strAry1[0];
            ////////    }

            ////////    if (strELE2 == "")
            ////////    {
            ////////        strELE2 = strAry1[1];
            ////////    }
            ////////    else
            ////////    {
            ////////        strELE2 = strELE2 + "~" + strAry1[1];
            ////////    }

            ////////    if (strELE3 == "")
            ////////    {
            ////////        strELE3 = strAry1[2];
            ////////    }
            ////////    else
            ////////    {
            ////////        strELE3 = strELE3 + "~" + strAry1[2];
            ////////    }
            ////////}
            #endregion

            //string shidElectives="";
            //if (hidElectives.Value.Contains("|"))
            //{
            //    shidElectives = hidElectives.Value;
            //    hidElectives.Value = hidElectives.Value.Split('|')[0].ToString();

            //}


            if (hidElectives.Value.Contains("/"))
            {
                if (hidElectives.Value.Contains("NA"))
                {
                    string s = string.Empty;
                    s = hidElectives.Value;
                    hidElectives.Value = s.Replace("NA", "0");
                }
                strAry1 = hidElectives.Value.Trim().Split('/');

                for (i = 0; i <= strAry1.Length - 1; i++)
                {
                    strAry3 = strAry1[i].Split('~');
                    if (string.IsNullOrEmpty(strELE1))
                    {
                        strELE1 = strAry3[0];
                    }
                    else
                    {
                        strELE1 = strELE1 + "~" + strAry3[0];
                    }
                    if (string.IsNullOrEmpty(strELE2))
                    {
                        strELE2 = strAry3[1];
                    }
                    else
                    {
                        strELE2 = strELE2 + "~" + strAry3[1];
                    }
                    if (string.IsNullOrEmpty(strELE3))
                    {
                        strELE3 = strAry3[2];
                    }
                    else
                    {
                        strELE3 = strELE3 + "~" + strAry3[2];
                    }
                }
            }
            else
            {
                //if (hidElectives.Value.Contains("NA"))
                //{
                //    string s = string.Empty;
                //    s = hidElectives.Value;
                //    hidElectives.Value = s.Replace("NA", "0");
                //}

                //strAry1 = hidElectives.Value.Trim().Split('~');
                //if (strELE1 == "")
                //{
                //    strELE1 = strAry1[0];
                //}
                //else
                //{
                //    strELE1 = strELE1 + "~" + strAry1[0];
                //}

                //if (strELE2 == "")
                //{
                //    strELE2 = strAry1[1];
                //}
                //else
                //{
                //    strELE2 = strELE2 + "~" + strAry1[1];
                //}

                //if (strELE3 == "")
                //{
                //    strELE3 = strAry1[2];
                //}
                //else
                //{
                //    strELE3 = strELE3 + "~" + strAry1[2];
                //}


            }
            strELE1 = "0";
            strELE2 = "0";
            strELE3 = "0";



            //'==========================getting Fourth Elective ids==============
            strFELE1 = hidFourthElelectives.Value.Trim() + '~';

            if (hidFourthElelectives.Value.Contains("/"))
            {
                if (hidFourthElelectives.Value.Contains("NA"))
                {

                    string s = string.Empty;
                    s = hidFourthElelectives.Value;
                    hidFourthElelectives.Value = s.Replace("NA", "0");
                }

                //if (hidFourthElelectives.Value.Contains('/'))
                //{
                strAry2 = hidFourthElelectives.Value.Split('/');
                for (i = 0; i <= strAry2.Length - 1; i++)
                {
                    strAry4 = strAry2[i].Split('~');
                    if (string.IsNullOrEmpty(strFELE1))
                    {
                        strFELE1 = strAry4[0];
                    }
                    else
                    {
                        strFELE1 = strFELE1 + "~" + strAry4[0];
                    }
                    //if (string.IsNullOrEmpty(strFELE2))
                    //{
                    //    strFELE2 = strAry4[1];
                    //}
                    //else
                    //{
                    //    strFELE2 = strFELE2 + "~" + strAry4[1];
                    //}
                    //if (string.IsNullOrEmpty(strFELE3))
                    //{
                    //    strFELE3 = strAry4[2];
                    //}
                    //else
                    //{
                    //    strFELE3 = strFELE3 + "~" + strAry4[2];
                    //}
                }



            }
            else
            {
                if (hidFourthElelectives.Value.Contains("NA"))
                {

                    string s = string.Empty;
                    s = hidFourthElelectives.Value;
                    hidFourthElelectives.Value = s.Replace("NA", "0");
                }
                //strAry2 = hidFourthElelectives.Value.Trim().Split('~');
                //for (int j = 0; j <= strAry2.Length - 1; j++)
                //{

                //    if (strFELE1 == "")
                //    {
                //        strFELE1 = strAry2[0];
                //    }
                //    else
                //    {
                //        strFELE1 = strFELE1 + "~" + strAry2[0];
                //    }
                //    //if (strFELE2 == "")
                //    //{
                //    //    strFELE2 = strAry2[1];
                //    //}
                //    //else
                //    //{
                //    //    strFELE2 = strFELE2 + "~" + strAry2[1];
                //    //}
                //    //if (strFELE3 == "")
                //    //{
                //    //    strFELE3 = strAry2[2];
                //    //}
                //    //else
                //    //{
                //    //    strFELE3 = strFELE3 + "~" + strAry2[2];
                //    //}
                //}

                strFELE1 = "0";
            }

            //'==========================getting Compusory ids==============

            if (hidComplusory.Value.Contains("/"))
            {
                if (hidComplusory.Value.Contains("NA"))
                {

                    string s = string.Empty;
                    s = hidComplusory.Value;
                    hidComplusory.Value = s.Replace("NA", "0");
                }

                //if (hidFourthElelectives.Value.Contains('/'))
                //{
                strAry2 = hidComplusory.Value.Split('/');
                for (i = 0; i <= strAry2.Length - 1; i++)
                {
                    strAry4 = strAry2[i].Split('~');
                    if (string.IsNullOrEmpty(strCompulsory1))
                    {
                        strCompulsory1 = strAry4[0];
                    }
                    else
                    {
                        strCompulsory1 = strCompulsory1 + "~" + strAry4[0];
                    }
                    if (string.IsNullOrEmpty(strCompulsory2))
                    {
                        strCompulsory2 = strAry4[1];
                    }
                    else
                    {
                        strCompulsory2 = strCompulsory2 + "~" + strAry4[1];
                    }
                    if (string.IsNullOrEmpty(strCompulsory3))
                    {
                        strCompulsory3 = strAry4[2];
                    }
                    else
                    {
                        strCompulsory3 = strCompulsory3 + "~" + strAry4[2];
                    }
                }



            }
            else
            {
                if (hidComplusory.Value.Contains("NA"))
                {

                    string s = string.Empty;
                    s = hidComplusory.Value;
                    hidComplusory.Value = s.Replace("NA", "0");
                }
                //strAry2 = hidComplusory.Value.Trim().Split('~');
                ////for (int j = 0; j <= strAry2.Length - 1; j++)
                ////{

                //if (strCompulsory1 == "")
                //{
                //    strCompulsory1 = strAry2[0];
                //}
                //else
                //{
                //    strCompulsory1 = strCompulsory1 + "~" + strAry2[0];
                //}
                //if (strCompulsory2 == "")
                //{
                //    strCompulsory2 = strAry2[1];
                //}
                //else
                //{
                //    strCompulsory2 = strCompulsory2 + "~" + strAry2[1];
                //}
                //if (strCompulsory3 == "")
                //{
                //    strCompulsory3 = strAry2[2];
                //}
                //else
                //{
                //    strCompulsory3 = strCompulsory3 + "~" + strAry2[2];
                //}


                ////}

                strCompulsory1 = "0";
                strCompulsory2 = "0";
                strCompulsory3 = "0";
            }

            //============================================
            strCollegeID = hidCollege.Value.Trim() + '~';
            strStreamID = hidStream.Value.Trim() + '~';
            //strCompulsory = hidComplusory.Value.Trim() + '~';
            strLiveOpt = hidHostel.Value.Trim() + '~';

            //==========
            strdist = dist.Value.Trim() + '~' + HdistNm.Value.Trim();
            strblock = block.Value.Trim() + '~' + HBlockNM.Value.Trim();

            //strIMC = hidImc.Value.Trim() + '~';

            HttpContext.Current.Items["Dist"] = strdist;
            HttpContext.Current.Items["Block"] = strblock;

            HttpContext.Current.Items["CollegeIds"] = strCollegeID;
            HttpContext.Current.Items["StreamIds"] = strStreamID;
            // HttpContext.Current.Items["Compulsory"] = strCompulsory;

            HttpContext.Current.Items["Compulsory1"] = strCompulsory1 + "~";
            HttpContext.Current.Items["Compulsory2"] = strCompulsory2 + "~";
            HttpContext.Current.Items["Compulsory3"] = strCompulsory3 + "~";

            HttpContext.Current.Items["Elective1"] = strELE1 + "~";
            HttpContext.Current.Items["Elective2"] = strELE2 + "~";
            HttpContext.Current.Items["Elective3"] = strELE3 + "~";
            HttpContext.Current.Items["FElective1"] = strFELE1;
            //HttpContext.Current.Items["FElective2"] = strFELE2 + "~";
            //HttpContext.Current.Items["FElective3"] = strFELE3 + "~";

            HttpContext.Current.Items["Hostel"] = strLiveOpt;
            //HttpContext.Current.Items["IMC"] = strIMC;
            //==================Retrieving Names===============
            //for college
            string[] strCname = hidCollege.Value.Trim().Split('~');
            string strCnames = "";
            for (int k = 0; k <= strCname.Length - 1; k++)
            {
                if (strCname[k] != "")
                {
                    if (!string.IsNullOrEmpty(strCnames))
                    {

                        strCnames = strCnames + '~' + getCname(strCname[k]);
                    }
                    else
                    {
                        strCnames = getCname(strCname[k]);
                    }
                }
            }
            //for stream
            string[] strStream = hidStream.Value.Trim().Split('~');
            string strSnames = "";
            for (i = 0; i <= strStream.Length - 1; i++)
            {
                if (strCname[i] != "")
                {
                    if (strStream[i] != "")
                    {
                        getStream(strCname[i]);
                        if (!string.IsNullOrEmpty(strSnames))
                        {
                            strSnames = strSnames + "~" + ddlStream.Items.FindByValue(strStream[i]).Text;
                        }
                        else
                        {
                            strSnames = ddlStream.Items.FindByValue(strStream[i]).Text;
                        }
                    }
                }
            }
            //for Compulsory

            //string[] strCompName = hidComplusory.Value.Trim().Split('~');
            //string strCompNames = "";
            //for (i = 0; i <= strCompName.Length - 1; i++)
            //{
            //    if (strCname[i] != "" && strStream[i] != "")
            //    {
            //        getCompulsory(strCname[i], strStream[i]);
            //        if (!string.IsNullOrEmpty(strCompNames))
            //        {
            //            strCompNames = strCompNames + "~" + ddlCompulsory.Items.FindByValue(strCompName[i]).Text;
            //        }
            //        else
            //        {
            //            strCompNames = ddlCompulsory.Items.FindByValue(strCompName[i]).Text;
            //        }
            //    }
            //}

            // string[] strComName1 = strCompulsory1.Split('~');
            string strComNames1 = "";
            //for (i = 0; i <= strComName1.Length - 1; i++)
            //{
            //    if (strCname[i] != "" && strStream[i] != "")
            //    {
            //        getCompulsory1(strCname[i], strStream[i], ddlFC);
            //        if (!string.IsNullOrEmpty(strComNames1))
            //        {
            //            strComNames1 = strComNames1 + "~" + ddlFC.Items.FindByValue(strComName1[i]).Text;
            //        }
            //        else
            //        {
            //            strComNames1 = ddlFC.Items.FindByValue(strComName1[i]).Text;
            //        }
            //    }
            //}

            strComNames1 = "--SELECT--";
            // string[] strComName2 = strCompulsory2.Split('~');
            string strComNames2 = "";
            //for (i = 0; i <= strComName2.Length - 1; i++)
            //{
            //    if (strCname[i] != "" && strStream[i] != "")
            //    {
            //        getCompulsory2(strCname[i], strStream[i], ddlMB);
            //        if (!string.IsNullOrEmpty(strComNames2))
            //        {
            //            strComNames2 = strComNames2 + "~" + ddlMB.Items.FindByValue(strComName2[i]).Text;
            //        }
            //        else
            //        {
            //            strComNames2 = ddlMB.Items.FindByValue(strComName2[i]).Text;
            //        }
            //    }
            //}
            strComNames2 = "--SELECT--";
            //  string[] strComName3 = strCompulsory3.Split('~');
            string strComNames3 = "";
            //for (i = 0; i <= strComName3.Length - 1; i++)
            //{
            //    if (strCname[i] != "" && strStream[i] != "")
            //    {
            //        getCompulsory3(strCname[i], strStream[i], ddlLL);
            //        if (!string.IsNullOrEmpty(strComNames3))
            //        {
            //            strComNames3 = strComNames3 + "~" + ddlLL.Items.FindByValue(strComName3[i]).Text;
            //        }
            //        else
            //        {
            //            strComNames3 = ddlLL.Items.FindByValue(strComName3[i]).Text;
            //        }
            //    }
            //}

            strComNames3 = "--SELECT--";

            //==================Elective Names====================
            // string[] strEleName1 = strELE1.Split('~');
            string strEleNames1 = "";
            //for (i = 0; i <= strEleName1.Length - 1; i++)
            //{
            //    if (strCname[i] != "" && strStream[i] != "")
            //    {
            //        getElectives1(strCname[i], strStream[i], ddlELE1);
            //        if (!string.IsNullOrEmpty(strEleNames1))
            //        {
            //            strEleNames1 = strEleNames1 + "~" + ddlELE1.Items.FindByValue(strEleName1[i]).Text;
            //        }
            //        else
            //        {
            //            strEleNames1 = ddlELE1.Items.FindByValue(strEleName1[i]).Text;
            //        }
            //    }
            //}

            strEleNames1 = "--SELECT--";

            //  string[] strEleName2 = strELE2.Split('~');
            string strEleNames2 = "";
            //for (i = 0; i <= strEleName2.Length - 1; i++)
            //{
            //    if (strCname[i] != "" && strStream[i] != "")
            //    {
            //        getElectives2(strCname[i], strStream[i], ddlELE2);
            //        if (!string.IsNullOrEmpty(strEleNames2))
            //        {
            //            strEleNames2 = strEleNames2 + "~" + ddlELE2.Items.FindByValue(strEleName2[i]).Text;
            //        }
            //        else
            //        {
            //            strEleNames2 = ddlELE2.Items.FindByValue(strEleName2[i]).Text;
            //            //strEleNames2 = ddlELE2.SelectedItem.Text;
            //        }
            //    }
            //}

            strEleNames2 = "--SELECT--";

            //string[] strEleName3 = strELE3.Split('~');
            string strEleNames3 = "";
            //for (i = 0; i <= strEleName3.Length - 1; i++)
            //{
            //    if (strCname[i] != "" && strStream[i] != "")
            //    {
            //        getElectives3(strCname[i], strStream[i], ddlELE3);
            //        if (!string.IsNullOrEmpty(strEleNames3))
            //        {
            //            strEleNames3 = strEleNames3 + "~" + ddlELE3.Items.FindByValue(strEleName3[i]).Text;
            //        }
            //        else
            //        {
            //            strEleNames3 = ddlELE3.Items.FindByValue(strEleName3[i]).Text;
            //        }
            //    }
            //}

            strEleNames3 = "--SELECT--";
            //'=====================Fourth Electives================

            //string[] stFEleName = hidFourthElelectives.Value.Trim().Split('~');
            string strFEleNames = "";
            //for (i = 0; i <= stFEleName.Length - 1; i++)
            //{
            //    if (strCname[i] != "" && strStream[i] != "")
            //    {
            //        //getFourthElectives(strCname[i], strStream[i],ddl4thELE1);
            //        if (!string.IsNullOrEmpty(strFEleNames))
            //        {
            //            strFEleNames = strFEleNames + "~" + ddl4thELE1.Items.FindByValue(stFEleName[i]).Text;
            //        }
            //        else
            //        {
            //            strFEleNames = ddl4thELE1.Items.FindByValue(stFEleName[i]).Text;
            //        }
            //    }
            //}

            //To avoid error
            strFEleNames = "--SELECT--";

            //'====================================================
            HttpContext.Current.Items["CNames"] = strCnames;
            HttpContext.Current.Items["Snames"] = strSnames;
            //HttpContext.Current.Items["CompNames"] = strCompNames;
            HttpContext.Current.Items["ComNames1"] = strComNames1;
            HttpContext.Current.Items["ComNames2"] = strComNames2;
            HttpContext.Current.Items["ComNames3"] = strComNames3;
            HttpContext.Current.Items["EleNames1"] = strEleNames1;
            HttpContext.Current.Items["EleNames2"] = strEleNames2;
            HttpContext.Current.Items["EleNames3"] = strEleNames3;
            HttpContext.Current.Items["FEleNames1"] = strFEleNames;
            //HttpContext.Current.Items["FEleNames2"] = strFEleNames2;
            //HttpContext.Current.Items["FEleNames3"] = strFEleNames3;
            //====================================================
            //'====================Bank Details===============
            ////HttpContext.Current.Items["ACNo"] = txtacno.Text.Trim();
            ////HttpContext.Current.Items["IFSC"] = txtifsc.Text.Trim();
            ////HttpContext.Current.Items["MICR"] = txtmicr.Text.Trim();
            ////HttpContext.Current.Items["BankName"] = txtBankname.Text.Trim();
            ////HttpContext.Current.Items["BrName"] = txtBrname.Text.Trim();
            //=======================Uploading Photo======================
            string ext = "";
            // File Upload logic implemented by Kisan Raj
            if (!string.IsNullOrEmpty(this.hdnImgAppl.Value))
            {
                HttpContext.Current.Items["Photo"] = imgUpload.PostedFile.FileName;
                ext = Path.GetExtension(imgUpload.PostedFile.FileName);
            }

            if (imgUpload.HasFile == true) //if new image is updated new bytestream created
            {
                //new logic added to pass bytestream array to confirmation page
                //Stream fs = imgUpload.PostedFile.InputStream;
                //BinaryReader br = new BinaryReader(fs);
                //byte[] bytes = br.ReadBytes((Int32)fs.Length);
                //HttpContext.Current.Items["ByteStream"] = bytes;

                //string Orgfile = $"{hdnUniqueId.ToString()}{ext}";
                string formattedDateTime = DateTime.Now.ToString("yyyyMMddHHmmss");
                string Orgfile = txtCMobNo.Text+"_"+formattedDateTime + ext;
                CAFEntity CafObj = new CAFEntity();
                CafObj.photo = new HttpPostedFileWrapper(imgUpload.PostedFile);


                using (var client = new AmazonS3Client(ConfigurationManager.AppSettings["AWSKey"], ConfigurationManager.AppSettings["AWSValue"], RegionEndpoint.APSouth1))
                {
                 
                    using (var newMemoryStream = new MemoryStream())
                    {
                        var uploadRequest = new TransferUtilityUploadRequest
                        {
                            InputStream = CafObj.photo.InputStream,
                            Key = string.Format("OFSS2025/SAMS/ONLINE_CAF/APPL_IMAGES/2025/{0}", Orgfile),
                            BucketName = "bseb",
                            CannedACL = S3CannedACL.PublicRead
                        };

                        var fileTransferUtility = new TransferUtility(client);
                        fileTransferUtility.Upload(uploadRequest);
                    }
                }

                //"~/Upload/Upload2023/PvtPhoto/Batch"
                //var path = Path.Combine(Server.MapPath("~/Upload/Upload2023/Open2022/Photo"), _openUserLogin.ID.ToString() + "_P.jpg");
                //string FilepathExist = Path.Combine(Server.MapPath("~/Upload/Upload2023/Open2022/Photo"));
                //if (!Directory.Exists(FilepathExist))
                //{
                //    Directory.CreateDirectory(FilepathExist);
                //}
                
                string  imgPhoto = "OFSS2025/SAMS/ONLINE_CAF/APPL_IMAGES/2025/" + Orgfile;
                HttpContext.Current.Items["Photo"] = "OFSS2025/SAMS/ONLINE_CAF/APPL_IMAGES/2025/" + Orgfile;

                HttpContext.Current.Items["PhotoDb"] =  Orgfile;

            }
            else// if image is not updated the old image bytestream is set 
            {
                HttpContext.Current.Items["ByteStream"] = ViewState["ByteStream"];//old image bytestream
            }
            // HttpContext.Current.Items["ByteStream"] = string.Empty;

            //---------============send value for Kasturba Gandhi Aawasiya Bilika Chhatrawas

            HttpContext.Current.Items["KGBACSts"] = rbtnKGABC.SelectedIndex == -1 ? "0" : rbtnKGABC.SelectedValue;
            //Server.Transfer("ConfirmCAFJr.aspx", false);

        }
        catch (Exception ex)
        {
            IsException = true;
            Util.LogError(ex, "JrCAFForm");
        }
        finally
        {
            // HttpContext.Current.Response.End();
            Context.ApplicationInstance.CompleteRequest();
            // Response.Write("Error in Submit");
        }
        if (!IsException)
        {
            Server.Transfer("ConfirmCAFJr.aspx", true);
        }


    }
    #endregion

    #region "Get CollegeName"
    protected string getCname(string intCid)
    {
        string strChars = string.Empty;
        try
        {
            DataSet ddlDataSource = new DataSet();
            DataView dvSource = default(DataView);
            string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
            ddlDataSource.ReadXml(pth + "SAMS/MasterXML/M_COLLEGE.xml");
            //ddlDataSource.ReadXml(Server.MapPath("../MasterXML/M_COLLEGE.xml"));
            dvSource = ddlDataSource.Tables[0].DefaultView;
            dvSource.RowFilter = "CID = '" + intCid + "'";
            //'===========Assigning values to a string================
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
    #endregion


    #region "Fill CompulsorySubjects"
    protected void getCompulsory1(string intCollegeID, string intStreamId, DropDownList ddlCompulsory1)
    {

        List<CAFEntity> list1 = new List<CAFEntity>();
        CAFEntity obj1 = new CAFEntity();
        try
        {

            obj1.Type = 11;
            obj1.vch_CollegeName = intCollegeID;
            obj1.vch_StreamName = intStreamId;

            
                list1 = ccobjcaf.getSubject(obj1);
            
            if (list1 != null && list1.Count >= 1)
            {

                ddlCompulsory1.Items.Add(new ListItem("Select", "0", true));
                ddlCompulsory1.DataSource = list1;
                ddlCompulsory1.DataValueField = "int_SubjectID";
                ddlCompulsory1.DataTextField = "vch_SubjectName";
                ddlCompulsory1.DataBind();

            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "JrCAFForm");
        }
        finally
        { list1.Clear(); }
    }
    protected void getCompulsory2(string intCollegeID, string intStreamId, DropDownList ddlCompulsory2)
    {
        List<CAFEntity> list2 = new List<CAFEntity>();
        CAFEntity obj2 = new CAFEntity();

        try
        {

            obj2.Type = 12;
            obj2.vch_CollegeName = intCollegeID;
            obj2.vch_StreamName = intStreamId;


            
                list2 = ccobjcaf.getSubject(obj2);
            

            if (list2 != null && list2.Count >= 1)
            {

                ddlCompulsory2.Items.Add(new ListItem("Select", "0", true));
                ddlCompulsory2.DataSource = list2;
                ddlCompulsory2.DataValueField = "int_SubjectID";
                ddlCompulsory2.DataTextField = "vch_SubjectName";
                ddlCompulsory2.DataBind();

            }


        }
        catch (Exception ex)
        {
            Util.LogError(ex, "JrCAFForm");
        }
        finally
        { list2.Clear(); obj2 = null; }
    }
    protected void getCompulsory3(string intCollegeID, string intStreamId, DropDownList ddlCompulsory3)
    {

        List<CAFEntity> list3 = new List<CAFEntity>();
        CAFEntity obj3 = new CAFEntity();
        try
        {

            obj3.Type = 13;
            obj3.vch_CollegeName = intCollegeID;
            obj3.vch_StreamName = intStreamId;

            
                list3 = ccobjcaf.getSubject(obj3);
            

            if (list3 != null && list3.Count >= 1)
            {

                ddlCompulsory3.Items.Add(new ListItem("Select", "0", true));
                ddlCompulsory3.DataSource = list3;
                ddlCompulsory3.DataValueField = "int_SubjectID";
                ddlCompulsory3.DataTextField = "vch_SubjectName";
                ddlCompulsory3.DataBind();

            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "JrCAFForm");
        }
        finally
        { list3.Clear(); obj3 = null; }
    }
    #endregion

    #region getstream
    protected void getStream(string intCollegeID)
    {
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
            obj.Action = "J";
            obj.Cid = Convert.ToInt32(intCollegeID);
           

                list = ccobjcaf.fillJuniorStream(obj);
            
            if (list != null && list.Count >= 1)
            {

                //dtComp = SAMSService.fillJuniorStream(intCollegeID, "J");
                ddlStream.DataSource = list;
                ddlStream.DataValueField = "int_StreamID";
                ddlStream.DataTextField = "vch_StreamName";
                ddlStream.DataBind();
            }
        }
        catch (Exception ex)
        { throw ex; }
        finally
        { list.Clear(); }
    }
    #endregion

    #region Check Mobile No
    [WebMethod()]
    public static dynamic ChkMobStatus(string vchMobNo)
    {
        CAFDAL ccobjcaf = new CAFDAL();

        List<ChkStatus_Entity> list = new List<ChkStatus_Entity>();
        ChkStatus_Entity obj = new ChkStatus_Entity();
        try
        {
            
                obj.Action = "M";
                obj.vch_CorMobileNo = vchMobNo;
                list = ccobjcaf.chkStatus(obj);
            
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

    #region Check Email Id
    [WebMethod()]
    public static dynamic ChkEmailStatus(string vchEmail)
    {
        CAFDAL ccobjcaf = new CAFDAL();

        List<ChkStatus_Entity> list = new List<ChkStatus_Entity>();
        ChkStatus_Entity obj = new ChkStatus_Entity();
        try
        {
            
                obj.Action = "E";
                obj.vch_EMailID = vchEmail;
                list = ccobjcaf.chkStatus(obj);
            
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


    #region fillStream
    [WebMethod()]
    public static dynamic FillStream(int intCollegeID)
    {
        CAFDAL ccobjcaf = new CAFDAL();

        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
            
                obj.Action = "J";
                obj.Cid = intCollegeID;
                list = ccobjcaf.fillJuniorStream(obj);
            
            return list;
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "Jrcafform");
            throw ex;
        }
        finally
        {
            //list.Clear();
        }

    }
    #endregion

    #region fillElectives
    [WebMethod()]
    public static dynamic FillElectives(int intCollegeID, int intStreamId)
    {
        //System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        //string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        //xdoc = XDocument.Load(pth + "sams/MasterXML/M_SUBJECT_ELECTIVE.xml");
        //dynamic qry = null;
        //qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
        //      where Convert.ToInt32(p.Element("int_CollegeID").Value) == intCollegeID && Convert.ToInt32(p.Element("int_StreamID").Value) == intStreamId
        //      orderby p.Element("vch_SubjectName").Value
        //      select new { int_SubjectID = p.Element("int_SubjectID").Value, vch_SubjectName = p.Element("vch_SubjectName").Value.ToString() };

        //return qry;

        List<CAFEntity> list = new List<CAFEntity>();
        try
        {
            CAFDAL ccobjcaf = new CAFDAL();


            list = ccobjcaf.getSubject(new CAFEntity()
                {
                    Type = 2,
                    vch_CollegeName = Convert.ToString(intCollegeID),
                    vch_StreamName = Convert.ToString(intStreamId)
                });
            
        }
        catch (Exception ex)
        {
            throw ex;
        }
        return list;
    }

    [WebMethod()]
    public static dynamic fillfElective2(int intCollegeID, int intStreamId)
    {
        CAFDAL ccobjcaf = new CAFDAL();


        List<CAFEntity> list = new List<CAFEntity>();
        try
        {
           
                list = ccobjcaf.getSubject(new CAFEntity()
                {
                    Type = 8,
                    vch_CollegeName = Convert.ToString(intCollegeID),
                    vch_StreamName = Convert.ToString(intStreamId)
                });
            
        }
        catch (Exception ex)
        {
            throw ex;
        }
        return list;
    }

    [WebMethod()]
    public static dynamic fillfElective3(int intCollegeID, int intStreamId)
    {
        CAFDAL ccobjcaf = new CAFDAL();


        List<CAFEntity> list = new List<CAFEntity>();
        try
        {
            
                list = ccobjcaf.getSubject(new CAFEntity()
                {
                    Type = 9,
                    vch_CollegeName = Convert.ToString(intCollegeID),
                    vch_StreamName = Convert.ToString(intStreamId)
                });
            
        }
        catch (Exception ex)
        {
            throw ex;
        }
        return list;
    }

    #endregion

    #region fillDistWiseColg
    [WebMethod()]
    public static dynamic fillDistWiseColg(int intDistId, int intCType, int intGender, int restype)
    {
        CAFDAL ccobjcaf = new CAFDAL();

        dynamic qry = null;
        try
        {
            System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
            string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
            xdoc = XDocument.Load(pth + "sams/MasterXML/M_COLLEGE.xml");

            if (intGender == 2)
            { // for  Girls dont show boys college WomenStatus=0
                qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                      where Convert.ToInt32(p.Element("DID").Value) == intDistId
                      && Convert.ToInt32(p.Element("CTYPE").Value) == intCType
                      && Convert.ToInt32(p.Element("WomenStatus").Value) != 0 && (Convert.ToInt32(p.Element("ResStatus").Value) == 1 || Convert.ToInt32(p.Element("ResStatus").Value) == restype)
                      
                      select new { CID = p.Element("CID").Value, CNAME = p.Element("CNAME").Value.ToString() };
            }
            else if (intGender == 1)
            {  // for  Boys dont show Girls college WomenStatus=2
                qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                      where Convert.ToInt32(p.Element("DID").Value) == intDistId
                      && Convert.ToInt32(p.Element("CTYPE").Value) == intCType
                      && Convert.ToInt32(p.Element("WomenStatus").Value) != 2 && (Convert.ToInt32(p.Element("ResStatus").Value) == 1 || Convert.ToInt32(p.Element("ResStatus").Value) == restype)
                      select new { CID = p.Element("CID").Value, CNAME = p.Element("CNAME").Value.ToString() };
            }
            else
            {   // for  Transgender dont show boys and girls college WomenStatus=0,2. only show both colleges 1
                qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                      where Convert.ToInt32(p.Element("DID").Value) == intDistId && Convert.ToInt32(p.Element("CTYPE").Value) == intCType
                      && Convert.ToInt32(p.Element("WomenStatus").Value) == 1 && (Convert.ToInt32(p.Element("ResStatus").Value) == 1 || Convert.ToInt32(p.Element("ResStatus").Value) == restype)
                      select new { CID = p.Element("CID").Value, CNAME = p.Element("CNAME").Value.ToString() };
            }
            return qry;

        }
        catch (Exception ex)
        {

            Util.LogError(ex, "College");
        }

        return qry;
    }
    #endregion

    #region fillDistWiseColg
    [WebMethod()]
    public static dynamic fillDistWiseColgSelected(int intDistId, int intCType, int intGender, int restype, int CollegeId)
    {
        CAFDAL ccobjcaf = new CAFDAL();

        dynamic qry = null;
        try
        {
            System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
            string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
            xdoc = XDocument.Load(pth + "sams/MasterXML/M_COLLEGE_QUOTA.xml");

            //intCollegeId;// 5385;
            if (intGender == 2)
            { // for  Girls dont show boys college WomenStatus=0
                qry = from p in xdoc.Descendants("NewDataSet").Elements("TABLE")
                      where Convert.ToInt32(p.Element("DID").Value) == intDistId && Convert.ToInt32(p.Element("CTYPE").Value) == intCType && Convert.ToInt32(p.Element("CID").Value) == CollegeId
                      && Convert.ToInt32(p.Element("WomenStatus").Value) != 0 && (Convert.ToInt32(p.Element("ResStatus").Value) == 1 || Convert.ToInt32(p.Element("ResStatus").Value) == restype)
                      select new { CID = p.Element("CID").Value, CNAME = p.Element("CNAME").Value.ToString() };
            }
            else if (intGender == 1)
            {  // for  Boys dont show Girls college WomenStatus=2
                qry = from p in xdoc.Descendants("NewDataSet").Elements("TABLE")
                      where Convert.ToInt32(p.Element("DID").Value) == intDistId && Convert.ToInt32(p.Element("CTYPE").Value) == intCType && Convert.ToInt32(p.Element("CID").Value) == CollegeId
                      && Convert.ToInt32(p.Element("WomenStatus").Value) != 2 && (Convert.ToInt32(p.Element("ResStatus").Value) == 1 || Convert.ToInt32(p.Element("ResStatus").Value) == restype)
                      select new { CID = p.Element("CID").Value, CNAME = p.Element("CNAME").Value.ToString() };
            }
            else
            {   // for  Transgender dont show boys and girls college WomenStatus=0,2. only show both colleges 1
                qry = from p in xdoc.Descendants("NewDataSet").Elements("TABLE")
                      where Convert.ToInt32(p.Element("DID").Value) == intDistId && Convert.ToInt32(p.Element("CTYPE").Value) == intCType && Convert.ToInt32(p.Element("CID").Value) == CollegeId
                      && Convert.ToInt32(p.Element("WomenStatus").Value) == 1 && (Convert.ToInt32(p.Element("ResStatus").Value) == 1 || Convert.ToInt32(p.Element("ResStatus").Value) == restype)
                      select new { CID = p.Element("CID").Value, CNAME = p.Element("CNAME").Value.ToString() };
            }
            return qry;

        }
        catch (Exception ex)
        {

            Util.LogError(ex, "College");
        }

        return qry;
    }
    #endregion

    #region Fill District with web method

    [WebMethod()]
    public static dynamic fillDistrict(int intStateId)
    {
        System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        xdoc = XDocument.Load(pth + "sams/MasterXML/M_DISTRICT.xml");
        dynamic qry = new { };
        if (intStateId == 1)
            qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                  where Convert.ToInt32(p.Element("int_StateID").Value) == intStateId
                  select new { int_DistrictID = p.Element("int_DistrictID").Value, vch_DistrictName = p.Element("vch_DistrictName").Value.ToString() };
        else
            qry = new[] { new { int_DistrictID = 588, vch_DistrictName = "OTHER" } };

        return qry;
    }

    [WebMethod()]
    public static dynamic LoadDistrict()
    {
        System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        xdoc = XDocument.Load(pth + "sams/MasterXML/M_DISTRICT.xml");
        dynamic qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                      where Convert.ToInt32(p.Element("int_StateID").Value) == 1
                      select new { int_DistrictID = p.Element("int_DistrictID").Value, vch_DistrictName = p.Element("vch_DistrictName").Value.ToString() };
        return qry;
    }

    [WebMethod()]
    public static dynamic LoadDistrictClg(int intDistrictID)
    {
        System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        xdoc = XDocument.Load(pth + "sams/MasterXML/M_DISTRICT.xml");
        dynamic qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
                      where Convert.ToInt32(p.Element("int_StateID").Value) == 1 && Convert.ToInt32(p.Element("int_DistrictID").Value) == intDistrictID
                      select new { int_DistrictID = p.Element("int_DistrictID").Value, vch_DistrictName = p.Element("vch_DistrictName").Value.ToString() };
        return qry;
    }


    #endregion

    #region fillBlock
    [WebMethod()]
    public static dynamic fillBlock(int intDistId)
    {
        System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        xdoc = XDocument.Load(pth + "sams/MasterXML/M_BLOCK.xml");

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
    #endregion

    #region vacancy college
    [WebMethod()]
    public static dynamic vacancyColg(int intColId, int intStrid)
    {
        CAFDAL ccobjcaf = new CAFDAL();

        List<CAFEntity> rsnlist = new List<CAFEntity>();
        try
        {
              CAFEntity obj = new CAFEntity();
                obj.Action = "A";
                obj.IntID = intColId;
                obj.int_StreamID = intStrid;
                //obj.Cid = intCollegeID;
                rsnlist = ccobjcaf.Fillvacancycollege(obj);

            

        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            //rsnlist.Clear();
        }

        return rsnlist;
    }
    #endregion

    #region fillBSEMark
    [WebMethod()]
    public static dynamic fillBSEMark(string vchRollNo, int intYear, string vchRollCd, string vchDOB, int intExamType)
    {
        CAFDAL ccobjcaf = new CAFDAL();

        List<CAFEntity> rsnlist = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
           
                obj.Action = "A";
                obj.vchRollNo = vchRollNo;
                obj.vch_RollNo = vchRollCd;
                obj.DOB = vchDOB;
                obj.Year = intYear;
                obj.intOLNSStateID = intExamType;
                rsnlist = ccobjcaf.FillBoardMark(obj);
                // HttpContext.Current.Items["ValidateSts"]
                if (rsnlist.Count > 0)
                {
                    HttpContext.Current.Items["UniqueId2"] = rsnlist[0].pStrName;
                   
                }
                else
                {
                    HttpContext.Current.Items["UniqueId2"] = "";
                }


            
        }
        catch (Exception ex)
        {
            if (ex.ToString().Contains("converting date and/or time"))
            {
                obj.DOB = "Invalid Date";
            }
            rsnlist.Add(obj);
            return rsnlist;
        }
        finally
        {
            //rsnlist.Clear();
            obj = null;
        }
        return rsnlist;

    }
    #endregion

  
    #region fillMaximumMark
    [WebMethod()]
    public static dynamic fillMaximumMark(int intBoardId, int intYear)
    {
        CAFDAL ccobjcaf = new CAFDAL();

        int intMaxMarks = 500;

        try
        {
            
                CAFEntity obj = new CAFEntity
                {
                    Action = "m",
                    BoardId = intBoardId,
                    Year = intYear
                };
                intMaxMarks = ccobjcaf.GetMaxMarksByBoardYear(obj);
            
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "JrCafForm");
        }
        finally
        {
        }
        return intMaxMarks;

    }
    #endregion

    #region FillCompulsory
    //[WebMethod()]
    //public static dynamic FillCompulsory(int intCollegeID, int intStreamId)
    //{

    //    List<CAFEntity> list = new List<CAFEntity>();
    //    try
    //    {
    //        using (SAMSOLBusinessClient client = new SAMSOLBusinessClient())
    //        {
    //            list = client.getSubject(new CAFEntity()
    //            {
    //                Type = 1,
    //                vch_CollegeName =Convert.ToString( intCollegeID),
    //                vch_StreamName = Convert.ToString( intStreamId)
    //            });
    //        }
    //        return list;
    //    }
    //    catch (Exception ex)
    //    {
    //        throw ex;
    //    }
    //}
    //----------------Added By Banaja-------
    [WebMethod()]
    public static dynamic FillCompulsory1(int intCollegeID, int intStreamId)
    {
        CAFDAL ccobjcaf = new CAFDAL();

        List<CAFEntity> list = new List<CAFEntity>();
        try
        {
            
                list = ccobjcaf.getSubject(new CAFEntity()
                {
                    Type = 11,
                    vch_CollegeName = Convert.ToString(intCollegeID),
                    vch_StreamName = Convert.ToString(intStreamId)
                });
            
            return list;
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }
    [WebMethod()]
    public static dynamic FillCompulsory2(int intCollegeID, int intStreamId)
    {
        CAFDAL ccobjcaf = new CAFDAL();


        List<CAFEntity> list = new List<CAFEntity>();
        try
        {
            
                list = ccobjcaf.getSubject(new CAFEntity()
                {
                    Type = 12,
                    vch_CollegeName = Convert.ToString(intCollegeID),
                    vch_StreamName = Convert.ToString(intStreamId)
                });
            
            return list;
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }
    [WebMethod()]
    public static dynamic FillCompulsory3(int intCollegeID, int intStreamId)
    {
        CAFDAL ccobjcaf = new CAFDAL();

        List<CAFEntity> list = new List<CAFEntity>();
        try
        {
            
                list = ccobjcaf.getSubject(new CAFEntity()
                {
                    Type = 13,
                    vch_CollegeName = Convert.ToString(intCollegeID),
                    vch_StreamName = Convert.ToString(intStreamId)
                });
            
            return list;
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    #endregion

    #region Entity for CutOFFMARK
    public class CutofEntity
    {
        public string int_StreamID { get; set; }
        public string int_collegeid { get; set; }
        public string int_MarkGen_Per { get; set; }
        public string int_MarkST_Per { get; set; }
        public string int_MarkSC_Per { get; set; }
        public string int_MarkGen_II_Per { get; set; }
        public string int_MarkST_II_Per { get; set; }
        public string int_MarkSC_II_Per { get; set; }
    }
    #endregion


    #region Entity for HostelPriority
    public class HostelPriority
    {
        public string HID { get; set; }
        public string CID { get; set; }
        public string HSTATUS { get; set; }

    }
    #endregion



    #region Entity for HostelFees
    public class HostelFees
    {
        public string int_collegeId { get; set; }
        public string int_A1stYear { get; set; }
        public string int_A2ndYear { get; set; }
        public string int_S1stYear { get; set; }
        public string int_S2ndYear { get; set; }
        public string int_C1stYear { get; set; }
        public string int_C2ndYear { get; set; }

    }
    #endregion


    private void LoadCollegeIdGenderBase(int Gid)
    {
        System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        xdoc = XDocument.Load(pth + "sams/MasterXML/M_COLLEGE.xml");

        hdnMaleCol.Value = "";
        hdnFemaleCol.Value = "";
        hdnMFCol.Value = "";

        dynamic qry = null;

        qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
              where Convert.ToInt32(p.Element("WomenStatus").Value) == 0
              select new { CID = p.Element("CID").Value };
        foreach (var r in qry)
        {
            hdnMaleCol.Value = hdnMaleCol.Value + "," + r.CID + "";
        }
        hdnMaleCol.Value = hdnMaleCol.Value.TrimStart(',');  // All Male College ID

        qry = null;

        qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
              where Convert.ToInt32(p.Element("WomenStatus").Value) == 2
              select new { CID = p.Element("CID").Value };
        foreach (var r in qry)
        {
            hdnFemaleCol.Value = hdnFemaleCol.Value + "," + r.CID + "";
        }
        hdnFemaleCol.Value = hdnFemaleCol.Value.TrimStart(',');  // All Female College ID

        qry = null;

        qry = from p in xdoc.Descendants("NewDataSet").Elements("Table")
              where Convert.ToInt32(p.Element("WomenStatus").Value) != 1
              select new { CID = p.Element("CID").Value };
        foreach (var r in qry)
        {
            hdnMFCol.Value = hdnMFCol.Value + "," + r.CID + "";
        }
        hdnMFCol.Value = hdnMFCol.Value.TrimStart(','); // All MAle and Female College ID

    }

    protected void cbAadharAgree_CheckedChanged(object sender, EventArgs e)
    {
        if (cbAadharAgree.Checked)
        {
            txtAadhar.Text = "";
        }
    }

    protected void txtAadhar_TextChanged(object sender, EventArgs e)
    {
        if (txtAadhar.Text.Trim() != "")
        {
            cbAadharAgree.Checked = false;
        }
    }
}