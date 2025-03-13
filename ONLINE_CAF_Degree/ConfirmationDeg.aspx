<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ConfirmationDeg.aspx.cs"
    Inherits="ONLINE_CAF_Degree_ConfirmationDeg" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Common Application Form</title>
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <script language="javascript" type="text/javascript">

        window.history.forward();
        function Validation() {
            if (document.getElementById('txtAppId').value == "") {
                alert('Please enter an Applicant ID');
                document.getElementById('txtAppId').focus();
                return false
            }
        }

        function openAppCopy() {
            window.open('CAF.aspx', 'ApplicantCopy', 'left=20,top=20,width=700,height=700,menubar=1,resizable=1,scrollbars=1');
        }
 
    </script>
    <link href="../Styles/CAF.css" rel="stylesheet" type="text/css" />
    <%--<style type="text/css">
        body
        {
            background-image: url(../images/vintage-leaves.png);
            border: none;
        }
        .bg-confirm
        {
            background-color: rgba(255, 255, 255, 0.65);
            border: 1px solid #eaeaea;
            border-radius: 4px;
            box-shadow: 10px 10px 5px 0px rgba(154, 154, 154, 0.75);
            padding: 15px 10px;
            margin-top: 3em;
            -webkit-box-shadow: 10px 10px 5px 0px rgba(154, 154, 154, 0.75);
            -moz-box-shadow: 10px 10px 5px 0px rgba(154, 154, 154, 0.75);
        }
        .information
        {
            background-color: transparent;
            padding: 20px;
            border: 0px;
        }
        .congrats
        {
            display: block;
            margin-bottom: 5px;
        }
        .redinform
        {
            font-size: 25px;
            color: rgb(224, 95, 0);
        }
        .congo-text
        {
            font-size: 15px;
            color: #123;
        }
        .applicant
        {
            display: block;
            font-size: 16px;
            margin-bottom: 5px;
        }
        .applicantBG
        {
            background-color: #ce854f;
            padding: 10px 10px 30px 10px;
            border: 1px solid #ffffff;
            color: #fff;
            margin-top: 15px;
            display: block;
        }
        .normalText
        {
            font-size: 15px;
            display: block;
            margin-bottom: 10px;
        }
        .redtxtind
        {
            color: #272525;
            font-size: 15px;
        }
        .any
        {
            display: block;
            text-align: center;
            margin-top: 15px;
            font-size: 15px;
        }
        .submitBtn
        {
            background: #0e6196 url(../imgSams/print-icon.png) 20px center no-repeat;
            font-weight: normal;
            border-radius: 6px;
            -moz-border-radius: 6px;
            -webkit-border-radius: 6px;
            border: none;
            padding: 12px 20px 12px 50px;
            font-size: inherit;
            cursor: pointer;
        }
        .submitBtn:hover
        {
            background-color: #04536b;
        }
    </style>--%>
 <style type="text/css">
        @font-face
        {
            font-family: 'Conv_Roboto-Regular';
            src: url('../fonts/Roboto-Regular.eot');
            src: local('?'), url('../fonts/Roboto-Regular.woff') format('woff'), url('../fonts/Roboto-Regular.ttf') format('truetype'), url('../fonts/Roboto-Regular.svg') format('svg');
            font-weight: normal;
            font-style: normal;
        }
        body
        {
            font-size: 16px;
            border: none;
            font-family: 'Conv_Roboto-Regular' , Sans-Serif;
        }
        .outerbox{
            background: url(../images/login-bg.jpg) no-repeat;
            width: 45%;
            margin: auto;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            background-size: cover;
            min-height: 250px;
        }
        .information
        {
            background-color: #FFFFFF;
            font-size: 16px;
            border: none;
            padding-top: 10px;
            font-family: 'Conv_Roboto-Regular' , Sans-Serif;
        }
        .header
        {
            background-color: #f6f6f6;
            border-bottom: solid 1px #ececec;
            text-align: center;
            padding: 20px;
        }
        h1
        {
            font-size: 40px;
            font-family: 'Conv_Roboto-Regular' , Sans-Serif;
            font-weight: normal;
            display: block;
            text-align: center;
        }
        h1 span
        {
            display: block;
            margin-top: -5px;
            text-align: center;
        }
        h1 img
        {
            display: block;
            float: left;
            margin-top: 10px;
            width: 45px;
        }
        .text-green
        {
            color: #00bd28;
        }
        .important
        {
            width: 100%;
            font-size: 25px;
            text-align: center;
            margin: 4px 0 20px 14px;
            color: #626262;
        }
        .submitBtn
        {
            background: #69ec33  url(../imgSams/print-icon.png) 20px center no-repeat;
            font-weight: normal;
            border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-border-radius: 4px;
            border: none;
            padding: 15px;
            font-size: inherit;
            cursor: pointer;
        }
        .submitBtn:hover
        {
            background-color: #5ace2b;
        }
        .redtxtind
        {
            font-size: inherit;
            font-family: 'Conv_Roboto-Regular' , Sans-Serif;
            margin: 12px 0;
            font-size:13px; text-align:center;
        }
        .footer-section
        {
            background-color: #f6f6f6;
            border-top: solid 1px #ececec;
            padding: 15px;
            text-align: center;
        }
        .footer-section span
        {
            font-size: 20px;
        }
        .redtxtind01{    padding: 20px;background: #f9fff6;margin-top: 20px;line-height: 23px;border-top: 2px solid #edffe5;}
       span.congrats {display: block;font-size: 30px;margin-bottom: 15px;color: #ffffff;background: #5ace2b;padding: 15px;border: 1px solid #52c523; text-align:center;}
        .congo-text{padding: 15px;}
        
        .outerbox #DivCongratulation{ margin-top:3em;background: #fff;}
        .print-section
        {
            text-align: center;
            margin: 30px 0;
        }
        #txtOTP{ height:20px;}
        #DivOTP{padding: 55px 35px 35px 35px;     margin-top: 4em;   text-align: right;}
        .otp-text{ color:#fff;font-weight: 600;font-size: 25px;}
        .btn-submit{background: #ffb549;padding: 4px 12px;font-size: 14px;border: 1px solid #fff8ee;cursor: pointer;}
        #DivOTP span.resend{display: block;text-align: right;padding-right: 2px;padding-top: 25px;}
        .btn-danger{background: #a7491b;padding: 4px 12px;font-size: 14px;border: 1px solid #fff8ee;cursor: pointer; color:#fff;}
        .subject{color: #ffd08b;padding: 10px;font-size: 14px;line-height: 20px;border: 1px solid #866e4c; text-align:left; background-color: rgba(0, 0, 0, 0.5);}
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="outerbox">
        <div id="DivOTP" runat="server">
            <asp:Label ID="lbllabel" CssClass="otp-text" runat="server" Text="Enter your OTP code :"></asp:Label>
            <asp:TextBox ID="txtOTP" runat="server"  MaxLength="10" autocomplete="off"  onpaste="return false;" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false"></asp:TextBox>
            <asp:Button ID="btnSubmit" runat="server" CssClass="btn-submit" Text="Submit" OnClick="btnSubmit_Click" />
            <span class="resend">
                <asp:Label ID="lblMsg" runat="server" Text="" CssClass="otp-text"></asp:Label>
                <asp:Button ID="btnSendOTP" CssClass="btn-danger" runat="server" Text="Resend OTP"
                    OnClick="btnSendOTP_Click" /></span>
            <p class="subject">
                OTP has been sent to your given Mobile No. and Email ID.<br />
                The OTP is valid for 5 minutes.<br />
                आपके दिए हुए मोबाइल और ई-मेल आई.डी. पर OTP भेजा गया है |
यह OTP  केवल पांच मिनट तक ही मान्य है |</p>

            <%--All communication during the e-Admission will be made to the mobile number & email address used during the registration in this portal. One mobile number or email address can't be used for multiple registrations.--%>
            <asp:HiddenField ID="hdnMob" runat="server" />
            <asp:HiddenField ID="hdnEmail" runat="server" />
            <asp:HiddenField ID="hdnAppNm" runat="server" />
            <asp:HiddenField ID="hdnAppId" runat="server" />

            
        </div>
         
    </div>
    </form>
</body>
</html>
