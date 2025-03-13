using System;
using System.Collections.Generic;
using OFSS_OL_Entity;
using System.Data.SqlClient;
using OFSS_OL_Entity_deg;


using SqlHelperBSEB;
using OFSS_DAL.Data;
using System.Configuration;



public class CAFDegDal 
    {
    string intOutput;
    object param = new object();
       String connectionString = ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString;

    public List<CAFEntity_Deg> fillDegStream(CAFEntity_Deg objfillData)
        {
            SqlDataReader reader = null;
            List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
            object[] arr = new object[] { 
                                    "PAction", objfillData.Action, "PCID", objfillData.Cid
                                };
            try
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_FILLSTREAM_DEG", arr);
                list = reader.DataReaderMapToList<CAFEntity_Deg>(MappingDirection.Auto);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            finally
            {
                if (reader != null)
                {
                    reader.Close();
                    reader.Dispose();
                }
            }

            return list;
        }
 
    public List<CAFEntity_Deg> fillDegSubject(CAFEntity_Deg objfillData)  //sams as getDegSubject
        {
            SqlDataReader reader = null;
            List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
            object[] arr = new object[] { 
                                     "PCid", objfillData.Cid ,"PSid",objfillData.StreamID ,"PTYPE" ,objfillData.Type
                                };
            try
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_CAFFILL_SUBJECT_DEG", arr);
                list = reader.DataReaderMapToList<CAFEntity_Deg>(MappingDirection.Auto);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            finally
            {
                if (reader != null)
                {
                    reader.Close();
                    reader.Dispose();
                }
            }

            return list;
        }
        public List<CAFEntity_Deg> VacancyColg(CAFEntity_Deg objfillData)
        {
            SqlDataReader reader = null;
            List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
            object[] arr = new object[] { 
                                     "intCollegeID", objfillData.Cid ,"intStreamId",objfillData.StreamID ,"intSubId" ,objfillData.int_SubjectID
                                };
            try
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_Deg_SeatVacancy", arr);
                list = reader.DataReaderMapToList<CAFEntity_Deg>(MappingDirection.Auto);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            finally
            {
                if (reader != null)
                {
                    reader.Close();
                    reader.Dispose();
                }
            }

            return list;
        }
        public List<CAFEntity_Deg> FillCHSEMark(CAFEntity_Deg objfillData)
        {
            SqlDataReader reader = null;
            List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
            object[] arr = new object[] { 
                                     "ROLLNO", objfillData.vchRollNo ,"YEAR",objfillData.Year  ,"ROLLCODE",objfillData.vch_RollCode
                                };
            try
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_CHSERESULT1", arr);
                list = reader.DataReaderMapToList<CAFEntity_Deg>(MappingDirection.Auto);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            finally
            {
                if (reader != null)
                {
                    reader.Close();
                    reader.Dispose();
                }
            }

            return list;
        }
        public List<CAFEntity_Deg> fillConfirmData(CAFEntity_Deg objfillData)
        {
            SqlDataReader reader = null;
            List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
            object[] arr = new object[] { 
                                    "PAction", objfillData.Action, "PUid", objfillData.UID,
                                };
            try
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_DEG_LOGIN", arr);
                list = reader.DataReaderMapToList<CAFEntity_Deg>(MappingDirection.Auto);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            finally
            {
                if (reader != null)
                {
                    reader.Close();
                    reader.Dispose();
                }
            }

            return list;
        }
        public List<CAFEntity_Deg> fillPrintOption(CAFEntity_Deg objfillData)
        {
            SqlDataReader reader = null;
            List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
            object[] arr = new object[] { 
                                    "PAction", objfillData.Action, "PAID", objfillData.CollStatus,"P_REF_NO", objfillData.strId, "@P_OutMsg", "out",
                                };
            try
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_ONLINECAF_VIEW_DEG", arr);
                list = reader.DataReaderMapToList<CAFEntity_Deg>(MappingDirection.Auto);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            finally
            {
                if (reader != null)
                {
                    reader.Close();
                    reader.Dispose();
                }
            }

            return list;
        }
        public string AddCAFData(CAFEntity_Deg ObjSAMS)
        {
            try
            {
                object[] objArray = new object[] { 
                        "@P_Action", ObjSAMS.Action, "@intApplicantID", ObjSAMS.ApplicantID,"@intCouncilID", ObjSAMS.BoardId, "@vchExamType", ObjSAMS.ExamType, "@intYOP", ObjSAMS.pintYOP, "@vchCouncilRoll", ObjSAMS.RollNo, "@intTotalOption", ObjSAMS.pintTotOpt,
                        "@vchApplName", ObjSAMS.ApplicantName, "@vchFathersName", ObjSAMS.FatherName, "@vchMothersName", ObjSAMS.MotherName, "@intCStateID", ObjSAMS.CorStateId, "@intCDistID", ObjSAMS.CorDistId, 
                        "@intCBlockID", ObjSAMS.CorBlockId, "@vchCHouseNo", ObjSAMS.CorHouseNo, "@vchCPIN", ObjSAMS.CorPinCode, "@vchCTel", ObjSAMS.CorPhNo, "@vchCMob", ObjSAMS.CorMobileNo, "@vchEmail", ObjSAMS.EmailId, 
                        "@intResCategory", ObjSAMS.pintReserveID, "@bitPHOH", ObjSAMS.PHOH, "@bitESM", ObjSAMS.ESM, "@bitSDP", ObjSAMS.SDP, "@bitCOM", ObjSAMS.CoM, "@bitNCC_B", ObjSAMS.NCCA, "@bitNCC_C", ObjSAMS.NCCC, "@bitRover_PR", ObjSAMS.ScoutPR,
                        "@bitRover_RP", ObjSAMS.ScoutRP, "@bitSPR_S", ObjSAMS.SportsS, "@bitSPR_N", ObjSAMS.SportsN, "@bitSPR_IN", ObjSAMS.SportsIN, "@bitNSS_U", ObjSAMS.bitNssU, "@bitNSS_S", ObjSAMS.bitNssS, "@bitNSS_N", ObjSAMS.bitNssN,
                        "@bitNSS_IN", ObjSAMS.bitNssIN, "@bitOSA", ObjSAMS.OSA, "@bitOLNS", ObjSAMS.OLNS, "@intBldGrp", ObjSAMS.BloodGrId, "@intReligion", ObjSAMS.ReligionId, "@intGender", ObjSAMS.GENDER, "@dtmDOB", ObjSAMS.DOB,
                        "@intEnglish", ObjSAMS.MarkSL, "@intMIL", ObjSAMS.MarkMath, "@intChemistry", ObjSAMS.MarkScience, "@intTotMark", ObjSAMS.Totalmark, "@intMaxMark", ObjSAMS.MaxMark, "@bitCompartment", ObjSAMS.Compartmental, 
                        "@vchCompSubject", ObjSAMS.strSubject, "@vchCompFMark", ObjSAMS.strFMark, "@vchCompPMark", ObjSAMS.strPMark, "@vchCollegeIDS", ObjSAMS.strCollegeIDS, "@vchStreamIDS", ObjSAMS.strStreamIDS, "@vchELE1", ObjSAMS.strELE1, 
                        "@vchELE2", ObjSAMS.strELE2, "@vchELE3", ObjSAMS.strELE3, "@vchHostelOpt", ObjSAMS.strLiveOpt, "@vchPassword", ObjSAMS.strPassword, "@bitImageStatus", ObjSAMS.bitImageStatus, "@intOSAStateID", ObjSAMS.intOSAStateID, 
                        "@intOLNSStateID", ObjSAMS.intOLNSStateID, "@vchOptionSlno", ObjSAMS.CertificateIds, "@intPrevStremID", ObjSAMS.StreamID, "@intStreamType", ObjSAMS.strFELE1, "@intBiology", ObjSAMS.MarkSocialStudies, "@Mathematics", ObjSAMS.MATH, 
                        "@vchIPAddress", ObjSAMS.IPAddress, "@pint_MarkVerfication", ObjSAMS.MarkVerification, "@vchAdharNo", ObjSAMS.AdharNo, 
                        "@PVCHPERHOUSENO", ObjSAMS.PerHouseNo, "@PINTPERBLOCKID", ObjSAMS.PerBlockId, "@Pint_PerDistID", ObjSAMS.PerDistId, "@Pint_PerStateID", ObjSAMS.PerStateId, "@Pvch_PerPinCode", ObjSAMS.PerPinCode, "@Pvch_PerPhoneNo", ObjSAMS.PerPhNo, 
                        "@Pvch_PerMobileNo", ObjSAMS.PerMobileNo, "@Pint_Accno", ObjSAMS.AcNo, "@Pvch_IFSCno", ObjSAMS.IFSC, "@pvch_MICRcode", ObjSAMS.MICR, "@Pvch_BankName", ObjSAMS.BankName, "@vch_BrName", ObjSAMS.BrName, "@Pint_AIncomeID", ObjSAMS.AIncome, "@Pvch_LastEduDist", ObjSAMS.LIDistName, 
                        "@Pint_YOJ", ObjSAMS.YearOfJoining, "@Pint_YOL", ObjSAMS.YearOfLeaving, "@Pvch_LastInstitute", ObjSAMS.LastInst, "@Pvch_LastInstLoc", ObjSAMS.LastInstLoc, "@Pvch_Nationality", ObjSAMS.Nationality, "@Pvch_MotherTongue", ObjSAMS.MotherTongue, "@Pvch_FOcu", ObjSAMS.FathersOccup, 
                        "@Pvch_MOcu", ObjSAMS.MothersOccup, "@Pint_LastInst_District", ObjSAMS.LastInstDist,"@vchRollCode", ObjSAMS.vchrollcode, "@P_OutMsg", "out"
                 };

                if (ObjSAMS.Action == "Q")
                {
                    intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_DEG_ADDCAFDATA_QUOTA", out param, objArray).ToString();
                }
                else { 
                 intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_DEG_ADDCAFDATA", out param, objArray).ToString();
                }
               

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }
        public string AddPrintStatus(CAFEntity_Deg ObjSAMS)
        {
            try
            {
                object[] objArray = new object[] { 
                        "@PAction", ObjSAMS.Action, 
                        "@PUid", ObjSAMS.strId, "@PAppStatus",ObjSAMS.ApplicationStatus,"@PCollStatus",ObjSAMS.CollStatus,"@P_OutMsg", "out"
                               
                 };

                intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_DEG_PRINTCAF_TRACKING", out param, objArray).ToString();

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        public string PrintCAFDeg(PrintCAF onlineCAF)
        {
            try
            {
                object[] objArray = new object[] { 
                            "@vch_UniqueRefNo",onlineCAF.vch_UniqueRefNo,
                            "@vch_RollNo",onlineCAF.vch_RollNo
                 };

                intOutput = SqlHelper.ExecuteNonQuery(connectionString, "USP_PrintCAF", out param, objArray).ToString();

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        #region ICAFDegDal Members


        public string SaveOTP(string Action, string vchMobile, string vchOTP, string vchAppID, string vchEmail)
        {
            try
            {
                object[] objArray = new object[] { 
                    "@P_Action",Action,
                    "@P_vchMobile",vchMobile,
                    "@P_vchOTP",vchOTP,
                    "@P_vchAppID",vchAppID,
                    "@P_vchEmail",vchEmail
                 };

                intOutput = SqlHelper.ExecuteNonQuery(connectionString, "USP_OTP_ICU", out param, objArray).ToString();

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        #endregion

        #region ICAFDegDal Members


        public List<ChkStatusDeg> chkStatusDeg(ChkStatusDeg objCAF)
        {
            SqlDataReader reader = null;
            List<ChkStatusDeg> list = new List<ChkStatusDeg>();
            object[] objArray = new object[] { 
                            "@P_ACTION",objCAF.Action,
                            "@P_VCHMOBNO",objCAF.vch_CorMobileNo,
                            "@P_VCHEMAIL",objCAF.vch_EMailID
                 };
            try
            {

                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_CHKMOBEMAIL", objArray);
                list = reader.DataReaderMapToList<ChkStatusDeg>(MappingDirection.Auto);

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            finally
            {
                if (reader != null) { reader.Close(); reader.Dispose(); }
            }

            return list;
        }

        #endregion

        #region ICAFDegDal Members


        public string ManagePayment(CafPaymentDeg objpayment)
        {
            try
            {
                object[] objArray = new object[] { 
                    "@PAction", objpayment.Action,
                    "@PclientTxnId",objpayment.clientTxnId,
                    "@Pvch_UniqueRefNo",objpayment.vch_UniqueRefNo,
                    "@PpgRespCode",objpayment.pgRespCode,
                    "@PPGTxnNo",objpayment.PGTxnNo,      
                    "@PissuerRefNo",objpayment.issuerRefNo,
                    "@PauthIdCode",objpayment.authIdCode,
                    "@Pamount",objpayment.amount,
                    "@PclientTxnId",objpayment.clientTxnId,
                    "@PfirstName",objpayment.firstName,
                    "@PpayMode",objpayment.payMode,
                    "@Pemail",objpayment.email,
                    "@PmobileNo",objpayment.mobileNo,
                    "@PspRespCode",objpayment.spRespCode,
                    "@Pcid",objpayment.cid,
                    "@Pbid",objpayment.bid,
                    "@PclientCode",objpayment.clientCode,
                    "@PpayeeProfile",objpayment.payeeProfile,
                    "@PtransDate",objpayment.transDate,
                    "@PspRespStatus",objpayment.spRespStatus,
                    "@PchallanNo",objpayment.challanNo,
                    "@PreMsg",objpayment.reMsg,
                    "@PorgTxnAmount",objpayment.orgTxnAmount,
                    "@PprogramId",objpayment.programId,
                    //"@Pint_ApplicantID",objpayment.int_ApplicantID,
                    "@Pvch_UniqueRefNo",objpayment.vch_UniqueRefNo,
                   "@PintPaymentInt",objpayment.intPaymentInt,



                 };

                intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PAYMENT_UPDATES", out param, objArray).ToString();

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        #endregion

        #region ICAFDegDal Members


        public string ManagePaymentSahajDeg(SahajDeg objpaymentSahaj)
        {
            try
            {
                object[] objArray = new object[] { 
                    "@PAction", objpaymentSahaj.Action,
                      "@PintPaymentId",	objpaymentSahaj.intPaymentId,
                  "@PUniquerefid",		objpaymentSahaj.Uniquerefid,
                  "@PStudName",		objpaymentSahaj.StudName,
                  "@PStudId",			objpaymentSahaj.StudId,
                  "@PAppFee",			objpaymentSahaj.AppFee,
                  "@Pservice_provider_id",objpaymentSahaj.service_provider_id,
                  "@PAppType",			objpaymentSahaj.AppType,
                  "@Psahaj_txn_id",	objpaymentSahaj.sahaj_txn_id,
                  "@Pstatus",			objpaymentSahaj.status,
                };

                intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PAYMENT_UPDATES_SAHAJ_DEG", out param, objArray).ToString();

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        #endregion

        #region ICAFDegDal Members


        public string ManagePaymentSBIePayDeg(SBIePayDeg objpaymentSbiePay)
        {
            try
            {
                object[] objArray = new object[] { 
                    "@PAction", objpaymentSbiePay.Action,
                    "@PMerchantOrderNo", objpaymentSbiePay.MerchantOrderNo,	
                    "@PUniqueRefNo", objpaymentSbiePay.UniqueRefNo ,		
                    "@PStudName", objpaymentSbiePay.StudName,			
                    "@PSBIePayReferenceID", objpaymentSbiePay.SBIePayReferenceID,	
                    "@PStatus", objpaymentSbiePay.Status,				
                    "@PAmount", objpaymentSbiePay.Amount,				
                    "@PActualAmount", objpaymentSbiePay.ActualAmount,
                    "@PCurrency", objpaymentSbiePay.Currency,
                    "@PPaymode"	, objpaymentSbiePay.Paymode,		
                    "@POtherDetails", objpaymentSbiePay.OtherDetails,		
                    "@PReason"	, objpaymentSbiePay.Reason,
                    "@PBankCode", objpaymentSbiePay.BankCode,			
                    "@PBankReferenceNumber", objpaymentSbiePay.BankReferenceNumber,
                    "@PTransactionDate"	, objpaymentSbiePay.TransactionDate,
                    "@PCountry"	, objpaymentSbiePay.Country,		
                    "@PCIN"	, objpaymentSbiePay.CIN			
                };

                intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PAYMENT_UPDATES_SBIEPAY_DEG", out param, objArray).ToString();

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        #endregion

        #region ICAFDegDal Members

        public string IsHonoursSubject(int intCurStream, int intSubid, int intYOP, string strRollNo, string strRollCode, int intPrevStream, int intTotalMark, int intMaxMark)
        {
            try
            {
                object[] objArray = new object[] { 
                   "@CURRSTREAMID"  ,  intCurStream
                 , "@SUBJECTID"		,   intSubid
                 , "@YOP"			,   intYOP
                 , "@ROLLNO"		,	strRollNo
                 , "@ROLLCODE"		,   strRollCode
                 , "@PREVSTREAMID"	,   intPrevStream
                 , "@TOTMARK"		,   intTotalMark
                 , "@MAXMARK"		,   intMaxMark
                };

                intOutput = SqlHelper.ExecuteNonQuery(connectionString, "USP_CheckeligiblityHonSubject", out param, objArray).ToString();

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        #endregion
            
        public List<Deg_Eligibility> GetStudentEligibility_Deg(Deg_Eligibility objSearch)
        {
            SqlDataReader reader = null;
            List<Deg_Eligibility> list = new List<Deg_Eligibility>();

            object[] arr = new object[] { 
                                    "pVchRollCode", objSearch.VchRollCode, 
                                    "pVchRollNo", objSearch.VchRollNo,
                                    "pIntMaxMarks", objSearch.IntMaxMarks, 
                                    "pIntAggrMarks", objSearch.IntAggrMarks, 
                                    "pIntJunStream", objSearch.IntJunStream, 
                                    "pIntHonSubject", objSearch.IntHonSubject, 
                                    "pIntHonStream", objSearch.IntHonStream, 
                                    "pBitBSEB", objSearch.BitBSEB, 
                                    "pIntYear", objSearch.IntYear, 
                                };
            try
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_CheckDegCourse_Eligibility", arr);
                list = reader.DataReaderMapToList<Deg_Eligibility>(MappingDirection.Auto);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            finally
            {
                if (reader != null)
                {
                    reader.Close();
                    reader.Dispose();
                }
            }

            return list;
        }
    }


