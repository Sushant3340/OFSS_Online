<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UpdatePayment_Jr.aspx.cs"
    Inherits="ONLINE_CAF_UpdatePayment_Jr" %>

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
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="sm1" runat="server">
    </asp:ScriptManager>
    <div class="outerbox congrats">
        <div id="DivCongratulation" runat="server">
            <table style="width: 100%">
                <tr>
                    <td colspan="3">
                        <span class="congrats">Verify and Update payment </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        Enter your client transaction Id / अपने ग्राहक लेनदेन आईडी दर्ज करें:
                    </td>
                    <td>
                        <asp:TextBox ID="txtClientTId" runat="server" MaxLength="30" CssClass="form-Control"></asp:TextBox>
                        <cc1:FilteredTextBoxExtender ID="fteClientId" runat="server" FilterMode="ValidChars"
                            FilterType="Numbers,LowercaseLetters,UppercaseLetters,Custom" TargetControlID="txtClientTId">
                        </cc1:FilteredTextBoxExtender>
                    </td>
                    <td>
                        <asp:Button ID="btnDetails" runat="server" Text="Show Details" CssClass="btn btn-primary"
                            OnClick="btnDetails_Click" />
                    </td>
                </tr>
            </table>
            <br />
            <div class="alert alert-warning" id="divMessage" runat="server" visible="false">
                <asp:Label ID="lblMessage" runat="server"></asp:Label>
            </div>
            <asp:Panel ID="pnlDetails" runat="server" Visible="false">
                <table style="width: 100%;">
                    <tr style="padding: 2px;">
                        <td>
                            <strong>Application Number / आवेदन संख्या :</strong>&nbsp;
                            <asp:Label ID="lblApplicantNo" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Name of the Applicant / आवेदक का नाम :</strong>&nbsp;
                            <asp:Label ID="lblApplicantName" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Father's Name / पिता का नाम :</strong>&nbsp;
                            <asp:Label ID="lblFatherName" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Mobile No / आवेदक मोबाइल नंबर :</strong>&nbsp;
                            <asp:Label ID="lblMobileNo" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Applied Date / आवेदन तिथि :</strong>&nbsp;
                            <asp:Label ID="lblAppliedDate" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Payment Gateway / अदायगी रास्ता :</strong>&nbsp;
                            <asp:Label ID="lblPaymentGateway" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Button Text="Update Payment" runat="server" ID="btnUpdatePayment" CssClass="btn btn-primary"
                                OnClick="btnUpdatePay_Click" />
                            <asp:HyperLink ID="hypPrintCAF" runat="server" Visible="false" CssClass="btn btn-primary"></asp:HyperLink>
                        </td>
                    </tr>
                </table>
            </asp:Panel>
        </div>
    </div>
    </form>
</body>
</html>
