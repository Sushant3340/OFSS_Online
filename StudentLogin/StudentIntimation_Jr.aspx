<%--'**********************************************************************************
' File Name             :   StudentIntimation_Jr.aspx
' Description           :   View Student Initimation reports of Intermediate colleges 
' Created by            :   Akshaya Kumar Sahoo
' Created On            :   16th July 2018
' Modification History  :
'                 <CR no.>                      <Date>                <Modified by>           <Modification Summary>'    
                      1                         18-07-2022            Swapna Prangya Routray   Extend dateline of                                                                                  intemation letter                                                      
'

'**************************************************************************************/--%>

<%@ Page Language="C#" AutoEventWireup="true" CodeFile="StudentIntimation_Jr.aspx.cs"
    Inherits="StudentLogin_StudentIntimation_Jr" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Intimation</title>
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <style type="text/css">
        .pageBreakAfter {
            margin-bottom: 0;
            page-break-after: always;
        }

        .pageBreakBefore {
            margin-bottom: 0;
            page-break-before: always;
        }

        .clbdr {
            border: 1px solid #666666;
        }

        .details {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #1E1E1E;
            text-decoration: none;
            line-height: 20px;
        }

        .blkbg {
            color: #FFFFFF;
            background-color: #282828;
            text-align: center;
            padding-top: 2px;
            padding-bottom: 2px;
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
        }

        .footblkbg {
            color: #FFFFFF;
            background-color: #000;
            text-align: center;
            padding-top: 3px;
            padding-bottom: 3px;
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: bold;
            font-style: italic;
        }

        .blackbold {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 20px;
            font-weight: bold;
            color: #232323;
            text-decoration: none;
            line-height: 25px;
        }

        .norbold {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 14px;
            font-weight: bold;
            color: #1E1E1E;
            text-decoration: none;
            line-height: 20px;
        }

        .subhd {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 12px;
            font-weight: normal;
            color: #000;
            text-decoration: none;
            line-height: 20px;
        }

        .content {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 12px;
            font-weight: normal;
            color: #000;
            text-decoration: none;
            line-height: 18px;
        }

        .content1 {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: normal;
            color: #252525;
            text-decoration: none;
            line-height: 18px;
        }

        .dotted {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: normal;
            color: #1B1B1B;
            border-bottom-width: 1px;
            border-bottom-style: dashed;
            border-bottom-color: #333333;
        }

        .viewTable table {
            width: 100%;
            border: 1px solid #2A2A2A;
            margin-top: auto;
            margin-right: auto;
            margin-bottom: 5px;
            margin-left: auto;
            border-top-width: 1px;
            border-top-style: solid;
            border-top-color: #2A2A2A;
        }

            .viewTable table a {
                font-family: Verdana, Arial, Helvetica, sans-serif;
                font-size: 10px;
                font-weight: bold;
                color: #0033FF;
                text-decoration: none;
            }

                .viewTable table a:hover {
                    color: #000000;
                    text-decoration: underline;
                }

            .viewTable table th {
                background-color: #ccc;
                border: 1px solid #000;
                font-family: Verdana, Arial, Helvetica, sans-serif;
                font-size: 11px;
                font-weight: bold;
                color: #000;
                line-height: 19px;
            }

            .viewTable table td {
                border: 1px solid #000;
                font-family: Verdana, Arial, Helvetica, sans-serif;
                font-size: 10px;
                font-weight: normal;
                color: #000000;
            }

        .redbold {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #C60000;
            text-decoration: none;
        }

        .viewTable1 table {
            width: 100%;
            border: 1px solid #2A2A2A;
            margin-top: auto;
            margin-right: auto;
            margin-bottom: 5px;
            margin-left: auto;
            border-top-width: 1px;
            border-top-style: solid;
            border-top-color: #2A2A2A;
            padding: 2px;
            border-collapse: collapse;
        }

            .viewTable1 table a {
                font-family: Verdana, Arial, Helvetica, sans-serif;
                font-size: 10px;
                font-weight: bold;
                color: #0033FF;
                text-decoration: none;
            }

                .viewTable1 table a:hover {
                    color: #000000;
                    text-decoration: underline;
                }

            .viewTable1 table th {
                background-color: #fff;
                border: solid 1px #ccc;
                font-family: Verdana, Arial, Helvetica, sans-serif;
                font-size: 11px;
                font-weight: bold;
                color: #000;
                line-height: 19px;
            }

            .viewTable1 table td {
                border: solid 1px #ccc;
                font-family: Verdana, Arial, Helvetica, sans-serif;
                font-size: 10px;
                font-weight: normal;
                color: #000000;
                border-bottom-width: 1px;
                border-bottom-style: solid;
                border-bottom-color: #999999;
            }

        .border-box {
            border: solid 2px #000000 !important;
        }
    </style>
    <style type="text/css">
        .inti {
            width: 900px;
            margin: 0 auto;
            border: 1px solid #e1e1e1;
        }

        .style4 {
            width: 177px;
        }

        .style9 {
            width: 37px;
        }

        ul.intimtion-ul {
            margin: 0;
            padding: 0;
        }

            ul.intimtion-ul li {
                list-style-type: decimal-leading-zero;
                padding-left: 7px;
                margin-left: 27px;
                padding-top: 5px;
            }

        ol.intimtion-ol li {
            list-style-type: upper-roman;
            padding-left: 7px;
            margin-left: 27px;
            padding-top: 5px;
        }

            ol.intimtion-ol li ol li {
                list-style-type: lower-roman;
                padding-left: 7px;
                margin-left: 27px;
                padding-top: 5px;
            }

        ol.subInti-ol li {
            list-style-type: lower-alpha;
            padding-left: 7px;
            margin-left: 27px;
            padding-top: 5px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:HiddenField ID="hdnSelectionType" runat="server" />
        <div id="tableArea">
            <div runat="server" id="Selected">
                <table class="inti">
                    <tr>
                        <td colspan="2">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom: #000 2px solid !important;">
                                <tr>
                                    <td valign="top">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <div class="viewTable1">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 0px; margin-bottom: 0; padding-bottom: 0;">
                                                            <tr>
                                                                <td width="90" rowspan="3" align="center" style="border-left: none; border-bottom: none; border-right: none;">
                                                                    <img src="../images/BiharLogo.png" alt="BSEB, BIHAR" />
                                                                </td>
                                                             <td style="border: 0; text-align: center">
                                                                    <span class="blackbold" style="padding-left: 41px">बिहार विद्यालय परीक्षा समिति</span>
                                                                    <br />
                                                                    <span class="norbold" style="padding-left: 50px">सत्र 2024-2026 इंटरमीडिएट / +2 कोर्स
                                                                    में नामांकन हेतु आपके चयन से सम्बन्धित
                                                                   <br />
                                                                         <u>तृतीय चयन सूची (Third Selection List) से संबंधित सूचना पत्र</u>
                                                                        <br />
                                                                        <b>( Intimation Letter )</b><br />
                                                                        <br />
                                                                        <span class="norbold" style="padding-left: 50px" runat="server" id="spanfresh" visible="false">
                                                                            <b>(उन् आवेदकों के लिए जिनका चयन द्वितीय चयन सूची में नहीं हुआ था एवं तृतीय चयन सूची में चयनित हैं)</b></span>
                                                                        <span class="norbold" style="padding-left: 50px" runat="server"
                                                                            id="spanslideup" visible="false"><b>(उन
                                                                                    आवेदकों के लिए जिनका चयन प्रथम / द्वितीय चयन
                                                                                    सूची में हुआ था और जिनको नामांकन के पश्चात स्लाइड अप (Slide
                                                                                    Up) का विकल्प दिये जाने के कारण उच्चतर विकल्प वाला संस्थान आवंटित किया गया है)</b></span>
                                                                    </span>
                                                                    <br />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="20"></td>
                                    <td width="125" align="center" valign="top">
                                        <asp:Image runat="server" ID="imgBarcode" Width="120px" Height="30px" />
                                        <br />
                                        <asp:Label ID="lblBarcode" runat="server" Font-Bold="true" CssClass="norbold"></asp:Label>

                                    </td>
                                </tr>
                            </table>
                            <table width="100%">
                                <tr runat="server" id="trPeyment" visible="false" style="color: Red; font-size: 12px;">
                                    <td colspan="3">
                                        <p>
                                            <strong>
                                                <h3 style="text-align: center;"><u>नोटः- इस आवेदनकर्त्ता ने ओ.एफ.एस.एस. पोर्टल पर ऑनलाइन आवेदन जमा करते समय निर्धारित आवेदन शुल्क 350/- रू. (तीन सौ पचास रूपये मात्र) का भुगतान नहीं किया है, अतएव संबंधित विद्यालय / महाविद्यालय द्वारा आवेदनकर्त्ता से आवेदन शुल्क की राशि रू. 350/- अनिवार्यत प्राप्त किया जाए|</u>
                                                </h3>
                                            </strong>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="details" width="95%">सेवा में ,<br />
                                        आवेदक/ आवेदिका का नाम :<asp:Label ID="lblName" runat="server" Text=""></asp:Label>
                                        <br />
                                        <%--<span class="style1">व्यक्तिगत जानकारी</span><br />--%>
                                        <div class="viewTable">
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0px; border: #000 1px solid;">
                                                <tr>
                                                    <th align="center">पिता का नाम
                                                    </th>
                                                    <th align="center">माता का नाम
                                                    </th>
                                                    <th align="center">जन्म तिथि
                                                    </th>
                                                    <th align="center">लिंग
                                                    </th>
                                                    <th align="center">आरक्षण कोटि
                                                    </th>
                                                    <th align="center">मोबाइल न०
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td align="center">&nbsp;
                                                    <asp:Label ID="lblFather" runat="server" Text=""></asp:Label>
                                                    </td>
                                                    <td align="center">&nbsp;
                                                    <asp:Label ID="lblMother" runat="server" Text=""></asp:Label>
                                                    </td>
                                                    <td align="center">&nbsp;
                                                    <asp:Label ID="lblDob" runat="server" Text=""></asp:Label>
                                                    </td>
                                                    <td align="center">&nbsp;
                                                    <asp:Label ID="lblGender" runat="server" Text=""></asp:Label>
                                                    </td>
                                                    <td align="center">&nbsp;
                                                    <asp:Label ID="lblcategory" runat="server" Text=""></asp:Label>
                                                    </td>
                                                    <td align="center">&nbsp;
                                                    <asp:Label ID="lblMob" runat="server" Text=""></asp:Label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="6">&nbsp;&nbsp;पता :
                                                    <asp:Label ID="lbladrss" runat="server" Text=""></asp:Label>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </td>
                                    <td width="5%"></td>
                                    <td align="center" width="10%" style="border: solid 2px #000000;">
                                        <asp:Image runat="server" ID="imgPhoto" Width="100px" Height="100px" CssClass="clbdr"
                                            ImageUrl="~/images/noimage.JPG" />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="20" colspan="2"></td>
                    </tr>
                    <tr runat="server" id="FreshSelection" visible="false">
                        <td colspan="2" class="content" align="justify">
                            <asp:Literal ID="litFreshApply" runat="server"></asp:Literal>
                            <br />
                        </td>
                    </tr>
                    <tr runat="server" id="SlideUp" visible="false">
                        <td colspan="2" class="content" align="justify">

                            <asp:Literal ID="litSlideUp" runat="server"></asp:Literal>
                            <br />
                        </td>
                    </tr>

                    <tr runat="server" id="scienceStream" visible="false" style="color: Red; font-size: 12px;">
                        <td>
                            <p>
                                अगर आपका चयन विज्ञान संकाय में हुआ है तो यह अनिवार्य है की आपने माध्यमिक परीक्षा में गणित एवं विज्ञान की पढ़ाई की हो एवं सम्बंधित बोर्ड द्वारा आपको गणित एवं विज्ञान में उत्तीर्ण घोषित किया गया हो |
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong><i>Intimation Letter Downloaded On
                                <asp:Label runat="server" ID="date"></asp:Label></i></strong>
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="Rejected" runat="server" visible="false">
                <div class="msg">
                    <table class="inti">
                        <tr>
                            <td colspan="2">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom: #000 2px solid !important;">
                                    <tr>
                                        <td valign="top">
                                            <div class="viewTable1">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 0px; margin-bottom: 0; padding-bottom: 0;">
                                                    <tr>
                                                        <td width="90" rowspan="3" align="center" style="border-left: none; border-bottom: none; border-right: none;">
                                                            <img src="../images/BiharLogo.png" alt="BSEB, BIHAR" />
                                                        </td>
                                                        <td style="border: 0; text-align: center">
                                                            <h2 style="font-size: 190%; color: black; line-height: 30px; margin-bottom: 50px; margin-bottom: 10px; margin-top: 10px; border-bottom: none; padding-bottom: 0px;">
                                                                <b><u>बिहार विद्यालय परीक्षा समिति , पटना</u></b>
                                                            </h2>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center;">आपका चयन प्रथम चयन सूची (First Selection List) में किया गया था |
                            उसके पश्चात नामांकन लेने हेतु दिनांक 08/07/2024 से 19/07/2024 की तिथि निर्धारित
                            की गयी थी | इसकी सूचना आपको प्रथम चयन सूची (First Selection List)
                            के सूचना पत्र के माध्यम से भी दी गयी थी | इसके अलावा यह सूचना विभिन्न दैनिक समाचार
                            पत्रों में भी प्रकाशित की गयी थी | परन्तु अपने उक्त अवधि में चयनित कॉलेज में नामांकन
                            नहीं लिया , अत : प्रथम चयन सूची (First Selection List) के सूचना
                            पत्र की कंडिका संख्या 5 के आलोक में आपका अभ्यर्थित्व (candidature) रद्द (Cancel
                            ) कर दिया गया है एवं इस कारण से आपका नाम द्वितीय एवं या तृतीय चयन सूची से हटा दिया
                            गया है |
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div runat="server" id="NotSelected" visible="false">
              <table class="inti">
                    <tr>
                        <td style="text-align: center; width: 40%">
                            <img src="../images/BiharLogo.png" alt="BSEB, BIHAR" />
                        </td>
                        <td style="text-align: left; width: 60%">
                            <h2>
                                <b><u>बिहार विद्यालय परीक्षा समिति, पटना</u></b>
                            </h2>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center;">
                           <h3>
                                <b><u>वैसे आवेदनकर्ता, जिनका चयन तृतीय चयन सूची (Third Selection List) में नहीं हुआ
                                है, के लिए आवश्यक सूचना</u></b>
                            </h3>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="content" align="justify">
                            <asp:Literal ID="litNotSelected" runat="server"></asp:Literal>

                            <br />
                        </td>
                    </tr>
                </table>

                 <%--<div class="msg" id="">

                    <table class="inti">
                        <tr>
                            <td style="text-align: center; width: 40%">
                                <img src="../images/BiharLogo.png" alt="BSEB, BIHAR" />
                            </td>
                            <td style="text-align: left; width: 60%">
                                <h2>
                                    <b><u>बिहार विद्यालय परीक्षा समिति , पटना</u></b>
                                </h2>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center;">
                                <h3>

                                    उक्त  चयन सूची ( Selection List) में आपका चयन नहीं हो सका है क्योंकि आपने नामांकन के लिए जो भी विकल्प (+2 विद्यालय / महाविद्यालय / संकाय) भरा था, उनमें से आपके अंक (मार्क्स) एवं आरक्षण श्रेणी के आधार पर आपका चयन आपके द्वारा दिए गए किसी भी विकल्प (Choice) में संभव नहीं हुआ है |
                                </h3>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="content" align="justify">
                                <asp:Literal ID="Literal3" runat="server"></asp:Literal>
                                <br />
                            </td>
                        </tr>
                    </table>

                    <div class="clear">
                    </div>
                </div>--%>
            </div>

           <%--<div class="row" id="divnotselect" runat="server" visible="false">
                <div style="color: #ff0000; padding: 200px 400px; font-size: 20px;">
                    <h5>
                        <asp:Literal ID="msgNotSelected" runat="server"></asp:Literal>
                    </h5>
                </div>
            </div>
                --%>
            <div id="divAdmitted" runat="server" visible="false">
                <div class="msg">

                    <table class="inti">
                        <tr>
                            <td style="text-align: center; width: 40%">
                                <img src="../images/BiharLogo.png" alt="BSEB, BIHAR" />
                            </td>
                            <td style="text-align: left; width: 60%">
                                <h2>
                                    <b><u>बिहार विद्यालय परीक्षा समिति , पटना</u></b>
                                </h2>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center;">
                                <h3>आपका नामांकन
                                                        <asp:Literal ID="litSelection" runat="server"></asp:Literal>
                                    के
                            चयनित कॉलेज में पूरा हो गया है ।
                                </h3>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="content" align="justify">
                                <asp:Literal ID="Literal1" runat="server"></asp:Literal>
                                <br />
                            </td>
                        </tr>
                    </table>

                    <div class="clear">
                    </div>
                </div>
            </div>
            <div class="row" id="divDateLine" runat="server" visible="false">
                <div style="color: #ff0000; padding: 200px 400px; font-size: 20px;">
                    <h5>
                        <asp:Literal ID="litMessage" runat="server"></asp:Literal>
                    </h5>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
