#region Page Info
//***************************************************************************************************************
// File Name             : LoginCAFDeg.aspx.cs
// Description           : Login Page to print CAF for Degree 
// Created by            : Debaprasad Samal
// Created on            :  28/03/2018
// Modification History  :
//                           <CR no.>                      <Date>             <Modified by>                    <Modification Summary>' 
//Function Name          : 
// Procedures Used       :  USP_PrintCAF
// **********************************************************************************************'*****************
#endregion
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using OFSS_OL_Entity;
public partial class ONLINE_CAF_LoginCAFDeg : System.Web.UI.Page
{
    CAFDegDal ccobjcafdeg = new CAFDegDal();
    protected void Page_Load(object sender, EventArgs e)
    {
    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        Validate();
    }
    #region OnInit
    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
    }
    #endregion
    #region Validate
    protected void Validate()
    {
        try
        {
            PrintCAF obj = new PrintCAF();
            string outPut = "";
            
                obj.vch_UniqueRefNo = txtUID.Text.Trim();
                obj.vch_RollNo = txtPWD.Text.Trim();
                outPut = ccobjcafdeg.PrintCAFDeg(obj);
                if (outPut == "1")
                {
                    Response.Redirect("CAF.aspx?AppId1=" + txtUID.Text.Trim());

                }
                else
                    if (outPut == "2")
                    {
                        ScriptManager.RegisterStartupScript(this, Page.GetType(), "", "alert('Incorrect RollNo');", true);
                        txtPWD.Focus();
                    }
                    else if (outPut == "3")
                    {
                        ScriptManager.RegisterStartupScript(this, Page.GetType(), "", "alert('Invalid Reference No');", true);
                        txtUID.Focus();
                    }
            
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }
    #endregion
}