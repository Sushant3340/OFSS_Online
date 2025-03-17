<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CAFJr.aspx.cs" Inherits="ONLINE_CAF_CAFJr"
    EnableEventValidation="false" Debug="true" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Welcome :: Online Facilitation System for Students (OFSS)</title>
    <link href="../style/CAF.css" rel="stylesheet" type="text/css" />
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
     <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    <link href="../styles/chromestyle.css" type="text/css" />
    <style type="text/css">
        body {
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            border: none;
            margin-top: 5px;
            font-family: "Roboto", sans-serif !important;
            font-size:13px;
        }

        .CAFPrintheading, .style2Print, .normalfont{
            font-family: "Roboto", sans-serif !important;
            font-weight:600
        }

        .style2Print{
            font-size:18px;
        }

        .Uppercase {
            text-transform: uppercase;
        }

        .redbold {
            font-size: 20px;
            font-weight: bold;
            color: #C60000;
            text-decoration: none;
        }

        .smlfont {
            font-size: 11px;
            font-weight: bold;
            color: #333333;
            text-decoration: none;
        }

        .inputitem {
            font-size: 11px;
            font-weight: normal;
            color: #000000;
        }

        .tbborderCAF {
            padding: 0px;
            border-color: #666666;
            border-width: 2px;
            border-style: solid;
        }

        .borderceelcaf {
            padding: 0px;
            border-color: #666666;
            border-width: 1px;
            border-style: solid;
        }

        .tablebdercaf {
            margin: 0px;
            padding: 0px;
        }

            .tablebdercaf table {
                border-top-width: 1px;
                border-top-style: solid;
                border-top-color: #666666;
                border-left-width: 1px;
                border-left-style: solid;
                border-left-color: #666666;
            }

                .tablebdercaf table td {
                    border-right-width: 1px;
                    border-bottom-width: 1px;
                    border-right-style: solid;
                    border-bottom-style: solid;
                    border-right-color: #666666;
                    border-bottom-color: #666666;
                }

                .tablebdercaf table th {
                    border-right-width: 1px;
                    border-bottom-width: 1px;
                    border-right-style: solid;
                    border-bottom-style: solid;
                    border-right-color: #666666;
                    border-bottom-color: #666666;
                    background-color: #999999;
                }

        .bgprint {
            background-color: #666666;
            padding: 2px;
            display: block;
        }

        .printIMG {
            position: relative;
        }

            .printIMG img {
                position: absolute;
                left: -43px;
                top: -55px;
                background: #fff;
                padding: 2px;
                border: 1px solid #d8d8d8;
                cursor: pointer;
            }

        img.profileimage {
            border: 1px solid #e1e1e1 !important;
            padding: 5px;
        }
        .optinal-box table tr td, .optinal-box table tr th {
            border: solid 1px #000;
            padding: 5px;
            border-left-width: 0;
            border-top: 0px; 
        }

        .optinal-box table tr th:nth-child(1), 
        .optinal-box table tr td:nth-child(1) {
            border-left-width: 1px;
        }

    </style>
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
            //alert(date)
            document.getElementById('lblDateTime').innerText = date
            //document.getElementById('lblDateTimeApp').innerText = date
            window.setTimeout('dateTime()', 500);


        }

        function show(subId) {
            document.getElementById(subId).style.display = ""
        }
        function hide(subId) {
            document.getElementById(subId).style.display = "none"
        }
        function showCGPA() {

            var cbse = document.getElementById('strCBSE').value;
            if (cbse == 'True') {
                document.getElementById('tdMaxH').style.display = "none";
                document.getElementById('tdMaxD').style.display = "none";
                document.getElementById('CGPAH').innerHTML = "<strong>CGPA</strong>";
                document.getElementById('tdMaxHApp').style.display = "none";
                document.getElementById('tdMaxDApp').style.display = "none";
                document.getElementById('CGPAHApp').innerHTML = "<strong>CGPA</strong>";
            }
            if (cbse == 'False') {
                document.getElementById('tdMaxH').style.display = '';
                document.getElementById('tdMaxD').style.display = '';
                document.getElementById('CGPAH').innerHTML = "<strong>Total Mark Secured</strong>";
                document.getElementById('tdMaxHApp').style.display = '';
                document.getElementById('tdMaxDApp').style.display = '';
                document.getElementById('CGPAHApp').innerHTML = "<strong>Total Mark Secured</strong>";
            }
            if (cbse == 'KERALA') {
                document.getElementById('tdMaxH').style.display = 'none';
                document.getElementById('tdMaxD').style.display = 'none';
                document.getElementById('CGPAH').innerHTML = "<strong>Grade</strong>";
                document.getElementById('tdMaxHApp').style.display = 'none';
                document.getElementById('tdMaxDApp').style.display = 'none';
                document.getElementById('CGPAHApp').innerHTML = "<strong>Grade</strong>";
            }
        }
    </script>
    <style media="print" type="text/css">
        .NOPRINT {
            display: none;
        }
    </style>
</head>
<body onload="dateTime();">
    <form id="form1" runat="server">
        <asp:HiddenField ID="hdnApplicationId" runat="server" />
        <asp:HiddenField ID="hdnImgAppl" runat="server" />
        <table style="width:900px;" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <table border="0" cellpadding="0" cellspacing="0" style="width:100%;padding:0; border:none;border-collapse: collapse;">
                        <tr>
                            <td>
                                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="width:93px" align="center">
                                            <%--  <img src="../images/Logo.png" width="80" height="93" />--%>
                                            <img src="../images/BiharLogo.png" style="width:77px" alt="" />
                                        </td>
                                        <td>
                                            <table style="width:100%" border="0" align="right" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td height="30" align="center" class="CAFPrintheading">Common Application Form
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="22" align="center" class="style2Print">For Admission to Intermediate Courses Session 2024-26
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="22" align="center" class="normalfont">Bihar School Examination Board, Government of Bihar
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" class="normalfont">
                                                        <asp:Label ID="lblDateTime" runat="server"></asp:Label>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td style="width:120px">
                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td align="center">
                                                        <strong>
                                                            <asp:Label runat="server" ID="lblUid" Font-Size="X-Large"></asp:Label></strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <%--<asp:Label ID="lblBarCode" runat="server"></asp:Label>
                                                         <br />--%>
                                                        <asp:Image ID="imgId" runat="server" Width="147" Height="36" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" class="redbold">Intermediate
                                                    </td>
                                                </tr>
                                            </table>
                                            <div align="center" class="printIMG">
                                                <img src="../images/print_ICON.gif" style="width:26px; height:28px" title="Click here to take a print"
                                                    onclick="window.print();return false;" class="NOPRINT" alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table style="width:100%" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td>
                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td>
                                                        <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="width:750px">
                                                                    <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td colspan="4">
                                                                                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tr>
                                                                                        <td style="width:4%;border: solid 1px #000; padding: 5px; text-align:center">
                                                                                            <strong>1</strong>
                                                                                        </td>
                                                                                        <td style="border: solid 1px #000; padding: 5px; border-left: 0;">
                                                                                            <strong>Details of 10th Examination. / &#2342;&#2360;&#2357;&#2368;&#2306; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                            &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; | </strong>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colspan="2">
                                                                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                <tr>
                                                                                                    <td style="border: solid 1px #000; padding: 5px; border-top:0; text-align:center">Name of the Examination Board<br />
                                                                                                        &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                    &#2348;&#2379;&#2352;&#2381;&#2337; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                                    </td>
                                                                                                    <td style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">Year of Passing
                                                                                                    <br />
                                                                                                        &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                    &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;|
                                                                                                    </td>
                                                                                                    <td style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">Exam Type
                                                                                                    <br />
                                                                                                        &#2310;&#2346;&#2344;&#2375; &#2325;&#2380;&#2344; &#2360;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                    &#2346;&#2366;&#2360; &#2325;&#2368; &#2361;&#2376;
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="width:172px;border: solid 1px #000; padding: 5px; border-top:0; text-align:center">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblBoard" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td style="width:92px;border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblYOE" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td style="width:92px;border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblExamType" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="border: solid 1px #000; padding: 5px; border-top:0; text-align:center">Date of Birth / &#2332;&#2344;&#2381;&#2350; &#2340;&#2367;&#2341;&#2367;
                                                                                                    </td>
                                                                                                    <td id="tdRollCdH" runat="server" class="roll-code-cls" style="display: none;border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">Roll Code / &#2352;&#2379;&#2354; &#2325;&#2379;&#2337;
                                                                                                    </td>
                                                                                                    <td colspan="2" style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">Roll Number / &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="border: solid 1px #000; padding: 5px; border-top:0; text-align:center">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblDob" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td  id="tdRollCdF" runat="server" class="roll-code-cls" style="display: none;border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblRollCode" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td colspan="2" style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblRoll" runat="server" />
                                                                                                        </div>
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
                                                                                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                                                     <tr id="trUniqueId" runat="server" style="display:none;">
                                                                                        <td colspan="2" style="border: solid 1px #000; padding: 5px; border-top: 0;">
                                                                                            <strong>Applicant's Unique Id
                                                                                            <br />
                                                                                               आवेदक का यूनिक आई.डी (यदि उपलब्ध हो ) </strong>
                                                                                        </td>
                                                                                        <td style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblUniqueId" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td style="width:4%;border: solid 1px #000; padding: 5px; border-top: 0;">
                                                                                            <strong>2</strong>
                                                                                        </td>
                                                                                        <td style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
                                                                                            <strong>Applicant's Name
                                                                                            <br />
                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350; </strong>
                                                                                        </td>
                                                                                        <td style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblApplName" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                   <%-- <tr>
                                                                                        <td  style="height: 4px; width:4%;"></td>
                                                                                        <td style="width:23%"></td>
                                                                                        <td style="width:73%"></td>
                                                                                    </tr>--%>
                                                                                    <tr>
                                                                                        <td style="width:4%;border: solid 1px #000; padding: 5px; border-top: 0;">
                                                                                            <strong>3</strong>
                                                                                        </td>
                                                                                        <td style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
                                                                                            <strong>Father's Name
                                                                                            <br />
                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2375; &#2346;&#2367;&#2340;&#2366;
                                                                                            &#2325;&#2366; &#2344;&#2366;&#2350; </strong>
                                                                                        </td>
                                                                                        <td style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblFatherName" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                   <%-- <tr>
                                                                                        <td  style="height: 4px; width:4%;"></td>
                                                                                        <td style="width:23%"></td>
                                                                                        <td style="width:73%"></td>
                                                                                    </tr>--%>
                                                                                    <tr>
                                                                                        <td style="width:4%;border: solid 1px #000; padding: 5px; border-top: 0;">
                                                                                            <strong>4</strong>
                                                                                        </td>
                                                                                        <td style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
                                                                                            <strong>Mother's Name
                                                                                            <br />
                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2350;&#2366;&#2340;&#2366;
                                                                                            &#2325;&#2366; &#2344;&#2366;&#2350; </strong>
                                                                                        </td>
                                                                                        <td style="border: solid 1px #000; padding: 5px; border-left: 0; border-top: 0;">
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
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td align="center"  style="width:125px;border: solid 1px #000; padding: 5px;border-left:0">
                                                        <asp:Image ID="imgPhoto" runat="server" CssClass="profileimage" Height="" Width="150" />
                                                        <%-- <asp:Label runat="server" ID="lblPhotoMsg" Text="Affix your self attested (on the front) recent color passport size photographs here"></asp:Label>--%>
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
            <%--<tr>
                <td height="3"></td>
            </tr>--%>
            <tr>
                <td>
                    <div>
                        <table style="width:100%;padding:0; border:none;border-collapse: collapse;" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td>
                                    <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td style="width:4%;border: solid 1px #000; padding: 5px; border-top: 0;">
                                                <strong>5.</strong>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                <strong>Details of Mark/Grade Secured in 10th Board Examination /<br />
                                                    &#2342;&#2360;&#2357;&#2368; &#2350;&#2375;&#2306; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;
                                                &#2357;&#2367;&#2359;&#2351;&#2357;&#2366;&#2352; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325;
                                                &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width:4%;border: solid 1px #000; padding: 5px; border-top: 0;">
                                                <strong>a.</strong>
                                            </td>
                                            
                                            <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                <div class="tablebdercaf">
                                                    <table style="width:100%" border="0" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  class="smlfont" id="tdMaxH">Total Full Marks
                                                            </td>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  class="smlfont">
                                                                <span id="CGPAH"><strong>Total Marks Obtained</strong></span>
                                                            </td>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  class="smlfont" runat="server" id="tdEng">English/SL
                                                            </td>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  class="smlfont" runat="server" id="tdMath">Mathematics
                                                            </td>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  class="smlfont" runat="server" id="tdScience">Science
                                                            </td>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  class="smlfont" runat="server" id="tdSoScience">Social Science
                                                            </td>
                                                            <td id="tdGrade" runat="server" style="background-color:#FFFFFF;padding:3px;" class="smlfont">Grade
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  id="tdMaxD">&nbsp;
                                                            <asp:Label runat="server" ID="lblMaxMark"></asp:Label>
                                                            </td>
                                                            <td style="background-color:#FFFFFF;padding:3px;" >&nbsp;
                                                            <asp:Label runat="server" ID="lblTotalMark"></asp:Label>
                                                            </td>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  runat="server" id="tdEngMrk">&nbsp;
                                                            <asp:Label runat="server" ID="lblEngMark"></asp:Label>
                                                            </td>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  runat="server" id="tdMathMrk">&nbsp;
                                                            <asp:Label runat="server" ID="lblMathMark"></asp:Label>
                                                            </td>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  runat="server" id="tdScienceMrk">&nbsp;
                                                            <asp:Label runat="server" ID="lblScienceMark"></asp:Label>
                                                            </td>
                                                            <td style="background-color:#FFFFFF;padding:3px;"  runat="server" id="tdSoScienceMrk">&nbsp;
                                                            <asp:Label runat="server" ID="lblSSMark"></asp:Label>
                                                            </td>
                                                            <td id="tdGradelbl" runat="server" style="background-color:#FFFFFF;padding:3px;" >&nbsp;
                                                            <asp:Label runat="server" ID="lblGrade"></asp:Label>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" style="border: solid 1px #000; padding: 5px; border-top: 0;">&nbsp;   &nbsp;   &nbsp;   &nbsp;    &nbsp;  Note : Selection of the students will be done based on the Total Marks obtained
                                            in the Qualifying Board Examination.<br />
                                                &nbsp;   &nbsp;   &nbsp;   &nbsp;    &nbsp;     ध्यान दें : छात्रों का चयन सूची में चयन बोर्ड परीक्षा में कुल प्राप्तांक के आधार
                                            पर होता है |
                                            </td>
                                        </tr>
                                        <tr id="MarkVerification" runat="server">
                                            <td style="width:50%;border: solid 1px #000; padding: 5px; border-top: 0;">
                                                <strong>Have you secured above mark in your Annual HSE(O) examination ? </strong>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                <div class="sqborder1" style="width:50px">
                                                    <asp:Label ID="lblMarkVerification" runat="server"></asp:Label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style="display: none;">
                                            <td style="border: solid 1px #000; padding: 5px; border-top: 0;">
                                                <strong>b.</strong>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                    <tr>
                                                        <td style="width:26%">
                                                            <strong>Have you passed 10th Board Exam Compartmentally or through Improvement Examination?
                                                            /
                                                            <br />
                                                                &#2325;&#2381;&#2351;&#2366; &#2309;&#2346;&#2344;&#2375; &#2342;&#2360;&#2357;&#2368;
                                                            &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2346;&#2370;&#2352;&#2325;-&#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                            &#2309;&#2341;&#2357;&#2366; &#2360;&#2350;&#2369;&#2344;&#2381;&#2344;&#2340; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                            &#2350;&#2375;&#2306; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368;
                                                            &#2361;&#2376;&#2306; ? </strong>
                                                        </td>
                                                        <td style="width:7%">
                                                            <div class="sqborder1">
                                                                <asp:Label ID="lblCompartmental" runat="server"></asp:Label>
                                                            </div>
                                                        </td>
                                                        <td style="width:1%">&nbsp;
                                                        </td>
                                                        <td style="width:66%">
                                                            <div class="tablebdercaf">
                                                                <asp:GridView ID="grdCompartment" runat="server" AllowPaging="false" PageSize="6"
                                                                    EmptyDataText="No Record(s) Found." AutoGenerateColumns="false" CellPadding="2"
                                                                    CellSpacing="0" BackColor="#CCCCCC">
                                                                    <Columns>
                                                                        <asp:BoundField DataField="vch_Subject" HeaderText="Name of the Subject" />
                                                                        <asp:BoundField DataField="int_FailMark" HeaderText="Fail Mark in Previous Exam"
                                                                            NullDisplayText="NA" />
                                                                        <asp:BoundField DataField="int_PassMark" HeaderText="Pass mark in Compartmental Exam"
                                                                            NullDisplayText="NA" />
                                                                    </Columns>
                                                                    <HeaderStyle BackColor="#D3D3D3" ForeColor="#000000" />
                                                                    <RowStyle BackColor="#ffffff" />
                                                                </asp:GridView>
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
                    </div>
                </td>
            </tr>
            <%--<tr>
                <td height="3"></td>
            </tr>--%>
            <tr>
                <td>
                    <table style="width:100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="background-color:#FFFFFF" >
                                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="border: solid 1px #000; padding: 5px; border-top: 0;">
                                            <strong>
                                                <label id="lblN11" runat="server">
                                                    6.</label>
                                            </strong>
                                        </td>
                                        <td colspan="5" style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <strong>
                                                <label id="Label9">
                                                    Record of educational institution last attended from which you have passed 10th
                                                Examination
                                                <br />
                                                    &#2310;&#2346;&#2344;&#2375; &#2332;&#2367;&#2360; &#2360;&#2381;&#2325;&#2370;&#2354;
                                                &#2360;&#2375; &#2342;&#2360;&#2357;&#2368; &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376; &#2313;&#2360;&#2325;&#2368;
                                                &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; |</label>
                                                <%--Correspondence--%>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="width:3%;border: solid 1px #000; padding: 5px; border-top: 0;" class="">
                                            <strong>
                                                <label id="Label10">
                                                    a.</label>
                                            </strong>
                                        </td>
                                        <td style="width:20%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <label id="Label11">
                                                Name of the School /<br />
                                                &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2325;&#2366; &#2344;&#2366;&#2350;
                                            </label>
                                        </td>
                                        <td colspan="4" style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblSchName" runat="server" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="width:3%;border: solid 1px #000; padding: 5px; border-top: 0;" class="">
                                            <strong>
                                                <label id="Label13">
                                                    b.</label>
                                            </strong>
                                        </td>
                                        <td style="width:20%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <label id="Label14">
                                                Location of the School /
                                            <br />
                                                &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2325;&#2366; &#2346;&#2340;&#2366;
                                            </label>
                                        </td>
                                        <td style="width:25%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblSchloc" runat="server" />
                                            </div>
                                        </td>
                                        <td style="width:3%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;" class="">
                                            <strong>
                                                <label id="Label1">
                                                    c.</label>
                                            </strong>
                                        </td>
                                        <td style="width:25%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <label id="Label17">
                                                District / &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375; &#2350;&#2375;&#2306;
                                            &#2310;&#2346;&#2325;&#2366; &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351;
                                            &#2361;&#2376;
                                            </label>
                                        </td>
                                        <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblLIDist" runat="server" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: solid 1px #000; padding: 5px; border-top: 0;">
                                            <strong>d. </strong>
                                        </td>
                                        <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Year of Joining / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354;
                                        &#2313;&#2360; &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2350;&#2375;&#2306;
                                        &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344; &#2354;&#2367;&#2351;&#2366; &#2341;&#2366;
                                        </td>
                                        <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblyoj" runat="server" />
                                            </div>
                                        </td>
                                        <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;" class="">
                                            <strong>e. </strong>
                                        </td>
                                        <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Year of Leaving / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354;
                                        &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2360;&#2375; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                        &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;
                                        </td>
                                        <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblyol" runat="server" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: solid 1px #000; padding: 5px; border-top: 0;" class="">
                                            <strong>f. </strong>
                                        </td>
                                        <td colspan="4" style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                             Have you passed 10th exam as a student of Kasturba Gandhi Balika Vidyalaya? / क्या आपने दसवीं की परीक्षा कस्तूरबा गाँधी आवासीय बालिका छात्रावास में रहते हुए उत्तीर्ण की है ?
                                        </td>
                                        <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblKGBAC" runat="server" Text="" />
                                            </div>
                                        </td>
                                       
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <%--<tr>
                <td height="3"></td>
            </tr>--%>
            <tr>
                <td>
                    <table style="width:100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width:3%;border: solid 1px #000; padding: 5px; border-top: 0;">
                                <strong>7.</strong>
                            </td>
                            <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                <strong>Personal Details
                                <br />
                                    &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;</strong>
                            </td>
                            <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                <table style="width:100%" border="0" cellpadding="2" cellspacing="0">
                                    <tr>
                                        <td style="width:20%;border: solid 1px #000; padding: 3px;">Gender / &#2354;&#2367;&#2306;&#2327;
                                        </td>
                                        <td style="width:20%;border: solid 1px #000; padding: 3px;border-left:0;">Mother Tongue / &#2350;&#2366;&#2340;&#2371;&#2349;&#2366;&#2359;&#2366;
                                        </td>
                                        <td style="width:20%;border: solid 1px #000; padding: 3px;border-left:0;">Nationality / &#2344;&#2366;&#2327;&#2352;&#2367;&#2325;&#2340;&#2366;
                                        </td>
                                        <td style="width:20%;border: solid 1px #000; padding: 3px;border-left:0;">Religion / &#2343;&#2352;&#2381;&#2350;
                                        </td>
                                        <td style="width:20%;border: solid 1px #000; padding: 3px;border-left:0;">Blood Group / &#2352;&#2325;&#2381;&#2340; &#2360;&#2350;&#2370;&#2361;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="width:20%;border: solid 1px #000; padding: 3px;border-top: 0;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblsex" runat="server" />
                                            </div>
                                        </td>
                                        <td style="border: solid 1px #000; padding: 3px; border-left:0; border-top: 0;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblMT" runat="server" />
                                            </div>
                                        </td>
                                        <td style="border: solid 1px #000; padding: 3px; border-left:0; border-top: 0;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblNat" runat="server" />
                                            </div>
                                        </td>
                                        <td style="border: solid 1px #000; padding: 3px; border-left:0; border-top: 0;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblreligion" runat="server" />
                                            </div>
                                        </td>
                                        <td style="border: solid 1px #000; padding: 3px; border-left:0; border-top: 0;">
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
            <%--<tr>
                <td height="3"></td>
            </tr>--%>
            <tr>
                <td>
                    <table style="width:100%;" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="background-color:#FFFFFF" >
                                <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="border: solid 1px #000; padding: 5px;border-top: 0;">
                                            <strong>8. Address for Correspondence / &#2346;&#2340;&#2381;&#2352;&#2366;&#2330;&#2366;&#2352;
                                            &#2325;&#2366; &#2346;&#2340;&#2366;</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td style="width:3%;border: solid 1px #000; padding: 5px;border-top: 0;">a.
                                                    </td>
                                                    <td style="width:10%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">State/UT <br />राज्य / केन्द्र-शासित प्रदेश
                                                    </td>
                                                    <td style="width:16%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblstate" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td style="width:2%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">b.
                                                    </td>
                                                    <td style="width:10%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">District / &#2332;&#2367;&#2354;&#2366;
                                                    </td>
                                                    <td style="width:20%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lbldist" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td style="width:2%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">c.
                                                    </td>
                                                    <td style="width:15%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Block / Municipality / &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; / &#2344;&#2327;&#2352;
                                                    &#2346;&#2352;&#2367;&#2359;&#2342;&#2381; &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;
                                                    </td>
                                                    <td style="width:21%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
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
                                            <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td style="width:3%; border: solid 1px #000; padding: 5px;border-top: 0;">d.
                                                    </td>
                                                    <td style="width:10%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Address / &#2346;&#2340;&#2366;
                                                    </td>
                                                    <td style="width:48.4%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1" style="height: auto;">
                                                            <asp:Label ID="lbldtl" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td style="width:2%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">e.
                                                    </td>
                                                    <td style="width:15%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">PIN Code / &#2346;&#2367;&#2344; &#2325;&#2379;&#2337;
                                                    </td>
                                                    <td style="width:21%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
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
                                            <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td style="width:3%;border: solid 1px #000; padding: 5px;border-top: 0;"> f.
                                                    </td>
                                                    <td style="width:10%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Mobile No.<br />
                                                        &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                    </td>
                                                    <td style="width:16%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblmob" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td style="width:2%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">g.
                                                    </td>
                                                    <td style="width:10%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">e-Mail / &#2312;-&#2350;&#2375;&#2354;
                                                    </td>
                                                    <td style="width:20%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblemail" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td style="width:2%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">h.
                                                    </td>
                                                    <td style="width:15%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Telephone No.<br />
                                                        &#2342;&#2370;&#2352;&#2349;&#2366;&#2359; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366;
                                                    |
                                                    </td>
                                                    <td style="width:21%; border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="width:29%;" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblAreaCode" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td style="width:3%;">&nbsp;
                                                                </td>
                                                                <td style="width:68%;">
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
                                    <tr>
                                        <td>
                                            <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td style="width:3%;border: solid 1px #000; padding: 5px;border-top: 0;">i.
                                                    </td>
                                                    <td style="width:10%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Aadhaar No.
                                                    </td>
                                                    <td colspan="7" style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblAadharno" runat="server" />
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
            <%--<tr>
                <td height="3"></td>
            </tr>--%>
            <tr>
                <td>
                    <table style="width:100%;" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td>
                                <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="width:3%; border: solid 1px #000; padding: 5px; border-top: 0;">
                                            <strong>9. </strong>
                                        </td>
                                        <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                            <strong>Reservation Details / &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2325;&#2368;
                                            &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="width:3%;border: solid 1px #000; padding: 5px; border-top: 0;">
                                            <strong>a.</strong>
                                        </td>
                                        <td style="width:100%;">
                                            <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">General / &#2360;&#2366;&#2350;&#2366;&#2344;&#2381;&#2351; &#2357;&#2352;&#2381;&#2327;
                                                    </td>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblGeneral"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">&nbsp;Schedule Caste (SC) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340;
                                                    &#2332;&#2366;&#2340;&#2367;
                                                    </td>
                                                    <td style="width:111px;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblSC"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">&nbsp;Schedule Tribe (ST) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340;
                                                    &#2332;&#2344;&#2332;&#2366;&#2340;&#2367;
                                                    </td>
                                                    <td style="width:40px;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            &nbsp;<asp:Label runat="server" ID="lblST"></asp:Label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Backward Class(BC) / &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                    &#2357;&#2352;&#2381;&#2327;
                                                    </td>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblobcapp"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Extremly Backward Class (EBC) / &#2309;&#2340;&#2381;&#2351;&#2306;&#2340; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                    &#2357;&#2352;&#2381;&#2327;
                                                    </td>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblOther"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Women Backward Class (WBC) / &#2346;&#2367;&#2331;&#2396;&#2375; &#2357;&#2352;&#2381;&#2327;
                                                    &#2325;&#2368; &#2350;&#2361;&#2367;&#2354;&#2366;&#2351;&#2375;
                                                    </td>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblWBC"></asp:Label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: solid 1px #000; padding: 5px; border-top: 0;">
                                            <strong>b.</strong>
                                        </td>
                                        <td style="width:100%;" colspan="2">
                                            <table style="width:100%;" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td style="width:170px;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">Specially Added ( &#2342;&#2367;&#2357;&#2381;&#2351;&#2366;&#2306;&#2327; )
                                                    </td>
                                                    <td style="width:43px;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1">
                                                            <asp:Label runat="server" ID="lblPHOH"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td style="border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">EWS (Economically Weaker Section)
                                                    </td>
                                                    <td style="width: 100px;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblEWS"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <%--<td height="30" style="width: 100px;"></td>
                                                    <td height="30" style="width: 100px;"></td>
                                                    <td height="30" style="width: 95px;"></td>--%>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="display: none;">
                                        <td height="30">
                                            <strong>c.</strong>
                                        </td>
                                        <td height="30">
                                            <table style="width:100%;" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td style="display: none; width:170px;">Ex-Service Man (ESM)
                                                    </td>
                                                    <td style="display: none; width:40px; height:30px;">
                                                        <div class="sqborder1">
                                                            <asp:Label runat="server" Style="width: 35px;" ID="lblESM"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td  style="display: none; width:230px">Serving Defence Personnel (SDP)
                                                    </td>
                                                    <td  style="display: none; width:111px; height:30px;">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblSDP"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td style="display: none;">Children of Martyrs (CoM)
                                                    </td>
                                                    <td style="display: none; width:40px; height:30px;">
                                                        <div class="sqborder1">
                                                            <asp:Label runat="server" ID="lblCoM"></asp:Label>
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
            <%--<tr>
                <td height="3"></td>
            </tr>--%>
            <tr>
                <td>
                    <table style="width:100%;" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="background-color:#FFFFFF" >
                                <table border="0" cellspacing="0" cellpadding="0" style="width:100%;display: none;">
                                    <tr>
                                        <td style="width:2%;border: solid 1px #000; padding: 5px; border-top: 0;">
                                            <strong>10.</strong>
                                        </td>
                                        <td style="width:98%;border: solid 1px #000; padding: 5px; border-left:0; border-top: 0;" colspan="3">
                                            <strong>Weightage Details / &#2350;&#2361;&#2340;&#2381;&#2357; &#2357;&#2367;&#2357;&#2352;&#2339;</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" style="border: solid 1px #000; padding: 5px; border-top: 0;">
                                            <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td style="width:25%;">
                                                        <div class="tablebdercaf">
                                                            <table style="width:100%;" border="0" cellpadding="2" cellspacing="0">
                                                                <tr>
                                                                    <td colspan="4" style="background-color:#FFFFFF"  class="smlfont">
                                                                        <strong>a. &nbsp;<strong>NCC</strong></strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="width:36%; background-color:#FFFFFF;">NCC
                                                                    </td>
                                                                    <td  style="width:40px; background-color:#FFFFFF;">
                                                                        <strong>
                                                                            <asp:Label runat="server" ID="lblNccA"></asp:Label></strong>
                                                                    </td>
                                                                    <td  style="display: none; background-color:#FFFFFF;">NCC (C)
                                                                    </td>
                                                                    <td  style="display: none; width:40px; background-color:#FFFFFF;">
                                                                        <strong>
                                                                            <asp:Label runat="server" ID="lblNccC"></asp:Label></strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td style="width:1%;">&nbsp;
                                                    </td>
                                                    <td style="width:43%;">
                                                        <div class="tablebdercaf">
                                                            <table style="width:100%;" border="0" cellpadding="2" cellspacing="0" style="display: none;">
                                                                <tr>
                                                                    <td colspan="4" style="background-color:#FFFFFF"  class="smlfont">
                                                                        <strong>b. &nbsp; Scout &amp; Guide</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:#FFFFFF" >Rajya Puraskar(RP)
                                                                    </td>
                                                                    <td  style="width:35px; background-color:#FFFFFF;">
                                                                        <strong>
                                                                            <asp:Label ID="lblRP" runat="server"></asp:Label></strong>
                                                                    </td>
                                                                    <td style="background-color:#FFFFFF" >President Recognition(PR)
                                                                    </td>
                                                                    <td style="width:35px; background-color:#FFFFFF;">
                                                                        <strong>
                                                                            <asp:Label ID="lblPR" runat="server"></asp:Label></strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td style="width:1%;">&nbsp;
                                                    </td>
                                                    <td style="width:30%;"class="tablebdercaf">
                                                        <table style="width:100%;" border="0" cellpadding="2" cellspacing="0" style="display: none;">
                                                            <tr>
                                                                <td colspan="6" style="background-color:#FFFFFF"  class="smlfont">
                                                                    <strong>c. &nbsp; Sports</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="background-color:#FFFFFF" >State
                                                                </td>
                                                                <td style="width:40px; background-color:#FFFFFF;">
                                                                    <strong>
                                                                        <asp:Label runat="server" ID="lblSportsS"></asp:Label></strong>
                                                                </td>
                                                                <td style="background-color:#FFFFFF" >National
                                                                </td>
                                                                <td style="width:40px; background-color:#FFFFFF;">
                                                                    <strong>
                                                                        <asp:Label runat="server" ID="lblSportsN"></asp:Label></strong>
                                                                </td>
                                                                <td style="background-color:#FFFFFF" >International
                                                                </td>
                                                                <td  style="width:40px; background-color:#FFFFFF;">
                                                                    <strong>
                                                                        <asp:Label runat="server" ID="lblSportsIN"></asp:Label></strong>
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
            <%--<tr>
                <td height="3"></td>
            </tr>--%>
            <tr>
                <td>
                    <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="border: solid 1px #000; padding: 5px; border-top: 0;">
                                <strong>
                                    <label id="lblN12" runat="server">
                                        10.</label>
                                </strong><strong>Option(s)/Choice(s) Details</strong>
                            </td>
                        </tr>
                        <tr>
                            <td class="optinal-box">
                                <asp:GridView ID="grdOptions" runat="server" AllowPaging="false" PageSize="6" EmptyDataText="No Record(s) Found."
                                    AutoGenerateColumns="false" CellPadding="2" CellSpacing="0" Width="100%" OnRowDataBound="grdOptions_RowDataBound1">
                                    <Columns>
                                        <asp:BoundField DataField="int_Option_No" HeaderText="Option" />
                                        <asp:BoundField DataField="vch_CollegeName" HeaderText="College Name" NullDisplayText="NA" />
                                        <asp:BoundField DataField="vch_StreamName" HeaderText="Stream" NullDisplayText="NA" />
                                        <asp:BoundField DataField="compulsory" HeaderText="Compulsory" NullDisplayText="NA"
                                            Visible="false" />
                                        <asp:BoundField DataField="Electives" HeaderText="Electives" NullDisplayText="NA"
                                            Visible="false" />
                                        <asp:BoundField DataField="fElective" HeaderText="4th Electives inorder of preference"
                                            NullDisplayText="NA" Visible="false" />
                                    </Columns>
                                    <HeaderStyle BackColor="#f5f5f5" ForeColor="#000000" />
                                    <RowStyle BackColor="#ffffff" />
                                </asp:GridView>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="width:98%;border: solid 1px #000; padding: 5px; border-top: 0;">
                    <strong>
                        <label id="Label2" runat="server">
                            11.</label>
                    </strong><strong>Transaction Details</strong>
                </td>
            </tr>
            <tr>
                <td height="15">
                    <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="border: solid 1px #000; padding: 5px;border-top: 0;">Client Transaction Id
                            </td>
                            <td style="border: solid 1px #000; padding: 5px; border-left:0;border-top: 0;">
                                <strong>
                                    <asp:Label ID="lblCtrnid" runat="server"> </asp:Label></strong>
                            </td>
                            <td style="border: solid 1px #000; padding: 5px; border-left:0;border-top: 0;">Bank Transaction Id
                            </td>
                            <td style="border: solid 1px #000; padding: 5px; border-left:0;border-top: 0;">
                                <strong>
                                    <asp:Label ID="lblBankTrnId" runat="server"></asp:Label></strong>
                            </td>
                            <td style="border: solid 1px #000; padding: 5px; border-left:0;border-top: 0;">Amount
                            </td>
                            <td style="border: solid 1px #000; padding: 5px; border-left:0;border-top: 0;">
                                <strong>
                                    <asp:Label ID="lblAmount" runat="server"></asp:Label></strong>
                            </td>
                            <td style="border: solid 1px #000; padding: 5px; border-left:0;border-top: 0;">Status
                            </td>
                            <td style="border: solid 1px #000; padding: 5px; border-left:0;border-top: 0;">
                                <strong>
                                    <asp:Label ID="lblStatus" runat="server"></asp:Label></strong>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
