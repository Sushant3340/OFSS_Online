using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
//using System.Web.HttpContext;
using System.IO;
using System.Net.Mail;
using System.Net;
using OFSS_OL_Entity;
using OFSS_OL_Entity_deg;
using System.Configuration;

public partial class ONLINE_CAF_Degree_ConfirmCAF : System.Web.UI.Page
{
    CAFDegDal ccobjcafdeg = new CAFDegDal();
    public string strOSAStatus;
    public string strOLNSStatus;
    public string strCompartmentStatus;
    public string strStream;
    public int intRetVal;
    string strImageName = "";
    string strOTP = string.Empty;
    SENDMAIL objMail = null;
    SENDMSDSMS objMsg = null;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            if (HttpContext.Current.Items["Board"].ToString() != null)
            {
                viewAppDetails();
            }
            else
            {
                
            }

        }

    }
    protected void viewAppDetails()
    {
        strBoard.Value = HttpContext.Current.Items["Board"].ToString();
        strBloodGroup.Value = HttpContext.Current.Items["Bgroup"].ToString();
        strReligion.Value = HttpContext.Current.Items["Religion"].ToString();
        strGender.Value = HttpContext.Current.Items["Sex"].ToString();
        strState.Value = HttpContext.Current.Items["State"].ToString();
        strDist.Value = HttpContext.Current.Items["Dist"].ToString();
        strBlock.Value = HttpContext.Current.Items["Block"].ToString();
        strPhone.Value = HttpContext.Current.Items["Phone"].ToString();
        //strOSA.Value = HttpContext.Current.Items["OSAState"].ToString();
        //strOLNS.Value = HttpContext.Current.Items["OLNSState"].ToString();
        //strFontOption.Value = HttpContext.Current.Items["FontOption"].ToString();
        //strFontOSAOLNS.Value = HttpContext.Current.Items["FontOSAOLNS"].ToString();
        strnat.Value = HttpContext.Current.Items["Nationality"].ToString();
        strmt.Value = HttpContext.Current.Items["MT"].ToString();
        //strFocu.Value = HttpContext.Current.Items["Focu"].ToString();
        //strMocu.Value = HttpContext.Current.Items["Mocu"].ToString();


        // strinsdist.Value = HttpContext.Current.Items["Idist"].ToString();


        //if (HttpContext.Current.Items["Idist"] == "")
        //{
        //    lbllinsdist.Text = HttpContext.Current.Items["Idist1"].ToString().ToUpper();
        //}
        //else if (strinsdist.Value != "")
        //{
        //    lbllinsdist.Text = strinsdist.Value.Split('~')[1];
        //    //lbllinsdist.Text = strinsdist.Value.Split('~')[1].ToString().ToUpper();
        //}

        if (HttpContext.Current.Items["Idist"] != null)
        {
            strinsdist.Value = HttpContext.Current.Items["Idist"].ToString();
        }


        if (strinsdist.Value != "")
        {
            if (strinsdist.Value.Contains('~'))
            {
                lbllinsdist.Text = strinsdist.Value.Split('~')[1];
            }
            else
            {
                lbllinsdist.Text = strinsdist.Value;
            }


            //lbllinsdist.Text = strinsdist.Value;
        }


        stryoj.Value = HttpContext.Current.Items["YOJ"].ToString();
        stryol.Value = HttpContext.Current.Items["YOL"].ToString();
        //   strAIncome.Value = HttpContext.Current.Items["AIncome"].ToString();
        // =================================================================
        //  strAIncomeval.Value = HttpContext.Current.Items["AIncome"].ToString().Split('~')[0];

        //  ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "ConfirmEnglishOriyaFont();", true);

        lblBoard.Text = strBoard.Value.Split('~')[1];
        if (strBoard.Value.Split('~')[0] == "35")
        {
            tdRollCdH.Style.Clear();
            tdRollCdF.Style.Clear();

            divOther.Visible = false;
            divBseb.Visible = true;

            tdComp12.Visible = false;
            tdComp3.Visible = false;
            tdChemH.Visible = false;
            tdMathH.Visible = false;
            tdBiologyH.Visible = false;

            tdComp12Mrk.Visible = false;
            tdEnglishMrk.Visible = false;
            tdChemB.Visible = false;
            tdMathB.Visible = false;
            tdBiologyB.Visible = false;
            lblUniversity.Visible = false;
            divOU.Visible = false;
        }
        else
        {
            tdRollCdH.Style.Add("display", "none");
            tdRollCdF.Style.Add("display", "none");
            divOther.Visible = true;
            divBseb.Visible = false;

            tdComp12.Visible = false;
            tdComp3.Visible = true;
            tdChemH.Visible = true;
            tdMathH.Visible = true;
            tdBiologyH.Visible = true;


            tdComp12Mrk.Visible = false;
            tdEnglishMrk.Visible = true;
            tdChemB.Visible = true;
            tdMathB.Visible = true;
            tdBiologyB.Visible = true;
            lblUniversity.Visible = false;
            divOU.Visible = false;
            if (strBoard.Value.Split('~')[0] == "68")
            {
                divOU.Visible = true;
                lblUniversity.Visible = true;
                lblUniversity.Text = HttpContext.Current.Items["University"].ToString();
            }
         
        }


        lblYOE.Text = HttpContext.Current.Items["YOP"].ToString();
        if (HttpContext.Current.Items["ExamType"].ToString() == "1")
        {
            lblExamType.Text = "Annual";
        }
        else
        {
            lblExamType.Text = "Supplementary";
        }

        //  lblAdharNo.Text = HttpContext.Current.Items["AdharNo"].ToString();

        lblRoll.Text = HttpContext.Current.Items["Roll"].ToString();
        lblRollCode.Text = HttpContext.Current.Items["RollCode"].ToString();
        lblApplName.Text = HttpContext.Current.Items["AppName"].ToString().ToUpper();
        lblFatherName.Text = HttpContext.Current.Items["Fnam"].ToString().ToUpper();
        lblMotherName.Text = HttpContext.Current.Items["Mname"].ToString().ToUpper();
        lblBgroup.Text = strBloodGroup.Value.Split('~')[1].ToString();
        lblsex.Text = strGender.Value.Split('~')[1].ToString();
        lblreligion.Text = strReligion.Value.Split('~')[1].ToString();
        lblDob.Text = HttpContext.Current.Items["DOB"].ToString();
        lblstate.Text = strState.Value.Split('~')[1].ToUpper();
        lbldist.Text = strDist.Value.Split('~')[1].ToUpper();
        lblulb.Text = strBlock.Value.Split('~')[1].ToUpper();
        lbldtl.Text = HttpContext.Current.Items["Address"].ToString().ToUpper();
        lblpin.Text = HttpContext.Current.Items["Pin"].ToString().ToUpper();
        lblAreaCode.Text = strPhone.Value.Split('-')[0].ToString();
        lblPhoneNo.Text = strPhone.Value.Split('-')[1].ToString();
        lblmob.Text = HttpContext.Current.Items["Mobile"].ToString();
        if (HttpContext.Current.Items["Email"] == null)
        {
            lblemail.Text = "";
        }
        else
        {
            lblemail.Text = HttpContext.Current.Items["Email"].ToString();
        }

        lblNat.Text = strnat.Value.Split('~')[1].ToString();
        lblmt.Text = strmt.Value.Split('~')[1].ToString();
        //lblAdharNo.Text = HttpContext.Current.Items["Aadhaar"].ToString();
        //lblFO.Text = strFocu.Value.Split('~')[1].ToUpper();
        //lblMO.Text = strMocu.Value.Split('~')[1].ToUpper();
        // lblAIncome.Text = strAIncome.Value.Split('~')[1].ToUpper();
        lblSchName.Text = HttpContext.Current.Items["SchName"].ToString().ToUpper();
        lblschloc.Text = HttpContext.Current.Items["SchLocation"].ToString().ToUpper();

        lblYOJ.Text = stryoj.Value.Split('~')[1].ToString();
        lblYOL.Text = stryol.Value.Split('~')[1].ToString();
        // ====================Bank Details===============
        //if ((strAIncome.Value.Split('~')[0] == "0") || (strAIncome.Value.Split('~')[0] == "4"))
        //{
        //    trBD.Style.Add("display", "none");
        //}
        //else
        //{
        //    trBD.Style.Clear();
        //}

        //lblacno.Text = HttpContext.Current.Items["ACNo"].ToString().ToUpper();
        //lblifsc.Text = HttpContext.Current.Items["IFSC"].ToString().ToUpper();
        //lblmicr.Text = HttpContext.Current.Items["MICR"].ToString().ToUpper();
        //lblBankName.Text = HttpContext.Current.Items["BankName"].ToString().ToUpper();
        //lblBrname.Text = HttpContext.Current.Items["BrName"].ToString().ToUpper();


        // ====================Reservation Details===================

        lblOther.Text = "No";
        lblST.Text = "No";
        lblSC.Text = "No";
        lblOBC.Text = "No";
        lblGeneral.Text = "No";
        lblWBC.Text = "No";
        if (HttpContext.Current.Items["Cat1"].ToString() == "1")
        {
            lblGeneral.Text = "Yes";
        }
        else if (HttpContext.Current.Items["Cat1"].ToString() == "2")
        {
            lblSC.Text = "Yes";
        }
        else if (HttpContext.Current.Items["Cat1"].ToString() == "3")
        {
            lblST.Text = "Yes";
        }
        else if (HttpContext.Current.Items["Cat1"].ToString() == "4")
        {
            lblOBC.Text = "Yes";
        }
        else if (HttpContext.Current.Items["Cat1"].ToString() == "5")
        {
            lblOther.Text = "Yes";
        }
        else if (HttpContext.Current.Items["Cat1"].ToString() == "6")
        {
            lblWBC.Text = "Yes";
        }


        if (HttpContext.Current.Items["PHOH"].ToString() == "1")
        {
            lblPHOH.Text = "Yes";
        }
        else
        {
            lblPHOH.Text = "No";
        }

        if (HttpContext.Current.Items["SDP"].ToString() == "1")
        {
            lblSDP.Text = "Yes";
        }
        else
        {
            lblSDP.Text = "No";
        }

        if (HttpContext.Current.Items["ESM"].ToString() == "1")
        {
            lblESM.Text = "Yes";
        }
        else
        {
            lblESM.Text = "No";
        }

        if (HttpContext.Current.Items["COM"].ToString() == "1")
        {
            lblCoM.Text = "Yes";
        }
        else
        {
            lblCoM.Text = "No";
        }

        // ================OSA & OLNS Details==========
        //if (HttpContext.Current.Items["OSA"].ToString() == "1")
        //{
        //    lblOSA.Text = "Yes";
        //    tblOSA.Visible = true;
        //    lblOSAState.Text = strOSA.Value.Split('~')[1].ToString();
        //}
        //else
        //{
        //    tblOSA.Visible = false;
        //    lblOSA.Text = "No";
        //}

        //if (HttpContext.Current.Items["OLNS"].ToString() == "1")
        //{
        //    lblOlns.Text = "Yes";
        //    tblOLNS.Visible = true;
        //    lblOlnsState.Text = strOLNS.Value.Split('~')[1].ToString();
        //}
        //else
        //{
        //    tblOLNS.Visible = false;
        //    lblOlns.Text = "No";
        //}

        // ==============Weightage Details===============
        if (HttpContext.Current.Items["NCCA"].ToString() == "1")
        {
            lblNccA.Text = "Yes";
        }
        else
        {
            lblNccA.Text = "No";
        }

        if (HttpContext.Current.Items["NCCC"].ToString() == "1")
        {
            lblNccC.Text = "Yes";
        }
        else
        {
            lblNccC.Text = "No";
        }

        // =====================NSS CAMP DETAILS===========
        if (HttpContext.Current.Items["NSSU"].ToString() == "1")
        {
            lblNssU.Text = "Yes";
        }
        else
        {
            lblNssU.Text = "No";
        }

        if (HttpContext.Current.Items["NSSS"].ToString() == "1")
        {
            lblNssS.Text = "Yes";
        }
        else
        {
            lblNssS.Text = "No";
        }

        if (HttpContext.Current.Items["NSSN"].ToString() == "1")
        {
            lblNssN.Text = "Yes";
        }
        else
        {
            lblNssN.Text = "No";
        }

        if (HttpContext.Current.Items["NSSIN"].ToString() == "1")
        {
            lblNssIN.Text = "Yes";
        }
        else
        {
            lblNssIN.Text = "No";
        }

        // ================================================
        //if (HttpContext.Current.Items["SCPR"].ToString() == "1")
        //{
        //    lblPR.Text = "Yes";
        //}
        //else
        //{
        //    lblPR.Text = "No";
        //}

        //if (HttpContext.Current.Items["SCRP"].ToString() == "1")
        //{
        //    lblRP.Text = "Yes";
        //}
        //else
        //{
        //    lblRP.Text = "No";
        //}

        if (HttpContext.Current.Items["SPS"].ToString() == "1")
        {
            lblSportsS.Text = "Yes";
        }
        else
        {
            lblSportsS.Text = "No";
        }

        if (HttpContext.Current.Items["SPN"].ToString() == "1")
        {
            lblSportsN.Text = "Yes";
        }
        else
        {
            lblSportsN.Text = "No";
        }

        if (HttpContext.Current.Items["SPIN"].ToString() == "1")
        {
            lblSportsIN.Text = "Yes";
        }
        else
        {
            lblSportsIN.Text = "No";
        }

        // ========Previous Stream Details==========
        if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "1")
        {
            lblPrevStream.Text = "Arts";
            strStream = "1";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "2")
        {
            lblPrevStream.Text = "Science";
            strStream = "2";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "3")
        {
            lblPrevStream.Text = "Commerce";
            strStream = "3";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "4")
        {
            lblPrevStream.Text = "Vocational";
            strStream = "4";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "5")
        {
            lblPrevStream.Text = "Diploma";
            strStream = "5";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "6")
        {
            lblPrevStream.Text = "Upashastri";
            strStream = "6";
        }
        else if (HttpContext.Current.Items["PRVSTREAM"].ToString() == "7")
        {
            lblPrevStream.Text = "Maulvi";
            strStream = "7";
        }
        hdnPrevStream.Value = HttpContext.Current.Items["PRVSTREAM"].ToString();

        // ================Mark Details================
        lblEngMark.Text = HttpContext.Current.Items["SLE"].ToString();
        lblMathMark.Text = HttpContext.Current.Items["Math"].ToString();
        lblScienceMark.Text = HttpContext.Current.Items["Science"].ToString();
        lblBiologyMark.Text = HttpContext.Current.Items["Biology"].ToString();
        lblTotalMark.Text = HttpContext.Current.Items["TotMark"].ToString();
        lblMaxMark.Text = HttpContext.Current.Items["MaxMark"].ToString();
        lblMathematics.Text = HttpContext.Current.Items["Mathematics"].ToString();
        // ==============Mark Verification===============
        if (HttpContext.Current.Items["MarkVerificationStatus"].ToString() == "1")
        {
            MarkVerification.Visible = true;
            MarkVerification1.Visible = true;
            hdnMarkVerification.Value = "1";
            if (HttpContext.Current.Items["MarkVerification"].ToString() == "0")
            {
                lblMarkVerification.Text = "Yes";
            }
            else
            {
                lblMarkVerification.Text = "No";
            }

        }
        else
        {
            hdnMarkVerification.Value = "0";
            MarkVerification.Visible = false;
            MarkVerification1.Visible = false;
        }

        // ==============Compartmnet Mark Details========
        if (HttpContext.Current.Items["CompartmentStatus"].ToString() == "1")
        {
            lblCompartmental.Text = "Yes";
            tblComp.Visible = true;
            strCompSub.Value = HttpContext.Current.Items["Subject"].ToString();
            txtCompSubject1.Text = strCompSub.Value.Split('~')[0].ToString();
            txtCompSubject2.Text = strCompSub.Value.Split('~')[1].ToString();
            txtCompSubject3.Text = strCompSub.Value.Split('~')[2].ToString();
            strFailMark.Value = HttpContext.Current.Items["FailMark"].ToString();
            txtCompFMark1.Text = strFailMark.Value.Split('~')[0].ToString();
            txtCompFMark2.Text = strFailMark.Value.Split('~')[1].ToString();
            txtCompFMark3.Text = strFailMark.Value.Split('~')[2].ToString();
            strPassMark.Value = HttpContext.Current.Items["PassMark"].ToString();
            txtCompPMark1.Text = strPassMark.Value.Split('~')[0].ToString();
            txtCompPMark2.Text = strPassMark.Value.Split('~')[1].ToString();
            txtCompPMark3.Text = strPassMark.Value.Split('~')[2].ToString();
        }
        else
        {
            tblComp.Visible = false;
            lblCompartmental.Text = "No";
        }

        // ================Option Details=======================
        // hidOptionIds.Value = "1"
        hidCollege.Value = HttpContext.Current.Items["CollegeIds"].ToString().TrimEnd('~');
        hidStream.Value = HttpContext.Current.Items["StreamIds"].ToString().TrimEnd('~');
        hidStreamPref.Value = HttpContext.Current.Items["StremPref"].ToString().TrimEnd('~');
        hidElective1.Value = HttpContext.Current.Items["Elective1"].ToString().TrimEnd('~');
        //hidHostel.Value = HttpContext.Current.Items["Hostel"].ToString().TrimEnd('~');
        // ==============Assigning names===============
        hidCname.Value = HttpContext.Current.Items["CNames"].ToString().TrimEnd('~');
        hidSname.Value = HttpContext.Current.Items["Snames"].ToString().TrimEnd('~');
        hidE1name.Value = HttpContext.Current.Items["EleNames1"].ToString().TrimEnd('~');

        // =====================================================
        if (HttpContext.Current.Items["Photo"].ToString() != null)
        {
            string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
            hidPhoto.Value = HttpContext.Current.Items["Photo"].ToString();
            string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();
            // imgPhoto.ImageUrl = pthview + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES" + "/" + hidPhoto.Value;

            // imgPhoto.ImageUrl = "http://localhost/SAMS_Online/DownloadImage.ashx?clsid=2&id=" + hidPhoto.Value;

            imgPhoto.ImageUrl = "~/DownloadImage.ashx?clsid=2&id=" + hidPhoto.Value;
            // imgPhoto.ImageUrl = "~/DownloadImage.ashx?id=" + hidPhoto.Value;

        }
        else
        {
            imgPhoto.ImageUrl = "~/images/noimage.JPG";
        }

    }

    protected void sendTransferData()
    {

        HttpContext.Current.Items.Clear();
        // =================10th Board Details=============
        HttpContext.Current.Items["Board"] = strBoard.Value.Split('~')[0].ToString() + "~" + strBoard.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["University"] = lblUniversity.Text.Trim();
        if ((lblExamType.Text == "Annual"))
        {
            HttpContext.Current.Items["ExamType"] = 1;
        }
        else
        {
            HttpContext.Current.Items["ExamType"] = 2;
        }

        hdnVal.Value = "C";
        HttpContext.Current.Items["YOP"] = lblYOE.Text.Trim();
        HttpContext.Current.Items["Roll"] = lblRoll.Text.Trim();
        HttpContext.Current.Items["RollCode"] = lblRollCode.Text.Trim();
        HttpContext.Current.Items["FontOption"] = strFontOption.Value;
        // =================Personal Informaion==============
        HttpContext.Current.Items["AppName"] = lblApplName.Text;
        HttpContext.Current.Items["Fnam"] = lblFatherName.Text;
        HttpContext.Current.Items["Mname"] = lblMotherName.Text;
        //HttpContext.Current.Items["AdharNo"] = lblAdharNo.Text;
        HttpContext.Current.Items["Bgroup"] = strBloodGroup.Value.Split('~')[0].ToString() + "~" + strBloodGroup.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["Religion"] = strReligion.Value.Split('~')[0].ToString() + "~" + strReligion.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["Sex"] = strGender.Value.Split('~')[0].ToString() + "~" + strGender.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["DOB"] = lblDob.Text.Trim();
        // ====================Address Details===============
        HttpContext.Current.Items["State"] = strState.Value.Split('~')[0].ToString() + "~" + strState.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["Dist"] = strDist.Value.Split('~')[0].ToString() + "~" + strDist.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["Block"] = strBlock.Value.Split('~')[0].ToString() + "~" + strBlock.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["Address"] = lbldtl.Text;
        HttpContext.Current.Items["Pin"] = lblpin.Text;
        //HttpContext.Current.Items["Phone"] = strPhone.Value.Split('~')[0].ToString() + "-" + strPhone.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["Phone"] = strPhone.Value.ToString();

        HttpContext.Current.Items["Mobile"] = lblmob.Text;
        HttpContext.Current.Items["Email"] = lblemail.Text;
        // =================Reservation Details===============
        if (lblSC.Text == "Yes")
        {
            HttpContext.Current.Items["Cat1"] = 2;
        }
        else if (lblST.Text == "Yes")
        {
            HttpContext.Current.Items["Cat1"] = 3;
        }
        else if (lblOBC.Text == "Yes")
        {
            HttpContext.Current.Items["Cat1"] = 4;
        }
        else if (lblGeneral.Text == "Yes")
        {
            HttpContext.Current.Items["Cat1"] = 1;
        }
        else if (lblOther.Text == "Yes")
        {
            HttpContext.Current.Items["Cat1"] = 5;

        }
        else if (lblWBC.Text == "Yes")
        {
            HttpContext.Current.Items["Cat1"] = 6;
        }

        if (lblPHOH.Text == "Yes")
        {
            HttpContext.Current.Items["PHOH"] = 1;
        }
        else
        {
            HttpContext.Current.Items["PHOH"] = 0;
        }

        if (lblSDP.Text == "Yes")
        {
            HttpContext.Current.Items["SDP"] = 1;
        }
        else
        {
            HttpContext.Current.Items["SDP"] = 0;
        }

        if (lblESM.Text == "Yes")
        {
            HttpContext.Current.Items["ESM"] = 1;
        }
        else
        {
            HttpContext.Current.Items["ESM"] = 0;
        }

        if (lblCoM.Text == "Yes")
        {
            HttpContext.Current.Items["COM"] = 1;
        }
        else
        {
            HttpContext.Current.Items["COM"] = 0;
        }

        // =====================OSA & OLNS================
        //if (lblOSA.Text == "Yes")
        //{
        //    HttpContext.Current.Items["OSA"] = 1;
        //    HttpContext.Current.Items["OSAState"] = strOSA.Value.Split('~')[0].ToString() + "~" + strOSA.Value.Split('~')[1].ToString();
        //}
        //else
        //{
        //    HttpContext.Current.Items["OSA"] = 0;
        //    HttpContext.Current.Items["OSAState"] = "";
        //}

        //if ((lblOlns.Text == "Yes"))
        //{
        //    HttpContext.Current.Items["OLNS"] = 1;
        //    HttpContext.Current.Items["OLNSState"] = strOLNS.Value.Split('~')[0].ToString() + "~" + strOLNS.Value.Split('~')[1].ToString();
        //}
        //else
        //{
        //    HttpContext.Current.Items["OLNS"] = 0;
        //    HttpContext.Current.Items["OLNSState"] = "";
        //}

        // ==============Weightage Details=================
        if (lblNccA.Text == "Yes")
        {
            HttpContext.Current.Items["NCCA"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NCCA"] = 0;
        }

        if (lblNccC.Text == "Yes")
        {
            HttpContext.Current.Items["NCCC"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NCCC"] = 0;
        }

        // ==========NSS DETAILS=============
        if (lblNssU.Text == "Yes")
        {
            HttpContext.Current.Items["NSSU"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NSSU"] = 0;
        }

        if (lblNssS.Text == "Yes")
        {
            HttpContext.Current.Items["NSSS"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NSSS"] = 0;
        }

        if (lblNssN.Text == "Yes")
        {
            HttpContext.Current.Items["NSSN"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NSSN"] = 0;
        }

        if (lblNssIN.Text == "Yes")
        {
            HttpContext.Current.Items["NSSIN"] = 1;
        }
        else
        {
            HttpContext.Current.Items["NSSIN"] = 0;
        }

        // ==================================
        //if (lblPR.Text == "Yes")
        //{
        //    HttpContext.Current.Items["SCPR"] = 1;
        //}
        //else
        //{
        //    HttpContext.Current.Items["SCPR"] = 0;
        //}

        //if (lblRP.Text == "Yes")
        //{
        //    HttpContext.Current.Items["SCRP"] = 1;
        //}
        //else
        //{
        //    HttpContext.Current.Items["SCRP"] = 0;
        //}

        if (lblSportsS.Text == "Yes")
        {
            HttpContext.Current.Items["SPS"] = 1;
        }
        else
        {
            HttpContext.Current.Items["SPS"] = 0;
        }

        if (lblSportsN.Text == "Yes")
        {
            HttpContext.Current.Items["SPN"] = 1;
        }
        else
        {
            HttpContext.Current.Items["SPN"] = 0;
        }

        if (lblSportsIN.Text == "Yes")
        {
            HttpContext.Current.Items["SPIN"] = 1;
        }
        else
        {
            HttpContext.Current.Items["SPIN"] = 0;
        }

        // ========Previous Stream Details==========
        if (lblPrevStream.Text == "Arts")
        {
            HttpContext.Current.Items["PRVSTREAM"] = 1;
        }
        else if (lblPrevStream.Text == "Science")
        {
            HttpContext.Current.Items["PRVSTREAM"] = 2;
        }
        else if (lblPrevStream.Text == "Commerce")
        {
            HttpContext.Current.Items["PRVSTREAM"] = 3;
        }
        else if (lblPrevStream.Text == "Vocational")
        {
            HttpContext.Current.Items["PRVSTREAM"] = 4;
        }
        else if (lblPrevStream.Text == "Diploma")
        {
            HttpContext.Current.Items["PRVSTREAM"] = 5;
        }
        else if (lblPrevStream.Text == "Upashastri")
        {
            HttpContext.Current.Items["PRVSTREAM"] = 6;
        }
        else if (lblPrevStream.Text == "Maulvi")
        {
            HttpContext.Current.Items["PRVSTREAM"] = 7;
        }
        // ================MarkDetails===============
        HttpContext.Current.Items["SLE"] = lblEngMark.Text;
        HttpContext.Current.Items["Math"] = lblMathMark.Text;
        if (lblScienceMark.Text != "")
        {
            HttpContext.Current.Items["Science"] = lblScienceMark.Text;
        }
        else
        {
            HttpContext.Current.Items["Science"] = "";
        }

        if (lblBiologyMark.Text != "")
        {
            HttpContext.Current.Items["Biology"] = lblBiologyMark.Text;
        }
        else
        {
            HttpContext.Current.Items["Biology"] = "";
        }

        if (lblMathematics.Text != "")
        {
            HttpContext.Current.Items["Mathematics"] = lblMathematics.Text;
        }
        else
        {
            HttpContext.Current.Items["Mathematics"] = "";
        }

        HttpContext.Current.Items["TotMark"] = lblTotalMark.Text;
        HttpContext.Current.Items["MaxMark"] = lblMaxMark.Text;
        // ================Mark Verification=============
        if (hdnMarkVerification.Value == "1")
        {
            HttpContext.Current.Items["MarkVerificationStatus"] = 1;
            if (lblMarkVerification.Text == "Yes")
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
        if ((lblCompartmental.Text == "Yes"))
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

        // ===================Option Details===================
        HttpContext.Current.Items["CollegeIds"] = hidCollege.Value.Trim();
        HttpContext.Current.Items["StreamIds"] = hidStream.Value.Trim();
        HttpContext.Current.Items["StremPref"] = hidStreamPref.Value.Trim();
        HttpContext.Current.Items["Elective1"] = hidElective1.Value;
        //  HttpContext.Current.Items["Hostel"] = hidHostel.Value.Trim();
        // ====================================================
        HttpContext.Current.Items["CNames"] = hidCname.Value;
        HttpContext.Current.Items["Snames"] = hidSname.Value;
        HttpContext.Current.Items["EleNames1"] = hidE1name.Value;
        // ====================================================
        // ====================Anexture-8 Details================
        HttpContext.Current.Items["Nationality"] = strnat.Value.Split('~')[0].ToString() + "~" + strnat.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["MT"] = strmt.Value.Split('~')[0].ToString() + "~" + strmt.Value.Split('~')[1].ToString();
        //HttpContext.Current.Items["Aadhaar"] = lblAdharNo.Text;
        //HttpContext.Current.Items["Focu"] = strFocu.Value.Split('~')[0].ToString() + "~" + strFocu.Value.Split('~')[1].ToString();
        //HttpContext.Current.Items["Mocu"] = strMocu.Value.Split('~')[0].ToString() + "~" + strMocu.Value.Split('~')[1].ToString();
        if (strinsdist.Value.Contains('~'))
        {
            HttpContext.Current.Items["Idist"] = strinsdist.Value.Split('~')[0].ToString() + "~" + strinsdist.Value.Split('~')[1].ToString();
        }
        else
        {
            HttpContext.Current.Items["Idist"] = lbllinsdist.Text;

        }

        HttpContext.Current.Items["YOJ"] = stryoj.Value.Split('~')[0].ToString() + "~" + stryoj.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["YOL"] = stryol.Value.Split('~')[0].ToString() + "~" + stryol.Value.Split('~')[1].ToString();
        //HttpContext.Current.Items["AIncome"] = strAIncome.Value.Split('~')[0].ToString() + "~" + strAIncome.Value.Split('~')[1].ToString();
        HttpContext.Current.Items["SchName"] = lblSchName.Text;
        HttpContext.Current.Items["SchLocation"] = lblschloc.Text;
        HttpContext.Current.Items["Photo"] = hidPhoto.Value;
        // ====================Bank Details===============
        //HttpContext.Current.Items["ACNo"] = lblacno.Text.Trim();
        //HttpContext.Current.Items["IFSC"] = lblifsc.Text.Trim();
        //HttpContext.Current.Items["MICR"] = lblmicr.Text.Trim();
        //HttpContext.Current.Items["BankName"] = lblBankName.Text.Trim();
        //HttpContext.Current.Items["BrName"] = lblBrname.Text.Trim();
        Server.Transfer("CAFDeg.aspx", true);


        //   Response.Redirect("CAFDeg.aspx");
    }

    protected void AddCAFData(string strAction)
    {

      
        CAFEntity_Deg ObjPAS = new CAFEntity_Deg();
        string strPass = "";
        //string strImageName;
        int intApplID;
        string strResult = "";
        int intTotOption = 0;
        try
        {
            //specialcharatercheck(lblApplName.Text.ToString().Trim().ToUpper(), "LoginCAFEdit.aspx");
            //specialcharatercheck(lblFatherName.Text.Trim().ToUpper(), "LoginCAFEdit.aspx");
            //specialcharatercheck(lblMotherName.Text.Trim().ToUpper(), "LoginCAFEdit.aspx");
            //specialcharatercheck(strBoard.Value.Split('~')[0], "LoginCAFEdit.aspx");
            //specialcharatercheck(lblYOE.Text.Trim(), "LoginCAFEdit.aspx");
            //specialcharatercheck(lblEngMark.Text, "LoginCAFEdit.aspx");
            //specialcharatercheck(lblMathMark.Text, "LoginCAFEdit.aspx");
            //specialcharatercheck(lblScienceMark.Text, "LoginCAFEdit.aspx");
            //specialcharatercheck(lblBiologyMark.Text, "LoginCAFEdit.aspx");
            //specialcharatercheck(lblMathematics.Text, "LoginCAFEdit.aspx");
            //specialcharatercheck(lblTotalMark.Text, "LoginCAFEdit.aspx");
            //specialcharatercheck(lblMaxMark.Text, "LoginCAFEdit.aspx");
            //checkAddress(lbldtl.Text.Trim().ToUpper(), "LoginCAFEdit.aspx");
            ObjPAS.Action = strAction;
            ObjPAS.IPAddress = GetIP();
            ObjPAS.ApplicantID = 0;
            ObjPAS.BoardId = Convert.ToInt32(strBoard.Value.Split('~')[0]);
            if (lblExamType.Text == "Annual")
            {
                ObjPAS.ExamType = "1";
            }
            else
            {
                ObjPAS.ExamType = "2";
            }

            ObjPAS.pintYOP = Convert.ToInt32(lblYOE.Text.Trim());
            ObjPAS.RollNo = lblRoll.Text.Trim().ToString();
            ObjPAS.vchrollcode = lblRollCode.Text.Trim().ToString();
            ObjPAS.pintTotOpt = 0;
            // Will Be Added Later
            ObjPAS.ApplicantName = lblApplName.Text.ToString().Trim().ToUpper();
            ObjPAS.FatherName = lblFatherName.Text.Trim().ToUpper();
            ObjPAS.MotherName = lblMotherName.Text.Trim().ToUpper();
            ObjPAS.AdharNo = "";// lblAdharNo.Text.Trim();
            ObjPAS.CorStateId = Convert.ToInt32(strState.Value.Split('~')[0]);
            ObjPAS.CorDistId = Convert.ToInt32(strDist.Value.Split('~')[0]);
            ObjPAS.CorBlockId = Convert.ToInt32(strBlock.Value.Split('~')[0]);
            ObjPAS.CorHouseNo = lbldtl.Text.Trim().ToUpper();
            ObjPAS.CorPinCode = lblpin.Text.Trim();
            ObjPAS.CorPhNo = lblAreaCode.Text.Trim() + "-" + lblPhoneNo.Text.Trim();
            ObjPAS.CorMobileNo = lblmob.Text.Trim();
            ObjPAS.EmailId = lblemail.Text.Trim();
            ObjPAS.PerStateId = Convert.ToInt32(strState.Value.Split('~')[0]);
            ObjPAS.PerDistId = Convert.ToInt32(strDist.Value.Split('~')[0]);
            ObjPAS.PerBlockId = Convert.ToInt32(strBlock.Value.Split('~')[0]);
            ObjPAS.PerHouseNo = lbldtl.Text.Trim().ToUpper();
            ObjPAS.PerPinCode = lblpin.Text.Trim();
            ObjPAS.PerPhNo = lblAreaCode.Text.Trim() + "-" + lblPhoneNo.Text.Trim();
            ObjPAS.PerMobileNo = lblmob.Text.Trim();

            ObjPAS.AcNo = "";
            ObjPAS.IFSC = "";
            ObjPAS.MICR = "";
            ObjPAS.BankName = lblUniversity.Text.Trim(); //to be use for other board name.
            ObjPAS.BrName = "";

            ObjPAS.AIncome = "0";// strAIncome.Value.Split('~')[0].ToString();
            ObjPAS.strLastInstDist = lblSchName.Text.Trim();
            ObjPAS.Nationality = strnat.Value.Split('~')[0].ToString();
            ObjPAS.MotherTongue = strmt.Value.Split('~')[0].ToString();
            ObjPAS.FathersOccup = "";// strFocu.Value.Split('~')[0];
            ObjPAS.MothersOccup = "";// strMocu.Value.Split('~')[0];
            ObjPAS.LastInst = lblSchName.Text.TrimEnd().TrimStart();
            ObjPAS.LastInstLoc = lblschloc.Text.TrimEnd().TrimStart();

            if (strinsdist.Value.Contains('~'))
            {
                ObjPAS.LIDistName = "";
                ObjPAS.LastInstDist = Convert.ToInt32(strinsdist.Value.Split('~')[0]);
            }
            else
            {
                ObjPAS.LastInstDist = 0;
                ObjPAS.LIDistName = lbllinsdist.Text.ToString().ToString();
            }

            if (lblST.Text == "Yes")
            {
                ObjPAS.pintReserveID = 3;
            }

            if (lblSC.Text == "Yes")
            {
                ObjPAS.pintReserveID = 2;
            }

            if (lblOther.Text == "Yes")
            {
                ObjPAS.pintReserveID = 5;
            }

            if (lblOBC.Text == "Yes")
            {
                ObjPAS.pintReserveID = 4;
            }

            if (lblGeneral.Text == "Yes")
            {
                ObjPAS.pintReserveID = 1;
            }

            if (lblWBC.Text == "Yes")
            {
                ObjPAS.pintReserveID = 6;
            }

            if (lblPHOH.Text == "Yes")
            {
                ObjPAS.PHOH = true;
            }
            else
            {
                ObjPAS.PHOH = false;
            }

            if (lblESM.Text == "Yes")
            {
                ObjPAS.ESM = true;
            }
            else
            {
                ObjPAS.ESM = false;
            }

            if (lblSDP.Text == "Yes")
            {
                ObjPAS.SDP = true;
            }
            else
            {
                ObjPAS.SDP = false;
            }

            if (lblCoM.Text == "Yes")
            {
                ObjPAS.CoM = true;
            }
            else
            {
                ObjPAS.CoM = false;
            }

            if (lblNccA.Text == "Yes")
            {
                ObjPAS.NCCA = true;
            }
            else
            {
                ObjPAS.NCCA = false;
            }

            if (lblNccC.Text == "Yes")
            {
                ObjPAS.NCCC = true;
            }
            else
            {
                ObjPAS.NCCC = false;
            }

            //if (lblPR.Text == "Yes")
            //{
            //    ObjPAS.ScoutPR = true;
            //}
            //else
            //{
            //    ObjPAS.ScoutPR = false;
            //}

            //if (lblRP.Text == "Yes")
            //{
            //    ObjPAS.ScoutRP = true;
            //}
            //else
            //{
            //    ObjPAS.ScoutRP = false;
            //}

            if (lblSportsS.Text == "Yes")
            {
                ObjPAS.SportsS = true;
            }
            else
            {
                ObjPAS.SportsS = false;
            }

            if (lblSportsN.Text == "Yes")
            {
                ObjPAS.SportsN = true;
            }
            else
            {
                ObjPAS.SportsN = false;
            }

            if (lblSportsIN.Text == "Yes")
            {
                ObjPAS.SportsIN = true;
            }
            else
            {
                ObjPAS.SportsIN = false;
            }

            //if (lblOSA.Text == "Yes")
            //{
            //    ObjPAS.OSA = true;
            //    ObjPAS.intOSAStateID = Convert.ToInt32(strOSA.Value.Split('~')[0]);
            //}

            //if (lblOSA.Text == "No")
            //{
            ObjPAS.OSA = false;
            //}

            //if (lblOlns.Text == "Yes")
            //{
            //    ObjPAS.OLNS = true;
            //    ObjPAS.intOLNSStateID = Convert.ToInt32(strOLNS.Value.Split('~')[0]);
            //}

            //if (lblOlns.Text == "No")
            //{
            ObjPAS.OLNS = false;
            //}

            // ==============for NSS Camp===========
            if (lblNssU.Text == "Yes")
            {
                ObjPAS.bitNssU = true;
            }
            else
            {
                ObjPAS.bitNssU = false;
            }

            if (lblNssS.Text == "Yes")
            {
                ObjPAS.bitNssS = true;
            }
            else
            {
                ObjPAS.bitNssS = false;
            }

            if (lblNssN.Text == "Yes")
            {
                ObjPAS.bitNssN = true;
            }
            else
            {
                ObjPAS.bitNssN = false;
            }

            if (lblNssIN.Text == "Yes")
            {
                ObjPAS.bitNssIN = true;
            }
            else
            {
                ObjPAS.bitNssIN = false;
            }

            // =====================================
            ObjPAS.BloodGrId = Convert.ToInt32(strBloodGroup.Value.Split('~')[0]);
            ObjPAS.ReligionId = Convert.ToInt32(strReligion.Value.Split('~')[0]);
            ObjPAS.GENDER = Convert.ToInt32(strGender.Value.Split('~')[0]);

            string[] dtArr = lblDob.Text.Split('-');

            ObjPAS.DOB = dtArr[2].ToString() + "-" + dtArr[1].ToString() + "-" + dtArr[0].ToString();//lblDob.Text.Trim().ToString();
            if (lblEngMark.Text != "")
            {
                ObjPAS.MarkSL = Convert.ToInt32(lblEngMark.Text);
            }
            else
            {
                ObjPAS.MarkSL = 0;
            }

            if (lblMathMark.Text != "")
            {
                ObjPAS.MarkMath = Convert.ToInt32(lblMathMark.Text);
            }
            else
            {
                ObjPAS.MarkMath = 0;
            }

            ObjPAS.Totalmark = Convert.ToInt32(lblTotalMark.Text);
            ObjPAS.MaxMark = Convert.ToInt32(lblMaxMark.Text);
            if (lblPrevStream.Text == "Arts")
            {
                ObjPAS.StreamID = 1;
                ObjPAS.MarkScience = 0;
                ObjPAS.MarkSocialStudies = 0;
                ObjPAS.MATH = 0;
            }

            if (lblPrevStream.Text == "Science")
            {
                ObjPAS.StreamID = 2;
                ObjPAS.MarkScience = Convert.ToInt32(lblScienceMark.Text);
                if (lblBiologyMark.Text != "")
                {
                    ObjPAS.MarkSocialStudies = Convert.ToInt32(lblBiologyMark.Text);
                }
                else
                {
                    ObjPAS.MarkSocialStudies = 0;
                }

                if (lblMathematics.Text != "")
                {
                    ObjPAS.MATH = Convert.ToInt32(lblMathematics.Text);
                }
                else
                {
                    ObjPAS.MATH = 0;
                }

            }

            if (lblPrevStream.Text == "Commerce")
            {
                ObjPAS.StreamID = 3;
                ObjPAS.MarkScience = 0;
                ObjPAS.MarkSocialStudies = 0;
                ObjPAS.MATH = 0;
            }

            if (lblPrevStream.Text == "Vocational")
            {
                ObjPAS.StreamID = 4;
                if (lblScienceMark.Text != "")
                {
                    ObjPAS.MarkScience = Convert.ToInt32(lblScienceMark.Text);
                }
                else
                {
                    ObjPAS.MarkScience = 0;
                }

                if (lblBiologyMark.Text != "")
                {
                    ObjPAS.MarkSocialStudies = Convert.ToInt32(lblBiologyMark.Text);
                }
                else
                {
                    ObjPAS.MarkSocialStudies = 0;
                }

                if (lblMathematics.Text != "")
                {
                    ObjPAS.MATH = Convert.ToInt32(lblMathematics.Text);
                }
                else
                {
                    ObjPAS.MATH = 0;
                }

            }

            if (lblPrevStream.Text == "Diploma")
            {
                ObjPAS.StreamID = 5;
                ObjPAS.MarkScience = Convert.ToInt32(lblScienceMark.Text);
                if (lblBiologyMark.Text != "")
                {
                    ObjPAS.MarkSocialStudies = Convert.ToInt32(lblBiologyMark.Text);
                }
                else
                {
                    ObjPAS.MarkSocialStudies = 0;
                }

                if (lblMathematics.Text != "")
                {
                    ObjPAS.MATH = Convert.ToInt32(lblMathematics.Text);
                }
                else
                {
                    ObjPAS.MATH = 0;
                }

            }

            if ((lblPrevStream.Text == "Upashastri"))
            {
                ObjPAS.StreamID = 6;
                ObjPAS.MarkScience = 0;
                ObjPAS.MarkSocialStudies = 0;
                ObjPAS.MATH = 0;
            }
            if ((lblPrevStream.Text == "Maulvi"))
            {
                ObjPAS.StreamID = 7;
                ObjPAS.MarkScience = 0;
                ObjPAS.MarkSocialStudies = 0;
                ObjPAS.MATH = 0;
            }
            // =====================Mark verification===========
            if (hdnMarkVerification.Value == "1")
            {
                if (lblMarkVerification.Text == "Yes")
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
            if (lblCompartmental.Text == "Yes")
            {
                ObjPAS.Compartmental = true;
            }
            else
            {
                ObjPAS.Compartmental = false;
            }

            ObjPAS.YearOfJoining = Convert.ToInt32(lblYOJ.Text);
            ObjPAS.YearOfLeaving = Convert.ToInt32(lblYOL.Text);
            string strPMark = "";
            string strSubject = "";
            string strFMark = "";
            if (txtCompSubject1.Text != "")
            {
                strSubject += txtCompSubject1.Text + "~";
                strFMark += txtCompFMark1.Text + "~";
                strPMark += txtCompPMark1.Text + "~";
            }

            if (txtCompSubject2.Text != "")
            {
                strSubject += txtCompSubject2.Text + "~";
                strFMark += txtCompFMark2.Text + "~";
                strPMark += txtCompPMark2.Text + "~";
            }

            if (txtCompSubject3.Text != "")
            {
                strSubject += txtCompSubject3.Text + "~";
                strFMark += txtCompFMark3.Text + "~";
                strPMark += txtCompPMark3.Text + "~";
            }

            ObjPAS.strSubject = strSubject;
            ObjPAS.strFMark = strFMark;
            ObjPAS.strPMark = strPMark;
            // =================Data For Option Details===================
            string strCollegeID = "";
            string strStreamID = "";
            string strPassHons = "";
            string strLiveOpt = "";
            string[] strAryOpt;
            if (hidCollege.Value.Contains("~"))
            {
                strAryOpt = hidCollege.Value.Split('~');
                intTotOption = strAryOpt.Length;
            }
            else
            {
                intTotOption = 1;
            }

            // ============================================
            strCollegeID = hidCollege.Value.Trim() + "~";
            strStreamID = hidStream.Value.Trim() + "~";
            //    strLiveOpt = hidHostel.Value.Trim() + "~";
            strPassHons = hidStreamPref.Value.Trim() + "~";
            ObjPAS.strCollegeIDS = strCollegeID;
            ObjPAS.strStreamIDS = strStreamID;
            ObjPAS.strELE1 = hidElective1.Value + "~";
            ObjPAS.strLiveOpt = strLiveOpt;
            ObjPAS.strFELE1 = strPassHons;
            // ObjPAS.strPassword = lblRoll.Text.Trim & lblYOE.Text.Trim.Substring(2, 2)
            Random generator = new Random();
            int randomValue;
            randomValue = generator.Next(100, 999);
            ObjPAS.strPassword = lblRoll.Text.Trim() + randomValue;
            strPass = lblRoll.Text.Trim() + randomValue;
            ObjPAS.pintTotOpt = intTotOption;

            // Total Option Set Here
            if (hidPhoto.Value != "")
            {
                ObjPAS.bitImageStatus = true;
            }

            
                strResult = ccobjcafdeg.AddCAFData(ObjPAS);
            

            intRetVal = Convert.ToInt32(strResult.Substring(0, 1));

            if (strResult.Contains("D"))
            {
                string[] strApp = strResult.Trim().Split('D');
                strImageName = strResult.Remove(0, 1);
                intApplID = Convert.ToInt32(strApp[1]);


                // Upload Image
                if (!string.IsNullOrEmpty(hidPhoto.Value))
                {
                    string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
                    pth = (pth + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES");
                    Directory.GetFiles(pth);
                    string srcName = pth + "\\" + hidPhoto.Value;
                    string newPath = System.IO.Path.Combine(pth, ObjPAS.CorBlockId.ToString());

                    if (File.Exists(srcName))
                    {
                        if (!Directory.Exists(newPath))
                        {
                            Directory.CreateDirectory(newPath);
                        }

                        string DestName = newPath + "\\" + strImageName + ".jpg";
                        File.Move(srcName, DestName);


                    }
                }
            }



        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmCAFDeg3");

            
        }
        finally
        {
            ObjPAS = null;
        }

        if (intRetVal == 1)
        {
            try
            {
                HttpContext.Current.Items["Photo"] = "";
                hidPhoto.Value = "";

                strOTP = RandomNumber();

                //Session["Uid"] = strImageName;
               
                    string Result = ccobjcafdeg.SaveOTP("I", lblmob.Text.Trim(), strOTP, strImageName, "");
                

                Send_SMS_EMAIL(strOTP);

                SqlConnection.ClearAllPools();
                HttpContext.Current.Items.Clear();
                Response.Redirect(GetUrl(strImageName));
                //Server.Transfer("Confirmation.aspx?Appid" + strImageName);
            }
            catch (Exception ex)
            {
                Util.LogError(ex, "ConfirmCAFDeg2");
            }
        }

        if (intRetVal == 3)
        {
           string strMobno = strResult.Remove(0, 1);
           string strMsg = "आपने पहले हीं  Mobile Number: " + strMobno + " से OFSS के माध्यम से आवेदन फॉर्म भर दिया है इसलिए आप दुबारा नया फॉर्म नहीं भर पा रहे हैं | पेमेंट करके अपना फॉर्म जमा करने के लिए Student Login में जाकर अपने मोबाइल नंबर  " + strMobno + "  से Login करें | यदि आपको Login ID एवं  पासवर्ड नहीं पता है तो Forgot Password पर क्लिक करके पासवर्ड Reset कर लें एवं पुन: Login करके अपना फॉर्म भर करके पेमेंट करके फॉर्म जमा कर लें |";
           ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "alert('" + strMsg + "')", true);
        }
        else if (intRetVal == 5)
        {

            string strMobno = strResult.Remove(0, 1);
            string strMsg = "Mobile No: " + strMobno + " already exist.Please try with another number";
            ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "alert('" + strMsg + "')", true);

        }
        else if (intRetVal == 4)
        {
            
        }

    }
    #region Generate Random Number
    private string RandomNumber()
    {
        Random random = new Random();
        int randNum = random.Next(1000000);
        return randNum.ToString("D6");
    }
    #endregion
    public void Send_SMS_EMAIL(string strDynamicPwd)
    {
        objMail = new SENDMAIL();
        objMsg = new SENDMSDSMS();
        try
        {
            if (lblemail.Text.Trim() != "")
            {
                try
                {
                    string mailBody =
                      "Dear " + lblApplName.Text.ToString().Trim() + ",\n" +
                      "You have received this message in response to your request for one-time password for new Application." + "\n" +
                      "Your one-time password:" + strDynamicPwd + "";
                    string subJect = "OTP for New Application";

                    if (System.Configuration.ConfigurationManager.AppSettings["EmailDeg"].ToString() == "Y")
                    {
                        objMail.sendMail(subJect, mailBody, lblemail.Text.Trim());
                    }
                }
                catch (Exception ex)
                {
                    Util.LogError(ex, "ConfirmCAFDeg1");
                }
            }

            if (lblmob.Text.Trim() != "")
            {
                string msgBody = "Your One Time Password(OTP) for New User Registration in OFSS is : " + strDynamicPwd +
                                       " which will be expired in 5 mins. Do not share it with anyone.";
                string response = objMsg.sendOTPMSG(lblmob.Text.Trim(), msgBody);
            }

        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmCAFDeg1");
           
        }
        finally
        {
            objMail = null;
            objMsg = null;
        }

    }
    protected void btnBack_Click(object sender, System.EventArgs e)
    {
        sendTransferData();
    }

    protected void btnSave_Click(object sender, System.EventArgs e)
    {
        AddCAFData("A");
    }

    public void sendEmail(string mailto, string mailfrom, string name, string strImageName, string strPass)
    {
        MailMessage greetings = new MailMessage();
        MailAddress addfrom = new MailAddress(mailfrom);
        SmtpClient smtp = new SmtpClient();
        greetings.IsBodyHtml = true;
        greetings.From = addfrom;
        greetings.To.Add(mailto);
        greetings.Priority = MailPriority.High;
        string strBody = ("<table width=\'100%\' border=\'0\' cellspacing=\'0\' cellpadding=\'4\'><tr><td colspan=\'3\' style=\'color:#00F\'" +
        "><font color=\'#0000FF\'>Dear  "
                    + (name + (@"</font></td></tr><tr><td colspan='3'><font color='#0000FF'>Your  on-line Common Application Form (CAF) for admission into +3 (Degree) Colleges  has successfully submitted in</font> <a href='http://www.dheorissa.in'><font color='#FF0000'>www.dheorissa.in</font></a></td></tr><tr><td width='20%'><font color='#0000FF'>Your Reference No.</font></td><td width='2%'><font color='#0000FF'>:</font></td><td width='78%'><font color='#0000FF'><strong>"
                    + (strImageName + "</strong></font></td></tr><tr></tr><tr><td height=\'15\' colspan=\'3\'></td></tr><tr><td colspan=\'3\'><fon" +
                    "t color=\'#0000FF\'>Dont submit your CAF (hard copy) in more than one  college. Give all your options" +
                    " (College + Stream + Hounours/Pass) in one CAF. </font></td></tr><tr><td height=\'10\' colspan=\'3\'></t" +
                    "d></tr><tr><td colspan=\'3\'><font color=\'#0000FF\'>Mere applying on-line CAF in the Internet will not " +
                    "be  sufficient for e-Admission. Your next step to take print of the both <strong>College  Copy</stro" +
                    "ng> & <strong>Applicant Copy</strong>. Affix your photograph, sign, attach  relevant documents i" +
                    "n the <strong>College Copy</strong> and submit at your nearest  degree colleges <strong>(Annexure-1 " +
                    "of CP)</strong> with requisite fees. The college  authority will return the <strong>Applicant Copy</" +
                    "strong> with a Money  Receipt-cum-Index Number. </font></td></tr><tr><td height=\'10\' colspan=\'3\'></t" +
                    "d></tr><tr><td colspan=\'3\'><font color=\'#ff0000\'><strong>Important Information on Application</stron" +
                    "g></font></td></tr><tr><td colspan=\'3\'><table width=\'100%\' border=\'0\' cellspacing=\'0\' cellpadding=\'2" +
                    "\'><tr><td width=\'3%\'><font color=\'#ff0000\'>�</font></td><td width=\'97%\'><em>Only computer generated " +
                    "CAF (with  Barcode) will be accepted at the OFSS Colleges.</em></td></tr><tr><td><font color=\'#ff000" +
                    "0\'>�</font></td><td><em>If an applicant  submits more than one CAF at College, then any one of the C" +
                    "AF will be rejected  automatically.</em></td></tr><tr><td><font color=\'#ff0000\'>�</font></td><td><em" +
                    ">If an applicant has  claimed any benefit of reservation or weightage without relevant document,  hi" +
                    "s/her case will be validated without claim.</em></td></tr><tr><td><font color=\'#ff0000\'>�</font></td" +
                    "> <td><em>The information  furnished in the hard copy of CAF shall be verified as per the photocopy " +
                    "of the  documents, submitted along with the college copy.</em></td></tr><tr><td><font color=\'#ff0000" +
                    "\'>�</font></td><td><em>Out State Applicants  (OSA) can send the CAF by post to any OFSS Degree Colle" +
                    "ge along with the  required option fees in the shape of Bank Draft only in favour the Principal of  " +
                    "the applied college.</em></td></tr><tr><td><font color=\'#ff0000\'>�</font></td><td><em>The duly fille" +
                    "d in  CAF (OSA applicants) should reach the college on or before the expiry of the  date-line. CAF w" +
                    "ithout the Bank Draft shall not be entertained.</em></td></tr></table></td></tr></table>"))));
        greetings.Body = strBody;
        greetings.Subject = "Confirmation to your On-line Application (CAF)";
        smtp.Host = "localhost";
        smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
        smtp.UseDefaultCredentials = true;
        try
        {
            smtp.Send(greetings);
        }
        catch (Exception ex)
        {
        }

    }

    private void specialcharatercheck(string strControlId, string redirect)
    {
        string strsplch = "~,`,!,@,#,$,%,^,&,*,(,),-,_,=,+,[,],{,},|,\\,',;,:,>,<,?,/,.";
        string[] arrspl;
        arrspl = strsplch.Split(new char[] { ',' });
        int index = strsplch.IndexOf(strControlId);
        if (index > 0)
        {
            Response.Redirect(redirect);
        }
    }
    private void checkAddress(string strControlId, string redirect)
    {
        string strsplch = "~,`,!,@,#,$,%,^,&,*,(,),_,=,+,[,],{,},|,',;,:,>,<,?";
        string[] arrspl = null;
        arrspl = strsplch.Split(new char[] { '~' });

        int index = strsplch.IndexOf(strControlId);
        if (index > 0)
        {
            Response.Redirect(redirect);
        }
    }

    protected void Page_Unload(object sender, System.EventArgs e)
    {
        HttpContext.Current.Items.Clear();
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
        string strURL = "ConfirmationDeg.aspx?AppId=" + AppId + "&Mob=" + lblmob.Text.Trim() + "&Email=" + lblemail.Text.Trim() + "&Nm=" + lblApplName.Text.Trim();
        return strURL;

        //string strURL = "ConfirmationDeg.aspx?";
        //string strURLWithData = strURL + string.Format("AppId={0}", AppId);
        //return strURLWithData;

    }


}




