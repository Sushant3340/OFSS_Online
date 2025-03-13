using System;
using System.Configuration;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;

public partial class CAF_UploadPopUpDeg : System.Web.UI.Page
{
    public string strFilename = "";
    public string Status = "NO";
    protected void upload_Click(object sender, System.EventArgs e)
    {
        lblMsg.Visible = false;
        if (!string.IsNullOrEmpty(imgUpload.PostedFile.FileName))
        {
            if (imgUpload.PostedFile.ContentLength < 2097152 & imgUpload.PostedFile.ContentLength > 0)
            {
                Random generator = new Random();
                int randomValue = 0;
                randomValue = generator.Next(10, 1000000);
                Status = "YES";
                strFilename = randomValue.ToString().Trim().Replace(".", "").Replace(" ", "_") + ".jpeg";
                Size newSize = new Size(130, 130);
                Bitmap original = new Bitmap(imgUpload.PostedFile.InputStream);
                Bitmap reSize = new Bitmap(original, newSize);
                Graphics thumb = Graphics.FromImage(reSize);
                thumb.CompositingQuality = CompositingQuality.HighQuality;
                thumb.SmoothingMode = SmoothingMode.HighQuality;
                thumb.InterpolationMode = InterpolationMode.HighQualityBicubic;
                Rectangle rect = new Rectangle(0, 0, 130, 130);
                thumb.DrawImage(original, rect);
                string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
                string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();
                //======to save in dhe site========================//

                reSize.Save(pth + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES/" + strFilename, ImageFormat.Jpeg);


                if (File.Exists(pth + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES" + "/" + strFilename))
                {
                    imgPreview.Visible = true;
                    imgPreview.ImageUrl = "../DownloadImage.ashx?clsid=2&id=" + strFilename ;
                    hidImgPth.Value = "../DownloadImage.ashx?clsid=2&id=" + strFilename ;

                 //imgPreview.ImageUrl = pthview + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES" + "/" + strFilename + "?date=" + DateTime.Now;
                 //hidImgPth.Value = pthview + "SAMS\\ONLINE_CAF_DEG\\APPL_IMAGES" + "/" + strFilename + "?date=" + DateTime.Now;


                }
                reSize.Dispose();



            }
            else
            {
                lblMsg.Visible = true;
                lblMsg.Text = "Please upload a valid image having size less than 2MB";
            }
        }
    }
    protected void btnCancel_Click(object sender, System.EventArgs e)
    {
        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        //=======to Delete in dhe website
        if (!string.IsNullOrEmpty(strFilename))
        {
            if (File.Exists(pth + "SAMS\\ONLINE_CAF_Degree\\APPL_IMAGES" + "/" + strFilename))
            {
                File.Delete(pth + "SAMS\\ONLINE_CAF_Degree\\APPL_IMAGES" + "/" + strFilename);
            }
        }
        else
        {
            imgPreview.ImageUrl = "~/images/noimage.JPG";
        }
        Response.Write("<script>javascript:window.close();</script>");
    }
}