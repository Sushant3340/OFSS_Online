using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using OFSS_OL_Entity;

using SqlHelperBSEB;
using OFSS_DAL.Data;
using System.Configuration;


public class CAFDAL
    {   
        string intOutput;
        object param = new object();
       String connectionString = ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString;


    //public string ViewPath()
    //{
    //    string strResult = System.Configuration.ConfigurationManager.AppSettings["photopathdegview"].ToString();
    //    return strResult;
    //}

    //public string UploadPath()
    //{
    //    string strResult = System.Configuration.ConfigurationManager.AppSettings["photopathdeg"].ToString();
    //    return strResult;
    //}

    //public string ViewPathcafas()
    //{
    //    string strResult = System.Configuration.ConfigurationManager.AppSettings["photopathviewcafas"].ToString();
    //    return strResult;
    //}

    //public string UploadPathcafas()
    //{
    //    string strResult = System.Configuration.ConfigurationManager.AppSettings["photopathcafas"].ToString();
    //    return strResult;
    //}

    public List<CAFEntity> getSubject(CAFEntity objfillData)
        {
            SqlDataReader reader = null;
            List<CAFEntity> list = new List<CAFEntity>();
            object[] arr = new object[] {
                                    "@PTYPE", objfillData.Type, "@PCID", objfillData.vch_CollegeName, "@PSid",objfillData.vch_StreamName,
                                };
            try
            {

                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_CAFFILL_SUBJECT", arr);
                list = reader.DataReaderMapToList<CAFEntity>(MappingDirection.Auto);
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

        public List<CAFEntity> fillJuniorStream(CAFEntity objfillData)
        {
            SqlDataReader reader = null;
            List<CAFEntity> list = new List<CAFEntity>();
            object[] arr = new object[] {
                                    "PAction", objfillData.Action, "PCID", objfillData.Cid
                                };
            try
            {

                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_FILLSTREAM", arr);
                list = reader.DataReaderMapToList<CAFEntity>(MappingDirection.Auto);

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

        //public List<CAFEntity> getITIStream(CAFEntity obj)
        //{
        //    SqlDataReader reader = null;
        //    List<CAFEntity> list = new List<CAFEntity>();

        //    object[] arr = new object[] {
        //                            "PAction", obj.Action, "PCID", obj.Cid, "P_intQualificationType", obj.QualificationType
        //                        };
        //    try
        //    {
        //        reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_ITIFILLSTREAM", arr);
        //        list = reader.DataReaderMapToList<CAFEntity>(MappingDirection.Auto);
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception(ex.Message);
        //    }

        //    finally
        //    {
        //        if (reader != null) { reader.Close(); reader.Dispose(); }
        //    }

        //    return list;
        //}

        public List<CAFEntity> fillconfirmJuniorStream(CAFEntity objjstream)
        {
            SqlDataReader reader = null;
            List<CAFEntity> list = new List<CAFEntity>();
            object[] arr = new object[] {
                                    "PAction", objjstream.Action, "PUid", objjstream.UID,
                                };
            try
            {

                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_JUNIOR_LOGIN", arr);
                list = reader.DataReaderMapToList<CAFEntity>(MappingDirection.Auto);

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

        public List<CAFEntity> fillconfprintoption(CAFEntity objjstream)
        {
            SqlDataReader reader = null;
            List<CAFEntity> list = new List<CAFEntity>();
            object[] arr = new object[] {
                                    "PAction", objjstream.Action, "PAID", objjstream.CollStatus,"P_REF_NO", objjstream.strId, "@P_OutMsg", "out",
                                };
            try
            {

                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_ONLINECAF_VIEW", arr);
                list = reader.DataReaderMapToList<CAFEntity>(MappingDirection.Auto);

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

        public List<CAFEntity> FillBoardMark(CAFEntity objbsemrk)
        {
            SqlDataReader reader = null;
            List<CAFEntity> list = new List<CAFEntity>();
            object[] arr = new object[] {
                                    "@ACTION", objbsemrk.Action, "@ROLLNO", objbsemrk.vchRollNo,"@year", objbsemrk.Year,"@ROLLCODE",objbsemrk.vch_RollNo,"@DOB",objbsemrk.DOB, "@intExamType", objbsemrk.intOLNSStateID
                                };
            try
            {

                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_BSERESULT_Modify", arr);
                list = reader.DataReaderMapToList<CAFEntity>(MappingDirection.Auto);

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

        public List<CAFEntity> Fillvacancycollege(CAFEntity objvacncycollege)
        {
            SqlDataReader reader = null;
            List<CAFEntity> list = new List<CAFEntity>();
            object[] arr = new object[] {
                                    "@COLID", objvacncycollege.IntID,"@STRID", objvacncycollege.int_StreamID,
                                };
            try
            {

                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_JR_VANCANCYSEAT", arr);
                list = reader.DataReaderMapToList<CAFEntity>(MappingDirection.Auto);

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

        public string AddCAFData(CAFEntity onlineCAF)
        {
            try
            {
                object[] objArray = new object[] {
                        "@P_Action", onlineCAF.Action,
                        "@intApplicantID", onlineCAF.ApplicantID,
                        "@intBoardID", onlineCAF.BoardId,
                        "@vchExamType", onlineCAF.ExamType,
                        "@intYOP", onlineCAF.pintYOP,
                        "@vchBoardRoll", onlineCAF.RollNo,
                        "@vchRollCode",onlineCAF.vch_RollNo,
                        "@intTotalOption", onlineCAF.pintTotOpt,
                        "@UniqueId", onlineCAF.pStrName,
                        "@vchApplName", onlineCAF.ApplicantName,
                        "@vchFathersName", onlineCAF.FatherName,
                        "@vchMothersName", onlineCAF.MotherName,
                        "@vchGuardName", onlineCAF.strGuardianName,
                        "@intCStateID", Convert.ToInt32(onlineCAF.CorStateId),
                        "@intCDistID", Convert.ToInt32(onlineCAF.CorDistId),
                        "@intCBlockID", Convert.ToInt32(onlineCAF.CorBlockId),
                        "@vchCVillage", onlineCAF.CorVillageName,
                        "@vchCHouseNo", onlineCAF.CorHouseNo,
                        "@vchCPostOffice", onlineCAF.CorPO,
                        "@vchCPS", onlineCAF.CorPS,
                        "@vchCPIN", onlineCAF.CorPinCode,
                        "@vchCTel", onlineCAF.CorPhNo,
                        "@vchCMob", onlineCAF.CorMobileNo,
                        "@vchEmail", onlineCAF.EmailId,
                        "@intPStateID", Convert.ToInt32(onlineCAF.PerStateId),
                        "@intPDistID", Convert.ToInt32(onlineCAF.PerDistId),
                        "@intPBlockID", Convert.ToInt32(onlineCAF.PerBlockId),
                        "@vchPVillage", onlineCAF.PerVillageName,
                        "@vchPHouseNo", onlineCAF.PerHouseNo,
                        "@vchPPostOffice", onlineCAF.PerPO,
                        "@vchPPS", onlineCAF.PerPS,
                        "@vchPPIN", onlineCAF.PerPinCode,
                        "@vchPTel", onlineCAF.PerPhNo,
                        "@vchPMob", onlineCAF.PerMobileNo,
                        "@intResCategory", Convert.ToInt32(onlineCAF.pintReserveID),
                        "@bitPHOH", onlineCAF.PHOH,
                        "@bitESM", onlineCAF.ESM,
                        "@bitSDP", onlineCAF.SDP,
                        "@bitCOM", onlineCAF.CoM,
                        "@bitNCC_A", onlineCAF.NCCA,
                        "@bitNCC_C", onlineCAF.NCCC,
                        "@bitSC_PR", onlineCAF.ScoutPR,
                        "@bitSC_RP", onlineCAF.ScoutRP,
                        "@bitSPR_S", onlineCAF.SportsS,
                        "@bitSPR_N", onlineCAF.SportsN,
                        "@bitSPR_IN", onlineCAF.SportsIN,
                        "@bitOSA", onlineCAF.OSA,
                        "@bitOLNS", onlineCAF.OLNS,
                        "@intBldGrp", Convert.ToInt32(onlineCAF.BloodGrId),
                        "@intReligion", Convert.ToInt32(onlineCAF.ReligionId),
                        "@intGender", Convert.ToInt32(onlineCAF.GENDER),
                        "@dtmDOB", onlineCAF.DOB,
                        "@intNationality", Convert.ToInt32(onlineCAF.Nationality),
                        "@intMTongue", Convert.ToInt32(onlineCAF.MotherTongue),
                        "@vchFathOccu", onlineCAF.FathersOccup,
                        "@vchMothOccu", onlineCAF.MothersOccup,
                        "@dcmAnnualIncome", onlineCAF.AnnualIncome,
                        "@intEnglish", Convert.ToInt32(onlineCAF.MarkSL),
                        "@intMath", Convert.ToInt32(onlineCAF.MarkMath),
                        "@intScience", Convert.ToInt32(onlineCAF.MarkScience),
                        "@intSScience", Convert.ToInt32(onlineCAF.MarkSocialStudies),
                        "@intTotMark", Convert.ToDecimal(onlineCAF.Totalmark),
                        "@intMaxMark", Convert.ToDecimal(onlineCAF.MaxMark),
                        "@bitCompartment", onlineCAF.Compartmental,
                        "@vchCompSubject", onlineCAF.strSubject,
                        "@vchCompFMark", onlineCAF.strFMark,
                        "@vchCompPMark", onlineCAF.strPMark,
                        "@vchSchoolName", onlineCAF.LastInst,
                        "@vchSchoolLoc", onlineCAF.LastInstLoc,
                        "@vchDistName", onlineCAF.strLastInstDist,
                        "@intYOJ", Convert.ToInt32(onlineCAF.YearOfJoining),
                        "@intYOL", Convert.ToInt32(onlineCAF.YearOfLeaving),
                        "@vchCollegeIDS", onlineCAF.strCollegeIDS,
                        "@vchStreamIDS", onlineCAF.strStreamIDS,
                        "@vchCompulsory", onlineCAF.strCompulsory,
                        "@vchCompulsory2", onlineCAF.strCompulsory2,
                        "@vchCompulsory3", onlineCAF.strCompulsory3,
                        "@vchELE1", onlineCAF.strELE1,
                        "@vchELE2", onlineCAF.strELE2,
                        "@vchELE3", onlineCAF.strELE3,
                        "@vchFELE1", onlineCAF.strFELE1,
                        "@vchFELE2", onlineCAF.strFELE2,
                        "@vchFELE3", onlineCAF.strFELE3,
                        "@vchLiveOpt", onlineCAF.strLiveOpt,
                        "@vchPassword", onlineCAF.strPassword,
                        "@bitImageStatus", onlineCAF.bitImageStatus,
                        "@intOSAStateID", Convert.ToInt32(onlineCAF.intOSAStateID),
                        "@intOLNSStateID", Convert.ToInt32(onlineCAF.intOLNSStateID),
                        "@vchOptionSlno", onlineCAF.CertificateIds,
                        "@vchIPAddress", onlineCAF.IPAddress,
                        "@pint_MarkVerfication", Convert.ToInt32(onlineCAF.MarkVerification),
                        "@vchAdharNo", onlineCAF.AdharNo,
                        "@Pint_Accno", onlineCAF.AcNo,
                        "@Pvch_IFSCno", onlineCAF.IFSC,
                        "@Pvch_MICRcode", onlineCAF.MICR,
                        "@Pvch_BankName", onlineCAF.BankName,
                        "@Pvch_BrName", onlineCAF.BrName,
                        "@PhotoDb", onlineCAF.photoDB,
                        "@PintIncomeID", onlineCAF.AIncome == "" ? 0 : Convert.ToInt32(onlineCAF.AIncome),
                        "@PLIDName", onlineCAF.LIDistName,
                        "@intAppliedYear", Convert.ToInt32(onlineCAF.int_AppliedYear),
                        "@Pint_ValidateStatus", Convert.ToInt32(onlineCAF.int_AutoValidateStatus),
                        "@KGBACSts", Convert.ToInt32(onlineCAF.KGBACSts),
                        "@aadharNo", onlineCAF.aadharNo,
                        "@aadharSts", Convert.ToInt32(onlineCAF.aadharSts),
                        "@P_OutMsg", "out"
                 };

                if (onlineCAF.Action == "Q")
                {
                    intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_ADDCAFDATA_QUOTA", out param, objArray).ToString();
                }
                else
                {
                    intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_ADDCAFDATA", out param, objArray).ToString();
                }



            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        public string AddconfprintData(CAFEntity onConfCAF)
        {
            try
            {
                object[] objArray = new object[] {
                        "@PAction", onConfCAF.Action,
                        "@PUid", onConfCAF.ApplicantID, "@PAppStatus",onConfCAF.ApplicationStatus,"@PCollStatus",onConfCAF.CollStatus,"@P_OutMsg", "out"

                 };

                intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PRINTCAF_TRACKING", out param, objArray).ToString();

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        public string printCAF(PrintCAF onlineCAF)
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

        public string SaveOTP(CAFEntity objCAF)
        {
            try
            {
                object[] objArray = new object[] {
                    "@P_Action",objCAF.Action,
                    "@P_vchMobile",objCAF.vch_CorMobileNo,
                    "@P_vchOTP",objCAF.strPassword,
                    "@P_vchAppID",objCAF.UID,
                    "@P_vchEmail",objCAF.vch_EMailID
                 };

                intOutput = SqlHelper.ExecuteNonQuery(connectionString, "USP_OTP_ICU", out param, objArray).ToString();

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        public List<ChkStatus_Entity> chkStatus(ChkStatus_Entity objCAF)
        {
            SqlDataReader reader = null;
            List<ChkStatus_Entity> list = new List<ChkStatus_Entity>();
            object[] objArray = new object[] {
                            "@P_ACTION",objCAF.Action,
                            "@P_VCHMOBNO",objCAF.vch_CorMobileNo,
                            "@P_VCHEMAIL",objCAF.vch_EMailID
                 };
            try
            {

                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_CHKMOBEMAIL", objArray);
                list = reader.DataReaderMapToList<ChkStatus_Entity>(MappingDirection.Auto);

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


        public string ManagePayment(CafPayment objpayment)
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

        #region ICAFDAL Members


        public string ManagePaymentSahaj(Sahaj objpaymentSahaj)
        {
            try
            {
                object[] objArray = new object[] {
                    "@PAction", objpaymentSahaj.Action,
                      "@PintPaymentId", objpaymentSahaj.intPaymentId,
                  "@PUniquerefid",      objpaymentSahaj.Uniquerefid,
                  "@PStudName",     objpaymentSahaj.StudName,
                  "@PStudId",           objpaymentSahaj.StudId,
                  "@PAppFee",           objpaymentSahaj.AppFee,
                  "@Pservice_provider_id",objpaymentSahaj.service_provider_id,
                  "@PAppType",          objpaymentSahaj.AppType,
                  "@Psahaj_txn_id", objpaymentSahaj.sahaj_txn_id,
                  "@Pstatus",           objpaymentSahaj.status,
                };

                intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PAYMENT_UPDATES_SAHAJ", out param, objArray).ToString();

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        }

        public int GetMaxMarksByBoardYear(CAFEntity objbsemrk)
        {
            int intMaxMarks = 500;
            SqlConnection sqlConnection = new SqlConnection();
            sqlConnection.ConnectionString = connectionString;
            SqlCommand sqlCommand = new SqlCommand()
            {
                CommandText = "USP_GetMaxMarksByBoardYear",
                CommandType = System.Data.CommandType.StoredProcedure

            };
            sqlConnection.Open();
            sqlCommand.Connection = sqlConnection;
            sqlCommand.Parameters.AddWithValue("@boardid", objbsemrk.BoardId);
            sqlCommand.Parameters.AddWithValue("@yop", objbsemrk.Year);
            sqlCommand.Parameters.AddWithValue("@action", objbsemrk.Action);
            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
            sqlDataAdapter.SelectCommand = sqlCommand;
            DataTable data = new DataTable();
            
            try
            {
                sqlDataAdapter.Fill(data);
                if (data.Rows.Count > 0)
                {
                    intMaxMarks = Convert.ToInt32(data.Rows[0]["intMaxMarks"]);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                sqlConnection.Close();
            }
            return intMaxMarks;
        }

        #endregion


        #region AddCAFData_Spot
        /// <summary>
        /// Function Added by Ritika Lath to add spot applications on 12th Aug 2020
        /// </summary>
        /// <param name="onlineCAF"></param>
        /// <returns></returns>
        public string AddCAFData_Spot(CAFEntity onlineCAF)
        {
            try
            {
                object[] objArray = new object[] {
                        "@P_Action", onlineCAF.Action,
                        "@intApplicantID", onlineCAF.ApplicantID,
                        "@intBoardID", onlineCAF.BoardId,
                        "@vchExamType", onlineCAF.ExamType,
                        "@intYOP", onlineCAF.pintYOP,
                        "@vchBoardRoll", onlineCAF.RollNo,
                        "@vchRollCode",onlineCAF.vch_RollNo,
                        "@intTotalOption", onlineCAF.pintTotOpt,
                         "@UniqueId", onlineCAF.pStrName,
                        "@vchApplName", onlineCAF.ApplicantName,
                        "@vchFathersName", onlineCAF.FatherName,
                        "@vchMothersName", onlineCAF.MotherName,
                        "@vchGuardName", onlineCAF.strGuardianName,
                        "@intCStateID", Convert.ToInt32(onlineCAF.CorStateId),
                        "@intCDistID", Convert.ToInt32(onlineCAF.CorDistId),
                        "@intCBlockID", Convert.ToInt32(onlineCAF.CorBlockId),
                        "@vchCVillage", onlineCAF.CorVillageName,
                        "@vchCHouseNo", onlineCAF.CorHouseNo,
                        "@vchCPostOffice", onlineCAF.CorPO,
                        "@vchCPS", onlineCAF.CorPS,
                        "@vchCPIN", onlineCAF.CorPinCode,
                        "@vchCTel", onlineCAF.CorPhNo,
                        "@vchCMob", onlineCAF.CorMobileNo,
                        "@vchEmail", onlineCAF.EmailId,
                        "@intPStateID", Convert.ToInt32(onlineCAF.PerStateId),
                        "@intPDistID", Convert.ToInt32(onlineCAF.PerDistId),
                        "@intPBlockID", Convert.ToInt32(onlineCAF.PerBlockId),
                        "@vchPVillage", onlineCAF.PerVillageName,
                        "@vchPHouseNo", onlineCAF.PerHouseNo,
                        "@vchPPostOffice", onlineCAF.PerPO,
                        "@vchPPS", onlineCAF.PerPS,
                        "@vchPPIN", onlineCAF.PerPinCode,
                        "@vchPTel", onlineCAF.PerPhNo,
                        "@vchPMob", onlineCAF.PerMobileNo,
                        "@intResCategory", Convert.ToInt32(onlineCAF.pintReserveID),
                        "@bitPHOH", onlineCAF.PHOH,
                        "@bitESM", onlineCAF.ESM,
                        "@bitSDP", onlineCAF.SDP,
                        "@bitCOM", onlineCAF.CoM,
                        "@bitNCC_A", onlineCAF.NCCA,
                        "@bitNCC_C", onlineCAF.NCCC,
                        "@bitSC_PR", onlineCAF.ScoutPR,
                        "@bitSC_RP", onlineCAF.ScoutRP,
                        "@bitSPR_S", onlineCAF.SportsS,
                        "@bitSPR_N", onlineCAF.SportsN,
                        "@bitSPR_IN", onlineCAF.SportsIN,
                        "@bitOSA", onlineCAF.OSA,
                        "@bitOLNS", onlineCAF.OLNS,
                        "@intBldGrp", Convert.ToInt32(onlineCAF.BloodGrId),
                        "@intReligion", Convert.ToInt32(onlineCAF.ReligionId),
                        "@intGender", Convert.ToInt32(onlineCAF.GENDER),
                        "@dtmDOB", onlineCAF.DOB,
                        "@intNationality", Convert.ToInt32(onlineCAF.Nationality),
                        "@intMTongue", Convert.ToInt32(onlineCAF.MotherTongue),
                        "@vchFathOccu", onlineCAF.FathersOccup,
                        "@vchMothOccu", onlineCAF.MothersOccup,
                        "@dcmAnnualIncome", onlineCAF.AnnualIncome,
                        "@intEnglish", Convert.ToInt32(onlineCAF.MarkSL),
                        "@intMath", Convert.ToInt32(onlineCAF.MarkMath),
                        "@intScience", Convert.ToInt32(onlineCAF.MarkScience),
                        "@intSScience", Convert.ToInt32(onlineCAF.MarkSocialStudies),
                        "@intTotMark", Convert.ToDecimal(onlineCAF.Totalmark),
                        "@intMaxMark", Convert.ToDecimal(onlineCAF.MaxMark),
                        "@bitCompartment", onlineCAF.Compartmental,
                        "@vchCompSubject", onlineCAF.strSubject,
                        "@vchCompFMark", onlineCAF.strFMark,
                        "@vchCompPMark", onlineCAF.strPMark,
                        "@vchSchoolName", onlineCAF.LastInst,
                        "@vchSchoolLoc", onlineCAF.LastInstLoc,
                        "@vchDistName", onlineCAF.strLastInstDist,
                        "@intYOJ", Convert.ToInt32(onlineCAF.YearOfJoining),
                        "@intYOL", Convert.ToInt32(onlineCAF.YearOfLeaving),
                        "@vchCollegeIDS", onlineCAF.strCollegeIDS,
                        "@vchStreamIDS", onlineCAF.strStreamIDS,
                        "@vchCompulsory", onlineCAF.strCompulsory,
                        "@vchCompulsory2", onlineCAF.strCompulsory2,
                        "@vchCompulsory3", onlineCAF.strCompulsory3,
                        "@vchELE1", onlineCAF.strELE1,
                        "@vchELE2", onlineCAF.strELE2,
                        "@vchELE3", onlineCAF.strELE3,
                        "@vchFELE1", onlineCAF.strFELE1,
                        "@vchFELE2", onlineCAF.strFELE2,
                        "@vchFELE3", onlineCAF.strFELE3,
                        "@vchLiveOpt", onlineCAF.strLiveOpt,
                        "@vchPassword", onlineCAF.strPassword,
                        "@PhotoDb", onlineCAF.photoDB,
                        "@bitImageStatus", onlineCAF.bitImageStatus,
                        "@intOSAStateID", Convert.ToInt32(onlineCAF.intOSAStateID),
                        "@intOLNSStateID", Convert.ToInt32(onlineCAF.intOLNSStateID),
                        "@vchOptionSlno", onlineCAF.CertificateIds,
                        "@vchIPAddress", onlineCAF.IPAddress,
                        "@pint_MarkVerfication", Convert.ToInt32(onlineCAF.MarkVerification),
                        "@vchAdharNo", onlineCAF.AdharNo,
                        "@Pint_Accno", onlineCAF.AcNo,
                        "@Pvch_IFSCno", onlineCAF.IFSC,
                        "@Pvch_MICRcode", onlineCAF.MICR,
                        "@Pvch_BankName", onlineCAF.BankName,
                        "@Pvch_BrName", onlineCAF.BrName,
                        "@PintIncomeID", onlineCAF.AIncome == "" ? 0 : Convert.ToInt32(onlineCAF.AIncome),
                        "@PLIDName", onlineCAF.LIDistName,
                        "@intAppliedYear", Convert.ToInt32(onlineCAF.int_AppliedYear),
                        "@Pint_ValidateStatus", Convert.ToInt32(onlineCAF.int_AutoValidateStatus),
                        "@KGBACSts", Convert.ToInt32(onlineCAF.KGBACSts),
                        "@aadharNo", onlineCAF.aadharNo,
                        "@aadharSts", Convert.ToInt32(onlineCAF.aadharSts),
                        "@P_OutMsg", "out"
                 };

                if (onlineCAF.Action == "Q")
                {
                    intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_ADDCAFDATA_QUOTA", out param, objArray).ToString();
                }
                else
                {
                    intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_ADDCAFDATA_SPOT", out param, objArray).ToString();
                }



            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message.ToString());
            }
            return param.ToString();
        } 
        #endregion


    }



