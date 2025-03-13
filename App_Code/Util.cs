using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Text;
using System.Security.Cryptography;
using System.Web.UI.WebControls;
using CommonModels;

/// <summary>
/// Summary description for Util
/// </summary>
public class Util
{
   
    public Util()
    {
        //
        // TODO: Add constructor logic here
        //
    }
    //public static void SessionCheck()
    //{
    //    if (HttpContext.Current.Session["UserId"] == null)
    //    {
    //        HttpContext.Current.Response.Redirect("~/LogOut.aspx");
    //    }
    //}

    public static void LogError(Exception ex, string strModule)
    {
        //try
        //{
        //string strFileName = strModule+"_ErrorLog" + DateTime.Now.ToString("ddMMyyyy") + ".txt";
        //string message = string.Format("Time: {0}", DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt"));
        //message += Environment.NewLine;
        //message += "-----------------------------------------------------------";
        //message += Environment.NewLine;
        //message += string.Format("Message: {0}", ex.Message);
        //message += Environment.NewLine;
        //message += string.Format("StackTrace: {0}", ex.StackTrace);
        //message += Environment.NewLine;
        //message += string.Format("Source: {0}", ex.Source);
        //message += Environment.NewLine;
        //message += string.Format("TargetSite: {0}", ex.TargetSite.ToString());
        //message += Environment.NewLine;
        //message += "-----------------------------------------------------------";
        //message += Environment.NewLine;
        //string path = System.Web.HttpContext.Current.Server.MapPath("~/ErrorLog/" + strFileName);
        //using (StreamWriter writer = new StreamWriter(path, true))
        //{
        //    writer.WriteLine(message);
        //    writer.Close();
        //}

        //added by Ritika Lath on 18th April 2019
        CommonClass ccobj = new CommonClass();
        ClsExpData objExpData = new ClsExpData();
        objExpData.vchMessage = ex.Message.Replace("'", "");
        objExpData.vchSource = ex.Source;
        objExpData.vchStackTrace = ex.StackTrace;
        objExpData.vchTargetSite = ex.TargetSite != null ? ex.TargetSite.ToString() : string.Empty;
        objExpData.vchModuleName = strModule;

            int intRetValue = ccobj.InsertExceptionDetails(objExpData);
        
        //}
        //catch(Exception ex)
        //{
        //    throw ex;
        //}
    }

    public static void LogErrorSBI_sabPaisa(Exception ex, string strModule,string SBIReturn)
    {
        CommonClass ccobj = new CommonClass();

        //added by Ritika Lath on 18th April 2019
        ClsExpData objExpData = new ClsExpData();
        objExpData.vchMessage = ex.Message.Replace("'", "");
        objExpData.vchSource = ex.Source;
        objExpData.vchStackTrace = ex.StackTrace+"::"+ SBIReturn;
        objExpData.vchTargetSite = ex.TargetSite != null ? ex.TargetSite.ToString() : string.Empty;
        objExpData.vchModuleName = strModule;
       
            int intRetValue = ccobj.InsertExceptionDetails(objExpData);
        
        //}
        //catch(Exception ex)
        //{
        //    throw ex;
        //}
    }

    public static void CSRFSecurityLog_Add(ClsExpData objExpData)
    {
        CommonClass ccobj = new CommonClass();

        int intRetValue = ccobj.InsertSecurityLogForCSRF(objExpData);
        
    }

    public static void SendPaymentSMS(string strClientTransId, string strUniqueVerNo, string strMobileNo, string strType, string strModule)
    {
        SENDMSDSMS objSMSPost = new SENDMSDSMS();
        SendVivaSMS sendVivaSMS = new SendVivaSMS();
        string strReturnMsg = "Success";
        try
        {
            string MsgBody = string.Empty;
            string status = string.Empty;
            //Send By SMS
            if (string.Equals(strType, "success", StringComparison.OrdinalIgnoreCase))
            {
                MsgBody = "Your Payment for the application no. " + strUniqueVerNo + " is completed successfully. Your  transaction id  is " + strClientTransId + ". Please share the transaction ID for any further enquiry. - BSEB";
                //sendVivaSMS.SendVivaSMSTest(strMobileNo, MsgBody, K_SMS_Payment_Success);
                objSMSPost.sendOTPMSG(strMobileNo, MsgBody, K_SMS_Payment_Success);
            }
            else if (string.Equals(strType, "Fail", StringComparison.OrdinalIgnoreCase))
            {
                MsgBody = "Your Payment for the application no. " + strUniqueVerNo + " has failed. Please try again. - BSEB";
                // sendVivaSMS.SendVivaSMSTest(strMobileNo, MsgBody, K_SMS_Payment_Failed);
                objSMSPost.sendOTPMSG(strMobileNo, MsgBody, K_SMS_Payment_Success);
            }


            //-------------------------commented extra error log handling  on 14th Sep 2020----------------
            //if (status.Split(',').Length == 1 || status.Split(',')[0] != "402")
            //{
            //    LogError(new Exception(), strModule);
            //}
        }
        catch (Exception ex)
        {
            LogError(ex, strModule);
        }
        finally { objSMSPost = null; }
    }

    public const string K_SubPaisa_Success = "0000";
    public const string K_SubPaisa_Failure = "0300";
    public const string K_SubPaisa_Cancelled = "0100";
    public const string K_SubPaisa_UnKnown_response = "0999";
    public const string K_SubPaisa_Trans_Not_Found = "404";
    public const string K_SubPaisa_Pending = "0100";
    public const string K_SubPaisa_Challan_Gen = "0400";

    public static string EncryptPwd(string strPassword)
    {
        UTF8Encoding Ue = new UTF8Encoding();
        string pwdString = null;
        MD5CryptoServiceProvider Md5 = new MD5CryptoServiceProvider();
        byte[] ByteHash = Md5.ComputeHash(Ue.GetBytes(strPassword));
        pwdString = BitConverter.ToString(ByteHash);
        pwdString = pwdString.Replace("-", null);
        return pwdString;
    }

    public static string check(TextBox txt, string strMand, string ctlname, int intSize, string allowchar = "")
    {

        string strMessage = "pass";
        try
        {
            string id = txt.ID;
            if (strMand == "M")
            {
                if (txt.Text == "")
                {
                    strMessage = ctlname + " can not be left blank";
                    return strMessage;
                }
            }
            if (txt.Text != "")
            {
                string FirststChar = txt.Text.Substring(0, 1);
                if (FirststChar == " ")
                {
                    strMessage = ctlname + " does not allow White Space(s) in first place";
                    return strMessage;
                }

                else if (FirststChar == "=" || FirststChar == "," || FirststChar == "-" || FirststChar == "." || FirststChar == "\\" || FirststChar == "(" || FirststChar == ")" || FirststChar == "/" || FirststChar == " " || FirststChar == "_" || FirststChar == ":")
                {
                    strMessage = ctlname + " does not allow " + FirststChar + " in first place";
                    return strMessage;
                }
                else if (txt.Text.Substring(txt.Text.Length - 1, 1) == " ")
                {
                    strMessage = ctlname + " " + "does not allow White Space(s) in last place";
                    return strMessage;
                }
                else if (allowchar != "")
                {

                    string spcialchar = "!@#$%^&*()_+=-{}[]';:|\\?/>.<,~`|";
                    char[] allowcharecter = allowchar.ToCharArray();
                    foreach (char c in allowcharecter)
                    {
                        int index = spcialchar.IndexOf(c);
                        if (index != -1)
                        {
                            spcialchar = spcialchar.Remove(index, 1);
                        }

                    }
                    char[] specialchararray = spcialchar.ToCharArray();
                    foreach (char c in specialchararray)
                    {
                        if (txt.Text.Contains(c.ToString()))
                        {
                            strMessage = ctlname + " does not allow " + c.ToString() + "";
                            return strMessage;
                        }
                    }

                }
                else if (allowchar == "")
                {

                    string spcialchar = "!@#$%^&*()_+=-{}[]';:|\\?/>.<,~`|";
                    char[] specialchararray = spcialchar.ToCharArray();
                    foreach (char c in specialchararray)
                    {
                        if (txt.Text.Contains(c.ToString()))
                        {
                            strMessage = ctlname + " does not allow " + c.ToString() + "";
                            return strMessage;
                        }
                    }
                }
                else if (txt.MaxLength > intSize)
                {
                    strMessage = ctlname + " does not allow more than " + txt.MaxLength + " characters";
                    return strMessage;
                }

                else
                {

                }
            }

        }
        catch
        {
            strMessage = "Fail";
        }
        return strMessage;

    }

    public static void DisplayPaging(int gIntRowsCount, GridView grdViewRegStatus, Label lblPaging, LinkButton lbtnAll)
    {

        if (grdViewRegStatus.Rows.Count > 0)
        {

            if (gIntRowsCount > grdViewRegStatus.PageSize)
            {
                lblPaging.Visible = true;
                lbtnAll.Visible = true;
            }
            else
            {
                lblPaging.Visible = true;
                lbtnAll.Visible = false;
            }
            if (grdViewRegStatus.PageIndex + 1 == grdViewRegStatus.PageCount)
            {
                lblPaging.Text = "Results <b>" + (Convert.ToInt32((grdViewRegStatus.PageIndex * grdViewRegStatus.PageSize)) + 1) + "</b> - <b>" + gIntRowsCount + " " + "Of" + " " + gIntRowsCount + "</b>";
            }
            else
            {
                lblPaging.Text = "Results <b>" + (Convert.ToInt32((grdViewRegStatus.PageIndex * grdViewRegStatus.PageSize)) + 1) + "</b> - <b>" + ((grdViewRegStatus.PageIndex + 1) * grdViewRegStatus.PageSize) + " " + "Of" + " " + gIntRowsCount + "</b>";
            }
        }
        else
        {
            lblPaging.Visible = false;
            lbtnAll.Visible = false;
        }
    }

    /// <summary>
    /// Function to create a new random number in page load to check for CSRF attacks 
    /// Created On 1st July 2019 Ritika lath
    /// </summary>
    /// <returns>new random number for attacks</returns>
    public static string GenerateCSRFRandomNo()
    {
        Random random = new Random();
        string combination = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder CSRFRandNum = new StringBuilder();
        for (int i = 0; i < 6; i++)
            CSRFRandNum.Append(combination[random.Next(combination.Length)]);
        HttpContext.Current.Session["CSRFRandNum"] = CSRFRandNum.ToString();
        return CSRFRandNum.ToString();
    }

    public static string[] excludeChars = { "?", "&", "/", "<", ">" };

    #region Check the Field value for specific special characters

    public static string CheckSpecialCharValue(string Fieldvalue)
    {
        foreach (var replacement in excludeChars)
        {
            Fieldvalue = Fieldvalue.Replace(replacement, " ").Trim();
        }
        return Fieldvalue;
    }
    public static string checkSpecialChar1stPalce(string Fieldvalue)
    {
        string str = "Pass";
        if (Fieldvalue.Substring(0, 1) == "!" | Fieldvalue.Substring(0, 1) == "@" | Fieldvalue.Substring(0, 1) == "#" | Fieldvalue.Substring(0, 1) == "$" | Fieldvalue.Substring(0, 1) == "%" | Fieldvalue.Substring(0, 1) == "^" | Fieldvalue.Substring(0, 1) == "&" | Fieldvalue.Substring(0, 1) == "*" | Fieldvalue.Substring(0, 1) == "(" | Fieldvalue.Substring(0, 1) == ")" | Fieldvalue.Substring(0, 1) == "-" | Fieldvalue.Substring(0, 1) == "_" | Fieldvalue.Substring(0, 1) == "+" | Fieldvalue.Substring(0, 1) == "=" | Fieldvalue.Substring(0, 1) == "{" | Fieldvalue.Substring(0, 1) == "}" | Fieldvalue.Substring(0, 1) == "[" | Fieldvalue.Substring(0, 1) == "]" | Fieldvalue.Substring(0, 1) == "|" | Fieldvalue.Substring(0, 1) == ";" | Fieldvalue.Substring(0, 1) == ":" | Fieldvalue.Substring(0, 1) == "<" | Fieldvalue.Substring(0, 1) == ">" | Fieldvalue.Substring(0, 1) == "?" | Fieldvalue.Substring(0, 1) == "." | Fieldvalue.Substring(0, 1) == "," | Fieldvalue.Substring(0, 1) == "/" | Fieldvalue.Substring(0, 1) == "\\" | Fieldvalue.Substring(0, 1) == "~" | Fieldvalue.Substring(0, 1) == "`" | Fieldvalue.Substring(0, 1) == "\"" | Fieldvalue.Substring(0, 1) == "\'" | Fieldvalue.Substring(0, 1) == "&" | Fieldvalue.Substring(0, 1) == "_" | Fieldvalue.Substring(0, 1) == "-")
        {
            str = "Fail";
        }
        else
        {
            str = "Pass";
        }
        return str;
    }
    #endregion
    /// <summary>
    /// Template id variables are added By Anjlai Panigrahi on 16-Jun-2021 
    /// </summary>
    #region "Template Ids for all SMS Messages"

    public const string K_SMS_Admission_Update = "1307162365029850761";
    public const string K_SMS_Admission_Reject = "1307162365040104887";
    public const string K_SMS_Admission_Cancel = "1307162365044007241";
    public const string K_SMS_StudLogin_OTP_FPWD = "1307162365050117494";
    public const string K_SMS_Portal_OTP_FPWD = "1307162365193347226";
    public const string K_SMS_StudLogin_PersonalInfo = "1307162365054001687";
    public const string K_SMS_StudLogin_OptPreference = "1307162365056673022";

    public const string K_SMS_StudLogin_SlideUp_OTP_Active = "1307162365060552369";
    public const string K_SMS_StudLogin_SlideUp_OTP_Deactive = "1307162365065931574";
    public const string K_SMS_StudLogin_SlideUp_Active_Confirm = "1307162365080474449";
    public const string K_SMS_StudLogin_SlideUp_Deactive_Confirm = "1307162365085431615";
    public const string K_SMS_CAF_Validate_OTP = "1307162365183170510";
    public const string K_SMS_CAF_Confirm = "1307162365190537468";
    public const string K_SMS_BankDetails_OTP = "1307162365196071884";

    public const string K_SMS_BankDtls_Confirm = "1307162365199334189";
    public const string K_SMS_User_Registration = "1307162365202804236";
    public const string K_SMS_SupportTracking_ComplaintFixed = "1307162365208477662";
    public const string K_SMS_SupportTracking_StudDtls = "1307162365205783198";
    public const string K_SMS_Payment_Success = "1307162365211179526";
    public const string K_SMS_Payment_Failed = "1307162365214949544";

    #endregion
}


public enum enGateway
{
    SBI = 1,
    SubPaisa = 2,
    Sahaj = 3,
    PNB = 4,
    Axis = 5,
    HDFC = 6
}

public enum enCertificate
{
    Migration = 1,
    Transcript = 2
}
