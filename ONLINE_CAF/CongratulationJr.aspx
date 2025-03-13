<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CongratulationJr.aspx.cs"
    Inherits="CongratulationJr" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Common Application Form</title>
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta http-equiv="Cache-Control" content="no-cache" />
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
        }

            .outerbox.congrats {
                width: 57%;
                background: none;
                padding: 15px;
                margin-top: 2em;
            }

        .congo-text {
            display: block;
            text-align: center;
        }

        .applicantBG {
            background: #e1e1e1;
            background: #f3f3f3;
            padding: 5px;
            border: 1px solid #d2d2d2;
        }

        .information {
            background-color: #FFFFFF;
            font-size: 16px;
            border: none;
            padding-top: 10px;
            font-family: 'Conv_Roboto-Regular', Sans-Serif;
        }

        .header {
            background-color: #f6f6f6;
            border-bottom: solid 1px #ececec;
            text-align: center;
            padding: 20px;
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

        .important {
            width: 100%;
            font-size: 25px;
            text-align: center;
            margin: 4px 0 20px 14px;
            color: #626262;
        }

        .submitBtn {
            background: #69ec33 url(../imgSams/print-icon.png) 20px center no-repeat;
            font-weight: normal;
            border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-border-radius: 4px;
            border: none;
            padding: 15px;
            font-size: inherit;
            cursor: pointer;
        }

            .submitBtn:hover {
                background-color: #5ace2b;
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

        .redtxtind01 {
            padding: 20px;
            background: #f9fff6;
            margin-top: 20px;
            line-height: 23px;
            border-top: 2px solid #edffe5;
        }

        .congrats .redtxtind01 {
            padding: 10px;
            background: #ffe6e4;
            margin-top: 0px;
            border: 2px solid #edc0bd;
        }


        span.congrats {
            display: block;
            font-size: 35px;
            color: #ffffff;
            margin-bottom: 20px;
            text-align: center;
            background: #c3361d;
            padding: 20px;
        }

        .outerbox #DivCongratulation {
            background: #fff;
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

        .formcontrol {
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .btn {
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
        }

        .btn-primary {
            color: #fff;
            background-color: #c3361d;
            border-color: #c3361d;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <link href="../js/JqAlert/jQuery.alert.css" rel="stylesheet" type="text/css" />
        <script src="../js/JqAlert/jQuery.js" type="text/javascript"></script>
        <script src="../js/JqAlert/jQuery.alert.js" type="text/javascript"></script>
        <script src="../js/jquery-2.2.4.js" type="text/javascript"></script>
        <div class="row" id="divDateLine" runat="server" visible="false">
            <div style="color: #ff0000; padding: 150px 400px;" font-size="16px;">
                <h5>
                    <asp:Literal ID="litMessage" runat="server"></asp:Literal>
                </h5>
            </div>
        </div>
        <div class="outerbox congrats" id="DivCongratsForm" runat="server">
            <div id="DivCongratulation" runat="server">
                <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="bg-confirm">
                    <tr>
                        <td align="left">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="redinform">
                                        <span class="congrats">Congratulations!!!</span>
                                        <p class="congo-text">
                                            Your details for the Common Application Form has been submitted. You need to make
                                        the payments for the successful submission of your application form. Without successful
                                        payment your form will not be considered as submitted.
                                        </p>
                                        <p class="congo-text">
                                            आपके आवेदन से सम्बंधित सभी जानकारियाँ दर्ज़ कर ली गयी हैं| आवेदन जमा करने हेतु आपको
                                        आवेदन शुल्क का भुगतान करना होगा अन्यथा आप आवेदन अस्वीकृत कर दिया जाएगा |
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="25" align="center" class="applicantBG">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="125px">
                                                    <span style="font-size: 14px;">Applicant Name :</span>
                                                </td>
                                                <td>
                                                    <strong>
                                                        <asp:Label ID="lblName" runat="server"></asp:Label></strong>
                                                </td>
                                                <td width="145px">
                                                    <span style="font-size: 14px;">Reference Number :</span>
                                                </td>
                                                <td>
                                                    <strong>
                                                        <asp:Label ID="lblAppId" runat="server"></asp:Label>
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="125px" colspan="3">Application Fee Amount:</td>
                                                <td>
                                                    <strong>Rs.<asp:Label ID="lblAmount" runat="server"></asp:Label></strong></td>


                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="information">
                            <div class="redtxtind01">
                                <div>
                                    <table>
                                        <tr>
                                            <td>Select your payment option / अपने भुगतान का विकल्प चुनें। -
                                            </td>
                                            <td>
                                                <asp:DropDownList ID="ddlGateWay" CssClass="formcontrol" runat="server">
                                                   <%-- <asp:ListItem Value="4">Punjab National Bank</asp:ListItem>--%>
                                                    <%--<asp:ListItem Value="5">Axis Bank</asp:ListItem>--%>
                                                   <%-- <asp:ListItem Value="1">Sahaj Vasudha Kendra</asp:ListItem>--%>
                                                    <%--  <asp:ListItem Value="2">SBIePay</asp:ListItem>--%>
                                                    <asp:ListItem Value="3">SabPaisa</asp:ListItem>
                                                   <%-- <asp:ListItem Value="6">HDFC</asp:ListItem>--%>

                                                </asp:DropDownList>
                                            </td>
                                            <td>
                                                <asp:Button ID="btnGateWay" CssClass="btn btn-primary" runat="server" Text="Proceed for payment"
                                                    OnClick="btnGateWay_Click" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <p style="text-align: center;">
                                    After the confirmation of the payment , Applicant can take the printout of their
                                applicant copy and can save it for future reference.
                                <br />
                                    शुल्क भुगतान करने के पश्चात आप अपने आवेदन का Printout निकाल लें एवं उसकी एक प्रति
                                भविष्य के लिए सुरक्षित रखें |
                                </p>
                                <p style="text-align: center;">
                                    For any doubt please call <strong>Help Desk No <span style="color: #0061a7;">0612-2230009</span></strong>
                                    and refer your Reference Number.
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </form>
</body>
</html>
