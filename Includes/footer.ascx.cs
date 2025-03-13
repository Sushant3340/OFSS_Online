using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class includes_footer : System.Web.UI.UserControl
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    #region "Export to Excel"
    protected void btnExcel_Click(object sender, System.EventArgs e)
    {
        string html = hdnExcelValue.Value;
        GridviewExportUtil.ExportToExcel(ref html, hdnExcelFile.Value);
    }
    #endregion
}