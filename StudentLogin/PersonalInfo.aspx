<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PersonalInfo.aspx.cs" Inherits="StudentLogin_PersonalInfo"
    EnableEventValidation="false" %>

<%@ Register Src="~/includes/RegStudentLeftmenu.ascx" TagPrefix="stuc1" TagName="leftmenu" %>
<%@ Register Src="~/includes/RegStudentHeader.ascx" TagPrefix="stuc2" TagName="stdntHdr" %>
<%@ Register Src="~/includes/StudentDoctype.ascx" TagPrefix="studoc" TagName="studoctpe" %>
<%@ Register Src="~/includes/footer.ascx" TagName="footer" TagPrefix="uc2" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Welcome :: Online Facilitation System for Students (OFSS)</title>
    <studoc:studoctpe ID="stdoc" runat="server" />
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <script src="../Script/Juniour_CAF_HINDI.js" type="text/javascript"></script>
    <script src="../js/JqAlert/CSMValidation.js" type="text/javascript"></script>
    <script src="../js/AadhaarValidator.js" type="text/javascript"></script>
    <script type="text/javascript" language="javascript">


        var message = "Right click disabled";
        function RightClickDisable(keyp) {
            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && (event.button == 2)) //Google chrome browser
            { alert(message); return false; }
            if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) //Microsoft IE browser
            {
                alert(message); return false;
            }
        }
        //        document.onmousedown = RightClickDisable;

        function show(subId) {
            document.getElementById(subId).style.display = "";
        }
        function hide(subId) {
            document.getElementById(subId).style.display = "none";
            //            document.getElementById("ddlOSAState").selectedIndex = 0;
            //            document.getElementById("ddlOLNSState").selectedIndex = 0;
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
            }
        }
        function HideUpload() {

            document.getElementById('fldImgAppl').style.display = 'none';
        }
        function OSAShow() {
            debugger;

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

            document.getElementById('thEnglish').style.display = 'none';
            document.getElementById('tdEnglish').style.display = 'none';
            document.getElementById('thMath').style.display = 'none';
            document.getElementById('tdMath').style.display = 'none';
            document.getElementById('thScience').style.display = 'none';
            document.getElementById('tdScience').style.display = 'none';
            document.getElementById('tdSocialSci').style.display = 'none';
            document.getElementById('thSocialSci').style.display = 'none';

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

        function AllowAlphabet(e, id) {
            var k = 0;
            isIE = document.all ? 1 : 0
            keyEntry = !isIE ? e.which : event.keyCode;

            if ($('#' + id).val().length == 0 && (keyEntry == 32 || keyEntry == 46)) {
                k = 1;
            }
            if (k == 0 && (((keyEntry >= '65') && (keyEntry <= '90')) || ((keyEntry >= '97') && (keyEntry <= '122')) || (keyEntry == '46') || (keyEntry == '32') || (keyEntry == '44')))
                return true;
            else {
                return false;
            }
        }
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

    </script>
    <script type="text/javascript" language="javascript">

        function DisableWBC() {
            debugger;
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

        function verhoeff() {
            //            if (!ValidAadhaarNo($("#txtadhar").val())) {
            //                alert('Invalid Aadhaar number');
            //                return false;
            //            }
        }

        
    </script>
    <script language="javascript" type="text/javascript">
        function ShowPreview(e) {
            debugger;
            //================Checking Extension===================
            var ids = e.id;

            var fileExtension = ['jpg', 'png', 'bmp', 'gif'];
            if ($.inArray($('#' + ids).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
                $('#' + ids).val('');
                jAlert('', '<strong>Only jpg,jpeg,png files are allowed.</strong>', Title);
                $('#' + ids).focus();
                return false;
            }
            var file_size = $('#' + ids)[0].files[0].size;
            if (file_size > 2097152) {
                $('#' + ids).val('');
                jAlert('', '<strong>Please upload a valid image having size less than 2MB</strong>', Title);
                $('#' + ids).focus();
                return false;
            }


            if (e.files && e.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#ImgAppl').attr('src', e.target.result);
                }

                reader.readAsDataURL(e.files[0]);
            }
            $('#hdnImgAppl').val("1");

        }
    </script>
    

</head>
<body class="no-skin">
    <form id="Form1" runat="server" defaultfocus="ddlBoard">
        <asp:HiddenField ID="hdnCSRFRandNum" runat="server" />
        <asp:HiddenField ID="hdnImgAppl" runat="server" />
        <asp:HiddenField ID="hdnApplicationId" runat="server" />
        <asp:HiddenField ID="hdnUploadStatus" runat="server" Value="0" />
        <asp:HiddenField ID="hdnRejectStatus" runat="server" Value="0" />
        <asp:HiddenField ID="hdnValidateStatus" runat="server" Value="0" />
        <asp:HiddenField ID="hdnOldBlockId" runat="server" Value="0" />
        <asp:HiddenField ID="hdnAppliedColleges" runat="server" Value="0" />
        <asp:HiddenField ID="hdnSelectionStatus" runat="server" Value="0" />
        <stuc2:stdntHdr ID="studentHead" runat="server" />
        <div class="main-container ace-save-state" id="main-container">
            <stuc1:leftmenu ID="leftmenu" runat="server" />
            <div class="main-content">
                <div class="main-content-inner">
                    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                        <ul class="breadcrumb">
                            <li><a href="StudentDashboardJunior.aspx"><i class="ace-icon fa fa-home home-icon"></i></a>
                            </li>
                            <li class="active">Personal Information </li>
                        </ul>
                        <!-- /.breadcrumb -->
                    </div>
                    <div class="page-content">
                        <div class="body-content dashBoard personl-info-page">
                            <!-- /.page-header -->
                            <div class="row" id="divDateLine" runat="server" visible="false">
                                <div style="color: #ff0000; padding: 150px 400px;" font-size="16px;">
                                    <h5>
                                        <asp:Literal ID="litMessage" runat="server"></asp:Literal>
                                    </h5>
                                </div>
                            </div>
                            <div class="row" id="divForm" runat="server">
                                <div class="col-sm-12">
                                    <div class="formpage">
                                        <div class="row top-details">
                                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                                <img src="../images/BiharLogo.png" width="80px" alt="" />
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
                                                <center class="newheader">
                                                <h2 id="common">
                                                    Common Application Form</h2>
                                                <h3 id="adm">
                                                    For Admission to Intermediate Courses Session 2024-26</h3>
                                                <p id="department">
                                                    Bihar School Examination Board, Government of Bihar</p>
                                            </center>
                                            </div>
                                            <div class="col-lg-4 col-md-3 col-sm-4 col-xs-12">
                                                <center>
                                                <h2 id="lblp2" class="intrmdt">
                                                    Intermediate</h2>
                                                <label id="lblMarkField">
                                                    लाल रंग <span class="mndtory">(*)</span> से लिखीं गईं सभी सूचनाएं भरनी अनिवार्य है, अन्यथा आपके फॉर्म ऑनलाइन
                                                    जमा नहीं हो पायेगा |
                                                </label>
                                            </center>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- -----formpage----- -->
                                    <p class=" pull-right">
                                        All the Fields marked as red Colour <span class="mndtory">(*) </span>are Mandatory
                                    to be filled, otherwise your Online form will not be submitted.
                                    </p>
                                    <div class="clearfix">
                                    </div>
                                    <div class="formpage">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p>
                                                    <strong>Name of the Board from which you have passed the 10th exam ? Please fill the Year of Exam and Roll Number as in Admit Card.  </strong>
                                                </p>
                                                <p>
                                                    <strong>&#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2358;&#2367;&#2325;&#2381;&#2359;&#2366;
                                                    &#2348;&#2379;&#2352;&#2381;&#2337; &#2360;&#2375; &#2342;&#2360;&#2357;&#2368;&#2306;
                                                    &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                    &#2325;&#2368; &#2361;&#2376; ? एडमिट कार्ड &#2325;&#2375; &#2309;&#2344;&#2369;&#2352;&#2370;&#2346;
                                                    &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2357;&#2352;&#2381;&#2359; &#2319;&#2357;&#2306;
                                                    &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352; भरे. </strong>
                                                </p>
                                                <div class="table-responsive inner-new-tbl">
                                                 <table class="table table-bordered">
                                                    <tr>
                                                        <th>Name of the Examination Board / &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351;
                                                        &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2348;&#2379;&#2352;&#2381;&#2337;
                                                        &#2325;&#2366; &#2344;&#2366;&#2350;
                                                        </th>
                                                        <th>Year of Passing / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354;
                                                        &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                        &#2325;&#2368; &#2361;&#2376;|
                                                        </th>
                                                        <th>Exam Type / &#2310;&#2346;&#2344;&#2375; &#2325;&#2380;&#2344; &#2360;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                        &#2346;&#2366;&#2360; &#2325;&#2368; &#2361;&#2376;
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:DropDownList CssClass="form-control" ID="ddlBoard" runat="server" Width="100%">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                            </asp:DropDownList>
                                                            <asp:TextBox ID="txtBoardName" CssClass="form-control Uppercase" runat="server" autocomplete="off"
                                                                Width="100%" onkeypress="return AllowAlphabet(event,'txtBoardName')" />
                                                            <span class="starmark">*</span>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList ID="ddlYOP" runat="server" Width="100%" CssClass="form-control"
                                                                onchange="showhideCGPA();clearRollNumber();ExamType();">
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
                                                            </asp:DropDownList>
                                                            <span class="starmark">*</span>
                                                        </td>
                                                        &nbsp;
                                                        <td>
                                                            <asp:RadioButton ID="rbtnAnnual" Text="Annual/&#2357;&#2366;&#2352;&#2381;&#2359;&#2367;&#2325;"
                                                                runat="server" GroupName="Exam" onchange="" />
                                                            &nbsp;   
                                                            <asp:RadioButton ID="rbtnSuppl" Text="Compartmental/&#2346;&#2370;&#2352;&#2325; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;"
                                                                runat="server" GroupName="Exam" onchange="" />
                                                            <span class="starmark">*</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row new-desgin-cls">
                                            <div class="col-lg-12 col-md-12">
                                                <div class="row form-group">
                                                    <div class="col-md-4">
                                                       <label> Date of Birth / &#2332;&#2344;&#2381;&#2350; &#2340;&#2367;&#2341;&#2367; <span class="starmark">*</span></label>
                                                        <div class="input-groups dob-box">
                                                            <asp:DropDownList CssClass="inputitem" Style="width: 75px;" ID="ddlDay" runat="server"
                                                                AppendDataBoundItems="true">
                                                                <asp:ListItem Value="0">DAY</asp:ListItem>
                                                            </asp:DropDownList>
                                                            <asp:DropDownList CssClass="inputitem" Style="width: 75px;" ID="ddlMonth" runat="server"
                                                                AppendDataBoundItems="true">
                                                                <asp:ListItem Value="0">MONTH</asp:ListItem>
                                                            </asp:DropDownList>
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlYear" Style="width: 85px;" runat="server"
                                                                AppendDataBoundItems="true">
                                                                <asp:ListItem Value="0">YEAR</asp:ListItem>
                                                            </asp:DropDownList>
                                                            <%--<asp:TextBox ID="TextBox2" class="datepicker form-control" runat="server"></asp:TextBox>
                                                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                                                        </span>--%>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-md-4" id="tdRollCdH">
                                                        <label>Roll Code / &#2352;&#2379;&#2354; &#2325;&#2380;&#2352;&#2381;&#2337; <span class="starmark">*</span></label>

                                                        <div class="input-groups" id="tdRollCdF">
                                                            <asp:TextBox ID="txtRollCode" CssClass="form-control allownumericwithoutdecimal"
                                                                runat="server" MaxLength="20"></asp:TextBox>
                                                            <cc1:FilteredTextBoxExtender ID="fteExtender" runat="server" FilterType="LowercaseLetters,UppercaseLetters,Numbers"
                                                                TargetControlID="txtRollCode">
                                                            </cc1:FilteredTextBoxExtender>

                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label>Roll Number / &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352; <span class="starmark">*</span></label>

                                                        <div class="input-groups">
                                                            <asp:TextBox ID="txtBoardRoll" CssClass="form-control allownumericwithoutdecimal"
                                                                runat="server" MaxLength="20"></asp:TextBox>
                                                            <cc1:FilteredTextBoxExtender ID="fteBoardRoll" runat="server" FilterType="LowercaseLetters,UppercaseLetters,Numbers"
                                                                TargetControlID="txtBoardRoll">
                                                            </cc1:FilteredTextBoxExtender>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-10 col-md-9">
                                                 <div class="row form-group" id="divUniqueId" runat="server" style="display:none">
                                                    <div class="col-lg-5">
                                                        <label id="lblUniqueId">
                                                            Applicant's  Unique Id /  आवेदक का यूनिक आई.डी (यदि उपलब्ध हो )
                                                        </label>
                                                    </div>
                                                    <div class="col-lg-7">
                                                        <span class="colonns">:</span>
                                                        <asp:TextBox ID="txtUniqueId" runat="server" Width="100%" CssClass="form-control"
                                                            AutoCompleteType="disabled" MaxLength="13" onKeyUp="return NumericValidation('txtUniqueId','Please write only numeric values for Applicant Unique Id',13);"
                                                            />
                                                    </div>
                                                </div>
                                                <div class="row form-group">
                                                    <div class="col-lg-5">
                                                        <label id="lblApplicantName">
                                                            Applicant's Name / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350; <span class="starmark">*</span>
                                                        </label>
                                                    </div>
                                                    <div class="col-lg-7">
                                                        <span class="colonns">:</span>
                                                        <asp:TextBox ID="txtApplName" runat="server" Width="100%" CssClass="form-control Uppercase"
                                                            AutoCompleteType="disabled" MaxLength="100" onKeyUp="return CheckSpeCharacterName('txtApplName','Special characters are not allowed');"
                                                            onkeydown="return checkNumber('txtApplName');" />
                                                        
                                                    </div>
                                                </div>
                                                <div class="row form-group">
                                                    <div class="col-lg-5">
                                                        <label id="lblFname">
                                                            Father's Name / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2375; &#2346;&#2367;&#2340;&#2366;
                                                        &#2325;&#2366; &#2344;&#2366;&#2350; <span class="starmark">*</span>
                                                        </label>
                                                    </div>
                                                    <div class="col-lg-7">
                                                        <span class="colonns">:</span>
                                                        <asp:TextBox ID="txtFatherName" runat="server" Width="100%" CssClass="form-control Uppercase"
                                                            AutoCompleteType="disabled" MaxLength="100" onkeyup="return CheckSpeCharacterName('txtFatherName','Special characters are not allowed');"
                                                            onkeydown="return checkNumber('txtFatherName');" />
                                                        
                                                    </div>
                                                </div>
                                                <div class="row form-group">
                                                    <div class="col-lg-5">
                                                        <label id="lblMname">
                                                            Mother's Name / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2350;&#2366;&#2340;&#2366;
                                                        &#2325;&#2366; &#2344;&#2366;&#2350; <span class="starmark">*</span></label>
                                                    </div>
                                                    <div class="col-lg-7">
                                                        <span class="colonns">:</span>
                                                        <asp:TextBox ID="txtMotherName" runat="server" Width="100%" CssClass="form-control Uppercase"
                                                            AutoCompleteType="disabled" MaxLength="100" onkeyup="return CheckSpeCharacterName('txtMotherName','Special characters are not allowed');"
                                                            onkeydown="return checkNumber('txtMotherName');" />
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- -----Image Section----- -->
                                            <div class="col-lg-2 col-md-2">
                                                <%-- <div id='imgSpan' class="text-spn">
                                               <label id="lblphototext">
                                                    Upload your photo <span class="starmark">*</span>
                                                </label>
                                            </div>--%>
                                                <center> <asp:Image ID="ImgAppl" CssClass="imgbdr" runat="server" /> </center>
                                                <asp:FileUpload ID="imgUpload" CssClass="form-control" runat="server" onchange="return ShowPreview(this);" />
                                            </div>
                                            <!-- -----Image Section----- -->
                                        </div>
                                        <div class="alert alert-success">
                                            <label id="lbl9">
                                                Details of Mark/Grade Secured in 10th Board Examination <span class="starmark-nopose">*</span> / दसवी बोर्ड परीक्षा में प्राप्त विषयवार प्राप्तांक नीचे लिखे <span class="starmark-nopose">*</span></label>
                                        </div>
                                        <div id="dv9" class="alert alert-danger">
                                            Note :In the Below field you need to Enter CGPA Points, if you select CBSE & Year between 2010 to 2017 as Year of Passing. <span class="starmark-nopose">*</span>
                                            / ध्यान दें : अगर आवेदक ने परीक्षा बोर्ड - CBSE एवं परीक्षा उत्तीर्ण करने का वर्ष 2010 से 2017 के बीच चुना है तो यहाँ आवेदक को CGPA पॉइंट्स भरने होंगे | <span class="starmark-nopose">*</span>
                                        </div>
                                        <div class="table-responsive inner-new-tbl">
                                            <table class="table table-bordered" id="tblBSE">
                                                <tr>
                                                    <th class="">
                                                        <strong>Total Full Marks / कुल अधिकतम अंक - कुल पूर्ण अंक
                                                        </strong>
                                                    </th>
                                                    <th class="">
                                                        <strong>Total Marks Obtained / कुल पूर्ण अंक - कुल प्राप्तांक</strong>
                                                    </th>
                                                    <th class="" id="thEnglish">
                                                        <strong>English / &#2309;&#2306;&#2327;&#2381;&#2352;&#2375;&#2332;&#2368; </strong>
                                                    </th>
                                                    <th class="" id="thMath">
                                                        <strong>Mathematics / &#2327;&#2339;&#2367;&#2340;</strong>
                                                    </th>
                                                    <th class="" id="thScience">
                                                        <strong>Science / &#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                    </th>
                                                    <th class="" id="thSocialSci">
                                                        <strong>Social Science<br />
                                                            &#2360;&#2350;&#2366;&#2332;&#2358;&#2366;&#2360;&#2381;&#2340;&#2381;&#2352;</strong>
                                                    </th>
                                                    <th id="tdGradeMark" class="" style="display: none">
                                                        <strong>Grade
                                                        <br />
                                                            &#2346;&#2342;&#2325;&#2381;&#2352;&#2350;</strong>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td bgcolor="#FFFFFF">
                                                        <asp:TextBox CssClass="form-control" ID="txtMaxMark" runat="server" MaxLength="4"
                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtMaxMark','Please write only numeric values for MARKS',4);" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF">
                                                        <asp:TextBox CssClass="form-control" ID="txtTotMark" runat="server" MaxLength="4"
                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtTotMark','Please write only numeric values for MARKS',4);" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF" id="tdEnglish">
                                                        <asp:TextBox CssClass="form-control" ID="txtEnglish" runat="server" MaxLength="3"
                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtEnglish','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF" id="tdMath">
                                                        <asp:TextBox CssClass="form-control" ID="txtMath" runat="server" MaxLength="3" AutoCompleteType="disabled"
                                                            onKeyUp="return NumericValidation('txtMath','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF" id="tdScience">
                                                        <asp:TextBox CssClass="form-control" ID="txtScience" runat="server" MaxLength="3"
                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtScience','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF" id="tdSocialSci">
                                                        <asp:TextBox CssClass="form-control" ID="txtSocSci" runat="server" MaxLength="3"
                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtSocSci','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td bgcolor="#FFFFFF" id="tdGradeMarkddl" style="display: none">
                                                        <asp:DropDownList ID="ddlGrade" runat="server" CssClass="form-control" onchange="setGrade();">
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
                                            </table>
                                            <div class="table-responsive inner-new-tbl">
                                                <table class="table table-bordered" id="tblCBSE" style="display: none;">
                                                    <tr>
                                                        <th class="">CGPA
                                                        </th>
                                                        <th class="">English
                                                        </th>
                                                        <th class="">Mathematics
                                                        </th>
                                                        <th class="">Science
                                                        </th>
                                                        <th class="">Social Science
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#FFFFFF">
                                                            <asp:TextBox CssClass="form-control" ID="txtCGPA" runat="server" Width="70" MaxLength="4"
                                                                AutoCompleteType="disabled" />
                                                        </td>
                                                        <td bgcolor="#FFFFFF">
                                                            <asp:DropDownList ID="ddlEng" runat="server" CssClass="form-control">
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
                                                            <asp:DropDownList ID="ddlMath" runat="server" CssClass="form-control">
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
                                                            <asp:DropDownList ID="ddlSc" runat="server" CssClass="form-control">
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
                                                            <asp:DropDownList ID="ddlSoSc" runat="server" CssClass="form-control">
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
                                            </div>
                                            <div class="table-responsive inner-new-tbl">
                                                <table class="table table-bordered" id="tblKERALA" style="display: none;">
                                                    <tr>
                                                        <th bgcolor="#666666" class="whitetxt">
                                                            <strong>Grade</strong>
                                                        </th>
                                                        <th bgcolor="#666666" class="whitetxt">
                                                            <strong>English</strong>
                                                        </th>
                                                        <th bgcolor="#666666" class="whitetxt">
                                                            <strong>Mathematics</strong>
                                                        </th>
                                                        <th bgcolor="#666666" class="whitetxt">
                                                            <strong>Science</strong>
                                                        </th>
                                                        <th bgcolor="#666666" class="whitetxt">
                                                            <strong>Social Science</strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#FFFFFF">
                                                            <asp:DropDownList ID="ddlTGrade" runat="server" CssClass="form-control">
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
                                                            <asp:DropDownList ID="ddlKEnglish" runat="server" CssClass="form-control">
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
                                                            <asp:DropDownList ID="ddlKMath" runat="server" CssClass="form-control">
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
                                                            <asp:DropDownList ID="ddlKScience" runat="server" CssClass="form-control">
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
                                                            <asp:DropDownList ID="ddlKSoSc" runat="server" CssClass="form-control">
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
                                            </div>
                                        </div>
                                        <div class="clearfix">
                                        </div>
                                        <div class="row" style="display: none;">
                                            <div class="col-lg-8 col-md-8 col-xs-12">
                                                <label id="lbl9b">
                                                    Have you passed 10th Board Exam Compartmentally ? / &#2325;&#2381;&#2351;&#2366;
                                                &#2309;&#2346;&#2344;&#2375; &#2342;&#2360;&#2357;&#2368; &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                &#2346;&#2370;&#2352;&#2325;-&#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2350;&#2375;&#2306;
                                                &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;&#2306;
                                                |</label>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-xs-12">
                                                <asp:RadioButton ID="rbtCompartmentalN" runat="server" Checked="true" GroupName="rbtComaprtmental"
                                                    onclick="hide('tblComp');" />
                                                <span id="CompN">No/ &#2344;&#2361;&#2368;&#2306;</span>
                                                <asp:RadioButton ID="rbtCompartmentalY" runat="server" GroupName="rbtComaprtmental"
                                                    onclick="show('tblComp');" />
                                                <span id="CompY">Yes/ &#2361;&#2366;&#2305;</span>
                                            </div>
                                        </div>
                                        <div id="tblComp" style="display: none;" class="table-responsive" runat="server">
                                            <table class="table table-bordered">
                                                <tr>
                                                    <th width="30%" bgcolor="#666666" class="whitetxt">
                                                        <strong>Name of the Subject&nbsp;<font color="#8B0000" size="3">*</font></strong>
                                                    </th>
                                                    <th width="32%" bgcolor="#666666" class="whitetxt">
                                                        <strong>Fail Mark in Previous Exam&nbsp;<font color="#8B0000" size="3">*</font></strong>
                                                    </th>
                                                    <th width="38%" bgcolor="#666666" class="whitetxt">
                                                        <strong>Pass Mark in Compartmental Exam&nbsp;<font color="#8B0000" size="3">*</font></strong>
                                                    </th>
                                                </tr>
                                                <tr bgcolor="#FFFFFF">
                                                    <td>
                                                        <asp:DropDownList ID="ddlCompSubject1" runat="server" Width="100%" CssClass="form-control"
                                                            onchange="clearComp('ddlCompSubject1','txtCompFMark1','txtCompPMark1');">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <%--<asp:TextBox CssClass="form-control" ID="txtCompSubject1" runat="server" Width="150"
                                                                            AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject1','Special characters are not allowed');" />--%>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox CssClass="form-control" ID="txtCompFMark1" runat="server" Width="100%"
                                                            MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark1','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td>
                                                        <asp:TextBox CssClass="form-control" ID="txtCompPMark1" runat="server" Width="100%"
                                                            MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark1','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                </tr>
                                                <tr bgcolor="#FFFFFF">
                                                    <td>
                                                        <asp:DropDownList ID="ddlCompSubject2" runat="server" Width="100%" CssClass="form-control"
                                                            onchange="clearComp('ddlCompSubject2','txtCompFMark2','txtCompPMark2');">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <%--<asp:TextBox CssClass="form-control" ID="txtCompSubject2" runat="server" Width="150"
                                                                            AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject2','Special characters are not allowed');" />--%>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox CssClass="form-control" ID="txtCompFMark2" runat="server" Width="100%"
                                                            MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark2','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td>
                                                        <asp:TextBox CssClass="form-control" ID="txtCompPMark2" runat="server" Width="100%"
                                                            MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark2','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                </tr>
                                                <tr bgcolor="#FFFFFF">
                                                    <td>
                                                        <asp:DropDownList ID="ddlCompSubject3" runat="server" Width="100%" CssClass="form-control"
                                                            onchange="clearComp('ddlCompSubject3','txtCompFMark3','txtCompPMark3');">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <%--<asp:TextBox CssClass="form-control" ID="txtCompSubject3" runat="server" Width="150"
                                                                            AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject3','Special characters are not allowed');" />--%>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox CssClass="form-control" ID="txtCompFMark3" runat="server" Width="100%"
                                                            MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark3','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td>
                                                        <asp:TextBox CssClass="form-control" ID="txtCompPMark3" runat="server" Width="100%"
                                                            MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark3','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                </tr>
                                                <tr bgcolor="#FFFFFF">
                                                    <td>
                                                        <asp:DropDownList ID="ddlCompSubject4" runat="server" Width="100%" CssClass="form-control"
                                                            onchange="clearComp('ddlCompSubject4','txtCompFMark4','txtCompPMark4');">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <%--<asp:TextBox CssClass="form-control" ID="txtCompSubject3" runat="server" Width="150"
                                                                            AutoCompleteType="disabled" MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject3','Special characters are not allowed');" />--%>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox CssClass="form-control" ID="txtCompFMark4" runat="server" Width="100%"
                                                            MaxLength="3" AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark4','Please write only numeric values for MARKS',3);" />
                                                    </td>
                                                    <td>
                                                        <asp:TextBox CssClass="form-control" ID="txtCompPMark4" runat="server" Width="100%"
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
                                        <div class="mrgn-top-10">
                                            <label id="lbleduinst">
                                                <strong>Record of educational institution last attended from which you have passed 10th Examination / &#2310;&#2346;&#2344;&#2375;
                                                &#2332;&#2367;&#2360; &#2360;&#2381;&#2325;&#2370;&#2354; &#2360;&#2375; &#2342;&#2360;&#2357;&#2368;
                                                &#2325;&#2368; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                &#2325;&#2368; &#2361;&#2376; &#2313;&#2360;&#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                                &#2344;&#2368;&#2330;&#2375; &#2349;&#2352;&#2375; </strong>
                                            </label>
                                        </div>
                                        <div class="new-desgin-cls">
                                            <div class="row form-group ">
                                                <div class="col-md-6">
                                                    <label id="lblschname">
                                                        Name of the School / &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2325;&#2366;
                                                        &#2344;&#2366;&#2350; <span class="starmark">*</span>
                                                    </label>

                                                    <div class="input-groups">
                                                        <asp:TextBox ID="txtschname" CssClass="form-control Uppercase" runat="server" MaxLength="300"
                                                            autocomplete="off" />
                                                        <cc1:FilteredTextBoxExtender ID="FTEschname" runat="server" FilterMode="ValidChars"
                                                            ValidChars="/-,()+ " FilterType="LowercaseLetters,UppercaseLetters,Custom,Numbers"
                                                            TargetControlID="txtschname">
                                                        </cc1:FilteredTextBoxExtender>

                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label id="lblschloc">
                                                        Address of the School / विद्यालय का पता <span class="starmark">*</span>
                                                    </label>

                                                    <div class="input-groups">
                                                        <asp:TextBox ID="txtschloc" CssClass="form-control Uppercase" runat="server" MaxLength="100"
                                                            autocomplete="off" />
                                                        <cc1:FilteredTextBoxExtender ID="fteschloc" runat="server" FilterMode="ValidChars"
                                                            ValidChars="/-, " FilterType="LowercaseLetters,UppercaseLetters,Custom,Numbers"
                                                            TargetControlID="txtschloc">
                                                        </cc1:FilteredTextBoxExtender>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-6">
                                                    <label id="lblinsDist">
                                                        District / &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375; &#2350;&#2375;&#2306;
                                                &#2310;&#2346;&#2325;&#2366; &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351;
                                                &#2361;&#2376; <span class="starmark">*</span>
                                                    </label>

                                                    <div class="input-groups">
                                                        <asp:DropDownList CssClass="form-control" ID="ddlinstDistrict" runat="server" EnableViewState="true"
                                                            AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>

                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label id="lblinsYOJ">
                                                        Year of Joining / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354;
                                                &#2313;&#2360; &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2350;&#2375;&#2306;
                                                &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344; &#2354;&#2367;&#2351;&#2366; &#2341;&#2366;
                                                | <span class="starmark">*</span>
                                                    </label>

                                                    <div class="input-groups">
                                                        <asp:DropDownList CssClass="form-control" Width="100%" ID="ddlYOJ" runat="server"
                                                            AppendDataBoundItems="true" onchange="validYOJ();">
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

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-6">
                                                    <label id="lblYOL">
                                                        Year of Leaving from School / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354;
                                                &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351; &#2360;&#2375; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                &#2313;&#2340;&#2368;&#2352;&#2381;&#2339; &#2325;&#2368; &#2361;&#2376;| <span class="starmark">*</span>
                                                    </label>

                                                    <div class="input-groups">
                                                        <asp:DropDownList CssClass="form-control" ID="ddlYOL" runat="server" AppendDataBoundItems="true"
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

                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label id="lblinsKGBAC">
                                                        Have you passed 10th exam as a student of Kasturba Gandhi Balika Vidyalaya? / क्या आपने दसवीं की परीक्षा कस्तूरबा गाँधी आवासीय बालिका छात्रावास में रहते हुए उत्तीर्ण की है ? <span class="starmark">*</span>
                                                    </label>

                                                    <div class="input-groups options-cls">
                                                        <asp:RadioButtonList ID="rbtnKGABC" runat="server" RepeatDirection="Horizontal">
                                                            <asp:ListItem Value="1">Yes</asp:ListItem>
                                                            <asp:ListItem Value="0" Selected="True">No</asp:ListItem>
                                                        </asp:RadioButtonList>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mrgn-top-20">
                                            <label id="lblPD">
                                                <strong>Personal Details / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                                </strong>
                                            </label>
                                        </div>
                                        
                                        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                            <ContentTemplate>
                                                <div class="table-responsive inner-new-tbl">
                                                    <table class="table table-bordered">
                                                        <tr>
                                                            <th style="display: none">
                                                                <label id="lblGender">
                                                                    Gender / &#2354;&#2367;&#2306;&#2327;</label>
                                                                &nbsp;
                                                            </th>
                                                            <th>
                                                                <label id="lblMt">
                                                                    Mother Tongue / &#2350;&#2366;&#2340;&#2371; &#2349;&#2366;&#2359;&#2366;
                                                                </label>
                                                                &nbsp;
                                                            </th>
                                                            <th width="">
                                                                <label id="lblNat">
                                                                    Nationality / &#2344;&#2366;&#2327;&#2352;&#2367;&#2325;&#2340;&#2366;</label>
                                                                &nbsp;
                                                            </th>
                                                            <th>
                                                                <label id="lblReligion">
                                                                    Religion / &#2343;&#2352;&#2381;&#2350;</label>
                                                            </th>
                                                            <th>
                                                                <label id="lblBloodGroup">
                                                                    Blood Group / रक्त समूह
                                                                </label>
                                                                &nbsp;
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td style="display: none;">
                                                                <asp:DropDownList CssClass="form-control" ID="ddlGender" runat="server" onchange="DisableWBC();">
                                                                    <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                    <asp:ListItem Value="1">MALE</asp:ListItem>
                                                                    <asp:ListItem Value="2">FEMALE</asp:ListItem>
                                                                    <asp:ListItem Value="3">TRANSGENDER</asp:ListItem>
                                                                </asp:DropDownList>
                                                                <span class="starmark">*</span>
                                                            </td>
                                                            <td>
                                                                <asp:DropDownList CssClass="form-control" ID="ddlMt" runat="server" Width="">
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
                                                                <span class="starmark">*</span>
                                                            </td>
                                                            <td>
                                                                <asp:DropDownList CssClass="form-control" ID="ddlNationality" runat="server" Width="">
                                                                    <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                    <asp:ListItem Value="1">INDIAN</asp:ListItem>
                                                                    <asp:ListItem Value="4">OTHER</asp:ListItem>
                                                                </asp:DropDownList>
                                                                <span class="starmark">*</span>
                                                            </td>
                                                            <td>
                                                                <asp:DropDownList CssClass="form-control" ID="ddlReligion" runat="server" Width="">
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
                                                                <asp:DropDownList CssClass="form-control" ID="ddlBloodGroup" runat="server">
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
                                                </div>
                                                <div class="mrgn-top-20">
                                                    <label id="lbladdress">
                                                         <strong>Address for Correspondence / &#2346;&#2340;&#2381;&#2352;&#2366;&#2330;&#2366;&#2352;
                                                    &#2325;&#2366; &#2346;&#2340;&#2366;</strong></label>
                                                </div>
                                                <div class="table-responsive inner-new-tbl btm-tbls">
                                                    <table class="table table-bordered">
                                                        <tr>
                                                            <td width="12%">
                                                                <label id="lblState">
                                                                    State/UT राज्य / केन्द्र-शासित प्रदेश  <span class="starmark">*</span>
                                                                </label>
                                                                &nbsp;
                                                            </td>
                                                            <td>
                                                                <asp:DropDownList CssClass="form-control" ID="ddlCState" runat="server" EnableViewState="true"
                                                                    AppendDataBoundItems="true" AutoPostBack="true" OnSelectedIndexChanged="ddlCState_SelectedIndexChanged">
                                                                    <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                </asp:DropDownList>
                                                               
                                                            </td>
                                                            <td width="12%">
                                                                <label id="lblDistrict">
                                                                    District / &#2332;&#2367;&#2354;&#2366; <span class="starmark">*</span>
                                                                </label>
                                                                &nbsp;
                                                            </td>
                                                            <td width="15%">
                                                                <asp:DropDownList CssClass="form-control" ID="ddlCDist" runat="server" EnableViewState="true"
                                                                    AppendDataBoundItems="true" AutoPostBack="true" OnSelectedIndexChanged="ddlCDist_SelectedIndexChanged">
                                                                    <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                </asp:DropDownList>
                                                                
                                                            </td>
                                                            <td width="17%">
                                                                <label id="lblBlock">
                                                                    Block / ULB / &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; / &#2344;&#2327;&#2352;
                                                            &#2346;&#2352;&#2367;&#2359;&#2342;&#2381; &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;  <span class="starmark">*</span>
                                                                </label>
                                                                &nbsp;
                                                            </td>
                                                            <td colspan="2">
                                                                <asp:DropDownList CssClass="form-control" ID="ddlCBlock" runat="server" EnableViewState="true"
                                                                    AppendDataBoundItems="true">
                                                                    <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                </asp:DropDownList>
                                                               
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="3">
                                                                <label id="lblHouseNo">
                                                                    House No., Street/Village, Post Office, Police Station Name<br />
                                                                    &#2309;&#2346;&#2344;&#2368; &#2350;&#2325;&#2366;&#2344; &#2360;&#2306;&#2326;&#2381;&#2351;&#2366;
                                                            /&#2360;&#2396;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350; /&#2327;&#2366;&#2305;&#2357;
                                                            &#2325;&#2366; &#2344;&#2366;&#2350; /&#2346;&#2379;&#2360;&#2381;&#2335; &#2321;&#2347;&#2367;&#2360;
                                                            &#2319;&#2357;&#2350; &#2346;&#2369;&#2354;&#2367;&#2360; &#2341;&#2366;&#2344;&#2366;
                                                            &#2309;&#2357;&#2358;&#2381;&#2351; &#2354;&#2367;&#2326;&#2375;|  <span class="starmark">*</span></label>&nbsp;
                                                            </td>
                                                            <td colspan="2">
                                                                <asp:TextBox ID="txtCPS" CssClass="form-control Uppercase" runat="server" Height="40px"
                                                                    MaxLength="350" AutoCompleteType="disabled" TextMode="MultiLine" onkeyup="return CheckAddress('txtCPS');"
                                                                    onchange="return checkLength('txtCPS',350);" />
                                                                <cc1:FilteredTextBoxExtender ID="ftetxtCPS" runat="server" FilterMode="ValidChars"
                                                                    ValidChars="/-, " FilterType="LowercaseLetters,UppercaseLetters,Custom,Numbers"
                                                                    TargetControlID="txtCPS">
                                                                </cc1:FilteredTextBoxExtender>
                                                               
                                                            </td>
                                                            <td>
                                                                <label id="lblpin">
                                                                    PIN Code / &#2331;&#2361; &#2309;&#2306;&#2325;&#2379; &#2325;&#2366; &#2346;&#2367;&#2344;
                                                            &#2325;&#2379;&#2337; &#2351;&#2361;&#2366;&#2305; &#2354;&#2367;&#2326;&#2375;&#2306; <span class="starmark">*</span>
                                                                </label>
                                                                &nbsp;
                                                            </td>
                                                            <td>
                                                                <asp:TextBox ID="txtCPC" CssClass="form-control" runat="server" MaxLength="6" AutoCompleteType="disabled"
                                                                    onKeyUp="return NumericValidation('txtCPC','Please write only numeric values for PIN CODE',6);" />
                                                                

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="20%">
                                                                <label id="lblMobileNo">
                                                                    Mobile No. / &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352; <span class="starmark">*</span></label> 
                                                            </td>
                                                            <td>
                                                                <asp:TextBox ID="txtCMobNo" CssClass="form-control" runat="server" MaxLength="10"
                                                                    AutoCompleteType="disabled" onkeyup="return NumericValidation('txtCMobNo','Please write only numeric values for Mobile No.',12);" />
                                                                
                                                            </td>
                                                            <td>
                                                                <label id="lblEmail">
                                                                    e-Mail / &#2312;-&#2350;&#2375;&#2354; <span class="starmark">*</span></label>
                                                            </td>
                                                            <td>
                                                                <asp:TextBox CssClass="form-control" ID="txtCEmail" runat="server" MaxLength="100"
                                                                    AutoCompleteType="disabled" onblur="return checkEmail('txtCEmail');" />
                                                            </td>
                                                            <td>
                                                                <label id="lbltelephone">
                                                                    Telephone No. / &#2309;&#2327;&#2352; &#2342;&#2370;&#2352;&#2349;&#2366;&#2359;
                                                            &#2360;&#2306;&#2326;&#2381;&#2351;&#2366; &#2313;&#2346;&#2354;&#2348;&#2381;&#2343;
                                                            &#2361;&#2379; &#2340;&#2379; &#2351;&#2361;&#2366;&#2305; &#2354;&#2367;&#2326;&#2375;|</label>
                                                            </td>
                                                            <td colspan="2">
                                                                <asp:TextBox ID="txtCTCode" runat="server" Width="60" CssClass="inputitem" MaxLength="5"
                                                                    AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCTCode','Please write only numeric values for Area Code',5);" />
                                                                -
                                                        <asp:TextBox ID="txtCTeleNo" runat="server" CssClass="inputitem" Width="150" MaxLength="7"
                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCTeleNo','Please write only numeric values for Phone No.',8);" />
                                                                <br />
                                                                <label id="lblAreaCode">
                                                                    Area Code</label>&nbsp;- &nbsp;<label id="lblphone">Phone No</label>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td colspan="7">
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
                                                </div>
                                            </ContentTemplate>
                                        </asp:UpdatePanel>
                                        <div class="mrgn-top-20" style="display: none">
                                            <label id="lblReservation">
                                                <strong>Reservation Details / &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2325;&#2368;
                                                &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; </strong>
                                            </label>
                                        </div>
                                        <div class="row" style="display: none">
                                            <div class="col-sm-12">
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
                                            </div>
                                        </div>
                                        <table class="table table-bordered" style="display: none">
                                            <tr>
                                                <td width="10%">
                                                    <asp:RadioButton ID="rbtGeneral" runat="server" GroupName="ResCategory1" onclick="highlightCat1();"
                                                        Checked="true" />
                                                    <span id="GENERAL">General / &#2360;&#2366;&#2350;&#2366;&#2344;&#2381;&#2351; &#2357;&#2352;&#2381;&#2327;</span>
                                                </td>
                                                <td width="15%">
                                                    <asp:RadioButton ID="rbtSC" runat="server" GroupName="ResCategory1" onclick="highlightCat1();" />
                                                    <span id="SC">Schedule Caste (SC) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340;
                                                    &#2332;&#2366;&#2340;&#2367;</span>
                                                </td>
                                                <td width="15%">
                                                    <label>
                                                        <asp:RadioButton ID="rbtST" runat="server" GroupName="ResCategory1" onclick="highlightCat1();" />
                                                        <span id="ST">Schedule Tribe (ST) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340;
                                                        &#2332;&#2344;&#2332;&#2366;&#2340;&#2367;</span>
                                                    </label>
                                                </td>
                                                <td width="15%">
                                                    <asp:RadioButton ID="rbtnOBC" runat="server" GroupName="ResCategory1" onclick="highlightCat1();" />
                                                    <span id="OBC">Backward Class(BC) / &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                    &#2357;&#2352;&#2381;&#2327;</span>
                                                </td>
                                                <td width="15%">
                                                    <asp:RadioButton ID="rbtOther" runat="server" GroupName="ResCategory1" onclick="highlightCat1();" />
                                                    <span id="OTHER">Extremly Backward Class (EBC) / &#2309;&#2340;&#2381;&#2351;&#2306;&#2340;
                                                    &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327; </span>
                                                </td>
                                                <td width="15%" style="display: none">
                                                    <asp:RadioButton ID="rbtBCW" runat="server" GroupName="ResCategory1" onclick="highlightCat1();" />
                                                    <span id="WBC">Women Backward Class (WBC) / &#2346;&#2367;&#2331;&#2396;&#2375; &#2357;&#2352;&#2381;&#2327;
                                                    &#2325;&#2368; &#2350;&#2361;&#2367;&#2354;&#2366;&#2351;&#2375; </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" id="trEWS">
                                                    <span id="SpanEWS">Economically Weaker Section(EWS) / आर्थिक रूप से कमजोर वर्ग </span>
                                                    <asp:RadioButton ID="rbtnEWSNo" runat="server" Checked="true" GroupName="EWS" onclick="highliteEWS();" />
                                                    <span id="spanEWSNo">No/ &#2344;&#2361;&#2368;&#2306;</span>
                                                    <asp:RadioButton ID="rbtnEWSYes" runat="server" GroupName="EWS" onclick="highliteEWS();;" />
                                                    <span id="spanEWSYes">Yes/ &#2361;&#2366;&#2305;</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <span id="PHOH">Specially Abled ( &#2342;&#2367;&#2357;&#2381;&#2351;&#2366;&#2306;&#2327;
                                                    )</span>
                                                    <asp:RadioButton ID="chkPHOHN" runat="server" Checked="true" GroupName="PHOH" onclick="highlitespecialyEnabled();" />
                                                    <span id="Span2">No/ &#2344;&#2361;&#2368;&#2306;</span>
                                                    <asp:RadioButton ID="chkPHOHY" runat="server" GroupName="PHOH" onclick="highlitespecialyEnabled();" />
                                                    <span id="Span1">Yes/ &#2361;&#2366;&#2305;</span>
                                                </td>
                                            </tr>
                                            <tr style="display: none">
                                                <td colspan="3">
                                                    <asp:RadioButton ID="rbtESM" runat="server" GroupName="ResCategory2" onclick="highlightCat2();" />
                                                    <span id="ESM">Ex-Service Man (ESM)
                                                    <br />
                                                    </span>
                                                </td>
                                                <td colspan="2" style="display: none">
                                                    <asp:RadioButton ID="rbtCoM" runat="server" GroupName="ResCategory2" onclick="highlightCat2();" />
                                                    <span id="CoM">Children of Martyrs (CoM)</span>
                                                </td>
                                                <td width="30%" style="display: none">
                                                    <asp:RadioButton ID="rbtSDP" runat="server" GroupName="ResCategory2" onclick="highlightCat2();" />
                                                    <span id="SDP">Serving Defence Personnel (SDP)</span>
                                                </td>
                                                <td width="" colspan="3">
                                                    <asp:RadioButton ID="rbtNon" runat="server" GroupName="ResCategory2" Checked="true"
                                                        onclick="highlightCat2();" />
                                                    <span id="NoN">None</span>
                                                </td>
                                            </tr>
                                        </table>
                                        <div class="mrgn-top-20" style="display: none">
                                            <label id='lblWeightage'>
                                                <strong>Weightage Details / &#2350;&#2361;&#2340;&#2381;&#2357; &#2357;&#2367;&#2357;&#2352;&#2339;
                                                &nbsp;(यदि लागू हो तो सम्बंधित विकल्प को चुने / Select the appropriate option if
                                                Applicable )</strong>
                                            </label>
                                        </div>
                                        <table class="table table-bordered" style="display: none">
                                            <tr>
                                                <td bgcolor="#FFFFFF">
                                                    <asp:CheckBox ID="chkNCCA" runat="server" onclick="highLight('chkNCCA','NCCA','NCC' );" />
                                                    <span id="NCCA">NCC</span>
                                                </td>
                                                <td bgcolor="#FFFFFF" style="display: none">
                                                    <asp:CheckBox ID="chkNCCC" runat="server" onclick="highLight('chkNCCC','NCCC','NCC (C)' );" />
                                                    <span id="NCCC">NCC (C)</span>
                                                </td>
                                                <td bgcolor="#FFFFFF" style="display: none">
                                                    <asp:CheckBox ID="chkSCRP" runat="server" onclick="highLight('chkSCRP','RP','Rajya Puraskar  (RP)' );" />
                                                    <span id="RP">Rajya Puraskar (RP)</span>
                                                </td>
                                                <td bgcolor="#FFFFFF" style="display: none">
                                                    <asp:CheckBox ID="chkSCPR" runat="server" onclick="highLight('chkSCPR','PR','President Recognition (PR)' );" />
                                                    <span id="PR">President Recognition (PR)</span>
                                                </td>
                                                <td bgcolor="#FFFFFF" style="display: none">
                                                    <asp:CheckBox ID="chkSportsS" runat="server" onclick="highLight('chkSportsS','SportS','State' );" />
                                                    <span id="SportS">State </span>
                                                </td>
                                                <td bgcolor="#FFFFFF" style="display: none">
                                                    <asp:CheckBox ID="chkSportsN" runat="server" onclick="highLight('chkSportsN','SportN','National' );" />
                                                    <span id="SportN">National </span><strong></strong>
                                                </td>
                                                <td bgcolor="#FFFFFF" style="display: none">
                                                    <asp:CheckBox ID="chkSportsIN" runat="server" onclick="highLight('chkSportsIN','SportIN','International' );" />
                                                    <span id="SportIN">International </span>
                                                </td>
                                            </tr>
                                        </table>
                                        <center>
                                        <asp:Button CssClass="btn btn-success btm-btn-cls" ID="btnSave" runat="server" Text="Update"
                                            OnClick="btnSave_Click" /></center>
                                    </div>
                                    <!-- -----formpage----- -->
                                </div>
                            </div>
                            <!-- /.row -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.main-content -->
            <div class="footer">
                <div class="footer-inner">
                    <div class="footer-content">
                        <span class="bigger-120"><span id="copy" class="blue bolder"></span><span>Online Facilitation
                        System for Students. All rights reserved @2018</span> </span><span class="action-buttons">
                            <a href="#"><i class="ace-icon fa fa-twitter-square light-blue bigger-150"></i></a>
                            <a href="#"><i class="ace-icon fa fa-facebook-square text-primary bigger-150"></i>
                            </a><a href="#"><i class="ace-icon fa fa-rss-square orange bigger-150"></i></a>
                        </span>
                    </div>
                </div>
            </div>
            <a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse display">
                <i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i></a>
        </div>
    </form>
    <script>

        $(document).ready(function () {
            $('#txtRollCode').change(function () {
                debugger;
                if ($('#ddlBoard').val() == "109") {
                    $(".allownumericwithoutdecimal").on("keypress keyup blur", function (event) {
                        $(this).val($(this).val().replace(/[^\d].+/, "")); //alows only numeric values
                        if ((event.which < 48 || event.which > 57)) {
                            event.preventDefault();
                        }
                    });
                    var userInput = $('#txtRollCode').val();
                    if (userInput.length == 5) {
                    }
                    else {
                        alert("Invalid roll code. Roll Code for BSEB should be of length - 5");
                        $('#txtRollCode').val('');
                        $('#txtRollCode').focus();
                    }
                }
            });

            $('#txtBoardRoll').change(function () {
                if ($('#ddlBoard').val() == "109") {
                    $(".allownumericwithoutdecimal").on("keypress keyup blur", function (event) {
                        $(this).val($(this).val().replace(/[^\d].+/, ""));
                        if ((event.which < 48 || event.which > 57)) {
                            event.preventDefault();
                        }
                    });
                    var userInput = $('#txtBoardRoll').val();
                    if (userInput.length >= 4 && userInput.length <= 7) {
                    }
                    else {
                        alert("Invalid roll number. Roll number length for BSEB should be between 4 and 7");
                        $('#txtBoardRoll').val('');
                        $('#txtBoardRoll').focus();
                    }
                }
            });
        });
    </script>
    <script type="text/javascript">
        function pageLoad() {
            OSAShow();
            showhideCGPA();
            setGrade();
            ExamType();
            highlightCat1();
            highliteEWS();
            highlitespecialyEnabled();


            var inVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
            if (parseInt(inVal) == 109 || parseInt(inVal) == 118) {
                document.getElementById('tdRollCdH').style.display = "";
                document.getElementById('tdRollCdF').style.display = "";

            }
            else {

                document.getElementById('tdRollCdH').style.display = "none";
                document.getElementById('tdRollCdF').style.display = "none";

            }


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


            $("[id*=btnSave]").click(function (event, skip) {
                debugger;
                if (ValidateIntermediateForm()) {
                    if (skip) {
                        return true;
                    }
                    event.preventDefault();
                    var self = $("[id*=btnSave]");
                    var msg = '<strong>Are you sure to ' + $("[id*=btnSave]").val() + ' this record ?</strong>';
                    jConfirm('btnSave',
                        msg,
                        Title,
                        function (r) {
                            if (r) {
                                $(self).trigger('click', true);
                            }
                        }
                    );
                }

                else {
                    event.preventDefault();
                    return false;
                }
            });
        }



        function ValidateIntermediateForm() {
            debugger;
            if (!DropDownValidation('ddlBoard', 'the Name of your Examination Board')) {
                return false;
            }
            if (document.getElementById('ddlBoard').value == 131) {

                if (!blankFieldValidation('txtBoardName', 'Board Name')) {
                    return false;
                }
            }
            if (!DropDownValidation('ddlYOP', 'Year of Passing')) {
                return false;
            }
            var yojoining = parseInt($("#ddlYOJ").val());
            var yoleaving = parseInt($("#ddlYOL").val());
            var yoPassing = parseInt($("#ddlYOP").val());
            if (yoPassing < yoleaving && yoPassing > 0 && yoleaving > 0) {
                jAlert('', '<strong>Year of leaving should be less than or equal to Year of passing</strong>', Title);
                $("#ddlYOL").val('0');
                $('#ddlYOL').focus();
                return false;
            }
            if (yoPassing <= yojoining && yoPassing > 0 && yojoining > 0) {
                jAlert('', '<strong>Year of joining should be less than Year of passing</strong>', Title);
                $("#ddlYOJ").val('0');
                $('#ddlYOJ').focus();
                return false;
            }

            if ((document.getElementById('rbtnAnnual').checked == false) & (document.getElementById('rbtnSuppl').checked == false)) {
                jAlert('', '<strong>Please Choose Exam Type.</strong>', Title);
                $('#rbtnAnnual').focus();
                return false;
            }
            if (parseInt(document.getElementById('ddlBoard').value) == 109 || parseInt(document.getElementById('ddlBoard').value) == 118) {
                if (!blankFieldValidation('txtRollCode', 'Roll Code')) {
                    return false;
                }
                if (!chkSingleQuote('txtRollCode', 'Roll Code')) {
                    return false;
                }
                if (!WhiteSpaceValidation1st('txtRollCode')) {
                    return false;
                }

            }
            
            if (!blankFieldValidation('txtBoardRoll', 'Roll Number')) {
                return false;
            }
            if (!chkSingleQuote('txtBoardRoll', 'Roll Number'))
                return false;
            if (!WhiteSpaceValidation1st('txtBoardRoll'))
                return false;
            //UniqueId
            //debugger;
            if (parseInt(document.getElementById('ddlBoard').value) == 109 && ($('#ddlYOP').val() == 2024)) {
                document.getElementById("divUniqueId").style.display = '';
                $('#divUniqueId').show();
               
            }
            if (!blankFieldValidation('txtApplName', "Applicant Name")) {
                return false;
            }
            
          
            if ($("#txtApplName").val().length == 1) {
                jAlert('', "<strong>Applicant's Name is too short</strong>", Title);
                $('#txtApplName').focus();
                return false;
            }
            if (!chkSingleQuote('txtApplName', 'Applicant Name'))
                return false;
            if (!WhiteSpaceValidation1st('txtApplName'))
                return false;

            if (!blankFieldValidation('txtFatherName', "Father's Name")) {
                return false;
            }
            if ($("#txtFatherName").val().length == 1) {
                jAlert('', "<strong>Father's Name is too short</strong>", Title);
                $('#txtFatherName').focus();
                return false;
            }
            if (!chkSingleQuote('txtFatherName', "Father's Name"))
                return false;
            if (!WhiteSpaceValidation1st('txtFatherName'))
                return false;

            if (!blankFieldValidation('txtMotherName', "Mother's Name")) {
                return false;
            }
            if ($("#txtMotherName").val().length == 1) {
                jAlert('', "<strong>Mother's Name is too short</strong>", Title);
                $('#txtMotherName').focus();
                return false;
            }
            if (!chkSingleQuote('txtMotherName', "Mother's Name"))
                return false;

            if (!WhiteSpaceValidation1st('txtMotherName'))
                return false;

         
            if ($('#rbtnKGABC input:checked').val() == 1 && (parseInt(document.getElementById('ddlBoard').value) != 109 || document.getElementById('ddlGender').value != 2)) {
                jAlert('', "<strong>For Choosing Yes, you must be a female student and should have passed Class Tenth examination from Bihar School Examination Board (BSEB), while residing at Kasturba Gandhi Balika Chhatravas.</strong>", Title);
                $('#rbtnKGABC').focus();
                return false;
            }
           
            if (document.getElementById('hdnImgAppl').value == "") {
                jAlert('', "<strong>Please Upload your photo !</strong>", Title);
                document.getElementById('ImgAppl').focus();
                return false;
            }
            //            var file = $('#imgUpload').val();
            //            if (!file) {
            //                jAlert('', "<strong>Please Upload your photo !</strong>", Title);
            //                document.getElementById('imgUpload').focus();
            //                return false;
            //            }
            //=========================Mark Validation===================
            var globalMaxMark = 0, globalTotMark = 0;
            if (((document.getElementById('ddlBoard').value == 46) && ($('#ddlYOP').val() >= 2010) && ($('#ddlYOP').val() < 2018)) || ((document.getElementById('ddlBoard').value == 103) && ($('#ddlYOP').val() >= 2012))) {
                if (!DropDownValidation('ddlEng', 'English Grade'))
                    return false;
                if (!DropDownValidation('ddlMath', 'Math Grade'))
                    return false;
                if (!DropDownValidation('ddlSc', 'Science Grade'))
                    return false;
                if (!DropDownValidation('ddlSoSc', 'Social Science Grade'))
                    return false;
                if (!blankFieldValidation('txtCGPA', 'CGPA'))
                    return false;
                if (document.getElementById('txtCGPA').value <= 0) {
                    jAlert('', "<strong>CGPA cannot be less than or equal to zero(0)</strong>", Title);
                    document.getElementById('txtCGPA').value = '';
                    return false;
                }
                if (!IsMatch()) {
                    jAlert('', "<strong>Please Write valid CGPA</strong>", Title);
                    document.getElementById('txtCGPA').value = '';
                    return false;
                }


            }
            else if ((document.getElementById('ddlBoard').value == 116) && ($('#ddlYOP').val() >= 2010)) {
                if (!DropDownValidation('ddlTGrade', 'Grade'))
                    return false;
                if (!DropDownValidation('ddlKEnglish', 'English Grade'))
                    return false;
                if (!DropDownValidation('ddlKMath', 'Math Grade'))
                    return false;
                if (!DropDownValidation('ddlKScience', 'Science Grade'))
                    return false;
                if (!DropDownValidation('ddlKSoSc', 'Social Science Grade'))
                    return false;
            }

            else {


                if (!blankFieldValidation('txtTotMark', 'Total Mark Secured'))
                    return false;
                if (!NumericValidation('txtTotMark', 'Please write only numeric values for MARKS', '4'))
                    return false;
                if (!blankFieldValidation('txtMaxMark', 'Total Full Mark'))
                    return false;
                if (!NumericValidation('txtMaxMark', 'Please write only numeric values for MARKS', '4'))
                    return false;
                if (parseInt(document.getElementById('txtTotMark').value) >= parseInt(document.getElementById('txtMaxMark').value)) {
                    jAlert('', "<strong>Total Marks Obtained cannot be greater than or equal to Total Full Marks</strong>", Title);
                    document.getElementById('txtTotMark').focus();
                    return false;
                }


                //=================Compare mark with total mark & Maxmimum mark=========
                var Eng = parseInt(document.getElementById('txtEnglish').value);
                var Math = parseInt(document.getElementById('txtMath').value);
                var Sci = parseInt(document.getElementById('txtScience').value);
                var SoSci = parseInt(document.getElementById('txtSocSci').value);
                var Tot = parseInt(document.getElementById('txtTotMark').value);
                var Max = parseInt(document.getElementById('txtMaxMark').value);
                var inTotal = parseInt(Eng + Math + Sci + SoSci);

                if (Tot == 0) {
                    jAlert('', "<strong>Total Marks Obtained cannot be 0(zero)</strong>", Title);
                    document.getElementById('txtTotMark').focus();
                    return false;
                }

                if (Tot >= Max) {
                    jAlert('', "<strong>Total Marks Obtained cannot be greater than or equal to Total Full Marks</strong>", Title);
                    document.getElementById('txtTotMark').focus();
                    return false;
                }
                if (Max == 0) {
                    jAlert('', "<strong>Total Full Marks cannot be 0(zero)</strong>", Title);
                    document.getElementById('txtMaxMark').focus();
                    return false;
                }
            }

            var intYear = parseInt($('#ddlYOP').val());

            if (((document.getElementById('ddlBoard').value == 46) && ($('#ddlYOP').val() >= 2010) && ($('#ddlYOP').val() < 2018)) || ((document.getElementById('ddlBoard').value == 103) && ($('#ddlYOP').val() >= 2012)) ) {
                globalMaxMark = parseInt(10);
                globalTotMark = parseInt(document.getElementById('txtCGPA').value);
            }
            else {
                globalTotMark = parseInt(document.getElementById('txtTotMark').value);
                globalMaxMark = parseInt(document.getElementById('txtMaxMark').value);
            }
            if ((document.getElementById('ddlBoard').value == 109) && intYear >= 2010 && globalMaxMark != 500) {
                jAlert('', "<strong>Total Full Marks should be 500 for BSEB Bihar board for year " + intYear + "</strong>", Title);
                document.getElementById('txtMaxMark').focus();
                return false;

            }
            if ((document.getElementById('ddlBoard').value == 46) && intYear > 2017 && globalMaxMark != 500) {
                jAlert('', "<strong>Total Full Marks should be 500 for CBSE New Delhi board for year " + intYear + "</strong>", Title);
                document.getElementById('txtMaxMark').focus();
                return false;

            }
            if ((document.getElementById('ddlBoard').value == 46) && intYear >= 2010 && intYear <= 2017 && globalMaxMark != 10) {
                jAlert('', "<strong>Total Full Marks should be 10 for CBSE New Delhi board for year " + intYear + "</strong>", Title);
                document.getElementById('txtMaxMark').focus();
                return false;

            }
            if ((document.getElementById('ddlBoard').value == 47) && globalMaxMark > 1000) {
                jAlert('', "<strong>Total Full Marks should be less than equal to 1000 for ICSE New Delhi board for year " + intYear + "</strong>", Title);
                document.getElementById('txtMaxMark').focus();
                return false;

            }
            //if ((document.getElementById('ddlBoard').value == 47) && intYear >= 2010 && intYear <= 2017 && globalMaxMark != 10) {
            //    jAlert('', "<strong>Maximum mark should be 10 for ICSE New Delhi board for year " + intYear + "</strong>", Title);
            //    document.getElementById('txtMaxMark').focus();
            //    return false;

            //}
            if (((document.getElementById('ddlBoard').value == 46) && ($('#ddlYOP').val() >= 2010) && ($('#ddlYOP').val() < 2018))) {
                if (globalMaxMark < globalTotMark) {
                    jAlert('', "<strong>Total Marks Obtained cannot be greater than Total Full Marks</strong>", Title);
                    document.getElementById('txtMaxMark').focus();
                    return false;
                }
            }
            else {
                if (globalMaxMark <= globalTotMark) {
                    jAlert('', "<strong>Total Marks Obtained cannot be greater than or equal to Total Full Marks</strong>", Title);
                    document.getElementById('txtMaxMark').focus();
                    return false;
                }
            }
                var decPer = 0;
            if (!((document.getElementById('ddlBoard').value == 116) && intYear >= 2010)) {
                decPer = parseFloat((globalTotMark / globalMaxMark) * 100);
                if (decPer < parseFloat(30)) {
                    jAlert('', "<strong>Invalid marks. You should have secured 30% marks to be enrolled in the CAF</strong>", Title);

                    return false;
                }
            }


            //================================Mark Validation End====================                  
            //Compartmental Validation
            if (document.getElementById('rbtCompartmentalY').checked == true) {
                //           if(!blankFieldValidation('txtCompSubject1','Subject1'))
                //                return false;
                if (!DropDownValidation('ddlCompSubject1', 'Subject1'))
                    return false;
                if (!blankFieldValidation('txtCompFMark1', 'Fail Mark in previous exam'))
                    return false;

                if (!NumericValidation('txtCompFMark1', 'Please write only numeric values for MARKS', '3'))
                    return false;
                if (!blankFieldValidation('txtCompPMark1', 'Pass Mark in previous exam'))
                    return false;

                if (!NumericValidation('txtCompPMark1', 'Please write only numeric values for MARKS', '3'))
                    return false;
                var f1 = parseFloat(document.getElementById('txtCompFMark1').value);
                var p1 = parseFloat(document.getElementById('txtCompPMark1').value);
                if (f1 >= p1) {
                    jAlert('', "<strong>Fail Mark cannot be greater than or equal to Pass Mark</strong>", Title);
                    document.getElementById('txtCompFMark1').focus();
                    return false;
                }
                if ((document.getElementById('ddlBoard').value != 46) && ($('#ddlYOP').val() <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
                    if (!checkCompartment('ddlCompSubject1', 'txtCompPMark1'))
                        return false;
                }
                if (document.getElementById('ddlCompSubject2').options[document.getElementById('ddlCompSubject2').selectedIndex].value != '') {
                    if (!DropDownValidation('ddlCompSubject1', 'Subject1'))
                        return false;
                    if (!blankFieldValidation('txtCompFMark1', 'Fail Mark in previous exam'))
                        return false;
                    if (!blankFieldValidation('txtCompPMark1', 'Pass Mark in previous exam'))
                        return false;
                    if (!blankFieldValidation('txtCompFMark2', 'Fail Mark in previous exam for 2nd subject'))
                        return false;

                    if (!NumericValidation('txtCompFMark2', 'Please write only numeric values for MARKS', '3'))
                        return false;
                    if (!blankFieldValidation('txtCompPMark2', 'Pass Mark in previous exam for 2nd subject'))
                        return false;
                    if (!NumericValidation('txtCompPMark2', 'Please write only numeric values for MARKS', '3'))
                        return false;

                    var f2 = parseFloat(document.getElementById('txtCompFMark2').value);
                    var p2 = parseFloat(document.getElementById('txtCompPMark2').value);
                    if (f2 >= p2) {
                        jAlert('', "<strong>Fail Mark cannot be greater than or equal to Pass Mark</strong>", Title);
                        document.getElementById('txtCompFMark2').focus();
                        return false;
                    }
                    if ((document.getElementById('ddlBoard').value != 46) && ($('#ddlYOP').val() <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
                        if (!checkCompartment('ddlCompSubject2', 'txtCompPMark2'))
                            return false;
                    }
                }


                if (document.getElementById('ddlCompSubject3').options[document.getElementById('ddlCompSubject3').selectedIndex].value != '') {

                    if (!DropDownValidation('ddlCompSubject2', 'Subject2'))
                        return false;
                    if (!blankFieldValidation('txtCompFMark2', 'Fail Mark in previous exam'))
                        return false;
                    if (!blankFieldValidation('txtCompPMark2', 'Pass Mark in previous exam'))
                        return false;
                    if (!blankFieldValidation('txtCompFMark3', 'Fail Mark in previous exam for 3rd subject'))
                        return false;

                    if (!NumericValidation('txtCompFMark3', 'Please write only numeric values for MARKS', '3'))
                        return false;
                    if (!blankFieldValidation('txtCompPMark3', 'Pass Mark in previous exam for 3rd subject'))
                        return false;
                    if (!NumericValidation('txtCompPMark3', 'Please write only numeric values for MARKS', '3'))
                        return false;

                    var f3 = parseFloat(document.getElementById('txtCompFMark3').value);
                    var p3 = parseFloat(document.getElementById('txtCompPMark3').value);
                    if (f3 >= p3) {
                        jAlert('', "<strong>Fail Mark cannot be greater than or equal to Pass Mark</strong>", Title);
                        document.getElementById('txtCompFMark3').focus();
                        return false;
                    }
                    if ((document.getElementById('ddlBoard').value != 46) && ($('#ddlYOP').val() <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
                        if (!checkCompartment('ddlCompSubject3', 'txtCompPMark3'))
                            return false;
                    }
                }
                if (document.getElementById('ddlCompSubject4').options[document.getElementById('ddlCompSubject4').selectedIndex].value != '') {

                    if (!DropDownValidation('ddlCompSubject3', 'Subject2'))
                        return false;
                    if (!blankFieldValidation('txtCompFMark3', 'Fail Mark in previous exam'))
                        return false;
                    if (!blankFieldValidation('txtCompPMark3', 'Pass Mark in previous exam'))
                        return false;
                    if (!blankFieldValidation('txtCompFMark4', 'Fail Mark in previous exam for 4th subject'))
                        return false;

                    if (!NumericValidation('txtCompFMark4', 'Please write only numeric values for MARKS', '3'))
                        return false;
                    if (!blankFieldValidation('txtCompPMark4', 'Pass Mark in previous exam for 4th subject'))
                        return false;
                    if (!NumericValidation('txtCompPMark4', 'Please write only numeric values for MARKS', '3'))
                        return false;

                    var f4 = parseFloat(document.getElementById('txtCompFMark4').value);
                    var p4 = parseFloat(document.getElementById('txtCompPMark4').value);
                    if (f4 >= p4) {
                        jAlert('', "<strong>Fail Mark cannot be greater than or equal to Pass Mark</strong>", Title);
                        document.getElementById('txtCompFMark4').focus();
                        return false;
                    }
                    if ((document.getElementById('ddlBoard').value != 46) && ($('#ddlYOP').val() <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
                        if (!checkCompartment('ddlCompSubject4', 'txtCompPMark4'))
                            return false;
                    }
                }
                if (!checkCompSubject('1')) {
                    jAlert('', "<strong>You cannot enter same subject\ntwice for Comaprtment subject</strong>", Title);
                    return false;
                }

            }
            if (!blankFieldValidation('txtschname', 'Name of the School'))
                return false;
            if (!chkSingleQuote('txtschname', 'Name of the School'))
                return false;
            if (!WhiteSpaceValidation1st('txtschname'))
                return false;

            if (!blankFieldValidation('txtschloc', 'Address of the School'))
                return false;
            if (!chkSingleQuote('txtschloc', 'Address of the School'))
                return false;
            if (!WhiteSpaceValidation1st('txtschloc'))
                return false;
            //            if (!isAlphabet('txtschloc')) {
            //                jAlert('', "<strong>Please enter Alphabets</strong>", Title);
            //                document.getElementById('txtschloc').value = '';
            //                document.getElementById('txtschloc').focus();
            //                return false;
            //            }

            if (!DropDownValidation('ddlinstDistrict', 'District'))
                return false;


            if (!DropDownValidation('ddlYOJ', 'Year of Joining'))
                return false;

            if (!DropDownValidation('ddlYOL', 'Year of Leaving'))
                return false;

            if (!DropDownValidation('ddlDay', 'the Day of your Date of Birth')) {
                return false;
            }
            if (!DropDownValidation('ddlMonth', 'the Month of your Date of Birth')) {
                return false;
            }
            if (!DropDownValidation('ddlYear', 'the Year of your Date of Birth')) {
                return false;
            }
            //=======================Checking Valid DOB=======================
            var selDate = document.getElementById('ddlDay').value;
            var selMonth = document.getElementById('ddlMonth').value;
            var selYear = document.getElementById('ddlYear').value;
            if ((selDate > 0) && (selMonth > 0) && (selYear > 0)) {
                if (!(isValidDate(selYear, selMonth, selDate))) {
                    jAlert('', "<strong>Please enter valid Date Of Birth !</strong>", Title);
                    document.getElementById('ddlDay').focus();
                    return false;
                }
            }
            //==================checking diff. between DOB & YOP==============
            var year = parseInt(document.getElementById('ddlYear').value);

            var yop = $('#ddlYOP').val();
            var gap = yop - year;
            if (gap < 13) {
                jAlert('', "<strong>The difference of age between the birth year and 10th passing year should be greater than 13</strong>", Title);
                document.getElementById('ddlYear').focus();
                return false;
            }

            if (!DropDownValidation('ddlNationality', 'Nationality')) {
                return false;
            }
            if (!DropDownValidation('ddlMt', 'Mother Tongue')) {
                return false;
            }

            //===================For Correspondence address===================
            if (!DropDownValidation('ddlCState', 'State')) {
                return false;
            }
            if (!DropDownValidation('ddlCDist', 'District')) {
                return false;
            }
            if (!DropDownValidation('ddlCBlock', 'Block/ULB')) {
                return false;
            }
            if (!blankFieldValidation('txtCPS', 'House no.,village name,police station')) {
                return false;
            }
            if ($("#txtCPS").val().length == 1) {
                jAlert('', "<strong>House No., Street/Village, Post Office, Police Station Name is too short</strong>", Title);
                $('#txtCPS').focus();
                return false;
            }
            if (!WhiteSpaceValidation1st('txtCPS'))
                return false;
            if (document.getElementById('txtCPS').value != '') {
                var add = document.getElementById('txtCPS').value;
                var len = add.length;
                if (parseInt(len) > 350) {
                    jAlert('', "<strong>Please enter house no.,street/village,post office,\n police station name within 350 characters</strong>", Title);
                    return false;
                }
            }
            if (!blankFieldValidation('txtCPC', 'Pin Code')) {
                return false;
            }
            if (!chkSingleQuote('txtCPC', 'PIN Code'))
                return false;
            if (!WhiteSpaceValidation1st('txtCPC'))
                return false;
            if (!NumericValidation('txtCPC', 'Please write only numeric values for PIN Code', '6'))
                return false;
            if (!RepeatedNumbers('txtCPC', 1)) {
                jAlert('', "<strong>Please write valid PIN</strong>", Title);
                document.getElementById('txtCPC').value = '';
                document.getElementById('txtCPC').focus();
                return false;
            }
            var strpin = document.getElementById('txtCPC').value;
            if ((strpin != '') && (strpin.length < 6)) {
                jAlert('', "<strong>PIN Code should be of 6 digits only</strong>", Title);
                document.getElementById('txtCPC').focus();
                return false;
            }


            if (!chkSingleQuote('txtCTCode', 'Area Code'))
                return false;
            if (!WhiteSpaceValidation1st('txtCTCode'))
                return false;
            if (!NumericValidation('txtCTCode', 'Please write only numeric values for Area Code', '5'))
                return false;
            if (!RepeatedNumbers('txtCTCode', 2)) {
                jAlert('', "<strong>Please write valid Area Code</strong>", Title);
                document.getElementById('txtCTCode').value = '';
                document.getElementById('txtCTCode').focus();
                return false;
            }
            var strAreaCode = document.getElementById('txtCTCode').value;
            if ((strAreaCode != '') && (strAreaCode.length < 3)) {
                jAlert('', "<strong>Area Code cannot be less than 3digit</strong>", Title);
                document.getElementById('txtCTCode').focus();
                return false;
            }
            if (!chkSingleQuote('txtCTeleNo', 'Phone No'))
                return false;
            if (!WhiteSpaceValidation1st('txtCTeleNo'))
                return false;
            if (!NumericValidation('txtCTeleNo', 'Please write only numeric values for Phone No.', '7'))
                return false;
            if (!RepeatedNumbers('txtCTeleNo', 1)) {
                jAlert('', "<strong>Please write valid Phone No</strong>", Title);
                document.getElementById('txtCTeleNo').value = '';
                document.getElementById('txtCTeleNo').focus();
                return false;
            }
            var strPhone = document.getElementById('txtCTeleNo').value;
            if ((strPhone != '') && (strPhone.length < 5)) {
                jAlert('', "<strong>Phone No. cannot be less than 5 digit</strong>", Title);
                document.getElementById('txtCTeleNo').focus();
                return false;
            }

            if (!blankFieldValidation('txtCMobNo', 'Mobile Number')) {
                return false;
            }

            if (!chkSingleQuote('txtCMobNo', 'Mobile Number'))
                return false;
            if (!WhiteSpaceValidation1st('txtCMobNo'))
                return false;
            if (!NumericValidation('txtCMobNo', 'Please write only numeric values for Mobile No.', '12'))
                return false;
            if (!RepeatedNumbers('txtCMobNo', 2)) {
                jAlert('', "<strong>Please write valid Mobile No.</strong>", Title);
                document.getElementById('txtCMobNo').value = '';
                document.getElementById('txtCMobNo').focus();
                return false;
            }
            var strMob = document.getElementById('txtCMobNo').value;
            if ((strMob != '') && (strMob.length < 10)) {
                jAlert('', "<strong>Mobile No. cannot be less than 10 digit</strong>", Title);
                document.getElementById('txtCMobNo').focus();
                return false;
            }
            if (!blankFieldValidation('txtCEmail', 'e-Mail')) {
                return false;
            }
            if (!chkSingleQuote('txtCEmail', 'e-Mail'))
                return false;
            if (!WhiteSpaceValidation1st('txtCEmail', 'e-Mail'))
                return false;
            if (!EmailValidation('txtCEmail', 'e-Mail'))
                return false;
            //            //=====================For Reservation category==================
            //            if ((document.getElementById('rbtST').checked == false) && (document.getElementById('rbtSC').checked == false) && (document.getElementById('rbtOther').checked == false) && (document.getElementById('rbtnOBC').checked == false) && (document.getElementById('rbtGeneral').checked == false) && (document.getElementById('rbtBCW').checked == false)) {
            //                jAlert('', "<strong>Please select ST/SC/OBC/General/EBC category</strong>", Title);
            //                return false;
            //            }

            if (document.getElementById('cbAadharAgree').checked == false) {
                if (document.getElementById('txtAadhar').value == '') {
                    alert('Please enter Aadhaar number');
                    return false;
                }
                if (document.getElementById('txtAadhar').value.length != 12 || ValidAadhaarNo(document.getElementById('txtAadhar').value) == false) {
                    alert('Invalid Aadhaar number');
                    return false;
                }
            }

            return true;

        }

        //=====highlight specially enabled=====
        function highlitespecialyEnabled() {
            debugger;
            $("#Span2").css("color", "#000000");
            $("#Span1").css("color", "#000000");

            if (document.getElementById('chkPHOHN').checked == true) {
                $("#Span2").css("color", "#CC33FF");
            }
            else if (document.getElementById('chkPHOHY').checked == true) {
                $("#Span1").css("color", "#CC33FF");
            }
        }

        //=======================function for SingleQuote=============
        function chkSingleQuote(ctlName, MessageControlName) {
            debugger;
            var str1 = document.getElementById(ctlName).value;
            var Object = document.getElementById(ctlName);
            for (var i = 0; i < str1.length; i++) {
                var ch = str1.substring(i, i + 1);
                if (ch == "'") {
                    jAlert(ctlName, '<strong>Single quote not allowed in first place of ' + MessageControlName + ' !</strong>', Title);
                    Object.focus();
                    return false;
                }
            }
            return true;
        }

    </script>
    <script type="text/javascript">
        var prm = Sys.WebForms.PageRequestManager.getInstance();
        if (prm != null) {
            prm.add_endRequest(function (sender, e) {
                if (sender._postBackSettings.panelsToUpdate != null) {
                }
            });
        };
    </script>
</body>
</html>
