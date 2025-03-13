using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


  namespace CommonModels
{

    public class PaySearchEntity
    {
        public string Action { get; set; }
        public string fromDate { get; set; }
        public string toDate { get; set; }
        public string vch_Unique_Refno { get; set; }
        public string str_Client_TxnId { get; set; }
        public string str_Gateway_Name { get; set; }
        public int int_Page_Index { get; set; }
        public int int_Page_Size { get; set; }
        public int int_Gateway { get; set; }
        public string strXml { get; set; }
        public int intColType { get; set; }
        public string str_Payment_Mode { get; set; }
    }



    /// <summary>
    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// </summary>
    public class SBIePayDeg
    {
        public string Action { get; set; }
        public string MerchantOrderNo { get; set; }
        public string UniqueRefNo { get; set; }
        public string StudName { get; set; }
        public string SBIePayReferenceID { get; set; }
        public string Status { get; set; }
        public decimal Amount { get; set; }
        public decimal ActualAmount { get; set; }
        public string Currency { get; set; }
        public string Paymode { get; set; }
        public string OtherDetails { get; set; }
        public string Reason { get; set; }
        public string BankCode { get; set; }
        public string BankReferenceNumber { get; set; }
        public string TransactionDate { get; set; }
        public string Country { get; set; }
        public string CIN { get; set; }
    }
    public class PNBJr
    {
        public string Action { get; set; }
        public string OrderId { get; set; }
        public string UniqueRefNo { get; set; }
        public string StudName { get; set; }
        public string PNBReferenceID { get; set; }
        public string MeTransReqType { get; set; }
        public decimal TrnAmt { get; set; }
        public string ResponseCode { get; set; }
        public string RRN { get; set; }
        public string TrnRemarks { get; set; }
        public string TrnCurrency { get; set; }
        public string AddField1 { get; set; }
        public string AddField2 { get; set; }
        public string AddField3 { get; set; }
        public string AddField4 { get; set; }
        public string AddField5 { get; set; }
        public string AddField6 { get; set; }
        public string AddField7 { get; set; }
        public string AddField8 { get; set; }
        public string TransactionDate { get; set; }
        public string AuthZCode { get; set; }
        public string StatusCode { get; set; }


    }
    public class CAFReceiptDEG
    {
        public dynamic VCH_ACTION { get; set; }
        public dynamic VCH_REF_NO { get; set; }
        public dynamic INT_BOARDID { get; set; }
        public dynamic VCH_BOARDNAME { get; set; }
        public dynamic VCH_COUNCILNAME { get; set; }
        public dynamic INT_PASSINGYEAR { get; set; }
        public dynamic VCH_ROLLNO { get; set; }
        public dynamic INT_NOOFCHOICE { get; set; }
        public dynamic VCH_APPLICANTNAME { get; set; }
        public dynamic VCH_MRINDEXNO { get; set; }
        public dynamic FLT_AMOUNT { get; set; }
        public dynamic DTM_CAFRECIVEDATE { get; set; }
        public dynamic BIT_ENTRYSTATUS { get; set; }
        public dynamic VCH_MERGEDINDEXNO { get; set; }
        public dynamic INT_MERGEDSTATUS { get; set; }
        public dynamic VCH_CREATEDBY { get; set; }
        public dynamic VCH_UPDATEDBY { get; set; }
        public dynamic VCH_INDEXNO { get; set; }
        public dynamic VCH_MOBILE { get; set; }
        public dynamic INT_VALID { get; set; }
        public dynamic VCH_EXAMTYPE { get; set; }
        public dynamic VCH_CORPINCODE { get; set; }
        public dynamic VCH_CORPHONENO { get; set; }
        public dynamic VCH_CORMOBILENO { get; set; }
        public dynamic VCH_EMAILID { get; set; }
        public dynamic INT_TOTALOPTION { get; set; }
        public dynamic INT_GENDER { get; set; }
        public dynamic VCH_RELIGION { get; set; }
        public dynamic DTM_DOB { get; set; }
        public dynamic INT_CATEGORYID { get; set; }
        public dynamic BIT_PHOH { get; set; }
        public dynamic BIT_NCC_A { get; set; }
        public dynamic BIT_NCC_B { get; set; }
        public dynamic BIT_NCC_C { get; set; }
        public dynamic BIT_NSS_U { get; set; }
        public dynamic BIT_NSS_S { get; set; }
        public dynamic BIT_NSS_N { get; set; }
        public dynamic BIT_NSS_IN { get; set; }
        public dynamic BIT_SCOUT_PR { get; set; }
        public dynamic BIT_SCOUT_RP { get; set; }
        public dynamic BIT_ROVER_PR { get; set; }
        public dynamic BIT_ROVER_RP { get; set; }
        public dynamic BIT_SPORTS_S { get; set; }
        public dynamic BIT_SPORTS_N { get; set; }
        public dynamic BIT_SPORTS_IN { get; set; }
        public dynamic BIT_OSA { get; set; }
        public dynamic BIT_OLNS { get; set; }
        public dynamic INT_PREVSTREMID { get; set; }
        public dynamic VCH_NATIONALITY { get; set; }
        public dynamic INT_MIL { get; set; }
        public dynamic INT_ENGLISH { get; set; }
        public dynamic INT_CHEMISTRY { get; set; }
        public dynamic INT_BIOLOGY { get; set; }
        public dynamic INT_MARKSL { get; set; }
        public dynamic INT_MARKMATH { get; set; }
        public dynamic INT_MATHEMATICS { get; set; }
        public dynamic INT_MARKSCIENCE { get; set; }
        public dynamic INT_MARKSOCIALSTUDIES { get; set; }
        public dynamic INT_TOTALMARK { get; set; }
        public dynamic INT_MAXIMUMMARK { get; set; }
        public dynamic INT_MARKVERIFICATION { get; set; }
        public dynamic BIT_ESM { get; set; }
        public dynamic BIT_SDP { get; set; }
        public dynamic VCH_IMAGENAME { get; set; }
        public dynamic VCH_GRADE { get; set; }
        public dynamic CORSTATE { get; set; }
        public dynamic BIT_COM { get; set; }
        public dynamic INT_PERSTATEID { get; set; }
        public dynamic VCH_UNIQUEREFNO { get; set; }
        public dynamic PER_STATE { get; set; }
        public dynamic PER_DIST { get; set; }
        public dynamic PER_BLOCK { get; set; }
        public dynamic VCH_PERHOUSENO { get; set; }
        public dynamic VCH_PERVILLAGENAME { get; set; }
        public dynamic VCH_PERPOSTOFFICE { get; set; }
        public dynamic VCH_PERPOLICESTATION { get; set; }
        public dynamic VCH_PERPINCODE { get; set; }
        public dynamic VCH_PERPHONENO { get; set; }
        public dynamic VCH_PERMOBILENO { get; set; }
        public dynamic VCH_LASTINSTITUTE { get; set; }
        public dynamic VCH_LASTINST_LOCATION { get; set; }
        public dynamic INT_LASTINST_DISTRICT { get; set; }
        public dynamic VCH_LASTINST_DISTRICT { get; set; }
        public dynamic INT_YEAROFJOINING { get; set; }
        public dynamic INT_YEAROFLEAVING { get; set; }
        public dynamic VCH_LASTEDUDIST { get; set; }
        public dynamic VCH_OSASTATE { get; set; }
        public dynamic VCH_OLNSSTATE { get; set; }
        public dynamic INT_APPLIEDCOLLEGEID { get; set; }
        public dynamic VCH_APPLIEDCOLLEGECODE { get; set; }
        public dynamic VCH_MODEOFSUBMISSION { get; set; }
        public dynamic BIT_APPLICATIONSTATUS { get; set; }
        public dynamic INT_APPLIEDYEAR { get; set; }
        public dynamic VCH_GROUPNAME { get; set; }
        public dynamic INT_YEAROFPASSING { get; set; }

        public dynamic VCH_FATHERNAME { get; set; }
        public dynamic VCH_MOTHERNAME { get; set; }
        public dynamic VCH_CORHOUSENO { get; set; }
        public dynamic VCH_BLOCKNAME { get; set; }
        public dynamic VCH_DISTRICTNAME { get; set; }
        public dynamic VCH_CORSTATE { get; set; }
        public dynamic BIT_COMPARTMENTAL { get; set; }
        public dynamic INT_BLOCKID { get; set; }

        public dynamic INT_COLLEGEID { get; set; }
        public dynamic VCH_COLLEGENAME { get; set; }
        public dynamic VCH_CORVILLAGENAME { get; set; }
        public dynamic VCH_CORPOSTOFFICE { get; set; }
        public dynamic VCH_CORPOLICESTATION { get; set; }
        public dynamic VCH_STATENAME { get; set; }
        public dynamic VCH_GENDER { get; set; }

        public dynamic INT_STREAMTYPE { get; set; }
        public dynamic INT_STREAMID { get; set; }
        public dynamic VCH_STREAMNAME { get; set; }
        public dynamic INT_COMPULSORY { get; set; }
        public dynamic VCH_COMPULSORY { get; set; }
        public dynamic ELECTIVE { get; set; }
        public dynamic ELECTIVE2 { get; set; }
        public dynamic ELECTIVE3 { get; set; }
        public dynamic FELECTIVE { get; set; }
        public dynamic FELECTIVE2 { get; set; }
        public dynamic FELECTIVE3 { get; set; }
        public dynamic OPTIONFORHOSTEL { get; set; }
        public dynamic INT_OPTION_NO { get; set; }
        public dynamic INT_OPTIONID { get; set; }
        public dynamic INT_DISTRICTID { get; set; }

        public dynamic VCHDOCNAME { get; set; }
        public dynamic VCHBARODE { get; set; }
        public dynamic VCHCREATEDBY { get; set; }
        public dynamic VCHNAME { get; set; }

        public dynamic VCHDEO { get; set; }
        public dynamic VCHDEOMOB { get; set; }
        public dynamic VCHPRINCIPAL { get; set; }
        public dynamic VCHPRINCIPALMOB { get; set; }

        //Caf Cancel
        public dynamic INT_REMOVETYPE { get; set; }
        public dynamic VCH_REMARKS { get; set; }
        public dynamic MRISTATUS { get; set; }
        public dynamic CANCELSTATUS { get; set; }

        public dynamic INT_VTMID { get; set; }
        public dynamic VCH_VTM { get; set; }
        public dynamic INT_APPLICANTID { get; set; }
        public dynamic VCH_MOTHERTONGUE { get; set; }
        public dynamic VCH_AADHARNO { get; set; }
        public dynamic INT_CORSTATEID { get; set; }
        public dynamic INT_CORDISTID { get; set; }

        public dynamic INT_CORBLOCKID { get; set; }
        public dynamic VCHIMAGENAME { get; set; }
        public dynamic VCH_FATHERSOCCUPATION { get; set; }
        public dynamic VCH_MOTHERSOCCUPATION { get; set; }
        public dynamic INT_AINCOMEID { get; set; }
        public dynamic INT_ACCNO { get; set; }
        public dynamic VCH_IFSCNO { get; set; }
        public dynamic VCH_MICRCODE { get; set; }
        public dynamic VCH_BANKNAME { get; set; }
        public dynamic VCH_BRANCHNAME { get; set; }
        public dynamic INT_OSASTATEID { get; set; }

        public dynamic INT_OLNSSTATEID { get; set; }
        public dynamic INT_BLOODGROUPID { get; set; }
        public dynamic INT_RELIGIONID { get; set; }
        public dynamic INT_MARKVERFICATION { get; set; }
        public dynamic VCHPASSWORD { get; set; }

        public dynamic VCH_SUBJECT { get; set; }
        public dynamic INT_FAILMARK { get; set; }
        public dynamic INT_PASSMARK { get; set; }

        public dynamic INT_PERDISTID { get; set; }
        public dynamic INT_PERBLOCKID { get; set; }

        public dynamic NOOFUPDATE { get; set; }
        public dynamic DTM_UPDATEDTIME { get; set; }
        public dynamic VCH_VCOLLEGEID { get; set; }
        public dynamic VCH_AINCOME { get; set; }

        public dynamic DTM_UPDATEDON { get; set; }
        public dynamic FROMDATE { get; set; }
        public dynamic TODATE { get; set; }
        public dynamic VCH_TYPE { get; set; }
        public dynamic SLNO { get; set; }

        public dynamic INT_MIL1 { get; set; }
        public dynamic INT_ENGLISH1 { get; set; }
        public dynamic INT_MATHEMATICS1 { get; set; }
        public dynamic INT_CHEMISTRY1 { get; set; }
        public dynamic INT_BIOLOGY1 { get; set; }
        public dynamic INT_MARKSL1 { get; set; }
        public dynamic INT_MARKMATH1 { get; set; }
        public dynamic INT_MARKSCIENCE1 { get; set; }
        public dynamic INT_MARKSOCIALSTUDIES1 { get; set; }
        public dynamic INT_TOTALMARK1 { get; set; }
        public dynamic INT_MAXIMUMMARK1 { get; set; }
        public dynamic INT_CATEGORYID1 { get; set; }
        public dynamic BIT_PHOH1 { get; set; }
        public dynamic BIT_ESM1 { get; set; }
        public dynamic BIT_COM1 { get; set; }
        public dynamic BIT_SDP1 { get; set; }
        public dynamic BIT_OSA1 { get; set; }
        public dynamic BIT_OLNS1 { get; set; }
        public dynamic BIT_NCC_A1 { get; set; }
        public dynamic BIT_NCC_B1 { get; set; }
        public dynamic BIT_NCC_C1 { get; set; }
        public dynamic BIT_NSS_U1 { get; set; }
        public dynamic BIT_NSS_S1 { get; set; }
        public dynamic BIT_NSS_N1 { get; set; }
        public dynamic BIT_NSS_IN1 { get; set; }
        public dynamic BIT_SCOUT_RP1 { get; set; }
        public dynamic BIT_SCOUT_PR1 { get; set; }
        public dynamic BIT_SPORTS_S1 { get; set; }
        public dynamic BIT_ROVER_PR1 { get; set; }
        public dynamic BIT_ROVER_RP1 { get; set; }
        public dynamic BIT_SPORTS_N1 { get; set; }
        public dynamic BIT_SPORTS_IN1 { get; set; }
        public dynamic DCM_TOTALAMOUNT { get; set; }
        public dynamic INT_SUBJECTID { get; set; }
        public dynamic VCH_SUBJECTNAME { get; set; }
        public dynamic INT_HONOURS1 { get; set; }
        public dynamic INT_HONOURS2 { get; set; }
        public dynamic INT_HONOURS3 { get; set; }
        public dynamic INT_COLLEGETYPE { get; set; }
    }
    public class SahajDeg
    {
        public string Action { get; set; }
        public Int64 intPaymentId { get; set; }
        public string Uniquerefid { get; set; }
        public string StudName { get; set; }
        public string StudId { get; set; }
        public decimal AppFee { get; set; }
        public string service_provider_id { get; set; }
        public string AppType { get; set; }
        public Int64 sahaj_txn_id { get; set; }
        public string status { get; set; }
    }
    public class CafPayment
    {
        public string Action { get; set; }
        public int intPaymentId { get; set; }
        public string pgRespCode { get; set; }
        public string PGTxnNo { get; set; }
        public string issuerRefNo { get; set; }
        public string authIdCode { get; set; }
        public decimal amount { get; set; }
        public string clientTxnId { get; set; }
        public string firstName { get; set; }
        public string payMode { get; set; }
        public string email { get; set; }
        public string mobileNo { get; set; }
        public string spRespCode { get; set; }
        public string cid { get; set; }
        public string bid { get; set; }
        public string clientCode { get; set; }
        public string payeeProfile { get; set; }
        public string transDate { get; set; }
        public string spRespStatus { get; set; }
        public string challanNo { get; set; }
        public string reMsg { get; set; }
        public decimal orgTxnAmount { get; set; }
        public string programId { get; set; }
        public int int_ApplicantID { get; set; }
        public string vch_UniqueRefNo { get; set; }
        public int intPaymentInt { get; set; }
        public int intGatewayType { get; set; }
    }

    public class AxisJrEntity
    {
        public string Action { get; set; }
        public string OrderId { get; set; }
        public string UniqueRefNo { get; set; }
        public string StudName { get; set; }
        public string AxisReferenceID { get; set; }
        public string Status { get; set; }
        public string StatusCode { get; set; }
        public decimal TrnAmt { get; set; }
        public string GatewayVersion { get; set; }
        public string GatewayType { get; set; }
        public string CustomerRefNo { get; set; }
        public string strRE1 { get; set; }
        public string strRE2 { get; set; }
        public string strRE3 { get; set; }
        public string strRE5 { get; set; }

        public string strRE4 { get; set; }
        public string TrnRemarks { get; set; }
        public string TransactionDate { get; set; }
        public string TrnCurrency { get; set; }
        public string PlainText { get; set; }
        public string EncryptValue { get; set; }
        public string PaymentModeDesc { get; set; }
        public string BankTranId { get; set; }
        public string PaymentMode { get; set; }
        public string resultData { get; set; }
    }
    public class HDFCEntityJr
    {
        public string Action { get; set; }
        public string OrderId { get; set; }
        public string UniqueRefNo { get; set; }
        public string StudName { get; set; }
        public string HDFCReferenceID { get; set; }
        public string Status { get; set; }
        public string PlainText { get; set; }
        public string EncryptValue { get; set; }
        public string merchant_param1 { get; set; }
        public string resultData { get; set; }
        public decimal TrnAmt { get; set; }
        public string TransactionDate { get; set; }
        public string TID { get; set; }

        public string strFailureMsg { get; set; }
        public string bank_ref_no { get; set; }
        public string payment_mode { get; set; }
        public string billing_name { get; set; }

    }
    public class ChkStatusDeg
    {
        public string Action { get; set; }
        public string vch_CorMobileNo { get; set; }
        public string vch_EMailID { get; set; }
        public int int_MobStatus { get; set; }
        public int int_EmailStatus { get; set; }
    }
    public class CAFEntity_Deg
    {//Caf master
        public int int_StreamID { get; set; }
        public string vch_StreamName { get; set; }
        public int int_CollegeID { get; set; }
        public string vch_CollegeName { get; set; }
        public int int_strength { get; set; }
        //board mark
        public string NAME { get; set; }
        public int? MIL { get; set; }
        public int? CHEMISTRY { get; set; }
        public int? BIOLOGY { get; set; }
        public int? ENGLISH { get; set; }
        public int? MATH { get; set; }
        public int? SCIENCE { get; set; }
        public int? SOCAILSTUDIES { get; set; }
        public int? TOT { get; set; }
        public dynamic MAXTOTAL { get; set; }
        public string FNAME { get; set; }
        public string MNAME { get; set; }
        public dynamic CAT { get; set; }
        public dynamic GENDER { get; set; }
        public dynamic SCHOOL { get; set; }
        public dynamic DISTRICT { get; set; }
        public string DOB { get; set; }
        public dynamic GRADE { get; set; }

        public int Type { get; set; }
        public string QualificationType { get; set; }
        public int Cid { get; set; }

        public int CollegeID { get; set; }
        public string Action { get; set; }
        public int CollegeType { get; set; }
        public int DisabilityType { get; set; }
        public string vchRollNo { get; set; }
        //Reason
        public string Dname { get; set; }
        public string pStrName { get; set; }
        public int IntID { get; set; }
        public int pIntID { get; set; }
        public string pAppName { get; set; }
        public string pEnglish { get; set; }
        public string pMath { get; set; }
        public string pScience { get; set; }
        public string pSocialStudy { get; set; }
        public string pTotal { get; set; }
        public string pMaxTotal { get; set; }
        public string pGrade { get; set; }
        public string pFname { get; set; }
        public string pMname { get; set; }
        public string pPh { get; set; }
        public int pCategory { get; set; }
        public string pReligion { get; set; }
        public string pDOB { get; set; }
        public int pSex { get; set; }
        public string pMotherToung { get; set; }
        public string pMob { get; set; }
        public string pAdharNo { get; set; }
        public int pSid { get; set; }
        public int pDid { get; set; }
        public int pBid { get; set; }
        public string pDname { get; set; }
        public string pBname { get; set; }
        public string pAddress { get; set; }
        public string pPin { get; set; }
        public string pPhno { get; set; }
        public string pEmail { get; set; }
        public string pBoard { get; set; }
        public int pYop { get; set; }
        public string pImage { get; set; }
        public int pColID { get; set; }
        public string pColName { get; set; }
        public int pColDist { get; set; }
        public string pDOA { get; set; }


        public string AppName { get; set; }
        public string English { get; set; }
        public string Math { get; set; }
        public string Science { get; set; }
        public string SocialStudy { get; set; }
        public string Total { get; set; }
        public string MaxTotal { get; set; }
        public string Fname { get; set; }
        public string Mname { get; set; }
        public string Grade { get; set; }
        public string Category { get; set; }
        public string Sex { get; set; }
        //public string DOB { get; set; }

        public string StrName { get; set; }


        public double Totalmark { get; set; }
        public string SchoolName { get; set; }
        public int QualificationID { get; set; }
        public string strPassword { get; set; }
        public string UID { get; set; }
        public int Sid { get; set; }
        public int int_ApplicantID { get; set; }

        public string vchPassword { get; set; }
        public int CollStatus { get; set; }
        public string strId { get; set; }
        public int int_MarkSL { get; set; }
        public int int_MarkMath { get; set; }
        public int int_MarkScience { get; set; }
        public int int_MarkSocialStudies { get; set; }
        public int int_TotalMark { get; set; }
        public int int_MaximumMark { get; set; }
        public string vch_BoardName { get; set; }
        public string vch_CouncilName { get; set; }
        public string vch_ExamType { get; set; }
        public int int_YearOfPassing { get; set; }
        public string vch_RollNo { get; set; }
        public string vch_RollCode { get; set; }
        public string vch_ApplicantName { get; set; }
        public string vch_FatherName { get; set; }
        public string vch_MotherName { get; set; }
        public string vch_CorHouseNo { get; set; }
        public string vch_BlockName { get; set; }
        public string vch_DistrictName { get; set; }
        public string vch_CorPinCode { get; set; }
        public string vch_CorPhoneNo { get; set; }
        public string vch_CorMobileNo { get; set; }
        public string vch_EMailID { get; set; }
        public string vch_GroupName { get; set; }
        public string vch_Religion { get; set; }
        public int int_Gender { get; set; }
        public int int_CategoryId { get; set; }
        public string vch_StateName { get; set; }
        public string OLNSState { get; set; }
        public string vchImageName { get; set; }
        public string vch_UniqueRefNo { get; set; }
        public string OSAState { get; set; }
        public DateTime dtm_DOB { get; set; }
        public bool bit_PHOH { get; set; }

        public bool bit_SDP { get; set; }
        public bool bit_CoM { get; set; }
        public bool bit_NCC_A { get; set; }
        public bool bit_NCC_B { get; set; }
        public bool bit_NCC_C { get; set; }
        public bool bit_Scout_PR { get; set; }
        public bool bit_Scout_RP { get; set; }
        public bool bit_Sports_S { get; set; }
        public bool bit_Sports_N { get; set; }
        public bool bit_Sports_IN { get; set; }
        public bool bit_OSA { get; set; }
        public bool bit_OLNS { get; set; }
        public bool bit_Compartmental { get; set; }
        public bool bit_ESM { get; set; }


        public bool bit_NSS_U { get; set; }
        public bool bit_NSS_S { get; set; }
        public bool bit_NSS_N { get; set; }
        public bool bit_NSS_IN { get; set; }




        public int int_CourseID { get; set; }
        public int int_SubjectID { get; set; }

        public string vch_SubjectName { get; set; }
        public string AIncome { get; set; }
        public string LIDistName { get; set; }
        public string AcNo { get; set; }
        public string IFSC { get; set; }
        public string MICR { get; set; }
        public string BrName { get; set; }
        public string vch_CorVillageName { get; set; }
        public string vch_CorPostOffice { get; set; }
        public int int_blockid { get; set; }
        public string vch_CorPoliceStation { get; set; }
        public string name { get; set; }

        public string CorState { get; set; }
        public string int_PerStateID { get; set; }

        public string Per_State { get; set; }
        public string Per_Dist { get; set; }
        public string Per_Block { get; set; }
        public string vch_PerHouseNo { get; set; }
        public string vch_PerVillageName { get; set; }
        public string vch_PerPostOffice { get; set; }
        public string vch_PerPoliceStation { get; set; }
        public string vch_PerPinCode { get; set; }
        public string vch_PerPhoneNo { get; set; }
        public string vch_PerMobileNo { get; set; }
        public string vch_LastInstitute { get; set; }
        public string vch_LastInst_Location { get; set; }
        public string LastInst_District { get; set; }
        public int int_YearOfJoining { get; set; }
        public int int_YearOfLeaving { get; set; }
        public string Gender { get; set; }

        public int int_MarkVerfication { get; set; }
        public string vch_OrderNo { get; set; }
        public int int_TransferYear { get; set; }
        public string vch_fathersOccupation { get; set; }
        public string vch_mothersOccupation { get; set; }
        public string int_AIncomeID { get; set; }
        public string int_Accno { get; set; }
        public string vch_IFSCno { get; set; }
        public string vch_MICRcode { get; set; }
        public string vch_BankName { get; set; }
        public string vch_BrName { get; set; }
        public string vch_MotherTongue { get; set; }
        public string vch_Nationality { get; set; }

        public string compulsory { get; set; }
        public string Electives { get; set; }
        public string fElective { get; set; }
        public string int_OptionForHostel { get; set; }
        public string int_Option_No { get; set; }
        public string vch_AdharNo { get; set; }

        public string vchBSEBtrnId { get; set; }
        public string vchVendortrnId { get; set; }
        public string vchStatus { get; set; }
        public string strPayGateway { get; set; }
        public DateTime dtmTranDate { get; set; }
        public decimal decAppFee { get; set; }
        #region "member Variable"

        //public string mBarcode { get; set; }
        private int mID;
        private string mName;
        private string mstrSName;
        private string mstrPhoneNo;
        private string mstrFaxNo;
        private string MAdharNo;
        private string mbgen;
        private string mbsc;
        private string mbst;
        private string mggen;
        private string mgsc;
        private string mgst;
        private string mdName;
        private string mActivity;
        private string mDescription;
        private string mRemark;
        private string mIDs;
        private int mUserId;
        private int mintStateID;
        private string mCreatedBy;
        private System.DateTime mCreatedOn;
        private System.DateTime mFromDate;
        private System.DateTime mToDate;
        private double mPercentage;
        private string mAction;
        private int mCollege;
        private int mStreamID;
        private int intPrevStremID;
        private string mCollegetype;
        private string mCollegeemail;
        private int mCollegefax;
        private int mCollegephno;
        private string mCollegecode;
        //For Admission Rule
        private string mstrReserveName;
        private string mstrReservShortName;
        private int mintReserveID;
        private int mintSelectionType;

        //for adding conduct
        private string mclgName;
        private string mclgCode;
        private string mAppName;
        private string mFName;
        private string mstrName;
        private string mSession;
        private string mcondate;
        private string mclcdate;
        //for Adding LSF
        private string mlName1;
        private string mlAge1;
        private string mlHno1;
        private string mlVill1;
        private string mlDist1;
        private string mlBlock1;
        private string mlPO1;
        private string mlPS1;
        private string mlPin1;
        private string mlProf1;
        private string mlName2;
        private string mlAge2;
        private string mlHno2;
        private string mlVill2;
        private string mlDist2;
        private string mlBlock2;
        private string mlPO2;
        private string mlPS2;
        private string mlPin2;
        private string mlProf2;
        //for adding subject due
        private int mSub1Id;
        private int mSub2Id;
        private int mSub3Id;
        private int mSub4Id;
        private string mLibrary;
        private string mNCC;
        private string mNSS;
        private string mSG;
        private string mSports;
        private string mAccount;
        private int mSub1Due;
        private int mSub2Due;
        private int mSub3Due;
        private int mSub4Due;
        private int mSub5Due;
        private int mSub6Due;
        private int mSub7Due;
        private int mSub8Due;
        private int mSub9Due;
        private int mSub10Due;
        private int mSub1Fine;
        private int mSub2Fine;
        private int mSub3Fine;
        private int mSub4Fine;
        private int mSub5Fine;
        private int mSub6Fine;
        private int mSub7Fine;
        private int mSub8Fine;
        private int mSub9Fine;

        private int mSub10Fine;
        //ADD CAF DATA (SAMS-2010)
        private int _mintYOP;
        private int _mintTotOpt;
        private int _intOSAStateID;
        private int _intOLNSStateID;
        private string _strGuardianName;
        private string _strLastInstDist;
        //===================================
        //Private mBoardID As Integer
        //Private mPassingYear As Integer
        //Private mRollNo As String
        //Private mNoOfChoice As Integer
        //Private mApplicantName As String
        //Private mMRIndexNo As String
        //Private mAmount As Double
        private string mMergedIndexNo;

        private string mExamType;
        //'New added from DHE website   

        private string mIPAddress;
        private int mTransferYear;
        private string mOrderNo;
        private string mCollegeFeesType;
        private int mCollId;
        private int mstreId;
        private int mSubId;
        private int mintYear;
        private string mGrade;

        //For Income Details
        private string mFatherOccupation;
        private string mMotherOccupation;
        private int mAnnualIncomeI;
        //End for Income Details
        private int intPHPercentage;
        private int intSportsLevel;
        private int intspecialCommunity;
        private string mHighestQualification;

        private string strImcType;
        private string streamtype;








        #region "CAF"
        private int mReceiveID;
        private int mBoardId;
        private int mPassingYear;
        private string mRollNo;
        private int mNoOfChoice;
        private string mApplicantName;
        private string mMRIndexNo;
        private double mAmount;

        private int mApplicantid;
        private bool mCompartmental;
        private string mFatherName;
        private string mMotherName;
        private string mCorHouseNo;
        private string mCorVillageName;
        private string mCorPO;
        private int mCorBlockId;
        private string mCorPS;
        private int mCorDistId;
        private int mCorStateId;
        private string mCorPinCode;
        private string mCorPhNo;
        private string mCorMobileNo;
        private string mEmailId;
        private int mAltMobileNo;
        private string mPerHouseNo;
        private string mPerVillageName;
        private string mPerPO;
        private int mPerBlockId;
        private string mPerPS;
        private int mPerDistId;
        private int mPerStateId;
        private string mPerPinCode;
        private string mPerPhNo;
        private string mPerMobileNo;
        private int mBloodGrId;
        private int mGender;
        private int mReligionId;
        private string mDOB;
        private int mCategoryId;
        private bool mPHOH;
        private bool mESM;
        private bool mSDP;
        private bool mCoM;
        private bool mNCCA;
        private bool mNCCC;
        private bool mScoutPR;
        private bool mScoutRP;
        private bool mSportsS;
        private bool mSportsN;
        private bool mSportsIN;
        private bool mOSA;
        private bool mOLNS;
        private bool mEmployed;
        private string mNationality;
        private string mMotherTongue;
        private string mFathersOccup;
        private string mMothersOccup;
        private double mAnnualIncome;
        private int mMarkFL;
        private int mMarkSL;
        private int mMarkTL;
        private int mMarkMath;
        private int mMarkScience;
        private int mMarkSocialStudies;

        private int mMaxMark;
        private string mLastInst;
        private string mLastInstLoc;
        private int mLastInstState;
        private int mLastInstDist;
        private int mYearOfJoining;
        private int mYearOfLeaving;
        private bool mDetained;
        private bool mDiscontinued;
        private int mAppliedCollId;
        private string mAppliedCollCode;
        private string mSubmissionMode;

        private int mApplicationStatus;
        private int mCompartmentalId;
        private string mSubject;
        private string mFailMark;

        private string mPassMark;
        private int mCompulsoryId;
        private int mElective1;
        private int mElective2;
        private int mElective3;
        private int m4thElective1;
        private int m4thElective2;
        private int m4thElective3;
        private int mHostelOption;
        private string _strCollegeIDS;
        private string _strStreamIDS;
        private string _strCompulsory;
        private string _strELE1;
        private string _strELE2;
        private string _strELE3;
        private string _strFELE1;
        private string _strFELE2;
        private string _strFELE3;
        private string _strLiveOpt;
        private string _strSubject;
        private string _strFMark;
        private string _strPMark;
        private string _strPassword;
        private string _strImageName;
        private string _strUID;
        private bool _bitImageStatus;
        private int mintMarkVeriifcation;
        //'Added on 06-April-2010 for Degree CAF
        private bool mNssU;
        private bool mNssS;
        private bool mNssN;
        #endregion
        private bool mNssIN;
        #region "Configuration Master"
        #region "Tag To College"
        private int mStrengthId;
        private int mStrengthTransId;
        private int mStreamStrength;

        private string mSubStrength;
        private string mStream;
        private string mSCMark;
        private string mSTMark;
        #endregion
        private string mGenMark;
        #endregion

        #endregion
        private int mHostelOption1;
        public int intOLNSStateID
        {
            get { return _intOLNSStateID; }
            set { _intOLNSStateID = value; }
        }
        public int intOSAStateID
        {
            get { return _intOSAStateID; }
            set { _intOSAStateID = value; }
        }


        public string strImageName
        {
            get { return _strImageName; }
            set { _strImageName = value; }
        }
        public bool bitImageStatus
        {
            get { return _bitImageStatus; }
            set { _bitImageStatus = value; }
        }

        public string strPMark
        {
            get { return _strPMark; }
            set { _strPMark = value; }
        }
        public string strFMark
        {
            get { return _strFMark; }
            set { _strFMark = value; }
        }
        public string strSubject
        {
            get { return _strSubject; }
            set { _strSubject = value; }
        }
        public string strLiveOpt
        {
            get { return _strLiveOpt; }
            set { _strLiveOpt = value; }
        }
        public string strFELE3
        {
            get { return _strFELE3; }
            set { _strFELE3 = value; }
        }
        public string strFELE2
        {
            get { return _strFELE2; }
            set { _strFELE2 = value; }
        }
        public string strFELE1
        {
            get { return _strFELE1; }
            set { _strFELE1 = value; }
        }
        public string strELE3
        {
            get { return _strELE3; }
            set { _strELE3 = value; }
        }
        public string strELE2
        {
            get { return _strELE2; }
            set { _strELE2 = value; }
        }
        public string strELE1
        {
            get { return _strELE1; }
            set { _strELE1 = value; }
        }
        public string strCompulsory
        {
            get { return _strCompulsory; }
            set { _strCompulsory = value; }
        }
        public string strStreamIDS
        {
            get { return _strStreamIDS; }
            set { _strStreamIDS = value; }
        }
        public string strCollegeIDS
        {
            get { return _strCollegeIDS; }
            set { _strCollegeIDS = value; }
        }
        public string strLastInstDist
        {
            get { return _strLastInstDist; }
            set { _strLastInstDist = value; }
        }
        public string strGuardianName
        {
            get { return _strGuardianName; }
            set { _strGuardianName = value; }
        }
        public int pintTotOpt
        {
            get { return _mintTotOpt; }
            set { _mintTotOpt = value; }
        }
        public int pintYOP
        {
            get { return _mintYOP; }
            set { _mintYOP = value; }
        }

        public int pintSelectionType
        {
            get { return mintSelectionType; }
            set { mintSelectionType = value; }
        }
        public string pbgen
        {
            get { return mbgen; }
            set { mbgen = value; }
        }
        public string pbsc
        {
            get { return mbsc; }
            set { mbsc = value; }
        }
        public string pbst
        {
            get { return mbst; }
            set { mbst = value; }
        }
        public string pggen
        {
            get { return mggen; }
            set { mggen = value; }
        }
        public string pgsc
        {
            get { return mgsc; }
            set { mgsc = value; }
        }
        public string pgst
        {
            get { return mgst; }
            set { mgst = value; }
        }
        public string pActivity
        {
            get { return mActivity; }
            set { mActivity = value; }
        }
        public string pCollegecode
        {
            get { return mCollegecode; }
            set { mCollegecode = value; }
        }
        public int pintStateID
        {
            get { return mintStateID; }
            set { mintStateID = value; }
        }
        public string pstrFaxNo
        {
            get { return mstrFaxNo; }
            set { mstrFaxNo = value; }
        }
        public string pstrPhoneNo
        {
            get { return mstrPhoneNo; }
            set { mstrPhoneNo = value; }
        }
        public int Collegephno
        {

            get { return mCollegephno; }

            set { mCollegephno = value; }
        }
        public string Collegeemail
        {

            get { return mCollegeemail; }

            set { mCollegeemail = value; }
        }
        public int Collegefax
        {

            get { return mCollegefax; }

            set { mCollegefax = value; }
        }
        public int Collegetype
        {
            get { return Convert.ToInt32(mCollegetype); }
            set { mCollegetype = value.ToString(); }
        }
        public int ID
        {
            get { return mID; }
            set { mID = value; }
        }
        public string Name
        {
            get { return mName; }
            set { mName = value; }
        }
        public string DistrictName
        {
            get { return mdName; }
            set { mdName = value; }
        }
        public string Description
        {
            get { return mDescription; }
            set { mDescription = value; }
        }
        public string Remark
        {
            get { return mRemark; }
            set { mRemark = value; }
        }
        public string IDs
        {
            get { return mIDs; }
            set { mIDs = value; }
        }
        public int UserId
        {
            get { return mUserId; }
            set { mUserId = value; }
        }
        public string CreatedBy
        {
            get { return mCreatedBy; }
            set { mCreatedBy = value; }
        }
        public System.DateTime CreatedOn
        {
            get { return mCreatedOn; }
            set { mCreatedOn = value; }
        }
        public System.DateTime FromDate
        {
            get { return mFromDate; }
            set { mFromDate = value; }
        }
        public System.DateTime ToDate
        {
            get { return mToDate; }
            set { mToDate = value; }
        }
        public double Percentage
        {
            get { return mPercentage; }
            set { mPercentage = value; }
        }

        public int int_PrevStremID
        {
            get { return intPrevStremID; }
            set { intPrevStremID = value; }
        }

        public int StreamID
        {
            get { return mStreamID; }
            set { mStreamID = value; }
        }
        public string AdharNo
        {
            get { return MAdharNo; }
            set { MAdharNo = value; }
        }


        #region "CAF"
        public int ReceiveID
        {
            get { return mReceiveID; }
            set { mReceiveID = value; }
        }

        public int BoardId
        {
            get { return mBoardId; }
            set { mBoardId = value; }
        }

        public int PassingYear
        {
            get { return mPassingYear; }
            set { mPassingYear = value; }
        }

        public string RollNo
        {
            get { return mRollNo; }
            set { mRollNo = value; }
        }

        public int NoOfChoice
        {
            get { return mNoOfChoice; }
            set { mNoOfChoice = value; }
        }

        public string ApplicantName
        {
            get { return mApplicantName; }
            set { mApplicantName = value; }
        }

        public string MRIndexNo
        {
            get { return mMRIndexNo; }
            set { mMRIndexNo = value; }
        }

        public double Amount
        {
            get { return mAmount; }
            set { mAmount = value; }
        }

        public int ApplicantID
        {
            get { return mApplicantid; }
            set { mApplicantid = value; }
        }

        public bool Compartmental
        {
            get { return mCompartmental; }
            set { mCompartmental = value; }
        }

        public string FatherName
        {
            get { return mFatherName; }
            set { mFatherName = value; }
        }

        public string MotherName
        {
            get { return mMotherName; }
            set { mMotherName = value; }
        }

        public string CorHouseNo
        {
            get { return mCorHouseNo; }
            set { mCorHouseNo = value; }
        }

        public string CorVillageName
        {
            get { return mCorVillageName; }
            set { mCorVillageName = value; }
        }

        public string CorPO
        {
            get { return mCorPO; }
            set { mCorPO = value; }
        }

        public int CorBlockId
        {
            get { return mCorBlockId; }
            set { mCorBlockId = value; }
        }

        public string CorPS
        {
            get { return mCorPS; }
            set { mCorPS = value; }
        }

        public int CorDistId
        {
            get { return mCorDistId; }
            set { mCorDistId = value; }
        }

        public int CorStateId
        {
            get { return mCorStateId; }
            set { mCorStateId = value; }
        }

        public string CorPinCode
        {
            get { return mCorPinCode; }
            set { mCorPinCode = value; }
        }

        public string CorPhNo
        {
            get { return mCorPhNo; }
            set { mCorPhNo = value; }
        }

        public string CorMobileNo
        {
            get { return mCorMobileNo; }
            set { mCorMobileNo = value; }
        }

        public string EmailId
        {
            get { return mEmailId; }
            set { mEmailId = value; }
        }

        public string PerHouseNo
        {
            get { return mPerHouseNo; }
            set { mPerHouseNo = value; }
        }

        public string PerVillageName
        {
            get { return mPerVillageName; }
            set { mPerVillageName = value; }
        }

        public string PerPO
        {
            get { return mPerPO; }
            set { mPerPO = value; }
        }

        public int PerBlockId
        {
            get { return mPerBlockId; }
            set { mPerBlockId = value; }
        }


        public string PerPS
        {
            get { return mPerPS; }
            set { mPerPS = value; }
        }

        public int PerDistId
        {
            get { return mPerDistId; }
            set { mPerDistId = value; }
        }

        public int PerStateId
        {
            get { return mPerStateId; }
            set { mPerStateId = value; }
        }

        public string PerPinCode
        {
            get { return mPerPinCode; }
            set { mPerPinCode = value; }
        }

        public string PerPhNo
        {
            get { return mPerPhNo; }
            set { mPerPhNo = value; }
        }

        public string PerMobileNo
        {
            get { return mPerMobileNo; }
            set { mPerMobileNo = value; }
        }

        public int BloodGrId
        {
            get { return mBloodGrId; }
            set { mBloodGrId = value; }
        }

        public int ReligionId
        {
            get { return mReligionId; }
            set { mReligionId = value; }
        }



        public int CategoryId
        {
            get { return mCategoryId; }
            set { mCategoryId = value; }
        }

        public bool PHOH
        {
            get { return mPHOH; }
            set { mPHOH = value; }
        }

        public bool ESM
        {
            get { return mESM; }
            set { mESM = value; }
        }

        public bool SDP
        {
            get { return mSDP; }
            set { mSDP = value; }
        }

        public bool CoM
        {
            get { return mCoM; }
            set { mCoM = value; }
        }

        public bool NCCA
        {
            get { return mNCCA; }
            set { mNCCA = value; }
        }

        public bool NCCC
        {
            get { return mNCCC; }
            set { mNCCC = value; }
        }

        public bool ScoutPR
        {
            get { return mScoutPR; }
            set { mScoutPR = value; }
        }

        public bool ScoutRP
        {
            get { return mScoutRP; }
            set { mScoutRP = value; }
        }

        public bool SportsS
        {
            get { return mSportsS; }
            set { mSportsS = value; }
        }

        public bool SportsN
        {
            get { return mSportsN; }
            set { mSportsN = value; }
        }

        public bool SportsIN
        {
            get { return mSportsIN; }
            set { mSportsIN = value; }
        }

        public bool OSA
        {
            get { return mOSA; }
            set { mOSA = value; }
        }

        public bool OLNS
        {
            get { return mOLNS; }
            set { mOLNS = value; }
        }

        public bool Employed
        {
            get { return mEmployed; }
            set { mEmployed = value; }
        }
        public string Nationality
        {
            get { return mNationality; }
            set { mNationality = value; }
        }

        public string MotherTongue
        {
            get { return mMotherTongue; }
            set { mMotherTongue = value; }
        }

        public string FathersOccup
        {
            get { return mFathersOccup; }
            set { mFathersOccup = value; }
        }

        public string MothersOccup
        {
            get { return mMothersOccup; }
            set { mMothersOccup = value; }
        }

        public double AnnualIncome
        {
            get { return mAnnualIncome; }
            set { mAnnualIncome = value; }
        }

        public int MarkFL
        {
            get { return mMarkFL; }
            set { mMarkFL = value; }
        }

        public int MarkSL
        {
            get { return mMarkSL; }
            set { mMarkSL = value; }
        }

        public int MarkTL
        {
            get { return mMarkTL; }
            set { mMarkTL = value; }
        }

        public int MarkMath
        {
            get { return mMarkMath; }
            set { mMarkMath = value; }
        }

        public int MarkScience
        {
            get { return mMarkScience; }
            set { mMarkScience = value; }
        }

        public int MarkSocialStudies
        {
            get { return mMarkSocialStudies; }
            set { mMarkSocialStudies = value; }
        }

        public int MaxMark
        {
            get { return mMaxMark; }
            set { mMaxMark = value; }
        }

        public string LastInst
        {
            get { return mLastInst; }
            set { mLastInst = value; }
        }

        public string LastInstLoc
        {
            get { return mLastInstLoc; }
            set { mLastInstLoc = value; }
        }

        public int LastInstState
        {
            get { return mLastInstState; }
            set { mLastInstState = value; }
        }

        public int LastInstDist
        {
            get { return mLastInstDist; }
            set { mLastInstDist = value; }
        }

        public int YearOfJoining
        {
            get { return mYearOfJoining; }
            set { mYearOfJoining = value; }
        }

        public int YearOfLeaving
        {
            get { return mYearOfLeaving; }
            set { mYearOfLeaving = value; }
        }

        public bool Detained
        {
            get { return mDetained; }
            set { mDetained = value; }
        }

        public bool Discontinued
        {
            get { return mDiscontinued; }
            set { mDiscontinued = value; }
        }

        public int AppliedCollId
        {
            get { return mAppliedCollId; }
            set { mAppliedCollId = value; }
        }

        public string AppliedCollCode
        {
            get { return mAppliedCollCode; }
            set { mAppliedCollCode = value; }
        }

        public string SubmissionMode
        {
            get { return mSubmissionMode; }
            set { mSubmissionMode = value; }
        }

        public int ApplicationStatus
        {
            get { return mApplicationStatus; }
            set { mApplicationStatus = value; }
        }

        public int CompartmentalId
        {
            get { return mCompartmentalId; }
            set { mCompartmentalId = value; }
        }

        public string Subject
        {
            get { return mSubject; }
            set { mSubject = value; }
        }

        public string PassMark
        {
            get { return mPassMark; }
            set { mPassMark = value; }
        }

        public string FailMark
        {
            get { return mFailMark; }
            set { mFailMark = value; }
        }

        public int CompulsoryId
        {
            get { return mCompulsoryId; }
            set { mCompulsoryId = value; }
        }

        public int Elective1
        {
            get { return mElective1; }
            set { mElective1 = value; }
        }

        public int Elective2
        {
            get { return mElective2; }
            set { mElective2 = value; }
        }

        public int Elective3
        {
            get { return mElective3; }
            set { mElective3 = value; }
        }

        public int p4thElective1
        {
            get { return m4thElective1; }
            set { m4thElective1 = value; }
        }

        public int p4thElective2
        {
            get { return m4thElective2; }
            set { m4thElective2 = value; }
        }

        public int p4thElective3
        {
            get { return m4thElective3; }
            set { m4thElective3 = value; }
        }

        public int HostelOption
        {
            get { return mHostelOption; }
            set { mHostelOption = value; }
        }
        public bool bitNssU
        {
            get { return mNssU; }
            set { mNssU = value; }
        }
        public bool bitNssS
        {
            get { return mNssS; }
            set { mNssS = value; }
        }
        public bool bitNssN
        {
            get { return mNssN; }
            set { mNssN = value; }
        }
        public bool bitNssIN
        {
            get { return mNssIN; }
            set { mNssIN = value; }
        }
        public int MarkVerification
        {
            get { return mintMarkVeriifcation; }
            set { mintMarkVeriifcation = value; }
        }
        public string OrderNo
        {
            get { return mOrderNo; }
            set { mOrderNo = value; }
        }
        public int TransferYear
        {
            get { return mTransferYear; }
            set { mTransferYear = value; }
        }
        #endregion

        #region "Admission Rule"
        public string pstrReserveName
        {
            get { return mstrReserveName; }
            set { mstrReserveName = value; }
        }
        public string pstrReservShortName
        {
            get { return mstrReservShortName; }
            set { mstrReservShortName = value; }
        }
        public int pintReserveID
        {
            get { return mintReserveID; }
            set { mintReserveID = value; }
        }
        public string pstrSName
        {
            get { return mstrSName; }
            set { mstrSName = value; }
        }
        #endregion



        #region "Configuration Master"
        #region "Tag To College"
        public int StrengthId
        {
            get { return mStrengthId; }
            set { mStrengthId = value; }
        }

        public int StreamStrength
        {
            get { return mStreamStrength; }
            set { mStreamStrength = value; }
        }

        public string SubStrength
        {
            get { return mSubStrength; }
            set { mSubStrength = value; }
        }

        public int StrengthTransId
        {
            get { return mStrengthTransId; }
            set { mStrengthTransId = value; }
        }

        public string Stream
        {
            get { return mStream; }
            set { mStream = value; }
        }

        public string SCMark
        {
            get { return mSCMark; }
            set { mSCMark = value; }
        }

        public string STMark
        {
            get { return mSTMark; }
            set { mSTMark = value; }
        }

        public string GenMark
        {
            get { return mGenMark; }
            set { mGenMark = value; }
        }
        #endregion
        #region "Women Weightage"
        /// <summary>
        /// Created By Dillip on 08-May-2009
        /// </summary>
        /// <remarks>For add/edit/view/delete college wise women weightage</remarks>
        private int mWeghId;
        private int mWeightage;
        private string mUpdatedBy;
        public int WeighId
        {
            get { return mWeghId; }
            set { mWeghId = value; }
        }
        public int Weightage
        {
            get { return mWeightage; }
            set { mWeightage = value; }
        }
        public string UpdatedBy
        {
            get { return mUpdatedBy; }
            set { mUpdatedBy = value; }
        }
        #endregion
        #endregion
        #region "Admission Details"

        /// </summary>
        /// <remarks>For add/edit/view/delete Addmission details</remarks>
        private int mAdmissionId;
        private int mAdmissionType;
        private int mDestinyCollId;
        private int mDDNo;
        private string mBankname;
        private int mSlcStatus;
        private int mVerificationId;
        private string mCertificateIds;
        private int mTransferId;
        private string mClcNo;
        private int mStreamTo;
        private System.DateTime mDateLine;
        public System.DateTime DateLine
        {
            get { return mDateLine; }
            set { mDateLine = value; }
        }
        public int TransferId
        {
            get { return mTransferId; }
            set { mTransferId = value; }
        }
        public int StreamTo
        {
            get { return mStreamTo; }
            set { mStreamTo = value; }
        }
        public string ClcNo
        {
            get { return mClcNo; }
            set { mClcNo = value; }
        }
        public int AdmissionId
        {
            get { return mAdmissionId; }
            set { mAdmissionId = value; }
        }
        public int AdmissionType
        {
            get { return mAdmissionType; }
            set { mAdmissionType = value; }
        }
        public int DestinyCollId
        {
            get { return mDestinyCollId; }
            set { mDestinyCollId = value; }
        }
        public int DDNo
        {
            get { return mDDNo; }
            set { mDDNo = value; }
        }
        public string BankName
        {
            get { return mBankname; }
            set { mBankname = value; }
        }
        public int SlcStatus
        {
            get { return mSlcStatus; }
            set { mSlcStatus = value; }
        }
        public int VerificationId
        {
            get { return mVerificationId; }
            set { mVerificationId = value; }
        }
        public string CertificateIds
        {
            get { return mCertificateIds; }
            set { mCertificateIds = value; }
        }
        #endregion

        #region "Conduct properties"


        public string ClgName
        {
            get { return mclgName; }
            set { mclgName = value; }
        }

        public string ClgCode
        {
            get { return mclgCode; }
            set { mclgCode = value; }
        }



        public string FName
        {
            get { return mFName; }
            set { mFName = value; }
        }

        public string strName
        {
            get { return mstrName; }
            set { mstrName = value; }
        }

        public string Session
        {
            get { return mSession; }
            set { mSession = value; }
        }

        public string ConDate
        {
            get { return mcondate; }
            set { mcondate = value; }
        }

        public string CLCDate
        {
            get { return mclcdate; }
            set { mclcdate = value; }
        }
        #endregion

        #region "Due"
        public int Subject1ID
        {
            get { return mSub1Id; }
            set { mSub1Id = value; }
        }
        public int Subject2ID
        {
            get { return mSub2Id; }
            set { mSub2Id = value; }
        }
        public int Subject3ID
        {
            get { return mSub3Id; }
            set { mSub3Id = value; }
        }
        public int Subject4ID
        {
            get { return mSub4Id; }
            set { mSub4Id = value; }
        }
        public string Library
        {
            get { return mLibrary; }
            set { mLibrary = value; }
        }
        public string NCC
        {
            get { return mNCC; }
            set { mNCC = value; }
        }
        public string NSS
        {
            get { return mNSS; }
            set { mNSS = value; }
        }
        public string SG
        {
            get { return mSG; }
            set { mSG = value; }
        }
        public string Sports
        {
            get { return mSports; }
            set { mSports = value; }
        }
        public string Account
        {
            get { return mAccount; }
            set { mAccount = value; }
        }
        public int Subject1Due
        {
            get { return mSub1Due; }
            set { mSub1Due = value; }
        }
        public int Subject2Due
        {
            get { return mSub2Due; }
            set { mSub2Due = value; }
        }
        public int Subject3Due
        {
            get { return mSub3Due; }
            set { mSub3Due = value; }
        }
        public int Subject4Due
        {
            get { return mSub4Due; }
            set { mSub4Due = value; }
        }
        public int Subject5Due
        {
            get { return mSub5Due; }
            set { mSub5Due = value; }
        }
        public int Subject6Due
        {
            get { return mSub6Due; }
            set { mSub6Due = value; }
        }
        public int Subject7Due
        {
            get { return mSub7Due; }
            set { mSub7Due = value; }
        }
        public int Subject8Due
        {
            get { return mSub8Due; }
            set { mSub8Due = value; }
        }
        public int Subject9Due
        {
            get { return mSub9Due; }
            set { mSub9Due = value; }
        }
        public int Subject10Due
        {
            get { return mSub10Due; }
            set { mSub10Due = value; }
        }
        public int Subject1Fine
        {
            get { return mSub1Fine; }
            set { mSub1Fine = value; }
        }
        public int Subject2Fine
        {
            get { return mSub2Fine; }
            set { mSub2Fine = value; }
        }
        public int Subject3Fine
        {
            get { return mSub3Fine; }
            set { mSub3Fine = value; }
        }
        public int Subject4Fine
        {
            get { return mSub4Fine; }
            set { mSub4Fine = value; }
        }
        public int Subject5Fine
        {
            get { return mSub5Fine; }
            set { mSub5Fine = value; }
        }
        public int Subject6Fine
        {
            get { return mSub6Fine; }
            set { mSub6Fine = value; }
        }
        public int Subject7Fine
        {
            get { return mSub7Fine; }
            set { mSub7Fine = value; }
        }
        public int Subject8Fine
        {
            get { return mSub8Fine; }
            set { mSub8Fine = value; }
        }
        public int Subject9Fine
        {
            get { return mSub9Fine; }
            set { mSub9Fine = value; }
        }
        public int Subject10Fine
        {
            get { return mSub10Fine; }
            set { mSub10Fine = value; }
        }
        #endregion

        #region "CAF RECEIPT DETAILS"

        //Public Property BoardID() As Integer
        //    Get
        //        Return mBoardID
        //    End Get
        //    Set(ByVal pBoardID As Integer)
        //        mBoardID = pBoardID
        //    End Set
        //End Property
        //Public Property PassingYear() As Integer
        //    Get
        //        Return mPassingYear
        //    End Get
        //    Set(ByVal pPassingYear As Integer)
        //        mPassingYear = pPassingYear
        //    End Set
        //End Property
        //Public Property RollNo() As String
        //    Get
        //        Return mRollNo
        //    End Get
        //    Set(ByVal pRollNo As String)
        //        mRollNo = pRollNo
        //    End Set
        //End Property

        //Public Property NoOfChoice() As Integer
        //    Get
        //        Return mNoOfChoice
        //    End Get
        //    Set(ByVal pNoOfChoice As Integer)
        //        mNoOfChoice = pNoOfChoice
        //    End Set
        //End Property
        //Public Property ApplicantName() As String
        //    Get
        //        Return mApplicantName
        //    End Get
        //    Set(ByVal pApplicantName As String)
        //        mApplicantName = pApplicantName
        //    End Set
        //End Property

        //Public Property MRIndexNo() As String
        //    Get
        //        Return mMRIndexNo
        //    End Get
        //    Set(ByVal pMRIndexNo As String)
        //        mMRIndexNo = pMRIndexNo
        //    End Set
        //End Property

        //Public Property Amount() As Double
        //    Get
        //        Return mAmount
        //    End Get
        //    Set(ByVal pAmount As Double)
        //        mAmount = pAmount
        //    End Set
        //End Property
        public string MergedIndexNo
        {
            get { return mMergedIndexNo; }
            set { mMergedIndexNo = value; }
        }
        //public string Barcode
        //{
        //    get { return mBarcode; }
        //    set { mBarcode = value; }
        //}
        //private int mTot;
        //public int Totalmark1
        //{
        //    get { return Convert.ToInt32(mBarcode); }
        //    set { mTot = value; }
        //}
        public string ExamType
        {
            get { return mExamType; }
            set { mExamType = value; }
        }
        public string IPAddress
        {
            get { return mIPAddress; }
            set { mIPAddress = value; }
        }
        public int CollegeFeesType
        {
            get { return Convert.ToInt32(mCollegeFeesType); }
            set { mCollegeFeesType = value.ToString(); }
        }
        #endregion


        public int CollegID
        {
            get { return mCollId; }
            set { mCollId = value; }
        }
        public int StreID
        {
            get { return mstreId; }
            set { mstreId = value; }
        }
        public int SubID
        {
            get { return mSubId; }
            set { mSubId = value; }
        }
        public int Year
        {
            get { return mintYear; }
            set { mintYear = value; }
        }
        public string vch_Grade
        {
            get { return mGrade; }
            set { mGrade = value; }
        }
        //For Income Details
        public string FatherOccupation
        {
            get { return mFatherOccupation; }
            set { mFatherOccupation = value; }
        }
        public string MotherOccupation
        {
            get { return mMotherOccupation; }
            set { mMotherOccupation = value; }
        }
        public int AnnualIncomeI
        {
            get { return mAnnualIncomeI; }
            set { mAnnualIncomeI = value; }
        }
        //End for Income Details
        public int PHPercentage
        {
            get { return intPHPercentage; }
            set { intPHPercentage = value; }
        }

        public int SportsLevel
        {
            get { return intSportsLevel; }
            set { intSportsLevel = value; }
        }
        public int SpecialCommunity
        {
            get { return intspecialCommunity; }
            set { intspecialCommunity = value; }
        }
        public string HighestQualfication
        {
            get { return mHighestQualification; }
            set { mHighestQualification = value; }
        }
        public string ImcType
        {
            get { return strImcType; }
            set { strImcType = value; }
        }
        public string int_streamtype
        {
            get { return streamtype; }
            set { streamtype = value; }
        }


        public int intVacancy;
        public int Vacancy
        {
            get { return intVacancy; }
            set { intVacancy = value; }
        }

        public object vchrollcode { get; set; }

        public int int_AutoValidateStatus { get; set; }
        public int int_MobStatus { get; set; }
        public int int_EmailStatus { get; set; }
        public string vchOTP { get; set; }
        public int intRejectionStatus { get; set; }
        public int intMathHonsStatus { get; set; }
        public int intChemHonsStatus { get; set; }
        public int intBotHonsStatus { get; set; }
        public int intZolHonsStatus { get; set; }
        public int intPageIndex { get; set; }
        public int intPageSize { get; set; }
    }
    public class ClsExpData
    {
        public int intId { get; set; }
        public string vchMessage { get; set; }
        public string vchStackTrace { get; set; }
        public string vchSource { get; set; }
        public string vchTargetSite { get; set; }
        public string dtmCreatedOn { get; set; }
        public string vchModuleName { get; set; }
        public string strAction { get; set; }
        public string strFromDate { get; set; }
        public string strToDate { get; set; }
        public int intPageIndex { get; set; }
        public int intPageSize { get; set; }
        public int intRowCount { get; set; }

        public string strLoggedInUser { get; set; }
        public string strPageName { get; set; }
        public string strIpAddress { get; set; }
        public int intType { get; set; }
    }
    public class StudentLogIn
    {
        public string char_Action { get; set; }
        public int int_UserID { get; set; }
        public string vch_UserName { get; set; }
        public string vch_FullName { get; set; }
        public string vch_MobNo { get; set; }
        public string vch_emailID { get; set; }
        public string vch_Password { get; set; }
        public string vch_IPAddress { get; set; }
        public string vch_createdBy { get; set; }
        public string vch_OPassword { get; set; }

        public string vch_ImageName { get; set; }
        public string vch_SignatureName { get; set; }
        public string vch_ApplicantName { get; set; }
        public DateTime dtm_DOB { get; set; }
        public int int_CourseID { get; set; }
        public string vch_UniqueRefNo { get; set; }
        public string vch_OTP { get; set; }
        public string CollegeType { get; set; }
        public int intPaymentStatus { get; set; }
        public int intSudMarkStatus { get; set; }

    }
    public class CAFEntity
    {

        //Caf master
        public int int_StreamID { get; set; }
        public string vch_StreamName { get; set; }

        public int int_CollegeID { get; set; }
        public string vch_CollegeName { get; set; }
        public int int_strength { get; set; }


        //board mark
        public string NAME { get; set; }
        public int ENGLISH { get; set; }
        public int MATH { get; set; }
        public int SCIENCE { get; set; }
        public int SOCAILSTUDIES { get; set; }
        public int TOT { get; set; }
        public dynamic MAXTOTAL { get; set; }
        public string FNAME { get; set; }
        public string MNAME { get; set; }
        public dynamic CAT { get; set; }
        public dynamic GENDER { get; set; }
        public dynamic SCHOOL { get; set; }
        public dynamic DISTRICT { get; set; }
        public string DOB { get; set; }
        public dynamic GRADE { get; set; }

        public int Type { get; set; }
        public string QualificationType { get; set; }
        public int Cid { get; set; }

        public int CollegeID { get; set; }
        public string Action { get; set; }
        public int CollegeType { get; set; }
        public int DisabilityType { get; set; }
        

        public string vchRollNo { get; set; }
        public string vchRollCode { get; set; }


        //Reason
        public string Dname { get; set; }
        public string pStrName { get; set; }
        public int IntID { get; set; }
        public int pIntID { get; set; }
        public string pAppName { get; set; }
        public string pEnglish { get; set; }
        public string pMath { get; set; }
        public string pScience { get; set; }
        public string pSocialStudy { get; set; }
        public string pTotal { get; set; }
        public string pMaxTotal { get; set; }
        public string pGrade { get; set; }
        public string pFname { get; set; }
        public string pMname { get; set; }
        public string pPh { get; set; }
        public int pCategory { get; set; }
        public string pReligion { get; set; }
        public string pDOB { get; set; }
        public int pSex { get; set; }
        public string pMotherToung { get; set; }
        public string pMob { get; set; }
        public string pAdharNo { get; set; }
        public int pSid { get; set; }
        public int pDid { get; set; }
        public int pBid { get; set; }
        public string pDname { get; set; }
        public string pBname { get; set; }
        public string pAddress { get; set; }
        public string pPin { get; set; }
        public string pPhno { get; set; }
        public string pEmail { get; set; }
        public string pBoard { get; set; }
        public int pYop { get; set; }
        public string pImage { get; set; }
        public int pColID { get; set; }
        public string pColName { get; set; }
        public int pColDist { get; set; }
        public string pDOA { get; set; }


        public string AppName { get; set; }
        public string English { get; set; }
        public string Math { get; set; }
        public string Science { get; set; }
        public string SocialStudy { get; set; }
        public string Total { get; set; }
        public string MaxTotal { get; set; }
        public string Fname { get; set; }
        public string Mname { get; set; }
        public string Grade { get; set; }
        public string Category { get; set; }
        public string Sex { get; set; }
        //public string DOB { get; set; }

        public string StrName { get; set; }

        public int ReasonId { get; set; }
        public string ReasonName { get; set; }
        //public int int_StreamID { get; set; }
        //public string vch_StreamName { get; set; }

        //onlinecaf
        public double Totalmark { get; set; }
        public string SchoolName { get; set; }
        public int QualificationID { get; set; }
        public string strPassword { get; set; }
        public string UID { get; set; }
        public int Sid { get; set; }
        public int int_ApplicantID { get; set; }

        public string vchPassword { get; set; }
        public int CollStatus { get; set; }
        public string strId { get; set; }
        public dynamic int_MarkSL { get; set; }
        public dynamic int_MarkMath { get; set; }
        public dynamic int_MarkScience { get; set; }
        public dynamic int_MarkSocialStudies { get; set; }
        public dynamic int_TotalMark { get; set; }
        public dynamic int_MaximumMark { get; set; }
        public string vch_BoardName { get; set; }
        public string vch_ExamType { get; set; }
        public int int_YearOfPassing { get; set; }
        public string vch_RollNo { get; set; }
        public string vch_ApplicantName { get; set; }
        public string vch_FatherName { get; set; }
        public string vch_MotherName { get; set; }
        public string vch_CorHouseNo { get; set; }
        public string vch_BlockName { get; set; }
        public string vch_DistrictName { get; set; }
        public string vch_CorPinCode { get; set; }
        public string vch_CorPhoneNo { get; set; }
        public string vch_CorMobileNo { get; set; }
        public string vch_EMailID { get; set; }
        public string vch_GroupName { get; set; }
        public string vch_Religion { get; set; }
        public int int_Gender { get; set; }
        public int int_CategoryId { get; set; }
        public string vch_StateName { get; set; }
        public string OLNSState { get; set; }
        public string vchImageName { get; set; }
        public string vch_UniqueRefNo { get; set; }
        public string OSAState { get; set; }
        public DateTime dtm_DOB { get; set; }
        public bool bit_PHOH { get; set; }

        public bool bit_SDP { get; set; }
        public bool bit_CoM { get; set; }
        public bool bit_NCC_A { get; set; }
        public bool bit_NCC_C { get; set; }
        public bool bit_Scout_PR { get; set; }
        public bool bit_Scout_RP { get; set; }
        public bool bit_Sports_S { get; set; }
        public bool bit_Sports_N { get; set; }
        public bool bit_Sports_IN { get; set; }
        public bool bit_OSA { get; set; }
        public bool bit_OLNS { get; set; }
        public bool bit_Compartmental { get; set; }
        public bool bit_ESM { get; set; }

        public int int_SubjectID { get; set; }
        public string vch_SubjectName { get; set; }
        public string AIncome { get; set; }
        public string LIDistName { get; set; }
        public string AcNo { get; set; }
        public string IFSC { get; set; }
        public string MICR { get; set; }
        public string BrName { get; set; }
        public string vch_CorVillageName { get; set; }
        public string vch_CorPostOffice { get; set; }
        public int int_blockid { get; set; }
        public string vch_CorPoliceStation { get; set; }
        public string name { get; set; }

        public string CorState { get; set; }
        public string int_PerStateID { get; set; }

        public string Per_State { get; set; }
        public string Per_Dist { get; set; }
        public string Per_Block { get; set; }
        public string vch_PerHouseNo { get; set; }
        public string vch_PerVillageName { get; set; }
        public string vch_PerPostOffice { get; set; }
        public string vch_PerPoliceStation { get; set; }
        public string vch_PerPinCode { get; set; }
        public string vch_PerPhoneNo { get; set; }
        public string vch_PerMobileNo { get; set; }
        public string vch_LastInstitute { get; set; }
        public string vch_LastInst_Location { get; set; }
        public string LastInst_District { get; set; }
        public int int_YearOfJoining { get; set; }
        public int int_YearOfLeaving { get; set; }
        public string Gender { get; set; }

        public int int_MarkVerfication { get; set; }
        public string vch_OrderNo { get; set; }
        public int int_TransferYear { get; set; }
        public string vch_fathersOccupation { get; set; }
        public string vch_mothersOccupation { get; set; }
        public string int_AIncomeID { get; set; }
        public string int_Accno { get; set; }
        public string vch_IFSCno { get; set; }
        public string vch_MICRcode { get; set; }
        public string vch_BankName { get; set; }
        public string vch_BrName { get; set; }
        public string vch_MotherTongue { get; set; }
        public string vch_Nationality { get; set; }

        public string compulsory { get; set; }
        public string Electives { get; set; }
        public string fElective { get; set; }
        public string int_OptionForHostel { get; set; }
        public string int_Option_No { get; set; }
        public string vch_AdharNo { get; set; }
        public string vargender { get; set; }
        public string vch_CouncilName { get; set; }
        public string vchGateWayName { get; set; }
        public string vchTransId { get; set; }
        public decimal vchTransFee { get; set; }
        public string vchTranStatus { get; set; }
        public DateTime vchTransDate { get; set; }
        public string vchOTP { get; set; }
        public int intPaymentStatus { get; set; }
        public int intOtpStatus { get; set; }
        public int intStatus { get; set; }
        public DateTime dtm_Applied { get; set; }


        public string vchBSEBtrnId { get; set; }
        public string vchVendortrnId { get; set; }
        public string vchStatus { get; set; }
        public int intEWS { get; set; }

        public int KGBACSts { get; set; }
        public string aadharNo { get; set; }
        public string photodb { get; set; }
        public int aadharSts { get; set; }

        #region "member Variable"

        //public string mBarcode { get; set; }
        private int mID;
        private string mName;
        private string mstrSName;
        private string mstrPhoneNo;
        private string mstrFaxNo;
        private string MAdharNo;
        private string mbgen;
        private string mbsc;
        private string mbst;
        private string mggen;
        private string mgsc;
        private string mgst;
        private string mdName;
        private string mActivity;
        private string mDescription;
        private string mRemark;
        private string mIDs;
        private int mUserId;
        private int mintStateID;
        private string mCreatedBy;
        private System.DateTime mCreatedOn;
        private System.DateTime mFromDate;
        private System.DateTime mToDate;
        private double mPercentage;
        //private string mAction;
        //private int mCollege;
        private int mStreamID;
        private string mCollegetype;
        private string mCollegeemail;
        private int mCollegefax;
        private int mCollegephno;
        private string mCollegecode;
        //For Admission Rule
        private string mstrReserveName;
        private string mstrReservShortName;
        private int mintReserveID;
        private int mintSelectionType;

        //for adding conduct
        private string mclgName;
        private string mclgCode;
        //private string mAppName;
        private string mFName;
        private string mstrName;
        private string mSession;
        private string mcondate;
        private string mclcdate;
        //for Adding LSF
        //private string mlName1;
        //private string mlAge1;
        //private string mlHno1;
        //private string mlVill1;
        //private string mlDist1;
        //private string mlBlock1;
        //private string mlPO1;
        //private string mlPS1;
        //private string mlPin1;
        //private string mlProf1;
        //private string mlName2;
        //private string mlAge2;
        //private string mlHno2;
        //private string mlVill2;
        //private string mlDist2;
        //private string mlBlock2;
        //private string mlPO2;
        //private string mlPS2;
        //private string mlPin2;
        //private string mlProf2;
        //for adding subject due
        private int mSub1Id;
        private int mSub2Id;
        private int mSub3Id;
        private int mSub4Id;
        private string mLibrary;
        private string mNCC;
        private string mNSS;
        private string mSG;
        private string mSports;
        private string mAccount;
        private int mSub1Due;
        private int mSub2Due;
        private int mSub3Due;
        private int mSub4Due;
        private int mSub5Due;
        private int mSub6Due;
        private int mSub7Due;
        private int mSub8Due;
        private int mSub9Due;
        private int mSub10Due;
        private int mSub1Fine;
        private int mSub2Fine;
        private int mSub3Fine;
        private int mSub4Fine;
        private int mSub5Fine;
        private int mSub6Fine;
        private int mSub7Fine;
        private int mSub8Fine;
        private int mSub9Fine;

        private int mSub10Fine;
        //ADD CAF DATA (SAMS-2010)
        private int _mintYOP;
        private int _mintTotOpt;
        private int _intOSAStateID;
        private int _intOLNSStateID;
        private string _strGuardianName;
        private string _strLastInstDist;
        //===================================
        //Private mBoardID As Integer
        //Private mPassingYear As Integer
        //Private mRollNo As String
        //Private mNoOfChoice As Integer
        //Private mApplicantName As String
        //Private mMRIndexNo As String
        //Private mAmount As Double
        private string mMergedIndexNo;

        private string mExamType;
        //'New added from DHE website   

        private string mIPAddress;
        private int mTransferYear;
        private string mOrderNo;
        private string mCollegeFeesType;
        private int mCollId;
        private int mstreId;
        private int mSubId;
        private int mintYear;
        private string mGrade;

        //For Income Details
        private string mFatherOccupation;
        private string mMotherOccupation;
        private int mAnnualIncomeI;
        //End for Income Details
        private int intPHPercentage;
        private int intSportsLevel;
        private int intspecialCommunity;
        private string mHighestQualification;

        private string strImcType;








        #region "CAF"
        private int mReceiveID;
        private int mBoardId;
        private int mPassingYear;
        private string mRollNo;
        private string mRollCode;
        private int mNoOfChoice;
        private int mValidateStatus;
        private string mApplicantName;
        private string mMRIndexNo;
        private double mAmount;

        private int mApplicantid;
        private bool mCompartmental;
        private string mFatherName;
        private string mMotherName;
        private string mCorHouseNo;
        private string mCorVillageName;
        private string mCorPO;
        private int mCorBlockId;
        private string mCorPS;
        private int mCorDistId;
        private int mCorStateId;
        private string mCorPinCode;
        private string mCorPhNo;
        private string mCorMobileNo;
        private string mEmailId;
        //private int mAltMobileNo;
        private string mPerHouseNo;
        private string mPerVillageName;
        private string mPerPO;
        private int mPerBlockId;
        private string mPerPS;
        private int mPerDistId;
        private int mPerStateId;
        private string mPerPinCode;
        private string mPerPhNo;
        private string mPerMobileNo;
        private int mBloodGrId;
        //private int mGender;
        private int mReligionId;
        //private string mDOB;
        private int mCategoryId;
        private bool mPHOH;
        private bool mESM;
        private bool mSDP;
        private bool mCoM;
        private bool mNCCA;
        private bool mNCCC;
        private bool mScoutPR;
        private bool mScoutRP;
        private bool mSportsS;
        private bool mSportsN;
        private bool mSportsIN;
        private bool mOSA;
        private bool mOLNS;
        private bool mEmployed;
        private string mNationality;
        private string mMotherTongue;
        private string mFathersOccup;
        private string mMothersOccup;
        private double mAnnualIncome;
        private int mMarkFL;
        private int mMarkSL;
        private int mMarkTL;
        private int mMarkMath;
        private int mMarkScience;
        private int mMarkSocialStudies;

        private int mMaxMark;
        private string mLastInst;
        private string mLastInstLoc;
        private int mLastInstState;
        private int mLastInstDist;
        private int mYearOfJoining;
        private int mYearOfLeaving;
        private bool mDetained;
        private bool mDiscontinued;
        private int mAppliedCollId;
        private string mAppliedCollCode;
        private string mSubmissionMode;

        private int mApplicationStatus;
        private int mCompartmentalId;
        private string mSubject;
        private string mFailMark;

        private string mPassMark;
        private int mCompulsoryId;
        private int mElective1;
        private int mElective2;
        private int mElective3;
        private int m4thElective1;
        private int m4thElective2;
        private int m4thElective3;
        private int mHostelOption;
        private string _strCollegeIDS;
        private string _strStreamIDS;
        private string _strCompulsory;
        private string _strELE1;
        private string _strELE2;
        private string _strELE3;
        private string _strFELE1;
        private string _strFELE2;
        private string _strFELE3;
        private string _strLiveOpt;
        private string _strSubject;
        private string _strFMark;
        private string _strPMark;

        //--------------added by Anjali Panigrahi
        private string _strCollegeNames;
        private string _strStreamNames;
        private string _strCompulsoryNames;
        private string _strElective1;
        private string _strElective1Names;
        private string _strElective2;
        private string _strElective2Names;
        private string _strElective3;
        private string _strElective3Names;
        private string _str4thElective1;
        private string _str4thElective1Nm;
        private string _str4thElective2;
        private string _str4thElective2Nm;
        private string _str4thElective3;
        private string _str4thElective3Nm; //---------end

        //private string _strPassword;
        //private string _strImageName;
        //private string _strUID;
        private bool _bitImageStatus;
        private int mintMarkVeriifcation;
        //'Added on 06-April-2010 for Degree CAF
        private bool mNssU;
        private bool mNssS;
        private bool mNssN;
        #endregion
        private bool mNssIN;
        #region "Configuration Master"
        #region "Tag To College"
        private int mStrengthId;
        private int mStrengthTransId;
        private int mStreamStrength;

        private string mSubStrength;
        private string mStream;
        private string mSCMark;
        private string mSTMark;
        #endregion
        private string mGenMark;
        #endregion

        #endregion

        public string GateWayID { get; set; }

        //private int mHostelOption1;


        public int intOLNSStateID
        {
            get { return _intOLNSStateID; }
            set { _intOLNSStateID = value; }
        }
        public int intOSAStateID
        {
            get { return _intOSAStateID; }
            set { _intOSAStateID = value; }
        }
        //public string strUID
        //{
        //    get { return _strUID; }
        //    set
        //    {
        //        if (value.Contains("!"))
        //        {
        //            value = "NS";
        //        }
        //        else if (value.Contains("<"))
        //        {
        //            value = "NS";
        //        }
        //        else if (value.Contains(">"))
        //        {
        //            value = "NS";
        //        }
        //        else if (value.Contains("&"))
        //        {
        //            value = "NS";
        //        }
        //        else if (value.Contains("%"))
        //        {
        //            value = "NS";
        //        }
        //        else if (value.Contains("~"))mmmmmmmmmmmmmmm
        //        {
        //            value = "NS";
        //        }
        //        _strUID = value;
        //    }
        //}
        //public string strImageName
        //{
        //    get { return _strImageName; }
        //    set { _strImageName = value; }
        //}
        public bool bitImageStatus
        {
            get { return _bitImageStatus; }
            set { _bitImageStatus = value; }
        }

        public string strPMark
        {
            get { return _strPMark; }
            set { _strPMark = value; }
        }
        public string strFMark
        {
            get { return _strFMark; }
            set { _strFMark = value; }
        }
        public string strSubject
        {
            get { return _strSubject; }
            set { _strSubject = value; }
        }
        public string strLiveOpt
        {
            get { return _strLiveOpt; }
            set { _strLiveOpt = value; }
        }
        public string strFELE3
        {
            get { return _strFELE3; }
            set { _strFELE3 = value; }
        }
        public string strFELE2
        {
            get { return _strFELE2; }
            set { _strFELE2 = value; }
        }
        public string strFELE1
        {
            get { return _strFELE1; }
            set { _strFELE1 = value; }
        }
        public string strELE3
        {
            get { return _strELE3; }
            set { _strELE3 = value; }
        }
        public string strELE2
        {
            get { return _strELE2; }
            set { _strELE2 = value; }
        }
        public string strELE1
        {
            get { return _strELE1; }
            set { _strELE1 = value; }
        }
        public string strCompulsory
        {
            get { return _strCompulsory; }
            set { _strCompulsory = value; }
        }
        public string strStreamIDS
        {
            get { return _strStreamIDS; }
            set { _strStreamIDS = value; }
        }
        public string strCollegeIDS
        {
            get { return _strCollegeIDS; }
            set { _strCollegeIDS = value; }
        }
        public string strLastInstDist
        {
            get { return _strLastInstDist; }
            set { _strLastInstDist = value; }
        }
        public string strGuardianName
        {
            get { return _strGuardianName; }
            set { _strGuardianName = value; }
        }
        public int pintTotOpt
        {
            get { return _mintTotOpt; }
            set { _mintTotOpt = value; }
        }
        public int pintYOP
        {
            get { return _mintYOP; }
            set { _mintYOP = value; }
        }

        public int pintSelectionType
        {
            get { return mintSelectionType; }
            set { mintSelectionType = value; }
        }
        public string pbgen
        {
            get { return mbgen; }
            set { mbgen = value; }
        }
        public string pbsc
        {
            get { return mbsc; }
            set { mbsc = value; }
        }
        public string pbst
        {
            get { return mbst; }
            set { mbst = value; }
        }
        public string pggen
        {
            get { return mggen; }
            set { mggen = value; }
        }
        public string pgsc
        {
            get { return mgsc; }
            set { mgsc = value; }
        }
        public string pgst
        {
            get { return mgst; }
            set { mgst = value; }
        }
        public string pActivity
        {
            get { return mActivity; }
            set { mActivity = value; }
        }
        public string pCollegecode
        {
            get { return mCollegecode; }
            set { mCollegecode = value; }
        }
        public int pintStateID
        {
            get { return mintStateID; }
            set { mintStateID = value; }
        }
        public string pstrFaxNo
        {
            get { return mstrFaxNo; }
            set { mstrFaxNo = value; }
        }
        public string pstrPhoneNo
        {
            get { return mstrPhoneNo; }
            set { mstrPhoneNo = value; }
        }
        public int Collegephno
        {

            get { return mCollegephno; }

            set { mCollegephno = value; }
        }
        public string Collegeemail
        {

            get { return mCollegeemail; }

            set { mCollegeemail = value; }
        }
        public int Collegefax
        {

            get { return mCollegefax; }

            set { mCollegefax = value; }
        }
        public int Collegetype
        {
            get { return Convert.ToInt32(mCollegetype); }
            set { mCollegetype = value.ToString(); }
        }

        public int ID
        {
            get { return mID; }
            set { mID = value; }
        }
        public string Name
        {
            get { return mName; }
            set { mName = value; }
        }
        public string DistrictName
        {
            get { return mdName; }
            set { mdName = value; }
        }

        public string Description
        {
            get { return mDescription; }
            set { mDescription = value; }
        }

        public string Remark
        {
            get { return mRemark; }
            set { mRemark = value; }
        }
        public string IDs
        {
            get { return mIDs; }
            set { mIDs = value; }
        }

        public int UserId
        {
            get { return mUserId; }
            set { mUserId = value; }
        }

        public string CreatedBy
        {
            get { return mCreatedBy; }
            set { mCreatedBy = value; }
        }
        public System.DateTime CreatedOn
        {
            get { return mCreatedOn; }
            set { mCreatedOn = value; }
        }
        public System.DateTime FromDate
        {
            get { return mFromDate; }
            set { mFromDate = value; }
        }
        public System.DateTime ToDate
        {
            get { return mToDate; }
            set { mToDate = value; }
        }

        public double Percentage
        {
            get { return mPercentage; }
            set { mPercentage = value; }
        }

        public int StreamID
        {
            get { return mStreamID; }
            set { mStreamID = value; }
        }
        public string AdharNo
        {
            get { return MAdharNo; }
            set { MAdharNo = value; }
        }

        #region "CAF"
        public int ReceiveID
        {
            get { return mReceiveID; }
            set { mReceiveID = value; }
        }

        public int BoardId
        {
            get { return mBoardId; }
            set { mBoardId = value; }
        }

        public int PassingYear
        {
            get { return mPassingYear; }
            set { mPassingYear = value; }
        }

        public string RollNo
        {
            get { return mRollNo; }
            set { mRollNo = value; }
        }
        public string RollCode
        {
            get { return mRollCode; }
            set { mRollCode = value; }
        }

        public int ValidateStatus
        {
            get { return mValidateStatus; }
            set { mValidateStatus = value; }
        }

        public int NoOfChoice
        {
            get { return mNoOfChoice; }
            set { mNoOfChoice = value; }
        }

        public string ApplicantName
        {
            get { return mApplicantName; }
            set { mApplicantName = value; }
        }

        public string MRIndexNo
        {
            get { return mMRIndexNo; }
            set { mMRIndexNo = value; }
        }

        public double Amount
        {
            get { return mAmount; }
            set { mAmount = value; }
        }

        public int ApplicantID
        {
            get { return mApplicantid; }
            set { mApplicantid = value; }
        }

        public bool Compartmental
        {
            get { return mCompartmental; }
            set { mCompartmental = value; }
        }

        public string FatherName
        {
            get { return mFatherName; }
            set { mFatherName = value; }
        }

        public string MotherName
        {
            get { return mMotherName; }
            set { mMotherName = value; }
        }

        public string CorHouseNo
        {
            get { return mCorHouseNo; }
            set { mCorHouseNo = value; }
        }

        public string CorVillageName
        {
            get { return mCorVillageName; }
            set { mCorVillageName = value; }
        }

        public string CorPO
        {
            get { return mCorPO; }
            set { mCorPO = value; }
        }

        public int CorBlockId
        {
            get { return mCorBlockId; }
            set { mCorBlockId = value; }
        }

        public string CorPS
        {
            get { return mCorPS; }
            set { mCorPS = value; }
        }

        public int CorDistId
        {
            get { return mCorDistId; }
            set { mCorDistId = value; }
        }

        public int CorStateId
        {
            get { return mCorStateId; }
            set { mCorStateId = value; }
        }

        public string CorPinCode
        {
            get { return mCorPinCode; }
            set { mCorPinCode = value; }
        }

        public string CorPhNo
        {
            get { return mCorPhNo; }
            set { mCorPhNo = value; }
        }

        public string CorMobileNo
        {
            get { return mCorMobileNo; }
            set { mCorMobileNo = value; }
        }

        public string EmailId
        {
            get { return mEmailId; }
            set { mEmailId = value; }
        }

        public string PerHouseNo
        {
            get { return mPerHouseNo; }
            set { mPerHouseNo = value; }
        }

        public string PerVillageName
        {
            get { return mPerVillageName; }
            set { mPerVillageName = value; }
        }

        public string PerPO
        {
            get { return mPerPO; }
            set { mPerPO = value; }
        }

        public int PerBlockId
        {
            get { return mPerBlockId; }
            set { mPerBlockId = value; }
        }


        public string PerPS
        {
            get { return mPerPS; }
            set { mPerPS = value; }
        }

        public int PerDistId
        {
            get { return mPerDistId; }
            set { mPerDistId = value; }
        }

        public int PerStateId
        {
            get { return mPerStateId; }
            set { mPerStateId = value; }
        }

        public string PerPinCode
        {
            get { return mPerPinCode; }
            set { mPerPinCode = value; }
        }

        public string PerPhNo
        {
            get { return mPerPhNo; }
            set { mPerPhNo = value; }
        }

        public string PerMobileNo
        {
            get { return mPerMobileNo; }
            set { mPerMobileNo = value; }
        }

        public int BloodGrId
        {
            get { return mBloodGrId; }
            set { mBloodGrId = value; }
        }

        public int ReligionId
        {
            get { return mReligionId; }
            set { mReligionId = value; }
        }



        public int CategoryId
        {
            get { return mCategoryId; }
            set { mCategoryId = value; }
        }

        public bool PHOH
        {
            get { return mPHOH; }
            set { mPHOH = value; }
        }

        public bool ESM
        {
            get { return mESM; }
            set { mESM = value; }
        }

        public bool SDP
        {
            get { return mSDP; }
            set { mSDP = value; }
        }

        public bool CoM
        {
            get { return mCoM; }
            set { mCoM = value; }
        }

        public bool NCCA
        {
            get { return mNCCA; }
            set { mNCCA = value; }
        }

        public bool NCCC
        {
            get { return mNCCC; }
            set { mNCCC = value; }
        }

        public bool ScoutPR
        {
            get { return mScoutPR; }
            set { mScoutPR = value; }
        }

        public bool ScoutRP
        {
            get { return mScoutRP; }
            set { mScoutRP = value; }
        }

        public bool SportsS
        {
            get { return mSportsS; }
            set { mSportsS = value; }
        }

        public bool SportsN
        {
            get { return mSportsN; }
            set { mSportsN = value; }
        }

        public bool SportsIN
        {
            get { return mSportsIN; }
            set { mSportsIN = value; }
        }

        public bool OSA
        {
            get { return mOSA; }
            set { mOSA = value; }
        }

        public bool OLNS
        {
            get { return mOLNS; }
            set { mOLNS = value; }
        }

        public bool Employed
        {
            get { return mEmployed; }
            set { mEmployed = value; }
        }
        public string Nationality
        {
            get { return mNationality; }
            set { mNationality = value; }
        }

        public string MotherTongue
        {
            get { return mMotherTongue; }
            set { mMotherTongue = value; }
        }

        public string FathersOccup
        {
            get { return mFathersOccup; }
            set { mFathersOccup = value; }
        }

        public string MothersOccup
        {
            get { return mMothersOccup; }
            set { mMothersOccup = value; }
        }

        public double AnnualIncome
        {
            get { return mAnnualIncome; }
            set { mAnnualIncome = value; }
        }

        public int MarkFL
        {
            get { return mMarkFL; }
            set { mMarkFL = value; }
        }

        public int MarkSL
        {
            get { return mMarkSL; }
            set { mMarkSL = value; }
        }

        public int MarkTL
        {
            get { return mMarkTL; }
            set { mMarkTL = value; }
        }

        public int MarkMath
        {
            get { return mMarkMath; }
            set { mMarkMath = value; }
        }

        public int MarkScience
        {
            get { return mMarkScience; }
            set { mMarkScience = value; }
        }

        public int MarkSocialStudies
        {
            get { return mMarkSocialStudies; }
            set { mMarkSocialStudies = value; }
        }

        public int MaxMark
        {
            get { return mMaxMark; }
            set { mMaxMark = value; }
        }

        public string LastInst
        {
            get { return mLastInst; }
            set { mLastInst = value; }
        }

        public string LastInstLoc
        {
            get { return mLastInstLoc; }
            set { mLastInstLoc = value; }
        }

        public int LastInstState
        {
            get { return mLastInstState; }
            set { mLastInstState = value; }
        }

        public int LastInstDist
        {
            get { return mLastInstDist; }
            set { mLastInstDist = value; }
        }

        public int YearOfJoining
        {
            get { return mYearOfJoining; }
            set { mYearOfJoining = value; }
        }

        public int YearOfLeaving
        {
            get { return mYearOfLeaving; }
            set { mYearOfLeaving = value; }
        }

        public bool Detained
        {
            get { return mDetained; }
            set { mDetained = value; }
        }

        public bool Discontinued
        {
            get { return mDiscontinued; }
            set { mDiscontinued = value; }
        }

        public int AppliedCollId
        {
            get { return mAppliedCollId; }
            set { mAppliedCollId = value; }
        }

        public string AppliedCollCode
        {
            get { return mAppliedCollCode; }
            set { mAppliedCollCode = value; }
        }

        public string SubmissionMode
        {
            get { return mSubmissionMode; }
            set { mSubmissionMode = value; }
        }

        public int ApplicationStatus
        {
            get { return mApplicationStatus; }
            set { mApplicationStatus = value; }
        }

        public int CompartmentalId
        {
            get { return mCompartmentalId; }
            set { mCompartmentalId = value; }
        }

        public string Subject
        {
            get { return mSubject; }
            set { mSubject = value; }
        }

        public string PassMark
        {
            get { return mPassMark; }
            set { mPassMark = value; }
        }

        public string FailMark
        {
            get { return mFailMark; }
            set { mFailMark = value; }
        }

        public int CompulsoryId
        {
            get { return mCompulsoryId; }
            set { mCompulsoryId = value; }
        }

        public int Elective1
        {
            get { return mElective1; }
            set { mElective1 = value; }
        }

        public int Elective2
        {
            get { return mElective2; }
            set { mElective2 = value; }
        }

        public int Elective3
        {
            get { return mElective3; }
            set { mElective3 = value; }
        }

        public int p4thElective1
        {
            get { return m4thElective1; }
            set { m4thElective1 = value; }
        }

        public int p4thElective2
        {
            get { return m4thElective2; }
            set { m4thElective2 = value; }
        }

        public int p4thElective3
        {
            get { return m4thElective3; }
            set { m4thElective3 = value; }
        }

        public int HostelOption
        {
            get { return mHostelOption; }
            set { mHostelOption = value; }
        }
        public bool bitNssU
        {
            get { return mNssU; }
            set { mNssU = value; }
        }
        public bool bitNssS
        {
            get { return mNssS; }
            set { mNssS = value; }
        }
        public bool bitNssN
        {
            get { return mNssN; }
            set { mNssN = value; }
        }
        public bool bitNssIN
        {
            get { return mNssIN; }
            set { mNssIN = value; }
        }
        public int MarkVerification
        {
            get { return mintMarkVeriifcation; }
            set { mintMarkVeriifcation = value; }
        }
        public string OrderNo
        {
            get { return mOrderNo; }
            set { mOrderNo = value; }
        }
        public int TransferYear
        {
            get { return mTransferYear; }
            set { mTransferYear = value; }
        }
        #endregion

        #region "Admission Rule"
        public string pstrReserveName
        {
            get { return mstrReserveName; }
            set { mstrReserveName = value; }
        }
        public string pstrReservShortName
        {
            get { return mstrReservShortName; }
            set { mstrReservShortName = value; }
        }
        public int pintReserveID
        {
            get { return mintReserveID; }
            set { mintReserveID = value; }
        }
        public string pstrSName
        {
            get { return mstrSName; }
            set { mstrSName = value; }
        }
        #endregion

        #region "Configuration Master"
        #region "Tag To College"
        public int StrengthId
        {
            get { return mStrengthId; }
            set { mStrengthId = value; }
        }

        public int StreamStrength
        {
            get { return mStreamStrength; }
            set { mStreamStrength = value; }
        }

        public string SubStrength
        {
            get { return mSubStrength; }
            set { mSubStrength = value; }
        }

        public int StrengthTransId
        {
            get { return mStrengthTransId; }
            set { mStrengthTransId = value; }
        }

        public string Stream
        {
            get { return mStream; }
            set { mStream = value; }
        }

        public string SCMark
        {
            get { return mSCMark; }
            set { mSCMark = value; }
        }

        public string STMark
        {
            get { return mSTMark; }
            set { mSTMark = value; }
        }

        public string GenMark
        {
            get { return mGenMark; }
            set { mGenMark = value; }
        }
        #endregion
        #region "Women Weightage"
        /// <summary>
        /// Created By Dillip on 08-May-2009
        /// </summary>
        /// <remarks>For add/edit/view/delete college wise women weightage</remarks>
        private int mWeghId;
        private int mWeightage;
        private string mUpdatedBy;
        public int WeighId
        {
            get { return mWeghId; }
            set { mWeghId = value; }
        }
        public int Weightage
        {
            get { return mWeightage; }
            set { mWeightage = value; }
        }
        public string UpdatedBy
        {
            get { return mUpdatedBy; }
            set { mUpdatedBy = value; }
        }
        #endregion
        #endregion
        #region "Admission Details"

        /// </summary>
        /// <remarks>For add/edit/view/delete Addmission details</remarks>
        private int mAdmissionId;
        private int mAdmissionType;
        private int mDestinyCollId;
        private int mDDNo;
        private string mBankname;
        private int mSlcStatus;
        private int mVerificationId;
        private string mCertificateIds;
        private int mTransferId;
        private string mClcNo;
        private int mStreamTo;
        private System.DateTime mDateLine;
        public System.DateTime DateLine
        {
            get { return mDateLine; }
            set { mDateLine = value; }
        }
        public int TransferId
        {
            get { return mTransferId; }
            set { mTransferId = value; }
        }
        public int StreamTo
        {
            get { return mStreamTo; }
            set { mStreamTo = value; }
        }
        public string ClcNo
        {
            get { return mClcNo; }
            set { mClcNo = value; }
        }
        public int AdmissionId
        {
            get { return mAdmissionId; }
            set { mAdmissionId = value; }
        }
        public int AdmissionType
        {
            get { return mAdmissionType; }
            set { mAdmissionType = value; }
        }
        public int DestinyCollId
        {
            get { return mDestinyCollId; }
            set { mDestinyCollId = value; }
        }
        public int DDNo
        {
            get { return mDDNo; }
            set { mDDNo = value; }
        }
        public string BankName
        {
            get { return mBankname; }
            set { mBankname = value; }
        }
        public int SlcStatus
        {
            get { return mSlcStatus; }
            set { mSlcStatus = value; }
        }
        public int VerificationId
        {
            get { return mVerificationId; }
            set { mVerificationId = value; }
        }
        public string CertificateIds
        {
            get { return mCertificateIds; }
            set { mCertificateIds = value; }
        }
        #endregion

        #region "Conduct properties"


        public string ClgName
        {
            get { return mclgName; }
            set { mclgName = value; }
        }

        public string ClgCode
        {
            get { return mclgCode; }
            set { mclgCode = value; }
        }



        public string FName
        {
            get { return mFName; }
            set { mFName = value; }
        }

        public string strName
        {
            get { return mstrName; }
            set { mstrName = value; }
        }
        public string Session
        {
            get { return mSession; }
            set { mSession = value; }
        }

        public string ConDate
        {
            get { return mcondate; }
            set { mcondate = value; }
        }

        public string CLCDate
        {
            get { return mclcdate; }
            set { mclcdate = value; }
        }
        #endregion

        #region "Due"
        public int Subject1ID
        {
            get { return mSub1Id; }
            set { mSub1Id = value; }
        }
        public int Subject2ID
        {
            get { return mSub2Id; }
            set { mSub2Id = value; }
        }
        public int Subject3ID
        {
            get { return mSub3Id; }
            set { mSub3Id = value; }
        }
        public int Subject4ID
        {
            get { return mSub4Id; }
            set { mSub4Id = value; }
        }
        public string Library
        {
            get { return mLibrary; }
            set { mLibrary = value; }
        }
        public string NCC
        {
            get { return mNCC; }
            set { mNCC = value; }
        }
        public string NSS
        {
            get { return mNSS; }
            set { mNSS = value; }
        }
        public string SG
        {
            get { return mSG; }
            set { mSG = value; }
        }
        public string Sports
        {
            get { return mSports; }
            set { mSports = value; }
        }
        public string Account
        {
            get { return mAccount; }
            set { mAccount = value; }
        }
        public int Subject1Due
        {
            get { return mSub1Due; }
            set { mSub1Due = value; }
        }
        public int Subject2Due
        {
            get { return mSub2Due; }
            set { mSub2Due = value; }
        }
        public int Subject3Due
        {
            get { return mSub3Due; }
            set { mSub3Due = value; }
        }
        public int Subject4Due
        {
            get { return mSub4Due; }
            set { mSub4Due = value; }
        }
        public int Subject5Due
        {
            get { return mSub5Due; }
            set { mSub5Due = value; }
        }
        public int Subject6Due
        {
            get { return mSub6Due; }
            set { mSub6Due = value; }
        }
        public int Subject7Due
        {
            get { return mSub7Due; }
            set { mSub7Due = value; }
        }
        public int Subject8Due
        {
            get { return mSub8Due; }
            set { mSub8Due = value; }
        }
        public int Subject9Due
        {
            get { return mSub9Due; }
            set { mSub9Due = value; }
        }
        public int Subject10Due
        {
            get { return mSub10Due; }
            set { mSub10Due = value; }
        }
        public int Subject1Fine
        {
            get { return mSub1Fine; }
            set { mSub1Fine = value; }
        }
        public int Subject2Fine
        {
            get { return mSub2Fine; }
            set { mSub2Fine = value; }
        }
        public int Subject3Fine
        {
            get { return mSub3Fine; }
            set { mSub3Fine = value; }
        }
        public int Subject4Fine
        {
            get { return mSub4Fine; }
            set { mSub4Fine = value; }
        }
        public int Subject5Fine
        {
            get { return mSub5Fine; }
            set { mSub5Fine = value; }
        }
        public int Subject6Fine
        {
            get { return mSub6Fine; }
            set { mSub6Fine = value; }
        }
        public int Subject7Fine
        {
            get { return mSub7Fine; }
            set { mSub7Fine = value; }
        }
        public int Subject8Fine
        {
            get { return mSub8Fine; }
            set { mSub8Fine = value; }
        }
        public int Subject9Fine
        {
            get { return mSub9Fine; }
            set { mSub9Fine = value; }
        }
        public int Subject10Fine
        {
            get { return mSub10Fine; }
            set { mSub10Fine = value; }
        }
        #endregion

        #region "CAF RECEIPT DETAILS"

        //Public Property BoardID() As Integer
        //    Get
        //        Return mBoardID
        //    End Get
        //    Set(ByVal pBoardID As Integer)
        //        mBoardID = pBoardID
        //    End Set
        //End Property
        //Public Property PassingYear() As Integer
        //    Get
        //        Return mPassingYear
        //    End Get
        //    Set(ByVal pPassingYear As Integer)
        //        mPassingYear = pPassingYear
        //    End Set
        //End Property
        //Public Property RollNo() As String
        //    Get
        //        Return mRollNo
        //    End Get
        //    Set(ByVal pRollNo As String)
        //        mRollNo = pRollNo
        //    End Set
        //End Property

        //Public Property NoOfChoice() As Integer
        //    Get
        //        Return mNoOfChoice
        //    End Get
        //    Set(ByVal pNoOfChoice As Integer)
        //        mNoOfChoice = pNoOfChoice
        //    End Set
        //End Property
        //Public Property ApplicantName() As String
        //    Get
        //        Return mApplicantName
        //    End Get
        //    Set(ByVal pApplicantName As String)
        //        mApplicantName = pApplicantName
        //    End Set
        //End Property

        //Public Property MRIndexNo() As String
        //    Get
        //        Return mMRIndexNo
        //    End Get
        //    Set(ByVal pMRIndexNo As String)
        //        mMRIndexNo = pMRIndexNo
        //    End Set
        //End Property

        //Public Property Amount() As Double
        //    Get
        //        Return mAmount
        //    End Get
        //    Set(ByVal pAmount As Double)
        //        mAmount = pAmount
        //    End Set
        //End Property
        public string MergedIndexNo
        {
            get { return mMergedIndexNo; }
            set { mMergedIndexNo = value; }
        }
        //public string Barcode
        //{
        //    get { return mBarcode; }
        //    set { mBarcode = value; }
        //}
        //private int mTot;
        //public int Totalmark1
        //{
        //    get { return Convert.ToInt32(mBarcode); }
        //    set { mTot = value; }
        //}
        public string ExamType
        {
            get { return mExamType; }
            set { mExamType = value; }
        }
        public string IPAddress
        {
            get { return mIPAddress; }
            set { mIPAddress = value; }
        }
        public int CollegeFeesType
        {
            get { return Convert.ToInt32(mCollegeFeesType); }
            set { mCollegeFeesType = value.ToString(); }
        }
        #endregion

        public int CollegID
        {
            get { return mCollId; }
            set { mCollId = value; }
        }
        public int StreID
        {
            get { return mstreId; }
            set { mstreId = value; }
        }
        public int SubID
        {
            get { return mSubId; }
            set { mSubId = value; }
        }
        public int Year
        {
            get { return mintYear; }
            set { mintYear = value; }
        }

        public string vch_Grade
        {
            get { return mGrade; }
            set { mGrade = value; }
        }
        //For Income Details
        public string FatherOccupation
        {
            get { return mFatherOccupation; }
            set { mFatherOccupation = value; }
        }
        public string MotherOccupation
        {
            get { return mMotherOccupation; }
            set { mMotherOccupation = value; }
        }
        public int AnnualIncomeI
        {
            get { return mAnnualIncomeI; }
            set { mAnnualIncomeI = value; }
        }
        //End for Income Details
        public int PHPercentage
        {
            get { return intPHPercentage; }
            set { intPHPercentage = value; }
        }

        public int SportsLevel
        {
            get { return intSportsLevel; }
            set { intSportsLevel = value; }
        }
        public int SpecialCommunity
        {
            get { return intspecialCommunity; }
            set { intspecialCommunity = value; }
        }
        public string HighestQualfication
        {
            get { return mHighestQualification; }
            set { mHighestQualification = value; }
        }

        public string ImcType
        {
            get { return strImcType; }
            set { strImcType = value; }
        }
        public string strCollegeNames
        {
            get { return _strCollegeNames; }
            set { _strCollegeNames = value; }
        }
        public string strStreamNames
        {
            get { return _strStreamNames; }
            set { _strStreamNames = value; }
        }
        public string strCompulsoryNames
        {
            get { return _strCompulsoryNames; }
            set { _strCompulsoryNames = value; }
        }
        public string strElective1
        {
            get { return _strElective1; }
            set { _strElective1 = value; }
        }
        public string strElective1Names
        {
            get { return _strElective1Names; }
            set { _strElective1Names = value; }
        }

        public string strElective2
        {
            get { return _strElective2; }
            set { _strElective2 = value; }
        }
        public string strElective2Names
        {
            get { return _strElective2Names; }
            set { _strElective2Names = value; }
        }
        public string strElective3
        {
            get { return _strElective3; }
            set { _strElective3 = value; }
        }
        public string strElective3Names
        {
            get { return _strElective3Names; }
            set { _strElective3Names = value; }
        }
        public string str4thElective1
        {
            get { return _str4thElective1; }
            set { _str4thElective1 = value; }
        }
        public string str4thElective1Nm
        {
            get { return _str4thElective1Nm; }
            set { _str4thElective1Nm = value; }
        }
        public string str4thElective2
        {
            get { return _str4thElective2; }
            set { _str4thElective2 = value; }
        }
        public string str4thElective2Nm
        {
            get { return _str4thElective2Nm; }
            set { _str4thElective2Nm = value; }
        }
        public string str4thElective3
        {
            get { return _str4thElective3; }
            set { _str4thElective3 = value; }
        }
        public string str4thElective3Nm
        {
            get { return _str4thElective3Nm; }
            set { _str4thElective3Nm = value; }
        }


        /// <summary>
        /// Added by Jyotijeeban Jena on 24th Jan 2018
        /// </summary>
        public int int_ApplicationStatus { get; set; }
        public int int_AppliedYear { get; set; }
        public int int_AutoValidateStatus { get; set; }
        public string BloodGroupName { get; set; }
        /// <summary>
        /// Added by Banaja Banani Rout on 28th May 2018
        /// </summary>
        public int compulsoryId2 { get; set; }
        public string compulsoryName2 { get; set; }
        public int compulsoryId3 { get; set; }
        public string compulsoryName3 { get; set; }


    }
    public class CafDashboard
    {
        public string vch_ApplicantName { get; set; }
        public string vch_FatherName { get; set; }
        public string vch_MotherName { get; set; }
        public string vch_CorHouseNo { get; set; }
        public string vargender { get; set; }
        public string vch_CorMobileNo { get; set; }
        public string vch_EMailID { get; set; }
        public string dtm_DOB { get; set; }
        public int BoardId { get; set; }
        public string vch_CouncilName { get; set; }
        public string vchRollNo { get; set; }
        public string vchRollCode { get; set; }
        public int PassingYear { get; set; }

        public List<CafDashboardOption> cafDashboardOptions { get; set; }
        public List<CafDashboardPayment> cafDashboardPayments { get; set; }
    }
    public class CafDashboardOption
    {
        public int int_CollegeID { get; set; }
        public string vch_CollegeName { get; set; }
        public int StreamID { get; set; }
        public string Stream { get; set; }
    }

    public class CafDashboardPayment
    {
        public string vch_UniqueRefNo { get; set; }
        public string vchGateWayName { get; set; }
        public string vchTransId { get; set; }
        public string vchTransFee { get; set; }
        public string vchTranStatus { get; set; }
        public string vchTransDate { get; set; }
    }
}