using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CommonModels;
using System.Configuration;
using System.IO;

public partial class StudentLogin_StudentIntimation_Deg : System.Web.UI.Page
{
    CommonClass ccobj=new CommonClass ();

    #region "variable declaration"
    string UniqueRefNo, imageName;
    int intcount, OptionNo, Applicantid, Blockid;
    int intYear = 2018;
    #endregion

    #region "page Load"
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            if (Session["StudID"] != null)
            {
                UniqueRefNo = Session["StudID"].ToString();
                Intemation(UniqueRefNo);
            }
            else
            {
                Response.Redirect("StudentLogout_Deg.aspx");
            }

        }
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
                ViewResult = ccobj.FillStudentIntimationDetails_Deg(obdeg);
                //dt = ConvertToDataTable(ViewResult);
                //intcount = dt.Rows.Count;

                if (ViewResult.Count > 0)
                {
                    if (ViewResult[0].ApplicationStatus == 0 && ViewResult[0].IntID == 0)
                    {
                        NotSelected.Visible = true;
                        Selected.Visible = false;
                    }
                    else
                    {

                        Selected.Visible = true;
                        NotSelected.Visible = false;
                        lblBarCodeNo.Text = UniqueRefNo;
                        lblcollege.Text = ViewResult[0].vch_CollegeName;
                        lblsubject.Text = ViewResult[0].vch_SubjectName;
                        lblstream.Text = ViewResult[0].vch_StreamName;
                        lblcollege1.Text = ViewResult[0].vch_CollegeName;
                        lblsubject1.Text = ViewResult[0].vch_SubjectName;
                        lblstream1.Text = ViewResult[0].vch_StreamName;

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
                        //if (ViewResult[0].BoardId != 35)
                        //{
                        //    otherboard.Visible = true;
                        //}
                        //else
                        //{
                        //    otherboard.Visible = false;
                        //}

                        if (ViewResult[0].TOT == 3)
                        {
                            Rejected.Visible = true;
                        }
                        else
                        {
                            Rejected.Visible = false;
                        }
                        if (ViewResult[0].pYop == 0)
                        {
                            FreshSelection.Visible = true;
                            SlideUp.Visible = false;

                        }
                        else
                        {
                            FreshSelection.Visible = false;
                            SlideUp.Visible = true;
                        }
                    

                        if (ViewResult[0].CollStatus == 0)
                        {
                            NB.Visible = true;
                        }
                        else
                        {
                            NB.Visible = false;
                        }

                        //if (ViewResult[0].Type == 1)
                        //{
                        //    lbladmitionStatus.Visible = true;

                        //}
                        //else
                        //{
                        //    lbladmitionStatus.Visible = false;
                        //}
                        //lbloptionchange.Text = ViewResult[0].Description;
                        //grdFinal.DataSource = ViewResult;
                        //grdFinal.DataBind();
                        imageName = ViewResult[0].vchImageName;
                        if (imageName == "")
                        {
                            imgPhoto.ImageUrl = "~/images/noimage.JPG";
                        }
                        else
                        {
                            string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();
                            if (File.Exists((GetPhotoDetails() + "\\" + Blockid + "\\" + UniqueRefNo + ".jpg")))
                            {

                                imgPhoto.ImageUrl = "~/DownloadImage.ashx?clsid=2&id=" + Blockid + "/" + imageName;
                            }
                            else
                            {
                                imgPhoto.ImageUrl = "~/images/noimage.JPG";
                            }
                        }
                    }
                }
                else
                {
                    Selected.Visible = false;
                    NotSelected.Visible = true;
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
        strResult = (path + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES");
        return strResult;
    }
}