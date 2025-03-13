<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CAFDEGSPOT.aspx.cs" Inherits="ONLINE_CAF_CAFForm_DEG_SPOT"
    EnableEventValidation="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Common Application Form</title>
    <link href="../style/CAF.css" rel="stylesheet" type="text/css" />
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link href="/styles/chromestyle.css" type="text/css" />
    <script src="../js/jquery-1.12.4.js" type="text/javascript"></script>
    <script type="text/javascript" language="javascript" src="../js/Common_DegSpot.js"></script>
   <link type='text/css' href="../style/basic.css" rel="stylesheet" media="screen" />
    <link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
        function preventBack() { window.history.forward(); }
        setTimeout("preventBack()", 0);
        window.onunload = function () { null };
    </script>
    <%--  <script src="../js/AadhaarValidator.js" type="text/javascript"></script>--%>
    <script type="text/javascript" language="javascript">

        //        function verhoeff() {
        //            if (!ValidAadhaarNo($("#txtadhar").val())) {
        //                alert('Invalid Aadhaar number');
        //                return false;
        //            }
        //        }
    </script>
    <style type="text/css">
        body
        {
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            border: none;
            background-color: #f7f7f7;
        }
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
            margin-bottom:8px;
            display: block;
        }
        .smlfont
        {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
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
            font-weight: bold;
            background-color: #f8f5d6;
        }
        .bordernew
        {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #000000;
            text-decoration: none;
            border: 1px solid #000000;
            background-color: #f8f5d6;
            width: 230px;
            height: auto;
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
        input[type=radio], input[type=checkbox]
        {
            background-color: #f8f5d6;
        }
        #tableOption td
        {
            background-color: #fff;
        }
        .optionbtnNew
        {
            background-color: #75bf52; *background-color:#75bf52;background-repeat:repeat-x;text-shadow: 01px1pxrgba(0, 0, 0, 0.25);
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
        .optionbtnNew:hover
        {
            background-color: #6ab148; *background-color:#6ab148;background-repeat:repeat-x;background-image: -moz-linear-gradient(top, #6ab148, #6ab148);
        }
        .img-brdr img {border: 1px solid #CCCCCC !important;padding: 3px;margin-top: 8px;}
     table tr td{ position:relative;}
        #lblphototext{ position:absolute;left: 0px;width: 100%;}
        
        .whiteTxt
        {
            color: #FFF;
        }
        .redTxt
        {
            color: #ff7200;
        }
         .dotBorder.nobot-border tr:last-child td
        {
            border-bottom: 0;
            font-size: 11px;
        }
        
           i.right
        {
            float: right;
            color: #47ce0b;
            font-size: 18px;
            display: none;
        }
        i.wrong
        {
            float: right;
            color: #d81e1e;
            font-size: 18px;
            display: none;
        }
        i.inright
        {
            float: right;
            color: #47ce0b;
            font-size: 18px;
            display: none;
        }
        i.inwrong
        {
            float: right;
            color: #d81e1e;
            font-size: 18px;
            display: none;
        }
          i.eright
        {
            float: right;
            color: #47ce0b;
            font-size: 18px;
            display: none;
        }
        i.ewrong
        {
            float: right;
            color: #d81e1e;
            font-size: 18px;
            display: none;
        }
        i.einright
        {
            float: right;
            color: #47ce0b;
            font-size: 18px;
            display: none;
        }
        i.einwrong
        {
            float: right;
            color: #d81e1e;
            font-size: 18px;
            display: none;
        }
    </style>
    <script type="text/javascript" language="javascript">

        function DisableWBC() {

            var gender = $("#ddlGender").val()
            if (gender != "2") {
                $("#rbtBCW").attr('disabled', true);
                $("#rbtBCW").attr('checked', false);
            }
            else {
                $("#rbtBCW").attr('disabled', false);
                //$("#rbtBCW").attr('checked', true);
            }
        }



        function AssignDistHiddenVal() {

            var distId = $("#ddlCDist").val();
            $("#hdfDist").val(distId);
            var distName = $("#ddlCDist option:selected").text();
            $("#hdfDistName").val(distName);
            //alert(distName);
        }
        function AssignBlockHiddenVal() {

            var blockId = $("#ddlCBlock").val();
            $("#hdfBlock").val(blockId);
            var blockName = $("#ddlCBlock option:selected").text();
            $("#hdfBlockName").val(blockName);
            //alert(blockName);
        }


        //        var message = "Right click disabled";
        //        function RightClickDisable(keyp) {
        //            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && (event.button == 2)) //Google chrome browser
        //            { alert(message); return false; }
        //            if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) //Microsoft IE browser
        //            {
        //                alert(message); return false;
        //            }
        //        }
        //        document.onmousedown = RightClickDisable;

        function showComp(subId) {
            document.getElementById(subId).style.display = "";
        }
        function hideComp(subId) {
            document.getElementById(subId).style.display = "none";
            if (subId == 'tblComp') {
                $("txtCompSubject1").val("");
                $("txtCompFMark1").val("");
                $("txtCompPMark1").val("");
                $("txtCompSubject2").val("");
                $("txtCompFMark2").val("");
                $("txtCompPMark2").val("");
                $("txtCompSubject3").val("");
            }
        }

        function showHideStream() {
            debugger;
            var stream = '<%=strStream%>';
            var boardid = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);

            if (boardid == '35') {
                document.getElementById('tdComp3').style.display = 'none';
                document.getElementById('tdEnglish').style.display = 'none';
            }

            if (stream == 'Arts') {
               
                document.getElementById('rbtArts').checked = true;
                document.getElementById('tdChemistryH').style.display = 'none';
                document.getElementById('tdChemistryB').style.display = 'none';
                document.getElementById('tdMathH').style.display = 'none';
                document.getElementById('tdMathB').style.display = 'none';
                document.getElementById('tdBiologyH').style.display = 'none';
                document.getElementById('tdBiologyB').style.display = 'none';

            }
            else if (stream == 'Science') {
               
                document.getElementById('rbtScience').checked = true;
                document.getElementById('tdChemistryH').style.display = '';
                document.getElementById('tdChemistryB').style.display = '';
                document.getElementById('tdMathH').style.display = '';
                document.getElementById('tdMathB').style.display = '';
                document.getElementById('tdBiologyH').style.display = '';
                document.getElementById('tdBiologyB').style.display = '';

            }
            else if (stream == 'Commerce') {
               
                document.getElementById('rbtCommerce').checked = true;
                document.getElementById('tdChemistryH').style.display = 'none';
                document.getElementById('tdChemistryB').style.display = 'none';
                document.getElementById('tdMathH').style.display = 'none';
                document.getElementById('tdMathB').style.display = 'none';
                document.getElementById('tdBiologyH').style.display = 'none';
                document.getElementById('tdBiologyB').style.display = 'none';

            }
            else if (stream == 'Vocational') {
              
                document.getElementById('rbtVocational').checked = true;
                document.getElementById('tdChemistryH').style.display = '';
                document.getElementById('tdChemistryB').style.display = '';
                document.getElementById('tdMathH').style.display = '';
                document.getElementById('tdMathB').style.display = '';
                document.getElementById('tdBiologyH').style.display = '';
                document.getElementById('tdBiologyB').style.display = '';

            }
            else if (stream == 'Diploma') {
               
                document.getElementById('rbtDiploma').checked = true;
                document.getElementById('tdChemistryH').style.display = '';
                document.getElementById('tdChemistryB').style.display = '';
                document.getElementById('tdMathH').style.display = '';
                document.getElementById('tdMathB').style.display = '';
                document.getElementById('tdBiologyH').style.display = '';
                document.getElementById('tdBiologyB').style.display = '';

            }

        }
        function OSAShow() {
            var osa = '<%=strOSAStatus%>';
            var olns = '<%=strOLNSStatus%>';
            var compartment = '<%=strCompartmentStatus%>';
            var cat1 = '<%=strCategory1%>';
            var cat2 = '<%=strCategory2%>';
            //=============category1============
            if (cat1 == "1") {
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
            if (cat1 == "5") {
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
            //=====================show/hide for comapartment==========
            if (compartment == 'True') {
                document.getElementById('rbtCompartmentalY').checked = true;
                document.getElementById('tblComp').style.display = "";
            }
            if (compartment == 'False') {
                document.getElementById('rbtCompartmentalN').checked = true;
                document.getElementById('tblComp').style.display = "none";
            }
        }
        function checkCOSAStatus() {

            if (document.getElementById('hidCollege').value != '') {
                OSAShow();
            }
        }
        //        $(function () {
        //            // GetNoHostelID();           
        //        });
    </script>
    <script language="javascript" type="text/javascript">
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
            debugger;
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

        function CollegeValidate() {
            if (!DropDownValidation('ddlGender', 'your gender')) {
                return false;
            }
            if (!DropDownValidation('ddlCollegeDistrict', 'District Name')) {
                return false;
            }
            if (!DropDownValidation('ddlCollege', 'College Name')) {
                return false;
            }
        }



    </script>
    <script language="javascript" type="text/javascript">
        function cancel() {
            if (window.event.keyCode == 27)
                window.close();
        }
        function check() {
            if (event.keyCode == 93) {
                alert('Not allowed');
                return false;
            }
        }
        function HideShow() {

            if (document.getElementById('rbtnYes').checked == true) {
                document.getElementById('tblOptionButton').style.display = '';

                var optText = parseInt(document.getElementById('tableOption').getElementsByTagName("TR").length) - 1;

                if (parseInt(optText) >= 1) {
                    document.getElementById("2").style.display = 'none';
                } else {
                    document.getElementById("2").style.display = '';
                }
            }
            else {
                document.getElementById('tblOptionButton').style.display = 'none';
                document.getElementById("2").style.display = 'none';
            }
        };

        function RestrictSpace() {
            if (event.keyCode == 32) {
                event.returnValue = false;
                return false;
            }
        }
    </script>
</head>
<body onkeydown="check();cancel();" onload="loadDistricts();checkCOSAStatus();checkConfirmationStatus();MarkIntigrationLoad();Diploma();showHideStream();">
    <form id="form1" runat="server">
    <asp:HiddenField ID="hidCollege" runat="server" />
    <asp:HiddenField ID="hidStream" runat="server" />
    <asp:HiddenField ID="hidElectives" runat="server" />
    <asp:HiddenField ID="hidHostel" runat="server" />
    <asp:HiddenField ID="hidStreamPref" runat="server" />
    <asp:HiddenField ID="hdnImgAppl" runat="server" />
    <asp:HiddenField ID="hdnType" runat="server" />
    <asp:HiddenField ID="hdnFont" runat="server" />
    <asp:HiddenField ID="hdnMobSts" runat="server" />
    <asp:HiddenField ID="hdnEmailSts" runat="server" />
    <asp:HiddenField ID="hidCollegeidGender" runat="server" />
    <asp:HiddenField ID="hidCHSEMark" runat="server" />
    <div style="padding: 2px; width: 950px; margin: auto; background: #fff;">
        <table width="100%" border="0" align="center" class="dotBorder" cellpadding="5" cellspacing="0">
            <tr>
                <td valign="top">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td width="85" align="left" class="CAFheading" valign="top">
                                <img src="../images/BiharLogo.png" />
                            </td>
                            <td width="742" height="22" align="center" class="style2">
                                <span class="CAFheading" id="common">Common Application Form</span><br />
                                <span id="adm">for Spot Admission to Degree Colleges Session (2018-21)</span><br />
                                <span class="normalfont" id="department" style="display: none">Bihar School Examination
                                    Board, Government of Bihar </span>
                                <br />
                            </td>
                            <td width="248" valign="top">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td align="center" class="redbold">
                                            <label id="lblp3">
                                                Degree
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right" class="redtxtind redTxt">
                                            <label id="lblMarkField">
                                                <font color="#8B0000" size="1.9">&#2354;&#2366;&#2354; &#2352;&#2306;&#2327; (*) &#2360;&#2375;
                                                    &#2354;&#2367;&#2326;&#2375; &#2327;&#2351;&#2368; &#2360;&#2349;&#2368; &#2360;&#2370;&#2330;&#2344;&#2366;&#2319;&#2306;
                                                    &#2349;&#2352;&#2344;&#2368; &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351;
                                                    &#2361;&#2376;&#2306;, &#2309;&#2344;&#2381;&#2351;&#2341;&#2366; &#2310;&#2346;&#2325;&#2375;
                                                    &#2347;&#2377;&#2352;&#2381;&#2350; &#2321;&#2344;&#2354;&#2366;&#2311;&#2344; &#2332;&#2350;&#2366;
                                                    &#2344;&#2361;&#2368;&#2306; &#2361;&#2379; &#2346;&#2366;&#2351;&#2375;&#2327;&#2366;
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
                        <tr>
                            <td>
                            </td>
                            <td height="5">
                            </td>
                            <td valign="top">
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    <div style="padding: 0px; width: 950px; margin: auto;">
        <table width="950" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td height="5">
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td>
                                            <table width="100%" class="dotBorder" border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td colspan="6" class="smlfont">
                                                        <strong>
                                                            <label id="lblN1">
                                                                1.</label>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <label id="lbltit">
                                                                Name of the Board from which you have passed the Intermediate exam ? Please fill
                                                                the Year of Exam and Roll Number as in Admit Card.
                                                                <br />
                                                                &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2358;&#2367;&#2325;&#2381;&#2359;&#2366;
                                                                &#2348;&#2379;&#2352;&#2381;&#2337; &#2360;&#2375; &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335;
                                                                &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                                &#2325;&#2368; &#2361;&#2376; ? &#2319;&#2337;&#2350;&#2367;&#2335; &#2325;&#2366;&#2352;&#2381;&#2337;
                                                                &#2325;&#2375; &#2309;&#2344;&#2369;&#2352;&#2370;&#2346; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                                &#2357;&#2352;&#2381;&#2359; &#2319;&#2357;&#2306; &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                                &#2349;&#2352;&#2375;&#2306; |
                                                            </label>
                                                        </strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="280px">
                                                        <label id="lblCouncilName" style="color: #8B0000">
                                                            Name of the Examination Board <font color="#FF3333" size="3">*</font>
                                                            <br />
                                                            &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                            &#2348;&#2379;&#2352;&#2381;&#2337; &#2325;&#2366; &#2344;&#2366;&#2350; <font color="#FF3333"
                                                                size="3">*</font>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <label id="lblYOP" style="color: #8B0000">
                                                            Year of Passing <font color="#FF3333" size="3">*</font> / &#2310;&#2346;&#2344;&#2375;
                                                            &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                            &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;|
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td width="300px">
                                                        <label id="lblExamType" style="color: #8B0000">
                                                            Exam Type <font color="#FF3333" size="3">*</font> / &#2310;&#2346;&#2344;&#2375;
                                                            &#2325;&#2380;&#2344; &#2360;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                          &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlBoard" runat="server" Width="97%" onkeypress="return makeSelectDropdown('ddlBoard','B');"
                                                            onchange="clearRollNo();Diploma();PreInsti()">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <div id="divUnivercity" runat="server" style="display: none;">
                                                            <asp:TextBox ID="txtUniversity" runat="server" MaxLength="130" CssClass="inputitem" 
                                                              autocomplete="off"  Width="96%" onKeyUp="return CheckSpeCharacter('divUnivercity','Special characters are not allowed');"></asp:TextBox></div>
                                                    </td>
                                                    <td>
                                                        <asp:DropDownList ID="ddlYOP" runat="server" Width="97%" CssClass="inputitem" onchange="ExamType();">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </td>
                                                    <td>
                                                        <asp:RadioButton ID="rbtnAnnual" Text="Annual / &#2357;&#2366;&#2352;&#2381;&#2359;&#2367;&#2325; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;"
                                                            runat="server" GroupName="Exam" />
                                                        <asp:RadioButton ID="rbtnSuppl" Text="Improvement/ &#2346;&#2370;&#2352;&#2325; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;"
                                                            runat="server" GroupName="Exam" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label id="lblDOB" style="color: #8B0000">
                                                            Date of Birth <font color="#FF3333" size="3">*</font> / &#2332;&#2344;&#2381;&#2350;
                                                            &#2340;&#2367;&#2341;&#2367;
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td id="tdRollCdH" runat="server">
                                                        <label style="color: #8B0000">
                                                            Roll Code <font color="#FF3333" size="3">*</font> / &#2352;&#2379;&#2354; &#2325;&#2379;&#2337;</label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td>
                                                        <label id="lblRoll" style="color: #8B0000">
                                                            Roll Number <font color="#FF3333" size="3">*</font> / &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlDay" Style="width: 70px;" runat="server"
                                                            AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">DAY</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlMonth" Style="width: 123px;" runat="server"
                                                            AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">MONTH</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlYear" Style="width: 70px;" runat="server"
                                                            AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">YEAR</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </td>
                                                    <td id="tdRollCdF" runat="server">
                                                        <asp:TextBox ID="txtRollCode" runat="server" Width="97%" CssClass="inputitem" MaxLength="15"
                                                            AutoCompleteType="disabled" onkeypress="return RestrictSpace();" />
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtBoardRoll" runat="server" Width="97%" CssClass="inputitem" MaxLength="12"
                                                            autocomplete="off" onKeyUp="return checkBoardRoll('txtBoardRoll','Special characters are not allowed');"
                                                            Onblur="CHSEMark();" onkeypress="return RestrictSpace();" />
                                                    </td>
                                                </tr>
                                            </table>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td>
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="0">
                                                            <tr>
                                                                <td width="85%">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                                        <tr>
                                                                            <td bgcolor="#FFFFFF">
                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                                                    <tr>
                                                                                        <td width="100%" colspan="4" bgcolor="#FFFFFF">
                                                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                <tr>
                                                                                                    <td height="3px">
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="3%">
                                                                                                        <strong>
                                                                                                            <label id="lblN2">
                                                                                                                2.
                                                                                                            </label>
                                                                                                        </strong>
                                                                                                    </td>
                                                                                                    <td width="25%">
                                                                                                        <strong>
                                                                                                            <label id="lblApplicantName" style="color: #8B0000">
                                                                                                                Applicant's Name <font color="#FF3333" size="3">*</font><br />
                                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                                            </label>
                                                                                                            <font color="#FF3333" size="3">*</font></strong>
                                                                                                    </td>
                                                                                                    <td width="72%">
                                                                                                        <asp:TextBox ID="txtApplName" runat="server" Width="100%" CssClass="inputitem Uppercase"
                                                                                                            autocomplete="off" MaxLength="100" onKeyUp="return CheckSpeCharacter('txtApplName','Special characters are not allowed');"
                                                                                                            onkeydown="return checkNumber('txtApplName');" />
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td height="3px">
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
                                                                                                    <td>
                                                                                                        <strong>
                                                                                                            <label id="lblFname" style="color: #8B0000">
                                                                                                                Father's Name <font color="#FF3333" size="3">*</font>
                                                                                                                <br />
                                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2375; &#2346;&#2367;&#2340;&#2366;
                                                                                                                &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                                            </label>
                                                                                                            &nbsp;<font color="#FF3333" size="3">*</font></strong>
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <asp:TextBox ID="txtFatherName" runat="server" Width="100%" CssClass="inputitem Uppercase"
                                                                                                            autocomplete="off" MaxLength="100" onKeyUp="return CheckSpeCharacter('txtFatherName','Special characters are not allowed');"
                                                                                                            onkeydown="return checkNumber('txtFatherName');" />
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td height="3px">
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
                                                                                                    <td>
                                                                                                        <strong>
                                                                                                            <label id="lblMname" style="color: #8B0000">
                                                                                                                Mother's Name <font color="#FF3333" size="3">*</font>
                                                                                                                <br />
                                                                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2350;&#2366;&#2340;&#2366;
                                                                                                                &#2325;&#2366; &#2344;&#2366;&#2350;
                                                                                                            </label>
                                                                                                            &nbsp;<font color="#FF3333" size="3">*</font></strong>
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <asp:TextBox ID="txtMotherName" runat="server" Width="100%" CssClass="inputitem Uppercase"
                                                                                                            autocomplete="off" MaxLength="100" onKeyUp="return CheckSpeCharacter('txtMotherName','Special characters are not allowed');"
                                                                                                            onkeydown="return checkNumber('txtMotherName');" />
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr id="trCouncilMark" runat="server">
                                                                                                    <td>
                                                                                                        <strong></strong>
                                                                                                    </td>
                                                                                                    <td style="display:none">
                                                                                                        <span style="color: #FF0000" id="lblBExam"><strong>Mark secured in Intermediate (<asp:Label
                                                                                                            ID="lblCHSEStream" runat="server" Font-Bold="true" ForeColor="Blue"></asp:Label>)
                                                                                                            Examination </strong></span>
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC"
                                                                                                            id="tblArtsCpy" style="display:none;">
                                                                                                            <tr>
                                                                                                                <td bgcolor="#ACB1E3" class="whitetxt">
                                                                                                                    <strong>Maximum Mark
                                                                                                                        <br />
                                                                                                                        &#2309;&#2343;&#2367;&#2325;&#2340;&#2350; &#2309;&#2306;&#2325;</strong>
                                                                                                                </td>
                                                                                                                <td bgcolor="#ACB1E3" class="whitetxt">
                                                                                                                    <strong>Total Mark Secured
                                                                                                                        <br />
                                                                                                                        &#2325;&#2369;&#2354; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325;</strong>
                                                                                                                </td>
                                                                                                                <td bgcolor="#ACB1E3" class="whitetxt">
                                                                                                                    <strong>English
                                                                                                                        <br />
                                                                                                                        &#2309;&#2306;&#2327;&#2381;&#2352;&#2375;&#2332;&#2368;</strong>
                                                                                                                </td>
                                                                                                                <td bgcolor="#ACB1E3" class="whitetxt">
                                                                                                                    <strong>NRB<br />
                                                                                                                        &#2319;&#2344;&#2310;&#2352;&#2348;&#2368; </strong>
                                                                                                                </td>
                                                                                                                <td bgcolor="#ACB1E3" class="whitetxt" id="tdChemistryHCpy">
                                                                                                                    <strong>Chemistry<br />
                                                                                                                        &#2352;&#2360;&#2366;&#2351;&#2344; &#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                                                                                </td>
                                                                                                                <td bgcolor="#ACB1E3" class="whitetxt" id="tdMathHCpy">
                                                                                                                    <strong>Mathematics<br />
                                                                                                                        &#2327;&#2339;&#2367;&#2340;</strong>
                                                                                                                </td>
                                                                                                                <td bgcolor="#ACB1E3" class="whitetxt" id="tdBiologyHCpy">
                                                                                                                    <strong>Biology<br />
                                                                                                                        &#2332;&#2368;&#2357;&#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td bgcolor="#FFFFFF">
                                                                                                                    <asp:Label ID="lblMaxMarkCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                                                                        Font-Size="Medium" ForeColor="Red" />
                                                                                                                </td>
                                                                                                                <td bgcolor="#FFFFFF">
                                                                                                                    <asp:Label ID="lblTotMarkCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                                                                        Font-Size="Medium" ForeColor="Red" />
                                                                                                                </td>
                                                                                                                <td bgcolor="#FFFFFF">
                                                                                                                    <asp:Label ID="lblEnglishCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                                                                        Font-Size="Medium" ForeColor="Red" />
                                                                                                                </td>
                                                                                                                <td bgcolor="#FFFFFF">
                                                                                                                    <asp:Label ID="lblMILCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                                                                        Font-Size="Medium" ForeColor="Red" />
                                                                                                                </td>
                                                                                                                <td bgcolor="#FFFFFF" id="tdChemistryBCpy" runat="server">
                                                                                                                    <asp:Label ID="lblCheCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                                                                        Font-Size="Medium" ForeColor="Red" />
                                                                                                                </td>
                                                                                                                <td bgcolor="#FFFFFF" id="tdMathBCpy" runat="server">
                                                                                                                    <asp:Label ID="lblMathCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                                                                        Font-Size="Medium" ForeColor="Red" />
                                                                                                                </td>
                                                                                                                <td bgcolor="#FFFFFF" id="tdBiologyBCpy" runat="server">
                                                                                                                    <asp:Label ID="lblBioCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                                                                        Font-Size="Medium" ForeColor="Red" />
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr id="trMarkVerify" style="display: none">
                                                                                                    <td>
                                                                                                    </td>
                                                                                                    <td colspan="2" id="Td1" runat="server">
                                                                                                        <div>
                                                                                                            <span class="MarkVerify" id="note1">Note : If the above mark showing in the computer
                                                                                                                screen is matching with your actual mark secured, then please click on <span class="BlueFont">
                                                                                                                    &#8220;Yes&#8221; </span>button. If not, click on <span class="RedFont">&#8220;No&#8221;
                                                                                                                    </span>button to enter your actual mark at <span class="BlackFont">9(a) </span>
                                                                                                                of this online form. </span>
                                                                                                            <asp:RadioButton ID="rbtMarkVerifiedYCpy" runat="server" Checked="true" GroupName="rbtMarkVerificationCpy" />
                                                                                                            <span id="Span3">Yes</span>
                                                                                                            <asp:RadioButton ID="rbtMarkVerifiedNCpy" runat="server" GroupName="rbtMarkVerificationCpy" />
                                                                                                            <span id="Span4">No</span>
                                                                                                        </div>
                                                                                                        <asp:HiddenField ID="hdnMarkVerification" runat="server" />
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
                                                    <td width="5">
                                                    </td>
                                                    <td width="130" align="center" valign="top" class="img-brdr" style="padding: 3px;
                                                        cursor: hand;">
                                                        <div id='imgSpan'>
                                                            <label id="lblphototext">
                                                                Upload your photo <font color="#FF3333" size="3">*</font>
                                                            </label>
                                                        </div>
                                                        <br />
                                                        <asp:Image ID="ImgAppl" runat="server" ImageUrl="~/images/noimage.JPG" Height="130"
                                                            Style="cursor: pointer" onclick="return OpenUpload();" Width="130" />
                                                        <br />
                                                        <span style="font-size: x-small; font-weight: bold; color: #8B0000">(JPG, JPEG, GIF,BMP or PNG
                                                            files only)</span>
                                                    </td>
                                                    <td valign="top">
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
                <td height="10">
                </td>
            </tr>
            <tr>
                <td bgcolor="#FFFFFF">
                    <table width="100%" border="0" class="dotBorder" cellspacing="0" cellpadding="2">
                        <tr>
                            <td width="1%">
                                <strong>
                                    <label id="lblN9">
                                        5.
                                    </label>
                                </strong>
                            </td>
                            <td width="99%">
                                <label id="lbl9" style="color: #8B0000">
                                    <strong>Details of Mark Secured in Intermediate Examination /  &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335; &#2350;&#2375;&#2306; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325; &#2357;&#2367;&#2359;&#2351;&#2357;&#2366;&#2352; &#2344;&#2368;&#2330;&#2375; &#2354;&#2367;&#2326;&#2375;| </strong>
                                </label>
                                <font color="#FF3333" size="3">*</font> &nbsp;<span class="redtxtind"><strong>&nbsp;</strong></span>
                                <div style="color: Blue; font-weight: bold" id="dv9">
                                   &#2351;&#2342;&#2367; &#2310;&#2346;&#2344;&#2375;  &#2348;&#2367;&#2361;&#2366;&#2352; &#2348;&#2379;&#2352;&#2381;&#2337; &#2325;&#2375; &#2309;&#2354;&#2366;&#2357;&#2366; &#2325;&#2367;&#2360;&#2368; &#2309;&#2344;&#2381;&#2351; &#2348;&#2379;&#2352;&#2381;&#2337; &#2360;&#2375; &#2348;&#2366;&#2352;&#2361;&#2357;&#2368;&#2306; &#2346;&#2366;&#2360; &#2325;&#2367;&#2351;&#2366;  &#2361;&#2376;&#2306; &#2340;&#2379; &#2351;&#2361;&#2366;&#2305; &#2309;&#2346;&#2344;&#2366; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325; &#2349;&#2352;&#2375;&#2306; | &#2348;&#2367;&#2361;&#2366;&#2352; &#2348;&#2379;&#2352;&#2381;&#2337; &#2360;&#2375; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;  &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2352;&#2381;&#2341;&#2367;&#2351;&#2379;&#2306; &#2325;&#2379; &#2309;&#2346;&#2344;&#2375; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325; &#2349;&#2352;&#2344;&#2375; &#2325;&#2368; &#2310;&#2357;&#2358;&#2381;&#2351;&#2325;&#2340;&#2366; &#2344;&#2361;&#2368;&#2306; &#2361;&#2376; | &#2352;&#2379;&#2354; &#2325;&#2379;&#2337;, &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352; &#2319;&#2357;&#2306; &#2332;&#2344;&#2381;&#2350; &#2340;&#2367;&#2341;&#2367; &#2349;&#2352;&#2344;&#2375; &#2325;&#2375; &#2346;&#2358;&#2381;&#2330;&#2366;&#2340; &#2360;&#2381;&#2357;&#2340; : &#2310;&#2346;&#2325;&#2375; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325; &#2349;&#2352; &#2332;&#2366;&#2351;&#2375;&#2306;&#2327;&#2375; |
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;
                            </td>
                            <td>
                                <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder">
                                    <tr>
                                        <td width="1%" valign="top" bgcolor="#1567A1" class="whitetxt">
                                            <strong>
                                                <label id="lblN9a">
                                                    a.
                                                </label>
                                            </strong>
                                        </td>
                                        <td width="100%" colspan="2">
                                            <asp:RadioButton ID="rbtArts" Text="Arts" runat="server" GroupName="PrevStrem" onclick="showHideChemistry();clearMarks();" />
                                            <asp:RadioButton ID="rbtScience" Text="Science" runat="server" GroupName="PrevStrem"
                                                onclick="showHideChemistry();clearMarks();" />
                                            <asp:RadioButton ID="rbtCommerce" Text="Commerce" runat="server" GroupName="PrevStrem"
                                                onclick="showHideChemistry();clearMarks();" />
                                            <asp:RadioButton ID="rbtVocational" Text="Vocational" runat="server" GroupName="PrevStrem"
                                                onclick="showHideChemistry();clearMarks();" />
                                            <asp:RadioButton ID="rbtDiploma" Text="Diploma" runat="server" GroupName="PrevStrem"
                                                onclick="showHideChemistry();clearMarks();" />
                                            <asp:RadioButton ID="rbtUpashastri" Text="Upashastri"  runat="server" GroupName="PrevStrem"
                                                onclick="showHideChemistry();clearMarks();"   />                                           
                                                 <asp:RadioButton ID="rbtMaulvi" Text="Maulvi"  runat="server" GroupName="PrevStrem"
                                                onclick="showHideChemistry();clearMarks();"   />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td bgcolor="#1567A1">
                                        </td>
                                        <td width="100%" valign="top" colspan="2">
                                            <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC">
                                                <tr>
                                                    <td bgcolor="#666666" class="whitetxt">
                                                        <strong>Maximum Mark
                                                            <br />
                                                            &#2309;&#2343;&#2367;&#2325;&#2340;&#2350; &#2309;&#2306;&#2325;</strong>
                                                    </td>
                                                    <td bgcolor="#666666" class="whitetxt">
                                                        <strong>Total Mark Secured
                                                            <br />
                                                            &#2325;&#2369;&#2354; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325;</strong>
                                                    </td>
                                                    <td bgcolor="#666666" class="whitetxt" id="tdComp12"  style="display:none;">
                                                        <strong>Compulsory(1+2)</strong>

                                                    </td>
                                                    <td bgcolor="#666666" class="whitetxt" id="tdComp3"  >
                                                        <div id="divBseb" style="display:none;">
                                                            <strong>
                                                                <asp:Label ID="lblBseb" runat="server" Text="Compulsory 3"></asp:Label>
                                                            </strong>
                                                        </div>
                                                        <div id="divOther" >
                                                            <strong>
                                                                <asp:Label ID="lblOther" runat="server" Text="English / Hindi"></asp:Label>
                                                            </strong>
                                                        </div>
                                                    </td>
                                                    <td bgcolor="#666666" class="whitetxt" runat="server" id="tdChemistryH" style="display:none;">
                                                        <strong>Chemistry<br />
                                                            &#2352;&#2360;&#2366;&#2351;&#2344; &#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;
                                                        </strong>
                                                    </td>
                                                    <td bgcolor="#666666" class="whitetxt" id="tdMathH"  style="display:none;">
                                                        <strong>Mathematics<br />
                                                            &#2327;&#2339;&#2367;&#2340;</strong>
                                                    </td>
                                                    <td bgcolor="#666666" class="whitetxt" id="tdBiologyH"  style="display:none;">
                                                        <strong>Biology<br />
                                                            &#2332;&#2368;&#2357;&#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td bgcolor="#FFFFFF">
                                                        <asp:TextBox CssClass="inputitem" ID="txtMaxMark" runat="server" Width="97%" MaxLength="4"
                                                            autocomplete="off" onKeyUp="return NumericValidation('txtMaxMark','Please write only numeric values for MARKS',4);"
                                                            onblur="return BoardMarkCheck();" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF">
                                                        <asp:TextBox CssClass="inputitem" ID="txtTotMark" runat="server" Width="97%" MaxLength="4"
                                                            autocomplete="off" onKeyUp="return NumericValidation('txtTotMark','Please write only numeric values for MARKS',4);" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF" id="tdNRBMIL"  style="display:none;">
                                                        <asp:TextBox CssClass="inputitem" ID="txtMath" runat="server" Width="97%" MaxLength="3"
                                                            autocomplete="off" onKeyUp="return NumericValidation('txtMath','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF" id="tdEnglish" >
                                                        <asp:TextBox CssClass="inputitem" ID="txtEnglish" runat="server" Width="97%" MaxLength="3"
                                                            autocomplete="off" onKeyUp="return NumericValidation('txtEnglish','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    
                                                    <td bgcolor="#FFFFFF" id="tdChemistryB" runat="server"  style="display:none;">
                                                        <asp:TextBox CssClass="inputitem" ID="txtScience" runat="server" Width="97%" MaxLength="3"
                                                            autocomplete="off" onKeyUp="return NumericValidation('txtScience','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF" id="tdMathB" runat="server"  style="display:none;">
                                                        <asp:TextBox CssClass="inputitem" ID="txtMathematics" runat="server" Width="97%"
                                                            MaxLength="3" autocomplete="off" onKeyUp="return NumericValidation('txtMathematics','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF" id="tdBiologyB" runat="server"  style="display:none;">
                                                        <asp:TextBox CssClass="inputitem" ID="txtBiology" runat="server" Width="97%" MaxLength="3"
                                                            autocomplete="off" onKeyUp="return NumericValidation('txtBiology','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="7" style="color: Blue; font-weight: bold; background:white;" id="dv10">
                                                        <div style="text-align:justify;">
                                                            Note : Selection of the students in the merit list will be based on the total marks
                                                            obtained. Filling the marks details of all the indivisual subjects are not mandatory.
                                                            In case the students doesn`t have the option to fill the marks of any specific subject
                                                            , they are advised not to enter the marks of that subject in common application
                                                            form. This will not impact their selection .<br />
                                                            &#2343;&#2381;&#2351;&#2366;&#2344; &#2342;&#2375;&#2306; : &#2331;&#2366;&#2340;&#2381;&#2352;&#2379;&#2306; &#2325;&#2366; &#2350;&#2375;&#2343;&#2366; &#2360;&#2370;&#2330;&#2368; &#2350;&#2375;&#2306; &#2330;&#2351;&#2344; &#2325;&#2369;&#2354; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325; &#2325;&#2375; &#2310;&#2343;&#2366;&#2352; &#2346;&#2352; &#2361;&#2379;&#2340;&#2366; &#2361;&#2376; | &#2360;&#2349;&#2368; &#2357;&#2367;&#2359;&#2351;&#2379;&#2306; &#2325;&#2375; &#2309;&#2306;&#2325; &#2347;&#2377;&#2352;&#2381;&#2350; &#2350;&#2375;&#2306; &#2349;&#2352;&#2344;&#2375; &#2310;&#2357;&#2358;&#2381;&#2351;&#2325; &#2344;&#2361;&#2368;&#2306; &#2361;&#2376; | &#2309;&#2327;&#2352; &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2367;&#2360;&#2368; &#2357;&#2367;&#2358;&#2375;&#2359; &#2357;&#2367;&#2359;&#2351; &#2325;&#2375; &#2309;&#2306;&#2325; &#2347;&#2377;&#2352;&#2381;&#2350; &#2350;&#2375;&#2306; &#2344;&#2361;&#2368;&#2306; &#2349;&#2352; &#2346;&#2366; &#2352;&#2361;&#2375; &#2361;&#2376;&#2306; &#2340;&#2379; &#2313;&#2360; &#2357;&#2367;&#2359;&#2351; &#2325;&#2366; &#2309;&#2306;&#2325; &#2347;&#2377;&#2352;&#2381;&#2350; &#2350;&#2375;&#2306; &#2344;&#2366; &#2349;&#2352;&#2375;&#2306; | &#2313;&#2360; &#2325;&#2366;&#2352;&#2339; &#2360;&#2375; &#2313;&#2344;&#2325;&#2375; &#2330;&#2351;&#2344; &#2346;&#2352; &#2325;&#2379;&#2312; &#2346;&#2381;&#2352;&#2349;&#2366;&#2357; &#2344;&#2361;&#2368;&#2306; &#2346;&#2396;&#2375;&#2327;&#2366; | 
                                                            </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" bgcolor="#1567A1" class="whitetxt">
                                            <strong>
                                                <label id="lblN9b">
                                                    b.
                                                </label>
                                            </strong>
                                        </td>
                                        <td>
                                            <label id="lbl9b" style="color: #8B0000">
                                                Have you passed Intermediate Exam Compartmentally?
                                                <br />&#2325;&#2381;&#2351;&#2366; &#2309;&#2346;&#2344;&#2375; &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335; &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2360;&#2350;&#2369;&#2344;&#2381;&#2344;&#2340; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2350;&#2375;&#2306; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;&#2306;?
                                            </label>
                                        </td>
                                        <td>
                                            <asp:RadioButton ID="rbtCompartmentalN" runat="server" Checked="true" GroupName="rbtComaprtmental"
                                                onclick="highlightOSA();hideComp('tblComp');" />
                                            <span id="CompN">No / &#2344;&#2361;&#2368;&#2306; </span>
                                            <asp:RadioButton ID="rbtCompartmentalY" runat="server" GroupName="rbtComaprtmental"
                                                onclick="highlightOSA();showComp('tblComp');" />
                                            <span id="CompY">Yes / &#2361;&#2366;&#2305;</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" valign="top">
                                            <div id="tblComp" style="display: none;">
                                                <table width="100%" border="0" cellspacing="1" bgcolor="#FFFFFF" cellpadding="2">
                                                    <tr>
                                                        <td bgcolor="#666666" class="whitetxt">
                                                            Name of the Subject&nbsp;<font color="#FF3333" size="3">*</font>
                                                        </td>
                                                        <td bgcolor="#666666" class="whitetxt">
                                                            Fail &nbsp;Mark in Previous Exam&nbsp;<font color="#FF3333" size="3">*</font>
                                                        </td>
                                                        <td bgcolor="#666666" class="whitetxt">
                                                            Pass Mark in Compartmental Exam&nbsp;<font color="#FF3333" size="3">*</font>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:TextBox CssClass="inputitem" ID="txtCompSubject1" runat="server" Width="150"
                                                                AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject1','Special characters are not allowed');" />
                                                        </td>
                                                        <td>
                                                            <asp:TextBox CssClass="inputitem" ID="txtCompFMark1" runat="server" Width="30" MaxLength="3"
                                                                AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark1','Please write only numeric values for MARKS',3);" />
                                                        </td>
                                                        <td>
                                                            <asp:TextBox CssClass="inputitem" ID="txtCompPMark1" runat="server" Width="30" MaxLength="3"
                                                                AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark1','Please write only numeric values for MARKS',3);" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:TextBox CssClass="inputitem" ID="txtCompSubject2" runat="server" Width="150"
                                                                AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject2','Special characters are not allowed');" />
                                                        </td>
                                                        <td>
                                                            <asp:TextBox CssClass="inputitem" ID="txtCompFMark2" runat="server" Width="30" MaxLength="3"
                                                                AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark2','Please write only numeric values for MARKS',3);" />
                                                        </td>
                                                        <td>
                                                            <asp:TextBox CssClass="inputitem" ID="txtCompPMark2" runat="server" Width="30" MaxLength="3"
                                                                AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark2','Please write only numeric values for MARKS',3);" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:TextBox CssClass="inputitem" ID="txtCompSubject3" runat="server" Width="150"
                                                                AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject3','Special characters are not allowed');" />
                                                        </td>
                                                        <td>
                                                            <asp:TextBox CssClass="inputitem" ID="txtCompFMark3" runat="server" Width="30" MaxLength="3"
                                                                AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark3','Please write only numeric values for MARKS',3);" />
                                                        </td>
                                                        <td>
                                                            <asp:TextBox CssClass="inputitem" ID="txtCompPMark3" runat="server" Width="30" MaxLength="3"
                                                                AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark3','Please write only numeric values for MARKS',3);" />
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
            <tr>
                <td height="10">
                </td>
            </tr>
            <tr>
                <td bgcolor="#FFFFFF">
                    <table width="100%" border="0" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                        <tr>
                            <td bgcolor="#ffffff">
                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                    <tr>
                                        <td height="25">
                                            <strong>
                                                <label id="lblN71">
                                                    6.</label>
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>
                                                <label id="lbleduinst">
                                                    Record of educational institution last attended from which you have passed Intermediate
                                                    Examination /&#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2381;&#2325;&#2370;&#2354; &#2360;&#2375; &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335; &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376; &#2313;&#2360;&#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; &#2344;&#2368;&#2330;&#2375; &#2349;&#2352;&#2375;|</label>
                                                <%--Correspondence--%>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            &nbsp;
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
                                                    <td width="18%">
                                                        <label id="lblschname" style="color: #8B0000">
                                                            Name of the College&nbsp;<font color="#FF3333" size="3">*</font>
                                                            <br />
                                                            &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2344;&#2366;&#2350;&nbsp;<font
                                                                color="#FF3333" size="3">*</font>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtschname" CssClass="inputitem Uppercase" runat="server" Width="265"
                                                            MaxLength="300" autocomplete="off" />
                                                    </td>
                                                    <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN71b">
                                                                b.</label>
                                                        </strong>
                                                    </td>
                                                    <td width="25%">
                                                        <label id="lblschloc" style="color: #8B0000">
                                                            Location of the College &nbsp;<font color="#FF3333" size="3">*</font>
                                                            <br />
                                                            &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2346;&#2340;&#2366; &nbsp;<font
                                                                color="#FF3333" size="3">*</font>
                                                        </label>
                                                    </td>
                                                    <td width="25%">
                                                        <asp:TextBox ID="txtschloc" CssClass="inputitem Uppercase" runat="server" Width="200"
                                                            MaxLength="300" autocomplete="off" />
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
                                                            District &nbsp;<font color="#FF3333" size="3">*</font> / &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375;
                                                            &#2350;&#2375;&#2306; &#2310;&#2346;&#2325;&#2366; &#2325;&#2377;&#2354;&#2375;&#2332;
                                                            &#2361;&#2376; &nbsp;<font color="#FF3333" size="3">*</font>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlinstDistrict" runat="server" EnableViewState="true"
                                                            Width="155" AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <asp:TextBox ID="txtdist" CssClass="inputitem Uppercase" runat="server" Width="200"
                                                            MaxLength="240" autocomplete="off" Style="display: none" onkeydown="return checkNumber('txtdist');" />
                                                        <%--style="display:none" --%>
                                                    </td>
                                                    <td bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN71d">
                                                                d.</label>
                                                        </strong>
                                                    </td>
                                                    <td>
                                                        <label id="lblinsYOJ" style="color: #8B0000">
                                                            Year of Joining &nbsp;<font color="#FF3333" size="3">*</font> / &#2310;&#2346;&#2344;&#2375;
                                                            &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2313;&#2360; &#2325;&#2377;&#2354;&#2375;&#2332;
                                                            &#2350;&#2375;&#2306; &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344; &#2354;&#2367;&#2351;&#2366;
                                                            &#2341;&#2366; |&nbsp;<font color="#FF3333" size="3">*</font>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlYOJ" Style="width: 50%;" runat="server"
                                                            AppendDataBoundItems="true" onchange="validYOJ();">
                                                            <asp:ListItem Value="0">YEAR</asp:ListItem>
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
                                                            Year of Leaving &nbsp;<font color="#FF3333" size="3">*</font> / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354; &#2313;&#2360; &#2325;&#2377;&#2354;&#2375;&#2332; &#2331;&#2379;&#2396;&#2375;&#2341;&#2375; | &nbsp;<font color="#FF3333" size="3">*</font>
                                                        </label>
                                                    </td>
                                                    <td colspan="3">
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlYOL" Style="width: 25%;" runat="server"
                                                            AppendDataBoundItems="true" onchange="validYOJ();">
                                                            <asp:ListItem Value="0">YEAR</asp:ListItem>
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
                <td height="10">
                </td>
            </tr>
            <tr>
                <td bgcolor="#FFFFFF">
                    <table width="100%" border="0" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                        <tr>
                            <td bgcolor="#ffffff">
                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                    <tr>
                                        <td height="25">
                                            <strong>
                                                <label id="Label3">
                                                    7.</label>
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>
                                                <label id="Label4">
                                                    Personal Details / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;</label>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            &nbsp;
                                        </td>
                                        <td>
                                            <table width="100%" class="dotBorder" border="1" cellpadding="2">
                                                <tr>
                                                    <td>
                                                        <label id="lblGender" style="color: #8B0000">
                                                            Gender / &#2354;&#2367;&#2306;&#2327;</label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td>
                                                        <label id="lblMt" style="color: #8B0000">
                                                            Mother Tongue / &#2350;&#2366;&#2340;&#2371;&#2349;&#2366;&#2359;&#2366;
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td width="">
                                                        <label id="lblNat" style="color: #8B0000">
                                                            Nationality / &#2344;&#2366;&#2327;&#2352;&#2367;&#2325;&#2340;&#2366;
                                                        </label>
                                                        <font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td>
                                                        <label id="lblReligion">
                                                            Religion (Optional) / &#2343;&#2352;&#2381;&#2350;(&#2349;&#2352;&#2344;&#2366;
                                                            &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351; &#2344;&#2361;&#2368;&#2306;
                                                            &#2361;&#2376; |)</label>
                                                    </td>
                                                    <td>
                                                        <label id="lblBloodGroup">
                                                            Blood Group(Optional) / &#2352;&#2325;&#2381;&#2340;&#2381;&#2340; &#2360;&#2350;&#2370;&#2361;(&#2349;&#2352;&#2344;&#2366;
                                                            &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351; &#2344;&#2361;&#2368;&#2306;
                                                            &#2361;&#2376; |)
                                                        </label>
                                                        &nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlGender" runat="server" Width="80%"
                                                            onchange="loadColleges();clearDDL();DisableWBC();">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                            <asp:ListItem Value="1">MALE</asp:ListItem>
                                                            <asp:ListItem Value="2">FEMALE</asp:ListItem>
                                                            <asp:ListItem Value="3">TRANSGENDER</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </td>
                                                    <td>
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlMt" runat="server" Width="80%">
                                                        </asp:DropDownList>
                                                    </td>
                                                    <td>
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlNationality" runat="server" Width="80%">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                            <asp:ListItem Value="1">INDIAN</asp:ListItem>
                                                            <asp:ListItem Value="4">OTHER</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </td>
                                                    <td>
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlReligion" runat="server" Width="80%">
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
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlBloodGroup" runat="server" Width="80%">
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
                <td height="10">
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                        <tr>
                            <td bgcolor="#ffffff" style="height: 150px">
                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                    <tr>
                                        <td height="25">
                                            <strong>
                                                <label id="lblN6">
                                                    8.
                                                </label>
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>
                                                <label id="lbladdress">
                                                    Correspondence Address / &#2346;&#2340;&#2381;&#2352;&#2366;&#2330;&#2366;&#2352;
                                                    &#2325;&#2366; &#2346;&#2340;&#2366;
                                                </label>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            &nbsp;
                                        </td>
                                        <td>
                                            <table width="100%" class="dotBorder" border="0" cellspacing="0" cellpadding="2">
                                                <tr>
                                                    <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN6a">
                                                                a.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td width="12%">
                                                        <label id="lblState" style="color: #8B0000">
                                                            State <font color="#FF3333" size="3">*</font> / &#2352;&#2366;&#2332;&#2381;&#2351;
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td width="23%">
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlCState" runat="server" EnableViewState="true"
                                                            Width="175" onkeypress="return makeSelectDropdown('ddlCState','S');">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </td>
                                                    <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN6b">
                                                                b.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td width="15%">
                                                        <label id="lblDistrict" style="color: #8B0000">
                                                            District <font color="#FF3333" size="3">*</font> / &#2332;&#2367;&#2354;&#2366;
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td width="20%">
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlCDist" runat="server" EnableViewState="true"
                                                            Width="155" AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <asp:HiddenField ID="hdfDist" runat="server" />
                                                        <asp:HiddenField ID="hdfDistName" runat="server" />
                                                    </td>
                                                    <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN6c">
                                                                c.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td width="20%">
                                                        <label id="lblBlock" style="color: #8B0000">
                                                            Block / Municipality <font color="#FF3333" size="3">*</font>
                                                            <br />
                                                            &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; / &#2344;&#2327;&#2352; &#2346;&#2352;&#2367;&#2359;&#2342;&#2381;
                                                            &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;
                                                        </label>
                                                        <font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td width="20%">
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlCBlock" runat="server" EnableViewState="true"
                                                            Width="155" AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <asp:HiddenField ID="hdfBlock" runat="server" />
                                                        <asp:HiddenField ID="hdfBlockName" runat="server" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN6d">
                                                                d.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td colspan="2">
                                                        <label id="lblHouseNo" style="color: #8B0000">
                                                            House No., Street/Village, Post Office, Police Station Name <font color="#FF3333"
                                                                size="3">*</font> / &#2309;&#2346;&#2344;&#2368; &#2350;&#2325;&#2366;&#2344;
                                                            &#2360;&#2306;&#2326;&#2381;&#2351;&#2366; /&#2360;&#2396;&#2325; &#2325;&#2366;
                                                            &#2344;&#2366;&#2350; /&#2327;&#2366;&#2305;&#2357; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                            /&#2346;&#2379;&#2360;&#2381;&#2335; &#2321;&#2347;&#2367;&#2360; &#2319;&#2357;&#2350;
                                                            &#2346;&#2369;&#2354;&#2367;&#2360; &#2341;&#2366;&#2344;&#2366; &#2309;&#2357;&#2358;&#2381;&#2351;
                                                            &#2354;&#2367;&#2326;&#2375;|
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td colspan="3">
                                                        <asp:TextBox ID="txtCPS" CssClass="inputitem Uppercase" runat="server" Width="97%"
                                                            Style="min-height: 50px;" autocomplete="off" TextMode="MultiLine" onkeyup="return CheckAddress('txtCPS');"
                                                            onblur="return addLength('txtCPS');" />
                                                    </td>
                                                    <td bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN6e">
                                                                e.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td>
                                                        <label id="lblpin">
                                                            PIN Code
                                                            <br />
                                                            &#2331;&#2361; &#2309;&#2306;&#2325;&#2379; &#2325;&#2366; &#2346;&#2367;&#2344;
                                                            &#2325;&#2379;&#2337; &#2351;&#2361;&#2366;&#2305; &#2354;&#2367;&#2326;&#2375;&#2306;
                                                        </label>
                                                        &nbsp;
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtCPC" CssClass="inputitem" runat="server" Width="150" MaxLength="6"
                                                            autocomplete="off" onKeyUp="return NumericValidation('txtCPC','Please write only numeric values for PIN CODE',6);" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN6f">
                                                                f.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td>
                                                        <label id="lblMobileNo" style="color: #8B0000">
                                                            Mobile No. <font color="#FF3333" size="3">*</font>
                                                            <br />
                                                            &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352;<font color="#FF3333"
                                                                size="3">*</font>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtCMobNo" CssClass="inputitem" runat="server" Width="150" MaxLength="10"
                                                           AutoCompleteType="disabled" autocomplete="off" onkeyup="return NumericValidation('txtCMobNo','Please write only numeric values for Mobile No.',10);"
                                                            Onblur="CheckMobNo();" onpaste="return false;" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" />
                                                        <i class="fa fa-check right" aria-hidden="true"></i><i class="fa fa-times wrong"
                                                            aria-hidden="true"></i><i class="fa fa-check inright" aria-hidden="true"></i>
                                                        <i class="fa fa-times inwrong" aria-hidden="true"></i>
                                                    </td>
                                                    <td bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN6g">
                                                                g.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td>
                                                        <label id="lblEmail" style="color: #8B0000">
                                                            e-Mail <font color="#FF3333" size="3">*</font> / &#2312;-&#2350;&#2375;&#2354;<font
                                                                color="#FF3333" size="3">*</font>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox CssClass="inputitem" ID="txtCEmail" MaxLength="30" runat="server" Width="150"
                                                        AutoCompleteType="disabled"    autocomplete="off"  onblur="return checkEmail('txtCEmail');"  onpaste="return false;" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" />
                                                        <i class="fa fa-check eright" aria-hidden="true"></i><i class="fa fa-times ewrong"
                                                            aria-hidden="true"></i><i class="fa fa-check einright" aria-hidden="true"></i>
                                                        <i class="fa fa-times einwrong" aria-hidden="true"></i>
                                                    </td>
                                                    <td bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN6h">
                                                                h.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td>
                                                        <label id="lbltelephone">
                                                            Telephone No.(Optional)
                                                            <br />
                                                            &#2309;&#2327;&#2352; &#2342;&#2370;&#2352;&#2349;&#2366;&#2359; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366;
                                                            &#2313;&#2346;&#2354;&#2348;&#2381;&#2343; &#2361;&#2379; &#2340;&#2379; &#2351;&#2361;&#2366;&#2305;
                                                            &#2349;&#2352;&#2375;&#2306; | (&#2349;&#2352;&#2344;&#2366; &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351;
                                                            &#2344;&#2361;&#2368;&#2306; &#2361;&#2376; | )
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtCTCode" runat="server" Width="40" CssClass="inputitem" MaxLength="5"
                                                            autocomplete="off" onKeyUp="return NumericValidation('txtCTCode','Please write only numeric values for Area Code',5);" />
                                                        -
                                                        <asp:TextBox ID="txtCTeleNo" runat="server" CssClass="inputitem" Width="100" MaxLength="7"
                                                            autocomplete="off" onKeyUp="return NumericValidation('txtCTeleNo','Please write only numeric values for Phone No.',7);" />
                                                        <br />
                                                        <label id="lblAreaCode">
                                                            STD Code
                                                        </label>
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
            <tr>
                <td height="10">
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                    <tr>
                                        <td width="2%" height="25" valign="top">
                                            <strong>
                                                <label id="lblN7">
                                                    9.
                                                </label>
                                            </strong>
                                        </td>
                                        <td width="98%">
                                            <strong>
                                                <label id="lblReservation">
                                                    Reservation Details / &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2325;&#2368;
                                                    &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                                </label>
                                            </strong>
                                            <table align="right">
                                                <tr>
                                                    <td style="color: Red; font-weight: bold; display: none;">
                                                        <label id="lblFees">
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="background: #e1e1e1;">
                                                        <ul style="padding-left: 20px; margin: 0px;">
                                                            <li style="padding-top: 5px;">&#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2360;&#2375;
                                                                &#2360;&#2350;&#2381;&#2348;&#2306;&#2343;&#2367;&#2340; &#2357;&#2367;&#2357;&#2352;&#2339;
                                                                &#2342;&#2375;&#2344;&#2375; &#2360;&#2375; &#2346;&#2361;&#2354;&#2375; &#2351;&#2361;
                                                                &#2332;&#2366;&#2305;&#2330; &#2325;&#2352; &#2354;&#2375; &#2325;&#2367; &#2342;&#2368;
                                                                &#2327;&#2351;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; &#2360;&#2361;&#2368;
                                                                &#2361;&#2376; , &#2309;&#2344;&#2381;&#2351;&#2341;&#2366; &#2327;&#2354;&#2340;
                                                                &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; &#2342;&#2375;&#2344;&#2375; &#2325;&#2375;
                                                                &#2348;&#2366;&#2342; &#2310;&#2346;&#2325;&#2366; &#2310;&#2357;&#2375;&#2342;&#2344;
                                                                &#2352;&#2342;&#2381;&#2342; &#2325;&#2367;&#2351;&#2366; &#2332;&#2366; &#2360;&#2325;&#2340;&#2366;
                                                                &#2361;&#2376; &#2360;&#2366;&#2341; &#2361;&#2368; &#2310;&#2346;&#2325;&#2375;
                                                                &#2313;&#2346;&#2352; &#2325;&#2366;&#2344;&#2370;&#2344;&#2368; &#2325;&#2366;&#2352;&#2357;&#2366;&#2312;
                                                                &#2349;&#2368; &#2325;&#2368; &#2332;&#2366; &#2360;&#2325;&#2340;&#2368; &#2361;&#2376;
                                                                |</li>
                                                            <li style="padding-top: 5px;">&#2310;&#2352;&#2325;&#2381;&#2359;&#2367;&#2340; &#2325;&#2379;&#2335;&#2367;
                                                                &#2325;&#2375; &#2309;&#2344;&#2381;&#2340;&#2352;&#2381;&#2327;&#2340; &#2346;&#2381;&#2352;&#2357;&#2375;&#2358;
                                                                &#2354;&#2375;&#2344;&#2375; &#2357;&#2366;&#2354;&#2375; &#2310;&#2357;&#2375;&#2342;&#2325;
                                                                &#2325;&#2379; &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; &#2357;&#2367;&#2325;&#2366;&#2360;
                                                                &#2346;&#2342;&#2366;&#2343;&#2367;&#2325;&#2366;&#2352;&#2368;/ &#2309;&#2344;&#2369;&#2350;&#2306;&#2337;&#2354;&#2366;&#2343;&#2367;&#2325;&#2366;&#2352;&#2368;/&#2332;&#2367;&#2354;&#2366;
                                                                &#2346;&#2342;&#2366;&#2343;&#2367;&#2325;&#2366;&#2352;&#2368; &#2342;&#2381;&#2357;&#2366;&#2352;&#2366;
                                                                &#2344;&#2367;&#2352;&#2381;&#2327;&#2340; &#2332;&#2366;&#2340;&#2367; &#2346;&#2381;&#2352;&#2350;&#2366;&#2339;-&#2346;&#2340;&#2381;&#2352;
                                                                &#2361;&#2368; &#2332;&#2350;&#2366; &#2325;&#2352;&#2344;&#2366; &#2361;&#2376;
                                                                &#2324;&#2352; &#2351;&#2361;&#2368; &#2346;&#2381;&#2352;&#2350;&#2366;&#2339;-&#2346;&#2340;&#2381;&#2352;
                                                                &#2350;&#2366;&#2344;&#2381;&#2351; &#2361;&#2379;&#2327;&#2366;&#2404;</li>
                                                            <li style="padding-top: 5px;">&#2342;&#2367;&#2357;&#2381;&#2351;&#2366;&#2306;&#2327;
                                                                &#2325;&#2379;&#2335;&#2366; &#2325;&#2375; &#2310;&#2343;&#2366;&#2352; &#2346;&#2352;
                                                                &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344; &#2325;&#2366; &#2342;&#2366;&#2357;&#2366;
                                                                &#2325;&#2352;&#2344;&#2375; &#2357;&#2366;&#2354;&#2375; &#2310;&#2357;&#2375;&#2342;&#2325;
                                                                &#2325;&#2379; &#2309;&#2346;&#2344;&#2375; &#2332;&#2367;&#2354;&#2375; &#2325;&#2375;
                                                                &#2360;&#2367;&#2357;&#2367;&#2354; &#2360;&#2352;&#2381;&#2332;&#2344;/&#2350;&#2375;&#2337;&#2367;&#2325;&#2354;
                                                                &#2348;&#2379;&#2352;&#2381;&#2337; &#2342;&#2381;&#2357;&#2366;&#2352;&#2366; &#2344;&#2367;&#2352;&#2381;&#2327;&#2340;
                                                                &#2346;&#2381;&#2352;&#2350;&#2366;&#2339; &#2346;&#2340;&#2381;&#2352; &#2346;&#2381;&#2352;&#2360;&#2381;&#2340;&#2369;&#2340;
                                                                &#2325;&#2352;&#2344;&#2366; &#2361;&#2379;&#2327;&#2366; &#2332;&#2367;&#2360;&#2350;&#2375;&#2306;
                                                                &#2344;&#2367;&#2307;&#2358;&#2325;&#2381;&#2340;&#2340;&#2366; &#2325;&#2366; &#2346;&#2381;&#2352;&#2340;&#2367;&#2358;&#2340;
                                                                &#2313;&#2354;&#2381;&#2354;&#2375;&#2326;&#2367;&#2340; &#2361;&#2379; &#2340;&#2341;&#2366;
                                                                &#2360;&#2367;&#2357;&#2367;&#2354; &#2360;&#2352;&#2381;&#2332;&#2344;/&#2350;&#2375;&#2337;&#2367;&#2325;&#2354;
                                                                &#2348;&#2379;&#2352;&#2381;&#2337; &#2342;&#2381;&#2357;&#2366;&#2352;&#2366; &#2347;&#2379;&#2335;&#2379;
                                                                &#2349;&#2368; &#2309;&#2349;&#2367;&#2346;&#2381;&#2352;&#2350;&#2366;&#2339;&#2367;&#2340;
                                                                &#2325;&#2367;&#2351;&#2366; &#2327;&#2351;&#2366; &#2361;&#2379;&#2404; 40 % &#2360;&#2375;
                                                                &#2325;&#2350; &#2344;&#2367;&#2307;&#2358;&#2325;&#2381;&#2340;&#2340;&#2366; &#2357;&#2366;&#2354;&#2375;
                                                                &#2310;&#2357;&#2375;&#2342;&#2325; &#2344;&#2367;&#2307;&#2358;&#2325;&#2381;&#2340;&#2340;&#2366;
                                                                &#2358;&#2381;&#2352;&#2375;&#2339;&#2368; &#2350;&#2375;&#2306; &#2310;&#2357;&#2375;&#2342;&#2344;
                                                                &#2344; &#2325;&#2352;&#2375;&#2306;&#2404;</li>
                                                            <li style="padding-top: 5px;">&#2325;&#2379;&#2335;&#2366; &#2325;&#2375; &#2309;&#2344;&#2381;&#2340;&#2352;&#2381;&#2327;&#2340;
                                                                &#2332;&#2379; &#2310;&#2357;&#2375;&#2342;&#2325; &#2310;&#2357;&#2375;&#2342;&#2344;
                                                                &#2325;&#2352;&#2344;&#2366; &#2330;&#2366;&#2361;&#2340;&#2375; &#2361;&#2376;&#2306;
                                                                &#2313;&#2344;&#2381;&#2361;&#2375;&#2306; &#2350;&#2370;&#2354; &#2310;&#2357;&#2375;&#2342;&#2344;-&#2346;&#2340;&#2381;&#2352;
                                                                &#2325;&#2375; &#2360;&#2366;&#2341; &#2325;&#2379;&#2335;&#2366; &#2310;&#2357;&#2375;&#2342;&#2344;-&#2346;&#2340;&#2381;&#2352;
                                                                &#2349;&#2368; &#2321;&#2344;&#2354;&#2366;&#2311;&#2344; &#2349;&#2352;&#2344;&#2366;
                                                                &#2361;&#2379;&#2327;&#2366; &#2319;&#2357;&#2306; &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344;
                                                                &#2325;&#2375; &#2360;&#2350;&#2351; &#2346;&#2381;&#2352;&#2350;&#2366;&#2339;
                                                                &#2346;&#2340;&#2381;&#2352; &#2325;&#2377;&#2354;&#2375;&#2332; &#2350;&#2375;&#2306;
                                                                &#2332;&#2350;&#2366; &#2325;&#2352;&#2344;&#2366; &#2361;&#2379;&#2327;&#2366;
                                                                &#2404;</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            &nbsp;
                                        </td>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="dotBorder nobot-border">
                                                <tr>
                                                    <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN7a">
                                                                a.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td style="font-size: 11px;">
                                                        <asp:RadioButton ID="rbtGeneral" runat="server" GroupName="ResCategory1" onclick="catmsg();highlightCat1();"
                                                            Checked="true" />
                                                        <span id="GENERAL">General<br />
                                                            &#2360;&#2366;&#2350;&#2366;&#2344;&#2381;&#2351; &#2357;&#2352;&#2381;&#2327;</span>
                                                    </td>
                                                    <td style="font-size: 11px;">
                                                        <asp:RadioButton ID="rbtSC" runat="server" GroupName="ResCategory1" onclick="catmsg();highlightCat1();" />
                                                        <span id="SC">Schedule Caste (SC)<br />
                                                            &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340; &#2332;&#2366;&#2340;&#2367;</span>
                                                    </td>
                                                    <td style="font-size: 11px;">
                                                        <label>
                                                            <asp:RadioButton ID="rbtST" runat="server" GroupName="ResCategory1" onclick="catmsg();highlightCat1();" />
                                                            <span id="ST">Schedule Tribe (ST)<br />
                                                                &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340; &#2332;&#2344;&#2332;&#2366;&#2340;&#2367;</span>
                                                        </label>
                                                    </td>
                                                    <td style="font-size: 11px;">
                                                        <asp:RadioButton ID="rbtnOBC" runat="server" GroupName="ResCategory1" onclick="catmsg();highlightCat1();" />
                                                        <span id="OBC">Backward Class (BC)<br />
                                                            &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327;</span>
                                                    </td>
                                                    <td>
                                                        <asp:RadioButton ID="rbtOther" runat="server" GroupName="ResCategory1" onclick="catmsg();highlightCat1();" />
                                                        <span id="OTHER">Extremly Backward Class (EBC)<br />
                                                            &#2309;&#2340;&#2381;&#2351;&#2306;&#2340; &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327;</span>
                                                    </td>
                                                    <td>
                                                        <asp:RadioButton ID="rbtBCW" runat="server" GroupName="ResCategory1" onclick="highlightCat1();catmsg();" />
                                                        <span id="WBC">Women Backward Class (WBC)<br />
                                                            &#2346;&#2367;&#2331;&#2396;&#2375; &#2357;&#2352;&#2381;&#2327; &#2325;&#2368;
                                                            &#2350;&#2361;&#2367;&#2354;&#2366;&#2351;&#2375; </span>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="dotBorder">
                                                <tr>
                                                    <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN7b">
                                                                b.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td colspan="5">
                                                        <%--       <asp:CheckBox ID="chkPHOH"  style="display:none;" runat="server" onclick="highLight('chkPHOH','PHOH','Physically/Orthopadically Handicapped (PH/OH)' );" />
                                                        <span id="PHOH1"  style="display:none;">Physically/Orthopedically Handicapped (PH/OH)<br />
                                                            &#2344;&#2367;: &#2358;&#2325;&#2381;&#2340;&#2340;&#2366; &#2325;&#2375; &#2310;&#2343;&#2366;&#2352;
                                                            &#2346;&#2352;</span>--%>
                                                        <span id="PHOH">Specially Abled ( &#2342;&#2367;&#2357;&#2381;&#2351;&#2366;&#2306;&#2327;
                                                            )</span>
                                                        <asp:RadioButton ID="chkPHOHN" runat="server" Checked="true" GroupName="PHOH" onclick="highlitespecialyEnabled();" />
                                                        <span id="Span2">No/ &#2344;&#2361;&#2368;&#2306;</span>
                                                        <asp:RadioButton ID="chkPHOHY" runat="server" GroupName="PHOH" onclick="highlitespecialyEnabled();" />
                                                        <span id="Span1">Yes/ &#2361;&#2366;&#2305;</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="2%" bgcolor="#1567A1" class="whitetxt">
                                                        <strong>
                                                            <label id="lblN7c">
                                                                c.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td width="22%">
                                                        <asp:RadioButton ID="rbtESM" runat="server" GroupName="ResCategory2" onclick="highlightCat2();" />
                                                        <span id="ESM">Ex-Service Man (ESM)</span>
                                                    </td>
                                                    <td width="22%" style="display:none">
                                                        <asp:RadioButton ID="rbtCoM" runat="server" GroupName="ResCategory2" onclick="highlightCat2();" />
                                                        <span id="CoM">Children of Martyrs (CoM)</span>
                                                    </td>
                                                    <td width="28%" style="display:none">
                                                        <asp:RadioButton ID="rbtSDP" runat="server" GroupName="ResCategory2" onclick="highlightCat2();" />
                                                        <span id="SDP">Serving Defence Personnel (SDP)</span>
                                                    </td>
                                                    <td width="18%" colspan="2">
                                                        <asp:RadioButton ID="rbtNon" runat="server" GroupName="ResCategory2" Checked="true"
                                                            onclick="highlightCat2();" />
                                                        <span id="NoN">None</span>
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
                <td height="10">
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="2" style="display:none">
                                    <tr>
                                        <td width="3%">
                                            <strong>
                                                <label id="lblN8">
                                                    10.
                                                </label>
                                            </strong>
                                        </td>
                                        <td>
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
                                        <td colspan="2">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td width="35%" valign="top">
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC">
                                                            <tr>
                                                                <td bgcolor="#1567A1" class="whitetxt" colspan="3">
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
                                                                    <asp:CheckBox ID="chkNCCA" runat="server" onclick="highLight('chkNCCA','NCCA','NCC' );" /><span
                                                                        id="NCCA">NCC</span>
                                                                </td>
                                                                <td width="60%" bgcolor="#FFFFFF" style="display:none">
                                                                    <asp:CheckBox ID="chkNCCC" runat="server" onclick="highLight('chkNCCC','NCCC','NCC (CAMP/COURSE)' );" /><span
                                                                        id="NCCC">NCC (CAMP/COURSE)&nbsp;</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td width="2%" valign="top">
                                                        &nbsp;
                                                    </td>
                                                    <td width="63%" valign="top" style="display:none">
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC">
                                                            <tr>
                                                                <td bgcolor="#1567A1" class="whitetxt" colspan="4">
                                                                    <strong>
                                                                        <label id="lblN8b">
                                                                            b.
                                                                        </label>
                                                                        &nbsp;
                                                                        <label id="NSSCAMP">
                                                                            NSS Camp
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:CheckBox ID="chkNssU" runat="server" onclick="highLight('chkNssU','NssU','University Level' );" /><span
                                                                        id="NssU">University Level</span>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:CheckBox ID="chkNssS" runat="server" onclick="highLight('chkNssS','NssS','State Level' );" />
                                                                    <span id="NssS">State Level</span>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:CheckBox ID="chkNssN" runat="server" onclick="highLight('chkNssN','NssN','National Level' );" />
                                                                    <span id="NssN">National Level</span>
                                                                </td>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:CheckBox ID="chkNssIN" runat="server" onclick="highLight('chkNssIN','NssIN','International Level' );" />
                                                                    <span id="NssIN">International Level</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" height="10px">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td width="98%" valign="top">
                                                        <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#CCCCCC" style="display:none">
                                                            <tr>
                                                                <td width="5%" bgcolor="#1567A1" class="whitetxt" colspan="3">
                                                                    <strong>
                                                                        <label id="lblN8d">
                                                                            b.
                                                                        </label>
                                                                        &nbsp;
                                                                        <label id="lblsports">
                                                                            Sports &amp; Games
                                                                        </label>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#FFFFFF">
                                                                    <asp:CheckBox ID="chkSportsS" runat="server" onclick="highLight('chkSportsS','SportS','Sports' );" />
                                                                    <span id="SportS">Sports</span>
                                                                   <%-- State--%>
                                                                </td>
                                                                <td width="32%" bgcolor="#FFFFFF" style="display:none">
                                                                    <asp:CheckBox ID="chkSportsN" runat="server" onclick="highLight('chkSportsN','SportN','National' );" /><span
                                                                        id="SportN">National </span><strong></strong>
                                                                </td>
                                                                <td width="33%" bgcolor="#FFFFFF" style="display:none">
                                                                    <asp:CheckBox ID="chkSportsIN" runat="server" onclick="highLight('chkSportsIN','SportIN','International' );" /><span
                                                                        id="SportIN">International </span>
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
                <td height="10">
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellpadding="10" cellspacing="1" bgcolor="#cccccc">
                        <tr>
                            <td bgcolor="#f8f5d4">
                                <div id="tblChoice" style="display: none;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="2" style="display: none;">
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
                                                            <strong>Preference No</strong>
                                                        </th>
                                                        <th bgcolor="#FE6A08" class="whitetxt">
                                                            <strong>College </strong>
                                                        </th>
                                                        <th bgcolor="#FE6A08" class="whitetxt">
                                                            <strong>Stream </strong>
                                                        </th>
                                                        <th bgcolor="#FE6A08" class="whitetxt">
                                                            <strong>Preference</strong>
                                                        </th>
                                                        <th bgcolor="#FE6A08" class="whitetxt">
                                                            <strong>Subject(Honours/Pass) </strong>
                                                        </th>
                                                        <th bgcolor="#FE6A08" class="whitetxt">
                                                            <strong>Delete</strong>
                                                        </th>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="right" bgcolor="#FFFFFF">
                                <table width="100%" border="0" cellspacing="0" cellpadding="2" >
                                    <tr>
                                        <td width="10" valign="top" style="display: none;">
                                            <strong>10.</strong>
                                        </td>
                                        <td align="left">
                                            <label id="lblinf" style="display: none;">
                                                <strong>Please Fill the Option of the Colleges & Stream in Which You Want to Get Admission.<br />
                                                    &#2332;&#2367;&#2360; &#2325;&#2377;&#2354;&#2375;&#2332; &#2319;&#2357;&#2306;
                                                    &#2325;&#2379;&#2352;&#2381;&#2360; &#2350;&#2375;&#2306; &#2310;&#2346; &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344;
                                                    &#2354;&#2375;&#2344;&#2366; &#2330;&#2366;&#2361;&#2340;&#2375; &#2361;&#2376;&#2306;
                                                    , &#2313;&#2344; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;&#2379; &#2325;&#2366;
                                                    &#2330;&#2351;&#2344; &#2351;&#2361;&#2366;&#2305; &#2349;&#2352;&#2375; | </strong>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="background: #e1e1e1; display: none;" colspan="2">
                                            <ul style="padding-left: 20px; margin: 0px 0px 0px 0px;">
                                                <li style="padding-top: 5px;">&#2310;&#2346; &#2321;&#2344;&#2354;&#2366;&#2311;&#2344;
                                                    &#2310;&#2357;&#2375;&#2342;&#2344; &#2346;&#2340;&#2381;&#2352; &#2325;&#2375;
                                                    &#2350;&#2366;&#2343;&#2381;&#2351;&#2350; &#2360;&#2375; &#2348;&#2368;&#2360;
                                                    &#2357;&#2367;&#2325;&#2354;&#2381;&#2346; &#2357;&#2367;&#2349;&#2367;&#2344;&#2381;&#2344;
                                                    &#2325;&#2377;&#2354;&#2375;&#2332; &#2350;&#2375;&#2306; &#2310;&#2357;&#2375;&#2342;&#2344;
                                                    &#2342;&#2375; &#2360;&#2325;&#2340;&#2375; &#2361;&#2376;&#2306;| &#2309;&#2346;&#2344;&#2375;
                                                    &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;&#2379;&#2306; &#2325;&#2366; &#2330;&#2369;&#2344;&#2366;&#2357;
                                                    &#2309;&#2346;&#2344;&#2368; &#2357;&#2352;&#2368;&#2351;&#2340;&#2366; &#2360;&#2370;&#2330;&#2368;
                                                    &#2325;&#2375; &#2309;&#2344;&#2369;&#2360;&#2366;&#2352; &#2325;&#2352;&#2375;&#2306;
                                                    | </li>
                                                <li style="padding-top: 5px;">&#2310;&#2357;&#2375;&#2342;&#2344; &#2350;&#2375;&#2306;
                                                    &#2357;&#2367;&#2325;&#2354;&#2381;&#2346; &#2349;&#2352;&#2340;&#2375; &#2360;&#2350;&#2351;
                                                    &#2351;&#2361; &#2360;&#2369;&#2344;&#2367;&#2358;&#2381;&#2330;&#2367;&#2340; &#2325;&#2352;&#2375;&#2306;
                                                    &#2325;&#2368; &#2332;&#2379; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346; &#2310;&#2346;
                                                    &#2346;&#2361;&#2354;&#2375; &#2349;&#2352;&#2375;&#2306;&#2327;&#2375; &#2313;&#2360;&#2368;
                                                    &#2325;&#2375; &#2309;&#2344;&#2369;&#2360;&#2366;&#2352; &#2310;&#2346;&#2325;&#2366;
                                                    &#2330;&#2351;&#2344; &#2325;&#2367;&#2351;&#2366; &#2332;&#2366;&#2319;&#2327;&#2366;
                                                    | &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;&#2379;&#2306; &#2325;&#2379; &#2349;&#2352;&#2340;&#2375;
                                                    &#2360;&#2350;&#2351; &#2351;&#2361; &#2360;&#2369;&#2344;&#2367;&#2358;&#2381;&#2330;&#2367;&#2340;
                                                    &#2325;&#2352;&#2375;&#2306; &#2325;&#2367; &#2310;&#2346;&#2325;&#2368; &#2346;&#2381;&#2352;&#2366;&#2341;&#2350;&#2367;&#2325;&#2340;&#2366;
                                                    &#2360;&#2370;&#2330;&#2368; &#2310;&#2346;&#2325;&#2375; &#2346;&#2360;&#2306;&#2342;
                                                    &#2325;&#2375; &#2309;&#2344;&#2369;&#2352;&#2370;&#2346; &#2361;&#2376; | &#2310;&#2346;&#2325;&#2375;
                                                    &#2342;&#2381;&#2357;&#2366;&#2352;&#2366; &#2349;&#2352;&#2368; &#2327;&#2351;&#2368;
                                                    &#2325;&#2366;&#2354;&#2375;&#2332;&#2379; &#2325;&#2368; &#2346;&#2381;&#2352;&#2366;&#2341;&#2350;&#2367;&#2325;&#2340;&#2366;
                                                    &#2360;&#2370;&#2330;&#2368; &#2350;&#2375;&#2306; &#2314;&#2346;&#2352; &#2360;&#2375;
                                                    &#2344;&#2368;&#2330;&#2375; &#2325;&#2375; &#2325;&#2381;&#2352;&#2350; &#2350;&#2375;&#2306;
                                                    &#2310;&#2346;&#2325;&#2368; &#2350;&#2375;&#2343;&#2366; (&#2309;&#2306;&#2325;)
                                                    &#2319;&#2357;&#2306; &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2358;&#2381;&#2352;&#2375;&#2339;&#2368;
                                                    &#2325;&#2375; &#2309;&#2344;&#2369;&#2360;&#2366;&#2352; &#2332;&#2379; &#2360;&#2348;&#2360;&#2375;
                                                    &#2346;&#2361;&#2354;&#2366; &#2360;&#2347;&#2354; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;
                                                    &#2332;&#2367;&#2360;&#2350;&#2375; &#2310;&#2346;&#2325;&#2366; &#2330;&#2369;&#2344;&#2366;&#2357;
                                                    &#2361;&#2379;&#2327;&#2366; , &#2313;&#2360; &#2325;&#2377;&#2354;&#2375;&#2332;
                                                    &#2325;&#2368; &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344; &#2360;&#2370;&#2330;&#2368;
                                                    &#2350;&#2375;&#2306; &#2310;&#2346;&#2325;&#2366; &#2344;&#2366;&#2350; &#2310;&#2319;&#2327;&#2366;
                                                    |</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="color: blue; font-weight: bold; display: none;" colspan="2">
                                            <label id="Label1">
                                                You are required to select at least <span style="color: blue">ONE</span> and at
                                                most <span style="color: blue">TWENTY</span> options / &#2310;&#2346; &#2344;&#2381;&#2351;&#2370;&#2344;&#2340;&#2350;
                                                <span style="color: blue">&#2319;&#2325;</span> &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;
                                                &#2319;&#2357;&#2350; &#2309;&#2343;&#2367;&#2325;&#2340;&#2350; <span style="color: blue">
                                                    &#2348;&#2368;&#2360;</span> &#2357;&#2367;&#2325;&#2354;&#2381;&#2346; &#2351;&#2361;&#2366;&#2305;
                                                &#2349;&#2352; &#2360;&#2325;&#2340;&#2375; &#2361;&#2376;&#2306;|
                                            </label>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td width="100%" align="left" colspan="2" style="display: none;">
                                            <div class="Capactive" id="Caption" style="background: #75bf52; border: 1px solid #6ab148;
                                                font-size: 13px; font-weight: bold;">
                                                Enter here for 1st Option / &#2309;&#2346;&#2344;&#2366; &#2346;&#2361;&#2354;&#2366;
                                                &#2357;&#2367;&#2325;&#2354;&#2381;&#2346; &#2330;&#2369;&#2344;&#2375;&#2306;</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" width="100%" colspan="2">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="2" class="dotBorder" style="display: none;">
                                                <tr style="display: none">
                                                    <td bgcolor="#1567a1" class="whitetxt" style="height: 32px; width: 1%;">
                                                        <strong>
                                                            <label id="lbla">
                                                                a.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td style="width: 150px;">
                                                        <label id="lblColType">
                                                            College Type
                                                            <br />
                                                            &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2346;&#2381;&#2352;&#2325;&#2366;&#2352;
                                                        </label>
                                                        <font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td colspan="4">
                                                        <asp:RadioButton ID="rbtOthersFinance" runat="server" GroupName="A" onclick="return highlightCollegeType();"
                                                            Checked="true" />
                                                        <span id="OF">Govt. / Aided / Private / Self Financing</span>
                                                        <asp:RadioButton ID="rbtSanskrit" runat="server" GroupName="A" onclick="return highlightCollegeType();" />
                                                        <span id="S">Sanskrit</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td bgcolor="#1567a1" class="whitetxt" style="width: 1%;">
                                                        <strong>
                                                            <label id="lblb">
                                                                a.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td width="43%">
                                                        <label id="lblDname" style="color: #8B0000">
                                                            District Name <font color="#FF3333" size="3">*</font><br />
                                                            &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375; &#2325;&#2375; &#2325;&#2377;&#2354;&#2375;&#2332;
                                                            &#2350;&#2375;&#2306; &#2342;&#2366;&#2326;&#2367;&#2354;&#2366; &#2354;&#2375;&#2344;&#2366;
                                                            &#2330;&#2366;&#2361;&#2340;&#2375; &#2361;&#2376;&#2306; &#2313;&#2360;&#2325;&#2366;
                                                            &#2330;&#2369;&#2344;&#2366;&#2357; &#2325;&#2352;&#2375;|
                                                        </label>
                                                        <font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td colspan="4" style="width: 40%;">
                                                        <div style="float: left; width: 30%; margin-top: 6px;">
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlCollegeDistrict" runat="server" Width="155"
                                                                onchange="loadColleges();resetOptionByCDid();">
                                                                <asp:ListItem Value="0">-- SELECT --</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </div>
                                                        <div style="float: left; width: 70%;">
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
                                                    <td bgcolor="#1567A1" class="whitetxt" style="height: 32px; width: 1%;">
                                                        <strong>
                                                            <label id="lblc">
                                                                b.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td>
                                                        <label id="lblcolname" style="color: #8B0000">
                                                            College Name <font color="#FF3333" size="3">*</font> &#2325;&#2377;&#2354;&#2375;&#2332;
                                                            &#2325;&#2366; &#2344;&#2366;&#2350; &#2330;&#2369;&#2344;&#2375;
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td style="width: 45%; height: 32px">
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlCollege" runat="server" Width="100%"
                                                            onkeypress="return makeSelectDropdown('ddlCollege','C');">
                                                            <asp:ListItem Value="0">-- SELECT --</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </td>
                                                    <td width="7%" bgcolor="#1567A1" class="whitetxt" style="width: 2%; height: 32px">
                                                        <strong>
                                                            <label id="lbld">
                                                                c.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td width="20%">
                                                        <label id="lblStream" style="color: #8B0000">
                                                            Stream <font color="#FF3333" size="3">*</font><br />
                                                            &#2360;&#2306;&#2325;&#2366;&#2351; &#2330;&#2369;&#2344;&#2375;
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td style="width: 25%; height: 32px">
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlStream" EnableViewState="true" runat="server"
                                                            Width="113px">
                                                            <asp:ListItem Value="0">-- SELECT --</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td bgcolor="#1567A1" class="whitetxt" style="height: 32px; width: 1%;">
                                                        <strong>
                                                            <label id="lble">
                                                                d.
                                                            </label>
                                                        </strong>
                                                    </td>
                                                    <td>
                                                        <label id="lblStreamPreference" style="color: #8B0000">
                                                            Subject(Honors/Pass) / &#2357;&#2367;&#2359;&#2351; &#2330;&#2369;&#2344;&#2375;
                                                        </label>
                                                        &nbsp;<font color="#FF3333" size="3">*</font>
                                                    </td>
                                                    <td colspan="4" style="width: 36%; height: 32px">
                                                        <asp:DropDownList CssClass="inputitem" ID="ddlELE1" runat="server" Width="165" AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">-- SELECT --</asp:ListItem>
                                                        </asp:DropDownList>

                                                    </td>
                                                </tr>
                                            </table>
                                            <table width="100%" border="0" cellspacing="0" class="dotBorder" cellpadding="0"
                                                style="border-collapse: collapse; display: none;">
                                                <tr style="background: #75bf52; border: 1px solid #6ab148; font-size: 13px; font-weight: bold;">
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
                                                    <td>
                                                        <table border="0" align="center" cellpadding="0" cellspacing="0" id="tblOptionButton"
                                                            style="display: none">
                                                            <tr>
                                                                <td height="30" align="center">
                                                                    <input name="button" type="button" class="optionbtnNew" id="2" title="Click here to add options"
                                                                        onclick="updateRow(2);" value="2nd Option / &#2342;&#2370;&#2360;&#2352;&#2366; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;" />
                                                                    <input name="button2" type="button" class="optionbtnNew" id="3" title="Click here to add options"
                                                                        onclick="updateRow(3);" value="3rd Option / &#2340;&#2368;&#2360;&#2352;&#2366; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="display: none;" />
                                                                    <input name="button3" type="button" class="optionbtnNew" id="4" title="Click here to add options"
                                                                        onclick="updateRow(4);" value="4th Option / &#2330;&#2380;&#2341;&#2366; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="display: none;" />
                                                                    <input name="button4" type="button" class="optionbtnNew" id="5" title="Click here to add options"
                                                                        onclick="updateRow(5);" value="5th Option / &#2346;&#2366;&#2306;&#2330;&#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346; &#2330;&#2369;&#2344;&#2375;&#2306;"
                                                                        style="display: none;" />
                                                                    <input name="button5" type="button" class="optionbtnNew" id="6" title="Click here to add options"
                                                                        onclick="updateRow(6);" value="6th Option / &#2331;&#2336;&#2368; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="display: none;" />
                                                                    <input name="button6" type="button" class="optionbtnNew" id="7" title="Click here to add options"
                                                                        onclick="updateRow(7);" value="7th Option / &#2413; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button7" type="button" class="optionbtnNew" id="8" title="Click here to add options"
                                                                        onclick="updateRow(8);" value="8th Option  / &#2414; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button8" type="button" class="optionbtnNew" id="9" title="Click here to add options"
                                                                        onclick="updateRow(9);" value="9th Option / &#2415; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button9" type="button" class="optionbtnNew" id="10" title="Click here to add options"
                                                                        onclick="updateRow(10);" value="10th Option / &#2407;&#2406; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button10" type="button" class="optionbtnNew" id="11" title="Click here to add options"
                                                                        onclick="updateRow(11);" value="11th Option / &#2407;&#2407; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button11" type="button" class="optionbtnNew" id="12" title="Click here to add options"
                                                                        onclick="updateRow(12);" value="12th Option / &#2407;&#2408; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button12" type="button" class="optionbtnNew" id="13" title="Click here to add options"
                                                                        onclick="updateRow(13);" value="13th Option / &#2407;&#2409; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button13" type="button" class="optionbtnNew" id="14" title="Click here to add options"
                                                                        onclick="updateRow(14);" value="14th Option / &#2407;&#2410; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button14" type="button" class="optionbtnNew" id="15" title="Click here to add options"
                                                                        onclick="updateRow(15);" value="15th Option / &#2407;&#2411; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button15" type="button" class="optionbtnNew" id="16" title="Click here to add options"
                                                                        onclick="updateRow(16);" value="16th Option / &#2407;&#2412; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button16" type="button" class="optionbtnNew" id="17" title="Click here to add options"
                                                                        onclick="updateRow(17);" value="17th Option / &#2407;&#2413; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button17" type="button" class="optionbtnNew" id="18" title="Click here to add options"
                                                                        onclick="updateRow(18);" value="18th Option / &#2407;&#2414; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button18" type="button" class="optionbtnNew" id="19" title="Click here to add options"
                                                                        onclick="updateRow(19);" value="19th Option / &#2407;&#2415; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <input name="button19" type="button" class="optionbtnNew" id="20" title="Click here to add options"
                                                                        onclick="updateRow(20);" value="20th Option / &#2408;&#2406; &#2357;&#2366;&#2306; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;"
                                                                        style="width: 180px; display: none;" />
                                                                    <%--   <asp:Button CssClass="submitBtn" ID="btnSave" runat="server" Text="APPLY" OnClientClick="return getOptions();"
                        OnClick="btnSave_Click" />--%>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table border="0" align="center" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td>
                                                        <asp:CheckBox ID="cbAgree1" runat="server" />
                                                        &#2350;&#2376;&#2306; &#2351;&#2361; &#2360;&#2340;&#2381;&#2351;&#2366;&#2346;&#2367;&#2340;
                                                        &#2325;&#2352;&#2340;&#2366; &#2361;&#2370;&#2305; &#2325;&#2367; &#2313;&#2346;&#2352;&#2379;&#2325;&#2381;&#2340;
                                                        &#2349;&#2352;&#2368; &#2327;&#2351;&#2368; &#2360;&#2349;&#2368; &#2360;&#2370;&#2330;&#2344;&#2366;&#2351;&#2375;
                                                        &#2360;&#2361;&#2368; &#2361;&#2376;&#2306; &#2319;&#2357;&#2306; &#2313;&#2346;&#2352;
                                                        &#2349;&#2352;&#2368; &#2327;&#2351;&#2368; &#2360;&#2370;&#2330;&#2344;&#2366;
                                                        &#2325;&#2375; &#2327;&#2354;&#2340; &#2346;&#2366;&#2319; &#2332;&#2366;&#2344;&#2375;
                                                        &#2346;&#2352; &#2350;&#2375;&#2352;&#2366; &#2310;&#2357;&#2375;&#2342;&#2344;
                                                        &#2346;&#2340;&#2381;&#2352; &#2309;&#2360;&#2381;&#2357;&#2368;&#2325;&#2371;&#2340;
                                                        &#2325;&#2367;&#2351;&#2366; &#2332;&#2366; &#2360;&#2325;&#2340;&#2366; &#2361;&#2376;
                                                        | &#2311;&#2360;&#2325;&#2375; &#2354;&#2367;&#2319; &#2350;&#2375;&#2352;&#2366;
                                                        &#2325;&#2379;&#2312; &#2349;&#2368; &#2342;&#2366;&#2357;&#2366; &#2350;&#2366;&#2344;&#2381;&#2351;
                                                        &#2344;&#2361;&#2368;&#2306; &#2361;&#2379;&#2327;&#2366; |
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <asp:CheckBox ID="cbAgree2" runat="server" />
                                                        &#2350;&#2376;&#2306; &#2351;&#2361; &#2360;&#2381;&#2357;&#2368;&#2325;&#2371;&#2340;
                                                        &#2325;&#2352;&#2340;&#2366; &#2361;&#2370;&#2305; &#2325;&#2367; &#2310;&#2357;&#2375;&#2342;&#2344;
                                                        &#2325;&#2368; &#2352;&#2366;&#2358;&#2367; &#2332;&#2350;&#2366; &#2325;&#2352;&#2344;&#2375;
                                                        &#2325;&#2375; &#2346;&#2358;&#2381;&#2330;&#2366;&#2340; &#2361;&#2368; &#2350;&#2375;&#2352;&#2366;
                                                        &#2310;&#2357;&#2375;&#2342;&#2344; &#2360;&#2381;&#2357;&#2368;&#2325;&#2366;&#2352;
                                                        &#2325;&#2367;&#2351;&#2366; &#2332;&#2366;&#2319;&#2327;&#2366; | &#2348;&#2367;&#2344;&#2366;
                                                        &#2310;&#2357;&#2375;&#2342;&#2344; &#2358;&#2369;&#2354;&#2381;&#2325; &#2325;&#2375;
                                                        &#2350;&#2375;&#2352;&#2366; &#2310;&#2357;&#2375;&#2342;&#2344; &#2309;&#2360;&#2381;&#2357;&#2368;&#2325;&#2371;&#2340;
                                                        &#2325;&#2352; &#2342;&#2367;&#2351;&#2366; &#2332;&#2366;&#2319;&#2327;&#2366;
                                                        &#2319;&#2357;&#2306; &#2313;&#2360;&#2325;&#2375; &#2354;&#2367;&#2319; &#2350;&#2375;&#2352;&#2366;
                                                        &#2325;&#2379;&#2312; &#2349;&#2368; &#2342;&#2366;&#2357;&#2366; &#2350;&#2366;&#2344;&#2381;&#2351;
                                                        &#2344;&#2361;&#2368;&#2306; &#2361;&#2379;&#2327;&#2366; |
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <asp:Button CssClass="submitBtn" ID="Button1" runat="server" Style="height: 30px;
                                                            line-height: 17px; cursor: pointer;" Text="&#2310;&#2357;&#2375;&#2342;&#2344; &#2358;&#2369;&#2354;&#2381;&#2325; 300 &#2352;&#2370;&#2346;&#2319;  &#2332;&#2350;&#2366; &#2325;&#2352;&#2344;&#2375; &#2361;&#2375;&#2340;&#2369; &#2351;&#2361;&#2366;&#2305; &#2325;&#2381;&#2354;&#2367;&#2325; &#2325;&#2352;&#2375;&#2306; | Please click here to deposit the application fee of Rs. 300."
                                                            OnClientClick="return getOptions();check()" OnClick="btnSave_Click" />
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
                <td height="5">
                </td>
            </tr>
        </table>
    </div>
    <script type="text/javascript">

        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-16479104-1']);
        _gaq.push(['_trackPageview']);

        (function () {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

    </script>
    </form>
</body>
</html>
