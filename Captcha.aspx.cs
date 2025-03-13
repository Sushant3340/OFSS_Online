#region Page Info
//***************************************************************************************************************
// File Name             : Captcha.aspx
// Description           : This page is to generate captcha code
// Created by            : Anjali Panigrahi
// Created on            : 15/04/2019
// Modification History  :
//                           <CR no.>                      <Date>             <Modified by>                    <Modification Summary>' 
//Function Name          : 
// Procedures Used       :  
// **********************************************************************************************'*****************
#endregion
using System;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;

public partial class Captcha : System.Web.UI.Page
{
    protected void Page_Init(object sender, EventArgs e)
    {
        Page.ViewStateUserKey = Session.SessionID;
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["CaptchaCode"] != null && !string.IsNullOrEmpty(Session["CaptchaCode"].ToString()))
        {
            Bitmap bit1 = new Bitmap(100, 25, System.Drawing.Imaging.PixelFormat.Format64bppArgb);
            Graphics gph1 = Graphics.FromImage(bit1);
            string text = Session["CaptchaCode"].ToString();
            gph1.Clear(Color.White);
            gph1.DrawString(text, new Font("Arial", 15, FontStyle.Bold), new SolidBrush(Color.Red), new PointF(0.4f, 2.4f));
            Response.ContentType = "image/Jpeg";
            bit1.Save(Response.OutputStream, ImageFormat.Jpeg);
            bit1.Dispose();
        }

    }
}