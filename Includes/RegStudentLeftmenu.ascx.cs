using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class includes_RegStudentLeftmenu : System.Web.UI.UserControl
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            if (!IsPostBack)
            {
                if (Session["stype"].ToString() == "1")
                {
                    aDashBoard.HRef = "~/StudentLogin/StudentDashboardJunior.aspx";
                    aPersonalInfoJun.HRef = "~/StudentLogin/PersonalInfo.aspx";
                    aPersonalInfoJun.Visible = true;
                    lknPersonalJun.Visible = true;

                    aOptionJun.HRef = "~/StudentLogin/OptionPref.aspx";
                    lknOptionJun.Visible = true;
                    aOptionJun.Visible = true;

                    aPreferenceJun.HRef = "~/StudentLogin/PreferSecondSelection_Jr.aspx";
                    aPreferenceJun.Visible = true;
                    lknSlideupJun.Visible = true;


                    aStudentIntimationJun.HRef = "~/StudentLogin/StudentIntimation_Jr.aspx";
                    aStudentIntimationJun.Visible = false;
                    LknIntimationJun.Visible = false;


                    aFeedbackJun.HRef = "~/StudentLogin/Feedback.aspx";
                    lknFeedbackJun.Visible = false;
                    aFeedbackJun.Visible = false;

                    aSpotPrintJun.HRef = "~/StudentLogin/PrintCAF_SpotAdmission_Jun.aspx";
                    aSpotPrintJun.Visible = true;
                    lknSpotPrintJun.Visible = true;


                    aQuotaPrintJun.HRef = "~/StudentLogin/PrintCAF_QuotaAdmission.aspx";
                    aQuotaPrintJun.Visible = false;
                    lknQuotaPrintJun.Visible = false;


                    aPrintJun.HRef = "~/StudentLogin/PrintJrCAF.aspx";
                    aPrintJun.Visible = false;
                    lknPrintJun.Visible = false;

                    if (Session["StudentNewApply"] != null)
                    {
                        if (Convert.ToInt32(Session["StudentNewApply"].ToString()) == 9) //-----------for spot apply students
                        {
                            aPrintJun.Visible = false;
                            lknPrintJun.Visible = false;
                        }
                        else if (Convert.ToInt32(Session["StudentNewApply"].ToString()) == 10) //-------for Quota apply students
                        {
                            aPrintJun.Visible = false;
                            lknPrintJun.Visible = false;

                            aQuotaPrintJun.Visible = true;
                            lknQuotaPrintJun.Visible = true;

                            aPersonalInfoJun.Visible = false;
                            lknPersonalJun.Visible = false;

                            lknOptionJun.Visible = false;
                            aOptionJun.Visible = false;

                        }
                        else   //-----------for previously apply students
                        {
                            aPrintJun.Visible = true;
                            lknPrintJun.Visible = true;
                        }

                    }


                    aFeePaymentJun.HRef = "~/StudentLogin/FeesPayment_Jr.aspx";
                    if (Convert.ToInt32(Session["StudentNewApply"].ToString()) == 10) //-------for Quota apply students
                    {
                        lnkPaymentJun.Visible = false;
                        aFeePaymentJun.Visible = false;
                    }
                    else
                    {
                        if (Session["PaymentStatus"] != null)
                        {
                            if (Convert.ToInt32(Session["PaymentStatus"].ToString()) == 1)
                            {
                                lnkPaymentJun.Visible = false;
                                aFeePaymentJun.Visible = false;
                            }
                            else
                            {
                                lnkPaymentJun.Visible = true;
                                aFeePaymentJun.Visible = true;
                            }
                        }
                    }

                }
                else
                {
                    aDashBoard.HRef = "~/StudentLogin/Studentdashboard.aspx";

                    aOptionDeg.HRef = "~/StudentLogin/OptionPref_Deg.aspx";
                    aOptionDeg.Visible = false;
                    lknOptionDeg.Visible = false;

                    aFeedbackDeg.HRef = "~/StudentLogin/Feedback_Deg.aspx";
                    lknFeedbackDeg.Visible = true;
                    aFeedbackDeg.Visible = true;

                    aPreferenceDeg.HRef = "~/StudentLogin/PreferSecondSelection.aspx";
                    lknSlideupDeg.Visible = false;
                    aPreferenceDeg.Visible = false;

                    //aStudentIntimationDeg.HRef = "~/StudentLogin/StudentIntimation_Deg.aspx";
                    //LknIntimationDeg.Visible = true;
                    //aStudentIntimationDeg.Visible = true;

                    if (Session["StudentNewApply"] != null)
                    {
                        if (Convert.ToInt32(Session["StudentNewApply"].ToString()) == 0)
                        {


                            LknIntimationDeg.Visible = true;
                            aStudentIntimationDeg.Visible = true;
                            aStudentIntimationDeg.HRef = "~/StudentLogin/StudentIntimation_Deg.aspx";


                            if (Session["SelectionStatus"] != null)
                            {
                                if (Convert.ToInt32(Session["SelectionStatus"].ToString()) == 0)
                                {


                                    aPrintDeg.Visible = false;
                                    lknPrintDeg.Visible = false;

                                    aSpotPrintDeg.HRef = "~/StudentLogin/PribtCAF_SpotAdmission_Deg.aspx";
                                    aSpotPrintDeg.Visible = true;
                                    lknSpotPrintDeg.Visible = true;
                                }
                                else
                                {
                                    aPrintDeg.HRef = "~/StudentLogin/PrintCAFDeg.aspx";
                                    aPrintDeg.Visible = true;
                                    lknPrintDeg.Visible = true;

                                    aSpotPrintDeg.HRef = "~/StudentLogin/PribtCAF_SpotAdmission_Deg.aspx";
                                    aSpotPrintDeg.Visible = true;
                                    lknSpotPrintDeg.Visible = true;
                                }
                            }


                            aPersonalInfoDeg.Visible = false;
                            lknPersonalDeg.Visible = false;
                        }
                        else
                        {
                            lknSlideupDeg.Visible = false;
                            aPreferenceDeg.Visible = false;

                            LknIntimationDeg.Visible = false;
                            aStudentIntimationDeg.Visible = false;


                            aPrintDeg.Visible = false;
                            lknPrintDeg.Visible = false;

                            aPersonalInfoDeg.HRef = "~/StudentLogin/PersonalInfo_Deg.aspx";
                            aPersonalInfoDeg.Visible = true;
                            lknPersonalDeg.Visible = true;

                            aSpotPrintDeg.HRef = "~/StudentLogin/PribtCAF_SpotAdmission_Deg.aspx";
                            aSpotPrintDeg.Visible = true;
                            lknSpotPrintDeg.Visible = true;

                        }
                    }
                    if (Session["PaymentStatus"] != null)
                    {
                        if (Convert.ToInt32(Session["PaymentStatus"].ToString()) == 1)
                        {

                            lnkPaymentDeg.Visible = false;
                            aFeePaymentDeg.Visible = false;
                        }
                        else
                        {
                            aFeePaymentDeg.HRef = "~/StudentLogin/FeesPayment.aspx";
                            lnkPaymentDeg.Visible = true;
                            aFeePaymentDeg.Visible = true;
                        }
                    }

                    //aMigrationDeg.Visible = true;
                    //aMigrationDeg.HRef = "~/StudentLogin/Migration_Deg.aspx";

                }


            }
        }
    }
}
