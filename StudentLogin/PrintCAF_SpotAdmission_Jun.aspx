<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PrintCAF_SpotAdmission_Jun.aspx.cs"
    Inherits="StudentLogin_PrintCAF_SpotAdmission_Jun" EnableEventValidation="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>OFSS: Print Intermediate CAF</title>
    <link href="../style/CAF.css" rel="stylesheet" type="text/css" />
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link href="../style/chromestyle.css" type="text/css" />
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

        .Note {
            color: Red;
            position: absolute;
            font-size: 13px;
        }

        .Star {
            color: Red;
            position: absolute;
            font-size: 20px;
        }

        .frm_closed {
            font-family: Verdana;
            color: #f7a6a6;
            font-weight: bold;
            font-size: 25px;
            padding: 100px 0 0 200px;
        }

        .container {
            position: relative;
            padding: 5px;
        }

        .containerbackground {
            margin: 30rem;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: 1000;
            transform: rotate(300deg);
            -webkit-transform: rotate(300deg);
            color: #c6afaf;
            font-weight: bold;
            font-size: 32px;
            width: 900px
        }
                td.bord-cls {
    border: solid 1px #000;
    padding: 5px;
    border-left: 0;
    border-top: 0;
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
            document.getElementById('lblDateTimeApp').innerText = date
            window.setTimeout('dateTime()', 500);


        }

        function show(subId) {
            document.getElementById(subId).style.display = ""
        }
        function hide(subId) {
            document.getElementById(subId).style.display = "none"
        }
        function showCGPA() {
            debugger;
            var cbse = document.getElementById('hdnCBSE').value;

            if (cbse == 'True') {

                document.getElementById('tdMaxH').style.display = "none";
                document.getElementById('tdMaxD').style.display = "none";
                document.getElementById('CGPAH').innerHTML = "<strong>CGPA</strong>";


            }
            if (cbse == 'False') {
                document.getElementById('tdMaxH').style.display = '';
                document.getElementById('tdMaxD').style.display = '';
                document.getElementById('CGPAH').innerHTML = "<strong>Total Mark Obtained</strong>";

            }
            if (cbse == 'KERALA') {
                document.getElementById('tdMaxH').style.display = 'none';
                document.getElementById('tdMaxD').style.display = 'none';
                document.getElementById('CGPAH').innerHTML = "<strong>Grade</strong>";


            }

            var boardid = parseInt(document.getElementById('hdnBoardId').value);
            var yop = parseInt(document.getElementById('hdnYOP').value);
            var session = parseInt(document.getElementById('hdnCurrSession').value);

            if (session == 2018) {

                if (boardid == 109) {
                    document.getElementById('thEnglish').style.display = 'none';
                    document.getElementById('tdEnglish').style.display = 'none';
                    document.getElementById('thMath').style.display = 'none';
                    document.getElementById('tdMath').style.display = 'none';
                    document.getElementById('thScience').style.display = 'none';
                    document.getElementById('tdScience').style.display = 'none';
                    document.getElementById('tdSocialSci').style.display = 'none';
                    document.getElementById('thSocialSci').style.display = 'none';

                }

                else {

                    document.getElementById('thEnglish').style.display = '';
                    document.getElementById('tdEnglish').style.display = '';
                    document.getElementById('thMath').style.display = '';
                    document.getElementById('tdMath').style.display = '';
                    document.getElementById('thScience').style.display = '';
                    document.getElementById('tdScience').style.display = '';
                    document.getElementById('tdSocialSci').style.display = '';
                    document.getElementById('thSocialSci').style.display = '';
                }
            }
            else {

                if ((boardid == 46 && yop >= 2010 && yop < 2018) || (boardid == 103 && yop >= 2012) || (boardid == 116 && yop >= 2010)) {
                    document.getElementById('thEnglish').style.display = '';
                    document.getElementById('tdEnglish').style.display = '';
                    document.getElementById('thMath').style.display = '';
                    document.getElementById('tdMath').style.display = '';
                    document.getElementById('thScience').style.display = '';
                    document.getElementById('tdScience').style.display = '';
                    document.getElementById('tdSocialSci').style.display = '';
                    document.getElementById('thSocialSci').style.display = '';
                }
                else {
                    document.getElementById('thEnglish').style.display = 'none';
                    document.getElementById('tdEnglish').style.display = 'none';
                    document.getElementById('thMath').style.display = 'none';
                    document.getElementById('tdMath').style.display = 'none';
                    document.getElementById('thScience').style.display = 'none';
                    document.getElementById('tdScience').style.display = 'none';
                    document.getElementById('tdSocialSci').style.display = 'none';
                    document.getElementById('thSocialSci').style.display = 'none';
                }
            }
        }
    </script>
    <style media="print" type="text/css">
        .NOPRINT {
            display: none;
        }
    </style>
</head>
<body onload="showCGPA();dateTime();" style="border: 0px;">
    <form id="form1" runat="server">
        <div id="divForm" runat="server" visible="false">
            <asp:HiddenField ID="hdnApplicationId" runat="server" />
            <asp:HiddenField ID="hdnImgAppl" runat="server" />
            <asp:HiddenField ID="hdnBoardId" runat="server" Value="0" />
            <asp:HiddenField ID="hdnCBSE" runat="server" />
            <asp:HiddenField ID="hdnYOP" runat="server" Value="0" />
            <asp:HiddenField ID="hdnCurrSession" runat="server" Value="0" />
            <table width="900" border="0" align="center" cellpadding="0" cellspacing="0"  style="padding:3px;border: solid 1px #000;">
                <tr class="containerbackground" id="divStaging" runat="server">
                    <td>This is not the official site of OFSS, Bihar.<br />
                        Kindly visit  website www.Ofssbihar.in
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" border="0" cellpadding="0" class="tbborderCAF" style="padding:0; border:none;border-collapse: collapse;">
                            <tr>
                                <td>
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td width="93" align="center">
                                                <%--  <img src="../images/Logo.png" width="80" height="93" />--%>
                                                <img src="../images/BiharLogo.png" width="77" alt="" />
                                            </td>
                                            <td valign="top">
                                                <div style="height: 10px;"></div>
                                                <table width="100%" border="0" align="right" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td height="20" align="center" class="CAFPrintheading">Common Application Form
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="12" align="center" class="style2Print">For Spot Admission to Intermediate Courses Session 2024-26
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="12" align="center" class="normalfont">Bihar School Examination Board, Government of Bihar
                                                        </td>
                                                    </tr>
                                                </table>
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
                                                            <%--<asp:Label ID="lblBarCode" runat="server"></asp:Label>
                                                         <br />--%>
                                                            <asp:Image ID="imgId" runat="server" Width="141" Height="25" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center" class="redbold">Intermediate
                                                        </td>
                                                    </tr>
                                                </table>
                                                <br />
                                                <div align="center" style="padding-top: 10px;">
                                                    <img src="../images/print_ICON.gif" width="26" height="28" title="Click here to take a print"
                                                        onclick="window.print();return false;" class="NOPRINT" />
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table width="100%" border="0" cellpadding="0" class="tbborderCAF" style="border: none; border-spacing:0px; border-collapse: collapse;">
                                        <tr>
                                            <td bgcolor="#FFFFFF">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td>
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                <tr>
                                                                    <td width="750" valign="top">
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                            <tr>
                                                                                <td colspan="4" bgcolor="#FFFFFF">
                                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                        <tr>
                                                                                            <td width="4%" style="border: solid 1px #000; padding: 1px; text-align:center">
                                                                                                <strong>1</strong>
                                                                                            </td>
                                                                                            <td height="22" style="border: solid 1px #000; padding: 1px; border-left: 0;">
                                                                                                <strong>Details of 10th Examination. / दसवीं परीक्षा की विवरणी | </strong>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style="border: solid 1px #000; padding: 1px; border-top: 0;"></td>
                                                                                            <td>
                                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                                                                    <tr>
                                                                                                        <td bgcolor="#FFFFFF" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Name of the Examination Board<br />
                                                                                                            &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                        &#2348;&#2379;&#2352;&#2381;&#2337; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                                        </td>
                                                                                                        <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Year of Passing
                                                                                                        <br />
                                                                                                            &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                        &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;|
                                                                                                        </td>
                                                                                                        <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Exam Type
                                                                                                        <br />
                                                                                                            &#2310;&#2346;&#2344;&#2375; &#2325;&#2380;&#2344; &#2360;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                        &#2346;&#2366;&#2360; &#2325;&#2368; &#2361;&#2376;
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td width="172" bgcolor="#FFFFFF" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                            <div class="sqborder1">
                                                                                                                <asp:Label ID="lblBoard" runat="server" />
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td width="92" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                            <div class="sqborder1" >
                                                                                                                <asp:Label ID="lblYOE" runat="server" />
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td width="92" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                            <div class="sqborder1" >
                                                                                                                <asp:Label ID="lblExamType" runat="server" />
                                                                                                            </div>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Date of Birth / जन्म तिथि
                                                                                                        </td>
                                                                                                        <td id="tdRollCdH" runat="server" class="bord-cls" style="display: none;border: solid 1px #000; padding: 5px; border-left: 0;border-top:0">Roll Code / रोल कोड
                                                                                                        </td>
                                                                                                        <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Roll Number / &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                            <div class="sqborder1">
                                                                                                                <asp:Label ID="lblDob" runat="server" />
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td width="111" id="tdRollCdF" runat="server" class="bord-cls" style="display: none;border: solid 1px #000; padding: 5px; border-left: 0;border-top:0">
                                                                                                            <div class="sqborder1">
                                                                                                                <asp:Label ID="lblRollCode" runat="server" />
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td width="111" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
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
                                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                        <tr id="trUniqueId" runat="server" style="display:none;">
                                                                                            <td width="4%" style="border: solid 1px #000; padding: 1px;border-top:0">
                                                                                                <strong></strong>
                                                                                            </td>
                                                                                            <td width="23%" height="22" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                <strong>Applicant's Unique Id
                                                                                            <br />
                                                                                                     आवेदक का यूनिक आई.डी (यदि उपलब्ध हो )</strong>
                                                                                            </td>
                                                                                            <td width="73%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                <div class="sqborder1">
                                                                                                    <asp:Label ID="lblUniqueId" runat="server" />
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td width="4%" style="border: solid 1px #000; padding: 1px;border-top:0; text-align:center">
                                                                                                <strong>2</strong>
                                                                                            </td>
                                                                                            <td width="23%" height="22" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                <strong>Applicant's Name
                                                                                                <br />
                                                                                                    &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350; </strong>
                                                                                            </td>
                                                                                            <td width="73%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                <div class="sqborder1">
                                                                                                    <asp:Label ID="lblApplName" runat="server" />
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <%--<tr>
                                                                                            <td width="4%" style="height: 4px;"></td>
                                                                                            <td width="23%"></td>
                                                                                            <td width="73%"></td>
                                                                                        </tr>--%>
                                                                                        <tr>
                                                                                            <td style="border: solid 1px #000; padding: 1px;border-top:0; text-align:center">
                                                                                                <strong>3</strong>
                                                                                            </td>
                                                                                            <td height="22" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                <strong>Father's Name
                                                                                                <br />
                                                                                                    &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2375; &#2346;&#2367;&#2340;&#2366;
                                                                                                &#2325;&#2366; &#2344;&#2366;&#2350; </strong>
                                                                                            </td>
                                                                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                <div class="sqborder1">
                                                                                                    <asp:Label ID="lblFatherName" runat="server" />
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <%--<tr>
                                                                                            <td width="4%" style="height: 4px;"></td>
                                                                                            <td width="23%"></td>
                                                                                            <td width="73%"></td>
                                                                                        </tr>--%>
                                                                                        <tr>
                                                                                            <td style="border: solid 1px #000; padding: 1px;border-top:0; text-align:center">
                                                                                                <strong>4</strong>
                                                                                            </td>
                                                                                            <td height="22" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                                                                <strong>Mother's Name
                                                                                                <br />
                                                                                                    &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2350;&#2366;&#2340;&#2366;
                                                                                                &#2325;&#2366; &#2344;&#2366;&#2350; </strong>
                                                                                            </td>
                                                                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
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
                                                        <td width="125" align="center" valign="top" style="border: solid 1px #000; padding: 1px; border-left: 0;">
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
                            <table width="100%" border="0" cellpadding="0" class="tbborderCAF" style="border:none; border-collapse: collapse; margin-top:3px;">
                                <tr>
                                    <td bgcolor="#FFFFFF">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="3%" style="border: solid 1px #000; padding: 1px;text-align:center">
                                                    <strong>5.</strong>
                                                </td>
                                                <td colspan="2" style="border: solid 1px #000; padding: 1px; border-left: 0;">
                                                    <strong></strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="border: solid 1px #000; padding: 1px;border-top:0;text-align:center">
                                                    <strong>a.</strong>
                                                </td>
                                                <td width="26%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                    <strong>Details of Mark/Grade Secured in 10th Board Examination /<br />
                                                        दसवी में प्राप्त विषयवार प्राप्तांक की विवरणी </strong>
                                                </td>
                                                <td width="71%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                    <div class="tablebdercaf">
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="0">
                                                            <tr>
                                                                <td bgcolor="#FFFFFF" class="smlfont" id="tdMaxH">Total Full Marks
                                                                </td>
                                                                <td bgcolor="#FFFFFF" class="smlfont">
                                                                    <span id="CGPAH"><strong>Total Mark Obtained</strong></span>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" class="smlfont" id="thEnglish">English/SL
                                                                </td>
                                                                <td bgcolor="#FFFFFF" class="smlfont" id="thMath">Mathematics
                                                                </td>
                                                                <td bgcolor="#FFFFFF" class="smlfont" id="thScience">Science
                                                                </td>
                                                                <td bgcolor="#FFFFFF" class="smlfont" id="thSocialSci">Social Science
                                                                </td>
                                                                <td id="tdGrade" runat="server" bgcolor="#FFFFFF" class="smlfont">Grade
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#FFFFFF" id="tdMaxD">&nbsp;
                                                                <asp:Label runat="server" ID="lblMaxMark"></asp:Label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" id="">&nbsp;
                                                                <asp:Label runat="server" ID="lblTotalMark"></asp:Label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" id="tdEnglish">&nbsp;
                                                                <asp:Label runat="server" ID="lblEngMark"></asp:Label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" id="tdMath">&nbsp;
                                                                <asp:Label runat="server" ID="lblMathMark"></asp:Label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" id="tdScience">&nbsp;
                                                                <asp:Label runat="server" ID="lblScienceMark"></asp:Label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" id="tdSocialSci">&nbsp;
                                                                <asp:Label runat="server" ID="lblSSMark"></asp:Label>
                                                                </td>
                                                                <td id="tdGradelbl" runat="server" bgcolor="#FFFFFF">&nbsp;
                                                                <asp:Label runat="server" ID="lblGrade"></asp:Label>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr id="MarkVerification" runat="server">
                                                <td style="border: solid 1px #000; padding: 1px;"></td>
                                                <td style="border: solid 1px #000; padding: 1px; border-left: 0;">
                                                    <strong>Have you secured above mark in your Annual HSE(O) examination ? </strong>
                                                </td>
                                                <td width="40px" style="border: solid 1px #000; padding: 1px; border-left: 0;">
                                                    <div class="sqborder1" width="50px">
                                                        <asp:Label ID="lblMarkVerification" runat="server"></asp:Label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style="display: none;">
                                                <td>
                                                    <strong>b.</strong>
                                                </td>
                                                <td colspan="2">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                        <tr>
                                                            <td width="26%">
                                                                <strong>Have you passed 10th Board Exam Compartmentally Examination? /
                                                                <br />
                                                                    क्या अपने दसवी की परीक्षा पूरक-परीक्षा परीक्षा में उतीर्ण की हैं ? </strong>
                                                            </td>
                                                            <td width="7%">
                                                                <div class="sqborder1">
                                                                    <asp:Label ID="lblCompartmental" runat="server"></asp:Label>
                                                                </div>
                                                            </td>
                                                            <td width="1%">&nbsp;
                                                            </td>
                                                            <td width="66%">
                                                                <div class="tablebdercaf">
                                                                    <asp:GridView ID="grdCompartment" runat="server" AllowPaging="false" PageSize="6"
                                                                        EmptyDataText="No Record(s) Found." AutoGenerateColumns="false" CellPadding="2"
                                                                        CellSpacing="0" BackColor="#CCCCCC">
                                                                        <Columns>
                                                                            <asp:BoundField DataField="Subject" HeaderText="Name of the Subject" />
                                                                            <asp:BoundField DataField="FailMark" HeaderText="Fail Mark in Previous Exam" NullDisplayText="NA" />
                                                                            <asp:BoundField DataField="PassMark" HeaderText="Pass mark in Compartmental Exam"
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
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="tbborderCAF" style="border:none; border-collapse: collapse; margin-top:3px;">
                            <tr>
                                <td bgcolor="#ffffff">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td height="25" style="border: solid 1px #000; padding: 1px; text-align:center">
                                                <strong>
                                                    <label id="lblN11" runat="server">
                                                        6.</label>
                                                </strong>
                                            </td>
                                            <td colspan="5" style="border: solid 1px #000; padding: 1px; border-left: 0;">
                                                <strong>
                                                    <label id="Label9">
                                                        Record of educational institution last attended from which you have passed 10th
                                                    Examination
                                                    <br />
                                                        आपने जिस स्कूल से दसवी की परीक्षा उतीर्ण की है उसकी विवरणी |</label>
                                                    <%--Correspondence--%>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="3%" bgcolor="" class="" style="border: solid 1px #000; padding: 1px;border-top:0;text-align:center">
                                                <strong>
                                                    <label id="Label10">
                                                        a.</label>
                                                </strong>
                                            </td>
                                            <td width="20%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                <label id="Label11">
                                                    Name of the School /<br />
                                                    विद्यालय का नाम
                                                </label>
                                            </td>
                                            <td colspan="4" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                <div class="sqborder1">
                                                    <asp:Label ID="lblSchName" runat="server" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="3%" bgcolor="" class="" style="border: solid 1px #000; padding: 1px; border-top:0;text-align:center">
                                                <strong>
                                                    <label id="Label13">
                                                        b.</label>
                                                </strong>
                                            </td>
                                            <td width="20%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                <label id="Label14">
                                                    Location of the School /
                                                <br />
                                                    विद्यालय का पता
                                                </label>
                                            </td>
                                            <td width="25%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                <div class="sqborder1">
                                                    <asp:Label ID="lblSchloc" runat="server" />
                                                </div>
                                            </td>
                                            <td width="3%" bgcolor="" class="" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0;text-align:center">
                                                <strong>
                                                    <label id="Label1">
                                                        c.</label>
                                                </strong>
                                            </td>
                                            <td width="25%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                <label id="Label17">
                                                    District / जिस जिले में आपका विद्यालय है
                                                </label>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                <div class="sqborder1">
                                                    <asp:Label ID="lblLIDist" runat="server" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td bgcolor="" class="" style="border: solid 1px #000; padding: 1px;;border-top:0;text-align:center">
                                                <strong>d. </strong>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Year of Joining / आपने किस साल उस विद्यालय में नामांकन लिया था
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                <div class="sqborder1">
                                                    <asp:Label ID="lblyoj" runat="server" />
                                                </div>
                                            </td>
                                            <td bgcolor="" class="" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0;text-align:center">
                                                <strong>e. </strong>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Year of passing from School / आपने किस साल विद्यालय से परीक्षा उतीर्ण की है
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
                                                <div class="sqborder1">
                                                    <asp:Label ID="lblyol" runat="server" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td bgcolor="" class="" style="border: solid 1px #000; padding: 1px;border-top:0;text-align:center">
                                                <strong>f. </strong>
                                            </td>
                                            <td colspan="4" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Have you passed 10th exam as a student of Kasturba Gandhi Balika Vidyalaya? / क्या आपने दसवीं की परीक्षा कस्तूरबा गाँधी आवासीय बालिका छात्रावास में रहते हुए उत्तीर्ण की है ?
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">
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
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="tbborderCAF" style="border:none; border-collapse: collapse; margin-top:3px;">
                            <tr>
                                <td width="3%" style="border: solid 1px #000; padding: 1px;text-align:center">
                                    <strong>7.</strong>
                                </td>
                                <td style="border: solid 1px #000; padding: 1px; border-left: 0;">
                                    <strong>Personal Details
                                    <br />
                                        &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;</strong>
                                </td>
                                <td style="border: solid 1px #000; border-left: 0;">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td width="20%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Gender / &#2354;&#2367;&#2306;&#2327;
                                            </td>
                                            <td width="20%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Mother Tongue / &#2350;&#2366;&#2340;&#2371;&#2349;&#2366;&#2359;&#2366;
                                            </td>
                                            <td width="20%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Nationality / &#2344;&#2366;&#2327;&#2352;&#2367;&#2325;&#2340;&#2366;
                                            </td>
                                            <td width="20%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0">Religion / &#2343;&#2352;&#2381;&#2350;
                                            </td>
                                            <td width="20%" style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0;border-right:0">Blood Group / रक्त समूह
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border: solid 1px #000; padding: 1px;border-top:0; border-left: 0; border-bottom:0;">
                                                <div class="sqborder1">
                                                    <asp:Label ID="lblsex" runat="server" />
                                                </div>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0; border-bottom:0;">
                                                <div class="sqborder1">
                                                    <asp:Label ID="lblMT" runat="server" />
                                                </div>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0; border-bottom:0;">
                                                <div class="sqborder1">
                                                    <asp:Label ID="lblNat" runat="server" />
                                                </div>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0; border-bottom:0;">
                                                <div class="sqborder1">
                                                    <asp:Label ID="lblreligion" runat="server" />
                                                </div>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left: 0;border-top:0; border-bottom:0; border-right:0">
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
                        <table width="100%" border="0" cellpadding="0" class="tbborderCAF" style="border:none; border-collapse: collapse; margin-top:3px;">
                            <tr>
                                <td bgcolor="#FFFFFF">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td style="border: solid 1px #000; padding: 1px;">
                                                <strong>8. Address for Correspondence / &#2346;&#2340;&#2381;&#2352;&#2366;&#2330;&#2366;&#2352;
                                                &#2325;&#2366; &#2346;&#2340;&#2366;</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td width="3%" height="25" style="border: solid 1px #000; padding: 1px; border-top:0;text-align:center">a.
                                                        </td>
                                                        <td width="10%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">State/UT <br />राज्य / केन्द्र-शासित प्रदेश
                                                        </td>
                                                        <td width="16%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1">
                                                                <asp:Label ID="lblstate" runat="server" />
                                                            </div>
                                                        </td>
                                                        <td width="2%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;text-align:center">b.
                                                        </td>
                                                        <td width="10%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">District / &#2332;&#2367;&#2354;&#2366;
                                                        </td>
                                                        <td width="20%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1">
                                                                <asp:Label ID="lbldist" runat="server" />
                                                            </div>
                                                        </td>
                                                        <td width="2%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;text-align:center">c.
                                                        </td>
                                                        <td width="15%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">Block / Municipality / प्रखंड / नगर परिषद् क्षेत्र
                                                        </td>
                                                        <td width="21%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
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
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td width="3%" height="25" style="border: solid 1px #000; padding: 1px; border-top:0;text-align:center">d.
                                                        </td>
                                                        <td width="10%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">Address / &#2346;&#2340;&#2366;
                                                        </td>
                                                        <td width="48%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1" style="height: auto;">
                                                                <asp:Label ID="lbldtl" runat="server" />
                                                            </div>
                                                        </td>
                                                        <td width="2%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;text-align:center">e.
                                                        </td>
                                                        <td width="15%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">PIN Code / पिन कोड
                                                        </td>
                                                        <td width="21%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
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
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td width="3%" style="border: solid 1px #000; padding: 1px; border-top:0;text-align:center">f.
                                                        </td>
                                                        <td width="10%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">Mobile No.<br />
                                                            &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                        </td>
                                                        <td width="16%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1">
                                                                <asp:Label ID="lblmob" runat="server" />
                                                            </div>
                                                        </td>
                                                        <td width="2%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;text-align:center">g.
                                                        </td>
                                                        <td width="10%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">e-Mail / &#2312;-&#2350;&#2375;&#2354;
                                                        </td>
                                                        <td width="20%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1">
                                                                <asp:Label ID="lblemail" runat="server" />
                                                            </div>
                                                        </td>
                                                        <td width="2%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;text-align:center">h.
                                                        </td>
                                                        <td width="15%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">Telephone No.<br />
                                                            दूरभाष संख्या |
                                                        </td>
                                                        <td width="21%">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                <tr>
                                                                    <td width="20%" height="30" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                                        <div class="sqborder1">
                                                                            <asp:Label ID="lblAreaCode" runat="server" />
                                                                        </div>
                                                                    </td>
                                                                    <td width="80%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                                        <div class="sqborder1" >
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
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td width="3%" style="border: solid 1px #000; padding: 1px; border-top:0;text-align:center">i.
                                                        </td>
                                                        <td width="10%" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">Aadhaar No.<br />
                                                        </td>
                                                        <td colspan="7" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
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
                        <table width="100%" border="0" cellpadding="0" class="tbborderCAF" style="border:none; border-collapse: collapse; margin-top:3px;">
                            <tr>
                                <td bgcolor="#FFFFFF">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td width="3%" style="border: solid 1px #000; padding: 1px;text-align:center">
                                                <strong>9. </strong>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left:0;">
                                                <strong>Reservation Details / &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2325;&#2368;
                                                &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="3%" style="border: solid 1px #000; padding: 1px; border-top:0;text-align:center">
                                                <strong>a.</strong>
                                            </td>
                                            <td height="30" width="100%" >
                                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                    <tr>
                                                        <td style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">General / &#2360;&#2366;&#2350;&#2366;&#2344;&#2381;&#2351; &#2357;&#2352;&#2381;&#2327;
                                                        </td>
                                                        <td height="30" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1" style="width: 35px;">
                                                                <asp:Label runat="server" ID="lblGeneral"></asp:Label>
                                                            </div>
                                                        </td>
                                                        <td style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">&nbsp;Schedule Caste (SC) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340;
                                                        &#2332;&#2366;&#2340;&#2367;
                                                        </td>
                                                        <td width="111" height="30" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1" style="width: 35px;">
                                                                <asp:Label runat="server" ID="lblSC"></asp:Label>
                                                            </div>
                                                        </td>
                                                        <td style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">&nbsp;Schedule Tribe (ST) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340;
                                                        &#2332;&#2344;&#2332;&#2366;&#2340;&#2367;
                                                        </td>
                                                        <td width="40px" height="30" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1" style="width: 35px;">
                                                                &nbsp;<asp:Label runat="server" ID="lblST"></asp:Label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">Backward Class(BC) / &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                        &#2357;&#2352;&#2381;&#2327;
                                                        </td>
                                                        <td style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1" style="width: 35px;">
                                                                <asp:Label runat="server" ID="lblobcapp"></asp:Label>
                                                            </div>
                                                        </td>
                                                        <td style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">Extremly Backward Class (EBC) / &#2309;&#2340;&#2381;&#2351;&#2306;&#2340; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                        &#2357;&#2352;&#2381;&#2327;
                                                        </td>
                                                        <td colspan="3" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1" style="width: 35px;">
                                                                <asp:Label runat="server" ID="lblOther"></asp:Label>
                                                            </div>
                                                        </td>
                                                        <td id="tdlblWBC" runat="server" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">Women Backward Class (WBC) / &#2346;&#2367;&#2331;&#2396;&#2375; &#2357;&#2352;&#2381;&#2327;
                                                        &#2325;&#2368; &#2350;&#2361;&#2367;&#2354;&#2366;&#2351;&#2375;
                                                        </td>
                                                        <td height="30" id="tdtxtWBC" runat="server" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1" style="width: 35px;">
                                                                <asp:Label runat="server" ID="lblWBC"></asp:Label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr id="trEWS" runat="server" visible="false">
                                            <td style="border: solid 1px #000; padding: 1px; border-top:0;"></td>
                                            <td width="100%" colspan="2">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td width="275px" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">Economically Weaker Section(EWS) / आर्थिक रूप से कमजोर वर्ग
                                                        </td>
                                                        <td width="43px" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1">
                                                                <asp:Label runat="server" ID="lblEWS"></asp:Label>
                                                            </div>
                                                        </td>
                                                        <td colspan="4" width="15" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">&nbsp;
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border: solid 1px #000; padding: 1px; border-top:0;text-align:center">
                                                <strong>b.</strong>
                                            </td>
                                            <td width="100%" colspan="0">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td width="275px" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">Specially Abled ( दिव्यांग )
                                                        </td>
                                                        <td width="43px" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">
                                                            <div class="sqborder1">
                                                                <asp:Label runat="server" ID="lblPHOH"></asp:Label>
                                                            </div>
                                                        </td>
                                                        <td colspan="4" width="15" style="border: solid 1px #000; padding: 1px; border-top:0; border-left:0;">&nbsp;
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr style="display: none;">
                                            <td height="30">
                                                <strong>c.</strong>
                                            </td>
                                            <td height="30">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                    <tr>
                                                        <td width="170px">Ex-Service Man (ESM)
                                                        </td>
                                                        <td width="43px" height="30">
                                                            <div class="sqborder1">
                                                                <asp:Label runat="server" Style="width: 35px;" ID="lblESM"></asp:Label>
                                                            </div>
                                                        </td>
                                                        <td width="230px" style="display: none;">Serving Defence Personnel (SDP)
                                                        </td>
                                                        <td colspan="4" width="15">&nbsp;
                                                        </td>
                                                        <td width="111px" height="30" style="display: none;">
                                                            <div class="sqborder1" style="width: 35px;">
                                                                <asp:Label runat="server" ID="lblSDP"></asp:Label>
                                                            </div>
                                                        </td>
                                                        <td style="display: none;">Children of Martyrs (CoM)
                                                        </td>
                                                        <td width="40px" height="30" style="display: none;">
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
               <%-- <tr>
                    <td height="3"></td>
                </tr>--%>
                <%--<tr style="display: none;">
                <td>
                    <table width="100%" border="0" cellpadding="2" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                    <tr>
                                        <td width="2%">
                                            <strong>10.</strong>
                                        </td>
                                        <td width="98%" colspan="3">
                                            <strong>Weightage Details / &#2350;&#2361;&#2340;&#2381;&#2357; &#2357;&#2367;&#2357;&#2352;&#2339;</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF">
                                                <tr>
                                                    <td width="25%" valign="top">
                                                        <div class="tablebdercaf">
                                                            <table width="100%" border="0" cellpadding="2" cellspacing="0">
                                                                <tr>
                                                                    <td colspan="4" bgcolor="#FFFFFF" class="smlfont">
                                                                        <strong>a. &nbsp;<strong>NCC</strong></strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="36%" bgcolor="#FFFFFF">
                                                                        NCC
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" width="40px">
                                                                        <strong>
                                                                            <asp:Label runat="server" ID="lblNccA"></asp:Label></strong>
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" style="display: none;">
                                                                        NCC (C)
                                                                    </td>
                                                                    <td width="40px" bgcolor="#FFFFFF" style="display: none;">
                                                                        <strong>
                                                                            <asp:Label runat="server" ID="lblNccC"></asp:Label></strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td width="1%" valign="top">
                                                        &nbsp;
                                                    </td>
                                                    <td width="43%" valign="top">
                                                        <div class="tablebdercaf">
                                                            <table width="100%" border="0" cellpadding="2" cellspacing="0" style="display: none;">
                                                                <tr>
                                                                    <td colspan="4" bgcolor="#FFFFFF" class="smlfont">
                                                                        <strong>b. &nbsp; Scout &amp; Guide</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#FFFFFF">
                                                                        Rajya Puraskar(RP)
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" width="35px">
                                                                        <strong>
                                                                            <asp:Label ID="lblRP" runat="server"></asp:Label></strong>
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF">
                                                                        President Recognition(PR)
                                                                    </td>
                                                                    <td width="35px" bgcolor="#FFFFFF">
                                                                        <strong>
                                                                            <asp:Label ID="lblPR" runat="server"></asp:Label></strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td width="1%" valign="top">
                                                        &nbsp;
                                                    </td>
                                                    <td width="30%" valign="top" class="tablebdercaf">
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="0" style="display: none;">
                                                            <tr>
                                                                <td colspan="6" bgcolor="#FFFFFF" class="smlfont">
                                                                    <strong>c. &nbsp; Sports</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#FFFFFF">
                                                                    State
                                                                </td>
                                                                <td bgcolor="#FFFFFF" width="40px">
                                                                    <strong>
                                                                        <asp:Label runat="server" ID="lblSportsS"></asp:Label></strong>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    National
                                                                </td>
                                                                <td bgcolor="#FFFFFF" width="40px">
                                                                    <strong>
                                                                        <asp:Label runat="server" ID="lblSportsN"></asp:Label></strong>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    International
                                                                </td>
                                                                <td bgcolor="#FFFFFF" width="40px">
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
            </tr>--%>
                <%--<tr>
                    <td height="3"></td>
                </tr>--%>
                <tr>
                    <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tablebdercaf" style="border:none; border-collapse: collapse; margin-top:3px;">
                            <tr>
                                <td>
                                    <strong>
                                        <label id="lblN12" runat="server">
                                            10.</label>
                                    </strong><strong>&nbsp;&nbsp;&nbsp;जिस कॉलेज में आप Spot Admission से नामांकन लेना चाहते
                                    हैं उसकी विवरणी नीचे भरें |</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table width="100%" border="1" cellspacing="0" cellpadding="0" style="margin-top:5px; border-collapse:collapse">
                                        <tr>
                                            <th style="width: 5%;background: #c3361d;color:#fff;">SlNo.
                                            </th>
                                            <th style="width: 40%; background: #c3361d;color:#fff;">College Name
                                            </th>
                                            <th style="width: 15%;background: #c3361d;color:#fff;">Stream
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

                            <tr>
                                <td height="22">
                                    <strong>
                                        <label id="Label2" runat="server">
                                            11.
                                        </label>
                                        Transaction Details</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table width="100%" cellspacing="0" cellpadding="0" style="margin-top:5px; border-collapse:collapse">
                                        <tr>
                                            <td style="border: solid 1px #000; padding: 1px;">Client Transaction Id
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left:0;">
                                                <strong>
                                                    <asp:Label ID="lblCtrnid" runat="server"> </asp:Label></strong>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left:0;">Bank Transaction Id
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left:0;">
                                                <strong>
                                                    <asp:Label ID="lblBankTrnId" runat="server"></asp:Label></strong>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left:0;">Amount
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left:0;">
                                                <strong>
                                                    <asp:Label ID="lblAmount" Text="Rs.350" runat="server"></asp:Label></strong>
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left:0;">Status
                                            </td>
                                            <td style="border: solid 1px #000; padding: 1px; border-left:0;">
                                                <strong>
                                                    <asp:Label ID="lblStatus" runat="server"></asp:Label></strong>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td height="10" align="right">CAF Last Modified :<strong>
                                    <asp:Label ID="lblLastModify" runat="server"></asp:Label></strong>
                                </td>
                            </tr>
                            <tr id="trMessage" runat="server">
                                <td>
                                    <table width="100%" style="margin-top:5px; border-collapse:collapse">
                                        <tr>
                                            <td>
                                                <div id="PaymentStatus" runat="server">
                                                    <span class="Star">*</span>&nbsp;&nbsp;&nbsp; <span class="Note">This form is valid
                                                    only after successful payment.</span><br />
                                                    If Payment is deducted from your Account then wait for 48 Hours for the payment
                                                status in OFSS. If then also the payment is not successful then the amount will
                                                be returned to your Bank Account by the concerned Bank.
                                                </div>
                                                <br />
                                                <div style="font-weight: bold; padding-top: 2px;">
                                                    आवेदक जिस जिस विद्यालय/महाविद्यालय में स्पॉट नामांकन (Spot Admission) के माध्यम
                                                से आवेदन देना चाहते हैं वहाँ इस फॉर्म की हस्ताक्षरित प्रति जमा कर दें |
                                                </div>
                                            </td>
                                            <td width="260px" align="center">
                                                <div style="font-weight: bold; padding-top: 50px; font-size: 15px">
                                                    Student Signature
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td height="15"></td>
                            </tr>
                        </table>

                    </td>
                </tr>
                <tr>
                    <td height="15"></td>
                </tr>
            </table>
            <div style="page-break-before: always;">
                <br />
            </div>
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
                                    <strong>(विद्यालय/महाविद्यालय आवेदन फॉर्म जमा लेने के पश्चात यह पावती रसीद सम्बंधित
                                    आवेदक को हस्ताक्षर करके एवं मुहर लगा कर वापस देंगे | ) </strong>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding-top: 20px">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td align="right" style="padding-right: 87px;">
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
                            <%--  <tr>
                            <td style="font-size: 15px; padding-top: 10px">
                                3. जिस स्नातक विषय में आप नामांकन लेना चाहते हैं
                            </td>
                            <td style="padding-top: 10px">
                                :__________________________________________________________________________
                            </td>
                        </tr>--%>
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
                    <td height="10px"></td>
                </tr>
            </table>
        </div>
        <div id="divDateLine" runat="server" visible="false" class="frm_closed">
            <asp:Literal ID="litMessage" runat="server"></asp:Literal>
        </div>
    </form>
</body>
</html>
