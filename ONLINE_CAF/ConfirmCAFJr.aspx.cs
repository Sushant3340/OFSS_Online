
//#Region "About The Page"
//''*************************************************************************************************
//' Author                 :  Dillip Sahoo
//' Created on             :  14-April-2010
//' File Name              :  ConfirmCAF.aspx.vb
//' Description            :  Edit CAF Details
//' Modification History   :
//'                        <CR no.>    <Date>      <Modified by>  < Modification Summary>   <instructed by>    '                              
//' Function Name          :  fillAddressState(),fillBoard(),FillDate(),fillOLNS(),fillCollege(),fillDistrict(),fillBlock(),FillStream(),FillCompulsory(),FillElectives(),FillFourthElectives(),clientSideMethod(),
//' Procedures Used        : 
//' PDK function           : <CR No.>  <PDK Function Name>     <Purpose of use of PDK>
//'			        	     1.        DbExecuteNonQuery        To execute a procedure
//'                            2.          ExeReader              To read DEO Details
//'                            3.         PopupDropDown           To fill District & Block Dropdown
//' **************************************************************************************************
//#End Region

using System;
using System.IO;
using System.Web;
using OFSS_OL_Entity;
using System.Data.SqlClient;
using System.Net.Mail;
using System.Net;
using System.Web.UI;
using System.Configuration;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Text.RegularExpressions;

public partial class ONLINE_CAF_ConfirmCAFJr : System.Web.UI.Page
{
    CAFDAL ccobjcaf = new CAFDAL();

    int intRetVal;
    string strImageName = "";
    public string strCBSE = "False";
    SENDMAIL objMail = new SENDMAIL();
    SENDMSDSMS objMsg = new SENDMSDSMS();
    string strDynamicPwd = "";

    protected void Page_Load(object sender, EventArgs e)
    {
        Boolean IsException = true;
        try
        {
            if (!IsPostBack)
            {
                if (!string.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Items["Board"])))
                {
                    viewAppDetails();
                }
                else
                {
                    IsException = false;
                    //Response.Write("Error in Secondpage");
                    //Server.Transfer("Error.aspx", false);
                }
            }
        }
        catch (Exception ex)
        {
            IsException = false;
            Util.LogError(ex, "ConfirmCAFJr");
            //Server.Transfer("Error.aspx", False)
        }
        if (!IsException)
        {
            Server.Transfer("JrCAFForm.aspx", false);
        }


    }
    #region "Dispaly Data using Cache"

    protected void viewAppDetails()
    {
        lblAadhaarNo.Text = HttpContext.Current.Items["Aadhaar"].ToString() == "" ? "NA" : HttpContext.Current.Items["Aadhaar"].ToString();
        hdnAadharNo.Value = HttpContext.Current.Items["Aadhaar"].ToString();
        if (hdnAadharNo.Value == "")
        {
            cbAadharAgree1.Checked = true;
            cbAadharAgree1.Visible = true;
            lblAadharConf.Visible = true;
        }
        else
        {
            cbAadharAgree1.Checked = false;
            cbAadharAgree1.Visible = false;
            lblAadharConf.Visible = false;
        }

        hdnValidateSts.Value = HttpContext.Current.Items["ValidateSts"].ToString();
        hdnUniqueId.Value = HttpContext.Current.Items["UniqueId2"].ToString();
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
        strFontOption.Value = HttpContext.Current.Items["FontOption"].ToString();
        strnat.Value = HttpContext.Current.Items["Nationality"].ToString();
        strmt.Value = HttpContext.Current.Items["MT"].ToString();
        //strFocu.Value = HttpContext.Current.Items["Focu"].ToString();
        // strMocu.Value = HttpContext.Current.Items["Mocu"].ToString();
        if (HttpContext.Current.Items["Idist"] != null)
        {
            strinsdist.Value = HttpContext.Current.Items["Idist"].ToString();
        }
        stryoj.Value = HttpContext.Current.Items["YOJ"].ToString();
        stryol.Value = HttpContext.Current.Items["YOL"].ToString();
        //  strAIncome.Value = HttpContext.Current.Items["AIncome"].ToString();
        //'=================================================================
        // strAIncomeval.Value = HttpContext.Current.Items["AIncome"].ToString().Split('~')[0];

        //HttpContext.Current.Items["HQ"] = ddlHighestQualification.Text.Trim();
        //HttpContext.Current.Items["HQID"] = Convert.ToInt32(ddlHighestQualification.SelectedValue.ToString());
        //if (hdnFont.value == "1")
        //{
        //    rbtnEnglish.Checked = true;
        //}
        //else if (hdnFont.value  == 2)
        //{
        //    rbtnOriya.Checked = true;
        //}


        //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "Script", "ConfirmEnglishOriyaFont();", true);

        lblBoard.Text = strBoard.Value.Split('~')[1];
        if (strBoard.Value.Split('~')[0] == "109")
        {
            tdRollCdH.Style.Clear();
            tdRollCdF.Style.Clear();


            tdEng.Style.Add("display", "none");
            tdMath.Style.Add("display", "none");
            tdScience.Style.Add("display", "none");
            tdSoScience.Style.Add("display", "none");

            tdEngMrk.Style.Add("display", "none");
            tdMathMrk.Style.Add("display", "none");
            tdScienceMrk.Style.Add("display", "none");
            tdSoScienceMrk.Style.Add("display", "none");


        }
        else
        {

            tdRollCdH.Style.Add("display", "none");
            tdRollCdF.Style.Add("display", "none");

        }

        if (strBoard.Value.Split('~')[0] == "131")
        {
            lblOtherBoard.Visible = true;
            lblOtherBoard.Text = HttpContext.Current.Items["OtherBoard"].ToString();
        }
        else
        {
            lblOtherBoard.Text = "";
            lblOtherBoard.Visible = false;
            divOtherBoard.Visible = false;
        }


        lblYOE.Text = HttpContext.Current.Items["YOP"].ToString();
        if (Convert.ToInt32(HttpContext.Current.Items["ExamType"]) == 1)
        {
            lblExamType.Text = "Annual";
        }
        else
        {
            lblExamType.Text = "Compartmental";
        }
        //if (Convert.ToInt32(HttpContext.Current.Items["QualificationID"]) == 1)
        //{
        //    lblBoardName.Text = "Name of School";
        //    trCompartmental.Visible = false;
        //    lblYearofPassing.Text = "Year of Passing";
        //}
        //else if (Convert.ToInt32(HttpContext.Current.Items["QualificationID"]) == 2)
        //{
        //    lblBoardName.Text = "Name of the Examination Board";
        //    trCompartmental.Visible = false;
        //    lblYearofPassing.Text = "Year of Failing";
        //}
        //else
        //{
        //    lblBoardName.Text = "Name of the Examination Board";
        //    trCompartmental.Visible = true;
        //    lblYearofPassing.Text = "Year of Passing";
        //}

        //hidQualificationTypeID.Value = HttpContext.Current.Items["QualificationID"].ToString();

        lblRoll.Text = HttpContext.Current.Items["Roll"].ToString();
        lblRollCode.Text = HttpContext.Current.Items["RollCode"].ToString();
       if(Convert.ToInt32(HttpContext.Current.Items["YOP"]) == 2024 && strBoard.Value.Split('~')[0] == "109")
         {
            tdUniq.Attributes.Add("style", "");
            tdunique.Attributes.Add("style", "");
            LabelUId.Text = HttpContext.Current.Items["UniqueId"].ToString();
        }
        
        lblApplName.Text = HttpContext.Current.Items["AppName"].ToString().ToUpper();
        lblFatherName.Text = HttpContext.Current.Items["Fnam"].ToString().ToUpper();
        lblMotherName.Text = HttpContext.Current.Items["Mname"].ToString().ToUpper();
        lblBgroup.Text = strBloodGroup.Value.Split('~')[1];
        lblsex.Text = strGender.Value.Split('~')[1];
        lblreligion.Text = strReligion.Value.Split('~')[1];
        lblDob.Text = HttpContext.Current.Items["DOB"].ToString();
        //========
        lblstate.Text = strState.Value.Split('~')[1].ToUpper();

        lbldist.Text = strDist.Value.Split('~')[1].ToUpper();

        lblulb.Text = strBlock.Value.Split('~')[1].ToUpper();



        //============

        lblNat.Text = strnat.Value.Split('~')[1];
        lblmt.Text = strmt.Value.Split('~')[1];

        lblSchName.Text = HttpContext.Current.Items["SchName"].ToString();
        lblschloc.Text = HttpContext.Current.Items["SchLocation"].ToString().ToUpper();
        //============
        lbldtl.Text = HttpContext.Current.Items["Address"].ToString().ToUpper();
        lblpin.Text = HttpContext.Current.Items["Pin"].ToString().ToUpper();

        lblAreaCode.Text = strPhone.Value.Split('-')[0];
        lblPhoneNo.Text = strPhone.Value.Split('-')[1];
        lblmob.Text = HttpContext.Current.Items["Mobile"].ToString();

        if (HttpContext.Current.Items["Idist1"] != null)
        {
            lbllinsdist.Text = HttpContext.Current.Items["Idist1"].ToString();
        }
        else if (strinsdist.Value != "")
        {
            lbllinsdist.Text = strinsdist.Value.Split('~')[1];
            //lbllinsdist.Text = strinsdist.Value;
        }
        lblYOJ.Text = stryoj.Value.Split('~')[1];
        lblYOL.Text = stryol.Value.Split('~')[1];

        //================Mark Details==================
        if (((Convert.ToInt32(strBoard.Value.Split('~')[0]) == 46 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) >= 2010 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) != 2018) || (Convert.ToInt32(strBoard.Value.Split('~')[0]) == 103 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) >= 2012)))
        {
            strEng.Value = HttpContext.Current.Items["SLE"].ToString();
            strMath.Value = HttpContext.Current.Items["Math"].ToString();
            strSc.Value = HttpContext.Current.Items["Science"].ToString();
            strSoSci.Value = HttpContext.Current.Items["SocialScience"].ToString();
        }
        if (Convert.ToInt32(strBoard.Value.Split('~')[0]) == 116 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) >= 2010)
        {
            strEng.Value = HttpContext.Current.Items["SLE"].ToString();
            strMath.Value = HttpContext.Current.Items["Math"].ToString();
            strSc.Value = HttpContext.Current.Items["Science"].ToString();
            strSoSci.Value = HttpContext.Current.Items["SocialScience"].ToString();
            strKGrade.Value = HttpContext.Current.Items["TotMark"].ToString();
        }

        //==============================================
        if (string.IsNullOrEmpty(HttpContext.Current.Items["Email"].ToString()))
        {
            lblemail.Text = "";
        }
        else
        {
            lblemail.Text = HttpContext.Current.Items["Email"].ToString();
        }
        //====================Reservation Details===================
        if (Convert.ToInt32(HttpContext.Current.Items["Cat1"]) == 5)
        {
            lblOther.Text = "Yes";
            lblST.Text = "No";
            lblSC.Text = "No";
            lblOBC.Text = "No";
            lblGeneral.Text = "No";
            lblWBC.Text = "No";
        }
        else if (Convert.ToInt32(HttpContext.Current.Items["Cat1"]) == 2)
        {
            lblSC.Text = "Yes";
            lblOther.Text = "No";
            lblST.Text = "No";
            lblOBC.Text = "No";
            lblGeneral.Text = "No";
            lblWBC.Text = "No";
        }
        else if (Convert.ToInt32(HttpContext.Current.Items["Cat1"]) == 3)
        {
            lblST.Text = "Yes";
            lblOther.Text = "No";
            lblSC.Text = "No";
            lblOBC.Text = "No";
            lblGeneral.Text = "No";
            lblWBC.Text = "No";
        }
        else if (Convert.ToInt32(HttpContext.Current.Items["Cat1"]) == 4)
        {
            lblOBC.Text = "Yes";
            lblOther.Text = "No";
            lblST.Text = "No";
            lblSC.Text = "No";
            lblGeneral.Text = "No";
            lblWBC.Text = "No";
        }
        else if (Convert.ToInt32(HttpContext.Current.Items["Cat1"]) == 1)
        {
            lblGeneral.Text = "Yes";
            lblOther.Text = "No";
            lblST.Text = "No";
            lblSC.Text = "No";
            lblOBC.Text = "No";
            lblWBC.Text = "No";
        }
        else if (Convert.ToInt32(HttpContext.Current.Items["Cat1"]) == 6)
        {
            lblWBC.Text = "Yes";
            lblGeneral.Text = "No";
            lblOther.Text = "No";
            lblST.Text = "No";
            lblSC.Text = "No";
            lblOBC.Text = "No";
        }
        if (Convert.ToInt32(HttpContext.Current.Items["PHOH"]) == 1)
        {
            lblPHOH.Text = "Yes";
            //lblPHPercentage.Visible = true;
        }
        else
        {
            lblPHOH.Text = "No";
            //lblPHPercentage.Visible = false;
        }

        if (Convert.ToInt32(HttpContext.Current.Items["EWS"]) == 1)
        {
            lblEWS.Text = "Yes";

        }
        else
        {
            lblEWS.Text = "No";

        }

        if (Convert.ToInt32(HttpContext.Current.Items["SDP"]) == 1)
        {
            lblSDP.Text = "Yes";
        }
        else
        {
            lblSDP.Text = "No";
        }
        //if (Convert.ToInt32(HttpContext.Current.Items["SDP"]) == 1)
        //{
        //    lblSDP.Text = "Yes";
        //}
        //else
        //{
        //    lblSDP.Text = "No";
        //}

        if (Convert.ToInt32(HttpContext.Current.Items["ESM"]) == 1)
        {
            lblESM.Text = "Yes";
        }
        else
        {
            lblESM.Text = "No";
        }
        if (Convert.ToInt32(HttpContext.Current.Items["COM"]) == 1)
        {
            lblCoM.Text = "Yes";
        }
        else
        {
            lblCoM.Text = "No";
        }

        //'==============Weightage Details===============
        if (Convert.ToInt32(HttpContext.Current.Items["NCCA"]) == 1)
        {
            lblNccA.Text = "Yes";
        }
        else
        {
            lblNccA.Text = "No";
        }
        if (Convert.ToInt32(HttpContext.Current.Items["NCCC"]) == 1)
        {
            lblNccC.Text = "Yes";
        }
        else
        {
            lblNccC.Text = "No";
        }
        if (Convert.ToInt32(HttpContext.Current.Items["SCPR"]) == 1)
        {
            lblPR.Text = "Yes";
        }
        else
        {
            lblPR.Text = "No";
        }
        if (Convert.ToInt32(HttpContext.Current.Items["SCRP"]) == 1)
        {
            lblRP.Text = "Yes";
        }
        else
        {
            lblRP.Text = "No";
        }
        if (Convert.ToInt32(HttpContext.Current.Items["SPS"]) == 1)
        {
            lblSportsS.Text = "Yes";
        }
        else
        {
            lblSportsS.Text = "No";
        }
        if (Convert.ToInt32(HttpContext.Current.Items["SPN"]) == 1)
        {
            lblSportsN.Text = "Yes";
        }
        else
        {
            lblSportsN.Text = "No";
        }
        if (Convert.ToInt32(HttpContext.Current.Items["SPIN"]) == 1)
        {
            lblSportsIN.Text = "Yes";
        }
        else
        {
            lblSportsIN.Text = "No";
        }

        //================Mark Details================
        if ((Convert.ToInt32(strBoard.Value.Split('~')[0]) == 45 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) >= 2014))
        {
            lblGrade.Text = "0";// HttpContext.Current.Items["Grade"].ToString();
        }
        else
        {
            lblGrade.Text = "0";
        }
        if (((Convert.ToInt32(strBoard.Value.Split('~')[0]) == 46 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) >= 2010 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) <= 2018) || Convert.ToInt32(strBoard.Value.Split('~')[0]) == 103 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) >= 2012))
        {
            strCBSE = "True";
            //lblEngMark.Text = strEng.Value.Split('~')[1];
            //lblMathMark.Text = strMath.Value.Split('~')[1];
            //lblScienceMark.Text = strSc.Value.Split('~')[1];
            //lblSSMark.Text = strSoSci.Value.Split('~')[1];
            lblTotalMark.Text = HttpContext.Current.Items["TotMark"].ToString();
            lblMaxMark.Text = HttpContext.Current.Items["MaxMark"].ToString();
        }
        else if (Convert.ToInt32(strBoard.Value.Split('~')[0]) == 116 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) >= 2010)
        {
            strCBSE = "KERALA";
            //lblEngMark.Text = strEng.Value.Split('~')[1];
            //lblMathMark.Text = strMath.Value.Split('~')[1];
            //lblScienceMark.Text = strSc.Value.Split('~')[1];
            lblSSMark.Text = strSoSci.Value.Split('~')[1];
            lblTotalMark.Text = strKGrade.Value.Split('~')[1];
        }
        else
        {
            strCBSE = "False";
            //lblEngMark.Text = HttpContext.Current.Items["SLE"].ToString();
            //lblMathMark.Text = HttpContext.Current.Items["Math"].ToString();
            //lblScienceMark.Text = HttpContext.Current.Items["Science"].ToString();
            //lblSSMark.Text = HttpContext.Current.Items["SocialScience"].ToString();
            lblTotalMark.Text = HttpContext.Current.Items["TotMark"].ToString();
            lblMaxMark.Text = HttpContext.Current.Items["MaxMark"].ToString();
        }

        //==============Compartmnet Mark Details========
        if (Convert.ToInt32(HttpContext.Current.Items["CompartmentStatus"]) == 1)
        {
            lblCompartmental.Text = "Yes";
            tblComp.Visible = true;
            strCompSub.Value = HttpContext.Current.Items["Subject"].ToString();
            txtCompSubject1.Text = strCompSub.Value.Split('~')[0];
            txtCompSubject2.Text = strCompSub.Value.Split('~')[1];
            txtCompSubject3.Text = strCompSub.Value.Split('~')[2];
            txtCompSubject4.Text = strCompSub.Value.Split('~')[3];
            strFailMark.Value = HttpContext.Current.Items["FailMark"].ToString();
            txtCompFMark1.Text = strFailMark.Value.Split('~')[0];
            txtCompFMark2.Text = strFailMark.Value.Split('~')[1];
            txtCompFMark3.Text = strFailMark.Value.Split('~')[2];
            txtCompFMark4.Text = strFailMark.Value.Split('~')[3];
            strPassMark.Value = HttpContext.Current.Items["PassMark"].ToString();
            txtCompPMark1.Text = strPassMark.Value.Split('~')[0];
            txtCompPMark2.Text = strPassMark.Value.Split('~')[1];
            txtCompPMark3.Text = strPassMark.Value.Split('~')[2];
            txtCompPMark4.Text = strPassMark.Value.Split('~')[3];
        }
        else
        {
            tblComp.Visible = false;
            lblCompartmental.Text = "No";
        }

        //================Option Details=======================
        //hidOptionIds.Value = "1"

        hidCollege.Value = HttpContext.Current.Items["CollegeIds"].ToString().Trim('~');
        hidStream.Value = HttpContext.Current.Items["StreamIds"].ToString().TrimEnd('~');

        //hidComplusory.Value = HttpContext.Current.Items["Compulsory"].ToString().TrimEnd('~');
        hidComplusory1.Value = HttpContext.Current.Items["Compulsory1"].ToString().TrimEnd('~');
        hidComplusory2.Value = HttpContext.Current.Items["Compulsory2"].ToString().TrimEnd('~');
        hidComplusory3.Value = HttpContext.Current.Items["Compulsory3"].ToString().TrimEnd('~');

        hidElective1.Value = HttpContext.Current.Items["Elective1"].ToString().TrimEnd('~');
        hidElective2.Value = HttpContext.Current.Items["Elective2"].ToString().TrimEnd('~');
        hidElective3.Value = HttpContext.Current.Items["Elective3"].ToString().TrimEnd('~');
        hidFElelective1.Value = HttpContext.Current.Items["FElective1"].ToString().TrimEnd('~');
        //hidFElelective2.Value = HttpContext.Current.Items["FElective2"].ToString().TrimEnd('~');
        //hidFElelective3.Value = HttpContext.Current.Items["FElective3"].ToString().TrimEnd('~');
        hidHostel.Value = HttpContext.Current.Items["Hostel"].ToString().TrimEnd('~');
        //==============Assigning names===============
        hidCname.Value = HttpContext.Current.Items["CNames"].ToString().TrimEnd('~');
        hidSname.Value = HttpContext.Current.Items["Snames"].ToString().TrimEnd('~');

        //hidCompName.Value = HttpContext.Current.Items["CompNames"].ToString().TrimEnd('~');
        hidCompName1.Value = HttpContext.Current.Items["ComNames1"].ToString().TrimEnd('~');
        hidCompName2.Value = HttpContext.Current.Items["ComNames2"].ToString().TrimEnd('~');
        hidCompName3.Value = HttpContext.Current.Items["ComNames3"].ToString().TrimEnd('~');

        hidE1name.Value = HttpContext.Current.Items["EleNames1"].ToString().TrimEnd('~');
        hidE2name.Value = HttpContext.Current.Items["EleNames2"].ToString().TrimEnd('~');
        hidE3name.Value = HttpContext.Current.Items["EleNames3"].ToString().TrimEnd('~');
        hidF1Ele.Value = HttpContext.Current.Items["FEleNames1"].ToString().TrimEnd('~');
        //hidF2Ele.Value = HttpContext.Current.Items["FEleNames2"].ToString().TrimEnd('~');
        //hidF3Ele.Value = HttpContext.Current.Items["FEleNames3"].ToString().TrimEnd('~');



        //=====================================================

        if (HttpContext.Current.Items["Photo"] != null)
        {

            //imgUpload.PostedFile = hidPhoto.Value;
            //imgPhoto.ImageUrl = pthview + "SAMS\\ONLINE_CAF\\APPL_IMAGES" + "/" + hidPhoto.Value;
            //imgPhoto.ImageUrl = "~/DownloadImage.ashx?clsid=1&id=" + hidPhoto.Value;
            //imgPhoto.ImageUrl = "~/DownloadImage.ashx?clsid=1&id=" + hidPhoto;
            //Read the uploaded File as Byte Array from FileUpload control.
            //string fs=  HttpContext.Current.Items["ImgByteStream"].ToString();
            //Stream fs =
            //BinaryReader br = new BinaryReader(fs);
            //byte[] bytes = br.ReadBytes((Int32)fs.Length);
            ////Save the Byte Array as File.
            //string filePath = "~/ONLINE_CAF/2020/" + CAFREGNO + ".jpg";
            //File.WriteAllBytes(filePath, bytes);
            //string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();


            //Code added By kisan
            byte[] bytes = (byte[])HttpContext.Current.Items["ByteStream"];
            ViewState["ByteStream"] = bytes;//store bytestream to use in btnsave event
            hidPhoto.Value = HttpContext.Current.Items["Photo"].ToString();
            ViewState["PhotoSrc"] = HttpContext.Current.Items["Photo"].ToString();


            string pth = ConfigurationManager.AppSettings["StrImgPath"].ToString();


            

            imgPhoto.ImageUrl = pth+ HttpContext.Current.Items["Photo"];
        }
        else
        {
            imgPhoto.ImageUrl = "~/images/noimage.JPG";
        }

        //---------============send value for Kasturba Gandhi Aawasiya Bilika Chhatrawas

        if (Convert.ToInt32(HttpContext.Current.Items["KGBACSts"]) == 1)
        {
            lblKGBAC1.Text = "Yes";
        }
        else
        {
            lblKGBAC1.Text = "No";
        }

        //hidLanguage.Value = HttpContext.Current.Items["FontOption"].ToString();
        //ScriptManager.RegisterStartupScript(this, Page.GetType, "Script", "ConfirmEnglishOriyaFont('" + hidLanguage.Value + "');", true);


    }
    #endregion

    #region "Send Back"
    protected void sendTransferData()
    {
        Boolean IsException = false;
        try
        {
            HttpContext.Current.Items.Clear();
            HttpContext.Current.Items["FontOption"] = strFontOption.Value;
            HttpContext.Current.Items["ValidateSts"] = hdnValidateSts.Value;
            HttpContext.Current.Items["UniqueId2"] = hdnUniqueId.Value;
            //=================10th Board Details=============
            HttpContext.Current.Items["Board"] = strBoard.Value.Split('~')[0].ToString() + "~" + strBoard.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["OtherBoard"] = lblOtherBoard.Text.Trim();
            if (lblExamType.Text == "Annual")
            {
                HttpContext.Current.Items["ExamType"] = 1;
            }
            else
            {
                HttpContext.Current.Items["ExamType"] = 2;
            }
            HttpContext.Current.Items["YOP"] = lblYOE.Text.Trim();
            HttpContext.Current.Items["Roll"] = lblRoll.Text.Trim();
            HttpContext.Current.Items["RollCode"] = lblRollCode.Text.Trim();
            //=================Personal Informaion==============
             if(Convert.ToInt32(HttpContext.Current.Items["YOP"]) == 2024 && Convert.ToInt32(strBoard.Value.Split('~')[0].ToString()) == 109)
            {
                tdUniq.Attributes.Add("style", "");
                tdunique.Attributes.Add("style", "");
                HttpContext.Current.Items["UniqueId"] = LabelUId.Text;
            }

            //HttpContext.Current.Items["UniqueId"] = LabelUId.Text;
            HttpContext.Current.Items["AppName"] = lblApplName.Text;
            HttpContext.Current.Items["Fnam"] = lblFatherName.Text;
            HttpContext.Current.Items["Mname"] = lblMotherName.Text;
            HttpContext.Current.Items["Bgroup"] = strBloodGroup.Value.Split('~')[0].ToString() + "~" + strBloodGroup.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["Religion"] = strReligion.Value.Split('~')[0].ToString() + "~" + strReligion.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["Sex"] = strGender.Value.Split('~')[0].ToString() + "~" + strGender.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["DOB"] = lblDob.Text.Trim();
            //'====================Anexture-8 Details================
            HttpContext.Current.Items["Nationality"] = strnat.Value.Split('~')[0].ToString() + "~" + strnat.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["MT"] = strmt.Value.Split('~')[0].ToString() + "~" + strmt.Value.Split('~')[1].ToString();
            //HttpContext.Current.Items["Focu"] = strFocu.Value.Split('~')[0].ToString() + "~" + strFocu.Value.Split('~')[1].ToString();
            //HttpContext.Current.Items["Mocu"] = strMocu.Value.Split('~')[0].ToString() + "~" + strMocu.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["YOJ"] = stryoj.Value.Split('~')[0].ToString() + "~" + stryoj.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["YOL"] = stryol.Value.Split('~')[0].ToString() + "~" + stryol.Value.Split('~')[1].ToString();
            //HttpContext.Current.Items["AIncome"] = strAIncome.Value.Split('~')[0].ToString() + "~" + strAIncome.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["SchName"] = lblSchName.Text;
            HttpContext.Current.Items["SchLocation"] = lblschloc.Text;
            //====================Address Details===============

            if (strinsdist.Value == "")
            {
                HttpContext.Current.Items["Idist1"] = lbllinsdist.Text;

            }
            else
            {
                HttpContext.Current.Items["Idist"] = strinsdist.Value.Split('~')[0].ToString();
            }

            HttpContext.Current.Items["State"] = strState.Value.Split('~')[0].ToString() + "~" + strState.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["Dist"] = strDist.Value.Split('~')[0].ToString() + "~" + strDist.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["Block"] = strBlock.Value.Split('~')[0].ToString() + "~" + strBlock.Value.Split('~')[1].ToString();
            HttpContext.Current.Items["Address"] = lbldtl.Text;
            HttpContext.Current.Items["Pin"] = lblpin.Text;
            HttpContext.Current.Items["Phone"] = strPhone.Value.Split('~')[0].ToString() + "-" + strPhone.Value.Split('~')[0].ToString();
            HttpContext.Current.Items["Mobile"] = lblmob.Text;
            HttpContext.Current.Items["Email"] = lblemail.Text;
            HttpContext.Current.Items["Aadhaar"] = hdnAadharNo.Value;


            //=================Income Details===========================

            //HttpContext.Current.Items["OrphanOption"] = hidOrphan.Value;

            //HttpContext.Current.Items["Focu"] = hidFatherOccupation.Value + "~" + lblFatherOccupation.Text;
            //HttpContext.Current.Items["Mocu"] = hidMotherOccupation.Value + "~" + lblMotherOccupation.Text;
            //HttpContext.Current.Items["AIncome"] = hidAnnualIncomeValue.Value + "~" + lblAnnualIncome.Text;
            //HttpContext.Current.Items["COMMUNITY"] = hidSpecialCommunity.Value + "~" + (lblSpecialCommunity.Text == "No" ? "--SELECT--" : lblSpecialCommunity.Text);
            //HttpContext.Current.Items["PERCENTAGE"] = hidPHPercentage.Value + "~" + lblPHPercentage.Text;
            //HttpContext.Current.Items["LEVEL"] = hidSportsLevel.Value + "~" + lblSportsLevel.Text;
            //HttpContext.Current.Items["HQ"] = lblHighestQualification.Text.Trim();
            //HttpContext.Current.Items["HQID"] = hidHighestQualification.Value;

            //=================Reservation Details===============
            if (lblSC.Text == "Yes")
            {
                HttpContext.Current.Items["Cat1"] = 2;
            }
            else if (lblST.Text == "Yes")
            {
                HttpContext.Current.Items["Cat1"] = 3;
                //ElseIf lblOther.Text = "Yes" Then
                //    HttpContext.Current.Items("Cat1") = 5
            }
            else if (lblOther.Text == "Yes")
            {
                HttpContext.Current.Items["Cat1"] = 5;
            }

            else if (lblOBC.Text == "Yes")
            {
                HttpContext.Current.Items["Cat1"] = 4;
            }
            else if (lblGeneral.Text == "Yes")
            {
                HttpContext.Current.Items["Cat1"] = 1;
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

            if (lblEWS.Text == "Yes")
            {
                HttpContext.Current.Items["EWS"] = 1;
            }
            else
            {
                HttpContext.Current.Items["EWS"] = 0;
            }


            if (lblCoM.Text == "Yes")
            {
                HttpContext.Current.Items["CoM"] = 1;
            }
            else
            {
                HttpContext.Current.Items["CoM"] = 0;
            }
            if (lblESM.Text == "Yes")
            {
                HttpContext.Current.Items["ESM"] = 1;
            }
            else
            {
                HttpContext.Current.Items["ESM"] = 0;
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

            //================MarkDetails===============
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

            if (lblPR.Text == "Yes")
            {
                HttpContext.Current.Items["SCPR"] = 1;
            }
            else
            {
                HttpContext.Current.Items["SCPR"] = 0;
            }

            if (lblRP.Text == "Yes")
            {
                HttpContext.Current.Items["SCRP"] = 1;
            }
            else
            {
                HttpContext.Current.Items["SCRP"] = 0;
            }
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


            //'================MarkDetails===============

            if (((Convert.ToInt32(strBoard.Value.Split('~')[0]) == 46 && Convert.ToInt32(lblYOE.Text) >= 2010 && Convert.ToInt32(lblYOE.Text) < 2018) || Convert.ToInt32(strBoard.Value.Split('~')[0]) == 103 && Convert.ToInt32(lblYOE.Text) >= 2012))
            {
                HttpContext.Current.Items["SLE"] = "0"; //strEng.Value.Split('~')[0] + "~" + lblEngMark.Text;
                HttpContext.Current.Items["Math"] = "0"; //strMath.Value.Split('~')[0] + "~" + lblMathMark.Text;
                HttpContext.Current.Items["Science"] = "0"; //strSc.Value.Split('~')[0] + "~" + lblScienceMark.Text;
                HttpContext.Current.Items["SocialScience"] = "0"; //strSoSci.Value.Split('~')[0] + "~" + lblSSMark.Text;
                HttpContext.Current.Items["TotMark"] = lblTotalMark.Text;
                HttpContext.Current.Items["MaxMark"] = 10;


            }
            else if (Convert.ToInt32(strBoard.Value.Split('~')[0]) == 116 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) >= 2010)
            {
                HttpContext.Current.Items["SLE"] = "0"; //strEng.Value.Split('~')[0] + "~" + lblEngMark.Text;
                HttpContext.Current.Items["Math"] = "0"; //strMath.Value.Split('~')[0] + "~" + lblMathMark.Text;
                HttpContext.Current.Items["Science"] = "0"; //strSc.Value.Split('~')[0] + "~" + lblScienceMark.Text;
                HttpContext.Current.Items["SocialScience"] = "0"; //strSoSci.Value.Split('~')[0] + "~" + lblSSMark.Text;
                HttpContext.Current.Items["TotMark"] = lblTotalMark.Text;
                HttpContext.Current.Items["MaxMark"] = 10;



            }
            else
            {
                HttpContext.Current.Items["SLE"] = lblEngMark.Text;
                HttpContext.Current.Items["Math"] = lblMathMark.Text;
                HttpContext.Current.Items["Science"] = lblScienceMark.Text;
                HttpContext.Current.Items["SocialScience"] = lblSSMark.Text;
                HttpContext.Current.Items["TotMark"] = lblTotalMark.Text;
                HttpContext.Current.Items["MaxMark"] = lblMaxMark.Text;
            }


            // Validation removed for  CBSE, New Delhi - 46 and  ICSE, New Delhi - 47
            //if ( Convert.ToInt32(strBoard.Value.Split('~')[0]) == 47 && Convert.ToInt32(HttpContext.Current.Items["YOP"]) == 2020)
            //{
            //    HttpContext.Current.Items["MaxMark"] = "";
            //    HttpContext.Current.Items["TotMark"] = "";
            //    lblTotalMark.Text = "";
            //    lblMaxMark.Text = "";

            //}



            //Added By Pradeep For Grade Details
            if (((Convert.ToInt32(strBoard.Value.Split('~')[0]) == 45 & Convert.ToInt32(lblYOE.Text) >= 2014)))
            {
                HttpContext.Current.Items["Grade"] = lblGrade.Text;
            }

            //================Compartmental Status=========
            if (lblCompartmental.Text == "Yes")
            {
                HttpContext.Current.Items["CompartmentStatus"] = 1;
                HttpContext.Current.Items["Subject"] = txtCompSubject1.Text + "~" + txtCompSubject2.Text + "~" + txtCompSubject3.Text + "~" + txtCompSubject4.Text;
                HttpContext.Current.Items["FailMark"] = txtCompFMark1.Text + "~" + txtCompFMark2.Text + "~" + txtCompFMark3.Text + "~" + txtCompFMark4.Text;
                HttpContext.Current.Items["PassMark"] = txtCompPMark1.Text + "~" + txtCompPMark2.Text + "~" + txtCompPMark3.Text + "~" + txtCompPMark4.Text;
            }
            else
            {
                HttpContext.Current.Items["CompartmentStatus"] = 0;
            }

            //===================Option Details===================
            HttpContext.Current.Items["CollegeIds"] = hidCollege.Value.Trim();
            HttpContext.Current.Items["StreamIds"] = hidStream.Value.Trim();

            //HttpContext.Current.Items["Compulsory"] = hidComplusory.Value.Trim();

            HttpContext.Current.Items["Compulsory1"] = hidComplusory1.Value.Trim();
            HttpContext.Current.Items["Compulsory2"] = hidComplusory2.Value.Trim();
            HttpContext.Current.Items["Compulsory3"] = hidComplusory3.Value.Trim();

            HttpContext.Current.Items["Elective1"] = hidElective1.Value;
            HttpContext.Current.Items["Elective2"] = hidElective2.Value;
            HttpContext.Current.Items["Elective3"] = hidElective3.Value;
            HttpContext.Current.Items["FElective1"] = hidFElelective1.Value;
            //HttpContext.Current.Items["FElective2"] = hidFElelective2.Value;
            //HttpContext.Current.Items["FElective3"] = hidFElelective3.Value;
            HttpContext.Current.Items["Hostel"] = hidHostel.Value.Trim();
            //HttpContext.Current.Items["IMC"] = hidImc.Value.Trim();


            //====================================================
            HttpContext.Current.Items["CNames"] = hidCname.Value;
            HttpContext.Current.Items["Snames"] = hidSname.Value;
            //  HttpContext.Current.Items["CompNames"] = hidCompName.Value;

            HttpContext.Current.Items["ComNames1"] = hidCompName1.Value;
            HttpContext.Current.Items["ComNames2"] = hidCompName2.Value;
            HttpContext.Current.Items["ComNames3"] = hidCompName3.Value;

            HttpContext.Current.Items["EleNames1"] = hidE1name.Value;
            HttpContext.Current.Items["EleNames2"] = hidE2name.Value;
            HttpContext.Current.Items["EleNames3"] = hidE3name.Value;
            HttpContext.Current.Items["FEleNames1"] = hidF1Ele.Value;
            //HttpContext.Current.Items["FEleNames2"] = hidF2Ele.Value;
            //HttpContext.Current.Items["FEleNames3"] = hidF3Ele.Value;
            ////HttpContext.Current.Items["QualificationID"] = hidQualificationTypeID.Value;

            //====================================================

            //===================================================='
            if (ViewState["PhotoSrc"] != null)
            {
                hidPhoto.Value = ViewState["PhotoSrc"].ToString();
            }
            HttpContext.Current.Items["Photo"] = hidPhoto.Value;
            HttpContext.Current.Items["ByteStream"] = ViewState["ByteStream"]; //send back bytestream

            //---------============send value for Kasturba Gandhi Aawasiya Bilika Chhatrawas
            if (lblKGBAC1.Text == "Yes")
            {
                HttpContext.Current.Items["KGBACSts"] = "1";
            }
            else
            {
                HttpContext.Current.Items["KGBACSts"] = "0";
            }

           // Server.Transfer("JrCAFForm.aspx", false);
            //HttpContext.Current.RewritePath("JrCAFForm.aspx");
            // Response.Redirect("JrCAFForm.aspx");
        }
        catch (Exception ex)
        {
            IsException = true;

            Util.LogError(ex, "ConfirmCAFJr");
        }
        finally
        {
            Context.ApplicationInstance.CompleteRequest();
        }
        if (!IsException)
        {
            Server.Transfer("JrCAFForm.aspx", false);
        }
      
    }
    #endregion
    protected void btnSave_Click(object sender, EventArgs e)
    {
        if (!string.IsNullOrEmpty(hidPhoto.Value))
        {
            AddCAFData("A");
        }
        else
        {
            ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "alert('Image has not been uploaded properly!!. Kindly try again.');", true);
        }
    }
    #region "Add CAF Details"
    protected void AddCAFData(string strAction)
    {
        Boolean IsException = false;
        CAFEntity ObjPAS = new CAFEntity();

        string strPass = "";
        string strResult = "";
        int intApplID = 0;
        int intTotOption = 0;

        try
        {
            ObjPAS.Action = strAction;
            ObjPAS.IPAddress = GetIP();
            ObjPAS.ApplicantID = 0;
            ObjPAS.BoardId = Convert.ToInt32(strBoard.Value.Split('~')[0]);
            ObjPAS.CorVillageName = lblOtherBoard.Text.Trim();
            if (lblExamType.Text == "Annual")
            {
                ObjPAS.ExamType = "1";
            }
            else
            {
                ObjPAS.ExamType = "2";
            }

            ObjPAS.int_AutoValidateStatus = hdnValidateSts.Value == "" || hdnValidateSts.Value == "0" ? 0 : 1;

            ObjPAS.pintYOP = Convert.ToInt32(lblYOE.Text.Trim());
            ObjPAS.RollNo = lblRoll.Text.Trim().ToString();
            ObjPAS.vch_RollNo = lblRollCode.Text.Trim().ToString();
            ObjPAS.pintTotOpt = 0;
            //Will Be Added Later
            ObjPAS.pStrName = LabelUId.Text.ToString().Trim().ToUpper();
            ObjPAS.ApplicantName = lblApplName.Text.ToString().Trim().ToUpper();
            ObjPAS.FatherName = lblFatherName.Text.Trim().ToUpper();
            ObjPAS.MotherName = lblMotherName.Text.Trim().ToUpper();
            ObjPAS.strGuardianName = "";
            ObjPAS.CorStateId = Convert.ToInt32(strState.Value.Split('~')[0]);
            ObjPAS.CorDistId = Convert.ToInt32(strDist.Value.Split('~')[0]);
            ObjPAS.CorBlockId = Convert.ToInt32(strBlock.Value.Split('~')[0]);
            //ObjPAS.CorVillageName = "";
            ObjPAS.CorHouseNo = lbldtl.Text.Trim().ToUpper();

            ObjPAS.CorPO = "";
            ObjPAS.CorPS = "";
            ObjPAS.CorPinCode = lblpin.Text.Trim();
            ObjPAS.CorPhNo = lblAreaCode.Text.Trim() + "-" + lblPhoneNo.Text.Trim();
            ObjPAS.CorMobileNo = lblmob.Text.Trim();
            ObjPAS.EmailId = lblemail.Text.Trim();

            ObjPAS.PerStateId = Convert.ToInt32(strState.Value.Split('~')[0]);
            ObjPAS.PerDistId = Convert.ToInt32(strDist.Value.Split('~')[0]);
            ObjPAS.PerBlockId = Convert.ToInt32(strBlock.Value.Split('~')[0]);
            ObjPAS.PerVillageName = "";
            ObjPAS.PerHouseNo = lbldtl.Text.Trim().ToUpper();
            ObjPAS.PerPO = "";
            ObjPAS.PerPS = "";
            ObjPAS.PerPinCode = lblpin.Text.ToUpper();
            ObjPAS.PerPhNo = lblAreaCode.Text.Trim() + "-" + lblPhoneNo.Text.Trim();
            ObjPAS.PerMobileNo = lblmob.Text.Trim();
            if (lblST.Text == "Yes")
            {
                ObjPAS.pintReserveID = 3;
            }
            else if (lblSC.Text == "Yes")
            {
                ObjPAS.pintReserveID = 2;
            }

            else if (lblOBC.Text == "Yes")
            {
                ObjPAS.pintReserveID = 4;
            }
            else if (lblGeneral.Text == "Yes")
            {
                ObjPAS.pintReserveID = 1;
            }
            else if (lblOther.Text == "Yes")
            {
                ObjPAS.pintReserveID = 5;
            }
            else if (lblWBC.Text == "Yes")
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

            if (lblEWS.Text == "Yes")
            {
                ObjPAS.intOLNSStateID = 1;
            }
            else
            {
                ObjPAS.intOLNSStateID = 0;
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
                ObjPAS.NCCC = true;
            else
            {
                ObjPAS.NCCC = false;
            }

            if (lblPR.Text == "Yes")
            {
                ObjPAS.ScoutPR = true;
            }
            else
            {
                ObjPAS.ScoutPR = false;

            }
            if (lblRP.Text == "Yes")
            {
                ObjPAS.ScoutRP = true;
            }
            else
            {
                ObjPAS.ScoutRP = false;
            }
            if (lblSportsS.Text == "Yes")
            {
                ObjPAS.SportsS = true;
            }
            else
            {
                ObjPAS.SportsS = false;
            }

            if (lblSportsN.Text == "Yes")
                ObjPAS.SportsN = true;
            else
                ObjPAS.SportsN = false;

            if (lblSportsIN.Text == "Yes")
            {
                ObjPAS.SportsIN = true;
            }
            else
            {
                ObjPAS.SportsIN = false;
            }

            //End If
            ObjPAS.BloodGrId = Convert.ToInt32(strBloodGroup.Value.Split('~')[0]);
            ObjPAS.ReligionId = Convert.ToInt32(strReligion.Value.Split('~')[0]);
            ObjPAS.GENDER = Convert.ToInt32(strGender.Value.Split('~')[0]);
            ObjPAS.DOB = lblDob.Text.Trim().ToString();
            ObjPAS.Nationality = strnat.Value.Split('~')[0];
            ObjPAS.MotherTongue = strmt.Value.Split('~')[0];
            ObjPAS.FathersOccup = strFocu.Value.Split('~')[0];
            ObjPAS.MothersOccup = strMocu.Value.Split('~')[0];
            ObjPAS.AnnualIncome = 0;
            ObjPAS.AIncome = strAIncome.Value.Split('~')[0];
            //===================MarkDetails==========
            //if ((ObjPAS.BoardId == 45 & Convert.ToInt32(lblYOE.Text) >= 2014))
            //{
            //    ObjPAS.vch_Grade = lblGrade.Text.Trim();
            //}
            //else
            //{
            ObjPAS.vch_Grade = "0";
            //}
            ObjPAS.aadharNo = hdnAadharNo.Value;
            ObjPAS.aadharSts = hdnAadharNo.Value == "" ? 0 : 1;
            

            if ((ObjPAS.BoardId == 46 && Convert.ToInt32(lblYOE.Text) >= 2010 && Convert.ToInt32(lblYOE.Text) <= 2017) || (ObjPAS.BoardId == 103 && Convert.ToInt32(lblYOE.Text) >= 2012))
            {
                ObjPAS.MarkSL = 0;// Convert.ToInt32(strEng.Value.Split('~')[0]);
                ObjPAS.MarkMath = 0;// Convert.ToInt32(strMath.Value.Split('~')[0]);
                ObjPAS.MarkScience = 0;// Convert.ToInt32(strSc.Value.Split('~')[0]);
                ObjPAS.MarkSocialStudies = 0;// Convert.ToInt32(strSoSci.Value.Split('~')[0]);
                ObjPAS.MaxMark = Convert.ToInt32(10);
                if (string.IsNullOrEmpty(lblTotalMark.Text))
                {
                    ObjPAS.Totalmark = 0;
                }
                else
                {
                    ObjPAS.Totalmark = Convert.ToDouble(lblTotalMark.Text);
                }
            }

            else if (ObjPAS.BoardId == 116 & Convert.ToInt32(lblYOE.Text) >= 2010)
            {
                ObjPAS.MarkSL = 0;// Convert.ToInt32(strEng.Value.Split('~')[0]);
                ObjPAS.MarkMath = 0;// Convert.ToInt32(strMath.Value.Split('~')[0]);
                ObjPAS.MarkScience = 0;// Convert.ToInt32(strSc.Value.Split('~')[0]);
                ObjPAS.MarkSocialStudies = 0;// Convert.ToInt32(strSoSci.Value.Split('~')[0]);
                ObjPAS.Totalmark = Convert.ToDouble(strKGrade.Value.Split('~')[0]);
                ObjPAS.MaxMark = Convert.ToInt32(10);
            }
            else
            {
                ObjPAS.MarkSL = 0;// Convert.ToInt32((!string.IsNullOrEmpty(lblEngMark.Text) ? Convert.ToInt32(lblEngMark.Text) : 0));
                ObjPAS.MarkMath = 0;// Convert.ToInt32((!string.IsNullOrEmpty(lblMathMark.Text) ? Convert.ToInt32(lblMathMark.Text) : 0));
                ObjPAS.MarkScience = 0;// Convert.ToInt32((!string.IsNullOrEmpty(lblScienceMark.Text) ? Convert.ToInt32(lblScienceMark.Text) : 0));
                ObjPAS.MarkSocialStudies = 0;// Convert.ToInt32((!string.IsNullOrEmpty(lblSSMark.Text) ? Convert.ToInt32(lblSSMark.Text) : 0));
                //ObjPAS.Totalmark = Convert.ToDouble(lblTotalMark.Text);
                //ObjPAS.MaxMark = Convert.ToInt32(lblMaxMark.Text);


                if (string.IsNullOrEmpty(lblTotalMark.Text))
                {
                    ObjPAS.Totalmark = 0;
                }
                else
                {
                    ObjPAS.Totalmark = Convert.ToDouble(lblTotalMark.Text);
                }

                if (string.IsNullOrEmpty(lblMaxMark.Text))
                {
                    ObjPAS.MaxMark = 0;
                }
                else
                {
                    ObjPAS.MaxMark = Convert.ToInt32(lblMaxMark.Text);
                }

            }

            //========================================
            if (lblCompartmental.Text == "Yes")
            {
                ObjPAS.Compartmental = true;
            }
            else
            {
                ObjPAS.Compartmental = false;
            }
            ObjPAS.LastInst = lblSchName.Text.Trim();
            ObjPAS.LastInstLoc = lblschloc.Text.Trim();

            if (strinsdist.Value == "")
            {
                ObjPAS.strLastInstDist = "0";
                ObjPAS.LIDistName = lbllinsdist.Text;
            }
            else
            {
                ObjPAS.strLastInstDist = strinsdist.Value.Split('~')[0];
                ObjPAS.LIDistName = "";
            }

            ObjPAS.YearOfJoining = Convert.ToInt32(lblYOJ.Text);
            ObjPAS.YearOfLeaving = Convert.ToInt32(lblYOL.Text);
            //==================Data For Compartment Subject=======================
            string strSubject = "";
            string strFMark = "";
            string strPMark = "";
            if (!string.IsNullOrEmpty(this.txtCompSubject1.Text))
            {
                strSubject += this.txtCompSubject1.Text + "~";
                strFMark += this.txtCompFMark1.Text + "~";
                strPMark += this.txtCompPMark1.Text + "~";
            }
            if (!string.IsNullOrEmpty(this.txtCompSubject2.Text))
            {
                strSubject += this.txtCompSubject2.Text + "~";
                strFMark += this.txtCompFMark2.Text + "~";
                strPMark += this.txtCompPMark2.Text + "~";
            }
            if (!string.IsNullOrEmpty(this.txtCompSubject3.Text))
            {
                strSubject += this.txtCompSubject3.Text + "~";
                strFMark += this.txtCompFMark3.Text + "~";
                strPMark += this.txtCompPMark3.Text + "~";
            }
            if (!string.IsNullOrEmpty(this.txtCompSubject4.Text))
            {
                strSubject += this.txtCompSubject4.Text + "~";
                strFMark += this.txtCompFMark4.Text + "~";
                strPMark += this.txtCompPMark4.Text + "~";
            }
            ObjPAS.strSubject = strSubject;
            ObjPAS.strFMark = strFMark;
            ObjPAS.strPMark = strPMark;
            //=========Counting Total no. of options=====
            string[] strAryOpt = null;
            if (hidCollege.Value.Contains("~"))
            {
                strAryOpt = hidCollege.Value.Split('~');
                intTotOption = strAryOpt.Length;
            }
            else
            {
                intTotOption = 1;
            }

            //============================================
            ObjPAS.strCollegeIDS = hidCollege.Value.Trim() + "~";

            if (ObjPAS.pintReserveID != 1 && ObjPAS.intOLNSStateID == 1)//check for nor geenral and ews
            {
                string str = "EWS(Economically Weaker Section) can only be selected for general category";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }
            if (intTotOption < 10)
            {
                string str = "Please select minimum 10 Option details";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            /*unCommented out by Ritika lath as maximum mark is not autofilled and is hardcoded as 500 for bseb*/
            if ((ObjPAS.BoardId == 109 && Convert.ToInt32(lblYOE.Text) >= 2010 && ObjPAS.MaxMark != 500))
            {
                string str = "Total full mark should be 500 for BSEB Bihar board for year " + lblYOE.Text + "";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            //added by Ritika Lath on 7th July 2020 to check if secured marks in 30% or not
            decimal decPre = 0.00M;
            decPre = (Convert.ToDecimal(ObjPAS.Totalmark) / Convert.ToDecimal(ObjPAS.MaxMark)) * 100.00M;

            if (!((ObjPAS.BoardId == 116 && Convert.ToInt32(lblYOE.Text) >= 2010))) //only for kerala board as they provide grades
            {
                if (decPre < 30.00M)
                {
                    string str = "Your CAF could not be proceeded as you are not fulfilling the Admission Apply Eligibility Criteria./ आपका CAF आगे नहीं बढ़ाया जा सका क्योंकि आप एडमिशन अप्लाई की पात्रता मानदंड को पूरा नहीं कर रहे हैं";
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                    return;
                }




                //added By Ritika Lath on 29th June 2021 to allow 10/10 for CBSE students between 2012 to 2017
                if ((decPre == 100.00M) && (!(ObjPAS.BoardId == 46 && Convert.ToInt32(lblYOE.Text) >= 2010 && Convert.ToInt32(lblYOE.Text) <= 2017)))
                {
                    string str = "Please enter valid secured marks";
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                    return;
                }

                if (decPre > 100.00M)
                {
                    string str = "Please enter valid secured marks";
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                    return;
                }
            }

            if ((ObjPAS.BoardId == 46 && Convert.ToInt32(lblYOE.Text) > 2017 && ObjPAS.MaxMark != 500))
            {
                string str = "Total full mark should be 500 for CBSE New Delhi board for year " + lblYOE.Text + "";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            if ((ObjPAS.BoardId == 46 && Convert.ToInt32(lblYOE.Text) >= 2010 && Convert.ToInt32(lblYOE.Text) <= 2017 && ObjPAS.MaxMark != 10))
            {
                string str = "Total full mark should be 10 for CBSE New Delhi board for year " + lblYOE.Text + "";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            //ICSE Board  changes made by Ritika Lath on 29th June 2021
            if ((ObjPAS.BoardId == 47 && ObjPAS.MaxMark > 1000))
            {
                string str = "Total full mark should be less than equal to 1000 for ICSE New Delhi board for year " + lblYOE.Text + "";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            //string strMsg = string.Empty; 
            if (ObjPAS.BoardId == 131)
            {
                if (lblOtherBoard.Text.Trim().ToString() == "")
                {
                    string str = "Board name cannot be left blank";
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                    return;
                }
            }
            //if (ddlBoard.SelectedValue == "131")
            //{

            //    if (txtOtherBoard.Text.Trim() == "")
            //    {
            //        strMsg = "Board name cannot be left blank";
            //        ScriptManager.RegisterStartupScript(this, this.GetType(), "K1", "alert('" + strMsg + "');", true);
            //        return;
            //    }

            //}

            //if ((ObjPAS.BoardId == 47 && Convert.ToInt32(lblYOE.Text) <= 2017 && ObjPAS.MaxMark != 10))
            //{
            //    string str = "Maximum mark should be 10 for ICSE New Delhi board for year " + lblYOE.Text + "";
            //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
            //    return;
            //}

            if (ObjPAS.MaxMark < ObjPAS.Totalmark)
            {
                string str = "Total full mark can not be less than Total Marks Obtained";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            if ((ObjPAS.MaxMark == ObjPAS.Totalmark) && (!(ObjPAS.BoardId == 46 && Convert.ToInt32(lblYOE.Text) >= 2010 && Convert.ToInt32(lblYOE.Text) <= 2017)))
            {
                string str = "Total full mark can not be equal to Total Marks Obtained";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }
            string EmailRetVal = Util.checkSpecialChar1stPalce(ObjPAS.EmailId);
            if(EmailRetVal=="Fail")
            {
                string str = "Special character does not allow in 1st place of e-Mail";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            string strRegex = @"^([a-zA-Z0-9_\.]+)@((\[[0-9]{1,3}" +
                    @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                       @".)+))([a-zA-Z]{2,4})(\]?)$";

            Regex re = new Regex(strRegex);
            if (!re.IsMatch(ObjPAS.EmailId))
            {
                string str = "Please write a valid e-Mail ID";
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                return;
            }

            string strCnames = "";
            string s = hidCollege.Value.Trim() + "~";
            string[] words = s.Split(new char[] { '~' });
            foreach (string value in words)
            {
                strCnames += "0" + "~";
            }

            ObjPAS.strStreamIDS = hidStream.Value.Trim() + "~";
            //ObjPAS.strStreamIDS = strCnames;

            // ObjPAS.strCompulsory = hidComplusory.Value.Trim() + "~";
            ObjPAS.strCompulsory = hidComplusory1.Value.Trim() + "~";
            ObjPAS.strCompulsory2 = hidComplusory2.Value.Trim() + "~";
            ObjPAS.strCompulsory3 = hidComplusory3.Value.Trim() + "~";

            string photoname = ViewState["PhotoSrc"].ToString();
            imgPhoto.ImageUrl = hidPhoto.Value; //Attaching Photo to Image Field
            string[] parts = photoname.Split('/');

            string finalPicName = parts.Length > 5 ? parts[5] : string.Empty;

            ObjPAS.photoDB = finalPicName;
            ObjPAS.strELE1 = hidElective1.Value + "~";
            ObjPAS.strELE2 = hidElective2.Value + "~";
            ObjPAS.strELE3 = hidElective3.Value + "~";
            ObjPAS.strFELE1 = hidFElelective1.Value + "~";
            hidFElelective2.Value = "0";
            ObjPAS.strFELE2 = hidFElelective2.Value + "~";
            hidFElelective3.Value = "0";
            ObjPAS.strFELE3 = hidFElelective3.Value + "~";
            hidHostel.Value = "0";
            ObjPAS.strLiveOpt = hidHostel.Value.Trim() + "~";
            //ObjPAS.ImcType = hidImc.Value.Trim() + "~";
            //'For APPcode
            Random generator = new Random();
            int randomValue = 0;
            randomValue = generator.Next(100, 999);
            ObjPAS.strPassword = lblRoll.Text.Trim() + randomValue;
            strPass = lblRoll.Text.Trim() + randomValue;
            ObjPAS.pintTotOpt = intTotOption;
            //Total Option Set Here
            if (!string.IsNullOrEmpty(hidPhoto.Value))
            {
                ObjPAS.bitImageStatus = true;
            }

            if (strinsdist.Value == "")
            {
                ObjPAS.strLastInstDist = "0";
                ObjPAS.LIDistName = lbllinsdist.Text;
            }
            else
            {
                ObjPAS.strLastInstDist = strinsdist.Value.Split('~')[0];
                ObjPAS.LIDistName = "";
            }

            //------------------KGBAC-----------------------------------
            //if (lblKGBAC1.Text == "" || lblKGBAC1.Text == null)
            //{
            //    string str = "Please choose Have you passed 10th exam as a student of Kasturba Gandhi Balika Vidyalaya?";
            //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
            //    return;
            //}
            if (lblKGBAC1.Text == "Yes")
            {
                if (strBoard.Value != "109~1 - BSEB, Bihar" || strGender.Value != "2~FEMALE")
                {
                    string str = "For Choosing Yes, you must be a female student and should have passed Class Tenth examination from Bihar School Examination Board (BSEB), while residing at Kasturba Gandhi Balika Chhatravas.";
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
                    return;
                }
                
            }

            if (lblKGBAC1.Text == "Yes")
            {
                ObjPAS.KGBACSts = 1;
            }
            else
            {
                ObjPAS.KGBACSts = 0;

            }

           
                strResult = ccobjcaf.AddCAFData(ObjPAS);
            

            intRetVal = Convert.ToInt32(strResult.Substring(0, 1));

            if (strResult.Contains("J"))
            {
                string[] strApp = strResult.Trim().Split('J');
                strImageName = strResult.Remove(0, 1);
                intApplID = Convert.ToInt32(strApp[1]);
            }


            if (!string.IsNullOrEmpty(hidPhoto.Value))
            {
               

                imgPhoto.ImageUrl = hidPhoto.Value; //Attaching Photo to Image Field


                string pth = ConfigurationManager.AppSettings["StrImgPath"].ToString();

                pth = pth + HttpContext.Current.Items["Photo"];
 

                //reSize.Save(fs, ImageFormat.Jpeg);
                //BinaryReader br = new BinaryReader(fs);
                //byte[] newbytes = br.ReadBytes((Int32)fs.Length);//Converting filestream to bytestream
                ///*Code added by Kisan*/
                ////Image Saving Logic
                ////assign bytestream coming from first page


                //File.WriteAllBytes(pth, newbytes); //saves the cropped image in server
                ////File.WriteAllBytes(pth, bytes); //saves the orginal image in server

            }
            HttpContext.Current.Items["Photo"] = imgPhoto.ImageUrl;
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmCAFJr");
            //Server.Transfer("Error.aspx", False)
        }
        finally
        {

            ObjPAS = null;
        }

        if (strResult == "10")
        {
            string str = "Aadhaar number already exists!";
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
        }
        else if (intRetVal == 1)
        {
            try
            {

                //strDynamicPwd = RandomNumber();

                ////Push OTP DATA 
                //CAFEntity objCAF = new CAFEntity();
                //objCAF.Action = "I";
                //objCAF.strPassword = strDynamicPwd;
                //objCAF.vch_CorMobileNo = lblmob.Text.Trim();
                //objCAF.UID = strResult.Substring(1);

                //using (SAMSOLBusinessClient client = new SAMSOLBusinessClient())
                //{
                //  strResult = client.SaveOTP(objCAF);

                //}
                //Send_SMS_EMAIL(strDynamicPwd);

                //Session["Uid"] = strImageName;
                SqlConnection.ClearAllPools();
                HttpContext.Current.Items.Clear();

                HttpContext.Current.Items["MobileNo"] = lblmob.Text.Trim();
                HttpContext.Current.Items["Email"] = lblemail.Text.Trim();
               // Response.Redirect(GetUrl(strImageName), false);

            }
            catch (Exception ex)
            {
                IsException = true;
                Util.LogError(ex, "ConfirmCAFJr");
            }
            finally
            {
                //HttpContext.Current.Response.End();
               Context.ApplicationInstance.CompleteRequest();
            }

            if (!IsException)
            {
                Response.Redirect(GetUrl(strImageName), false);
            }
        }
        else if (intRetVal == 3)
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
        //added by Ritika lath to check invalid gender colleges and option count on 12th July 2020
        else if (intRetVal == 6)
        {
            string strMsg = "You have entered invalid option details. Please rectify.";
            ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "alert('" + strMsg + "')", true);
        }
        //added by Ritika lath to check colleges with strength 0
        else if (intRetVal == 7)
        {
            string wrongpotiono = string.Empty;
            string[] addresult = strResult.Split('~');
            if (addresult != null)
            {
                wrongpotiono = addresult[1];
            }
            string strMsg = "Option for - " + wrongpotiono + " has strength 0. Please rectify.";
            ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "alert('" + strMsg + "')", true);
        }
        else if (intRetVal == 9)
        {
            string str = "Email Id already existing!!";
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
        }
        else if (intRetVal == 8)
        {
            string str = "Your CAF could not be proceeded as you are not fulfilling the Admission Apply Eligibility Criteria./ आपका CAF आगे नहीं बढ़ाया जा सका क्योंकि आप एडमिशन अप्लाई की पात्रता मानदंड को पूरा नहीं कर रहे हैं";
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
        }
        else if (intRetVal == 4)
        {
            string str = "Some error occured. Please try after sometime.";
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + str + "');", true);
        }
        
    }

    public void Send_SMS_EMAIL(string strDynamicPwd)
    {

        try
        {
            if (lblemail.Text.Trim() != "")
            {
                string mailBody =
                  "Dear " + lblApplName.Text.ToString().Trim() + ",\n" +
                  "You have received this message in response to your request for one-time password for new Application." + "\n" +
                  "OTP for New OFSS CAF applied is " + strDynamicPwd + ", Please use this OTP within 2 Minutes and Proceed for the Payment. " + "\n" +
                  "?? OFSS CAF ?? ??? OTP " + strDynamicPwd + " ???? ??, ?????  2 ???? ?? ???? ?? ????? ????? ???? ?? ???? ??? ?????? ?? ??? ??? ?????";
                string subJect = "OTP for New Application";

                objMail.sendMail(subJect, mailBody, lblemail.Text.Trim());
            }

            if (lblmob.Text.Trim() != "")
            {

                string msgBody = "OTP for New OFSS CAF applied is " + strDynamicPwd + ", Please use this OTP within 2 Minutes and Proceed for the Payment";
                string response = objMsg.sendOTPMSG(lblmob.Text.Trim(), msgBody);
            }
        }
        catch (Exception ex)
        {
            Util.LogError(ex, "ConfirmCAFJr");
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
        // string strURL = "ConfirmationJr.aspx?AppId=" + AppId + "&Mob=" + lblmob.Text.Trim() + "&Email=" + lblemail.Text.Trim() + "&Nm=" + lblApplName.Text.Trim();
        string strURL = "ConfirmationJr.aspx?AppId=" + AppId;
        return strURL;
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
    protected void btnBack_Click(object sender, EventArgs e)
    {
        sendTransferData();
    }

}