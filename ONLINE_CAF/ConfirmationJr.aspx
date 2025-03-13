﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ConfirmationJr.aspx.cs" Inherits="ONLINE_CAF_ConfirmationJr" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Common Application Form</title>
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <script src="../js/jquery-1.12.4.js" type="text/javascript"></script>
    <script language="javascript" type="text/javascript">
        window.history.forward();
        function openAppCopy() {
            window.open('CAF.aspx', 'ApplicantCopy', 'left=20,top=20,width=700,height=700,menubar=1,resizable=1,scrollbars=1');
        }
    </script>
    <link href="../Styles/CAF.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        @font-face {
            font-family: 'Conv_Roboto-Regular';
            src: url('../fonts/Roboto-Regular.eot');
            src: local('?'), url('../fonts/Roboto-Regular.woff') format('woff'), url('../fonts/Roboto-Regular.ttf') format('truetype'), url('../fonts/Roboto-Regular.svg') format('svg');
            font-weight: normal;
            font-style: normal;
        }

        body {
            font-size: 16px;
            border: none;
            font-family: 'Conv_Roboto-Regular', Sans-Serif;
        }

        .outerbox {
            background: url(../images/login-bg.jpg) no-repeat;
            width: 45%;
            margin: auto;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            background-size: cover;
            min-height: 250px;
            margin-top: 4em;
        }

        .outerbox-cograts {
            width: 45%;
            margin: auto;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            background-size: cover;
            min-height: 250px;
            margin-top: 4em;
        }

        .outerbox-cogratsPAD {
            padding: 0px 20px;
        }


        .information {
            background-color: #FFFFFF;
            font-size: 16px;
            border: none;
            padding-top: 10px;
            font-family: 'Conv_Roboto-Regular', Sans-Serif;
        }

        .header {
            background-color: #00bd28;
            border-bottom: solid 1px #ececec;
            text-align: center;
            padding: 20px;
            color: #fff;
        }

        h1 {
            font-size: 40px;
            font-family: 'Conv_Roboto-Regular', Sans-Serif;
            font-weight: normal;
            display: block;
            text-align: center;
        }

            h1 span {
                display: block;
                margin-top: -5px;
                text-align: center;
            }

            h1 img {
                display: block;
                float: left;
                margin-top: 10px;
                width: 45px;
            }

        .text-green {
            color: #00bd28;
        }

        .text-red {
            color: #fff;
            margin: 0px 0px 7px 0px;
        }

        .sus {
            color: #fff;
            font-size: 18px;
        }

        .important {
            width: 100%;
            font-size: 25px;
            text-align: center;
            margin: 4px 0 20px 14px;
            color: #626262;
        }

        .submitBtn {
            background: #0b7c9e url(../imgSams/print-icon.png) 20px center no-repeat;
            font-weight: 600;
            border-radius: 10px;
            -moz-border-radius: 10px;
            -webkit-border-radius: 10px;
            border: none;
            padding: 12px 20px 12px 50px;
            font-size: inherit;
            cursor: pointer;
        }

            .submitBtn:hover {
                background-color: #04536b;
            }

        .redtxtind {
            font-size: inherit;
            font-family: 'Conv_Roboto-Regular', Sans-Serif;
            margin: 12px 0;
            font-size: 13px;
            text-align: center;
        }

        .footer-section {
            background-color: #f6f6f6;
            border-top: solid 1px #ececec;
            padding: 15px;
            text-align: center;
        }

            .footer-section span {
                font-size: 20px;
            }

        .print-section {
            text-align: center;
            margin: 30px 0;
        }

        #txtOTP {
            height: 20px;
        }

        #DivOTP {
            padding: 55px 35px 35px 35px;
            margin-top: 4em;
            text-align: right;
        }

        .otp-text {
            color: #fff;
            font-weight: 600;
            font-size: 25px;
        }

        .msg-text {
            color: #FF0000;
            font-weight: 300;
            font-size: 20px;
        }

        .btn-submit {
            background: #ffb549;
            padding: 4px 12px;
            font-size: 14px;
            border: 1px solid #fff8ee;
            cursor: pointer;
        }

        #DivOTP span.resend {
            display: block;
            text-align: right;
            padding-right: 2px;
            padding-top: 25px;
        }

        .btn-danger {
            background: #a7491b;
            padding: 4px 12px;
            font-size: 14px;
            border: 1px solid #fff8ee;
            cursor: pointer;
            color: #fff;
        }

        .subject {
            color: #ffd08b;
            padding: 10px;
            font-size: 14px;
            line-height: 20px;
            border: 1px solid #866e4c;
            text-align: left;
            background-color: rgba(0, 0, 0, 0.5);
        }
    </style>
    <script type="text/javascript">
        var myVar = setInterval(myTimer, 1000);
        var count = 300;
        function myTimer() {
            count = count - 1;
            document.getElementById("mycounter").innerHTML = count + " Seconds(s)";
        }
        setTimeout(function () {

            document.getElementById("btnSendOTP").value = "Resend";
            document.getElementById("btnSendOTP").disabled = false;
            document.getElementById("mycounter").innerHTML = '';
            clearInterval(myVar);
        }, 300000);
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="outerbox" id="DivOTP" runat="server">
            <asp:Label ID="lbllabel" CssClass="otp-text" runat="server" Text="Enter your OTP code :"></asp:Label>
            <asp:TextBox ID="txtOTP" runat="server" MaxLength="10" autocomplete="off" onpaste="return false;"
                onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false"></asp:TextBox>
            <asp:Button ID="btnSubmit" runat="server" CssClass="btn-submit" Text="Submit" OnClick="btnSubmit_Click" />
            <span class="resend">
                <asp:Label ID="lblMsg" runat="server" Text="" CssClass="msg-text"></asp:Label>

                <asp:Button ID="btnSendOTP" CssClass="btn-danger" runat="server" Text="Wait for 5 min to Resend OTP"
                    OnClick="btnSendOTP_Click" Enabled="false" />
                <br />
                <span id="mycounter" style="color: white;"></span>
            </span>
            <p class="subject">
                OTP has been sent to your given Mobile No. and Email ID.<br />
                The OTP is valid for 5 minutes.
            </p>
            <p class="subject">
                आपके दिए हुए मोबाइल और ई-मेल आई.डी. पर OTP भेजा गया है | यह OTP केवल पांच मिनट तक
            ही मान्य है |
            </p>
            <%--All communication during the e-Admission will be made to the mobile number & email address used during the registration in this portal. One mobile number or email address can't be used for multiple registrations.--%>
            <asp:HiddenField ID="hdnMob" runat="server" />
            <asp:HiddenField ID="hdnEmail" runat="server" />
            <asp:HiddenField ID="hdnAppNm" runat="server" />
            <asp:HiddenField ID="hdnAppId" runat="server" />
        </div>
    </form>
</body>
</html>
