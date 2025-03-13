using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CommonModels;
using CustomFaults;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Configuration;

public partial class StudentLogin_PribtCAF_SpotAdmission_Deg : System.Web.UI.Page
{
    int intOptionCnt;
    string strCBSE = "False";
    public int intStreamId = 0;
    CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, System.EventArgs e)
    {
        if (!IsPostBack)
        {
            //List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
            //list = fillDateline();

            if (Session["StudID"] != null)
            {

                List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
                list = fillDateline();
                DateTime lastCompartmentadteDate = list[0].dtmTranDate;
                int compart = DateTime.Compare(lastCompartmentadteDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                if (compart >= 0)
                {
                    divForm.Visible = true;
                    divDateLine.Visible = false;
                    fillGeneralInformation(Session["StudID"].ToString());
                }
                else
                {
                    divForm.Visible = false;
                    divDateLine.Visible = true;

                }

               
                //if (Session["SelectionStatus"] != null)
                //{
                //    if (Convert.ToInt32(Session["SelectionStatus"].ToString()) > 0 || list[0].SpecialCommunity > 0)
                //    {

                //        if (list[0].vchStatus.ToString().ToUpper() == "SUCCESS")
                //            {

                //                fillGeneralInformation(Session["StudID"].ToString());
                //            }
                //            else
                //            {
                //                Response.Redirect("FeesPayment.aspx");
                                
                //            }
                       
                //    }
                //    else
                //    {
                //        fillGeneralInformation(Session["StudID"].ToString());
                //    }
                //}  
            }
            else
            {
                Response.Redirect("StudentLogout_Deg.aspx");
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

        bool intNssU;
        bool intNssN;
        bool intNssS;
        bool intNssIN;


        CAFEntity_Deg obj = new CAFEntity_Deg();
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        List<CAFEntity_Deg> list1 = new List<CAFEntity_Deg>();
        // ================================

        string intAppId = strId.ToString();


        try
        {
           
                obj.Action = "R";
                obj.strId = intAppId;// Session["Uid"].ToString();
                list = ccobj.fillPrintOption(obj);
            
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "alert('" + ex.Message.Replace("'", "") + "');", true);
        }

        if (list.Count > 0)
        {

            if (list[0].CorBlockId == null)
            {
                intBlockID = 419;
            }
            else
            {
                intBlockID = list[0].CorBlockId;
            }

            if (list[0].vch_CouncilName == null)
            {
                lblBoard.Text = "";
                //   lblBoardApp.Text = "";
            }
            else
            {
                lblBoard.Text = list[0].vch_CouncilName.ToString().ToUpper();
                hdnBoardId.Value = list[0].BoardId.ToString();

            }

            if (lblBoard.Text == "BSEB, BIHAR")
            //if (Convert.ToInt32(list[0].BoardId) == 35)
            {
                tdRollCdH.Style.Clear();
                tdRollCdF.Style.Clear();
                if (list[0].vchRollNo == null)
                {
                    lblRollCode.Text = "";
                }
                else
                {
                    lblRollCode.Text = list[0].vchRollNo.ToString().ToUpper();
                }
            }
            else
            {
                tdRollCdH.Style.Add("display", "none");
                tdRollCdF.Style.Add("display", "none");
                lblRollCode.Text = "";
            }



            if (list[0].vch_ExamType == null)
            {
                lblExamType.Text = "";
                //   lblExamTypeApp.Text = "";
            }
            else if (list[0].vch_ExamType.ToString() == "1")
            {
                lblExamType.Text = "Annual";
                //  lblExamTypeApp.Text = "Annual";
            }
            else
            {
                lblExamType.Text = "Improvement";
                //     lblExamTypeApp.Text = "Supple/Inst";
            }
            if (list[0].int_YearOfPassing == null)
            {
                lblYOE.Text = "";
                //   lblYOEApp.Text = "";
            }
            else
            {
                lblYOE.Text = list[0].int_YearOfPassing.ToString();
                //    lblYOEApp.Text = list[0].int_YearOfPassing.ToString();
            }



            if (list[0].vch_RollCode == null)
            {
                lblRollCode.Text = "";
                //     lblRollApp.Text = "";
            }
            else
            {
                lblRollCode.Text = list[0].vch_RollCode.ToString();
                //  lblRollApp.Text = list[0].vch_RollNo.ToString();
            }


            if (list[0].vch_RollNo == null)
            {
                lblRoll.Text = "";
                //     lblRollApp.Text = "";
            }
            else
            {
                lblRoll.Text = list[0].vch_RollNo.ToString();
                //  lblRollApp.Text = list[0].vch_RollNo.ToString();
            }
            if (list[0].vch_ApplicantName == null)
            {
                lblApplName.Text = "";
                //    lblApplNameApp.Text = "";
            }
            else
            {
                lblApplName.Text = list[0].vch_ApplicantName.ToString().ToUpper();
                //  lblApplNameApp.Text = list[0].vch_ApplicantName.ToString().ToUpper();
            }
            if (list[0].vch_FatherName == null)
            {
                lblFatherName.Text = "";
                //  lblFatherNameApp.Text = "";
            }
            else
            {
                lblFatherName.Text = list[0].vch_FatherName.ToString().ToUpper();
                //  lblFatherNameApp.Text = list[0].vch_FatherName.ToString().ToUpper();
            }

            if (list[0].vch_MotherName == null)
            {
                lblMotherName.Text = "";
                //     lblMotherNameApp.Text = "";
            }
            else
            {
                lblMotherName.Text = list[0].vch_MotherName.ToString().ToUpper();
                //   lblMotherNameApp.Text = list[0].vch_MotherName.ToString().ToUpper();
            }

            if (list[0].vch_CorHouseNo == null)
            {
                lbldtl.Text = "";
            }
            else
            {
                lbldtl.Text = list[0].vch_CorHouseNo.ToString().ToUpper();
            }

            if (list[0].vch_BlockName == null)
            {
                lblulb.Text = "";
                // lblUidApp.Text = "";
            }
            else
            {
                lblulb.Text = list[0].vch_BlockName.ToString().ToUpper();
            }
            if (list[0].vch_DistrictName == null)
            {
                lbldist.Text = "";
            }
            else
            {
                lbldist.Text = list[0].vch_DistrictName.ToString().ToUpper();
            }

            if (list[0].vch_StateName == null)
            {
                lblstate.Text = "";
            }
            else
            {
                lblstate.Text = list[0].vch_StateName.ToString().ToUpper();
            }

            if (list[0].vch_CorPinCode == null)
            {
                lblpin.Text = "";
            }
            else
            {
                lblpin.Text = list[0].vch_CorPinCode.ToString();
            }
            if (list[0].vch_CorPhoneNo == null)
            {
                strPhone = "";
            }
            else
            {
                strPhone = list[0].vch_CorPhoneNo.ToString();
            }

            if (list[0].vch_CorMobileNo == null)
            {
                lblmob.Text = "";
            }
            else
            {
                lblmob.Text = list[0].vch_CorMobileNo.ToString();
            }

            if (list[0].vch_EMailID == null)
            {
                lblemail.Text = "";
            }
            else
            {
                lblemail.Text = list[0].vch_EMailID.ToString();
            }
            if (list[0].vch_GroupName == null)
            {
                lblBgroup.Text = "";
                // lblBgroupApp.Text = "";
            }
            else
            {
                lblBgroup.Text = list[0].vch_GroupName.ToString().ToUpper();
                // lblBgroupApp.Text = list[0].vch_GroupName.ToString().ToUpper();
            }

            if (list[0].int_Gender == null)
            {
                intGender = 0;
            }
            else
            {
                intGender = list[0].int_Gender;
            }

            if (list[0].vch_Religion == null)
            {
                lblreligion.Text = "";
                //   lblreligionApp.Text = "";
            }
            else
            {
                lblreligion.Text = list[0].vch_Religion.ToString().ToUpper();
                //  lblreligionApp.Text = list[0].vch_Religion.ToString().ToUpper();
            }
            if (list[0].vch_AdharNo == null)
            {
                //lblAdharNo.Text = "";
                // lblAdharNoApp.Text = "";
            }
            else
            {
                // lblAdharNo.Text = list[0].vch_AdharNo.ToString();
                //  lblAdharNoApp.Text = list[0].vch_AdharNo.ToString();
            }

            if (list[0].dtm_DOB == null)
            {

            }
            else
            {
                dtmDob = list[0].dtm_DOB;
            }
            if (list[0].int_CategoryId == null)
            {
                intRes = 0;
            }
            else
            {
                intRes = list[0].int_CategoryId;
            }

            if (list[0].bit_PHOH == null)
            {
                intPhoh = false;
            }
            else
            {
                intPhoh = list[0].bit_PHOH;
            }

            if (list[0].bit_ESM == null)
            {
                intEsm = false;
            }
            else
            {
                intEsm = list[0].bit_ESM;
            }

            if (list[0].bit_SDP == null)
            {
                intSdp = false;
            }
            else
            {
                intSdp = list[0].bit_SDP;
            }

            if (list[0].bit_CoM == null)
            {
                intCom = false;
            }
            else
            {
                intCom = list[0].bit_CoM;
            }



            if (list[0].bit_NCC_B == null)
            {
                intNccA = false;
            }
            else
            {
                intNccA = list[0].bit_NCC_B;
            }

            if (list[0].bit_NCC_C == null)
            {
                intNccC = false;
            }
            else
            {
                intNccC = list[0].bit_NCC_C;
            }

            if (list[0].bit_Scout_PR == null)
            {
                intSctPR = false;
            }
            else
            {
                intSctPR = list[0].bit_Scout_PR;            ///bit_Rover_PR;
            }
            if (list[0].bit_Scout_RP == null)
            {
                intSctRP = false;
            }
            else
            {
                intSctRP = list[0].bit_Scout_RP;            ///bit_Rover_RP;
            }
            if (list[0].bit_Sports_S == null)
            {
                intSpS = false;
            }
            else
            {
                intSpS = list[0].bit_Sports_S;
            }

            if (list[0].bit_Sports_N == null)
            {
                intSpN = false;
            }
            else
            {
                intSpN = list[0].bit_Sports_N;
            }

            if (list[0].bit_Sports_IN == null)
            {
                intSpIN = false;
            }
            else
            {
                intSpIN = list[0].bit_Sports_IN;
            }



            if (list[0].int_PrevStremID != null)
            {
                if (list[0].int_PrevStremID == 1)
                {
                    intStreamId = 1;
                    lblPrevStream.Text = "Arts";
                    //    lblPrevStreamApp.Text = "Arts";
                }

                if (list[0].int_PrevStremID == 2)
                {
                    lblPrevStream.Text = "Science";
                    //  lblPrevStreamApp.Text = "Science";
                    intStreamId = 2;
                }

                if (list[0].int_PrevStremID == 3)
                {
                    lblPrevStream.Text = "Commerce";
                    //   lblPrevStreamApp.Text = "Commerce";
                    intStreamId = 3;
                }

                if (list[0].int_PrevStremID == 4)
                {
                    lblPrevStream.Text = "Vocational";
                    //  lblPrevStreamApp.Text = "Vocational";
                    intStreamId = 4;
                }

                if (list[0].int_PrevStremID == 5)
                {
                    lblPrevStream.Text = "Diploma";
                    //  lblPrevStreamApp.Text = "Diploma";
                    intStreamId = 5;
                }

                if (list[0].int_PrevStremID == 6)
                {
                    lblPrevStream.Text = "Upashastri";
                    //  lblPrevStreamApp.Text = "Upashastri";
                    intStreamId = 6;
                }

            }
            else
            {
                lblPrevStream.Text = "";
                intStreamId = 0;
            }
            // =============NSS Camp============
            if (list[0].bit_NSS_U == null)
            {
                intNssU = false;
            }
            else
            {
                intNssU = list[0].bit_NSS_U;
            }

            if (list[0].bit_NSS_S == null)
            {
                intNssS = false;
            }
            else
            {
                intNssS = list[0].bit_NSS_S;
            }

            if (list[0].bit_NSS_N == null)
            {
                intNssN = false;
            }
            else
            {
                intNssN = list[0].bit_NSS_N;
            }

            if (list[0].bit_NSS_IN == null)
            {
                intNssIN = false;
            }
            else
            {
                intNssIN = list[0].bit_NSS_N;
            }

            if (intNssU == true)
            {
                lblNssU.Text = "Yes";
                //  lblNssUApp.Text = "Yes";
            }
            else
            {
                lblNssU.Text = "No";
                //   lblNssUApp.Text = "No";
            }

            if (intNssS == true)
            {
                lblNssS.Text = "Yes";
                //   lblNssSApp.Text = "Yes";
            }
            else
            {
                lblNssS.Text = "No";
                //   lblNssSApp.Text = "No";
            }

            if (intNssN == true)
            {
                lblNssN.Text = "Yes";
                //  lblNssNApp.Text = "Yes";
            }
            else
            {
                lblNssN.Text = "No";
                //   lblNssNApp.Text = "No";
            }

            if (intNssIN == true)
            {
                lblNssIN.Text = "Yes";
                //   lblNssINApp.Text = "Yes";
            }
            else
            {
                lblNssIN.Text = "No";
                //  lblNssINApp.Text = "No";
            }

            if (list[0].bit_OSA == null)
            {
                intOsa = false;
            }
            else
            {
                intOsa = list[0].bit_OSA;
            }

            if (list[0].bit_OLNS == null)
            {
                intOlns = false;
            }
            else
            {
                intOlns = list[0].bit_OLNS;
            }

            if (list[0].ENGLISH == null)
            {
                lblEngMark.Text = "";
                //    lblEngMarkApp.Text = "";
            }
            else
            {
                lblEngMark.Text = list[0].ENGLISH.ToString();
                //    lblEngMarkApp.Text = list[0].ENGLISH.ToString();
            }

            if (list[0].MIL == null)
            {
                lblMathMark.Text = "";
                //   lblMathMarkApp.Text = "";
            }
            else if (list[0].MIL == 0)
            {
                lblMathMark.Text = "";
                //  lblMathMarkApp.Text = "";
            }
            else
            {
                lblMathMark.Text = list[0].MIL.ToString();
                // lblMathMarkApp.Text = list[0].MIL.ToString();
            }

            if (list[0].CHEMISTRY == null)
            {
                lblScienceMark.Text = "";
                // lblScienceMarkApp.Text = "";
            }
            else if (list[0].CHEMISTRY == 0)
            {
                lblScienceMark.Text = "0";
                //  lblScienceMarkApp.Text = "0";
            }
            else
            {
                lblScienceMark.Text = list[0].CHEMISTRY.ToString();
                //   lblScienceMarkApp.Text = list[0].CHEMISTRY.ToString();
            }

            if (list[0].BIOLOGY == null)
            {
                lblPCBMark.Text = "";
                //lblPCBMarkApp.Text = "";
            }
            else if (list[0].BIOLOGY == 0)
            {
                lblPCBMark.Text = "0";
                // lblPCBMarkApp.Text = "0";
            }
            else
            {
                lblPCBMark.Text = list[0].BIOLOGY.ToString();
                //   lblPCBMarkApp.Text = list[0].BIOLOGY.ToString();
            }

            // =====================FOR MATHEMATICS===========
            if (list[0].MATH == null)
            {
                lblMathematics.Text = "";
                //  lblMathematicsApp.Text = "";
            }
            else if (list[0].MATH == 0)
            {
                lblMathematics.Text = "0";
                // lblMathematicsApp.Text = "0";
            }
            else
            {
                lblMathematics.Text = list[0].MATH.ToString();
                //   lblMathematicsApp.Text = list[0].MATH.ToString();
            }

            // ==========================================
            if (list[0].TOT == null)
            {
                lblTotalMark.Text = "0";
                // lblTotalMarkApp.Text = "0";
            }
            else
            {
                lblTotalMark.Text = list[0].TOT.ToString();
                //  lblTotalMarkApp.Text = list[0].TOT.ToString();
            }

            if (list[0].MAXTOTAL == null)
            {
                lblMaxMark.Text = "0";
                //   lblMaxMarkApp.Text = "0";
            }
            else
            {
                lblMaxMark.Text = list[0].MAXTOTAL.ToString();
                //  lblMaxMarkApp.Text = list[0].MAXTOTAL.ToString();
            }
            if (list[0].bit_Compartmental == null)
            {
                intCompt = false;
            }
            else
            {
                intCompt = list[0].bit_Compartmental;
            }

            if (list[0].OLNSState == null)
            {
                olnsState = "";
            }
            else
            {
                olnsState = list[0].OLNSState.ToString().ToUpper();
            }
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

            if (list[0].int_MarkVerfication == null)
            {
                intMarkVerification = 0;
            }
            else
            {
                intMarkVerification = Convert.ToInt16(list[0].int_MarkVerfication);
            }

            if (list[0].vch_UniqueRefNo == null)
            {
                strUid = "";
            }
            else
            {
                strUid = list[0].vch_UniqueRefNo;
            }

        }

        if (intGender == 1)
        {
            lblsex.Text = "MALE";
            //   lblsexApp.Text = "MALE";
        }
        else if (intGender == 2)
        {
            lblsex.Text = "FEMALE";
            //    lblsexApp.Text = "FEMALE";
        }
        else if (intGender == 3)
        {
            lblsex.Text = "TRANSGENDER";
            //    lblsexApp.Text = "FEMALE";
        }
        // ==================Reservation Category================

        lblOther.Text = "No";
        lblSC.Text = "No";
        lblST.Text = "No";
        lblobc.Text = "No";
        lblGeneral.Text = "No";
        lblWBC.Text = "No";
        if (intRes == 1)
        {
            lblGeneral.Text = "Yes";
        }
        else if (intRes == 2)
        {
            strDocTypes = (strDocTypes + ",12");
            lblSC.Text = "Yes";

        }
        else if (intRes == 3)
        {
            strDocTypes = (strDocTypes + ",12");
            lblST.Text = "Yes";
        }
        else if (intRes == 4)
        {
            strDocTypes = (strDocTypes + ",12");
            lblobc.Text = "Yes";

        }
        else if (intRes == 5)
        {
            strDocTypes = (strDocTypes + ",12");
            lblOther.Text = "Yes";
        }
        else if (intRes == 6)
        {
            strDocTypes = (strDocTypes + ",12");
            lblWBC.Text = "Yes";
        }
        if (intPhoh == true)
        {
            lblPHOH.Text = "Yes";
            strDocTypes = (strDocTypes + ",2");
        }
        else
        {
            lblPHOH.Text = "No";
        }

        if (intSdp == true)
        {
            lblSDP.Text = "Yes";
            strDocTypes = (strDocTypes + ",4");
        }
        else
        {
            lblSDP.Text = "No";
        }

        if (intCom == true)
        {
            lblCoM.Text = "Yes";
            strDocTypes = (strDocTypes + ",5");
        }
        else
        {
            lblCoM.Text = "No";
        }

        if (intEsm == true)
        {
            // lblESMApp.Text = "Yes";
            lblESM.Text = "Yes";
            strDocTypes = (strDocTypes + ",3");
        }
        else
        {
            //lblESMApp.Text = "No";
            lblESM.Text = "No";
        }

        // ====================Weightage Category==================
        if (intNccA == true)
        {
            //lblNccAApp.Text = "Yes";
            lblNccA.Text = "Yes";
            strDocTypes = (strDocTypes + ",7");
        }
        else
        {
            //lblNccAApp.Text = "No";
            lblNccA.Text = "No";
        }

        if (intNccC == true)
        {
            // lblNccCApp.Text = "Yes";
            lblNccC.Text = "Yes";
            strDocTypes = (strDocTypes + ",7");
        }
        else
        {
            //lblNccCApp.Text = "No";
            lblNccC.Text = "No";
        }

        if (intSctPR == true)
        {
            // lblPRApp.Text = "Yes";
            // lblPR.Text = "Yes";
            strDocTypes = (strDocTypes + ",8");
        }
        else
        {
            // lblPRApp.Text = "No";
            // lblPR.Text = "No";
        }

        if (intSctRP == true)
        {
            //lblRPApp.Text = "Yes";
            // lblRP.Text = "Yes";
            strDocTypes = (strDocTypes + ",8");
        }
        else
        {
            // lblRPApp.Text = "No";
            // lblRP.Text = "No";
        }

        if (intSpS == true)
        {
            //lblSportsSApp.Text = "Yes";
            lblSportsS.Text = "Yes";
            strDocTypes = (strDocTypes + ",9");
        }
        else
        {
            //lblSportsSApp.Text = "No";
            lblSportsS.Text = "No";
        }

        if (intSpN == true)
        {
            //lblSportsNApp.Text = "Yes";
            lblSportsN.Text = "Yes";
            strDocTypes = (strDocTypes + ",9");
        }
        else
        {
            // lblSportsNApp.Text = "No";
            lblSportsN.Text = "No";
        }

        if (intSpIN == true)
        {
            // lblSportsINApp.Text = "Yes";
            lblSportsIN.Text = "Yes";
            strDocTypes = (strDocTypes + ",9");
        }
        else
        {
            //lblSportsINApp.Text = "No";
            lblSportsIN.Text = "No";
        }

        // ==============OSA & OLNS Category======================
        if (intOsa == true)
        {
            //lblOSAApp.Text = "Yes";
            // lblOSA.Text = "Yes";
            //lblOSAStateApp.Text = strOsaState.ToString().ToUpper();
            // lblOSAState.Text = strOsaState.ToString().ToUpper();
            // tblOSA.Visible = true;
            //tblOSAApp.Visible = true;
            strDocTypes = (strDocTypes + ",6");
        }
        else
        {
            //tblOSAApp.Visible = false;
            //lblOSAApp.Text = "No";
            //tblOSA.Visible = false;
            //lblOSA.Text = "No";
            //lblOSAState.Text = "";
        }

        if (intOlns == true)
        {
            //tblOLNSApp.Visible = true;
            //tblOLNS.Visible = true;
            //lblOlns.Text = "Yes";
            //lblOlnsApp.Text = "Yes";
            //   lblOlnsState.Text = olnsState.ToString().ToUpper();
            //lblOlnsStateApp.Text = olnsState.ToString().ToUpper();
            strDocTypes = (strDocTypes + ",6");
        }
        else
        {
            //tblOLNSApp.Visible = false;
            //tblOLNS.Visible = false;
            //lblOlns.Text = "No";
            //lblOlnsApp.Text = "No";
            //lblOlnsState.Text = "";
            //lblOlnsStateApp.Text = "";
        }

        if (intCompt == true)
        {
            lblCompartmental.Text = "Yes";
            //lblCompartmentalApp.Text = "Yes";
            strDocTypes = (strDocTypes + ",10");
            getCompartmentalDetails(intAppId);
        }
        else
        {
            lblCompartmental.Text = "No";
            //lblCompartmentalApp.Text = "No";
        }

        // =====Mark Verification
        if (intMarkVerification == 0)
        {
            MarkVerification.Visible = false;
            //MarkVerificationApp.Visible = false;
        }
        else
        {
            if (intMarkVerification == 1)
            {
                lblMarkVerification.Text = "Yes";
                //lblMarkVerificationApp.Text = "Yes";
            }
            else
            {
                lblMarkVerification.Text = "No";
                //lblMarkVerificationApp.Text = "No";
            }

            MarkVerification.Visible = true;
            //MarkVerificationApp.Visible = true;
        }

        string strDate = dtmDob.ToString("dd MMM yyyy");
        lblDob.Text = strDate;
        //lblDobApp.Text = strDate;
        if (strPhone.Length > 2)
        {
            string[] strAry = strPhone.Split('-');
            lblAreaCode.Text = strAry[0];
            lblPhoneNo.Text = strAry[1];
        }

        if (list[0].vch_MotherTongue == null)
        {
            lblMT.Text = "";
        }
        else if (list[0].vch_MotherTongue.ToString() == "0")
        {
            lblMT.Text = "";
        }
        else
        {
            lblMT.Text = list[0].vch_MotherTongue.ToString();
        }

        if (list[0].vch_Nationality == null)
        {
            lblNat.Text = "";
        }
        else if (list[0].vch_Nationality.ToString() == "0")
        {
            lblNat.Text = "";
        }
        else
        {
            lblNat.Text = list[0].vch_Nationality;
        }

        lblUid.Text = strUid;
        imgId.ImageUrl = "BarcodeCS.ashx?ID=" + strUid.ToString().Trim();

        lblRefNo.Text = strUid;
        imgBarcode.ImageUrl = "BarcodeCS.ashx?ID=" + strUid.ToString().Trim();

        if (list[0].vch_fathersOccupation == null)
        {
            //  lblFO.Text = "";
        }
        else if (list[0].vch_fathersOccupation.ToString() == "0")
        {
            //  lblFO.Text = "";
        }
        else
        {
            // lblFO.Text = list[0].vch_fathersOccupation.ToString();
        }

        if (list[0].vch_mothersOccupation == null)
        {
            //lblMO.Text = "";
        }
        else if (list[0].vch_mothersOccupation.ToString() == "0")
        {
            //  lblMO.Text = "";
        }
        else
        {
            //  lblMO.Text = list[0].vch_mothersOccupation.ToString();
        }

        if (list[0].int_AIncomeID == null)
        {
            // lblPI.Text = "";
        }
        else if (list[0].int_AIncomeID.ToString() == "0")
        {
            //lblPI.Text = "";
        }
        else
        {
            //lblPI.Text = list[0].int_AIncomeID.ToString();
        }


        if (list[0].vch_LastInstitute == null)
        {
            lblSchName.Text = "";
        }
        else if (list[0].vch_LastInstitute.ToString() == "")
        {
            lblSchName.Text = "";
        }
        else
        {
            lblSchName.Text = list[0].vch_LastInstitute.ToString();
        }

        if (list[0].vch_LastInst_Location == null)
        {
            lblSchloc.Text = "";
        }
        else if (list[0].vch_LastInst_Location.ToString() == "")
        {
            lblSchloc.Text = "";
        }
        else
        {
            lblSchloc.Text = list[0].vch_LastInst_Location.ToString();
        }

        if (list[0].LastInst_District == null)
        {
            lblLIDist.Text = "";
        }
        else if (list[0].LastInst_District.ToString() == "")
        {
            lblLIDist.Text = "";
        }
        else
        {
            string dist = list[0].LastInst_District.ToString();
            lblLIDist.Text = dist.ToUpper();
        }

        if (list[0].int_YearOfJoining == null)
        {
            lblyoj.Text = "";
        }
        else if (list[0].int_YearOfJoining.ToString() == "0")
        {
            lblyoj.Text = "";
        }
        else
        {
            lblyoj.Text = list[0].int_YearOfJoining.ToString();
        }

        if (list[0].int_YearOfLeaving == null)
        {
            lblyol.Text = "";
        }
        else if (list[0].int_YearOfLeaving.ToString() == "0")
        {
            lblyol.Text = "";
        }
        else
        {
            lblyol.Text = list[0].int_YearOfLeaving.ToString();
        }
        if (list[0].vchBSEBtrnId != null)
        {
            lblCtrnid.Text = list[0].vchBSEBtrnId;
        }
        if (list[0].vchVendortrnId != null)
        {
            lblBankTrnId.Text = list[0].vchVendortrnId;
        }
        if (list[0].compulsory != null)
        {
            lblStatus.Text = list[0].compulsory;
        }
        if (lblStatus.Text.ToUpper().Trim() == "SUCCESS")
        {
            PaymentStatus.Visible = false;
        }
        else
        {
            PaymentStatus.Visible = true;

        }
        if (strUid != "")
        {
            string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();
            if (File.Exists((GetPhotoDetails() + "\\" + intBlockID + "\\" + strUid + ".jpg")))
            {

                imgPhoto.ImageUrl = "~/DownloadImage.ashx?clsid=2&id=" + list[0].CorBlockId.ToString() + "/" + list[0].vchImageName;
                //pthview + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES" + "/" + list[0].CorBlockId.ToString() + "/" + list[0].vchImageName;

            }
            else
            {
                imgPhoto.ImageUrl = "~/images/noimage.jpg";
            }
        }
        else
        {
            imgPhoto.ImageUrl = "~/images/noimage.JPG";
        }


    }
    public string GetPhotoDetails()
    {
        string strResult = "";
        string path = ConfigurationManager.AppSettings["StrPath"].ToString();
        strResult = (path + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES");
        return strResult;
    }
    public string ViewPhotoDetails()
    {
        string strResult = "";
        string path = ConfigurationManager.AppSettings["StrPathView"].ToString();
        strResult = (path + "SAMS/ONLINE_CAF_DEG/APPL_IMAGES");

        return strResult;
    }
    protected void getCompartmentalDetails(string intAppId)
    {
        CAFEntity_Deg obj = new CAFEntity_Deg();
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        obj.Action = "C";
        //obj.strId = Convert.ToString(Session["Uid"]);
        obj.strId = intAppId;
        obj.CollStatus = 0;
        try
        {
            
                list = ccobj.fillPrintOption(obj);
                grdCompartment.DataSource = list;
                grdCompartment.DataBind();
            
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "Printcafdeg");
        }
        finally
        {
            list.Clear();
        }

        
    }
   
}