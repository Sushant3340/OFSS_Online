<%@ Control Language="C#" AutoEventWireup="true" CodeFile="RegStudentHeader.ascx.cs"
    Inherits="includes_RegStudentHeader" %>
<script type="text/javascript" language="javascript">
    var ModalTitle = "OFSS :: Online Facilitation System for Students, Govt. of Bihar";
    var MsgSubmitCon = "Are You Sure Want To Submit?";
    var MsgUpdateCon = "Are You Sure Want To Update?";
    var MsgDeleteCon = "Are You Sure Want To Delete?";
    var MsgResetCon = "Are You Sure Want To Reset?";
    var MsgCancelCon = "Are You Sure Want To Cancel?";
    var MsgEditCon = "Are You Sure Want To Edit?";

    var MsgSubmit = "Data Saved Successfully!";
    var MsgUpdate = "Data Updated Successfully!";
    var MsgDelete = "Data Deleted Successfully!";
    var MsgExist = "Duplicate Record(s) Found!";
    var MsgDepend = "Data Dependency Exists!";
</script>
<div id="navbar" class="navbar custom-new-header navbar-default ace-save-state ">
    <div class="navbar-container ace-save-state" id="navbar-container">
        <asp:ScriptManager ID="ScriptManager1" runat="server">
        </asp:ScriptManager>
        <asp:HiddenField ID="hdnImage" runat="server" />
        <asp:HiddenField ID="hdnBlockID" runat="server" Value="0" />
        <button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler"
            data-target="#sidebar">
            <span class="sr-only">Toggle sidebar</span> <span class="icon-bar"></span><span class="icon-bar">
            </span><span class="icon-bar"></span>
        </button>
        <div class="navbar-logo pull-left">
            <a href="#" class="navbar-brand">
                <asp:HiddenField ID="hdnImgAppl" runat="server" />
                <img class="img-fluid" src="../images/sams-logo.png" alt="Theme-Logo">
                <%-- <img src="../images/sams-logo-dash.png">--%>
            </a>
        </div>
        <div class="navbar-buttons navbar-header pull-right" role="navigation">
            <ul class="nav ace-nav">
                <li class="light-blue">
                    <asp:Image ID="ImgAppl" runat="server" class="nav-user-photo" Style="border-width: 0px;" />
                    <span class="user-info">Welcome <span><small>
                        <asp:Label runat="server" ID="lblStuName" Text=""></asp:Label></small> </span>
                    </span>
                    <ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                        <li><a href="../ManageStudent/UserRegistration.aspx?Logout=y"><i class="ace-icon fa fa-power-off">
                        </i>Logout </a></li>
                    </ul>
                </li>
                <% if (Session["stype"] != null && Session["stype"].ToString() == "1")
                   {%>
                <li><a href="../StudentLogin/StudentLogout_Jun.aspx"><i class="ace-icon fa fa-power-off">
                </i></a></li>
                <%}
                   else
                   {  %>
                <li><a href="../StudentLogin/StudentLogout_Deg.aspx"><i class="ace-icon fa fa-power-off">
                </i></a></li>
                <%} %>
            </ul>
        </div>
    </div>
    <!-- /.navbar-container -->
</div>
