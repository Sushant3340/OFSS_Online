using CommonModels;
using System;
using System.Collections.Generic;

public partial class ONLINE_CAF_QuotaSuccess : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    protected void Page_Load(object sender, EventArgs e)
    {
        CheckUser(Request.QueryString["AppId1"]);
    }


    protected void CheckUser(string strRefID)
    {

        List<CAFEntity> lstCafEntity = new List<CAFEntity>();
        CAFEntity obj = new CAFEntity();
        try
        {
            
                obj.Action = "q";
                obj.UID = strRefID;
                lstCafEntity = ccobj.fillconfirmJuniorStream(obj);
            

            if (lstCafEntity != null && lstCafEntity.Count > 0 && lstCafEntity[0].IntID > 0)
            {

                lblSuccess.Text = "Your CAF - " + strRefID + " has been submitted Successfully. Please continue with the Quota Admission Process.";
                divSuccess.Visible = true;
            }
            else
            {
                lblFailure.Text = "There was an issue with the submission. Please try again after sometime.";
                divFailure.Visible = true;
            }


        }
        catch (Exception ex)
        {
            Util.LogError(ex, "misuser");
        }
        finally
        {
            lstCafEntity.Clear();
        }
    }
}