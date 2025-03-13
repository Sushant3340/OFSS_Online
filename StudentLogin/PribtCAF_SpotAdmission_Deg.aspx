<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PribtCAF_SpotAdmission_Deg.aspx.cs"
    Inherits="StudentLogin_PribtCAF_SpotAdmission_Deg" EnableEventValidation="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>OFSS: Print Degree CAF</title>
    <%-- <title>CAF-2018</title>--%>
    <link href="../style/CAF.css" rel="stylesheet" type="text/css" />
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link href="../style/chromestyle.css" type="text/css" />
    <style type="text/css">
        .Uppercase
        {
            text-transform: uppercase;
        }
        .redbold
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 30px;
            font-weight: bold;
            color: #C60000;
            text-decoration: none;
        }
        .smlfont
        {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #333333;
            text-decoration: none;
        }
        .inputitem
        {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: normal;
            color: #000000;
        }
        .tbborderCAF
        {
            padding: 0px;
            border-color: #666666;
            border-width: 2px;
            border-style: solid;
        }
        .borderceelcaf
        {
            padding: 0px;
            border-color: #666666;
            border-width: 1px;
            border-style: solid;
        }
        .tablebdercaf
        {
            margin: 0px;
            padding: 0px;
        }
        .tablebdercaf table
        {
            border-top-width: 1px;
            border-top-style: solid;
            border-top-color: #666666;
            border-left-width: 1px;
            border-left-style: solid;
            border-left-color: #666666;
        }
        .tablebdercaf table td
        {
            border-right-width: 1px;
            border-bottom-width: 1px;
            border-right-style: solid;
            border-bottom-style: solid;
            border-right-color: #666666;
            border-bottom-color: #666666;
        }
        .tablebdercaf table th
        {
            border-right-width: 1px;
            border-bottom-width: 1px;
            border-right-style: solid;
            border-bottom-style: solid;
            border-right-color: #666666;
            border-bottom-color: #666666;
            background-color: #999999;
        }
        .bgprint
        {
            background-color: #666666;
            padding: 2px;
            display: block;
        }
        .bgprint
        {
            background-color: #666666;
            padding: 2px;
            display: block;
        }
        .Note
        {
            color: Red;
            position: absolute;
            font-size: 13px;
        }
        
        .Star
        {
            color: Red;
            position: absolute;
            font-size: 20px;
        }
        .frm_closed
        {
            font-family:Verdana;
            color: #f7a6a6;
            font-weight:bold;
           font-size: 25px;
           padding:100px 0 0 200px;
        }
    </style>
    <style type="text/css">
        <!
        -- body
        {
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            border: none;
            margin-top: 5px;
        }
        .style3
        {
            font-size: 11px;
            color: #333333;
            text-decoration: none;
            font-family: Arial, Helvetica, sans-serif;
        }
        
        -- ></style>
    <script type="text/javascript" language="javascript">
        var date;
        function dateTime() {

            //Set Weedday against current day in numeric
            var WeekDay = new Array(7);
            WeekDay[0] = "Sunday";
            WeekDay[1] = "Monday";
            WeekDay[2] = "Tuesday";
            WeekDay[3] = "Wednesday";
            WeekDay[4] = "Thursday";
            WeekDay[5] = "Friday";
            WeekDay[6] = "Saturday";

            //Set month Name against current Month in numeric 
            var monthName = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")

            var CurDateTime = new Date();
            //alert(CurDate);
            var curDay = CurDateTime.getDay();
            var curDate = CurDateTime.getDate();
            var curMonth = CurDateTime.getMonth();
            var curYear = CurDateTime.getFullYear();
            var curHH = CurDateTime.getHours();
            var curMM = CurDateTime.getMinutes();
            var curSS = CurDateTime.getSeconds();


            if (curHH > 12) {
                curHH = curHH - 12;
                var Hour = "PM";
            }
            else if (curHH == 12) {

                curHH = "00";
                var Hour = "PM";
            }
            else {
                var Hour = "AM";
            }
            if (curHH < 10) {
                curHH = '0' + curHH;
            }
            if (curMM < 10)
                curMM = '0' + curMM;
            if (curSS < 10)
                curSS = '0' + curSS;


            date = WeekDay[curDay] + ", " + monthName[curMonth] + " " + curDate + ", " + curYear + "  " + curHH + ":" + curMM + ":" + curSS + " " + Hour;
            // alert(date);
            document.getElementById('lblDateTime').innerHTML = date
            document.getElementById('lblDateTimeApp').innerHTML = date
            window.setTimeout('dateTime()', 500);


        }

        function show(subId) {
            document.getElementById(subId).style.display = ""
        }
        function hide(subId) {
            document.getElementById(subId).style.display = "none"
        }

        function showHideChem() {

            var stream = '<%=intStreamId%>';
            if ((stream == 1) || (stream == 3) || (stream == 6)) {

                document.getElementById('tdChemH').style.display = "none";
                document.getElementById('tdChemB').style.display = "none";
                document.getElementById('tdMathH').style.display = "none";
                document.getElementById('tdMathB').style.display = "none";
                document.getElementById('tdChempcb').style.display = "none";
                document.getElementById('tdChemBio').style.display = "none";

                // document.getElementById('tdChemHApp').style.display = "none";
                // document.getElementById('tdChemBApp').style.display = "none";
                // document.getElementById('tdMathAppH').style.display = "none";
                //document.getElementById('tdMathAppB').style.display = "none";
                //  document.getElementById('tdChempcbApp').style.display = "none";
                // document.getElementById('tdChembioApp').style.display = "none";

            }
            else {

                document.getElementById('tdChemH').style.display = "";
                document.getElementById('tdChemB').style.display = "";
                document.getElementById('tdMathH').style.display = "";
                document.getElementById('tdMathB').style.display = "";
                //document.getElementById('tdChemHApp').style.display = "";
                // document.getElementById('tdChemBApp').style.display = "";
                document.getElementById('tdChempcb').style.display = "";
                document.getElementById('tdChemBio').style.display = "";
                //document.getElementById('tdChempcbApp').style.display = "";
                // document.getElementById('tdChemBioApp').style.display = ""; 
                //  document.getElementById('tdMathAppH').style.display = "";
                // document.getElementById('tdMathAppB').style.display = "";

            }

            var boardid = parseInt(document.getElementById('hdnBoardId').value);
            if (boardid == 35) {
                document.getElementById('tdMILH').style.display = 'none';
                document.getElementById('tdMILB').style.display = 'none';
                document.getElementById('tdMILH').innerHTML = 'Compulsory (1+2)';
                document.getElementById('thEnglishH').innerHTML = 'Compulsory 3';
                document.getElementById('thEnglishH').style.display = 'none';
                document.getElementById('tdEnglishB').style.display = 'none';
                document.getElementById('tdChemH').style.display = 'none';
                document.getElementById('tdChemB').style.display = 'none';
                document.getElementById('tdMathH').style.display = 'none';
                document.getElementById('tdMathB').style.display = 'none';
                document.getElementById('tdChempcb').style.display = 'none';
                document.getElementById('tdChemBio').style.display = 'none';

            }

            else {

                document.getElementById('tdMILH').style.display = 'none';
                document.getElementById('tdMILB').style.display = 'none';
                document.getElementById('thEnglishH').innerHTML = 'English/Hindi';
            }
        }            
    </script>
    <style media="print" type="text/css">
        body
        {
            border: 0px !important;
        }
        .NOPRINT
        {
            display: none;
        }
        
    </style>
</head>
<body onload="showHideChem();dateTime();" style="border: 0px;">
    <form id="form1" runat="server">
    <asp:HiddenField ID="hdnBoardId" runat="server" Value="0" />
    <div id="divForm" runat="server" visible="false">
        <table width="990" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="93" align="center">
                                <img src="../images/BiharLogo.png" height="93" />
                            </td>
                            <td valign="top">
                                <table width="90%" border="0" align="right" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td height="30" align="center" class="CAFPrintheading">
                                            Common Application Form
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="22" align="center" class="style2Print" style="border-bottom: 1px solid #5a5a5a;
                                            padding-bottom: 5px; margin-bottom: 15px;">
                                            <b>for Spot Admission to Degree Colleges (2018-21)</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="10px">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" class="normalfont">
                                            <asp:Label ID="lblDateTime" runat="server"></asp:Label>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td width="40px">
                            </td>
                            <td width="120" valign="top">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td align="center">
                                            <strong>
                                                <asp:Label runat="server" ID="lblUid" Font-Size="X-Large"></asp:Label></strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center">
                                            <asp:Image ID="imgId" runat="server" Width="147" Height="36" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" class="redbold">
                                            Degree
                                        </td>
                                    </tr>
                                </table>
                                <div align="center" style="padding-top: 10px;">
                                    <img src="../images/print_ICON.gif" width="26" height="28" title="Click here to take a print"
                                        onclick="window.print();return false;" class="NOPRINT" /></div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="5">
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td width="770" valign="top">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                            <tr>
                                                                <td colspan="4" bgcolor="#FFFFFF">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td>
                                                                                1
                                                                            </td>
                                                                            <td colspan="3">
                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tr>
                                                                                        <td colspan="4">
                                                                                            Name of the Board from which you have passed the Intermediate exam.
                                                                                            <br />
                                                                                            &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2358;&#2367;&#2325;&#2381;&#2359;&#2366;
                                                                                            &#2348;&#2379;&#2352;&#2381;&#2337; &#2360;&#2375; &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335;
                                                                                            &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                                                            &#2325;&#2368; &#2361;&#2376; |
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            Name of the Examination Board<br />
                                                                                            &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                            &#2348;&#2379;&#2352;&#2381;&#2337; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                        </td>
                                                                                        <td>
                                                                                            Year of Passing
                                                                                            <br />
                                                                                            &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                            &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;|
                                                                                        </td>
                                                                                        <td>
                                                                                            Exam Type
                                                                                            <br />
                                                                                            &#2310;&#2346;&#2344;&#2375; &#2325;&#2380;&#2344; &#2360;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                            &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div class="sqborder1" style="height: auto;">
                                                                                                <asp:Label ID="lblBoard" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                        <td>
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblYOE" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                        <td>
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblExamType" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            Date of Birth / &#2332;&#2344;&#2381;&#2350; &#2340;&#2367;&#2341;&#2367;
                                                                                        </td>
                                                                                        <td id="tdRollCdH" runat="server" style="display: none">
                                                                                            Roll Code / &#2352;&#2379;&#2354; &#2325;&#2379;&#2337;
                                                                                        </td>
                                                                                        <td>
                                                                                            Roll Number / &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblDob" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                        <td id="tdRollCdF" runat="server" style="display: none">
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblRollCode" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                        <td>
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblRoll" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="4%">
                                                                                <strong>2</strong>
                                                                            </td>
                                                                            <td width="23%" height="22">
                                                                                <strong>Applicant's Name
                                                                                    <br />
                                                                                    &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350;</strong>
                                                                            </td>
                                                                            <td width="73%">
                                                                                <div class="sqborder1">
                                                                                    <asp:Label ID="lblApplName" runat="server" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <strong>3</strong>
                                                                            </td>
                                                                            <td height="22">
                                                                                <strong>Father's Name<br />
                                                                                    &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2375; &#2346;&#2367;&#2340;&#2366;
                                                                                    &#2325;&#2366; &#2344;&#2366;&#2350;</strong>
                                                                            </td>
                                                                            <td>
                                                                                <div class="sqborder1">
                                                                                    <asp:Label ID="lblFatherName" runat="server" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <strong>4</strong>
                                                                            </td>
                                                                            <td height="22">
                                                                                <strong>Mother's Name
                                                                                    <br />
                                                                                    &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2350;&#2366;&#2340;&#2366;
                                                                                    &#2325;&#2366; &#2344;&#2366;&#2350;</strong>
                                                                            </td>
                                                                            <td>
                                                                                <div class="sqborder1">
                                                                                    <asp:Label ID="lblMotherName" runat="server" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td width="5">
                                                    </td>
                                                    <td width="125" align="center" class="sqborder" style="padding: 3px;">
                                                        <asp:Image ID="imgPhoto" runat="server" Height="" Width="150" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="3">
                </td>
            </tr>
            <tr>
                <td height="3">
                    <div>
                        <table width="100%" border="0" cellpadding="2" class="tbborderCAF">
                            <tr>
                                <td bgcolor="#FFFFFF">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                        <tr>
                                            <td width="3%">
                                                <strong>5.</strong>
                                            </td>
                                            <td colspan="2">
                                                <strong>Details of Mark Secured in Intermediate Examination / &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335;
                                                    &#2350;&#2375;&#2306; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325;
                                                    &#2357;&#2367;&#2359;&#2351;&#2357;&#2366;&#2352; &#2354;&#2367;&#2326;&#2375;
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>a.</strong>
                                            </td>
                                            <td>
                                                <strong>Stream / &#2360;&#2306;&#2325;&#2366;&#2351; &#2330;&#2369;&#2344;&#2375;
                                                </strong>
                                            </td>
                                            <td>
                                                <div class="sqborder1">
                                                    &nbsp;<asp:Label runat="server" ID="lblPrevStream" /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>b.</strong>
                                            </td>
                                            <td colspan="2">
                                                <div class="tablebdercaf">
                                                    <table width="100%" border="0" cellpadding="2" cellspacing="0">
                                                        <tr>
                                                            <td bgcolor="#FFFFFF" class="style3">
                                                                Maximum Mark
                                                            </td>
                                                            <td bgcolor="#FFFFFF" class="style3">
                                                                Total Mark Secured
                                                            </td>
                                                            <td bgcolor="#FFFFFF" class="style3" id="tdMILH">
                                                                Comp (1+2)
                                                            </td>
                                                            <td bgcolor="#FFFFFF" class="style3" id="thEnglishH">
                                                                Comp 3
                                                            </td>
                                                            <td bgcolor="#FFFFFF" class="style3" id="tdChemH">
                                                                Chemistry
                                                            </td>
                                                            <td bgcolor="#FFFFFF" class="style3" id="tdMathH">
                                                                Mathematics
                                                            </td>
                                                            <td bgcolor="#FFFFFF" class="style3" id="tdChempcb">
                                                                Biology
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td bgcolor="#FFFFFF">
                                                                &nbsp;<asp:Label runat="server" ID="lblMaxMark"></asp:Label>
                                                            </td>
                                                            <td bgcolor="#FFFFFF">
                                                                &nbsp;<asp:Label runat="server" ID="lblTotalMark"></asp:Label>
                                                            </td>
                                                            <td bgcolor="#FFFFFF" id="tdMILB">
                                                                &nbsp;<asp:Label runat="server" ID="lblMathMark"></asp:Label>
                                                            </td>
                                                            <td bgcolor="#FFFFFF" id="tdEnglishB">
                                                                &nbsp;<asp:Label runat="server" ID="lblEngMark"></asp:Label>
                                                            </td>
                                                            <td bgcolor="#FFFFFF" id="tdChemB">
                                                                &nbsp;<asp:Label runat="server" ID="lblScienceMark"></asp:Label>
                                                            </td>
                                                            <td bgcolor="#FFFFFF" id="tdMathB">
                                                                &nbsp;<asp:Label runat="server" ID="lblMathematics"></asp:Label>
                                                            </td>
                                                            <td bgcolor="#FFFFFF" id="tdChemBio">
                                                                &nbsp;<asp:Label runat="server" ID="lblPCBMark"></asp:Label>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="MarkVerification" runat="server" style="display: none;">
                                            <td>
                                            </td>
                                            <td>
                                                <strong>Have you secured above mark in your Annual BSEB examination ? </strong>
                                            </td>
                                            <td width="40px">
                                                <div class="sqborder1" width="50px">
                                                    <asp:Label ID="lblMarkVerification" runat="server"></asp:Label></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>c.</strong>
                                            </td>
                                            <td>
                                                <strong>Have you passed Intermediate Exam Compartmentally?<br />
                                                    &#2325;&#2381;&#2351;&#2366; &#2309;&#2346;&#2344;&#2375; &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335;
                                                    &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2360;&#2350;&#2369;&#2344;&#2381;&#2344;&#2340;
                                                    &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2350;&#2375;&#2306; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                    &#2325;&#2368; &#2361;&#2376;&#2306;?</strong>
                                            </td>
                                            <td width="7%">
                                                <div class="sqborder1">
                                                    <asp:Label ID="lblCompartmental" runat="server"></asp:Label></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            </td>
                                            <td colspan="2">
                                                <div class="tablebdercaf">
                                                    <asp:GridView ID="grdCompartment" Width="100%" runat="server" AllowPaging="false"
                                                        PageSize="6" AutoGenerateColumns="false" CellPadding="2" CellSpacing="0" BackColor="#CCCCCC">
                                                        <Columns>
                                                            <asp:BoundField DataField="vch_SubjectName" HeaderText="Name of the Subject" />
                                                            <asp:BoundField DataField="FailMark" HeaderText="Fail Mark in Previous Exam" NullDisplayText="NA" />
                                                            <asp:BoundField DataField="PassMark" HeaderText="Pass mark in Compartmental Exam"
                                                                NullDisplayText="NA" />
                                                        </Columns>
                                                        <HeaderStyle BackColor="#999999" ForeColor="#FFFFFF" />
                                                        <RowStyle BackColor="#ffffff" />
                                                    </asp:GridView>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td height="3">
                </td>
            </tr>
            <tr>
                <td height="3">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#ffffff">
                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                    <tr>
                                        <td height="25">
                                            <strong>
                                                <label id="lblN11" runat="server">
                                                    6.</label>
                                            </strong>
                                        </td>
                                        <td colspan="5">
                                            <strong>
                                                <label id="Label9">
                                                    Record of educational institution last attended from which you have passed Intermediate
                                                    Examination.
                                                    <br />
                                                    &#2310;&#2346;&#2344;&#2375; &#2332;&#2367;&#2360; &#2360;&#2381;&#2325;&#2370;&#2354;
                                                    &#2360;&#2375; &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335;
                                                    &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                    &#2325;&#2368; &#2361;&#2376; &#2313;&#2360;&#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                                    &#2344;&#2368;&#2330;&#2375; &#2349;&#2352;&#2375;</label>
                                                <%--Correspondence--%>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="3%" bgcolor="" class="">
                                            <strong>
                                                <label id="Label10">
                                                    a.</label>
                                            </strong>
                                        </td>
                                        <td width="16%">
                                            <label id="Label11">
                                                Name of the College<br />
                                                &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2344;&#2366;&#2350;
                                            </label>
                                        </td>
                                        <td>
                                            <div class="sqborder1">
                                                <asp:Label ID="lblSchName" runat="server" /></div>
                                        </td>
                                        <td width="2%" bgcolor="" class="">
                                            <strong>
                                                <label id="Label13">
                                                    b.</label>
                                            </strong>
                                        </td>
                                        <td width="18%">
                                            <label id="Label14">
                                                Location of the College / &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2346;&#2340;&#2366;
                                            </label>
                                        </td>
                                        <td width="25%">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblSchloc" runat="server" /></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td bgcolor="" class="">
                                            <strong>
                                                <label id="Label16">
                                                    c.</label>
                                            </strong>
                                        </td>
                                        <td>
                                            <label id="Label17">
                                                District
                                                <br />
                                                &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375; &#2350;&#2375;&#2306; &#2310;&#2346;&#2325;&#2366;
                                                &#2325;&#2377;&#2354;&#2375;&#2332; &#2361;&#2376;
                                            </label>
                                        </td>
                                        <td>
                                            <div class="sqborder1">
                                                <asp:Label ID="lblLIDist" runat="server" /></div>
                                        </td>
                                        <td bgcolor="" class="">
                                            <strong>d. </strong>
                                        </td>
                                        <td>
                                            Year of Admission
                                            <br />
                                            &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2313;&#2360;
                                            &#2325;&#2377;&#2354;&#2375;&#2332; &#2350;&#2375;&#2306; &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344;
                                            &#2354;&#2367;&#2351;&#2366; &#2341;&#2366; |
                                        </td>
                                        <td>
                                            <div class="sqborder1">
                                                <asp:Label ID="lblyoj" runat="server" /></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td bgcolor="" class="">
                                            <strong>e. </strong>
                                        </td>
                                        <td>
                                            Year of Leaving
                                            <br />
                                            &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2313;&#2360;
                                            &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2379; &#2331;&#2379;&#2396;&#2366;
                                            &#2341;&#2366; |
                                        </td>
                                        <td colspan="4">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblyol" runat="server" /></div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="3">
                </td>
            </tr>
            <tr>
                <td height="3">
                    <table width="100%" border="0" cellpadding="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td>
                                            <strong>7.</strong>
                                        </td>
                                        <td>
                                            <strong>Personal Details / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td>
                                                        Gender / &#2354;&#2367;&#2306;&#2327;
                                                    </td>
                                                    <td>
                                                        Mother Tongue / &#2350;&#2366;&#2340;&#2371;&#2349;&#2366;&#2359;&#2366;
                                                    </td>
                                                    <td>
                                                        Nationality / &#2344;&#2366;&#2327;&#2352;&#2367;&#2325;&#2340;&#2366;
                                                    </td>
                                                    <td>
                                                        Religion / &#2343;&#2352;&#2381;&#2350; (भरना अनिवार्य नहीं है |)
                                                    </td>
                                                    <td>
                                                        Blood Group / &#2352;&#2325;&#2381;&#2340; &#2360;&#2350;&#2370;&#2361; (भरना अनिवार्य
                                                        नहीं है |)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblsex" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblMT" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblNat" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblreligion" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblBgroup" runat="server" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="3">
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td>
                                            <strong>8. &nbsp;&nbsp;&nbsp;Correspondence Address / &#2346;&#2340;&#2381;&#2352;&#2366;&#2330;&#2366;&#2352;
                                                &#2325;&#2366; &#2346;&#2340;&#2366; </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td width="3%" height="25">
                                                        a.
                                                    </td>
                                                    <td width="12%">
                                                        State / &#2352;&#2366;&#2332;&#2381;&#2351;
                                                    </td>
                                                    <td width="16%">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblstate" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td width="2%">
                                                        &nbsp;
                                                    </td>
                                                    <td width="2%">
                                                        b.
                                                    </td>
                                                    <td width="6%">
                                                        District / &#2332;&#2367;&#2354;&#2366;
                                                    </td>
                                                    <td width="26%">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lbldist" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td width="2%">
                                                        c.
                                                    </td>
                                                    <td width="10%">
                                                        Block / Municipality
                                                        <br />
                                                        &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; / &#2344;&#2327;&#2352; &#2346;&#2352;&#2367;&#2359;&#2342;&#2381;
                                                        &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;
                                                    </td>
                                                    <td width="21%">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblulb" runat="server" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td width="3%" height="25">
                                                        d.
                                                    </td>
                                                    <td width="12%">
                                                        Address / &#2346;&#2340;&#2366;
                                                    </td>
                                                    <td width="52%">
                                                        <div class="sqborder1" style="height: auto;">
                                                            <asp:Label ID="lbldtl" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td width="2%">
                                                        e.
                                                    </td>
                                                    <td width="10%">
                                                        PIN Code
                                                        <br />
                                                        &#2331;&#2361; &#2309;&#2306;&#2325;&#2379; &#2325;&#2366; &#2346;&#2367;&#2344;
                                                        &#2325;&#2379;&#2337; &#2351;&#2361;&#2366;&#2305; &#2354;&#2367;&#2326;&#2375;&#2306;
                                                    </td>
                                                    <td width="21%">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblpin" runat="server" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td width="3%">
                                                        f.
                                                    </td>
                                                    <td width="12%">
                                                        Mobile No. / &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                    </td>
                                                    <td width="12%">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblmob" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td width="2%">
                                                        g.
                                                    </td>
                                                    <td width="10%">
                                                        e-Mail / &#2312;-&#2350;&#2375;&#2354;
                                                    </td>
                                                    <td width="21%">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblemail" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td width="3%">
                                                        h.
                                                    </td>
                                                    <td width="12%">
                                                        Telephone No.(Optional)<br />
                                                        &#2309;&#2327;&#2352; &#2342;&#2370;&#2352;&#2349;&#2366;&#2359; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366;
                                                        &#2313;&#2346;&#2354;&#2348;&#2381;&#2343; &#2361;&#2379; &#2340;&#2379; &#2351;&#2361;&#2366;&#2305;
                                                        &#2349;&#2352;&#2375;&#2306; | (&#2349;&#2352;&#2344;&#2366; &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351;
                                                        &#2344;&#2361;&#2368;&#2306; &#2361;&#2376; | )
                                                    </td>
                                                    <td width="26%">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td width="29%" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblAreaCode" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td width="3%">
                                                                    &nbsp;
                                                                </td>
                                                                <td width="68%">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblPhoneNo" runat="server" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="3">
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td colspan="5">
                                            <strong>9. &nbsp;&nbsp;&nbsp;Reservation Details (आरक्षण विवरणी) </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="3%" height="30">
                                            <strong>a.</strong>
                                        </td>
                                        <td width="10%" height="30">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td>
                                                        General
                                                        <br />
                                                        &#2360;&#2366;&#2350;&#2366;&#2344;&#2381;&#2351; &#2357;&#2352;&#2381;&#2327;
                                                    </td>
                                                    <td width="40px" height="30">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblGeneral"></asp:Label></div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="18%" height="30">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td>
                                                        &nbsp;Schedule Caste (SC)<br />
                                                        &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340; &#2332;&#2366;&#2340;&#2367;
                                                    </td>
                                                    <td width="40px" height="30">
                                                        <div class="sqborder1">
                                                            <asp:Label runat="server" ID="lblSC"></asp:Label></div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td height="30" colspan="2">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td>
                                                        Schedule Tribe (ST)<br />
                                                        अनुसूचित जनजाति
                                                    </td>
                                                    <td height="30">
                                                        <div class="sqborder1">
                                                            &nbsp;<asp:Label runat="server" ID="lblST"></asp:Label></div>
                                                    </td>
                                                    <td>
                                                        Backward Class (BC)<br />
                                                        &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327;
                                                    </td>
                                                    <td>
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblobc"></asp:Label></div>
                                                    </td>
                                                    <td>
                                                        &nbsp; Extremly Backward Class (EBC)<br />
                                                        &#2309;&#2340;&#2381;&#2351;&#2306;&#2340; &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327;
                                                    </td>
                                                    <td height="30">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblOther"></asp:Label></div>
                                                    </td>
                                                    <td>
                                                        &nbsp;Women Backward Class (WBC)
                                                        <br />
                                                        &#2346;&#2367;&#2331;&#2396;&#2375; &#2357;&#2352;&#2381;&#2327; &#2325;&#2368;
                                                        &#2350;&#2361;&#2367;&#2354;&#2366;&#2351;&#2375;
                                                    </td>
                                                    <td height="30">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblWBC"></asp:Label></div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="30">
                                            <strong>b.</strong>
                                        </td>
                                        <td height="30">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td>
                                                        &nbsp;Specially Abled ( &#2342;&#2367;&#2357;&#2381;&#2351;&#2366;&#2306;&#2327;
                                                        )
                                                    </td>
                                                    <td width="40px" height="30">
                                                        <div class="sqborder1">
                                                            <asp:Label runat="server" ID="lblPHOH"></asp:Label></div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td height="30">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td>
                                                        Ex-Service Man (ESM)
                                                    </td>
                                                    <td width="40px" height="30">
                                                        <div class="sqborder1">
                                                            <asp:Label runat="server" ID="lblESM"></asp:Label></div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="20%" height="30">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2" style="display: none;">
                                                <tr>
                                                    <td>
                                                        Children of Martyrs (CoM)
                                                    </td>
                                                    <td width="40px" height="30">
                                                        <div class="sqborder1">
                                                            <asp:Label runat="server" ID="lblCoM"></asp:Label></div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="22%" height="30">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2" style="display: none;">
                                                <tr>
                                                    <td>
                                                        Serving Defence Personnel (SDP)
                                                    </td>
                                                    <td width="40px" height="30">
                                                        <div class="sqborder1">
                                                            <asp:Label runat="server" ID="lblSDP"></asp:Label></div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="2">
                </td>
            </tr>
            <tr style="display: none">
                <td>
                    <table width="100%" border="0" cellpadding="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                    <tr>
                                        <td width="2%">
                                            <strong>10.</strong>
                                        </td>
                                        <td width="98%" colspan="3">
                                            <strong>Weightage Details / &#2350;&#2361;&#2340;&#2381;&#2357; &#2357;&#2367;&#2357;&#2352;&#2339;
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td width="25%" valign="top">
                                                        <div class="tablebdercaf">
                                                            <table width="100%" border="0" cellpadding="1" cellspacing="0">
                                                                <tr>
                                                                    <td colspan="4" bgcolor="#FFFFFF" class="smlfont">
                                                                        <strong>a. &nbsp; NCC</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#FFFFFF">
                                                                        NCC
                                                                    </td>
                                                                    <td height="20" bgcolor="#FFFFFF" width="20px">
                                                                        <strong>
                                                                            <asp:Label ID="lblNccA" runat="server"></asp:Label>
                                                                        </strong>
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" style="display: none;">
                                                                        NCC (CAMP/COURSE)
                                                                    </td>
                                                                    <td width="20px" bgcolor="#FFFFFF" style="display: none;">
                                                                        <strong>
                                                                            <asp:Label ID="lblNccC" runat="server"></asp:Label>
                                                                        </strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td width="2%" valign="top">
                                                        &nbsp;
                                                    </td>
                                                    <td width="73%" valign="top">
                                                        <div class="tablebdercaf">
                                                            <table width="100%" border="0" cellpadding="1" cellspacing="0" style="display: none;">
                                                                <tr>
                                                                    <td colspan="8" bgcolor="#FFFFFF" class="smlfont">
                                                                        <strong>b. &nbsp; NSS Camp </strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#FFFFFF">
                                                                        University Level
                                                                    </td>
                                                                    <td height="20" bgcolor="#FFFFFF" width="20px">
                                                                        <strong>
                                                                            <asp:Label ID="lblNssU" runat="server"></asp:Label>
                                                                        </strong>
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF">
                                                                        State Level
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" width="20px">
                                                                        <strong>
                                                                            <asp:Label ID="lblNssS" runat="server"></asp:Label>
                                                                        </strong>
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF">
                                                                        National Level
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" width="20px">
                                                                        <strong>
                                                                            <asp:Label ID="lblNssN" runat="server"></asp:Label>
                                                                        </strong>
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF">
                                                                        International Level
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" width="20px">
                                                                        <strong>
                                                                            <asp:Label ID="lblNssIN" runat="server"></asp:Label>
                                                                        </strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr style="display: none;">
                                                    <td colspan="3" valign="top">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                            <tr>
                                                                <td valign="top">
                                                                    <div class="tablebdercaf">
                                                                        <table width="100%" border="0" cellpadding="2" cellspacing="0">
                                                                            <tr>
                                                                                <td colspan="6" bgcolor="#FFFFFF" class="smlfont">
                                                                                    <strong>c. Sports & Games </strong>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td bgcolor="#FFFFFF">
                                                                                    Sports
                                                                                </td>
                                                                                <td height="20" bgcolor="#FFFFFF" width="20px">
                                                                                    <strong>
                                                                                        <asp:Label ID="lblSportsS" runat="server"></asp:Label>
                                                                                    </strong>
                                                                                </td>
                                                                                <td bgcolor="#FFFFFF" style="display: none;">
                                                                                    National
                                                                                </td>
                                                                                <td bgcolor="#FFFFFF" style="display: none;">
                                                                                    <strong>
                                                                                        <asp:Label ID="lblSportsN" runat="server"></asp:Label>
                                                                                    </strong>
                                                                                </td>
                                                                                <td bgcolor="#FFFFFF" style="display: none;">
                                                                                    International
                                                                                </td>
                                                                                <td bgcolor="#FFFFFF" style="display: none;">
                                                                                    <strong>
                                                                                        <asp:Label ID="lblSportsIN" runat="server"></asp:Label>
                                                                                    </strong>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td height="22">
                                <strong>
                                    <label id="lblN12" runat="server">
                                        10.
                                    </label>
                                    &nbsp;&nbsp;&nbsp;जिस कॉलेज में आप Spot Admission से नामांकन लेना चाहते हैं उसकी
                                    विवरणी नीचे भरें |</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table width="100%" border="1" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <th style="width: 5%">
                                            SlNo.
                                        </th>
                                        <th style="width: 40%">
                                            College Name
                                        </th>
                                        <th style="width: 15%">
                                            Stream
                                        </th>
                                        <th style="width: 20%">
                                            Hons. Subject
                                        </th>
                                    </tr>
                                    <tr>
                                        <td style="height: 40px;" align="center">
                                            1
                                        </td>
                                        <td style="height: 40px;">
                                        </td>
                                        <td style="height: 40px;">
                                        </td>
                                        <td style="height: 40px;">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <div style="page-break-before: always;">
                            <br />
                        </div>
                        <tr>
                            <td height="22">
                                <strong>
                                    <label id="Label1" runat="server">
                                        11.
                                    </label>
                                    Payment Details</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table width="100%" border="1" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td>
                                            Client Transaction Id
                                        </td>
                                        <td>
                                            <strong>
                                                <asp:Label ID="lblCtrnid" runat="server"> </asp:Label></strong>
                                        </td>
                                        <td>
                                            Bank Transaction Id
                                        </td>
                                        <td>
                                            <strong>
                                                <asp:Label ID="lblBankTrnId" runat="server"></asp:Label></strong>
                                        </td>
                                        <td>
                                            Amount
                                        </td>
                                        <td>
                                            <strong>
                                                <asp:Label ID="lblAmount" Text="Rs.300" runat="server"></asp:Label></strong>
                                        </td>
                                        <td>
                                            Status
                                        </td>
                                        <td>
                                            <strong>
                                                <asp:Label ID="lblStatus" runat="server"></asp:Label></strong>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td height="10">
                            </td>
                        </tr>
                        <tr id="trMessage" runat="server">
                            <td>
                                <table width="100%">
                                    <tr>
                                        <td>
                                            <div id="PaymentStatus" runat="server">
                                                <span class="Star">*</span>&nbsp;&nbsp;&nbsp; <span class="Note">This form is valid
                                                    only after successful payment.</span><br />
                                                If Payment is deducted from your Account then wait for 48 Hours for the payment
                                                status in OFSS. If then also the payment is not successful then the amount will
                                                be returned to your Bank Account by the concerned Bank.</div>
                                            <br />
                                            <div style="font-weight: bold; padding-top: 2px;">
                                                आवेदक जिस जिस महाविद्यालय में स्पॉट नामांकन (Spot Admission) के माध्यम से आवेदन
                                                देना चाहते हैं वहाँ इस फॉर्म की हस्ताक्षरित प्रति जमा कर दें |</div>
                                        </td>
                                        <td width="260px" align="center">
                                            <div style="font-weight: bold; padding-top: 50px; font-size: 15px">
                                                Student Signature</div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td height="15">
                            </td>
                        </tr>
                    </table>
                    <%--  <div style="page-break-before: always;">
                    <br />
                </div>--%>
                </td>
            </tr>
        </table>
        <table width="990" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="center" colspan="2">
                                <strong>---------------------------------------------------------------------------------------------------------------------------------
                                </strong>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="2">
                                <strong>(THE BELOW INFORMATION WILL BE FILLED AT THE TIME OF ADMISSION IN
                                    <br />
                                    RESPECTIVE COLLEGE / यह सूचना चयनित कॉलेज में नामांकन लेते समय भरनी है) </strong>
                            </td>
                        </tr>
                        <tr>
                            <td height="10px" colspan="2">
                            </td>
                        </tr>
                        <tr>
                            <td width="200px">
                                AADHAAR CARD Number of Student
                            </td>
                            <td>
                                _______________________________________________________
                            </td>
                        </tr>
                        <tr>
                            <td height="10px" colspan="2">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <strong>Details of the Subjects for Admission</strong>
                            </td>
                        </tr>
                        <tr>
                            <td height="10px" colspan="2">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="tablebdercaf">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td height="30px" align="center" style="background: #efefef;">
                                                Sl. No
                                            </td>
                                            <td align="center" style="background: #efefef;">
                                                Name of the Subject
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="30px">
                                                Subsidiary Subject 1
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="30px">
                                                Subsidiary Subject 2
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="30px">
                                                Compulsory Subject
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td height="10px" colspan="2">
                            </td>
                        </tr>
                        <tr>
                            <td height="50px" width="50%">
                                <strong>Details of the Subjects for Admission</strong>
                            </td>
                            <td align="right" height="50px">
                                <strong>Signature of Verifying Officer </strong>
                            </td>
                        </tr>
                        <tr>
                            <td height="10px" colspan="2">
                            </td>
                        </tr>
                        <tr>
                            <td height="30px" colspan="2">
                                <strong>Date of Verification :______/_________/_________ </strong>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <table width="990" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td height="40px" colspan="2">
                                <div style="border-bottom: 1px dashed #123;">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="2" style="font-size: 26px;">
                                <strong>( पावती रसीद )</strong>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="2">
                                <strong>---------------------------------------------------------------------------------------------------------------------------------
                                </strong>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="2" style="font-size: 15px">
                                <strong>(महाविद्यालय आवेदन फॉर्म जमा लेने के पश्चात यह पावती रसीद सम्बंधित आवेदक को
                                    हस्ताक्षर करके एवं मुहर लगा कर वापस देंगे | ) </strong>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 20px">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td align="right" style="padding-right: 100px;">
                                            <strong>
                                                <asp:Label runat="server" ID="lblRefNo" Font-Size="X-Large"></asp:Label></strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right" style="padding-right: 85px;">
                                            <asp:Image ID="imgBarcode" runat="server" Width="147" Height="36" />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 15px; padding-top: 80px">
                                1. महाविद्यालय का नाम
                            </td>
                            <td style="padding-top: 80px">
                                :__________________________________________________________________________
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 15px; padding-top: 10px">
                                2. जिस संकाय में आप नामांकन लेना चाहते हैं
                            </td>
                            <td style="padding-top: 10px">
                                :__________________________________________________________________________
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 15px; padding-top: 10px">
                                3. जिस स्नातक विषय में आप नामांकन लेना चाहते हैं
                            </td>
                            <td style="padding-top: 10px">
                                :__________________________________________________________________________
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 15px; padding-top: 30px">
                                दिनांक:_____________________________
                            </td>
                            <td style="font-size: 15px; padding-top: 30px; padding-left: 150px" align="center">
                                _________________________________________<br />
                                (फॉर्म जमा लेने वाले अधिकारी का हस्ताक्षर )
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="10px">
                </td>
            </tr>
        </table>
    </div>
    <div id="divDateLine" runat="server" visible="false" class="frm_closed">Dateline to print CAF for Spot admission is closed...</div>
     
  
    </form>
</body>
</html>
