<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PreferSecondSelection.aspx.cs"
    Inherits="StudentLogin_PreferSecondSelection" %>

<%@ Register Src="../includes/RegStudentLeftmenu.ascx" TagPrefix="stuc1" TagName="leftmenu" %>
<%@ Register Src="../includes/RegStudentHeader.ascx" TagPrefix="stuc2" TagName="stdntHdr" %>
<%@ Register Src="../includes/StudentDoctype.ascx" TagPrefix="studoc" TagName="studoctpe" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Src="~/includes/footer.ascx" TagName="footer" TagPrefix="uc2" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Annexure-7</title>
    <studoc:studoctpe ID="stdoc" runat="server" />
    <%--<link href="../css/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css" />--%>
    <style type="text/css">
        .anouncement_box_text ul
        {
            margin-right: 10px;
        }
        .scrollbar
        {
            height: 300px;
            overflow-y: scroll;
        }
        
        .force-overflow
        {
            min-height: 450px;
        }
        
        #wrapper
        {
            text-align: center;
            margin: auto;
        }
        .style-11::-webkit-scrollbar
        {
            width: 5px;
            background-color: #F5F5F5;
        }
        
        
        .style-11::-webkit-scrollbar-track
        {
            border-radius: 10px;
            background: rgba(0,0,0,0.1);
            border: 1px solid #ccc;
        }
        
        .style-11::-webkit-scrollbar-thumb
        {
            border-radius: 10px;
            background: linear-gradient(left, #fff, #e4e4e4);
            border: 1px solid #aaa;
        }
        
        .style-11::-webkit-scrollbar-thumb:hover
        {
            background: #fff;
        }
        
        .style-11::-webkit-scrollbar-thumb:active
        {
            background: linear-gradient(left, #22ADD4, #1E98BA);
        }
    </style>
    <script language="javascript" type="text/javascript" src="../Scripts/Validator.js"></script>
    <script language="javascript" type="text/javascript">
        function Validation() {

            if (!blankFieldValidation('txtBarcodeNo', 'Reference Number'))
                return false;
            var len = document.getElementById('txtBarcodeNo').value;
            if (len.length != 10 || len.length != 11) {
                alert("Reference Number should be 13 digit");
                document.getElementById('txtBarcodeNo').value = "";
                document.getElementById('txtBarcodeNo').focus();
                return false;

            }
            return true;

        }


        function OTPValidate() {

            if (!blankFieldValidation('txtEOTP', 'OTP'))
                return false;

            return true;
        }
        
       
    </script>
</head>
<body class="no-skin">
    <form id="Form1" runat="server">
    <%--<asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>--%>
    <stuc2:stdntHdr ID="studentHead" runat="server" />
    <asp:HiddenField ID="hdnCSRFRandNum" runat="server" />
    <div class="main-container ace-save-state" id="main-container">
        <stuc1:leftmenu ID="leftmenu" runat="server" />
        <div class="main-content">
            <div class="main-content-inner">
                <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                    <ul class="breadcrumb">
                        <li><a href="PreferSecondSelection.aspx"><i class="ace-icon fa fa-home home-icon"></i>
                        </a></li>
                        <li class="active">Participate in Selection</li>
                    </ul>
                    <!-- /.breadcrumb -->
                </div>
                <div class="page-content">
                    <div class="body-content dashBoard">
                        <!-- /.page-header -->
                        <div class="row" id="divForm" runat="server">
                            <div class="col-sm-12">
                                <div class="formpage">
                                    <div>
                                        <div id="divNotice" runat="server" visible="false">
                                            <p>
                                                यदि आप आवंटित महाविद्यालय/ संकाय/विषय से संतुष्ट नहीं है और दूसरा महाविद्यालय /
                                                संकाय/ विषय चुनना चाहते है तो आपके के लिये आवश्यक है कि जिस महाविद्यालय में नामांकन
                                                के लिये आपका नाम चुका है, तो वे उस महाविद्यालय में नामांकन कराने के पश्चात स्लाइड
                                                अप (Slide up) प्रक्रिया के अंतर्गत ऑनलाइन रूप से स्लाइड अप विकल्प का उपयोग कर सकते
                                                है | इस द्वितीय चयन (Second Selection List) में आवंटित कॉलेज में नामांकन लेने के
                                                बाद ही आप द्वितीय एवं तृतीय चयन सूची जारी होने के बाद मेधा क्रम के आधार पर वे उस
                                                महाविद्यालय में भी नामांकन ले सकेंगे जिसके लिये आपने नामांकन हेतु उच्च प्राथमिकता
                                                दी है इसके लिए निम्नलिखित प्रक्रिया है, जिसे स्लाइड अप प्रक्रिया कहते है |</p>
                                            <p>
                                                <strong><u>स्लाइड अप प्रक्रिया-</u></strong>प्रथम संशोधित चयन सूची में चयनित आवेदक
                                                के लिये आवश्यक है कि जिस महाविद्यालय में नामांकन के लिये उनका नाम आ चूका है, तो
                                                वे उस महाविद्यालय में नामांकन करा ले | ऐसा होने पर द्वितीय एवं तृतीय चयन सूची जारी
                                                होने पर वे उस महाविद्यालय में भी नामांकन ले सकेंगे जिसके लिये उन्होंने नामांकन हेतु
                                                उच्च प्राथमिकता दी है | अगर किसी आवेदक को निचली प्राथमिकता वाले विकल्प के लिये चुना
                                                जाता है , तो वे उस महाविद्यालय में नामांकन अवश्य करा लें, ताकि उनके मामले को चयन
                                                प्रक्रिया के दौरान स्लाइड-अप का उपयोग किया जा सके और उस पर विचार किया जा सके |</p>
                                            <p>
                                                <h3>
                                                    <strong>आवेदक विशेष ध्यान दें</strong></h3>
                                                <strong><u>आवेदक इस बात पर अवश्य ध्यान दे की अगर स्लाइड अप प्रक्रिया चुनने के पश्चात
                                                    अगर आवेदक का नाम उनके आवेदन पत्र में नामांकन हेतु प्राथमिकता सूची के अनुसार किसी
                                                    भी उच्च प्राथमिकता वाले महाविद्यालय/विषय/संकाय में होता है तो उन्हें स्लाइड अप प्रक्रिया
                                                    के पश्चात नए महाविद्यालय/विषय/संकाय में नामांकन अवश्य लेना होगा जिसमे उनका चयन होगा
                                                    | आवेदक ने पूर्व में जिस महाविद्यालय में नामांकन लिया है एवं स्लाइड अप प्रक्रिया
                                                    के पश्चात उनका चयन किसी उच्च प्राथमिकता वाले वो महाविद्यालय/संकाय/ विषय में हो जाता
                                                    है तो पूर्व में किया गया नामांकन स्वत: रद्द हो जाएगा !</u></strong>अगर आवेदक
                                                स्लाइड अप अगर ऐसे आवेदक प्रथम सूची में आवंटित महाविद्यालय में चुने जाने पर नामांकन
                                                नहीं लेते है तो स्लाइडिंग अप के जरिये उनके मामले पर विचार नहीं किया जायेगा और उन्हें
                                                दूसरी या तीसरी सूची में भी कोई महाविद्यालय/संकाय/ विषय आवंटित नहीं किया जायेगा,
                                                अर्थात उनका आवेदन रद्द कर दिया जाएगा |</p>
                                            <p>
                                        </div>
                                        <div id="divSelect" runat="server">
                                            <asp:CheckBox ID="chkStatus" CssClass="radio-inline" runat="server" Style="padding-left: 0;"
                                                OnCheckedChanged="chkStatus_CheckChanged" AutoPostBack="true" />
                                            <strong><span style='color: red; text-decoration: underline;'>मैंने स्लाइड अप प्रक्रिया
                                                को अच्छे से समझ लिया है एवं मैं स्लाइड अप प्रक्रिया में भाग लेना चाहता / चाहती हूँ
                                                |</span></strong>
                                        </div>
                                        <asp:Label BorderStyle="None" ID="lblMsg" runat="server" ForeColor="Red" Font-Bold="true">
                                        </asp:Label>
                                        <asp:Button ID="btnGenOTP" runat="server" Text="Generate OTP" CssClass="btn btn-primary"
                                            OnClick="btnGenerateOTP_Click" />
                                    </div>
                                    <br />
                                    <div id="OTPdiv" runat="server" visible="false">
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="alert alert-warning">
                                                    <asp:Label BorderStyle="None" ID="lblOtpDetails" runat="server">
                                                    </asp:Label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-12" id="divOTPEntry" runat="server">
                                                <div class="col-lg-3">
                                                    <label id="lblApplicantName">
                                                        Enter One Time Password
                                                    </label>
                                                </div>
                                                <div class="col-lg-9">
                                                    <span class="colonns">:</span>
                                                    <asp:TextBox ID="txtEOTP" runat="server" MaxLength="6" TextMode="Password"></asp:TextBox>
                                                    <cc1:FilteredTextBoxExtender ID="FTBEOTP" runat="server" FilterMode="ValidChars"
                                                        ValidChars="0,1,2,3,4,5,6,7,8,9" FilterType="Numbers" TargetControlID="txtEOTP">
                                                    </cc1:FilteredTextBoxExtender>
                                                    <asp:HiddenField ID="hdnOTP" runat="server" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="col-lg-3">
                                                </div>
                                                <div class="col-lg-9">
                                                    <asp:HiddenField ID="hdnStatus" runat="server" />
                                                    <asp:Button ID="btnUpdatePref" runat="server" Text="Validate OTP" OnClientClick="return OTPValidate();"
                                                        CssClass="btn btn-success" OnClick="btnValidate_Click" />
                                                    <asp:Button ID="btnResend" runat="server" Text="Re-Send" CssClass="btn btn-primary"
                                                        OnClick="btnResendOTP_Click"></asp:Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clear:both">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="divDateLine" runat="server" visible="false">
                            <div style="color: #ff0000; padding: 150px 400px; font-size: 16px;">
                                <h5>
                                    Dateline for slide up selection is completed...</h5>
                            </div>
                        </div>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
        </div>
        <!-- body-content
    -->
        <!-- /.page-content -->
    </div>
    <!-- /.main-content -->
    <div class="footer">
        <div class="footer-inner">
            <div class="footer-content">
                <span class="bigger-120"><span id="copy" class="blue bolder"></span><span>Online Facilitation
                    System for Students. All rights reserved @2018</span> </span><span class="action-buttons">
                        <a href="#"><i class="ace-icon fa fa-twitter-square light-blue bigger-150"></i></a>
                        <a href="#"><i class="ace-icon fa fa-facebook-square text-primary bigger-150"></i>
                        </a><a href="#"><i class="ace-icon fa fa-rss-square orange bigger-150"></i></a>
                </span>
            </div>
        </div>
    </div>
    <a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse
    display"><i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i></a>
    </form>
</body>
</html>
