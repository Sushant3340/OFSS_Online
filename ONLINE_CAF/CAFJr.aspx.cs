using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CommonModels;
using OFSS_OL_Entity;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Configuration;

public partial class ONLINE_CAF_CAFJr : System.Web.UI.Page
{

    CAFDAL ccobjcaf = new CAFDAL();
    int intOptionCnt;
    string strCBSE = "False";
    protected void Page_Load(object sender, System.EventArgs e)
    {
        if (!IsPostBack)
        {

            if (Request.QueryString["AppId1"] != null)
            {
                fillGeneralInformation(Request.QueryString["AppId1"]);
                fillOption(Request.QueryString["AppId1"]);
                FillDocument();
                printStatus(Request.QueryString["AppId1"]);
            }

            //fillGeneralInformation("24J0001454");
            //fillOption("24J0001454");
            //FillDocument();
            //printStatus("24J0001454");
        }
    }
    protected void printStatus(string strId)
    {
        OFSS_OL_Entity.CAFEntity obj1 = new OFSS_OL_Entity.CAFEntity();
        obj1.Action = "C";
        obj1.strId = Convert.ToString(strId);
        obj1.ApplicationStatus = 1;
        obj1.CollStatus = 1;
        try
        {

            ccobjcaf.AddconfprintData(obj1);
            
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "cafjr");
        }
        
    }

    protected void FillDocument()
    {
        //System.Xml.Linq.XDocument xdoc = default(System.Xml.Linq.XDocument);
        DataSet DocDatasource = new DataSet();
        //DocDatasource.ReadXml(Server.MapPath("../MasterXML/M_DOCAttached.xml"));
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        DocDatasource.ReadXml(pth + "SAMS/MasterXML/M_DOCAttached.xml");
        DataView dvSource = default(DataView);
        dvSource = DocDatasource.Tables[0].DefaultView;
        string FilterData = "int_DocumentID in (1,2";
        if ((lblCompartmental.Text == "Yes / हाँ"))
        {
            FilterData = FilterData + ",3";
        }
        if ((lblST.Text == "Yes" || lblSC.Text == "Yes"))
        {
            FilterData = FilterData + ",4";
        }
        if ((lblPHOH.Text == "Yes"))
        {
            FilterData = FilterData + ",5";
        }
        if ((lblESM.Text == "Yes"))
        {
            FilterData = FilterData + ",6";
        }
        if ((lblSDP.Text == "Yes"))
        {
            FilterData = FilterData + ",7";
        }
        if ((lblCoM.Text == "Yes"))
        {
            FilterData = FilterData + ",8";
        }

        if ((lblNccA.Text == "Yes" || lblNccC.Text == "Yes"))
        {
            FilterData = FilterData + ",10";
        }
        if ((lblRP.Text == "Yes" || lblPR.Text == "Yes"))
        {
            FilterData = FilterData + ",11";
        }
        if ((lblSportsS.Text == "Yes" || lblSportsN.Text == "Yes" || lblSportsIN.Text == "Yes"))
        {
            FilterData = FilterData + ",12";
        }
        if ((lblBoard.Text != "BSE, ODISHA"))
        {
            FilterData = FilterData + ",13";
        }
        FilterData = FilterData + ")";
        dvSource.RowFilter = FilterData;
    }

    protected void fillOption(string strId)
    {
        OFSS_OL_Entity.CAFEntity obj = new OFSS_OL_Entity.CAFEntity();
        List<OFSS_OL_Entity.CAFEntity> list = new List<OFSS_OL_Entity.CAFEntity>();
        obj.Action = "V";
        obj.strId = Convert.ToString(strId);
        obj.CollStatus = 0;
        int amt = 0;
        string intAppId = Convert.ToString(strId);
        try
        {
           
                list = ccobjcaf.fillconfprintoption(obj);
            
            if (list.Count > 0)
            {
                grdOptions.DataSource = list;
                grdOptions.DataBind();
            }
            intOptionCnt = list.Count;
            amt = Convert.ToInt32(50 * (intOptionCnt - 1)) + Convert.ToInt32(100);
            //lblAmount.Text = Convert.ToString(amt) + ".00";
            //lblAmountApp.Text = Convert.ToString(amt) + ".00";
            if ((lblST.Text.Trim() == "Yes") || (lblSC.Text.Trim() == "Yes"))
            {
            }
            else
                if ((lblOther.Text.Trim() == "Yes") || (lblGeneral.Text.Trim() == "Yes"))
            {
                //(lblobc.Text.Trim() == "Yes") || 
            }

        }


        catch (Exception ex)
        {
            Util.LogError(ex, "CAFJr");
        }
        finally
        {
            list.Clear();
        }

    }

    protected void getCompartmentalDetails(string strid)
    {
        OFSS_OL_Entity.CAFEntity obj = new OFSS_OL_Entity.CAFEntity();
        List<OFSS_OL_Entity.CAFEntity> list = new List<OFSS_OL_Entity.CAFEntity>();
        obj.Action = "C";
        obj.strId = strid; //Convert.ToString(Session["Uid"]);
        obj.CollStatus = 0;
        try
        {
              list = ccobjcaf.fillconfprintoption(obj);
            
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            grdCompartment.DataSource = list;
            grdCompartment.DataBind();
            list.Clear();
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
        int intEWS = 0;
        //================================
        string strPhone = "";
        short intMarkVerification = 0;

        tdEng.Style.Add("display", "none");
        tdMath.Style.Add("display", "none");
        tdScience.Style.Add("display", "none");
        tdSoScience.Style.Add("display", "none");

        tdEngMrk.Style.Add("display", "none");
        tdMathMrk.Style.Add("display", "none");
        tdScienceMrk.Style.Add("display", "none");
        tdSoScienceMrk.Style.Add("display", "none");

        OFSS_OL_Entity.CAFEntity obj = new OFSS_OL_Entity.CAFEntity();
        List<OFSS_OL_Entity.CAFEntity> list = new List<OFSS_OL_Entity.CAFEntity>();
        List<OFSS_OL_Entity.CAFEntity> list1 = new List<OFSS_OL_Entity.CAFEntity>();

        obj.strId = Convert.ToString(strId);
        try
        {
            

                obj.Action = "R";
                obj.strId = strId;// Session["Uid"].ToString();
                list = ccobjcaf.fillconfprintoption(obj);
            
            
                obj.Action = "M";
                obj.strId = strId;// Session["Uid"].ToString();
                list1 = ccobjcaf.fillconfprintoption(obj);
            

            //listInfo.Count > 0
            //list1.Close();

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
                    intBlockID = 589;
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
                }

                // if (lblBoard.Text == "BSEB, BIHAR")
                if (Convert.ToInt32(list[0].BoardId) == 109)
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
                }
                else
                {
                    if (list[0].vch_ExamType.ToString() == "1")
                    {
                        lblExamType.Text = "Annual";
                    }
                    else
                    {
                        lblExamType.Text = "Compartmental";
                    }
                }
                if (list[0].int_YearOfPassing == null)
                {
                    lblYOE.Text = "";
                }
                else
                {
                    lblYOE.Text = list[0].int_YearOfPassing.ToString();
                }
                if (list[0].vch_RollNo == null)
                {
                    lblRoll.Text = "";
                }
                else
                {
                    lblRoll.Text = list[0].vch_RollNo.ToString();
                }
                //UniqueId
                if ((Convert.ToInt32(list[0].BoardId) == 109) && (list[0].int_YearOfPassing == 2024))

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
                    lblpin.Text = list[0].vch_CorPinCode;
                }
                if (list[0].vch_CorPhoneNo == null)
                {
                    strPhone = "";
                }
                else
                {
                    strPhone = list[0].vch_CorPhoneNo;
                }
                if (list[0].vch_CorMobileNo == null)
                {
                    lblmob.Text = "";
                }
                else
                {
                    lblmob.Text = list[0].vch_CorMobileNo;
                }
                if (list[0].vch_EMailID == null)
                {
                    lblemail.Text = "";
                }
                else
                {
                    lblemail.Text = list[0].vch_EMailID;
                }
                if (list[0].vch_GroupName == null)
                {
                    lblBgroup.Text = "";
                }
                else
                {
                    lblBgroup.Text = list[0].vch_GroupName.ToString().ToUpper();
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
                    intPhoh = Convert.ToBoolean(list[0].bit_PHOH);
                }
                if (list[0].intOLNSStateID == null)
                {
                    intEWS = 0;
                }
                else
                {
                    intEWS = list[0].intOLNSStateID;
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
                    intSdp = Convert.ToBoolean(list[0].bit_SDP);
                }
                if (list[0].bit_CoM == null)
                {
                    intCom = false;
                }
                else
                {
                    intCom = Convert.ToBoolean(list[0].bit_CoM);
                }
                if (list[0].bit_NCC_A == null)
                {
                    intNccA = false;
                }
                else
                {
                    intNccA = Convert.ToBoolean(list[0].bit_NCC_A);
                }
                if (list[0].bit_NCC_C == null)
                {
                    intNccC = false;
                }
                else
                {
                    intNccC = Convert.ToBoolean(list[0].bit_NCC_C);
                }
                if (list[0].bit_Scout_PR == null)
                {
                    intSctPR = false;
                }
                else
                {
                    intSctPR = list[0].bit_Scout_PR;
                }
                if (list[0].bit_Scout_RP == null)
                {
                    intSctRP = false;
                }
                else
                {
                    intSctRP = Convert.ToBoolean(list[0].bit_Scout_RP);
                }
                if (list[0].bit_Sports_S == null)
                {
                    intSpS = false;
                }
                else
                {
                    intSpS = Convert.ToBoolean(list[0].bit_Sports_S);
                }
                if (list[0].bit_Sports_N == null)
                {
                    intSpN = false;
                }
                else
                {
                    intSpN = Convert.ToBoolean(list[0].bit_Sports_N);
                }
                if (list[0].bit_Sports_IN == null)
                {
                    intSpIN = false;
                }
                else
                {
                    intSpIN = Convert.ToBoolean(list[0].bit_Sports_IN);
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
                if ((lblBoard.Text == "CBSE DELHI" && Convert.ToInt32(lblYOE.Text) >= 2010 && Convert.ToInt32(lblYOE.Text) != 2018) || (lblBoard.Text == "BSE, ANDHRA PRADESH" & Convert.ToInt32(lblYOE.Text) >= 2012))
                {
                    strCBSE = "True";
                }
                else if (lblBoard.Text == "BPE, KERALA" & Convert.ToInt32(lblYOE.Text) >= 2010)
                {
                    strCBSE = "KERALA";
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

                if (list[0].vch_Nationality == null)
                {
                    lblNat.Text = "";
                }
                else
                {
                    if (list[0].vch_Nationality.ToString() == "0")
                    {
                        lblNat.Text = "";
                    }
                    else
                    {
                        lblNat.Text = list[0].vch_Nationality;
                    }
                }


                if (list[0].vch_LastInstitute == null)
                {
                    lblSchName.Text = "";
                }
                else
                {
                    if (list[0].vch_LastInstitute.ToString() == "0")
                    {
                        lblSchName.Text = "";
                    }
                    else
                    {
                        lblSchName.Text = list[0].vch_LastInstitute;
                    }
                }

                if (list[0].vch_LastInst_Location == "0")
                {
                    lblSchloc.Text = "";
                }
                else
                {
                    if (list[0].vch_LastInst_Location.ToString() == "0")
                    {
                        lblSchloc.Text = "";
                    }
                    else
                    {
                        lblSchloc.Text = list[0].vch_LastInst_Location;
                    }
                }

                if (list[0].LastInst_District == null)
                {
                    lblLIDist.Text = "";
                }
                else
                {
                    if (list[0].LastInst_District.ToString() == "0")
                    {
                        lblLIDist.Text = "";
                    }
                    else
                    {
                        string dist = list[0].LastInst_District;
                        lblLIDist.Text = dist.ToUpper();
                    }
                }

                if (list[0].int_YearOfJoining == null)
                {
                    lblyoj.Text = "";
                }
                else
                {
                    if (list[0].int_YearOfJoining.ToString() == "0")
                    {
                        lblyoj.Text = "";
                    }
                    else
                    {
                        lblyoj.Text = list[0].int_YearOfJoining.ToString();
                    }
                }

                if (list[0].int_YearOfLeaving == null)
                {
                    lblyol.Text = "";
                }
                else
                {
                    if (list[0].int_YearOfLeaving.ToString() == "0")
                    {
                        lblyol.Text = "";
                    }
                    else
                    {
                        lblyol.Text = list[0].int_YearOfLeaving.ToString();
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

                if (list[0].vchBSEBtrnId == null)
                {
                    lblCtrnid.Text = "";
                }
                else
                {
                    lblCtrnid.Text = list[0].vchBSEBtrnId;
                }

                if (list[0].vchVendortrnId == null)
                {
                    lblBankTrnId.Text = "";
                }
                else
                {
                    lblBankTrnId.Text = list[0].vchVendortrnId;
                }
                if (list[0].vchAmount == null)
                {
                    lblAmount.Text = "";
                }
                else
                {
                    lblAmount.Text = list[0].vchAmount;
                }

                if (list[0].vchStatus == null)
                {
                    lblStatus.Text = "";
                }
                else
                {
                    lblStatus.Text = list[0].vchStatus;
                }

            }

            if (intGender == 1)
            {
                lblsex.Text = "MALE";
            }
            else if (intGender == 2)
            {
                lblsex.Text = "FEMALE";
            }
            else
            {
                lblsex.Text = "TRANSGENDER";
            }
            //==================Reservation Category================
            if (intRes == 5)
            {
                lblOther.Text = "Yes";
                lblSC.Text = "No";
                lblST.Text = "No";
                lblGeneral.Text = "No";
                lblobcapp.Text = "No";
                lblWBC.Text = "No";
            }
            else if (intRes == 2)
            {
                strDocTypes = strDocTypes + ",12"; //' For SC/ST Category
                lblSC.Text = "Yes";
                lblST.Text = "No";
                lblOther.Text = "No";
                lblGeneral.Text = "No";
                lblobcapp.Text = "No";
                lblWBC.Text = "No";
            }
            else if (intRes == 3)
            {
                strDocTypes = strDocTypes + ",12"; //' For SC/ST Category
                lblST.Text = "Yes";
                lblSC.Text = "No";
                lblOther.Text = "No";
                lblGeneral.Text = "No";
                lblobcapp.Text = "No";
                lblWBC.Text = "No";
            }
            else if (intRes == 4)
            {
                strDocTypes = strDocTypes + ",12";//' For SC/ST Category
                lblobcapp.Text = "Yes";
                lblSC.Text = "No";
                lblST.Text = "No";
                lblOther.Text = "No";
                lblGeneral.Text = "No";
                lblWBC.Text = "No";
            }
            else if (intRes == 1)
            {
                strDocTypes = strDocTypes + ",12"; //' For SC/ST Category
                lblGeneral.Text = "Yes";
                lblobcapp.Text = "No";
                lblSC.Text = "No";
                lblST.Text = "No";
                lblOther.Text = "No";
                lblWBC.Text = "No";
            }
            else if (intRes == 6)
            {
                strDocTypes = strDocTypes + ",12"; //' For SC/ST Category
                lblGeneral.Text = "No";
                lblobcapp.Text = "No";
                lblSC.Text = "No";
                lblST.Text = "No";
                lblOther.Text = "No";
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

            if (intEWS == 1)
            {
                lblEWS.Text = "Yes";
            }
            else
            {
                lblEWS.Text = "No";
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
            //====================Weightage Category==================
            if (intNccA == true)
            {
                lblNccA.Text = "Yes";
                strDocTypes = strDocTypes + ",7";
            }
            else
            {
                lblNccA.Text = "No";
            }
            if (intNccC == true)
            {
                lblNccC.Text = "Yes";
                strDocTypes = strDocTypes + ",7";
            }
            else
            {
                lblNccC.Text = "No";
            }
            if (intSctPR == true)
            {
                lblPR.Text = "Yes";
                strDocTypes = strDocTypes + ",8";
            }
            else
            {
                lblPR.Text = "No";
            }
            if (intSctRP == true)
            {
                lblRP.Text = "Yes";
                strDocTypes = strDocTypes + ",8";
            }
            else
            {
                lblRP.Text = "No";
            }
            if (intSpS == true)
            {
                lblSportsS.Text = "Yes";
                strDocTypes = strDocTypes + ",9";
            }
            else
            {
                lblSportsS.Text = "No";
            }
            if (intSpN == true)
            {
                lblSportsN.Text = "Yes";
                strDocTypes = strDocTypes + ",9";
            }
            else
            {
                lblSportsN.Text = "No";
            }
            if (intSpIN == true)
            {
                lblSportsIN.Text = "Yes";
                strDocTypes = strDocTypes + ",9";
            }
            else
            {
                lblSportsIN.Text = "No";
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
                lblCompartmental.Text = "Yes / हाँ";
                strDocTypes = strDocTypes + ",10";
                getCompartmentalDetails(strId);
            }
            else
            {
                lblCompartmental.Text = "No / नहीं";
            }
            string strDate = dtmDob.ToString("dd-MMM-yyyy");
            lblDob.Text = strDate;
            if (strPhone.Length > 2)
            {
                string[] strAry = strPhone.Split('-');
                lblAreaCode.Text = strAry[0];
                lblPhoneNo.Text = strAry[1];
            }
            lblUid.Text = strUid;
            

            imgId.ImageUrl = "../CODE39/BarCode39.aspx?ID=" + strUid.ToString().Trim();

            if (strUid != "")
            {
                if (File.Exists((GetPhotoDetails() + "\\" + intBlockID + "\\" + strUid + ".jpg")))
                {
                    //  imgPhoto.ImageUrl = ViewPhotoDetails() + "/" + intBlockID + "/" + strUid + ".jpg";

                    imgPhoto.ImageUrl = "~/DownloadImage.ashx?clsid=1&id=" + "/" + intBlockID + "/" + strImage;
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
        catch (Exception ex)
        {
            Util.LogError(ex, "cafjr-"+ strId);
        }
    }

    public string GetPhotoDetails()
    {
        string strResult = "";
        string path = ConfigurationManager.AppSettings["StrPath"].ToString();
        strResult = (path + "SAMS\\ONLINE_CAF\\APPL_IMAGES\\2024");
        return strResult;
    }
    public string ViewPhotoDetails()
    {
        string strResult = "";
        string path = ConfigurationManager.AppSettings["StrPathView"].ToString();
        strResult = (path + "SAMS/ONLINE_CAF/APPL_IMAGES\\2024");
        return strResult;
    }
    protected void grdOptions_RowDataBound1(object sender, System.Web.UI.WebControls.GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            string strElectives = e.Row.Cells[4].Text;
            e.Row.Cells[4].Text = strElectives.TrimEnd(',');
            string strFElectives = e.Row.Cells[5].Text;
            e.Row.Cells[5].Text = strFElectives.TrimEnd(',');
        }
    }
    protected void grdOptionsApp_RowDataBound1(object sender, System.Web.UI.WebControls.GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            string strElectives = e.Row.Cells[4].Text;
            e.Row.Cells[4].Text = strElectives.TrimEnd(',');
            string strFElectives = e.Row.Cells[5].Text;
            e.Row.Cells[5].Text = strFElectives.TrimEnd(',');
        }
    }
}