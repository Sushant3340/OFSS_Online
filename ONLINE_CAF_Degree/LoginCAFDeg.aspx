<%--#region Page Info
//**********************************************************************************************
// File Name             : LoginCAFDeg.aspx
// Description           : Login Page to print CAF for Junior 
// Created by            : Debaprasad Samal
// Created on            :    28/03/2018
// Modification History  :
//                           <CR no.>                      <Date>             <Modified by>                    <Modification Summary>' 
//Function Name          : 
// Procedures Used       :  USP_PrintCAF
// **********************************************************************************************'*****************
#endregion--%>
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="LoginCAFDeg.aspx.cs" Inherits="ONLINE_CAF_LoginCAFDeg" %>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <link href="../css/style2.css" rel="stylesheet" type="text/css" />
    <link href="../css/sm-mintSams.css" rel="stylesheet" type="text/css" />
    <link href="../css/defaultSams.css" rel="stylesheet" type="text/css" />
    <title>Bihar School Examination Board, Government of Bihar </title>
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <link href="../Styles/style2.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" language="javascript">

        function ValidateFunc() {
            if (document.getElementById('txtUID').value == '') {
                alert('Reference No. Can Not Left Blank');
                document.getElementById('txtUID').focus();
                return false;
            }
            if (document.getElementById('txtPWD').value == '') {
                alert('Roll No. Can Not Left Blank');
                document.getElementById('txtPWD').focus();
                return false;
            }
        }
        function IsSpecialCharacter(Object, msg) {
            var Arr = new Array();
            var k;
            Arr = Object.split(',');

            for (k = 0; k < Arr.length; k++) {
                var str1 = document.getElementById(Arr[k]).value;

                for (var i = 0; i < str1.length; i++) {
                    var ch = str1.substring(i, i + 1);
                    if ((ch == "'") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "+") || (ch == "/") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == ",") || (ch == "=")) {
                        alert(msg);
                        document.getElementById(Arr[k]).value = '';
                        document.getElementById(Arr[k]).focus();
                        return false;
                    }
                }
            }
            return true;
        }   
    </script>
    <link href="../css/defaultSams.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        .loginheader
        {
            color: #FFF;
            padding: 10px;
            text-align: center;
            font-size: 22px;
            background-color: #0B72B5;
        }
        .loginbtn1
        {
            background-color: #00CA3E;
            font-size: 14px;
            font-weight: normal;
            padding: 5px 15px 10px 15px;
            border-radius: 3px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            margin: 10px 0 0 2px;
        }
        .input
        {
            background: #FFF;
        }
    </style>
</head>
<body class="cbp-spmenu-push">
    <form name="form1" runat="server" id="form1">
    <!--Header Part-->
    <script type="text/javascript" src="../js/jquery.js"></script>
    <div data-spy="affix" data-offset-top="0" class="afxTop">
        <div class="topLink">
            <div class="wrap">
                <div class="rightBg">
                    <div class="leftBg">
                        <div class="helpline screenReader" title="e-Admission Helpline 155335">
                            <img src="../images/helpline.png" alt="Helpline" align="absmiddle" />
                            e-Admission Helpline <span>155335 / 1800-345-6770</span></div>
                        <div class="clear">
                        </div>
                    </div>
                </div>
                <div class="clear">
                </div>
            </div>
        </div>
        <div class="header clearFix">
            <div class="bg-white ">
                <div class="wrap">
                    <a href="../SAMS/index.aspx" class="screenReader" title="Student Academic Management System (SAMS)">
                        <img src="../images/sams_logo.png" alt="Student Academic Management System (SAMS)"
                            class="floatLeft logo " /></a>
                    <!--Menu Part-->
                    <div class="menu">
                        <a href="javascript:void(0);" id="showRight" class="responsive-menu-icon"></a>
                        <div class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
                            <ul id="main-menu" class="sm sm-mint">
                                <li><a href="../SAMS/index.aspx" class="screenReader" title="Home">Home</a></li>
                                <li><a href="../DHE/Feedback.aspx" target="_blank" class="screenReader" title="Feedback">
                                    Feedback</a></li>
                                <li><a href="http://sams.dheorissa.in/" target="_blank" class="screenReader" title="e-Space">
                                    e-Space</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="cmProfile" title="Shri Naveen Patnaik, Hon&rsquo; ble Chief Minister">
                        <div class="textBox screenReader" title="Shri Naveen Patnaik, Hon&rsquo; ble Chief Minister">
                            <strong>Shri Naveen Patnaik</strong><br>
                            Hon&rsquo;ble Chief Minister</div>
                    </div>
                    <div class="clear">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="clear">
    </div>
    <div class="container bg-white m-r-b12 ">
        <div class="inner">
            <img src="../images/banner_in.jpg" alt="Student Academic Management System (SAMS)"
                title="Student Academic Management System (SAMS)" class="screenReader" width="100%" />
        </div>
    </div>
    <div class="container shdow bg-white">
        <div class="pd-12" style="padding-right: 0;">
            <!-- Navigation -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="center">
                        <div style="margin: auto; width: 400px;">
                            <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td height="80" bgcolor="#FFFFFF">
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td height="333" valign="top" bgcolor="#FFFFFF">
                                        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="portletHeader1">
                                                        <tr>
                                                            <td class="loginheader">
                                                                <img src="../images/print-icon.png" width="30" alt="print-icon" align="absmiddle" />
                                                                &nbsp; Login To Print CAF
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" bgcolor="#F5F5F5">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="2">
                                                                    <tr>
                                                                        <td width="25" rowspan="7" valign="top">
                                                                            &nbsp;
                                                                        </td>
                                                                        <td height="10">
                                                                            &nbsp;
                                                                        </td>
                                                                        <td width="25">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="25">
                                                                            <strong>Reference No.</strong>
                                                                        </td>
                                                                        <td>
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <asp:TextBox MaxLength="15" ID="txtUID" runat="server" class="input" onKeyUp="return IsSpecialCharacter(&#39;txtUID&#39;,&#39;Special Characters Are Not Allowed&#39;);"
                                                                                Style="width: 90%;"></asp:TextBox>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="10">
                                                                        </td>
                                                                        <td>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="25">
                                                                            <strong>Roll No.</strong>
                                                                        </td>
                                                                        <td>
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <asp:TextBox TextMode="Password" MaxLength="20" ID="txtPWD" runat="server" class="input"
                                                                                onKeyUp="return IsSpecialCharacter(&#39;txtPWD&#39;,&#39;Special Characters Are Not Allowed&#39;);"
                                                                                Style="width: 90%;"></asp:TextBox>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <label>
                                                                                <asp:Button ID="btnSubmit" runat="server" Text="Login" OnClientClick="return ValidateFunc();"
                                                                                    class="loginbtn1" onclick="btnSubmit_Click" />
                                                                            </label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="20" valign="top">
                                                                            &nbsp;
                                                                        </td>
                                                                        <td colspan="2">
                                                                            &nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td background="../images/ImagesNew/sh3.jpg" style="background-repeat: no-repeat;
                                                    height: 13px;">
                                                    <img src="../images/ImagesNew/spacer.gif" width="1" height="1" alt="" />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <script type="text/javascript" src="../js/jquery.smartmenus.js"></script>
    <script type="text/javascript" src="../js/menuResponsive.js"></script>
    <script type="text/javascript" src="../js/customSams.js"></script>
    <div class="footer clearFix">
        <div class="floatLeft">
            <a href="../SAMS/index.aspx" class="screenReader" title="Home">Home</a> &nbsp; |
            &nbsp; <a href="../DHE/Feedback.aspx" target="_blank" class="screenReader" title="Feedback">
                Feedback</a> &nbsp; | &nbsp; <a href="#" class="screenReader" title="RTI">RTI</a>
            &nbsp; | &nbsp; <a href="../DHE/SiteMap.aspx" class="screenReader" title="Sitemap">Sitemap</a>
            <!--&nbsp; | &nbsp; <a href="javascript:void(0);" class="screenReader" title="Contact Us">Contact Us</a>-->
            <br>
            <span class="screenReader" title="Copyright &copy; 2018, All Rights Reserved"
                id="copy"></span>
        </div>
        <div class="socialIcons">
            <a href="https://twitter.com/DHEOdisha" target="_blank" class="twitter-ico screenReader"
                title="Twitter"></a><a href="https://www.facebook.com/pages/E-Admission-Odisha/210038572349980"
                    target="_blank" class="facebook-ico screenReader" title="Facebook"></a><a href="#"
                        onclick="window.open('Instruction.html','','width=600px height=500px scrollbar=no menubars=yes')"
                        class="youtuebe-ico screenReader" title="Youtube"></a>
        </div>
    </div>
    <p id="back-top">
        <a href="#top" title="Go to Top"><span>
            <img src="../images/go-top.png" alt="go to top" />
        </span></a>
    </p>
    <script type="text/javascript">
//<![CDATA[
        WebForm_AutoFocus('txtUID');//]]>
    </script>
    </form>
    <script type="text/javascript" language="javascript">
        $(document).ready(function () {
            loadNavigation('LoginCAFEdit', '', 'Login To Print CAF', '', 'Login To Print CAF');
        });
        //Menu
        $(function () {
            $('#main-menu').smartmenus({
                subMenusSubOffsetX: 6,
                subMenusSubOffsetY: -8
            });
        });
    </script>
</body>
</html>
