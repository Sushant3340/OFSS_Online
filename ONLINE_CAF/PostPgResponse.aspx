<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PostPgResponse.aspx.cs"
    Inherits="ONLINE_CAF_PostPgResponse" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Common Application Form</title>
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <script language="javascript" type="text/javascript">
        function openAppCopy() {
            window.open('CAF.aspx', 'ApplicantCopy', 'left=20,top=20,width=700,height=700,menubar=1,resizable=1,scrollbars=1');
        }
    </script>
    <link href="../Style/CAF.css" rel="stylesheet" type="text/css" />
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
        .outerbox
        {
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
        
        .outerbox-cograts
        {
            width: 45%;
            margin: auto;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            background-size: cover;
            min-height: 250px;
            margin-top: 4em;
        }
        
        .outerbox-cogratsPAD
        {
            padding: 0px 20px;
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
            background-color: #00bd28;
            border-bottom: solid 1px #ececec;
            text-align: center;
            padding: 10px;
            color: #fff;
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
        .text-red
        {
            color: #fff;
            margin: 0px 0px 7px 0px;
        }
        
        .sus
        {
            color: #fff;
            font-size: 18px;
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
        .submitBtn:hover
        {
            background-color: #04536b;
        }
        .redtxtind
        {
            font-size: inherit;
            font-family: 'Conv_Roboto-Regular' , Sans-Serif;
            margin: 12px 0;
            font-size: 13px;
            text-align: center;
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
        .print-section
        {
            text-align: center;
            margin: 30px 0;
        }
        #txtOTP
        {
            height: 20px;
        }
        #DivOTP
        {
            padding: 55px 35px 35px 35px;
            margin-top: 4em;
            text-align: right;
        }
        .otp-text
        {
            color: #fff;
            font-weight: 600;
            font-size: 25px;
        }
        .msg-text
        {
            color: #FF0000;
            font-weight: 300;
            font-size: 20px;
        }
        .btn-submit
        {
            background: #ffb549;
            padding: 4px 12px;
            font-size: 14px;
            border: 1px solid #fff8ee;
            cursor: pointer;
        }
        #DivOTP span.resend
        {
            display: block;
            text-align: right;
            padding-right: 2px;
            padding-top: 25px;
        }
        .btn-danger
        {
            background: #a7491b;
            padding: 4px 12px;
            font-size: 14px;
            border: 1px solid #fff8ee;
            cursor: pointer;
            color: #fff;
        }
        .subject
        {
            color: #ffd08b;
            padding: 10px;
            font-size: 14px;
            line-height: 20px;
            border: 1px solid #866e4c;
            text-align: left;
            background-color: rgba(0, 0, 0, 0.5);
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="DivCongratulation" runat="server" class="outerbox-cograts">
        <div class="header" runat="server">
            <div align="center">
                <img src="../images/checked.png" alt="" /></div>
            <span class="sus">
                <asp:Label ID="lblPaymentMsg" runat="server"></asp:Label>
            </span>
        </div>
        <div class="outerbox-cogratsPAD">
            <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style="background: #fff;">
                <tr>
                    <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td>
                                    <span style="font-size: 14px;">Applicant name :</span>
                                </td>
                                <td height="25">
                                    <strong>
                                        <asp:Label ID="lblApplicantName" runat="server"></asp:Label>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-size: 14px;">Reference No. :</span>
                                </td>
                                <td height="25">
                                    <strong>
                                        <asp:Label ID="lblUniqueRefNo" runat="server"></asp:Label>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-size: 14px;">Bank Transaction Id :</span>
                                </td>
                                <td height="25">
                                    <strong>
                                        <asp:Label ID="lblBankTransId" runat="server"></asp:Label>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-size: 14px;">Transaction Id :</span>
                                </td>
                                <td height="25">
                                    <strong>
                                        <asp:Label ID="lblClientTransId" runat="server"></asp:Label>
                                    </strong>
                                </td>
                            </tr>
                          
                            <tr>
                                <td>
                                    <span style="font-size: 14px;">Status :</span>
                                </td>
                                <td height="25">
                                    <strong>
                                        <asp:Label ID="lblStatus" runat="server"></asp:Label>
                                    </strong>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="information">
                        <div class="print-section">
                            <asp:Button ID="btnPrintCAF" CssClass="submitBtn" runat="server" Text="Print Application Copy"
                                OnClick="btnPrintCAF_Click" ForeColor="White" />
                            &nbsp;&nbsp;
                        </div>
                        <p style="text-align: center; font-size: 13px;">
                            For any doubt please call <strong>Help Desk No. <span style="color: #0061a7;">0612-2230051</span></strong>
                            and refer your Reference Number.</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    </form>
</body>
</html>
