<%@ Page Language="C#" AutoEventWireup="true" CodeFile="FeesPayment_Jr.aspx.cs" Inherits="StudentLogin_FeesPayment_Jr" %>

<%@ Register Src="~/includes/RegStudentLeftmenu.ascx" TagPrefix="stuc1" TagName="leftmenu" %>
<%@ Register Src="~/includes/RegStudentHeader.ascx" TagPrefix="stuc2" TagName="stdntHdr" %>
<%@ Register Src="~/includes/StudentDoctype.ascx" TagPrefix="studoc" TagName="studoctpe" %>
<%@ Register Src="~/includes/footer.ascx" TagName="footer" TagPrefix="uc2" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Welcome :: Online Facilitation System for Students (OFSS)</title>
    <studoc:studoctpe ID="stdoc" runat="server" />
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
                            <li><a href="StudentDashboardJunior.aspx"><i class="ace-icon fa fa-home home-icon"></i></a>
                            </li>
                            <li class="active">Fees Payment</li>
                        </ul>
                        <!-- /.breadcrumb -->
                    </div>
                    <div class="page-content">
                        <div class="body-content dashBoard">
                            <!-- /.page-header -->
                            <div class="row" id="divDateLine" runat="server" visible="false">
                                <div style="color: #ff0000; padding: 150px 400px; font-size: 16px;">
                                    <h5>
                                        <asp:Literal ID="litMessage" runat="server"></asp:Literal></h5>
                                </div>
                            </div>
                            <div class="row" id="divForm" runat="server">
                                <div class="col-sm-12">
                                    <div class="panel-group information-boxes ">
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h4>Personal Details
                                                </h4>
                                            </div>
                                            <div class="panel-body">
                                                <div class="inner-new-boxes">
                                                    <div class="box">
                                                        <h5>Application Ref. No.</h5>
                                                        <h6><asp:Label ID="lblApplicantNo" runat="server"></asp:Label></h6>
                                                    </div>
                                                    <div class="box">
                                                        <h5>Name of the Applicant</h5>
                                                        <h6><asp:Label ID="lblApplicantName" runat="server"></asp:Label></h6>
                                                    </div>
                                                    <div class="box">
                                                        <h5>Email Id</h5>
                                                        <h6><asp:Label ID="lblEmailId" runat="server"></asp:Label></h6>
                                                    </div>
                                                    <div class="box">
                                                        <h5>Mobile No</h5>
                                                        <h6><asp:Label ID="lblMobileNo" runat="server"></asp:Label></h6>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                        <div class="panel-group information-boxes">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4>Payment Transaction Details
                                                    </h4>
                                                </div>
                                                <div class="panel-body">

                                                    <div class="row form-group">
                                                        <div class="col-lg-12">
                                                            <div class="table-responsive">
                                                                <asp:GridView ID="grdPayment" runat="server" AllowPaging="false" PageSize="6" EmptyDataText="No Record(s) Found."
                                                                    AutoGenerateColumns="false" CssClass="table table-bordered">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderStyle-CssClass="noPrint" ItemStyle-Width="30px" FooterStyle-CssClass="noPrint"
                                                                            ItemStyle-CssClass="noPrint" ItemStyle-HorizontalAlign="Center">
                                                                            <HeaderTemplate>
                                                                                Sl#
                                                                            </HeaderTemplate>
                                                                            <ItemTemplate>
                                                                                <asp:Label ID="txtSlNo" runat="server" MaxLength="2" Text='<%# Container.DataItemIndex+1 %>'
                                                                                    Width="50px"></asp:Label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:BoundField DataField="vchTransDate" HeaderText="Transaction Date" NullDisplayText="NA" />
                                                                        <asp:BoundField DataField="vchTransId" HeaderText="Transaction No" NullDisplayText="NA" />
                                                                        <asp:BoundField DataField="vchTranStatus" HeaderText="Payment Status" NullDisplayText="NA" />
                                                                        <asp:BoundField DataField="vchTransFee" HeaderText="Application Fee" NullDisplayText="NA" />
                                                                        <asp:BoundField DataField="vchGateWayName" HeaderText="Payment Gateway Name" NullDisplayText="NA" />
                                                                        <asp:TemplateField HeaderText="Update Status">
                                                                            <ItemTemplate>
                                                                                <asp:HiddenField ID="hdnBankRefNo" runat="server" Value='<%# Eval("vch_UniqueRefNo") %>' />
                                                                                <asp:LinkButton ID="lnkUpdate" runat="server" CssClass="btn btn-sm btn-success" Text="Update"
                                                                                    OnClick="lnkUpdate_Click" CommandArgument="<%#Container.DataItemIndex %>"></asp:LinkButton>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                </asp:GridView>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row form-group">
                                                        <div class="col-lg-12 text-center">
                                                            <asp:Button ID="btnProceedToPay" runat="server" Text="Proceed to Payment" CssClass="btn btn-success payment-btn"
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
