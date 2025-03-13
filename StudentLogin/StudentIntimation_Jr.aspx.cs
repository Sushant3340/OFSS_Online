using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CommonModels;
using System.Configuration;
using System.IO;

public partial class StudentLogin_StudentIntimation_Jr : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    #region "variable declaration"
    string UniqueRefNo, imageName;
    int intcount, OptionNo, Applicantid, Blockid;
    int intYear = 2018;
    int YOP;
    #endregion
    #region "page Load"
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            if (Session["StudID"] != null)
            {
                List<CAFEntity> listDetails = new List<CAFEntity>();
               
                listDetails = fillDateline();
                if (listDetails.Count > 0)
                {

                    DateTime dtmToDate = listDetails[0].ToDate;
                    DateTime dtmFromDate = listDetails[0].FromDate;
                    hdnSelectionType.Value = listDetails[0].Cid.ToString();
                    int FromDate = DateTime.Compare(DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59), dtmFromDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                    int ToDate = DateTime.Compare(dtmToDate.Date.AddHours(23).AddMinutes(59).AddSeconds(59), DateTime.Now.Date.AddHours(23).AddMinutes(59).AddSeconds(59));
                    if (ToDate >= 0 && FromDate >= 0 )
                    {
                        divDateLine.Visible = false;
                        UniqueRefNo = Session["StudID"].ToString();
                        Intemation(UniqueRefNo);
                    }
                    else
                    {
                        if (FromDate < 0)
                        {
                            litMessage.Text = "Dateline for Intimation download is not started yet...";
                        }
                        if (ToDate < 0)
                        {
                            litMessage.Text = "Dateline for Intimation download is completed...";
                        }
                        divDateLine.Visible = true;
                        NotSelected.Visible = false;
                        Selected.Visible = false;
                        divAdmitted.Visible = false;
                        Rejected.Visible = false;
                    }
                   

                }

            }
            else
            {
                Response.Redirect("StudentLogout_Jun.aspx");
            }

        }
    }
    #endregion
    #region "get date line
    protected List<CAFEntity> fillDateline()
    {
        DateTime lastDt = DateTime.Today;
        List<CAFEntity> list = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();

        try
        {
            obj.Action = "I";
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

    #region FillDashboard
    protected void Intemation(string strMRIndexNo)
    {
        CAFEntity obdeg = new CAFEntity();

        try
        {

           
                obdeg.Action = "D";
                obdeg.vch_UniqueRefNo = strMRIndexNo;
                obdeg.vchStatus = "NO";
                List<CAFEntity> ViewResult = new List<CAFEntity>();
                ViewResult = ccobj.FillStudentIntimationDetails_Jr(obdeg);
                //dt = ConvertToDataTable(ViewResult);
                //intcount = dt.Rows.Count;

                if (ViewResult.Count > 0)
                {
                    if (ViewResult[0].ApplicationStatus == 0 && ViewResult[0].IntID == 0)
                    {
                        NotSelected.Visible = true;
                        Selected.Visible = false;
                        divAdmitted.Visible = false;
                        Rejected.Visible = false;
                        getDateline();
                    }
                    else
                    {

                        Selected.Visible = true;

                        NotSelected.Visible = false;

                        imgBarcode.ImageUrl = "BarcodeCS.ashx?ID=" + strMRIndexNo.Trim();
                        lblName.Text = ViewResult[0].vch_ApplicantName;
                        lblFather.Text = ViewResult[0].vch_FatherName;
                        lblMother.Text = ViewResult[0].vch_MotherName;
                        lblDob.Text = ViewResult[0].DOB;

                        lblMob.Text = ViewResult[0].vch_CorMobileNo;
                        lblcategory.Text = ViewResult[0].Category;
                        lblGender.Text = ViewResult[0].Sex;
                        lbladrss.Text = ViewResult[0].vch_CorHouseNo;
                        lblBarcode.Text = ViewResult[0].vch_UniqueRefNo;
                        UniqueRefNo = ViewResult[0].vch_UniqueRefNo;
                        Blockid = Convert.ToInt32(ViewResult[0].int_blockid);
                        date.Text = DateTime.Now.ToString("dd-MMM-yyyy hh:mm tt");
                        YOP = ViewResult[0].int_YearOfPassing;

                        if (ViewResult[0].ID == 2)
                        {
                            scienceStream.Visible = true;
                        }
                        else
                        {
                            scienceStream.Visible = false;
                        }
                        if (ViewResult[0].CollStatus == 0)
                        {
                            trPeyment.Visible = true;
                        }
                        else
                        {
                            trPeyment.Visible = false;
                        }


                        if (ViewResult[0].TOT == 3)
                        {
                            Rejected.Visible = true;
                            Selected.Visible = false;
                            NotSelected.Visible = false;
                            divAdmitted.Visible = false;
                        }
                        else if (ViewResult[0].TOT == 2 || ViewResult[0].TOT == 5 || ViewResult[0].TOT == 7)
                        {
                            Rejected.Visible = false;
                            divAdmitted.Visible = true;
                            Selected.Visible = false;
                            NotSelected.Visible = false;
                            if (ViewResult[0].TOT == 2)
                            {
                                litSelection.Text = "प्रथम चयन सूची (First Selection List)";
                            }
                            else if (ViewResult[0].TOT == 5)
                            {
                                litSelection.Text = "द्वितीय चयन सूची (Second Selection List)";
                            }
                            else if (ViewResult[0].TOT == 7)
                            {
                                litSelection.Text = "तृतीय चयन सूची (Third Selection List)";
                            }
                        }
                        else
                        {
                            Rejected.Visible = false;
                            divAdmitted.Visible = false;
                        }
                        if (ViewResult[0].pYop == 0)
                        {
                            spanfresh.Visible = true;
                            spanslideup.Visible = false;
                            FreshSelection.Visible = true;
                            SlideUp.Visible = false;

                            //-----get intimation Content
                            obdeg = new CAFEntity();
                            obdeg.Action = "V";
                            obdeg.AdmissionType = ViewResult[0].Type;
                           // obdeg.vch_UniqueRefNo = strMRIndexNo;
                            obdeg.CategoryId = 1;
                            if (Convert.ToInt32(ViewResult[0].Type) > 1)
                            {
                             
                                obdeg.Cid = 1;
                            }
                            else
                            {
                                obdeg.Cid = 0;
                            }
                            List<CAFEntity> ViewIntimationContent = new List<CAFEntity>();
                            ViewIntimationContent = ccobj.FillStudentIntimationDetails_Jr(obdeg);
                            string strContent = "";
                            for (int i = 0; i < ViewIntimationContent.Count; i++)
                            {
                                strContent = strContent + ViewIntimationContent[i].ReasonName;
                            }
                            litFreshApply.Text = strContent;
                            litFreshApply.Text = litFreshApply.Text.Replace("#barcode#", UniqueRefNo);
                            litFreshApply.Text = litFreshApply.Text.Replace("#college#", ViewResult[0].vch_CollegeName);
                            litFreshApply.Text = litFreshApply.Text.Replace("#stream#", ViewResult[0].vch_StreamName);

                        }
                        else
                        {
                            spanfresh.Visible = false;
                            spanslideup.Visible = true;
                            FreshSelection.Visible = false;
                            SlideUp.Visible = true;

                            //-----get intimation Content for slide up students
                            obdeg = new CAFEntity();
                            obdeg.Action = "V";
                            obdeg.AdmissionType = ViewResult[0].Type;
                            obdeg.CategoryId = 1;
                            if (Convert.ToInt32(ViewResult[0].Type) > 1)
                            {
                                obdeg.Cid = 2;
                            }
                            else
                            {
                                obdeg.Cid = 0;
                            }
                            List<CAFEntity> ViewIntimationContent = new List<CAFEntity>();
                            ViewIntimationContent = ccobj.FillStudentIntimationDetails_Jr(obdeg);
                            string strContent = "";
                            for (int i = 0; i < ViewIntimationContent.Count; i++)
                            {
                                strContent = strContent + ViewIntimationContent[i].ReasonName;
                            }

                            litSlideUp.Text = strContent;
                            litSlideUp.Text = litSlideUp.Text.Replace("#barcode#", UniqueRefNo);
                            litSlideUp.Text = litSlideUp.Text.Replace("#college#", ViewResult[0].vch_CollegeName);
                            litSlideUp.Text = litSlideUp.Text.Replace("#stream#", ViewResult[0].vch_StreamName);

                        }


                        imageName = ViewResult[0].vchImageName;
                        if (imageName == "")
                        {
                            imgPhoto.ImageUrl = "~/img/noimage.JPG";
                        }
                        else
                        {
                            string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();
                            if (File.Exists((GetPhotoDetails() + "\\" + ViewResult[0].int_YearOfPassing + "\\" + Blockid + "\\" + UniqueRefNo + ".jpg")))
                            {

                                imgPhoto.ImageUrl = "~/DownloadImage.ashx?clsid=1&id=" + Blockid + "/" + imageName;
                            }
                            else
                            {
                                imgPhoto.ImageUrl = "~/img/noimage.JPG";
                            }
                        }
                    }
                }
                else
                {
                    Selected.Visible = false;
                    NotSelected.Visible = true;
                    getDateline();
                }
            


        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "alert", "alert('" + ex.Message.ToString().Replace("'", "") + "');", true);
        }
    }
    #endregion

    public string GetPhotoDetails()
    {
        string strResult = "";
        string path = ConfigurationManager.AppSettings["StrPath"].ToString();
        strResult = (path + "SAMS\\ONLINE_CAF\\APPL_IMAGES");
        return strResult;
    }

    protected void getDateline()
    {
        CAFEntity obdeg = new CAFEntity();
        obdeg.Action = "V";
        obdeg.AdmissionType = Convert.ToInt32(hdnSelectionType.Value);
        obdeg.CategoryId = 2;
        obdeg.Cid = 0;

        List<CAFEntity> ViewIntimationContent = new List<CAFEntity>();
        
            ViewIntimationContent = ccobj.FillStudentIntimationDetails_Jr(obdeg);
        
        string strContent = "";
        for (int i = 0; i < ViewIntimationContent.Count; i++)
        {
            strContent = strContent + ViewIntimationContent[i].ReasonName;
        }
        litNotSelected.Text = strContent;

    }
}