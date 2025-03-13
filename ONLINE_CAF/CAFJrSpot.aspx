<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CAFJrSpot.aspx.cs" Inherits="CAFJrSpot"
    EnableEventValidation="false" Debug="true" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>
        Welcome :: Online Facilitation System for Students (OFSS)</title>
    <link href="../style/CAF.css" rel="stylesheet" type="text/css" />
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link href="../styles/chromestyle.css" type="text/css" />
    <style type="text/css">
        body {
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            border: none;
            margin-top: 5px;
        }

        .Uppercase {
            text-transform: uppercase;
        }

        .redbold {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 20px;
            font-weight: bold;
            color: #C60000;
            text-decoration: none;
        }

        .smlfont {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #333333;
            text-decoration: none;
        }

        .inputitem {
            font-family: Arial, Helvetica, sans-serif;
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
        <table style="width:900px" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <table style="width:100%" border="0" cellpadding="2" class="tbborderCAF">
                        <tr>
                            <td>
                                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td width="93" align="center">
                                            <%--  <img src="../images/Logo.png" width="80" height="93" />--%>
                                            <img src="../images/BiharLogo.png" style="width:77px" alt="" />
                                        </td>
                                        <td>
                                            <table style="width:90%" border="0" align="right" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td  style="height:30px" align="center" class="CAFPrintheading">Common Application Form
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="height:22px" align="center" class="style2Print">For Spot Admission to Intermediate Courses Session 2024-26
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="height:22px" align="center" class="normalfont">Bihar School Examination Board, Government of Bihar
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
                                            <br />
                                            <div align="center" class="printIMG">
                                                <img src="../images/print_ICON.gif" style="width:26px; height:28px;" title="Click here to take a print"
                                                    onclick="window.print();return false;" class="NOPRINT" alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table style="width:100%" border="0" cellpadding="2" class="tbborderCAF">
                                    <tr>
                                        <td style="background-color:#FFFFFF;">
                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td>
                                                        <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="width:750px">
                                                                    <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                                        <tr>
                                                                            <td colspan="4" style="background-color:#FFFFFF;">
                                                                                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tr>
                                                                                        <td style="width:4%">
                                                                                            <strong>1</strong>
                                                                                        </td>
                                                                                        <td style="height:22px">
                                                                                            <strong>Details of 10th Examination. / &#2342;&#2360;&#2357;&#2368;&#2306; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                            &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; | </strong>
                                                                                        </td>
                                                                                        <td></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td>
                                                                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                                                                <tr>
                                                                                                    <td style="background-color:#FFFFFF;">Name of the Examination Board<br />
                                                                                                        &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                    &#2348;&#2379;&#2352;&#2381;&#2337; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                                    </td>
                                                                                                    <td>Year of Passing
                                                                                                    <br />
                                                                                                        &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                    &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;|
                                                                                                    </td>
                                                                                                    <td>Exam Type
                                                                                                    <br />
                                                                                                        &#2310;&#2346;&#2344;&#2375; &#2325;&#2380;&#2344; &#2360;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                    &#2346;&#2366;&#2360; &#2325;&#2368; &#2361;&#2376;
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="width:172px; background-color:#FFFFFF;">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblBoard" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td style="width:92px; ">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblYOE" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td style="width:92px; ">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblExamType" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>Date of Birth / &#2332;&#2344;&#2381;&#2350; &#2340;&#2367;&#2341;&#2367;
                                                                                                    </td>
                                                                                                    <td id="tdRollCdH" runat="server" style="display: none">Roll Code / &#2352;&#2379;&#2354; &#2325;&#2379;&#2337;
                                                                                                    </td>
                                                                                                    <td>Roll Number / &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblDob" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td id="tdRollCdF" runat="server" style="display: none; width:111px">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblRollCode" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td style="width:111px; ">
                                                                                                        <div class="sqborder1">
                                                                                                            <asp:Label ID="lblRoll" runat="server" />
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tr id="trUniqueId" runat="server" style="display:none;">
                                                                                        <td style="width:4%">
                                                                                            <strong></strong>
                                                                                        </td>
                                                                                        <td style="width:23%" height="22">
                                                                                            <strong>Applicant's Unique Id
                                                                                            <br />
                                                                                               आवेदक का यूनिक आई.डी (यदि उपलब्ध हो ) </strong>
                                                                                        </td>
                                                                                        <td style="width:73px">
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblUniqueId" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td style="width:4%; ">
                                                                                            <strong>2</strong>
                                                                                        </td>
                                                                                        <td style="width:23%; height:22px">
                                                                                            <strong>Applicant's Name
                                                                                            <br />
                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350; </strong>
                                                                                        </td>
                                                                                        <td style="width:73%; ">
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblApplName" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td width="4%" style="height: 4px; width:4%;"></td>
                                                                                        <td style="width:23%; "></td>
                                                                                        <td style="width:73%;"></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <strong>3</strong>
                                                                                        </td>
                                                                                        <td style="height:22px">
                                                                                            <strong>Father's Name
                                                                                            <br />
                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2375; &#2346;&#2367;&#2340;&#2366;
                                                                                            &#2325;&#2366; &#2344;&#2366;&#2350; </strong>
                                                                                        </td>
                                                                                        <td>
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblFatherName" runat="server" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td width="4%" style="height: 4px; width:4%;"></td>
                                                                                        <td style="width:23%;"></td>
                                                                                        <td style="width:73%;"></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <strong>4</strong>
                                                                                        </td>
                                                                                        <td style="height:22px">
                                                                                            <strong>Mother's Name
                                                                                            <br />
                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2350;&#2366;&#2340;&#2366;
                                                                                            &#2325;&#2366; &#2344;&#2366;&#2350; </strong>
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
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="width:5px;"></td>
                                                    <td  align="center"  style="padding: 3px; width:125px;">
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
            <tr>
                <td style="height:3px"></td>
            </tr>
            <tr>
                <td>
                    <div>
                        <table style="width:100%" border="0" cellpadding="2" class="tbborderCAF">
                            <tr>
                                <td style="background-color:#FFFFFF;">
                                    <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                        <tr>
                                            <td style="width:3%;">
                                                <strong>5.</strong>
                                            </td>
                                            <td colspan="2">
                                                <strong></strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>a.</strong>
                                            </td>
                                            <td style="width:26%;">
                                                <strong>Details of Mark/Grade Secured in 10th Board Examination /<br />
                                                    &#2342;&#2360;&#2357;&#2368; &#2350;&#2375;&#2306; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;
                                                &#2357;&#2367;&#2359;&#2351;&#2357;&#2366;&#2352; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325;
                                                &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; </strong>
                                            </td>
                                            <td style="width:71%;">
                                                <div class="tablebdercaf">
                                                    <table style="width:100%" border="0" cellpadding="2" cellspacing="0">
                                                        <tr>
                                                            <td style="background-color:#FFFFFF;" class="smlfont" id="tdMaxH">Total Full Marks
                                                            </td>
                                                            <td style="background-color:#FFFFFF;" class="smlfont">
                                                                <span id="CGPAH"><strong>Total Mark Obtained</strong></span>
                                                            </td>
                                                            <td class="smlfont" runat="server" id="tdEng" style="display: none;background-color:#FFFFFF;">English/SL
                                                            </td>
                                                            <td  class="smlfont" runat="server" id="tdMath" style="display: none;background-color:#FFFFFF;">Mathematics
                                                            </td>
                                                            <td  class="smlfont" runat="server" id="tdScience" style="display: none; background-color:#FFFFFF;">Science
                                                            </td>
                                                            <td class="smlfont" runat="server" id="tdSoScience" style="display: none; background-color:#FFFFFF;">Social Science
                                                            </td>
                                                            <td id="tdGrade" runat="server" class="smlfont" style="display: none; background-color:#FFFFFF;">Grade
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="background-color:#FFFFFF;" id="tdMaxD">&nbsp;
                                                            <asp:Label runat="server" ID="lblMaxMark"></asp:Label>
                                                            </td>
                                                            <td style="background-color:#FFFFFF;">&nbsp;
                                                            <asp:Label runat="server" ID="lblTotalMark"></asp:Label>
                                                            </td>
                                                            <td  runat="server" id="tdEngMrk" style="display: none; background-color:#FFFFFF;">&nbsp;
                                                            <asp:Label runat="server" ID="lblEngMark"></asp:Label>
                                                            </td>
                                                            <td  runat="server" id="tdMathMrk" style="display: none; background-color:#FFFFFF;">&nbsp;
                                                            <asp:Label runat="server" ID="lblMathMark"></asp:Label>
                                                            </td>
                                                            <td runat="server" id="tdScienceMrk" style="display: none; background-color:#FFFFFF;">&nbsp;
                                                            <asp:Label runat="server" ID="lblScienceMark"></asp:Label>
                                                            </td>
                                                            <td  runat="server" id="tdSoScienceMrk" style="display: none; background-color:#FFFFFF;">&nbsp;
                                                            <asp:Label runat="server" ID="lblSSMark"></asp:Label>
                                                            </td>
                                                            <td id="tdGradelbl" runat="server" style="display: none; background-color:#FFFFFF;">&nbsp;
                                                            <asp:Label runat="server" ID="lblGrade"></asp:Label>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="MarkVerification" runat="server">
                                            <td></td>
                                            <td>
                                                <strong>Have you secured above mark in your Annual HSE(O) examination ? </strong>
                                            </td>
                                            <td style="width:40px;">
                                                <div class="sqborder1" style="width:50px;">
                                                    <asp:Label ID="lblMarkVerification" runat="server"></asp:Label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style="display: none;">
                                            <td>
                                                <strong>b.</strong>
                                            </td>
                                            <td colspan="2">
                                                <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                    <tr>
                                                        <td style="width:26%;">
                                                            <strong>Have you passed 10th Board Exam Compartmentally or through Improvement Examination?
                                                            /
                                                            <br />
                                                                &#2325;&#2381;&#2351;&#2366; &#2309;&#2346;&#2344;&#2375; &#2342;&#2360;&#2357;&#2368;
                                                            &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2346;&#2370;&#2352;&#2325;-&#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                            &#2309;&#2341;&#2357;&#2366; &#2360;&#2350;&#2369;&#2344;&#2381;&#2344;&#2340; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                            &#2350;&#2375;&#2306; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368;
                                                            &#2361;&#2376;&#2306; ? </strong>
                                                        </td>
                                                        <td style="width:7%;">
                                                            <div class="sqborder1">
                                                                <asp:Label ID="lblCompartmental" runat="server"></asp:Label>
                                                            </div>
                                                        </td>
                                                        <td style="width:1%;">&nbsp;
                                                        </td>
                                                        <td style="width:66%;">
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
            <tr>
                <td style="height:3px"></td>
            </tr>
            <tr>
                <td>
                    <table style="width:100%" border="0" cellpadding="0" cellspacing="0" class="tbborderCAF">
                        <tr>
                            <td style="background-color:#FFFFFF;">
                                <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                    <tr>
                                        <td style="height:25px">
                                            <strong>
                                                <label id="lblN11" runat="server">
                                                    6.</label>
                                            </strong>
                                        </td>
                                        <td colspan="5">
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
                                        <td style="width:3%;" class="">
                                            <strong>
                                                <label id="Label10">
                                                    a.</label>
                                            </strong>
                                        </td>
                                        <td style="width:20%;">
                                            <label id="Label11">
                                                Name of the School /<br />
                                                &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2325;&#2366; &#2344;&#2366;&#2350;
                                            </label>
                                        </td>
                                        <td colspan="4">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblSchName" runat="server" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="width:3%;" class="">
                                            <strong>
                                                <label id="Label13">
                                                    b.</label>
                                            </strong>
                                        </td>
                                        <td style="width:20%;">
                                            <label id="Label14">
                                                Location of the School /
                                            <br />
                                                &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2325;&#2366; &#2346;&#2340;&#2366;
                                            </label>
                                        </td>
                                        <td style="width:25%;">
                                            <div class="sqborder1">
                                                <asp:Label ID="lblSchloc" runat="server" />
                                            </div>
                                        </td>
                                        <td style="width:3%;" class="">
                                            <strong>
                                                <label id="Label1">
                                                    c.</label>
                                            </strong>
                                        </td>
                                        <td style="width:25%;">
                                            <label id="Label17">
                                                District / &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375; &#2350;&#2375;&#2306;
                                            &#2310;&#2346;&#2325;&#2366; &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351;
                                            &#2361;&#2376;
                                            </label>
                                        </td>
                                        <td>
                                            <div class="sqborder1">
                                                <asp:Label ID="lblLIDist" runat="server" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  class="">
                                            <strong>d. </strong>
                                        </td>
                                        <td>Year of Joining / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354;
                                        &#2313;&#2360; &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2350;&#2375;&#2306;
                                        &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344; &#2354;&#2367;&#2351;&#2366; &#2341;&#2366;
                                        </td>
                                        <td>
                                            <div class="sqborder1">
                                                <asp:Label ID="lblyoj" runat="server" />
                                            </div>
                                        </td>
                                        <td class="">
                                            <strong>e. </strong>
                                        </td>
                                        <td>Year of Leaving / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354;
                                        &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2360;&#2375; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                        &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;
                                        </td>
                                        <td>
                                            <div class="sqborder1">
                                                <asp:Label ID="lblyol" runat="server" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="">
                                            <strong>f. </strong>
                                        </td>
                                        <td colspan="4">Have you passed 10th exam as a student of Kasturba Gandhi Balika Vidyalaya? / क्या आपने दसवीं की परीक्षा कस्तूरबा गाँधी आवासीय बालिका छात्रावास में रहते हुए उत्तीर्ण की है ?
                                        </td>
                                        <td>
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
            <tr>
                <td style="height:3px"></td>
            </tr>
            <tr>
                <td>
                    <table style="width:100%" border="0" cellpadding="0" cellspacing="0" class="tbborderCAF">
                        <tr>
                            <td style="width:3%;">
                                <strong>7.</strong>
                            </td>
                            <td>
                                <strong>Personal Details
                                <br />
                                    &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;</strong>
                            </td>
                            <td>
                                <table style="width:100%" border="0" cellpadding="2" cellspacing="0">
                                    <tr>
                                        <td style="width:20%;">Gender / &#2354;&#2367;&#2306;&#2327;
                                        </td>
                                        <td style="width:20%;">Mother Tongue / &#2350;&#2366;&#2340;&#2371;&#2349;&#2366;&#2359;&#2366;
                                        </td>
                                        <td style="width:20%;">Nationality / &#2344;&#2366;&#2327;&#2352;&#2367;&#2325;&#2340;&#2366;
                                        </td>
                                        <td style="width:20%;">Religion / &#2343;&#2352;&#2381;&#2350;
                                        </td>
                                        <td style="width:20%;">Blood Group / &#2352;&#2325;&#2381;&#2340; &#2360;&#2350;&#2370;&#2361;
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
            <tr>
                <td style="height:3px"></td>
            </tr>
            <tr>
                <td>
                    <table style="width:100%" border="0" cellpadding="2" class="tbborderCAF">
                        <tr>
                            <td style="background-color:#FFFFFF;">
                                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td>
                                            <strong>8. Address for Correspondence / &#2346;&#2340;&#2381;&#2352;&#2366;&#2330;&#2366;&#2352;
                                            &#2325;&#2366; &#2346;&#2340;&#2366;</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td style="width:3%; height:25px;">a.
                                                    </td>
                                                    <td style="width:10%;">State/UT <br />राज्य / केन्द्र-शासित प्रदेश
                                                    </td>
                                                    <td style="width:16%;">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblstate" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td style="width:2%;">&nbsp;
                                                    </td>
                                                    <td style="width:2%;">b.
                                                    </td>
                                                    <td style="width:10%;">District / &#2332;&#2367;&#2354;&#2366;
                                                    </td>
                                                    <td style="width:20%;">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lbldist" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td style="width:2%;">c.
                                                    </td>
                                                    <td style="width:15%;">Block / Municipality / &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; / &#2344;&#2327;&#2352;
                                                    &#2346;&#2352;&#2367;&#2359;&#2342;&#2381; &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;
                                                    </td>
                                                    <td style="width:21%;">
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
                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td style="width:3%;" height="25">d.
                                                    </td>
                                                    <td style="width:10%;">Address / &#2346;&#2340;&#2366;
                                                    </td>
                                                    <td style="width:50%;">
                                                        <div class="sqborder1" style="height: auto;">
                                                            <asp:Label ID="lbldtl" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td style="width:2%;">e.
                                                    </td>
                                                    <td style="width:15%;">PIN Code / &#2346;&#2367;&#2344; &#2325;&#2379;&#2337;
                                                    </td>
                                                    <td style="width:21%;">
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
                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td style="width:3%;">f.
                                                    </td>
                                                    <td style="width:10%;">Mobile No.<br />
                                                        &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                    </td>
                                                    <td style="width:12%;">
                       amiti                                 <div class="sqborder1">
                                                            <asp:Label ID="lblmob" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td style="width:2%;">&nbsp;
                                                    </td>
                                                    <td style="width:2%;">g.
                                                    </td>
                                                    <td style="width:10%;">e-Mail / &#2312;-&#2350;&#2375;&#2354;
                                                    </td>
                                                    <td style="width:24%;">
                                                        <div class="sqborder1">
                                                            <asp:Label ID="lblemail" runat="server" />
                                                        </div>
                                                    </td>
                                                    <td style="width:2%;">h.
                                                    </td>
                                                    <td style="width:20%;">Telephone No.<br />
                                                        &#2342;&#2370;&#2352;&#2349;&#2366;&#2359; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366;
                                                    |
                                                    </td>
                                                    <td style="width:20%;">
                                                        <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="width:29%; height:30px">
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
                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td style="width:3%;">i.
                                                    </td>
                                                    <td style="width:10%;">Aadhaar No.
                                                    </td>
                                                    <td colspan="7">
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
            <tr>
                <td style="height:3px"></td>
            </tr>
            <tr>
                <td>
                    <table style="width:100%" border="0" cellpadding="2" class="tbborderCAF">
                        <tr>
                            <td style="background-color:#FFFFFF;">
                                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="width:3%;">
                                            <strong>9. </strong>
                                        </td>
                                        <td>
                                            <strong>Reservation Details / &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2325;&#2368;
                                            &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="width:3%; height:30px;">
                                            <strong>a.</strong>
                                        </td>
                                        <td style="width:100%;height:30px;">
                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td>General / &#2360;&#2366;&#2350;&#2366;&#2344;&#2381;&#2351; &#2357;&#2352;&#2381;&#2327;
                                                    </td>
                                                    <td style="height:30px">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblGeneral"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td>&nbsp;Schedule Caste (SC) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340;
                                                    &#2332;&#2366;&#2340;&#2367;
                                                    </td>
                                                    <td style="width:111px; height:30px">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblSC"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td>&nbsp;Schedule Tribe (ST) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340;
                                                    &#2332;&#2344;&#2332;&#2366;&#2340;&#2367;
                                                    </td>
                                                    <td style="width:40px; height:30px">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            &nbsp;<asp:Label runat="server" ID="lblST"></asp:Label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Backward Class(BC) / &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                    &#2357;&#2352;&#2381;&#2327;
                                                    </td>
                                                    <td>
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblobcapp"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td>Extremly Backward Class (EBC) / &#2309;&#2340;&#2381;&#2351;&#2306;&#2340; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                    &#2357;&#2352;&#2381;&#2327;
                                                    </td>
                                                    <td style="height:30px">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblOther"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td style="display: none;">Women Backward Class (WBC) / &#2346;&#2367;&#2331;&#2396;&#2375; &#2357;&#2352;&#2381;&#2327;
                                                    &#2325;&#2368; &#2350;&#2361;&#2367;&#2354;&#2366;&#2351;&#2375;
                                                    </td>
                                                    <td style="display: none;height:30px">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblWBC"></asp:Label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:30px">
                                            <strong>b.</strong>
                                        </td>
                                        <td style="width:100%;height:30px" colspan="2">
                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td style="width:170px;">Specially Added ( &#2342;&#2367;&#2357;&#2381;&#2351;&#2366;&#2306;&#2327; )
                                                    </td>
                                                    <td style="width:43px;">
                                                        <div class="sqborder1">
                                                            <asp:Label runat="server" ID="lblPHOH"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td>EWS (Economically Weaker Section)
                                                    </td>
                                                    <td style="width: 100px;">
                                                        <div class="sqborder1" style="width: 35px;">
                                                            <asp:Label runat="server" ID="lblEWS"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td  style="width: 100px; height:30px""></td>
                                                    <td  style="width: 100px; height:30px""></td>
                                                    <td  style="width: 95px; height:30px""></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="display: none;">
                                        <td style="height:30px">
                                            <strong>c.</strong>
                                        </td>
                                        <td style="height:30px">
                                            <table style="width:100%" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td style="display: none; width:170px">Ex-Service Man (ESM)
                                                    </td>
                                                    <td style="display: none; width:40px; height:30px;">
                                                        <div class="sqborder1">
                                                            <asp:Label runat="server" Style="width: 35px;" ID="lblESM"></asp:Label>
                                                        </div>
                                                    </td>
                                                    <td style="display: none; width:230px;">Serving Defence Personnel (SDP)
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
            <tr>
                <td style="height:3px"></td>
            </tr>
            <tr style="display: none;">
                <td>
                    <table style="width:100%" border="0" cellpadding="2" class="tbborderCAF">
                        <tr>
                            <td style="background-color:#FFFFFF;">
                                <table  border="0" cellspacing="0" cellpadding="2" style="display: none; width:100%;">
                                    <tr>
                                        <td style="width:2%;">
                                            <strong>10.</strong>
                                        </td>
                                        <td style="width:98%;" colspan="3">
                                            <strong>Weightage Details / &#2350;&#2361;&#2340;&#2381;&#2357; &#2357;&#2367;&#2357;&#2352;&#2339;</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4">
                                            <table style="width:100%; background-color:#FFFFFF" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td style="width:25%;">
                                                        <div class="tablebdercaf">
                                                            <table style="width:100%" border="0" cellpadding="2" cellspacing="0">
                                                                <tr>
                                                                    <td colspan="4" style="background-color:#FFFFFF;" class="smlfont">
                                                                        <strong>a. &nbsp;<strong>NCC</strong></strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="width:36%; background-color:#FFFFFF">NCC
                                                                    </td>
                                                                    <td style="width:40px; background-color:#FFFFFF">
                                                                        <strong>
                                                                            <asp:Label runat="server" ID="lblNccA"></asp:Label></strong>
                                                                    </td>
                                                                    <td  style="display: none;background-color:#FFFFFF">NCC (C)
                                                                    </td>
                                                                    <td  style="display: none;width:40px; background-color:#FFFFFF" ">
                                                                        <strong>
                                                                            <asp:Label runat="server" ID="lblNccC"></asp:Label></strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td style="width:1%">&nbsp;
                                                    </td>
                                                    <td style="width:43%">
                                                        <div class="tablebdercaf">
                                                            <table style="width:100%" border="0" cellpadding="2" cellspacing="0" style="display: none;">
                                                                <tr>
                                                                    <td colspan="4" style="background-color:#FFFFFF;" class="smlfont">
                                                                        <strong>b. &nbsp; Scout &amp; Guide</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:#FFFFFF;">Rajya Puraskar(RP)
                                                                    </td>
                                                                    <td style="width:35px; background-color:#FFFFFF">
                                                                        <strong>
                                                                            <asp:Label ID="lblRP" runat="server"></asp:Label></strong>
                                                                    </td>
                                                                    <td style="background-color:#FFFFFF;">President Recognition(PR)
                                                                    </td>
                                                                    <td style="width:35px; background-color:#FFFFFF">
                                                                        <strong>
                                                                            <asp:Label ID="lblPR" runat="server"></asp:Label></strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td style="width:1%;">&nbsp;
                                                    </td>
                                                    <td style="width:30%;" class="tablebdercaf">
                                                        <table style="width:100%" border="0" cellpadding="2" cellspacing="0" style="display: none;">
                                                            <tr>
                                                                <td colspan="6" style="background-color:#FFFFFF;" class="smlfont">
                                                                    <strong>c. &nbsp; Sports</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="background-color:#FFFFFF;">State
                                                                </td>
                                                                <td style="width:40px; background-color:#FFFFFF">
                                                                    <strong>
                                                                        <asp:Label runat="server" ID="lblSportsS"></asp:Label></strong>
                                                                </td>
                                                                <td style="background-color:#FFFFFF;">National
                                                                </td>
                                                                <td style="width:40px; background-color:#FFFFFF">
                                                                    <strong>
                                                                        <asp:Label runat="server" ID="lblSportsN"></asp:Label></strong>
                                                                </td>
                                                                <td style="background-color:#FFFFFF;">International
                                                                </td>
                                                                <td style="width:40px; background-color:#FFFFFF">
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
            <tr>
                <td style="height:3px"></td>
            </tr>
            <tr>
                <td>
                    <table style="width:100%" border="0" cellspacing="0" cellpadding="0" class="tablebdercaf">
                        <tr>
                            <td style="height:22px">
                                <strong>
                                    <label id="lblN12" runat="server">
                                        10.</label>
                                </strong><strong>जिस कॉलेज में आप Spot Admission से नामांकन लेना चाहते हैं उसकी विवरणी
                                नीचे भरें</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
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
                                    <HeaderStyle BackColor="#D3D3D3" ForeColor="#000000" />
                                    <RowStyle BackColor="#ffffff" />
                                </asp:GridView>
                                <table style="width:100%" border="1" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <th style="width: 5%">SlNo.
                                        </th>
                                        <th style="width: 40%">College Name
                                        </th>
                                        <th style="width: 15%">Stream
                                        </th>
                                    </tr>
                                    <tr>
                                        <td style="height: 40px;" align="center">1
                                        </td>
                                        <td style="height: 40px;"></td>
                                        <td style="height: 40px;"></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="height:22px">
                    <strong>
                        <label id="Label2" runat="server">
                        </label>
                    </strong><strong>Payment Details</strong>
                </td>
            </tr>
            <tr>
                <td style="height:15px">
                    <table style="width:100%" border="1" cellspacing="0" cellpadding="0">
                        <tr>
                            <td>Client Transaction Id
                            </td>
                            <td>
                                <strong>
                                    <asp:Label ID="lblCtrnid" runat="server"> </asp:Label></strong>
                            </td>
                            <td>Bank Transaction Id
                            </td>
                            <td>
                                <strong>
                                    <asp:Label ID="lblBankTrnId" runat="server"></asp:Label></strong>
                            </td>
                            <td>Amount
                            </td>
                            <td>
                                <strong>
                                    <asp:Label ID="lblAmount" Text="Rs.350" runat="server"></asp:Label></strong>
                            </td>
                            <td>Status
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
                <td>
                    <table style="width:100%">
                        <tr>
                            <td>
                                <div style="font-weight: bold; padding-top: 10px;">
                                    आवेदक जिस जिस महाविद्यालय में स्पॉट नामांकन (Spot Admission) के माध्यम से आवेदन
                                देना चाहते हैं वहाँ इस फॉर्म की हस्ताक्षरित प्रति जमा कर दें |
                                </div>
                            </td>
                            <td width="220px;" align="center">
                                <div style="font-weight: bold; font-size: large; padding-top: 50px;">
                                    Student Signature
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <br />
        <br />
        <br />
        <br />
        <br />

        <table style="width:990px" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <table style="width:100%" border="0" cellspacing="0" cellpadding="0">

                        <tr>
                            <td style="height:40px" colspan="2">
                                <div style="border-bottom: 1px dashed #123;"></div>
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
                                <strong>(विद्यालय/महाविद्यालय आवेदन फॉर्म जमा लेने के पश्चात यह पावती रसीद सम्बंधित
                                    आवेदक को हस्ताक्षर करके एवं मुहर लगा कर वापस देंगे | ) </strong>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 20px">
                                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td align="right" style="padding-right: 100px;">
                                            <strong>
                                                <asp:Label runat="server" ID="Label3" Font-Size="X-Large"></asp:Label></strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right" style="padding-right: 85px;">
                                            <asp:Image ID="Image1" runat="server" Width="147" Height="36" />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 15px; padding-top: 80px">1. विद्यालय/महाविद्यालय का नाम
                            </td>
                            <td style="padding-top: 80px">:__________________________________________________________________________
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 15px; padding-top: 10px">2. जिस संकाय में आप नामांकन लेना चाहते हैं
                            </td>
                            <td style="padding-top: 10px">:__________________________________________________________________________
                            </td>
                        </tr>

                        <tr>
                            <td style="font-size: 15px; padding-top: 30px">दिनांक:_____________________________
                            </td>
                            <td style="font-size: 15px; padding-top: 30px; padding-left: 150px" align="center">_________________________________________<br />
                                (फॉर्म जमा लेने वाले अधिकारी का हस्ताक्षर )
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="height:10px"></td>
            </tr>
        </table>
    </form>
</body>
</html>
