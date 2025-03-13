using System;
using System.Web;
using System.Web.Security;

public partial class StudentLogin_StudentLogout_Jun : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Session.Abandon();
        Session.Clear();
        Response.Cache.SetExpires(DateTime.UtcNow.AddMinutes(-1));
        Response.CacheControl = "no-cache";
        Response.Cache.SetCacheability(HttpCacheability.NoCache);
        Response.Cache.SetNoStore();
        Response.Cookies.Clear();
        Request.Cookies.Clear();
        FormsAuthentication.SignOut();
        HttpContext.Current.Response.Cookies.Add(new HttpCookie("ASP.NET_SessionId", ""));
        Response.Redirect("~/StudentLogin/StudentLogin.aspx");
    }
}