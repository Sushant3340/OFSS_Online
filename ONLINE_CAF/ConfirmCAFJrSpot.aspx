<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ConfirmCAFJrSpot.aspx.cs"
    Inherits="ConfirmCAFJrSpot" EnableEventValidation="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>CAF-Applicant Copy</title>
    <link href="../style/CAF.css" rel="stylesheet" type="text/css" />
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link href="../style/chromestyle.css" type="text/css" />
    <script language="javascript" type="text/javascript">
        textcolours = new Array('#000000', '#FF0000', '#000000', '#FF0000', '#000000', '#FF0000');
        //textcolours =new Array( '#000000', '#FFFFFF', '#000000', '#FFFFFF', '#000000', '#FFFFFF' );
        function flashtext() {
            var colour = Math.round(textcolours.length * Math.random());
            document.getElementById('flashingtext').style.color = textcolours[colour];
        }
        setInterval('flashtext()', 1000);
    </script>
    <script language="javascript" type="text/javascript">

</script>
    <style type="text/css">
        .redbold {
            font-size: 25px;
        }

        .Uppercase {
            text-transform: uppercase;
        }

        .style2 {
            font-size: 18px;
        }

        .redbold {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 30px;
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

        .countdwnrtxt2 {
            padding-top: 5px;
            font-family: Arial, Helvetica, sans-serif;
            text-decoration: none;
            color: #000000;
            font-size: 14px;
            font-weight: bold;
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

        .style3 {
            height: 169px;
        }
    </style>
    <script type="text/javascript" language="javascript">
        function show(subId) {
            document.getElementById(subId).style.display = ""
        }

        function hide(subId) {
            document.getElementById(subId).style.display = "none"
        }
        function saveData() {
            if (confirm('Have you verified your form ?')) {
                if (confirm('Do you want to confirm this ?')) {
                    document.getElementById('btnBack').style.display = "none";
                    document.getElementById('btnSave').style.display = "none";
                    document.getElementById('divmsg').style.display = "";
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
       <%-- function showCGPA() {
            var cbse = '<%=strCBSE%>';
            if (cbse == 'True') {
                //  document.getElementById('tdMaxH').style.display = "none";
                //  document.getElementById('tdMaxD').style.display = "none";
                //    document.getElementById('CGPAH').innerHTML = "<strong>CGPA</strong>";
            }
            if (cbse == 'False') {
                //  document.getElementById('tdMaxH').style.display = '';
                //   document.getElementById('tdMaxD').style.display = '';
                //  document.getElementById('CGPAH').innerHTML = "<strong>Total Mark Secured</strong>";
            }
            if (cbse == 'KERALA') {
                //  document.getElementById('tdMaxH').style.display = "none";
                // document.getElementById('tdMaxD').style.display = "none";
                //   document.getElementById('CGPAH').innerHTML = "<strong>Grade</strong>";
            }

        }--%>


        //        var message = "Right Click Disabled";
        //        function RightClickDisable(keyp) {
        //            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && (event.button == 2)) //Google chrome browser
        //            { alert(message); return false; }
        //            if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) //Microsoft IE browser
        //            {
        //                //alert(message); 
        //                return false;
        //            }
        //        }
        //        document.onmousedown = RightClickDisable;
    </script>
    <script type="text/javascript">
        function preventBack() { window.history.forward(); }
        setTimeout("preventBack()", 0);
        window.onunload = function () { null };

        $(document).ready(function () {
            alert("Confiramation Page loaded");
        });




    </script>
    <script src="../js/Juniour_CAF_HINDISpot.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:HiddenField ID="hidOptions" runat="server" />
        <asp:HiddenField ID="hidOptionIds" runat="server" />
        <asp:HiddenField ID="hidCollege" runat="server" />
        <asp:HiddenField ID="hidCname" runat="server" />
        <asp:HiddenField ID="hidStream" runat="server" />
        <asp:HiddenField ID="hidSname" runat="server" />
        <asp:HiddenField ID="hidComplusory" runat="server" />
        <asp:HiddenField ID="hidComplusory1" runat="server" />
        <asp:HiddenField ID="hidComplusory2" runat="server" />
        <asp:HiddenField ID="hidComplusory3" runat="server" />
        <asp:HiddenField ID="hidCompName" runat="server" />
        <asp:HiddenField ID="hidCompName1" runat="server" />
        <asp:HiddenField ID="hidCompName2" runat="server" />
        <asp:HiddenField ID="hidCompName3" runat="server" />
        <asp:HiddenField ID="hidElectives" runat="server" />
        <asp:HiddenField ID="hidE1name" runat="server" />
        <asp:HiddenField ID="hidElective1" runat="server" />
        <asp:HiddenField ID="hidE2name" runat="server" />
        <asp:HiddenField ID="hidElective2" runat="server" />
        <asp:HiddenField ID="hidElective3" runat="server" />
        <asp:HiddenField ID="hidE3name" runat="server" />
        <asp:HiddenField ID="hidFElelective1" runat="server" />
        <asp:HiddenField ID="hidF1Ele" runat="server" />
        <asp:HiddenField ID="hidFElelective2" runat="server" />
        <asp:HiddenField ID="hidF2Ele" runat="server" />
        <asp:HiddenField ID="hidFElelective3" runat="server" />
        <asp:HiddenField ID="hidF3Ele" runat="server" />
        <asp:HiddenField ID="hidFourthElelectives" runat="server" />
        <asp:HiddenField ID="hidHostel" runat="server" />
        <asp:HiddenField ID="hidPhoto" runat="server" />
        <asp:HiddenField ID="strBoard" runat="server" />
        <asp:HiddenField ID="strBloodGroup" runat="server" />
        <asp:HiddenField ID="strReligion" runat="server" />
        <asp:HiddenField ID="strGender" runat="server" />
        <asp:HiddenField ID="strState" runat="server" />
        <asp:HiddenField ID="strDist" runat="server" />
        <asp:HiddenField ID="strBlock" runat="server" />
        <asp:HiddenField ID="strPhone" runat="server" />
        <asp:HiddenField ID="strOSA" runat="server" />
        <asp:HiddenField ID="strOLNS" runat="server" />
        <asp:HiddenField ID="strCompSub" runat="server" />
        <asp:HiddenField ID="strPassMark" runat="server" />
        <asp:HiddenField ID="strFailMark" runat="server" />
        <asp:HiddenField ID="strEng" runat="server" />
        <asp:HiddenField ID="strMath" runat="server" />
        <asp:HiddenField ID="strSc" runat="server" />
        <asp:HiddenField ID="strSoSci" runat="server" />
        <asp:HiddenField ID="strKGrade" runat="server" />
        <asp:HiddenField ID="strFontOption" runat="server" />
        <asp:HiddenField ID="strnat" runat="server" />
        <asp:HiddenField ID="strmt" runat="server" />
        <asp:HiddenField ID="strFocu" runat="server" />
        <asp:HiddenField ID="strMocu" runat="server" />
        <asp:HiddenField ID="strinsdist" runat="server" />
        <asp:HiddenField ID="stryoj" runat="server" />
        <asp:HiddenField ID="stryol" runat="server" />
        <asp:HiddenField ID="strAIncome" runat="server" />
        <asp:HiddenField ID="strAIncomeval" runat="server" />
        <asp:HiddenField ID="hdnValidateSts" runat="server" />
        <asp:HiddenField ID="hdnAadharNo" runat="server" />
        <asp:HiddenField ID="hdnUniqueId" runat="server" />
        <table width="850" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td width="85" align="left" class="CAFheading">
                                <img src="../images/BiharLogo.png" width="77" height="83" />
                            </td>
                            <td height="22" align="center" class="style2">
                                <span class="CAFheading" id="common">Common Application Form</span><br />
                                <span id="adm">For Admission to Intermediate Courses Session 2024-26</span>
                                <br />
                                <span class="normalfont" id="department">Bihar School Examination Board, Government
                                of Bihar</span>
                            </td>
                            <td align="center" class="redbold">
                                <label id="lblp2" runat="server">
                                    Intermediate</label>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;
                            </td>
                            <td height="22" align="center" class="normalfont">
                                <div id="flashingtext" class="countdwnrtxt2">
                                    &#2325;&#2371;&#2346;&#2351;&#2366; &#2309;&#2346;&#2344;&#2375; &#2342;&#2381;&#2357;&#2366;&#2352;&#2366;
                                &#2342;&#2368; &#2327;&#2351;&#2368; &#2332;&#2366;&#2344;&#2325;&#2366;&#2352;&#2368;
                                &#2325;&#2379; &#2332;&#2366;&#2305;&#2330; &#2354;&#2375;&#2306; | &#2309;&#2327;&#2352;
                                &#2310;&#2346; &#2309;&#2346;&#2344;&#2368; &#2332;&#2366;&#2344;&#2325;&#2366;&#2352;&#2368;
                                &#2348;&#2342;&#2354;&#2344;&#2366; &#2330;&#2366;&#2361;&#2340;&#2375; &#2361;&#2376;&#2306;
                                &#2340;&#2379; "Back To Modify" &#2348;&#2335;&#2344; &#2346;&#2352; &#2325;&#2381;&#2354;&#2367;&#2325;
                                &#2325;&#2352;&#2375;&#2306; | &#2309;&#2327;&#2352; &#2310;&#2346;&#2325;&#2375;
                                &#2342;&#2381;&#2357;&#2366;&#2352;&#2366; &#2349;&#2352;&#2368; &#2327;&#2351;&#2368;
                                &#2360;&#2366;&#2352;&#2368; &#2332;&#2366;&#2344;&#2325;&#2366;&#2352;&#2368; &#2360;&#2361;&#2368;
                                &#2361;&#2376; &#2319;&#2357;&#2306; &#2309;&#2346;&#2344;&#2375; &#2342;&#2381;&#2357;&#2366;&#2352;&#2366;
                                &#2313;&#2360;&#2325;&#2379; &#2342;&#2369;&#2348;&#2366;&#2352;&#2366; &#2332;&#2366;&#2305;&#2330;
                                &#2354;&#2367;&#2351;&#2366; &#2361;&#2376; &#2340;&#2379; &#8220;Confirm&#8221;
                                &#2348;&#2335;&#2344; &#2346;&#2352; &#2325;&#2381;&#2354;&#2367;&#2325; &#2325;&#2352;&#2375;&#2306;
                                |
                                </div>
                            </td>
                            <td>&nbsp;
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="10" cellspacing="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF" class="style3">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td width="100%" valign="top">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td colspan="0" bgcolor="#FFFFFF">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                                        <tr>
                                                                            <td width="3%">
                                                                                <strong>
                                                                                    <label id="lblN1">
                                                                                        1.
                                                                                    </label>
                                                                                </strong>
                                                                            </td>
                                                                            <td>
                                                                                <strong>Name of the Board from which you have passed the 10th exam ? Please fill the
                                                                                Year of Exam and Roll Number as in Admit Card. /
                                                                                <br />
                                                                                    &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2358;&#2367;&#2325;&#2381;&#2359;&#2366;
                                                                                &#2348;&#2379;&#2352;&#2381;&#2337; &#2360;&#2375; &#2342;&#2360;&#2357;&#2368;&#2306;
                                                                                &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                                                &#2325;&#2368; &#2361;&#2376; ? &#2319;&#2337;&#2350;&#2367;&#2335; &#2325;&#2366;&#2352;&#2381;&#2337;
                                                                                &#2325;&#2375; &#2309;&#2344;&#2369;&#2352;&#2370;&#2346; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                &#2357;&#2352;&#2381;&#2359; &#2319;&#2357;&#2306; &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                                                &#2349;&#2352;&#2375;&#2306; |</strong>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="3%"></td>
                                                                            <td width="100%">
                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="dotBorder">
                                                                                    <tr>
                                                                                        <td bgcolor="#FFFFFF">
                                                                                            <label id="lblBoardName">
                                                                                                Name of the Examination Board /
                                                                                            <br />
                                                                                                &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                            &#2348;&#2379;&#2352;&#2381;&#2337; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                            </label>
                                                                                        </td>
                                                                                        <td>
                                                                                            <label id="lblYOP">
                                                                                                Year of Passing /
                                                                                            <br />
                                                                                                &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                            &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;
                                                                                            </label>
                                                                                        </td>
                                                                                        <td>
                                                                                            <label id="lblExType">
                                                                                                Exam Type /
                                                                                            <br />
                                                                                                &#2310;&#2346;&#2344;&#2375; &#2325;&#2380;&#2344; &#2360;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                            &#2346;&#2366;&#2360; &#2325;&#2368; &#2361;&#2376;
                                                                                            </label>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td bgcolor="#FFFFFF">
                                                                                            <div class="sqborder1">
                                                                                                <asp:Label ID="lblBoard" runat="server" />
                                                                                            </div>
                                                                                            <div class="sqborder1" id="divOtherBoard" runat="server">
                                                                                                <asp:Label ID="lblOtherBoard" runat="server" />
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
                                            <table>
                                                <tr>
                                                    <td>
                                                        <table width="100%">
                                                            <tr>
                                                                <td></td>
                                                                <td width="60px">
                                                                    <label id="Label2">
                                                                        Date of Birth / &#2332;&#2344;&#2381;&#2350; &#2340;&#2367;&#2341;&#2367;
                                                                    </label>
                                                                </td>
                                                                <td id="tdRollCdH" runat="server" width="160px">
                                                                    <label id="Label8">
                                                                        Roll Code / &#2352;&#2379;&#2354; &#2325;&#2379;&#2337;
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label id="lblRollNo">
                                                                        Roll Number / &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td>
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblDob" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td id="tdRollCdF" runat="server">
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
                                                             <tr>
                                                                <td>
                                                                    <strong>
                                                                       
                                                                    </strong>
                                                                </td>
                                                                <td width="260px" height="22" style="display:none;" id="tdUniq" runat="server">
                                                                    <strong>
                                                                        <label id="lblUniqueid">
                                                                          Applicant's  Unique Id</label>
                                                                    </strong>
                                                                </td>
                                                                <td width="500px" colspan="2" style="display:none;" id="tdunique" runat="server">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="LabelUId" runat="server" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>
                                                                        <label id="lblN2">
                                                                            2.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td width="260px" height="22">
                                                                    <strong>
                                                                        <label id="lblApplicantName">
                                                                            Applicant's Name / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350;</label>
                                                                    </strong>
                                                                </td>
                                                                <td width="500px" colspan="2">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblApplName" runat="server" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>3. </strong>
                                                                </td>
                                                                <td height="22">
                                                                    <strong>
                                                                        <label id="lblFname">
                                                                            Father's Name / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2375; &#2346;&#2367;&#2340;&#2366;
                                                                        &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td colspan="2">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblFatherName" runat="server" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>
                                                                        <label id="lblN4">
                                                                            4.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td height="22">
                                                                    <strong>
                                                                        <label id="lblMname">
                                                                            Mother's Name / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2350;&#2366;&#2340;&#2366;
                                                                        &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td colspan="2">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblMotherName" runat="server" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td width="150" align="center" class="sqborder" style="padding: 5px;">
                                                        <asp:Image ID="imgPhoto" runat="server" Height="140px" Width="140" AlternateText="Affix your self attested (on the front) recent colour passport size photographs here" />
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
                <td height="10"></td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="2" cellspacing="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td colspan="2">
                                            <strong>
                                                <asp:Label ID="Label9" runat="server">
                                            5. 
                                                </asp:Label>
                                                &nbsp;&nbsp;&nbsp;
                                            <label id="Label10">
                                                Details of Mark/Grade Secured in 10th Board Examination / &#2342;&#2360;&#2357;&#2368;
                                                &#2350;&#2375;&#2306; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340; &#2357;&#2367;&#2359;&#2351;&#2357;&#2366;&#2352;
                                                &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325; &#2325;&#2368;
                                                &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                            </label>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="2%"></td>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                <tr>
                                                    <td width="1%" valign="top" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="Label3">
                                                                a.</label>
                                                        </strong>
                                                    </td>
                                                    <td width="70%" valign="top">
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC"
                                                            id="tblBSE">
                                                            <tr>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                     <strong>Total Full Marks<br />
                                                                        कुल अधिकतम अंक - कुल पूर्ण अंक </strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                     <strong>Total Marks Obtained<br />
                                                                            कुल पूर्ण अंक - कुल प्राप्तांक</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt" id="tdEng" runat="server">
                                                                    <strong>English
                                                                    <br />
                                                                        &#2309;&#2306;&#2327;&#2381;&#2352;&#2375;&#2332;&#2368; </strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt" id="tdMath" runat="server">
                                                                    <strong>Mathematics
                                                                    <br />
                                                                        &#2327;&#2339;&#2367;&#2340;</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt" id="tdScience" runat="server">
                                                                    <strong>Science<br />
                                                                        &#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt" id="tdSoScience" runat="server">
                                                                    <strong>Social Science<br />
                                                                        &#2360;&#2350;&#2366;&#2332;&#2358;&#2366;&#2360;&#2381;&#2340;&#2381;&#2352;</strong>
                                                                </td>
                                                                <td bgcolor="#666666" id="tdGradeMark" class="whitetxt" style="display: none">
                                                                    <strong>Grade
                                                                    <br />
                                                                        &#2346;&#2342;&#2325;&#2381;&#2352;&#2350;</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:Label ID="lblMaxMark" runat="server" Width="70" MaxLength="4" />
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:Label ID="lblTotalMark" runat="server" Width="70" MaxLength="4" />
                                                                </td>
                                                                <td bgcolor="#FFFFFF" id="tdEngMrk" runat="server">
                                                                    <asp:Label ID="lblEngMark" runat="server" Width="70" MaxLength="3" />
                                                                </td>
                                                                <td bgcolor="#FFFFFF" id="tdMathMrk" runat="server">
                                                                    <asp:Label ID="lblMathMark" runat="server" Width="70" MaxLength="3" />
                                                                </td>
                                                                <td bgcolor="#FFFFFF" id="tdScienceMrk" runat="server">
                                                                    <asp:Label ID="lblScienceMark" runat="server" Width="70" MaxLength="3" />
                                                                </td>
                                                                <td bgcolor="#FFFFFF" id="tdSoScienceMrk" runat="server">
                                                                    <asp:Label ID="lblSSMark" runat="server" Width="70" MaxLength="3" />
                                                                </td>
                                                                <td bgcolor="#FFFFFF" id="lblGradeMark" style="display: none">
                                                                    <asp:Label ID="lblGrade" runat="server" Width="70" MaxLength="3" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC"
                                                            id="tblCBSE" style="display: none;">
                                                            <tr>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                    <strong>CGPA</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                    <strong>English</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                    <strong>Mathematics</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                    <strong>Science</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                    <strong>Social Science</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:TextBox CssClass="inputitem" ID="txtCGPA" runat="server" Width="70" MaxLength="4"
                                                                        AutoCompleteType="disabled" />
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:DropDownList ID="ddlEng" runat="server" CssClass="inputitem">
                                                                        <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        <asp:ListItem Value="10">A1</asp:ListItem>
                                                                        <asp:ListItem Value="9">A2</asp:ListItem>
                                                                        <asp:ListItem Value="8">B1</asp:ListItem>
                                                                        <asp:ListItem Value="7">B2</asp:ListItem>
                                                                        <asp:ListItem Value="6">C1</asp:ListItem>
                                                                        <asp:ListItem Value="5">C2</asp:ListItem>
                                                                        <asp:ListItem Value="4">D</asp:ListItem>
                                                                        <asp:ListItem Value="2">E1</asp:ListItem>
                                                                        <asp:ListItem Value="1">E2</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:DropDownList ID="ddlMath" runat="server" CssClass="inputitem">
                                                                        <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        <asp:ListItem Value="10">A1</asp:ListItem>
                                                                        <asp:ListItem Value="9">A2</asp:ListItem>
                                                                        <asp:ListItem Value="8">B1</asp:ListItem>
                                                                        <asp:ListItem Value="7">B2</asp:ListItem>
                                                                        <asp:ListItem Value="6">C1</asp:ListItem>
                                                                        <asp:ListItem Value="5">C2</asp:ListItem>
                                                                        <asp:ListItem Value="4">D</asp:ListItem>
                                                                        <asp:ListItem Value="2">E1</asp:ListItem>
                                                                        <asp:ListItem Value="1">E2</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:DropDownList ID="ddlSc" runat="server" CssClass="inputitem">
                                                                        <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        <asp:ListItem Value="10">A1</asp:ListItem>
                                                                        <asp:ListItem Value="9">A2</asp:ListItem>
                                                                        <asp:ListItem Value="8">B1</asp:ListItem>
                                                                        <asp:ListItem Value="7">B2</asp:ListItem>
                                                                        <asp:ListItem Value="6">C1</asp:ListItem>
                                                                        <asp:ListItem Value="5">C2</asp:ListItem>
                                                                        <asp:ListItem Value="4">D</asp:ListItem>
                                                                        <asp:ListItem Value="2">E1</asp:ListItem>
                                                                        <asp:ListItem Value="1">E2</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:DropDownList ID="ddlSoSc" runat="server" CssClass="inputitem">
                                                                        <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        <asp:ListItem Value="10">A1</asp:ListItem>
                                                                        <asp:ListItem Value="9">A2</asp:ListItem>
                                                                        <asp:ListItem Value="8">B1</asp:ListItem>
                                                                        <asp:ListItem Value="7">B2</asp:ListItem>
                                                                        <asp:ListItem Value="6">C1</asp:ListItem>
                                                                        <asp:ListItem Value="5">C2</asp:ListItem>
                                                                        <asp:ListItem Value="4">D</asp:ListItem>
                                                                        <asp:ListItem Value="2">E1</asp:ListItem>
                                                                        <asp:ListItem Value="1">E2</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC"
                                                            id="tblKERALA" style="display: none;">
                                                            <tr>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                    <strong>Grade</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                    <strong>English</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                    <strong>Mathematics</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                    <strong>Science</strong>
                                                                </td>
                                                                <td bgcolor="#666666" class="whitetxt">
                                                                    <strong>Social Science</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:DropDownList ID="ddlTGrade" runat="server" CssClass="inputitem">
                                                                        <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        <asp:ListItem Value="10">A+</asp:ListItem>
                                                                        <asp:ListItem Value="9">A</asp:ListItem>
                                                                        <asp:ListItem Value="8">B+</asp:ListItem>
                                                                        <asp:ListItem Value="7">B</asp:ListItem>
                                                                        <asp:ListItem Value="6">C+</asp:ListItem>
                                                                        <asp:ListItem Value="5">C</asp:ListItem>
                                                                        <asp:ListItem Value="4">D+</asp:ListItem>
                                                                        <asp:ListItem Value="3">D</asp:ListItem>
                                                                        <asp:ListItem Value="1">E</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:DropDownList ID="ddlKEnglish" runat="server" CssClass="inputitem">
                                                                        <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        <asp:ListItem Value="10">A+</asp:ListItem>
                                                                        <asp:ListItem Value="9">A</asp:ListItem>
                                                                        <asp:ListItem Value="8">B+</asp:ListItem>
                                                                        <asp:ListItem Value="7">B</asp:ListItem>
                                                                        <asp:ListItem Value="6">C+</asp:ListItem>
                                                                        <asp:ListItem Value="5">C</asp:ListItem>
                                                                        <asp:ListItem Value="4">D+</asp:ListItem>
                                                                        <asp:ListItem Value="3">D</asp:ListItem>
                                                                        <asp:ListItem Value="1">E</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:DropDownList ID="ddlKMath" runat="server" CssClass="inputitem">
                                                                        <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        <asp:ListItem Value="10">A+</asp:ListItem>
                                                                        <asp:ListItem Value="9">A</asp:ListItem>
                                                                        <asp:ListItem Value="8">B+</asp:ListItem>
                                                                        <asp:ListItem Value="7">B</asp:ListItem>
                                                                        <asp:ListItem Value="6">C+</asp:ListItem>
                                                                        <asp:ListItem Value="5">C</asp:ListItem>
                                                                        <asp:ListItem Value="4">D+</asp:ListItem>
                                                                        <asp:ListItem Value="3">D</asp:ListItem>
                                                                        <asp:ListItem Value="1">E</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:DropDownList ID="ddlKScience" runat="server" CssClass="inputitem">
                                                                        <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        <asp:ListItem Value="10">A+</asp:ListItem>
                                                                        <asp:ListItem Value="9">A</asp:ListItem>
                                                                        <asp:ListItem Value="8">B+</asp:ListItem>
                                                                        <asp:ListItem Value="7">B</asp:ListItem>
                                                                        <asp:ListItem Value="6">C+</asp:ListItem>
                                                                        <asp:ListItem Value="5">C</asp:ListItem>
                                                                        <asp:ListItem Value="4">D+</asp:ListItem>
                                                                        <asp:ListItem Value="3">D</asp:ListItem>
                                                                        <asp:ListItem Value="1">E</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:DropDownList ID="ddlKSoSc" runat="server" CssClass="inputitem">
                                                                        <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        <asp:ListItem Value="10">A+</asp:ListItem>
                                                                        <asp:ListItem Value="9">A</asp:ListItem>
                                                                        <asp:ListItem Value="8">B+</asp:ListItem>
                                                                        <asp:ListItem Value="7">B</asp:ListItem>
                                                                        <asp:ListItem Value="6">C+</asp:ListItem>
                                                                        <asp:ListItem Value="5">C</asp:ListItem>
                                                                        <asp:ListItem Value="4">D+</asp:ListItem>
                                                                        <asp:ListItem Value="3">D</asp:ListItem>
                                                                        <asp:ListItem Value="1">E</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr  style="display: none;">
                                                    <td valign="top" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="Label4">
                                                                b.</label>
                                                        </strong>
                                                    </td>
                                                    <td colspan="2">
                                                        <label id="Label5">
                                                            Have you passed 10th Board Exam Compartmentally or through Improvement Examination?
                                                        <br />
                                                            &#2325;&#2381;&#2351;&#2366; &#2309;&#2346;&#2344;&#2375; &#2342;&#2360;&#2357;&#2368;
                                                        &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2346;&#2370;&#2352;&#2325;-&#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                        &#2309;&#2341;&#2357;&#2366; &#2360;&#2350;&#2369;&#2344;&#2381;&#2344;&#2340; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                        &#2350;&#2375;&#2306; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368;
                                                        &#2361;&#2376;&#2306; ?</label>
                                                        <asp:Label ID="lblCompartmental" runat="server" Text="No/&#2344;&#2361;&#2368;&#2306; " />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3" valign="top">
                                                        <div class="tablebdercaf">
                                                            <table width="100%" border="0" cellspacing="1" cellpadding="2" id="tblComp" runat="server"
                                                                bgcolor="#CCCCCC">
                                                                <tr>
                                                                    <td bgcolor="#666666" class="whitetxt">
                                                                        <strong>Name of the Subject</strong>
                                                                    </td>
                                                                    <td bgcolor="#666666" class="whitetxt">
                                                                        <strong>Fail Mark in Previous Exam</strong>
                                                                    </td>
                                                                    <td bgcolor="#666666" class="whitetxt" id="td1">
                                                                        <strong>Pass Mark in Compartment Exam</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <strong>
                                                                            <asp:Label CssClass="inputitem" ID="txtCompSubject1" runat="server" Width="150" maxlength="50" />
                                                                        </strong>
                                                                    </td>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <strong>
                                                                            <asp:Label CssClass="inputitem" ID="txtCompFMark1" runat="server" Width="30" maxlength="3" />
                                                                        </strong>
                                                                    </td>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <strong>
                                                                            <asp:Label CssClass="inputitem" ID="txtCompPMark1" runat="server" Width="30" maxlength="3" />
                                                                        </strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <strong>
                                                                            <asp:Label CssClass="inputitem" ID="txtCompSubject2" runat="server" Width="150" maxlength="50" />
                                                                        </strong>
                                                                    </td>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <strong>
                                                                            <asp:Label CssClass="inputitem" ID="txtCompFMark2" runat="server" Width="30" maxlength="3" />
                                                                        </strong>
                                                                    </td>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <strong>
                                                                            <asp:Label CssClass="inputitem" ID="txtCompPMark2" runat="server" Width="30" maxlength="3" />
                                                                        </strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <strong>
                                                                            <asp:Label CssClass="inputitem" ID="txtCompSubject3" runat="server" Width="150" maxlength="50" />
                                                                        </strong>
                                                                    </td>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <strong>
                                                                            <asp:Label CssClass="inputitem" ID="txtCompFMark3" runat="server" Width="30" maxlength="3" />
                                                                        </strong>
                                                                    </td>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <strong>
                                                                            <asp:Label CssClass="inputitem" ID="txtCompPMark3" runat="server" Width="30" maxlength="3" />
                                                                        </strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <asp:Label CssClass="inputitem" ID="txtCompSubject4" runat="server" Width="150" maxlength="50" />
                                                                    </td>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <asp:Label CssClass="inputitem" ID="txtCompFMark4" runat="server" Width="30" maxlength="3" />
                                                                    </td>
                                                                    <td bgcolor="#F8F5D6">
                                                                        <asp:Label CssClass="inputitem" ID="txtCompPMark4" runat="server" Width="30" maxlength="3" />
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
            <tr>
                <td height="10"></td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="2" cellspacing="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td colspan="2">
                                            <strong>
                                                <asp:Label ID="lblN71" runat="server">
                                            6. 
                                                </asp:Label>
                                                &nbsp;&nbsp;&nbsp;
                                            <label id="lblEduins">
                                                Record of educational institution last attended from which you have passed 10th
                                                Examination<br />
                                                &#2310;&#2346;&#2344;&#2375; &#2332;&#2367;&#2360; &#2360;&#2381;&#2325;&#2370;&#2354;
                                                &#2360;&#2375; &#2342;&#2360;&#2357;&#2368; &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376; &#2313;&#2360;&#2325;&#2368;
                                                &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                            </label>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="2%"></td>
                                        <td>
                                            <table width="100%" border="0" cellspacing="1" cellpadding="0">
                                                <tr>
                                                    <td>
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td width="2%" height="25" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN71a">
                                                                            a.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td width="12%" height="22">
                                                                    <label id="lblSchNm">
                                                                        Name of the School/
                                                                    <br />
                                                                        &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                    </label>
                                                                </td>
                                                                <td width="17%">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblSchName" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td width="2%" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN71b">
                                                                            b.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td width="12%">
                                                                    <label id="lblschlo">
                                                                        Address of the School/
                                                                    <br />
                                                                        &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2325;&#2366; &#2346;&#2340;&#2366;
                                                                    </label>
                                                                </td>
                                                                <td width="24%">
                                                                    <div class="sqborder1" style="width: 200px;">
                                                                        <asp:Label ID="lblschloc" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td width="2%" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN71c">
                                                                            c.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td width="10%">
                                                                    <label id="lblinstdist">
                                                                        District/
                                                                    <br />
                                                                        &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375; &#2350;&#2375;&#2306; &#2310;&#2346;&#2325;&#2366;
                                                                    &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2361;&#2376;
                                                                    </label>
                                                                </td>
                                                                <td width="21%">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lbllinsdist" runat="server" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="25" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN71d">
                                                                            d.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td height="22">
                                                                    <label id="lblYOJ1">
                                                                        Year of Joining/
                                                                    <br />
                                                                        &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2313;&#2360;
                                                                    &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2350;&#2375;&#2306; &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344;
                                                                    &#2354;&#2367;&#2351;&#2366; &#2341;&#2366; |
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblYOJ" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN71e">
                                                                            e.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td>
                                                                    <label id="lblYOL1">
                                                                        Year of passing from School
                                                                    <br />
                                                                        &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351;
                                                                    &#2360;&#2375; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                                    &#2325;&#2368; &#2361;&#2376;|
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <div class="sqborder1" style="width: 100px;">
                                                                        <asp:Label ID="lblYOL" runat="server" />
                                                                    </div>
                                                                </td>
                                                                 <td height="25" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN71f">
                                                                            f.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td height="22">
                                                                    <label id="lblKGBAC">
                                                                       Have you passed 10th exam as a student of Kasturba Gandhi Balika Vidyalaya?
                                                                <br /> 
                                                                क्या आपने दसवीं की परीक्षा कस्तूरबा गाँधी आवासीय बालिका छात्रावास में रहते हुए उत्तीर्ण की है ? 
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblKGBAC1" runat="server" />
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
                <td height="10"></td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="2" cellspacing="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td colspan="2">
                                            <strong>
                                                <label id="lblN5">
                                                    7.
                                                </label>
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>
                                                <label id='lblPD'>
                                                    Personal Details
                                                <br />
                                                    &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                                </label>
                                            </strong>
                                        </td>
                                        <td>
                                            <table width="100%" border="0" cellpadding="2" cellspacing="0" class="dotBorder">
                                                <tr>
                                                    <td width="20%">
                                                        <label id="lblGender">
                                                            Gender / &#2354;&#2367;&#2306;&#2327;
                                                        </label>
                                                    </td>
                                                    <td width="20%">
                                                        <label id="lblmt1">
                                                            Mother Tongue / &#2350;&#2366;&#2340;&#2371;&#2349;&#2366;&#2359;&#2366;
                                                        </label>
                                                    </td>
                                                    <td width="20%">
                                                        <label id="Label1">
                                                            Nationality / &#2344;&#2366;&#2327;&#2352;&#2367;&#2325;&#2340;&#2366;
                                                        </label>
                                                    </td>
                                                    <td width="20%">
                                                        <label id="lblReligion">
                                                            Religion / &#2343;&#2352;&#2381;&#2350;
                                                        </label>
                                                    </td>
                                                    <td width="20%">
                                                        <label id="lblBloodGroup">
                                                            Blood Group / &#2352;&#2325;&#2381;&#2340; &#2360;&#2350;&#2370;&#2361;
                                                        </label>
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
                                                            <asp:Label ID="lblmt" runat="server" />
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
                <td height="10"></td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="2" cellspacing="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td colspan="2">
                                            <strong>
                                                <label id="lblN6">
                                                    8.
                                                </label>
                                                &nbsp;&nbsp;&nbsp;
                                            <label id="lbladd">
                                                Address for Correspondence / &#2346;&#2340;&#2381;&#2352;&#2366;&#2330;&#2366;&#2352;
                                                &#2325;&#2366; &#2346;&#2340;&#2366;
                                            </label>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="2%"></td>
                                        <td>
                                            <table width="100%" border="0" cellspacing="1" cellpadding="0">
                                                <tr>
                                                    <td>
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td width="2%" height="25" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN6a">
                                                                            a.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td width="12%" height="22">
                                                                    <label id="lblState">
                                                                        State / &#2352;&#2366;&#2332;&#2381;&#2351;
                                                                    </label>
                                                                </td>
                                                                <td width="17%">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblstate" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td width="2%">&nbsp;
                                                                </td>
                                                                <td width="2%" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN6b">
                                                                            b.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td width="8%">
                                                                    <label id="lblDistrict">
                                                                        District / &#2332;&#2367;&#2354;&#2366;
                                                                    </label>
                                                                </td>
                                                                <td width="24%">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lbldist" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td width="2%" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN6c">
                                                                            c.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td width="10%">
                                                                    <label id="lblBlock">
                                                                        Block / ULB
                                                                    <br />
                                                                        &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; / &#2344;&#2327;&#2352; &#2346;&#2352;&#2367;&#2359;&#2342;&#2381;
                                                                    &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;
                                                                    </label>
                                                                </td>
                                                                <td width="21%">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblulb" runat="server" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="25" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN6d">
                                                                            d.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td height="22" colspan="2">
                                                                    <label id="lbladdress">
                                                                        House No., Street/Village, Post Office, Police Station Name
                                                                    <br />
                                                                        &#2309;&#2346;&#2344;&#2368; &#2350;&#2325;&#2366;&#2344; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366;
                                                                    /&#2360;&#2396;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350; /&#2327;&#2366;&#2305;&#2357;
                                                                    &#2325;&#2366; &#2344;&#2366;&#2350; /&#2346;&#2379;&#2360;&#2381;&#2335; &#2321;&#2347;&#2367;&#2360;
                                                                    &#2319;&#2357;&#2350; &#2346;&#2369;&#2354;&#2367;&#2360; &#2341;&#2366;&#2344;&#2366;
                                                                    </label>
                                                                </td>
                                                                <td colspan="4">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lbldtl" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN6e">
                                                                            e.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td>
                                                                    <label id="lblPinNo">
                                                                        PIN Code
                                                                    <br />
                                                                        &#2331;&#2361; &#2309;&#2306;&#2325;&#2379; &#2325;&#2366; &#2346;&#2367;&#2344;
                                                                    &#2325;&#2379;&#2337;
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblpin" runat="server" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN6g">
                                                                            f.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td>
                                                                    <label id="lblMobileNo">
                                                                        Mobile No.<br />
                                                                        &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblmob" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                                <td align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN6h">
                                                                            g.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td>
                                                                    <label id="lblEmail">
                                                                        e-Mail<br />
                                                                        &#2312;-&#2350;&#2375;&#2354;
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblemail" runat="server" />
                                                                    </div>
                                                                </td>
                                                                <td height="25" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="lblN6f">
                                                                            h.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td height="22">
                                                                    <label id="lbltelephone">
                                                                        Telephone No.
                                                                    <br />
                                                                        &#2309;&#2327;&#2352; &#2342;&#2370;&#2352;&#2349;&#2366;&#2359; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366;
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td width="29%" height="30">
                                                                                <div class="sqborder1">
                                                                                    <asp:Label ID="lblAreaCode" runat="server" />
                                                                                </div>
                                                                            </td>
                                                                            <td width="3%">&nbsp;
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
                                                            <tr>
                                                                <td align="center" bgcolor="#1567A1" class="whitetxt">
                                                                    <strong>
                                                                        <label id="">
                                                                            i.
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Aadhaar No.
                                                                    </label>
                                                                </td>
                                                                <td colspan="8">
                                                                    <div class="sqborder1">
                                                                        <asp:Label ID="lblAadhaarNo" runat="server" />
                                                                        
                                                                    </div>
                                                                        <asp:CheckBox ID="cbAadharAgree1" runat="server" Checked="true" Visible="false" />
                                                                        <asp:Label id="lblAadharConf" runat="server" visible="false" Text="I, hereby declare that I have not enrolled in Aadhaar and have not got any Aadhaar number. I also understand that any false declaration made by me may have consequence of cancellation of my candidature."/>

                                                                        
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
                <td height="10"></td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="2" cellspacing="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td colspan="2">
                                            <strong>
                                                <label id="lblN7">
                                                    9.
                                                </label>
                                                &nbsp;&nbsp;&nbsp;
                                            <label id="lblReservation">
                                                Reservation Details / &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2325;&#2368;
                                                &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                            </label>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="2%"></td>
                                        <td>
                                            <table width="100%" border="0" cellspacing="1" cellpadding="0">
                                                <tr>
                                                    <td width="2%" height="30" align="center" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN7a">
                                                                a.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td height="30">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td>&nbsp; <span id="GENERAL">General<br />
                                                                    &#2360;&#2366;&#2350;&#2366;&#2344;&#2381;&#2351; &#2357;&#2352;&#2381;&#2327;</span>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label runat="server" ID="lblGeneral"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td height="30">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td>&nbsp;
                                                                <label id="SC">
                                                                    <span id="Span3">Schedule Caste (SC)<br />
                                                                        &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340; &#2332;&#2366;&#2340;&#2367;</span>
                                                                </label>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label runat="server" ID="lblSC"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td height="30">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td>&nbsp;
                                                                <label id="ST">
                                                                    <span id="Span2">Schedule Tribe (ST)<br />
                                                                        &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340; &#2332;&#2344;&#2332;&#2366;&#2340;&#2367;</span>
                                                                </label>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        &nbsp;<asp:Label runat="server" ID="lblST"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td bgcolor="#1567A1"></td>
                                                    <td height="30">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td>&nbsp;
                                                                <label id="OBC">
                                                                    <span id="Span4">Backward Class(BC)<br />
                                                                        &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327;</span>
                                                                </label>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label runat="server" ID="lblOBC"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td height="30">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td>&nbsp;
                                                                <label id="OTHER">
                                                                    <span id="Span5">Extremly Backward Class (EBC)<br />
                                                                        &#2309;&#2340;&#2381;&#2351;&#2306;&#2340; &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327;
                                                                    </span>
                                                                </label>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label runat="server" ID="lblOther"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td height="30">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder" style="display: none;">
                                                            <tr>
                                                                <td>&nbsp;
                                                                <label id="Label6">
                                                                    <span id="Span1">Women Backward Class (WBC)<br />
                                                                        &#2346;&#2367;&#2331;&#2396;&#2375; &#2357;&#2352;&#2381;&#2327; &#2325;&#2368;
                                                                        &#2350;&#2361;&#2367;&#2354;&#2366;&#2351;&#2375; </span>
                                                                </label>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label runat="server" ID="lblWBC"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="30" width="2%" align="center" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN7b">
                                                                b.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td height="30" colspan="2">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td>&nbsp;
                                                                <label id="PHOH">
                                                                    <span id="Span6">Specially Abled ( &#2342;&#2367;&#2357;&#2381;&#2351;&#2366;&#2306;&#2327;
                                                                        )</span>
                                                                </label>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label runat="server" ID="lblPHOH"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="30" align="center" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN7c">
                                                                c.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td height="30" width="24%" style="display: none;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder"
                                                            style="display: none;">
                                                            <tr>
                                                                <td>
                                                                    <label id="ESM">
                                                                        Ex-Service Man (ESM)
                                                                    </label>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label runat="server" ID="lblESM"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td width="21%" height="30" style="display: none;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td>
                                                                    <label id="CoM">
                                                                        Children of Martyrs (CoM)
                                                                    </label>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label runat="server" ID="lblCoM"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td width="29%" height="30" style="display: none">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td>
                                                                    <label id="SDP">
                                                                        Serving Defence Personnel (SDP)
                                                                    </label>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label runat="server" ID="lblSDP"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td height="30" colspan="2">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                            <tr>
                                                                <td>&nbsp;
                                                                <label id="Label7">
                                                                    <span id="Span7">EWS (Economically Weaker Section) </span>
                                                                </label>
                                                                </td>
                                                                <td width="35px" height="30">
                                                                    <div class="sqborder1">
                                                                        <asp:Label runat="server" ID="lblEWS"></asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <%--<td width="29%" height="30" >
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td>
                                                                <label id="Label7">
                                                                    None
                                                                </label>
                                                            </td>
                                                            <td width="35px" height="30" >
                                                                <div class="sqborder1">
                                                                    <asp:Label runat="server" ID="lblNone"></asp:Label></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>--%>
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
                <td height="10"></td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="2" cellspacing="0" class="tbborderCAF">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="2" style="display: none;">
                                    <tr>
                                        <td width="2%">
                                            <strong>
                                                <label id="lblN8">
                                                    10.
                                                </label>
                                            </strong>
                                        </td>
                                        <td width="98%">
                                            <strong>
                                                <label id="lblWeightage">
                                                    Weightage Details / &#2350;&#2361;&#2340;&#2381;&#2357; &#2357;&#2367;&#2357;&#2352;&#2339;
                                                </label>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="2%"></td>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF">
                                                <tr>
                                                    <td width="25%" valign="top">
                                                        <div class="tablebdercaf">
                                                            <table width="100%" border="0" cellpadding="2" cellspacing="0">
                                                                <tr>
                                                                    <td width="13%" bgcolor="#1567A1" class="whitetxt" colspan="4">
                                                                        <strong>
                                                                            <label id="lblN8a">
                                                                                a.
                                                                            </label>
                                                                            &nbsp; <span id="NCC">NCC </span></strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#FFFFFF">
                                                                        <label id="NCCA">
                                                                            NCC (A)
                                                                        </label>
                                                                    </td>
                                                                    <td height="28" bgcolor="#FFFFFF" class="smlfont" width="35px">
                                                                        <strong>
                                                                            <asp:Label runat="server" ID="lblNccA"></asp:Label></strong>
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" style="display: none;">
                                                                        <label id="NCCC">
                                                                            NCC (C)
                                                                        </label>
                                                                    </td>
                                                                    <td width="35px" bgcolor="#FFFFFF" class="smlfont" style="display: none;">
                                                                        <strong>
                                                                            <asp:Label runat="server" ID="lblNccC"></asp:Label></strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td width="1%" valign="top">&nbsp;
                                                    </td>
                                                    <td width="43%" valign="top">
                                                        <div class="tablebdercaf">
                                                            <table width="100%" border="0" cellpadding="2" cellspacing="0" style="display: none;">
                                                                <tr>
                                                                    <td bgcolor="#1567A1" class="whitetxt" colspan="4">
                                                                        <strong>
                                                                            <label id="lblN8b">
                                                                                b.
                                                                            </label>
                                                                            &nbsp;
                                                                        <label id='lblscout'>
                                                                            Scout &amp; Guide
                                                                        </label>
                                                                        </strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#FFFFFF" height="28px">
                                                                        <label id="RP">
                                                                            Rajya Puraskar(RP)
                                                                        </label>
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" width="35px">
                                                                        <strong>
                                                                            <asp:Label ID="lblRP" runat="server"></asp:Label></strong>
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF">
                                                                        <label id="PR">
                                                                            President Recognition(PR)
                                                                        </label>
                                                                    </td>
                                                                    <td width="35px" bgcolor="#FFFFFF">
                                                                        <strong>
                                                                            <asp:Label ID="lblPR" runat="server"></asp:Label></strong>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td width="1%" valign="top">&nbsp;
                                                    </td>
                                                    <td width="30%" valign="top" class="tablebdercaf">
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="0" style="display: none;">
                                                            <tr>
                                                                <td bgcolor="#1567A1" class="whitetxt" colspan="6">
                                                                    <strong>
                                                                        <label id="lblN8c">
                                                                            c.
                                                                        </label>
                                                                        &nbsp;
                                                                    <label id='sport'>
                                                                        Sports
                                                                    </label>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#FFFFFF">
                                                                    <label id="SportS">
                                                                        State
                                                                    </label>
                                                                </td>
                                                                <td height="28" bgcolor="#FFFFFF" width="35px">
                                                                    <strong>
                                                                        <asp:Label runat="server" ID="lblSportsS"></asp:Label></strong>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <label id="SportN">
                                                                        National
                                                                    </label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" width="35px">
                                                                    <strong>
                                                                        <asp:Label runat="server" ID="lblSportsN"></asp:Label></strong>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <label id="SportIN">
                                                                        International
                                                                    </label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" width="35px">
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
                <td height="10"></td>
            </tr>
            <tr>
                <td bgcolor="#FFFFFF">
                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="tbborderCAF"
                        style="display: none;">
                        <tr>
                            <td height="22">
                                <strong>
                                    <label id="lblN10">
                                        11.
                                    </label>
                                    &nbsp;&nbsp;
                                <label id="lbloption">
                                    Option(s)/Choice(s) Details / &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;/&#2330;&#2369;&#2344;&#2366;&#2357;
                                    &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                </label>
                                </strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="viewTable">
                                    <table width="100%" cellpadding="2" cellspacing="1" id="tableOption">
                                        <tr>
                                            <td bgcolor="#666666">
                                                <strong class="whitetxt">Sl.No</strong>
                                            </td>
                                            <td bgcolor="#666666">
                                                <strong class="whitetxt">College</strong>
                                            </td>
                                            <td bgcolor="#666666">
                                                <strong class="whitetxt">Stream</strong>
                                            </td>
                                            <td bgcolor="#666666" style="display: none;">
                                                <strong class="whitetxt">Compulsory</strong>
                                            </td>
                                            <td bgcolor="#666666" style="display: none;">
                                                <strong class="whitetxt">Elective</strong>
                                            </td>
                                            <td bgcolor="#666666" style="display: none;">
                                                <strong class="whitetxt">Fourth Elective</strong>
                                            </td>
                                            <%-- <td bgcolor="#666666">
                                            <strong class="whitetxt">Hostel Option</strong>
                                        </td>--%>
                                        </tr>
                                        <tbody bgcolor="#FFFFFF">
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center" style="height: 19px">
                    <div>
                        <p>
                            Click on &#8220;Confirm&#8221;, You will receive an OTP on your given Mobile no.
                        and E-mail ID, enter the OTP on the next screen, then only your application get
                        confirmed. "Confirm" &#2348;&#2335;&#2344; &#2346;&#2352; &#2325;&#2381;&#2354;&#2367;&#2325;
                        &#2325;&#2352;&#2344;&#2375; &#2325;&#2375; &#2348;&#2366;&#2342; &#2310;&#2346;&#2325;&#2375;
                        &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352; &#2346;&#2352;
                        &#2319;&#2325; OTP (One Time Password) &#2349;&#2375;&#2332;&#2366; &#2332;&#2366;&#2319;&#2327;&#2366;
                        |&#2309;&#2346;&#2344;&#2375; &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2350;&#2375;&#2306;
                        &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340; OTP &#2325;&#2379; &#2309;&#2327;&#2354;&#2375;
                        &#2360;&#2381;&#2325;&#2381;&#2352;&#2368;&#2344; &#2350;&#2375;&#2306; &#2337;&#2366;&#2354;&#2375;,
                        &#2313;&#2360;&#2325;&#2375; &#2348;&#2366;&#2342; &#2361;&#2368; &#2310;&#2346;&#2325;&#2366;
                        &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352; &#2360;&#2340;&#2381;&#2351;&#2366;&#2346;&#2367;&#2340;
                        &#2361;&#2379;&#2327;&#2366; &#2319;&#2357;&#2306; &#2313;&#2360;&#2325;&#2375;
                        &#2346;&#2358;&#2381;&#2330;&#2366;&#2340; &#2361;&#2368; &#2310;&#2346; &#2310;&#2357;&#2381;&#2344;&#2381;&#2342;&#2344;
                        &#2358;&#2369;&#2354;&#2381;&#2325; &#2332;&#2350;&#2366; &#2325;&#2325;&#2352;
                        &#2346;&#2366;&#2351;&#2375;&#2306;&#2327;&#2375; | &#2310;&#2357;&#2375;&#2342;&#2344;
                        &#2358;&#2369;&#2354;&#2381;&#2325; &#2332;&#2350;&#2366; &#2325;&#2352;&#2344;&#2375;
                        &#2325;&#2375; &#2348;&#2366;&#2342; &#2361;&#2368; &#2310;&#2346;&#2325;&#2366;
                        &#2310;&#2357;&#2375;&#2342;&#2344; &#2325;&#2344;&#2381;&#2347;&#2352;&#2381;&#2350;
                        &#2350;&#2344; &#2332;&#2366;&#2351;&#2375;&#2327;&#2366; |
                        </p>
                    </div>
                    <asp:Button CssClass="submitBtn" ID="btnSave" runat="server" Text="Confirm" OnClientClick="return saveData();"
                        OnClick="btnSave_Click" />
                    &nbsp;
                <asp:Button CssClass="submitBtn" ID="btnBack" runat="server" Text="Back To Modify"
                    OnClick="btnBack_Click" />
                    <div id="divmsg" style="display: none; color: Red">
                        <strong>Saving your Application. Please wait...</strong>
                    </div>
                </td>
            </tr>
        </table>
    </form>
    <script type="text/javascript">
        ConfirmOptions(); showCGPA();
    </script>
</body>
</html>
