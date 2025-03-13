using System;
using System.Configuration;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;

/// <summary>
/// Summary description for SENDMAIL
/// </summary>
public class SENDMAIL
{

    #region Send Mail

    public void sendMail(string Subject, string MailBody, string strMailID)
    {
        // Gmail Address from where you send the mail
        var fromAddress = "ofss@biharboardonline.com"; //"bsebportal@gmail.com";
        // any address where the email will be sending
        var toAddress = strMailID;
        //Password of your gmail address
        const string fromPassword = "bseb@online#123";// "csmpl@123";
        // smtp settings
        var smtp = new System.Net.Mail.SmtpClient();
        {
            smtp.Host = "webmail.biharboardonline.com";// "smtp.gmail.com";
            smtp.Port = 587;
            smtp.EnableSsl = true;
            smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
            smtp.Credentials = new NetworkCredential(fromAddress, fromPassword);
            smtp.Timeout = 20000;
        }
        // Passing values to smtp object
        ServicePointManager.ServerCertificateValidationCallback = delegate (object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors) { return true; };
        smtp.Send(fromAddress, toAddress, Subject, MailBody);
    }
    #endregion

    readonly string strUsername = "email_BBoard";
    readonly string strPassword = "df6fd7sq";
    readonly string strFrom = "ofss@biharboardonline.com";
    readonly string strFromName = "OFSS";
    readonly string strReplyTo = "ofss@biharboardonline.com";
    readonly string strCampaignname = "OFSS";
    readonly string strListname = "OFSS";

    #region sendVivaMail
    public void SendVivaMail(string Subject, string MailBody, string strMailID)
    {

        var httpWebRequest = (HttpWebRequest)WebRequest.Create(ConfigurationManager.AppSettings["SMSEmailPath"]);
        httpWebRequest.ContentType = "application/json";
        httpWebRequest.Method = "POST";

        using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
        {
            byte[] byt = System.Text.Encoding.UTF8.GetBytes(MailBody);
            // convert the byte array to a Base64 string
            MailBody = Convert.ToBase64String(byt);

            string json = "{\"username\":\"" + strUsername + "\",\"password\":\"" + strPassword + "\",\"from\":\"" + strFrom + "\",\"fromName\":\"" + strFromName + "\",\"to\":\"" + strMailID + "\",\"subject\":\"" + Subject + "\",\"replyTo\":\"" + strReplyTo + "\",\"campaignName\":\"" + strCampaignname + "\",\"htmlBody\":\"" + MailBody + "\",\"listName\":\"" + strListname + "\"}";

            streamWriter.Write(json);
            streamWriter.Flush();
            streamWriter.Close();
        }

        var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
        using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
        {
            var result = streamReader.ReadToEnd();
        }
    }
    #endregion

}