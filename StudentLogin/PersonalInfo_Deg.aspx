<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PersonalInfo_Deg.aspx.cs"
    Inherits="StudentLogin_PersonalInfo_Deg" EnableEventValidation="true" %>

<%@ Register Src="~/includes/RegStudentLeftmenu.ascx" TagPrefix="stuc1" TagName="leftmenu" %>
<%@ Register Src="~/includes/RegStudentHeader.ascx" TagPrefix="stuc2" TagName="stdntHdr" %>
<%@ Register Src="~/includes/StudentDoctype.ascx" TagPrefix="studoc" TagName="studoctpe" %>
<%@ Register Src="~/includes/footer.ascx" TagName="footer" TagPrefix="uc2" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
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
    <script src="../script/Common_Deg.js" type="text/javascript"></script>
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
        function HideUpload() {

            document.getElementById('fldImgAppl').style.display = 'none';
        }
    </script>
    <script type="text/javascript" language="javascript">

        function DisableWBC() {

            var gender = $("#ddlGender").val()
            if (gender != "2") {
                $("#rbtBCW").attr('disabled', true);
                $("#rbtBCW").attr('checked', false);
            }
            else {
                $("#rbtBCW").attr('disabled', false);

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
                $("txtCompFMark3").val("");
                $("txtCompPMark3").val("");
            }
        }


    </script>
    <script language="javascript" type="text/javascript">
        function checkNumber(ctl) {
            if ((event.keyCode >= 47) && (event.keyCode <= 57)) {
                alert('Please enter only Alphabets and dot(.)');
                document.getElementById(ctl).value = '';
                document.getElementById(ctl).focus();
                return false;
            }
        }
        //========================Activate Option================
      
    </script>
</head>
<body class="no-skin" onload=" OSAShow();MarkIntigrationLoad();Diploma();showHideStream();CheckMarkVerificationCpy();DisableWBC();">
    <form id="form1" runat="server">
    <asp:HiddenField ID="hdnImgAppl" runat="server" />
    <asp:HiddenField ID="hdnCSRFRandNum" runat="server" />
    <asp:HiddenField ID="hdnApplicationId" runat="server" />
    <asp:HiddenField ID="hdnUploadStatus" runat="server" Value="0" />
    <asp:HiddenField ID="hdnRejectStatus" runat="server" Value="0" />
    <asp:HiddenField ID="hdnValidateStatus" runat="server" Value="0" />
    <asp:HiddenField ID="hdnOldBlockId" runat="server" Value="0" />
    <asp:HiddenField ID="hdnAppliedStreams" runat="server" Value="0" />
    <asp:HiddenField ID="hdnMathematics" runat="server" Value="0" />
    <asp:HiddenField ID="hdnChemistry" runat="server" Value="0" />
    <asp:HiddenField ID="hdnBotany" runat="server" Value="0" />
    <asp:HiddenField ID="hdnZoology" runat="server" Value="0" />
    <asp:HiddenField ID="hdnAppliedColleges" runat="server" Value="0" />
    <asp:HiddenField ID="hdnSelectionStatus" runat="server" Value="0" />
    <stuc2:stdntHdr ID="studentHead" runat="server" />
    <div class="main-container ace-save-state" id="main-container">
        <stuc1:leftmenu ID="leftmenu" runat="server" />
        <div class="main-content">
            <div class="main-content-inner">
                <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                    <ul class="breadcrumb">
                        <li><a href="Studentdashboard.aspx"><i class="ace-icon fa fa-home home-icon"></i></a>
                        </li>
                        <li class="active">Dashboard</li>
                    </ul>
                    <!-- /.breadcrumb -->
                </div>
                <div class="page-content">
                    <div class="body-content dashBoard">
                        <div class="row" id="divDateLine" runat="server" visible="false">
                            <div style="color: #ff0000; padding: 150px 400px; font-size: 16px;">
                                <h5>
                                    Dateline for modifying form is completed...</h5>
                            </div>
                        </div>
                        <div class="row" id="divForm" runat="server">
                            <div class="col-sm-12">
                                <!--header-->
                                <div class="formpage">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                            <img src="../images/BiharLogo.png" width="80px" alt="" /></div>
                                        <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
                                            <center class="newheader">
                                                <h2 id="common">
                                                    Common Application Form</h2>
                                                <h3 id="adm">
                                                    For Admission to Degree Colleges session (2018-21)</h3>
                                                <p id="department">
                                                    Bihar School Examination Board, Government of Bihar</p>
                                            </center>
                                        </div>
                                        <div class="col-lg-4 col-md-3 col-sm-4 col-xs-12">
                                            <center>
                                                <h2 id="lblp2" class="intrmdt">
                                                    Degree</h2>
                                                <label id="lblMarkField">
                                                    &#2354;&#2366;&#2354; &#2352;&#2306;&#2327; (*) &#2360;&#2375; &#2354;&#2367;&#2326;&#2375;
                                                    &#2327;&#2351;&#2368; &#2360;&#2349;&#2368; &#2360;&#2370;&#2330;&#2344;&#2366;&#2319;&#2306;
                                                    &#2349;&#2352;&#2344;&#2368; &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351;
                                                    &#2361;&#2376;&#2306;, &#2309;&#2344;&#2381;&#2351;&#2341;&#2366; &#2310;&#2346;&#2325;&#2375;
                                                    &#2347;&#2377;&#2352;&#2381;&#2350; &#2321;&#2344;&#2354;&#2366;&#2311;&#2344; &#2332;&#2350;&#2366;
                                                    &#2344;&#2361;&#2368;&#2306; &#2361;&#2379; &#2346;&#2366;&#2351;&#2375;&#2327;&#2366;
                                                    |
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
                                                <strong>Name of the Board from which you have passed the Intermediate exam ? Please
                                                    fill the Year of Exam and Roll Number as in Admit Card. </strong>
                                            </p>
                                            <p>
                                                <strong>&#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2358;&#2367;&#2325;&#2381;&#2359;&#2366;
                                                    &#2348;&#2379;&#2352;&#2381;&#2337; &#2360;&#2375; &#2311;&#2306;&#2335;&#2352;&#2350;&#2368;&#2337;&#2367;&#2319;&#2335;
                                                    &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                    &#2325;&#2368; &#2361;&#2376; ? &#2319;&#2337;&#2350;&#2367;&#2335; &#2325;&#2366;&#2352;&#2381;&#2337;
                                                    &#2325;&#2375; &#2309;&#2344;&#2369;&#2352;&#2370;&#2346; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;
                                                    &#2357;&#2352;&#2381;&#2359; &#2319;&#2357;&#2306; &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                    &#2349;&#2352;&#2375;&#2306; |</strong>
                                            </p>
                                            <table class="table table-bordered">
                                                <tr>
                                                    <th>
                                                        Name of the Examination Board / &#2357;&#2367;&#2342;&#2381;&#2351;&#2366;&#2354;&#2351;
                                                        &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2348;&#2379;&#2352;&#2381;&#2337;
                                                        &#2325;&#2366; &#2344;&#2366;&#2350;
                                                    </th>
                                                    <th>
                                                        Year of Passing / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354;
                                                        &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366; &#2313;&#2340;&#2381;&#2340;&#2368;&#2352;&#2381;&#2339;
                                                        &#2325;&#2368; &#2361;&#2376;|
                                                    </th>
                                                    <th>
                                                        Exam Type / आपने कोनसी परीक्ष्य उत्तीर्ण की है
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <asp:DropDownList CssClass="form-control" ID="ddlBoard" runat="server" Width="100%">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <asp:TextBox ID="txtBoardName" CssClass="form-control Uppercase" runat="server" autocomplete="off"
                                                            Width="100%" />
                                                        <span class="starmark">*</span>
                                                    </td>
                                                    <td>
                                                        <asp:DropDownList ID="ddlYOP" runat="server" Width="100%" CssClass="form-control"
                                                            onchange="ExamType();">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <span class="starmark">*</span>
                                                    </td>
                                                    <td>
                                                        <asp:RadioButton ID="rbtnAnnual" Text="Annual/&#2357;&#2366;&#2352;&#2381;&#2359;&#2367;&#2325;"
                                                            runat="server" GroupName="Exam" onchange="" />
                                                        <asp:RadioButton ID="rbtnSuppl" Text="Improvemrnt/&#2346;&#2370;&#2352;&#2325; &#2346;&#2352;&#2368;&#2325;&#2381;&#2359;&#2366;"
                                                            runat="server" GroupName="Exam" onchange="" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Date of Birth / &#2332;&#2344;&#2381;&#2350; &#2340;&#2367;&#2341;&#2367;
                                                    </th>
                                                    <th id="tdRollCdH" runat="server">
                                                        Roll Code / &#2352;&#2379;&#2354; &#2325;&#2380;&#2352;&#2381;&#2337;
                                                    </th>
                                                    <th>
                                                        Roll Number / &#2352;&#2379;&#2354; &#2344;&#2306;&#2348;&#2352;
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="input-group">
                                                            <asp:DropDownList CssClass="inputitem" Style="width: 60px;" ID="ddlDay" runat="server"
                                                                AppendDataBoundItems="true">
                                                                <asp:ListItem Value="0">DAY</asp:ListItem>
                                                            </asp:DropDownList>
                                                            &nbsp;
                                                            <asp:DropDownList CssClass="inputitem" Style="width: 200px;" ID="ddlMonth" runat="server"
                                                                AppendDataBoundItems="true">
                                                                <asp:ListItem Value="0">MONTH</asp:ListItem>
                                                            </asp:DropDownList>
                                                            &nbsp;
                                                            <asp:DropDownList CssClass="inputitem" ID="ddlYear" Style="width: 70px;" runat="server"
                                                                AppendDataBoundItems="true">
                                                                <asp:ListItem Value="0">YEAR</asp:ListItem>
                                                            </asp:DropDownList>
                                                            &nbsp;
                                                            <%--<asp:TextBox ID="TextBox2" class="datepicker form-control" runat="server"></asp:TextBox>
                                                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>

                                                        </span>--%>
                                                        </div>
                                                        <span class="starmark">*</span>
                                                    </td>
                                                    <td id="tdRollCdF" runat="server">
                                                        <asp:TextBox ID="txtRollCode" CssClass="form-control" runat="server" onKeyUp="return checkBoardRoll('txtRollCode','Special characters are not allowed');"></asp:TextBox>
                                                        <cc1:FilteredTextBoxExtender ID="fteExtender" runat="server" FilterType="Numbers,Custom,LowercaseLetters,UppercaseLetters"
                                                            FilterMode="InvalidChars" InvalidChars=" " TargetControlID="txtRollCode">
                                                        </cc1:FilteredTextBoxExtender>
                                                        <span class="starmark">*</span>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtBoardRoll" CssClass="form-control" runat="server" onKeyUp="return checkBoardRoll('txtBoardRoll','Special characters are not allowed');"></asp:TextBox>
                                                        <cc1:FilteredTextBoxExtender ID="FilteredTextBoxExtender1" runat="server" FilterType="Numbers,Custom,LowercaseLetters,UppercaseLetters"
                                                            FilterMode="InvalidChars" InvalidChars=" " TargetControlID="txtBoardRoll">
                                                        </cc1:FilteredTextBoxExtender>
                                                        <span class="starmark">*</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-10 col-md-9">
                                            <br />
                                            <br />
                                            <div class="row form-group">
                                                <div class="col-lg-4">
                                                    <label id="lblApplicantName">
                                                        Applicant's Name / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                    </label>
                                                </div>
                                                <div class="col-lg-8">
                                                    <span class="colonns">:</span>
                                                    <asp:TextBox ID="txtApplName" runat="server" Width="100%" CssClass="form-control Uppercase"
                                                        AutoCompleteType="disabled" MaxLength="100" onKeyUp="return CheckSpeCharacter('txtApplName','Special characters are not allowed');"
                                                        onkeydown="return checkNumber('txtApplName');" />
                                                    <span class="starmark">*</span>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-lg-4">
                                                    <label id="lblFname">
                                                        Father's Name / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2375; &#2346;&#2367;&#2340;&#2366;
                                                        &#2325;&#2366; &#2344;&#2366;&#2350;
                                                    </label>
                                                </div>
                                                <div class="col-lg-8">
                                                    <span class="colonns">:</span>
                                                    <asp:TextBox ID="txtFatherName" runat="server" Width="100%" CssClass="form-control Uppercase"
                                                        AutoCompleteType="disabled" MaxLength="100" onkeyup="return CheckSpeCharacter('txtFatherName','Special characters are not allowed');"
                                                        onkeydown="return checkNumber('txtFatherName');" />
                                                    <span class="starmark">*</span>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-lg-4">
                                                    <label id="lblMname">
                                                        Mother's Name / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2350;&#2366;&#2340;&#2366;
                                                        &#2325;&#2366; &#2344;&#2366;&#2350;</label>
                                                </div>
                                                <div class="col-lg-8">
                                                    <span class="colonns">:</span>
                                                    <asp:TextBox ID="txtMotherName" runat="server" Width="100%" CssClass="form-control Uppercase"
                                                        AutoCompleteType="disabled" MaxLength="100" onkeyup="return CheckSpeCharacter('txtMotherName','Special characters are not allowed');"
                                                        onkeydown="return checkNumber('txtMotherName');" />
                                                    <span class="starmark">*</span>
                                                </div>
                                            </div>
                                            <div class="row form-group" id="trCouncilMark" runat="server" style="display: none;">
                                                <span style="color: #FF0000" id="lblBExam"><strong>Mark secured in Intermediate (<asp:Label
                                                    ID="lblCHSEStream" runat="server" Font-Bold="true" ForeColor="Blue"></asp:Label>)
                                                    Examination </strong></span>
                                                <table class="table table-bordered" id="tblArtsCpy">
                                                    <tr>
                                                        <th>
                                                            <strong>Maximum Mark
                                                                <br />
                                                                &#2309;&#2343;&#2367;&#2325;&#2340;&#2350; &#2309;&#2306;&#2325;</strong>
                                                        </th>
                                                        <th>
                                                            <strong>Total Mark Secured
                                                                <br />
                                                                &#2325;&#2369;&#2354; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325;</strong>
                                                        </th>
                                                        <th width="">
                                                            <strong>English
                                                                <br />
                                                                &#2309;&#2306;&#2327;&#2381;&#2352;&#2375;&#2332;&#2368;</strong>
                                                        </th>
                                                        <th>
                                                            <strong>MIL<br />
                                                                &#2352;&#2360;&#2366;&#2351;&#2344; &#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                        </th>
                                                        <th>
                                                            <strong>Chemistry<br />
                                                                &#2352;&#2360;&#2366;&#2351;&#2344; &#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                        </th>
                                                        <th>
                                                            <strong>Mathematics<br />
                                                                &#2327;&#2339;&#2367;&#2340;</strong>
                                                        </th>
                                                        <th>
                                                            <strong>Biology<br />
                                                                &#2332;&#2368;&#2357;&#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="lblMaxMarkCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                Font-Size="Medium" ForeColor="Red" />
                                                        </td>
                                                        <td>
                                                            <asp:Label ID="lblTotMarkCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                Font-Size="Medium" ForeColor="Red" />
                                                        </td>
                                                        <td>
                                                            <asp:Label ID="lblEnglishCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                Font-Size="Medium" ForeColor="Red" />
                                                        </td>
                                                        <td>
                                                            <asp:Label ID="lblMILCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                Font-Size="Medium" ForeColor="Red" />
                                                        </td>
                                                        <td>
                                                            <asp:Label ID="lblCheCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                Font-Size="Medium" ForeColor="Red" />
                                                        </td>
                                                        <td>
                                                            <asp:Label ID="lblMathCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                Font-Size="Medium" ForeColor="Red" />
                                                        </td>
                                                        <td>
                                                            <asp:Label ID="lblBioCpy" runat="server" Width="70" MaxLength="3" Font-Bold="true"
                                                                Font-Size="Medium" ForeColor="Red" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div class="row form-group" id="trMarkVerify" runat="server" style="display: none;">
                                                <span class="MarkVerify" id="note1">Note : If the above mark showing in the computer
                                                    screen is matching with your actual mark secured, then please click on <span class="BlueFont">
                                                        &#8220;Yes&#8221; </span>button. If not, click on <span class="RedFont">&#8220;No&#8221;
                                                        </span>button to enter your actual mark at <span class="BlackFont">9(a) </span>
                                                    of this online form. </span>
                                                <asp:RadioButton ID="rbtMarkVerifiedYCpy" runat="server" Checked="true" GroupName="rbtMarkVerificationCpy"
                                                    onclick="CheckMarkVerificationCpy();" />
                                                <span id="Span3">Yes</span>
                                                <asp:RadioButton ID="rbtMarkVerifiedNCpy" runat="server" GroupName="rbtMarkVerificationCpy"
                                                    onclick="CheckMarkVerificationCpy();" />
                                                <span id="Span4">No</span>
                                                <asp:HiddenField ID="hdnMarkVerification" runat="server" />
                                            </div>
                                        </div>
                                        <!-- -----Image Section----- -->
                                        <div class="col-lg-2 col-md-3" class="" onclick="return OpenUpload();">
                                            <div id='imgSpan' class="text-spn">
                                                <label id="lblphototext">
                                                    Upload your photo <font color="#8B0000" size="3">*</font>
                                                </label>
                                            </div>
                                            <asp:Image ID="ImgAppl" CssClass="imgbdr" runat="server" Height="130" Width="130" />
                                        </div>
                                        <!-- -----Image Section----- -->
                                    </div>
                                    <div class="alert alert-success">
                                        <label id="lbl9">
                                            <strong>Details of Mark Secured in Intermediate Examination<span class="starmark-nopose">
                                                *</span> /इंटरमीडिएट में प्राप्त प्राप्तांक विषयवार लिखे </strong><span class="starmark-nopose">
                                                    *</span></label>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <table class="table table-bordered">
                                                <tr>
                                                    <td width="100%" colspan="2">
                                                        <asp:RadioButton ID="rbtArts" Text="Arts" runat="server" GroupName="PrevStrem" onclick="showHideChemistry();" />
                                                        <asp:RadioButton ID="rbtScience" Text="Science" runat="server" GroupName="PrevStrem"
                                                            onclick="showHideChemistry();" />
                                                        <asp:RadioButton ID="rbtCommerce" Text="Commerce" runat="server" GroupName="PrevStrem"
                                                            onclick="showHideChemistry();" />
                                                        <asp:RadioButton ID="rbtVocational" Text="Vocational" runat="server" GroupName="PrevStrem"
                                                            onclick="showHideChemistry();" />
                                                        <asp:RadioButton ID="rbtDiploma" Text="Diploma" runat="server" GroupName="PrevStrem"
                                                            onclick="showHideChemistry();" />
                                                        <asp:RadioButton ID="rbtUpashastri" Text="Upashastri" runat="server" GroupName="PrevStrem"
                                                            onclick="showHideChemistry();" />
                                                        <asp:RadioButton ID="rbtnMaulvi" Text="Maulvi" runat="server" GroupName="PrevStrem"
                                                            onclick="showHideChemistry();" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="100%" valign="top" colspan="2">
                                                        <table width="100%" class="table table-bordered">
                                                            <tr>
                                                                <th>
                                                                    <strong>Maximum Mark
                                                                        <br />
                                                                        &#2309;&#2343;&#2367;&#2325;&#2340;&#2350; &#2309;&#2306;&#2325;</strong>
                                                                </th>
                                                                <th>
                                                                    <strong>Total Mark Secured
                                                                        <br />
                                                                        &#2325;&#2369;&#2354; &#2346;&#2381;&#2352;&#2366;&#2346;&#2381;&#2340;&#2366;&#2306;&#2325;</strong>
                                                                </th>
                                                                <th id="thEnglishH">
                                                                    <%-- <strong>Comp 3</strong>--%>
                                                                    <strong>
                                                                        <asp:Label ID="lblEnglish" runat="server"></asp:Label></strong>
                                                                </th>
                                                                <th id="thMILH">
                                                                    <%--<strong>Comp (1+2) --%>
                                                                    <strong>
                                                                        <asp:Label ID="lblMIL" runat="server"></asp:Label></strong>
                                                                </th>
                                                                <th id="tdChemistryH">
                                                                    <strong>Chemistry<br />
                                                                        &#2352;&#2360;&#2366;&#2351;&#2344; &#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;
                                                                    </strong>
                                                                </th>
                                                                <th id="tdMathH">
                                                                    <strong>Mathematics<br />
                                                                        &#2327;&#2339;&#2367;&#2340;</strong>
                                                                </th>
                                                                <th id="tdBiologyH">
                                                                    <strong>Biology<br />
                                                                        &#2332;&#2368;&#2357;&#2357;&#2367;&#2332;&#2381;&#2334;&#2366;&#2344;</strong>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:TextBox CssClass="inputitem" ID="txtMaxMark" runat="server" Width="97%" MaxLength="4"
                                                                        autocomplete="off" onblur="return BoardMarkCheck();" onKeyUp="return NumericValidation('txtMaxMark','Please write only numeric values for MARKS',4);" />
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox CssClass="inputitem" ID="txtTotMark" runat="server" Width="97%" MaxLength="4"
                                                                        autocomplete="off" onKeyUp="return NumericValidation('txtTotMark','Please write only numeric values for MARKS',4);" />
                                                                </td>
                                                                <td id="tdEnglishB" runat="server">
                                                                    <asp:TextBox CssClass="inputitem" ID="txtEnglish" runat="server" Width="97%" MaxLength="3"
                                                                        autocomplete="off" onKeyUp="return NumericValidation('txtEnglish','Please write only numeric values for MARKS',4);" />
                                                                </td>
                                                                <td runat="server" id="tdMIL">
                                                                    <asp:TextBox CssClass="inputitem" ID="txtMath" runat="server" Width="97%" MaxLength="3"
                                                                        autocomplete="off" onKeyUp="return NumericValidation('txtMath','Please write only numeric values for MARKS',4);" />
                                                                </td>
                                                                <td id="tdChemistryB" runat="server">
                                                                    <asp:TextBox CssClass="inputitem" ID="txtScience" runat="server" Width="97%" MaxLength="3"
                                                                        autocomplete="off" onKeyUp="return NumericValidation('txtScience','Please write only numeric values for MARKS',4);" />
                                                                </td>
                                                                <td id="tdMathB" runat="server">
                                                                    <asp:TextBox CssClass="inputitem" ID="txtMathematics" runat="server" Width="97%"
                                                                        MaxLength="3" autocomplete="off" onKeyUp="return NumericValidation('txtMathematics','Please write only numeric values for MARKS',4);" />
                                                                </td>
                                                                <td id="tdBiologyB" runat="server">
                                                                    <asp:TextBox CssClass="inputitem" ID="txtBiology" runat="server" Width="97%" MaxLength="3"
                                                                        autocomplete="off" onKeyUp="return NumericValidation('txtBiology','Please write only numeric values for MARKS',4);" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label id="lbl9b">
                                                            Have you passed Intermediate Exam Compartmentally ?
                                                            <br />
                                                            क्या अपने इंटरमीडिएट की परीक्षा समुन्नत परीक्षा में उतीर्ण की हैं?
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
                                                            <table width="100%" class="table table-bordered">
                                                                <tr>
                                                                    <th>
                                                                        Name of the Subject&nbsp;<font color="#FF3333" size="3">*</font>
                                                                    </th>
                                                                    <th>
                                                                        Fail &nbsp;Mark in Previous Exam&nbsp;<font color="#FF3333" size="3">*</font>
                                                                    </th>
                                                                    <th>
                                                                        Pass Mark in Compartmental Exam&nbsp;<font color="#FF3333" size="3">*</font>
                                                                    </th>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:TextBox CssClass="inputitem" ID="txtCompSubject1" runat="server" AutoCompleteType="disabled"
                                                                            MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject1','Special characters are not allowed');" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox CssClass="inputitem" ID="txtCompFMark1" runat="server" MaxLength="3"
                                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark1','Please write only numeric values for MARKS',3);" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox CssClass="inputitem" ID="txtCompPMark1" runat="server" MaxLength="3"
                                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark1','Please write only numeric values for MARKS',3);" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:TextBox CssClass="inputitem" ID="txtCompSubject2" runat="server" AutoCompleteType="disabled"
                                                                            MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject2','Special characters are not allowed');" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox CssClass="inputitem" ID="txtCompFMark2" runat="server" MaxLength="3"
                                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark2','Please write only numeric values for MARKS',3);" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox CssClass="inputitem" ID="txtCompPMark2" runat="server" MaxLength="3"
                                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark2','Please write only numeric values for MARKS',3);" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:TextBox CssClass="inputitem" ID="txtCompSubject3" runat="server" AutoCompleteType="disabled"
                                                                            MaxLength="50" onKeyUp="return CheckSpeCharacter('txtCompSubject3','Special characters are not allowed');" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox CssClass="inputitem" ID="txtCompFMark3" runat="server" MaxLength="3"
                                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompFMark3','Please write only numeric values for MARKS',3);" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox CssClass="inputitem" ID="txtCompPMark3" runat="server" MaxLength="3"
                                                                            AutoCompleteType="disabled" onKeyUp="return NumericValidation('txtCompPMark3','Please write only numeric values for MARKS',3);" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="alert alert-success">
                                        <label id="lbleduinst">
                                            <strong>Record of educational institution last attended from which you have passed Intermediate
                                                Examination / आपने जिस स्कूल से इंटरमीडिएट की परीक्षा उत्तीर्ण की है उसकी विवरणी
                                                नीचे भरे</strong>
                                        </label>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-lg-3 col-md-3 col-xs-12">
                                            <label id="lblschname">
                                                Name of the College / &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2344;&#2366;&#2350;&nbsp;
                                            </label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-xs-12">
                                            <span class="colonns">:</span>
                                            <asp:TextBox ID="txtschname" CssClass="form-control Uppercase" runat="server" onkeydown="return checkNumber('txtschname');"
                                                MaxLength="300" autocomplete="off" />
                                            <span class="starmark">*</span>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-xs-12">
                                            <label id="lblschloc">
                                                Location of the College / &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2346;&#2340;&#2366;
                                                &nbsp;
                                            </label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-xs-12">
                                            <span class="colonns">:</span>
                                            <asp:TextBox ID="txtschloc" CssClass="form-control Uppercase" runat="server" onkeydown="return checkNumber('txtschloc');"
                                                MaxLength="300" autocomplete="off" />
                                            <span class="starmark">*</span>
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-lg-3 col-md-3 col-xs-12">
                                            <label id="lblinsDist">
                                                District / &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375; &#2350;&#2375;&#2306;
                                                &#2310;&#2346;&#2325;&#2366; &#2325;&#2377;&#2354;&#2375;&#2332; &#2361;&#2376;
                                            </label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-xs-12">
                                            <span class="colonns">:</span>
                                            <asp:DropDownList CssClass="form-control" ID="ddlinstDistrict" runat="server" EnableViewState="true"
                                                AppendDataBoundItems="true">
                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                            </asp:DropDownList>
                                            <asp:TextBox ID="txtdist" CssClass="inputitem Uppercase" runat="server" Width="200"
                                                MaxLength="250" autocomplete="off" Style="display: none" onkeydown="return checkNumber('txtdist');" />
                                            <span class="starmark">*</span>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-xs-12">
                                            <label id="lblinsYOJ">
                                                Year of Joining / &#2310;&#2346;&#2344;&#2375; &#2325;&#2367;&#2360; &#2360;&#2366;&#2354;
                                                &#2313;&#2360; &#2325;&#2377;&#2354;&#2375;&#2332; &#2350;&#2375;&#2306; &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344;
                                                &#2354;&#2367;&#2351;&#2366; &#2341;&#2366; |
                                            </label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-xs-12">
                                            <span class="colonns">:</span>
                                            <asp:DropDownList CssClass="form-control" Width="100%" ID="ddlYOJ" runat="server"
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
                                            <span class="starmark">*</span>
                                        </div>
                                    </div>
                                    <div class="row form-group mrgn-top-20">
                                        <div class="col-lg-3 col-md-6 col-xs-12">
                                            <label id="lblYOL">
                                                Year of Leaving / आपने किस साल उस कॉलेज छोडाथा |
                                            </label>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-xs-12">
                                            <span class="colonns">:</span>
                                            <td colspan="3">
                                                <asp:DropDownList CssClass="form-control" ID="ddlYOL" runat="server" AppendDataBoundItems="true"
                                                    onchange="validYOJ();">
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
                                            <span class="starmark">*</span>
                                        </div>
                                    </div>
                                    <div class="alert alert-success">
                                        <label id="Label2">
                                            <strong>Personal Details / &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                            </strong>
                                        </label>
                                    </div>
                                    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                        <ContentTemplate>
                                            <table class="table table-bordered">
                                                <tr>
                                                    <th>
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
                                                            Religion / &#2343;&#2352;&#2381;&#2350;(&#2349;&#2352;&#2344;&#2366; &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351;
                                                            &#2344;&#2361;&#2368;&#2306; &#2361;&#2376; |)</label>
                                                    </th>
                                                    <th>
                                                        <label id="lblBloodGroup">
                                                            Blood Group / &#2352;&#2325;&#2381;&#2340;&#2381;&#2340; &#2360;&#2350;&#2370;&#2361;(&#2349;&#2352;&#2344;&#2366;
                                                            &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351; &#2344;&#2361;&#2368;&#2306;
                                                            &#2361;&#2376; |)
                                                        </label>
                                                        &nbsp;
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <asp:DropDownList CssClass="form-control" ID="ddlGender" runat="server" onchange="DisableWBC();"
                                                            AutoPostBack="true" OnSelectedIndexChanged="ddlGender_SelectedIndexChanged">
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
                                            <div class="alert alert-success">
                                                <label id="lbladdress">
                                                    Address for Correspondence / &#2346;&#2340;&#2381;&#2352;&#2366;&#2330;&#2366;&#2352;
                                                    &#2325;&#2366; &#2346;&#2340;&#2366;</label>
                                            </div>
                                            <table class="table table-bordered">
                                                <tr>
                                                    <td width="12%">
                                                        <label id="lblState">
                                                            State / &#2352;&#2366;&#2332;&#2381;&#2351;
                                                        </label>
                                                        &nbsp;
                                                    </td>
                                                    <td>
                                                        <asp:DropDownList CssClass="form-control" ID="ddlCState" runat="server" AutoPostBack="true"
                                                            OnSelectedIndexChanged="ddlCState_SelectedIndexChanged" AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <span class="starmark">*</span>
                                                    </td>
                                                    <td width="12%">
                                                        <label id="lblDistrict">
                                                            District / &#2332;&#2367;&#2354;&#2366;
                                                        </label>
                                                        &nbsp;
                                                    </td>
                                                    <td width="15%">
                                                        <asp:DropDownList CssClass="form-control" ID="ddlCDist" runat="server" AutoPostBack="true"
                                                            OnSelectedIndexChanged="ddlCDist_SelectedIndexChanged" AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <span class="starmark">*</span>
                                                    </td>
                                                    <td width="17%">
                                                        <label id="lblBlock">
                                                            Block / ULB / &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; / &#2344;&#2327;&#2352;
                                                            &#2346;&#2352;&#2367;&#2359;&#2342;&#2381; &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;
                                                        </label>
                                                        &nbsp;
                                                    </td>
                                                    <td colspan="2">
                                                        <asp:DropDownList CssClass="form-control" ID="ddlCBlock" runat="server" AppendDataBoundItems="true">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <span class="starmark">*</span>
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
                                                            &#2309;&#2357;&#2358;&#2381;&#2351; &#2354;&#2367;&#2326;&#2375;|</label>&nbsp;
                                                    </td>
                                                    <td colspan="2">
                                                        <asp:TextBox ID="txtCPS" CssClass="form-control Uppercase" runat="server" Height="40px"
                                                            MaxLength="350" AutoCompleteType="disabled" TextMode="MultiLine" onkeyup="return CheckAddress('txtCPS');"
                                                            onchange="return addLength('txtCPS');" />
                                                        <span class="starmark">*</span>
                                                    </td>
                                                    <td>
                                                        <label id="lblpin">
                                                            PIN Code / &#2331;&#2361; &#2309;&#2306;&#2325;&#2379; &#2325;&#2366; &#2346;&#2367;&#2344;
                                                            &#2325;&#2379;&#2337; &#2351;&#2361;&#2366;&#2305; &#2354;&#2367;&#2326;&#2375;&#2306;
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
                                                            Mobile No. / &#2350;&#2379;&#2348;&#2366;&#2311;&#2354; &#2344;&#2306;&#2348;&#2352;</label>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox ID="txtCMobNo" CssClass="form-control" runat="server" MaxLength="10"
                                                            AutoCompleteType="disabled" onkeyup="return NumericValidation('txtCMobNo','Please write only numeric values for Mobile No.',12);" />
                                                        <span class="starmark">*</span>
                                                    </td>
                                                    <td>
                                                        <label id="lblEmail">
                                                            e-Mail / &#2312;-&#2350;&#2375;&#2354;</label>
                                                    </td>
                                                    <td>
                                                        <asp:TextBox CssClass="form-control" ID="txtCEmail" runat="server" MaxLength="100"
                                                            AutoCompleteType="disabled" AutoPostBack="True" OnTextChanged="txtCEmail_TextChanged" />
                                                        <span class="starmark">*</span>
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
                                            </table>
                                        </ContentTemplate>
                                    </asp:UpdatePanel>
                                    <div class="alert alert-success">
                                        <label id="lblReservation">
                                            <strong>Reservation Details / &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2325;&#2368;
                                                &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; </strong>
                                        </label>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <ul class="list-item">
                                                <li>&#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2360;&#2375; &#2360;&#2350;&#2381;&#2348;&#2306;&#2343;&#2367;&#2340;
                                                    &#2357;&#2367;&#2357;&#2352;&#2339; &#2342;&#2375;&#2344;&#2375; &#2360;&#2375;
                                                    &#2346;&#2361;&#2354;&#2375; &#2351;&#2361; &#2332;&#2366;&#2305;&#2330; &#2325;&#2352;
                                                    &#2354;&#2375; &#2325;&#2367; &#2342;&#2368; &#2327;&#2351;&#2368; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368;
                                                    &#2360;&#2361;&#2368; &#2361;&#2376; , &#2309;&#2344;&#2381;&#2351;&#2341;&#2366;
                                                    &#2327;&#2354;&#2340; &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; &#2342;&#2375;&#2344;&#2375;
                                                    &#2325;&#2375; &#2348;&#2366;&#2342; &#2310;&#2346;&#2325;&#2366; &#2310;&#2357;&#2375;&#2342;&#2344;
                                                    &#2352;&#2342;&#2381;&#2342; &#2325;&#2367;&#2351;&#2366; &#2332;&#2366; &#2360;&#2325;&#2340;&#2366;
                                                    &#2361;&#2376; &#2360;&#2366;&#2341; &#2361;&#2368; &#2310;&#2346;&#2325;&#2375;
                                                    &#2313;&#2346;&#2352; &#2325;&#2366;&#2344;&#2370;&#2344;&#2368; &#2325;&#2366;&#2352;&#2357;&#2366;&#2312;
                                                    &#2349;&#2368; &#2325;&#2368; &#2332;&#2366; &#2360;&#2325;&#2340;&#2368; &#2361;&#2376;
                                                    |</li>
                                                <li>&#2310;&#2352;&#2325;&#2381;&#2359;&#2367;&#2340; &#2325;&#2379;&#2335;&#2367; &#2325;&#2375;
                                                    &#2309;&#2344;&#2381;&#2340;&#2352;&#2381;&#2327;&#2340; &#2346;&#2381;&#2352;&#2357;&#2375;&#2358;
                                                    &#2354;&#2375;&#2344;&#2375; &#2357;&#2366;&#2354;&#2375; &#2310;&#2357;&#2375;&#2342;&#2325;
                                                    &#2325;&#2379; &#2346;&#2381;&#2352;&#2326;&#2306;&#2337; &#2357;&#2367;&#2325;&#2366;&#2360;
                                                    &#2346;&#2342;&#2366;&#2343;&#2367;&#2325;&#2366;&#2352;&#2368;/ &#2309;&#2344;&#2369;&#2350;&#2306;&#2337;&#2354;&#2366;&#2343;&#2367;&#2325;&#2366;&#2352;&#2368;/&#2332;&#2367;&#2354;&#2366;
                                                    &#2346;&#2342;&#2366;&#2343;&#2367;&#2325;&#2366;&#2352;&#2368; &#2342;&#2381;&#2357;&#2366;&#2352;&#2366;
                                                    &#2344;&#2367;&#2352;&#2381;&#2327;&#2340; &#2332;&#2366;&#2340;&#2367; &#2346;&#2381;&#2352;&#2350;&#2366;&#2339;-&#2346;&#2340;&#2381;&#2352;
                                                    &#2361;&#2368; &#2332;&#2350;&#2366; &#2325;&#2352;&#2344;&#2366; &#2361;&#2376;
                                                    &#2324;&#2352; &#2351;&#2361;&#2368; &#2346;&#2381;&#2352;&#2350;&#2366;&#2339;-&#2346;&#2340;&#2381;&#2352;
                                                    &#2350;&#2366;&#2344;&#2381;&#2351; &#2361;&#2379;&#2327;&#2366;&#2404;</li>
                                                <li>&#2342;&#2367;&#2357;&#2381;&#2351;&#2366;&#2306;&#2327; &#2325;&#2379;&#2335;&#2366;
                                                    &#2325;&#2375; &#2310;&#2343;&#2366;&#2352; &#2346;&#2352; &#2344;&#2366;&#2350;&#2366;&#2306;&#2325;&#2344;
                                                    &#2325;&#2366; &#2342;&#2366;&#2357;&#2366; &#2325;&#2352;&#2344;&#2375; &#2357;&#2366;&#2354;&#2375;
                                                    &#2310;&#2357;&#2375;&#2342;&#2325; &#2325;&#2379; &#2309;&#2346;&#2344;&#2375;
                                                    &#2332;&#2367;&#2354;&#2375; &#2325;&#2375; &#2360;&#2367;&#2357;&#2367;&#2354;
                                                    &#2360;&#2352;&#2381;&#2332;&#2344;/&#2350;&#2375;&#2337;&#2367;&#2325;&#2354; &#2348;&#2379;&#2352;&#2381;&#2337;
                                                    &#2342;&#2381;&#2357;&#2366;&#2352;&#2366; &#2344;&#2367;&#2352;&#2381;&#2327;&#2340;
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
                                                    &#2344; &#2325;&#2352;&#2375;&#2306;&#2404</li>
                                                <li>&#2325;&#2379;&#2335;&#2366; &#2325;&#2375; &#2309;&#2344;&#2381;&#2340;&#2352;&#2381;&#2327;&#2340;
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
                                    <table class="table table-bordered">
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
                                            <td>
                                                <asp:RadioButton ID="rbtOther" runat="server" GroupName="ResCategory1" onclick="highlightCat1();" />
                                                <span id="OTHER">Extremly Backward Class (EBC) / &#2309;&#2340;&#2381;&#2351;&#2306;&#2340;
                                                    &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327; </span>
                                            </td>
                                            <td width="15%">
                                                <asp:RadioButton ID="rbtBCW" runat="server" GroupName="ResCategory1" onclick="highlightCat1();" />
                                                <span id="WBC">Women Backward Class (WBC) / &#2346;&#2367;&#2331;&#2396;&#2375; &#2357;&#2352;&#2381;&#2327;
                                                    &#2325;&#2368; &#2350;&#2361;&#2367;&#2354;&#2366;&#2351;&#2375; </span>
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
                                                <%--  <asp:CheckBox ID="chkPHOH" runat="server" onclick="highLight('chkPHOH','PHOH','Physically/Orthopadically Handicapped (PH/OH) <br />&#2344;&#2367;: &#2358;&#2325;&#2381;&#2340;&#2340;&#2366; &#2325;&#2375; &#2310;&#2343;&#2366;&#2352; &#2346;&#2352;' );" />
                                                <span id="PHOH">Physically/Orthopedically Handicapped (PH/OH) / &#2344;&#2367;: &#2358;&#2325;&#2381;&#2340;&#2340;&#2366;
                                                    &#2325;&#2375; &#2310;&#2343;&#2366;&#2352; &#2346;&#2352;</span>--%>
                                            </td>
                                        </tr>
                                        <tr>
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
                                    <div class="alert alert-success">
                                        <label id='lblWeightage'>
                                            <strong>Weightage Details / &#2350;&#2361;&#2340;&#2381;&#2357; &#2357;&#2367;&#2357;&#2352;&#2339;
                                                &nbsp;(&#2351;&#2342;&#2367; &#2354;&#2366;&#2327;&#2370; &#2361;&#2379; &#2340;&#2379;
                                                &#2360;&#2350;&#2381;&#2348;&#2306;&#2343;&#2367;&#2340; &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;
                                                &#2325;&#2379; &#2330;&#2369;&#2344;&#2375; / Select the appropriate option if Applicable
                                                )</strong>
                                        </label>
                                    </div>
                                    <table class="table table-bordered">
                                        <tr>
                                            <td>
                                                <table class="table table-bordered">
                                                    <tr>
                                                        <th colspan="2">
                                                            NCC
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#FFFFFF">
                                                            <asp:CheckBox ID="chkNCCA" runat="server" onclick="highLight('chkNCCA','NCCA','NCC' );" />
                                                            <span id="NCCA">NCC</span>
                                                        </td>
                                                        <td bgcolor="#FFFFFF" style="display: none">
                                                            <asp:CheckBox ID="chkNCCC" runat="server" onclick="highLight('chkNCCC','NCCC','NCC (CAMP/COURSE)' );" />
                                                            <span id="NCCC">NCC (CAMP/COURSE)</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td>
                                                <table class="table table-bordered" style="display: none">
                                                    <tr>
                                                        <th colspan="4">
                                                            NSS Camp
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#FFFFFF">
                                                            <asp:CheckBox ID="chkNssU" runat="server" onclick="highLight('chkNssU','NssU','University Level' );" />
                                                            <span id="NssU">University Level</span>
                                                        </td>
                                                        <td bgcolor="#FFFFFF">
                                                            <asp:CheckBox ID="chkNssS" runat="server" onclick="highLight('chkNssS','NssS','State Level' );" />
                                                            <span id="NssS">State Level</span>
                                                        </td>
                                                        <td bgcolor="#FFFFFF">
                                                            <asp:CheckBox ID="chkNssN" runat="server" onclick="highLight('chkNssN','NssN','National Level' );" />
                                                            <span id="NssN">National Level</span><strong></strong>
                                                        </td>
                                                        <td bgcolor="#FFFFFF">
                                                            <asp:CheckBox ID="chkNssIN" runat="server" onclick="highLight('chkNssIN','NssIN','International Level' );" />
                                                            <span id="NssIN">International Level</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr style="display: none">
                                            <td colspan="2">
                                                <table class="table table-bordered">
                                                    <tr>
                                                        <th colspan="3">
                                                            Sports and Games
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td bgcolor="#FFFFFF">
                                                            <asp:CheckBox ID="chkSportsS" runat="server" onclick="highLight('chkSportsS','SportS','State' );" />
                                                            <span id="SportS">Sports </span>
                                                        </td>
                                                        <td bgcolor="#FFFFFF" style="display: none">
                                                            <asp:CheckBox ID="chkSportsN" runat="server" onclick="highLight('chkSportsN','SportN','National' );" />
                                                            <span id="SportN">National </span>
                                                        </td>
                                                        <td bgcolor="#FFFFFF" style="display: none">
                                                            <asp:CheckBox ID="chkSportsIN" runat="server" onclick="highLight('chkSportsIN','SportIN','International' );" />
                                                            <span id="SportIN">International</span><strong></strong>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <center>
                                        <asp:Button CssClass="btn btn-success" ID="btnSave" runat="server" Text="Update"
                                            OnClientClick="return ValidateDegForm();" OnClick="btnSave_Click" /></center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <script type="text/javascript" language="javascript">

        function ValidateDegForm() {
            debugger;
            if (!DropDownValidation('ddlBoard', 'the name of your Examination Board')) {
                return false;
            }
            if (!DropDownValidation('ddlYOP', 'Year of passing')) {
                return false;
            }
            if ((document.getElementById('rbtnAnnual').checked == false) & (document.getElementById('rbtnSuppl').checked == false)) {
                alert('Please Choose Exam Type');
                return false;
            }

            if (!checkPassingYear())
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
            var selDate = $("#ddlDay").val();
            var selMonth = $("#ddlMonth").val();
            var selYear = $("#ddlYear").val();
            if ((selDate > 0) && (selMonth > 0) && (selYear > 0)) {
                if (!(isValidDate(selYear, selMonth, selDate))) {
                    alert('Please enter valid date of birth !');
                    $("#ddlDay").focus();
                    return false;
                }
            }
            //==================checking diff. between DOB & YOP==============
            var year = $("#ddlYear").val();
            var yop = $("#ddlYOP").val();
            var gap = yop - year;
            if (gap <= 15) {
                alert('The difference of age between the birth year and +2 passing year should be greater than 15');
                $("#ddlYear").focus();
                return false;
            }


            if (parseInt(document.getElementById('ddlBoard').value) == 35) {
                if (!blankFieldValidation('txtRollCode', 'Roll Code.')) {
                    return false;
                }
                if (!chkSingleQuote('txtRollCode'))
                    return false;
                if (!WhiteSpaceValidation1st('txtRollCode'))
                    return false;
            }


            if (!blankFieldValidation('txtBoardRoll', 'Roll No.')) {
                return false;
            }
            if (!chkSingleQuote('txtBoardRoll')) {
                return false;
            }
            if (!WhiteSpaceValidation1st('txtBoardRoll')) {
                return false;
            }
            if ((document.getElementById('txtBoardRoll').value == '0') || (document.getElementById('txtBoardRoll').value == '00') || (document.getElementById('txtBoardRoll').value == '000') || (document.getElementById('txtBoardRoll').value == '0000') || (document.getElementById('txtBoardRoll').value == '00000') || (document.getElementById('txtBoardRoll').value == '000000') || (document.getElementById('txtBoardRoll').value == '0000000') || (document.getElementById('txtBoardRoll').value == '00000000') || (document.getElementById('txtBoardRoll').value == '000000000') || (document.getElementById('txtBoardRoll').value == '0000000000') || (document.getElementById('txtBoardRoll').value == '00000000000') || (document.getElementById('txtBoardRoll').value == '000000000000')) {
                alert('Roll No. can not be 0');
                return false;
            }
            if (!blankFieldValidation('txtApplName', 'Applicant Name')) {
                return false;
            }

            if (!chkSingleQuote('txtApplName')) {
                return false;
            }
            if (!WhiteSpaceValidation1st('txtApplName')) {
                return false;
            }
            if ($("#txtApplName").val().length == 1) {
                alert("Applicant's Name is too short");
                $('#txtApplName').focus();
                return false;
            }
            //            if (!isAlphabet('txtApplName')) {
            //                alert('Please enter only Alphabets');
            //                $("#txtApplName").val("");
            //                $("#txtApplName").focus();
            //                return false;
            //            }

            if (!blankFieldValidation('txtFatherName', "Father's Name")) {
                return false;
            }
            if ($("#txtFatherName").val().length == 1) {
                alert("Father's Name is too short");
                $('#txtFatherName').focus();
                return false;
            }

            if (!chkSingleQuote('txtFatherName')) {
                return false;
            }
            if (!WhiteSpaceValidation1st('txtFatherName')) {
                return false;
            }
            //            if (!isAlphabet('txtFatherName')) {
            //                alert('Please enter only Alphabets');
            //                $("#txtFatherName").val("");
            //                $("#txtFatherName").focus();
            //                return false;
            //            }
            if (!blankFieldValidation('txtMotherName', "Mother's Name")) {
                return false;
            }
            if ($("#txtMotherName").val().length == 1) {
                alert("Mother's Name is too short");
                $('#txtMotherName').focus();
                return false;
            }

            if (!chkSingleQuote('txtMotherName'))
                return false;
            if (!WhiteSpaceValidation1st('txtMotherName'))
                return false;
            //            if (!isAlphabet('txtMotherName')) {
            //                alert('Please enter only Alphabets');
            //                $("#txtMotherName").val("");
            //                $("#txtMotherName").focus();
            //                return false;
            //            }

            if (document.getElementById('hdnImgAppl').value == "") {
                alert("Please Upload your photo !");
                return false;
            }

            //========================Sream Validation==================
            if ((document.getElementById('rbtArts').checked == false) && (document.getElementById('rbtScience').checked == false) && (document.getElementById('rbtCommerce').checked == false) && (document.getElementById('rbtVocational').checked == false) && (document.getElementById('rbtDiploma').checked == false)) {
                alert('Please check stream in Intermediate Board Exam');
                return false;
            }


            //=========================Mark Validation==================   

            //            if (!blankFieldValidation('txtEnglish', 'Comp 3 Mark')) {
            //                return false;
            //            }
            if ($('#txtEnglish').val() != '') {
                if (!NumericValidation('txtEnglish', 'Please write only numeric values for MARKS', '3'))
                    return false;
            }
            //            if (!blankFieldValidation('txtMath', 'Comp (1+2) Mark')) {
            //                return false;
            //            }
            if ($('#txtMath').val() != '') {
                if (!NumericValidation('txtMath', 'Please write only numeric values for MARKS', '3'))
                    return false;
            }
            //=============if stream is science=================
            if ((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true) || (document.getElementById('rbtVocational').checked == true)) {
                //                if (!blankFieldValidation('txtScience', 'Chemistry Mark')) {
                //                    return false;
                //                }
                if ($('#txtScience').val() != '') {
                    if (!NumericValidation('txtScience', 'Please write only numeric values for MARKS', '3'))
                        return false;

                }
                if ($('#txtBiology').val() != '') {
                    if (!NumericValidation('txtBiology', 'Please write only numeric values for MARKS', '3'))
                        return false;
                }
                if ($('#txtMathematics').val() != '') {
                    if (!NumericValidation('txtMathematics', 'Please write only numeric values for MARKS', '3'))
                        return false;
                }

            }

            //            if (!blankFieldValidation('txtTotMark', 'Total Mark secured in all subjects')) {
            //                return false;
            //            }
            if ($('#txtTotMark').val() != '') {
                if (!NumericValidation('txtTotMark', 'Please write only numeric values for MARKS', '4'))
                    return false;
            }

            //            if (!blankFieldValidation('txtMaxMark', 'Maximum Mark')) {
            //                return false;
            //            }
            if ($('#txtMaxMark').val() != '') {
                if (!NumericValidation('txtMaxMark', 'Please write only numeric values for MARKS', '4'))
                    return false;
            }

            if (parseInt(document.getElementById('txtTotMark').value) > parseInt(document.getElementById('txtMaxMark').value)) {
                alert('Total Mark secured in all subjects cannot be greater than Maximum Mark');
                document.getElementById('txtTotMark').focus();
                return false;
            }

            //=================Compare mark with total mark & Maxmimum mark=========
            var boardValue = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
            var Eng = parseInt($("#txtEnglish").val());
            var MIL = parseInt($("#txtMath").val());
            var Sci = parseInt($("#txtScience").val());
            var Math = parseInt($("#txtMathematics").val());
            var Bio = parseInt($("#txtBiology").val());
            var Tot = parseInt($("#txtTotMark").val());
            var Max = parseInt($("#txtMaxMark").val());

            if (MIL == "" || isNaN(MIL)) {
                MIL = 0;
            }
            else {
                MIL = $("#txtMath").val();
            }
            if (Sci == "" || isNaN(Sci)) {
                Sci = 0;
            }
            else {
                Sci = $("#txtScience").val();
            }
            if (Bio == "" || isNaN(Bio)) {
                Bio = 0;
            }
            else {
                Bio = $("#txtBiology").val();
            }
            if (Math == "" || isNaN(Math)) {
                Math = 0;
            }
            else {
                Math = $("#txtMathematics").val();
            }


            var inTotal = parseInt(Eng) + parseInt(Math) + parseInt(Sci) + parseInt(Bio) + parseInt(MIL);

            if (boardValue == 35) {
                if (MIL >= Tot) {
                    alert('Compulsory (1+2) Mark cannot be greater than or equal to Total Mark.');
                    $("#txtMath").focus();
                    return false;
                }
                if (MIL >= Max) {
                    alert('Compulsory (1+2) Mark cannot be greater than or equal to Maximum Mark');
                    $("#txtMath").focus();
                    return false;
                }
            }
            if (parseInt(inTotal) >= parseInt(Tot)) {
                alert('Total Subjects marks cannot be greater than or equal to Total Mark');
                $("#txtTotMark").focus();
                return false;
            }
            if (parseInt(inTotal) >= parseInt(Max)) {
                alert('Total Subjects marks cannot be greater than or equal to Maximum Mark');
                $("#txtMaxMark").focus();
                return false;
            }

            var BodVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
            var subjectLabel = '';
            if (BodVal == 35) {
                subjectLabel = 'Compulsory 3';
            }
            else {
                subjectLabel = 'English/Hindi';
            }

            if (Eng >= Tot) {

                alert(subjectLabel + ' Mark cannot be greater than or equal to Total Mark');
                $("#txtEnglish").focus();
                return false;
            }
            if (Eng >= Max) {
                alert(subjectLabel + ' Mark cannot be greater than or equal to Maximum Mark');
                $("#txtEnglish").focus();
                return false;
            }
            //=============if strream is science============== 
            if ((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) {
                var BodVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);

                if (Math >= Tot) {
                    alert('Mathematics Mark cannot be greater than or equal to Total Mark');
                    $("#txtMathematics").focus();
                    return false;
                }
                if (Math >= Max) {
                    alert('Mathematics Mark cannot be greater than or equal to Maximum Mark');
                    $("#txtMathematics").focus();
                    return false;
                }
                if (Sci >= Tot) {
                    alert('Chemistry Mark cannot be greater than or equal to Total Mark');
                    document.getElementById('txtScience').focus();
                    return false;
                }
                if (Sci >= Max) {
                    alert('Chemistry Mark cannot be greater than or equal to Maximum Mark');
                    $("#txtScience").focus();
                    return false;
                }
                if (Bio >= Tot) {
                    alert('Biology Mark cannot be greater than or equal to Total Mark');
                    $("#txtBiology").focus();
                    return false;
                }
                if (Bio >= Max) {
                    alert('Biology Mark cannot be greater than or equal to Maximum Mark');
                    $("#txtBiology").focus();
                    return false;
                }
            }

            //==============if stream is vocational==================
            if ((document.getElementById('rbtVocational').checked == true)) {
                if (Math >= Tot) {
                    alert('Mathematics Mark cannot be greater than or equal to Total Mark');
                    $("#txtMathematics").focus();
                    return false;
                }
                if (Math >= Max) {
                    alert('Mathematics Mark cannot be greater than or equal to Maximum Mark');
                    $("#txtMathematics").focus();
                    return false;
                }
                if (Sci >= Tot) {
                    alert('Chemistry Mark cannot be greater than or equal to Total Mark');
                    $("#txtScience").focus();
                    return false;
                }
                if (Sci >= Max) {
                    alert('Chemistry Mark cannot be greater than or equal to Maximum Mark');
                    $("#txtScience").focus();
                    return false;
                }
                if (Bio >= Tot) {
                    alert('Biology Mark cannot be greater than or equal to Total Mark');
                    $("#txtBiology").focus();
                    return false;
                }
                if (Bio >= Max) {
                    alert('Biology Mark cannot be greater than or equal to Maximum Mark');
                    $("#txtBiology").focus();
                    return false;
                }
            }
            //==============================================================validation for math, chemistry and biology mark can not be zero
            if ((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true) || (document.getElementById('rbtVocational').checked == true)) {

                if ($('#hdnMathematics').val() != '0' && Math == 0) {
                    alert('Mathematics Mark cannot be be 0(zero)');
                    $("#txtMathematics").focus();
                    return false;
                }
                if ($('#hdnChemistry').val() != '0' && Sci == 0) {
                    alert('Chemistry Mark cannot be be 0(zero)');
                    $("#txtScience").focus();
                    return false;
                }
                if ($('#hdnBotany').val() != '0' && Bio == 0) {
                    alert('Biology Mark cannot be be 0(zero)');
                    $("#txtBiology").focus();
                    return false;
                }
                if ($('#hdnZoology').val() != '0' && Bio == 0) {
                    alert('Biology Mark cannot be be 0(zero)');
                    $("#txtBiology").focus();
                    return false;
                }
            }

            //========================================================
            if (Tot == 0) {
                alert('Total Mark secured in all subjects cannot be 0(zero)');
                $("#txtTotMark").focus();
                return false;
            }
            if (inTotal > Tot) {
                alert('The sum of your individual marks cannot be greater than the Total Mark Secured');
                $("#txtTotMark").focus();
                return false;
            }
            if (Max == 0) {
                alert('Maximum Mark cannot be 0(zero)');
                $("#txtMaxMark").focus();
                return false;
            }

            //================================Mark Validation End====================
            debugger;
            //Compartmental Validation
            if (document.getElementById('rbtCompartmentalY').checked == true) {
                if (!blankFieldValidation('txtCompSubject1', 'Subject1'))
                    return false;
                if (!WhiteSpaceValidation1st('txtCompSubject1'))
                    return false;
                if (!blankFieldValidation('txtCompFMark1', 'Fail Mark in previous exam'))
                    return false;
                if (!NumericValidation('txtCompFMark1', 'Please write only numeric values for MARKS', '3'))
                    return false;
                if (!blankFieldValidation('txtCompPMark1', 'Pass Mark in previous exam'))
                    return false;
                if (!NumericValidation('txtCompPMark1', 'Please write only numeric values for MARKS', '3'))
                    return false;
                var f1 = $("#txtCompFMark1").val();
                var p1 = $("#txtCompPMark1").val();

                if (parseInt(f1) >= parseInt(p1)) {
                    alert('Fail Mark cannot be greater than or equal to Pass Mark');
                    $("#txtCompFMark1").focus();
                    return false;
                }
                if (document.getElementById('txtCompFMark2').value != '' || document.getElementById('txtCompPMark2').value != '') {
                    if (!blankFieldValidation('txtCompSubject2', 'Subject2'))
                        return false;
                }
                if (document.getElementById('txtCompSubject2').value != '') {
                    if (!WhiteSpaceValidation1st('txtCompSubject2'))
                        return false;
                    if (!blankFieldValidation('txtCompFMark2', 'Fail Mark in previous exam for 2nd subject'))
                        return false;
                    if (!NumericValidation('txtCompFMark2', 'Please write only numeric values for MARKS', '3'))
                        return false;
                    if (!blankFieldValidation('txtCompPMark2', 'Pass Mark in previous exam for 2nd subject'))
                        return false;
                    if (!NumericValidation('txtCompPMark2', 'Please write only numeric values for MARKS', '3'))
                        return false;
                    var f2 = $("#txtCompFMark2").val();
                    var p2 = $("#txtCompPMark2").val();

                    if (parseInt(f2) >= parseInt(p2)) {
                        alert('Fail Mark cannot be greater than or equal to Pass Mark for 2nd subject');
                        $("#txtCompFMark2").focus();
                        return false;
                    }
                }


                if (document.getElementById('txtCompFMark3').value != '' || document.getElementById('txtCompPMark3').value != '') {
                    if (!blankFieldValidation('txtCompSubject3', 'Subject3'))
                        return false;
                }

                if (document.getElementById('txtCompSubject3').value != '') {

                    if (!WhiteSpaceValidation1st('txtCompSubject3'))
                        return false;

                    if (!blankFieldValidation('txtCompFMark3', 'Fail Mark in Previous Exam for 3rd subject'))
                        return false;

                    if (!NumericValidation('txtCompFMark3', 'Please write only numeric values for MARKS', '3'))
                        return false;

                    if (!blankFieldValidation('txtCompPMark3', 'Pass Mark in Previous Exam for 3rd subject'))
                        return false;

                    if (!NumericValidation('txtCompPMark3', 'Please write only numeric values for MARKS', '3'))
                        return false;

                    var f3 = $("#txtCompFMark3").val();
                    var p3 = $("#txtCompPMark3").val();

                    if (parseInt(f3) >= parseInt(p3)) {

                        alert('Fail Mark cannot be greater than or equal to Pass Mark for 3rd subject');
                        $("#txtCompFMark3").focus();
                        return false;
                    }

                }


            }

            //--------Record of educational institution last attended-------
            if (!blankFieldValidation('txtschname', 'Name of the College'))
                return false;

            if (!blankFieldValidation('txtschloc', 'Location of the College'))
                return false;

            if ($('#ddlinstDistrict').val() == 0) {
                if (!blankFieldValidation('txtdist', 'District'))
                    return false;
            }
            else {

                if (!DropDownValidation('ddlinstDistrict', 'District'))
                    return false;
            }

            if (!DropDownValidation('ddlYOJ', 'Year of Joining'))
                return false;

            if (!DropDownValidation('ddlYOL', 'Year of Leaving'))
                return false;
            //--------End-------


            //----Personal Details 
            if (!DropDownValidation('ddlGender', 'your Gender')) {
                return false;
            }
            if (!DropDownValidation('ddlMt', 'Mother Tongue')) {
                return false;
            }
            if (!DropDownValidation('ddlNationality', 'Nationality')) {
                return false;
            }

            //===================For Correspondence address===================
            if (!DropDownValidation('ddlCState', 'State')) {
                return false;
            }
            if (!DropDownValidation('ddlCDist', 'District')) {
                return false;
            }
            if (!DropDownValidation('ddlCBlock', 'Block/Municipality')) {
                return false;
            }



            if (!blankFieldValidation('txtCPS', 'House no.,village name,police station')) {
                return false;
            }

            if ($("#txtCPS").val().length == 1) {
                alert('House No., Street/Village, Post Office, Police Station Name is too short');
                $('#txtCPS').focus();
                return false;
            }
            if (!WhiteSpaceValidation1st('txtCPS'))
                return false;
            if (document.getElementById('txtCPS').value != '') {
                var add = document.getElementById('txtCPS').value;
                var len = add.length;
                if (parseInt(len) > 150) {
                    alert('Please enter house no.,street/village,post office,\n police station name within 150 characters');
                    return false;
                }
            }

            var strpin = document.getElementById('txtCPC').value;
            if ((strpin != '') && (strpin.length < 6)) {
                alert('Pin Code cannot be less than 6digit !');
                document.getElementById('txtCPC').focus();
                return false;
            }
            if (!chkSingleQuote('txtCPC'))
                return false;
            if (!WhiteSpaceValidation1st('txtCPC'))
                return false;
            if (!NumericValidation('txtCPC', 'Please write only numeric values for PIN CODE', '6'))
                return false;
            if (!RepeatedNumbers('txtCPC', 1)) {
                alert('Please write valid PIN');
                $("#txtCPC").val("");
                $("#txtCPC").focus();
                return false;
            }

            if (!chkSingleQuote('txtCTCode'))
                return false;
            if (!WhiteSpaceValidation1st('txtCTCode'))
                return false;
            if (!NumericValidation('txtCTCode', 'Please write only numeric values for Area Code', '5'))
                return false;
            if (!RepeatedNumbers('txtCTCode', 2)) {
                alert('Please write valid Area Code');
                $("#txtCTCode").val("");
                $("#txtCTCode").focus();
                return false;
            }

            var strAreaCode = document.getElementById('txtCTCode').value;
            if ((strAreaCode != '') && (strAreaCode.length < 3)) {
                alert('Area Code cannot be less than 3 digit');
                $("#txtCTCode").focus();
                return false;
            }

            if (!blankFieldValidation('txtCMobNo', 'Mobile Number')) {
                return false;
            }
            if (!chkSingleQuote('txtCMobNo'))
                return false;

            if (!WhiteSpaceValidation1st('txtCMobNo'))
                return false;
            if (!NumericValidation('txtCMobNo', 'Please write only numeric values for Mobile No.', '10'))
                return false;
            if (!RepeatedNumbers('txtCMobNo', 2)) {
                alert('Please write valid Mobile No.');
                $("#txtCMobNo").val("");
                $("#txtCMobNo").focus();
                return false;
            }

            var strMob = document.getElementById('txtCMobNo').value;
            if ((strMob != '') && (strMob.length < 10)) {
                alert('Mobile No. cannot be less than 10 digit');
                $("#txtCMobNo").focus();
                return false;
            }

            if (!blankFieldValidation('txtCEmail', 'E-mail')) {
                return false;
            }
            if (!chkSingleQuote('txtCEmail'))
                return false;
            if (!WhiteSpaceValidation1st('txtCEmail'))
                return false;
            if (!EmailValidation('txtCEmail'))
                return false;

            if (!chkSingleQuote('txtCTeleNo'))
                return false;
            if (!WhiteSpaceValidation1st('txtCTeleNo'))
                return false;
            if (!NumericValidation('txtCTeleNo', 'Please write only numeric values for Phone No.', '7'))
                return false;
            if (!RepeatedNumbers('txtCTeleNo', 1)) {
                alert('Please write valid Phone No');
                $("#txtCTeleNo").val("");
                $("#txtCTeleNo").focus();
                return false;
            }

            var strPhone = document.getElementById('txtCTeleNo').value;
            if ((strPhone != '') && (strPhone.length < 5)) {
                alert('Phone No. cannot be less than 5 digit');
                $("#txtCTeleNo").focus();
                return false;
            }

            //=====================For Reservation category==================
            if ((document.getElementById('rbtST').checked == false) && (document.getElementById('rbtSC').checked == false) && (document.getElementById('rbtOther').checked == false) && (document.getElementById('rbtnOBC').checked == false) && (document.getElementById('rbtGeneral').checked == false) && (document.getElementById('rbtBCW').checked == false)) {
                alert('Please select ST/SC/OBC/SEBC/General category');
                return false;
            }
            var str = $('#hdnAppliedStreams').val();
            if (document.getElementById('rbtArts').checked == true) {
                if ($('#hdnAppliedStreams').val() != '' && $('#hdnAppliedStreams').val() != '0') {


                    if (str.indexOf("2") >= 0) {
                        alert('You can not apply for Arts stream because you have given option for Science stream.');
                        return false;
                    }
                    if (str.indexOf("3") >= 0) {
                        alert('You can not apply for Arts stream because you have given option for Commerce stream.');
                        return false;
                    }

                }
            }
            if (document.getElementById('rbtCommerce').checked == true) {
                if ($('#hdnAppliedStreams').val() != '' && $('#hdnAppliedStreams').val() != '0') {

                    var str = $('#hdnAppliedStreams').val();
                    if (str.indexOf("2") >= 0) {
                        alert('You can not apply for Commerce stream because you have given option for Science stream.');
                        return false;
                    }


                }
            }


            return confirm('Are you sure to update?');

        }


        function showHideStream() {

            var stream = '<%=strStream%>';

            if (stream == 'Arts') {
                document.getElementById('rbtArts').checked = true;

                document.getElementById('tdChemistryH').style.display = 'none';
                document.getElementById('tdChemistryB').style.display = 'none';
                document.getElementById('tdMathH').style.display = 'none';
                document.getElementById('tdMathB').style.display = 'none';
                document.getElementById('tdBiologyH').style.display = 'none';
                document.getElementById('tdBiologyB').style.display = 'none';
                $("#lblCHSEStream").html('Arts');
            }
            else if (stream == 'Science') {
                document.getElementById('rbtScience').checked = true;
                document.getElementById('tdChemistryH').style.display = '';
                document.getElementById('tdChemistryB').style.display = '';
                document.getElementById('tdMathH').style.display = '';
                document.getElementById('tdMathB').style.display = '';
                document.getElementById('tdBiologyH').style.display = '';
                document.getElementById('tdBiologyB').style.display = '';
                $("#lblCHSEStream").html('Science');

            }
            else if (stream == 'Commerce') {
                document.getElementById('rbtCommerce').checked = true;
                document.getElementById('tdChemistryH').style.display = 'none';
                document.getElementById('tdChemistryB').style.display = 'none';
                document.getElementById('tdMathH').style.display = 'none';
                document.getElementById('tdMathB').style.display = 'none';
                document.getElementById('tdBiologyH').style.display = 'none';
                document.getElementById('tdBiologyB').style.display = 'none';
                $("#lblCHSEStream").html('Commerce');
            }
            else if (stream == 'Vocational') {
                document.getElementById('rbtVocational').checked = true;
                document.getElementById('tdChemistryH').style.display = '';
                document.getElementById('tdChemistryB').style.display = '';
                document.getElementById('tdMathH').style.display = '';
                document.getElementById('tdMathB').style.display = '';
                document.getElementById('tdBiologyH').style.display = '';
                document.getElementById('tdBiologyB').style.display = '';
                $("#lblCHSEStream").html('Vocational');
            }
            else if (stream == 'Diploma') {
                document.getElementById('rbtDiploma').checked = true;
                document.getElementById('tdChemistryH').style.display = '';
                document.getElementById('tdChemistryB').style.display = '';
                document.getElementById('tdMathH').style.display = '';
                document.getElementById('tdMathB').style.display = '';
                document.getElementById('tdBiologyH').style.display = '';
                document.getElementById('tdBiologyB').style.display = '';
                $("#lblCHSEStream").html('Diploma');
            }
            else if (stream == 'Upashastri') {
                document.getElementById('rbtUpashastri').checked = true;
                document.getElementById('tdChemistryH').style.display = 'none';
                document.getElementById('tdChemistryB').style.display = 'none';
                document.getElementById('tdMathH').style.display = 'none';
                document.getElementById('tdMathB').style.display = 'none';
                document.getElementById('tdBiologyH').style.display = 'none';
                document.getElementById('tdBiologyB').style.display = 'none';
                $("#lblCHSEStream").html('Upashastri');
            }
            else if (stream == 'Maulvi') {
                document.getElementById('rbtnMaulvi').checked = true;
                document.getElementById('tdChemistryH').style.display = 'none';
                document.getElementById('tdChemistryB').style.display = 'none';
                document.getElementById('tdMathH').style.display = 'none';
                document.getElementById('tdMathB').style.display = 'none';
                document.getElementById('tdBiologyH').style.display = 'none';
                document.getElementById('tdBiologyB').style.display = 'none';
                $("#lblCHSEStream").html('Maulvi');
            }
            var boardid = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
            if (boardid == 35) {
                document.getElementById('thMILH').style.display = 'none';
                document.getElementById('tdMIL').style.display = 'none';
                document.getElementById('lblMIL').innerHTML = 'Compulsory (1+2)';
                document.getElementById('lblEnglish').innerHTML = 'Compulsory 3';
                document.getElementById('thEnglishH').style.display = 'none';
                document.getElementById('tdEnglishB').style.display = 'none';
                document.getElementById('tdChemistryH').style.display = 'none';
                document.getElementById('tdChemistryB').style.display = 'none';
                document.getElementById('tdMathH').style.display = 'none';
                document.getElementById('tdMathB').style.display = 'none';
                document.getElementById('tdBiologyH').style.display = 'none';
                document.getElementById('tdBiologyB').style.display = 'none';

            }
            else {
                document.getElementById('thMILH').style.display = 'none';
                document.getElementById('tdMIL').style.display = 'none';
                document.getElementById('lblEnglish').innerHTML = 'English/Hindi';
            }
            //            else if (stream == 'Upashastri') {
            //                document.getElementById('rbtUpashastri').checked = true;
            //                document.getElementById('tdChemistryH').style.display = 'none';
            //                document.getElementById('tdChemistryB').style.display = 'none';
            //                document.getElementById('tdMathH').style.display = 'none';
            //                document.getElementById('tdMathB').style.display = 'none';
            //                document.getElementById('tdBiologyH').style.display = 'none';
            //                document.getElementById('tdBiologyB').style.display = 'none';
            //                $("#lblCHSEStream").html('Upashastri');
            //            }

        }

        function OSAShow() {
            debugger;
            var osa = '<%=strOSAStatus%>';
            var olns = '<%=strOLNSStatus%>';
            var compartment = '<%=strCompartmentStatus%>';
            var cat1 = '<%=strCategory1%>';
            var cat2 = '<%=strCategory2%>';

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
        }
    </script>
</body>
</html>
