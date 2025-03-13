<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DegreeEligbility.aspx.cs"
    Inherits="ONLINE_CAF_Degree_DegreeEligbility" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head runat="server">
    <title>Welcome :: Online Facilitation System for Students (OFSS)</title>
    <script src="../js/jquery-2.2.4.js" type="text/javascript"></script>
    <script type="text/javascript">

        $(document).ready(function () {
            GetEligibilityValue();
        });

        function GetEligibilityValue() {
            var VchRollCode = '4305', VchRollNo = '30001', intMaxMarks = 0, intAggrMarks = 0, intJunStream = 1, intHonSubject = 54, intHonStream = 3, intBSEB = 1, intYear = 2010;
            
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                url: "DegreeEligbility.aspx/GetStudentEligibility_Deg",
                data: "{'VchRollCode':'" + VchRollCode + "','VchRollNo':'" + VchRollNo + "', 'intMaxMarks':'" + intMaxMarks + "','intAggrMarks':'" + intAggrMarks + "','intJunStream':'" + intJunStream + "', 'intHonSubject':'" + intHonSubject + "', 'intHonStream':'" + intHonStream + "','intBSEB':'" + intBSEB + "','intYear':'" + intYear + "'}",
                success: function (Result) {
                    if (Result.d != null && Result.d != undefined) {
                        alert(Result.d[0].bit_Eligiblity);
                        alert(Result.d[0].message);
                    }
                    else {
                        alert("No data found");
                    }
                },
                error: function (response) {
                    var msg = jQuery.parseJSON(response.responseText);
                    console.log("Message: " + msg.Message);
                    console.log("StackTrace: " + msg.StackTrace);
                    console.log("ExceptionType: " + msg.ExceptionType);
                }
            });
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    </div>
    </form>
</body>
</html>
