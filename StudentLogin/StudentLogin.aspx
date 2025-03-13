<%@ Page Language="C#" AutoEventWireup="true" CodeFile="StudentLogin.aspx.cs" Inherits="StudentLogin_StudentLogin" %>

<%@ Register Src="~/includes/StudentDoctype.ascx" TagPrefix="studoc" TagName="studoctpe" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <studoc:studoctpe ID="stdoc" runat="server" />
    <title>Welcome :: Online Facilitation System for Students (OFSS)</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="About Department, Notice, About Student Academic Management System,About OFSS, The BSEB of the State Looks after education at University, Post-Graduate, Graduate and Higher Secondary level. It also provides Vocational Education in order to prepare the Youth for self-employment. Higher Education Department facilitate to students for e-Admission in both Intermediate and Degree Colleges Students." />
    <meta name="publisher" content="BSEB" />
    <!--[if lt IE 9]>
<script src="../js/html5.js"></script>
<![endif]-->
    <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="../css/Userlogin.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <script src="../js/jquery-2.2.4.js" type="text/javascript"></script>
    <script src="../js/bootstrap.min.js" type="text/javascript"></script>
    <script src="<%=Page.ResolveUrl("~/Script/md5.js")%>" type="text/javascript"></script>
    <script src="../Script/aes.js" type="text/javascript"></script>
    <style>
        body{
            font-family: "Poppins", serif;
             background: linear-gradient(90deg, rgb(174 168 251) 0%, rgb(233 183 228) 75%, rgb(237 188 189) 97%);
        }
        a.usermanual
        {
            font-size: 18px;
            font-weight: bold;
            padding-top: 8px;
        }
        a.forgot
        {
            margin-top: 10px;
        }
        a.usermanual:hover i
        {
            background: #d6b408;
        }
    </style>
</head>
<body class="cbp-spmenu-push">
    <form id="frmNotice" runat="server" defaultbutton="btnSIGNIN">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <asp:HiddenField ID="hidSlt" runat="server" />
    <asp:HiddenField ID="hdnPassword" runat="server" />
    <div class="loginbody new-user-login-box">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="inner-content">
                        <div class="loginbody-left">
                            <div class="LogoImg">
                                <img src="../images/login-inner-img.png" />
                            </div>
                        </div>
                        <div class="loginbody-right">
                            <div class="logoTop">
                                <img class="img-fluid" src="../images/sams-logo.png" alt="Theme-Logo"></div>
                            <center>
                                <h3>
                                    INTERMEDIATE STUDENT'S LOG <span style="color: #d15b47; padding-left: 10px;"><i class="fa fa-user"
                                        aria-hidden="true"></i></span>
                                </h3>
                            </center>
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <label class="label-txt">अपना मोबाइल नंबर नीचे भरें जिसके माध्यम से आपने Application Form भरा है !  <span class="mandatory">*</span></label>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-phone-square" aria-hidden="true"></i>
                                        </span>
                                        <asp:TextBox ID="txtSMobileNo" MaxLength="10" runat="server" class="form-control"
                                            placeholder="Mobile Number" oncopy="return false" onpaste="return true" oncut="return false"
                                            autocomplete="off"></asp:TextBox>
                                        <asp:HiddenField ID="hdnUsername" runat="server" />
                                        <cc1:FilteredTextBoxExtender ID="FTBEMobileNo" runat="server" FilterMode="ValidChars"
                                            ValidChars="0,1,2,3,4,5,6,7,8,9" FilterType="Numbers,LowercaseLetters,UppercaseLetters,Custom"
                                            TargetControlID="txtSMobileNo">
                                        </cc1:FilteredTextBoxExtender>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <label class="label-txt">पासवर्ड यहाँ नीचे भरें !  <span class="mandatory">*</span></label>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                        </span>
                                        <asp:TextBox ID="txtSPwd" runat="server" class="form-control" placeholder="Password"
                                            TextMode="Password" oncopy="return false" onpaste="return true" oncut="return false"
                                            autocomplete="off" MaxLength="40"></asp:TextBox>
                                        <cc1:FilteredTextBoxExtender ID="FEConfirm" runat="server" Enabled="True" FilterType="Custom,LowercaseLetters,UppercaseLetters,Numbers"
                                            TargetControlID="txtSPwd" FilterMode="ValidChars" ValidChars="#?!@$^*-_">
                                        </cc1:FilteredTextBoxExtender>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <div class="refrs-brdr">
                                        <asp:UpdatePanel ID="updCaptcha" runat="server">
                                            <ContentTemplate>
                                                <div style="float: left;" class="captcha-text">
                                                    <asp:Image ID="imgCapcha" runat="server" AlternateText="code" />
                                                </div>
                                                <%--<div class="captcha-text">
                                                    <asp:Label ID="lblCaptcha" runat="server" ondragstart="return false" draggable="false"></asp:Label></div>--%>
                                            </ContentTemplate>
                                            <Triggers>
                                                <asp:AsyncPostBackTrigger ControlID="ImgbtnRefrsh" EventName="Click" />
                                            </Triggers>
                                        </asp:UpdatePanel>
                                        <asp:ImageButton ID="ImgbtnRefrsh" TabIndex="0" runat="server" ImageUrl="~/images/stu-refresh.png"
                                            ToolTip="Refresh" OnClick="ImgbtnRefrsh_Click" />
                                        <div class="clearfix">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12 seson">
                                     <label class="label-txt">ऊपर दिए गए CAPTCHA को यहाँ नीचे भरें एवं सबमिट बटन पर क्लिक करें | <span class="mandatory">*</span></label>
                                    <asp:TextBox CssClass="input form-control" ID="txtRandno" runat="server" placeholder="Enter captcha"
                                        MaxLength="6" oncopy="return false" onpaste="return false" oncut="return false"
                                        autocomplete="off"></asp:TextBox>
                                    <cc1:FilteredTextBoxExtender ID="FilteredTextBoxExtender1" runat="server" FilterMode="ValidChars"
                                        ValidChars="0,1,2,3,4,5,6,7,8,9" FilterType="Numbers" TargetControlID="txtRandno">
                                    </cc1:FilteredTextBoxExtender>
                                    <span id="Captcha" runat="server"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12 stdnt-btn">
                                    <asp:Button ID="btnSIGNIN" runat="server" Text="Login" class="btn btn-danger btn-block"
                                        OnClientClick="return Validation()" OnClick="btnSIGNIN_Click" Style="font-size: 18px;
                                        font-weight: bold;" />
                                </div>
                            </div>
                            <%--<div class="form-group row">
                                <div class="col-sm-12 stdnt-btn">
                                    <a id="A1" href="../ManageStudent/NewUser.aspx" target="_blank" class="usermanual btn btn-primary btn-block hvr-sweep-to-right">
                                        SIGN UP (New User) <i class="fa fa-plus" aria-hidden="true" style="float: right;
                                            margin: 0px;"></i></a>
                                </div>
                            </div>--%>
                            <div class="row">
                                <div class="col-sm-12">
                                    <asp:Label ID="lblCapMsg" runat="server" Visible="false" Font-Size="12px"></asp:Label>
                                    <asp:Label ID="lblMsg" runat="server" Style="color: #ffa03b; margin-top: 5px; display: block;"></asp:Label>
                                </div>
                            </div>
                            <center>
                                <a class="forgot" href="ForgotPassword.aspx" style="font-weight: bold;">Forgot Password?</a></center>
                            <%--   <div class="row">
                            <div class="col-sm-12">
                             <ul class="usr">
              
                                <a id="" href="#" target="_blank" class="usermanual">User manual</a>
                                    <asp:HiddenField ID="hdnQueryString" runat="server" />

                            </ul>
                            </div>
                           </div>--%>
                            <div class="clearfix">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
        <div class="clearfix">
        </div>
    </div>
    </form>
    <script language="javascript" type="text/javascript">

        function Validation() {
            debugger;
            var str2;
            var slt;
            slt = '<%=ViewState["salt"].ToString() %>';

            document.getElementById("hidSlt").value = slt;
            str2 = hex_md5(document.getElementById("txtSPwd").value).toUpperCase() + slt;

            if (!BlankTextBox('txtSMobileNo', 'Mobile Number')) {
                return false;
            }
            if (!BlankTextBox('txtSPwd', 'Password')) {
                return false;
            }
            if (!BlankTextBox('txtRandno', 'Captcha')) {
                return false;
            }

            if (document.getElementById("txtSPwd").value != "") {

                document.getElementById("hdnPassword").value = hex_md5(str2).toUpperCase();
                document.getElementById("txtSPwd").value = hex_md5(str2).toUpperCase();
            }

            var key = CryptoJS.enc.Utf8.parse('8080808080808080');
            var iv = CryptoJS.enc.Utf8.parse('8080808080808080');
            var encryptedlogin = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(document.getElementById("txtSMobileNo").value), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });

            document.getElementById("txtSMobileNo").value = encryptedlogin;
            $('#txtSMobileNo').attr('type', 'password');
            //$('#txtSPwd').attr('type', 'text');
        }

        //        $("#frmNotice").submit(function () {
        //            $("#hdnUsername").val($("#txtSMobileNo").val());

        //            var str2;
        //            var slt;
        //            slt = '<%=ViewState["salt"].ToString() %>';

        //            document.getElementById("hidSlt").value = slt;
        //            str2 = hex_md5(document.getElementById("txtSPwd").value).toUpperCase() + slt;

        //            document.getElementById("hdnPassword").value = hex_md5(str2).toUpperCase();
        //            // $("#hdnPassword").val($("#txtSPwd").val());
        //            $("#txtSPwd").attr('type', 'text');
        //        });

        //        $("#txtSMobileNo, #txtSPwd").keypress(function (e) {
        //            if (e.which == 13) {
        //                $("#frmNotice").submit();
        //            }
        //        });

        //        $("#btnSIGNIN").click(function () {
        //            $("#hdnUsername").val($("#txtSMobileNo").val());

        //            var str2;
        //            var slt;
        //            slt = '<%=ViewState["salt"].ToString() %>';

        //            document.getElementById("hidSlt").value = slt;
        //            str2 = hex_md5(document.getElementById("txtSPwd").value).toUpperCase() + slt;

        //            document.getElementById("hdnPassword").value = hex_md5(str2).toUpperCase();
        //            // $("#hdnPassword").val($("#txtSPwd").val());
        //            $("#txtSPwd").attr('type', 'text');
        //        });


    </script>
</body>
</html>
