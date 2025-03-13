<%@ Page Language="C#" AutoEventWireup="true" CodeFile="TestSmsEmail.aspx.cs" Inherits="ONLINE_CAF_TestSmsEmail" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Common Application Form</title>
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <link href="../style/UpdatePayment.css" rel="Stylesheet" />
    <link href="../style/bootstrap.min.css" rel="stylesheet" type="text/css" />

    <script type="text/javascript">
        function checkGovtSMS() {
            if (!BlankTextBox('txtSMSSubject', 'SMS Content')) {
                return false;
            }
            if (!BlankTextBox('txtSMobileNo', 'Mobile No.')) {
                return false;
            }
            return true;
        }

        function checkVivaSMS() {
            if (!BlankTextBox('txtSMSSubject', 'SMS Content')) {
                return false;
            }
            if (!BlankTextBox('txtSMobileNo', 'Mobile No.')) {
                return false;
            }
            return true;
        }

          function checkUnicodeSms() {
            if (!BlankTextBox('txtSMSSubject', 'SMS Content')) {
                return false;
            }
            if (!BlankTextBox('txtSMobileNo', 'Mobile No.')) {
                return false;
            }
            return true;
        }

        function checkGovtEmail() {
            if (!BlankTextBox('txtEmailSub', 'Email Content')) {
                return false;
            }
            if (!BlankTextBox('txtGovtEmail', 'Email Id')) {
                return false;
            }
            return true;
        }

        function checkVivaEmail() {
            if (!BlankTextBox('txtEmailSub', 'Email Content')) {
                return false;
            }
            if (!BlankTextBox('txtGovtEmail', 'Email Id')) {
                return false;
            }
            return true;
        }

          function checkNewEmails() {
            if (!BlankTextBox('txtEmailSub', 'Email Content')) {
                return false;
            }
            if (!BlankTextBox('txtGovtEmail', 'Email Id')) {
                return false;
            }
            return true;
        }

    </script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="sm1" runat="server">
        </asp:ScriptManager>
        <div class="outerbox congrats">
            <div id="DivCongratulation" runat="server">
                <fieldset>
                    <legend>Test SMS Email</legend>
                    <asp:Panel ID="pnlDetails" runat="server">
                        <table style="width: 100%;">
                            <tr style="padding: 2px;">
                                <td>
                                    <strong>Sms Number</strong>&nbsp; 
                                </td>
                                <td>
                                    <asp:TextBox ID="txtSMobileNo" runat="server"></asp:TextBox>
                                    <cc1:FilteredTextBoxExtender ID="FilteredTextBoxExtender3" runat="server" Enabled="True"
                                        TargetControlID="txtSMobileNo" FilterType="Numbers" />
                                </td>
                                <td>
                                    <strong>Sms Message</strong>&nbsp;
                           
                                </td>
                                <td>
                                    <asp:TextBox ID="txtSMSSubject" runat="server" TextMode="MultiLine" CssClass="form-control"
                                        onKeyUp="return TextCounter('txtSMSSubject','lblchar',100)" Rows="4" TabIndex="3"></asp:TextBox>
                                    &nbsp;Max&nbsp;<span class="text-danger">
                                        <asp:Label ID="lblchar" runat="server" Text="100"></asp:Label>
                                    </span>&nbsp;characters are allowed
                                                        <cc1:FilteredTextBoxExtender ID="FilteredTextBoxExtender2" runat="server" Enabled="True"
                                                            TargetControlID="txtSMSSubject" FilterMode="InvalidChars" FilterType="Custom,LowercaseLetters,UppercaseLetters,Numbers"
                                                            InvalidChars="<>;'%!`~^*+{}[]|:@#$?/\" />
                                </td>
                                <td>
                                    <strong>Template</strong>&nbsp;
                           
                                </td>
                                <td>
                                    <asp:TextBox ID="txtTemplateId" runat="server" CssClass="form-control" MaxLength="30" Width="200px"></asp:TextBox>
                                    <cc1:FilteredTextBoxExtender ID="FilteredTextBoxExtender7" runat="server" Enabled="True"
                                        TargetControlID="txtTemplateId" FilterType="Numbers" />
                                </td>
                                <td style="text-align: center;">
                                    <asp:Button ID="btnGovtSMS" runat="server" OnClick="btnOTPMSG_Click" Text="BSEB SMS"
                                        CssClass="btn btn-success" OnClientClick="return checkGovtSMS();" />

                                    <br />
                                    <br />
                                    <asp:Button ID="btnResentSMS" runat="server" OnClick="btnResentSMS_Click" Text="Viva SMS"
                                        CssClass="btn btn-success" OnClientClick="return checkVivaSMS();" />
                                      <br />
                                    <br />
                                    <asp:Button ID="btnUnicodeEmail" runat="server" OnClick="btnUnicodeEmail_Click" Text="Unicode SMS"
                                        CssClass="btn btn-success" OnClientClick="return checkUnicodeSms();" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Email ID</strong>&nbsp; 
                                </td>
                                <td>
                                    <asp:TextBox ID="txtGovtEmail" runat="server"></asp:TextBox>
                                    <cc1:FilteredTextBoxExtender ID="FilteredTextBoxExtender5" runat="server" Enabled="True"
                                        TargetControlID="txtGovtEmail" FilterMode="InvalidChars" FilterType="Custom,LowercaseLetters,UppercaseLetters,Numbers"
                                        InvalidChars="<>;'%!`~^*+{}[]|:#$?/\" />
                                </td>
                                <td>
                                    <strong>Email Message</strong>&nbsp;
                           
                                </td>
                                <td>
                                    <asp:TextBox ID="txtEmailSub" runat="server" CssClass="form-control" TextMode="MultiLine"
                                        onKeyUp="return TextCounter('txtEmailSub','lblEmail',100)" Rows="4" TabIndex="3"></asp:TextBox>&nbsp;Max&nbsp;<span
                                            class="text-danger">
                                            <asp:Label ID="lblEmail" runat="server" Text="100"></asp:Label>
                                        </span>&nbsp;characters are allowed
                                                      <%--  <cc1:FilteredTextBoxExtender ID="FilteredTextBoxExtender1" runat="server" Enabled="True"
                                                            TargetControlID="txtEmailSub" FilterMode="InvalidChars" FilterType="Custom,LowercaseLetters,UppercaseLetters,Numbers"
                                                            InvalidChars="<>;'%!`~^*+{}[]|:@#$?/\" />--%>
                                </td>
                                <td style="text-align: center;">
                                    <asp:Button ID="btnGovtEmail" runat="server" OnClick="btnEmail_Click" Text="BSEB Email"
                                        CssClass="btn btn-success" OnClientClick="return checkGovtEmail();" />

                                    <br />
                                   <br />
                                    <asp:Button ID="btnVivaEmail" runat="server" OnClick="btnVivaEmail_Click" Text="Viva Email"
                                        CssClass="btn btn-success" OnClientClick="return checkVivaEmail();" />
                                   
                                     <br />
                                    <br />
                                    <asp:Button ID="btnNewEmail" runat="server" OnClick="btnNewEmaill_Click" Text="New BSEB Email"
                                        CssClass="btn btn-success" OnClientClick="return checkNewEmails();" />
                                </td>
                            </tr>
                             <tr>
                                 <td>
                                    <strong>Reference No</strong>&nbsp; 
                                </td>
                                 <td>  <asp:TextBox ID="txtRefNo" runat="server"></asp:TextBox></td>
                                <td colspan="3">
                                    <asp:Button ID="btncheckAxis" runat="server" OnClick="btnAxisGetKey_Click" Text="Check Axis Payment Gateway"
                                        CssClass="btn btn-success" />
                                 </td>
                            </tr>
                        </table>
                    </asp:Panel>
                </fieldset>
            </div>
        </div>
    </form>
</body>
</html>
