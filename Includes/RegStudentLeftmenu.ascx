<%@ Control Language="C#" AutoEventWireup="true" CodeFile="RegStudentLeftmenu.ascx.cs"
    Inherits="includes_RegStudentLeftmenu" %>
<div id="sidebar" class="sidebar new-sidebar responsive ace-save-state" data-sidebar="true" data-sidebar-scroll="true"
    data-sidebar-hover="true">
    <!-- Left Menu for diploma user Login -->
    <div id="divDiploma" runat="server">
        <ul class="nav nav-list">
            <li class=""><a id="aDashBoard" runat="server"><i class="menu-icon fa fa-tachometer">
            </i><span class="menu-text">Dashboard </span></a></li>

           <%-- Personal Information Edit link--%>
            <li class="" id="lknPersonalJun" runat="server" visible="false" ><a id="aPersonalInfoJun" runat="server" visible="false"><i class="menu-icon fa fa-user"></i>
                <span class="menu-text">Personal Information </span></a></li>
             <li class="" id="lknPersonalDeg" runat="server" visible="false"><a id="aPersonalInfoDeg" runat="server" visible="false"><i class="menu-icon fa fa-user"></i>
                <span class="menu-text">Personal Information </span></a></li>

           <%-- Option Preference Edit link--%>
            <li class="" id="lknOptionJun" runat="server" visible="false"><a id="aOptionJun" runat="server" visible="false"><i class="menu-icon fa fa-caret-square-o-right">
            </i><span class="menu-text">Option / Preference </span></a></li>
              <li class="" id="lknOptionDeg" runat="server" visible="false"><a id="aOptionDeg" runat="server" visible="false"><i class="menu-icon fa fa-caret-square-o-right">
            </i><span class="menu-text">Option / Preference </span></a></li>

            <%-- Fee Payment link--%>
            <li class="" id="lnkPaymentJun" runat="server" visible="false"><a id="aFeePaymentJun" runat="server" visible="false" target="_blank"><i
                class="menu-icon fa fa-inr"></i><span class="menu-text">Fees Payment </span></a>
            </li>
            <li class="" id="lnkPaymentDeg" runat="server" visible="false"><a id="aFeePaymentDeg" runat="server" visible="false" target="_blank"><i
                class="menu-icon fa fa-inr"></i><span class="menu-text">Fees Payment </span></a>
            </li>

             <%-- CAF Print link--%>
            <li class="" id="lknPrintJun" runat="server" visible="false"><a target="_blank" id="aPrintJun" runat="server" visible="false"><i class="menu-icon fa fa-newspaper-o"
                aria-hidden="true"></i><span class="menu-text">Print CAF</span></a></li>
            <li class="" id="lknPrintDeg" runat="server" visible="false"><a target="_blank" id="aPrintDeg" runat="server" visible="false"><i class="menu-icon fa fa-newspaper-o"
                aria-hidden="true"></i><span class="menu-text">Print CAF</span></a></li>

              <%-- Print Spot Admission CAF--%>

             <li class="" id="lknSpotPrintJun" runat="server" visible="false" ><a id="aSpotPrintJun" runat="server" visible="false" target="_blank"><i class="menu-icon fa fa-comments"
                aria-hidden="true"></i><span class="menu-text">Print Spot CAF</span></a></li>

              <li class="" id="lknSpotPrintDeg" runat="server" visible="false" ><a id="aSpotPrintDeg" runat="server" visible="false" target="_blank"><i class="menu-icon fa fa-comments"
                aria-hidden="true"></i><span class="menu-text">Print Spot CAF</span></a></li>

                 <%-- Print Quota Admission CAF--%>

             <li class="" id="lknQuotaPrintJun" runat="server" visible="false" ><a id="aQuotaPrintJun" runat="server" visible="false" target="_blank"><i class="menu-icon fa fa-comments"
                aria-hidden="true"></i><span class="menu-text">Print Quota CAF</span></a></li>

              <li class="" id="lknQuotaPrintDeg" runat="server" visible="false" ><a id="aQuotaPrintDeg" runat="server" visible="false" target="_blank"><i class="menu-icon fa fa-comments"
                aria-hidden="true"></i><span class="menu-text">Print Quota CAF</span></a></li>

            <%-- Grievance link--%>

            <li class="" id="lknFeedbackJun" runat="server" visible="false"><a id="aFeedbackJun" runat="server" visible="false" ><i class="menu-icon fa fa-comments"
                aria-hidden="true"></i><span class="menu-text">Grievance</span></a></li>
             <li class="" id="lknFeedbackDeg" runat="server" visible="false"><a id="aFeedbackDeg" runat="server" visible="false" ><i class="menu-icon fa fa-comments"
                aria-hidden="true"></i><span class="menu-text">Grievance</span></a></li>

            <%-- Slide up Selection link--%>

            <li class="" id="lknSlideupDeg" runat="server" visible="false"><a id="aPreferenceDeg" runat="server"
                visible="false"><i class="menu-icon fa fa-comments" aria-hidden="true"></i><span
                    class="menu-text">Slide Up Selection</span></a></li>
            <li class="" id="lknSlideupJun" runat="server" visible="false"><a id="aPreferenceJun" runat="server" visible="false"><i class="menu-icon fa fa-comments"
                aria-hidden="true"></i><span class="menu-text">Slide Up Selection</span></a></li>


           <%-- Intimation Download link--%>
            <li class="" id="LknIntimationDeg" runat="server" visible="false" ><a id="aStudentIntimationDeg" runat="server"
                visible="false"><i class="menu-icon fa fa-comments" aria-hidden="true"></i><span
                    class="menu-text">Download Intimation</span></a></li>
            <li class="" id="LknIntimationJun" runat="server" visible="false" ><a id="aStudentIntimationJun" runat="server" visible="false" target="_blank"><i class="menu-icon fa fa-comments"
                aria-hidden="true"></i><span class="menu-text">Download Intimation</span></a></li>
            <%--<li class=""><a id="aMigrationDeg" runat="server" visible="false"><i class="menu-icon fa fa-comments"
                aria-hidden="true"></i><span class="menu-text">Apply for Certificate</span></a></li>--%>


             <%-- Print Transfer link--%>

                <li class="" id="LknPrintTransfer" runat="server" visible="false"><a target="_blank" id="aTransferPrintJun" runat="server" visible="false"><i class="menu-icon fa fa-newspaper-o"
                aria-hidden="true"></i><span class="menu-text">Print College Transfer Form</span></a></li>

        </ul>
    </div>
    <div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
        <i id="sidebar-toggle-icon" class="ace-save-state ace-icon fa fa-bars" data-icon1="ace-icon fa fa-bars"
            data-icon2="ace-icon fa fa-angle-double-right"></i>
    </div>
</div>
