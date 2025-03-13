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


public partial class StudentLogin_PrintCAF_QuotaAdmission : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    int intOptionCnt;
    string strCBSE = "False";

    protected void Page_Load(object sender, System.EventArgs e)
    {
        if (!IsPostBack)
        {
            if (Session["StudID"] != null)
            {
                hdnCBSE.Value = "False";
                fillGeneralInformation(Session["StudID"].ToString());

            }
            else
            {
                Response.Redirect("StudentLogout_Jun.aspx");
            }


        }
    }

    string year = DateTime.Now.Year.ToString();
    protected void fillGeneralInformation(string strId)
    {

        string strDocTypes = "1";
        //==============Varibles==========
        int intGender = 0;
        DateTime dtmDob = default(DateTime);
        int intRes = 0;
        bool intPhoh = false;
        bool intSdp = false;
        bool intEsm = false;
        bool intCom = false;
        bool intNccA = false;
        bool intNccC = false;
        bool intSctPR = false;
        bool intSctRP = false;
        bool intSpS = false;
        bool intSpN = false;
        bool intSpIN = false;
        bool intOsa = false;
        bool intOlns = false;
        bool intCompt = false;
        string olnsState = "";
        string strOsaState = "";
        string strImage = "";
        string strUid = "";
        int intBlockID = 0;
        //================================
        string strPhone = "";
        short intMarkVerification = 0;


        List<CAFEntity> list = new List<CAFEntity>();
        List<CAFEntity> list1 = new List<CAFEntity>();
        List<CAFEntity> listoption = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        CAFEntity obj1 = new CAFEntity();
        CAFEntity obj2 = new CAFEntity();

        obj.strId = Convert.ToString(strId);

        try
        {
            obj.Action = "A";
            obj.vch_UniqueRefNo = Session["StudID"].ToString();
            obj1.Action = "N";
            obj1.vch_UniqueRefNo = Session["StudID"].ToString();
            obj2.Action = "B";
            obj2.vch_UniqueRefNo = Session["StudID"].ToString();
            
                list = ccobj.FillCAF(obj);
                list1 = ccobj.FillCAF(obj1);
                listoption = ccobj.FillCAF(obj2);
            



            if (list1.Count > 0)
            {
                if (list1[0].int_MarkSL == null)
                {

                    lblEngMark.Text = "";

                }

                else
                {
                    if (list1[0].int_MarkSL.ToString() == "0")
                    {
                        lblEngMark.Text = "";

                    }
                    else
                    {
                        lblEngMark.Text = list1[0].int_MarkSL.ToString();

                    }

                }
                if (list1[0].int_MarkMath == null)
                {
                    lblMathMark.Text = "";

                }
                else
                {
                    if (list1[0].int_MarkMath.ToString() == "0")
                    {
                        lblMathMark.Text = "";

                    }
                    else
                    {
                        lblMathMark.Text = list1[0].int_MarkMath.ToString();

                    }

                }
                if (list1[0].int_MarkScience == null)
                {
                    lblScienceMark.Text = "";

                }
                else
                {
                    if (list1[0].int_MarkScience.ToString() == "0")
                    {
                        lblScienceMark.Text = "";
                        lblScienceMark.Text = "";
                    }
                    else
                    {
                        lblScienceMark.Text = list1[0].int_MarkScience.ToString();

                    }

                }
                if (list1[0].int_MarkSocialStudies == null)
                {
                    lblSSMark.Text = "";

                }
                else
                {
                    if (list1[0].int_MarkSocialStudies.ToString() == "0")
                    {
                        lblSSMark.Text = "";
                        lblSSMark.Text = "";
                    }
                    else
                    {
                        lblSSMark.Text = list1[0].int_MarkSocialStudies.ToString();

                    }
                }
                if (list1[0].int_TotalMark == null)
                {
                    lblTotalMark.Text = "";

                }
                else
                {
                    if (list1[0].int_TotalMark.ToString().Contains(".00"))
                    {
                        lblTotalMark.Text = list1[0].int_TotalMark.ToString().Replace(".00", "");

                    }
                    else
                    {
                        lblTotalMark.Text = list1[0].int_TotalMark.ToString();

                    }

                }
                if (list1[0].int_MaximumMark == null)
                {
                    lblMaxMark.Text = "";

                }
                else
                {
                    lblMaxMark.Text = list1[0].int_MaximumMark.ToString();

                }
                if (list1[0].vch_Grade == null)
                {
                    tdGrade.Visible = false;
                    tdGradelbl.Visible = false;

                }
                else
                {
                    if (list1[0].vch_Grade.ToString() == "0")
                    {
                        tdGrade.Visible = false;
                        tdGradelbl.Visible = false;

                    }
                    else
                    {

                        tdGrade.Visible = true;
                        tdGradelbl.Visible = true;
                        lblGrade.Text = list1[0].vch_Grade;

                    }

                }
            }
            if (list.Count > 0)
            {
                if (list[0].aadharSts == 0)
                {
                    lblAadharno.Text = "I, hereby declare that I have not enrolled in Aadhaar and have not got any Aadhaar number. I also understand that any false declaration made by me may have consequence of cancellation of my candidature.";
                }
                else
                {
                    lblAadharno.Text = list[0].aadharNo;
                }
                if (list[0].int_blockid == null)
                {
                    intBlockID = 419;
                }
                else
                {
                    intBlockID = list[0].int_blockid;
                }

                if (list[0].vch_BoardName == null)
                {
                    lblBoard.Text = "";

                }
                else
                {
                    lblBoard.Text = list[0].vch_BoardName.ToString().ToUpper();
                    hdnBoardId.Value = list[0].BoardId.ToString();
                    if (lblBoard.Text == "BSEB, BIHAR" || hdnBoardId.Value == "118")
                    {
                        tdRollCdF.Style.Clear();
                        tdRollCdH.Style.Clear();
                    }
                    else
                    {
                        tdRollCdF.Style.Add("display", "none");
                        tdRollCdH.Style.Add("display", "none");
                    }

                }
                if (list[0].vch_ExamType == null)
                {
                    lblExamType.Text = "";

                }
                else
                {
                    if (list[0].vch_ExamType.ToString() == "1")
                    {
                        lblExamType.Text = "Annual";

                    }
                    else
                    {
                        lblExamType.Text = "Improvement";

                    }
                }
                if (list[0].int_YearOfPassing == null)
                {
                    lblYOE.Text = "";

                }
                else
                {
                    lblYOE.Text = list[0].int_YearOfPassing.ToString();
                    hdnYOP.Value = lblYOE.Text;
                    if (list[0].vch_RollNo == null)
                    {
                        lblRoll.Text = "";

                    }
                    else
                    {
                        lblRoll.Text = list[0].vch_RollNo.ToString();

                    }
                    if (list[0].RollCode == null)
                    {
                        lblRollCode.Text = "";

                    }
                    else
                    {
                        lblRollCode.Text = list[0].RollCode.ToString();

                    }

                    if ((hdnBoardId.Value == "109") && (list[0].int_YearOfPassing == 2024))

                    {

                        if (list[0].pStrName == null)
                        {
                            lblUniqueId.Text = "";

                        }
                        else
                        {
                            trUniqueId.Attributes.Add("style", "");
                            lblUniqueId.Text = list[0].pStrName.ToString().ToUpper();

                        }
                    }

                    if (list[0].vch_ApplicantName == null)
                    {
                        lblApplName.Text = "";

                    }
                    else
                    {
                        lblApplName.Text = list[0].vch_ApplicantName.ToString().ToUpper();

                    }
                    if (list[0].vch_FatherName == null)
                    {
                        lblFatherName.Text = "";
                    }
                    else
                    {
                        lblFatherName.Text = list[0].vch_FatherName.ToString().ToUpper();
                    }
                    if (list[0].vch_MotherName == null)
                    {
                        lblMotherName.Text = "";
                    }
                    else
                    {
                        lblMotherName.Text = list[0].vch_MotherName.ToString().ToUpper();
                    }



                    if (list[0].CorHouseNo == null)
                    {
                        lbldtl.Text = "";
                    }
                    else
                    {
                        lbldtl.Text = list[0].CorHouseNo.ToString().ToUpper();
                    }
                    if (list[0].Per_Block == null)
                    {
                        lblulb.Text = "";
                    }
                    else
                    {
                        lblulb.Text = list[0].Per_Block.ToString().ToUpper();
                    }
                    if (list[0].Per_Dist == null)
                    {
                        lbldist.Text = "";
                    }
                    else
                    {
                        lbldist.Text = list[0].Per_Dist.ToString().ToUpper();
                    }
                    if (list[0].CorState == null)
                    {
                        lblstate.Text = "";
                    }
                    else
                    {
                        lblstate.Text = list[0].CorState.ToString().ToUpper();
                    }
                    if (list[0].CorPinCode == null)
                    {
                        lblpin.Text = "";
                    }
                    else
                    {
                        lblpin.Text = list[0].CorPinCode;
                    }
                    if (list[0].CorPhNo == null)
                    {
                        strPhone = "";
                    }
                    else
                    {
                        strPhone = list[0].CorPhNo;
                    }
                    if (list[0].CorMobileNo == null)
                    {
                        lblmob.Text = "";
                    }
                    else
                    {
                        lblmob.Text = list[0].CorMobileNo;
                    }
                    if (list[0].EmailId == null)
                    {
                        lblemail.Text = "";
                    }
                    else
                    {
                        lblemail.Text = list[0].EmailId;
                    }
                    if (list[0].BloodGroupName == null)
                    {
                        lblBgroup.Text = "";

                    }
                    else
                    {
                        lblBgroup.Text = list[0].BloodGroupName.ToString().ToUpper();

                    }
                    if (list[0].GENDER == null)
                    {
                        lblsex.Text = "";
                    }
                    else
                    {
                        lblsex.Text = list[0].GENDER.ToString().ToUpper();
                    }
                    if (list[0].vch_Religion == null)
                    {
                        lblreligion.Text = "";

                    }
                    else
                    {
                        lblreligion.Text = list[0].vch_Religion.ToString().ToUpper();

                    }
                    if (list[0].dtm_DOB == null)
                    {
                    }
                    else
                    {
                        dtmDob = list[0].dtm_DOB;
                    }
                    if (list[0].CategoryId == null)
                    {
                        intRes = 0;
                    }
                    else
                    {
                        intRes = list[0].CategoryId;

                    }
                    if (list[0].PHOH == null)
                    {
                        intPhoh = false;
                    }
                    else
                    {
                        intPhoh = Convert.ToBoolean(list[0].PHOH);
                    }
                    if (list[0].ESM == null)
                    {
                        intEsm = false;
                    }
                    else
                    {
                        intEsm = list[0].ESM;
                    }
                    if (list[0].SDP == null)
                    {
                        intSdp = false;
                    }
                    else
                    {
                        intSdp = Convert.ToBoolean(list[0].SDP);
                    }
                    if (list[0].CoM == null)
                    {
                        intCom = false;
                    }
                    else
                    {
                        intCom = Convert.ToBoolean(list[0].CoM);
                    }
                    if (list[0].NCCA == null)
                    {
                        intNccA = false;
                    }
                    else
                    {
                        intNccA = Convert.ToBoolean(list[0].NCCA);
                    }
                    if (list[0].NCCC == null)
                    {
                        intNccC = false;
                    }
                    else
                    {
                        intNccC = Convert.ToBoolean(list[0].NCCC);
                    }
                    if (list[0].ScoutPR == null)
                    {
                        intSctPR = false;
                    }
                    else
                    {
                        intSctPR = list[0].ScoutPR;
                    }
                    if (list[0].ScoutRP == null)
                    {
                        intSctRP = false;
                    }
                    else
                    {
                        intSctRP = Convert.ToBoolean(list[0].ScoutRP);
                    }
                    if (list[0].SportsS == null)
                    {
                        intSpS = false;
                    }
                    else
                    {
                        intSpS = Convert.ToBoolean(list[0].SportsS);
                    }
                    if (list[0].SportsN == null)
                    {
                        intSpN = false;
                    }
                    else
                    {
                        intSpN = Convert.ToBoolean(list[0].SportsN);
                    }
                    if (list[0].SportsIN == null)
                    {
                        intSpIN = false;
                    }
                    else
                    {
                        intSpIN = Convert.ToBoolean(list[0].SportsIN);
                    }
                    if (list[0].bit_OSA == null)
                    {
                        intOsa = false;
                    }
                    else
                    {
                        intOsa = Convert.ToBoolean(list[0].bit_OSA);
                    }
                    if (list[0].bit_OLNS == null)
                    {
                        intOlns = false;
                    }
                    else
                    {
                        intOlns = Convert.ToBoolean(list[0].bit_OLNS);
                    }
                    if ((lblBoard.Text == "CBSE, NEW DELHI" && Convert.ToInt32(lblYOE.Text) >= 2010 && Convert.ToInt32(lblYOE.Text) < 2018) || (lblBoard.Text == "BSE, ANDHRA PRADESH" & Convert.ToInt32(lblYOE.Text) >= 2012))
                    {
                        strCBSE = "True";
                        hdnCBSE.Value = "True";
                    }
                    else if (lblBoard.Text == "BPE, KERALA" & Convert.ToInt32(lblYOE.Text) >= 2010)
                    {
                        strCBSE = "KERALA";
                        hdnCBSE.Value = "KERALA";
                    }

                    if (list[0].bit_Compartmental == null)
                    {
                        intCompt = false;
                    }
                    else
                    {
                        intCompt = Convert.ToBoolean(list[0].bit_Compartmental);
                    }
                    if (list[0].OLNSState == null)
                    {
                        olnsState = "";
                    }
                    else
                    {
                        olnsState = list[0].OLNSState.ToString().ToUpper();
                    }
                    //==============================


                    if (list[0].vch_MotherTongue == null)
                    {
                        lblMT.Text = "";
                    }
                    else
                    {
                        if (list[0].vch_MotherTongue.ToString() == "0")
                        {
                            lblMT.Text = "";
                        }
                        else
                        {
                            lblMT.Text = list[0].vch_MotherTongue;
                        }
                    }

                    if (list[0].Nationality == null)
                    {
                        lblNat.Text = "";
                    }
                    else
                    {
                        if (list[0].Nationality.ToString() == "0")
                        {
                            lblNat.Text = "";
                        }
                        else
                        {
                            lblNat.Text = list[0].Nationality;
                        }
                    }


                    if (list[0].LastInst == null)
                    {
                        lblSchName.Text = "";
                    }
                    else
                    {
                        if (list[0].LastInst.ToString() == "0")
                        {
                            lblSchName.Text = "";
                        }
                        else
                        {
                            lblSchName.Text = list[0].LastInst;
                        }
                    }

                    if (list[0].LastInstLoc == "0")
                    {
                        lblSchloc.Text = "";
                    }
                    else
                    {
                        if (list[0].LastInstLoc.ToString() == "0")
                        {
                            lblSchloc.Text = "";
                        }
                        else
                        {
                            lblSchloc.Text = list[0].LastInstLoc;
                        }
                    }

                    if (list[0].LastInstDist == null)
                    {
                        lblLIDist.Text = "";
                    }
                    else
                    {
                        if (list[0].LastInstDist.ToString() == "0")
                        {
                            lblLIDist.Text = "";
                        }
                        else
                        {
                            string dist = list[0].strLastInstDist;
                            lblLIDist.Text = dist.ToUpper();
                        }
                    }

                    if (list[0].YearOfJoining == null)
                    {
                        lblyoj.Text = "";
                    }
                    else
                    {
                        if (list[0].YearOfJoining.ToString() == "0")
                        {
                            lblyoj.Text = "";
                        }
                        else
                        {
                            lblyoj.Text = list[0].YearOfJoining.ToString();
                        }
                    }

                    if (list[0].int_YearOfLeaving == null)
                    {
                        lblyol.Text = "";
                    }
                    else
                    {
                        if (list[0].YearOfLeaving.ToString() == "0")
                        {
                            lblyol.Text = "";
                        }
                        else
                        {
                            lblyol.Text = list[0].YearOfLeaving.ToString();
                        }
                    }
                    //===================
                    if (list[0].OSAState == null)
                    {
                        strOsaState = "";
                    }
                    else
                    {
                        strOsaState = list[0].OSAState;
                    }

                    if (list[0].vchImageName == null)
                    {
                        strImage = "";
                    }
                    else
                    {
                        strImage = list[0].vchImageName;
                    }
                    if (list[0].vch_UniqueRefNo == null)
                    {
                        strUid = "";
                        //    lblRefIdApp.Text = ""
                    }
                    else
                    {
                        strUid = list[0].vch_UniqueRefNo;
                        //    lblRefIdApp.Text = strUid
                    }


                }
                //==================Reservation Category================
                lblOther.Text = "No";
                lblSC.Text = "No";
                lblST.Text = "No";
                lblobcapp.Text = "No";
                lblGeneral.Text = "No";
                lblWBC.Text = "No";
                lblEWS.Text = "No";

                if (intRes == 5)
                {
                    lblOther.Text = "Yes";

                }
                else if (intRes == 2)
                {

                    lblSC.Text = "Yes";

                }
                else if (intRes == 3)
                {

                    lblST.Text = "Yes";

                }
                else if (intRes == 4)
                {

                    lblobcapp.Text = "Yes";

                }
                else if (intRes == 1)
                {
                    lblGeneral.Text = "Yes";
                    trEWS.Visible = true;
                    if (list[0].intEWS == null)
                    {
                        lblEWS.Text = "No";
                    }
                    else if (list[0].intEWS == 1)
                    {
                        lblEWS.Text = "Yes";
                    }
                    else
                    {
                        lblEWS.Text = "No";
                    }
                }
                else if (intRes == 6)
                {
                    strDocTypes = (strDocTypes + ",12");
                    lblWBC.Text = "Yes";
                }
                if (intPhoh == true)
                {
                    lblPHOH.Text = "Yes";

                    strDocTypes = strDocTypes + ",2";
                }
                else
                {
                    lblPHOH.Text = "No";

                }
                if (intSdp == true)
                {
                    lblSDP.Text = "Yes";

                    strDocTypes = strDocTypes + ",4";
                }
                else
                {
                    lblSDP.Text = "No";

                }
                if (intCom == true)
                {
                    lblCoM.Text = "Yes";

                    strDocTypes = strDocTypes + ",5";
                }
                else
                {
                    lblCoM.Text = "No";

                }
                if (intEsm == true)
                {
                    lblESM.Text = "Yes";

                    strDocTypes = strDocTypes + ",3";
                }
                else
                {
                    lblESM.Text = "No";

                }
              
                //'=====Mark Verification

                if (intMarkVerification == 0)
                {
                    MarkVerification.Visible = false;

                }
                else
                {
                    if (intMarkVerification == 1)
                    {
                        lblMarkVerification.Text = "Yes";

                    }
                    else
                    {
                        lblMarkVerification.Text = "No";

                    }
                    MarkVerification.Visible = true;

                }


                if (intCompt == true)
                {
                    lblCompartmental.Text = "Yes";

                    strDocTypes = strDocTypes + ",10";
                    grdCompartment.DataSource = list;
                    grdCompartment.DataBind();
                }
                else
                {
                    lblCompartmental.Text = "No";

                }

                lblDob.Text = list[0].DOB;

                if (strPhone.Length > 2)
                {
                    string[] strAry = strPhone.Split('-');
                    lblAreaCode.Text = strAry[0];
                    lblPhoneNo.Text = strAry[1];
                }
                //---------------------kGBAC-----------------------
                if (list[0].KGBACSts.ToString() == null)
                {
                    lblKGBAC.Text = "No";
                }
                else
                {
                    if (list[0].KGBACSts.ToString() == "1")
                    {
                        lblKGBAC.Text = "Yes";
                    }
                    else
                    {
                        lblKGBAC.Text = "No";
                    }
                }

                lblUid.Text = strUid;
                imgId.ImageUrl = "BarcodeCS.ashx?ID=" + strUid.ToString().Trim();

                lblRefNo.Text = strUid;
                imgBarcode.ImageUrl = "BarcodeCS.ashx?ID=" + strUid.ToString().Trim();

                string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();
                if (!string.IsNullOrEmpty(Convert.ToString(list[0].vchImageName)))
                {
                    //Directory.GetFiles(pth)
                    hdnImgAppl.Value = list[0].vchImageName;
                    imgPhoto.ImageUrl = imgPhoto.ImageUrl = "~/DownloadImage.ashx?clsid=1&id=" + list[0].CorBlockId.ToString() + "/" + list[0].vchImageName;
                }
                else
                {
                    imgPhoto.ImageUrl = "~/images/noimage.jpg";
                }
                grdOptions.DataSource = listoption;
                grdOptions.DataBind();


                
            }
        }

        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(Page, this.GetType(), "Myalert", "jAlert('','<strong>" + ex.Message.ToString().Replace("'", "") + "</strong>', Title);", true);
        }
    }
}