using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Web;
using System.IO;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;

/// <summary>
/// Summary description for SENDMSDSMS
/// </summary>
public class SENDMSDSMS
{
    //string strusername = "BIHAREDISTRICT-bseb";
    //string strPassword = "BSEBERP@1234";
    //string senderid = "BRGOVT";
    ////string SecureKey = "5596c419-84b7-40b2-a4e9-f1f173bf25bd";
    //string SecureKey = "b1cfa094-162b-4a48-911d-9552571649f9";

    String strusername = "BIHAREDISTRICT-bseb";
    String strPassword = "BSEBERP@1234";
    String senderid = "BRGOVT";
    String SecureKey = "b1cfa094-162b-4a48-911d-9552571649f9";

    string SMSPATH = "";


    public SENDMSDSMS()
    {
        if (System.Web.Configuration.WebConfigurationManager.AppSettings["SMSPATH"] != null)
        { SMSPATH = System.Web.Configuration.WebConfigurationManager.AppSettings["SMSPATH"].ToString(); }
        //
        // TODO: Add constructor logic here
        //
    }

    protected String encryptedPasswod(String password)
    {

        byte[] encPwd = Encoding.UTF8.GetBytes(password);
        //static byte[] pwd = new byte[encPwd.Length];
        HashAlgorithm sha1 = HashAlgorithm.Create("SHA1");
        byte[] pp = sha1.ComputeHash(encPwd);
        // static string result = System.Text.Encoding.UTF8.GetString(pp);
        StringBuilder sb = new StringBuilder();
        foreach (byte b in pp)
        {

            sb.Append(b.ToString("x2"));
        }
        return sb.ToString();

    }

    protected String hashGenerator(String Username, String sender_id, String message, String secure_key)
    {

        StringBuilder sb = new StringBuilder();
        sb.Append(Username).Append(sender_id).Append(message).Append(secure_key);
        byte[] genkey = Encoding.UTF8.GetBytes(sb.ToString());
        //static byte[] pwd = new byte[encPwd.Length];
        HashAlgorithm sha1 = HashAlgorithm.Create("SHA512");
        byte[] sec_key = sha1.ComputeHash(genkey);

        StringBuilder sb1 = new StringBuilder();
        for (int i = 0; i < sec_key.Length; i++)
        {
            sb1.Append(sec_key[i].ToString("x2"));
        }
        return sb1.ToString();
    }

    public String SingleSMS(String moblineno, String message, string templateId = "1")
    {
        //Latest Generated Secure Key
        Stream dataStream;
        ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(SMSPATH);
        request.ProtocolVersion = HttpVersion.Version10;
        request.KeepAlive = false;
        request.ServicePoint.ConnectionLimit = 1;

        //((HttpWebRequest)request).UserAgent = ".NET Framework Example Client";
        ((HttpWebRequest)request).UserAgent = "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt)";

        request.Method = "POST";

        String encryptedPassword = encryptedPasswod(strPassword);
        String NewsecureKey = hashGenerator(strusername, senderid, message, SecureKey);
        String smsservicetype = "singlemsg"; //For single message.

        String query = "username=" + HttpUtility.UrlEncode(strusername) +
            "&password=" + HttpUtility.UrlEncode(encryptedPassword) +

            "&smsservicetype=" + HttpUtility.UrlEncode(smsservicetype) +

            "&content=" + HttpUtility.UrlEncode(message) +

            "&mobileno=" + HttpUtility.UrlEncode(moblineno) +

            "&senderid=" + HttpUtility.UrlEncode(senderid) +
          "&key=" + HttpUtility.UrlEncode(NewsecureKey)+
          "&templateid=" + HttpUtility.UrlEncode(templateId);

        byte[] byteArray = Encoding.ASCII.GetBytes(query);

        request.ContentType = "application/x-www-form-urlencoded";

        request.ContentLength = byteArray.Length;



        dataStream = request.GetRequestStream();

        dataStream.Write(byteArray, 0, byteArray.Length);

        dataStream.Close();

        WebResponse response = request.GetResponse();

        String Status = ((HttpWebResponse)response).StatusDescription;

        dataStream = response.GetResponseStream();

        StreamReader reader = new StreamReader(dataStream);

        String responseFromServer = reader.ReadToEnd();

        reader.Close();

        dataStream.Close();

        response.Close();
        return responseFromServer;
    }

    public String BulkSMS(String moblinenos, String message, string templateId = "1")
    {
        Stream dataStream;
        ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(SMSPATH);
        request.ProtocolVersion = HttpVersion.Version10;
        request.KeepAlive = false;
        request.ServicePoint.ConnectionLimit = 1;

        //((HttpWebRequest)request).UserAgent = ".NET Framework Example Client";
        ((HttpWebRequest)request).UserAgent = "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt)";

        request.Method = "POST";
        System.Net.ServicePointManager.CertificatePolicy = new MyPolicy();
        String encryptedPassword = encryptedPasswod(strPassword);
        String NewsecureKey = hashGenerator(strusername, senderid, message, SecureKey);
        Console.Write(NewsecureKey);
        Console.Write(encryptedPassword);

        String smsservicetype = "bulkmsg"; // for bulk msg

        String query = "username=" + HttpUtility.UrlEncode(strusername) +

         "&password=" + HttpUtility.UrlEncode(encryptedPassword) +

         "&smsservicetype=" + HttpUtility.UrlEncode(smsservicetype) +

         "&content=" + HttpUtility.UrlEncode(message) +

         "&bulkmobno=" + HttpUtility.UrlEncode(moblinenos) +

         "&senderid=" + HttpUtility.UrlEncode(senderid) +

        "&key=" + HttpUtility.UrlEncode(NewsecureKey)+
        "&templateid=" + HttpUtility.UrlEncode(templateId);

        Console.Write(query);

        byte[] byteArray = Encoding.ASCII.GetBytes(query);

        request.ContentType = "application/x-www-form-urlencoded";

        request.ContentLength = byteArray.Length;

        dataStream = request.GetRequestStream();

        dataStream.Write(byteArray, 0, byteArray.Length);

        dataStream.Close();

        WebResponse response = request.GetResponse();

        String Status = ((HttpWebResponse)response).StatusDescription;

        dataStream = response.GetResponseStream();

        StreamReader reader = new StreamReader(dataStream);

        String responseFromServer = reader.ReadToEnd();

        reader.Close();

        dataStream.Close();

        response.Close();
        return responseFromServer;
    }

    /// <summary>
    /// Method for sending OTP MSG.
    /// </summary>
    /// <param name="username"> Registered user name</param>
    /// <param name="password"> Valid login password</param>
    /// <param name="senderid">Sender ID </param>
    /// <param name="mobileNo"> valid single Mobile Number </param>
    /// <param name="message">Message Content </param>
    /// <param name="secureKey">Department generate key by login to services portal</param>
    // Method for sending OTP MSG.
    public String sendOTPMSG(String moblineno, String message, string templateId = "1")
    {
        try
        {
            moblineno = "9784306325";
            Stream dataStream;
            ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
            HttpWebRequest request =
           (HttpWebRequest)WebRequest.Create(SMSPATH);
            request.ProtocolVersion = HttpVersion.Version10;
            request.KeepAlive = false;
            request.ServicePoint.ConnectionLimit = 1;
            //((HttpWebRequest)request).UserAgent = ".NET Framework Example Client";
            ((HttpWebRequest)request).UserAgent = "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt)";
            request.Method = "POST";
            System.Net.ServicePointManager.CertificatePolicy = new MyPolicy();
            String encryptedPassword = encryptedPasswod(strPassword);
            String key = hashGenerator(strusername, senderid, message, SecureKey);
            String smsservicetype = "otpmsg"; //For OTP message.
            String query = "username=" + HttpUtility.UrlEncode(strusername) +
                            "&password=" + HttpUtility.UrlEncode(encryptedPassword) +
                            "&smsservicetype=" + HttpUtility.UrlEncode(smsservicetype) +
                            "&content=" + HttpUtility.UrlEncode(message) +
                            "&mobileno=" + HttpUtility.UrlEncode(moblineno) +
                            "&senderid=" + HttpUtility.UrlEncode(senderid) +
                            "&key=" + HttpUtility.UrlEncode(key) +
                            "&templateid=" + HttpUtility.UrlEncode(templateId);
            byte[] byteArray = Encoding.ASCII.GetBytes(query);
            request.ContentType = "application/x-www-form-urlencoded";
            request.ContentLength = byteArray.Length;
            dataStream = request.GetRequestStream();
            dataStream.Write(byteArray, 0, byteArray.Length);
            dataStream.Close();
            WebResponse response = request.GetResponse();
            String Status = ((HttpWebResponse)response).StatusDescription;
            dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            String responseFromServer = reader.ReadToEnd();
            reader.Close();
            dataStream.Close();
            response.Close();

            //code added by kisan raj
            //removed code to call exception added by ritika lath 29062020
            //Exception ex = new Exception();
            //Util.LogError(ex, responseFromServer);
            //if (responseFromServer.Split(',')[0] != "402")
            //{
            //    SendVivaSMS objSendViaSms = new SendVivaSMS();
            //    objSendViaSms.SendVivaSMSTest(moblineno, message);
            //}
            return responseFromServer;
        }
        catch (Exception ex)
        {

            //SendVivaSMS objSendViaSms = new SendVivaSMS();
            //objSendViaSms.SendVivaSMSTest(moblineno, message);
            throw ex;

        }
    }

    /// <summary>
    /// method for Sending unicode..
    /// </summary>
    /// <param name="username"> Registered user name</param>
    /// <param name="password"> Valid login password</param>
    /// <param name="senderid">Sender ID </param>
    /// <param name="mobileNo"> valid Mobile Numbers </param>
    /// <param name="Unicodemessage">Unicodemessage Message Content</param>
    /// <param name="secureKey">Department generate key by login to services portal</param>
    //method for Sending unicode..
    public String sendUnicodeSMS(String moblineno, String Unicodemessage, string templateId = "1")
    {
        Stream dataStream;
        ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
        HttpWebRequest request =
       (HttpWebRequest)WebRequest.Create(SMSPATH);
        request.ProtocolVersion = HttpVersion.Version10;
        request.KeepAlive = false;
        request.ServicePoint.ConnectionLimit = 1;
        //((HttpWebRequest)request).UserAgent = ".NET Framework Example Client";
        ((HttpWebRequest)request).UserAgent = "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt)";
        request.Method = "POST";
        String U_Convertedmessage = "";

        foreach (char c in Unicodemessage)
        {
            int j = (int)c;
            String sss = "&#" + j + ";";
            U_Convertedmessage = U_Convertedmessage + sss;
        }
        String encryptedPassword = encryptedPasswod(strPassword);
        String NewsecureKey = hashGenerator(strusername, senderid, U_Convertedmessage, SecureKey);

        String smsservicetype = "unicodemsg"; // for unicode msg
        String query = "username=" + HttpUtility.UrlEncode(strusername) +
                        "&password=" + HttpUtility.UrlEncode(encryptedPassword) +
                        "&smsservicetype=" + HttpUtility.UrlEncode(smsservicetype) +
                        "&content=" + HttpUtility.UrlEncode(U_Convertedmessage) +
                        "&bulkmobno=" + HttpUtility.UrlEncode(moblineno) +
                        "&senderid=" + HttpUtility.UrlEncode(senderid) +
                        "&key=" + HttpUtility.UrlEncode(NewsecureKey)+
                        "&templateid=" + HttpUtility.UrlEncode(templateId);

        byte[] byteArray = Encoding.ASCII.GetBytes(query);
        request.ContentType = "application/x-www-form-urlencoded";
        request.ContentLength = byteArray.Length;
        dataStream = request.GetRequestStream();
        dataStream.Write(byteArray, 0, byteArray.Length);
        dataStream.Close();
        WebResponse response = request.GetResponse();
        String Status = ((HttpWebResponse)response).StatusDescription;
        dataStream = response.GetResponseStream();
        StreamReader reader = new StreamReader(dataStream);
        String responseFromServer = reader.ReadToEnd();
        reader.Close();
        dataStream.Close();
        response.Close();
        return responseFromServer;
    }
}

class MyPolicy : ICertificatePolicy
{
    public bool CheckValidationResult(ServicePoint srvPoint, X509Certificate certificate, WebRequest request, int certificateProblem)
    {
        return true;
    }
}