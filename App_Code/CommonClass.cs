using CommonModels;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using SqlHelperBSEB;
using OFSS_DAL.Data;
using System.Configuration;
using System.Drawing;




public class CommonClass
{
    string intOutput;
    object param = new object();

   
        // Ensure that the name matches exactly with the one in web.config
       String connectionString = ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString;
    
    public List<CafDashboard> FillStudentDashboards(CAFEntity cAFEntity)
    {
        List<CafDashboard> cafDashboards = new List<CafDashboard>();

        SqlConnection sqlConnection = new SqlConnection();
        sqlConnection.ConnectionString = connectionString;
        try
        {
            SqlCommand sqlCommand = new SqlCommand()
            {
                Connection = sqlConnection,
                CommandText = "SP_STUDENTLOGIN_DASHBOARD_JUN",
                CommandType = CommandType.StoredProcedure
            };
            sqlCommand.Parameters.AddWithValue("@P_ACTION", cAFEntity.Action);
            sqlCommand.Parameters.AddWithValue("@P_REF_NO", cAFEntity.strId);
            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(sqlCommand);
            sqlConnection.Open();
            DataSet dataSet = new DataSet();
            sqlDataAdapter.Fill(dataSet);

            if (dataSet.Tables.Count > 0)
            {
                CafDashboard cafDashboard = new CafDashboard();
                DataTable dataTable = new DataTable();
                dataTable = dataSet.Tables[0];
                if (dataTable.Rows.Count > 0)
                {

                    cafDashboard.BoardId = dataTable.Rows[0]["BoardId"] != DBNull.Value && dataTable.Rows[0]["BoardId"] != null ? Convert.ToInt32(dataTable.Rows[0]["BoardId"]) : 0;
                    cafDashboard.PassingYear = dataTable.Rows[0]["PassingYear"] != DBNull.Value && dataTable.Rows[0]["PassingYear"] != null ? Convert.ToInt32(dataTable.Rows[0]["PassingYear"]) : 0;
                    cafDashboard.vch_ApplicantName = dataTable.Rows[0]["vch_ApplicantName"] != DBNull.Value && dataTable.Rows[0]["vch_ApplicantName"] != null ? Convert.ToString(dataTable.Rows[0]["vch_ApplicantName"]) : string.Empty;
                    cafDashboard.vch_CorHouseNo = dataTable.Rows[0]["vch_CorHouseNo"] != DBNull.Value && dataTable.Rows[0]["vch_CorHouseNo"] != null ? Convert.ToString(dataTable.Rows[0]["vch_CorHouseNo"]) : string.Empty;
                    cafDashboard.vch_CorMobileNo = dataTable.Rows[0]["vch_CorMobileNo"] != DBNull.Value && dataTable.Rows[0]["vch_CorMobileNo"] != null ? Convert.ToString(dataTable.Rows[0]["vch_CorMobileNo"]) : string.Empty;
                    cafDashboard.vch_CouncilName = dataTable.Rows[0]["vch_CouncilName"] != DBNull.Value && dataTable.Rows[0]["vch_CouncilName"] != null ? Convert.ToString(dataTable.Rows[0]["vch_CouncilName"]) : string.Empty;
                    cafDashboard.vch_EMailID = dataTable.Rows[0]["vch_EMailID"] != DBNull.Value && dataTable.Rows[0]["vch_EMailID"] != null ? Convert.ToString(dataTable.Rows[0]["vch_EMailID"]) : string.Empty;
                    cafDashboard.vch_FatherName = dataTable.Rows[0]["vch_FatherName"] != DBNull.Value && dataTable.Rows[0]["vch_FatherName"] != null ? Convert.ToString(dataTable.Rows[0]["vch_FatherName"]) : string.Empty;
                    cafDashboard.vch_MotherName = dataTable.Rows[0]["vch_MotherName"] != DBNull.Value && dataTable.Rows[0]["vch_MotherName"] != null ? Convert.ToString(dataTable.Rows[0]["vch_MotherName"]) : string.Empty;
                    cafDashboard.vchRollCode = dataTable.Rows[0]["vchRollCode"] != DBNull.Value && dataTable.Rows[0]["vchRollCode"] != null ? Convert.ToString(dataTable.Rows[0]["vchRollCode"]) : string.Empty;
                    cafDashboard.vchRollNo = dataTable.Rows[0]["vchRollNo"] != DBNull.Value && dataTable.Rows[0]["vchRollNo"] != null ? Convert.ToString(dataTable.Rows[0]["vchRollNo"]) : string.Empty;
                    cafDashboard.vargender = dataTable.Rows[0]["vargender"] != DBNull.Value && dataTable.Rows[0]["vargender"] != null ? Convert.ToString(dataTable.Rows[0]["vargender"]) : string.Empty;
                    cafDashboard.dtm_DOB = dataTable.Rows[0]["dtm_DOB"] != DBNull.Value && dataTable.Rows[0]["dtm_DOB"] != null ? Convert.ToDateTime(dataTable.Rows[0]["dtm_DOB"]).ToString("dd-MM-yyyy") : string.Empty;

                }

                dataTable = new DataTable();
                dataTable = dataSet.Tables[1];
                List<CafDashboardOption> cafDashboardOptions = new List<CafDashboardOption>();
                if (dataTable.Rows.Count > 0)
                {

                    for (int cnt = 0; cnt < dataTable.Rows.Count; cnt++)
                    {
                        CafDashboardOption cafDashboardOption = new CafDashboardOption();
                        cafDashboardOption.int_CollegeID = dataTable.Rows[cnt]["int_CollegeID"] != DBNull.Value && dataTable.Rows[cnt]["int_CollegeID"] != null ? Convert.ToInt32(dataTable.Rows[cnt]["int_CollegeID"]) : cnt;
                        cafDashboardOption.StreamID = dataTable.Rows[cnt]["StreamID"] != DBNull.Value && dataTable.Rows[cnt]["StreamID"] != null ? Convert.ToInt32(dataTable.Rows[cnt]["StreamID"]) : cnt;
                        cafDashboardOption.vch_CollegeName = dataTable.Rows[cnt]["vch_CollegeName"] != DBNull.Value && dataTable.Rows[cnt]["vch_CollegeName"] != null ? Convert.ToString(dataTable.Rows[cnt]["vch_CollegeName"]) : string.Empty;
                        cafDashboardOption.Stream = dataTable.Rows[cnt]["Stream"] != DBNull.Value && dataTable.Rows[cnt]["Stream"] != null ? Convert.ToString(dataTable.Rows[cnt]["Stream"]) : string.Empty;
                        cafDashboardOptions.Add(cafDashboardOption);
                    }
                }
                cafDashboard.cafDashboardOptions = cafDashboardOptions;

                dataTable = new DataTable();
                dataTable = dataSet.Tables[2];
                List<CafDashboardPayment> cafDashboardPayments = new List<CafDashboardPayment>();
                if (dataTable.Rows.Count > 0)
                {

                    for (int cnt = 0; cnt < dataTable.Rows.Count; cnt++)
                    {
                        CafDashboardPayment cafDashboardPayment = new CafDashboardPayment();

                        cafDashboardPayment.vchGateWayName = dataTable.Rows[cnt]["vchGateWayName"] != DBNull.Value && dataTable.Rows[cnt]["vchGateWayName"] != null ? Convert.ToString(dataTable.Rows[cnt]["vchGateWayName"]) : string.Empty;
                        cafDashboardPayment.vchTransDate = dataTable.Rows[cnt]["vchTransDate"] != DBNull.Value && dataTable.Rows[cnt]["vchTransDate"] != null ? Convert.ToString(dataTable.Rows[cnt]["vchTransDate"]) : string.Empty;
                        cafDashboardPayment.vchTransFee = dataTable.Rows[cnt]["vchTransFee"] != DBNull.Value && dataTable.Rows[cnt]["vchTransFee"] != null ? Convert.ToString(dataTable.Rows[cnt]["vchTransFee"]) : string.Empty;
                        cafDashboardPayment.vchTransId = dataTable.Rows[cnt]["vchTransId"] != DBNull.Value && dataTable.Rows[cnt]["vchTransId"] != null ? Convert.ToString(dataTable.Rows[cnt]["vchTransId"]) : string.Empty;
                        cafDashboardPayment.vchTranStatus = dataTable.Rows[cnt]["vchTranStatus"] != DBNull.Value && dataTable.Rows[cnt]["vchTranStatus"] != null ? Convert.ToString(dataTable.Rows[cnt]["vchTranStatus"]) : string.Empty;
                        cafDashboardPayment.vch_UniqueRefNo = dataTable.Rows[cnt]["vch_UniqueRefNo"] != DBNull.Value && dataTable.Rows[cnt]["vch_UniqueRefNo"] != null ? Convert.ToString(dataTable.Rows[cnt]["vch_UniqueRefNo"]) : string.Empty;

                        cafDashboardPayments.Add(cafDashboardPayment);
                    }
                }
                cafDashboard.cafDashboardPayments = cafDashboardPayments;
                cafDashboards.Add(cafDashboard);
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
        return cafDashboards;

    }

    public List<StudentLogIn> ViewNewUser(StudentLogIn objStu)
    {
        SqlDataReader reader = null;
        List<StudentLogIn> list = new List<StudentLogIn>();
        object[] arr = new object[] {
                                    "char_Action", objStu.char_Action,
                                     "int_UserID", objStu.int_UserID,
                                    "vch_UserName", objStu.vch_UserName,
                                    "vch_Password",objStu.vch_Password,
                                    "vch_OPassword",objStu.vch_OPassword
                                };
        try
        {
            reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_Student_Login", arr);
            list = reader.DataReaderMapToList<StudentLogIn>(MappingDirection.Auto);
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        if (reader != null)
        {
            reader.Close();
            reader.Dispose();
        }

        return list;
    }

    public List<CAFEntity> FillCAF(CAFEntity objCAF)
    {
        SqlDataReader reader = null;
        List<CAFEntity> list = new List<CAFEntity>();
        object[] objArray = new object[] {
                            "@P_Action",objCAF.Action,
                            "@vch_UniqueRefNo",objCAF.vch_UniqueRefNo

                 };
        try
        {

            reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_VIEW_STUDENT_CAFDATA", objArray);
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

    public int InsertExceptionDetails(ClsExpData objExceptionData)
    {
        int strRetvalue = 0;
        SqlCommand objCommand = new SqlCommand();
        SqlConnection objConnection = new SqlConnection();
        try
        {
            objConnection.ConnectionString = connectionString;
            objCommand.CommandText = "USP_MANAGE_EXCEPTION";
            objCommand.Connection = objConnection;
            objCommand.CommandType = CommandType.StoredProcedure;
            objCommand.Parameters.AddWithValue("@P_VCHMESSAGE", objExceptionData.vchMessage);
            objCommand.Parameters.AddWithValue("@P_VCHSTACKTRACE", objExceptionData.vchStackTrace);
            objCommand.Parameters.AddWithValue("@P_VCHSOURCE", objExceptionData.vchSource);
            objCommand.Parameters.AddWithValue("@P_VCHTARGETSITE", objExceptionData.vchTargetSite);
            objCommand.Parameters.AddWithValue("@P_VCHMODULENAME", objExceptionData.vchModuleName);
            objCommand.Parameters.AddWithValue("@P_ACTION", "I");
            SqlParameter objOutParam = new SqlParameter()
            {
                ParameterName = "@P_INT_OUT",
                Direction = ParameterDirection.Output,
                SqlDbType = SqlDbType.VarChar,
                Size = 100
            };
            objCommand.Parameters.Add(objOutParam);
            object obj = new object();
            if (objConnection.State == ConnectionState.Closed)
            {
                objConnection.Open();
            }
            objCommand.ExecuteNonQuery();
            obj = objOutParam.Value;
            if (obj != null && obj != DBNull.Value)
            {
                strRetvalue = Convert.ToInt32(obj);
            }
        }
        catch (Exception ex)
        {

        }
        finally
        {
            objConnection.Close();
            objCommand = null;
            objConnection = null;
        }
        return strRetvalue;
    }

    public int InsertSecurityLogForCSRF(ClsExpData objExceptionData)
    {
        int strRetvalue = 0;
        SqlCommand objCommand = new SqlCommand();
        SqlConnection objConnection = new SqlConnection();
        try
        {
            objConnection.ConnectionString = connectionString;
            objCommand.CommandText = "USP_Security_Log";
            objCommand.Connection = objConnection;
            objCommand.CommandType = CommandType.StoredProcedure;
            objCommand.Parameters.AddWithValue("@p_action", "i");
            objCommand.Parameters.AddWithValue("@p_vchLoggedInUser", objExceptionData.strLoggedInUser);
            objCommand.Parameters.AddWithValue("@p_vchPageName", objExceptionData.strPageName);
            objCommand.Parameters.AddWithValue("@p_vchModuleName", objExceptionData.vchModuleName);
            objCommand.Parameters.AddWithValue("@p_vchIpAddress", objExceptionData.strIpAddress);
            objCommand.Parameters.AddWithValue("@p_IntType", objExceptionData.intType);
            SqlParameter objOutParam = new SqlParameter()
            {
                ParameterName = "@P_INT_OUT",
                Direction = ParameterDirection.Output,
                SqlDbType = SqlDbType.VarChar,
                Size = 100
            };
            objCommand.Parameters.Add(objOutParam);
            object obj = new object();
            if (objConnection.State == ConnectionState.Closed)
            {
                objConnection.Open();
            }
            objCommand.ExecuteNonQuery();
            obj = objOutParam.Value;
            if (obj != null && obj != DBNull.Value)
            {
                strRetvalue = Convert.ToInt32(obj);
            }
        }
        catch (Exception ex)
        {

        }
        finally
        {
            objConnection.Close();
            objCommand = null;
            objConnection = null;
        }
        return strRetvalue;
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
                        "@PintIncomeID", onlineCAF.AIncome == "" ? 0 : Convert.ToInt32(onlineCAF.AIncome),
                        "@PLIDName", onlineCAF.LIDistName,
                        "@intAppliedYear", Convert.ToInt32(onlineCAF.int_AppliedYear),
                        "@Pint_ValidateStatus", Convert.ToInt32(onlineCAF.int_AutoValidateStatus),
                        "@Pint_EWS", onlineCAF.intEWS,
                        "@KGBACSts", Convert.ToInt32(onlineCAF.KGBACSts),
                        "@aadharNo", onlineCAF.aadharNo,
                        "@aadharSts", Convert.ToInt32(onlineCAF.aadharSts),
                        "@P_OutMsg", "out"
                 };

            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "USP_UPDATE_CAFDATA", out param, objArray).ToString();

        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
    }

    public string ManageSelection(CAFEntity_Deg ObjSAMS)
    {
        try
        {
            object[] objArray = new object[] {
                            "@PAction",ObjSAMS.Action,
                            "@intUserID",ObjSAMS.UserId,
                            "@intPreferStatus",ObjSAMS.ApplicationStatus,
                            "@Vch_UniqueRefNo",ObjSAMS.vch_UniqueRefNo,
                            "@vchMobile",ObjSAMS.CorMobileNo,
                            "@vchOTP",ObjSAMS.vchOTP,
                            "@Msgout", "out"
                 };

            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "USP_ANNEXURE7_GIVENBY_STUDENT", out param, objArray).ToString();
        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
    }

    public List<CAFEntity_Deg> fillPrintOption(CAFEntity_Deg objfillData)
    {
        SqlDataReader reader = null;
        List<CAFEntity_Deg> list = new List<CAFEntity_Deg>();
        object[] arr = new object[] {
                                    "P_ACTION", objfillData.Action, "P_REF_NO", objfillData.strId, "@P_OUTMSG", "out",
                                };
        try
        {
            reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_DEG_UPDATE_CAFDATA", arr);
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
    public string UpdateSecondSelectionPref(StudentLogIn objStudentLogin)
    {
        string strRetValue = string.Empty;
        SqlConnection objConnection = new SqlConnection();
        SqlCommand objCommand = new SqlCommand();
        try
        {

            objConnection.ConnectionString = connectionString;
            objCommand.CommandText = "USP_UPDATE_SELECTION_PREF_DEG";
            objCommand.CommandType = CommandType.StoredProcedure;
            objCommand.Connection = objConnection;
            objCommand.Parameters.AddWithValue("@P_vchAction", objStudentLogin.char_Action);
            objCommand.Parameters.AddWithValue("@P_vchMobNo", objStudentLogin.vch_MobNo);
            objCommand.Parameters.AddWithValue("@P_vchEmail", objStudentLogin.vch_emailID);
            objCommand.Parameters.AddWithValue("@P_vchOTP", objStudentLogin.vch_OTP);
            objCommand.Parameters.AddWithValue("@P_intUserId", objStudentLogin.int_UserID);
            objCommand.Parameters.AddWithValue("@p_UniqueRefId", objStudentLogin.vch_UniqueRefNo);
            SqlParameter objParam = new SqlParameter()
            {
                Direction = ParameterDirection.Output,
                ParameterName = "@P_MSGOUT",
                Size = 100
            };
            objCommand.Parameters.Add(objParam);
            if (objConnection.State == ConnectionState.Closed)
            {
                objConnection.Open();
            }

            objCommand.ExecuteNonQuery();
            object obj = new object();
            obj = objParam.Value;
            if (obj != null && obj != DBNull.Value)
            {
                strRetValue = obj.ToString();
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            objConnection.Close();
            objConnection = null;
            objCommand = null;
        }

        return strRetValue;
    }
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

    public string AddDegCAFData(CAFEntity_Deg ObjSAMS)
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
                        "@Pvch_MOcu", ObjSAMS.MothersOccup, "@Pint_LastInst_District", ObjSAMS.LastInstDist,"@vchRollCode", ObjSAMS.vchrollcode,"@MaxTotal", ObjSAMS.Total, "@P_OutMsg", "out"
                 };
            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_DEG_UPDATE_CAFDATA", out param, objArray).ToString();

        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
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

    public List<CAFEntity> FillStudentDashBoardDegree(CAFEntity objjstream)
    {
        SqlDataReader reader = null;
        List<CAFEntity> list = new List<CAFEntity>();
        object[] arr = new object[] {
                                    "@P_ACTION", objjstream.Action, "@P_REF_NO", objjstream.strId,
                                };
        try
        {

            reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_DEG_STUDENTLOGIN_DASHBOARD", arr);
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

    public string ManageSelection_Jr(CAFEntity ObjSAMS)
    {
        try
        {
            object[] objArray = new object[] {
                            "@PAction",ObjSAMS.Action,
                            "@intUserID",ObjSAMS.UserId,
                            "@intPreferStatus",ObjSAMS.ApplicationStatus,
                            "@Vch_UniqueRefNo",ObjSAMS.vch_UniqueRefNo,
                            "@vchMobile",ObjSAMS.CorMobileNo,
                            "@vchOTP",ObjSAMS.vchOTP,
                            "@Msgout", "out"
                 };

            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "USP_ANNEXURE7_GIVENBY_STUDENT_Jr", out param, objArray).ToString();
        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
    }

    public string UpdateSecondSelectionPref_JR(StudentLogIn objStudentLogin)
    {
        string strRetValue = string.Empty;
        SqlConnection objConnection = new SqlConnection();
        SqlCommand objCommand = new SqlCommand();
        try
        {

            objConnection.ConnectionString = connectionString;
            objCommand.CommandText = "USP_UPDATE_SELECTION_PREF_JR";
            objCommand.CommandType = CommandType.StoredProcedure;
            objCommand.Connection = objConnection;
            objCommand.Parameters.AddWithValue("@P_vchAction", objStudentLogin.char_Action);
            objCommand.Parameters.AddWithValue("@P_vchMobNo", objStudentLogin.vch_MobNo);
            objCommand.Parameters.AddWithValue("@P_vchEmail", objStudentLogin.vch_emailID);
            objCommand.Parameters.AddWithValue("@P_vchOTP", objStudentLogin.vch_OTP);
            objCommand.Parameters.AddWithValue("@P_intUserId", objStudentLogin.int_UserID);
            objCommand.Parameters.AddWithValue("@p_UniqueRefId", objStudentLogin.vch_UniqueRefNo);
            SqlParameter objParam = new SqlParameter()
            {
                Direction = ParameterDirection.Output,
                ParameterName = "@P_MSGOUT",
                Size = 100
            };
            objCommand.Parameters.Add(objParam);
            if (objConnection.State == ConnectionState.Closed)
            {
                objConnection.Open();
            }

            objCommand.ExecuteNonQuery();
            object obj = new object();
            obj = objParam.Value;
            if (obj != null && obj != DBNull.Value)
            {
                strRetValue = obj.ToString();
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            objConnection.Close();
            objConnection = null;
            objCommand = null;
        }

        return strRetValue;
    }
    public List<CAFEntity> FillStudentDashBoardJunior(CAFEntity objjstream)
    {
        SqlDataReader reader = null;
        List<CAFEntity> list = new List<CAFEntity>();
        object[] arr = new object[] {
                                    "@P_ACTION", objjstream.Action, "@P_REF_NO", objjstream.strId,
                                };
        try
        {

            reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_STUDENTLOGIN_DASHBOARD_JUN", arr);
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

    public string ManagePaymentHDFC_JR(HDFCEntityJr objpaymentHDFC)
    {
        try
        {
            object[] objArray = new object[] {
                    "@PAction", objpaymentHDFC.Action,
                    "@PMERCHANTORDERNO", objpaymentHDFC.OrderId,
                    "@PUNIQUEREFNO", objpaymentHDFC.UniqueRefNo ,
                    "@PSTUDNAME", objpaymentHDFC.StudName,
                    "@PHDFCReferenceID", objpaymentHDFC.HDFCReferenceID,
                    "@PSTATUS", objpaymentHDFC.Status,
                    "@PAmount", objpaymentHDFC.TrnAmt,
                    "@PTranDate" , objpaymentHDFC.TransactionDate,
                    "@merchant_param1", objpaymentHDFC.merchant_param1,
                    "@PPlainText" , objpaymentHDFC.PlainText,
                    "@PEncryptValue" , objpaymentHDFC.EncryptValue,
                    "@PresultData" , objpaymentHDFC.resultData,
                    "@PTID" , objpaymentHDFC.TID,
                    "@PstrFailureMsg" , objpaymentHDFC.strFailureMsg,
                    "@Pbank_ref_no" , objpaymentHDFC.bank_ref_no,
                    "@Ppayment_mode" , objpaymentHDFC.payment_mode,
                    "@Pbilling_name" , objpaymentHDFC.billing_name

                };

            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PAYMENT_UPDATES_HDFC_JR", out param, objArray).ToString();

        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
    }

    public string ManagePaymentAxis_JR(AxisJrEntity objpaymentAxis)
    {
        try
        {
            object[] objArray = new object[] {
                    "@PAction", objpaymentAxis.Action,
                    "@PMERCHANTORDERNO", objpaymentAxis.OrderId,
                    "@PUNIQUEREFNO", objpaymentAxis.UniqueRefNo ,
                    "@PSTUDNAME", objpaymentAxis.StudName,
                    "@PAxisReferenceID", objpaymentAxis.AxisReferenceID,
                    "@PSTATUS", objpaymentAxis.Status,
                    "@StatusCode", objpaymentAxis.StatusCode,
                    "@PAmount", objpaymentAxis.TrnAmt,
                    "@PGatewayVersion" , objpaymentAxis.GatewayVersion,
                    "@PGatewayType", objpaymentAxis.GatewayType,
                    "@PCustomerRefNo"  , objpaymentAxis.CustomerRefNo,
                    "@PvchRE1", objpaymentAxis.strRE1,
                    "@PvchRE2", objpaymentAxis.strRE2,
                    "@PvchRE3" , objpaymentAxis.strRE3,
                    "@PvchRE4" , objpaymentAxis.strRE4,
                    "@PvchRE5" , objpaymentAxis.strRE5,
                    "@PTrnCurrency" , objpaymentAxis.TrnCurrency,
                    "@PTranRemark" , objpaymentAxis.TrnRemarks,
                    "@PTranDate" , objpaymentAxis.TransactionDate,
                    "@PPaymentMode" , objpaymentAxis.PaymentMode,
                    "@PPaymentModeDesc" , objpaymentAxis.PaymentModeDesc,
                    "@PPlainText" , objpaymentAxis.PlainText,
                    "@PEncryptValue" , objpaymentAxis.EncryptValue,
                    "@PBankTranId" , objpaymentAxis.BankTranId,
                    "@PresultData" , objpaymentAxis.resultData

                };

            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PAYMENT_UPDATES_AXIS_JR", out param, objArray).ToString();

        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
    }

    public string ManagePayment_JR(CafPayment objpayment)
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

    public string ManagePaymentSahaj_JR(SahajDeg objpaymentSahaj)
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

    public List<CafDashboard> FillStudentDashboardDataset(CAFEntity cAFEntity)
    {
        List<CafDashboard> cafDashboards = new List<CafDashboard>();

        SqlConnection sqlConnection = new SqlConnection();
        sqlConnection.ConnectionString = connectionString;
        try
        {
            SqlCommand sqlCommand = new SqlCommand()
            {
                Connection = sqlConnection,
                CommandText = "SP_STUDENTLOGIN_DASHBOARD_JUN",
                CommandType = CommandType.StoredProcedure
            };
            sqlCommand.Parameters.AddWithValue("@P_ACTION", cAFEntity.Action);
            sqlCommand.Parameters.AddWithValue("@P_REF_NO", cAFEntity.strId);
            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(sqlCommand);
            sqlConnection.Open();
            DataSet dataSet = new DataSet();
            sqlDataAdapter.Fill(dataSet);

            if (dataSet.Tables.Count > 0)
            {
                CafDashboard cafDashboard = new CafDashboard();
                DataTable dataTable = new DataTable();
                dataTable = dataSet.Tables[0];
                if (dataTable.Rows.Count > 0)
                {

                    cafDashboard.BoardId = dataTable.Rows[0]["BoardId"] != DBNull.Value && dataTable.Rows[0]["BoardId"] != null ? Convert.ToInt32(dataTable.Rows[0]["BoardId"]) : 0;
                    cafDashboard.PassingYear = dataTable.Rows[0]["PassingYear"] != DBNull.Value && dataTable.Rows[0]["PassingYear"] != null ? Convert.ToInt32(dataTable.Rows[0]["PassingYear"]) : 0;
                    cafDashboard.vch_ApplicantName = dataTable.Rows[0]["vch_ApplicantName"] != DBNull.Value && dataTable.Rows[0]["vch_ApplicantName"] != null ? Convert.ToString(dataTable.Rows[0]["vch_ApplicantName"]) : string.Empty;
                    cafDashboard.vch_CorHouseNo = dataTable.Rows[0]["vch_CorHouseNo"] != DBNull.Value && dataTable.Rows[0]["vch_CorHouseNo"] != null ? Convert.ToString(dataTable.Rows[0]["vch_CorHouseNo"]) : string.Empty;
                    cafDashboard.vch_CorMobileNo = dataTable.Rows[0]["vch_CorMobileNo"] != DBNull.Value && dataTable.Rows[0]["vch_CorMobileNo"] != null ? Convert.ToString(dataTable.Rows[0]["vch_CorMobileNo"]) : string.Empty;
                    cafDashboard.vch_CouncilName = dataTable.Rows[0]["vch_CouncilName"] != DBNull.Value && dataTable.Rows[0]["vch_CouncilName"] != null ? Convert.ToString(dataTable.Rows[0]["vch_CouncilName"]) : string.Empty;
                    cafDashboard.vch_EMailID = dataTable.Rows[0]["vch_EMailID"] != DBNull.Value && dataTable.Rows[0]["vch_EMailID"] != null ? Convert.ToString(dataTable.Rows[0]["vch_EMailID"]) : string.Empty;
                    cafDashboard.vch_FatherName = dataTable.Rows[0]["vch_FatherName"] != DBNull.Value && dataTable.Rows[0]["vch_FatherName"] != null ? Convert.ToString(dataTable.Rows[0]["vch_FatherName"]) : string.Empty;
                    cafDashboard.vch_MotherName = dataTable.Rows[0]["vch_MotherName"] != DBNull.Value && dataTable.Rows[0]["vch_MotherName"] != null ? Convert.ToString(dataTable.Rows[0]["vch_MotherName"]) : string.Empty;
                    cafDashboard.vchRollCode = dataTable.Rows[0]["vchRollCode"] != DBNull.Value && dataTable.Rows[0]["vchRollCode"] != null ? Convert.ToString(dataTable.Rows[0]["vchRollCode"]) : string.Empty;
                    cafDashboard.vchRollNo = dataTable.Rows[0]["vchRollNo"] != DBNull.Value && dataTable.Rows[0]["vchRollNo"] != null ? Convert.ToString(dataTable.Rows[0]["vchRollNo"]) : string.Empty;
                    cafDashboard.vargender = dataTable.Rows[0]["vargender"] != DBNull.Value && dataTable.Rows[0]["vargender"] != null ? Convert.ToString(dataTable.Rows[0]["vargender"]) : string.Empty;
                    cafDashboard.dtm_DOB = dataTable.Rows[0]["dtm_DOB"] != DBNull.Value && dataTable.Rows[0]["dtm_DOB"] != null ? Convert.ToDateTime(dataTable.Rows[0]["dtm_DOB"]).ToString("dd-MM-yyyy") : string.Empty;

                }

                dataTable = new DataTable();
                dataTable = dataSet.Tables[1];
                List<CafDashboardOption> cafDashboardOptions = new List<CafDashboardOption>();
                if (dataTable.Rows.Count > 0)
                {

                    for (int cnt = 0; cnt < dataTable.Rows.Count; cnt++)
                    {
                        CafDashboardOption cafDashboardOption = new CafDashboardOption();
                        cafDashboardOption.int_CollegeID = dataTable.Rows[cnt]["int_CollegeID"] != DBNull.Value && dataTable.Rows[cnt]["int_CollegeID"] != null ? Convert.ToInt32(dataTable.Rows[cnt]["int_CollegeID"]) : cnt;
                        cafDashboardOption.StreamID = dataTable.Rows[cnt]["StreamID"] != DBNull.Value && dataTable.Rows[cnt]["StreamID"] != null ? Convert.ToInt32(dataTable.Rows[cnt]["StreamID"]) : cnt;
                        cafDashboardOption.vch_CollegeName = dataTable.Rows[cnt]["vch_CollegeName"] != DBNull.Value && dataTable.Rows[cnt]["vch_CollegeName"] != null ? Convert.ToString(dataTable.Rows[cnt]["vch_CollegeName"]) : string.Empty;
                        cafDashboardOption.Stream = dataTable.Rows[cnt]["Stream"] != DBNull.Value && dataTable.Rows[cnt]["Stream"] != null ? Convert.ToString(dataTable.Rows[cnt]["Stream"]) : string.Empty;
                        cafDashboardOptions.Add(cafDashboardOption);
                    }
                }
                cafDashboard.cafDashboardOptions = cafDashboardOptions;

                dataTable = new DataTable();
                dataTable = dataSet.Tables[2];
                List<CafDashboardPayment> cafDashboardPayments = new List<CafDashboardPayment>();
                if (dataTable.Rows.Count > 0)
                {

                    for (int cnt = 0; cnt < dataTable.Rows.Count; cnt++)
                    {
                        CafDashboardPayment cafDashboardPayment = new CafDashboardPayment();

                        cafDashboardPayment.vchGateWayName = dataTable.Rows[cnt]["vchGateWayName"] != DBNull.Value && dataTable.Rows[cnt]["vchGateWayName"] != null ? Convert.ToString(dataTable.Rows[cnt]["vchGateWayName"]) : string.Empty;
                        cafDashboardPayment.vchTransDate = dataTable.Rows[cnt]["vchTransDate"] != DBNull.Value && dataTable.Rows[cnt]["vchTransDate"] != null ? Convert.ToString(dataTable.Rows[cnt]["vchTransDate"]) : string.Empty;
                        cafDashboardPayment.vchTransFee = dataTable.Rows[cnt]["vchTransFee"] != DBNull.Value && dataTable.Rows[cnt]["vchTransFee"] != null ? Convert.ToString(dataTable.Rows[cnt]["vchTransFee"]) : string.Empty;
                        cafDashboardPayment.vchTransId = dataTable.Rows[cnt]["vchTransId"] != DBNull.Value && dataTable.Rows[cnt]["vchTransId"] != null ? Convert.ToString(dataTable.Rows[cnt]["vchTransId"]) : string.Empty;
                        cafDashboardPayment.vchTranStatus = dataTable.Rows[cnt]["vchTranStatus"] != DBNull.Value && dataTable.Rows[cnt]["vchTranStatus"] != null ? Convert.ToString(dataTable.Rows[cnt]["vchTranStatus"]) : string.Empty;
                        cafDashboardPayment.vch_UniqueRefNo = dataTable.Rows[cnt]["vch_UniqueRefNo"] != DBNull.Value && dataTable.Rows[cnt]["vch_UniqueRefNo"] != null ? Convert.ToString(dataTable.Rows[cnt]["vch_UniqueRefNo"]) : string.Empty;

                        cafDashboardPayments.Add(cafDashboardPayment);
                    }
                }
                cafDashboard.cafDashboardPayments = cafDashboardPayments;
                cafDashboards.Add(cafDashboard);
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
        return cafDashboards;

    }

    public List<CAFEntity> fillJuniorStream(CAFEntity objfillData)
    {
        SqlDataReader reader = null;
        List<CAFEntity> list = new List<CAFEntity>();
        object[] arr = new object[] {
                                    "PAction", objfillData.Action,
                                    "PCID", objfillData.Cid,
                                    "StreamId",objfillData.int_StreamID
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

    public string EDitCAFOption(CAFEntity onlineCAF)
    {
        try
        {

            object[] objArray = new object[] {
                        "@P_Action", onlineCAF.Action,
                        "@intApplicantID", onlineCAF.ApplicantID,
                        "@intGender", onlineCAF.int_Gender,
                        "@intResCategory", onlineCAF.pintReserveID,
                        "@bitPHOH", onlineCAF.PHOH,
                        "@Pint_EWS", onlineCAF.intEWS,
                        "@MaxTotal", onlineCAF.Total
                 };
            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_EDITCAFDATA", out param, objArray).ToString();

        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
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

    public string ManageForgotPassword(StudentLogIn objStudentLogin)
    {
        string strRetValue = string.Empty;
        SqlConnection objConnection = new SqlConnection();
        SqlCommand objCommand = new SqlCommand();
        try
        {
            if (objStudentLogin.CollegeType == "Dg")
            {
                objConnection.ConnectionString = connectionString;
                objCommand.CommandText = "USP_FORGET_PASSWORD_APPLICANT_DEG";
            }
            else
            {
                objConnection.ConnectionString = connectionString;
                objCommand.CommandText = "USP_FORGET_PASSWORD_APPLICANT";
            }

            objCommand.CommandType = CommandType.StoredProcedure;
            objCommand.Connection = objConnection;
            objCommand.Parameters.AddWithValue("@P_vchAction", objStudentLogin.char_Action);
            objCommand.Parameters.AddWithValue("@P_vchMobNo", objStudentLogin.vch_MobNo);
            objCommand.Parameters.AddWithValue("@P_vchEmail", objStudentLogin.vch_emailID);
            objCommand.Parameters.AddWithValue("@P_vchOTP", objStudentLogin.vch_OTP);
            objCommand.Parameters.AddWithValue("@P_intUserId", objStudentLogin.int_UserID);
            objCommand.Parameters.AddWithValue("@P_vchPassword", objStudentLogin.vch_Password);
            objCommand.Parameters.AddWithValue("@P_vchIPAddress", objStudentLogin.vch_IPAddress);
            objCommand.Parameters.AddWithValue("@p_UniqueRefId", objStudentLogin.vch_UniqueRefNo);
            SqlParameter objParam = new SqlParameter()
            {
                Direction = ParameterDirection.Output,
                ParameterName = "@P_MSGOUT",
                Size = 100
            };
            objCommand.Parameters.Add(objParam);
            if (objConnection.State == ConnectionState.Closed)
            {
                objConnection.Open();
            }

            objCommand.ExecuteNonQuery();
            object obj = new object();
            obj = objParam.Value;
            if (obj != null && obj != DBNull.Value)
            {
                strRetValue = obj.ToString();
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            objConnection.Close();
            objConnection = null;
            objCommand = null;
        }

        return strRetValue;
    }

    public string ManagePaymentPNB_JR(PNBJr objpaymentPNB)
    {
        try
        {
            object[] objArray = new object[] {
                    "@PAction", objpaymentPNB.Action,
                    "@PMERCHANTORDERNO", objpaymentPNB.OrderId,
                    "@PUNIQUEREFNO", objpaymentPNB.UniqueRefNo ,
                    "@PSTUDNAME", objpaymentPNB.StudName,
                    "@PPNBReferenceID", objpaymentPNB.PNBReferenceID,
                    "@PSTATUS", objpaymentPNB.StatusCode,
                    "@PAMOUNT", objpaymentPNB.TrnAmt,
                    "@PCURRENCY", objpaymentPNB.TrnCurrency,
                    "@PMeTransReqType" , objpaymentPNB.MeTransReqType,
                    "@PTrnRemarks", objpaymentPNB.TrnRemarks,
                    "@PTrnCurrency"  , objpaymentPNB.TrnCurrency,
                    "@PAuthZCode", objpaymentPNB.AuthZCode,
                    "@PTransactionDate", objpaymentPNB.TransactionDate,
                    "@PRRN" , objpaymentPNB.RRN,
                    "@PResponseCode" , objpaymentPNB.ResponseCode,
                    "@PAddField1" , objpaymentPNB.AddField1,
                    "@PAddField2" , objpaymentPNB.AddField2,
                    "@PAddField3" , objpaymentPNB.AddField3,
                    "@PAddField4" , objpaymentPNB.AddField4,
                    "@PAddField5" , objpaymentPNB.AddField5,
                    "@PAddField6" , objpaymentPNB.AddField6,
                    "@PAddField7" , objpaymentPNB.AddField7,
                    "@PAddField8" , objpaymentPNB.AddField8

                };

            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PAYMENT_UPDATES_PNB_JR", out param, objArray).ToString();

        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
    }

    public List<CAFEntity> FillCAF_PrevYr(CAFEntity objCAF)
    {
        SqlDataReader reader = null;
        List<CAFEntity> list = new List<CAFEntity>();
        object[] objArray = new object[] {
                            "@P_Action",objCAF.Action,
                            "@vch_UniqueRefNo",objCAF.vch_UniqueRefNo

                 };
        try
        {

            reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_VIEW_STUDENT_CAFDATA_PrevYr", objArray);
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

    public string ManagePaymentSBIePay_JR(SBIePayDeg objpaymentSbiePay)
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
                    "@PPaymode" , objpaymentSbiePay.Paymode,
                    "@POtherDetails", objpaymentSbiePay.OtherDetails,
                    "@PReason"  , objpaymentSbiePay.Reason,
                    "@PBankCode", objpaymentSbiePay.BankCode,
                    "@PBankReferenceNumber", objpaymentSbiePay.BankReferenceNumber,
                    "@PTransactionDate" , objpaymentSbiePay.TransactionDate,
                    "@PCountry" , objpaymentSbiePay.Country,
                    "@PCIN" , objpaymentSbiePay.CIN
                };

            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PAYMENT_UPDATES_SBIEPAY_JR", out param, objArray).ToString();

        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
    }
    public List<CAFEntity> fillstudentdashboard(CAFEntity objjstream)
    {
        SqlDataReader reader = null;
        List<CAFEntity> list = new List<CAFEntity>();
        object[] arr = new object[] {
                                    "@P_ACTION", objjstream.Action, "@P_REF_NO", objjstream.strId,
                                };
        try
        {

            reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_DEG_STUDENTLOGIN_DASHBOARD", arr);
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

    public List<CAFEntity> FillStudentIntimationDetails_Deg(CAFEntity obsdeg)
    {

        SqlDataReader reader = null;
        List<CAFEntity> list = new List<CAFEntity>();
        object[] arr = new object[] {
                                            "P_ACTION",obsdeg.Action,
                                            "P_MR_INDEXNO",obsdeg.vch_UniqueRefNo
                                        };
        try
        {
            if (obsdeg.vchStatus == "YES")
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_GET_APPLICATIONSTATUS_DEGREE_SLIDEUP", arr);
            }
            else
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_GET_APPLICATIONSTATUS_DEGREE", arr);
            }
            list = reader.DataReaderMapToList<CAFEntity>(MappingDirection.Auto);
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

    public List<CAFEntity> FillStudentIntimationDetails_Jr(CAFEntity obsjr)
    {

        SqlDataReader reader = null;
        List<CAFEntity> list = new List<CAFEntity>();
        object[] arr = new object[] {
                                            "@P_ACTION",obsjr.Action,
                                            "@P_MR_INDEXNO",obsjr.vch_UniqueRefNo,
                                            "@Pint_SelectionType",obsjr.AdmissionType,
                                            "@Pint_Category",obsjr.CategoryId,
                                            "@Pint_SubCategory",obsjr.Cid,
                                        };
        try
        {
            if (obsjr.vchStatus == "YES")
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_GET_APPLICATIONSTATUS_JUNIOR_SLIDEUP", arr);
            }
            else
            {
                reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "SP_GET_APPLICATIONSTATUS_JUN", arr);
            }
            list = reader.DataReaderMapToList<CAFEntity>(MappingDirection.Auto);
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
    public List<StudentLogIn> ViewNewUser_Deg(StudentLogIn objStu)
    {
        SqlDataReader reader = null;
        List<StudentLogIn> list = new List<StudentLogIn>();
        object[] arr = new object[] {
                                    "char_Action", objStu.char_Action,
                                     "int_UserID", objStu.int_UserID,
                                    "vch_UserName", objStu.vch_UserName,
                                    "vch_Password",objStu.vch_Password
                                };
        try
        {
            reader = (SqlDataReader)SqlHelper.ExecuteReader(connectionString, "USP_Student_Login", arr);
            list = reader.DataReaderMapToList<StudentLogIn>(MappingDirection.Auto);
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        if (reader != null)
        {
            reader.Close();
            reader.Dispose();
        }

        return list;
    }



    ////////////////////////////////////////////////////////////////////////////////////////////////

    public string checkGatewayIdStatus(CAFEntity objchkstat)
    {
        try
        {
            object[] objArray = new object[] {
                        "@P_GateWayID", objchkstat.GateWayID,"@P_OutMsg", "out"
                 };

            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_CHECKGATEWAYSTATUS", out param, objArray).ToString();
        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
    }



    public string UpdatePayment(CafPayment objPayment)
    {
        string strRetvalue = string.Empty;
        SqlCommand objCommand = new SqlCommand();
        SqlConnection objConnection = new SqlConnection();
        try
        {
            objConnection.ConnectionString = connectionString;
            objCommand.CommandText = "USP_UpdatePayment";
            objCommand.Connection = objConnection;
            objCommand.CommandType = CommandType.StoredProcedure;
            objCommand.Parameters.AddWithValue("@pVchAction", objPayment.Action);
            objCommand.Parameters.AddWithValue("@pVchUniqueRefKey", objPayment.vch_UniqueRefNo);
            objCommand.Parameters.AddWithValue("@pClientTransacId", objPayment.clientTxnId);
            objCommand.Parameters.AddWithValue("@pIntGateway", objPayment.intGatewayType);
            SqlParameter objOutParam = new SqlParameter()
            {
                ParameterName = "@pIntOut",
                Direction = ParameterDirection.Output,
                SqlDbType = SqlDbType.VarChar,
                Size = 100
            };
            objCommand.Parameters.Add(objOutParam);
            object obj = new object();
            if (objConnection.State == ConnectionState.Closed)
            {
                objConnection.Open();
            }
            objCommand.ExecuteNonQuery();
            obj = objOutParam.Value;
            if (obj != null && obj != DBNull.Value)
            {
                strRetvalue = obj.ToString();
            }
        }
        catch (Exception ex)
        {

        }
        finally
        {
            objConnection.Close();
            objCommand = null;
            objConnection = null;
        }
        return strRetvalue;
    }


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
                    "@PPaymode" , objpaymentSbiePay.Paymode,
                    "@POtherDetails", objpaymentSbiePay.OtherDetails,
                    "@PReason"  , objpaymentSbiePay.Reason,
                    "@PBankCode", objpaymentSbiePay.BankCode,
                    "@PBankReferenceNumber", objpaymentSbiePay.BankReferenceNumber,
                    "@PTransactionDate" , objpaymentSbiePay.TransactionDate,
                    "@PCountry" , objpaymentSbiePay.Country,
                    "@PCIN" , objpaymentSbiePay.CIN
                };

            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PAYMENT_UPDATES_SBIEPAY_DEG", out param, objArray).ToString();

        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
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


    public string ManagePaymentSahajDeg(SahajDeg objpaymentSahaj)
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

            intOutput = SqlHelper.ExecuteNonQuery(connectionString, "SP_PAYMENT_UPDATES_SAHAJ_DEG", out param, objArray).ToString();

        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message.ToString());
        }
        return param.ToString();
    }


    public DataSet GetInitiatedPaymentList(PaySearchEntity objPaySearch)
    {
        DataSet ds = new DataSet();
        object[] arr = new object[] {
                                    "@pVchAction", objPaySearch.Action,
                                    "@pFromDate",objPaySearch.fromDate,
                                    "@pToDate", objPaySearch.toDate,
                                    "@pVchRefId",objPaySearch.vch_Unique_Refno,
                                    "@pVchTransId",objPaySearch.str_Client_TxnId,
                                    "@pVchgatewayname",objPaySearch.str_Gateway_Name,
                                      "@pIntGateway",objPaySearch.int_Gateway,
                                    "@pIntPageIndex",objPaySearch.int_Page_Index,
                                    "@pIntPageSize", objPaySearch.int_Page_Size,
                                    "@pVchPaymentMode", objPaySearch.str_Payment_Mode
                                };
        try
        {
            if (objPaySearch.intColType == 1)
            {
                ds = SqlHelper.ExecuteDataset(connectionString, "USP_Jun_GetInitiatedPaymentList", arr);
            }
            else
            {
                ds = SqlHelper.ExecuteDataset(connectionString, "USP_GetInitiatedPaymentList", arr);
            }


        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        return ds;
    }


    public int UpdateInitiatedPayment(PaySearchEntity objPaySearch)
    {
        int intRetvalue = 0;
        SqlCommand objCommand = new SqlCommand();
        SqlConnection objConnection = new SqlConnection();
        try
        {
            objConnection.ConnectionString = objPaySearch.intColType == 1 ? connectionString : connectionString;
            objCommand.CommandText = objPaySearch.intColType == 1 ? "USP_Jun_GetInitiatedPaymentList" : "USP_GetInitiatedPaymentList";
            objCommand.Connection = objConnection;
            objCommand.CommandType = CommandType.StoredProcedure;
            objCommand.Parameters.AddWithValue("@pVchAction", objPaySearch.Action);
            objCommand.Parameters.AddWithValue("@pUpdatedXml", objPaySearch.strXml);
            objCommand.Parameters.AddWithValue("@pIntGateway", objPaySearch.int_Gateway);
            SqlParameter objOutParam = new SqlParameter()
            {
                ParameterName = "@pIntOut",
                Direction = ParameterDirection.Output,
                SqlDbType = SqlDbType.VarChar,
                Size = 100
            };
            objCommand.Parameters.Add(objOutParam);
            object obj = new object();
            if (objConnection.State == ConnectionState.Closed)
            {
                objConnection.Open();
            }
            objCommand.ExecuteNonQuery();
            obj = objOutParam.Value;
            if (obj != null && obj != DBNull.Value)
            {
                intRetvalue = Convert.ToInt32(obj);
            }
        }
        catch (Exception ex)
        {

        }
        finally
        {
            objConnection.Close();
            objCommand = null;
            objConnection = null;
        }
        return intRetvalue;
    }


    public List<string> ManagePaymentShedular_JR()
    {
        List<string> clientTxnIds = new List<string>();

        try
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("SP_PAYMENTscheduler", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            clientTxnIds.Add(reader["clientTxnId"].ToString());
                        }
                    }
                }
            }
        }
        catch (SqlException ex)
        {
            throw new Exception("SQL Error: " + ex.Message);
        }
        catch (Exception ex)
        {
            throw new Exception("Error: " + ex.Message);
        }

        return clientTxnIds;
    }



}