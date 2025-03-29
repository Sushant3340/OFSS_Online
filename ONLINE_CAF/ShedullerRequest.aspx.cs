using CommonModels;
using Newtonsoft.Json;
using SabPaisaDotNetIntregreation;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.UI;

public partial class ONLINE_CAF_ShedullerRequest : System.Web.UI.Page
{
    CommonClass ccobj = new CommonClass();
    SabPaisaIntegration objsb = new SabPaisaIntegration();
    string client_Code = ConfigurationManager.AppSettings["clientCode"].ToString();

    protected void Page_Load(object sender, EventArgs e)
    {
        string authIV = System.Configuration.ConfigurationManager.AppSettings["authIV"].ToString();
        string authKey = System.Configuration.ConfigurationManager.AppSettings["authKey"].ToString();
        SabPaisaIntegration sabPaisaIntegration = new SabPaisaIntegration();
        CafPayment objpayment = new CafPayment();
        List<string> listtxnId = ccobj.ManagePaymentShedular_JR();
        string sFinalurl = "";

        if (listtxnId.Count > 0)
        {
            foreach (string txnId in listtxnId)
            {
                SabPaisaRequest requestToGateway = new SabPaisaRequest
                {
                    clientCode = client_Code,
                    clientTxnId = txnId,
                    authIV = authIV,
                    authKey = authKey
                };

                sFinalurl = objsb.forwardToSabPaisaForEnquiryAPI(requestToGateway);

                // Call the API and get JSON response
                string apiResponse = CallSabPaisaAPI(sFinalurl);

                if (!string.IsNullOrEmpty(apiResponse))
                {
                    // Deserialize JSON Response
                    var responseObject = JsonConvert.DeserializeObject<SabPaisaResponse>(apiResponse);

                    if (responseObject != null && !string.IsNullOrEmpty(responseObject.statusResponseData))
                    {
                        // Decrypt Response
                        Dictionary<string, string> sabPaisaRespdict = sabPaisaIntegration.sabPaisaResponse(responseObject.statusResponseData, authIV, authKey);

                        foreach (KeyValuePair<string, string> pair in sabPaisaRespdict)
                        {
                            if (pair.Key.ToString().ToUpper() == "RESPONSECODE")
                            {
                                objpayment.pgRespCode = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "SABPAISATXNID")
                            {
                                objpayment.PGTxnNo = pair.Value.ToString();                                
                            }
                            else if (pair.Key.ToString().ToUpper() == "ISSUERREFNO")
                            {
                                objpayment.issuerRefNo = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "AUTHIDCODE")
                            {
                                objpayment.authIdCode = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "AMOUNT")
                            {
                                //lblAmount.Text = pair.Value.ToString();
                                objpayment.amount = Convert.ToDecimal(pair.Value.ToString());
                            }
                            else if (pair.Key.ToString().ToUpper() == "CLIENTTXNID")
                            {                             
                                objpayment.clientTxnId = pair.Value.ToString();
                                objpayment.vch_UniqueRefNo = objpayment.clientTxnId.Substring(11);                               
                            }
                            else if (pair.Key.ToString().ToUpper() == "PAYERNAME")
                            {
                                objpayment.firstName = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "PAYMENTMODE")
                            {
                                objpayment.payMode = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "PAYEREMAIL")
                            {
                                objpayment.email = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "PAYERMOBILE")
                            {
                                objpayment.mobileNo = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "STATUSCODE")
                            {
                                objpayment.spRespCode = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "CID")
                            {
                                objpayment.cid = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "BID")
                            {
                                objpayment.bid = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "CLIENTCODE")
                            {
                                objpayment.clientCode = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "PAYEEPROFILE")
                            {
                                objpayment.payeeProfile = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "TRANSDATE")
                            {
                                objpayment.transDate = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "STATUS")
                            {
                                objpayment.spRespStatus = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "CHALLANNUMBER")
                            {
                                objpayment.challanNo = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "REMSG")
                            {
                                objpayment.reMsg = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "PAIDAMOUNT")
                            {
                                objpayment.orgTxnAmount = Convert.ToDecimal(pair.Value.ToString());
                            }
                            else if (pair.Key.ToString().ToUpper() == "PROGRAMID")
                            {
                                objpayment.programId = pair.Value.ToString();
                            }
                            else if (pair.Key.ToString().ToUpper() == "PINT_APPLICANTID")
                            {
                                objpayment.programId = pair.Value.ToString();
                            }

                        }
                        if (!string.IsNullOrEmpty(objpayment.clientTxnId))
                        {
                            objpayment.Action = "U";
                            string res = ccobj.ManagePayment_JR(objpayment);
                            //if (res == "101")
                            //{                                
                            //    //lblPaymentMsg.Text = "Amount MisMatch";
                            //}
                            //else if (res == "102")
                            //{                                
                            //    //lblPaymentMsg.Text = "Transction ID MisMatch";
                            //}
                        }
                        
                    }
                    
                }
            }
        }
    }

    private string CallSabPaisaAPI(string encryptedData)
    {
        try
        {
           
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls13;

            //string apiUrl = "https://stage-txnenquiry.sabpaisa.in/SPTxtnEnquiry/getTxnStatusByClientxnId";
            string apiUrl = "https://txnenquiry.sabpaisa.in/SPTxtnEnquiry/getTxnStatusByClientxnId";
        
            var requestData = new
            {
                clientCode = client_Code,
                statusTransEncData =encryptedData
                //clientCode="TM001",
                //statusTransEncData= "3I14ysefo0Xpui3VBEoUZHU/K2QtSCzsAeCy9ZahU8JhAkDkNd9035P1tGAaiwRKw6W8iq5TbX9oMQXp4eZ1uQ=="
            };

            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                string jsonRequest = JsonConvert.SerializeObject(requestData);
                var content = new StringContent(jsonRequest, Encoding.UTF8, "application/json");

                HttpResponseMessage response = client.PostAsync(apiUrl, content).Result;
                string jsonResponse = response.Content.ReadAsStringAsync().Result;

                // ✅ PRINT FULL API RESPONSE FOR DEBUGGING
                //Response.Write($"API Response: {jsonResponse}<br/>");

                if (response.IsSuccessStatusCode)
                {
                    return jsonResponse;
                }
                else
                {
                   // Response.Write($"❌ ERROR: {response.StatusCode} - {response.ReasonPhrase}<br/>");
                    return null;
                }
            }
        }
        catch (Exception ex)
        {
            //Response.Write($"❌ Exception: {ex.Message}<br/>");
            return null;
        }
    }
}


// SabPaisa API Response Model
public class SabPaisaResponse
{
    public string clientCode { get; set; }
    public string statusResponseData { get; set; }
}
