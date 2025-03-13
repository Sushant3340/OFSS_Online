<%@ Page Language="C#" AutoEventWireup="true" CodeFile="OptionPref.aspx.cs" Inherits="StudentLogin_OptionPref"
    EnableEventValidation="false" MaintainScrollPositionOnPostback="true" %>

<%@ Register Src="~/includes/RegStudentLeftmenu.ascx" TagPrefix="stuc1" TagName="leftmenu" %>
<%@ Register Src="~/includes/RegStudentHeader.ascx" TagPrefix="stuc2" TagName="stdntHdr" %>
<%@ Register Src="~/includes/StudentDoctype.ascx" TagPrefix="studoc" TagName="studoctpe" %>
<%@ Register Src="~/includes/footer.ascx" TagName="footer" TagPrefix="uc2" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>OFSS: Option Preference</title>
    <studoc:studoctpe ID="stdoc" runat="server" />
</head>
<body class="no-skin">
    <form id="Form1" runat="server">
        <stuc2:stdntHdr ID="studentHead" runat="server" />
        <asp:HiddenField ID="hdnCSRFRandNum" runat="server" />
        <asp:HiddenField ID="hdnGender" runat="server" Value="0" />
        <asp:HiddenField ID="hdnAppliedColleges" runat="server" Value="0" />
        <asp:HiddenField ID="hdnWReservation" runat="server" Value="0" />
        <asp:HiddenField ID="hdnClgType" runat="server" Value="0" />
        <asp:HiddenField ID="hdnApplicationid" runat="server" Value="0" />
        <asp:HiddenField ID="hdnCollegeid" runat="server" Value="0" />
        <asp:HiddenField ID="hdnCollegenm" runat="server" Value="0" />
        <asp:HiddenField ID="hdnStreamid" runat="server" Value="0" />
        <asp:HiddenField ID="hdnStreamnm" runat="server" Value="0" />
        <asp:HiddenField ID="hdnElective1id" runat="server" Value="0" />
        <asp:HiddenField ID="hdnElective1nm" runat="server" Value="0" />
        <asp:HiddenField ID="hdnElective2id" runat="server" Value="0" />
        <asp:HiddenField ID="hdnElective2nm" runat="server" Value="0" />
        <asp:HiddenField ID="hdnElective3id" runat="server" Value="0" />
        <asp:HiddenField ID="hdnElective3nm" runat="server" Value="0" />
        <asp:HiddenField ID="hdn4thElective1id" runat="server" Value="0" />
        <asp:HiddenField ID="hdn4thElective1nm" runat="server" Value="0" />
        <asp:HiddenField ID="hdn4thElective2id" runat="server" Value="0" />
        <asp:HiddenField ID="hdn4thElective2nm" runat="server" Value="0" />
        <asp:HiddenField ID="hdn4thElective3id" runat="server" Value="0" />
        <asp:HiddenField ID="hdn4thElective3nm" runat="server" Value="0" />
        <asp:HiddenField ID="hdnCompulsoryid" runat="server" Value="0" />
        <asp:HiddenField ID="hdnCompulsorynm" runat="server" Value="0" />
        <asp:HiddenField ID="hdnCompulsoryid2" runat="server" Value="0" />
        <asp:HiddenField ID="hdnCompulsorynm2" runat="server" Value="0" />
        <asp:HiddenField ID="hdnCompulsoryid3" runat="server" Value="0" />
        <asp:HiddenField ID="hdnCompulsorynm3" runat="server" Value="0" />
        <asp:HiddenField ID="hdnSelectionStatus" runat="server" Value="0" />
        <asp:HiddenField ID="hdnRejectStatus" runat="server" Value="0" />
        <asp:HiddenField ID="hdnApplicantNm" runat="server" />
        <asp:HiddenField ID="hdnApplicantEmail" runat="server" />
        <asp:HiddenField ID="hdnApplicantMobNo" runat="server" />
        <asp:HiddenField ID="hdnAppliedClgRes" runat="server" />
        <div class="main-container ace-save-state" id="main-container">
            <stuc1:leftmenu ID="leftmenu" runat="server" />
            <div class="main-content">
                <div class="main-content-inner">
                    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                        <ul class="breadcrumb">
                            <li><a href="StudentDashboardJunior.aspx"><i class="ace-icon fa fa-home home-icon"></i></a>
                            </li>
                            <li class="active">Option / Preference</li>
                        </ul>
                        <!-- /.breadcrumb -->
                    </div>
                    <div class="page-content">
                        <div class="body-content dashBoard personl-info-page pref-page">
                            <!-- /.page-header -->
                            <div class="row" id="divDateLine" runat="server" visible="false">
                                <div style="color: #ff0000; padding: 150px 400px; font-size: 16px;">
                                    <h5>
                                        <asp:Literal ID="litMessage" runat="server"></asp:Literal></h5>
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
                                                    <h2 id="common">Common Application Form</h2>
                                                    <h3 id="adm">For Admission to Intermediate Courses Session 2023-25</h3>
                                                    <p id="department">
                                                        Bihar School Examination Board, Government of Bihar
                                                    </p>
                                                </center>
                                            </div>
                                            <div class="col-lg-4 col-md-3 col-sm-4 col-xs-12">
                                                <center>
                                                    <h2 id="lblp2" class="intrmdt">Intermediate</h2>
                                                    <label id="lblMarkField">
                                                        लाल रंग <span class="mndtory">(*)</span> से लिखीं गईं सभी सूचनाएं भरनी अनिवार्य है, अन्यथा आपके फॉर्म ऑनलाइन
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
                                        <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                                            <ContentTemplate>
                                                <div class="mrgn-top-20 gender-box" id="divGender" runat="server">
                                                    <table style="width: 100%;">
                                                        <tr>
                                                            <td style="width: 10%;">
                                                                <label>Gender <span class="starmark">*</span></label>
                                                            </td>
                                                            <td style="width: 5%;">:
                                                            </td>
                                                            <td style="width: 14%;">
                                                                <asp:DropDownList CssClass="form-control" ID="ddlGender" runat="server" OnSelectedIndexChanged="ddlGender_SelectedIndexChanged"
                                                                    AutoPostBack="true">
                                                                    <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                    <asp:ListItem Value="1">MALE</asp:ListItem>
                                                                    <asp:ListItem Value="2">FEMALE</asp:ListItem>
                                                                    <asp:ListItem Value="3">TRANSGENDER</asp:ListItem>
                                                                </asp:DropDownList>
                                                            </td>
                                                            <td style="width: 1%;">
                                                                
                                                            </td>
                                                            <td style="width: 70%;"></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <hr />
                                                <div class="mrgn-top-20">
                                                    <label id="lblReservation">
                                                        <strong>Reservation Details / &#2310;&#2352;&#2325;&#2381;&#2359;&#2339; &#2325;&#2368;
                                                        &#2357;&#2367;&#2357;&#2352;&#2339;&#2368; </strong>
                                                    </label>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <ul class="cat-description" style="padding-left: 20px; margin: 0px;">
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
                                                <div class="table-responsive category-selector-cls">
                                                    <table class="table table-bordered">
                                                        <tr>
                                                            <td width="10%">
                                                                <asp:RadioButton ID="rbtGeneral" runat="server" GroupName="ResCategory1" onclick="highlightCat1();"
                                                                    OnCheckedChanged="Reservation_CheckedChanged" AutoPostBack="true" />
                                                                <span id="GENERAL">General / &#2360;&#2366;&#2350;&#2366;&#2344;&#2381;&#2351; &#2357;&#2352;&#2381;&#2327;</span>
                                                            </td>
                                                            <td width="15%">
                                                                <asp:RadioButton ID="rbtSC" runat="server" GroupName="ResCategory1" onclick="highlightCat1();"
                                                                    OnCheckedChanged="Reservation_CheckedChanged" AutoPostBack="true" />
                                                                <span id="SC">Scheduled Caste (SC) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340;
                                                            &#2332;&#2366;&#2340;&#2367;</span>
                                                            </td>
                                                            <td width="15%">
                                                                <label>
                                                                    <asp:RadioButton ID="rbtST" runat="server" GroupName="ResCategory1" onclick="highlightCat1();"
                                                                        OnCheckedChanged="Reservation_CheckedChanged" AutoPostBack="true" />
                                                                    <span id="ST">Scheduled Tribe (ST) / &#2309;&#2344;&#2369;&#2360;&#2370;&#2330;&#2367;&#2340;
                                                                &#2332;&#2344;&#2332;&#2366;&#2340;&#2367;</span>
                                                                </label>
                                                            </td>
                                                            <td width="15%">
                                                                <asp:RadioButton ID="rbtnOBC" runat="server" GroupName="ResCategory1" onclick="highlightCat1();"
                                                                    OnCheckedChanged="Reservation_CheckedChanged" AutoPostBack="true" />
                                                                <span id="OBC">Backward Class(BC) / &#2309;&#2344;&#2381;&#2351; &#2346;&#2367;&#2331;&#2396;&#2366;
                                                            &#2357;&#2352;&#2381;&#2327;</span>
                                                            </td>
                                                            <td width="15%">
                                                                <asp:RadioButton ID="rbtOther" runat="server" GroupName="ResCategory1" onclick="highlightCat1();"
                                                                    OnCheckedChanged="Reservation_CheckedChanged" AutoPostBack="true" />
                                                                <span id="OTHER">Extremely Backward Class (EBC) / &#2309;&#2340;&#2381;&#2351;&#2306;&#2340;
                                                            &#2346;&#2367;&#2331;&#2396;&#2366; &#2357;&#2352;&#2381;&#2327; </span>
                                                            </td>
                                                            <td width="15%" style="display: none">
                                                                <asp:RadioButton ID="rbtBCW" runat="server" GroupName="ResCategory1" onclick="highlightCat1();"
                                                                    OnCheckedChanged="Reservation_CheckedChanged" AutoPostBack="true" />
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
                                                    </table>
                                                </div>
                                            </ContentTemplate>
                                        </asp:UpdatePanel>
                                        <!--commented for spot Edit on 23th Sep 2021----------------------------------->
                                       <%-- <div class="mrgn-top-20" id="divOption" runat="server">
                                            <label id="lbloption">
                                                <strong>Option(s)/Choice(s) Details </strong>
                                            </label>
                                        </div>
                                        <div class="table-responsive mrgn-top-20">
                                            <asp:GridView ID="grdOptions" runat="server" AllowPaging="false" PageSize="6" EmptyDataText="No Record(s) Found."
                                                AutoGenerateColumns="false" CssClass="table table-bordered" OnRowDeleting="grdOptions_RowDeleting"
                                                OnRowDataBound="grdOptions_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderStyle-CssClass="noPrint" FooterStyle-CssClass="noPrint"
                                                        ItemStyle-CssClass="noPrint" ItemStyle-HorizontalAlign="Center">
                                                        <HeaderTemplate>
                                                            Sl#
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtSlNo" runat="server" MaxLength="2" Text='<%# DataBinder.Eval(Container.DataItem, "UserId")%>'
                                                                Width="50px"></asp:TextBox>
                                                            <cc1:FilteredTextBoxExtender runat="server" ID="FilteredTextBoxExtender1" FilterType="Numbers"
                                                                ValidChars="1234567890" TargetControlID="txtSlNo">
                                                            </cc1:FilteredTextBoxExtender>
                                                            <asp:HiddenField runat="server" ID="hdnCollegeid" Value='<%# Eval("int_CollegeID") %>' />
                                                            <asp:HiddenField runat="server" ID="hdnStreamid" Value='<%# Eval("StreamID") %>' />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:BoundField DataField="vch_CollegeName" HeaderText="College Name" NullDisplayText="NA" />
                                                    <asp:TemplateField>
                                                        <HeaderTemplate>
                                                            College Type
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <asp:Label ID="lblCollegeType" runat="server"></asp:Label>
                                                            <asp:HiddenField runat="server" ID="hdnCollegeType" Value='<%# Eval("Type") %>' />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField>
                                                        <HeaderTemplate>
                                                            College Reservation Type
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <asp:Label ID="lblClgReservation" runat="server"></asp:Label>
                                                            <asp:HiddenField runat="server" ID="hdnClgReservation" Value='<%# Eval("pintReserveID") %>' />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:BoundField DataField="Stream" HeaderText="Stream" NullDisplayText="NA" />
                                                    <asp:TemplateField HeaderStyle-CssClass="noPrint" FooterStyle-CssClass="noPrint"
                                                        ItemStyle-CssClass="noPrint" ItemStyle-HorizontalAlign="Center">
                                                        <HeaderTemplate>
                                                            Delete
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="imgbtnDelete" runat="server" CommandName="Delete" ToolTip="Click here to delete this option">
                                                                   <i class="fa fa-times cros" aria-hidden="true"></i>  
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
                                                You are required to select at least <strong>TEN </strong>and at most <strong>TWENTY</strong>
                                                options /आप न्यूनतम दस विकल्प एवम अधिकतम बीस विकल्प यहाँ भर सकते हैं|
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
                                                                <asp:DropDownList CssClass="form-control" Width="45%" ID="ddlCollegeDistrict" runat="server"
                                                                    AutoPostBack="true" OnSelectedIndexChanged="ddlCollegeDistrict_SelectedIndexChanged">
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
                                                            <asp:DropDownList CssClass="form-control" ID="ddlCollege" runat="server" Width="500px"
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
                                                            <asp:DropDownList CssClass="form-control" ID="ddlStream" runat="server" AppendDataBoundItems="true"
                                                                Width="113px" AutoPostBack="true" OnSelectedIndexChanged="ddlStream_SelectedIndexChanged">
                                                                <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                    </tr>
                                                    <tr style="display: none;">
                                                        <td style="width: 150px;">
                                                            <label id="Label2">
                                                                Compulsory (MIL) / &#2309;&#2344;&#2367;&#2357;&#2366;&#2352;&#2381;&#2351; &#2357;&#2367;&#2359;&#2351;</label>
                                                            <span class="starmark-nopose">*</span>
                                                        </td>
                                                        <td colspan="4">
                                                            <table class="table table-bordered" style="margin-bottom: 0px;">
                                                                <tr>
                                                                    <td>
                                                                        <label id="Label3">
                                                                            Compulsory Subject <span class="starmark-nopose">*</span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label id="Label4">
                                                                            Matri Bhasha <span class="starmark-nopose">*</span>
                                                                        </label>
                                                                    </td>
                                                                    <td id="Td1">
                                                                        <label id="Label5">
                                                                            Language Literature <span class="starmark-nopose">*</span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:DropDownList CssClass="form-control" ID="ddlFC" AppendDataBoundItems="true"
                                                                            runat="server" Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList CssClass="form-control" ID="ddlMB" AppendDataBoundItems="true"
                                                                            runat="server" Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td id="Td2">
                                                                        <asp:DropDownList CssClass="form-control" ID="ddlLL" AppendDataBoundItems="true"
                                                                            runat="server" Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr style="display: none;">
                                                        <td style="width: 150px;">
                                                            <label id="lblESub">
                                                                Elective Subject / &#2344;&#2367;&#2352;&#2381;&#2357;&#2366;&#2330;&#2367;&#2340;
                                                            &#2357;&#2367;&#2359;&#2351;</label>
                                                            <span class="starmark-nopose">*</span>
                                                        </td>
                                                        <td colspan="4">
                                                            <table class="table table-bordered" style="margin-bottom: 0px;">
                                                                <tr>
                                                                    <td>
                                                                        <label id="lblFESub">
                                                                            First Elective / &#2346;&#2381;&#2352;&#2341;&#2350; &#2357;&#2376;&#2325;&#2354;&#2381;&#2346;&#2367;&#2325;
                                                                        &#2357;&#2367;&#2359;&#2351;
                                                                        </label>
                                                                        <span class="starmark-nopose">*</span>
                                                                    </td>
                                                                    <td>
                                                                        <label id="lblSESub">
                                                                            Second Elective / &#2342;&#2370;&#2360;&#2352;&#2366; &#2357;&#2376;&#2325;&#2354;&#2381;&#2346;&#2367;&#2325;
                                                                        &#2357;&#2367;&#2359;&#2351; <span class="starmark-nopose">*</span>
                                                                        </label>
                                                                    </td>
                                                                    <td id="SlblTESub">
                                                                        <label id="lblTESub">
                                                                            Third Elective / &#2340;&#2368;&#2360;&#2352;&#2366; &#2357;&#2376;&#2325;&#2354;&#2381;&#2346;&#2367;&#2325;
                                                                        &#2357;&#2367;&#2359;&#2351; <span class="starmark-nopose">*</span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:DropDownList CssClass="form-control" ID="ddlELE1" AppendDataBoundItems="true"
                                                                            runat="server" Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                        <div id="sp1" style="display: none;" class="bordernew">
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList CssClass="form-control" ID="ddlELE2" AppendDataBoundItems="true"
                                                                            runat="server" Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                        <div id="sp2" style="display: none;" class="bordernew">
                                                                        </div>
                                                                    </td>
                                                                    <td id="SddlELE3">
                                                                        <asp:DropDownList CssClass="form-control" ID="ddlELE3" AppendDataBoundItems="true"
                                                                            runat="server" Width="165">
                                                                            <asp:ListItem Value="0">--SELECT--</asp:ListItem>
                                                                        </asp:DropDownList>
                                                                        <div id="sp3" style="display: none;" class="bordernew">
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr id="4thE" style="display: none;">
                                                        <td style="width: 150px;">
                                                            <label id="ForEle">
                                                                4th Elective in order of preference / &#2330;&#2380;&#2341;&#2366; &#2357;&#2376;&#2325;&#2354;&#2381;&#2346;&#2367;&#2325;
                                                            &#2357;&#2367;&#2359;&#2351; <span class="starmark-nopose">*</span>
                                                            </label>
                                                        </td>
                                                        <td colspan="4">
                                                            <table class="table table-bordered" style="margin-bottom: 0px;">
                                                                <tr>
                                                                    <td>
                                                                        <label id="lblFchoice">
                                                                            First Choice <span class="starmark-nopose">*</span></label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:DropDownList CssClass="form-control" ID="ddl4thELE1" AppendDataBoundItems="true"
                                                                            runat="server" Width="165" onchange="subjectvalidation();vocational(this.id);">
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
                                            </ContentTemplate>
                                        </asp:UpdatePanel>
                                        <center>
                                            <table class="table table-bordered" id="tblOptionButton">
                                                <asp:Button ID="btnAddMore" CssClass="btn btn-success btn-sm" runat="server" ToolTip="Click to add options"
                                                    OnClientClick="return AssignDataHiddenVal();" OnClick="btnAddMore_Click" />
                                            </table>
                                        </center>--%>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <asp:CheckBox ID="cbAgree1" runat="server" />
                                                मैं यह सत्यापित करता / करती हूँ कि उपरोक्त भरी गयी सभी सूचनाएँ सही हैं एवं ऊपर भरी
                                            गयी सूचना के गलत पाए जाने पर मेरा आवेदन पत्र अस्वीकृत किया जा सकता है | इसके लिए
                                            मेरा कोई भी दावा मान्य नहीं होगा |
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <asp:CheckBox ID="cbAgree2" runat="server" />
                                                मैं यह स्वीकृत करता / करती हूँ कि आवेदन की राशि जमा करने के पश्चात ही मेरा आवेदन
                                            स्वीकार किया जाएगा | बिना आवेदन शुल्क के मेरा आवेदन अस्वीकृत कर दिया जाएगा एवं उसके
                                            लिए मेरा कोई भी दावा मान्य नहीं होगा |
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <center>
                                                    <asp:Button CssClass="btn btn-primary" ID="btnSave" runat="server" OnClick="btnSave_Click"
                                                        Style="height: 30px; line-height: 17px;" Text="Update" /></center>
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
    </form>
    <script type="text/javascript">
        // loadDistricts();
        function getOptions() {

            if (!DropDownValidation('ddlGender', 'Gender'))
                return false;

            //=====================For Reservation category==================
            if ((document.getElementById('rbtST').checked == false) && (document.getElementById('rbtSC').checked == false) && (document.getElementById('rbtOther').checked == false) && (document.getElementById('rbtnOBC').checked == false) && (document.getElementById('rbtGeneral').checked == false) && (document.getElementById('rbtBCW').checked == false)) {
                jAlert('', "<strong>Please select ST/SC/OBC/General/EBC category</strong>", Title);
                return false;
            }

            //var totalRows = $('tr', $('#grdOptions')).not('tr:first').length;

            //if (totalRows < 10) {
            //    jAlert('', '<strong>Please select minimum 10 Option details.<br/>कृपया न्यूनतम 10 विकल्प चुने | </strong>', Title);
            //    document.getElementById('ddlCollegeDistrict').focus();
            //    return false;
            //}
            //else {
            //    var cIndex = document.getElementById('ddlCollege').value;
            //    if (cIndex != 0) {
            //        if (!DropDownValidation('ddlCollege', 'College Name'))
            //            return false;
            //        if (!DropDownValidation('ddlStream', 'Stream Name'))
            //            return false;
            //    }
            //    if (document.getElementById('cbAgree1').checked == false) {
            //        jAlert('', '<strong>Please Confirm Self declaration checkboxes.</strong>', Title);
            //        document.getElementById('cbAgree1').focus();
            //        return false;
            //    }

            //    if (document.getElementById('cbAgree2').checked == false) {
            //        jAlert('', '<strong>Please Confirm Self declaration checkboxes.</strong>', Title);
            //        document.getElementById('cbAgree2').focus();
            //        return false;
            //    }
            //}

            if (document.getElementById('cbAgree1').checked == false) {
                jAlert('', '<strong>Please Confirm Self declaration checkboxes.</strong>', Title);
                document.getElementById('cbAgree1').focus();
                return false;
            }

            if (document.getElementById('cbAgree2').checked == false) {
                jAlert('', '<strong>Please Confirm Self declaration checkboxes.</strong>', Title);
                document.getElementById('cbAgree2').focus();
                return false;
            }
            return true;


        }

        function pageLoad() {
            // OSAShow();
            highlightCat1();
            highliteEWS();
            highlitespecialyEnabled();

            $("[id*=btnSave]").click(function (event, skip) {
                if (getOptions()) {
                    if (skip) {
                        return true;
                    }
                    event.preventDefault();
                    var self = $("[id*=btnSave]");
                    var msg = 'Are you sure to ' + $("[id*=btnSave]").val() + ' this record ?';

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

        //===================Function to highlight Reservation Category1==========
        function highlightCat1() {
            debugger;
            if (document.getElementById('rbtST').checked == true) {
                document.getElementById('ST').style.color = "#CC33FF";
                document.getElementById('SC').style.color = "#000000";
                document.getElementById('OTHER').style.color = "#000000";
                document.getElementById('OBC').style.color = "#000000";
                document.getElementById('GENERAL').style.color = "#000000";
                document.getElementById('Span1').style.color = "#000000";
                document.getElementById('trEWS').style.display = "none";
                document.getElementById('rbtnEWSNo').checked = true;

            }
            else if (document.getElementById('rbtSC').checked == true) {
                document.getElementById('SC').style.color = "#CC33FF";
                document.getElementById('ST').style.color = "#000000";
                document.getElementById('OTHER').style.color = "#000000";
                document.getElementById('OBC').style.color = "#000000";
                document.getElementById('GENERAL').style.color = "#000000";
                document.getElementById('Span1').style.color = "#000000";
                document.getElementById('trEWS').style.display = "none";
                document.getElementById('rbtnEWSNo').checked = true;


            }
            else if (document.getElementById('rbtOther').checked == true) {
                document.getElementById('OTHER').style.color = "#CC33FF";
                document.getElementById('ST').style.color = "#000000";
                document.getElementById('SC').style.color = "#000000";
                document.getElementById('OBC').style.color = "#000000";
                document.getElementById('GENERAL').style.color = "#000000";
                document.getElementById('Span1').style.color = "#000000";
                document.getElementById('trEWS').style.display = "none";
                document.getElementById('rbtnEWSNo').checked = true;

            }
            else if (document.getElementById('rbtnOBC').checked == true) {

                document.getElementById('OBC').style.color = "#CC33FF";
                document.getElementById('ST').style.color = "#000000";
                document.getElementById('SC').style.color = "#000000";
                document.getElementById('OTHER').style.color = "#000000";
                document.getElementById('GENERAL').style.color = "#000000";
                document.getElementById('Span1').style.color = "#000000";
                document.getElementById('trEWS').style.display = "none";
                document.getElementById('rbtnEWSNo').checked = true;

            }
            else if (document.getElementById('rbtBCW').checked == true) {

                document.getElementById('Span1').style.color = "#CC33FF";
                document.getElementById('OBC').style.color = "#000000";
                document.getElementById('ST').style.color = "#000000";
                document.getElementById('SC').style.color = "#000000";
                document.getElementById('OTHER').style.color = "#000000";
                document.getElementById('GENERAL').style.color = "#000000";
                document.getElementById('trEWS').style.display = "none";
                document.getElementById('rbtnEWSNo').checked = true;


            }
            else if (document.getElementById('rbtGeneral').checked == true) {

                document.getElementById('GENERAL').style.color = "#CC33FF";
                document.getElementById('ST').style.color = "#000000";
                document.getElementById('SC').style.color = "#000000";
                document.getElementById('OTHER').style.color = "#000000";
                document.getElementById('OBC').style.color = "#000000";
                document.getElementById('Span1').style.color = "#000000";
                document.getElementById('trEWS').style.display = "";

            }
            highliteEWS();
        }

        //=========================================Function to highlight Economically backward class
        function highliteEWS() {

            $("#spanEWSYes").css("color", "#000000");
            $("#spanEWSNo").css("color", "#000000");

            if (document.getElementById('rbtnEWSYes').checked == true) {
                $("#spanEWSYes").css("color", "#CC33FF");
            }
            else if (document.getElementById('rbtnEWSNo').checked == true) {
                $("#spanEWSNo").css("color", "#CC33FF");
            }
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



        //function AssignDataHiddenVal() {

        //    if (!DropDownValidation('ddlGender', 'Gender'))
        //        return false;
        //    //=====================For Reservation category==================
        //    if ((document.getElementById('rbtST').checked == false) && (document.getElementById('rbtSC').checked == false) && (document.getElementById('rbtOther').checked == false) && (document.getElementById('rbtnOBC').checked == false) && (document.getElementById('rbtGeneral').checked == false) && (document.getElementById('rbtBCW').checked == false)) {
        //        jAlert('', "<strong>Please select ST/SC/OBC/General/EBC category</strong>", Title);
        //        return false;
        //    }

        //    if (!DropDownValidation('ddlCollegeDistrict', 'District Name')) {
        //        return false;
        //    }
        //    if (!DropDownValidation('ddlCollege', 'College Name'))
        //        return false;
        //    //==========================================================
        //    if (!DropDownValidation('ddlStream', 'Stream Name'))
        //        return false;
        //    debugger;
        //    var totalRowsCount = $('tr', $('#grdOptions')).not('tr:first').length;

        //    var colCntr = 0;
        //    var addedCollege = 0;
        //    var addedStream = 0;
        //    var cuurntCid = parseInt(document.getElementById('ddlCollege').value);
        //    var cuurntSid = parseInt(document.getElementById('ddlStream').value);
        //    if (totalRowsCount > 0) {
        //        $('tr', $('#grdOptions')).not('tr:first').each(function () {
        //            addedCollege = parseInt($(this).find('input[id$=hdnCollegeid]').val());
        //            addedStream = parseInt($(this).find('input[id$=hdnStreamid]').val());
        //            if ((addedCollege == cuurntCid) && (addedStream == cuurntSid)) {
        //                colCntr = parseInt(colCntr) + 1;

        //            }
        //        });
        //    }

        //    if (parseInt(colCntr) > 0) {
        //        jAlert('', '<strong>You cannot add more than 1 option in same college & stream.</strong>', Title);
        //        return false;
        //    }

        //    var CollegeId = $("#ddlCollege").val();
        //    $("#hdnCollegeid").val(CollegeId);
        //    var CollegeName = $("#ddlCollege option:selected").text();
        //    $("#hdnCollegenm").val(CollegeName);

        //    var StreamId = $("#ddlStream").val();
        //    $("#hdnStreamid").val(StreamId);
        //    var StreamName = $("#ddlStream option:selected").text();
        //    $("#hdnStreamnm").val(StreamName);

        //    $("#hdn4thElective1nm").val(FourELE1Name);

        //    return true;
        //}


        ////============== Clear ddl values on college on change ==========
        //function clearDDL() {

        //    document.getElementById('ddlCollegeDistrict').selectedIndex = 0;
        //    for (var i = document.getElementById('ddlCollege').length; i > 0; i--) {
        //        document.getElementById('ddlCollege').options[i] = null;
        //    }
        //    for (var i = document.getElementById('ddlStream').length; i > 0; i--) {
        //        document.getElementById('ddlStream').options[i] = null;
        //    }
        //    for (var i = document.getElementById('ddlMB').length; i > 0; i--) {
        //        document.getElementById('ddlMB').options[i] = null;
        //    }
        //    for (var i = document.getElementById('ddlLL').length; i > 0; i--) {
        //        document.getElementById('ddlLL').options[i] = null;
        //    }
        //    for (var i = document.getElementById('ddlELE1').length; i > 0; i--) {
        //        document.getElementById('ddlELE1').options[i] = null;
        //    }
        //    for (var i = document.getElementById('ddlELE2').length; i > 0; i--) {
        //        document.getElementById('ddlELE2').options[i] = null;
        //    }
        //    for (var i = document.getElementById('ddlELE3').length; i > 0; i--) {
        //        document.getElementById('ddlELE3').options[i] = null;
        //    }
        //    for (var i = document.getElementById('ddl4thELE1').length; i > 0; i--) {
        //        document.getElementById('ddl4thELE1').options[i] = null;
        //    }
        //    document.getElementById('ddlELE1').disabled = false;
        //    document.getElementById('ddlELE2').disabled = false;
        //    document.getElementById('ddlELE3').disabled = false;

        //    document.getElementById('ddlELE1').style.display = '';
        //    document.getElementById('ddlELE2').style.display = '';
        //    document.getElementById('ddlELE3').style.display = '';
        //}


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

    </script>
</body>
</html>
