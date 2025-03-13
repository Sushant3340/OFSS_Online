<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Studentdashboard.aspx.cs"
    Inherits="ManageStudent_Studentdashboard" %>

<%@ Register Src="~/includes/RegStudentLeftmenu.ascx" TagPrefix="stuc1" TagName="leftmenu" %>
<%@ Register Src="~/includes/RegStudentHeader.ascx" TagPrefix="stuc2" TagName="stdntHdr" %>
<%@ Register Src="~/includes/StudentDoctype.ascx" TagPrefix="studoc" TagName="studoctpe" %>
<%@ Register Src="~/includes/footer.ascx" TagName="footer" TagPrefix="uc2" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Welcome :: Online Facilitation System for Students (OFSS)</title>
    <studoc:studoctpe ID="stdoc" runat="server" />
    <link href="../css/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css" />
</head>
<body class="no-skin">
    <form id="Form1" runat="server">
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
                        <!-- /.page-header -->
                        <div class="row panel-h4" id="divForm" runat="server">
                            <%-- <div style="color:#ccc;padding:150px 400px"><h1>Welcome to OFSS Portal</h1></div> --%>
                            <!-- /.col -->
                            <div class="col-sm-12">
                                <div class="panel-group">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4>
                                                Personal Information
                                            </h4>
                                        </div>
                                        <div class="panel-body">
                                            <div class="form-group row">
                                                <div class="col-lg-2">
                                                    Applicant's Name</div>
                                                <div class="col-lg-4">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lblaplcant_name" CssClass="bgBack" runat="server" Text=""></asp:Label></div>
                                                <div class="col-lg-2">
                                                    Gender</div>
                                                <div class="col-lg-4">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lblgender" CssClass="bgBack" runat="server" Text=""></asp:Label></div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-lg-2">
                                                    Father's Name
                                                </div>
                                                <div class="col-lg-4">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lblf_name" CssClass="bgBack" runat="server" Text=""></asp:Label>
                                                </div>
                                                <div class="col-lg-2">
                                                    Mobile No.
                                                </div>
                                                <div class="col-lg-4">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lbl_mob" CssClass="bgBack" runat="server" Text=""></asp:Label>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-lg-2">
                                                    Mother's Name
                                                </div>
                                                <div class="col-lg-4">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lbl_mther_nm" CssClass="bgBack" runat="server" Text=""></asp:Label>
                                                </div>
                                                <div class="col-lg-2">
                                                    Email Id
                                                </div>
                                                <div class="col-lg-4">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lbl_email_id" CssClass="bgBack" runat="server" Text=""></asp:Label>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-lg-2">
                                                    Address
                                                </div>
                                                <div class="col-lg-4">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lbl_addrss" CssClass="bgBack" runat="server" Text=""></asp:Label>
                                                </div>
                                                <div class="col-lg-2">
                                                    Date of Birth
                                                </div>
                                                <div class="col-lg-4">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lbl_dob" CssClass="bgBack" runat="server" Text=""></asp:Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="panel-group">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4>
                                                Option Details
                                            </h4>
                                        </div>
                                        <div class="panel-body">
                                            <div class="form-group row">
                                                <div class="col-lg-2">
                                                    Board Name</div>
                                                <div class="col-lg-2">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lbl_boardname" CssClass="bgBack" runat="server" Text=""></asp:Label></div>
                                                <div class="col-lg-2">
                                                    Roll Code</div>
                                                <div class="col-lg-2">
                                                    <span class="colomon">:</span><asp:Label ID="lbl_rollcode" CssClass="bgBack" runat="server"
                                                        Text=""></asp:Label></div>
                                                <div class="col-lg-2">
                                                    Roll No</div>
                                                <div class="col-lg-2">
                                                    <span class="colomon">:</span><asp:Label ID="lbl_rollNo" CssClass="bgBack" runat="server"
                                                        Text=""></asp:Label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="panel-group">
                                    <div class="panel panel-default">
                                        <div class="panel-body">
                                            <div class="form-group row">
                                                <div class="col-sm-12">
                                                    <asp:GridView ID="grdOptions" runat="server" AllowPaging="false" PageSize="6" EmptyDataText="No Record(s) Found."
                                                        AutoGenerateColumns="false" CssClass="table table-bordered">
                                                        <Columns>
                                                            <%-- <asp:BoundField HeaderText="Sl#" DataField="UserId" HeaderStyle-Width="5%" ItemStyle-Width="5%" />--%>
                                                            <asp:TemplateField HeaderStyle-CssClass="noPrint" ItemStyle-Width="30px" FooterStyle-CssClass="noPrint"
                                                                ItemStyle-CssClass="noPrint" ItemStyle-HorizontalAlign="Center">
                                                                <HeaderTemplate>
                                                                    Sl#</HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:Label ID="txtSlNo" runat="server" MaxLength="2" Text='<%# Container.DataItemIndex+1 %>'
                                                                        Width="50px"></asp:Label>
                                                                    <%-- <cc1:FilteredTextBoxExtender runat="server" ID="FilteredTextBoxExtender1" FilterType="Numbers"
                                                            ValidChars="1234567890" TargetControlID="txtSlNo">
                                                        </cc1:FilteredTextBoxExtender>--%>
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
                                                                    <%--<asp:HiddenField runat="server" ID="hdnCollegeid" Value='<%# Eval("int_CollegeID") %>' />
                                                        <asp:HiddenField runat="server" ID="hdnStreamid" Value='<%# Eval("StreamID") %>' />
                                                        <asp:HiddenField runat="server" ID="hdncompulsoryid" Value='<%# Eval("CompulsoryId") %>' />--%>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <HeaderStyle />
                                                        <RowStyle />
                                                    </asp:GridView>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="panel-group">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4>
                                                Payment Transaction Details
                                            </h4>
                                        </div>
                                        <div class="panel-body">
                                            <div class="form-group row">
                                                <div class="col-lg-2">
                                                    Transaction Date</div>
                                                <div class="col-lg-2">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lbldate" runat="server" Text=""></asp:Label></div>
                                                <div class="col-lg-2">
                                                    Transaction No</div>
                                                <div class="col-lg-2">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lbltransNo" runat="server" Text=""></asp:Label></div>
                                                <div class="col-lg-2">
                                                    Applicant Ref. No</div>
                                                <div class="col-lg-2">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lblRefNo" runat="server" Text=""></asp:Label></div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-lg-2">
                                                    Payment Status</div>
                                                <div class="col-lg-2">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lblPaymntStatus" runat="server" Text=""></asp:Label></div>
                                                <div class="col-lg-2">
                                                    Application Fee</div>
                                                <div class="col-lg-2">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lblApplctnFee" runat="server" Text=""></asp:Label></div>
                                                <div class="col-lg-2">
                                                    Payment Gateway Name</div>
                                                <div class="col-lg-2">
                                                    <span class="colomon">:</span>
                                                    <asp:Label ID="lblgatewayname" runat="server" Text=""></asp:Label></div>
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
        </div>
        <!-- Large Modal Window Panel -->
        <a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse display">
            <i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i></a>
    </div>
   
    </form>
    <%--    <script src="../js/jquery.mCustomScrollbar.concat.min.js" type="text/javascript"></script>--%>
    <%-- <script type="text/javascript">

        $(document).ready(function () {

            // EXTRACT XML DATA.
            $.ajax({
                type: 'GET',
                url: 'LettereSpace.xml',
                dataType: 'xml',
                success: function (xml) {
                    $(xml).find('Table').each(function () {
                        // CREATE AND ADD SUB LIST ITEMS.
                        var sub_li = $('<li/>')
                        .appendTo('#menu');
                        vchSubject = $(this).find('vchSubject').text();
                        $('<a />')
                        .text(vchSubject)
                        .attr('href', '')
                        .appendTo(sub_li);
                    });
                }
            });
        });

    </script>--%>
    <%--<script>
        (function ($) {
            $(window).on("load", function () {

                $("#content-1").mCustomScrollbar({
                    theme: "minimal"
                });

            });
        })(jQuery);
	</script>--%>
</body>
</html>
