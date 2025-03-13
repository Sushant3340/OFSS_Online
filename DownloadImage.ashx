<%@ WebHandler Language="C#" Class="DownloadImage" %>

using System;
using System.Web;
using System.Configuration;
using System.Drawing;
using System.IO;
using CommonModels;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;


public class DownloadImage : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
             ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls13;
        StudentLogIn objstud = new StudentLogIn();

        string pth = ConfigurationManager.AppSettings["StrImgPath"].ToString();
        //string pthview = ConfigurationManager.AppSettings["StrPathView"].ToString();

        string imageid = context.Request.QueryString["id"];
        string clsid = context.Request.QueryString["clsid"];
        string imagename = Path.GetFileName(imageid);
        //-------------find the applied session of the student
        string strCurrSession = "";
        if (!string.IsNullOrEmpty(Convert.ToString(context.Request.QueryString["YearId"])))
        {
            strCurrSession = context.Request.QueryString["YearId"];
        }
        else
        {
            strCurrSession = "2024";
        }

        try
        {

            if (clsid == "1")
            {
                pth = pth + "OFSS2025/SAMS/ONLINE_CAF/APPL_IMAGES/" + strCurrSession + "/" + imagename;
            }
            else
            {
                pth = pth + "SAMS/ONLINE_CAF_DEG/APPL_IMAGES/";
            }
             using (HttpClient client = new HttpClient())
        {
            byte[] imageData = client.GetByteArrayAsync(pth).Result;  // Use .Result to make it synchronous
            context.Response.ContentType = "image/png";
            context.Response.AddHeader("Content-Length", imageData.Length.ToString());
            context.Response.BinaryWrite(imageData);
            context.Response.End();
        }

            //context.Response.BinaryWrite(System.IO.File.ReadAllBytes(pth));
            //context.Response.AddHeader("Content-Length", new System.IO.FileInfo(pth).Length.ToString());
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }



    //public void ProcessRequest(HttpContext context)
    //{
    //    try
    //    {
    //        string pth = ConfigurationManager.AppSettings["StrPath"] ?? string.Empty;
    //        string imageid = context.Request.QueryString["id"];
    //        string clsid = context.Request.QueryString["clsid"];

    //        // Validate image ID to prevent directory traversal attacks
    //        string safeImageId = Path.GetFileName(imageid);
    //        if (string.IsNullOrEmpty(safeImageId))
    //        {
    //            context.Response.StatusCode = 400; // Bad Request
    //            context.Response.Write("Invalid image ID.");
    //            return;
    //        }

    //        // Find the applied session of the student
    //        string strCurrSession = context.Request.QueryString["YearId"] ?? "2024";

    //        // Set the correct path based on clsid
    //        if (clsid == "1")
    //        {
    //            pth = Path.Combine(pth, "SAMS", "ONLINE_CAF", "APPL_IMAGES", strCurrSession);
    //        }
    //        else
    //        {
    //            pth = Path.Combine(pth, "SAMS", "ONLINE_CAF_DEG", "APPL_IMAGES");
    //        }

    //        // Final image path
    //        string filePath = Path.Combine(pth, imageid);

    //        // Check if the file exists before attempting to read
    //        if (!File.Exists(filePath))
    //        {
    //            context.Response.StatusCode = 404; // Not Found
    //            context.Response.Write("File not found.");
    //            return;
    //        }

    //        // Determine the content type dynamically
    //        string contentType = GetContentType(filePath);
    //        context.Response.ContentType = contentType;

    //        // Write the file to response
    //        byte[] fileBytes = File.ReadAllBytes(filePath);
    //        context.Response.BinaryWrite(fileBytes);
    //        context.Response.AddHeader("Content-Length", fileBytes.Length.ToString());
    //    }
    //    catch (Exception ex)
    //    {
    //        context.Response.StatusCode = 500; // Internal Server Error
    //        context.Response.Write("An error occurred: " + ex.Message);
    //    }
    //}

    //// Function to get MIME type based on file extension
    //private string GetContentType(string filePath)
    //{
    //    string ext = Path.GetExtension(filePath).ToLower();

    //    switch (ext)
    //    {
    //        case ".jpg":
    //        case ".jpeg":
    //            return "image/jpeg";
    //        case ".png":
    //            return "image/png";
    //        case ".gif":
    //            return "image/gif";
    //        case ".bmp":
    //            return "image/bmp";
    //        case ".webp":
    //            return "image/webp";
    //        default:
    //            return "application/octet-stream";
    //    }
    //}


    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
}