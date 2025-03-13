using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OFSS_OL_Entity
{
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
