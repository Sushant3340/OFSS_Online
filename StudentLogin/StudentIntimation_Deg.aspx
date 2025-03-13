<%--'**********************************************************************************
' File Name             :   StudentIntimation_Deg.aspx
' Description           :   View Student Initimation reports of degree colleges 
' Created by            :   Akshaya Kumar Sahoo
' Created On            :   03rd July 2018
' Modification History  :
'                           <CR no.>                      <Date>                <Modified by>                        <Modification Summary>'                                                         
'

'**************************************************************************************/--%>

<%@ Page Language="C#" AutoEventWireup="true" CodeFile="StudentIntimation_Deg.aspx.cs"
    Inherits="StudentLogin_StudentIntimation_Deg" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Intimation</title>
    <meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
    <style type="text/css">
        .pageBreakAfter
        {
            margin-bottom: 0;
            page-break-after: always;
        }
        .pageBreakBefore
        {
            margin-bottom: 0;
            page-break-before: always;
        }
        .clbdr
        {
            border: 1px solid #666666;
        }
        .details
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #1E1E1E;
            text-decoration: none;
            line-height: 20px;
        }
        .blkbg
        {
            color: #FFFFFF;
            background-color: #282828;
            text-align: center;
            padding-top: 2px;
            padding-bottom: 2px;
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
        }
        .footblkbg
        {
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
        .blackbold
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 20px;
            font-weight: bold;
            color: #232323;
            text-decoration: none;
            line-height: 25px;
        }
        .norbold
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 14px;
            font-weight: bold;
            color: #1E1E1E;
            text-decoration: none;
            line-height: 20px;
        }
        .subhd
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 12px;
            font-weight: normal;
            color: #000;
            text-decoration: none;
            line-height: 20px;
        }
        .content
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 12px;
            font-weight: normal;
            color: #000;
            text-decoration: none;
            line-height: 18px;
        }
        .content1
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: normal;
            color: #252525;
            text-decoration: none;
            line-height: 18px;
        }
        .dotted
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: normal;
            color: #1B1B1B;
            border-bottom-width: 1px;
            border-bottom-style: dashed;
            border-bottom-color: #333333;
        }
        .viewTable table
        {
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
        .viewTable table a
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: bold;
            color: #0033FF;
            text-decoration: none;
        }
        .viewTable table a:hover
        {
            color: #000000;
            text-decoration: underline;
        }
        .viewTable table th
        {
            background-color: #000;
            border-bottom-width: 1px;
            border-left-width: 1px;
            border-left-style: dashed;
            border-bottom-color: #2A2A2A;
            border-left-color: #2A2A2A;
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #fff;
            line-height: 19px;
        }
        .viewTable table td
        {
            border-left-width: 1px;
            border-left-style: solid;
            border-left-color: #2A2A2A;
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: normal;
            color: #000000;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: #999999;
        }
        .redbold
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #C60000;
            text-decoration: none;
        }
        .viewTable1 table
        {
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
        .viewTable1 table a
        {
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: bold;
            color: #0033FF;
            text-decoration: none;
        }
        .viewTable1 table a:hover
        {
            color: #000000;
            text-decoration: underline;
        }
        .viewTable1 table th
        {
            background-color: #fff;
            border: solid 1px #ccc;
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #000;
            line-height: 19px;
        }
        .viewTable1 table td
        {
            border: solid 1px #ccc;
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: normal;
            color: #000000;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: #999999;
        }
        .border-box
        {
            border: solid 2px #000000 !important;
        }
    </style>
    <style type="text/css">
        .inti
        {
            width: 950px;
            margin: 0 auto;
            border: 1px solid #e1e1e1;
            padding: 15px;
        }
        
        .style4
        {
            width: 177px;
        }
        .style9
        {
            width: 37px;
        }
        
        ul.intimtion-ul
        {
            margin: 0;
            padding: 0;
        }
        ul.intimtion-ul li
        {
            list-style-type: decimal-leading-zero;
            padding-left: 7px;
            margin-left: 27px;
            padding-top: 5px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
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
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 0px;
                                                        margin-bottom: 0; padding-bottom: 0;">
                                                        <tr>
                                                            <td width="90" rowspan="3" align="center" style="border-left: none; border-bottom: none;
                                                                border-right: none;">
                                                                <img src="../images/BiharLogo.png" width="100%" alt="BiharLogo.png" />
                                                            </td>
                                                            <td style="border: 0; text-align: center">
                                                                <span class="blackbold" style="padding-left: 41px">बिहार विद्यालय परीक्षा समिति</span>
                                                                <br />
                                                                <span class="norbold" style="padding-left: 50px">सत्र <b>2018-2021</b> में स्नातक (ऑनर्स)/पास
                                                                    कोर्स में नामांकन हेतु
                                                                    <br />
                                                                    तृतीय चयन सूची <b>( Third Selection List)</b> से संबंधित सूचना पत्र
                                                                    <br />
                                                                    (Intimation Letter)
                                                                    <br />
                                                                    <u>(वैसे आवेदकों के लिए जिनका चयन द्वितीय चयन सूची (Second Selection List) में हुआ था)</u>
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
                                <td width="20">
                                </td>
                                <td width="125" align="center" valign="top">
                                    <asp:Image runat="server" ID="imgBarcode" Width="120px" Height="30px" />
                                    <br />
                                    <asp:Label ID="lblBarcode" runat="server" Font-Bold="true" CssClass="norbold"></asp:Label>
                                    <%--  <div style="float: left; width: 100%; background: #000; color: #fff;">
                                        <asp:Label runat="server" ID="lblSelectiontype" Text="प्रथम चुनाव"></asp:Label>
                                    </div>--%>
                                </td>
                            </tr>
                        </table>
                        <table width="100%">
                            <tr>
                                <td class="details" width="95%">
                                    सेवा में,<br />
                                    आवेदक का नाम :<asp:Label ID="lblName" runat="server" Text=""></asp:Label>
                                    <br />
                                    <%--<span class="style1">व्यक्तिगत जानकारी</span><br />--%>
                                    <div class="viewTable">
                                        <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0px; border: #000 1px solid;">
                                            <tr>
                                                <th align="center">
                                                    पिता का नाम
                                                </th>
                                                <th align="center">
                                                    माँ का नाम
                                                </th>
                                                <th align="center">
                                                    जन्म तिथि
                                                </th>
                                                <th align="center">
                                                    लिंग
                                                </th>
                                                <th align="center">
                                                    आरक्षण कोटि
                                                </th>
                                                <th align="center">
                                                    मोबाइल न०
                                                </th>
                                            </tr>
                                            <tr>
                                                <td align="center">
                                                    &nbsp;
                                                    <asp:Label ID="lblFather" runat="server" Text=""></asp:Label>
                                                </td>
                                                <td align="center">
                                                    &nbsp;
                                                    <asp:Label ID="lblMother" runat="server" Text=""></asp:Label>
                                                </td>
                                                <td align="center">
                                                    &nbsp;
                                                    <asp:Label ID="lblDob" runat="server" Text=""></asp:Label>
                                                </td>
                                                <td align="center">
                                                    &nbsp;
                                                    <asp:Label ID="lblGender" runat="server" Text=""></asp:Label>
                                                </td>
                                                <td align="center">
                                                    &nbsp;
                                                    <asp:Label ID="lblcategory" runat="server" Text=""></asp:Label>
                                                </td>
                                                <td align="center">
                                                    &nbsp;
                                                    <asp:Label ID="lblMob" runat="server" Text=""></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    पता :
                                                    <asp:Label ID="lbladrss" runat="server" Text=""></asp:Label>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                                <td width="5%">
                                </td>
                                <td align="center" width="10%" style="border: solid 2px #000000;">
                                    <asp:Image runat="server" ID="imgPhoto" Width="100px" Height="100px" CssClass="clbdr"
                                        ImageUrl="~/images/noimage.JPG" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="20" colspan="2">
                    </td>
                </tr>
                <tr runat="server" id="SlideUp" visible="false">
                    <td colspan="2" class="content" align="justify">
                        <%--<span class="style1">महत्वपूर्ण तथ्य :</span><br />--%>
                        <ul class="intimtion-ul">
                            <li>समिति द्वारा दिनांक 25/08/2018 को स्नातक में नामांकन हेतु द्वितीय चयन सूची (Second
                                Selection List) जारी की गयी थी। सूची में चयन होने के पश्चात् चयनित विद्यार्थियों
                                को दिनांक 26/08/2018 से 29/08/2018 तक नामांकन लेने हेतु सूचित किया गया था। वैसे
                                विद्यार्थी जिन्होंने निर्धारित तिथि 30 जुलाई, 2018 तक आवेदन नहीं भरा था अथवा जिन्होंने
                                प्रथम चयन सूची में चयनित होने के बावजूद संबंधित महाविद्यालय/संकाय/विषय में किसी
                                कारणवश नामांकन नहीं लिया था, वैसे आवेदकों को भी दोबारा दिनांक 31/08/2018 तक आवेदन
                                भरने का मौका दिया गया था। इसके अतिरिक्त वैसे विद्यार्थी जिनका चयन द्वितीय चयन सूची
                                (Second Selection List) में नहीं हुआ था, वैसे विद्यार्थियों को अपना विकल्प को दोबारा
                                बदलने का मौका दिया गया था। द्वितीय चयन सूची (Second Selection List) के आधार पर नामांकन
                                प्रक्रिया समाप्त होने के पश्चात् तृतीय चयन सूची (Third Selection List) जारी की गयी
                                है। </li>
                            <li>आपको सूचित किया जाता है कि वर्ष 2018-21 सत्र के लिए स्नातक ऑनर्स/पास कोर्स में जो
                                आवेदन पत्र जमा किया गया था उसका Reference ID/Barcode संख्या
                                <asp:Label ID="lblBarCodeNo" Font-Bold="true" runat="server"></asp:Label>
                                है। आपके द्वारा प्राथमिकता के अनुसार नामांकन हेतु जिन महाविद्यालयों का विकल्प दिया
                                गया था, उनमें से आपके द्वारा भरे गए प्राथमिकता, +2/इंटरमीडिएट परीक्षा में आप को
                                प्राप्त कुल अंक प्रतिशत (%)आपके आरक्षण कोटि एवं विश्वविद्यालयों के नियमों के आधार
                                पर स्नातक (ऑनर्स/पास कोर्स) में नामांकन हेतु तृतीय चयन सूची (Third Selection List)
                                में आपको निम्नलिखित महाविद्यालय/संकाय/विषय आवंटित किया जाता है :-
                                <ol class="intimtion-ol">
                                    <li>महाविद्यालय का नाम :
                                        <asp:Label ID="lblcollege" Font-Bold="true" runat="server"></asp:Label>
                                    </li>
                                    <li>संकाय :
                                        <asp:Label ID="lblstream" Font-Bold="true" runat="server"></asp:Label>
                                    </li>
                                    <li>विषय :
                                        <asp:Label ID="lblsubject" Font-Bold="true" runat="server"></asp:Label>
                                    </li>
                                </ol>
                            </li>
                            <li>आपको यह भी सूचित किया जाता है कि चूँकि आपके द्वारा Slide Up के लिए किये गये अनुरोध
                                के आधार पर आपको इस तृतीय चयन सूची (Third Selection List) में उपर्युक्त कंडिका-2
                                में अंकित कॉलेज/संकाय आवंटित किया गया है अतः आपका पूर्व के कॉलेज में लिया गया नामांकन
                                (Admission) को रद्द (Cancel) कर दिया गया है तथा आपकी सीट को दूसरे विद्यार्थी को
                                आवंटित करने हेतु अग्रत्तर कार्रवाई की गई है। अतः आपसे अनुरोध है कि आप कृपया उपरोक्त
                                कंडिका-2 में अंकित महाविद्यालय में आप अपना नामांकन दिनांक 05 सितम्बर, 2018 से 10
                                सितम्बर, 2018 के बीच अवश्य करा लें। अगर आपके द्वारा उक्त निर्धारित तिथि तक नामांकन
                                नहीं कराया जाता है तो आपका अभ्यर्थित्व रद्द कर दिया जाएगा। <b><u>तृतीय चयन सूची के पश्चात
                                    OFSS के माध्यम से कोई अन्य चयन सूची जारी नहीं की जायेगी।</u></b> </li>
                            <h3 style="text-align: center;">
                                <u><strong>आवश्यक निर्देश एवं सूचनाएँ</strong></u></h3>
                            <li>
                                <h3>
                                    <strong>आवेदक/आवेदिका आवंटित महाविद्यालय में नामांकन हेतु निर्गत Reference ID/ Barcode
                                        युक्त चुने जाने से सम्बन्धित पत्र (Intimation Letter) एवं पूर्व में भरे गए सामान्य
                                        आवेदन पत्र (Common Application Form) की प्रति निश्चित् रूप से ले जायेंगे।</strong></h3>
                            </li>
                            <li>आवेदक/आवेदिका नामांकन कराने के पूर्व आवंटित महाविद्यालय में उपस्थित होकर शुल्क तथा
                                अन्य सभी प्रकार की जानकारियाँ प्राप्त कर सकते हैं।</li>
                            <li>आवदेक/आवेदिका को सम्बन्धित महाविद्यालय में नामांकन के समय जाँच के लिए उन मूल अभिलेखों
                                को ले जाना होगा, जो नामांकन के लिए आवश्यक है। जैसे 10 वीं बोर्ड परीक्षा का अंक पत्र,
                                उतीर्णता प्रमाण पत्र, मूल प्रमाण पत्र, 12वीं बोर्ड परीक्षा का उत्तीर्णता अंक पत्र,
                                अस्थायी प्रमाण पत्र, विद्यालय/महाविद्यालय परित्याग पत्र, प्रवजन प्रमाण पत्र, आचरण
                                प्रमाण पत्र, पासपोर्ट आकार के पाँच रंगीन फोटो, जाति प्रमाण पत्र तथा कोई अन्य प्रमाण
                                पत्र जिसकी आवश्यकता आवंटित महाविद्यालय द्वारा मांगी जाय।</li>
                            <li>महाविद्यालय में नामांकन के पश्चात् आवेदक द्वारा जमा किये गये मूल अभिलेखों में से
                                विद्यालय या महाविद्यालय द्वारा निर्गत परित्याग प्रमाण पत्र, चरित्र प्रमाण पत्र,
                                तथा प्रवजन (Migration) प्रमाण पत्र सम्बन्धित महाविद्यालय द्वारा रख लिया जाएगा।
                            </li>
                            <li>नामांकन के समय अगर सम्बन्धित महाविद्यालय द्वारा नामांकन हेतु कुछ अन्य अभिलेखों की
                                माँग की जाती है, तो नामांकन के पूर्व जाकर संबंधित महाविद्यालयों से जानकारी प्राप्त
                                कर लें तथा उन अभिलेखों को महाविद्यालय को उपलब्ध करवायें।</li>
                            <li>आवेदकों को सलाह दी जाती है कि नामांकन की तिथि और अन्य औपचारिकताओं के लिए उन्हें
                                सम्बन्धित महाविद्यालय से सम्पर्क करना चाहिये और नामांकन की प्रक्रिया से सम्बन्धित
                                जानकारी को प्राप्त कर लेना चाहिये। </li>
                            <li>OFSS के अन्तर्गत नामांकन शुल्क जमा करने के सम्बन्ध में निम्नांकित प्रावधान किया
                                गया है :
                                <ol class="intimtion-ol">
                                    <li>OFSS के अन्तर्गत किसी भी विद्यार्थी का प्रथम बार नामांकन के समय महाविद्यालय द्वारा
                                        निर्धारित शुल्क लिया जाय।</li>
                                    <li>तत्पश्चात् यदि किसी विद्यार्थी आगामी द्वितीय चयन सूची अथवा तृतीय चयन सूची के आधार
                                        पर बेहतर विकल्प (Higher Prference ) के संस्थान में चयन होता है, तो ऐसे संस्थानों
                                        में विद्यार्थी द्वारा पुनः नामांकन कराने के समय महाविद्यालय द्वारा ऐसे विद्यार्थियों
                                        से कोई भी नामांकन शुल्क नहीं लिया जायेगा।</li>
                                    <li>पूरी चयन प्रक्रिया के समाप्ति के पश्चात् (अर्थात प्रथम चयन सूची, द्वितीय चयन सूची
                                        तथा तृतीय सूची के उपरान्त नामांकन के पश्चात्) जो विद्यार्थी अन्तिम रूप से जहाँ नामांकित
                                        रहेंगे, उस संस्थान के प्रधान द्वारा नामांकन से सम्बन्धित शुल्क की राशि की निम्नरूपेण
                                        समीक्षा की जायेगी :-
                                        <ol class="intimtion-ol">
                                            <li>अगर यह नामांकन प्रथम नामांकन है, तो संस्थान द्वारा नियमानुसार पूरी नामांकन राशि
                                                प्राप्त की जाय।</li>
                                            <li>अगर यह द्वितीय अथवा तृतीय नामांकन है, तो यह देखा जाना होगा कि विद्यार्थी द्वारा
                                                पूर्व के संस्थान में नामांकन के समय कितनी राशि जमा की गयी है- अगर पूर्व के संस्थान
                                                द्वारा लिया गया नामांकन शुल्क अन्तिम रूप से नामांकित संस्थान के नामांकन शुल्क से
                                                कम है, तो उतनी अतिरिक्त राशि विद्यार्थी से अन्तिम नामांकित संस्थान द्वारा प्राप्त
                                                कर लिया जायेगा और अगर यह राशि अन्तिम रूप से नामांकित संस्थान के नामांकन शुल्क से
                                                ज्यादा है, तो अतिरिक्त राशि पूर्व के नामांकित संस्थान प्राचार्य द्वारा एक माह के
                                                अन्दर उस विद्यार्थी से प्राप्त किये गए नामांकन शुल्क को उस विद्यार्थी के अंतिम नामांकित
                                                संस्थान को अवश्य ही वापस कर दिया जाय। साथ ही विद्यार्थी के पूर्व नामांकित संस्थान
                                                द्वारा एक माह के अन्दर उस विद्यार्थी से प्राप्त किये नामांकन शुल्क को उस विद्यार्थी
                                                के अंतिम नामांकित संस्थान को वापस कर दी जाय।</li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li>अगर आवेदक द्वारा सामान्य आवेदन प्रपत्र (Common Application Form ) में भरी गयी आरक्षण
                                श्रेणी अथवा विभिन्न विषयों के अंक (बिहार बोर्ड के अलावा अन्य बोर्ड के लिए) सूचना
                                सम्बन्धित महाविद्यालय द्वारा गलत पायी जाती है, तो उस स्थिति में उनका Intimation
                                Letter रद्द समझा जाएगा।
                                <hr />
                                <ol class="intimtion-ol">
                                    <strong>नोटः. </strong>
                                    <li>संबंधित महाविद्यालयों को सूचित किया जाता है कि सूचना पत्र (Intimation Letter) पर
                                        अंकित बारकोड नम्बर का मिलान समिति द्वारा उपलब्ध कराये गये सूची से अवश्य कर लें।</li>
                                    <li>किसी तरह की जानकारी हेतु कृपया सम्बन्धित आवंटित महाविद्यालय अथवा OFSS हेल्पडेस्क
                                        नम्बर 0612 2230009 पर सम्पर्क करें।</li>
                                    <li>यह एक कम्प्यूटर जनित पत्र है] अतः इस पर किसी के हस्ताक्षर की आवश्यकता नहीं है।</li>
                                </ol>
                            </li>
                        </ul>
                        <br />
                    </td>
                </tr>
                <tr runat="server" id="FreshSelection" visible="false">
                    <td colspan="2" class="content" align="justify">
                        <%--<span class="style1">महत्वपूर्ण तथ्य :</span><br />--%>
                        <ul class="intimtion-ul">
                            <li>समिति द्वारा दिनांक 25/08/2018 को स्नातक में नामांकन हेतु द्वितीय चयन सूची (Second
                                Selection List) जारी की गयी थी। सूची में चयन होने के पश्चात् चयनित विद्यार्थियों
                                को दिनांक 26/08/2018 से 29/08/2018 तक नामांकन लेने हेतु सूचित किया गया था। वैसे
                                विद्यार्थी जिन्होंने निर्धारित तिथि 30 जुलाई, 2018 तक आवेदन नहीं भरा था अथवा जिन्होंने
                                प्रथम चयन सूची में चयनित होने के बावजूद संबंधित महाविद्यालय/संकाय/विषय में किसी
                                कारणवश नामांकन नहीं लिया था, वैसे आवेदकों को भी दोबारा दिनांक 31/08/2018 तक आवेदन
                                भरने का मौका दिया गया था। इसके अतिरिक्त वैसे विद्यार्थी जिनका चयन द्वितीय चयन सूची
                                (Second Selection List) में नहीं हुआ था, वैसे विद्यार्थियों को अपना विकल्प को दोबारा
                                बदलने का मौका दिया गया था। द्वितीय चयन सूची (Second Selection List) के आधार पर नामांकन
                                प्रक्रिया समाप्त होने के पश्चात् तृतीय चयन सूची (Third Selection List) जारी की गयी
                                है। </li>
                            <li>आपको सूचित किया जाता है कि वर्ष 2018-21 सत्र के लिए स्नातक ऑनर्स/पास कोर्स में जो
                                आवेदन पत्र जमा किया गया था उसका Reference ID/Barcode संख्या
                                <asp:Label ID="Label1" Font-Bold="true" runat="server"></asp:Label>
                                है। आपके द्वारा प्राथमिकता के अनुसार नामांकन हेतु जिन महाविद्यालयों का विकल्प दिया
                                गया था, उनमें से आपके द्वारा भरे गए प्राथमिकता, +2/इंटरमीडिएट परीक्षा में आप को
                                प्राप्त कुल अंक प्रतिशत (%)आपके आरक्षण कोटि एवं विश्वविद्यालयों के नियमों के आधार
                                पर स्नातक (ऑनर्स/पास कोर्स) में नामांकन हेतु तृतीय चयन सूची (Third Selection List)
                                में आपको निम्नलिखित महाविद्यालय/संकाय/विषय आवंटित किया जाता है :-
                                <ol class="intimtion-ol">
                                    <li>महाविद्यालय का नाम :
                                        <asp:Label ID="lblcollege1" Font-Bold="true" runat="server"></asp:Label>
                                    </li>
                                    <li>संकाय :
                                        <asp:Label ID="lblstream1" Font-Bold="true" runat="server"></asp:Label>
                                    </li>
                                    <li>विषय :
                                        <asp:Label ID="lblsubject1" Font-Bold="true" runat="server"></asp:Label>
                                    </li>
                                </ol>
                            </li>
                            <li>आपको सूचित किया जाता है कि कृपया उक्त आवंटित महाविद्यालय में आप अपना नामांकन दिनांक
                                05 सितम्बर, 2018 से 10 सितम्बर, 2018 के बीच अवश्य करा लें। अगर आपके द्वारा उक्त
                                निर्धारित तिथि तक नामांकन नहीं कराया जाता है तो आपका अभ्यर्थित्व रद्द कर दिया जाएगा।
                                तृतीय चयन सूची के पश्चात OFSS के माध्यम से कोई अन्य चयन सूची जारी नहीं की जायेगी।
                            </li>
                            <h3 style="text-align: center;">
                                <u><strong>आवश्यक निर्देश एवं सूचनाएँ</strong></u></h3>
                            <li>
                                <h3>
                                    <strong>आवेदक/आवेदिका आवंटित महाविद्यालय में नामांकन हेतु निर्गत Reference ID/ Barcode
                                        युक्त चुने जाने से सम्बन्धित पत्र (Intimation Letter) एवं पूर्व में भरे गए सामान्य
                                        आवेदन पत्र (Common Application Form) की प्रति निश्चित् रूप से ले जायेंगे।</strong></h3>
                            </li>
                            <li>आवेदक/आवेदिका नामांकन कराने के पूर्व आवंटित महाविद्यालय में उपस्थित होकर शुल्क तथा
                                अन्य सभी प्रकार की जानकारियाँ प्राप्त कर सकते हैं।</li>
                            <li>आवदेक/आवेदिका को सम्बन्धित महाविद्यालय में नामांकन के समय जाँच के लिए उन मूल अभिलेखों
                                को ले जाना होगा, जो नामांकन के लिए आवश्यक है। जैसे 10 वीं बोर्ड परीक्षा का अंक पत्र,
                                उतीर्णता प्रमाण पत्र, मूल प्रमाण पत्र, 12वीं बोर्ड परीक्षा का उत्तीर्णता अंक पत्र,
                                अस्थायी प्रमाण पत्र, विद्यालय/महाविद्यालय परित्याग पत्र, प्रवजन प्रमाण पत्र, आचरण
                                प्रमाण पत्र, पासपोर्ट आकार के पाँच रंगीन फोटो, जाति प्रमाण पत्र तथा कोई अन्य प्रमाण
                                पत्र जिसकी आवश्यकता आवंटित महाविद्यालय द्वारा मांगी जाय।</li>
                            <li>महाविद्यालय में नामांकन के पश्चात् आवेदक द्वारा जमा किये गये मूल अभिलेखों में से
                                विद्यालय या महाविद्यालय द्वारा निर्गत परित्याग प्रमाण पत्र, चरित्र प्रमाण पत्र,
                                तथा प्रवजन (Migration) प्रमाण पत्र सम्बन्धित महाविद्यालय द्वारा रख लिया जाएगा।
                            </li>
                            <li>नामांकन के समय अगर सम्बन्धित महाविद्यालय द्वारा नामांकन हेतु कुछ अन्य अभिलेखों की
                                माँग की जाती है, तो नामांकन के पूर्व जाकर संबंधित महाविद्यालयों से जानकारी प्राप्त
                                कर लें तथा उन अभिलेखों को महाविद्यालय को उपलब्ध करवायें।</li>
                            <li>आवेदकों को सलाह दी जाती है कि नामांकन की तिथि और अन्य औपचारिकताओं के लिए उन्हें
                                सम्बन्धित महाविद्यालय से सम्पर्क करना चाहिये और नामांकन की प्रक्रिया से सम्बन्धित
                                जानकारी को प्राप्त कर लेना चाहिये। </li>
                            <li>OFSS के अन्तर्गत नामांकन शुल्क जमा करने के सम्बन्ध में निम्नांकित प्रावधान किया
                                गया है :
                                <ol class="intimtion-ol">
                                    <li>OFSS के अन्तर्गत किसी भी विद्यार्थी का प्रथम बार नामांकन के समय महाविद्यालय द्वारा
                                        निर्धारित शुल्क लिया जाय।</li>
                                    <li>तत्पश्चात् यदि किसी विद्यार्थी आगामी द्वितीय चयन सूची अथवा तृतीय चयन सूची के आधार
                                        पर बेहतर विकल्प (Higher Prference ) के संस्थान में चयन होता है, तो ऐसे संस्थानों
                                        में विद्यार्थी द्वारा पुनः नामांकन कराने के समय महाविद्यालय द्वारा ऐसे विद्यार्थियों
                                        से कोई भी नामांकन शुल्क नहीं लिया जायेगा।</li>
                                    <li>पूरी चयन प्रक्रिया के समाप्ति के पश्चात् (अर्थात प्रथम चयन सूची, द्वितीय चयन सूची
                                        तथा तृतीय सूची के उपरान्त नामांकन के पश्चात्) जो विद्यार्थी अन्तिम रूप से जहाँ नामांकित
                                        रहेंगे, उस संस्थान के प्रधान द्वारा नामांकन से सम्बन्धित शुल्क की राशि की निम्नरूपेण
                                        समीक्षा की जायेगी :-
                                        <ol class="intimtion-ol">
                                            <li>अगर यह नामांकन प्रथम नामांकन है, तो संस्थान द्वारा नियमानुसार पूरी नामांकन राशि
                                                प्राप्त की जाय।</li>
                                            <li>अगर यह द्वितीय अथवा तृतीय नामांकन है, तो यह देखा जाना होगा कि विद्यार्थी द्वारा
                                                पूर्व के संस्थान में नामांकन के समय कितनी राशि जमा की गयी है- अगर पूर्व के संस्थान
                                                द्वारा लिया गया नामांकन शुल्क अन्तिम रूप से नामांकित संस्थान के नामांकन शुल्क से
                                                कम है, तो उतनी अतिरिक्त राशि विद्यार्थी से अन्तिम नामांकित संस्थान द्वारा प्राप्त
                                                कर लिया जायेगा और अगर यह राशि अन्तिम रूप से नामांकित संस्थान के नामांकन शुल्क से
                                                ज्यादा है, तो अतिरिक्त राशि पूर्व के नामांकित संस्थान प्राचार्य द्वारा एक माह के
                                                अन्दर उस विद्यार्थी से प्राप्त किये गए नामांकन शुल्क को उस विद्यार्थी के अंतिम नामांकित
                                                संस्थान को अवश्य ही वापस कर दिया जाय। साथ ही विद्यार्थी के पूर्व नामांकित संस्थान
                                                द्वारा एक माह के अन्दर उस विद्यार्थी से प्राप्त किये नामांकन शुल्क को उस विद्यार्थी
                                                के अंतिम नामांकित संस्थान को वापस कर दी जाय।</li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li>अगर आवेदक द्वारा सामान्य आवेदन प्रपत्र (Common Application Form ) में भरी गयी आरक्षण
                                श्रेणी अथवा विभिन्न विषयों के अंक (बिहार बोर्ड के अलावा अन्य बोर्ड के लिए) सूचना
                                सम्बन्धित महाविद्यालय द्वारा गलत पायी जाती है, तो उस स्थिति में उनका Intimation
                                Letter रद्द समझा जाएगा।
                                <hr />
                                <ol class="intimtion-ol">
                                    <strong>नोटः. </strong>
                                    <li>संबंधित महाविद्यालयों को सूचित किया जाता है कि सूचना पत्र (Intimation Letter) पर
                                        अंकित </li>
                                    <li>किसी तरह की जानकारी हेतु कृपया सम्बन्धित आवंटित महाविद्यालय अथवा OFSS हेल्पडेस्क
                                        नम्बर 0612 2230009 पर सम्पर्क करें।</li>
                                    <li>यह एक कम्प्यूटर जनित पत्र है] अतः इस पर किसी के हस्ताक्षर की आवश्यकता नहीं है।</li>
                                </ol>
                            </li>
                        </ul>
                        <br />
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="color: Red" runat="server" id="NB">
                            <strong>Note :</strong><p>
                                <strong>
                                    <%-- चयनित कॉलेज में दाखिला हेतु आवेदक को सामान्य आवेदन प्रपत्र (CAF)का बकाया शुल्क रुपया
                                ३००/- दाखिला शुल्क के साथ जमा करना अनिर्बार्य है।
                            </p>
                                <p>
                                    सभी कॉलेज को यह सूचित किया जा रहा है कि जिस भी आवेदक के Intimation Letter में उपर्युक्त
                                    बाक्य है, उस आवेदक से आप दाखिला शुल्क के साथ आतरिक्त आवेदन फार्म का शुल्क रुपया
                                    ३००/- प्राप्त करें।--%>
                                    <h4>
                                        इस आवेदक ने आवेदन शुल्क (300 रुपया) आवेदन देने के समय OFSS Portal में जमा नहीं किया
                                        है , इसलिए सम्बंधित महाविद्यालय/विद्यालय को अवश्य रूप से इस आवेदक से 300 रुपया नामांकन
                                        शुल्क के साथ जमा करा लेना है |
                                    </h4>
                                </strong>
                            </p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>
                            <strong><i>Intimation Letter Downloaded On
                                <asp:Label runat="server" ID="date"></asp:Label></i></strong></p>
                    </td>
                </tr>
            </table>
        </div>
        <div runat="server" id="NotSelected" visible="false">
            <table class="inti">
                <tr>
                    <td style="text-align: center; width: 40%">
                        <img src="../images/BiharLogo.png" alt="BSEB, BIHAR" />
                    </td>
                    <td style="text-align: left; width: 60%">
                        <h2>
                            <b><u>बिहार विद्यालय परीक्षा समिति , पटना </u></b>
                        </h2>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                        <h3>
                            <b>वैसे विद्यार्थी, जिनका चयन तृतीय चयन सूची (Third Selection List) में नहीं हुआ है,
                                के लिए आवश्यक सूचना</b></h3>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <ul class="intimtion-ul">
                            <li>समिति द्वारा दिनांक 25/08/2018 को स्नातक में नामांकन हेतु द्वितीय चयन सूची (Second
                                Selection List) जारी की गयी थी। सूची में चयन होने के पश्चात् चयनित विद्यार्थियों
                                को दिनांक 26/08/2018 से 29/08/2018 तक नामांकन लेने हेतु सूचित किया गया था। वैसे
                                विद्यार्थी जिन्होंने निर्धारित तिथि 30 जुलाई, 2018 तक आवेदन नहीं भरा था अथवा जिन्होंने
                                प्रथम चयन सूची में चयनित होने के बावजूद संबंधित महाविद्यालय/संकाय/विषय में किसी
                                कारणवश नामांकन नहीं लिया था, वैसे आवेदकों को भी दोबारा दिनांक 31/08/2018 तक आवेदन
                                भरने का मौका दिया गया था। इसके अतिरिक्त वैसे विद्यार्थी जिनका चयन द्वितीय चयन सूची
                                (Second Selection List) में नहीं हुआ था, वैसे विद्यार्थियों को अपना विकल्प को दोबारा
                                बदलने का मौका दिया गया था। द्वितीय चयन सूची (Second Selection List) के आधार पर नामांकन
                                प्रक्रिया समाप्त होने के पश्चात् तृतीय चयन सूची (Third Selection List) जारी की गयी
                                है। </li>
                            <li>उक्त <b><u>तृतीय चयन सूची (Third Selection List)</u></b> में आपका चयन नहीं हो सका
                                है क्योंकि आपने नामांकन के लिए जो भी विकल्प (महाविद्यालय/संकाय/विषय) भरा था, उनमें
                                से आपके अंक (मार्क्स) एवं आरक्षण श्रेणी के आधार पर आपका चयन आपके द्वारा दिए गए किसी
                                भी विकल्प (Choices) में संभव नहीं हुआ है। इस संबंध में विस्तृत जानकारी हेतु आप OFSS
                                Portal पर उपलब्ध सभी कॉलेजों के सभी विषयों का तृतीय कट ऑफ लिस्ट (Third Cut Off Lust)
                                देख सकते हैं, जिससे यह स्पष्ट होगा कि जिन-जिन कॉलेजों/विषयों का विकल्प (Choices)
                                आपने भरा था, उनमें से <b><u>या तो उन सभी कॉलेजों/विषयों का कट ऑफ अंक आपके अंक से ज्यादा
                                    है या विश्वविद्यालयों द्वारा उपलब्ध कराये गए प्रावधानों के अनुसार संबंधित विषय में
                                    नामांकन के लिए आपके द्वारा न्यूनतम अर्हता (Minimum Criteria) पूर्ण नहीं की जा रही
                                    है, जिस कारण आपका चयन आपके द्वारा दिए गए किसी भी विकल्प में नहीं हुआ है।</u></b>
                            </li>
                            <li><b><u>तृतीय चयन सूची के आधार पर विभिन्न महाविद्यालयों में नामांकन की तिथि 05.09.2018
                                से 10.09.2018 निर्धारित की गयी है, इसके पश्चात OFSS के माध्यम से कोई अन्य चयन सूची
                                जारी नहीं की जायेगी। यह सूची अंतिम है। अतः इसके बाद वैसे महाविद्यालय जहाँ किसी भी
                                संकाय में सीटें खाली रह जाती है, वैसे महाविद्यालयों में दिनांक 13.09.2018 से स्पॉट
                                नामांकन (Spot Admission) की प्रक्रिया शुरू होगी जो 18.09.2018 तक चलेगी।</u></b></li>
                            <li>चूँकि आपका चयन अभी तक किसी महाविद्यालय/संकाय/विषय के लिये नहीं हो सका है, अतः आपको
                                यह सुझाव दिया जाता है कि आप जिस महाविद्यालय में नामांकन लेना चाहते हैं, में दिनांक
                                13.09.2018 की OFSS Portal पर खोलकर विभिन्न कॉलेज के रिक्त सीटों की विवरणी देख लें।
                                जिस कॉलेज में आप नामांकन (Admission) लेना चाहते हैं, उस कॉलेज में संपर्क कर रिक्त
                                सीटों के विरूद्ध स्पॉट नामांकन (Spot Admission) प्रक्रिया की जानकारी प्राप्त कर
                                लें। तृतीय चयन सूची में चयनित विद्यार्थियों के नामांकन हो जाने के पश्चात् रिक्त
                                सीटों की संख्या दिनांक 13.09.2018 को OFSS पोर्टल पर <a href="https://www.ofssbihar.in">
                                    www.ofssbihar.in</a> पर अपलोड कर दी जायेगी। जिसके आधार पर संबंधित कॉलेज में
                                13.09.2018 से 18.09.2018 तक स्पॉट नामांकन (Spot Admission) लिया जाएगा। इसके लिए
                                आपको निम्नलिखित रूप से कार्रवाई करनी होगीः-
                                <ol class="intimtion-ol">
                                    <li>आप सर्वप्रथम OFSS Portal पर जाकर जिस कॉलेज में नामांकन लेना चाहते हैं उस कॉलेज/संकाय/विषयवार
                                        रिक्त सीटों की संख्या देख लें।</li>
                                    <li>उसके पश्चात् OFSS Portal पर जाकर आप अपना बारकोड Reference Number एवं मोबाईल नम्बर
                                        डालकर स्पॉट नामांकन (Spot Admission) हेतु अपना आवेदन पत्र प्रिंट आउट कर लें।</li>
                                    <li>आप जिन-जिन कॉलेजों में नामांकन हेतु फॉर्म जमा करना चाहते हैं, उसकी हस्ताक्षरित प्रति
                                        उन कॉलेजों में जमा कर दें।</li>
                                    <li>आवेदन जमा करने के पश्चात कॉलेज आवेदन की जाँच करके स्पॉट नामांकन (Spot Admission)
                                        की सूची 20/9/2018 को प्रकाशित कर देंगे |</li>
                                    <li>उसके पश्चात उसके पश्चात् जिस कॉलेज में आपका नामांकन हेतु चयन होगा, उसमे आपको दिनांक
                                        20/9/2018 से 25/9/2018 के बीच में जाकर नामांकन ले लेना होगा | </li>
                                    <li>उसके पश्चात् जिस कॉलेज में आपका नामांकन होगा, उस कॉलेज के द्वारा आपके नामांकन को
                                        OFSS PORTAL में अपडेट कर दिया जाएगा, जिसकी सूचना आपको संबंधित महाविद्यालय द्वारा
                                        दी जाएगी। </li>
                                </ol>
                            </li>
                            <li>इसके संबंध में अधिक जानकारी समाचार पत्रों में विज्ञप्ति के माध्यम से 12.09.2018
                                को एवं OFSS Portal के माध्यम से दिनांक 12.09.2018 को दी जाएगी।</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
        <div runat="server" id="Rejected">
            <strong>
                <h4>
                    आपका चयन द्वितीय संशोधित चयन सूची (Second Revised Selection List) में किया गया था |
                    उसके पश्चात नामांकन लेने हेतु दिनांक 10 अगस्त से 20 अगस्त 2018 की तिथि निर्धारित
                    की गयी थी | इसकी सूचना आपको द्वितीय संशोधित चयन सूची (Second Revised Selection List)
                    के सूचना पत्र के माध्यम से भी दी गयी थी | इसके अलावा यह सूचना विभिन्न दैनिक समाचार
                    पत्रों में भी प्रकाशित की गयी थी | परन्तु अपने उक्त अवधि में चयनित कॉलेज में नामांकन
                    नहीं लिया , अत : द्वितीय संशोधित चयन सूची (Second Revised Selection List) के सूचना
                    पत्र की कंडिका संख्या 5 के आलोक में आपका अभ्यर्थित्व (candidature) रद्द (Cancel
                    ) कर दिया गया है एवं इस कारण से आपका नाम द्वितीय एवं या तृतीय चयन सूची से हटा दिया
                    गया है |
                </h4>
            </strong>
        </div>
        <div style="page-break-after: always">
        </div>
    </div>
    </form>
</body>
</html>
