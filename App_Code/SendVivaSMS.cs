using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Net;
using System.Configuration;

/// <summary>
/// Summary description for SendVivaSMS
/// </summary>
public class SendVivaSMS
{
    public SendVivaSMS()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public void SendVivaSMSTest(string strMobileNo, string strMessage, string strTemplate)
    {

        string res = string.Empty;
        string strUrl = ConfigurationManager.AppSettings["SMSVivaPath"];
        string strUsername = "bihar_board";
        string strPassword = "qwssa456";
        string strSenderID = "BRGOVT";
        string strCDMA = "BRGOVT";

        strMessage = Uri.EscapeUriString(strMessage);
        String urlf = string.Format("{0}?UserName={1}&password={2}&MobileNo={3}&SenderID={4}&CDMAHeader={5}&Message={6}&dlt_templateid={7}", strUrl, strUsername, strPassword, strMobileNo, strSenderID, strCDMA, strMessage, strTemplate);
        //"https://hapi.smsapi.org/SendSMS.aspx?UserName=bihar_board&password=qwssa456&MobileNo=8018049429&SenderID=ofss&CDMAHeader=ofss&Message=TestSMS";
        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(urlf);

        //ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
        //System.Net.ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12;
        using (WebResponse response = request.GetResponse())
        {
            using (Stream stream = response.GetResponseStream())
            {
                StreamReader responseReader = new StreamReader(stream);

                string strGateWayStatus = responseReader.ReadToEnd();
                //Exception ex = new Exception();
                //Util.LogError(ex, strGateWayStatus);
            }
        }

    }

}

