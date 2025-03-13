using System;
using System.Web;

/// <summary>
/// Summary description for GridviewExportUtil
/// </summary>
public class GridviewExportUtil
{
    public static void ExportToExcel(ref string html, string fileName)
    {
        html = html.Replace("&gt;", ">");
        html = html.Replace("&lt;", "<");
        HttpContext.Current.Response.ClearContent();
        HttpContext.Current.Response.AddHeader("content-disposition", "attachment;filename=" + fileName + "_" + DateTime.Now.ToString("Mddyyyy_hhmmsstt") + ".xls");
        HttpContext.Current.Response.ContentType = "application/xls";

        string style = @"<style> TD { mso-number-format:\@; } </style>";
        HttpContext.Current.Response.Write(style);
        HttpContext.Current.Response.Write(html);
        HttpContext.Current.Response.End();
    }
}