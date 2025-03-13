<%@ WebHandler Language="C#" Class="DownloadFeedbackImg" %>

using System;
using System.Web;
using System.Configuration;
using System.Drawing;

public class DownloadFeedbackImg : IHttpHandler {

    public void ProcessRequest(HttpContext context)
    {

        string pth = ConfigurationManager.AppSettings["StrPath"].ToString();
        //string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();

        string imageid = context.Request.QueryString["id"];
      
        try
        {
            pth = pth + "SAMS\\StudentHelpdesk\\Feedback/";
            context.Response.ContentType = "image/jpeg";
            context.Response.BinaryWrite(System.IO.File.ReadAllBytes(pth + imageid));
            context.Response.AddHeader("Content-Length", new System.IO.FileInfo(pth + imageid).Length.ToString());
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
}