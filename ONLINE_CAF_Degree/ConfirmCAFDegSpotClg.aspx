<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ConfirmCAFDegSpotClg.aspx.cs" Inherits="ONLINE_CAF_Degree_ConfirmCAFClg"
    EnableEventValidation="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Confirm CAF</title>
    <link href="../style/CAF.css" rel="stylesheet" type="text/css" />
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link href="../style/chromestyle.css" type="text/css" />
    <script type="text/javascript">
        function preventBack() { window.history.forward(); }
        setTimeout("preventBack()", 0);
        window.onunload = function () { null };
    </script>
    <script language="javascript" type="text/javascript">
        textcolours = new Array('#000000', '#FF0000', '#000000', '#FF0000', '#000000', '#FF0000');
        function flashtext() {
            var colour = Math.round(textcolours.length * Math.random());
            document.getElementById('flashingtext').style.color = textcolours[colour];
        }
        setInterval('flashtext()', 80);
    </script>
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
        
        .countdwnrtxt2
        {
            padding-top: 5px;
            font-family: Arial, Helvetica, sans-serif;
            text-decoration: none;
            color: #000000;
            font-size: 14px;
            font-weight: bold;
        }
        
        .inputitem
        {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: normal;
            color: #000000;
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
        
        .img-brdr img
        {
            border: 1px solid #CCCCCC !important;
            padding: 3px;
        }
    </style>
    <style type="text/css">
        body
        {
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            border: none;
            margin-top: 5px;
        }
        .redbold1
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 30px;
            font-weight: bold;
            color: #C60000;
            text-decoration: none;
        }
    </style>
    <script type="text/javascript" language="javascript">
        //        var message = "Right click disabled";
        //        function RightClickDisable(keyp) {
        //            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && (event.button == 2)) //Google chrome browser
        //            { alert(message); return false; }
        //            if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) //Microsoft IE browser
        //            {
        //                alert(message); return false;
        //            }
        //        }
        //document.onmousedown = RightClickDisable;
        function show(subId) {
            document.getElementById(subId).style.display = ""
        }

        function hide(subId) {
            document.getElementById(subId).style.display = "none"
        }
        function showHideChem() {
            var stream = '<%=strStream%>';
            if ((stream == 1) || (stream == 3) || (stream == 6)) {
//                document.getElementById('tdChemH').style.display = "none";
//                document.getElementById('tdChemB').style.display = "none";
//                document.getElementById('tdMathH').style.display = "none";
//                document.getElementById('tdMathB').style.display = "none";
//                document.getElementById('tdBiologyH').style.display = "none";
//                document.getElementById('tdBiologyB').style.display = "none";
            }
            else {
//                document.getElementById('tdChemH').style.display = "";
//                document.getElementById('tdChemB').style.display = "";
//                document.getElementById('tdMathH').style.display = "";
//                document.getElementById('tdMathB').style.display = "";
//                document.getElementById('tdBiologyH').style.display = "";
//                document.getElementById('tdBiologyB').style.display = "";
            }
        }
        function saveData() {
            if (confirm('Have you verified your form ?')) {
                if (confirm('Do you want to confirm this ?')) {
                    document.getElementById('btnSave').style.display = "none";
                    document.getElementById('btnBack').style.display = "none";
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

        function check() {
            if (event.keyCode == 93) {
                alert('Not allowed');
                return false;
            }
        }

        var message = "Right Click Disabled";
        function RightClickDisable(keyp) {
            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && (event.button == 2)) //Google chrome browser
            { alert(message); return false; }
            if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) //Microsoft IE browser
            {
                alert(message); return false;
            }
        }
        document.onmousedown = RightClickDisable;
    </script>
    <script language="javascript" type="text/javascript" src="../js/Common_DegSpotclg.js"></script>
</head>
<body onload="showHideChem();ConfirmOptions();" style="background-color: #f7f7f7;">
    <form id="form1" runat="server">
    <asp:HiddenField ID="hidCollege" runat="server" />
    <asp:HiddenField ID="hidCname" runat="server" />
    <asp:HiddenField ID="hidStream" runat="server" />
    <asp:HiddenField ID="hidSname" runat="server" />
    <asp:HiddenField ID="hidE1name" runat="server" />
    <asp:HiddenField ID="hidElective1" runat="server" />
    <asp:HiddenField ID="hidE2name" runat="server" />
    <asp:HiddenField ID="hidElective2" runat="server" />
    <asp:HiddenField ID="hidElective3" runat="server" />
    <asp:HiddenField ID="hidE3name" runat="server" />
    <asp:HiddenField ID="hidHostel" runat="server" />
    <asp:HiddenField ID="hidPhoto" runat="server" />
    <asp:HiddenField ID="hidStreamPref" runat="server" />
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
    <asp:HiddenField ID="strFontOption" runat="server" />
    <asp:HiddenField ID="strFontOSAOLNS" runat="server" />
    <asp:HiddenField ID="hdnVal" runat="server" />
    <asp:HiddenField ID="strnat" runat="server" />
    <asp:HiddenField ID="strmt" runat="server" />
    <asp:HiddenField ID="strFocu" runat="server" />
    <asp:HiddenField ID="strMocu" runat="server" />
    <asp:HiddenField ID="strinsdist" runat="server" />
    <asp:HiddenField ID="stryoj" runat="server" />
    <asp:HiddenField ID="stryol" runat="server" />
    <asp:HiddenField ID="strAIncome" runat="server" />
    <asp:HiddenField ID="strAIncomeval" runat="server" />
    <%--<asp:HiddenField ID="strImageName" runat="server" />--%>
    <table width="850" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
            <td>
                <div style="padding: 2px; width: 950px; margin: auto; background: #fff;">
                    <table width="100%" border="0" class="dotBorder" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="93" align="center">
                                <img src="../images/Logo.png" width="77" height="83" />
                            </td>
                            <td valign="top">
                                <table width="90%" border="0" align="right" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td height="30" align="center" class="style2">
                                            <span class="CAFheading" id="common">Common Application Form</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="22" align="center" class="style2">
                                            <label id="adm">
                                                for Admission to Degree Colleges (2018-21)
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="5">
                                        </td>
                                    </tr>
                                    <tr>
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
                                    </tr>
                                    <tr>
                                        <td height="5">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td width="120" valign="top">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td align="center">
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" class="redbold1">
                                            <label id="lblp3">
                                                Degree
                                            </label>
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
            <td>
                <table width="100%" border="0" cellpadding="10" cellspacing="0" class="tbborderCAF">
                    <tr>
                        <td bgcolor="#FFFFFF">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td colspan="3">
                                                    <strong>
                                                        <label id="Label4">
                                                            1. Name of the Board from which you have passed the Intermediate exam.
                                                            <br />
                                                            &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2358;&#2367;&#2325;&#2381;&#2359;&#2366;
                                                            &#2325;&#2380;&#2306;&#2360;&#2367;&#2354; &#2360;&#2375; &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335;
                                                            &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                            &#2325;&#2368; &#2361;&#2376; |
                                                        </label>
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td bgcolor="#FFFFFF">
                                                                <label id="lblCouncilName">
                                                                    Name of the Examination Council
                                                                </label>
                                                            </td>
                                                            <td width="5px">
                                                            </td>
                                                            <td width="85">
                                                                <label id="lblYOP">
                                                                    Year of Passing
                                                                </label>
                                                            </td>
                                                            <td width="5px">
                                                            </td>
                                                            <td width="85">
                                                                <label id="lblExamtype">
                                                                    Exam Type
                                                                </label>
                                                            </td>
                                                            <td width="5px">
                                                            </td>
                                                            <td width="85">
                                                                Date Of Birth
                                                            </td>
                                                            <td width="5px">
                                                            </td>
                                                            <td id="tdRollCdH" runat="server" width="85">
                                                                Roll Code
                                                            </td>
                                                            <td width="5px">
                                                            </td>
                                                            <td width="85">
                                                                <label id="lblrollnumber">
                                                                    Roll Number
                                                                </label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td bgcolor="#FFFFFF">
                                                                <div class="sqborder1" style="height: auto;">
                                                                    <asp:Label ID="lblBoard" runat="server" />
                                                                    
                                                                </div> <div class="sqborder1" style="height: auto;" id="divOU" runat="server" >
                                                                <asp:Label ID="lblUniversity" runat="server" ></asp:Label></div>
                                                            </td>
                                                            <td width="5px">
                                                            </td>
                                                            <td>
                                                                <div class="sqborder1">
                                                                    <asp:Label ID="lblYOE" runat="server" />
                                                                </div>
                                                            </td>
                                                            <td width="5px">
                                                            </td>
                                                            <td>
                                                                <div class="sqborder1">
                                                                    <asp:Label ID="lblExamType" runat="server" />
                                                                </div>
                                                            </td>
                                                            <td width="5px">
                                                            </td>
                                                            <td class="sqborder1">
                                                                <asp:Label ID="lblDob" runat="server" Width="125px" />
                                                            </td>
                                                            <td width="5px">
                                                            </td>
                                                            <td id="tdRollCdF" runat="server">
                                                                <div class="sqborder1">
                                                                    <asp:Label ID="lblRollCode" runat="server" Width="125px" />
                                                                </div>
                                                            </td>
                                                            <td width="5px">
                                                            </td>
                                                            <td>
                                                                <div class="sqborder1">
                                                                    <asp:Label ID="lblRoll" runat="server" Width="125px" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="700" valign="top">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td colspan="4" bgcolor="#FFFFFF">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                                    <tr>
                                                                        <td width="4%">
                                                                            <strong>
                                                                                <label id="lblN2">
                                                                                    2.
                                                                                </label>
                                                                            </strong>
                                                                        </td>
                                                                        <td width="16%" height="22">
                                                                            <strong>
                                                                                <label id="lblApplicantName">
                                                                                    Applicant's Name &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                </label>
                                                                            </strong>
                                                                        </td>
                                                                        <td width="80%">
                                                                            <div class="sqborder1">
                                                                                <asp:Label ID="lblApplName" runat="server" />
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <strong>
                                                                                <label id="lblN3">
                                                                                    3.
                                                                                </label>
                                                                            </strong>
                                                                        </td>
                                                                        <td height="22">
                                                                            <strong>
                                                                                <label id="lblFname">
                                                                                    Father's Name &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2375; &#2346;&#2367;&#2340;&#2366;
                                                                                    &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                </label>
                                                                            </strong>
                                                                        </td>
                                                                        <td>
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
                                                                                    Mother's Name &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2350;&#2366;&#2340;&#2366;
                                                                                    &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                </label>
                                                                            </strong>
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
                                                <td width="125" align="center" class="img-brdr" style="padding: 5px;">
                                                    <asp:Image ID="imgPhoto" runat="server" Height="" Width="120" AlternateText="Affix your self attested (on the front) recent colour passport size photographs here" />
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
        <tr bgcolor="#FFFFFF">
            <td height="3">
                <table width="100%" border="0" cellspacing="0" cellpadding="10" class="tbborderCAF">
                    <tr>
                        <td bgcolor="#FFFFFF">
                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                <tr>
                                    <td colspan="2">
                                        <strong>
                                            <label id="lblN9">
                                                5.
                                            </label>
                                            &nbsp;
                                            <label id="lbl9">
                                                Details of Mark Secured in Intermediate Examination / 
                                                इंटरमीडिएट में प्राप्तांक विषयवार|
                                            </label>
                                        </strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="2%">
                                        &nbsp;
                                    </td>
                                    <td>
                                        <table width="100%" border="0" cellspacing="1" cellpadding="2" class="dotBorder">
                                            <tr>
                                                <td width="3%" bgcolor="#1567A1" class="whitetxt">
                                                    <strong>
                                                        <label id="lblN9a">
                                                            a.
                                                        </label>
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        <label id="lbl9a">
                                                            Stream
                                                        </label>
                                                    </strong>
                                                </td>
                                                <td>
                                                    &nbsp;<asp:Label runat="server" ID="lblPrevStream" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td bgcolor="#1567A1" class="whitetxt" rowspan="2">
                                                    <strong>
                                                        <label id="lblN9b">
                                                            b.
                                                        </label>
                                                    </strong>
                                                </td>
                                                <td width="26%">
                                                    <strong>
                                                        <label id="lbl9b">
                                                            Mark secured in each subject in Intermediate Examination
                                                            <br />
                                                            &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335; &#2350;&#2375;&#2306;
                                                            &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340; &#2357;&#2367;&#2359;&#2351;&#2357;&#2366;&#2352;
                                                            &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325; &#2344;&#2368;&#2330;&#2375;
                                                            &#2354;&#2367;&#2326;&#2375;|
                                                        </label>
                                                    </strong>
                                                </td>
                                                <td width="71%">
                                                    <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC">
                                                        <tr>
                                                            <td bgcolor="#666666" class="whitetxt">
                                                                <strong>Maximum Mark
                                                                    <br />
                                                                    &#2309;&#2343;&#2367;&#2325;&#2340;&#2350; &#2309;&#2306;&#2325; </strong>
                                                            </td>
                                                            <td bgcolor="#666666" class="whitetxt">
                                                                <strong>Total Mark Secured
                                                                    <br />
                                                                    &#2325;&#2369;&#2354; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325;</strong>
                                                            </td>
                                                            <td bgcolor="#666666" class="whitetxt" id="tdComp12" runat="server">
                                                                <strong>Compulsory(1+2)</strong>
                                                            </td>
                                                            <td bgcolor="#666666" class="whitetxt" id="tdComp3" runat="server">
                                                                <div id="divBseb" runat="server">
                                                                    <strong>
                                                                        <asp:Label ID="lblBseb" runat="server" Text="Compulsory 3"></asp:Label>
                                                                    </strong>
                                                                </div>
                                                                <div id="divOther" runat="server">
                                                                    <strong>
                                                                        <asp:Label ID="Label8" runat="server" Text="English / Hindi"></asp:Label>
                                                                    </strong>
                                                                </div>
                                                            </td>
                                                            <td bgcolor="#666666" class="whitetxt" id="tdChemH" runat="server">
                                                                <strong>Chemistry<br />
                                                                    &#2352;&#2360;&#2366;&#2351;&#2344; &#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                            </td>
                                                            <td bgcolor="#666666" class="whitetxt" id="tdMathH" runat="server">
                                                                <strong>Mathematics<br />
                                                                    &#2327;&#2339;&#2367;&#2340;</strong>
                                                            </td>
                                                            <td bgcolor="#666666" class="whitetxt" id="tdBiologyH" runat="server">
                                                                <strong>Biology<br />
                                                                    &#2332;&#2368;&#2357;&#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td bgcolor="#F8F5D6">
                                                                <strong>&nbsp;
                                                                    <asp:Label runat="server" ID="lblMaxMark"></asp:Label>
                                                                </strong>
                                                            </td>
                                                            <td bgcolor="#F8F5D6">
                                                                <strong>&nbsp;
                                                                    <asp:Label runat="server" ID="lblTotalMark"></asp:Label>
                                                                </strong>
                                                            </td>
                                                            <td bgcolor="#F8F5D6" id="tdComp12Mrk" runat="server">
                                                                <strong>&nbsp;
                                                                    <asp:Label runat="server" ID="lblMathMark"></asp:Label>
                                                                </strong>
                                                            </td>
                                                            <td bgcolor="#F8F5D6" id="tdEnglishMrk" runat="server">
                                                                <strong>&nbsp;
                                                                    <asp:Label runat="server" ID="lblEngMark"></asp:Label>
                                                                </strong>
                                                            </td>
                                                            <td bgcolor="#F8F5D6" id="tdChemB" runat="server">
                                                                <strong>&nbsp;
                                                                    <asp:Label runat="server" ID="lblScienceMark"></asp:Label>
                                                                </strong>
                                                            </td>
                                                            <td bgcolor="#F8F5D6" id="tdMathB" runat="server">
                                                                <strong>&nbsp;
                                                                    <asp:Label runat="server" ID="lblMathematics"></asp:Label>
                                                                </strong>
                                                            </td>
                                                            <td bgcolor="#F8F5D6" id="tdBiologyB" runat="server">
                                                                <strong>&nbsp;
                                                                    <asp:Label runat="server" ID="lblBiologyMark"></asp:Label>
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="MarkVerification" runat="server">
                                                    <label id="lbl9i">
                                                        Have you secured above mark in your Annual CHSE(O) examination ?
                                                    </label>
                                                </td>
                                                <td bgcolor="#FFFFFF" width="100px" id="MarkVerification1" runat="server">
                                                    <div class="sqborder1" style="width: 7%">
                                                        <asp:Label runat="server" ID="lblMarkVerification"></asp:Label>
                                                    </div>
                                                    <asp:HiddenField ID="hdnMarkVerification" runat="server" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td bgcolor="#1567A1" class="whitetxt">
                                                    <strong>
                                                        <label id="lblN9c">
                                                            c.
                                                        </label>
                                                    </strong>
                                                </td>
                                                <td colspan="2">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                        <tr>
                                                            <td width="40%">
                                                                <strong>
                                                                    <label id="lbl9c">
                                                                        Have you passed Intermediate Exam Compartmentally or through Improvement Examination?
                                                                        <br />
                                                                        &#2325;&#2381;&#2351;&#2366; &#2309;&#2346;&#2344;&#2375; &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335;
                                                                        &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2346;&#2370;&#2352;&#2325;-&#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                        &#2309;&#2341;&#2357;&#2366; &#2360;&#2350;&#2369;&#2344;&#2381;&#2344;&#2340; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                        &#2350;&#2375;&#2306; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368;
                                                                        &#2361;&#2376;&#2306; ?
                                                                    </label>
                                                                </strong>
                                                            </td>
                                                            <td width="35px" valign="top">
                                                                <div class="sqborder1">
                                                                    &nbsp;<asp:Label runat="server" ID="lblCompartmental"></asp:Label></div>
                                                            </td>
                                                            <td width="1%">
                                                                &nbsp;
                                                            </td>
                                                            <td width="66%">
                                                                <div class="tablebdercaf">
                                                                    <table width="100%" border="0" cellspacing="1" cellpadding="2" id="tblComp" runat="server"
                                                                        bgcolor="#CCCCCC">
                                                                        <tr>
                                                                            <td bgcolor="#666666" class="whitetxt">
                                                                                <strong>
                                                                                    <label id="Subject">
                                                                                        Name of the Subject
                                                                                    </label>
                                                                                </strong>
                                                                            </td>
                                                                            <td bgcolor="#666666" class="whitetxt">
                                                                                <strong>
                                                                                    <label id="Fail">
                                                                                        Fail Mark in Previous Exam
                                                                                    </label>
                                                                                </strong>
                                                                            </td>
                                                                            <td bgcolor="#666666" class="whitetxt" id="td1">
                                                                                <strong>
                                                                                    <label id="Pass">
                                                                                        Pass Mark in Compartment Exam
                                                                                    </label>
                                                                                </strong>
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
            <td height="3">
                &nbsp;
            </td>
        </tr>
        <tr>
            <td height="3">
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
                                                Record of educational institution last attended from which you have passed Intermediate
                                                Examination / &#2310;&#2346;&#2344;&#2375; &#2332;&#2367;&#2360; &#2310;&#2346;&#2344;&#2375;
                                                &#2332;&#2367;&#2360; &#2360;&#2381;&#2325;&#2370;&#2354; &#2360;&#2375; &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335;
                                                &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                &#2325;&#2368; &#2361;&#2376; &#2313;&#2360;&#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                                &#2344;&#2368;&#2330;&#2375; &#2349;&#2352;&#2375; |
                                            </label>
                                        </strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="2%">
                                    </td>
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
                                                            <td width="15%" height="22">
                                                                <label id="lblSchNm">
                                                                    Name of the College
                                                                    <br />
                                                                    &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2344;&#2366;&#2350;
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
                                                            <td width="15%">
                                                                <label id="lblschlo">
                                                                    Location of the College
                                                                    <br />
                                                                    &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2346;&#2340;&#2366;
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
                                                            <td width="20%">
                                                                <label id="lblinstdist">
                                                                    District
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
                                                                    Year of Joining
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
                                                            <td colspan="2">
                                                                <label id="lblYOL1">
                                                                    Year of Passing / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354;
                                                                    &#2325;&#2377;&#2354;&#2375;&#2332; &#2360;&#2375; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                    &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;|
                                                                </label>
                                                            </td>
                                                            <td colspan="3">
                                                                <div class="sqborder1" style="width: 100px;">
                                                                    <asp:Label ID="lblYOL" runat="server" />
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
            <td bgcolor="#FFFFFF">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tbborderCAF">
                    <tr>
                        <td colspan="2">
                            <strong>
                                <asp:Label ID="Label2" runat="server">
                                            7. 
                                </asp:Label>
                                &nbsp;&nbsp;&nbsp;
                                <label id="Label3">
                                    Personal Details / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                </label>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table width="100%" border="0" cellpadding="2" cellspacing="0" class="dotBorder">
                                <tr>
                                    <td width="2%">
                                    </td>
                                    <td width="">
                                        <label id="lblGender">
                                            Gender / &#2354;&#2367;&#2306;&#2327;
                                        </label>
                                    </td>
                                    <td width="">
                                        <label id="lblmt1">
                                            Mother Tongue/ &#2350;&#2366;&#2340;&#2371;&#2349;&#2366;&#2359;&#2366;
                                        </label>
                                    </td>
                                    <td width="">
                                        <label id="Label1">
                                            Nationality / &#2344;&#2366;&#2327;&#2352;&#2367;&#2325;&#2340;&#2366;
                                        </label>
                                    </td>
                                    <td width="">
                                        <label id="Label5">
                                            Religion / &#2343;&#2352;&#2381;&#2350;
                                        </label>
                                    </td>
                                    <td width="20%">
                                        <label id="lblBloodGroup">
                                            Blood Group/ &#2352;&#2325;&#2381;&#2340; &#2360;&#2350;&#2370;&#2361;
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
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
        <tr>
            <td height="3">
            </td>
        </tr>
        <tr>
            <td>
                <table width="100%" border="0" cellpadding="10" cellspacing="0" class="tbborderCAF">
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
                                                Correspondence Address / &#2346;&#2340;&#2381;&#2352;&#2366;&#2330;&#2366;&#2352;
                                                &#2325;&#2366; &#2346;&#2340;&#2366;
                                            </label>
                                        </strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="2%">
                                        &nbsp;
                                    </td>
                                    <td>
                                        <table width="100%" border="0" cellspacing="1" cellpadding="2" class="dotBorder">
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
                                                <td width="2%" align="center" bgcolor="#1567A1" class="whitetxt">
                                                    <strong>
                                                        <label id="lblN6b">
                                                            b.
                                                        </label>
                                                    </strong>
                                                </td>
                                                <td width="8%">
                                                    <label id="lblDistrict">
                                                        District
                                                        <br />
                                                        &#2332;&#2367;&#2354;&#2366;
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
                                                <td width="15%">
                                                    <label id="lblBlock">
                                                        Block / Municipality
                                                        <br />
                                                        &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; / &#2344;&#2327;&#2352; &#2346;&#2352;&#2367;&#2359;&#2342;&#2381;
                                                        &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;
                                                    </label>
                                                </td>
                                                <td colspan="2" width="21%">
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
                                                <td height="22" colspan="3">
                                                    <label id="lbladdress">
                                                        House No., Street/Village, Post Office, Police Station Name
                                                        <br />
                                                        &#2309;&#2346;&#2344;&#2368; &#2350;&#2325;&#2366;&#2344; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366;
                                                        /&#2360;&#2396;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350; /&#2327;&#2366;&#2305;&#2357;
                                                        &#2325;&#2366; &#2344;&#2366;&#2350; /&#2346;&#2379;&#2360;&#2381;&#2335; &#2321;&#2347;&#2367;&#2360;
                                                        &#2319;&#2357;&#2350; &#2346;&#2369;&#2354;&#2367;&#2360; &#2341;&#2366;&#2344;&#2366;
                                                        &#2309;&#2357;&#2358;&#2381;&#2351; &#2354;&#2367;&#2326;&#2375;|
                                                    </label>
                                                </td>
                                                <td colspan="2">
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
                                                        &#2325;&#2379;&#2337; &#2351;&#2361;&#2366;&#2305; &#2354;&#2367;&#2326;&#2375;&#2306;
                                                    </label>
                                                </td>
                                                <td>
                                                    <div class="sqborder1">
                                                        <asp:Label ID="lblpin" runat="server" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="25" align="center" bgcolor="#1567A1" class="whitetxt">
                                                    <strong>
                                                        <label id="lblN6f">
                                                            f.
                                                        </label>
                                                    </strong>
                                                </td>
                                                <%-- <td height="22" width="20%">
                                                    <label id="lbltelephone">
                                                        Telephone No.<br />&#2309;&#2327;&#2352; &#2342;&#2370;&#2352;&#2349;&#2366;&#2359; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366; &#2313;&#2346;&#2354;&#2348;&#2381;&#2343; &#2361;&#2379; &#2340;&#2379; &#2351;&#2361;&#2366;&#2305; &#2354;&#2367;&#2326;&#2375;|
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
                                                </td>--%>
                                                <td width="10%">
                                                    <label id="lblMobileNo">
                                                        Mobile No. / &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                    </label>
                                                </td>
                                                <td>
                                                    <div class="sqborder1">
                                                        <asp:Label ID="lblmob" runat="server" />
                                                    </div>
                                                </td>
                                                <td align="center" bgcolor="#1567A1" class="whitetxt">
                                                    <strong>
                                                        <label id="lblN6h">
                                                            h.
                                                        </label>
                                                    </strong>
                                                </td>
                                                <td>
                                                    <label id="lblEmail">
                                                        e-Mail
                                                        <br />
                                                        &#2312;-&#2350;&#2375;&#2354;
                                                    </label>
                                                </td>
                                                <td>
                                                    <div class="sqborder1">
                                                        <asp:Label ID="lblemail" runat="server" />
                                                    </div>
                                                </td>
                                                <td align="center" bgcolor="#1567A1" class="whitetxt">
                                                    <strong>
                                                        <label id="lblN6g">
                                                            g.
                                                        </label>
                                                    </strong>
                                                </td>
                                                <td height="22" width="20%">
                                                    <label id="lbltelephone">
                                                        Telephone No.(Optional)<br />
                                                        &#2309;&#2327;&#2352; &#2342;&#2370;&#2352;&#2349;&#2366;&#2359; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366;
                                                            &#2313;&#2346;&#2354;&#2348;&#2381;&#2343; &#2361;&#2379; &#2340;&#2379; &#2351;&#2361;&#2366;&#2305;
                                                            &#2349;&#2352;&#2375;&#2306; | (&#2349;&#2352;&#2344;&#2366; &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351;
                                                            &#2344;&#2361;&#2368;&#2306; &#2361;&#2376; | )
                                                    </label>
                                                </td>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td width="32%" height="30">
                                                                <div class="sqborder1">
                                                                    <asp:Label ID="lblAreaCode" runat="server" />
                                                                </div>
                                                                <label id="Label7">
                                                                    STD Code
                                                                </label>
                                                            </td>
                                                            <td width="3%">
                                                                &nbsp;
                                                            </td>
                                                            <td width="68%">
                                                                <div class="sqborder1">
                                                                    <asp:Label ID="lblPhoneNo" runat="server" />
                                                                </div>
                                                                <br />
                                                                &nbsp;- &nbsp;
                                                                <label id="lblphone">
                                                                    Phone No
                                                                </label>
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
                <table width="100%" border="0" cellpadding="10" cellspacing="0" class="tbborderCAF">
                    <tr>
                        <td bgcolor="#FFFFFF">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td colspan="2">
                                        <strong>
                                            <label id="lblN7">
                                                9.
                                            </label>
                                            <label id="lblReservation">
                                                Reservation Details / &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2325;&#2368;
                                                &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                            </label>
                                        </strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="2%">
                                    </td>
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
                                                            <td width="">
                                                                <label id="GENERAL">
                                                                    General / &#2360;&#2366;&#2350;&#2366;&#2344;&#2381;&#2351; &#2357;&#2352;&#2381;&#2327;
                                                                </label>
                                                            </td>
                                                            <td width="" height="30">
                                                                <div class="sqborder1">
                                                                    <asp:Label runat="server" Width="30px" ID="lblGeneral"></asp:Label></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td height="30" width="">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td>
                                                                &nbsp;
                                                                <label id="SC">
                                                                    Schedule Caste (SC) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340; &#2332;&#2366;&#2340;&#2367;
                                                                </label>
                                                            </td>
                                                            <td width="35px" height="30">
                                                                <div class="sqborder1">
                                                                    <asp:Label runat="server" ID="lblSC"></asp:Label></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td height="30" width="" colspan="2">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td>
                                                                <label id="ST">
                                                                    Schedule Tribe (ST) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340; &#2332;&#2344;&#2332;&#2366;&#2340;&#2367;
                                                                </label>
                                                            </td>
                                                            <td width="40" height="30">
                                                                <div class="sqborder1">
                                                                    &nbsp;<asp:Label runat="server" ID="lblST"></asp:Label></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td bgcolor="#1567A1">
                                                </td>
                                                <td height="30" width="">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td width="150">
                                                                <label id="OTHER">
                                                                    Extremly Backward Classes (EBC) / &#2309;&#2340;&#2381;&#2351;&#2306;&#2340; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                                    &#2357;&#2352;&#2381;&#2327;
                                                                </label>
                                                            </td>
                                                            <td width="10" height="30">
                                                                <div class="sqborder1">
                                                                    <asp:Label runat="server" ID="lblOther"></asp:Label></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td height="30">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td>
                                                                &nbsp;
                                                                <label id="OBC">
                                                                    Backward Class (BC) / &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                                    &#2357;&#2352;&#2381;&#2327;
                                                                </label>
                                                            </td>
                                                            <td width="35px" height="30">
                                                                <div class="sqborder1">
                                                                    <asp:Label runat="server" ID="lblOBC"></asp:Label></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="" colspan="2">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td>
                                                                &nbsp;
                                                                <label id="Label6">
                                                                    Women Backward Class (WBC) / &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                                    &#2357;&#2352;&#2381;&#2327;
                                                                </label>
                                                            </td>
                                                            <td width="35px" height="30">
                                                                <div class="sqborder1">
                                                                    <asp:Label runat="server" ID="lblWBC"></asp:Label></div>
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
                                                <td height="30">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td width="">
                                                                <label id="PHOH">
                                                                    Specially Abled / &#2342;&#2367;&#2357;&#2381;&#2351;&#2366;&#2306;&#2327;
                                                                
                                                                </label>
                                                            </td>
                                                            <td width="35px" height="30">
                                                                <div class="sqborder1">
                                                                    <asp:Label runat="server" ID="lblPHOH"></asp:Label></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td height="30" width="">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td>
                                                                <label id="ESM">
                                                                    Ex-Service Man (ESM)
                                                                </label>
                                                            </td>
                                                            <td width="35px" height="30">
                                                                <div class="sqborder1">
                                                                    <asp:Label runat="server" ID="lblESM"></asp:Label></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="" height="30" style="display:none">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td>
                                                                <label id="SDP">
                                                                    Serving Defence Personnel (SDP)
                                                                </label>
                                                            </td>
                                                            <td width="35px" height="30">
                                                                <div class="sqborder1">
                                                                    <asp:Label runat="server" ID="lblSDP"></asp:Label></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="" height="30"  style="display:none">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                        <tr>
                                                            <td>
                                                                <label id="CoM">
                                                                    Children of Martyrs (CoM)
                                                                </label>
                                                            </td>
                                                            <td width="35px" height="30">
                                                                <div class="sqborder1">
                                                                    <asp:Label runat="server" ID="lblCoM"></asp:Label></div>
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
                <table width="100%" border="0" cellpadding="10" cellspacing="0" class="tbborderCAF" style="display:none;">
                    <tr>
                        <td bgcolor="#FFFFFF">
                            <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                <tr>
                                    <td width="2%">
                                        <strong>
                                            <label id="lblN8">
                                                10.
                                            </label>
                                        </strong>
                                    </td>
                                    <td width="98%" colspan="3">
                                        <strong>
                                            <label id="lblWeightage">
                                                Weightage Details / &#2350;&#2361;&#2340;&#2381;&#2357; &#2357;&#2367;&#2357;&#2352;&#2339;
                                                (&#2351;&#2342;&#2367; &#2354;&#2366;&#2327;&#2370; &#2361;&#2379; &#2340;&#2379;
                                                &#2360;&#2350;&#2381;&#2348;&#2306;&#2343;&#2367;&#2340; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;
                                                &#2325;&#2379; &#2330;&#2369;&#2344;&#2375; / Select the appropriate option if Applicable
                                                )
                                            </label>
                                        </strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="35%" valign="top">
                                                    <div class="tablebdercaf">
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="0">
                                                            <tr>
                                                                <td width="13%" bgcolor="#1567A1" class="whitetxt" colspan="4">
                                                                    <strong>
                                                                        <label id="lblN8a">
                                                                            a.
                                                                        </label>
                                                                        &nbsp;
                                                                        <label id="NCC">
                                                                            NCC
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#FFFFFF">
                                                                    <label id="NCCB">
                                                                        NCC 
                                                                    </label>
                                                                </td>
                                                                <td height="28" bgcolor="#FFFFFF" width="2%">
                                                                    <strong>
                                                                        <asp:Label ID="lblNccA" runat="server"></asp:Label>
                                                                    </strong>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" style="display:none" >
                                                                    <label id="NCCC">
                                                                        NCC (CAMP/COURSE)
                                                                    </label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" width="30px" style="display:none">
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
                                                <td width="63%" valign="top">
                                                    <div class="tablebdercaf">
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="0"  style="display:none">
                                                            <tr>
                                                                <td bgcolor="#1567A1" class="whitetxt" colspan="8">
                                                                    <strong>
                                                                        <label id="lblN8b">
                                                                            b.
                                                                        </label>
                                                                        &nbsp;
                                                                        <label id="NCCCamp">
                                                                            NSS Camp
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#FFFFFF">
                                                                    <label id="UL">
                                                                        University Level
                                                                    </label>
                                                                </td>
                                                                <td height="28" bgcolor="#FFFFFF" width="35px">
                                                                    <strong>
                                                                        <asp:Label ID="lblNssU" runat="server"></asp:Label>
                                                                    </strong>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <label id="SL">
                                                                        State Level
                                                                    </label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" width="35px">
                                                                    <strong>
                                                                        <asp:Label ID="lblNssS" runat="server"></asp:Label>
                                                                    </strong>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <label id="NL">
                                                                        National Level
                                                                    </label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" width="35px">
                                                                    <strong>
                                                                        <asp:Label ID="lblNssN" runat="server"></asp:Label>
                                                                    </strong>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <label id="IL">
                                                                        International Level
                                                                    </label>
                                                                </td>
                                                                <td bgcolor="#FFFFFF" width="35px">
                                                                    <strong>
                                                                        <asp:Label ID="lblNssIN" runat="server"></asp:Label>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" valign="top">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" valign="top">
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tr>
                                                            <td valign="top">
                                                                <div class="tablebdercaf">
                                                                    <table width="100%" border="0" cellpadding="2" cellspacing="0" style="display:none">
                                                                        <tr>
                                                                            <td bgcolor="#1567A1" class="whitetxt" colspan="6">
                                                                                <strong>
                                                                                    <label id="lblN8d">
                                                                                        b.
                                                                                    </label>
                                                                                    &nbsp;
                                                                                    <label id="Sports">
                                                                                        Sports &amp; Games
                                                                                    </label>
                                                                                </strong>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td bgcolor="#FFFFFF">
                                                                                <label id="State">
                                                                                    Sports
                                                                                </label>
                                                                            </td>
                                                                            <td height="28" bgcolor="#FFFFFF" width="35px">
                                                                                <strong>
                                                                                    <asp:Label ID="lblSportsS" runat="server"></asp:Label>
                                                                                </strong>
                                                                            </td>
                                                                            <td bgcolor="#FFFFFF"  style="display:none">
                                                                                <label id="National">
                                                                                    National
                                                                                </label>
                                                                            </td>
                                                                            <td bgcolor="#FFFFFF" width="35px"  style="display:none">
                                                                                <strong>
                                                                                    <asp:Label ID="lblSportsN" runat="server"></asp:Label>
                                                                                </strong>
                                                                            </td>
                                                                            <td bgcolor="#FFFFFF" style="display:none">
                                                                                <label id="International">
                                                                                    International
                                                                                </label>
                                                                            </td>
                                                                            <td bgcolor="#FFFFFF" width="35px" style="display:none">
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
            <td height="3">
            </td>
        </tr>
        <tr>
            <td>
                <table width="100%" border="0" cellspacing="0" cellpadding="2" class="tbborderCAF">
                    <tr>
                        <td bgcolor="#FFFFFF">
                            <strong>&nbsp;
                                <label id="lbloption">
                                    Option(s)/Choice(s) Details
                                </label>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#FFFFFF">
                            <div class="viewTable">
                                <table width="100%" cellpadding="2" cellspacing="0" id="tableOption">
                                    <tr>
                                        <td bgcolor="#666666">
                                            <strong class="whitetxt">Option Sl.No </strong>
                                        </td>
                                        <td bgcolor="#666666">
                                            <strong class="whitetxt">College </strong>
                                        </td>
                                        <td bgcolor="#666666">
                                            <strong class="whitetxt">Stream </strong>
                                        </td>
                                        <td bgcolor="#666666">
                                            <strong class="whitetxt">Stream Preference</strong>
                                        </td>
                                        <td bgcolor="#666666">
                                            <strong class="whitetxt">Subject(Honours/Pass)</strong>
                                        </td>
                                        <%--   <td bgcolor="#666666">
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
            <td height="10">
            </td>
        </tr>
        <tr>
            <td align="center" style="height: 19px">
                <asp:HiddenField ID="hdnPrevStream" runat="server" />
                <div style="display:none;">
                    <p>
                        Click on &#8220;Confirm&#8221;, You will receive an OTP on your given Mobile no.
                        and E-mail ID, enter the OTP on the next screen, then only your application get
                        confirmed.<br />
                        "Confirm" &#2348;&#2335;&#2344; &#2346;&#2352; &#2325;&#2381;&#2354;&#2367;&#2325;
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
                        &#2350;&#2344; &#2332;&#2366;&#2351;&#2375;&#2327;&#2366; |</p>
                </div>
                <asp:Button CssClass="submitBtn" ID="btnSave" runat="server" Text="Confirm" OnClientClick="return saveData();"
                    OnClick="btnSave_Click" />
                &nbsp;
                <asp:Button CssClass="submitBtn" ID="btnBack" runat="server" Text="Back To Modify"
                    OnClick="btnBack_Click" />
                    <div id="divmsg" style="display:none; color:Red"><strong> Saving your Application. Please wait...</strong></div>
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;
            </td>
        </tr>
    </table>
    </form>
</body>
</html>
