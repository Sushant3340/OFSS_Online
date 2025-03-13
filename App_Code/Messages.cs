

using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
public class Messages
{

    #region "Private Const variables"

    #region "Error message for log in page"

    private const string mERROR_MESSAGE_USERNAME = "Please re-enter your User Name.";

    private const string mERROR_MESSAGE_PASSWORD = "Please re-enter your PassWord.";
    #endregion

    #region Payment Messsages
    public const string mError_Msg_Payment_Success = "Your payment has been received successfully.Please take a print out of the application copy for future reference./आपका भुगतान सफलतापूर्वक प्राप्त हुआ है। भविष्य के संदर्भ के लिए आवेदन प्रतिलिपि का प्रिंट आउट लें।";

    public const string mError_Msg_Payment_Failure = "Sorry... We are not able to complete your payment at this time.Please try again Later./क्षमा करें ... हम इस समय आपके भुगतान को पूरा करने में सक्षम नहीं हैं। कृपया बाद में पुनः प्रयास करें।";
    #endregion

    #region "Common Messages"

    public const string mERROR_MESSAGE_SAVE = "Data Saved Successfully.";
    public const string mERROR_MESSAGE_UPDATE = "Data Updated Successfully.";
    public const string mERROR_MESSAGE_DELETE = "Data Deleted Successfully.";
    public const string mERROR_MESSAGE_DUPLICATECHECK = "Duplicate Record(s) Found!";
    public const string mERROR_MESSAGE_TRANSACTION = "Transaction Failed Due To Error.";
    public const string mERROR_MESSAGE_CONFIRM = "Data Confirmed Successfully.";
    public const string mERROR_MESSAGE_DEACTIVE = "Deactivated Successfully.";
    public const string mERROR_MESSAGE_ACTIVE = "Activated Successfully.";
    public const string mERROR_MESSAGE_Mobile = "Mobile No exists.";
    public const string mERROR_MESSAGE_Email = "E-Mail Id exists.";
    public const string mERROR_Message_InvalidUser = "Invalid username";

    #endregion
    public const string mERROR_MESSAGE_TRANSACTION_ALLOW = "Maximum No. of Transaction in a Single Request is 50 not more than that!!!";
    public const string mERROR_MESSAGE_dependency = "Data Dependency Exists!";

    #region "Messgae For Internal Messaging"

    public const string mERROR_MESSAGE_MAILSENT = "Mail Sent Successfully.";

    public const string mERROR_MESSAGE_SMSSENT = "SMS Sent Successfully.";
    #endregion

    #endregion

    #region "Messgaes"

    public static string Message(int pMsgID)
    {
        string retval = "";
        try
        {
            if (pMsgID == 1)
            {
                retval = mERROR_MESSAGE_SAVE;
            }

            if (pMsgID == 2)
            {
                retval = mERROR_MESSAGE_UPDATE;
            }

            if (pMsgID == 3)
            {
                retval = mERROR_MESSAGE_DELETE;
            }

            if (pMsgID == 4)
            {
                retval = mERROR_MESSAGE_DUPLICATECHECK;
            }

            if (pMsgID == 5)
            {
                retval = mERROR_MESSAGE_TRANSACTION;
            }

            if (pMsgID == 7)
            {
                retval = mERROR_MESSAGE_dependency;
            }

            if (pMsgID == 6)
            {
                retval = mERROR_MESSAGE_DUPLICATECHECK;
            }
            if (pMsgID == 8)
            {
                retval = mERROR_MESSAGE_CONFIRM;
            }
            if (pMsgID == 9)
            {
                retval = mERROR_MESSAGE_DEACTIVE;
            }
            if (pMsgID == 10)
            {
                retval = mERROR_MESSAGE_DUPLICATECHECK;
            }
            if (pMsgID == 11)
            {
                retval = mERROR_MESSAGE_Mobile;
            }
            if (pMsgID == 12)
            {
                retval = mERROR_MESSAGE_Email;
            }
            if (pMsgID == 37)
            {
                retval = mERROR_Message_InvalidUser;
            }
            //if (pMsgID == 13)
            //{
            //    retval = mERROR_MESSAGE_FORWARD;
            //}
            //if (pMsgID == 14)
            //{
            //    retval = mERROR_MESSAGE_REJECT;
            //}
            //if (pMsgID == 15)
            //{
            //    retval = mERROR_MESSAGE_RFID;
            //}
            //if (pMsgID == 16)
            //{
            //    retval = mERROR_MESSAGE_VERIFY;
            //}
            //if (pMsgID == 17)
            //{
            //    retval = mERROR_MESSAGE_REJECTED;
            //}
            //if (pMsgID == 18)
            //{
            //    retval = mERROR_MESSAGE_EDIT_ENABEL;
            //}
            //if (pMsgID == 19)
            //{
            //    retval = mERROR_MESSAGE_CONFIRM_STS;
            //}
            //if (pMsgID == 20)
            //{
            //    retval = mERROR_MESSAGE_REJECT_STS;
            //}
            //if (pMsgID == 21)
            //{
            //    retval = mERROR_MESSAGE_CANCEL;
            //}
            //if (pMsgID == 22)
            //{
            //    retval = mERROR_MESSAGE_PLOT_ASSIGN;
            //}
            //if (pMsgID == 23)
            //{
            //    retval = mERROR_MESSAGE_PLOT_DEALLOCATE;
            //}
            //if (pMsgID == 24)
            //{
            //    retval = mERROR_MESSAGE_PLOT_EXISTS;
            //}
            //if (pMsgID == 25)
            //{
            //    retval = mERROR_MESSAGE_PORT_PASS_RECV;
            //}
            //if (pMsgID == 26)
            //{
            //    retval = mERROR_MESSAGE_PORT_RR_RECV;
            //}
            //if (pMsgID == 27)
            //{
            //    retval = mERROR_MESSAGE_EXT_PERMIT_EXPIRED;
            //}
            //if (pMsgID == 28)
            //{
            //    retval = mERROR_MESSAGE_EXT_PERMIT_APPLY;
            //}
            //if (pMsgID == 29)
            //{
            //    retval = mERROR_MESSAGE_EPASS_CANCEL;
            //}
            //if (pMsgID == 30)
            //{
            //    retval = mERROR_MESSAGE_REQUESTID;
            //}
            //if (pMsgID == 31)
            //{
            //    retval = mERROR_MESSAGE_TRANSACTIONDATAEXISTS;
            //}
            //if (pMsgID == 32)
            //{
            //    retval = mERROR_MESSAGE_DA_DESPATCHCHECK;
            //}
            //if (pMsgID == 33)
            //{
            //    retval = mERROR_MESSAGE_DA_PREV_DESPATCHCHECK;
            //}
            //if (pMsgID == 34)
            //{
            //    retval = mERROR_MESSAGE_TRANSACTION_ALLOW;
            //}
            //if (pMsgID == 35)
            //{
            //    retval = mERROR_MESSAGE_dependency;
            //}
            //if (pMsgID == 36)
            //{
            //    retval = mERROR_MESSAGE_ACTIVE;
            //}
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return retval;
    }

    #endregion

}
