using System;
using System.Collections.Generic;
using System.Web.Services;
using OFSS_OL_Entity;
using OFSS_OL_Entity_deg;

public partial class ONLINE_CAF_Degree_DegreeEligbility : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [WebMethod]
    public static dynamic GetStudentEligibility_Deg(string VchRollCode, string VchRollNo, string intMaxMarks, string intAggrMarks, string intJunStream, string intHonSubject, string intHonStream, string intBSEB, string intYear)
    {
        CAFDegDal ccobjcafdeg = new CAFDegDal();

        Deg_Eligibility objEligibility = new Deg_Eligibility();
        objEligibility.VchRollCode = VchRollCode;
        objEligibility.VchRollNo = VchRollNo;
        objEligibility.IntMaxMarks = string.IsNullOrEmpty(intMaxMarks) ? 0 : Convert.ToInt32(intMaxMarks);
        objEligibility.IntAggrMarks = string.IsNullOrEmpty(intAggrMarks) ? 0 : Convert.ToInt32(intAggrMarks);
        objEligibility.IntJunStream = string.IsNullOrEmpty(intJunStream) ? 0 : Convert.ToInt32(intJunStream);
        objEligibility.IntHonStream = string.IsNullOrEmpty(intHonStream) ? 0 : Convert.ToInt32(intHonStream);
        objEligibility.IntHonSubject = string.IsNullOrEmpty(intHonSubject) ? 0 : Convert.ToInt32(intHonSubject);
        objEligibility.BitBSEB = string.IsNullOrEmpty(intBSEB) ? 0 : Convert.ToInt32(intBSEB);
        objEligibility.IntYear = string.IsNullOrEmpty(intYear) ? 0 : Convert.ToInt32(intYear);
        List<Deg_Eligibility> lst = new List<Deg_Eligibility>();
      
            lst = ccobjcafdeg.GetStudentEligibility_Deg(objEligibility);
        
        return lst;
    }

}