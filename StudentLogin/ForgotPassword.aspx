<%--#region Page Info
//**********************************************************************************************
// File Name             : ForgotPassword.aspx
// Description           : Password recovery
// Created by            : Debaprasad Samal
// Created on            :  27/02/2018
// Modification History  :
//                           <CR no.>                      <Date>             <Modified by>                    <Modification Summary>' 
//Function Name          : 
// Procedures Used       :  USP_NewUserRegistration
// **********************************************************************************************'*****************
#endregion--%>

<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ForgotPassword.aspx.cs" Inherits="ManageStudent_ForgotPassword" %>

<%@ Register Src="~/includes/StudentDoctype.ascx" TagPrefix="studoc" TagName="studoctpe" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<!DOCTYPE html>
<html lang="en">
<head runat="server">
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
    <style>
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
        .OrStyle
        {
            margin-top: 6px;
            font-weight: bold;
            font-size: 12px;
            font-family: Arial;
        }
         body{
             font-family: "Poppins", serif;
              background: linear-gradient(90deg, rgb(174 168 251) 0%, rgb(233 183 228) 75%, rgb(237 188 189) 97%);
         }
    </style>
</head>
<body class="cbp-spmenu-push">
    <form id="frmNotice" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div class="loginbody new-user-login-box forgot-page">
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
                                    Forgot Password</h3>
                            </center>
                            <h5>
                                <asp:Label ID="lblAttemp" runat="server" Text=""></asp:Label></h5>
                            <div id="divOTP" runat="server">
                                <div class="form-group row newUser" style="margin-bottom: 6px">
                                    <div class="col-sm-12">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-barcode" aria-hidden="true"></i>
                                            </span>
                                            <asp:TextBox ID="txtUniqueRefId" onfocus="this.removeAttribute('readonly');" class="form-control"
                                                placeholder="Barcode No." ToolTip="Reference No." runat="server" MaxLength="20"></asp:TextBox>
                                            <cc1:FilteredTextBoxExtender ID="FEUserId" runat="server" Enabled="True" FilterType="Custom,LowercaseLetters,UppercaseLetters,Numbers"
                                                TargetControlID="txtUniqueRefId" FilterMode="ValidChars" ValidChars="@._">
                                            </cc1:FilteredTextBoxExtender>
                                        </div>
                                    </div>
                                </div>
                                <center class="OrStyle">
                                    OR
                                </center>
                                <div class="form-group row newUser">
                                    <div class="col-sm-12">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-phone-square" aria-hidden="true"></i>
                                            </span>
                                            <asp:TextBox ID="txtSMobileNo" onfocus="this.removeAttribute('readonly');" class="form-control"
                                                placeholder="Mobile No." ToolTip="Mobile No." runat="server" MaxLength="10" oncopy="return false"
                                                onpaste="return false" oncut="return false" autocomplete="off"></asp:TextBox>
                                            <cc1:FilteredTextBoxExtender ID="FTBEMobileNo" runat="server" FilterMode="ValidChars"
                                                ValidChars="0,1,2,3,4,5,6,7,8,9" FilterType="Numbers" TargetControlID="txtSMobileNo">
                                            </cc1:FilteredTextBoxExtender>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row newUser">
                                    <div class="col-sm-12 stdnt-btn">
                                        <asp:Button ID="btnOTP" runat="server" class="btn btn-danger btn-block" Text="Generate OTP"
                                            OnClientClick="return Validation()" OnClick="btnOTP_Click" />
                                    </div>
                                </div>
                                <div class="col-sm-12 stdnt-btn" style="text-align: right; font-weight: bold;">
                                    <a id="A1" href="StudentLogin.aspx" class=""><i class="fa fa-arrow-left" aria-hidden="true">
                                    </i>&nbsp;Back to LogIn </a>
                                </div>
                            </div>
                            <div id="divSubmit" runat="server">
                                <div class="form-group row newUser">
                                    <div class="col-sm-12" style="font-size: medium;">
                                        OTP has been sent to your mobile number: <span>
                                            <asp:Literal ID="litMobile" runat="server"></asp:Literal></span>. In case you
                                        do not receive the OTP within 2 minutes, please click on the <b>Re-send</b> button
                                        to receive the OTP again.
                                    </div>
                                </div>
                                <div class="form-group row newUser">
                                    <div class="col-sm-12">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                            </span>
                                            <asp:TextBox ID="txtOTP" onfocus="this.removeAttribute('readonly');" class="form-control"
                                                placeholder="OTP" ToolTip="OTP" runat="server" MaxLength="20"></asp:TextBox>
                                            <cc1:FilteredTextBoxExtender ID="FEOTP" runat="server" Enabled="True" FilterType="Numbers"
                                                TargetControlID="txtOTP">
                                            </cc1:FilteredTextBoxExtender>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row newUser">
                                    <div class="col-sm-12">
                                        <asp:Button ID="btnSubmit" runat="server" class="btn btn-primary btn-block" Text="Submit"
                                            OnClick="btnSubmit_Click" Style="width: 45%; float: left; margin: 5px;" OnClientClick="return ValidateOTP();" />
                                        <asp:Button ID="btnResend" runat="server" class="btn btn-danger btn-block" Text="Re-send"
                                            OnClick="btnResend_Click" Style="width: 45%; float: left; margin: 5px;" />
                                        <div style="clear: both;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="divReset" runat="server">
                                <div class="form-group row newUser">
                                    <div class="col-sm-12">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                            </span>
                                            <asp:TextBox CssClass="form-control" Placeholder="Enter New Password" ID="txtPassword"
                                                runat="server" MaxLength="20" TextMode="Password"></asp:TextBox>
                                            <cc1:FilteredTextBoxExtender ID="FEPassword" runat="server" Enabled="True" FilterType="Custom,LowercaseLetters,UppercaseLetters,Numbers"
                                                TargetControlID="txtPassword" FilterMode="ValidChars" ValidChars="#?!@$^*-_">
                                            </cc1:FilteredTextBoxExtender>
                                            <asp:CustomValidator ID="CustomValidator1" runat="server" ValidationGroup="Validate1"
                                                ControlToValidate="txtPassword" Display="None" ClientValidationFunction="chkValidPassword"
                                                ErrorMessage="Password should be minimum 6 characters" SetFocusOnError="true">
                                            </asp:CustomValidator>
                                            <cc1:ValidatorCalloutExtender ID="ValidatorCalloutExtender1" runat="server" Enabled="True"
                                                TargetControlID="CustomValidator1">
                                            </cc1:ValidatorCalloutExtender>
                                        </div>
                                        <span class="mandatory">*</span>
                                    </div>
                                </div>
                                <div class="form-group row newUser">
                                    <div class="col-sm-12">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                            </span>
                                            <asp:TextBox CssClass="form-control" Placeholder="Enter Confirm Password" ID="txtConfirm"
                                                runat="server" MaxLength="20" TextMode="Password"></asp:TextBox>
                                            <cc1:FilteredTextBoxExtender ID="FEConfirm" runat="server" Enabled="True" FilterType="Custom,LowercaseLetters,UppercaseLetters,Numbers"
                                                TargetControlID="txtConfirm" FilterMode="ValidChars" ValidChars="#?!@$^*-_">
                                            </cc1:FilteredTextBoxExtender>
                                            <asp:CustomValidator ID="custom_new_password" runat="server" ValidationGroup="Validate1"
                                                ControlToValidate="txtConfirm" Display="None" ClientValidationFunction="chkValidConfirmPassword"
                                                ErrorMessage="Password should be minimum 6 characters" SetFocusOnError="true">
                                            </asp:CustomValidator>
                                            <cc1:ValidatorCalloutExtender ID="vce_new_password" runat="server" Enabled="True"
                                                TargetControlID="custom_new_password">
                                            </cc1:ValidatorCalloutExtender>
                                        </div>
                                        <span class="mandatory">*</span>
                                    </div>
                                </div>
                                <div class="form-group row newUser">
                                    <div class="col-sm-12">
                                        <asp:Button ID="btnReset" runat="server" class="btn btn-danger btn-block" Text="Submit"
                                            OnClick="btnReset_Click" OnClientClick="return Validationsbmit();" />
                                    </div>
                                </div>
                                <div style="font-size: 12px;color:Red;margin-bottom:5px;">
                                     <b>Please reset your password within 5 minutes.</b>
                                </div>
                                <div class="form-group row newUser">
                                    <div class="col-sm-12 alert alert-danger" style="font-size: 12px;">
                                        <div>
                                            <b>Note: </b>
                                        </div>
                                        <div>
                                            The password must contain at least one uppercase letter,one lowercase letter,one
                                            number and one special character(#?!@$^*-_).</div>
                                        <div>
                                            Password length should be minimum 6 characters. <b>( Example : Ofss@123 ) </b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                  </div>
             </div>
         </div>

        
        <div class="clearfix">
        </div>
    </div>
    <!-- Modal -->
    </form>
    <script src="<%=Page.ResolveUrl("~/Script/aes.js")%>" type="text/javascript"></script>
    <script type="text/javascript">


        function Validation() {
            debugger;
            if ($('#txtUniqueRefId').val() == "" && $('#txtSMobileNo').val() == "") {
                jAlert('txtUniqueRefId', '<strong>' + 'Please enter either Barcode No. or Mobile No.' + '</strong>', Title);
                return false;
            }
            if ($('#txtUniqueRefId').val() != "" && $('#txtSMobileNo').val() != "") {
                jAlert('txtUniqueRefId', '<strong>' + 'Please enter either Barcode No. or Mobile No.' + '</strong>', Title);
                return false;
            }

            if ($('#txtUniqueRefId').val() != "") {
                var key3 = CryptoJS.enc.Utf8.parse('8080808080808080');
                var iv3 = CryptoJS.enc.Utf8.parse('8080808080808080');
                var encryptedlogin = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(document.getElementById("txtUniqueRefId").value), key3,
            {
                keySize: 128 / 8,
                iv: iv3,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
                document.getElementById("txtUniqueRefId").value = encryptedlogin;
                $('#txtUniqueRefId').attr('type', 'password');
            }
            if ($('#txtSMobileNo').val() != "") {

                var key4 = CryptoJS.enc.Utf8.parse('8080808080808080');
                var iv4 = CryptoJS.enc.Utf8.parse('8080808080808080');
                var encryptedlogin = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(document.getElementById("txtSMobileNo").value), key4,
            {
                keySize: 128 / 8,
                iv: iv4,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
                document.getElementById("txtSMobileNo").value = encryptedlogin;
                $('#txtSMobileNo').attr('type', 'password');
            }
        }

        function ValidateOTP() {
            if (!BlankTextBox('txtOTP', 'OTP')) {
                return false;
            }
        }

        function Validationsbmit() {
            if (!BlankTextBox('txtOTP', 'OTP')) {
                return false;
            }
            if (!BlankTextBox('txtPassword', 'Password')) {
                return false;
            }
            if ($('#txtPassword').val().length < 6) {
                jAlert('txtPassword', '<strong>New Password must be 6 character long !</strong>', Title);
                return false;
            }
            var re = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
            var yinp = ($('#txtPassword').val().trim());
            var sml = re.test(yinp);
            if (!sml) {
                jAlert('txtPassword', '<strong>' + 'Password must contain atleast one lowercase,upercase,digit,special character and six character long' + '</strong>', Title);
                return false;
            }
            if (!BlankTextBox('txtConfirm', 'Confirm Password')) {
                return false;
            }
            var password = document.getElementById("txtPassword").value;
            var confirmPassword = document.getElementById("txtConfirm").value;
            if (password != confirmPassword) {
                jAlert('txtConfirm', '<strong>' + 'Passwords do not match.' + '</strong>', Title);
                return false;
            }

            var key = CryptoJS.enc.Utf8.parse('8080808080808080');
            var iv = CryptoJS.enc.Utf8.parse('8080808080808080');
            var encryptedlogin = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(document.getElementById("txtPassword").value), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            document.getElementById("txtPassword").value = encryptedlogin;
            $('#txtPassword').attr('type', 'password');

            var key1 = CryptoJS.enc.Utf8.parse('8080808080808080');
            var iv1 = CryptoJS.enc.Utf8.parse('8080808080808080');
            var encryptedlogin = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(document.getElementById("txtConfirm").value), key1,
            {
                keySize: 128 / 8,
                iv: iv1,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            document.getElementById("txtConfirm").value = encryptedlogin;
            $('#txtConfirm').attr('type', 'password');


        }
        function chkValidPassword(source, args) {
            var pas = document.getElementById('txtPassword').value.length;
            if (pas < 6 || pas > 20) {
                args.IsValid = false;
            }
            else {
                args.IsValid = true;
            }
        }

        function chkValidConfirmPassword(source, args) {
            var pas = document.getElementById('txtConfirm').value.length;
            if (pas < 6 || pas > 20) {
                args.IsValid = false;
            }
            else {
                args.IsValid = true;
            }
        }


    </script>
</body>
</html>
