<%@ Application Language="C#" %>
<%@ Import Namespace="System.Collections" %>
<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="System.IO" %>

<script RunAt="server">
    public void LogFile(string sExceptionName, string sEventName, string sControlName, string pageName, int nErrorLineNo)
    {

        string filename = "OL_Log_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
        //string filepath = Server.MapPath("~/Errorlogfiles/" + filename);
        string filepath = ConfigurationManager.AppSettings["StrPath"].ToString() + "SAMS/Errorlogfiles/" + filename;
        if (File.Exists(filepath))
        {
            using (StreamWriter stwriter = new StreamWriter(filepath, true))
            {
                stwriter.WriteLine("-------------------START-------------" + DateTime.Now);
                stwriter.WriteLine("Page :" + pageName);
                stwriter.WriteLine("Event :" + sEventName);
                stwriter.WriteLine("Control :" + sControlName);
                stwriter.WriteLine("Error Line No. :" + nErrorLineNo.ToString());
                stwriter.WriteLine(sExceptionName);
                stwriter.WriteLine("-------------------END-------------" + DateTime.Now);
            }
        }
        else
        {
            StreamWriter stwriter = File.CreateText(filepath);
            stwriter.WriteLine("-------------------START-------------" + DateTime.Now);
            stwriter.WriteLine("Page :" + pageName);
            stwriter.WriteLine("Event :" + sEventName);
            stwriter.WriteLine("Control :" + sControlName);
            stwriter.WriteLine("Error Line No. :" + nErrorLineNo.ToString());
            stwriter.WriteLine(sExceptionName);
            stwriter.WriteLine("-------------------END-------------" + DateTime.Now);
            stwriter.Close();
        }
        //Code to maintain log of excetions thrown by WCF Service


    }
    void Application_Start(object sender, EventArgs e)
    {
        // Code that runs on application startup
        //BundleConfig.RegisterBundle(BundleTable.Bundles);
    }

    void Application_End(object sender, EventArgs e)
    {
        //  Code that runs on application shutdown
        string StrBrowser = Request.Browser.Browser;
        if (StrBrowser == "Chrome")
        {
            if (Response.Cookies.Count > 0)
            {
                foreach (string s in Response.Cookies.AllKeys)
                {
                    Response.Cookies[s].Path = "/OFSS_Online/";
                    Response.Cookies[s].Expires = DateTime.Now.AddDays(1);
                    Response.Cookies[s].Domain = "online.ofssbihar.org";

                }
            }
        }
    }

    void Application_Error(object sender, EventArgs e)
    {
        ////Code that runs when an unhandled error occurs
        //Exception exe = HttpContext.Current.Server.GetLastError().GetBaseException();
        //HttpContext.Current.Server.ClearError();
        //string strErrMsg = exe.Message;
        //string pageName = Path.GetFileName(Request.Path);
        ////call LogFile method and pass argument as Exception message, event name, control name, error line number, current form name
        //// Get stack trace for the exception with source file information
        //var lineNumber = 0;
        //const string lineSearch = ":line ";
        //var index = exe.StackTrace.LastIndexOf(lineSearch);
        //if (index != -1)
        //{
        //    var lineNumberText = exe.StackTrace.Substring(index + lineSearch.Length, lineSearch.Length);
        //    if (int.TryParse(lineNumberText, out lineNumber))
        //    {
        //    }
        //}


        //LogFile(strErrMsg, e.ToString(), sender.ToString(), pageName, lineNumber);


        //Exception ex = HttpContext.Current.Server.GetLastError();
        //if (ex.Message == "URL_TMPR")
        //{
        //    HttpContext.Current.Response.Redirect("~/ErrorPage.aspx"); // my error page
        //}

    }

    void Session_Start(object sender, EventArgs e)
    {
        // Code that runs when a new session is started

    }

    void Session_End(object sender, EventArgs e)
    {
        // Code that runs when a session ends. 
        // Note: The Session_End event is raised only when the sessionstate mode
        // is set to InProc in the Web.config file. If session mode is set to StateServer 
        // or SQLServer, the event is not raised.

    }
    protected void Application_BeginRequest(object sender, EventArgs e)
    {
        string strUrl = Request.RawUrl.ToLower();
        strUrl = HttpUtility.UrlDecode(strUrl);
        string strsplch = "`,!,#,$,^,*,[,],{,},|,',;,>,<,sp_help,drop,insert,truncate,T_,M_,sysobject,where";

        int inti = 0;
        string[] arrspl = strsplch.Split(',');
        for (inti = 0; inti < arrspl.Length; inti++)
        {
            if (strUrl.Contains(arrspl[inti]))
            {
                HttpContext.Current.Response.Redirect("~/ErrorPage.aspx", true);
            }

        }


        //HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");

        //if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
        //{
        //These headers are handling the "pre-flight" OPTIONS call sent by the browser
        //HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST");
        //HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
        //HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
        //HttpContext.Current.Response.End();
        //}
    }
    protected void Application_AuthenticateRequest(object sender, EventArgs e)
    {
        //I take the url referer host. (manipulating the query string this value is null or your local address)
        string strRefererHost = Request.UrlReferrer == null ? string.Empty : Request.UrlReferrer.Host;

        // This is the host name the application 
        string strUrlHost = Request.Url.Host;

        // I read the query string parameters
        string strQSPars = Request.Url.Query ?? string.Empty;
        string strUrl = Request.RawUrl.ToLower();
        if (strUrl.Contains("showpassword.aspx") == true || strUrl.Contains("cafdegspotclg.aspx") == true || strUrl.Contains("jrcafformspotclg.aspx") == true ||strUrl.Contains("jrcafformspot.aspx") == true || strUrl.Contains("paymentconfirmjr.aspx") == true || strUrl.Contains("jrcafform.aspx") || strUrl.Contains("feespayment_jr.aspx") || strUrl.Contains("sbireturndetails.aspx"))
        {
            // nothing to dop
        }
        else
        {
            if (strRefererHost != strUrlHost && strQSPars != string.Empty)
            {

                Response.Redirect("~/ErrorPage.aspx"); // my error page         

            }
        }
    }
    protected void Application_PreSendRequestHeaders(Object sender, EventArgs e)
    {
        HttpContext.Current.Response.Headers.Remove("Server");
        HttpContext.Current.Response.Headers.Set("Server", "*****************");
        HttpContext.Current.Response.Headers.Remove("X-AspNet-Version");
        HttpContext.Current.Response.Headers.Remove("ETag");
        HttpContext.Current.Response.Headers.Remove("X-Powered-By");
        HttpContext.Current.Response.Cache.SetCacheability(HttpCacheability.NoCache);
        HttpContext.Current.Response.Cache.AppendCacheExtension("no-store, must-revalidate");
        HttpContext.Current.Response.AppendHeader("Pragma", "no-cache");
        HttpContext.Current.Response.AppendHeader("Expires", "0");

    }

</script>
