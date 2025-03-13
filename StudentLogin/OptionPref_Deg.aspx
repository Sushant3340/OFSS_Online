<%@ Page Language="C#" AutoEventWireup="true" CodeFile="OptionPref_Deg.aspx.cs" Inherits="StudentLogin_OptionPref_Deg"
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
    <%--<link href="../css/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css" />--%>
    <%--   <script src="../js/jquery-1.4.2.min.js" type="text/javascript"></script>--%>
</head>
<body class="no-skin">
    <form id="Form1" runat="server">
    <stuc2:stdntHdr ID="studentHead" runat="server" />
    <asp:HiddenField ID="hdnCSRFRandNum" runat="server" />
    <asp:HiddenField ID="hdnGender" runat="server" Value="0" />
    <asp:HiddenField ID="hdnApplicationid" runat="server" Value="0" />
    <asp:HiddenField ID="hdnCollegeid" runat="server" Value="0" />
    <asp:HiddenField ID="hdnCollegenm" runat="server" Value="0" />
    <asp:HiddenField ID="hdnStreamid" runat="server" Value="0" />
    <asp:HiddenField ID="hdnStreamnm" runat="server" Value="0" />
    <asp:HiddenField ID="hdnCompulsoryid" runat="server" Value="0" />
    <asp:HiddenField ID="hdnCompulsorynm" runat="server" Value="0" />
    <asp:HiddenField ID="hdnUpashastri" runat="server" Value="0" />
    <asp:HiddenField ID="hdnBiologyMark" runat="server" Value="0" />
    <asp:HiddenField ID="hdnStreamStatus" runat="server" Value="0" />
    <asp:HiddenField ID="hdnBoard" runat="server" Value="0" />
    <asp:HiddenField ID="hdnSelectionStatus" runat="server" Value="0" />
    <asp:HiddenField ID="hdnRejectStatus" runat="server" Value="0" />
    <asp:HiddenField ID="hdnMILMark" runat="server" Value="0" />
    <asp:HiddenField ID="hdnEnglish" runat="server" Value="0" />
    <asp:HiddenField ID="hdnTotalMark" runat="server" Value="0" />
    <asp:HiddenField ID="hdnMaximumMark" runat="server" Value="0" />
    <asp:HiddenField ID="hdnMathMark" runat="server" Value="0" />
    <asp:HiddenField ID="hdnChemistry" runat="server" Value="0" />
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
                        <!-- /.page-header -->
                        <div class="row" id="divDateLine" runat="server" visible="false">
                            <div style="color: #ff0000; padding: 150px 400px; font-size=16px;">
                                <h5>
                                    Dateline for modifying form is completed...</h5>
                            </div>
                        </div>
                        <div class="row" id="divForm" runat="server">
                            <div class="col-sm-12">
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
                                                    लाल रंग (*) से लिखे गयी सभी सूचनाएं भरनी अनिवार्य हैं, अन्यथा आपके फॉर्म ऑनलाइन
                                                    जमा नहीं हो पायेगा |
                                                </label>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                                <p class=" pull-right">
                                    All the Fields marked as red Colour <span class="mndtory">(*) </span>are Mandatory
                                    to be filled, otherwise your Online form will not be submitted.
                                </p>
                                <div class="clearfix">
                                </div>
                                <div class="formpage">
                                    <div class="mrgn-top-20" id="divOption" runat="server">
                                        <label id="lbloption">
                                            <strong>Option(s)/Choice(s) Details </strong>
                                        </label>
                                    </div>
                                    <div class="table-responsive">
                                        <asp:GridView ID="grdOptions" runat="server" AllowPaging="false" PageSize="6" EmptyDataText="No Record(s) Found."
                                            AutoGenerateColumns="false" CssClass="table table-bordered" OnRowDeleting="grdOptions_RowDeleting"
                                            OnRowDataBound="grdOptions_RowDataBound">
                                            <Columns>
                                                <%-- <asp:BoundField HeaderText="Sl#" DataField="UserId" HeaderStyle-Width="5%" ItemStyle-Width="5%" />--%>
                                                <asp:TemplateField HeaderStyle-CssClass="noPrint" FooterStyle-CssClass="noPrint"
                                                    ItemStyle-CssClass="noPrint" ItemStyle-HorizontalAlign="Left">
                                                    <HeaderTemplate>
                                                        Sl#</HeaderTemplate>
                                                    <ItemTemplate>
                                                        <asp:TextBox ID="txtSlNo" runat="server" MaxLength="2" Text='<%# DataBinder.Eval(Container.DataItem, "UserId")%>'
                                                            Width="50px"></asp:TextBox>
                                                        <cc1:FilteredTextBoxExtender runat="server" ID="FilteredTextBoxExtender1" FilterType="Numbers"
                                                            ValidChars="1234567890" TargetControlID="txtSlNo">
                                                        </cc1:FilteredTextBoxExtender>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:BoundField DataField="vch_CollegeName" HeaderText="College Name" NullDisplayText="NA" />
                                                <asp:BoundField DataField="Stream" HeaderText="Stream" NullDisplayText="NA" />
                                                <asp:TemplateField HeaderStyle-CssClass="noPrint" FooterStyle-CssClass="noPrint"
                                                    ItemStyle-CssClass="noPrint">
                                                    <HeaderTemplate>
                                                        Subject</HeaderTemplate>
                                                    <ItemTemplate>
                                                        <asp:Label ID="lblSubject" Text='<%# string.Format("{0}", Eval("compulsory"))%>'
                                                            runat="server"></asp:Label><br />
                                                        <asp:HiddenField runat="server" ID="hdnCollegeid" Value='<%# Eval("int_CollegeID") %>' />
                                                        <asp:HiddenField runat="server" ID="hdnStreamid" Value='<%# Eval("StreamID") %>' />
                                                        <asp:HiddenField runat="server" ID="hdncompulsoryid" Value='<%# Eval("CompulsoryId") %>' />
                                                        <%--  <asp:HiddenField runat="server" ID="hdnElectineMark" Value='<%# Eval("decAppFee") %>' />--%>
                                                        <%--  <asp:HiddenField runat="server" ID="hdnApplyStautus" Value='<%# Eval("ApplicationStatus") %>' />--%>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderStyle-CssClass="noPrint" FooterStyle-CssClass="noPrint"
                                                    ItemStyle-CssClass="noPrint" ItemStyle-HorizontalAlign="Left">
                                                    <HeaderTemplate>
                                                        Delete</HeaderTemplate>
                                                    <ItemTemplate>
                                                        <asp:LinkButton ID="imgbtnDelete" runat="server" CommandName="Delete" ToolTip="Click here to delete this option">
                                                                   <i class="fa fa-trash cros" aria-hidden="true"></i>  
                                                        </asp:LinkButton>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                            </Columns>
                                            <HeaderStyle />
                                            <RowStyle />
                                        </asp:GridView>
                                    </div>
                                    <div class="mrgn-top-20" id="divOptionPrefer" runat="server">
                                        <label id="Label1">
                                            Note : Please check and click on<strong> Update Option Preference </strong>button
                                            to alter option preference.
                                        </label>
                                    </div>
                                    <div class="mrgn-top-20" id="divOptionPreferBtn" runat="server">
                                        <asp:Button ID="btnUpdatePreference" CssClass="btn btn-success btn-sm" runat="server"
                                            ToolTip="Click to update option preference" OnClick="btnUpdatePreference_Click"
                                            Text="Update Option Preference" />
                                    </div>
                                    <div class="mrgn-top-20">
                                        <strong>Please Fill the Option of the Colleges & Stream in Which You Want to Get Admission.
                                            / जिस कॉलेज एवं कोर्स में आप नामांकन लेना चाहते हैं , उन विकल्पो का चयन यहाँ भरे
                                        </strong>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <ul class="list-item">
                                                <li style="padding-top: 5px;">आप ऑनलाइन आवेदन पत्र के माध्यम से बीस विकल्प विभिन्न कॉलेज
                                                    में आवेदन दे सकते हैं| अपने विकल्पों का चुनाव अपनी वरीयता सूची के अनुसार करें |
                                                </li>
                                                <li style="padding-top: 5px;">आवेदन में विकल्प भरते समय यह सुनिश्चित करें की जो विकल्प
                                                    आप पहले भरेंगे उसी के अनुसार आपका चयन किया जाएगा | विकल्पों को भरते समय यह सुनिश्चित
                                                    करें कि आपकी प्राथमिकता सूची आपके पसंद के अनुरूप है | आपके द्वारा भरी गयी कालेजो
                                                    की प्राथमिकता सूची में ऊपर से नीचे के क्रम में आपकी मेधा (अंक) एवं आरक्षण श्रेणी
                                                    के अनुसार जो सबसे पहला सफल विकल्प जिसमे आपका चुनाव होगा , उस कॉलेज की नामांकन सूची
                                                    में आपका नाम आएगा |</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="alert alert-info">
                                        <label id="lblinf">
                                            You are required to select at least <strong>FIVE </strong>and at most <strong>TWENTY</strong>
                                            options / &#2310;&#2346; &#2344;&#2381;&#2351;&#2370;&#2344;&#2340;&#2350; <strong>&#2319;&#2325;</strong>
                                            &#2357;&#2367;&#2325;&#2354;&#2381;&#2346; &#2319;&#2357;&#2350; &#2309;&#2343;&#2367;&#2325;&#2340;&#2350;
                                            <strong>&#2348;&#2368;&#2360;</strong> &#2357;&#2367;&#2325;&#2354;&#2381;&#2346;
                                            &#2351;&#2361;&#2366;&#2305; &#2349;&#2352; &#2360;&#2325;&#2340;&#2375; &#2361;&#2376;&#2306;|
                                        </label>
                                    </div>
                                    <div class="Capactive" id="Caption">
                                        <strong>
                                            <asp:Label runat="server" ID="lblOption"></asp:Label>
                                        </strong>
                                    </div>
                                    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                        <ContentTemplate>
                                            <table class="table table-bordered">
                                                <tr style="display: none">
                                                    <td>
                                                        <label id="lblColType">
                                                            College Type / &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2346;&#2381;&#2352;&#2325;&#2366;&#2352;
                                                        </label>
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
                                                    <td width="25%">
                                                        <label id="lblDname">
                                                            District Name / &#2332;&#2367;&#2360; &#2332;&#2367;&#2354;&#2375; &#2325;&#2375;
                                                            &#2325;&#2377;&#2354;&#2375;&#2332; &#2350;&#2375;&#2306; &#2342;&#2366;&#2326;&#2367;&#2354;&#2366;
                                                            &#2354;&#2375;&#2344;&#2366; &#2330;&#2366;&#2361;&#2340;&#2375; &#2361;&#2376;&#2306;
                                                            &#2313;&#2360;&#2325;&#2366; &#2330;&#2369;&#2344;&#2366;&#2357; &#2325;&#2352;&#2375;|
                                                            <span class="starmark-nopose">*</span></label>
                                                    </td>
                                                    <td colspan="4" valign="middle">
                                                        <div>
                                                            <asp:DropDownList CssClass="form-control" Width="300px" ID="ddlCollegeDistrict" runat="server"
                                                                AutoPostBack="true" OnSelectedIndexChanged="ddlCollegeDistrict_SelectedIndexChanged">
                                                                <%-- <asp:ListItem Value="0">-- SELECT --</asp:ListItem>--%>
                                                            </asp:DropDownList>
                                                        </div>
                                                        <div style="float: left; display: none;">
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
                                                    <td style="width: 150px;">
                                                        <label id="lblcolname">
                                                            College Name / &#2325;&#2377;&#2354;&#2375;&#2332; &#2325;&#2366; &#2344;&#2366;&#2350;
                                                            &#2330;&#2369;&#2344;&#2375;
                                                        </label>
                                                        <span class="starmark-nopose">*</span>
                                                    </td>
                                                    <td>
                                                        <asp:DropDownList CssClass="form-control" ID="ddlCollege" runat="server" Width="300px"
                                                            AutoPostBack="true" OnSelectedIndexChanged="ddlCollege_SelectedIndexChanged">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </td>
                                                    <td>
                                                        <label id="lblStream">
                                                            Stream / &#2360;&#2306;&#2325;&#2366;&#2351; &#2330;&#2369;&#2344;&#2375;
                                                        </label>
                                                        <span class="starmark-nopose">*</span>
                                                    </td>
                                                    <td>
                                                        <asp:DropDownList CssClass="form-control" ID="ddlStream" runat="server" AutoPostBack="true"
                                                            OnSelectedIndexChanged="ddlStream_SelectedIndexChanged" Width="113px">
                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 150px;">
                                                        <label id="comsub">
                                                            Subject / &#2357;&#2367;&#2359;&#2351; &#2330;&#2369;&#2344;&#2375;
                                                        </label>
                                                        <span class="starmark-nopose">*</span>
                                                    </td>
                                                    <td colspan="4">
                                                        <span>
                                                            <asp:DropDownList CssClass="form-control" ID="ddlELE1" runat="server" Width="300px"
                                                                AutoPostBack="true" OnSelectedIndexChanged="ddlELE1_SelectedIndexChanged">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </ContentTemplate>
                                    </asp:UpdatePanel>
                                    <center>
                                        <table class="table table-bordered" id="tblOptionButton">
                                            <asp:Button ID="btnAddMore" CssClass="btn btn-success btn-sm" runat="server" ToolTip="Click to add options"
                                                OnClientClick="return AssignDataHiddenVal();" OnClick="btnAddMore_Click" />
                                        </table>
                                    </center>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <asp:CheckBox ID="cbAgree1" runat="server" />
                                            मैं यह सत्यापित करता हूँ कि उपरोक्त भरी गयी सभी सूचनाये सही हैं एवं उपर भरी गयी
                                            सूचना के गलत पाए जाने पर मेरा आवेदन पत्र अस्वीकृत किया जा सकता है | इसके लिए मेरा
                                            कोई भी दावा मान्य नहीं होगा |
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
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
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <center>
                                                <asp:Button CssClass="btn btn-success btn-sm" ID="btnSave" runat="server" OnClick="btnSave_Click"
                                                    Style="height: 30px; line-height: 17px;" Text="Update" OnClientClick="return getDEGOptions();" /></center>
                                        </div>
                                    </div>
                                </div>
                                <!----->
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
    <script type="text/javascript">
        //        function pageLoad() {
        //            //loadDistricts();
        //        }

        //====================Load District =============//    
        //        function loadDistricts() {
        //            debugger;
        //            $('#ddlCollegeDistrict option').each(function (j, option) { $(option).remove(); });
        //            $.ajax({
        //                type: 'POST',
        //                url: 'OptionPref_Deg.aspx/LoadDistrict',
        //                contentType: "application/json; charset=utf-8",
        //                success: function (response) {
        //                    var Option = $('<option value="0">--SELECT--</option>');
        //                    $('#ddlCollegeDistrict').append(Option);

        //                    $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
        //                        Option = $('<option value="' + value.int_DistrictID + '">' + value.vch_DistrictName + '</option>');
        //                        $('#ddlCollegeDistrict').append(Option);
        //                    });
        //                },
        //                error: function (response) {
        //                    var msg = jQuery.parseJSON(response.responseText);
        //                    console.log("Message: " + msg.Message);
        //                    console.log("StackTrace: " + msg.StackTrace);
        //                    console.log("ExceptionType: " + msg.ExceptionType);
        //                    
        //                },
        //                dataType: 'json'
        //            });
        //}

        //        function ColVacancy() {
        //            debugger;
        //            var intColId = parseInt(document.getElementById('ddlCollege').options[document.getElementById('ddlCollege').selectedIndex].value);
        //            var intStrid = parseInt(document.getElementById('ddlStream').options[document.getElementById('ddlStream').selectedIndex].value);
        //            var intSubid = parseInt(document.getElementById('ddlELE1').options[document.getElementById('ddlELE1').selectedIndex].value);
        //            $.ajax({
        //                type: 'POST',
        //                url: 'OptionPref_Deg.aspx/vacancyColg',
        //                data: "{'intColId':'" + intColId + "','intStrid':'" + intStrid + "','intSubid':'" + intSubid + "'}",
        //                contentType: "application/json; charset=utf-8",
        //                success: function (response) {
        //                    var lstdtl = eval('(' + response.d + ')');
        //                    //alert(lstdtl[0].Vacancy);
        //                    if (lstdtl[0].Vacancy == 0) {
        //                        alert("There is No Vacancy of this college !");
        //                        clearDDL();
        //                    }
        //                },
        //                dataType: 'json'
        //            });
        //        }



        //====================Load Colleges =============// 
        //        function loadColleges() {
        //            debugger;
        //            $('#ddlCollege option').each(function (j, option) { $(option).remove(); });
        //            var inVal = parseInt(document.getElementById('ddlCollegeDistrict').options[document.getElementById('ddlCollegeDistrict').selectedIndex].value);
        //            var intGender;

        //            if ($("#rbtOthersFinance").is(":checked")) {
        //                collegeType = 0;
        //            }
        //            if ($("#rbtSanskrit").is(":checked")) {
        //                collegeType = 7;
        //            }
        //            intGender = $("#hdnGender").val();
        //            $.ajax({
        //                type: 'POST',
        //                url: 'OptionPref_Deg.aspx/fillDistWiseColg',
        //                data: "{'intDistId':'" + inVal + "','intCType':'" + collegeType + "','intGender':'" + intGender + "'}",
        //                contentType: "application/json; charset=utf-8",
        //                dataType: 'json',
        //                success: function (response) {
        //                    var newOption = $('<option value="0">--SELECT--</option>');
        //                    $('#ddlCollege').append(newOption);
        //                    $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
        //                        var newOption = $('<option value="' + value.IntID + '">' + value.StrName + '</option>');
        //                        $('#ddlCollege').append(newOption);
        //                    });
        //                },
        //                error: function (response) {
        //                    var msg = jQuery.parseJSON(response.responseText);
        //                    console.log("Message: " + msg.Message);
        //                    console.log("StackTrace: " + msg.StackTrace);
        //                    console.log("ExceptionType: " + msg.ExceptionType);
        //                }
        //            });
        //        }




        //        function fillStream(ctlDdlVal, CtlRbtnVal) {
        //            debugger;
        //            $('#ddlStream option').each(function (j, option) { $(option).remove(); });
        //            var inVal = ctlDdlVal.value;
        //            var Upsval;
        //            if ((CtlRbtnVal.checked) && (parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value) == 24) && document.getElementById('rbtOthersFinance').checked) {
        //                Upsval = 1;
        //            }
        //            else {
        //                Upsval = 2;
        //            }
        //            $.ajax({
        //                type: 'POST',
        //                url: 'OptionPref_Deg.aspx/FillStream',
        //                data: "{'intCollegeID':'" + inVal + "','UpsStream':'" + Upsval + "'}",
        //                contentType: "application/json; charset=utf-8",
        //                dataType: 'json',
        //                success: function (response) {
        //                    var newOption = $('<option value="0">--SELECT--</option>');
        //                    $('#ddlStream').append(newOption);
        //                    $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
        //                        var newOption = $('<option value="' + value.int_StreamID + '">' + value.vch_StreamName + '</option>');
        //                        $('#ddlStream').append(newOption);
        //                    });
        //                },
        //                error: function (response) {
        //                    var msg = jQuery.parseJSON(response.responseText);
        //                    console.log("Message: " + msg.Message);
        //                    console.log("StackTrace: " + msg.StackTrace);
        //                    console.log("ExceptionType: " + msg.ExceptionType);
        //                }
        //            });
        //        }
        //====================Fill Elective Subject =============//

        //        function fillfElective(ctlCollegeVal, ctlStreamVal) {
        //            debugger;
        //            $('#ddlELE1 option').each(function (j, option) { $(option).remove(); });
        //            var CVal = ctlCollegeVal.value;
        //            var Sval = ctlStreamVal.value;
        //            $.ajax({

        //                type: 'POST',
        //                url: 'OptionPref_Deg.aspx/FillElectives',
        //                data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        //                contentType: "application/json; charset=utf-8",
        //                dataType: 'json',
        //                success: function (response) {
        //                    var newOption = $('<option value="0">--SELECT--</option>');
        //                    $('#ddlELE1').append(newOption);
        //                    $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
        //                        var newOption = $('<option value="' + value.int_SubjectID + '">' + value.vch_SubjectName + '</option>');
        //                        $('#ddlELE1').append(newOption);
        //                    });
        //                },
        //                error: function (response) {
        //                    var msg = jQuery.parseJSON(response.responseText);
        //                    console.log("Message: " + msg.Message);
        //                    console.log("StackTrace: " + msg.StackTrace);
        //                    console.log("ExceptionType: " + msg.ExceptionType);
        //                }
        //            });
        //        }

        function getDEGOptions() {
            debugger;


            //            if (totalRows == 0) {
            //                alert('Please select minimum 1 Option details. ');
            //                document.getElementById('ddlCollegeDistrict').focus();
            //                return false;
            //            }
            //            else {
            var cIndex = document.getElementById('ddlCollegeDistrict').value;
            if (cIndex != 0) {
                if (!DropDownValidation('ddlCollegeDistrict', 'District'))
                    return false;
                if (!DropDownValidation('ddlCollege', 'College Name'))
                    return false;
                if (!DropDownValidation('ddlStream', 'Stream Name'))
                    return false;
                if (!DropDownValidation('ddlELE1', 'Subject Name'))
                    return false;

                //=======================Checking Elective values1=============
                var streams;
                streams = $("#ddlStream").val();
                var biology;
                biology = $("#hdnBiologyMark").val();
                if (biology == '') {
                    biology = 0;
                }

                if ((document.getElementById('hdnStreamStatus').value == "3") || (document.getElementById('hdnStreamStatus').value == "1") || (document.getElementById('hdnStreamStatus').value == "6")) {
                    if ((streams == '2')) {
                        alert('You can apply for Arts/Commerce Stream only');
                        $("#ddlStream").attr('selectedIndex', 0);
                        $("#ddlStream").focus();
                        return false;
                    }
                }
                if (((document.getElementById('hdnStreamStatus').value == "2") || (document.getElementById('hdnStreamStatus').value == "4")) && (biology == 0)) {
                    if (streams == '5') {
                        alert('You can not apply for Biological Science Stream\nbecause you have not entered Biology Mark');
                        $("#ddlStream").attr('selectedIndex', 0);
                        $("#ddlStream").focus();
                        return false;
                    }
                }
                if (!DropDownValidation('ddlELE1', 'Subject'))
                    return false;
                //===================checking same college and stream in button click=======================

                var totalRowsCount = $('tr', $('#grdOptions')).not('tr:first').length;
                var gv = document.getElementById("<%= grdOptions.ClientID %>");
                var colCntr = 0;
                var addedCollege = 0;
                var addedStream = 0;
                var cuurntCid = parseInt(document.getElementById('ddlCollege').value);
                var cuurntSid = parseInt(document.getElementById('ddlStream').value);
                var cuurntEleSid = parseInt(document.getElementById('ddlELE1').value);
                if (totalRowsCount > 0) {
                    $('tr', $('#grdOptions')).not('tr:first').each(function () {
                        addedCollege = parseInt($(this).find('input[id$=hdnCollegeid]').val());
                        addedStream = parseInt($(this).find('input[id$=hdnStreamid]').val());
                        addedSub = parseInt($(this).find('input[id$=hdncompulsoryid]').val());
                        if ((addedCollege == cuurntCid) && (addedStream == cuurntSid) && (addedSub == cuurntEleSid)) {
                            colCntr = parseInt(colCntr) + 1;

                        }
                    });
                }

                if (parseInt(colCntr) > 0) {
                    alert('You cannot add more than 1 option in same College , Stream & Subject');
                    clearDDL();
                    return false;
                }


                //===================end same college and stream in button click=======================

            }

            if (document.getElementById('cbAgree1').checked == false) {
                alert('Please Confirm.');
                document.getElementById('cbAgree1').focus();
                return false;
            }

            if (document.getElementById('cbAgree2').checked == false) {
                alert('Please Confirm.');
                document.getElementById('cbAgree2').focus();
                return false;
            }
            //}
            var totalRows3 = $('tr', $('#grdOptions')).not('tr:first').length;
            var msg = null;
            var msg2 = null;
            if (totalRows3 == 1) {
                msg2 = 'option';
            }
            else {
                msg2 = 'options';
            }

            if (totalRows3 == 20) {
                msg = 'You have entered ' + totalRows3 + ' ' + msg2 + '.\nClick OK to submit.\nClick Cancel to modify.';
            }
            else if (totalRows3 == 1) {
                msg = 'You have entered ' + totalRows3 + ' ' + msg2 + '.\nClick OK to submit.\nClick Cancel to add more options.';
            }
            else {
                msg = 'You have entered ' + totalRows3 + ' ' + msg2 + '.\nClick OK to submit.\nClick Cancel to add more options.';
            }

            if (confirm(msg)) {
                return true;
            }
            else {
                return false;
            }
        }


        function AssignDataHiddenVal() {
            debugger;
            if (!DropDownValidation('ddlCollegeDistrict', 'District Name')) {
                return false;
            }
            if (!DropDownValidation('ddlCollege', 'College Name'))
                return false;
            //==========================================================
            if (!DropDownValidation('ddlStream', 'Stream Name'))
                return false;
            if (!DropDownValidation('ddlELE1', 'Subject'))
                return false;



            var totalRowsCount = $('tr', $('#grdOptions')).not('tr:first').length;
            var gv = document.getElementById("<%= grdOptions.ClientID %>");
            var colCntr = 0;
            var addedCollege = 0;
            var addedStream = 0;
            var cuurntCid = parseInt(document.getElementById('ddlCollege').value);
            var cuurntSid = parseInt(document.getElementById('ddlStream').value);
            var cuurntEleSid = parseInt(document.getElementById('ddlELE1').value);

            if (totalRowsCount > 0) {
                $('tr', $('#grdOptions')).not('tr:first').each(function () {
                    addedCollege = parseInt($(this).find('input[id$=hdnCollegeid]').val());
                    addedStream = parseInt($(this).find('input[id$=hdnStreamid]').val());
                    addedSub = parseInt($(this).find('input[id$=hdncompulsoryid]').val());

                    if ((addedCollege == cuurntCid) && (addedStream == cuurntSid) && (addedSub == cuurntEleSid)) {
                        colCntr = parseInt(colCntr) + 1;

                    }
                });
            }

            if (parseInt(colCntr) > 0) {
                alert('You cannot add more than 1 option in same College , Stream & Subject');
                clearDDL();
                return false;
            }


            var CollegeId = $("#ddlCollege").val();
            $("#hdnCollegeid").val(CollegeId);
            var CollegeName = $("#ddlCollege option:selected").text();
            $("#hdnCollegenm").val(CollegeName);

            var StreamId = $("#ddlStream").val();
            $("#hdnStreamid").val(StreamId);
            var StreamName = $("#ddlStream option:selected").text();
            $("#hdnStreamnm").val(StreamName);

            var CompulsoryId = $("#ddlELE1").val();
            $("#hdnCompulsoryid").val(CompulsoryId);
            var CompulsoryName = $("#ddlELE1 option:selected").text();
            $("#hdnCompulsorynm").val(CompulsoryName);

            return true;
        }




        function ConfirmProcessing(btnUniqueID, msg) {
            jConfirm(btnUniqueID, msg, Title, function (r) {
                if (r) {
                    __doPostBack(btnUniqueID, '');
                    return true;
                }
                else {
                    return false;
                }
            });

            return false;
        }


        $(document).ready(function () {
            $('.commanClass').keyup(function () {
                var totalRowsCount = $('tr', $('#grdOptions')).not('tr:first').length;
                var eleId = $(this).attr("id");
                var currentVal = $(this).val();
                if (parseInt(currentVal) > parseInt(totalRowsCount)) {
                    alert('Sl.No. cannot be greater than ' + totalRowsCount);
                    $(this).val('');
                    $(this).focus();
                    return false;
                }
                else {
                    $('tr', $('#grdOptions')).not('tr:first').each(function () {
                        addedSlNo = parseInt($(this).find('input[id$=txtSlNo]').val());
                        addedId = $(this).find('input[id$=txtSlNo]').attr("id");
                        if (addedId != eleId) {
                            if (addedSlNo == currentVal) {
                                alert('Sl.No. cannot be repeated.');
                                $('#' + eleId).val('');
                                $('#' + eleId).focus();
                                return false;
                            }
                        }

                    });
                }

            });
        });

        function RestrictStream() {

            debugger;
            var streams;
            streams = ($("#ddlStream").val());
            var biology;
            biology = ($("#hdnBiologyMark").val());
            if (biology == '') {
                biology = 0;
            }

            alert(document.getElementById('hdnStreamStatus').value);
            if ((document.getElementById('hdnStreamStatus').value == "1")) {
                if ((streams == '2')) {
                    alert('You can apply for Arts/Commerce Stream only');
                    $("#ddlStream").attr('selectedIndex', 0);
                    $("#ddlStream").focus();
                    return false;
                }
            }
            if ((document.getElementById('hdnStreamStatus').value == "3")) {
                if ((streams == '2')) {
                    alert('You can apply for Arts/Commerce Stream only');
                    $("#ddlStream").attr('selectedIndex', 0);
                    $("#ddlStream").focus();
                    return false;
                }
            }
            if (((document.getElementById('hdnStreamStatus').value == "2") || (document.getElementById('hdnStreamStatus').value == "4")) && (biology == 0)) {
                if (streams == 5) {
                    alert('You can not apply for Biological Science Stream\nbecause you have not entered Biology Mark');
                    $("#ddlStream").attr('selectedIndex', 0);
                    $("#ddlStream").focus();
                    return false;

                }
            }
        }

        function RemoveAllOptions(fillctlname) {
            for (var i = document.getElementById(fillctlname).length; i > 0; i--) {
                document.getElementById(fillctlname).options[i] = null;
            }
        }

        function resetOptionByCid() {
            if ($('#hdnGender').val() == 0) {
                $("#ddlCollege").attr('selectedIndex', 0);
            }
            $("#ddlStream").attr('selectedIndex', 0);
            $("#ddlELE1").attr('selectedIndex', 0);
        }

        function resetOption() {
            $("#ddlCollege").attr('selectedIndex', 0);
            $("#ddlStream").attr('selectedIndex', 0);
            $("#ddlELE1").attr('selectedIndex', 0);
            $("#ddlELE2").attr('selectedIndex', 0);
            $("#ddlELE3").attr('selectedIndex', 0);

            $("#ddlELE1").disable = false;
            $("#ddlELE2").disable = false;
        }
        //==============Clear ddl values on college on change==========		
        function clearDDL() {
            document.getElementById('ddlCollegeDistrict').selectedIndex = 0;
            document.getElementById('ddlCollege').selectedIndex = 0;
            for (var i = document.getElementById('ddlStream').length; i > 0; i--) {
                document.getElementById('ddlStream').options[i] = null;
            }
            for (var i = document.getElementById('ddlELE1').length; i > 0; i--) {
                document.getElementById('ddlELE1').options[i] = null;
            }
            for (var i = document.getElementById('ddlCollege').length; i > 0; i--) {
                document.getElementById('ddlCollege').options[i] = null;
            }
        }

    </script>
</body>
</html>
