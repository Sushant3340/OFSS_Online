<%@ Page Language="C#" AutoEventWireup="true" CodeFile="JrCAFFormSpotClg.aspx.cs"
    Inherits="ONLINE_CAF_JrCAFFormSpotClg" EnableEventValidation="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Common Application Form</title>
    <link href="../style/CAF.css" rel="stylesheet" type="text/css" />
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <script src="../js/AadhaarValidator.js" type="text/javascript"></script>
    <link href="../style/chromestyle.css" rel="stylesheet" type="text/css" />
    <script src="../js/Juniour_CAF_HINDISpotClg.js" type="text/javascript"></script>
    <script src="../js/jquery-1.12.4.js" type="text/javascript"></script>
    <script type="text/javascript" src="../js/jquery.blockUI.js"></script>
    <link type='text/css' href="../style/basic.css" rel="stylesheet" media="screen" />
    <link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <%-- <script type='text/javascript' src="../js/jquery.simplemodal.js"></script>--%>
    <style type="text/css">
        body {
            margin: 0px;
            padding: 0px;
            border: none;
        }

        .Uppercase {
            text-transform: uppercase;
        }

        .redbold {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 31px;
            font-weight: bold;
            color: #C60000;
            text-decoration: none;
        }

        s .smlfont {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: bold;
            color: #333333;
            text-decoration: none;
        }

        .inputitem {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: normal;
            color: #000000;
            font-weight: bold;
            background-color: #f8f5d6;
        }

        .bordernew {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #000000;
            text-decoration: none;
            border: 1px solid #000000;
            background-color: #f8f5d6;
            width: 192px;
            /*min-height:20px;*/
            height: auto;
        }

        input[type=radio], input[type=checkbox] {
            background-color: #f8f5d6;
        }

        #tableOption td {
            background-color: #fff;
        }

        .optionbtnNew {
            background-color: #75bf52;
            *background-color: #75bf52;
            background-repeat: repeat-x;
            text-shadow: 01px1pxrgba(0, 0, 0, 0.25);
            color: #fff;
            font-size: 13px;
            font-weight: bold;
            padding: 0px;
            width: 150px;
            cursor: pointer;
            margin-top: 5px;
            height: 29px;
            background-image: -moz-linear-gradient(top, #82d05f, #75bf52);
        }

            .optionbtnNew:hover {
                background-color: #6ab148;
                background-color: #6ab148;
                background-repeat: repeat-x;
                background-image: -moz-linear-gradient(top, #6ab148, #6ab148);
            }

        input[type="radio" i] {
            margin: 3px 1px 0px 2px;
        }

        img.imgbdr {
            border: 1px solid #d2d5d8 !important;
            padding: 5px;
            margin-top: 15px;
        }

        .form-wrap {
        }

        table tr td {
            position: relative;
        }

        .text-spn {
            position: absolute;
        }

        i.right {
            float: right;
            color: #47ce0b;
            font-size: 18px;
            display: none;
        }

        i.wrong {
            float: right;
            color: #d81e1e;
            font-size: 18px;
            display: none;
        }

        i.inright {
            float: right;
            color: #47ce0b;
            font-size: 18px;
            display: none;
        }

        i.inwrong {
            float: right;
            color: #d81e1e;
            font-size: 18px;
            display: none;
        }

        i.eright {
            float: right;
            color: #47ce0b;
            font-size: 18px;
            display: none;
        }

        i.ewrong {
            float: right;
            color: #d81e1e;
            font-size: 18px;
            display: none;
        }

        i.einright {
            float: right;
            color: #47ce0b;
            font-size: 18px;
            display: none;
        }

        i.einwrong {
            float: right;
            color: #d81e1e;
            font-size: 18px;
            display: none;
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            background-color: black;
            z-index: 99;
            opacity: 0.8;
            filter: alpha(opacity=80);
            -moz-opacity: 0.8;
            min-height: 100%;
            width: 100%;
        }

        .loading {
            font-family: Arial;
            font-size: 10pt;
            border: 5px solid #67CFF5;
            width: 200px;
            height: 100px;
            display: none;
            position: fixed;
            background-color: White;
            z-index: 999;
        }
    </style>
    <script type="text/javascript" language="javascript">


        function show(subId) {
            document.getElementById(subId).style.display = "";
        }

        function hide(subId) {
            document.getElementById(subId).style.display = "none";
            document.getElementById("ddlOSAState").selectedIndex = 0;
            document.getElementById("ddlOLNSState").selectedIndex = 0;
            if (subId == 'tblComp') {
                document.getElementById("ddlCompSubject1").selectedIndex = 0;
                document.getElementById("txtCompFMark1").value = '';
                document.getElementById("txtCompPMark1").value = '';
                document.getElementById("ddlCompSubject2").selectedIndex = 0;
                document.getElementById("txtCompFMark2").value = '';
                document.getElementById("txtCompPMark2").value = '';
                document.getElementById("ddlCompSubject3").selectedIndex = 0;
                document.getElementById("txtCompFMark3").value = '';
                document.getElementById("txtCompPMark3").value = '';
                document.getElementById("ddlCompSubject4").selectedIndex = 0;
                document.getElementById("txtCompFMark4").value = '';
                document.getElementById("txtCompPMark4").value = '';
                //document.getElementById("6"25000).values = '';

            }
        }
        function HideUpload() {

            document.getElementById('fldImgAppl').style.display = 'none';
        }
        function OSAShow() {
            debugger;
            //            var osa = '<%=strOSAStatus%>';
            //            var olns = '<%=strOLNSStatus%>';
            var compartment = '<%=strCompartmentStatus%>';
            var cat1 = '<%=strCategory1%>';
            var cat2 = '<%=strCategory2%>';
            var cbse = '<%=strCBSE%>';
            //=============category1============
            if (cat1 == "5") {
                document.getElementById('rbtOther').checked = true;
            }
            if (cat1 == "2") {
                document.getElementById('rbtSC').checked = true;
            }
            if (cat1 == "3") {
                document.getElementById('rbtST').checked = true;
            }
            if (cat1 == "4") {
                document.getElementById('rbtnOBC').checked = true;
            }
            if (cat1 == "1") {
                document.getElementById('rbtGeneral').checked = true;
            }
            if (cat1 == "6") {
                document.getElementById('rbtBCW').checked = true;
            }
            //=================Category2==========
            if (cat2 == "1") {
                document.getElementById('rbtSDP').checked = true;
            }
            if (cat2 == "2") {
                document.getElementById('rbtESM').checked = true;
            }
            if (cat2 == "3") {
                document.getElementById('rbtCoM').checked = true;
            }
            if (cat2 == "4") {
                document.getElementById('rbtNon').checked = true;
            }
            //=========================  
            //            if (osa == 'True') {
            ////                document.getElementById('rbtOSAY').checked = true;
            ////                document.getElementById('sub2').style.display = "";
            //            }
            //            if (osa == 'False') {
            ////                document.getElementById('rbtOSAN').checked = true;
            ////                document.getElementById('sub2').style.display = "none";
            //            }
            //            if (olns == 'True') {
            ////                document.getElementById('rbtOLNSY').checked = true;
            ////                document.getElementById('sub3').style.display = "";
            //            }
            //            if (olns == 'False') {
            ////                document.getElementById('rbtOLNSN').checked = true;
            ////                document.getElementById('sub3').style.display = "none";
            //            }
            //=====================show/hide for comapartment==========
            if (compartment == 'True') {
                document.getElementById('rbtCompartmentalY').checked = true;
                document.getElementById('tblComp').style.display = "";

            }
            if (compartment == 'False') {
                document.getElementById('rbtCompartmentalN').checked = true;
                document.getElementById('tblComp').style.display = "none";
            }
            if (cbse == 'True') {
                document.getElementById('tblCBSE').style.display = '';
                document.getElementById('tblBSE').style.display = 'none';
                document.getElementById('tblKERALA').style.display = 'none';
            }
            if (cbse == 'False') {
                document.getElementById('tblCBSE').style.display = 'none';
                document.getElementById('tblBSE').style.display = '';
                document.getElementById('tblKERALA').style.display = 'none';
            }
            if (cbse == 'KERALA') {

                document.getElementById('tblCBSE').style.display = 'none';
                document.getElementById('tblBSE').style.display = 'none';
                document.getElementById('tblKERALA').style.display = '';
            }
        }
        function checkCOSAStatus() {
            if (document.getElementById('hidCollege').value != '') {

                OSAShow();
            }
        }
        function check() {
            if (event.keyCode == 93) {
                alert('Not allowed');
                return false;
            }
        }
        $(function () {
            // GetWomenCollege();
            // GetNoHostelID(); --recent
            //fillDist(1);
        });

        function checkNumber(ctl) {
            if ((event.keyCode >= 47) && (event.keyCode <= 57)) {
                alert('Please enter only Alphabets');
                document.getElementById(ctl).value = '';
                document.getElementById(ctl).focus();
                return false;
            }
        }
        //========================Activate Option================
        function makeSelectDropdown(ctlToFocus, ctlhdnId) {
            var arr = new Array();
            var str;
            var val;

            if (ctlhdnId == 'B') {
                str = '<%=strBoard%>';
            }
            if (ctlhdnId == 'S') {
                str = '<%=strState%>';
            }
            if (ctlhdnId == 'C') {
                str = '<%=strCollege%>';
            }
            arr = str.split(",");
            for (var i = 0; i < arr.length; i++) {
                if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {

                    if (event.keyCode >= 65 && event.keyCode <= 90) {
                        val = arr[i].toUpperCase();
                    }
                    else {
                        val = arr[i];
                    }
                    if (val == String.fromCharCode(event.keyCode)) {
                        if (document.getElementById(ctlToFocus).options[i].selected != true) {
                            document.getElementById(ctlToFocus).options[i].selected = true;
                            return false;
                        }
                    }
                }
                else {
                    true;
                }
            }
        }



        function verhoeff() {
            //            if (!ValidAadhaarNo($("#txtadhar").val())) {
            //                alert('Invalid Aadhaar number');
            //                return false;
            //            }
        }

        function check() {
            //            if (!MobileNumber('txtContactNo', 'Please Enter a Valid Contact.')) {
            //                return false;
            //            }
        }
        function cancel() {
            if (window.event.keyCode == 27)
                window.close();
        }
        //    textcolours =new Array( '#000000', '#8B0000', '#000000', '#8B0000', '#000000', '#8B0000' );		
        //		function flashtext() {
        //			var colour = Math.round( textcolours.length * Math.random() );			
        //			document.getElementById( 'flashingtext1' ).style.color = textcolours[ colour ];
        //		} 
        //		setInterval( 'flashtext()', 1000 );
        function RestrictSpace() {
            if (event.keyCode == 32) {
                event.returnValue = false;
                return false;
            }
        }

        function ShowhideSubject() {
            if (document.getElementById('ddlBoard').value == '109') {

                document.getElementById('tdEng').style.display = 'none';
                document.getElementById('tdMath').style.display = 'none';
                document.getElementById('tdScience').style.display = 'none';
                document.getElementById('tdSoScience').style.display = 'none';

                document.getElementById('tdEngMrk').style.display = 'none';
                document.getElementById('tdMathMrk').style.display = 'none';
                document.getElementById('tdScienceMrk').style.display = 'none';
                document.getElementById('tdSoScienceMrk').style.display = 'none';
            }
            else {
                //                document.getElementById('tdEng').style.display = '';
                //                document.getElementById('tdMath').style.display = '';
                //                document.getElementById('tdScience').style.display = '';
                //                document.getElementById('tdSoScience').style.display = '';

                //                document.getElementById('tdEngMrk').style.display = '';
                //                document.getElementById('tdMathMrk').style.display = '';
                //                document.getElementById('tdScienceMrk').style.display = '';
                //                document.getElementById('tdSoScienceMrk').style.display = '';
            }
            if (document.getElementById('ddlBoard').value == '131') {
                document.getElementById('divOtherBoard').style.display = '';
            }
            else {
                document.getElementById('divOtherBoard').style.display = 'none';
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
    <script type="text/javascript">
        function preventBack() { window.history.forward(); }
        setTimeout("preventBack()", 0);
        window.onunload = function () { null };


        function ShowStagingPopUp() {
            if (!confirm('This is not the official site of OFSS, Bihar. Kindly visit  website www.Ofssbihar.in. Do you still want to continue with this website')) {
                document.location.href = 'http://ofssbihar.Org';
            }
        }
    </script>
</head>
<body onload="ShowhideSubject();" onkeydown="ShowhideSubject();check();cancel();"
    style="background-color: #ffffff;">
    <%-- onload=" MarkVerify();"--%>
    <form id="form1" runat="server">
        <asp:HiddenField ID="hidCollege" runat="server" />
        <asp:HiddenField ID="hidStream" runat="server" />
        <asp:HiddenField ID="hidComplusory" runat="server" />
        <asp:HiddenField ID="hidElectives" runat="server" />
        <asp:HiddenField ID="hidFourthElelectives" runat="server" />
        <asp:HiddenField ID="hidHostel" runat="server" />
        <asp:HiddenField ID="hdnImgAppl" runat="server" />
        <asp:HiddenField ID="hdnGrade" runat="server" />
        <asp:HiddenField ID="hdnFont" runat="server" />
        <asp:HiddenField ID="hdnType" runat="server" />
        <asp:HiddenField ID="dist" runat="server" />
        <asp:HiddenField ID="block" runat="server" />
        <asp:HiddenField ID="HdistNm" runat="server" />
        <asp:HiddenField ID="HBlockNM" runat="server" />
        <asp:HiddenField ID="hdnValidateSts" runat="server" />
        <asp:HiddenField ID="hdnMobSts" runat="server" />
        <asp:HiddenField ID="hdnEmailSts" runat="server" />
        <asp:HiddenField ID="hdnMaleCol" runat="server" />
        <asp:HiddenField ID="hdnFemaleCol" runat="server" />
        <asp:HiddenField ID="hdnMFCol" runat="server" />
        <asp:HiddenField ID="hidDistrictID" runat="server" />
        <asp:HiddenField ID="hidCollegeID" runat="server" />
        <asp:HiddenField ID="hdnResCategory" runat="server" />
        <div class="form-wrap">
            <table width="70%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tr>
                                <td>
                                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td style="width: 85; text-align: left" class="CAFheading">
                                                <img src="../images/BiharLogo.png" width="77" height="77" alt="" />
                                            </td>
                                            <td width="754" height="22" align="center" class="style2">
                                                <span class="CAFheading" id="common">Common Application Form</span><br />
                                                <span id="adm">For Admission to Intermediate Courses Session 2024-26</span>
                                                <br />
                                                <span class="normalfont" id="department">Bihar School Examination Board, Government
                                                of Bihar</span>
                                            </td>
                                            <td width="236" align="center" valign="top" class="redbold">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td align="center" class="redbold">
                                                            <label id="lblp2" style="font-weight: bold">
                                                                Intermediate</label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left" class="redtxtind">
                                                            <label id="lblMarkField">
                                                                <font color="#8B0000" size="1.9">लाल रंग (*) से लिखीं गईं सभी सूचनाएं भरनी अनिवार्य है, अन्यथा आपका फॉर्म ऑनलाइन जमा नहीं हो पायेगा |
                                                                |
                                                                <br />
                                                                    All the Fields marked as red Colour (*) are Mandatory to be filled, otherwise your
                                                                Online form will not be submitted. </font>
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
                <tr>
                    <td height="4"></td>
                </tr>
                <tr>
                    <td align="right" style="display: none">
                        <input type="radio" name="gender" id="rbtnEnglish" value="English" onclick="EnglishOriyaFont();"
                            runat="server" />
                        English
                    <input type="radio" name="gender" id="rbtnOriya" value="Oriya" onclick="debugger; EnglishOriyaFont();"
                        runat="server" />
                        &#2361;&#2367;&#2306;&#2342;&#2368;
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#FFFFFF">
                        <table width="100%" border="0" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                            <tr>
                                <td bgcolor="#FFFFFF">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td>
                                                            <table width="100%" border="0" cellpadding="2" cellspacing="0">
                                                                <tr>
                                                                    <td width="85%">
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                            <tr>
                                                                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                                                    <tr>
                                                                                        <td width="24">
                                                                                            <strong>
                                                                                                <label id="lblN1">
                                                                                                    1.</label>
                                                                                            </strong>
                                                                                        </td>
                                                                                        <td width="858" colspan="3">
                                                                                            <strong>
                                                                                                <label id="lbltit">
                                                                                                    Name of the Board from which you have passed the 10th exam ? Please fill the Year
                                                                                                of Exam and Roll Number as in Admit Card. /
                                                                                                <br />
                                                                                                    &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2358;&#2367;&#2325;&#2381;&#2359;&#2366;
                                                                                                &#2348;&#2379;&#2352;&#2381;&#2337; &#2360;&#2375; &#2342;&#2360;&#2357;&#2368;&#2306;
                                                                                                &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                                                                &#2325;&#2368; &#2361;&#2376; ? &#2319;&#2337;&#2350;&#2367;&#2335; &#2325;&#2366;&#2352;&#2381;&#2337;
                                                                                                &#2325;&#2375; &#2309;&#2344;&#2369;&#2352;&#2370;&#2346; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                &#2357;&#2352;&#2381;&#2359; &#2319;&#2357;&#2306; &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                                                                &#2349;&#2352;&#2375;&#2306; |
                                                                                                </label>
                                                                                            </strong>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <table width="100%" class="dotBorder" border="0" cellpadding="2" cellspacing="0">
                                                                                        <tr>
                                                                                            <td width="390px">
                                                                                                <label id="lblBoardName" style="color: #8B0000">
                                                                                                    Name of the Examination Board <font color="#8B0000" size="3">*</font>
                                                                                                    <br />
                                                                                                    &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                &#2348;&#2379;&#2352;&#2381;&#2337; &#2325;&#2366; &#2344;&#2366;&#2350;</label>
                                                                                                &nbsp;<font color="#8B0000" size="3">*</font>
                                                                                            </td>
                                                                                            <td width="320px">
                                                                                                <label id="lblYOP" style="color: #8B0000">
                                                                                                    Year of Passing <font color="#8B0000" size="3">*</font>
                                                                                                    <br />
                                                                                                    &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;|
                                                                                                </label>
                                                                                                &nbsp;<font color="#8B0000" size="3">*</font>
                                                                                            </td>
                                                                                            <td width="350px">
                                                                                                <label id="lblExamType" style="color: #8B0000">
                                                                                                    Exam Type <font color="#8B0000" size="3">*</font>
                                                                                                    <br />
                                                                                                    &#2310;&#2346;&#2344;&#2375; &#2325;&#2380;&#2344; &#2360;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                                                &#2346;&#2366;&#2360; &#2325;&#2368; &#2361;&#2376;
                                                                                                </label>
                                                                                                &nbsp;<font color="#8B0000" size="3">*</font>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td width="250">
                                                                                                <asp:DropDownList CssClass="inputitem" ID="ddlBoard" runat="server" Width="100%"
                                                                                                    onkeypress="return makeSelectDropdown('ddlBoard','B');" onchange="showhideCGPA();ShowGrade();clearRollNumber();BoardMark();fillMaximumMark();ClearYearOfPassing();">
                                                                                                    <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                                                </asp:DropDownList>
                                                                                                <div id="divOtherBoard">
                                                                                                    <asp:TextBox ID="txtOtherBoard" runat="server" Width="100%" CssClass="inputitem" onkeypress="return AllowAlphabet(event,'txtOtherBoard')"></asp:TextBox>
                                                                                                </div>
                                                                                            </td>
                                                                                            <td width="146">
                                                                                                <%--<asp:TextBox ID="txtYOP" runat="server" Width="90" CssClass="inputitem" MaxLength="4"
                                                                                            AutoCompleteType="disabled" onblur="FutureYearAlert();ExamType();showhideCGPA();ShowGrade();clearRollNumber();return NumericValidation('txtYOP','Please enter your year of passing  between 1984 - 2016',4);" />--%>
                                                                                                <asp:DropDownList ID="ddlYOP" runat="server" Width="100%" CssClass="inputitem" onchange="ExamType();showhideCGPA();ShowGrade();clearRollNumber();BoardMark();fillMaximumMark();">
                                                                                                    <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                                                    <asp:ListItem Value="2024">2024</asp:ListItem>
                                                                                                    <asp:ListItem Value="2023">2023</asp:ListItem>
                                                                                                    <asp:ListItem Value="2022">2022</asp:ListItem>
                                                                                                    <asp:ListItem Value="2021">2021</asp:ListItem>
                                                                                                    <asp:ListItem Value="2020">2020</asp:ListItem>
                                                                                                    <asp:ListItem Value="2019">2019</asp:ListItem>
                                                                                                    <asp:ListItem Value="2018">2018</asp:ListItem>
                                                                                                    <asp:ListItem Value="2017">2017</asp:ListItem>
                                                                                                    <asp:ListItem Value="2016">2016</asp:ListItem>
                                                                                                    <asp:ListItem Value="2015">2015</asp:ListItem>
                                                                                                    <asp:ListItem Value="2014">2014</asp:ListItem>
                                                                                                    <asp:ListItem Value="2013">2013</asp:ListItem>
                                                                                                    <asp:ListItem Value="2012">2012</asp:ListItem>
                                                                                                    <asp:ListItem Value="2011">2011</asp:ListItem>
                                                                                                    <asp:ListItem Value="2010">2010</asp:ListItem>
                                                                                                    <asp:ListItem Value="2009">2009</asp:ListItem>
                                                                                                    <asp:ListItem Value="2008">2008</asp:ListItem>
                                                                                                    <asp:ListItem Value="2007">2007</asp:ListItem>
                                                                                                    <asp:ListItem Value="2006">2006</asp:ListItem>
                                                                                                    <asp:ListItem Value="2005">2005</asp:ListItem>
                                                                                                    <asp:ListItem Value="2004">2004</asp:ListItem>
                                                                                                    <asp:ListItem Value="2003">2003</asp:ListItem>
                                                                                                    <asp:ListItem Value="2002">2002</asp:ListItem>
                                                                                                    <asp:ListItem Value="2001">2001</asp:ListItem>
                                                                                                    <asp:ListItem Value="2000">2000</asp:ListItem>
                                                                                                    <asp:ListItem Value="1999">1999</asp:ListItem>
                                                                                                    <asp:ListItem Value="1998">1998</asp:ListItem>
                                                                                                    <asp:ListItem Value="1997">1997</asp:ListItem>
                                                                                                    <asp:ListItem Value="1996">1996</asp:ListItem>
                                                                                                    <asp:ListItem Value="1995">1995</asp:ListItem>
                                                                                                    <asp:ListItem Value="1994">1994</asp:ListItem>
                                                                                                    <asp:ListItem Value="1993">1993</asp:ListItem>
                                                                                                    <asp:ListItem Value="1992">1992</asp:ListItem>
                                                                                                    <asp:ListItem Value="1991">1991</asp:ListItem>
                                                                                                    <asp:ListItem Value="1990">1990</asp:ListItem>
                                                                                                    <asp:ListItem Value="1989">1989</asp:ListItem>
                                                                                                    <asp:ListItem Value="1988">1988</asp:ListItem>
                                                                                                    <asp:ListItem Value="1987">1987</asp:ListItem>
                                                                                                    <asp:ListItem Value="1986">1986</asp:ListItem>
                                                                                                    <%--  <asp:ListItem Value="1985">1985</asp:ListItem>--%>
                                                                                                </asp:DropDownList>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:RadioButton ID="rbtnAnnual" Text="Annual / &#2357;&#2366;&#2352;&#2381;&#2359;&#2367;&#2325; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;"
                                                                                                    runat="server" GroupName="Exam" onchange="BoardMark();" Checked="true" />
                                                                                                <asp:RadioButton ID="rbtnSuppl" Text="Compartmental / &#2346;&#2370;&#2352;&#2325; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;"
                                                                                                    runat="server" GroupName="Exam" onchange="BoardMark();" />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td id="tdDOBH" runat="server">
                                                                                                <label style="color: #8B0000">
                                                                                                    Date of Birth <font color="#8B0000" size="3">*</font>/ &#2332;&#2344;&#2381;&#2350;
                                                                                                &#2340;&#2367;&#2341;&#2367;
                                                                                                </label>
                                                                                                &nbsp;<font color="#8B0000" size="3">*</font>
                                                                                            </td>
                                                                                            <td id="tdRollCdH" runat="server">
                                                                                                <label style="color: #8B0000" size="3">
                                                                                                    Roll Code <font color="#8B0000" size="3">*</font>/ &#2352;&#2379;&#2354; &#2325;&#2379;&#2337;</label>
                                                                                                &nbsp;<font color="#8B0000" size="3">*</font>
                                                                                            </td>
                                                                                            <td>
                                                                                                <label id="lblRoll" style="color: #8B0000" size="3">
                                                                                                    Roll Number <font color="#8B0000" size="3">*</font>/ &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                                                                </label>
                                                                                                &nbsp;<font color="#8B0000" size="3">*</font>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td id="tdDOBF" runat="server">
                                                                                                <asp:DropDownList CssClass="inputitem" ID="ddlDay" runat="server" AppendDataBoundItems="true" onchange="BoardMark();">
                                                                                                    <asp:ListItem Value="0">DAY</asp:ListItem>
                                                                                                </asp:DropDownList>
                                                                                                <asp:DropDownList CssClass="inputitem" ID="ddlMonth" runat="server" AppendDataBoundItems="true" onchange="BoardMark();">
                                                                                                    <asp:ListItem Value="0">MONTH</asp:ListItem>
                                                                                                </asp:DropDownList>
                                                                                                <asp:DropDownList CssClass="inputitem" ID="ddlYear" runat="server" AppendDataBoundItems="true" onchange="BoardMark();">
                                                                                                    <asp:ListItem Value="0">YEAR</asp:ListItem>
                                                                                                </asp:DropDownList>
                                                                                            </td>
                                                                                            <td id="tdRollCdF" runat="server">
                                                                                                <asp:TextBox ID="txtRollCode" runat="server" Width="100%" CssClass="inputitem" MaxLength="15"
                                                                                                    onKeyUp="CheckRoll('txtRollCode','Space/Special characters are not allowed', 5);"
                                                                                                    AutoCompleteType="disabled"
                                                                                                    onkeypress="return CheckLengthOnly('txtRollCode', 5); " />
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtBoardRoll" runat="server" Width="100%" CssClass="inputitem" MaxLength="15" onKeyUp="CheckRoll('txtBoardRoll','Space/Special characters are not allowed', 7);"
                                                                                                    AutoCompleteType="disabled"
                                                                                                    onkeypress="return CheckLengthOnly('txtBoardRoll', 7);" />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td colspan="3" id="tdRollcodeMsg" style="display: none;">
                                                                                                <div>
                                                                                                    अगर आपके परीक्षा बोर्ड में रोल नंबर के अलावा यदि रोल कोड भी है तो दोनों को मिला
                                                                                                कर लिखें ! जैसे आपका रोल कोड 1234 है एवं रोल नंबर 987654 तो नीचे 1234987654 लिखें
                                                                                                | यदि केवल रोल नंबर है तो सिर्फ रोल नंबर लिखें !
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <table width="100%">
                                                                                        <tr>
                                                                                            <td>
                                                                                                <div style="text-align: center;">
                                                                                                    <label id="lblResultMsg" runat="server" style="color: Red; text-align: center; font-size: medium">
                                                                                                    </label>
                                                                                                </div>
                                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="2">

                                                                                                    <tr>
                                                                                                        <td width="2%">
                                                                                                            <strong>
                                                                                                                <%--<label id="lblN2">
                                                                                                                    2.</label>--%>
                                                                                                            </strong>
                                                                                                        </td>
                                                                                                        <td width="30%" id="tdlblUniqId" runat="server" style="display: none;">
                                                                                                            <label id="lblUniqueId" style="color: #8B0000" runat="server">
                                                                                                                Applicant's Unique Id 
                                                                                                                <br />
                                                                                                                आवेदक का यूनिक आई.डी (यदि उपलब्ध हो )
                                                                                                            </label>

                                                                                                            <%--<strong>??????? ???? ?? ???</strong> <font color="#8B0000" size="3">*</font>--%>
                                                                                                        </td>
                                                                                                        <td width="50%" colspan="2" id="tdtxtuniqueId" runat="server" style="display: none;">
                                                                                                            <asp:TextBox ID="txtUniqueId" runat="server" Width="100%" CssClass="inputitem Uppercase"
                                                                                                                AutoCompleteType="disabled" MaxLength="15" onkeypress="return CheckLengthOnly('txtUniqueId', 13);"
                                                                                                                onKeyUp="return NumericValidation('txtUniqueId','Please write only numeric values for Applicant Unique Id',13);" />

                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td width="2%">
                                                                                                            <strong>
                                                                                                                <label id="lblN2">
                                                                                                                    2.</label>
                                                                                                            </strong>
                                                                                                        </td>
                                                                                                        <td width="30%">
                                                                                                            <label id="lblApplicantName" style="color: #8B0000">
                                                                                                                Applicant's Name <font color="#8B0000" size="3">*</font>
                                                                                                                <br />
                                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                                            </label>
                                                                                                            <font color="#8B0000" size="3">*</font>
                                                                                                            <%--<strong>??????? ???? ?? ???</strong> <font color="#8B0000" size="3">*</font>--%>
                                                                                                        </td>
                                                                                                        <td width="50%" colspan="2">
                                                                                                            <asp:TextBox ID="txtApplName" runat="server" Width="100%" CssClass="inputitem Uppercase"
                                                                                                                AutoCompleteType="disabled" MaxLength="100" onKeyUp="return CheckSpeCharacterName('txtApplName','Special characters are not allowed');"
                                                                                                                onkeydown="return checkNumber('txtApplName');" />
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <strong>
                                                                                                                <label id="lblN3">
                                                                                                                    3.</label>
                                                                                                            </strong>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <label id="lblFname" style="color: #8B0000">
                                                                                                                Father's Name <font color="#8B0000" size="3">*</font>
                                                                                                                <br />
                                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2375; &#2346;&#2367;&#2340;&#2366;
                                                                                                            &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                                            </label>
                                                                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                                                                            <%-- <strong> ???? ?? ??? &nbsp;</strong><font color="#8B0000" size="3">*</font>--%>
                                                                                                        </td>
                                                                                                        <td colspan="2">
                                                                                                            <asp:TextBox ID="txtFatherName" runat="server" Width="100%" CssClass="inputitem Uppercase"
                                                                                                                AutoCompleteType="disabled" MaxLength="100" onkeyup="return CheckSpeCharacterName('txtFatherName','Special characters are not allowed');"
                                                                                                                onkeydown="return checkNumber('txtFatherName');" />
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <strong>
                                                                                                                <label id="lblN4">
                                                                                                                    4.</label>
                                                                                                            </strong>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <label id="lblMname" style="color: #8B0000">
                                                                                                                Mother's Name <font color="#8B0000" size="3">*</font>
                                                                                                                <br />
                                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2350;&#2366;&#2340;&#2366;
                                                                                                            &#2325;&#2366; &#2344;&#2366;&#2350;</label>
                                                                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                                                                            <%--<strong> ???? ?? ??? &nbsp;</strong><font color="#8B0000" size="3">*</font>--%>
                                                                                                        </td>
                                                                                                        <td colspan="2">
                                                                                                            <asp:TextBox ID="txtMotherName" runat="server" Width="100%" CssClass="inputitem Uppercase"
                                                                                                                AutoCompleteType="disabled" MaxLength="100" onkeyup="return CheckSpeCharacterName('txtMotherName','Special characters are not allowed');"
                                                                                                                onkeydown="return checkNumber('txtMotherName');" />
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </td>
                                                                                            <td width="130" align="center" valign="top" class="">
                                                                                                <div id='imgSpan' class="text-spn">
                                                                                                    <label id="lblphototext">
                                                                                                        Upload your photo <font color="#8B0000" size="3">*</font>
                                                                                                    </label>
                                                                                                </div>
                                                                                                <br />
                                                                                                <%-- <asp:Image ID="ImgAppl" CssClass="imgbdr" runat="server" ImageUrl="~/images/noimage.JPG"
                                                                                                Height="130" Width="130" />--%>
                                                                                                <center>
                                                                                                    <asp:Image ID="ImgAppl" CssClass="imgbdr" runat="server" ImageUrl="~/images/noimage.JPG"
                                                                                                        Height="130" Width="130" />
                                                                                                </center>
                                                                                                <asp:FileUpload ID="imgUpload" CssClass="form-control" runat="server" onchange="return ShowPreview(this);" />
                                                                                                <br />
                                                                                                <span style="font-size: x-small; font-weight: bold; color: #8B0000">(JPG, JPEG, PNG
                                                                                                files only)</span>
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
                                                <td bgcolor="#FFFFFF">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                        <tr>
                                                            <td width="1%" height="25">
                                                                <strong>
                                                                    <label id="lblN9">
                                                                        5.</label>
                                                                </strong>
                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>--%>
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
                    <td bgcolor="#FFFFFF">
                        <table width="70%" border="0" align="center" cellspacing="0" cellpadding="2" class="dotBorder">
                        </table>
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#ffffff">
                        <table width="70%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#cccccc"
                            class="dotBorder">
                            <tr>
                                <td bgcolor="#ffffff">
                                    <table width="100%" style="margin-top: 0px;">
                                        <tr>
                                            <td valign="top">
                                                <strong>5.</strong>
                                            </td>
                                            <td>
                                                <table width="100%" class="dotBorder" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td colspan="8">
                                                            <strong>
                                                                <label id="lbl9" style="color: #8B0000">
                                                                    Details of Mark/Grade Secured in 10th Board Examination / बोर्ड परीक्षा में प्राप्तांक
                                                                विषयवार नीचे लिखे|
                                                                </label>
                                                            </strong><font color="#8B0000" size="3">*</font>
                                                            <div style="background: #e1e1e1;">
                                                                यदि आवेदक ने बिहार बोर्ड के अलावा किसी अन्य बोर्ड से दसवीं पास किया हैं तो यहाँ
                                                            अपना प्राप्तांक अवश्य भरें | जिस आवेदक ने दसवीं की परीक्षा बिहार बोर्ड से उत्तीर्ण
                                                            की है उन विद्यार्थियों को अपने प्राप्तांक भरने की आवश्यकता नहीं है | रोल कोड, रोल
                                                            नंबर एवं जन्म तिथि भरने के पश्चात स्वत : आपके प्राप्तांक भर जायेंगे|
                                                            </div>
                                                            <%-- <div style="color: Blue; font-weight: bold" id="dv9">
                                                                Note: In the Below field you need to Enter CGPA Points, if you select CBSE & Year
                                                            between 2010 to 2017 as Year of Passing.<br />
                                                                ध्यान दें : अगर आवेदक ने परीक्षा बोर्ड - CBSE एवं परीक्षा उत्तीर्ण करने का वर्ष
                                                            2010 से 2017 के बीच चुना है तो यहाँ आवेदक को CGPA पॉइंट्स भरने होंगे |
                                                            <br />
                                                                <br />
                                                                Note: if you select CBSE & ICSE and your 10th result is not declared yet, then you
                                                            can apply this CAF without filling maximum marks and obtained marks, but it will
                                                            mandatory for you to upload your maximum marks and obtained marks before 28th May
                                                            2019 through the student Login, after releasing the result through your examination
                                                            board.If you don`t fill the marks before the last date of application of CAF your
                                                            application will be rejected and will not be considered for selection list generation.
                                                            <br />
                                                                ध्यान दें : यदि आप विद्यालय परीक्षा बोर्ड का नाम में CBSE & ICSE का चयन करते हैं
                                                            और आपने वर्ष 2019 में उक्त परीक्षा में सम्मिलित हुए हैं एवं 10 वीं का परिणाम अभी
                                                            तक आपके परीक्षा बोर्ड द्वारा घोषित नहीं किया गया है, तो आप CAF को बिना अधिकतम अंक
                                                            एवं प्राप्त अंको के भी भर सकते हैं | परिणाम घोषित होने के पश्चात आपको 28 मई 2019
                                                            से पहले, अपने अधिकतम अंक एवं प्राप्त अंक को स्टूडेंट लॉग इन के द्वारा अपलोड करना
                                                            अनिवार्य होगा | अगर आप CAF भरने के अन्तिम तिथि के अन्दर अपना प्राप्तांक नहीं भरेंगे
                                                            , तो आपका आवेदन चयन सूची के प्रकाशन हेतु मान्य नहीं होगा एवं आपका आवेदन अस्वीकार
                                                            कर दिया जाएगा |
                                                            </div>--%>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="2%" valign="top" bgcolor="#1567A1" style="text-align: center;" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN9a">
                                                                    a.</label>
                                                            </strong>
                                                        </td>
                                                        <td width="70%" valign="top">
                                                            <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC"
                                                                id="tblBSE">
                                                                <tr>
                                                                    <td bgcolor="#666666" class="whitetxt">
                                                                        <strong>Total Full Marks<br />
                                                                            कुल अधिकतम अंक - कुल पूर्ण अंक</strong>
                                                                    </td>
                                                                    <td bgcolor="#666666" class="whitetxt">
                                                                        <strong>Total Marks Obtained<br />
                                                                            कुल पूर्ण अंक - कुल प्राप्तांक</strong>
                                                                    </td>
                                                                    <td bgcolor="#666666" class="whitetxt" id="tdEng" style="display: none;">
                                                                        <strong>English
                                                                        <br />
                                                                            &#2309;&#2306;&#2327;&#2381;&#2352;&#2375;&#2332;&#2368; </strong>
                                                                    </td>
                                                                    <td bgcolor="#666666" class="whitetxt" id="tdMath" style="display: none;">
                                                                        <strong>Mathematics
                                                                        <br />
                                                                            &#2327;&#2339;&#2367;&#2340;</strong>
                                                                    </td>
                                                                    <td bgcolor="#666666" class="whitetxt" id="tdScience" style="display: none;">
                                                                        <strong>Science<br />
                                                                            &#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                                    </td>
                                                                    <td bgcolor="#666666" class="whitetxt" id="tdSoScience" style="display: none;">
                                                                        <strong>Social Science<br />
                                                                            &#2360;&#2350;&#2366;&#2332;&#2358;&#2366;&#2360;&#2381;&#2340;&#2381;&#2352;</strong>
                                                                    </td>
                                                                    <td bgcolor="#666666" id="tdGradeMark" class="whitetxt" style="display: none">
                                                                        <strong>
                                                                            <%--Grade--%>
                                                                            <br />
                                                                            &#2346;&#2342;&#2325;&#2381;&#2352;&#2350;</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#FFFFFF">
                                                                        <asp:TextBox CssClass="inputitem" ID="txtMaxMark" runat="server" MaxLength="4" AutoCompleteType="disabled"
                                                                            onKeyUp="return NumericValidation('txtMaxMark','Please write only numeric values for MARKS',4);" />
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF">
                                                                        <asp:TextBox CssClass="inputitem" ID="txtTotMark" runat="server" MaxLength="4" AutoCompleteType="disabled"
                                                                            onKeyUp="return NumericValidation('txtTotMark','Please write only numeric values for MARKS',4);" />
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" id="tdEngMrk" style="display: none;">
                                                                        <asp:TextBox CssClass="inputitem" ID="txtEnglish" runat="server" MaxLength="3" AutoCompleteType="disabled"
                                                                            onKeyUp="return NumericValidation('txtEnglish','Please write only numeric values for MARKS',3);" />
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" id="tdMathMrk" style="display: none;">
                                                                        <asp:TextBox CssClass="inputitem" ID="txtMath" runat="server" MaxLength="3" AutoCompleteType="disabled"
                                                                            onKeyUp="return NumericValidation('txtMath','Please write only numeric values for MARKS',3);" />
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" id="tdScienceMrk" style="display: none;">
                                                                        <asp:TextBox CssClass="inputitem" ID="txtScience" runat="server" MaxLength="3" AutoCompleteType="disabled"
                                                                            onKeyUp="return NumericValidation('txtScience','Please write only numeric values for MARKS',3);" />
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" id="tdSoScienceMrk" style="display: none;">
                                                                        <asp:TextBox CssClass="inputitem" ID="txtSocSci" runat="server" MaxLength="3" AutoCompleteType="disabled"
                                                                            onKeyUp="return NumericValidation('txtSocSci','Please write only numeric values for MARKS',3);" />
                                                                    </td>
                                                                    <td bgcolor="#FFFFFF" id="tdGradeMarkddl" style="display: none">
                                                                        <asp:DropDownList ID="ddlGrade" runat="server" CssClass="inputitem" onchange="setGrade();">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                            <asp:ListItem Value="10">A1</asp:ListItem>
                                                                            <asp:ListItem Value="9">A2</asp:ListItem>
                                                                            <asp:ListItem Value="8">B1</asp:ListItem>
                                                                            <asp:ListItem Value="7">B2</asp:ListItem>
                                                                            <asp:ListItem Value="6">C</asp:ListItem>
                                                                            <asp:ListItem Value="5">D</asp:ListItem>
                                                                            <asp:ListItem Value="4">E</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="7">
                                                                        <div style="color: Blue; font-weight: bold; background-color: White;" id="Div1">
                                                                            Note : Selection of the students will be done based on the Total Marks obtained
                                                                        in the Qualifying Board Examination.
                                                                        <br />
                                                                            ध्यान दें : छात्रों का चयन सूची में चयन बोर्ड परीक्षा में कुल प्राप्तांक के आधार
                                                                        पर होता है |
                                                                        </div>
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
                                                                            AutoCompleteType="disabled" oninput="DecimalNumber(this);" onkeypress="return RestrictSpace();" />
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
                                                    <tr style="display: none;">
                                                        <td valign="top" bgcolor="#1567A1" style="text-align: center;" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN9b">
                                                                    b.</label>
                                                            </strong>
                                                        </td>
                                                        <td colspan="2">
                                                            <label id="lbl9b" style="color: #8B0000">
                                                                Have you passed 10th Board Exam Compartmentally?
                                                            <br />
                                                                &#2325;&#2381;&#2351;&#2366; &#2309;&#2346;&#2344;&#2375; &#2342;&#2360;&#2357;&#2368;
                                                            &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2346;&#2370;&#2352;&#2325;-&#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                            &#2309;&#2341;&#2357;&#2366; &#2360;&#2350;&#2369;&#2344;&#2381;&#2344;&#2340; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                            &#2350;&#2375;&#2306; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368;
                                                            &#2361;&#2376;&#2306; ?</label>
                                                            <asp:RadioButton ID="rbtCompartmentalN" runat="server" Checked="true" GroupName="rbtComaprtmental"
                                                                onclick="hide('tblComp');" />
                                                            <span id="CompN" style="color: #8B0000">No/ &#2344;&#2361;&#2368;&#2306;</span>
                                                            <asp:RadioButton ID="rbtCompartmentalY" runat="server" GroupName="rbtComaprtmental"
                                                                onclick="show('tblComp');" />
                                                            <span id="CompY" style="color: #8B0000">Yes/ &#2361;&#2366;&#2305;</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3" valign="top">
                                                            <div id="tblComp" style="display: none;">
                                                                <table width="100%" border="0" cellspacing="1" bgcolor="#CCCCCC" cellpadding="2">
                                                                    <tr>
                                                                        <td width="30%" bgcolor="#666666" class="whitetxt">
                                                                            <strong>Name of the Subject&nbsp;<font color="#8B0000" size="3">*</font></strong>
                                                                        </td>
                                                                        <td width="32%" bgcolor="#666666" class="whitetxt">
                                                                            <strong>Fail Mark in Previous Exam&nbsp;<font color="#8B0000" size="3">*</font></strong>
                                                                        </td>
                                                                        <td width="38%" bgcolor="#666666" class="whitetxt">
                                                                            <strong>Pass Mark in Compartmental Exam&nbsp;<font color="#8B0000" size="3">*</font></strong>
                                                                        </td>
                                                                    </tr>
                                                                    <tr bgcolor="#FFFFFF">
                                                                        <td>
                                                                            <asp:DropDownList ID="ddlCompSubject1" runat="server" Width="100%" CssClass="inputitem"
                                                                                onchange="clearComp('ddlCompSubject1','txtCompFMark1','txtCompPMark1');">
                                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                            </asp:DropDownList>
                                                                            <%--<asp:TextBox CssClass="inputitem" ID="txtCompSubject1" runat="server" Width="150"
                                                                            AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject1','Special characters are not allowed');" />--%>
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox CssClass="inputitem" ID="txtCompFMark1" runat="server" Width="100%"
                                                                                MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark1','Please write only numeric values for MARKS',3);" />
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox CssClass="inputitem" ID="txtCompPMark1" runat="server" Width="100%"
                                                                                MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark1','Please write only numeric values for MARKS',3);" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr bgcolor="#FFFFFF">
                                                                        <td>
                                                                            <asp:DropDownList ID="ddlCompSubject2" runat="server" Width="100%" CssClass="inputitem"
                                                                                onchange="clearComp('ddlCompSubject2','txtCompFMark2','txtCompPMark2');">
                                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                            </asp:DropDownList>
                                                                            <%--<asp:TextBox CssClass="inputitem" ID="txtCompSubject2" runat="server" Width="150"
                                                                            AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject2','Special characters are not allowed');" />--%>
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox CssClass="inputitem" ID="txtCompFMark2" runat="server" Width="100%"
                                                                                MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark2','Please write only numeric values for MARKS',3);" />
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox CssClass="inputitem" ID="txtCompPMark2" runat="server" Width="100%"
                                                                                MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark2','Please write only numeric values for MARKS',3);" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr bgcolor="#FFFFFF">
                                                                        <td>
                                                                            <asp:DropDownList ID="ddlCompSubject3" runat="server" Width="100%" CssClass="inputitem"
                                                                                onchange="clearComp('ddlCompSubject3','txtCompFMark3','txtCompPMark3');">
                                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                            </asp:DropDownList>
                                                                            <%--<asp:TextBox CssClass="inputitem" ID="txtCompSubject3" runat="server" Width="150"
                                                                            AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject3','Special characters are not allowed');" />--%>
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox CssClass="inputitem" ID="txtCompFMark3" runat="server" Width="100%"
                                                                                MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark3','Please write only numeric values for MARKS',3);" />
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox CssClass="inputitem" ID="txtCompPMark3" runat="server" Width="100%"
                                                                                MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark3','Please write only numeric values for MARKS',3);" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr bgcolor="#FFFFFF">
                                                                        <td>
                                                                            <asp:DropDownList ID="ddlCompSubject4" runat="server" Width="100%" CssClass="inputitem"
                                                                                onchange="clearComp('ddlCompSubject4','txtCompFMark4','txtCompPMark4');">
                                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                            </asp:DropDownList>
                                                                            <%--<asp:TextBox CssClass="inputitem" ID="txtCompSubject3" runat="server" Width="150"
                                                                            AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject3','Special characters are not allowed');" />--%>
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox CssClass="inputitem" ID="txtCompFMark4" runat="server" Width="100%"
                                                                                MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark4','Please write only numeric values for MARKS',3);" />
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox CssClass="inputitem" ID="txtCompPMark4" runat="server" Width="100%"
                                                                                MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark4','Please write only numeric values for MARKS',3);" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr bgcolor="#FFFFFF">
                                                                        <td colspan="3">
                                                                            <div style="font-weight: bold; color: #8B0000">
                                                                                <label id="lbl9msg">
                                                                                    Note: If any subject name not in the given list , Please call us on 0612-2230009
                                                                                (Toll Free)
                                                                                </label>
                                                                            </div>
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
                    <td bgcolor="#ffffff">
                        <table width="70%" border="0" align="center" cellpadding="10" cellspacing="1" bgcolor="#cccccc"
                            class="dotBorder">
                            <tr>
                                <td bgcolor="#ffffff">
                                    <table width="100%" style="margin-top: 0px;">
                                        <tr>
                                            <td height="25">6<strong><label id="lblN71">.</label>
                                            </strong>
                                            </td>
                                            <td>
                                                <strong>
                                                    <label id="lbleduinst">
                                                        Record of educational institution last attended from which you have passed 10th
                                                    Examination<br />
                                                        &#2310;&#2346;&#2344;&#2375; &#2332;&#2367;&#2360; &#2360;&#2381;&#2325;&#2370;&#2354;
                                                    &#2360;&#2375; &#2342;&#2360;&#2357;&#2368; &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                    &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376; &#2313;&#2360;&#2325;&#2368;
                                                    &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; &#2344;&#2368;&#2330;&#2375; &#2349;&#2352;&#2375;
                                                    |
                                                    </label>
                                                    <%--Correspondence--%>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;
                                            </td>
                                            <td>
                                                <table width="100%" class="dotBorder" border="0" cellspacing="0" cellpadding="2">
                                                    <tr>
                                                        <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN71a">
                                                                    a.</label>
                                                            </strong>
                                                        </td>
                                                        <td width="30%">
                                                            <label id="lblschname" style="color: #8B0000">
                                                                Name of the School <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="txtschname" CssClass="inputitem Uppercase" runat="server" Width="280"
                                                                onkeyup="return CheckSpeCharacterSchoolName('txtschname','Special characters are not allowed');"
                                                                MaxLength="150" autocomplete="off" />
                                                        </td>
                                                        <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN71b">
                                                                    b.</label>
                                                            </strong>
                                                        </td>
                                                        <td width="30%">
                                                            <label id="lblschloc" style="color: #8B0000">
                                                                Address of the School <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2325;&#2366; &#2346;&#2340;&#2366;
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td width="25%">
                                                            <asp:TextBox ID="txtschloc" CssClass="inputitem Uppercase" runat="server" Width="100%"
                                                                onkeydown="return ValidateAddress('txtschloc', 100);" MaxLength="100" autocomplete="off" onchange="return ValidateAddress('txtschloc',100);" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN71c">
                                                                    c.</label>
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            <label id="lblinsDist" style="color: #8B0000">
                                                                District <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375; &#2350;&#2375;&#2306; &#2310;&#2346;&#2325;&#2366;
                                                            &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2361;&#2376;
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlinstDistrict" runat="server" EnableViewState="true"
                                                                Width="100%" AppendDataBoundItems="true">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                            </asp:DropDownList>
                                                            <asp:Label ID="lblSchoolDistrict" runat="server" Style="display: none;"></asp:Label>
                                                            <%-- <asp:TextBox ID="txtdist" CssClass="inputitem Uppercase" runat="server" Width="200"
                                                        Style="display: none" MaxLength="240" autocomplete="off" onkeydown="return checkNumber('txtdist');" />--%>
                                                        </td>
                                                        <td bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN71d">
                                                                    d.</label>
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            <label id="lblinsYOJ" style="color: #8B0000">
                                                                Year of Joining <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2313;&#2360;
                                                            &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2350;&#2375;&#2306; &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344;
                                                            &#2354;&#2367;&#2351;&#2366; &#2341;&#2366; |
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList CssClass="inputitem" Width="100%" ID="ddlYOJ" runat="server" AppendDataBoundItems="true"
                                                                onchange="validYOJ();">
                                                                <asp:ListItem Value="0">YEAR</asp:ListItem>
                                                                <asp:ListItem Value="2023">2023</asp:ListItem>
                                                                <asp:ListItem Value="2022">2022</asp:ListItem>
                                                                <asp:ListItem Value="2021">2021</asp:ListItem>
                                                                <asp:ListItem Value="2020">2020</asp:ListItem>
                                                                <asp:ListItem Value="2019">2019</asp:ListItem>
                                                                <asp:ListItem Value="2018">2018</asp:ListItem>
                                                                <asp:ListItem Value="2017">2017</asp:ListItem>
                                                                <asp:ListItem Value="2016">2016</asp:ListItem>
                                                                <asp:ListItem Value="2015">2015</asp:ListItem>
                                                                <asp:ListItem Value="2014">2014</asp:ListItem>
                                                                <asp:ListItem Value="2013">2013</asp:ListItem>
                                                                <asp:ListItem Value="2012">2012</asp:ListItem>
                                                                <asp:ListItem Value="2011">2011</asp:ListItem>
                                                                <asp:ListItem Value="2010">2010</asp:ListItem>
                                                                <asp:ListItem Value="2009">2009</asp:ListItem>
                                                                <asp:ListItem Value="2008">2008</asp:ListItem>
                                                                <asp:ListItem Value="2007">2007</asp:ListItem>
                                                                <asp:ListItem Value="2006">2006</asp:ListItem>
                                                                <asp:ListItem Value="2005">2005</asp:ListItem>
                                                                <asp:ListItem Value="2004">2004</asp:ListItem>
                                                                <asp:ListItem Value="2003">2003</asp:ListItem>
                                                                <asp:ListItem Value="2002">2002</asp:ListItem>
                                                                <asp:ListItem Value="2001">2001</asp:ListItem>
                                                                <asp:ListItem Value="2000">2000</asp:ListItem>
                                                                <asp:ListItem Value="1999">1999</asp:ListItem>
                                                                <asp:ListItem Value="1998">1998</asp:ListItem>
                                                                <asp:ListItem Value="1997">1997</asp:ListItem>
                                                                <asp:ListItem Value="1996">1996</asp:ListItem>
                                                                <asp:ListItem Value="1995">1995</asp:ListItem>
                                                                <asp:ListItem Value="1994">1994</asp:ListItem>
                                                                <asp:ListItem Value="1993">1993</asp:ListItem>
                                                                <asp:ListItem Value="1992">1992</asp:ListItem>
                                                                <asp:ListItem Value="1991">1991</asp:ListItem>
                                                                <asp:ListItem Value="1990">1990</asp:ListItem>
                                                                <asp:ListItem Value="1989">1989</asp:ListItem>
                                                                <asp:ListItem Value="1988">1988</asp:ListItem>
                                                                <asp:ListItem Value="1987">1987</asp:ListItem>
                                                                <asp:ListItem Value="1986">1986</asp:ListItem>
                                                                <asp:ListItem Value="1985">1985</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN71e">
                                                                    e.</label>
                                                            </strong>
                                                        </td>
                                                        <td colspan="2">
                                                            <label id="lblYOL" style="color: #8B0000">
                                                                Year of Leaving from School<font color="#8B0000" size="3">*</font> / आपने किस साल
                                                            उस विद्यालय छोड़ेथे |
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlYOL" Width="16%" runat="server" AppendDataBoundItems="true"
                                                                onchange="validYOJ();">
                                                                <asp:ListItem Value="0">YEAR</asp:ListItem>
                                                                <asp:ListItem Value="2024">2024</asp:ListItem>
                                                                <asp:ListItem Value="2023">2023</asp:ListItem>
                                                                <asp:ListItem Value="2022">2022</asp:ListItem>
                                                                <asp:ListItem Value="2021">2021</asp:ListItem>
                                                                <asp:ListItem Value="2020">2020</asp:ListItem>
                                                                <asp:ListItem Value="2019">2019</asp:ListItem>
                                                                <asp:ListItem Value="2018">2018</asp:ListItem>
                                                                <asp:ListItem Value="2017">2017</asp:ListItem>
                                                                <asp:ListItem Value="2016">2016</asp:ListItem>
                                                                <asp:ListItem Value="2015">2015</asp:ListItem>
                                                                <asp:ListItem Value="2014">2014</asp:ListItem>
                                                                <asp:ListItem Value="2013">2013</asp:ListItem>
                                                                <asp:ListItem Value="2012">2012</asp:ListItem>
                                                                <asp:ListItem Value="2011">2011</asp:ListItem>
                                                                <asp:ListItem Value="2010">2010</asp:ListItem>
                                                                <asp:ListItem Value="2009">2009</asp:ListItem>
                                                                <asp:ListItem Value="2008">2008</asp:ListItem>
                                                                <asp:ListItem Value="2007">2007</asp:ListItem>
                                                                <asp:ListItem Value="2006">2006</asp:ListItem>
                                                                <asp:ListItem Value="2005">2005</asp:ListItem>
                                                                <asp:ListItem Value="2004">2004</asp:ListItem>
                                                                <asp:ListItem Value="2003">2003</asp:ListItem>
                                                                <asp:ListItem Value="2002">2002</asp:ListItem>
                                                                <asp:ListItem Value="2001">2001</asp:ListItem>
                                                                <asp:ListItem Value="2000">2000</asp:ListItem>
                                                                <asp:ListItem Value="1999">1999</asp:ListItem>
                                                                <asp:ListItem Value="1998">1998</asp:ListItem>
                                                                <asp:ListItem Value="1997">1997</asp:ListItem>
                                                                <asp:ListItem Value="1996">1996</asp:ListItem>
                                                                <asp:ListItem Value="1995">1995</asp:ListItem>
                                                                <asp:ListItem Value="1994">1994</asp:ListItem>
                                                                <asp:ListItem Value="1993">1993</asp:ListItem>
                                                                <asp:ListItem Value="1992">1992</asp:ListItem>
                                                                <asp:ListItem Value="1991">1991</asp:ListItem>
                                                                <asp:ListItem Value="1990">1990</asp:ListItem>
                                                                <asp:ListItem Value="1989">1989</asp:ListItem>
                                                                <asp:ListItem Value="1988">1988</asp:ListItem>
                                                                <asp:ListItem Value="1987">1987</asp:ListItem>
                                                                <asp:ListItem Value="1986">1986</asp:ListItem>
                                                                <asp:ListItem Value="1985">1985</asp:ListItem>
                                                            </asp:DropDownList>
                                                            <asp:Label ID="lblyearOfLeaving" runat="server" Style="display: none"></asp:Label>
                                                        </td>
                                                        <td bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN71f">
                                                                    f.</label>
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            <label id="lblKGABC" style="color: #8B0000">
                                                                Have you passed 10th exam as a student of Kasturba Gandhi Balika Vidyalaya?<font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                क्या आपने दसवीं की परीक्षा कस्तूरबा गाँधी आवासीय बालिका छात्रावास में रहते हुए उत्तीर्ण की है ?
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td>

                                                            <asp:RadioButtonList ID="rbtnKGABC" runat="server" RepeatDirection="Horizontal">
                                                                <asp:ListItem Value="1">Yes</asp:ListItem>
                                                                <asp:ListItem Value="0" Selected="True">No</asp:ListItem>
                                                            </asp:RadioButtonList>
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
                    <td height="10" bgcolor="#ffffff">
                        <table width="70%" border="0" align="center" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                            <tr>
                                <td bgcolor="#FFFFFF">
                                    <table width="100%">
                                        <tr>
                                            <td>7<strong><label id="lblN5">.</label>
                                            </strong>
                                            </td>
                                            <td>
                                                <strong>
                                                    <label id="lblPD">
                                                        Personal Details
                                                    <br />
                                                        &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;</label>
                                                </strong>
                                                <%--<strong>????????? ????? </strong>--%>
                                            </td>
                                            <td>
                                                <table width="100%" class="dotBorder" border="1" cellpadding="2">
                                                    <tr>
                                                        <td>
                                                            <label id="lblGender" style="color: #8B0000">
                                                                Gender <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2354;&#2367;&#2306;&#2327;</label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td>
                                                            <label id="lblMt" style="color: #8B0000">
                                                                Mother Tongue <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2350;&#2366;&#2340;&#2371;&#2349;&#2366;&#2359;&#2366;
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td width="">
                                                            <label id="lblNat" style="color: #8B0000">
                                                                Nationality <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2344;&#2366;&#2327;&#2352;&#2367;&#2325;&#2340;&#2366;</label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td>
                                                            <label id="lblReligion">
                                                                Religion (Optional)
                                                            <br />
                                                                &#2343;&#2352;&#2381;&#2350; (&#2349;&#2352;&#2344;&#2366; &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351;
                                                            &#2344;&#2361;&#2368;&#2306; &#2361;&#2376; | )</label>
                                                        </td>
                                                        <td>
                                                            <label id="lblBloodGroup">
                                                                Blood Group (Optional)
                                                            <br />
                                                                &#2352;&#2325;&#2381;&#2340; &#2360;&#2350;&#2370;&#2361;(&#2349;&#2352;&#2344;&#2366;
                                                            &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351; &#2344;&#2361;&#2368;&#2306;
                                                            &#2361;&#2376; | )
                                                            </label>
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlGender" runat="server" Width="80">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                <asp:ListItem Value="1">MALE</asp:ListItem>
                                                                <asp:ListItem Value="2">FEMALE</asp:ListItem>
                                                                <asp:ListItem Value="3">TRANSGENDER</asp:ListItem>
                                                            </asp:DropDownList>
                                                            <asp:HiddenField ID="hidGender" runat="server" />
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlMt" runat="server" Width="100">
                                                                <asp:ListItem Value="0">--SELECT</asp:ListItem>
                                                                <asp:ListItem Value="21">ASSAMESE</asp:ListItem>
                                                                <asp:ListItem Value="2">BENGALI</asp:ListItem>
                                                                <asp:ListItem Value="11">BODO</asp:ListItem>
                                                                <asp:ListItem Value="15">DOGRI</asp:ListItem>
                                                                <asp:ListItem Value="4">ENGLISH</asp:ListItem>
                                                                <asp:ListItem Value="9">GUJARATI</asp:ListItem>
                                                                <asp:ListItem Value="3">HINDI</asp:ListItem>
                                                                <asp:ListItem Value="19">KANNADA</asp:ListItem>
                                                                <asp:ListItem Value="20">KASHMIRI</asp:ListItem>
                                                                <asp:ListItem Value="10">KONKANI</asp:ListItem>
                                                                <asp:ListItem Value="14">MAITHILI</asp:ListItem>
                                                                <asp:ListItem Value="12">MALAYALAM</asp:ListItem>
                                                                <asp:ListItem Value="13">MANIPURI</asp:ListItem>
                                                                <asp:ListItem Value="5">MARATHI</asp:ListItem>
                                                                <asp:ListItem Value="1">ODIA</asp:ListItem>
                                                                <asp:ListItem Value="16">PUNJABI</asp:ListItem>
                                                                <asp:ListItem Value="17">SANSKRIT</asp:ListItem>
                                                                <asp:ListItem Value="18">SINDHI</asp:ListItem>
                                                                <asp:ListItem Value="6">TELUGU</asp:ListItem>
                                                                <asp:ListItem Value="7">URDU</asp:ListItem>
                                                                <asp:ListItem Value="22">OTHERS</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlNationality" runat="server" Width="80">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                <asp:ListItem Value="1">INDIAN</asp:ListItem>
                                                                <asp:ListItem Value="4">OTHER</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlReligion" runat="server" Width="85">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                <asp:ListItem Value="5">BUDHIST</asp:ListItem>
                                                                <asp:ListItem Value="3">CHRISTIAN</asp:ListItem>
                                                                <asp:ListItem Value="1">HINDU</asp:ListItem>
                                                                <asp:ListItem Value="6">JAIN</asp:ListItem>
                                                                <asp:ListItem Value="2">MUSLIM</asp:ListItem>
                                                                <asp:ListItem Value="7">PARSI</asp:ListItem>
                                                                <asp:ListItem Value="4">SIKH</asp:ListItem>
                                                                <asp:ListItem Value="8">OTHERS</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlBloodGroup" runat="server" Width="80">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                <asp:ListItem Value="1">A+</asp:ListItem>
                                                                <asp:ListItem Value="2">A-</asp:ListItem>
                                                                <asp:ListItem Value="3">B+</asp:ListItem>
                                                                <asp:ListItem Value="4">B-</asp:ListItem>
                                                                <asp:ListItem Value="5">AB+</asp:ListItem>
                                                                <asp:ListItem Value="6">AB-</asp:ListItem>
                                                                <asp:ListItem Value="7">O+</asp:ListItem>
                                                                <asp:ListItem Value="8">O-</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                    </tr>
                                                    <%--  <tr>
                                                <td colspan="3">
                                                    <table width="100%" class="dotBorder" cellpadding="2">
                                                        <tr>
                                                            
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>--%>
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
                    <td bgcolor="#ffffff">
                        <table width="70%" border="0" align="center" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                            <tr>
                                <td bgcolor="#ffffff">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                        <tr>
                                            <td height="25">8<strong><label id="lblN6">.</label>
                                            </strong>
                                            </td>
                                            <td>
                                                <strong>
                                                    <label id="lbladdress">
                                                        Address for Correspondence / &#2346;&#2340;&#2381;&#2352;&#2366;&#2330;&#2366;&#2352;
                                                    &#2325;&#2366; &#2346;&#2340;&#2366;</label>
                                                </strong>
                                                <div style="background: #e1e1e1;">
                                                    मोबाइल नंबर एवं ईमेल आईडी दर्ज करने से पहले आवेदक ये सुनिचित करले, की उनके द्वारा
                                                दर्ज किया जा रहा मोबाइल नंबर एवं ईमेल आइड दोनों ही यूनिक (पहले से किसी दुसरे CAF
                                                में दर्ज न हो) एवं आवेदक द्वारा ही वर्तमान में इस्तेमाल किया जा रहा हों| क्युकी
                                                भविष्य में नामांकन सम्बंधित साडी सूचनाएँ आवेदक को उनके द्वारा दर्ज यूनिक मोबाइल
                                                नंबर एवं ईमेल ईद से दी जायगी|
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;
                                            </td>
                                            <td>
                                                <table width="100%" class="dotBorder" border="0" cellspacing="0" cellpadding="2">
                                                    <tr>
                                                        <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN6a">
                                                                    a.</label>
                                                            </strong>
                                                        </td>
                                                        <td width="8%">
                                                            <label id="lblState" style="color: #8B0000">
                                                                State/UT <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                राज्य / केन्द्र-शासित प्रदेश
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlCState" runat="server" EnableViewState="true"
                                                                Width="175" AppendDataBoundItems="true">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                        <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN6b">
                                                                </label>
                                                                b. </strong>
                                                        </td>
                                                        <td width="6%">
                                                            <label id="lblDistrict" style="color: #8B0000">
                                                                District <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2332;&#2367;&#2354;&#2366;
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td width="15%">
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlCDist" runat="server" EnableViewState="true"
                                                                Width="140" AppendDataBoundItems="true">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                        <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN6c">
                                                                </label>
                                                                c. </strong>
                                                        </td>
                                                        <td width="17%">
                                                            <label id="lblBlock" style="color: #8B0000">
                                                                Block / Municipality <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; / &#2344;&#2327;&#2352; &#2346;&#2352;&#2367;&#2359;&#2342;&#2381;
                                                            &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlCBlock" runat="server" EnableViewState="true"
                                                                Width="155" AppendDataBoundItems="true">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN6d">
                                                                    d.</label>
                                                            </strong>
                                                        </td>
                                                        <td colspan="2">
                                                            <label id="lblHouseNo" style="color: #8B0000">
                                                                House No., Street/Village, Post Office, Police Station Name <font color="#8B0000"
                                                                    size="3">*</font>
                                                                <br />
                                                                अपनी मकान संख्या /सड़क का नाम /गाँव का नाम /पोस्ट ऑफिस एवम पुलिस थाना अवश्य लिखे|
                                                                <br />
                                                                Special characters key except Space, Hyphen, Slash and Comma are not allowed./<br />
                                                                स्पेस, हाइफ़न, स्लैश और कोमा को छोड़कर विशेष वर्ण कुंजी की अनुमति नहीं है।</label>&nbsp;
                                                        <font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td colspan="3">
                                                            <asp:TextBox ID="txtCPS" CssClass="inputitem Uppercase" runat="server" Width="205"
                                                                Height="40px" MaxLength="100" AutoCompleteType="disabled" TextMode="MultiLine"
                                                                onkeyup="return CheckAddress('txtCPS');" onchange="return checkLength('txtCPS',150);" />
                                                        </td>
                                                        <td bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN6e">
                                                                    e.</label>
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            <label id="lblpin" style="color: #8B0000">
                                                                PIN Code <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2331;&#2361; &#2309;&#2306;&#2325;&#2379; &#2325;&#2366; &#2346;&#2367;&#2344;
                                                            &#2325;&#2379;&#2337; &#2351;&#2361;&#2366;&#2305; &#2354;&#2367;&#2326;&#2375;&#2306;
                                                            <font color="#8B0000" size="3">*</font>
                                                            </label>
                                                            &nbsp;
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="txtCPC" CssClass="inputitem" runat="server" Width="150" MaxLength="6"
                                                                AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCPC','Please write only numeric values for PIN CODE',6);" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN6g">
                                                                    f.</label>
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            <label id="lblMobileNo" style="color: #8B0000">
                                                                Mobile No.<font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352;</label>
                                                            <font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="txtCMobNo" CssClass="inputitem" runat="server" Width="150" MaxLength="10"
                                                                AutoCompleteType="disabled" onkeyup="return NumericValidation('txtCMobNo','Please write only numeric values for Mobile No.',12);"
                                                                Onblur="CheckMobNo();" autocomplete="off" onpaste="return false;" onCopy="return false"
                                                                onCut="return false" onDrag="return false" onDrop="return false" />
                                                            <i class="fa fa-check right" aria-hidden="true"></i><i class="fa fa-times wrong"
                                                                aria-hidden="true"></i><i class="fa fa-check inright" aria-hidden="true"></i>
                                                            <i class="fa fa-times inwrong" aria-hidden="true"></i>
                                                        </td>
                                                        <td bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN6h">
                                                                    g.</label>
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            <label id="lblEmail" style="color: #8B0000">
                                                                e-Mail <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2312;-&#2350;&#2375;&#2354;</label>
                                                            <font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox CssClass="inputitem" ID="txtCEmail" runat="server" MaxLength="100" Width="100"
                                                                AutoCompleteType="disabled" onblur="return checkEmail('txtCEmail');" autocomplete="off"
                                                                onpaste="return false;" onCopy="return false" onCut="return false" onDrag="return false"
                                                                onDrop="return false" />
                                                            <i class="fa fa-check eright" aria-hidden="true"></i><i class="fa fa-times ewrong"
                                                                aria-hidden="true"></i><i class="fa fa-check einright" aria-hidden="true"></i>
                                                            <i class="fa fa-times einwrong" aria-hidden="true"></i>
                                                        </td>
                                                        <td bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN6f">
                                                                    h.</label>
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            <label id="lbltelephone">
                                                                Telephone No.(Optional)<br />
                                                                &#2309;&#2327;&#2352; &#2342;&#2370;&#2352;&#2349;&#2366;&#2359; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366;
                                                            &#2313;&#2346;&#2354;&#2348;&#2381;&#2343; &#2361;&#2379; &#2340;&#2379; &#2351;&#2361;&#2366;&#2305;
                                                            &#2349;&#2352;&#2375;&#2306; | (&#2349;&#2352;&#2344;&#2366; &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351;
                                                            &#2344;&#2361;&#2368;&#2306; &#2361;&#2376; |)</label>
                                                            <font color="#8B0000" size="3"></font>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="txtCTCode" runat="server" Width="50" CssClass="inputitem" MaxLength="5"
                                                                AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCTCode','Please write only numeric values for STD Code',5);" />
                                                            -
                                                        <asp:TextBox ID="txtCTeleNo" runat="server" CssClass="inputitem" Width="90" MaxLength="7"
                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCTeleNo','Please write only numeric values for Phone No.',8);" />
                                                            <br />
                                                            <label id="lblAreaCode">
                                                                STD Code</label>&nbsp;- &nbsp;<label id="lblphone">Phone No</label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblAddri">
                                                                    i.</label>
                                                            </strong>
                                                        </td>
                                                        <td colspan="9">
                                                            <div style="border: 1px solid #e1e1e1; padding: 0.5rem 0.8rem; background: #fafafa; margin: 0.5rem; border-radius: 0.25rem;">

                                                                <label id="lblAadharNo" style="color: #8B0000">
                                                                    Aadhaar No.<font color="#8B0000" size="3">*</font></label>

                                                                <asp:TextBox ID="txtAadhar" CssClass="inputitem" runat="server" Width="250" MaxLength="12"
                                                                    AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtAadhar','Please write only numeric values for Aadhaar',12);" />

                                                                <div style="margin-top: 1rem;">
                                                                    (If candidate has not enrolled in Aadhaar and doesn’t have Aadhaar number then he/she is required to submit declaration in next col. that he/she has not been enrolled in Aadhaar and has not got Aadhaar number) 
                                                                </div>
                                                                <div style="margin-top: 1rem;">
                                                                    If candidate has not given Aadhaar Number in above col. , then declaration from candidate that he/she has not enrolled in Aadhaar and has not got any Aadhaar number, should be given :- 

                                                                 <br />
                                                                    (Please note that any WRONG DECLARATION made here, may invite action against the candidate and his/her candidature may be cancelled due to making false declaration)
                                                                </div>
                                                                <div style="margin-top: 1rem;">
                                                                    <asp:CheckBox ID="cbAadharAgree" runat="server" />
                                                                    I, hereby declare that I have not enrolled in Aadhaar and have not got any Aadhaar number. I also understand that any false declaration made by me may have consequence of cancellation of my candidature.
                                                           
                                                                </div>

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
                    <td bgcolor="#ffffff">
                        <table width="70%" border="0" align="center" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                            <tr>
                                <td bgcolor="#FFFFFF">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                        <tr>
                                            <td width="2%" height="25">9<strong><label id="lblN7">.</label>
                                            </strong>
                                            </td>
                                            <td width="68%">
                                                <strong>
                                                    <label id="lblReservation">
                                                        Reservation Details
                                                    <br />
                                                        &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;</label>
                                                </strong>
                                            </td>   
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder nobot-border">
                                                    <tr>
                                                        <td style="background: #e1e1e1;">
                                                            <ul style="padding-left: 20px; margin: 0px;">
                                                                <li style="padding-top: 5px;">आरक्षण से सम्बंधित विवरण देने से पहले यह जाँच कर ले कि दी गयी विवरणी सही है , अन्यथा गलत विवरणी देने के बाद आपका आवेदन रद्द किया जा सकता है साथ ही आपके उपर कानूनी कारवाई भी की जा सकती है |</li>
                                                                <li style="padding-top: 5px;">आरक्षित कोटि के अन्तर्गत प्रवेश लेने वाले आवेदक को प्रखंड विकास पदाधिकारी/ अनुमंडलाधिकारी/जिला पदाधिकारी द्वारा निर्गत जाति प्रमाण-पत्र ही जमा करना है और यही प्रमाण-पत्र मान्य होगा।</li>
                                                                <li style="padding-top: 5px;">दिव्यांग कोटा के आधार पर नामांकन का दावा करने वाले आवेदक को अपने जिले के सिविल सर्जन/मेडिकल बोर्ड द्वारा निर्गत प्रमाण पत्र प्रस्तुत करना होगा जिसमें निःशक्तता का प्रतिशत उल्लेखित हो तथा सिविल सर्जन/मेडिकल बोर्ड द्वारा फोटो भी अभिप्रमाणित किया गया हो। 40 % से कम निःशक्तता वाले आवेदक निःशक्तता श्रेणी में आवेदन न करें।</li>
                                                                <li style="padding-top: 5px;">कोटा के अन्तर्गत जो आवेदक आवेदन करना चाहते हैं उन्हें मूल आवेदन-पत्र के साथ कोटा आवेदन-पत्र भी ऑनलाइन भरना होगा एवं नामांकन के समय प्रमाण पत्र कॉलेज में जमा करना होगा । </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder nobot-border">
                                                    <tr>
                                                        <td style="width: 2%" bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN7a">
                                                                    a.</label>
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            <asp:RadioButton ID="rbtGeneral" runat="server" GroupName="ResCategory1" Checked="true" />
                                                            <span id="GENERAL">General
                                                            <br />
                                                                &#2360;&#2366;&#2350;&#2366;&#2344;&#2381;&#2351; &#2357;&#2352;&#2381;&#2327;</span>
                                                        </td>
                                                        <td>
                                                            <asp:RadioButton ID="rbtSC" runat="server" GroupName="ResCategory1" />
                                                            <span id="SC">Schedule Caste (SC)
                                                            <br />
                                                                &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340; &#2332;&#2366;&#2340;&#2367;</span>
                                                        </td>
                                                        <td>
                                                            <label>
                                                                <asp:RadioButton ID="rbtST" runat="server" GroupName="ResCategory1" />
                                                                <span id="ST">Schedule Tribe (ST)
                                                                <br />
                                                                    &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340; &#2332;&#2344;&#2332;&#2366;&#2340;&#2367;</span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <asp:RadioButton ID="rbtnOBC" runat="server" GroupName="ResCategory1" />
                                                            <span id="OBC">Backward Class(BC)
                                                            <br />
                                                                &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327;</span>
                                                        </td>
                                                        <td>
                                                            <asp:RadioButton ID="rbtOther" runat="server" GroupName="ResCategory1" />
                                                            <span id="OTHER">Extremly Backward Class (EBC)
                                                            <br />
                                                                &#2309;&#2340;&#2381;&#2351;&#2306;&#2340; &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327;
                                                            </span>
                                                        </td>
                                                        <td style="display: none;">
                                                            <asp:RadioButton ID="rbtBCW" runat="server" GroupName="ResCategory1" />
                                                            <span id="WBC">Women Backward Class (WBC)
                                                            <br />
                                                                &#2346;&#2367;&#2331;&#2396;&#2375; &#2357;&#2352;&#2381;&#2327; &#2325;&#2368;
                                                            &#2350;&#2361;&#2367;&#2354;&#2366;&#2351;&#2375; </span>
                                                        </td>
                                                        <asp:HiddenField ID="hidCategory" runat="server" />
                                                    </tr>
                                                </table>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                    <tr>
                                                        <td style="width: 2%" bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label id="lblN7b">
                                                                    b.</label>
                                                            </strong>
                                                        </td>
                                                        <td colspan="5">
                                                            <%-- <asp:CheckBox ID="chkPHOH" runat="server" onclick="highLight('chkPHOH','PHOH','Physically/Orthopadically Handicapped (PH/OH) <br />&#2344;&#2367;: &#2358;&#2325;&#2381;&#2340;&#2340;&#2366; &#2325;&#2375; &#2310;&#2343;&#2366;&#2352; &#2346;&#2352;' );" />--%>
                                                            <span id="PHOH" />Specially Abled ( &#2342;&#2367;&#2357;&#2381;&#2351;&#2366;&#2306;&#2327;
                                                        )
                                                        <asp:RadioButton ID="chkPHOHN" runat="server" Checked="true" GroupName="PHOH" />
                                                            <span id="Span2">No/ &#2344;&#2361;&#2368;&#2306;</span>
                                                            <asp:RadioButton ID="chkPHOHY" runat="server" GroupName="PHOH" onclick="highlightCat1();" />
                                                            <span id="Span3">Yes/ &#2361;&#2366;&#2305;</span>
                                                        </td>
                                                        <td colspan="5">EWS (Economically Weaker Section)
                                                        <asp:RadioButton ID="rbtEWSNo" runat="server" Checked="true" GroupName="EWS" />
                                                            <span id="Span4">No/ &#2344;&#2361;&#2368;&#2306;</span>
                                                            <asp:RadioButton ID="rbtEWSYes" runat="server" GroupName="EWS" />
                                                            <span id="Span5">Yes/ &#2361;&#2366;&#2305;</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#1567A1" class="whitetxt" style="display: none;">
                                                            <strong>
                                                                <label id="lblN7c">
                                                                    c.</label>
                                                            </strong>
                                                        </td>
                                                        <td style="display: none;">
                                                            <asp:RadioButton ID="rbtESM" runat="server" GroupName="ResCategory2" onclick="highlightCat2();" />
                                                            <span id="ESM">Ex-Service Man (ESM) </span>
                                                        </td>
                                                        <td style="display: none;">
                                                            <asp:RadioButton ID="rbtCoM" runat="server" GroupName="ResCategory2" onclick="highlightCat2();" />
                                                            <span id="CoM">Children of Martyrs (CoM)</span>
                                                        </td>
                                                        <td width="29%" style="display: none;">
                                                            <asp:RadioButton ID="rbtSDP" runat="server" GroupName="ResCategory2" onclick="highlightCat2();" />
                                                            <span id="SDP">Serving Defence Personnel (SDP)</span>
                                                        </td>
                                                        <td width="26%" colspan="2" style="display: none;">
                                                            <asp:RadioButton ID="rbtNon" runat="server" GroupName="ResCategory2" Checked="true"
                                                                onclick="highlightCat2();" />
                                                            <span id="NoN">None</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                    <tr>
                                                        <td style="width: 2%" bgcolor="#1567A1" class="whitetxt">
                                                            <strong>
                                                                <label>
                                                                    c.</label>
                                                            </strong>
                                                        </td>
                                                        <td colspan="10"> 
                                                            <span id="ApplicationType" />Application Type ( आवेदन का प्रकार )
                                                            <asp:RadioButton ID="rbtnMinority" runat="server" Checked="true" GroupName="ApplicationType" />
                                                            <span id="spanMinority">Minority ( अल्पसंख्यक )</span>
                                                            <asp:RadioButton ID="rbtnCoaching" runat="server" GroupName="ApplicationType"  />
                                                            <span id="spanCoaching">Coaching Quota ( कोचिंग कोटा )</span>
                                                             <asp:RadioButton ID="rbtnOtherQuota" runat="server" GroupName="ApplicationType"   />
                                                            <span id="spanOtherQuota">Other Quota ( अन्य कोटा )</span>
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
                    <td bgcolor="#ffffff">
                        <table width="70%" border="0" align="center" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                            <tr>
                                <td bgcolor="#FFFFFF">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" style="display: none;">
                                        <tr>
                                            <td width="1%" height="25">10<strong><label id="lblN8">.</label>
                                            </strong>
                                            </td>
                                            <td width="99%">
                                                <strong>
                                                    <label id='lblWeightage'>
                                                        Weightage Details / &#2350;&#2361;&#2340;&#2381;&#2357; &#2357;&#2367;&#2357;&#2352;&#2339;
                                                    <strong style="color: Blue;">&nbsp;(&#2351;&#2342;&#2367; &#2354;&#2366;&#2327;&#2370;
                                                        &#2361;&#2379; &#2340;&#2379; &#2360;&#2350;&#2381;&#2348;&#2306;&#2343;&#2367;&#2340;
                                                        &#2357;&#2367;&#2325;&#2354;&#2381;&#2346; &#2325;&#2379; &#2330;&#2369;&#2344;&#2375;
                                                        / Select the appropriate option if Applicable )</strong>
                                                    </label>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;
                                            </td>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td width="22%" valign="top">
                                                            <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC">
                                                                <tr>
                                                                    <td colspan="2" bgcolor="#1567a1" class="whitetxt">
                                                                        <strong>
                                                                            <label id="lblN8a">
                                                                                a.</label>
                                                                            <strong>
                                                                                <label id="NCC">
                                                                                    NCC
                                                                                </label>
                                                                            </strong></strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#FFFFFF">
                                                                        <asp:CheckBox ID="chkNCCA" runat="server" onclick="highLight('chkNCCA','NCCA','NCC (A)' );" />
                                                                        <span id="NCCA">NCC</span>
                                                                    </td>
                                                                    <td width="48%" bgcolor="#FFFFFF" style="display: none">
                                                                        <asp:CheckBox ID="chkNCCC" runat="server" onclick="highLight('chkNCCC','NCCC','NCC (C)' );" />
                                                                        <span id="NCCC">NCC (C)</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td width="0%" valign="top">&nbsp;
                                                        </td>
                                                        <td width="42%" valign="top">
                                                            <table width="99%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC" style="display: none">
                                                                <tr>
                                                                    <td colspan="2" bgcolor="#1567A1" class="whitetxt">
                                                                        <strong>
                                                                            <label id="lblN8b">
                                                                                b.</label></strong><strong>
                                                                                    <label id="lblscout">
                                                                                        Scout &amp; Guide
                                                                                    </label>
                                                                                </strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#FFFFFF">
                                                                        <asp:CheckBox ID="chkSCRP" runat="server" onclick="highLight('chkSCRP','RP','Rajya Puraskar  (RP)' );" />
                                                                        <span id="RP">Rajya Puraskar (RP)</span>
                                                                    </td>
                                                                    <td width="55%" bgcolor="#FFFFFF">
                                                                        <asp:CheckBox ID="chkSCPR" runat="server" onclick="highLight('chkSCPR','PR','President Recognition (PR)' );" />
                                                                        <span id="PR">President Recognition (PR)</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td width="0%" valign="top">&nbsp;
                                                        </td>
                                                        <td width="35%" valign="top">
                                                            <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC"
                                                                style="display: none">
                                                                <tr>
                                                                    <td colspan="3" bgcolor="#1567A1" class="whitetxt">
                                                                        <strong>
                                                                            <label id="lblN8c">
                                                                                c.</label></strong><strong>
                                                                                    <label id="sport">
                                                                                        Sports
                                                                                    </label>
                                                                                </strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="32%" bgcolor="#FFFFFF">
                                                                        <asp:CheckBox ID="chkSportsS" runat="server" onclick="highLight('chkSportsS','SportS','State' );" />
                                                                        <span id="SportS">State </span>
                                                                    </td>
                                                                    <td width="30%" bgcolor="#FFFFFF">
                                                                        <asp:CheckBox ID="chkSportsN" runat="server" onclick="highLight('chkSportsN','SportN','National' );" />
                                                                        <span id="SportN">National </span><strong></strong>
                                                                    </td>
                                                                    <td width="38%" bgcolor="#FFFFFF">
                                                                        <asp:CheckBox ID="chkSportsIN" runat="server" onclick="highLight('chkSportsIN','SportIN','International' );" />
                                                                        <span id="SportIN">International </span>
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
                    <td bgcolor="#ffffff">
                        <table width="70%" border="0" align="center" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                            <tr>
                                <td bgcolor="#f8f5d4">
                                    <div id="tblChoice" style="display: none;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <label id="lbloption">
                                                            Option(s)/Choice(s) Details
                                                        </label>
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table width="100%" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC" id="tableOption">
                                                        <tr>
                                                            <th bgcolor="#FE6A08" class="whitetxt">
                                                                <strong>Option Sl.No </strong>
                                                            </th>
                                                            <th bgcolor="#FE6A08" class="whitetxt">
                                                                <strong>College </strong>
                                                            </th>
                                                            <th bgcolor="#FE6A08" class="whitetxt">
                                                                <strong>Stream </strong>
                                                            </th>
                                                            <%--  <th bgcolor="#FE6A08" class="whitetxt" style="display:none;">
                                                            <strong>Compulsory </strong>
                                                        </th>
                                                        <th bgcolor="#FE6A08" class="whitetxt" style="display:none;">
                                                            <strong>Elective </strong>
                                                        </th>
                                                        <th bgcolor="#FE6A08" class="whitetxt" style="display:none;">
                                                            <strong>Fourth Elective </strong>
                                                        </th>--%>
                                                            <th bgcolor="#FE6A08" class="whitetxt">
                                                                <strong>Delete</strong>
                                                            </th>
                                                        </tr>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td align="right" bgcolor="#FFFFFF">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                        <tr>
                                            <td>
                                                <strong>10. Please Fill the Option of the Colleges & Stream in Which You Want to Get
                                                Admission.
                                                <br />
                                                    जिस कॉलेज एवं संकाय में आप नामांकन लेना चाहते हें, उन विक्लपो का चयन यहाँ भरे |
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="5px;"></td>
                                        </tr>
                                        <tr>
                                            <td style="background: #e1e1e1;">आप ऑनलाइन आवेदन पत्र के माध्यम से बीस विकल्प विभिन्न कॉलेज में आवेदन दे सकते हैं|
                                            अपने विकल्पों का चुनाव अपनी वरीयता सूची के अनुसार करें |आवेदन में विकल्प भरते समय
                                            यह सुनिश्चित करें की जो विकल्प आप पहले भरेंगे उसी के अनुसार आपका चयन किया जाएगा
                                            | विकल्पों को भरते समय यह सुनिश्चित करें कि आपकी प्राथमिकता सूची आपके पसंद के अनुरूप
                                            है | आपके द्वारा भरी गयी कालेजो की प्राथमिकता सूची में ऊपर से नीचे के क्रम में आपकी
                                            मेधा (अंक) एवं आरक्षण श्रेणी के अनुसार जो सबसे पहला सफल विकल्प जिसमे आपका चुनाव
                                            होगा , उस कॉलेज की नामांकन सूची में आपका नाम आएगा |
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="color: blue; font-weight: bold; display: none;" colspan="2">
                                                <label id="lblinf">
                                                    You are required to select at least <span style="color: blue">5</span> and at most
                                                <span style="color: blue">20</span> options / आप न्यूनतम 5 विकल्प एवम अधिकतम 20
                                                विकल्प यहाँ भर सकते हैं | विकल्पो का चुनाव करते समय इंटर स्कूल या इंटर महाविद्यालयो
                                                की सूची आपके द्वारा चुने लिंग (स्त्री/पुरुष/अन्य) एवं आरक्षण कोटि (सामान्य/ पिछड़ा
                                                वर्ग /अत्यंत पिछड़ा वर्ग /अनुसूचित जाति /अनुसूचित जनजाति) के अनुसार ही दर्शाया जायेगा|
                                                अगर आपसे भूलवश गलत लिंग (स्त्री/पुरुष/अन्य) या आरक्षण कोटि (सामान्य/ पिछड़ा वर्ग
                                                /अत्यंत पिछड़ा वर्ग /अनुसूचित जाति /अनुसूचित जनजाति) का चुनाव हो गया हैं, और इंटर
                                                स्कूल / इंटर महाविद्यालय का चुनाव भी कर चुके हे , तो सुधार करने हेतु, सबसे पहले
                                                आपको चुने गए विकल्पों को हटाना (delete) होगा, तद्पश्चात आप अपने चुने लिंग (स्त्री/पुरुष/अन्य)
                                                और आरक्षण कोटि (सामान्य/पिछरा वर्ग /अत्यंत पिछरा वर्ग /अनुसूचित जाति /अनुसूचित जनजाति)
                                                में बदलाव कर सकते हैं|
                                                </label>
                                                <br />
                                                <br />
                                                प्रथम मेघा सूचि निकलने के उपरांत चुने गए विक्लपो में किसी भी तरह का बदलाव संभव नही
                                            होगा, इसलिए आवेदक अच्छी तरह से सोच समझ कर विक्लपो का चयन करे, ताकि भविष्य में विक्लपो
                                            में बदलाव की आव्य्स्कता न परे| आवेदको को ये सलाह दी जाती हें की, प्राथिमिकता वाले
                                            विकल्पों को चुनने से पहले वो OFSS Portal (www.ofssbihar.in) पर “Cut-off” मेनू के
                                            अन्दर “Intermediate 2018 cut-off” लिंक पे क्लिक कर 2018 में OFSS दारा प्रकाशित सभी
                                            विद्यालयों एवं महाविद्यालयों के संकायों का Cut-off प्रतिशत देख ले जिससे की आपको
                                            पसंदीदा विद्यालयों एवं महाविद्यालयों को चुनने में आसानी हो|
                                            </td>
                                        </tr>
                                        <tr style="background: #75bf52; border: 1px solid #6ab148; font-size: 13px; font-weight: bold; display: none;">
                                            <td width="100%" align="left" colspan="2">
                                                <div class="Capactive" id="Caption">
                                                    Enter here for 1st Option / &#2309;&#2346;&#2344;&#2366; &#2346;&#2361;&#2354;&#2366;
                                                &#2357;&#2367;&#2325;&#2354;&#2381;&#2346; &#2330;&#2369;&#2344;&#2375;&#2306;
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" colspan="2">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                                    <tr style="display: none">
                                                        <td bgcolor="#1567a1" class="whitetxt" style="width: 15px;">
                                                            <strong>
                                                                <label id="lbla">
                                                                    a.</label>
                                                            </strong>
                                                        </td>
                                                        <td style="width: 150px;">
                                                            <label id="lblColType" style="color: #8B0000">
                                                                College Type <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2346;&#2381;&#2352;&#2325;&#2366;&#2352;
                                                            </label>
                                                            <font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td colspan="4">
                                                            <asp:RadioButton ID="rbtOthersFinance" runat="server" GroupName="FundingSource" onclick="highlightCollegeType();ClrColType();"
                                                                Checked="true" />
                                                            <span id="OF">Govt. / Aided / Private </span>
                                                            <asp:RadioButton ID="rbtSelfFinance" runat="server" Style="display: none" GroupName="FundingSource"
                                                                onclick="highlightCollegeType();ClrColType();" />
                                                            <span id="SF" style="display: none">Self Financing</span>
                                                            <asp:RadioButton ID="rbtVocational" runat="server" Style="display: none" GroupName="FundingSource"
                                                                onclick="highlightCollegeType();VocColType();" />
                                                            <span id="VF" style="display: none">Vocational</span>
                                                            <asp:RadioButton ID="rbtSanskrit" runat="server" Style="display: none" GroupName="FundingSource"
                                                                onclick="highlightCollegeType();SanColType()" />
                                                            <span id="S" style="display: none">Sanskrit</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#1567a1" class="whitetxt" style="width: 15px;">
                                                            <strong>
                                                                <label id="lblb">
                                                                    a.</label></strong>
                                                        </td>
                                                        <td style="width: 320px;">
                                                            <label id="lblDname" style="color: #8B0000">
                                                                District Name <font color="#8B0000" size="3">*</font>
                                                                <br />
                                                                &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375; &#2325;&#2375; &#2325;&#2377;&#2354;&#2375;&#2332;
                                                            &#2350;&#2375;&#2306; &#2342;&#2366;&#2326;&#2367;&#2354;&#2366; &#2354;&#2375;&#2344;&#2366;
                                                            &#2330;&#2366;&#2361;&#2340;&#2375; &#2361;&#2376;&#2306; &#2313;&#2360;&#2325;&#2366;
                                                            &#2330;&#2369;&#2344;&#2366;&#2357; &#2325;&#2352;&#2375;|</label>
                                                            <font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td colspan="4" valign="middle">
                                                            <div style="float: left; width: 30%; margin-top: 6px;">
                                                                <asp:DropDownList CssClass="inputitem" ID="ddlCollegeDistrict" runat="server" Width="155">
                                                                    <%-- <asp:ListItem Value="0">-- SELECT --</asp:ListItem>--%>
                                                                </asp:DropDownList>
                                                            </div>
                                                            <div style="float: left; width: 70%; display: none;">
                                                                <div>
                                                                    <span id="Heading1" style="font-size: 11px; font-weight: bold;"></span>&nbsp;<span
                                                                        id="cutoffST1" style="font-size: 11px;"></span> &nbsp;<span id="cutoffSC1" style="font-size: 11px;"></span>&nbsp;<span
                                                                            id="cutoffGen1" style="font-size: 11px;"></span>
                                                                </div>
                                                                <div style="margin-left: 105px;">
                                                                    <span id="Heading2" style="font-size: 11px; font-weight: bold;"></span>&nbsp;<span
                                                                        id="cutoffST2" style="font-size: 11px;"></span>&nbsp;<span id="cutoffSC2" style="font-size: 11px;"></span>
                                                                    &nbsp;<span id="cutoffGen2" style="font-size: 11px;"></span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="1%" bgcolor="#1567A1" class="whitetxt" style="height: 32px">
                                                            <strong>
                                                                <label id="lblc">
                                                                    b.</label></strong>
                                                        </td>
                                                        <td style="width: 150px;">
                                                            <label id="lblcolname" style="color: #8B0000">
                                                                College Name<font color="#8B0000" size="3">*</font> / &#2325;&#2377;&#2354;&#2375;&#2332;
                                                            &#2325;&#2366; &#2344;&#2366;&#2350; &#2330;&#2369;&#2344;&#2375;
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td colspan="4" style="padding: 0;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <asp:DropDownList CssClass="inputitem" ID="ddlCollege" runat="server" Width="300">
                                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                        <td width="20" height="32" align="center" bgcolor="#1567A1" class="whitetxt">
                                                                            <strong>
                                                                                <label id="lbld">
                                                                                    c.</label></strong>
                                                                        </td>
                                                                        <td>
                                                                            <label id="lblStream" style="color: #8B0000">
                                                                                Stream <font color="#8B0000" size="3">*</font>/ &#2360;&#2306;&#2325;&#2366;&#2351;
                                                                            &#2330;&#2369;&#2344;&#2375;
                                                                            </label>
                                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList CssClass="inputitem" ID="ddlStream" runat="server" AppendDataBoundItems="true"
                                                                                Width="113px">
                                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#1567A1" class="whitetxt" style="height: 32px; display: none;">
                                                            <strong>
                                                                <label id="lble">
                                                                    d.</label></strong>
                                                        </td>
                                                        <td style="width: 150px; display: none;">
                                                            <label id="comsub" style="color: #8B0000">
                                                                Compulsory (MIL) <font color="#8B0000" size="3">*</font>/ &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351;
                                                            &#2357;&#2367;&#2359;&#2351;
                                                            </label>
                                                            &nbsp;<font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td colspan="4" style="display: none;">
                                                            <span>
                                                                <asp:DropDownList CssClass="inputitem" ID="ddlCompulsory" AppendDataBoundItems="true"
                                                                    Visible="false" runat="server" Width="166px">
                                                                    <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                </asp:DropDownList>
                                                            </span>
                                                            <table border="0" cellspacing="0" cellpadding="2" class="noBorderTab" style="display: none;">
                                                                <tr>
                                                                    <td>
                                                                        <label id="lblCompulsorySubject" style="color: #8B0000">
                                                                            Compulsory Subject<font color="#8B0000" size="3">*</font>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label id="lblMB" style="color: #8B0000">
                                                                            Matri Bhasha <font color="#8B0000" size="3">*</font>
                                                                        </label>
                                                                    </td>
                                                                    <td id="SlblLL">
                                                                        <label id="lblLL" style="color: #8B0000">
                                                                            Language Literature <font color="#8B0000" size="3">*</font>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:DropDownList CssClass="inputitem" ID="ddlFC" AppendDataBoundItems="true" runat="server"
                                                                            Width="166px">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList CssClass="inputitem" ID="ddlMB" AppendDataBoundItems="true" runat="server"
                                                                            Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td id="Td1">
                                                                        <asp:DropDownList CssClass="inputitem" ID="ddlLL" AppendDataBoundItems="true" runat="server"
                                                                            Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#1567A1" class="whitetxt" style="height: 32px; display: none;">
                                                            <strong>
                                                                <label id="lblf">
                                                                    e.</label></strong>
                                                        </td>
                                                        <td style="width: 150px; display: none;">
                                                            <label id="lblESub" style="color: #8B0000">
                                                                Elective Subject<font color="#8B0000" size="3">*</font> / &#2344;&#2367;&#2352;&#2381;&#2357;&#2366;&#2330;&#2367;&#2340;
                                                            &#2357;&#2367;&#2359;&#2351;</label>
                                                            <font color="#8B0000" size="3">*</font>
                                                        </td>
                                                        <td colspan="4" style="display: none;">
                                                            <table border="0" cellspacing="0" cellpadding="2" class="noBorderTab" style="display: none;">
                                                                <tr>
                                                                    <td>
                                                                        <label id="lblFESub" style="color: #8B0000">
                                                                            First Elective<font color="#8B0000" size="3">*</font>
                                                                            <br />
                                                                            &#2346;&#2381;&#2352;&#2341;&#2350; &#2357;&#2376;&#2325;&#2354;&#2381;&#2346;&#2367;&#2325;
                                                                        &#2357;&#2367;&#2359;&#2351;
                                                                        </label>
                                                                        &nbsp;<font color="#8B0000" size="3">*</font>
                                                                    </td>
                                                                    <td>
                                                                        <label id="lblSESub" style="color: #8B0000">
                                                                            Second Elective <font color="#8B0000" size="3">*</font>
                                                                            <br />
                                                                            &#2342;&#2370;&#2360;&#2352;&#2366; &#2357;&#2376;&#2325;&#2354;&#2381;&#2346;&#2367;&#2325;
                                                                        &#2357;&#2367;&#2359;&#2351;
                                                                        </label>
                                                                        &nbsp;<font color="#8B0000" size="3">*</font>
                                                                    </td>
                                                                    <td id="SlblTESub">
                                                                        <label id="lblTESub" style="color: #8B0000">
                                                                            Third Elective <font color="#8B0000" size="3">*</font>
                                                                            <br />
                                                                            &#2340;&#2368;&#2360;&#2352;&#2366; &#2357;&#2376;&#2325;&#2354;&#2381;&#2346;&#2367;&#2325;
                                                                        &#2357;&#2367;&#2359;&#2351;
                                                                        </label>
                                                                        &nbsp;<font color="#8B0000" size="3">*</font>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:DropDownList CssClass="inputitem" ID="ddlELE1" AppendDataBoundItems="true" runat="server"
                                                                            Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                        <div id="sp1" style="display: none;" class="bordernew">
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList CssClass="inputitem" ID="ddlELE2" AppendDataBoundItems="true" runat="server"
                                                                            Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                        <div id="sp2" style="display: none;" class="bordernew">
                                                                        </div>
                                                                    </td>
                                                                    <td id="SddlELE3">
                                                                        <asp:DropDownList CssClass="inputitem" ID="ddlELE3" AppendDataBoundItems="true" runat="server"
                                                                            Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                        <div id="sp3" style="display: none;" class="bordernew">
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr id="4thE">
                                                        <td bgcolor="#1567A1" class="whitetxt" style="display: none;">
                                                            <strong><span style="width: 2%;">
                                                                <label id="lblg">
                                                                    f.</label></span></strong>
                                                        </td>
                                                        <td style="width: 150px; display: none;">
                                                            <label id="ForEle">
                                                                4th Elective in order of preference / &#2320;&#2330;&#2381;&#2331;&#2367;&#2325;
                                                            &#2357;&#2367;&#2359;&#2351;
                                                            </label>
                                                        </td>
                                                        <td colspan="4" style="display: none;">
                                                            <table border="0" cellspacing="0" class="noBorderTab" cellpadding="2" style="display: none;">
                                                                <tr>
                                                                    <td>
                                                                        <label id="lblFchoice">
                                                                            First Choice</label>
                                                                    </td>
                                                                    <td style="display: none;">
                                                                        <label id="lblSchoice">
                                                                            Second Choice</label>
                                                                    </td>
                                                                    <td style="display: none;">
                                                                        <label id="lblTchoice">
                                                                            Third Choice</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:DropDownList CssClass="inputitem" ID="ddl4thELE1" AppendDataBoundItems="true"
                                                                            runat="server" Width="165" onchange="vocational(this.id);">
                                                                            <%----%>
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="display: none;">
                                                                        <asp:DropDownList CssClass="inputitem" ID="ddl4thELE2" AppendDataBoundItems="true"
                                                                            runat="server" Width="165" onchange="subjectvalidation();vocational(this.id);">
                                                                            <%----%>
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="display: none;">
                                                                        <asp:DropDownList CssClass="inputitem" ID="ddl4thELE3" AppendDataBoundItems="true"
                                                                            runat="server" Width="165" onchange="subjectvalidation();vocational(this.id);">
                                                                            <%----%>
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr id="trHPriority" style="display: none;">
                                                        <td bgcolor="#1567a1" class="whitetxt">
                                                            <strong>i.</strong>
                                                        </td>
                                                        <td style="width: 150px;">
                                                            <label id="lblpriority">
                                                                Hostel Priority</label>
                                                        </td>
                                                        <td colspan="3">
                                                            <strong><span id="HType"></span></strong>
                                                        </td>
                                                        <td>
                                                            <strong><span id="fees1"></span>&nbsp;<span id="fees2"></span> </strong>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr style="background: #75bf52; border: 1px solid #6ab148; font-size: 13px; font-weight: bold; display: none;">
                                            <td height="25" align="left" colspan="2" style="border: 1px dotted #C8C8C8;">
                                                <em style="color: Blue;"><strong>
                                                    <label id="lblchoice" style="color: #8B0000">
                                                        Do you Want to fill more options for applying in Other colleges and Subjects? &#2325;&#2381;&#2351;&#2366;
                                                    &#2310;&#2346; &#2309;&#2344;&#2381;&#2351; &#2325;&#2377;&#2354;&#2375;&#2332;&#2379;&#2306;
                                                    &#2350;&#2375;&#2306; &#2324;&#2352; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;
                                                    &#2349;&#2352;&#2344;&#2366; &#2330;&#2366;&#2361;&#2340;&#2375; &#2361;&#2376;&#2306;
                                                    ?
                                                    <asp:RadioButton ID="rbtnYes" runat="server" GroupName="G1" Text="Yes/ &#2361;&#2366;&#2305;"
                                                        Style="color: #8B0000" onClick="HideShow();" />
                                                        <asp:RadioButton ID="rbtnNo" runat="server" GroupName="G1" Text="No/&#2344;&#2361;&#2368;&#2306; "
                                                            Style="color: #8B0000" onClick="HideShow();" />
                                                    </label>
                                                </strong></em>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" colspan="2">
                                                <table border="0" align="center" cellpadding="0" cellspacing="0" id="tblOptionButton"
                                                    style="display: none">
                                                    <tr>
                                                        <td>
                                                            <input name="button" type="button" class="optionbtnNew" id="2" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(2); return verhoeff();" value="2nd Option / &#2342;&#2370;&#2360;&#2352;&#2366; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button2" type="button" class="optionbtnNew" id="3" title="Click to add options;"
                                                                onclick="ELEsubjectvalidation(); updateRow(3); return verhoeff();" value="3rd Option / &#2340;&#2368;&#2360;&#2352;&#2366; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button3" type="button" class="optionbtnNew" id="4" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(4); return verhoeff();" value="4th Option / &#2330;&#2380;&#2341;&#2366; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button4" type="button" class="optionbtnNew" id="5" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(5); return verhoeff();" value="5th Option / 5 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button5" type="button" class="optionbtnNew" id="6" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(6); return verhoeff();" value="6th Option/ 6 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button6" type="button" class="optionbtnNew" id="7" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(7); return verhoeff();" value="7th Option/ 7 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button7" type="button" class="optionbtnNew" id="8" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(8); return verhoeff();" value="8th Option/ 8 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button8" type="button" class="optionbtnNew" id="9" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(9); return verhoeff();" value="9th Option/ 9 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button9" type="button" class="optionbtnNew" id="10" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(10); return verhoeff();" value="10th Option/ 10 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button10" type="button" class="optionbtnNew" id="11" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(11); return verhoeff();" value="11th Option/ 11 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button11" type="button" class="optionbtnNew" id="12" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(12); return verhoeff();" value="12th Option/ 12 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button12" type="button" class="optionbtnNew" id="13" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(13); return verhoeff();" value="13th Option/ 13 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button13" type="button" class="optionbtnNew" id="14" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(14); return verhoeff();" value="14th Option/ 14 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button14" type="button" class="optionbtnNew" id="15" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(15); return verhoeff();" value="15th Option/ 15 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button15" type="button" class="optionbtnNew" id="16" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(16); return verhoeff();" value="16th Option/ 16 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button16" type="button" class="optionbtnNew" id="17" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(17); return verhoeff();" value="17th Option/ 17 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button17" type="button" class="optionbtnNew" id="18" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(18); return verhoeff();" value="18th Option/ 18 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button18" type="button" class="optionbtnNew" id="19" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(19); return verhoeff();" value="19th Option/ 19 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                        <td>
                                                            <input name="button19" type="button" class="optionbtnNew" id="20" title="Click to add options"
                                                                onclick="ELEsubjectvalidation(); updateRow(20); return verhoeff();" value="20th Option/ 20 &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                style="background-image: url(../images/add.png); background-repeat: no-repeat; display: none; background-position: 8px center; background-size: 12px; min-height: 30px; width: 170px; line-height: 30px; margin-top: 0px;" />
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" align="center" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td>
                                                            <asp:CheckBox ID="cbAgree1" runat="server" />
                                                            मैं यह सत्यापित करता/करती हूँ कि उपरोक्त भरी गयी सभी सूचनाएँ सही हैं एवं उपर भरी गयी सूचना के गलत पाए जाने पर मेरा आवेदन पत्र अस्वीकृत किया जा सकता है | इसके लिए मेरा कोई भी दावा मान्य नहीं होगा |
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:CheckBox ID="cbAgree2" runat="server" />
                                                            मैं यह स्वीकृत करता/करती हूँ कि आवेदन की राशि जमा करने के पश्चात ही मेरा आवेदन स्वीकार किया जाएगा | बिना आवेदन शुल्क के मेरा आवेदन अस्वीकृत कर दिया जाएगा एवं उसके लिए मेरा कोई भी दावा मान्य नहीं होगा |
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center">
                                                            <asp:Button CssClass="submitBtn" ID="btnSave" runat="server" Style="height: 30px; line-height: 17px;"
                                                                Text="यहाँ क्लिक करें | Please click here"
                                                                OnClientClick="ELEsubjectvalidation();return getOptions();check()" OnClick="btnSave_Click" />
                                                            <asp:HiddenField ID="hdnUniqueId" runat="server" />
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
                    <td height="30" align="center" style="display: none">
                        <%-- <asp:Button CssClass="submitBtn" ID="btnSave" runat="server" Text="APPLY" 
                    OnClientClick="return getOptions();vocational();" onclick="btnSave_Click" />--%>
                    </td>
                </tr>
            </table>
        </div>
        <%-- <div id="basic-modal-content" class="NotBox">
        <iframe src="../ONLINE_CAF/RoyalColgNotification.aspx" width="100%" height="185"
            marginheight="0" marginwidth="0" frameborder="0" scrolling="No"></iframe>
    </div>--%>
        <div id="loding" class="loading" align="center">
            Loading. Please wait.<br />
            <br />
            <%--<img src="loader.gif" alt="" />--%>
        </div>
    </form>
    <script type="text/javascript">
        debugger;
        loadDistricts(document.getElementById('hidDistrictID').value); checkCOSAStatus(); checkConfirmationStatus(); ExamType(); ShowGrade(); setGrade();
        $(document).ready(function () {
            $('#<%= ddlCollegeDistrict.ClientID %>').change(function () {
                if (!DropDownValidation('ddlGender', 'your Gender')) {
                    document.getElementById('ddlCollegeDistrict').value = "0";
                    return false;
                }
            });

            document.getElementById('tblOptionButton').style.display = 'none';

            $("#rbtGeneral").change(function () {
                if ($("#rbtGeneral").is(":checked")) {
                    $("#rbtEWSYes").removeAttr("disabled");
                    $("#rbtEWSNo").removeAttr("disabled");
                }
            });

            $("#rbtSC").change(function () {
                if ($("#rbtSC").is(":checked")) {
                    $("#rbtEWSNo").prop('checked', 'checked');
                    $("#rbtEWSYes").attr('disabled', 'disabled');
                    $("#rbtEWSNo").attr('disabled', 'disabled');
                }
            });

            $("#rbtST").change(function () {
                if ($("#rbtST").is(":checked")) {
                    $("#rbtEWSNo").prop('checked', 'checked');
                    $("#rbtEWSYes").attr('disabled', 'disabled');
                    $("#rbtEWSNo").attr('disabled', 'disabled');
                }
            });

            $("#rbtnOBC").change(function () {
                if ($("#rbtnOBC").is(":checked")) {
                    $("#rbtEWSNo").prop('checked', 'checked');
                    $("#rbtEWSYes").attr('disabled', 'disabled');
                    $("#rbtEWSNo").attr('disabled', 'disabled');
                }
            });

            $("#rbtOther").change(function () {
                if ($("#rbtOther").is(":checked")) {
                    $("#rbtEWSNo").prop('checked', 'checked');
                    $("#rbtEWSYes").attr('disabled', 'disabled');
                    $("#rbtEWSNo").attr('disabled', 'disabled');
                }
            });
            $('#<%= cbAadharAgree.ClientID %>').change(function () {
                if ($(this).prop('checked')) {
                    $('#<%= txtAadhar.ClientID %>').val('');
                }
            });
            $('#<%= txtAadhar.ClientID %>').change(function () {
                if ($(this).val().trim() != '') {
                    $('#<%= cbAadharAgree.ClientID %>').prop('checked', false);
                }
            });

           
            $("#rbtnMinority").change(function () {
                removeOption(1);
                fillStream(document.getElementById('hidCollegeID').value);
            });
            $("#rbtnCoaching").change(function () {
                removeOption(1);
                fillStream(document.getElementById('hidCollegeID').value);
            });
            $("#rbtnOtherQuota").change(function () {
                removeOption(1);
                fillStream(document.getElementById('hidCollegeID').value);
            });

        });

        function HideShow() {
            //debugger;
            if (document.getElementById('rbtnYes').checked == true) {
                document.getElementById('tblOptionButton').style.display = '';
            }
            else {
                document.getElementById('tblOptionButton').style.display = 'none';
            }
        };




        //        $('form').live("submit", function () {
        //         
        //            ShowProgress();
        //        });

        var validNumber = new RegExp(/^\d*\.?\d*$/);
        var lastValid = document.getElementById('txtCGPA').value;
        function DecimalNumber(elem) {

            if (validNumber.test(elem.value)) {
                lastValid = elem.value;
            } else {
                elem.value = lastValid;
            }
        }
    </script>

    <script language="javascript" type="text/javascript">
        function ShowPreview(e) {
            //debugger;
            //================Checking Extension===================
            var ids = e.id;

            var fileExtension = ['jpg', 'jpeg', 'png'];
            if ($.inArray($('#' + ids).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
                $('#' + ids).val('');
                alert('Only jpg,jpeg,png files are allowed');
                $('#' + ids).focus();
                return false;
            }
            var file_size = $('#' + ids)[0].files[0].size;
            if (file_size > 2097152) {
                $('#' + ids).val('');
                alert('Please upload a valid image having size less than 2MB');
                $('#' + ids).focus();
                return false;
            }
            if (e.files && e.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#ImgAppl').attr('src', e.target.result);
                    $("#<%=hdnImgAppl.ClientID%>").val(e.target.result);//stores image src in hiddenfield
                }
                reader.readAsDataURL(e.files[0]);
            }
            $('#hdnImgAppl').val("1");

        }
    </script>
</body>
</html>
