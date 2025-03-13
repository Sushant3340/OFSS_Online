using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CommonModels;
using System.Configuration;

public partial class includes_RegStudentHeader : System.Web.UI.UserControl
{
    CommonClass ccobj = new CommonClass();
    public static string strfullname;
    public static string strcolgname;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            if (Session["UserId"] != null)
            {
                lblStuName.Text = Session["StudNm"].ToString();
                FillCAF();
            }
            else
                Response.Redirect("StudentSessionRedirect.aspx");
        }
    }
    protected void FillCAF()
    {


        try
        {

            if (Session["stype"] != null)
            {
               
                    if (Session["stype"].ToString() == "1")
                    {
                        CAFEntity obj = new CAFEntity();
                        List<CAFEntity> list = new List<CAFEntity>();
                        obj.Action = "V";
                        obj.vch_UniqueRefNo = Session["StudID"].ToString();
                        list = ccobj.FillCAF(obj);
                        if (list != null && list.Count >= 1)
                        {
                            hdnImage.Value = list[0].vchImageName;
                            if (!string.IsNullOrEmpty(Convert.ToString(list[0].CorBlockId)))
                            {
                                hdnBlockID.Value = list[0].CorBlockId.ToString();
                            }
                        }
                    }
                    else
                    {
                        CAFEntity_Deg obj = new CAFEntity_Deg();
                        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
                        obj.Action = "R";
                        obj.strId = Session["StudID"].ToString();// Session["Uid"].ToString();
                        list = ccobj.fillPrintOption(obj);
                        if (list != null && list.Count >= 1)
                        {
                            hdnImage.Value = list[0].vchImageName;
                            if (!string.IsNullOrEmpty(Convert.ToString(list[0].CorBlockId)))
                            {
                                hdnBlockID.Value = list[0].CorBlockId.ToString();
                            }
                        }
                    }
                



                //===================================================== Bind Photo
                string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();
                if (!string.IsNullOrEmpty(hdnImage.Value))
                {
                    //Directory.GetFiles(pth)
                    hdnImgAppl.Value = hdnImage.Value;
                    if (Session["stype"].ToString() == "1")
                    {
                        ImgAppl.ImageUrl = "~/DownloadImage.ashx?clsid=1&id=" + hdnBlockID.Value + "/" + hdnImage.Value;
                        //pthview + "SAMS\\ONLINE_CAF\\APPL_IMAGES" + "/" + hdnBlockID.Value + "/" + hdnImage.Value;
                    }
                    else
                    {
                        ImgAppl.ImageUrl = "~/DownloadImage.ashx?clsid=2&id=" + hdnBlockID.Value + "/" + hdnImage.Value;
                    }
                }
            }
        }
        catch (Exception ex)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "msg", "alert('" + ex.Message + "');", true);
        }
        finally
        { }
    }
}
