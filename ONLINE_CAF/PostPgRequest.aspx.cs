using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ONLINE_CAF_PostPgRequest : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["HtmlResponse"] != null)
        {
            string htmlContent = Session["HtmlResponse"].ToString();
            Response.Write(htmlContent);
            Session["HtmlResponse"] = null; // Clear session after use
        }
    }
}