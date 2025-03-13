<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UpdatePaymentBulk.aspx.cs"
    Inherits="ONLINE_CAF_Degree_UpdatePaymentBulk" %>

<%@ Register Src="~/Includes/StudentDoctype.ascx" TagName="uc" TagPrefix="docType" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>OFSS || Check Payment Status from Gateway</title>
    <%--<docType:uc ID="uc1" runat="server" />--%>
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <link href="../style/custom.css" rel="stylesheet" type="text/css" />
    <link href="../js/JqAlert/jQuery.alert.css" rel="stylesheet" type="text/css" />
    <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="../css/bootstrap-datepicker3.min.css" rel="stylesheet" type="text/css" />
    <script src="../js/JqAlert/jQuery.js" type="text/javascript"></script>
    <script src="../js/JqAlert/jQuery.alert.js" type="text/javascript"></script>
    <script src="../js/jquery-2.2.4.js" type="text/javascript"></script>
    <script src="../js/custom.js" type="text/javascript"></script>
    <script src="../js/tether.min.js" type="text/javascript"></script>
    <script src="../js/bootstrap.min.js" type="text/javascript"></script>
    <script src="../js/bootstrap-datepicker.min.js" type="text/javascript"></script>
    <style type="text/css">
        .BG-BOX
        {
            background: #e6e6e6;
            padding: 24px;
            margin-top: 30px;
            border: 1px solid #d0d0d0;
            border-radius: 4px;
        }
        
        .mandatory
        {
            position: absolute;
            right: 0;
            top: 0;
        }
    </style>
    <script type="text/javascript">
        function pageLoad() {
            $('.date-picker').datepicker({
                autoclose: true,
                todayHighlight: true
            });
            CheckUncheckGrid();
        }

        function Validate() {
            if (!ValidateDropdown('drpCollegeType', 'College Type')) {
                return false;
            }
            if (!ValidateDropdown('drpGateway', 'Gateway')) {
                return false;
            }
            else
                return true;
        }

        function ValidateGrid(intType) {
            if (!ValidateDropdown('drpCollegeType', 'College Type')) {
                return false;
            }
            if (!ValidateDropdown('drpGateway', 'Gateway')) {
                return false;
            }
            var currGridId = '';
            var gvSBI = $("#gvSBI");
            var gvSabPaisa = $("#gvSabPaisa");
            var gvSahaj = $("#gvSahaj");
            if (gvSBI != null && gvSBI != undefined && gvSBI.length > 0) {
                currGridId = 'gvSBI';
            }
            else if (gvSabPaisa != null && gvSabPaisa != undefined && gvSabPaisa.length > 0) {
                currGridId = 'gvSabPaisa';
            }
            else if (gvSahaj != null && gvSahaj != undefined && gvSahaj.length > 0) {
                currGridId = 'gvSahaj';
            }

            var msg = "";
            if (intType == 1) { //records to get payment details
                msg = "get payment details";
            }
            else if (intType == 2) {
                msg = "update payment details";
            }
            if (!CheckGridSubmit(currGridId, 1, msg)) {
                return false;
            };
            if (intType == 2) {
                if (!ConfirmAction('btnUpdatePayment', '<strong>Are you sure want to update ?</strong>', '<strong>Are you sure want to update ?</strong>')) {
                    return false;
                }
            }
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="sm1" runat="server">
    </asp:ScriptManager>
    <asp:UpdatePanel ID="up2" runat="server">
        <ContentTemplate>
            <div class="page-body">
                <div class="container" style="width: 95% !important">
                    <h4 style="text-align: center; text-decoration: underline;">
                        Check payment Status from payment gateway</h4>
                    <div class="BG-BOX" style="padding: 12px;">
                        <div class="row form-group">
                            <div class="col-sm-3">
                                College Type</div>
                            <div class="col-sm-3">
                                <asp:DropDownList ID="drpCollegeType" CssClass="form-control" runat="server">
                                    <asp:ListItem Text="Intermediate" Value="1"></asp:ListItem>
                                </asp:DropDownList>
                                <span class="mandatory">*</span>
                            </div>
                            <div class="col-sm-3">
                                Gateway</div>
                            <div class="col-sm-3">
                                <asp:DropDownList ID="drpGateway" CssClass="form-control" runat="server" OnSelectedIndexChanged="drpGateway_SelectedIndexChanged"
                                    AutoPostBack="true">
                                    <asp:ListItem Text="-Select-" Value="0"></asp:ListItem>
                                    <asp:ListItem Text="SBI" Value="1"></asp:ListItem>
                                    <asp:ListItem Text="Sab Paisa" Value="2"></asp:ListItem>
                                    <asp:ListItem Text="Sahaj" Value="3"></asp:ListItem>
                                </asp:DropDownList>
                                <span class="mandatory">*</span>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-sm-3">
                                Reference No.</div>
                            <div class="col-sm-3">
                                <asp:TextBox ID="txtrefno" CssClass="form-control" runat="server" placeholder=""></asp:TextBox></div>
                            <div class="col-sm-3">
                                Transaction ID</div>
                            <div class="col-sm-3">
                                <asp:TextBox ID="txtrnsctid" CssClass="form-control" runat="server" placeholder=""></asp:TextBox></div>
                        </div>
                        <div class="row form-group">
                            <div class="col-sm-3">
                                From Date</div>
                            <div class="col-sm-3">
                                <div class="input-group">
                                    <asp:TextBox ID="txtFromDate" runat="server" CssClass="date-picker hasDatepicker form-control"
                                        placeholder="" data-date-format="dd-M-yyyy" MaxLength="15" autocomplete="off"></asp:TextBox>
                                    <span class="input-group-addon dateAddon"><i class="fa fa-calendar bigger-110"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                To Date
                            </div>
                            <div class="col-sm-3">
                                <div class="input-group">
                                    <asp:TextBox ID="txtTodate" runat="server" CssClass="date-picker hasDatepicker form-control"
                                        placeholder="" data-date-format="dd-M-yyyy" autocomplete="off" />
                                    <span class="input-group-addon dateAddon"><i class="fa fa-calendar bigger-110"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">
                                Payment Mode</div>
                            <div class="col-sm-3">
                                <div class="input-group">
                                    <asp:DropDownList ID="drp_Payment_Mode" CssClass="form-control" runat="server">
                                        <asp:ListItem Text="-Select-" Value="0"></asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <asp:Button ID="btnSearchclose" runat="server" Text="Search" class="btn btn-success"
                                    OnClick="btnSearchclose_Click" OnClientClick="return Validate();" />
                                <asp:Button ID="btnGetPaymentDetails" runat="server" OnClick="btnGetPaymentDetails_Click"
                                    Text="Get Payment Details" CssClass="btn btn-success" Visible="false" OnClientClick="return ValidateGrid(1);" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="">
                                <div class="pull-left" id="divNoRecs" runat="server" visible="false">
                                    Page Size:
                                    <asp:DropDownList ID="ddlNoOfRec" ToolTip="Page Size" runat="server" AutoPostBack="True"
                                        OnSelectedIndexChanged="ddlNoOfRec_SelectedIndexChanged">
                                    </asp:DropDownList>
                                    <asp:HiddenField ID="hdnPageIndex" runat="server" />
                                    <asp:HiddenField ID="hdnTotalRows" runat="server" />
                                </div>
                                <div class="pull-right">
                                    <div class="tableAll card-header-right">
                                        <asp:LinkButton ID="lnkBtnAll" Visible="false" CssClass="newlink" runat="server"
                                            Text="All" OnClick="lbtnAll_Click"></asp:LinkButton>
                                        <asp:Label ID="lblPaging" runat="server"></asp:Label>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <div id="viewTable" class="viewTable">
                                        <asp:GridView ID="gvSabPaisa" runat="server" AutoGenerateColumns="False" EmptyDataText="No records found...."
                                            CssClass="table table-striped table-bordered white-bg table-hover" Width="100%"
                                            CellPadding="2" ForeColor="Black" Visible="false" DataKeyNames="intPaymentId">
                                            <Columns>
                                                <asp:TemplateField HeaderText="Sl#" ItemStyle-Width="40">
                                                    <HeaderTemplate>
                                                        <asp:CheckBox ID="chkSelectAll" runat="server" />
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <asp:CheckBox ID="chkSelectSingle" runat="server" CssClass="RowCheck" />
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:BoundField DataField="vch_UniqueRefNo" HeaderText="CAF No." />
                                                <asp:BoundField DataField="clientTxnId" HeaderText="CLIENT TXN ID" />
                                                <asp:BoundField DataField="PGTxnNo" HeaderText="PGTXNNO" />
                                                <asp:BoundField DataField="SABPAISATXID" HeaderText="SABPAISATXID" />
                                                <asp:BoundField HeaderText="PAYMODE" DataField="payMode" />
                                                <asp:BoundField HeaderText="SPRESPCODE" DataField="spRespCode" />
                                                <asp:BoundField HeaderText="STATUS" DataField="spRespStatus" />
                                                <asp:BoundField HeaderText="ORGTXNAMOUNT" DataField="orgTxnAmount" />
                                                <asp:BoundField HeaderText="TRANSACTION DATE" DataField="dtmTrnDate" />
                                                <asp:BoundField HeaderText="UPDATESTATUS" />
                                            </Columns>
                                            <EmptyDataRowStyle CssClass="noData" />
                                            <PagerStyle HorizontalAlign="Right" CssClass="noPrint" />
                                            <PagerSettings Mode="NumericFirstLast" NextPageText="Next" FirstPageText="First"
                                                LastPageText="Last" PreviousPageText="Prev" />
                                        </asp:GridView>
                                        <asp:GridView ID="gvSahaj" runat="server" AutoGenerateColumns="False" EmptyDataText="No records found...."
                                            CssClass="table table-striped table-bordered white-bg table-hover" Width="100%"
                                            CellPadding="2" ForeColor="Black" Visible="false" DataKeyNames="intPaymentId">
                                            <Columns>
                                                <asp:TemplateField HeaderText="Sl#" ItemStyle-Width="40">
                                                    <HeaderTemplate>
                                                        <asp:CheckBox ID="chkSelectAll" runat="server" />
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <asp:CheckBox ID="chkSelectSingle" runat="server" CssClass="RowCheck" />
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:BoundField DataField="StudId" HeaderText="CAF No." />
                                                <asp:BoundField DataField="Uniquerefid" HeaderText="Client Txn ID" />
                                                <asp:BoundField DataField="AppFee" HeaderText="AppFee" />
                                                <asp:BoundField HeaderText="sahaj_txn_id" DataField="sahaj_txn_id" />
                                                <asp:BoundField HeaderText="status" DataField="status" />
                                                <asp:BoundField HeaderText="UpdateStatus" />
                                            </Columns>
                                            <EmptyDataRowStyle CssClass="noData" />
                                            <PagerStyle HorizontalAlign="Right" CssClass="noPrint" />
                                            <PagerSettings Mode="NumericFirstLast" NextPageText="Next" FirstPageText="First"
                                                LastPageText="Last" PreviousPageText="Prev" />
                                        </asp:GridView>
                                        <asp:GridView ID="gvSBI" runat="server" AutoGenerateColumns="False" EmptyDataText="No records found...."
                                            CssClass="table table-striped table-bordered white-bg table-hover" Width="100%"
                                            CellPadding="2" ForeColor="Black" Visible="false" DataKeyNames="intPaymentId">
                                            <Columns>
                                                <asp:TemplateField HeaderText="Sl#" ItemStyle-Width="40">
                                                    <HeaderTemplate>
                                                        <asp:CheckBox ID="chkSelectAll" runat="server" />
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <asp:CheckBox ID="chkSelectSingle" runat="server" CssClass="RowCheck" />
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:BoundField DataField="UniqueRefNo" HeaderText="CAF No." />
                                                <asp:BoundField DataField="MerchantOrderNo" HeaderText="Client Txn ID" />
                                                <asp:BoundField DataField="SBIePayReferenceID" HeaderText="SBIePayReferenceID" />
                                                <asp:BoundField DataField="Status" HeaderText="Status" />
                                                <asp:BoundField HeaderText="Country" DataField="Country" />
                                                <asp:BoundField HeaderText="Currency" DataField="Currency" />
                                                <asp:BoundField HeaderText="OtherDetails" DataField="OtherDetails" />
                                                <asp:BoundField HeaderText="Amount" DataField="Amount" />
                                                <asp:BoundField HeaderText="Reason" DataField="Reason" />
                                                <asp:BoundField HeaderText="BankCode" DataField="BankCode" />
                                                <asp:BoundField HeaderText="BankReferenceNumber" DataField="BankReferenceNumber" />
                                                <asp:BoundField HeaderText="TransactionDate" DataField="TransactionDate" />
                                                <asp:BoundField HeaderText="Paymode" DataField="Paymode" />
                                                <asp:BoundField HeaderText="CIN" DataField="CIN" />
                                                <asp:BoundField HeaderText="UpdateStatus" />
                                            </Columns>
                                            <EmptyDataRowStyle CssClass="noData" />
                                            <PagerStyle HorizontalAlign="Right" CssClass="noPrint" />
                                            <PagerSettings Mode="NumericFirstLast" NextPageText="Next" FirstPageText="First"
                                                LastPageText="Last" PreviousPageText="Prev" />
                                        </asp:GridView>
                                    </div>
                                </div>
                                <div class="pull-right">
                                    <asp:Repeater ID="rptPager" runat="server">
                                        <HeaderTemplate>
                                            <ul class="pagination">
                                        </HeaderTemplate>
                                        <ItemTemplate>
                                            <li class='page-item <%# Convert.ToBoolean(Eval("Enabled")) ? "" : "active" %> '>
                                                <asp:LinkButton ID="lnkPage" CssClass="page-link" runat="server" Text='<%#Eval("Text") %>'
                                                    CommandArgument='<%# Eval("Value") %>' OnClick="Page_Changed" OnClientClick='<%# !Convert.ToBoolean(Eval("Enabled")) ? "return false;" : "" %>'></asp:LinkButton>
                                            </li>
                                        </ItemTemplate>
                                        <FooterTemplate>
                                            </ul>
                                        </FooterTemplate>
                                    </asp:Repeater>
                                    <div style="clear: both;">
                                    </div>
                                </div>
                            </div>
                            <%-- <asp:Button ID="btnUpdatePayment" runat="server" OnClick="btnUpdatePayment_Click"
                            Text="Update Payment" CssClass="btn btn-sm btn-success" Visible="false" OnClientClick="return ValidateGrid(2);" />--%>
                        </div>
                    </div>
                    <div class="clearfix">
                    </div>
                </div>
            </div>
        </ContentTemplate>
        <Triggers>
            <%--  <asp:PostBackTrigger ControlID="btnUpdatePayment" />--%>
        </Triggers>
    </asp:UpdatePanel>
    <asp:UpdateProgress ID="updateProgress" runat="server">
        <ProgressTemplate>
            <div style="position: fixed; text-align: center; height: 100%; width: 100%; top: 0;
                right: 0; left: 0; z-index: 9999999; -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
                filter: alpha(opacity=50); -moz-opacity: 0.5; opacity: 0.5; background-color: #000;">
                <asp:Image ID="imgUpdateProgress" runat="server" ImageUrl="~/images/loading.gif"
                    AlternateText="Loading ..." ToolTip="Loading ..." Style="padding: 10px; position: fixed;
                    top: 40%; left: 50%;" Height="100px" Width="100px" />
            </div>
        </ProgressTemplate>
    </asp:UpdateProgress>
    </form>
</body>
</html>
