using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using System.Configuration;

/// <summary>
/// Summary description for CreateXmlMsgUtil
/// </summary>
public static class CreateXmlMsgUtil
{

    public static string K_StudLoginOTPFPWD = "StudLoginOTPFPWD";
    public static string K_StudLoginPersonalInfoJun = "StudLoginPersonalInfoJun";
    public static string K_StudLoginOptionPreferenceJun = "StudLoginOptionPreferenceJun";
    public static string K_StudLoginSlideUpOTPActivate = "StudLoginSlideUpOTPActivate";
    public static string K_StudLoginSlideUpOTPDeactivate = "StudLoginSlideUpOTPDeactivate";
    public static string K_StudLoginSlideUpActivatedConfirm = "StudLoginSlideUpActivatedConfirm";
    public static string K_StudLoginSlideUpDeactivateConfirm = "StudLoginSlideUpDeactivateConfirm";

    private static string XmlPath = ConfigurationManager.AppSettings["StrPath"] + "/SAMS/SMS_Email.xml";

    public static string hash_cafno = "#uniqueRefNo#", hash_admDate = "#date#", hash_collegename = "#CollegeName#", hash_block = "#block#", hash_reason = "#reason#", hash_Stream = "#stream#";
    public static string hash_FPWDOTP = "#OTP#";
    public static string K_MailSub_OTPSend = "OFSS || OTP for forgot password";
    public static string K_MailSub_CAFPersonalInfoEditJun = "OFSS || Confirmation for personal information modified on CAF intermediate";
    public static string K_MailSub_CAFOptionPreferEditJun = "OFSS || Confirmation for option preference modified on CAF intermediate";
    public static string K_MailSub_OTPSlideupActivate = "OFSS || OTP for slide-up option activated";
    public static string K_MailSub_OTPSlideupDeactivate = "OFSS || OTP for slide-up option deactivated";
    public static string K_MailSub_ActivateSlideupConfirm = "OFSS || Confirmation for slide-up option activated";
    public static string K_MailSub_DeactivateSlideupConfirm = "OFSS || Confirmation for slide-up option deactivated";
    
    
    public static string GetXmlMessageByType(string NodeType, Dictionary<string, string> objValues, int intType /*1=sms, 2 = email*/)
    {
        string strXmlMsg = string.Empty;

        XmlDocument doc = new XmlDocument();
        doc.Load(XmlPath);
        if (doc != null)
        {
           

            XmlNode engnode = doc.DocumentElement.SelectSingleNode("/msg/" + NodeType + "/english");
            strXmlMsg = engnode.InnerText;
            foreach (KeyValuePair<string, string> k in objValues)
            {
                strXmlMsg = strXmlMsg.Replace(k.Key, k.Value);
            }
           

            //if (intType == 2)
            //{
            //    XmlNode node = doc.DocumentElement.SelectSingleNode("/msg/" + NodeType + "/Hindi");
            //    strXmlMsg = strXmlMsg.Trim() + Environment.NewLine + node.InnerText.Trim();
            //    foreach (KeyValuePair<string, string> k in objValues)
            //    {
            //        strXmlMsg = strXmlMsg.Replace(k.Key, k.Value);
            //    }

            //}

        }


        return strXmlMsg.Trim();
    }

    public static string GetEmailAppendedContent(string strXmlMessage, string strApplicantName)
    {
        string strEmailMessage = "Dear " + strApplicantName + "," + strXmlMessage + "" + "With warm regards " + "OFSS";
        return strEmailMessage;
    }
}