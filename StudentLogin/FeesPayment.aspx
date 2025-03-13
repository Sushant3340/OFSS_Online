<%@ Page Language="C#" AutoEventWireup="true" CodeFile="FeesPayment.aspx.cs" Inherits="StudentLogin_FeesPayment" %>

<%@ Register Src="~/includes/RegStudentLeftmenu.ascx" TagPrefix="stuc1" TagName="leftmenu" %>
<%@ Register Src="~/includes/RegStudentHeader.ascx" TagPrefix="stuc2" TagName="stdntHdr" %>
<%@ Register Src="~/includes/StudentDoctype.ascx" TagPrefix="studoc" TagName="studoctpe" %>
<%@ Register Src="~/includes/footer.ascx" TagName="footer" TagPrefix="uc2" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Welcome :: Online Facilitation System for Students (OFSS)</title>
    <studoc:studoctpe ID="stdoc" runat="server" />
    <script src="../js/Juniour_CAF_HINDI.js" type="text/javascript"></script>
</head>
<body class="no-skin">
    <form id="Form1" runat="server">
    <asp:HiddenField ID="hdnCSRFRandNum" runat="server" />
    <stuc2:stdntHdr ID="studentHead" runat="server" />
    <div class="main-container ace-save-state" id="main-container">
        <stuc1:leftmenu ID="leftmenu" runat="server" />
        <div class="main-content">
            <div class="main-content-inner">
                <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                    <ul class="breadcrumb">
                        <li><a href="Studentdashboard.aspx"><i class="ace-icon fa fa-home home-icon"></i></a>
                        </li>
                        <li class="active">Fees Payment For Spot Admission</li>
                    </ul>
                    <!-- /.breadcrumb -->
                </div>
                <div class="page-content">
                    <div class="body-content dashBoard">
                        <!-- /.page-header -->
                        <div class="row">
                            <div class="col-sm-12">
                            <div class="panel-group">
                          <div class="panel panel-default">
                              <div class="panel-heading"><h4> Personal Details </h4></div>
                                <div class="panel-body">
                                    <div class="row form-group">
                                        <div class="col-lg-4">
                                            <strong><span class="lbl">Application Ref. No / आवेदन संदर्भ संख्या</span></strong>
                                        </div>
                                        <div class="col-lg-4">
                                            <span class="colonns">:</span><asp:Label ID="lblApplicantNo" runat="server"></asp:Label></div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-lg-4">
                                            <strong><span class="lbl">Name of the Applicant / आवेदक का नाम </span></strong>
                                        </div>
                                        <div class="col-lg-4">
                                            <span class="colonns">:</span><asp:Label ID="lblApplicantName" runat="server"></asp:Label></div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-lg-4">
                                            <strong><span class="lbl">EmailId / आवेदक ईमेल आईडी</span></strong>
                                        </div>
                                        <div class="col-lg-4">
                                            <span class="colonns">:</span><asp:Label ID="lblEmailId" runat="server"></asp:Label></div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-lg-4">
                                            <strong><span class="lbl">Mobile No / आवेदक मोबाइल नंबर</span></strong>
                                        </div>
                                        <div class="col-lg-4">
                                            <span class="colonns">:</span><asp:Label ID="lblMobileNo" runat="server"></asp:Label></div>
                                    </div>
                                   <%-- <asp:UpdatePanel ID="up1" runat="server">
                                        <ContentTemplate>
                                            <div class="row form-group">
                                                <div class="col-lg-3">
                                                    <strong><span class="lbl">Select your payment option / अपने भुगतान का विकल्प चुनें </span>
                                                    </strong>
                                                </div>
                                                <div class="col-lg-4">
                                                    <span class="colonns">:</span>
                                                    <asp:DropDownList ID="ddlGateWay" runat="server" CssClass="form-control chosen-select-width"
                                                        OnSelectedIndexChanged="ddlGateWay_SelectedIndexChanged" AutoPostBack="true">
                                                        <asp:ListItem Value="1">State Bank Of India</asp:ListItem>
                                                        <asp:ListItem Value="2">Sub Paisa</asp:ListItem>
                                                        <asp:ListItem Value="3">Sahaj</asp:ListItem>
                                                    </asp:DropDownList>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-lg-3">
                                                    <strong><span class="lbl">Application Fee / भुगतान शुल्क </span></strong>
                                                </div>
                                                <div class="col-lg-4">
                                                    <span class="colonns">:</span><asp:Label ID="lblApplicationFee" runat="server"></asp:Label></div>
                                            </div>
                                        </ContentTemplate>
                                    </asp:UpdatePanel>--%>
                                   
                                </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                         <div class="panel-group">
                          <div class="panel panel-default">
                            <div class="panel-heading"><h4> Payment Transaction Details </h4></div>
                             <div class="panel-body">
                              <div class="form-group row">
                                <div class="col-lg-2">Transaction Date</div>
                               <div class="col-lg-2"><span class="colomon">:</span>  <asp:Label ID="lbldate" runat="server" Text=""></asp:Label></div>
                                <div class="col-lg-2"> Transaction No</div>
                                <div class="col-lg-2"><span class="colomon">:</span> <asp:Label ID="lbltransNo" runat="server" Text=""></asp:Label></div>
                               <%--  <div class="col-lg-2"> Applicant Ref. No</div>
                                 <div class="col-lg-2"><span class="colomon">:</span> <asp:Label ID="lblRefNo" runat="server" Text=""></asp:Label></div>--%>
                                   <div class="col-lg-2">Payment Status</div>
                               <div class="col-lg-2"><span class="colomon">:</span>  <asp:Label ID="lblPaymntStatus" runat="server" Text=""></asp:Label></div>
                              </div>

                               <div class="form-group row">
                              
                                <div class="col-lg-2"> Application Fee</div>
                                <div class="col-lg-2"><span class="colomon">:</span>  <asp:Label ID="lblApplctnFee" runat="server" Text=""></asp:Label></div>
                                 <div class="col-lg-2"> Payment Gateway Name</div>
                                 <div class="col-lg-2"><span class="colomon">:</span> <asp:Label ID="lblgatewayname" runat="server" Text=""></asp:Label></div>
                              </div>
                              <div class="row form-group">
                                        <div class="col-lg-4">
                                            <asp:Button ID="btnProceedToPay" runat="server" Text="Proceed to Spot Payment" CssClass="btn btn-success"
                                                OnClick="btnProceedToPay_Click" />
                                        </div>
                                    </div>

                             </div>
                            </div>
                          </div>
                       </div>
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
        <a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse display">
            <i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i></a>
    </div>
    </form>
    <script type="text/javascript">
      
    </script>
</body>
</html>
