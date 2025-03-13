﻿

// JScript File
var xmlHttp = null;
var ctlTofill;
var ctlEle1;
var ctlEle2;
var ctlEle3;
var ctlfEle1;
var ctlfEle2;
var ctlfEle3
//================valriable For Option Details=====================
var dist;
var block;

var RollNo;
var CollegeId;
var StreamId;
var CompulsoryId;
var Elective1;
var Elective2;
var Elective3;
var FElective1;
var FElective2;
var FElective3;
var Accomodation;
var optionId;
//===========================variable for Option text=============
var CText;
var SText;
var CompSId;
var E1Text;
var E2Text;
var E3Text;
var F1Text;
var F2Text;
var F3Text;
//===========================================================================
var valu = 'Y';
//===========================================================================
//================Function to load at the same time==========================
//======================FUNCTION TO LOAD DISTRICT======================
//=====================To Load District & District Wise College========
//====================Added on 10-May-2011=========================
function loadXMLDOC() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

//=====================function to Hostel Prority==========================
function loadHostelPriority() {

    var xmlColls = null;
    var xmlhttps = loadXMLDOC();
    xmlhttps.open("GET", "../MasterXML/HostelPrority.xml", false);
    xmlhttps.send();
    xmlColls = xmlhttps.responseXML;

    if (xmlColls != null) {
        var did = parseInt(document.getElementById('ddlCollege').options[document.getElementById('ddlCollege').selectedIndex].value);
        var col = xmlColls.getElementsByTagName("Table");
        var j;
        var k = 1;
        document.getElementById('Heading1').innerHTML = '';
        document.getElementById('fees1').innerHTML = '';
        document.getElementById('fees2').innerHTML = '';
        document.getElementById('cutoffST1').innerHTML = '';
        document.getElementById('cutoffSC1').innerHTML = '';
        document.getElementById('cutoffGen1').innerHTML = '';

        document.getElementById('Heading2').innerHTML = '';       
        
        document.getElementById('cutoffST2').innerHTML = '';
        document.getElementById('cutoffSC2').innerHTML = '';
        document.getElementById('cutoffGen2').innerHTML = '';
        if (document.getElementById('rbtSelfFinance').checked == true) {
            collegeType = 5;
        }
        for (j = 0; j < col.length; j++) {
            var innerCid;
            if (col[j].getElementsByTagName("CID")[0].childNodes[0].nodeValue == did) {
                innerCid = parseInt(col[j].getElementsByTagName("CID")[0].childNodes[0].nodeValue);
            }
            var e3;
            var cnt = 0;
            if (innerCid == did && collegeType == 5) {
                e3 = col[j].getElementsByTagName("HSTATUS")[0].childNodes[0].nodeValue;
                if (e3 == '0') {
                    document.getElementById('trHPriority').style.display = '';
                    document.getElementById('HType').style.color = "#CC33FF";
                    document.getElementById('HType').innerHTML = '<font size=3>Day-cum-Residential</font>';
                    document.getElementById('rbtAccomodation1').checked = false;
                    document.getElementById('rbtAccomodation2').checked = false;
                    document.getElementById('rbtAccomodation2').disabled = false;
                    document.getElementById('rbtAccomodation1').disabled = false;
                    break;
                }
                else if (e3 == '1') {
                    document.getElementById('trHPriority').style.display = '';
                    document.getElementById('HType').style.color = "#CC33FF";
                    document.getElementById('HType').innerHTML = '<font size=3>Fully Residential</font>';
                    document.getElementById('rbtAccomodation1').checked = true;
                    document.getElementById('rbtAccomodation2').checked = false;
                    document.getElementById('rbtAccomodation2').disabled = true;
                    document.getElementById('rbtAccomodation1').disabled = false;
                    break;
                }
                else if (e3 == '2') {
                    document.getElementById('trHPriority').style.display = '';
                    document.getElementById('HType').style.color = "#CC33FF";
                    document.getElementById('HType').innerHTML = '<font size=3>Fully Day Scholar</font>';
                    document.getElementById('rbtAccomodation1').checked = false;
                    document.getElementById('rbtAccomodation2').checked = true;
                    document.getElementById('rbtAccomodation1').disabled = true;
                    document.getElementById('rbtAccomodation2').disabled = false;
                    break;
                }
            }
            else {
                document.getElementById('trHPriority').style.display = 'none';
                document.getElementById('HType').style.color = "#CC33FF";
                document.getElementById('HType').innerHTML = '';
                document.getElementById('rbtAccomodation1').checked = false;
                document.getElementById('rbtAccomodation1').disabled = false;
            }
        }
    }
}
//=====================function Populate Hostel Fees======================
function loadHostelFees() {
    var xmlColls = null;
    var xmlhttps = loadXMLDOC();
    xmlhttps.open("GET", "../MasterXML/SFHostelFees.xml", false);
    xmlhttps.send();
    xmlColls = xmlhttps.responseXML;
    if (xmlColls != null) {

        var did = parseInt(document.getElementById('ddlCollege').options[document.getElementById('ddlCollege').selectedIndex].value);
        var sid = parseInt(document.getElementById('ddlStream').options[document.getElementById('ddlStream').selectedIndex].value);
        var col = xmlColls.getElementsByTagName("Table");
        var j;
        for (j = 0; j < col.length; j++) {
            var innerCid = parseInt(col[j].getElementsByTagName("int_collegeId")[0].childNodes[0].nodeValue);

            if (innerCid == did) {
                var fee1 = 0;
                var fee2 = 0;
                if (sid == '1') {
                    fee1 = parseFloat(col[j].getElementsByTagName("int_A1stYear")[0].childNodes[0].nodeValue);
                    fee2 = parseFloat(col[j].getElementsByTagName("int_A2ndYear")[0].childNodes[0].nodeValue);
                }
                if (sid == '2') {
                    fee1 = parseFloat(col[j].getElementsByTagName("int_S1stYear")[0].childNodes[0].nodeValue);
                    fee2 = parseFloat(col[j].getElementsByTagName("int_S2ndYear")[0].childNodes[0].nodeValue);
                }
                if (sid == '3') {
                    fee1 = parseFloat(col[j].getElementsByTagName("int_C1stYear")[0].childNodes[0].nodeValue);
                    fee2 = parseFloat(col[j].getElementsByTagName("int_C2ndYear")[0].childNodes[0].nodeValue);
                }               

                if (fee1 > 0) {

                    document.getElementById('fees1').style.color = "#CC33FF";
                    document.getElementById('fees1').innerHTML = "<font size=2>Hostel Fees   : 1st Year - " + fee1 + '</font>';

                }
                if (fee2 > 0) {
                    document.getElementById('fees2').style.color = "#CC33FF";
                    document.getElementById('fees2').innerHTML = '<font size=2>, 2nd Year - ' + fee2 + '</font>';
                }
            }
        }

    }
}

//=====================function Populate CutOff Mark======================
function loadCutOffMark() {
    debugger;
    var xmlColls = null;
    var xmlhttps = loadXMLDOC();
    xmlhttps.open("GET", "../MasterXML/Cutoffmarks.xml", false);
    xmlhttps.send();
    xmlColls = xmlhttps.responseXML;

    if (document.getElementById('rbtVocational').checked) {
        VocationalStreamToolTip();
    }
    else {
         document.getElementById("ddlStream").removeAttribute('title');
    }


    if (xmlColls != null) {

        var did = parseInt(document.getElementById('ddlCollege').options[document.getElementById('ddlCollege').selectedIndex].value);
        var sid = parseInt(document.getElementById('ddlStream').options[document.getElementById('ddlStream').selectedIndex].value);
        var col = xmlColls.getElementsByTagName("Table");

        var j;

        for (j = 0; j < col.length; j++) {

            var innerCid = parseInt(col[j].getElementsByTagName("int_collegeid")[0].childNodes[0].nodeValue);
            var strmid = parseInt(col[j].getElementsByTagName("int_StreamID")[0].childNodes[0].nodeValue);

            if (innerCid == did && strmid == sid) {

                //alert(innerCid + ',' + strmid);

                var cutoffST = 0;
                var cutoffSC = 0;
                var cutoffGen = 0;
                var cutoffST2 = 0;
                var cutoffSC2 = 0;
                var cutoffGen2 = 0;

               if (strmid == '1') {

                   cutoffST = col[j].getElementsByTagName("int_MarkST_Per")[0] ? col[j].getElementsByTagName("int_MarkST_Per")[0].childNodes[0].nodeValue : false;
                   cutoffSC = col[j].getElementsByTagName("int_MarkSC_Per")[0] ? col[j].getElementsByTagName("int_MarkSC_Per")[0].childNodes[0].nodeValue : false;
                   cutoffGen = col[j].getElementsByTagName("int_MarkGen_Per")[0] ? col[j].getElementsByTagName("int_MarkGen_Per")[0].childNodes[0].nodeValue : false;

                   cutoffST2 = col[j].getElementsByTagName("int_MarkST_II_Per")[0] ? col[j].getElementsByTagName("int_MarkST_II_Per")[0].childNodes[0].nodeValue : false;
                   cutoffSC2 = col[j].getElementsByTagName("int_MarkSC_II_Per")[0] ? col[j].getElementsByTagName("int_MarkSC_II_Per")[0].childNodes[0].nodeValue : false;
                   cutoffGen2 = col[j].getElementsByTagName("int_MarkGen_II_Per")[0] ? col[j].getElementsByTagName("int_MarkGen_II_Per")[0].childNodes[0].nodeValue : false;

                   if (document.getElementById('rbtST').checked) {
                       if (cutoffST != false) {

                           document.getElementById('Heading1').style.color = "#CC33FF";
                           document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                           document.getElementById('cutoffST1').style.color = "#CC33FF";
                           document.getElementById('cutoffST1').innerHTML = "<font> ST - " + cutoffST + "%" + '</font>';
                       }
                       else {
                           document.getElementById('Heading1').style.color = "#CC33FF";
                           document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection): " + '</font>';

                           document.getElementById('cutoffST1').style.color = "#CC33FF";
                           document.getElementById('cutoffST1').innerHTML = "<font> ST - " + 0.00 + "%" + '</font>';
                       }
                       if (cutoffST2 != false) {

                           document.getElementById('Heading2').style.color = "#CC33FF";
                           document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                           document.getElementById('cutoffST2').style.color = "#CC33FF";
                           document.getElementById('cutoffST2').innerHTML = "<font> ST - " + cutoffST2 + "%" + '</font>';
                       }
                       else {
                           document.getElementById('Heading2').style.color = "#CC33FF";
                           document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                           document.getElementById('cutoffST2').style.color = "#CC33FF";
                           document.getElementById('cutoffST2').innerHTML = "<font> ST - " + 0.00 + "%" + '</font>';
                       }
                   }
                   if (document.getElementById('rbtSC').checked) {
                       if (cutoffSC != false) {

                           document.getElementById('Heading1').style.color = "#CC33FF";
                           document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                           document.getElementById('cutoffSC1').style.color = "#CC33FF";
                           document.getElementById('cutoffSC1').innerHTML = '<font>SC - ' + cutoffSC + "%" + '</font>';
                       }
                       else {
                           document.getElementById('Heading1').style.color = "#CC33FF";
                           document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                           document.getElementById('cutoffSC1').style.color = "#CC33FF";
                           document.getElementById('cutoffSC1').innerHTML = '<font>SC - ' + 0.00 + "%" + '</font>';
                       }
                       if (cutoffSC2 != false) {
                           document.getElementById('Heading2').style.color = "#CC33FF";
                           document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                           document.getElementById('cutoffSC2').style.color = "#CC33FF";
                           document.getElementById('cutoffSC2').innerHTML = '<font>SC - ' + cutoffSC2 + "%" + '</font>';
                       }
                       else {
                           document.getElementById('Heading2').style.color = "#CC33FF";
                           document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                           document.getElementById('cutoffSC2').style.color = "#CC33FF";
                           document.getElementById('cutoffSC2').innerHTML = '<font>SC - ' + 0.00 + "%" + '</font>';
                       }
                   }
                   if ((document.getElementById('rbtGeneral').checked) || (document.getElementById('rbtOther').checked) || (document.getElementById('rbtnOBC').checked)) {
                       if (cutoffGen != false) {
                           document.getElementById('Heading1').style.color = "#CC33FF";
                           document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                           document.getElementById('cutoffGen1').style.color = "#CC33FF";
                           document.getElementById('cutoffGen1').innerHTML = '<font>Gen - ' + cutoffGen + "%" + '</font>';
                       }
                       else {
                           document.getElementById('Heading1').style.color = "#CC33FF";
                           document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                           document.getElementById('cutoffGen1').style.color = "#CC33FF";
                           document.getElementById('cutoffGen1').innerHTML = '<font>Gen - ' + 0.00 + "%" + '</font>';
                       }
                       if (cutoffGen2 != false) {
                           document.getElementById('Heading2').style.color = "#CC33FF";
                           document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                           document.getElementById('cutoffGen2').style.color = "#CC33FF";
                           document.getElementById('cutoffGen2').innerHTML = '<font>Gen - ' + cutoffGen2 + "%" + '</font>';
                       }
                       else {
                           document.getElementById('Heading2').style.color = "#CC33FF";
                           document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                           document.getElementById('cutoffGen2').style.color = "#CC33FF";
                           document.getElementById('cutoffGen2').innerHTML = '<font>Gen - ' + 0.00 + "%" + '</font>';
                       }
                   }


                   break;   
                }

                if (strmid == '2') {

                    cutoffST = col[j].getElementsByTagName("int_MarkST_Per")[0] ? col[j].getElementsByTagName("int_MarkST_Per")[0].childNodes[0].nodeValue : false;
                    cutoffSC = col[j].getElementsByTagName("int_MarkSC_Per")[0] ? col[j].getElementsByTagName("int_MarkSC_Per")[0].childNodes[0].nodeValue : false;
                    cutoffGen = col[j].getElementsByTagName("int_MarkGen_Per")[0] ? col[j].getElementsByTagName("int_MarkGen_Per")[0].childNodes[0].nodeValue : false;

                    cutoffST2 = col[j].getElementsByTagName("int_MarkST_II_Per")[0] ? col[j].getElementsByTagName("int_MarkST_II_Per")[0].childNodes[0].nodeValue : false;
                    cutoffSC2 = col[j].getElementsByTagName("int_MarkSC_II_Per")[0] ? col[j].getElementsByTagName("int_MarkSC_II_Per")[0].childNodes[0].nodeValue : false;
                    cutoffGen2 = col[j].getElementsByTagName("int_MarkGen_II_Per")[0] ? col[j].getElementsByTagName("int_MarkGen_II_Per")[0].childNodes[0].nodeValue : false;

                    if (document.getElementById('rbtST').checked) {
                        if (cutoffST != false) {

                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                            document.getElementById('cutoffST1').style.color = "#CC33FF";
                            document.getElementById('cutoffST1').innerHTML = "<font> ST - " + cutoffST + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection): " + '</font>';

                            document.getElementById('cutoffST1').style.color = "#CC33FF";
                            document.getElementById('cutoffST1').innerHTML = "<font> ST - " + 0.00 + "%" + '</font>';
                        }
                        if (cutoffST2 != false) {

                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffST2').style.color = "#CC33FF";
                            document.getElementById('cutoffST2').innerHTML = "<font> ST - " + cutoffST2 + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffST2').style.color = "#CC33FF";
                            document.getElementById('cutoffST2').innerHTML = "<font> ST - " + 0.00 + "%" + '</font>';
                        }
                    }
                    if (document.getElementById('rbtSC').checked) {
                        if (cutoffSC != false) {

                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                            document.getElementById('cutoffSC1').style.color = "#CC33FF";
                            document.getElementById('cutoffSC1').innerHTML = '<font>SC - ' + cutoffSC + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                            document.getElementById('cutoffSC1').style.color = "#CC33FF";
                            document.getElementById('cutoffSC1').innerHTML = '<font>SC - ' + 0.00 + "%" + '</font>';
                        }
                        if (cutoffSC2 != false) {
                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffSC2').style.color = "#CC33FF";
                            document.getElementById('cutoffSC2').innerHTML = '<font>SC - ' + cutoffSC2 + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffSC2').style.color = "#CC33FF";
                            document.getElementById('cutoffSC2').innerHTML = '<font>SC - ' + 0.00 + "%" + '</font>';
                        }
                    }
                    if ((document.getElementById('rbtGeneral').checked) || (document.getElementById('rbtOther').checked) || (document.getElementById('rbtnOBC').checked)) {
                        if (cutoffGen != false) {
                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                            document.getElementById('cutoffGen1').style.color = "#CC33FF";
                            document.getElementById('cutoffGen1').innerHTML = '<font>Gen - ' + cutoffGen + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                            document.getElementById('cutoffGen1').style.color = "#CC33FF";
                            document.getElementById('cutoffGen1').innerHTML = '<font>Gen - ' + 0.00 + "%" + '</font>';
                        }
                        if (cutoffGen2 != false) {
                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffGen2').style.color = "#CC33FF";
                            document.getElementById('cutoffGen2').innerHTML = '<font>Gen - ' + cutoffGen2 + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffGen2').style.color = "#CC33FF";
                            document.getElementById('cutoffGen2').innerHTML = '<font>Gen - ' + 0.00 + "%" + '</font>';
                        }
                    }
                    break;
                }
                if (strmid == '3') {

                    cutoffST = col[j].getElementsByTagName("int_MarkST_Per")[0] ? col[j].getElementsByTagName("int_MarkST_Per")[0].childNodes[0].nodeValue : false;
                    cutoffSC = col[j].getElementsByTagName("int_MarkSC_Per")[0] ? col[j].getElementsByTagName("int_MarkSC_Per")[0].childNodes[0].nodeValue : false;
                    cutoffGen = col[j].getElementsByTagName("int_MarkGen_Per")[0] ? col[j].getElementsByTagName("int_MarkGen_Per")[0].childNodes[0].nodeValue : false;

                    cutoffST2 = col[j].getElementsByTagName("int_MarkST_II_Per")[0] ? col[j].getElementsByTagName("int_MarkST_II_Per")[0].childNodes[0].nodeValue : false;
                    cutoffSC2 = col[j].getElementsByTagName("int_MarkSC_II_Per")[0] ? col[j].getElementsByTagName("int_MarkSC_II_Per")[0].childNodes[0].nodeValue : false;
                    cutoffGen2 = col[j].getElementsByTagName("int_MarkGen_II_Per")[0] ? col[j].getElementsByTagName("int_MarkGen_II_Per")[0].childNodes[0].nodeValue : false;

                    if (document.getElementById('rbtST').checked) {
                        if (cutoffST != false) {

                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                            document.getElementById('cutoffST1').style.color = "#CC33FF";
                            document.getElementById('cutoffST1').innerHTML = "<font> ST - " + cutoffST + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection): " + '</font>';

                            document.getElementById('cutoffST1').style.color = "#CC33FF";
                            document.getElementById('cutoffST1').innerHTML = "<font> ST - " + 0.00 + "%" + '</font>';
                        }
                        if (cutoffST2 != false) {

                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffST2').style.color = "#CC33FF";
                            document.getElementById('cutoffST2').innerHTML = "<font> ST - " + cutoffST2 + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffST2').style.color = "#CC33FF";
                            document.getElementById('cutoffST2').innerHTML = "<font> ST - " + 0.00 + "%" + '</font>';
                        }
                    }
                    if (document.getElementById('rbtSC').checked) {
                        if (cutoffSC != false) {

                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                            document.getElementById('cutoffSC1').style.color = "#CC33FF";
                            document.getElementById('cutoffSC1').innerHTML = '<font>SC - ' + cutoffSC + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                            document.getElementById('cutoffSC1').style.color = "#CC33FF";
                            document.getElementById('cutoffSC1').innerHTML = '<font>SC - ' + 0.00 + "%" + '</font>';
                        }
                        if (cutoffSC2 != false) {
                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffSC2').style.color = "#CC33FF";
                            document.getElementById('cutoffSC2').innerHTML = '<font>SC - ' + cutoffSC2 + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffSC2').style.color = "#CC33FF";
                            document.getElementById('cutoffSC2').innerHTML = '<font>SC - ' + 0.00 + "%" + '</font>';
                        }
                    }
                    if ((document.getElementById('rbtGeneral').checked) || (document.getElementById('rbtOther').checked) || (document.getElementById('rbtnOBC').checked)) {
                        if (cutoffGen != false) {
                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                            document.getElementById('cutoffGen1').style.color = "#CC33FF";
                            document.getElementById('cutoffGen1').innerHTML = '<font>Gen - ' + cutoffGen + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading1').style.color = "#CC33FF";
                            document.getElementById('Heading1').innerHTML = "<font>Prv.Year Cutoff Mark (1st Selection) : " + '</font>';

                            document.getElementById('cutoffGen1').style.color = "#CC33FF";
                            document.getElementById('cutoffGen1').innerHTML = '<font>Gen - ' + 0.00 + "%" + '</font>';
                        }
                        if (cutoffGen2 != false) {
                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffGen2').style.color = "#CC33FF";
                            document.getElementById('cutoffGen2').innerHTML = '<font>Gen - ' + cutoffGen2 + "%" + '</font>';
                        }
                        else {
                            document.getElementById('Heading2').style.color = "#CC33FF";
                            document.getElementById('Heading2').innerHTML = "<font>(2nd Selection) : " + '</font>';

                            document.getElementById('cutoffGen2').style.color = "#CC33FF";
                            document.getElementById('cutoffGen2').innerHTML = '<font>Gen - ' + 0.00 + "%" + '</font>';
                        }
                    }
                    break;  
                }

            }
        }

    }

}
//===========================================================
function fillfEle(ctlCollegeVal, ctlStreamVal, ctl1, ctl2, ctl3, type) {
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    ctlEle1 = ctl1.id;
    ctlEle2 = ctl2.id;
    ctlEle3 = ctl3.id;
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null) {
        alert("Browser not supporting");
        return;
    }
    var url = "JrCAFAdmissionForm.aspx"
    url = url + "?CID=" + CVal + "&SID=" + Sval + "&Type=" + type + "&Rno=" + Math.random();
    xmlHttp.onreadystatechange = getfEle;
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
}
function getfEle() {
    RemoveAllOptions(ctlEle1);
    RemoveAllOptions(ctlEle2);
    RemoveAllOptions(ctlEle3);
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
        var out = xmlHttp.responseText;
        if (out != '') {
            var Arr1 = new Array();
            var Arr2 = new Array();
            Arr1 = out.split("|");
            var i = 0;
            var strDid;
            for (i = 0; i < Arr1.length; i++) {
                var slNo = i;
                strDid = Arr1[i];
                Arr2 = strDid.split("~");
                var e = document.createElement("option");
                e.value = Arr2[0];
                e.innerText = Arr2[1];
                var e1 = document.createElement("option");
                e1.value = Arr2[0];
                e1.innerText = Arr2[1];
                var e2 = document.createElement("option");
                e2.value = Arr2[0];
                e2.innerText = Arr2[1];
                //e.innerText=parseInt(slNo)+1+'.'+Arr2[1];
                document.getElementById(ctlEle1).appendChild(e);
                document.getElementById(ctlEle2).appendChild(e1);
                document.getElementById(ctlEle3).appendChild(e2);

            }
        }
    }
}


//=================Function To fill ddl with a value==============
function fillDDL(ctlDdlVal, ctlDdlFill, type) {
    var inVal = ctlDdlVal.value;
    ctlTofill = ctlDdlFill.id;
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null) {
        alert("Browser not supporting");
        return;
    }
    var url = "JrCAFAdmissionForm.aspx"
    url = url + "?ID=" + inVal + "&Type=" + type + "&Rno=" + Math.random();
    //alert('b');
    xmlHttp.open("GET", url, false);
    xmlHttp.onreadystatechange = fillCode;
    xmlHttp.send(null);
}

function fillCode() {
    RemoveAllOptions(ctlTofill);
    //alert('a');
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
        var out = xmlHttp.responseText;
        if (out != '') {
            var Arr1 = new Array();
            var Arr2 = new Array();
            Arr1 = out.split("|");
            var i = 0;
            var strDid;
            for (i = 0; i < Arr1.length; i++) {
                var slNo = i;
                strDid = Arr1[i];
                Arr2 = strDid.split("~");
                var e = document.createElement("option");
                e.value = Arr2[0];
                e.innerText = Arr2[1];
                //e.innerText=parseInt(slNo)+1+'.'+Arr2[1];
                document.getElementById(ctlTofill).appendChild(e);
            }
        }
    }
}
function RemoveAllOptions(fillctlname) {
    for (var i = document.getElementById(fillctlname).length; i > 0; i--) {
        document.getElementById(fillctlname).options[i] = null;
    }
}
//==============Clear ddl values on college on change==========		      
function clearDDL() {
    
    document.getElementById('ddlCollegeDistrict').selectedIndex = 0;
    for (var i = document.getElementById('ddlCollege').length; i > 0; i--) {
        document.getElementById('ddlCollege').options[i] = null;
    }    
    for (var i = document.getElementById('ddlStream').length; i > 0; i--) {     
        document.getElementById('ddlStream').options[i] = null;
    }
    for (var i = document.getElementById('ddlCompulsory').length; i > 0; i--) {
        document.getElementById('ddlCompulsory').options[i] = null;
    }
    for (var i = document.getElementById('ddlELE1').length; i > 0; i--) {
        document.getElementById('ddlELE1').options[i] = null;
    }
    for (var i = document.getElementById('ddlELE2').length; i > 0; i--) {
        document.getElementById('ddlELE2').options[i] = null;
    }
    for (var i = document.getElementById('ddlELE3').length; i > 0; i--) {
        document.getElementById('ddlELE3').options[i] = null;
    }
    for (var i = document.getElementById('ddl4thELE1').length; i > 0; i--) {
        document.getElementById('ddl4thELE1').options[i] = null;
    }
    for (var i = document.getElementById('ddl4thELE2').length; i > 0; i--) {
        document.getElementById('ddl4thELE2').options[i] = null;
    }
    for (var i = document.getElementById('ddl4thELE3').length; i > 0; i--) {
        document.getElementById('ddl4thELE3').options[i] = null;
    }
    document.getElementById('ddlELE1').disabled = false;
    document.getElementById('ddlELE2').disabled = false;
    document.getElementById('ddlELE3').disabled = false;
    document.getElementById('rbtAccomodation1').checked = false;
    document.getElementById('rbtAccomodation2').checked = false;
    document.getElementById('Opt2').style.color = "#000000";
    document.getElementById('Opt2').innerHTML = 'No';
    document.getElementById('Opt1').style.color = "#000000";
    document.getElementById('Opt1').innerHTML = 'Yes';
    document.getElementById('hostel').style.display = 'none';
    document.getElementById('rbtAccomodation1').style.display = '';
    document.getElementById('rbtAccomodation2').style.display = '';
    document.getElementById('Opt1').style.display = '';
    document.getElementById('Opt2').style.display = '';
    document.getElementById('sp1').style.display = 'none';
    document.getElementById('sp2').style.display = 'none';
    document.getElementById('sp3').style.display = 'none';
    document.getElementById('ddlELE1').style.display = '';
    document.getElementById('ddlELE2').style.display = '';
    document.getElementById('ddlELE3').style.display = '';
    document.getElementById('HType').innerHTML = '';
    document.getElementById('fees1').innerHTML = '';
    document.getElementById('fees2').innerHTML = '';
    document.getElementById('Heading1').innerHTML = '';
    document.getElementById('cutoffST1').innerHTML = '';
    document.getElementById('cutoffSC1').innerHTML = '';
    document.getElementById('cutoffGen1').innerHTML = '';
   
    document.getElementById('Heading2').innerHTML = '';
    document.getElementById('cutoffST2').innerHTML = '';
    document.getElementById('cutoffSC2').innerHTML = '';
    document.getElementById('cutoffGen2').innerHTML = '';
    document.getElementById('trHPriority').style.display = 'none';
    document.getElementById('rbtAccomodation1').disabled = false;
    document.getElementById('rbtAccomodation2').disabled = false;
}
function GetXmlHttpObject() //Creates the XmlHttpObject
{
    var xmlHttpObj = null;

    if (window.XMLHttpRequest) {
        xmlHttpObj = new XMLHttpRequest()   //For Mozilla Browser
    }
    else if (window.ActiveXObject) {
        try {
            xmlHttpObj = new ActiveXObject("Microsoft.XMLHTTP") //For IE Browser 
        }
        catch (e) {
            xmlHttpObj = new ActiveXObject("Msxml2.XMLHTTP");
        }
    }

    return xmlHttpObj;
}
//=========================Add Option Details=====================================
function updateOptionData() {
    optionArray = new Array(8);
    optionArray[0] = new Array();
    optionArray[1] = new Array();
    optionArray[2] = new Array();
    optionArray[3] = new Array();
    optionArray[4] = new Array();
    optionArray[5] = new Array();
    optionArray[6] = new Array();
    optionArray[7] = new Array();
    optionArray[8] = new Array();
    optionArray[9] = new Array();
    var TextLen = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text.length;
    optionArray[0][0] = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text.substring(4, TextLen);
    optionArray[0][1] = document.getElementById("ddlCollege").value;
    optionArray[1][0] = document.getElementById("ddlStream").options[document.getElementById("ddlStream").selectedIndex].text;
    optionArray[1][1] = document.getElementById("ddlStream").value;
    optionArray[2][0] = document.getElementById("ddlCompulsory").options[document.getElementById("ddlCompulsory").selectedIndex].text;
    optionArray[2][1] = document.getElementById("ddlCompulsory").value;
    optionArray[3][0] = document.getElementById("ddlELE1").options[document.getElementById("ddlELE1").selectedIndex].text;
    optionArray[3][1] = document.getElementById("ddlELE1").value;
    optionArray[4][0] = document.getElementById("ddlELE2").options[document.getElementById("ddlELE2").selectedIndex].text;
    optionArray[4][1] = document.getElementById("ddlELE2").value;
//    optionArray[5][0] = document.getElementById("ddlELE3").options[document.getElementById("ddlELE3").selectedIndex].text;
//    optionArray[5][1] = document.getElementById("ddlELE3").value;
//    optionArray[6][0] = document.getElementById("ddl4thELE1").options[document.getElementById("ddl4thELE1").selectedIndex].text;
//    optionArray[6][1] = document.getElementById("ddl4thELE1").value;
    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================



    if (document.getElementById("ddlELE3").value == 0) {      
        optionArray[5][0] = '';
        optionArray[5][1] = document.getElementById("ddlELE3").value;
    }
    else {       
        optionArray[5][0] = document.getElementById("ddlELE3").options[document.getElementById("ddlELE3").selectedIndex].text;
        optionArray[5][1] = document.getElementById("ddlELE3").value;
    }


   
    if (document.getElementById("ddl4thELE1").value == 0) {
        optionArray[6][0] = '';
        optionArray[6][1] = document.getElementById("ddl4thELE1").value;        
    }
    else {
        optionArray[6][0] = document.getElementById("ddl4thELE1").options[document.getElementById("ddl4thELE1").selectedIndex].text;
        optionArray[6][1] = document.getElementById("ddl4thELE1").value;      
    }
    if (document.getElementById("ddl4thELE2").value == 0) {
        optionArray[7][0] = '';
        optionArray[7][1] = document.getElementById("ddl4thELE2").value;
    }
    else {
        optionArray[7][0] = document.getElementById("ddl4thELE2").options[document.getElementById("ddl4thELE2").selectedIndex].text;
        optionArray[7][1] = document.getElementById("ddl4thELE2").value;
    }
    if (document.getElementById("ddl4thELE3").value == 0) {
        optionArray[8][0] = '';
        optionArray[8][1] = document.getElementById("ddl4thELE3").value;
    }
    else {
        optionArray[8][0] = document.getElementById("ddl4thELE3").options[document.getElementById("ddl4thELE3").selectedIndex].text;
        optionArray[8][1] = document.getElementById("ddl4thELE3").value;
    }
    //==========================================================================================================
    var Accomodation = 0;
    var AccText
    if (document.getElementById('rbtAccomodation1').checked == true) {
        Accomodation = 1;
        AccText = document.getElementById('rbtAccomodation1').Text;
    }
    if (document.getElementById('rbtAccomodation2').checked == true) {
        Accomodation = 2;
        AccText = document.getElementById('rbtAccomodation2').Text;
    }
    optionArray[9][0] = AccText;
    optionArray[9][1] = Accomodation;

}
//=================Adding Option Row in Apply Page=======================
function addRow() {
    updateOptionData();
   
    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
    var OptionText;
    var Caption;

//    if (optText == 1) {
//        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
//        

//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('2').value = 'ଦିତୀୟ ପସନ୍ଦ';
//            Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"                               
//        }
//        else {
//            Caption = "Choose your 2nd Option"
//            document.getElementById('2').value = 'You have selected 2nd Option';
//        }
//        //document.getElementById('2').value = 'You have selected 2nd Option';
//        document.getElementById('2').className = "optioninctive";
//        document.getElementById('2').disabled = true;
//    }
//    if (optText == 2) {
//        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
//        

//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('3').value = 'ତୃତୀୟ ପସନ୍ଦ';
//            Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {           
//            Caption = "Choose your 3rd Option"   
//            document.getElementById('3').value = 'You have selected 3rd Option';
//        }

//        //document.getElementById('3').value = 'You have selected 3rd Option';
//        document.getElementById('3').className = "optioninctive";
//        document.getElementById('3').disabled = true;
//    }
//    if (optText == 3) {
//        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
//       

//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('4').value = 'ଚତୁର୍ଥ ପସନ୍ଦ';
//            Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 4th Option"
//            document.getElementById('4').value = 'You have selected 4th Option';
//        }

//       // document.getElementById('4').value = 'You have selected 4th Option';
//        document.getElementById('4').className = "optioninctive";
//        document.getElementById('4').disabled = true;
//    }
//    if (optText == 4) {
//        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
//        

//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('5').value = 'ପଞ୍ଚମ ପସନ୍ଦ';
//            Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"        
//        }
//        else {
//            Caption = "Choose your 5th Option"
//            document.getElementById('5').value = 'You have selected 5th Option';
//        }

//       // document.getElementById('5').value = 'You have selected 5th Option';
//        document.getElementById('5').className = "optioninctive";
//        document.getElementById('5').disabled = true;
//    }
//    if (optText == 5) {
//        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
//       
//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('6').value = 'ଷଷ୍ଠ ପସନ୍ଦ';
//            Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"          
//        }
//        else {
//            Caption = "Choose your 6th Option"
//            document.getElementById('6').value = 'You have selected 6th Option';
//        }
//        //document.getElementById('6').value = 'You have selected 6th Option';
//        document.getElementById('6').className = "optioninctive";
//        document.getElementById('6').disabled = true;
//    }
//    if (optText == 6) {
//        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"

//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('7').value = 'ସପ୍ତମ ପସନ୍ଦ';
//            Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ" 
//        }
//        else {
//            Caption = "Choose your 7th Option"
//            document.getElementById('7').value = 'You have selected 7th Option';
//        }
//        document.getElementById('7').className = "optioninctive";
//        document.getElementById('7').disabled = true;
//    }
//    if (optText == 7) {
//        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('8').value = 'ଅଷ୍ଟମ ପସନ୍ଦ';
//            Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 8th Option";
//            document.getElementById('8').value = 'You have selected 8th Option';
//        }
//        document.getElementById('8').className = "optioninctive";
//        document.getElementById('8').disabled = true;
//    }
//    if (optText == 8) {
//        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('9').value = 'ନବମ ପସନ୍ଦ';
//            Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 9th Option";
//            document.getElementById('9').value = 'You have selected 9th Option';
//        }
//        document.getElementById('9').className = "optioninctive";
//        document.getElementById('9').disabled = true;
//    }
//    if (optText == 9) {
//        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('10').value = 'ଦଶମ ପସନ୍ଦ';
//            Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 10th Option";
//            document.getElementById('10').value = 'You have selected 10th Option';
//        }
//        document.getElementById('10').className = "optioninctive";
//        document.getElementById('10').disabled = true;
//    }
//    if (optText == 10) {
//        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଦଶମ ଷଷ୍ଠ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//        }
//        else {
//            
//            Caption = "You have added 10 Options"
//        }
//    }
  
   
    if (optText == 1) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"        

        if (document.getElementById('rbtnOriya').checked) {
           //document.getElementById('3').value = 'ତୃତୀୟ ପସନ୍ଦ';
            Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
            document.getElementById('2').style.display = 'none';
            document.getElementById('3').style.display = '';                  
        }
        else {
            Caption = "Choose your 2nd Option";
            document.getElementById('2').style.display = 'none';
            document.getElementById('3').style.display = '';
           // document.getElementById('3').value = '3rd Option';
        }
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"        

        if (document.getElementById('rbtnOriya').checked) {
            //document.getElementById('4').value = 'ଚତୁର୍ଥ ପସନ୍ଦ';
            Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
            document.getElementById('3').style.display = 'none';
            document.getElementById('4').style.display = ''; 
        }
        else {
            document.getElementById('3').style.display = 'none';
            document.getElementById('4').style.display = '';
            Caption = "Choose your 3rd Option"
           // document.getElementById('4').value = '4th Option';
        }       
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"       

        if (document.getElementById('rbtnOriya').checked) {
           // document.getElementById('5').value = 'ପଞ୍ଚମ ପସନ୍ଦ';
            Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
            document.getElementById('4').style.display = 'none';
            document.getElementById('5').style.display = '';
        }
        else {
            document.getElementById('4').style.display = 'none';
            document.getElementById('5').style.display = '';
            Caption = "Choose your 4th Option"
           // document.getElementById('5').value = '5th Option';
        }      
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
        

        if (document.getElementById('rbtnOriya').checked) {
           // document.getElementById('6').value = 'ଷଷ୍ଠ ପସନ୍ଦ';
            Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
            document.getElementById('5').style.display = 'none';
            document.getElementById('6').style.display = '';    
        }
        else {
            document.getElementById('5').style.display = 'none';
            document.getElementById('6').style.display = '';
            Caption = "Choose your 5th Option"
            document.getElementById('6').value = '6th Option';
        }             
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
       
        if (document.getElementById('rbtnOriya').checked) {
            //document.getElementById('7').value = 'ସପ୍ତମ ପସନ୍ଦ';
            Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
            document.getElementById('6').style.display = 'none';
            document.getElementById('7').style.display = '';
        }
        else {
            document.getElementById('6').style.display = 'none';
            document.getElementById('7').style.display = '';
            Caption = "Choose your 6th Option"
            document.getElementById('7').value = '7th Option';
        }      
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"

        if (document.getElementById('rbtnOriya').checked) {
           // document.getElementById('8').value = 'ଅଷ୍ଟମ ପସନ୍ଦ';
            Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
            document.getElementById('7').style.display = 'none';
            document.getElementById('8').style.display = '';
        }
        else {
            document.getElementById('7').style.display = 'none';
            document.getElementById('8').style.display = '';
            Caption = "Choose your 7th Option"
            document.getElementById('8').value = '8th Option';
        }      
    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
        if (document.getElementById('rbtnOriya').checked) {
            //document.getElementById('9').value = 'ନବମ ପସନ୍ଦ';
            Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
            document.getElementById('8').style.display = 'none';
            document.getElementById('9').style.display = '';
        }
        else {
            document.getElementById('8').style.display = 'none';
            document.getElementById('9').style.display = '';
            Caption = "Choose your 8th Option"
            document.getElementById('9').value = '9th Option';
        }      
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
        if (document.getElementById('rbtnOriya').checked) {
            //document.getElementById('10').value = 'ଦଶମ ପସନ୍ଦ';
            Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
            document.getElementById('9').style.display = 'none';
            document.getElementById('10').style.display = '';
        }
        else {
            document.getElementById('9').style.display = 'none';
            document.getElementById('10').style.display = '';
            Caption = "Choose your 9th Option"
            document.getElementById('10').value = '10th Option';
        }      
    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('10').value = 'ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି';
            Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
        }
        else {
            Caption = "Choose your 10th Option";
            document.getElementById('10').value = 'You have selected 10th Option';
        }
        document.getElementById('10').className = "optioninctive";
        document.getElementById('10').disabled = true;
    }
    if (optText == 10) {
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
        if (document.getElementById('rbtnOriya').checked) {
            Caption = "ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
        }
        else {
            
            Caption = "You have added 10 Options"
        }
    }

        td1.innerHTML = OptionText;
    //=================================================================
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[2][0] + "<input type='hidden' value=" + optionArray[2][1] + "></input>"
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[3][0] + "</br>" + optionArray[4][0] + "</br>" + optionArray[5][0] + "<input type='hidden' value=" + optionArray[3][1] + "~" + optionArray[4][1] + "~" + optionArray[5][1] + "></input>"
    var td6 = document.createElement("TD")
  
    td6.innerHTML = optionArray[6][0] + "</br>" + optionArray[7][0] + "</br>" + optionArray[8][0] + "<input type='hidden' value=" + optionArray[6][1] + "~" + optionArray[7][1] + "~" + optionArray[8][1] + "></input>" + "<input type='hidden' value=" + optionArray[9][1] + "></input>"
    var td7 = document.createElement("TD")
    td7.innerHTML = "<a href='javascript:remove(" + optText + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option' /></a>"
    for (i = 1; i < 8; i++) {
        row.appendChild(eval("td" + i));
    }
    tbody.appendChild(row);
    //=====Calling reset row details========
    document.getElementById('tblChoice').style.display = '';
    document.getElementById('Caption').innerHTML = Caption;
    resetOption();
    clearDDL();
    if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('Opt1').innerHTML = 'ହଁ';
            document.getElementById('Opt2').innerHTML = 'ନା';
            }
    //======================================
}
//==================Reset the contents after row addition==========
function resetOption() {
    document.getElementById('ddlCollege').selectedIndex = 0;
    document.getElementById('ddlStream').selectedIndex = 0;
    document.getElementById('ddlCompulsory').selectedIndex = 0;
    document.getElementById('ddlELE1').selectedIndex = 0;
    document.getElementById('ddlELE2').selectedIndex = 0;
    document.getElementById('ddlELE3').selectedIndex = 0;
    document.getElementById('ddl4thELE1').selectedIndex = 0;
    document.getElementById('ddl4thELE2').selectedIndex = 0;
    document.getElementById('ddl4thELE3').selectedIndex = 0;
    document.getElementById('ddlELE1').disabled = false;
    document.getElementById('ddlELE2').disabled = false;
}
//===============Delete Options=================	
function remove(id) {   
    if (confirm('Are you sure you want to delete this option ?')) {
        document.getElementById('tableOption').deleteRow(id)
        var Rows = document.getElementById('tableOption').getElementsByTagName("TR")
        var rowsLen = Rows.length
        var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
        var OptionText;
        var Caption;
        var i;
        
        for (i = 1; i < rowsLen; i++) {
            
            if (i == 1) {
               
                OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
               // Caption = "Choose your 2nd Option"

                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                    document.getElementById('2').value = 'ତୃତୀୟ ପସନ୍ଦ';
                }
                else {
                    Caption = "Choose your 2nd Option";       
                }

            }
            if (i == 2) {
              
                OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"               

                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    Caption = "Choose your 3rd Option"
                }
            }
            if (i == 3) {
               
                OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"

                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
                }
                else {
                    Caption = "Choose your 4th Option"                    
                }
            }
            if (i == 4) {
               
                OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"

                if (document.getElementById('rbtnOriya').checked) {                    
                    Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
                }
                else {
                    Caption = "Choose your 5th Option"                   
                }
            }
            if (i == 5) {
              
                OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"

                if (document.getElementById('rbtnOriya').checked) {                   
                    Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    Caption = "Choose your 6th Option"                    
                }
            }
            if (i == 6) {
                
                OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"

                if (document.getElementById('rbtnOriya').checked) {                 
                    Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {                    
                    Caption = "Choose your 7th Option"
                }
            }
            if (i == 7) {
               
                OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"

                if (document.getElementById('rbtnOriya').checked) {                   
                    Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    Caption = "Choose your 8th Option"
                }
            }
            if (i == 8) {
                
                OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"

                if (document.getElementById('rbtnOriya').checked) {                    
                    Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    Caption = "Choose your 9th Option"
                }
            }
            if (i == 9) {
               
                OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"

                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    Caption = "Choose your 10th Option"
                }
            }
            if (i == 10) {
               
                OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"

                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଆପଣ ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
                }
                else {
                    Caption = "You have added 10 Options"
                }
            }
        
            //================================================================
            Rows[i].getElementsByTagName("TD")[0].innerHTML = OptionText;
            Rows[i].getElementsByTagName("TD")[6].innerHTML = "<a href='javascript:remove(" + i + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option'/></a>"
        }
        if (rowsLen == 1) {
            document.getElementById('tblChoice').style.display = 'none';           

            if (document.getElementById('rbtnOriya').checked) {
                document.getElementById('Caption').innerHTML = "ପ୍ରଥମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
            }
            else {
                document.getElementById('Caption').innerHTML = 'Choose your 1st Option';
            }
            //document.getElementById('2').disabled = false;
            document.getElementById('3').style.display = 'none';
            document.getElementById('2').style.display = '';
            document.getElementById('2').value = '3rd Option';    
        }
        else {
            document.getElementById('Caption').innerHTML = Caption;
        }
        for (var k = 1; k < 11; k++) {
            if (k == rowsLen) {
                var nth;
                document.getElementById(k + 1).disabled = false;
                if (k + 1 == 2) {
                    nth = '2nd'
                }
                else if (k + 1 == 3) {
                    nth = '3rd'
                }
                else if (k + 1 > 3) {
                    nth = k + 1 + 'th'
                }

                if (document.getElementById('rbtnOriya').checked) {

                    if (nth == '2nd') {
                        nth = 'ଦିତୀୟ';
                    }
                    else if (nth == '3rd') {
                        nth = 'ତୃତୀୟ';
                    }
                    else if (nth == '4th') {
                        nth = 'ଚତୁର୍ଥ';
                    }
                    else if (nth == '5th') {
                        nth = 'ପଞ୍ଚମ';
                    }
                    else if (nth == '6th') {
                        nth = 'ଷଷ୍ଠ';
                    }
                    else if (nth == '7th') {
                        nth = 'ସପ୍ତମ';
                    }
                    else if (nth == '8th') {
                        nth = 'ଅଷ୍ଟମ';
                    }
                    else if (nth == '9th') {
                        nth = 'ନବମ';
                    }
                    else if (nth == '10th') {
                        nth = 'ଦଶମ';
                    }
                    document.getElementById(k + 1).value = nth + 'ପସନ୍ଦ';
                    if (k > 1) {
                        document.getElementById(k + 1).className = "optionbtnNew";
                        document.getElementById(k + 1).value = nth + 'ପସନ୍ଦ';
                        document.getElementById(k + 2).style.display = 'none';
                        document.getElementById(k + 1).style.display = '';
                    }
                }
                else {
                    //document.getElementById('2').value = 'You have selected 2nd Option';
                    //  document.getElementById(k + 1).value = 'Click here for ' + nth + ' Option';
                
                    document.getElementById(k + 1).value = nth + ' Option';
                    if (k > 1) {
                        document.getElementById(k + 1).className = "optionbtnNew";
                        document.getElementById(k + 1).value = nth + ' Option';
                        document.getElementById(k+2).style.display = 'none';
                        document.getElementById(k + 1).style.display = '';                       
                    }
                }
                //document.getElementById(k + 1).value = 'Click here for ' + nth + ' Option';
                document.getElementById(k + 1).className = "optionbtnNew";
            }
        }
    }
}
//================Delete Option in Edit Page==========================================
function removeEdit(id) {
    if (confirm('Are you sure you want to delete this option ?')) {
        document.getElementById('tableOption').deleteRow(id);
        var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var rowsLen = Rows.length;
        var OptionText;
        var Caption;
        var i;
        
        for (i = 1; i < rowsLen; i++) {
            if (i == 1) {
                OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
                //Caption = "Choose your 2nd Option"

                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
                }
                else {
                    Caption = "Choose your 2nd Option";                 
                }
            }
            if (i == 2) {
                OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
                //Caption = "Choose your 3rd Option"
                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
                }
                else {
                    Caption = "Choose your 3rd Option";             
                }
            }
            if (i == 3) {
                OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
                // Caption = "Choose your 4th Option"

                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
                }
                else {
                    Caption = "Choose your 4th Option";                    
                }

            }
            if (i == 4) {
                OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
                //Caption = "Choose your 5th Option"

                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ";
                }
                else {
                    Caption = "Choose your 5th Option";                    
                }
            }
            if (i == 5) {
                OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
                //Caption = "Choose your 6th Option"

                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"      
                }
                else {
                    Caption = "Choose your 6th Option"
                }
            }
            if (i == 6) {
                OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
                //Caption = "You have added 6 Options"
                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    Caption = "Choose your 7th Option"
                }
            }
            if (i == 7) {
                OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
                //Caption = "You have added 6 Options"
                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    Caption = "Choose your 8th Option"
                }
            }
            if (i == 8) {
                OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
                //Caption = "You have added 6 Options"
                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    Caption = "Choose your 9th Option"
                }
            }
            if (i == 9) {
                OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
                //Caption = "You have added 6 Options"
                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    Caption = "Choose your 10th Option"
                }
            }
            if (i == 10) {
                OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
                //Caption = "You have added 6 Options"
                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଆପଣ ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
                }
                else {
                    Caption = "You have added 10 Options"
                }
            }
            Rows[i].getElementsByTagName("TD")[0].innerHTML = OptionText;
            Rows[i].getElementsByTagName("TD")[6].innerHTML = "<a href='javascript:removeEdit(" + i + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option' /></a>"
            Rows[i].getElementsByTagName("TD")[7].innerHTML = "<input type='text' class='input' maxlength='1' size='1' value=" + i + "></input>";
        }
        if (rowsLen == 1) {
            document.getElementById('tblChoice').style.display = 'none';
            document.getElementById('Caption').innerHTML = 'Choose your 1st Option';
            document.getElementById('2').disabled = false;
        }
        else {
            document.getElementById('Caption').innerHTML = Caption;
        }
        for (var k = 1; k < 7; k++) {
            if (k == rowsLen) {
                var nth;
                if (k + 1 == 2) {
                    nth = '2nd'
                }
                else if (k + 1 == 3) {
                    nth = '3rd'
                }
                else if (k + 1 > 3) {
                    nth = k + 1 + 'th'
                }
                if (document.getElementById('rbtnOriya').checked) {

                    if (nth == '2nd') {
                        nth = 'ଦିତୀୟ';
                    }
                    else if (nth == '3rd') {
                        nth = 'ତୃତୀୟ';
                    }
                    else if (nth == '4th') {
                        nth = 'ଚତୁର୍ଥ';
                    }
                    else if (nth == '5th') {
                        nth = 'ପଞ୍ଚମ';
                    }
                    else if (nth == '6th') {
                        nth = 'ଷଷ୍ଠ';
                    }
                    document.getElementById('2').value = nth +' '+'ପସନ୍ଦ';
                }
                else if (k + 1 < 7) {
                    document.getElementById(k + 1).disabled = false;
                    document.getElementById(k + 1).value = 'Click here for ' + nth + ' Option';
                    document.getElementById(k + 1).className = "option";
                }
//                if (k + 1 < 7) {
//                    document.getElementById(k + 1).disabled = false;
//                    document.getElementById(k + 1).value = 'Click here for ' + nth + ' Option';
//                    document.getElementById(k + 1).className = "option";
//                }
            }
        }
    }
}
//=============Updating Options(Adding new Option in Apply Page)======================	
function updateRow(ctlId) {
    var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
    if ((Rows.length < 2) && (document.getElementById('ddlCollege').value == 0) && (document.getElementById('ddlStream').value == 0) && (document.getElementById('ddlELE1').value == 0) && (document.getElementById('ddlELE2').value == 0) && (document.getElementById('ddlELE3').value == 0) && (document.getElementById('ddl4thELE1').value == 0)) {
        alert('Please Choose your 1st Option');
        return false;
    }
    if (!DropDownValidation('ddlGender', 'your gender'))
        return false;
    if (!DropDownValidation('ddlCollegeDistrict', 'District Name'))
        return false;
    if (!DropDownValidation('ddlCollege', 'College Name'))
        return false;
    //================RESTRICTING MALE APPLICANT APPLYING FOR FOR WOMENS COLLEGE========
   // womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655',  '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '717', '718', '723', '1465');
    // womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '2872', '2881', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045','3280'); --2016

    
    womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '717', '718', '723', '1465', '2872', '2922', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '2881', '3280', '3304', '3244', '312', '2088', '1011', '1051', '1055', '2686', '1027', '1028', '3315', '3367', '3351', '1289', '3244', '297', '3078', '3107', '3113', '3173', '3014', '3038', '3060', '3144', '3221', '1962');

   // GetWomenCollege();
   
    var SelCid = document.getElementById('ddlCollege').value;
    var Gender = document.getElementById('ddlGender').value;
    for (var m = 0; m < womenCollegeAry.length; m++) {
        if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[m])) {
            //alert("100 alert");          
            alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));      
            clearDDL();
            document.getElementById('ddlCollege').focus();
            return false;
        }
    } if (document.getElementById('rbtnOriya').checked) {
        document.getElementById("rbtnEnglish").disabled = true;
        document.getElementById("rbtnOriya").disabled = false;
    }
    else {
        document.getElementById("rbtnEnglish").disabled = false;
        document.getElementById("rbtnOriya").disabled = true;
    }   
   
    //==========================================================
    if (!DropDownValidation('ddlStream', 'Stream Name'))
        return false;
    if (!DropDownValidation('ddlCompulsory', 'Compulsory'))
        return false;
    // alert('a');
    // alert(document.getElementById('ddlELE1').value);
    if (!DropDownValidation('ddlELE1', 'your elective subject according\n to the preference you want'))
        return false;
    if (!DropDownValidation('ddlELE2', 'your elective subject according\n to the preference you want'))
        return false;
    //=======================Checking Elective values1=============
    if (document.getElementById('ddlELE1').value == document.getElementById('ddlELE2').value) {
        alert('First or second or third elective subject cannot be same');
        document.getElementById('ddlELE2').focus();
        return false;
    }
    //============================================================
    if (document.getElementById('rbtSanskrit').checked == false) {
    if (!DropDownValidation('ddlELE3', 'your elective subject according\n to the preference you want'))
        return false;
    //=======================Checking Elective values2=============
    
        if (document.getElementById('ddlELE2').value == document.getElementById('ddlELE3').value) {
            alert('First or second or third elective subject cannot be same');
            document.getElementById('ddlELE3').focus();
            return false;
        }

        if (document.getElementById('ddlELE1').value == document.getElementById('ddlELE3').value) {
            alert('First or second or third elective subject cannot be same');
            document.getElementById('ddlELE3').focus();
            return false;
        }
    }
    //============================================================
    if (document.getElementById('rbtVocational').checked == false && document.getElementById('rbtSanskrit').checked == false) {
        if (!DropDownValidation('ddl4thELE1', 'Please select your fourth elective subject according\n to the preference you want'))
            return false;

        //==============================================================
        var fElectiveval1 = document.getElementById('ddl4thELE1').value;
        var fElectiveval2 = document.getElementById('ddl4thELE2').value;
        var fElectiveval3 = document.getElementById('ddl4thELE3').value;
        var oElectiveval1 = document.getElementById('ddlELE1').value;
        var oElectiveval2 = document.getElementById('ddlELE2').value;
        var oElectiveval3 = document.getElementById('ddlELE3').value;
        //========================Checking fourth elective=============
        if (fElectiveval1 == fElectiveval2) {
            alert('First or second or third preference in\nfourth elective subject cannot be same');
            document.getElementById('ddl4thELE1').focus();
            return false;
        }
        if ((fElectiveval1 == oElectiveval1) || (fElectiveval1 == oElectiveval2) || (fElectiveval1 == oElectiveval3)) {
            alert('Elective preference & fourth elective preference cannot same');
            document.getElementById('ddl4thELE1').focus();
            return false;
        }
        if (fElectiveval2 != 0) {
            if ((fElectiveval2 == oElectiveval1) || (fElectiveval2 == oElectiveval2) || (fElectiveval2 == oElectiveval3)) {
                alert('Elective preference & fourth elective preference cannot same');
                document.getElementById('ddl4thELE2').focus();
                return false;
            }
        }
        if (fElectiveval3 != 0) {
            if ((fElectiveval3 == oElectiveval1) || (fElectiveval3 == oElectiveval2) || (fElectiveval3 == oElectiveval3)) {
                alert('Elective preference & fourth elective preference cannot same');
                document.getElementById('ddl4thELE3').focus();
                return false;
            }
        }
        if ((fElectiveval2 != 0) && (fElectiveval3 != 0)) {
            if (fElectiveval2 == fElectiveval3) {
                alert('First or second or third preference in\nfourth elective subject cannot be same');
                document.getElementById('ddl4thELE2').focus();
                return false;
            }
            if (fElectiveval1 == fElectiveval3) {
                alert('First or second or third preference in\nfourth elective subject cannot be same');
                document.getElementById('ddl4thELE3').focus();
                return false;
            }
        }
        if ((fElectiveval2 == 0) && (fElectiveval3 != 0)) {
            alert('Please select your fourth elective subject according\n to the preference you want');
            document.getElementById('ddl4thELE2').focus();
            return false;
        }
    }
    //============================================================
    if ((document.getElementById('rbtAccomodation1').checked == false) && (document.getElementById('rbtAccomodation2').checked == false)) {
        alert('Please select hostel option');
        return false;
    }

    //==================Restrict OLNS Applicant to choose Oriya
    if (document.getElementById('rbtOLNSY').checked == true) {
        var oElectiveval1olns = document.getElementById('ddlELE1').value;
        var oElectiveval2olns = document.getElementById('ddlELE2').value;
        var oElectiveval3olns = document.getElementById('ddlELE3').value;
        var oElectiveval4olns = document.getElementById('ddl4thELE1').value;
        var compolnsddl = document.getElementById('ddlCompulsory').value;

        var strm = document.getElementById('ddlStream').value;

        if(strm==1 || strm==2 || strm==3)
        {
            if (((compolnsddl != 33) && (compolnsddl != 46) && (compolnsddl != 47) && (compolnsddl != 48)) && ((oElectiveval1olns != 33) && (oElectiveval1olns != 46) && (oElectiveval1olns != 47) && (oElectiveval1olns != 48))
        && ((oElectiveval2olns != 33) && (oElectiveval2olns != 46) && (oElectiveval2olns != 47) && (oElectiveval2olns != 48)) && ((oElectiveval3olns != 33) && (oElectiveval3olns != 46) && (oElectiveval3olns != 47) && (oElectiveval3olns != 48))
        && ((oElectiveval4olns != 33) && (oElectiveval4olns != 46) && (oElectiveval4olns != 47) && (oElectiveval4olns != 48))) {
                alert('As you are choosing OLNS.It is mandatory to choose a subject as Odia.')
                return false;
            }
        }
//        if ((oElectiveval1olns != 33) && (oElectiveval2olns != 33) && (oElectiveval3olns != 33) && (oElectiveval4olns != 33)) {
//            alert('As you are choosing OLNS.It is mandatory to choose a subject as Odia.')
//            return false;
//        }
    }
      
    var totRow = document.getElementById('tableOption').getElementsByTagName("TR").length
    var tRow = document.getElementById('tableOption').getElementsByTagName("TR");
    //===================Variables=======================
    var addedCollege;
    var addedStream;
    var cuurntCid = parseInt(document.getElementById('ddlCollege').value);
    var cuurntSid = parseInt(document.getElementById('ddlStream').value);
    collAry = new Array();
    strAry = new Array();
    var colCntr = 0;
    var stCntr = 0;
    //=========================================================
    if (totRow < 11) {
        //============Calling Add row Function============
        //================Here checking for duplicate option entry=======
       
        if (totRow > 1) {
            for (var i = 1; i < totRow; i++) {
                addedCollege = parseInt(tRow[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value);
                addedStream = parseInt(tRow[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value);
                if ((addedCollege == cuurntCid) && (addedStream == cuurntSid)) {
                    colCntr = parseInt(colCntr) + 1;
                                       
                }
            }         
            if (parseInt(colCntr) > 0) //&& (parseInt(stCntr) > 0))
            {
                alert('You cannot add more than 1 option in same college & stream');
                clearDDL();
            }
            else {
                var optLen = document.getElementById('tableOption').getElementsByTagName("TR").length;
              
                var id = ctlId - 1;
                var k;
                var j;
                if (optLen != id) {
                    var Caption;
                    if (optLen == 1) {
                        k = '2nd';
                    }
                    else if (optLen == 2) {
                        k = '3rd';
                    }
                    else if (optLen >= 3) {
                        k = optLen + 'th';
                    }
                    if (ctlId == 1) {
                        j = '1st';
                    }
                    else if (ctlId == 2) {
                        j = '2nd';
                    }
                    else if (ctlId == 3) {
                        j = '3rd';
                    }
                    else if (ctlId > 3) {
                        j = ctlId + 'th';
                    }                 
                    Caption = "Please enter your " + k + " options before the " + j + " options"
                   
                }
                else {
                    addRow();
                }
            }
        }
        else {
            var optLen = document.getElementById('tableOption').getElementsByTagName("TR").length;
            var id = ctlId - 1;
            var k;
            var j;
            if (optLen != id) {
                var Caption;
                if (optLen == 1) {
                    k = '2nd';
                }
                else if (optLen == 2) {
                    k = '3rd';
                }
                else if (optLen > 3) {
                    k = optLen + 'th';
                }
                if (ctlId == 1) {
                    j = '1st';
                }
                else if (ctlId == 2) {
                    j = '2nd';
                }
                else if (ctlId == 3) {
                    j = '3rd';
                }
                else if (ctlId > 3) {
                    j = ctlId + 'th';
                }

                Caption = "Please enter your " + k + " options before the " + j + " options"
                alert(Caption);
            }
            else {
                addRow()
            }
        }
        //===============================================================
    }
    else {
        alert("You have already added ten options");
        clearDDL();
    }
}
//=======================Get Option Details================
function getOptions() {
    var a = chkReturn();
    if (a == true) {
        var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var rowsLen = Rows.length
        var tds;
        var collegeIds = '';
        var streams = '';
        var compulsory = '';
        var electiveSub = '';
        var Felective = '';
        var Hostel = '';
        var colCntr = 0;
        //alert(Rows);
        var dist;
        var block;
        dist = document.getElementById('ddlCDist').value;
        block = document.getElementById('ddlCBlock').value;
        var SelectText = document.getElementById("ddlCDist");
        var distText = SelectText.options[SelectText.selectedIndex].text;
        var SelectBolckText = document.getElementById("ddlCBlock");
        var BlockText = SelectBolckText.options[SelectBolckText.selectedIndex].text;
        //===========================if there is only one option===========        
        if (Rows.length < 2) {
            collegeIds = document.getElementById('ddlCollege').value;
            streams = document.getElementById('ddlStream').value;
            compulsory = document.getElementById('ddlCompulsory').value;
            electiveSub = document.getElementById('ddlELE1').value;
            electiveSub = electiveSub + '~' + document.getElementById('ddlELE2').value;
            electiveSub = electiveSub + '~' + document.getElementById('ddlELE3').value;
            Felective = document.getElementById('ddl4thELE1').value;
            Felective = Felective + '~' + document.getElementById('ddl4thELE2').value;
            Felective = Felective + '~' + document.getElementById('ddl4thELE3').value;
            if (document.getElementById('rbtAccomodation1').checked == true) {
                Hostel = 1;
            }
            if (document.getElementById('rbtAccomodation2').checked == true) {
                Hostel = 2;
            }
            //================RESTRICTING MALE APPLICANT APPLYING FOR FOR WOMENS COLLEGE========
            // womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655',  '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943','2950');
            //womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '3280');
            womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '717', '718', '723', '1465', '2872', '2922', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '2881', '3280', '3304', '3244', '312', '2088', '1011', '1051', '1055', '2686', '1027', '1028', '3315', '3367', '3351', '1289', '3244', '297', '3078', '3107', '3113', '3173', '3014', '3038', '3060', '3144', '3221', '1962');
            //womenCollegeAry = new Array('3','8','9','13','16','21','22','28','30','33','36','39','41','49','53','57','60','72','113','134','168','245','274','279','280','295','305','306','311','315','322','336','351','358','363','374','375','379','391','397','418','463','470','483','494','498','513','523','526','529','586','602','614','631','636','646','658','660','664','671','683','692','699','716','727','733','768','798','824','828','844','854','879','882','896','897','924','925','941','945','950','978','989','996','1014','1022','1029','1042','1052','1066','1067','1089','1095','1099','1106','1111','1124','1162','1165','1179','1189','1225','1246','1265','1276','1285','1295','1299','1304','1309','1329','1346','1361','1364','1379','1387','1393','1401','1467','1572','1584','1610','1642','1656','1670','1683','1713','1752','1771','1784','1794','1802','1818','1828','1829','1833','1852','1864','1879','1886','1898','1906','1910','1930','1939','1951','1987','1995','2031','2035','2045','2062','2074','2132','2500','2516','2561','2562','2565','2655','2686','2701','2719','2728','2752','2754','2761');

            //GetWomenCollege();
           // alert("1st alert");
            var SelCid = document.getElementById('ddlCollege').value;
            var Gender = document.getElementById('ddlGender').value;
            for (var m = 0; m < womenCollegeAry.length; m++) {
                if (((Gender == 1)|| (Gender == 3)) && (SelCid == womenCollegeAry[m])) {
                    alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));      
                    clearDDL();
                    document.getElementById('ddlCollege').focus();
                    return false;
                }
            }
            //==========================================================   
        }
        else {
            //document.getElementById('tblChoice').style.display='';

            //=============if more than one option============================
            for (var i = 1; i < rowsLen; i++) {
                //================Store CollegeIds======================
                if (collegeIds == '') {
                    collegeIds = Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value
                }
                else { collegeIds = collegeIds + '~' + Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value }
                //================RESTRICTING MALE APPLICANT APPLYING FOR FOR WOMENS COLLEGE========
               //womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655',  '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '717', '718', '723', '1465');
               // womenCollegeAry = new Array('3','8','9','13','16','21','22','28','30','33','36','39','41','49','53','57','60','72','113','134','168','245','274','279','280','295','305','306','311','315','322','336','351','358','363','374','375','379','391','397','418','463','470','483','494','498','513','523','526','529','586','602','614','631','636','646','658','660','664','671','683','692','699','716','727','733','768','798','824','828','844','854','879','882','896','897','924','925','941','945','950','978','989','996','1014','1022','1029','1042','1052','1066','1067','1089','1095','1099','1106','1111','1124','1162','1165','1179','1189','1225','1246','1265','1276','1285','1295','1299','1304','1309','1329','1346','1361','1364','1379','1387','1393','1401','1467','1572','1584','1610','1642','1656','1670','1683','1713','1752','1771','1784','1794','1802','1818','1828','1829','1833','1852','1864','1879','1886','1898','1906','1910','1930','1939','1951','1987','1995','2031','2035','2045','2062','2074','2132','2500','2516','2561','2562','2565','2655','2686','2701','2719','2728','2752','2754','2761');
                // womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768',  '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '3280'); --2016
                womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '717', '718', '723', '1465', '2872', '2922', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '2881', '3280', '3304', '3244', '312', '2088', '1011', '1051', '1055', '2686', '1027', '1028', '3315', '3367', '3351', '1289', '3244', '297', '3078', '3107', '3113', '3173', '3014', '3038', '3060', '3144', '3221', '1962');

               // GetWomenCollege();
               // alert("2nd alert");

                SelCid = new Array();
                SelCid = Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value;
                var Gender = document.getElementById('ddlGender').value;
                for (var m = 0; m < womenCollegeAry.length; m++) {
                    if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[m])) {
                        alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));      
                        clearDDL();
                        document.getElementById('ddlCollege').focus();
                        return false;
                    }
                }

                //=================Stream Ids===========================
                if (streams == '')
                { streams = Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value }
                else
                { streams = streams + '~' + Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value }

                //=====================Compulsory Ids===================
                if (compulsory == '')
                { compulsory = Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value }
                else
                { compulsory = compulsory + '~' + Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value }

                //==========================Elective ids================
                if (electiveSub == '')
                { electiveSub = Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value }
                else
                { electiveSub = electiveSub + '/' + Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value }

                //==============================Fourth Elective ids======
                if (Felective == '')
                { Felective = Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[0].value }
                else
                { Felective = Felective + '/' + Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[0].value }
                //==================Hostel Option=============================
                if (Hostel == '') {
                    Hostel = Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[1].value
                }
                else { Hostel = Hostel + '~' + Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[1].value }
                //============================================================
            }
            //Resticting duplicate college entry
            var cuurntCid = parseInt(document.getElementById('ddlCollege').value);
            var cuurntSid = parseInt(document.getElementById('ddlStream').value);
            var colCntr = 0;
            for (var i = 1; i < rowsLen; i++) {
                var addedCollege = Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value
                var addedStream = Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value

                if ((addedCollege == cuurntCid) && (addedStream == cuurntSid)) {
                    colCntr = parseInt(colCntr) + 1;
                }
            }
            if (parseInt(colCntr) > 0) {
                alert('You cannot add more than 1 option in same college & stream');
                clearDDL();
                return false;
            }

        }
        if ((Rows.length < 11) && (Rows.length >= 2)) {
            var lastcollegeIds = document.getElementById('ddlCollege').value;
            var laststreams = document.getElementById('ddlStream').value;
            var lastcompulsory = document.getElementById('ddlCompulsory').value;
            var lastelectiveSub = document.getElementById('ddlELE1').value;
            lastelectiveSub = lastelectiveSub + '~' + document.getElementById('ddlELE2').value;
            lastelectiveSub = lastelectiveSub + '~' + document.getElementById('ddlELE3').value;
            var lastFelective = document.getElementById('ddl4thELE1').value;
            lastFelective = lastFelective + '~' + document.getElementById('ddl4thELE2').value;
            lastFelective = lastFelective + '~' + document.getElementById('ddl4thELE3').value;
            var lastReside;

            if (document.getElementById('rbtAccomodation1').checked == true) {
                lastReside = 1
            }
            if (document.getElementById('rbtAccomodation2').checked == true) {
                lastReside = 2
            }
           
            //================RESTRICTING MALE APPLICANT APPLYING FOR WOMENS COLLEGE========
            //womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '717', '718', '723', '1465');
            // womenCollegeAry = new Array('3','8','9','13','16','21','22','28','30','33','36','39','41','49','53','57','60','72','113','134','168','245','274','279','280','295','305','306','311','315','322','336','351','358','363','374','375','379','391','397','418','463','470','483','494','498','513','523','526','529','586','602','614','631','636','646','658','660','664','671','683','692','699','716','727','733','768','798','824','828','844','854','879','882','896','897','924','925','941','945','950','978','989','996','1014','1022','1029','1042','1052','1066','1067','1089','1095','1099','1106','1111','1124','1162','1165','1179','1189','1225','1246','1265','1276','1285','1295','1299','1304','1309','1329','1346','1361','1364','1379','1387','1393','1401','1467','1572','1584','1610','1642','1656','1670','1683','1713','1752','1771','1784','1794','1802','1818','1828','1829','1833','1852','1864','1879','1886','1898','1906','1910','1930','1939','1951','1987','1995','2031','2035','2045','2062','2074','2132','2500','2516','2561','2562','2565','2655','2686','2701','2719','2728','2752','2754','2761');
            //GetWomenCollege();
           // womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '3280'); --2016
            womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '717', '718', '723', '1465', '2872', '2922', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '2881', '3280', '3304', '3244', '312', '2088', '1011', '1051', '1055', '2686', '1027', '1028', '3315', '3367', '3351', '1289', '3244', '297', '3078', '3107', '3113', '3173', '3014', '3038', '3060', '3144', '3221', '1962');
            var SelCid = document.getElementById('ddlCollege').value;
            var Gender = document.getElementById('ddlGender').value;
            for (var m = 0; m < womenCollegeAry.length; m++) {
                if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[m])) {
                    alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));      
                    clearDDL();
                    document.getElementById('ddlCollege').focus();
                    return false;
                }
            }

            if ((lastcollegeIds != 0) && (laststreams != 0) && (lastcompulsory != 0) && (lastelectiveSub != '') && (lastFelective != '')) {
                collegeIds = collegeIds + '~' + lastcollegeIds;
                streams = streams + '~' + laststreams;
                compulsory = compulsory + '~' + lastcompulsory;
                electiveSub = electiveSub + '/' + lastelectiveSub;
                Felective = Felective + '/' + lastFelective;
                Hostel = Hostel + '~' + lastReside;
            }
        }
        ///=================
//        alert(distText);
        document.getElementById('dist').value = dist;
        document.getElementById('block').value = block;
        document.getElementById('HdistNm').value = distText;
        document.getElementById('HBlockNM').value = BlockText;
        ///===================
        document.getElementById('hidCollege').value = collegeIds;
        document.getElementById('hidStream').value = streams;
        document.getElementById('hidComplusory').value = compulsory;
        document.getElementById('hidElectives').value = electiveSub;
        document.getElementById('hidFourthElelectives').value = Felective;
        document.getElementById('hidHostel').value = Hostel;

        //============Counting No of Options==============
        debugger;
        var optLen;
        var msg = '';
        var options;
        if (collegeIds.indexOf('~') > 0) {
            optNo = new Array();
            optNo = collegeIds.split("~");
            optLen = optNo.length + ' options';
            options = optNo.length;
        }
        else {
            optLen = 1 + ' option';
            options = 1;
        }
        if (options == 6) {
            msg = 'You have entered ' + optLen + '.\nClick OK to submit.\nClick Cancel to modify.';
        }
        else {
            msg = 'You have entered ' + optLen + '.\nClick OK to submit.\nClick Cancel to add more options.';
        }
        if (confirm(msg)) {
            return true;
        }
        else {
            return false;
        }
    }
    else
        return false;
}
//=======================Validation for options==================
//Form Validations
function ValidateForm() {

    if (!DropDownValidation('ddlBoard', 'the name of your Examination Board')) {
        return false;
    }
    if (!DropDownValidation('ddlYOP', 'Year of passing')) {
        return false;
    } 
//    if (!blankFieldValidation('txtYOP', 'Year of passing')) {
//        return false;
//    }
    if ((document.getElementById('rbtnAnnual').checked == false) & (document.getElementById('rbtnSuppl').checked == false)) {
        alert('Please Choose Exam Type');
        return false;
    }
//    if (!NumericValidation('txtYOP', 'Year of passing', '4'))
//        return false;
//    if (!checkPassingYear())
//        return false;
    if (!blankFieldValidation('txtBoardRoll', 'Roll No.')) {
        return false;
    }
    if (!chkSingleQuote('txtBoardRoll'))
        return false;
    if (!WhiteSpaceValidation1st('txtBoardRoll'))
        return false;
    if (!blankFieldValidation('txtApplName', "Applicant Name")) {
        return false;
    }
    if (!chkSingleQuote('txtApplName'))
        return false;
    if (!WhiteSpaceValidation1st('txtApplName'))
        return false;
    if (!isAlphabet('txtApplName')) {
        alert('Please enter Alphabets');
        document.getElementById('txtApplName').value = '';
        document.getElementById('txtApplName').focus();
        return false;
    }
    if (!blankFieldValidation('txtFatherName', "Father's Name")) {
        return false;
    }
    if (!chkSingleQuote('txtFatherName'))
        return false;
    if (!WhiteSpaceValidation1st('txtFatherName'))
        return false;
    if (!isAlphabet('txtFatherName')) {
        alert('Please enter Alphabets');
        document.getElementById('txtFatherName').value = '';
        document.getElementById('txtFatherName').focus();
        return false;
    }
    if (!blankFieldValidation('txtMotherName', "Mother's Name")) {
        return false;
    }

    if (!chkSingleQuote('txtMotherName'))
        return false;

    if (!WhiteSpaceValidation1st('txtMotherName'))
        return false;
    if (!isAlphabet('txtMotherName')) {
        alert('Please enter Alphabets');
        document.getElementById('txtMotherName').value = '';
        document.getElementById('txtMotherName').focus();
        return false;
    }

    //        if(!DropDownValidation('ddlBloodGroup','your blood group'))
    //            {
    //                return false;
    //            }

    if (document.getElementById('hdnImgAppl').value == "") {
        alert("Please Upload your photo !");
        document.getElementById('ImgAppl').focus();
        return false;
    }

    if (!DropDownValidation('ddlGender', 'your gender')) {
        return false;
    }
    if (!DropDownValidation('ddlReligion', 'your religion')) {
        return false;
    }
    if (!DropDownValidation('ddlDay', 'the Day of your date of birth')) {
        return false;
    }
    if (!DropDownValidation('ddlMonth', 'the Month of your date of birth')) {
        return false;
    }
    if (!DropDownValidation('ddlYear', 'the Year of your date of birth')) {
        return false;
    }
    //=======================Checking Valid DOB=======================
    var selDate = document.getElementById('ddlDay').value;
    var selMonth = document.getElementById('ddlMonth').value;
    var selYear = document.getElementById('ddlYear').value;
    if ((selDate > 0) && (selMonth > 0) && (selYear > 0)) {
        if (!(isValidDate(selYear, selMonth, selDate))) {
            alert('Please enter valid Date Of Birth !');
            document.getElementById('ddlDay').focus();
            return false;
        }
    }
    //==================checking diff. between DOB & YOP==============
    var year = parseInt(document.getElementById('ddlYear').value);
    //    var yop = parseInt(document.getElementById('txtYOP').value);
    var yop = $('#ddlYOP').val();
    var gap = yop - year;
    if (gap < 13) {
        //        alert('The difference of age between the birth year and 10th passing year should be equal or greater than 13');
        alert('The difference of age between the birth year and 10th passing year should be greater than 13');
        document.getElementById('ddlYear').focus();
        return false;
    }

    if (!DropDownValidation('ddlNationality', 'Nationality')) {
        return false;
    }
    if (!DropDownValidation('ddlMt', 'Mother Tongue')) {
        return false;
    }

    if (document.getElementById('txtadhar').value != '') {
        if (document.getElementById('txtadhar').value.length < 12) {
            alert("Aadhaar No. should have 12 digit !");
            document.getElementById('txtadhar').focus();
            return false; 
        }       
    }
   

    //===================For Correspondence address===================
    if (!DropDownValidation('ddlCState', 'State')) {
        return false;
    }
    if (!DropDownValidation('ddlCDist', 'District')) {       
        return false;
    }
    if (!DropDownValidation('ddlCBlock', 'Block/ULB')) {
        return false;
    }
    if (!blankFieldValidation('txtCPS', 'House no.,village name,police station')) {
        return false;
    }
    if (document.getElementById('txtCPS').value != '') {
        var add = document.getElementById('txtCPS').value;
        var len = add.length;
        if (parseInt(len) > 500) {
            alert('Please enter house no.,street/village,post office,\n police station name within 350 characters');
            return false;
        }
    }
    //         if(!blankFieldValidation('txtCPC','PIN code'))
    //            {
    //                return false;
    //            }

    var strpin = document.getElementById('txtCPC').value;
    if ((strpin != '') && (strpin.length < 6)) {
        alert('Pin Code can be only 6 Digit');
        document.getElementById('txtCPC').focus();
        return false;
    }
    if (!chkSingleQuote('txtCPC'))
        return false;
    if (!WhiteSpaceValidation1st('txtCPC'))
        return false;
    if (!NumericValidation('txtCPC', 'Please write only numeric values for PIN CODE', '6'))
        return false;
    if (!RepeatedNumbers('txtCPC', 1)) {
        alert('Please write valid PIN');
        document.getElementById('txtCPC').value = '';
        document.getElementById('txtCPC').focus();
        return false;
    }
   
    if (!chkSingleQuote('txtCTCode'))
        return false;
    if (!WhiteSpaceValidation1st('txtCTCode'))
        return false;
    if (!NumericValidation('txtCTCode', 'Please write only numeric values for Area Code', '5'))
        return false;
    if (!RepeatedNumbers('txtCTCode', 2)) {
        alert('Please write valid Area Code');
        document.getElementById('txtCTCode').value = '';
        document.getElementById('txtCTCode').focus();
        return false;
    }
    var strAreaCode = document.getElementById('txtCTCode').value;
    if ((strAreaCode != '') && (strAreaCode.length < 3)) {
        alert('Area Code cannot be less than 3digit');
        document.getElementById('txtCTCode').focus();
        return false;
    }
    if (!chkSingleQuote('txtCTeleNo'))
        return false;
    if (!WhiteSpaceValidation1st('txtCTeleNo'))
        return false;
    if (!NumericValidation('txtCTeleNo', 'Please write only numeric values for Phone No.', '7'))
        return false;
    if (!RepeatedNumbers('txtCTeleNo', 1)) {
        alert('Please write valid Phone No');
        document.getElementById('txtCTeleNo').value = '';
        document.getElementById('txtCTeleNo').focus();
        return false;
    }
    var strPhone = document.getElementById('txtCTeleNo').value;
    if ((strPhone != '') && (strPhone.length < 5)) {
        alert('Phone No. cannot be less than 5digit');
        document.getElementById('txtCTeleNo').focus();
        return false;
    }
    if (!chkSingleQuote('txtCMobNo'))
        return false;
    if (!WhiteSpaceValidation1st('txtCMobNo'))
        return false;
    if (!NumericValidation('txtCMobNo', 'Please write only numeric values for Mobile No.', '12'))
        return false;
    if (!RepeatedNumbers('txtCMobNo', 2)) {
        alert('Please write valid Mobile No.');
        document.getElementById('txtCMobNo').value = '';
        document.getElementById('txtCMobNo').focus();
        return false;
    }
    var strMob = document.getElementById('txtCMobNo').value;
    if ((strMob != '') && (strMob.length < 10)) {
        alert('Mobile No. cannot be less than 10digit');
        document.getElementById('txtCMobNo').focus();
        return false;
    }
    if (!chkSingleQuote('txtCEmail'))
        return false;
    if (!WhiteSpaceValidation1st('txtCEmail'))
        return false;
    if (!EmailValidation('txtCEmail'))
        return false;
    //=====================For Reservation category==================
    if ((document.getElementById('rbtST').checked == false) && (document.getElementById('rbtSC').checked == false) && (document.getElementById('rbtOther').checked == false) && (document.getElementById('rbtnOBC').checked == false) && (document.getElementById('rbtGeneral').checked == false)) {
        alert('Please select ST/SC/OBC/General/SEBC category');
        return false;
    }
    if (document.getElementById('rbtOSAY').checked == true) {
        if (!DropDownValidation('ddlOSAState', 'OSA state')) {
            return false;
        }
    }
    if (document.getElementById('rbtOLNSY').checked == true) {
        if (!DropDownValidation('ddlOLNSState', 'OLNS state')) {
            return false;
        }
    }
    //============Checking for both OLNS & OSA STATE==============
    if ((document.getElementById('rbtOLNSY').checked == true) && (document.getElementById('rbtOSAY').checked == true)) {
        alert('You cannot select both OSA & OLNS');
        return false;
    }
    //=========================Mark Validation===================
    if (((document.getElementById('ddlBoard').value == 46) && ($('#ddlYOP').val() >= 2010)) || ((document.getElementById('ddlBoard').value == 103) && ($('#ddlYOP').val() >= 2012))) {
        if (!DropDownValidation('ddlEng', 'English Grade'))
            return false;
        if (!DropDownValidation('ddlMath', 'Math Grade'))
            return false;
        if (!DropDownValidation('ddlSc', 'Science Grade'))
            return false;
        if (!DropDownValidation('ddlSoSc', 'Social Science Grade'))
            return false;
        if (!blankFieldValidation('txtCGPA', 'CGPA'))
            return false;
        if (document.getElementById('txtCGPA').value <= 0) {
            alert('CGPA cannot be less than or equal to zero(0)');
            document.getElementById('txtCGPA').value = '';
            return false;
        }
        if (!IsMatch()) {
            alert("Please Write valid CGPA");
            document.getElementById('txtCGPA').value = '';
            return false;
        }

    }
    else if ((document.getElementById('ddlBoard').value == 116) && ($('#ddlYOP').val() >= 2010)) {
        if (!DropDownValidation('ddlTGrade', 'Grade'))
            return false;
        if (!DropDownValidation('ddlKEnglish', 'English Grade'))
            return false;
        if (!DropDownValidation('ddlKMath', 'Math Grade'))
            return false;
        if (!DropDownValidation('ddlKScience', 'Science Grade'))
            return false;
        if (!DropDownValidation('ddlKSoSc', 'Social Science Grade'))
            return false;

    }
    //    else if ((document.getElementById('ddlBoard').value==103) && (document.getElementById('txtYOP').value>=2012)) {
    //        if (document.getElementById('rbtnGPoint').checked == true) {
    //             if (!DropDownValidation('ddlEng', 'English Grade'))
    //            return false;
    //            if (!DropDownValidation('ddlMath', 'Math Grade'))
    //                return false;
    //            if (!DropDownValidation('ddlSc', 'Science Grade'))
    //                return false;
    //            if (!DropDownValidation('ddlSoSc', 'Social Science Grade'))
    //                return false;
    //            if (!blankFieldValidation('txtCGPA', 'CGPA'))
    //                return false;
    //            if (document.getElementById('txtCGPA').value <= 0) {
    //                alert('CGPA cannot be less than or equal to zero(0)');
    //                document.getElementById('txtCGPA').value = '';
    //                return false;
    //            }
    //            if (!IsMatch()) {
    //                alert("Please Write valid CGPA");
    //                document.getElementById('txtCGPA').value = '';
    //                return false;
    //            }
    //        }
    //        else {
    //            BSEMarkValidation();
    //        }
    //    
    //    }
    else {

        // BSEMarkValidation();
      
        if (!blankFieldValidation('txtEnglish', 'English Mark'))
            return false;
        if (!NumericValidation('txtEnglish', 'Please write only numeric values for MARKS', '3'))
            return false;
        if (!blankFieldValidation('txtMath', 'Mathematics Mark'))
            return false;
        if (!NumericValidation('txtMath', 'Please write only numeric values for MARKS', '3'))
            return false;
        if (!blankFieldValidation('txtScience', 'Science Mark'))
            return false;
        if (!NumericValidation('txtScience', 'Please write only numeric values for MARKS', '3'))
            return false;
        if (!blankFieldValidation('txtSocSci', 'Social Science Mark'))
            return false;
        if (!NumericValidation('txtSocSci', 'Please write only numeric values for MARKS', '3'))
            return false;
        if (!blankFieldValidation('txtTotMark', 'Total Mark'))
            return false;
        if (!NumericValidation('txtTotMark', 'Please write only numeric values for MARKS', '4'))
            return false;
        if (!blankFieldValidation('txtMaxMark', 'Maximum Mark'))
            return false;
        if (!NumericValidation('txtMaxMark', 'Please write only numeric values for MARKS', '4'))
            return false;
        if (parseInt(document.getElementById('txtTotMark').value) > parseInt(document.getElementById('txtMaxMark').value)) {
            alert('Total Mark cannot be greater than Maximum Mark');
            document.getElementById('txtTotMark').focus();
            return false;
        }
        var intYear = parseInt($('#ddlYOP').val());
        if ((document.getElementById('ddlBoard').value == 45) && intYear >= 2014) {

            if (!DropDownValidation('ddlGrade', 'Grade'))
                return false;
        }

        //=================Compare mark with total mark & Maxmimum mark=========
        var Eng = parseInt(document.getElementById('txtEnglish').value);
        var Math = parseInt(document.getElementById('txtMath').value);
        var Sci = parseInt(document.getElementById('txtScience').value);
        var SoSci = parseInt(document.getElementById('txtSocSci').value);
        var Tot = parseInt(document.getElementById('txtTotMark').value);
        var Max = parseInt(document.getElementById('txtMaxMark').value);
        var inTotal = parseInt(Eng + Math + Sci + SoSci);
        //                    if(Eng==0)
        //                        {
        //                             alert('English Mark cannot be 0(zero)');
        //                             document.getElementById('txtEnglish').focus();
        //                             return false;
        //                        } 
        if (Eng >= Tot) {
            alert('English Mark cannot be greater than or equal to Total Mark');
            document.getElementById('txtEnglish').focus();
            return false;
        }
        if (Eng >= Max) {
            alert('English Mark cannot be greater than or equal to maximum mark');
            document.getElementById('txtEnglish').focus();
            return false;
        }
        //                    if(Math==0)
        //                        {
        //                             alert('Mathematics Mark cannot be 0(zero)');
        //                             document.getElementById('txtMath').focus();
        //                             return false;
        //                        }   
        if (Math >= Tot) {
            alert('Mathematics Mark cannot be greater than or equal Total Mark');
            document.getElementById('txtMath').focus();
            return false;
        }
        if (Math >= Max) {
            alert('Mathematics Mark cannot be greater than or equal to Maximum Mark');
            document.getElementById('txtMath').focus();
            return false;
        }
        //                     if(Sci==0)
        //                            {
        //                                 alert('Science Mark cannot be 0(zero)');
        //                                 document.getElementById('txtScience').focus();
        //                                 return false;
        //                            } 
        if (Sci >= Tot) {
            alert('Science Mark cannot be greater than or equal to Total Mark');
            document.getElementById('txtScience').focus();
            return false;
        }
        if (Sci >= Max) {
            alert('Science Mark cannot be greater than or equal to Maximum Mark');
            document.getElementById('txtScience').focus();
            return false;
        }
        //                    if(SoSci==0)
        //                            {
        //                                 alert('Social Science Mark cannot be 0(zero)');
        //                                 document.getElementById('txtSocSci').focus();
        //                                 return false;
        //                            }  
        if (SoSci >= Tot) {
            alert('Social Science Mark cannot be greater than or equal to Total Mark');
            document.getElementById('txtSocSci').focus();
            return false;
        }
        if (SoSci >= Max) {
            alert('Social Science Mark cannot be greater than or equal to Maximum Mark');
            document.getElementById('txtSocSci').focus();
            return false;
        }
        if (Tot == 0) {
            alert('Total Mark cannot be 0(zero)');
            document.getElementById('txtTotMark').focus();
            return false;
        }
        if (inTotal > Tot) {
            alert('The sum of your individual marks cannot be greater than the Total Mark');
            document.getElementById('txtTotMark').focus();
            return false;
        }
        if (Tot > Max) {
            alert('Total Mark cannot be greater than Maximum Mark');
            document.getElementById('txtTotMark').focus();
            return false;
        }
        if (Max == 0) {
            alert('Maximum Mark cannot be 0(zero)');
            document.getElementById('txtMaxMark').focus();
            return false;
        }

    }

    //================================Mark Validation End====================                  
    //Compartmental Validation
    if (document.getElementById('rbtCompartmentalY').checked == true) {
        //           if(!blankFieldValidation('txtCompSubject1','Subject1'))
        //                return false;
        if (!DropDownValidation('ddlCompSubject1', 'Subject1'))
            return false;
        if (!blankFieldValidation('txtCompFMark1', 'Fail Mark in previous exam'))
            return false;
        //           if(!IsCompartmentMatch('txtCompFMark1'))
        //                    {
        //                       alert("Please Write valid FailMark");
        //                       document.getElementById('txtCompFMark1').focus();
        //                       return false;
        //                   }
        if (!NumericValidation('txtCompFMark1', 'Please write only numeric values for MARKS', '3'))
            return false;
        if (!blankFieldValidation('txtCompPMark1', 'Pass Mark in previous exam'))
            return false;
        //           if(!IsCompartmentMatch('txtCompPMark1'))
        //                    {
        //                       alert("Please Write valid PassMark");
        //                       document.getElementById('txtCompPMark1').focus();
        //                       return false;
        //                   }
        if (!NumericValidation('txtCompPMark1', 'Please write only numeric values for MARKS', '3'))
            return false;
        var f1 = parseFloat(document.getElementById('txtCompFMark1').value);
        var p1 = parseFloat(document.getElementById('txtCompPMark1').value);
        if (f1 >= p1) {
            alert('Fail Mark cannot be greater than or equal to Pass Mark');
            document.getElementById('txtCompFMark1').focus();
            return false;
        }
        if ((document.getElementById('ddlBoard').value != 46) && ($('#ddlYOP').val() <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
            if (!checkCompartment('ddlCompSubject1', 'txtCompPMark1'))
                return false;
        }
        if (document.getElementById('ddlCompSubject2').options[document.getElementById('ddlCompSubject2').selectedIndex].value != '') {
            if (!DropDownValidation('ddlCompSubject1', 'Subject1'))
                return false;
            if (!blankFieldValidation('txtCompFMark1', 'Fail Mark in previous exam'))
                return false;
            if (!blankFieldValidation('txtCompPMark1', 'Pass Mark in previous exam'))
                return false;
            if (!blankFieldValidation('txtCompFMark2', 'Fail Mark in previous exam for 2nd subject'))
                return false;
            //               if(!IsCompartmentMatch('txtCompFMark2'))
            //                    {
            //                       alert("Please Write valid FailMark");
            //                       document.getElementById('txtCompFMark2').focus();
            //                       return false;
            //                   } 
            if (!NumericValidation('txtCompFMark2', 'Please write only numeric values for MARKS', '3'))
                return false;
            if (!blankFieldValidation('txtCompPMark2', 'Pass Mark in previous exam for 2nd subject'))
                return false;
            if (!NumericValidation('txtCompPMark2', 'Please write only numeric values for MARKS', '3'))
                return false;
            //               if(!IsCompartmentMatch('txtCompPMark2'))
            //                    {
            //                       alert("Please Write valid PassMark");
            //                       document.getElementById('txtCompPMark2').focus();
            //                       return false;
            //                   } 
            var f2 = parseFloat(document.getElementById('txtCompFMark2').value);
            var p2 = parseFloat(document.getElementById('txtCompPMark2').value);
            if (f2 >= p2) {
                alert('Fail Mark cannot be greater than or equal to Pass Mark');
                document.getElementById('txtCompFMark2').focus();
                return false;
            }
            if ((document.getElementById('ddlBoard').value != 46) && ($('#ddlYOP').val() <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
                if (!checkCompartment('ddlCompSubject2', 'txtCompPMark2'))
                    return false;
            }
        }


       

        if (document.getElementById('ddlCompSubject3').options[document.getElementById('ddlCompSubject3').selectedIndex].value != '') {

            if (!DropDownValidation('ddlCompSubject2', 'Subject2'))
                return false;
            if (!blankFieldValidation('txtCompFMark2', 'Fail Mark in previous exam'))
                return false;
            if (!blankFieldValidation('txtCompPMark2', 'Pass Mark in previous exam'))
                return false;
            if (!blankFieldValidation('txtCompFMark3', 'Fail Mark in previous exam for 3rd subject'))
                return false;
            //                      if(!IsCompartmentMatch('txtCompFMark3'))
            //                        {
            //                           alert("Please Write valid FailMark");
            //                           document.getElementById('txtCompFMark3').focus();
            //                           return false;
            //                       }  
            if (!NumericValidation('txtCompFMark3', 'Please write only numeric values for MARKS', '3'))
                return false;
            if (!blankFieldValidation('txtCompPMark3', 'Pass Mark in previous exam for 3rd subject'))
                return false;
            if (!NumericValidation('txtCompPMark3', 'Please write only numeric values for MARKS', '3'))
                return false;
            //                       if(!IsCompartmentMatch('txtCompPMark3'))
            //                            {
            //                               alert("Please Write valid FailMark");
            //                               document.getElementById('txtCompPMark3').focus();
            //                               return false;
            //                           } 
            var f3 = parseFloat(document.getElementById('txtCompFMark3').value);
            var p3 = parseFloat(document.getElementById('txtCompPMark3').value);
            if (f3 >= p3) {
                alert('Fail Mark cannot be greater than or equal to Pass Mark');
                document.getElementById('txtCompFMark3').focus();
                return false;
            }
            if ((document.getElementById('ddlBoard').value != 46) && ($('#ddlYOP').val() <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
                if (!checkCompartment('ddlCompSubject3', 'txtCompPMark3'))
                    return false;
            }
        }
        if (document.getElementById('ddlCompSubject4').options[document.getElementById('ddlCompSubject4').selectedIndex].value != '') {
           
            if (!DropDownValidation('ddlCompSubject3', 'Subject2'))
                return false;
            if (!blankFieldValidation('txtCompFMark3', 'Fail Mark in previous exam'))
                return false;
            if (!blankFieldValidation('txtCompPMark3', 'Pass Mark in previous exam'))
                return false;
            if (!blankFieldValidation('txtCompFMark4', 'Fail Mark in previous exam for 4th subject'))
                return false;
            //                      if(!IsCompartmentMatch('txtCompFMark3'))
            //                        {
            //                           alert("Please Write valid FailMark");
            //                           document.getElementById('txtCompFMark3').focus();
            //                           return false;
            //                       }  
            if (!NumericValidation('txtCompFMark4', 'Please write only numeric values for MARKS', '3'))
                return false;
            if (!blankFieldValidation('txtCompPMark4', 'Pass Mark in previous exam for 4th subject'))
                return false;
            if (!NumericValidation('txtCompPMark4', 'Please write only numeric values for MARKS', '3'))
                return false;
            //                       if(!IsCompartmentMatch('txtCompPMark3'))
            //                            {
            //                               alert("Please Write valid FailMark");
            //                               document.getElementById('txtCompPMark3').focus();
            //                               return false;
            //                           } 
            var f4 = parseFloat(document.getElementById('txtCompFMark4').value);
            var p4 = parseFloat(document.getElementById('txtCompPMark4').value);
            if (f4 >= p4) {
                alert('Fail Mark cannot be greater than or equal to Pass Mark');
                document.getElementById('txtCompFMark4').focus();
                return false;
            }
            if ((document.getElementById('ddlBoard').value != 46) && ($('#ddlYOP').val() <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
                if (!checkCompartment('ddlCompSubject4', 'txtCompPMark4'))                  
                    return false;
            }
        }
        if (!checkCompSubject('1')) {
            alert('You cannot enter same subject\ntwice for Comaprtment subject');
            return false;
        }

    }

    if (!DropDownValidation('ddlFOcu', 'Fathers Occupation'))
        return false;

    if (!DropDownValidation('ddlMOcu', 'Mothers Occupation'))
        return false;

    if (!DropDownValidation('ddlAIncome', 'Annual Income of the Parents'))
        return false;

//    if ($("#ddlAIncome").val() == 1 || $("#ddlAIncome").val() == 2 || $("#ddlAIncome").val() == 3) {

//        if (!blankFieldValidation('txtacno', 'Account Number'))
//            return false;

//        if (!NumericValidation('txtacno', 'Please write only numeric values for Account Number', '20'))
//            return false;

//        if (!blankFieldValidation('txtifsc', 'IFSC Number'))
//            return false;
//        if (!blankFieldValidation('txtBankname', 'Bank Name'))
//            return false;
//        if (!blankFieldValidation('txtBrname', 'Branch Name'))
//            return false;
//    }

    if (!blankFieldValidation('txtschname', 'Name of the School'))
        return false;

    if (!blankFieldValidation('txtschloc', 'Location of the School'))
        return false;


    if ($('#ddlinstDistrict').val() == 0) {
        if (!blankFieldValidation('txtdist', 'District'))
            return false;
    }
    else {

        if (!DropDownValidation('ddlinstDistrict', 'District'))
            return false;
    }
      

    if (!DropDownValidation('ddlYOJ', 'Year of Joining'))
        return false;

    if (!DropDownValidation('ddlYOL', 'Year of Leaving'))
        return false;

   
    //Compartmental Validation Ends
    //Option Validation
    //============Checking if the applicant choose 1 option only=================
    var cIndex = document.getElementById('ddlCollege').value;
    var sIndex = document.getElementById('ddlStream').value;
    var compIndex = document.getElementById('ddlCompulsory').value;
    var e1Index = document.getElementById('ddlELE1').value;
    var e2Index = document.getElementById('ddlELE2').value;
    var e3Index = document.getElementById('ddlELE3').value;
    var f1Index = document.getElementById('ddl4thELE1').value;
    if ((document.getElementById('tableOption').getElementsByTagName("TR").length < 2) && (cIndex == 0) && (sIndex == 0) && (compIndex == 0) && (e1Index == 0) && (e2Index == 0) && (e3Index == 0) && (f1Index == 0)) {
        alert('Please select minimum 1 Option details ');
        document.getElementById('ddlCollege').focus();
        return false;
    }
    if ((document.getElementById('tableOption').getElementsByTagName("TR").length >= 1) && (cIndex != 0)) {
        if (!DropDownValidation('ddlCollege', 'College Name'))
            return false;
        if (!DropDownValidation('ddlStream', 'Stream Name'))
            return false;
        if (!DropDownValidation('ddlCompulsory', 'Compulsory'))
            return false;
        if (!DropDownValidation('ddlELE1', 'your elective subject according\n to the preference you want'))
            return false;
        if (!DropDownValidation('ddlELE2', 'your elective subject according\n to the preference you want'))
            return false;
        //=======================Checking Elective values1=============
        if (document.getElementById('ddlELE1').value == document.getElementById('ddlELE2').value) {
            alert('First or second or third elective subject cannot be same');
            document.getElementById('ddlELE2').focus();
            return false;
        }
        //============================================================
        if (document.getElementById('rbtSanskrit').checked == false) {
            if (!DropDownValidation('ddlELE3', 'your elective subject according\n to the preference you want'))
                return false;
            //=======================Checking Elective values2=============

            if (document.getElementById('ddlELE2').value == document.getElementById('ddlELE3').value) {
                alert('First or second or third elective subject cannot be same');
                document.getElementById('ddlELE3').focus();
                return false;
            }
            if (document.getElementById('ddlELE1').value == document.getElementById('ddlELE3').value) {
                alert('First or second or third elective subject cannot be same');
                document.getElementById('ddlELE3').focus();
                return false;
            }
            //============================================================
            if (document.getElementById('rbtVocational').checked == false) {

                if (!DropDownValidation('ddl4thELE1', 'Please select your fourth elective subject according\n to the preference you want'))
                    return false;
                //==============================================================
                var fElectiveval1 = document.getElementById('ddl4thELE1').value;
                var fElectiveval2 = document.getElementById('ddl4thELE2').value;
                var fElectiveval3 = document.getElementById('ddl4thELE3').value;
                var oElectiveval1 = document.getElementById('ddlELE1').value;
                var oElectiveval2 = document.getElementById('ddlELE2').value;
                var oElectiveval3 = document.getElementById('ddlELE3').value;
                //========================Checking fourth elective=============
                if (fElectiveval1 == fElectiveval2) {
                    alert('First or second or third preference in\nfourth elective subject cannot be same');
                    document.getElementById('ddl4thELE1').focus();
                    return false;
                }
                if ((fElectiveval1 == oElectiveval1) || (fElectiveval1 == oElectiveval2) || (fElectiveval1 == oElectiveval3)) {
                    alert('Elective & fourth elective choice1 cannot same');
                    document.getElementById('ddl4thELE1').focus();
                    return false;
                }
                if (fElectiveval2 != 0) {
                    if ((fElectiveval2 == oElectiveval1) || (fElectiveval2 == oElectiveval2) || (fElectiveval2 == oElectiveval3)) {
                        alert('Elective preference & fourth elective preference cannot same');
                        document.getElementById('ddl4thELE2').focus();
                        return false;
                    }
                }
                if (fElectiveval3 != 0) {
                    if ((fElectiveval3 == oElectiveval1) || (fElectiveval3 == oElectiveval2) || (fElectiveval3 == oElectiveval3)) {
                        alert('Elective preference & fourth elective preference cannot same');
                        document.getElementById('ddl4thELE3').focus();
                        return false;
                    }
                }
                if ((fElectiveval2 != 0) && (fElectiveval3 != 0)) {
                    if (fElectiveval2 == fElectiveval3) {
                        alert('First or second or third preference in\nfourth elective subject cannot be same');
                        document.getElementById('ddl4thELE2').focus();
                        return false;
                    }
                    if (fElectiveval1 == fElectiveval3) {
                        alert('First or second or third preference in\nfourth elective subject cannot be same');
                        document.getElementById('ddl4thELE3').focus();
                        return false;
                    }
                }
                if ((fElectiveval2 == 0) && (fElectiveval3 != 0)) {
                    alert('Please select your fourth elective subject according\n to the preference you want');
                    document.getElementById('ddl4thELE2').focus();
                    return false;
                }
            }
        }
        //============================================================
        if ((document.getElementById('rbtAccomodation1').checked == false) && (document.getElementById('rbtAccomodation2').checked == false)) {
            alert('Please select hostel option ');
            return false;
        }
    }

    //===========IF THERE IS DATA IN ADD MORE TABLE AND ALSO SELECTED ON DDL=====
    if ((document.getElementById('tableOption').getElementsByTagName("TR").length >= 11) && (cIndex != 0) && (sIndex != 0) && (compIndex != 0) && (e1Index != 0) && (e2Index != 0) && (e3Index != 0) && (f1Index != 0)) {
        alert('You have already added 10 options\n this Option cannot be added');
        clearDDL();
    }
//    if (document.getElementById('rbtOLNSY').checked == true) {
//        
//        var oElectiveval1olns = document.getElementById('ddlELE1').value;
//        var oElectiveval2olns = document.getElementById('ddlELE2').value;
//        var oElectiveval3olns = document.getElementById('ddlELE3').value;
//        var oElectiveval4olns = document.getElementById('ddl4thELE1').value;
//        var compolnsddl = document.getElementById('ddlCompulsory').value;
//       
//        if (((compolnsddl != 33) && (compolnsddl != 46) && (compolnsddl != 47) && (compolnsddl != 48)) && ((oElectiveval1olns != 33) && (oElectiveval1olns != 46) && (oElectiveval1olns != 47) && (oElectiveval1olns != 48))
//                    && ((oElectiveval2olns != 33) && (oElectiveval2olns != 46) && (oElectiveval2olns != 47) && (oElectiveval2olns != 48)) && ((oElectiveval3olns != 33) && (oElectiveval3olns != 46) && (oElectiveval3olns != 47) && (oElectiveval3olns != 48))
//                    && ((oElectiveval4olns != 33) && (oElectiveval4olns != 46) && (oElectiveval4olns != 47) && (oElectiveval4olns != 48))) {
//           
//            alert('As you are choosing OLNS.It is mandatory to choose a subject as Oriya.')
//            return false;
//        }
//    }
// // =============================================================================================================================================================
//    if ((document.getElementById('tableOption').getElementsByTagName("TR").length > 1) && (document.getElementById('rbtOLNSY').checked == true)) {
//        $("#tableOption tr:gt(0)").each(function () {
//            var this_row = $(this);
//            var compulsory = $.trim(this_row.find('td:eq(3)').html());

//            var elctives = $.trim(this_row.find('td:eq(4)').html());
//            var opt = $.trim(this_row.find('td:eq(0)').text()).toLowerCase();           

//            if (elctives.search("ODIA") > 0 || compulsory.search("ODIA") > 0) {
//            }
//            else {
//                alert("As you are choosing OLNS.It is mandatory to choose a subject as Oriya in " + opt + " option");
//            }
//        });
//        
//    }
//    else if (document.getElementById('rbtOLNSY').checked == true) {
//        var oElectiveval1olns = document.getElementById('ddlELE1').value;
//        var oElectiveval2olns = document.getElementById('ddlELE2').value;
//        var oElectiveval3olns = document.getElementById('ddlELE3').value;
//        var compolnsddl = document.getElementById('ddlCompulsory').value;

//        if (((compolnsddl != 33) && (compolnsddl != 46) && (compolnsddl != 47) && (compolnsddl != 48)) && ((oElectiveval1olns != 33) && (oElectiveval1olns != 46) && (oElectiveval1olns != 47) && (oElectiveval1olns != 48))
//                    && ((oElectiveval2olns != 33) && (oElectiveval2olns != 46) && (oElectiveval2olns != 47) && (oElectiveval2olns != 48)) && ((oElectiveval3olns != 33) && (oElectiveval3olns != 46) && (oElectiveval3olns != 47) && (oElectiveval3olns != 48))) {
//            alert('As you are choosing OLNS.It is mandatory to choose a subject as Oriya.')
//            return false;
//        }
//    }
//=================================================================================================================================================================
    // alert("alert");
    //Option Validation Ends   
    
    var ReturnFlag = OLNSValidation()
    if (ReturnFlag == false) {
        return false
    }
    else {

        return true
    }

    if (document.getElementById('ddlStream').selectedIndex != 0) {
        //            if (!DropDownValidation('ddlCollegeDistrict', 'District Name'))
        //                return false;
       
        if (!DropDownValidation('ddlCollege', 'College Name'))
            return false;
        if (document.getElementById('rbtOLNSY').checked == true) {
            var oElectiveval1olns = document.getElementById('ddlELE1').value;
            var oElectiveval2olns = document.getElementById('ddlELE2').value;
            var oElectiveval3olns = document.getElementById('ddlELE3').value;
            var oElectiveval4olns = document.getElementById('ddl4thELE1').value;
            var compolnsddl = document.getElementById('ddlCompulsory').value;
            var strm = document.getElementById('ddlStream').value;

            if (strm == 1 || strm == 2 || strm == 3) {
                if (((compolnsddl != 33) && (compolnsddl != 46) && (compolnsddl != 47) && (compolnsddl != 48) && (compolnsddl != 215) && (compolnsddl != 202)) && ((oElectiveval1olns != 33) && (oElectiveval1olns != 46) && (oElectiveval1olns != 47) && (oElectiveval1olns != 48))
                    && ((oElectiveval2olns != 33) && (oElectiveval2olns != 46) && (oElectiveval2olns != 47) && (oElectiveval2olns != 48)) && ((oElectiveval3olns != 33) && (oElectiveval3olns != 46) && (oElectiveval3olns != 47) && (oElectiveval3olns != 48))
                    && ((oElectiveval4olns != 33) && (oElectiveval4olns != 46) && (oElectiveval4olns != 47) && (oElectiveval4olns != 48))) {
                    alert('As you are choosing OLNS.It is mandatory to choose a subject as Odia.')
                    return false;
                }
            }
        }
    }

}
function BSEMarkValidation() {
    alert("alert");
    if (!blankFieldValidation('txtEnglish', 'English Mark'))
        return false;
    if (!NumericValidation('txtEnglish', 'Please write only numeric values for MARKS', '3'))
        return false;
    if (!blankFieldValidation('txtMath', 'Mathematics Mark'))
        return false;
    if (!NumericValidation('txtMath', 'Please write only numeric values for MARKS', '3'))
        return false;
    if (!blankFieldValidation('txtScience', 'Science Mark'))
        return false;
    if (!NumericValidation('txtScience', 'Please write only numeric values for MARKS', '3'))
        return false;
    if (!blankFieldValidation('txtSocSci', 'Social Science Mark'))
        return false;
    if (!NumericValidation('txtSocSci', 'Please write only numeric values for MARKS', '3'))
        return false;
    if (!blankFieldValidation('txtTotMark', 'Total Mark'))
        return false;
    if (!NumericValidation('txtTotMark', 'Please write only numeric values for MARKS', '4'))
        return false;
    if (!blankFieldValidation('txtMaxMark', 'Maximum Mark'))
        return false;
    if (!NumericValidation('txtMaxMark', 'Please write only numeric values for MARKS', '4'))
        return false;
    if (parseInt(document.getElementById('txtTotMark').value) > parseInt(document.getElementById('txtMaxMark').value)) {
        alert('Total Mark cannot be greater than Maximum Mark');
        document.getElementById('txtTotMark').focus();
        return false;
    }
    var intYear = parseInt($('#ddlYOP').val());
    if ((document.getElementById('ddlBoard').value == 45) && intYear == 2017) {

        if (!DropDownValidation('ddlGrade', 'Grade'))
            return false;
    }
    //=================Compare mark with total mark & Maxmimum mark=========
    var Eng = parseInt(document.getElementById('txtEnglish').value);
    var Math = parseInt(document.getElementById('txtMath').value);
    var Sci = parseInt(document.getElementById('txtScience').value);
    var SoSci = parseInt(document.getElementById('txtSocSci').value);
    var Tot = parseInt(document.getElementById('txtTotMark').value);
    var Max = parseInt(document.getElementById('txtMaxMark').value);
    var inTotal = parseInt(Eng + Math + Sci + SoSci);
    //                    if(Eng==0)
    //                        {
    //                             alert('English Mark cannot be 0(zero)');
    //                             document.getElementById('txtEnglish').focus();
    //                             return false;
    //                        } 
    if (Eng >= Tot) {
        alert('English Mark cannot be greater than or equal to Total Mark');
        document.getElementById('txtEnglish').focus();
        return false;
    }
    if (Eng >= Max) {
        alert('English Mark cannot be greater than or equal to maximum mark');
        document.getElementById('txtEnglish').focus();
        return false;
    }
    //                    if(Math==0)
    //                        {
    //                             alert('Mathematics Mark cannot be 0(zero)');
    //                             document.getElementById('txtMath').focus();
    //                             return false;
    //                        }   
    if (Math >= Tot) {
        alert('Mathematics Mark cannot be greater than or equal Total Mark');
        document.getElementById('txtMath').focus();
        return false;
    }
    if (Math >= Max) {
        alert('Mathematics Mark cannot be greater than or equal to Maximum Mark');
        document.getElementById('txtMath').focus();
        return false;
    }
    //                     if(Sci==0)
    //                            {
    //                                 alert('Science Mark cannot be 0(zero)');
    //                                 document.getElementById('txtScience').focus();
    //                                 return false;
    //                            } 
    if (Sci >= Tot) {
        alert('Science Mark cannot be greater than or equal to Total Mark');
        document.getElementById('txtScience').focus();
        return false;
    }
    if (Sci >= Max) {
        alert('Science Mark cannot be greater than or equal to Maximum Mark');
        document.getElementById('txtScience').focus();
        return false;
    }
    //                    if(SoSci==0)
    //                            {
    //                                 alert('Social Science Mark cannot be 0(zero)');
    //                                 document.getElementById('txtSocSci').focus();
    //                                 return false;
    //                            }  
    if (SoSci >= Tot) {
        alert('Social Science Mark cannot be greater than or equal to Total Mark');
        document.getElementById('txtSocSci').focus();
        return false;
    }
    if (SoSci >= Max) {
        alert('Social Science Mark cannot be greater than or equal to Maximum Mark');
        document.getElementById('txtSocSci').focus();
        return false;
    }
    if (Tot == 0) {
        alert('Total Mark cannot be 0(zero)');
        document.getElementById('txtTotMark').focus();
        return false;
    }
    if (inTotal > Tot) {
        alert('The sum of your individual marks cannot be greater than the Total Mark');
        document.getElementById('txtTotMark').focus();
        return false;
    }
    if (Tot > Max) {
        alert('Total Mark cannot be greater than Maximum Mark');
        document.getElementById('txtTotMark').focus();
        return false;
    }
    if (Max == 0) {
        alert('Maximum Mark cannot be 0(zero)');
        document.getElementById('txtMaxMark').focus();      
        return false;
    }

}
function chkReturn() {

    var valReturnFlag = ValidateForm()
    if (valReturnFlag == false) {
        return false
    }
    else {
       
        return true
    }
}
///=======================  view optionDetails=====================
function viewOptions() {
    var cids = document.getElementById('hidCollege').value;
    //======================================================
    optionId = document.getElementById('hidOptionIds').value;
    StreamId = document.getElementById('hidStream').value;
    CompulsoryId = document.getElementById('hidComplusory').value;
    Elective1 = document.getElementById('hidElective1').value;
    Elective2 = document.getElementById('hidElective2').value;
    Elective3 = document.getElementById('hidElective3').value;
    FElective1 = document.getElementById('hidFElelective1').value;
    FElective2 = document.getElementById('hidFElelective2').value;
    FElective3 = document.getElementById('hidFElelective3').value;
    Accomodation = document.getElementById('hidHostel').value;
    //=========================Getting names=================
    CText = document.getElementById('hidCname').value;
    SText = document.getElementById('hidSname').value;
    CompSId = document.getElementById('hidCompName').value;
    E1Text = document.getElementById('hidE1name').value;
    E2Text = document.getElementById('hidE2name').value;
    E3Text = document.getElementById('hidE3name').value;
    F1Text = document.getElementById('hidF1Ele').value;
    F2Text = document.getElementById('hidF2Ele').value;
    F3Text = document.getElementById('hidF3Ele').value;
    //======================================================
    optAry = new Array();
    colAry = new Array();
    sAry = new Array();
    compAry = new Array();
    ele1Ary = new Array();
    ele2Ary = new Array();
    ele3Ary = new Array();
    fele1Ary = new Array();
    fele2Ary = new Array();
    fele3Ary = new Array();
    hosAry = new Array();
    //============for text=================
    colAry1 = new Array();
    sAry1 = new Array();
    compAry1 = new Array();
    ele1Ary1 = new Array();
    ele2Ary1 = new Array();
    ele3Ary1 = new Array();
    fele1Ary1 = new Array();
    fele2Ary1 = new Array();
    fele3Ary1 = new Array();
    //================================
    if (cids.indexOf('~') > 0) {
        //==============Splitiing the text & ids==========
        optAry = optionId.split('~');
        colAry = cids.split('~');
        colAry1 = CText.split('~');
        sAry = StreamId.split('~');
        sAry1 = SText.split('~');
        compAry = CompulsoryId.split('~');
        compAry1 = CompSId.split('~');
        ele1Ary = Elective1.split('~');
        ele1Ary1 = E1Text.split('~');
        ele2Ary = Elective2.split('~');
        ele2Ary1 = E2Text.split('~');
        ele3Ary = Elective3.split('~');
        ele3Ary1 = E3Text.split('~');
        fele1Ary = FElective1.split('~');
        fele1Ary1 = F1Text.split('~');
        fele2Ary = FElective2.split('~');
        fele2Ary1 = F2Text.split('~');
        fele3Ary = FElective3.split('~');
        fele3Ary1 = F3Text.split('~');
        hosAry = Accomodation.split('~');
        //================================================
        for (var i = 0; i < colAry.length; i++) {
            optionId = optAry[i];
            CollegeId = colAry[i];
            CText = colAry1[i];
            StreamId = sAry[i];
            SText = sAry1[i];
            CompulsoryId = compAry[i];
            CompSId = compAry1[i];
            Elective1 = ele1Ary[i];
            E1Text = ele1Ary1[i];
            Elective2 = ele2Ary[i];
            E2Text = ele2Ary1[i];
            Elective3 = ele3Ary[i];
            E3Text = ele3Ary1[i];
            FElective1 = fele1Ary[i];
            F1Text = fele1Ary1[i];
            FElective2 = fele2Ary[i];
            F2Text = fele2Ary1[i];
            FElective3 = fele3Ary[i];
            F3Text = fele3Ary1[i];
            Accomodation = hosAry[i];
            DisplayRow();
        }
    }
    else {
        optionId = document.getElementById('hidOptionIds').value;
        CollegeId = document.getElementById('hidCollege').value;
        StreamId = document.getElementById('hidStream').value;
        CompulsoryId = document.getElementById('hidComplusory').value;
        Elective1 = document.getElementById('hidElective1').value;
        Elective2 = document.getElementById('hidElective2').value;
        Elective3 = document.getElementById('hidElective3').value;
        FElective1 = document.getElementById('hidFElelective1').value;
        FElective2 = document.getElementById('hidFElelective2').value;
        FElective3 = document.getElementById('hidFElelective3').value;
        Accomodation = document.getElementById('hidHostel').value;
        //=========================Getting names=================
        CText = document.getElementById('hidCname').value;
        SText = document.getElementById('hidSname').value;
        CompSId = document.getElementById('hidCompName').value;
        E1Text = document.getElementById('hidE1name').value;
        E2Text = document.getElementById('hidE2name').value;
        E3Text = document.getElementById('hidE3name').value;
        F1Text = document.getElementById('hidF1Ele').value;
        F2Text = document.getElementById('hidF2Ele').value;
        F3Text = document.getElementById('hidF3Ele').value;
        //=======================================================
        DisplayRow();
    }
}
///===============================add options==================
//=========================Add Option Details=====================================
function showOptionData() {
    optionArray = new Array(9);
    optionArray[0] = new Array();
    optionArray[1] = new Array();
    optionArray[2] = new Array();
    optionArray[3] = new Array();
    optionArray[4] = new Array();
    optionArray[5] = new Array();
    optionArray[6] = new Array();
    optionArray[7] = new Array();
    optionArray[8] = new Array();
    optionArray[9] = new Array();
    optionArray[10] = new Array();

    optionArray[0][0] = CText;
    optionArray[0][1] = CollegeId;
    optionArray[1][0] = SText;
    optionArray[1][1] = StreamId;
    optionArray[2][0] = CompSId;
    optionArray[2][1] = CompulsoryId;
    optionArray[3][0] = E1Text;
    optionArray[3][1] = Elective1;
    optionArray[4][0] = E2Text;
    optionArray[4][1] = Elective2;
//    optionArray[5][0] = E3Text;
//    optionArray[5][1] = Elective3;
//    optionArray[6][0] = F1Text;
//    optionArray[6][1] = FElective1;
    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================

    if (Elective3 == 0) {
        optionArray[5][0] = '';
        optionArray[5][1] = Elective3;
    }
    else {
        optionArray[5][0] = E3Text;
        optionArray[5][1] = Elective3;
    }


    if (FElective1 == 0) {
        optionArray[6][0] = '';
        optionArray[6][1] = FElective1;
    }
    else {
        optionArray[6][0] = F1Text;
        optionArray[6][1] = FElective1;
    }   


    if (FElective2 == 0) {
        optionArray[7][0] = '';
        optionArray[7][1] = FElective2;
    }
    else {
        optionArray[7][0] = F2Text;
        optionArray[7][1] = FElective2;
    }
    if (FElective3 == 0) {
        optionArray[8][0] = '';
        optionArray[8][1] = FElective3;
    }
    else {
        optionArray[8][0] = F3Text;
        optionArray[8][1] = FElective3;
    }
    //==========================================================================================================
    //	var Accomodation=0;
    var AccText;
    if (Accomodation == 1) {
        Accomodation = 1;
        AccText = document.getElementById('rbtAccomodation1').Text;
    }
    if (Accomodation == 2) {
        Accomodation = 2;
        AccText = document.getElementById('rbtAccomodation2').Text;
    }
    optionArray[9][0] = AccText;
    optionArray[9][1] = Accomodation;
    optionArray[10][0] = '';
    optionArray[10][1] = optionId;
}
///=====================display options======================
function DisplayRow() {
    showOptionData();
    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
    var OptionText;
    var Caption;
////    if (optText == 1) {
////        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"

////        if (document.getElementById('rbtnOriya').checked) {
////            Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
////            document.getElementById('2').value = 'ଦିତୀୟ ପସନ୍ଦ'; 
////        }
////        else {
////            Caption = "Choose your 2nd Option";
////            document.getElementById('2').value = 'You have selected 2nd Option';   
////        }
////        document.getElementById('2').className = "optioninctive";
////        document.getElementById('2').disabled = true;
////    }
////    if (optText == 2) {
////        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
////        
//////        Caption = "Choose your 3rd Option"
//////        document.getElementById('3').value = 'You have selected 3rd Option';

////        if (document.getElementById('rbtnOriya').checked) {
////            document.getElementById('3').value = 'ତୃତୀୟ ପସନ୍ଦ';
////            Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
////        }
////        else {
////            Caption = "Choose your 3rd Option"
////            document.getElementById('3').value = 'You have selected 3rd Option';
////        }
////        document.getElementById('3').className = "optioninctive";
////        document.getElementById('3').disabled = true;
////    }
////    if (optText == 3) {
////        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"

//////        Caption = "Choose your 4th Option"
//////        document.getElementById('4').value = 'You have selected 4th Option';

////        if (document.getElementById('rbtnOriya').checked) {
////            document.getElementById('4').value = 'ଚତୁର୍ଥ ପସନ୍ଦ';
////            Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
////        }
////        else {
////            Caption = "Choose your 4th Option"
////            document.getElementById('4').value = 'You have selected 4th Option';
////        }
////        document.getElementById('4').className = "optioninctive";
////        document.getElementById('4').disabled = true;
////    }
////    if (optText == 4) {
////        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"

//////        Caption = "Choose your 5th Option"
////        //        document.getElementById('5').value = 'You have selected 5th Option';

////        if (document.getElementById('rbtnOriya').checked) {
////            document.getElementById('5').value = 'ପଞ୍ଚମ ପସନ୍ଦ';
////            Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
////        }
////        else {
////            Caption = "Choose your 5th Option"
////            document.getElementById('5').value = 'You have selected 5th Option';
////        }

////        document.getElementById('5').className = "optioninctive";
////        document.getElementById('5').disabled = true;
////    }
////    if (optText == 5) {
////        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"

////        Caption = "Choose your 6th Option"
////        document.getElementById('6').value = 'You have selected 6th Option';

////        if (document.getElementById('rbtnOriya').checked) {
////            document.getElementById('6').value = 'ଷଷ୍ଠ ପସନ୍ଦ';
////            Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
////        }
////        else {
////            Caption = "Choose your 6th Option"
////            document.getElementById('6').value = 'You have selected 6th Option';
////        }

////        document.getElementById('6').className = "optioninctive";
////        document.getElementById('6').disabled = true;
////    }
////    if (optText == 6) {
////        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"

////        Caption = "Choose your 7th Option"
////        document.getElementById('7').value = 'You have selected 7th Option';

////        if (document.getElementById('rbtnOriya').checked) {
////            document.getElementById('7').value = 'ସପ୍ତମ ପସନ୍ଦ';          
////            Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
////        }
////        else {
////            Caption = "Choose your 7th Option"
////            document.getElementById('7').value = 'You have selected 7th Option';
////        }
////        document.getElementById('7').className = "optioninctive";
////        document.getElementById('7').disabled = true;
////    }
////    if (optText == 7) {
////        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"

////        Caption = "Choose your 8th Option"
////        document.getElementById('8').value = 'You have selected 8th Option';

////        if (document.getElementById('rbtnOriya').checked) {
////            document.getElementById('8').value = 'ଅଷ୍ଟମ ପସନ୍ଦ';           
////            Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
////        }
////        else {
////            Caption = "Choose your 8th Option"
////            document.getElementById('8').value = 'You have selected 8th Option';
////        }
////        //Caption = "You have added 6 Options"
////        document.getElementById('8').className = "optioninctive";
////        document.getElementById('8').disabled = true;
////    }
////    if (optText == 8) {
////        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"

////        Caption = "Choose your 9th Option"
////        document.getElementById('9').value = 'You have selected 9th Option';

////        if (document.getElementById('rbtnOriya').checked) {
////            document.getElementById('9').value = 'ନବମ ପସନ୍ଦ';
////            Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
////        }
////        else {
////            Caption = "Choose your 9th Option"
////            document.getElementById('9').value = 'You have selected 9th Option';
////        }
////        //Caption = "You have added 6 Options"
////        document.getElementById('9').className = "optioninctive";
////        document.getElementById('9').disabled = true;
////    }
////    if (optText == 9) {
////        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"

////        Caption = "Choose your 10th Option"
////        document.getElementById('10').value = 'You have selected 10th Option';

////        if (document.getElementById('rbtnOriya').checked) {
////            document.getElementById('10').value = 'ଦଶମ ପସନ୍ଦ';
////            Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
////        }
////        else {
////            Caption = "Choose your 10th Option"
////            document.getElementById('10').value = 'You have selected 10th Option';
////        }
////        //Caption = "You have added 6 Options"
////        document.getElementById('10').className = "optioninctive";
////        document.getElementById('10').disabled = true;
////    }
////    if (optText == 10) {
////        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
////        if (document.getElementById('rbtnOriya').checked) {
////            Caption = "ଆପଣ ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
////        }
////        else {
////            Caption = "You have added 10 Options"
////        }
////        //Caption = "You have added 6 Options"
    ////    }




    if (optText == 1) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"

        if (document.getElementById('rbtnOriya').checked) {
            Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
            document.getElementById('2').value = 'ଦିତୀୟ ପସନ୍ଦ';
        }
        else {
            Caption = "Choose your 2nd Option";
            document.getElementById('2').style.display = 'none';
            document.getElementById('3').style.display = '';
        }
        //            document.getElementById('2').className = "optioninctive";
        //            document.getElementById('2').disabled = true;
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"

        //        Caption = "Choose your 3rd Option"
        //        document.getElementById('3').value = 'You have selected 3rd Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('3').value = 'ତୃତୀୟ ପସନ୍ଦ';
            Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            Caption = "Choose your 3rd Option"
            document.getElementById('3').value = 'You have selected 3rd Option';
        }
        document.getElementById('3').className = "optioninctive";
        document.getElementById('3').disabled = true;
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"

        //        Caption = "Choose your 4th Option"
        //        document.getElementById('4').value = 'You have selected 4th Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('4').value = 'ଚତୁର୍ଥ ପସନ୍ଦ';
            Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
        }
        else {
            Caption = "Choose your 4th Option"
            document.getElementById('4').value = 'You have selected 4th Option';
        }
        document.getElementById('4').className = "optioninctive";
        document.getElementById('4').disabled = true;
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"

        //        Caption = "Choose your 5th Option"
        //        document.getElementById('5').value = 'You have selected 5th Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('5').value = 'ପଞ୍ଚମ ପସନ୍ଦ';
            Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
        }
        else {
            Caption = "Choose your 5th Option"
            document.getElementById('5').value = 'You have selected 5th Option';
        }

        document.getElementById('5').className = "optioninctive";
        document.getElementById('5').disabled = true;
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"

        Caption = "Choose your 6th Option"
        document.getElementById('6').value = 'You have selected 6th Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('6').value = 'ଷଷ୍ଠ ପସନ୍ଦ';
            Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            Caption = "Choose your 6th Option"
            document.getElementById('6').value = 'You have selected 6th Option';
        }

        document.getElementById('6').className = "optioninctive";
        document.getElementById('6').disabled = true;
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"

        Caption = "Choose your 7th Option"
        document.getElementById('7').value = 'You have selected 7th Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('7').value = 'ସପ୍ତମ ପସନ୍ଦ';
            Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            Caption = "Choose your 7th Option"
            document.getElementById('7').value = 'You have selected 7th Option';
        }
        document.getElementById('7').className = "optioninctive";
        document.getElementById('7').disabled = true;
    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"

        Caption = "Choose your 8th Option"
        document.getElementById('8').value = 'You have selected 8th Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('8').value = 'ଅଷ୍ଟମ ପସନ୍ଦ';
            Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            Caption = "Choose your 8th Option"
            document.getElementById('8').value = 'You have selected 8th Option';
        }
        //Caption = "You have added 6 Options"
        document.getElementById('8').className = "optioninctive";
        document.getElementById('8').disabled = true;
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"

        Caption = "Choose your 9th Option"
        document.getElementById('9').value = 'You have selected 9th Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('9').value = 'ନବମ ପସନ୍ଦ';
            Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            Caption = "Choose your 9th Option"
            document.getElementById('9').value = 'You have selected 9th Option';
        }
        //Caption = "You have added 6 Options"
        document.getElementById('9').className = "optioninctive";
        document.getElementById('9').disabled = true;
    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"

        Caption = "Choose your 10th Option"
        document.getElementById('10').value = 'You have selected 10th Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('10').value = 'ଦଶମ ପସନ୍ଦ';
            Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            Caption = "Choose your 10th Option"
            document.getElementById('10').value = 'You have selected 10th Option';
        }
        //Caption = "You have added 6 Options"
        document.getElementById('10').className = "optioninctive";
        document.getElementById('10').disabled = true;
    }
    if (optText == 10) {
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
        if (document.getElementById('rbtnOriya').checked) {
            Caption = "ଆପଣ ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
        }
        else {
            Caption = "You have added 10 Options"
        }
        //Caption = "You have added 6 Options"
    }



    td1.innerHTML = OptionText;
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[2][0] + "<input type='hidden' value=" + optionArray[2][1] + "></input>"
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[3][0] + "</br>" + optionArray[4][0] + "</br>" + optionArray[5][0] + "<input type='hidden' value=" + optionArray[3][1] + "~" + optionArray[4][1] + "~" + optionArray[5][1] + "></input>"
    var td6 = document.createElement("TD")
    td6.innerHTML = optionArray[6][0] + "</br>" + optionArray[7][0] + "</br>" + optionArray[8][0] + "<input type='hidden' value=" + optionArray[6][1] + "~" + optionArray[7][1] + "~" + optionArray[8][1] + "></input>" + "<input type='hidden' value=" + optionArray[9][1] + "></input>"
    var td7 = document.createElement("TD")
    td7.innerHTML = "<a href='javascript:removeEdit(" + optText + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option' /></a>"
    var td8 = document.createElement("TD")
    td8.innerHTML = "<input type='text' size='1' class='input' maxlength='1' value=" + optionArray[10][1] + "></input>"
    for (i = 1; i < 9; i++) {
        row.appendChild(eval("td" + i));        
    }
    tbody.appendChild(row);
    document.getElementById('Caption').innerHTML = Caption;
}
//=======================get Edited options==================
//=======================Get Option Details================
function getEditedOptions() {
    var a = chkReturn();
    if (a == true) {
        var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var options = '';
        var rowsLen = Rows.length
        var tds;
        var collegeIds = '';
        var streams = '';
        var compulsory = '';
        var electiveSub = '';
        var Felective = '';
        var Hostel = '';
        var option;
        optionVal = new Array();
        optChkVal = new Array();
        var counter = 0;
        var m;
        var j;
        var k;
        for (k = 1; k < rowsLen; k++) {
            option = Rows[k].getElementsByTagName("TD")[7].getElementsByTagName("input")[0].value;
            var removeZero;
            if (option.indexOf('0') == 0) {
                if (option == 0) {
                    removeZero = option;
                }
                else {
                    removeZero = option.substring(1, 2);
                }

            }
            else {
                removeZero = option;
            }

            optionVal[k - 1] = option;
            optChkVal[k - 1] = option;
        }
        for (j = 0; j < parseInt(optionVal.length); j++) {
            if (optionVal[j] == '') {
                alert('Please enter option sequence');
                return false;
            }
            if (!NumericValidationOption(optionVal[j], 'Please write only numeric values for option sequence ', '1'))
                return false;
            if ((parseInt(optionVal[j]) <= 0) || (parseInt(optionVal[j]) >= 7)) {
                alert('You have entered wrong option sequence');
                return false;
            }
            if (parseInt(optionVal[j]) > parseInt(optionVal.length)) {
                alert('You have entered wrong option sequence');
                return false;
            }

            if (parseInt(optionVal[j]) != 0) {
                for (m = 0; m < parseInt(optChkVal.length); m++) {
                    if (m != j) {
                        if (optionVal[j] == optChkVal[m]) {
                            counter = parseInt(counter) + 1;
                        }
                    }
                }
                if (parseInt(counter) > 1) {
                    alert('You have entered wrong option sequence');
                    return false;
                }
            }
        }
        //===========================if there is only one option===========
        if (Rows.length < 2) {
            collegeIds = document.getElementById('ddlCollege').value;
            streams = document.getElementById('ddlStream').value;
            compulsory = document.getElementById('ddlCompulsory').value;
            electiveSub = document.getElementById('ddlELE1').value;
            electiveSub = electiveSub + '~' + document.getElementById('ddlELE2').value;
            electiveSub = electiveSub + '~' + document.getElementById('ddlELE3').value;
            Felective = document.getElementById('ddl4thELE1').value;
            Felective = Felective + '~' + document.getElementById('ddl4thELE2').value;
            Felective = Felective + '~' + document.getElementById('ddl4thELE3').value;
            if (document.getElementById('rbtAccomodation1').checked == true) {
                Hostel = 1;
            }
            if (document.getElementById('rbtAccomodation2').checked == true) {
                Hostel = 2;
            }
            options = 1;
            //================RESTRICTING MALE APPLICANT APPLYING FOR FOR WOMENS COLLEGE========
           // womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655',  '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '717', '718', '723', '1465');
            // womenCollegeAry = new Array('3','8','9','13','16','21','22','28','30','33','36','39','41','49','53','57','60','72','113','134','168','245','274','279','280','295','305','306','311','315','322','336','351','358','363','374','375','379','391','397','418','463','470','483','494','498','513','523','526','529','586','602','614','631','636','646','658','660','664','671','683','692','699','716','727','733','768','798','824','828','844','854','879','882','896','897','924','925','941','945','950','978','989','996','1014','1022','1029','1042','1052','1066','1067','1089','1095','1099','1106','1111','1124','1162','1165','1179','1189','1225','1246','1265','1276','1285','1295','1299','1304','1309','1329','1346','1361','1364','1379','1387','1393','1401','1467','1572','1584','1610','1642','1656','1670','1683','1713','1752','1771','1784','1794','1802','1818','1828','1829','1833','1852','1864','1879','1886','1898','1906','1910','1930','1939','1951','1987','1995','2031','2035','2045','2062','2074','2132','2500','2516','2561','2562','2565','2655','2686','2701','2719','2728','2752','2754','2761');

            // womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768',  '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '3280'); --2016
            womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '717', '718', '723', '1465', '2872', '2922', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '2881', '3280', '3304', '3244', '312', '2088', '1011', '1051', '1055', '2686', '1027', '1028', '3315', '3367', '3351', '1289', '3244', '297', '3078', '3107', '3113', '3173', '3014', '3038', '3060', '3144', '3221', '1962');
            //GetWomenCollege();
            //alert("3rd alert");
            var SelCid = document.getElementById('ddlCollege').value;
            var Gender = document.getElementById('ddlGender').value;
            for (var m = 0; m < womenCollegeAry.length; m++) {
                if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[m])) {
                    // alert('You cannot apply for a women college, \n because you are male candidate');
                    alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));      
                    clearDDL();
                    document.getElementById('ddlCollege').focus();
                    return false;
                }
            }
            //==========================================================  
        }
        else {
            for (var i = 1; i < parseInt(rowsLen); i++) {

                //================Store CollegeIds======================
                if (collegeIds == '') {
                    collegeIds = Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value
                }
                else { collegeIds = collegeIds + '~' + Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value }
                //================RESTRICTING MALE APPLICANT APPLYING FOR FOR WOMENS COLLEGE========
                //womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655',  '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '717', '718', '723', '1465');
                // womenCollegeAry = new Array('3','8','9','13','16','21','22','28','30','33','36','39','41','49','53','57','60','72','113','134','168','245','274','279','280','295','305','306','311','315','322','336','351','358','363','374','375','379','391','397','418','463','470','483','494','498','513','523','526','529','586','602','614','631','636','646','658','660','664','671','683','692','699','716','727','733','768','798','824','828','844','854','879','882','896','897','924','925','941','945','950','978','989','996','1014','1022','1029','1042','1052','1066','1067','1089','1095','1099','1106','1111','1124','1162','1165','1179','1189','1225','1246','1265','1276','1285','1295','1299','1304','1309','1329','1346','1361','1364','1379','1387','1393','1401','1467','1572','1584','1610','1642','1656','1670','1683','1713','1752','1771','1784','1794','1802','1818','1828','1829','1833','1852','1864','1879','1886','1898','1906','1910','1930','1939','1951','1987','1995','2031','2035','2045','2062','2074','2132','2500','2516','2561','2562','2565','2655','2686','2701','2719','2728','2752','2754','2761');

                // womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768',  '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '3280'); --2016

                womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '717', '718', '723', '1465', '2872', '2922', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '2881', '3280', '3304', '3244', '312', '2088', '1011', '1051', '1055', '2686', '1027', '1028', '3315', '3367', '3351', '1289', '3244', '297', '3078', '3107', '3113', '3173', '3014', '3038', '3060', '3144', '3221', '1962');
                
                //GetWomenCollege();
                // alert("4th alert");

                var SelCid = Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value;
                var Gender = document.getElementById('ddlGender').value;
                for (var m = 0; m < womenCollegeAry.length; m++) {
                    if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[m])) {
                        //  alert('You cannot apply for a women college, \n because you are male candidate');
                        alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));      
                        clearDDL();
                        document.getElementById('ddlCollege').focus();
                        return false;
                    }
                }
                //=================Stream Ids===========================
                if (streams == '')
                { streams = Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value }
                else
                { streams = streams + '~' + Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value }

                //=====================Compulsory Ids===================
                if (compulsory == '')
                { compulsory = Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value }
                else
                { compulsory = compulsory + '~' + Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value }
                //==========================Elective ids================
                if (electiveSub == '')
                { electiveSub = Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value }
                else
                { electiveSub = electiveSub + '/' + Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value }
                //==============================Fourth Elective ids======
                if (Felective == '')
                { Felective = Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[0].value }
                else
                { Felective = Felective + '/' + Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[0].value }
                //==================Hostel Option=============================
                if (Hostel == '') {
                    Hostel = Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[1].value
                }
                else { Hostel = Hostel + '~' + Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[1].value }
                //========================Store Option sequences========
                if (options == '') {
                    options = Rows[i].getElementsByTagName("TD")[7].getElementsByTagName("input")[0].value
                }
                else { options = options + '~' + Rows[i].getElementsByTagName("TD")[7].getElementsByTagName("input")[0].value }
                //====================================================== 
            }
        }
        if ((Rows.length < 11) && (Rows.length >= 2)) {
            var lastcollegeIds = document.getElementById('ddlCollege').value;
            var laststreams = document.getElementById('ddlStream').value;
            var lastcompulsory = document.getElementById('ddlCompulsory').value;
            var lastelectiveSub = document.getElementById('ddlELE1').value;
            lastelectiveSub = lastelectiveSub + '~' + document.getElementById('ddlELE2').value;
            lastelectiveSub = lastelectiveSub + '~' + document.getElementById('ddlELE3').value;
            var lastFelective = document.getElementById('ddl4thELE1').value;
            lastFelective = lastFelective + '~' + document.getElementById('ddl4thELE2').value;
            lastFelective = lastFelective + '~' + document.getElementById('ddl4thELE3').value;
            var lastReside;

            if (document.getElementById('rbtAccomodation1').checked == true) {
                lastReside = 1
            }
            if (document.getElementById('rbtAccomodation2').checked == true) {
                lastReside = 2
            }
            var lastoptions = Rows.length;
            //================RESTRICTING MALE APPLICANT APPLYING FOR FOR WOMENS COLLEGE========
            //womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '717', '718', '723', '1465');
            //womenCollegeAry = new Array('3','8','9','13','16','21','22','28','30','33','36','39','41','49','53','57','60','72','113','134','168','245','274','279','280','295','305','306','311','315','322','336','351','358','363','374','375','379','391','397','418','463','470','483','494','498','513','523','526','529','586','602','614','631','636','646','658','660','664','671','683','692','699','716','727','733','768','798','824','828','844','854','879','882','896','897','924','925','941','945','950','978','989','996','1014','1022','1029','1042','1052','1066','1067','1089','1095','1099','1106','1111','1124','1162','1165','1179','1189','1225','1246','1265','1276','1285','1295','1299','1304','1309','1329','1346','1361','1364','1379','1387','1393','1401','1467','1572','1584','1610','1642','1656','1670','1683','1713','1752','1771','1784','1794','1802','1818','1828','1829','1833','1852','1864','1879','1886','1898','1906','1910','1930','1939','1951','1987','1995','2031','2035','2045','2062','2074','2132','2500','2516','2561','2562','2565','2655','2686','2701','2719','2728','2752','2754','2761');
            //GetWomenCollege();
            // alert("5th alert");
            // womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768',  '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '3280'); --2016

            womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '717', '718', '723', '1465', '2872', '2922', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '2881', '3280', '3304', '3244', '312', '2088', '1011', '1051', '1055', '2686', '1027', '1028', '3315', '3367', '3351', '1289', '3244', '297', '3078', '3107', '3113', '3173', '3014', '3038', '3060', '3144', '3221', '1962');
           
            var SelCid = document.getElementById('ddlCollege').value;
            var Gender = document.getElementById('ddlGender').value;
            for (var m = 0; m < womenCollegeAry.length; m++) {
                if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[m])) {
                   // alert('You cannot apply for a Women’s college,\nas your Gender shows Male');
                    alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));      
                    clearDDL();
                    document.getElementById('ddlCollege').focus();
                    return false;
                }
            }

            if ((lastcollegeIds != 0) && (laststreams != 0) && (lastcompulsory != 0) && (lastelectiveSub != '') && (lastFelective != '')) {
                collegeIds = collegeIds + '~' + lastcollegeIds;
                streams = streams + '~' + laststreams;
                compulsory = compulsory + '~' + lastcompulsory;
                electiveSub = electiveSub + '/' + lastelectiveSub;
                Felective = Felective + '/' + lastFelective;
                Hostel = Hostel + '~' + lastReside;
                options = options + '~' + lastoptions;
            }
        }
        document.getElementById('hidOptions').value = options;
        document.getElementById('hidCollege').value = collegeIds;
        document.getElementById('hidStream').value = streams;
        document.getElementById('hidComplusory').value = compulsory;
        document.getElementById('hidElectives').value = electiveSub;
        document.getElementById('hidFourthElelectives').value = Felective;
        document.getElementById('hidHostel').value = Hostel;
        //============Counting No of Options==============
        var optLen;
        var msg = '';
        var options;
        if (collegeIds.indexOf('~') > 0) {
            optNo = new Array();
            optNo = collegeIds.split("~");
            optLen = optNo.length + ' options';
            options = optNo.length;
        }
        else {
            optLen = 1 + ' option';
            options = 1;
        }
        if (options == 10) {
            msg = 'You have entered ' + optLen + '.\nClick OK to submit.\nClick Cancel to modify.';
        }
        else {
            msg = 'You have entered ' + optLen + '.\nClick OK to submit.\nClick Cancel to add more options.';
        }
        if (confirm(msg)) {
            return true;
        }
        else {
            return false;
        }
    }
    else
        return false;
}
// ================Reset Function=========
function ResetForm() {
    form1.reset();
    //=============reset options=================
    var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
    var rowsLen = Rows.length;
    if (rowsLen >= 2) {
        for (var k = 1; k <= rowsLen; k++) {
            document.getElementById('tableOption').deleteRow(k);
        }
    }
    if (rowsLen == 1) {
        document.getElementById('tblChoice').style.display = 'none';
    }
    return false;
}
//=====================function==========================
function checkOptionSequence() {
    var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
    var rowsLen = Rows.length;
    var option;
    optionVal = new Array();
    for (var i = 1; i < rowsLen; i++) {
        option = Rows[i].getElementsByTagName("TD")[7].getElementsByTagName("input")[0].value;
        optionVal[i - 1] = option;
    }
    for (var j = 0; j < optionVal.length - 1; j++) {
        if (optionVal[j] <= 0 && optionVal[j] >= 7) {
            alert('You have entered wrong option sl.no');
            return false;
        }
        else if (optionVal[j] > optionVal.length) {
            alert('You have entered wrong option sl.no');
            return false;
        }
    }
}
//===================================Edit CAF Option Details====================
function updateOptionData() {
    optionArray = new Array(8);
    optionArray[0] = new Array();
    optionArray[1] = new Array();
    optionArray[2] = new Array();
    optionArray[3] = new Array();
    optionArray[4] = new Array();
    optionArray[5] = new Array();
    optionArray[6] = new Array();
    optionArray[7] = new Array();
    optionArray[8] = new Array();
    optionArray[9] = new Array();
    var TextLen = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text.length;
    optionArray[0][0] = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text;
    optionArray[0][1] = document.getElementById("ddlCollege").value;
    optionArray[1][0] = document.getElementById("ddlStream").options[document.getElementById("ddlStream").selectedIndex].text;
    optionArray[1][1] = document.getElementById("ddlStream").value;
    optionArray[2][0] = document.getElementById("ddlCompulsory").options[document.getElementById("ddlCompulsory").selectedIndex].text;
    optionArray[2][1] = document.getElementById("ddlCompulsory").value;
    optionArray[3][0] = document.getElementById("ddlELE1").options[document.getElementById("ddlELE1").selectedIndex].text;
    optionArray[3][1] = document.getElementById("ddlELE1").value;
    optionArray[4][0] = document.getElementById("ddlELE2").options[document.getElementById("ddlELE2").selectedIndex].text;
    optionArray[4][1] = document.getElementById("ddlELE2").value;
//    optionArray[5][0] = document.getElementById("ddlELE3").options[document.getElementById("ddlELE3").selectedIndex].text;
//    optionArray[5][1] = document.getElementById("ddlELE3").value;
//    optionArray[6][0] = document.getElementById("ddl4thELE1").options[document.getElementById("ddl4thELE1").selectedIndex].text;
//    optionArray[6][1] = document.getElementById("ddl4thELE1").value;
    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================
    //alert((document.getElementById("ddlELE3").value)

    if (document.getElementById("ddlELE3").value == 0) {
        optionArray[5][0] = '';
        optionArray[5][1] = document.getElementById("ddlELE3").value;
    }
    else {
        optionArray[5][0] = document.getElementById("ddlELE3").options[document.getElementById("ddlELE3").selectedIndex].text;
        optionArray[5][1] = document.getElementById("ddlELE3").value;
    }


    if (document.getElementById("ddl4thELE1").value == 0) {
        optionArray[6][0] = '';
        optionArray[6][1] = document.getElementById("ddl4thELE1").value;
    }
    else {
        optionArray[6][0] = document.getElementById("ddl4thELE1").options[document.getElementById("ddl4thELE1").selectedIndex].text;
        optionArray[6][1] = document.getElementById("ddl4thELE1").value;
    }
   
    if (document.getElementById("ddl4thELE2").value == 0) {
        optionArray[7][0] = '';
        optionArray[7][1] = document.getElementById("ddl4thELE2").value;
    }
    else {
        optionArray[7][0] = document.getElementById("ddl4thELE2").options[document.getElementById("ddl4thELE2").selectedIndex].text;
        optionArray[7][1] = document.getElementById("ddl4thELE2").value;
    }
    if (document.getElementById("ddl4thELE3").value == 0) {
        optionArray[8][0] = '';
        optionArray[8][1] = document.getElementById("ddl4thELE3").value;
    }
    else {
        optionArray[8][0] = document.getElementById("ddl4thELE3").options[document.getElementById("ddl4thELE3").selectedIndex].text;
        optionArray[8][1] = document.getElementById("ddl4thELE3").value;
    }
    //==========================================================================================================
    var Accomodation = 0;
    var AccText
    if (document.getElementById('rbtAccomodation1').checked == true) {
        Accomodation = 1;
        AccText = document.getElementById('rbtAccomodation1').Text;
    }
    if (document.getElementById('rbtAccomodation2').checked == true) {
        Accomodation = 2;
        AccText = document.getElementById('rbtAccomodation2').Text;
    }
    //    if(document.getElementById('rbtAccomodation3').checked==true)
    //     {
    //      	Accomodation=3; 
    //	  	AccText=document.getElementById('rbtAccomodation3').Text; 
    //     }
    optionArray[9][0] = AccText;
    optionArray[9][1] = Accomodation;
}
//=================Adding Option Row=======================
function CreateNewRow() {
    updateOptionData();
    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
    var OptionText;
    var Caption;
    if (optText == 1) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
        //Caption = "Choose your 2nd Option"

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('2').value = 'ଦିତୀୟ ପସନ୍ଦ';
            Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            Caption = "Choose your 2nd Option"
            document.getElementById('2').value = 'You have selected 2nd Option';
        }
        
            //document.getElementById('2').value = 'You have selected 2nd Option';
       
        //document.getElementById('2').value = 'You have selected 2nd Option';
        document.getElementById('2').className = "optioninctive";
        document.getElementById('2').disabled = true;
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
//        Caption = "Choose your 3rd Option"
        //        document.getElementById('3').value = 'You have selected 3rd Option';


        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('3').value = 'ତୃତୀୟ ପସନ୍ଦ';
            Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            Caption = "Choose your 3rd Option"
            document.getElementById('3').value = 'You have selected 3rd Option';
        }

        document.getElementById('3').className = "optioninctive";
        document.getElementById('3').disabled = true;
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"

//        Caption = "Choose your 4th Option"
        //        document.getElementById('4').value = 'You have selected 4th Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('4').value = 'ଚତୁର୍ଥ ପସନ୍ଦ';
            Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
        }
        else {
            Caption = "Choose your 4th Option"
            document.getElementById('4').value = 'You have selected 4th Option';
        }

        document.getElementById('4').className = "optioninctive";
        document.getElementById('4').disabled = true;
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
//        Caption = "Choose your 5th Option"
//        document.getElementById('5').value = 'You have selected 5th Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('5').value = 'ପଞ୍ଚମ ପସନ୍ଦ';
            Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ";
        }
        else {
            Caption = "Choose your 5th Option"
            document.getElementById('5').value = 'You have selected 5th Option';
        }
        document.getElementById('5').className = "optioninctive";
        document.getElementById('5').disabled = true;
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"

//        Caption = "Choose your 6th Option"
        //        document.getElementById('6').value = 'You have selected 6th Option';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('6').value = 'ଷଷ୍ଠ ପସନ୍ଦ';
            Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
        }
        else {
            Caption = "Choose your 6th Option"
            document.getElementById('6').value = 'You have selected 6th Option';
        }

        document.getElementById('6').className = "optioninctive";
        document.getElementById('6').disabled = true;
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
        //Caption = "You have added 6 Options"
        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('7').value = 'ସପ୍ତମ ପସନ୍ଦ';
            Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
        }
        else {
            Caption = "Choose your 7th Option"
            document.getElementById('7').value = 'You have selected 7th Option';
        }
        document.getElementById('7').className = "optioninctive";
        document.getElementById('7').disabled = true;
    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
        //Caption = "You have added 6 Options"
        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('8').value = 'ଅଷ୍ଟମ ପସନ୍ଦ';
            Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
        }
        else {
            Caption = "Choose your 8th Option";
            document.getElementById('8').value = 'You have selected 8th Option';
        }
        document.getElementById('8').className = "optioninctive";
        document.getElementById('8').disabled = true;
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
        //Caption = "You have added 6 Options"
        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('9').value = 'ନବମ ପସନ୍ଦ';
            Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
        }
        else {
            Caption = "Choose your 9th Option";
            document.getElementById('9').value = 'You have selected 9th Option';
        }
        document.getElementById('9').className = "optioninctive";
        document.getElementById('9').disabled = true;
    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
        //Caption = "You have added 6 Options"
        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('9').value = 'ଦଶମ ପସନ୍ଦ';
            Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            Caption = "Choose your 10th Option";
            document.getElementById('10').value = 'You have selected 10th Option';
        }
        document.getElementById('10').className = "optioninctive";
        document.getElementById('10').disabled = true;
    }
    if (optText == 10) {
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
        //Caption = "You have added 6 Options"
        if (document.getElementById('rbtnOriya').checked) {
            Caption = "ଆପଣ ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି ";
        }
        else {
            Caption = "You have added 10 Options";
        }
    }
    td1.innerHTML = OptionText;
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
   
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[2][0] + "<input type='hidden' value=" + optionArray[2][1] + "></input>"
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[3][0] + "</br>" + optionArray[4][0] + "</br>" + optionArray[5][0] + "<input type='hidden' value=" + optionArray[3][1] + "~" + optionArray[4][1] + "~" + optionArray[5][1] + "></input>"
    var td6 = document.createElement("TD")
    td6.innerHTML = optionArray[6][0] + "</br>" + optionArray[7][0] + "</br>" + optionArray[8][0] + "<input type='hidden' value=" + optionArray[6][1] + "~" + optionArray[7][1] + "~" + optionArray[8][1] + "></input>" + "<input type='hidden' value=" + optionArray[9][1] + "></input>"
    var td7 = document.createElement("TD")
    td7.innerHTML = "<a href='javascript:removeEdit(" + optText + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option'/></a>"
    var td8 = document.createElement("TD")
    td8.innerHTML = "<input type='text' class='input' maxlength='1' size='1' value=" + optText + "></input>"
    for (i = 1; i < 9; i++) {
        row.appendChild(eval("td" + i));       
    }
    tbody.appendChild(row);
    document.getElementById('Caption').innerHTML = Caption;
    
    //=====Calling reset row details========
    resetOption();
    clearDDL();
    //======================================
}
//=============Updating Options======================	
function ValidateEditedRow(ctlId) {
    var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
    if ((Rows.length < 2) && (document.getElementById('ddlCollege').value == 0) && (document.getElementById('ddlStream').value == 0) && (document.getElementById('ddlELE1').value == 0) && (document.getElementById('ddlELE2').value == 0) && (document.getElementById('ddlELE3').value == 0) && (document.getElementById('ddl4thELE1').value == 0)) {
        alert('Please Choose your 1st Option');
        return false;
    }
    if (!DropDownValidation('ddlGender', 'your gender'))
        return false;
    if (!DropDownValidation('ddlCollegeDistrict', 'District Name'))
        return false;
    if (!DropDownValidation('ddlCollege', 'College Name'))
        return false;
    //================RESTRICTING MALE APPLICANT APPLYING FOR FOR WOMENS COLLEGE========
   // womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655',  '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '717', '718', '723', '1465');
    // womenCollegeAry =new Array('3','8','9','13','16','21','22','28','30','33','36','39','41','49','53','57','60','72','113','134','168','245','274','279','280','295','305','306','311','315','322','336','351','358','363','374','375','379','391','397','418','463','470','483','494','498','513','523','526','529','586','602','614','631','636','646','658','660','664','671','683','692','699','716','727','733','768','798','824','828','844','854','879','882','896','897','924','925','941','945','950','978','989','996','1014','1022','1029','1042','1052','1066','1067','1089','1095','1099','1106','1111','1124','1162','1165','1179','1189','1225','1246','1265','1276','1285','1295','1299','1304','1309','1329','1346','1361','1364','1379','1387','1393','1401','1467','1572','1584','1610','1642','1656','1670','1683','1713','1752','1771','1784','1794','1802','1818','1828','1829','1833','1852','1864','1879','1886','1898','1906','1910','1930','1939','1951','1987','1995','2031','2035','2045','2062','2074','2132','2500','2516','2561','2562','2565','2655','2686','2701','2719','2728','2752','2754','2761');
    womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '717', '718', '723', '1465', '2872', '2922', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '2881', '3280', '3304', '3244', '312', '2088', '1011', '1051', '1055', '2686', '1027', '1028', '3315', '3367', '3351', '1289', '3244', '297', '3078', '3107', '3113', '3173', '3014', '3038', '3060', '3144', '3221', '1962');


   // GetWomenCollege();
    // alert("6th alert");

   // womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768',  '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '3280'); //2016
    //Q=select int_collegeid from M_college where int_CollegeType=2 and bit_DeletedFlag=0 order by int_CollegeID
       //select int_CollegeID from M_college where int_collegetype=7  and bit_DeletedFlag=0 and vch_CollegeName like'%Women%' //sanskrit
    //select int_CollegeID from M_college where int_collegetype=8  and bit_DeletedFlag=0 and int_CollegeStatus=14 and vch_CollegeName like'%Women%' //Vocational


    var SelCid = document.getElementById('ddlCollege').value;
    var Gender = document.getElementById('ddlGender').value;
    for (var m = 0; m < womenCollegeAry.length; m++) {
        if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[m])) {
            // alert('You cannot apply for a Women’s college,\nas your Gender shows Male');
            alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));      
            clearDDL();
            document.getElementById('ddlCollege').focus();
            return false;
        }
    }
    //==========================================================
    if (!DropDownValidation('ddlStream', 'Stream Name'))
        return false;
    //         if(!DropDownValidation('ddlCompulsory','Compulsory'))
    //           return false;
    if (!DropDownValidation('ddlELE1', 'your elective subject according\n to the preference you want'))
        return false;
    if (!DropDownValidation('ddlELE2', 'your elective subject according\n to the preference you want'))
        return false;
    //=======================Checking Elective values1=============
    if (document.getElementById('ddlELE1').value == document.getElementById('ddlELE2').value) {
        alert('First or second or third elective subject cannot be same');
        document.getElementById('ddlELE2').focus();
        return false;
    }
    //============================================================
    if (!DropDownValidation('ddlELE3', 'your elective subject according\n to the preference you want'))
        return false;
    //=======================Checking Elective values2=============
    if (document.getElementById('ddlELE2').value == document.getElementById('ddlELE3').value) {
        alert('First or second or third elective subject cannot be same');
        document.getElementById('ddlELE3').focus();
        return false;
    }
    if (document.getElementById('ddlELE1').value == document.getElementById('ddlELE3').value) {
        alert('First or second or third elective subject cannot be same');
        document.getElementById('ddlELE3').focus();
        return false;
    }
    //============================================================
    if (!DropDownValidation('ddl4thELE1', 'Please select your fourth elective subject according\n to the preference you want'))
        return false;
    //==============================================================
    var fElectiveval1 = document.getElementById('ddl4thELE1').value;
    var fElectiveval2 = document.getElementById('ddl4thELE2').value;
    var fElectiveval3 = document.getElementById('ddl4thELE3').value;
    var oElectiveval1 = document.getElementById('ddlELE1').value;
    var oElectiveval2 = document.getElementById('ddlELE2').value;
    var oElectiveval3 = document.getElementById('ddlELE3').value;
    //========================Checking fourth elective=============
    if (fElectiveval1 == fElectiveval2) {
        alert('First or second or third preference in\nfourth elective subject cannot be same');
        document.getElementById('ddl4thELE1').focus();
        return false;
    }
    if ((fElectiveval1 == oElectiveval1) || (fElectiveval1 == oElectiveval2) || (fElectiveval1 == oElectiveval3)) {
        alert('Elective preference & fourth elective preference cannot same');
        document.getElementById('ddl4thELE1').focus();
        return false;
    }
    if (fElectiveval2 != 0) {
        if ((fElectiveval2 == oElectiveval1) || (fElectiveval2 == oElectiveval2) || (fElectiveval2 == oElectiveval3)) {
            alert('Elective preference & fourth elective preference cannot same');
            document.getElementById('ddl4thELE2').focus();
            return false;
        }
    }
    if (fElectiveval3 != 0) {
        if ((fElectiveval3 == oElectiveval1) || (fElectiveval3 == oElectiveval2) || (fElectiveval3 == oElectiveval3)) {
            alert('Elective preference & fourth elective preference cannot same');
            document.getElementById('ddl4thELE3').focus();
            return false;
        }
    }
    if ((fElectiveval2 != 0) && (fElectiveval3 != 0)) {
        if (fElectiveval2 == fElectiveval3) {
            alert('First or second or third preference in\nfourth elective subject cannot be same');
            document.getElementById('ddl4thELE2').focus();
            return false;
        }
        if (fElectiveval1 == fElectiveval3) {
            alert('First or second or third preference in\nfourth elective subject cannot be same');
            document.getElementById('ddl4thELE3').focus();
            return false;
        }
    }
    if ((fElectiveval2 == 0) && (fElectiveval3 != 0)) {
        alert('Fourth elective second choice cannot be left blank');
        document.getElementById('ddl4thELE2').focus();
        return false;
    }
    //============================================================
    if ((document.getElementById('rbtAccomodation1').checked == false) && (document.getElementById('rbtAccomodation2').checked == false)) {
        alert('Please select hostel option');
        return false;
    }


    var totRow = document.getElementById('tableOption').getElementsByTagName("TR").length
    var tRow = document.getElementById('tableOption').getElementsByTagName("TR");
    //===================Variables=======================
    var addedCollege;
    var addedStream;
    var cuurntCid = parseInt(document.getElementById('ddlCollege').value);
    var cuurntSid = parseInt(document.getElementById('ddlStream').value);
    collAry = new Array();
    strAry = new Array();
    var colCntr = 0;
    var stCntr = 0;
    //=========================================================
    if (totRow < 11) {
        //============Calling Add row Function============
        //================Here checking for duplicate option entry=======
        if (totRow > 1) {
            for (var i = 1; i < totRow; i++) {
                addedCollege = parseInt(tRow[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value);
                addedStream = parseInt(tRow[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value);
                if ((addedCollege == cuurntCid) && (addedStream == cuurntSid)) {
                    colCntr = parseInt(colCntr) + 1;
                }
            }
            if (parseInt(colCntr) > 0) //&& (parseInt(stCntr) > 0))
            {
                alert('You cannot add more than 1 option in same college & stream');
                clearDDL();
            }
            else {
                var optLen = document.getElementById('tableOption').getElementsByTagName("TR").length;
                var id = ctlId - 1;
                var k;
                var j;
                if (optLen != id) {
                    var Caption;
                    if (optLen == 1) {
                        k = '2nd';
                    }
                    else if (optLen == 2) {
                        k = '3rd';
                    }
                    else if (optLen >= 3) {
                        k = optLen + 'th';
                    }
                    if (ctlId == 1) {
                        j = '1st';
                    }
                    else if (ctlId == 2) {
                        j = '2nd';
                    }
                    else if (ctlId == 3) {
                        j = '3rd';
                    }
                    else if (ctlId > 3) {
                        j = ctlId + 'th';
                    }

                    Caption = "Please enter your " + k + " options before the " + j + " options"
                    alert(Caption);
                }
                else {
                    CreateNewRow();
                }
            }
        }
        else {
            var optLen = document.getElementById('tableOption').getElementsByTagName("TR").length;
            var id = ctlId - 1;
            var k;
            var j;
            if (optLen != id) {
                var Caption;
                if (optLen == 1) {
                    k = '2nd';
                }
                else if (optLen == 2) {
                    k = '3rd';
                }
                else if (optLen > 3) {
                    k = optLen + 'th';
                }
                if (ctlId == 1) {
                    j = '1st';
                }
                else if (ctlId == 2) {
                    j = '2nd';
                }
                else if (ctlId == 3) {
                    j = '3rd';
                }
                else if (ctlId > 3) {
                    j = ctlId + 'th';
                }

                Caption = "Please enter your " + k + " options before the " + j + " options"
                alert(Caption);
            }
            else {
                CreateNewRow();
            }
        }
        //===============================================================
    }
    else {
        alert("You have already added Ten options");
        clearDDL();
    }

}

//============Function to set Elective Subjects when stream is Science===========
function setEle(ele1, ele2, ele3, comp) {
    document.getElementById("ddlCompulsory").value = comp;
    document.getElementById('ddlELE1').value = ele1;
    document.getElementById('ddlELE2').value = ele2;
    document.getElementById('ddlELE3').value = ele3;

}
function setElective12() {
    var streamID = document.getElementById("ddlStream").value;
   
    if (streamID == 2)//for Science==================
    {
        setTimeout('setEle("13","14","0","47")', 1000);
        document.getElementById('ddlELE1').style.display = "none";
        document.getElementById('ddlELE2').style.display = "none";
        document.getElementById('ddlELE3').style.display = "";
        document.getElementById('sp1').style.display = "";
        document.getElementById('sp2').style.display = "";
        document.getElementById('sp3').style.display = "none";
        document.getElementById('sp1').innerHTML = "PHYSICS";
        document.getElementById('sp2').innerHTML = "CHEMISTRY";

        for (var i = 0; i < document.getElementById('ddlELE3').length; i++) {
            if ((document.getElementById('ddlELE3').options[i].value == '13') || (document.getElementById('ddlELE3').options[i].value == '14')) {
                document.getElementById('ddlELE3').options[i] = null;
                // document.getElementById('ddl4thELE1').options[i]=null;
                //                    document.getElementById('ddl4thELE2').options[i]=null;
                //                    document.getElementById('ddl4thELE3').options[i]=null;
            }
        }
    }
    else if (streamID == 3) {
        setTimeout('setEle("1","2","3","48")', 1000);
        document.getElementById('ddlELE1').style.display = "none";
        document.getElementById('ddlELE2').style.display = "none";
        document.getElementById('ddlELE3').style.display = "none";
        document.getElementById('sp1').style.display = "";
        document.getElementById('sp2').style.display = "";
        document.getElementById('sp3').style.display = "";
        document.getElementById('sp1').innerHTML = "ACCOUNTANCY";
        document.getElementById('sp2').innerHTML = "BUSINESS MATHEMATICS AND STATISTICS";
        document.getElementById('sp3').innerHTML = "BUSINESS STUDIES AND MANAGEMENT";
        for (var i = 0; i < document.getElementById('ddl4thELE1').length; i++) {
            if ((document.getElementById('ddl4thELE1').options[i].value == '1') || (document.getElementById('ddl4thELE1').options[i].value == '2') || (document.getElementById('ddl4thELE1').options[i].value == '3')) {
                document.getElementById('ddl4thELE1').options[i] = null;
                document.getElementById('ddl4thELE2').options[i] = null;
                document.getElementById('ddl4thELE3').options[i] = null;
            }
        }
    }
    else if (streamID == 1) {
        setTimeout('setEle("0","0","0","46")', 1000);
        document.getElementById('ddlELE1').value = 0;
        document.getElementById('ddlELE2').value = 0;
        document.getElementById('ddlELE3').value = 0;
        document.getElementById('ddlELE1').style.display = "";
        document.getElementById('ddlELE2').style.display = "";
        document.getElementById('ddlELE3').style.display = "";
        document.getElementById('sp1').style.display = "none";
        document.getElementById('sp2').style.display = "none";
        document.getElementById('sp3').style.display = "none";
    }
    else if (streamID == 0) {
        setTimeout('setEle("0","0","0","0")', 1000);
        document.getElementById('ddlELE1').value = 0;
        document.getElementById('ddlELE2').value = 0;
        document.getElementById('ddlELE3').value = 0;
     
        document.getElementById('ddlELE1').style.display = "";
        document.getElementById('ddlELE2').style.display = "";
        document.getElementById('ddlELE3').style.display = "";
        document.getElementById('sp1').style.display = "none";
        document.getElementById('sp2').style.display = "none";
        document.getElementById('sp3').style.display = "none";
    }
   // else if ((document.getElementById('rbtVocational').checked) && (streamID == 7 || streamID == 9 || streamID == 12 || streamID == 13 || streamID == 15 || streamID == 16 || streamID == 17 || streamID == 18 || streamID == 4 ||
//            streamID == 5 || streamID == 6 || streamID == 7 || streamID == 8 ||  streamID == 10 || streamID == 11 ||  streamID == 14 ||  streamID == 19 || streamID == 20 || streamID == 21 || streamID == 22 || streamID == 23))
//    {        
//            setTimeout('setEle("0","0","0","202")', 1000);
//        }
        else if ((document.getElementById('rbtSanskrit').checked) && (streamID == 24)) {
            setTimeout('setEle("0","0","0","215")', 1000);
        }
        else if((document.getElementById('rbtVocational').checked) && (streamID == 4)) {
            setTimeout('setEle("0","0","0","219")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 5)) {
            setTimeout('setEle("0","0","0","220")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 6)) {
            setTimeout('setEle("0","0","0","221")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 7)) {
            setTimeout('setEle("0","0","0","222")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 8)) {
            setTimeout('setEle("0","0","0","223")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 9)) {
            setTimeout('setEle("0","0","0","224")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 10)) {
            setTimeout('setEle("0","0","0","225")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 11)) {
            setTimeout('setEle("0","0","0","226")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 12)) {
            setTimeout('setEle("0","0","0","227")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 13)) {
            setTimeout('setEle("0","0","0","228")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 14)) {
            setTimeout('setEle("0","0","0","229")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 15)) {
            setTimeout('setEle("0","0","0","230")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 16)) {
            setTimeout('setEle("0","0","0","202")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 17)) {
            setTimeout('setEle("0","0","0","231")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 18)) {
            setTimeout('setEle("0","0","0","232")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 19)) {
            setTimeout('setEle("0","0","0","233")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 20)) {
            setTimeout('setEle("0","0","0","234")', 1000);

        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 21)) {
            setTimeout('setEle("0","0","0","235")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 22)) {
            setTimeout('setEle("0","0","0","236")', 1000);
        }
        else if ((document.getElementById('rbtVocational').checked) && (streamID == 23)) {
            setTimeout('setEle("0","0","0","237")', 1000);
        }
}
//========================function to check Mark details=============
function BoardMarkCheck() {
    var Eng = parseInt(document.getElementById('txtEnglish').value);
    var Math = parseInt(document.getElementById('txtMath').value);
    var Sci = parseInt(document.getElementById('txtScience').value);
    var SoSci = parseInt(document.getElementById('txtSocSci').value);
    var Tot = parseInt(document.getElementById('txtTotMark').value);
    var Max = parseInt(document.getElementById('txtMaxMark').value);
    var inTotal = parseInt(Eng + Math + Sci + SoSci);
    //    if (Eng == 0) {
    //        alert('English Mark cannot be 0(zero)');
    //        document.getElementById('txtEnglish').focus();
    //        return false;
    //    }
    if (Eng >= Tot) {
        alert('English Mark cannot be greater than or equal to Total Mark');
        document.getElementById('txtEnglish').focus();
        return false;
    }
    if (Eng >= Max) {
        alert('English Mark cannot be greater than or equal to Maximum Mark');
        document.getElementById('txtEnglish').focus();
        return false;
    }
    //    if (Math == 0) {
    //        alert('Mathematics Mark cannot be 0(zero)');
    //        document.getElementById('txtMath').focus();
    //        return false;
    //    }
    if (Math >= Tot) {
        alert('Mathematics Mark cannot be greater than or equal to Total Mark');
        document.getElementById('txtMath').focus();
        return false;
    }
    if (Math >= Max) {
        alert('Mathematics Mark cannot be greater than or equal to Maximum Mark');
        document.getElementById('txtMath').focus();
        return false;
    }
    //    if (Sci == 0) {
    //        alert('Science Mark cannot be 0(zero)');
    //        document.getElementById('txtScience').focus();
    //        return false;
    //    }
    if (Sci >= Tot) {
        alert('Science Mark cannot be greater than or equal to Total Mark');
        document.getElementById('txtScience').focus();
        return false;
    }
    if (Sci >= Max) {
        alert('Science Mark cannot be greater than or equal to Maximum Mark');
        document.getElementById('txtScience').focus();
        return false;
    }
    //    if (SoSci == 0) {
    //        alert('Social Science Mark cannot be 0(zero)');
    //        document.getElementById('txtSocSci').focus();
    //        return false;
    //    }
    if (SoSci >= Tot) {
        alert('Social Science Mark cannot be greater than or equal to Total Mark');
        document.getElementById('txtSocSci').focus();
        return false;
    }
    if (SoSci >= Max) {
        alert('Social Science Mark cannot be greater than or equal to Maximum Mark');
        document.getElementById('txtSocSci').focus();
        return false;
    }
    if (Tot == 0) {
        alert('Total Mark cannot be 0(zero)');
        document.getElementById('txtTotMark').focus();
        return false;
    }
    if (inTotal > Tot) {
        alert('The sum of your individual marks cannot be greater than the Total Mark Secured');
        document.getElementById('txtTotMark').focus();
        return false;
    }
    if (Max == 0) {
        alert('Maximum Mark cannot be 0(zero)');
        document.getElementById('txtMaxMark').focus();
        return false;
    }

    if (Tot > Max) {
        alert('Total Mark cannot be greater than Maximum Mark');
        document.getElementById('txtTotMark').focus();
        return false;
    }
}

//==================================DOB Validation==================
function isValidDate(year, month, day) {

    if (month == 2) {
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
            if (day > 29) {
                return false;
            }
        }
        else if (day > 28) {
            return false;
        }
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day > 30) {
            return false;
        }
    }

    return true;
}

function checkDOB() {
    if (!DropDownValidation('ddlDay', 'the Day of your date of birth')) {
        return false;
    }
    if (!DropDownValidation('ddlMonth', 'the Month of your date of birth')) {
        return false;
    }
    if (!DropDownValidation('ddlYear', 'the Year of your date of birth')) {
        return false;
    }
    var selDate = document.getElementById('ddlDay').value;
    var selMonth = document.getElementById('ddlMonth').value;
    var selYear = document.getElementById('ddlYear').value;
    if ((selDate > 0) && (selMonth > 0) && (selYear > 0)) {
        if (!(isValidDate(selYear, selMonth, selDate))) {
            //alert("Selected Date ( "+selDate+"-"+monthName(selMonth,true)+"-"+selYear+" ) is Invalid");
            alert('Please enter valid Date Of Birth !');
            document.getElementById('ddlDay').focus();
            return false;
        }
    }

}

//======================Year of passing validation=============
function checkPassingYear() {
    //    if (!NumericValidation('txtYOP','Year of Passing',4))
    //    {
    //        document.getElementById('txtYOP').value='';
    //        return false;
    //    }    
    //var d = new Date();
    var curr_year = parseInt(2017);
    var year = parseInt($('#ddlYOP').val());
    var strYear = $('#ddlYOP').val();
    if (strYear != '') {
        if (year > curr_year) {
            alert('Please enter your year of passing  between 1985 - 2017');
            //document.getElementById('txtYOP').value = '';
            $('#ddlYOP').val(0);
            $('#ddlYOP').focus();
           // document.getElementById('txtYOP').focus();
            return false;
        }
        else if (year < parseInt(curr_year) - 32) {
       
            alert('Please enter your year of passing  between 1985 - 2017');
//            document.getElementById('txtYOP').value = '';
//            document.getElementById('txtYOP').focus();
            return false;
        }
        else if (strYear.length < 4) {
            alert('Please enter your year of passing  between 1985 - 2017');
//            document.getElementById('txtYOP').value = '';
//            document.getElementById('txtYOP').focus();
            return false;
        }
    }
    else {
        alert('Year of passing cannot be left blank');
//        document.getElementById('txtYOP').value = '';
//        document.getElementById('txtYOP').focus();
        return false;
    }
    return true;
}
//================Special Character Validation===========
function CheckSpeCharacter(Object, msg) {
    var Arr = new Array();
    var k;
    Arr = Object.split(',');

    for (k = 0; k < Arr.length; k++) {
        var str1 = document.getElementById(Arr[k]).value;

        for (var i = 0; i < str1.length; i++) {

            var ch = str1.substring(i, i + 1);
            if ((ch == "`") || (ch == "'") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "-") || (ch == "+") || (ch == "/") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == ",") || (ch == ".") || (ch == '=') || (ch == '"') || (ch == '-')) {
                alert(msg);
                document.getElementById(Arr[k]).value = '';
                document.getElementById(Arr[k]).focus();
                return false;
            }
        }
    }
    return true;
}
//=================function numeric validation===========
function checkNumber(ctl, msg, len) {
    if (!NumericValidation(ctl, msg, len)) {
        document.getElementById(ctl).value = '';
        return false;
    }
}
//============To restrict from selection of both OSA & OLNS===================
function ValidateOSAOLNS(chkOSA, chkOLNSY, chkOLNSN, strMSG) {
    if ((document.getElementById(chkOSA).checked == true) && (document.getElementById(chkOLNSY).checked == true)) {
        alert(strMSG);
        document.getElementById(chkOLNSY).checked = false;
        document.getElementById(chkOLNSN).checked = true;
        document.getElementById('sub3').style.display = "none";
        document.getElementById('ddlOLNSState').selectedIndex = 0;
    }
}
function ValidateOLNS(chkOSAY, chkOSAN, chkOLNSY, strMSG) {
    if ((document.getElementById(chkOSAY).checked == true) && (document.getElementById(chkOLNSY).checked == true)) {
        alert(strMSG);        
        document.getElementById(chkOSAY).checked = false;
        document.getElementById(chkOSAN).checked = true;
        document.getElementById('sub2').style.display = "none";
        document.getElementById('ddlOSAState').selectedIndex = 0;        
    }
}
//===============Email validation==================  
function checkEmail(ctl) {
    if (!EmailValidation(ctl)) {
        document.getElementById(ctl).value = '';
        return false;
    }
}
//=======================Function to highlight the Weightage & reservation details============
function highLight(ctlchk, ctlspan, msg) {
    if (document.getElementById(ctlchk).checked == true) {
        document.getElementById(ctlspan).style.color = "#CC33FF"; ////"#0054EC";
        if (ctlchk == 'chkPHOH') {
            var text = msg;
        }
        else {
            var text = '<B>' + msg + '</B>';
        }
        document.getElementById(ctlspan).innerHTML = text;
        EnglishOriyaFont();
    }
    else {
        document.getElementById(ctlspan).style.color = "#000000";
        document.getElementById(ctlspan).innerHTML = msg;
        EnglishOriyaFont();
    }
}
//===================Function to highlight Reservation Category1==========
function highlightCat1() {
    if (document.getElementById('rbtST').checked == true) {
        document.getElementById('ST').style.color = "#CC33FF";
        var text = 'Schedule Tribe (ST)';
        document.getElementById('ST').innerHTML = text;
        document.getElementById('SC').style.color = "#000000";
        document.getElementById('SC').innerHTML = 'Schedule Caste (SC)';
        document.getElementById('OTHER').style.color = "#000000";
        document.getElementById('OTHER').innerHTML = 'Socially and Educationally Backward Classes (SEBC)';
        document.getElementById('OBC').style.color = "#000000";
        document.getElementById('OBC').innerHTML = 'Other Backward Class (OBC)';
        document.getElementById('GENERAL').style.color = "#000000";
        document.getElementById('GENERAL').innerHTML = 'General';
        EnglishOriyaFont();
    }
    else if (document.getElementById('rbtSC').checked == true) {
        document.getElementById('SC').style.color = "#CC33FF";
        var text = 'Schedule Caste (SC)';
        document.getElementById('SC').innerHTML = text;
        document.getElementById('ST').style.color = "#000000";
        document.getElementById('ST').innerHTML = 'Schedule Tribe (ST)';
        document.getElementById('OTHER').style.color = "#000000";
        document.getElementById('OTHER').innerHTML = 'Socially and Educationally Backward Classes (SEBC)'
        document.getElementById('OBC').style.color = "#000000";
        document.getElementById('OBC').innerHTML = 'Other Backward Class (OBC)';
        document.getElementById('GENERAL').style.color = "#000000";
        document.getElementById('GENERAL').innerHTML = 'General';
        EnglishOriyaFont();
    }
    else if (document.getElementById('rbtOther').checked == true) {
        document.getElementById('OTHER').style.color = "#CC33FF";
        var text = 'Socially and Educationally Backward Classes (SEBC)';
        document.getElementById('OTHER').innerHTML = text;
        document.getElementById('ST').style.color = "#000000";
        document.getElementById('ST').innerHTML = 'Schedule Tribe (ST)';
        document.getElementById('SC').style.color = "#000000";
        document.getElementById('SC').innerHTML = 'Schedule Caste (SC)';
        document.getElementById('OBC').style.color = "#000000";
        document.getElementById('OBC').innerHTML = 'Other Backward Class (OBC)';
        document.getElementById('GENERAL').style.color = "#000000";
        document.getElementById('GENERAL').innerHTML = 'General';
        EnglishOriyaFont();
    }
    else if (document.getElementById('rbtnOBC').checked == true) {

        document.getElementById('OBC').style.color = "#CC33FF";
        var text = 'Other Backward Class (OBC)';
        document.getElementById('OBC').innerHTML = text;
        document.getElementById('ST').style.color = "#000000";
        document.getElementById('ST').innerHTML = 'Schedule Tribe (ST)';
        document.getElementById('SC').style.color = "#000000";
        document.getElementById('SC').innerHTML = 'Schedule Caste (SC)';
        document.getElementById('OTHER').style.color = "#000000";
        document.getElementById('OTHER').innerHTML = 'Socially and Educationally Backward Classes (SEBC)';
        document.getElementById('GENERAL').style.color = "#000000";
        document.getElementById('GENERAL').innerHTML = 'General';
        EnglishOriyaFont();
    }
    else if (document.getElementById('rbtGeneral').checked == true) {

        document.getElementById('GENERAL').style.color = "#CC33FF";
        var text = 'General';
        document.getElementById('GENERAL').innerHTML = text;
        document.getElementById('ST').style.color = "#000000";
        document.getElementById('ST').innerHTML = 'Schedule Tribe (ST)';
        document.getElementById('SC').style.color = "#000000";
        document.getElementById('SC').innerHTML = 'Schedule Caste (SC)';
        document.getElementById('OTHER').style.color = "#000000";
        document.getElementById('OTHER').innerHTML = 'Socially and Educationally Backward Classes (SEBC)';
        document.getElementById('OBC').style.color = "#000000";
        document.getElementById('OBC').innerHTML = 'Other Backward Class (OBC)';
        EnglishOriyaFont();
    }
}
//===============Function to highlight Reservation category2================
function highlightCat2() {
    if (document.getElementById('rbtESM').checked == true) {
        document.getElementById('ESM').style.color = "#CC33FF";
        var text = 'Ex-Service Man (ESM)';
        document.getElementById('ESM').innerHTML = text;
        document.getElementById('SDP').style.color = "#000000";
        document.getElementById('SDP').innerHTML = 'Serving Defence Personnel (SDP)';
        document.getElementById('CoM').style.color = "#000000";
        document.getElementById('CoM').innerHTML = 'Children of Martyrs (CoM)'
        document.getElementById('NoN').style.color = "#000000";
        document.getElementById('NoN').innerHTML = 'None';
        EnglishOriyaFont();
    }
    else if (document.getElementById('rbtSDP').checked == true) {
        document.getElementById('SDP').style.color = "#CC33FF";
        var text = 'Serving Defence Personnel (SDP)';
        document.getElementById('SDP').innerHTML = text;
        document.getElementById('ESM').style.color = "#000000";
        document.getElementById('ESM').innerHTML = 'Ex-Service Man (ESM)';
        document.getElementById('CoM').style.color = "#000000";
        document.getElementById('CoM').innerHTML = 'Children of Martyrs (CoM)'
        document.getElementById('NoN').style.color = "#000000";
        document.getElementById('NoN').innerHTML = 'None';
        EnglishOriyaFont();
    }
    else if (document.getElementById('rbtCoM').checked == true) {
        document.getElementById('CoM').style.color = "#CC33FF";
        var text = 'Children of Martyrs (CoM)';
        document.getElementById('CoM').innerHTML = text;
        document.getElementById('ESM').style.color = "#000000";
        document.getElementById('ESM').innerHTML = 'Ex-Service Man (ESM)';
        document.getElementById('SDP').style.color = "#000000";
        document.getElementById('SDP').innerHTML = 'Serving Defence Personnel (SDP)'
        document.getElementById('NoN').style.color = "#000000";
        document.getElementById('NoN').innerHTML = 'None';
        EnglishOriyaFont();
    }
    else if (document.getElementById('rbtNon').checked == true) {
        document.getElementById('NoN').style.color = "#CC33FF";
        var text = 'None';
        document.getElementById('NoN').innerHTML = text;
        document.getElementById('ESM').style.color = "#000000";
        document.getElementById('ESM').innerHTML = 'Ex-Service Man (ESM)';
        document.getElementById('SDP').style.color = "#000000";
        document.getElementById('SDP').innerHTML = 'Serving Defence Personnel (SDP)'
        document.getElementById('CoM').style.color = "#000000";
        document.getElementById('CoM').innerHTML = 'Children of Martyrs (CoM)';
        EnglishOriyaFont();
    }
}
//=======================highlight osa ==========================
function highlightOSA() {
    
    if (document.getElementById('rbtOSAY').checked == true) {
        valu = 'N';
        document.getElementById('OSAY').style.color = "#CC33FF";
        EnglishOriyaFont();
//        var text = 'Yes';
//        document.getElementById('OSAY').innerHTML = text;
        document.getElementById('OSAN').style.color = "#000000";
        //document.getElementById('OSAN').innerHTML = 'No';

        document.getElementById('rbtST').disabled = true;
        document.getElementById('rbtSC').disabled = true;
        document.getElementById('rbtnOBC').disabled = true;
        document.getElementById('rbtGeneral').checked = true;
        document.getElementById('rbtOther').disabled = true;
        document.getElementById('GENERAL').style.color = "#CC33FF";

        document.getElementById('ST').style.color = "#000000";
        document.getElementById('SC').style.color = "#000000";
        document.getElementById('OBC').style.color = "#000000";
        document.getElementById('OTHER').style.color = "#000000";
    }

    if ((document.getElementById('rbtOSAN').checked == true) &&   valu == 'N') {
        valu = 'Y';
        document.getElementById('OSAN').style.color = "#CC33FF";
        EnglishOriyaFont();
//        var text = 'No';
//        document.getElementById('OSAN').innerHTML = text;
        document.getElementById('OSAY').style.color = "#000000";
        //document.getElementById('OSAY').innerHTML = 'Yes';

        document.getElementById('rbtST').disabled = false;
        document.getElementById('rbtSC').disabled = false;
        document.getElementById('rbtnOBC').disabled = false;
        document.getElementById('rbtGeneral').checked = false;
        document.getElementById('rbtOther').checked = true;
        document.getElementById('rbtOther').disabled = false;

        document.getElementById('OTHER').style.color = "#CC33FF";
        document.getElementById('GENERAL').style.color = "#000000";


    }

    if (document.getElementById('rbtOLNSY').checked == true) {
        document.getElementById('OLNSY').style.color = "#CC33FF";
        var text = 'Yes';
        document.getElementById('OLNSY').innerHTML = text;
        document.getElementById('OLNSN').style.color = "#000000";
        //document.getElementById('OLNSN').innerHTML = 'No';
        EnglishOriyaFont();
    }
    if (document.getElementById('rbtOLNSN').checked == true) {
        document.getElementById('OLNSN').style.color = "#CC33FF";
        var text = 'No';
        document.getElementById('OLNSN').innerHTML = text;
        document.getElementById('OLNSY').style.color = "#000000";
        //document.getElementById('OLNSY').innerHTML = 'Yes';
        EnglishOriyaFont();
    }
    if (document.getElementById('rbtCompartmentalY').checked == true) {
        document.getElementById('CompY').style.color = "#CC33FF";
        var text = 'Yes';
        document.getElementById('CompY').innerHTML = text;
        document.getElementById('CompN').style.color = "#000000";
        document.getElementById('CompN').innerHTML = 'No';
        EnglishOriyaFont();
    }
    if (document.getElementById('rbtCompartmentalN').checked == true) {
        document.getElementById('CompN').style.color = "#CC33FF";
        var text = 'No';
        document.getElementById('CompN').innerHTML = text;
        document.getElementById('CompY').style.color = "#000000";
        document.getElementById('CompY').innerHTML = 'Yes';
        EnglishOriyaFont();
    }
}
//======================function to highlight hostel option============
function highlightHostel() {
    if (document.getElementById('rbtAccomodation1').checked == true) {
        document.getElementById('Opt1').style.color = "#CC33FF";
        //var text = 'Yes';

        if (document.getElementById('rbtnOriya').checked) {            
            document.getElementById('Opt1').innerHTML = 'ହଁ';
            document.getElementById('Opt2').innerHTML = 'ନା';
        }
        else {
            document.getElementById('Opt1').innerHTML = 'Yes';
            document.getElementById('Opt2').innerHTML = 'No';            
        }
       // document.getElementById('Opt1').innerHTML = text;
        document.getElementById('Opt2').style.color = "#000000";
        //document.getElementById('Opt2').innerHTML = 'No';
    }
    if (document.getElementById('rbtAccomodation2').checked == true) {
        document.getElementById('Opt2').style.color = "#CC33FF";
        var text = 'No';

        if (document.getElementById('rbtnOriya').checked) {
           // var text = 'ନା';
            document.getElementById('Opt1').innerHTML = 'ହଁ';
            document.getElementById('Opt2').innerHTML = 'ନା';
        }
        else {
            document.getElementById('Opt1').innerHTML = 'Yes';
            document.getElementById('Opt2').innerHTML = 'No'; 
        }
        //document.getElementById('Opt2').innerHTML = text;
        document.getElementById('Opt1').style.color = "#000000";
        //document.getElementById('Opt1').innerHTML = 'Yes';
    }
}
//======================function to highlight College Type============
function highlightCollegeType() {
    if (document.getElementById('rbtSelfFinance').checked == true) {
        document.getElementById('SF').style.color = "#CC33FF";
        document.getElementById('SF').innerHTML = 'Self Financing';
        document.getElementById('OF').style.color = "#000000";
        document.getElementById('OF').innerHTML = 'Govt. / Aided / Private';
        document.getElementById('VF').style.color = "#000000";
        document.getElementById('VF').innerHTML = 'Vocational';
        document.getElementById('S').style.color = "#000000";
        document.getElementById('VF').innerHTML = 'Sanskrit';
        clearDDL();
        EnglishOriyaFont();
    }
    if (document.getElementById('rbtVocational').checked == true) {

        document.getElementById('VF').style.color = "#CC33FF";
        document.getElementById('VF').innerHTML = 'Vocational';
        document.getElementById('OF').style.color = "#000000";
        document.getElementById('OF').innerHTML = 'Govt. / Aided / Private';
        document.getElementById('SF').style.color = "#000000";
        document.getElementById('SF').innerHTML = 'Self Financing';
        document.getElementById('S').style.color = "#000000";
        document.getElementById('VF').innerHTML = 'Sanskrit';
        clearDDL();
        EnglishOriyaFont();
    }
    if (document.getElementById('rbtOthersFinance').checked == true) {
        document.getElementById('OF').style.color = "#CC33FF";
        document.getElementById('OF').innerHTML = 'Govt. / Aided / Private';
        document.getElementById('SF').style.color = "#000000";
        document.getElementById('SF').innerHTML = 'Self Financing';
        document.getElementById('VF').style.color = "#000000";
        document.getElementById('VF').innerHTML = 'Vocational';
        document.getElementById('S').style.color = "#000000";
        document.getElementById('VF').innerHTML = 'Sanskrit';
        clearDDL();
        EnglishOriyaFont();
    }
    if (document.getElementById('rbtSanskrit').checked == true) {

        document.getElementById('S').style.color = "#CC33FF";
        document.getElementById('VF').innerHTML = 'Sanskrit';
        document.getElementById('OF').style.color = "#000000";
        document.getElementById('OF').innerHTML = 'Govt. / Aided / Private';
        document.getElementById('SF').style.color = "#000000";
        document.getElementById('SF').innerHTML = 'Self Financing';
        document.getElementById('VF').style.color = "#000000";
        document.getElementById('VF').innerHTML = 'Vocational';
        clearDDL();
        EnglishOriyaFont();
    }
}
//===========Function to Show tool tip of dropdownlist=================
function toltip(me) {
    // var control=document.getElementById(me);
    // me.title=document.getElementById(me).options[document.getElementById(me).selectedIndex].text;
    //for (var i = 0; i < control.Items.Count; i++)
    //{
    //alert(i);
    // control.Items[i].Attributes.Add("title", control.Items[i].Text);
    //}

}
//===================Function for Dropdownvalidation=========
function DropDownValidation(ctlName, msg) {
    var val = document.getElementById(ctlName).value;
    if (val == 0) {
        alert('Please select ' + msg);
        document.getElementById(ctlName).focus();
        return false;
    }
    else {
        return true;
    }
}
//=============Function For Blank field========================
function blankFieldValidation(ctlName, msg) {

    var val = document.getElementById(ctlName).value;
    if (val == '') {
        alert(msg + ' cannot be left blank');
        document.getElementById(ctlName).focus();
        return false;
    }
    else {
        return true;
    }
}
//================function for numeric validation===================
function NumericValidation(ctlName, msg, length) {
    var strInput = document.getElementById(ctlName).value;
    var Object = document.getElementById(ctlName);
    if (strInput.length > 0) {
        if (strInput.length > length) {
            alert("Maximum length of the field should be " + length + " characters long")
            Object.focus()
            return false;
        }

        for (i = 0; i < strInput.length; i++) {
            if (strInput.charAt(i) < '0' || strInput.charAt(i) > '9') {
                alert(msg)
                document.getElementById(ctlName).value = '';
                Object.focus()
                return false;
            }
        }
    }
    return true;
}
//=======================function for SingleQuote=============
function chkSingleQuote(ctlName) {
    var str1 = document.getElementById(ctlName).value;
    var Object = document.getElementById(ctlName);
    for (var i = 0; i < str1.length; i++) {
        var ch = str1.substring(i, i + 1);
        if (ch == "'") {
            alert('Single quote not allowed');
            document.getElementById(ctlName).value = '';
            Object.focus();
            return false;
        }
    }
    return true;
}
//====================function for Email validation================
function EmailValidation(ctlName) {

    var strInput = document.getElementById(ctlName).value;
    var Object = document.getElementById(ctlName);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = strInput;
    if (strInput != '') {
        if (reg.test(address) == false) {
            alert('Please write a valid e-Mail ID');
            //document.getElementById(ctlName).value='';
            document.getElementById(ctlName).focus();
            return false;
        }
    }
    return true;

}
//===========================function for whitespace at firstplace========
var PatternsDict = new Object()
PatternsDict.whitespacepat = /\s+/
function WhiteSpaceValidation1st(ctlName) {
    var str1 = document.getElementById(ctlName).value;
    var Object = document.getElementById(ctlName);
    var objregExp = new RegExp(PatternsDict.whitespacepat)
    if (objregExp.test(str1)) {
        if (str1.charAt(0) == " ") {
            alert('White space not allowed at 1st place');
            document.getElementById(ctlName).value = '';
            Object.focus()
            return false;
        }
    }
    return true;
}
//======================check special characters in address field================

function CheckAddress(Object) {
    var Arr = new Array();
    var k;
    Arr = Object.split(',');

    for (k = 0; k < Arr.length; k++) {
        var str1 = document.getElementById(Arr[k]).value;

        for (var i = 0; i < str1.length; i++) {

            var ch = str1.substring(i, i + 1);

            if ((ch == "`") || (ch == "'") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "+") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == '=') || (ch == '"')) {
                alert('Special characters except space,hypen,slash & comma are not allowed');
                // document.getElementById(Arr[k]).value = '';	
                document.getElementById(Arr[k]).focus();
                return false;
            }
        }
    }
    return true;
}
///=======================  view optionDetails==================
function ConfirmOptions() {

    var cids = document.getElementById('hidCollege').value;
    //======================================================
    //optionId=document.getElementById('hidOptionIds').value;
    StreamId = document.getElementById('hidStream').value;
    CompulsoryId = document.getElementById('hidComplusory').value;
    Elective1 = document.getElementById('hidElective1').value;
    Elective2 = document.getElementById('hidElective2').value;
    Elective3 = document.getElementById('hidElective3').value;
    FElective1 = document.getElementById('hidFElelective1').value;
    FElective2 = document.getElementById('hidFElelective2').value;
    FElective3 = document.getElementById('hidFElelective3').value;
    Accomodation = document.getElementById('hidHostel').value;
    //=========================Getting names=================
    CText = document.getElementById('hidCname').value;
    SText = document.getElementById('hidSname').value;
    CompSId = document.getElementById('hidCompName').value;
    E1Text = document.getElementById('hidE1name').value;
    E2Text = document.getElementById('hidE2name').value;
    E3Text = document.getElementById('hidE3name').value;
    F1Text = document.getElementById('hidF1Ele').value;
    F2Text = document.getElementById('hidF2Ele').value;
    F3Text = document.getElementById('hidF3Ele').value;
    //======================================================
    optAry = new Array();
    colAry = new Array();
    sAry = new Array();
    compAry = new Array();
    ele1Ary = new Array();
    ele2Ary = new Array();
    ele3Ary = new Array();
    fele1Ary = new Array();
    fele2Ary = new Array();
    fele3Ary = new Array();
    hosAry = new Array();
    //============for text=================
    colAry1 = new Array();
    sAry1 = new Array();
    compAry1 = new Array();
    ele1Ary1 = new Array();
    ele2Ary1 = new Array();
    ele3Ary1 = new Array();
    fele1Ary1 = new Array();
    fele2Ary1 = new Array();
    fele3Ary1 = new Array();
    //================================
    if (cids.indexOf('~') > 0) {
        //==============Splitiing the text & ids==========
        //optAry=optionId.split('~');
        colAry = cids.split('~');
        colAry1 = CText.split('~');
        sAry = StreamId.split('~');
        sAry1 = SText.split('~');
        compAry = CompulsoryId.split('~');
        compAry1 = CompSId.split('~');
        ele1Ary = Elective1.split('~');
        ele1Ary1 = E1Text.split('~');
        ele2Ary = Elective2.split('~');
        ele2Ary1 = E2Text.split('~');
        ele3Ary = Elective3.split('~');
        ele3Ary1 = E3Text.split('~');
        fele1Ary = FElective1.split('~');
        fele1Ary1 = F1Text.split('~');
        fele2Ary = FElective2.split('~');
        fele2Ary1 = F2Text.split('~');
        fele3Ary = FElective3.split('~');
        fele3Ary1 = F3Text.split('~');
        hosAry = Accomodation.split('~');
        //================================================

        for (var i = 0; i < colAry.length; i++) {
            //optionId=optAry[i];
            CollegeId = colAry[i];
            CText = colAry1[i];
            //var TextLen=CText.length;
            //CText=CText.substring(5,TextLen);
            StreamId = sAry[i];
            SText = sAry1[i];
            CompulsoryId = compAry[i];
            CompSId = compAry1[i];
            Elective1 = ele1Ary[i];
            E1Text = ele1Ary1[i];
            Elective2 = ele2Ary[i];
            E2Text = ele2Ary1[i];
            Elective3 = ele3Ary[i];
            E3Text = ele3Ary1[i];
            FElective1 = fele1Ary[i];
            F1Text = fele1Ary1[i];
            FElective2 = fele2Ary[i];
            F2Text = fele2Ary1[i];
            FElective3 = fele3Ary[i];
            F3Text = fele3Ary1[i];
            Accomodation = hosAry[i];
            ConfirmRow();
        }
    }
    else {
        //optionId=document.getElementById('hidOptionIds').value;  
        CollegeId = document.getElementById('hidCollege').value;
        StreamId = document.getElementById('hidStream').value;
        CompulsoryId = document.getElementById('hidComplusory').value;
        Elective1 = document.getElementById('hidElective1').value;
        Elective2 = document.getElementById('hidElective2').value;
        Elective3 = document.getElementById('hidElective3').value;
        FElective1 = document.getElementById('hidFElelective1').value;
        FElective2 = document.getElementById('hidFElelective2').value;
        FElective3 = document.getElementById('hidFElelective3').value;
        Accomodation = document.getElementById('hidHostel').value;
        //=========================Getting names=================
        CText = document.getElementById('hidCname').value;
        //var TextLen=CText.length;
        // CText=CText.substring(5,TextLen);
        SText = document.getElementById('hidSname').value;
        CompSId = document.getElementById('hidCompName').value;
        E1Text = document.getElementById('hidE1name').value;
        E2Text = document.getElementById('hidE2name').value;
        E3Text = document.getElementById('hidE3name').value;
        F1Text = document.getElementById('hidF1Ele').value;
        F2Text = document.getElementById('hidF2Ele').value;
        F3Text = document.getElementById('hidF3Ele').value;
        //=======================================================
        ConfirmRow();
    }

}
///===============================add options==================
//=========================Add Option Details=====================================
function ConfirmOptionData() {
    optionArray = new Array(9);
    optionArray[0] = new Array();
    optionArray[1] = new Array();
    optionArray[2] = new Array();
    optionArray[3] = new Array();
    optionArray[4] = new Array();
    optionArray[5] = new Array();
    optionArray[6] = new Array();
    optionArray[7] = new Array();
    optionArray[8] = new Array();
    optionArray[9] = new Array();
    optionArray[10] = new Array();
    optionArray[0][0] = CText;
    optionArray[0][1] = CollegeId;
    optionArray[1][0] = SText;
    optionArray[1][1] = StreamId;
    optionArray[2][0] = CompSId;
    optionArray[2][1] = CompulsoryId;
    optionArray[3][0] = E1Text;
    optionArray[3][1] = Elective1;
    optionArray[4][0] = E2Text;
    optionArray[4][1] = Elective2;
//    optionArray[5][0] = E3Text;
//    optionArray[5][1] = Elective3;
//    optionArray[6][0] = F1Text;
//    optionArray[6][1] = FElective1;
    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================
    if (Elective3 == 0) {
        optionArray[5][0] = '';
        optionArray[5][1] = 'NA';
    }
    else {
        optionArray[5][0] = E3Text;
        optionArray[5][1] = Elective3;
    }


    if (FElective1 == 0) {
        optionArray[6][0] = '';
        optionArray[6][1] = 'NA';
    }
    else {
        optionArray[6][0] = F1Text;
        optionArray[6][1] = FElective1;
    }
   
   
    if (FElective2 == 0) {
        optionArray[7][0] = '';
        optionArray[7][1] = FElective2;
    }
    else {
        optionArray[7][0] = F2Text;
        optionArray[7][1] = FElective2;
    }
    if (FElective3 == 0) {
        optionArray[8][0] = '';
        optionArray[8][1] = FElective3;
    }
    else {
        optionArray[8][0] = F3Text;
        optionArray[8][1] = FElective3;
    }
    //==========================================================================================================
    //var Accomodation;
    var AccText;
    if (Accomodation == 1) {
        Accomodation = 1;
        AccText = 'YES';
    }
    if (Accomodation == 2) {
        Accomodation = 2;
        AccText = 'NO';
    }
    optionArray[9][0] = AccText;
    optionArray[9][1] = Accomodation;
}

///=====================display options======================
function ConfirmRow() {
    ConfirmOptionData();
    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
    var OptionText;
    if (optText == 1) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
    }
    if (optText == 10) {
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
    }
    td1.innerHTML = OptionText;
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[2][0] + "<input type='hidden' value=" + optionArray[2][1] + "></input>"
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[3][0] + "</br>" + optionArray[4][0] + "</br>" + optionArray[5][0] + "<input type='hidden' value=" + optionArray[3][1] + "~" + optionArray[4][1] + "~" + optionArray[5][1] + "></input>"
    var td6 = document.createElement("TD")
  
    td6.innerHTML = optionArray[6][0] + "</br>" + optionArray[7][0] + "</br>" + optionArray[8][0] + "<input type='hidden' value=" + optionArray[6][1] + "~" + optionArray[7][1] + "~" + optionArray[8][1] + "></input>" + "<input type='hidden' value=" + optionArray[9][1] + "></input>"
    var td7 = document.createElement("TD")
    td7.innerHTML = optionArray[9][0]
    for (i = 1; i < 8; i++) {
        row.appendChild(eval("td" + i));
    }
    tbody.appendChild(row);

}
//=========================================view OptionsDetails in Applied CAF Page===================
//==================================Back from Confirm CAF Page=======================================
function NotConfirmOptions() {
    //======================Details====================
    var College = document.getElementById('hidCollege').value;
    collegeAry = new Array();
    collegeAry = College.split("|");
    var Stream = document.getElementById('hidStream').value;
    streamAry = new Array();
    streamAry = Stream.split("|");
    var Compulsory = document.getElementById('hidComplusory').value;
    CompulsoryAry = new Array();
    CompulsoryAry = Compulsory.split("|");
    var Electives = document.getElementById('hidElectives').value;
    ElectivesAry = new Array();
    ElectivesAry = Electives.split("|")
    //===============getting Elective Ids================
    EleIdsAry = new Array();
    EleNamesAry = new Array();
    EleIdsAry = ElectivesAry[0].split("/");
    EleNamesAry = ElectivesAry[1].split("/");
    var Felectives = document.getElementById('hidFourthElelectives').value;
    fElectiveAry = new Array();
    fElectiveAry = Felectives.split("|");
    //=================getting Fourth Elective Ids==================
    fEleIdsAry = new Array();
    fEleNamesAry = new Array();
    fEleIdsAry = fElectiveAry[0].split("/");
    fEleNamesAry = fElectiveAry[1].split("/");
    //=================================================
    var cids = collegeAry[0];
    StreamId = streamAry[0];
    CompulsoryId = CompulsoryAry[0];
    Elective1 = EleIdsAry[0];
    Elective2 = EleIdsAry[1];
    Elective3 = EleIdsAry[2];
    FElective1 = fEleIdsAry[0];
    FElective2 = fEleIdsAry[1];
    FElective3 = fEleIdsAry[2];
    Accomodation = document.getElementById('hidHostel').value;
    //=========================Getting names=================
    CText = collegeAry[1];
    SText = streamAry[1];
    CompSId = CompulsoryAry[1];
    E1Text = EleNamesAry[0];
    E2Text = EleNamesAry[1];
    E3Text = EleNamesAry[2];
    F1Text = fEleNamesAry[0];
    F2Text = fEleNamesAry[1];
    F3Text = fEleNamesAry[2];
    //======================================================
    optAry = new Array();
    colAry = new Array();
    sAry = new Array();
    compAry = new Array();
    ele1Ary = new Array();
    ele2Ary = new Array();
    ele3Ary = new Array();
    fele1Ary = new Array();
    fele2Ary = new Array();
    fele3Ary = new Array();
    hosAry = new Array();
    //============for text=================
    colAry1 = new Array();
    sAry1 = new Array();
    compAry1 = new Array();
    ele1Ary1 = new Array();
    ele2Ary1 = new Array();
    ele3Ary1 = new Array();
    fele1Ary1 = new Array();
    fele2Ary1 = new Array();
    fele3Ary1 = new Array();
    //================================
    if (cids.indexOf('~') > 0) {
        //==============Splitiing the text & ids==========
        //optAry=optionId.split('~');
        colAry = cids.split('~');
        colAry1 = CText.split('~');
        sAry = StreamId.split('~');
        sAry1 = SText.split('~');
        compAry = CompulsoryId.split('~');
        compAry1 = CompSId.split('~');
        ele1Ary = Elective1.split('~');
        ele1Ary1 = E1Text.split('~');
        ele2Ary = Elective2.split('~');
        ele2Ary1 = E2Text.split('~');
        ele3Ary = Elective3.split('~');
        ele3Ary1 = E3Text.split('~');
        fele1Ary = FElective1.split('~');
        fele1Ary1 = F1Text.split('~');
        fele2Ary = FElective2.split('~');
        fele2Ary1 = F2Text.split('~');
        fele3Ary = FElective3.split('~');
        fele3Ary1 = F3Text.split('~');
        hosAry = Accomodation.split('~');
        //================================================

        for (var i = 0; i < colAry.length; i++) {
            //optionId=optAry[i];
            CollegeId = colAry[i];
            CText = colAry1[i];
            //var TextLen=CText.length;
            //CText=CText.substring(4,TextLen);
            StreamId = sAry[i];
            SText = sAry1[i];
            CompulsoryId = compAry[i];
            CompSId = compAry1[i];
            Elective1 = ele1Ary[i];
            E1Text = ele1Ary1[i];
            Elective2 = ele2Ary[i];
            E2Text = ele2Ary1[i];
            Elective3 = ele3Ary[i];
            E3Text = ele3Ary1[i];
            FElective1 = fele1Ary[i];
            F1Text = fele1Ary1[i];
            FElective2 = fele2Ary[i];
            F2Text = fele2Ary1[i];
            FElective3 = fele3Ary[i];
            F3Text = fele3Ary1[i];
            Accomodation = hosAry[i];
            NotConfirmRow();
        }
    }
    else {
        //optionId=document.getElementById('hidOptionIds').value;  
        CollegeId = collegeAry[0];
        StreamId = streamAry[0];
        CompulsoryId = CompulsoryAry[0];
        Elective1 = EleIdsAry[0];
        Elective2 = EleIdsAry[1];
        Elective3 = EleIdsAry[2];
        FElective1 = fEleIdsAry[0];
        FElective2 = fEleIdsAry[1];
        FElective3 = fEleIdsAry[2];
        Accomodation = document.getElementById('hidHostel').value;
        //=========================Getting names=================
        CText = collegeAry[1];
        //var TextLen=CText.length;
        //CText=CText.substring(4,TextLen);
        SText = streamAry[1];
        CompSId = CompulsoryAry[1];
        E1Text = EleNamesAry[0];
        E2Text = EleNamesAry[1];
        E3Text = EleNamesAry[2];
        F1Text = fEleNamesAry[0];
        F2Text = fEleNamesAry[1];
        F3Text = fEleNamesAry[2];
        //=======================================================
        NotConfirmRow();
    }

}
///===============================add options==================
//=========================Add Option Details=====================================
function NotConfirmOptionData() {

    optionArray = new Array(9);
    optionArray[0] = new Array();
    optionArray[1] = new Array();
    optionArray[2] = new Array();
    optionArray[3] = new Array();
    optionArray[4] = new Array();
    optionArray[5] = new Array();
    optionArray[6] = new Array();
    optionArray[7] = new Array();
    optionArray[8] = new Array();
    optionArray[9] = new Array();
    optionArray[10] = new Array();

    optionArray[0][0] = CText;
    optionArray[0][1] = CollegeId;
    optionArray[1][0] = SText;
    optionArray[1][1] = StreamId;
    optionArray[2][0] = CompSId;
    optionArray[2][1] = CompulsoryId;
    optionArray[3][0] = E1Text;
    optionArray[3][1] = Elective1;
    optionArray[4][0] = E2Text;
    optionArray[4][1] = Elective2;
//    optionArray[5][0] = E3Text;
//    optionArray[5][1] = Elective3;
//    optionArray[6][0] = F1Text;
//    optionArray[6][1] = FElective1;
    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================

    if (Elective3 == 0) {
        optionArray[5][0] = '';
        optionArray[5][1] = 'NA';
    }
    else {
        optionArray[5][0] = E3Text;
        optionArray[5][1] = Elective3;
    }


    if (FElective1 == 0) {
        optionArray[6][0] = '';
        optionArray[6][1] = 'NA';
    }
    else {
        optionArray[6][0] = F1Text;
        optionArray[6][1] = FElective1;
    }
   
    if (FElective2 == 0) {
        optionArray[7][0] = '';
        optionArray[7][1] = FElective2;
    }
    else {
        optionArray[7][0] = F2Text;
        optionArray[7][1] = FElective2;
    }
    if (FElective3 == 0) {
        optionArray[8][0] = '';
        optionArray[8][1] = FElective3;
    }
    else {
        optionArray[8][0] = F3Text;
        optionArray[8][1] = FElective3;
    }
    //==========================================================================================================
    //	var Accomodation=0;
    var AccText;
    if (Accomodation == 1) {
        Accomodation = 1;
        AccText = 'YES';
    }
    if (Accomodation == 2) {
        Accomodation = 2;
        AccText = 'NO';
    }
    optionArray[9][0] = AccText;
    optionArray[9][1] = Accomodation;
}
///=====================display options======================
function NotConfirmRow() {
    NotConfirmOptionData();
    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
    var OptionText;
    var Caption;
   
//    if (optText == 1) {
//        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
//        //Caption = "Choose your 2nd Option"

//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('2').value = 'ଦିତୀୟ ପସନ୍ଦ';
//            Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 2nd Option"
//            document.getElementById('2').value = 'You have selected 2nd Option';
//        }

//        //ocument.getElementById('2').value = 'You have selected 2nd Option';
//        document.getElementById('2').className = "optioninctive";
//        document.getElementById('2').disabled = true;
//    }
//    if (optText == 2) {
//        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
////        Caption = "Choose your 3rd Option"
////        document.getElementById('3').value = 'You have selected 3rd Option';

//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('3').value = 'ତୃତୀୟ ପସନ୍ଦ';
//            Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 3rd Option"
//            document.getElementById('3').value = 'You have selected 3rd Option';
//        }

//        document.getElementById('3').className = "optioninctive";
//        document.getElementById('3').disabled = true;
//    }
//    if (optText == 3) {
//        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
////        Caption = "Choose your 4th Option"
////        document.getElementById('4').value = 'You have selected 4th Option';

//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('4').value = 'ଚତୁର୍ଥ ପସନ୍ଦ';
//            Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 4th Option"
//            document.getElementById('4').value = 'You have selected 4th Option';
//        }

//        document.getElementById('4').className = "optioninctive";
//        document.getElementById('4').disabled = true;
//    }
//    if (optText == 4) {
//        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
////        Caption = "Choose your 5th Option"
////        document.getElementById('5').value = 'You have selected 5th Option';

//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('5').value = 'ପଞ୍ଚମ ପସନ୍ଦ';
//            Caption = "ପଞ୍ଚମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 5th Option"
//            document.getElementById('5').value = 'You have selected 5th Option';
//        }

//        document.getElementById('5').className = "optioninctive";
//        document.getElementById('5').disabled = true;
//    }
//    if (optText == 5) {
//        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
////        Caption = "Choose your 6th Option"
////        document.getElementById('6').value = 'You have selected 6th Option';

//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('6').value = 'ଷଷ୍ଠ ପସନ୍ଦ';
//            Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 6th Option"
//            document.getElementById('6').value = 'You have selected 6th Option';
//        }

//        document.getElementById('6').className = "optioninctive";
//        document.getElementById('6').disabled = true;
//    }
//    if (optText == 6) {
//        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
//        //Caption = "You have added 6 options"
//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('7').value = 'ସପ୍ତମ ପସନ୍ଦ';
//            Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 7th Option"
//            document.getElementById('7').value = 'You have selected 7th Option';
//        }
//        document.getElementById('7').className = "optioninctive";
//        document.getElementById('7').disabled = true;
//    }
//    if (optText == 7) {
//        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
//        //Caption = "You have added 6 options"
//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('8').value = 'ଅଷ୍ଟମ ପସନ୍ଦ';
//            Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 8th Option"
//            document.getElementById('8').value = 'You have selected 8th Option';
//        }
//        document.getElementById('8').className = "optioninctive";
//        document.getElementById('8').disabled = true;
//    }
//    if (optText == 8) {
//        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
//        //Caption = "You have added 6 options"
//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('9').value = 'ନବମ ପସନ୍ଦ';
//            Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 9th Option"
//            document.getElementById('9').value = 'You have selected 9th Option';
//        }
//        document.getElementById('9').className = "optioninctive";
//        document.getElementById('9').disabled = true;
//    }
//    if (optText == 9) {
//        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
//        //Caption = "You have added 6 options"
//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('10').value = 'ଦଶମ ପସନ୍ଦ';
//            Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 10th Option"
//            document.getElementById('10').value = 'You have selected 10th Option';
//        }
//        document.getElementById('10').className = "optioninctive";
//        document.getElementById('10').disabled = true;
//    }
//    if (optText == 10) {
//        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
//        //Caption = "You have added 6 options"
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଆପଣ ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//        }
//        else {
//            Caption = "You have added 10 Options"
//        }
    //    }

    if (optText == 1) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"

        if (document.getElementById('rbtnOriya').checked) {
            //document.getElementById('3').value = 'ତୃତୀୟ ପସନ୍ଦ';
            Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
            document.getElementById('2').style.display = 'none';
            document.getElementById('3').style.display = '';
        }
        else {
            Caption = "Choose your 2nd Option";
            document.getElementById('2').style.display = 'none';
            document.getElementById('3').style.display = '';
            // document.getElementById('3').value = '3rd Option';
        }
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"

        if (document.getElementById('rbtnOriya').checked) {
            //document.getElementById('4').value = 'ଚତୁର୍ଥ ପସନ୍ଦ';
            Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
            document.getElementById('3').style.display = 'none';
            document.getElementById('4').style.display = '';
        }
        else {
            document.getElementById('3').style.display = 'none';
            document.getElementById('4').style.display = '';
            Caption = "Choose your 3rd Option"
            // document.getElementById('4').value = '4th Option';
        }
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"

        if (document.getElementById('rbtnOriya').checked) {
            // document.getElementById('5').value = 'ପଞ୍ଚମ ପସନ୍ଦ';
            Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
            document.getElementById('4').style.display = 'none';
            document.getElementById('5').style.display = '';
        }
        else {
            document.getElementById('4').style.display = 'none';
            document.getElementById('5').style.display = '';
            Caption = "Choose your 4th Option"
            // document.getElementById('5').value = '5th Option';
        }
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"


        if (document.getElementById('rbtnOriya').checked) {
            // document.getElementById('6').value = 'ଷଷ୍ଠ ପସନ୍ଦ';
            Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
            document.getElementById('5').style.display = 'none';
            document.getElementById('6').style.display = '';
        }
        else {
            document.getElementById('5').style.display = 'none';
            document.getElementById('6').style.display = '';
            Caption = "Choose your 5th Option"
            document.getElementById('6').value = '6th Option';
        }
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"

        if (document.getElementById('rbtnOriya').checked) {
            //document.getElementById('7').value = 'ସପ୍ତମ ପସନ୍ଦ';
            Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
            document.getElementById('6').style.display = 'none';
            document.getElementById('7').style.display = '';
        }
        else {
            document.getElementById('6').style.display = 'none';
            document.getElementById('7').style.display = '';
            Caption = "Choose your 6th Option"
            document.getElementById('7').value = '7th Option';
        }
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"

        if (document.getElementById('rbtnOriya').checked) {
            // document.getElementById('8').value = 'ଅଷ୍ଟମ ପସନ୍ଦ';
            Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
            document.getElementById('7').style.display = 'none';
            document.getElementById('8').style.display = '';
        }
        else {
            document.getElementById('7').style.display = 'none';
            document.getElementById('8').style.display = '';
            Caption = "Choose your 7th Option"
            document.getElementById('8').value = '8th Option';
        }
    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
        if (document.getElementById('rbtnOriya').checked) {
            //document.getElementById('9').value = 'ନବମ ପସନ୍ଦ';
            Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
            document.getElementById('8').style.display = 'none';
            document.getElementById('9').style.display = '';
        }
        else {
            document.getElementById('8').style.display = 'none';
            document.getElementById('9').style.display = '';
            Caption = "Choose your 8th Option"
            document.getElementById('9').value = '9th Option';
        }
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
        if (document.getElementById('rbtnOriya').checked) {
            //document.getElementById('10').value = 'ଦଶମ ପସନ୍ଦ';
            Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
            document.getElementById('9').style.display = 'none';
            document.getElementById('10').style.display = '';
        }
        else {
            document.getElementById('9').style.display = 'none';
            document.getElementById('10').style.display = '';
            Caption = "Choose your 9th Option"
            document.getElementById('10').value = '10th Option';
        }
    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('10').value = 'ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି';
            Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
        }
        else {
            Caption = "Choose your 10th Option";
            document.getElementById('10').value = 'You have selected 10th Option';
        }
        document.getElementById('10').className = "optioninctive";
        document.getElementById('10').disabled = true;
    }
    if (optText == 10) {
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
        if (document.getElementById('rbtnOriya').checked) {
            Caption = "ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
        }
        else {

            Caption = "You have added 10 Options"
        }
    }



    td1.innerHTML = OptionText;

    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"

    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"

    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[2][0] + "<input type='hidden' value=" + optionArray[2][1] + "></input>"

    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[3][0] + "</br>" + optionArray[4][0] + "</br>" + optionArray[5][0] + "<input type='hidden' value=" + optionArray[3][1] + "~" + optionArray[4][1] + "~" + optionArray[5][1] + "></input>"

    var td6 = document.createElement("TD")
    td6.innerHTML = optionArray[6][0] + "</br>" + optionArray[7][0] + "</br>" + optionArray[8][0] + "<input type='hidden' value=" + optionArray[6][1] + "~" + optionArray[7][1] + "~" + optionArray[8][1] + "></input>" + "<input type='hidden' value=" + optionArray[9][1] + "></input>"

    var td7 = document.createElement("TD")
    td7.innerHTML = "<a href='javascript:remove(" + optText + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option'/></a>"
    for (i = 1; i < 8; i++) {
        row.appendChild(eval("td" + i));
    }
    tbody.appendChild(row);
    document.getElementById('Caption').innerHTML = Caption;
}
//=============function for checking wheather it is not confimed CAF or New CAF============
function checkConfirmationStatus() {

    if (document.getElementById('hidCollege').value != '') {
        NotConfirmOptions();
        document.getElementById('tblChoice').style.display = '';
    }

}
//============================Hostel facility Checking=================
function checkHostel() {
    var CollID = document.getElementById('ddlCollege').value;
   //alert(CollID);

    //cids = new Array('6', '9', '11', '14', '19', '22', '23', '28', '37', '39', '41', '43', '47', '51', '56', '57', '58', '61', '62', '63', '68', '80', '81', '84', '89', '91', '92', '95', '98', '99', '100', '103', '107', '109', '110', '112', '115', '116', '117', '119', '120', '123', '124', '129', '131', '132', '135', '153', '154', '156', '157', '158', '161', '162', '165', '166', '171', '173', '174', '175', '232', '233', '236', '239', '241', '251', '252', '253', '256', '263', '264', '265', '269', '270', '272', '276', '279', '280', '287', '288', '294', '301', '303', '304', '305', '311', '319', '322', '328', '334', '335', '336', '342', '344', '356', '362', '363', '385', '386', '390', '391', '397', '400', '401', '407', '408', '409', '410', '411', '412', '416', '418', '424', '425', '426', '429', '431', '442', '443', '445', '447', '448', '458', '465', '466', '467', '469', '478', '479', '482', '483', '490', '492', '493', '496', '498', '504', '505', '506', '511', '513', '517', '519', '521', '536', '540', '541', '543', '548', '549', '553', '554', '555', '557', '562', '565', '575', '579', '581', '582', '583', '586', '588', '589', '592', '597', '600', '602', '605', '606', '608', '609', '611', '614', '615', '616', '618', '622', '623', '625', '627', '636', '638', '641', '644', '646', '648', '649', '653', '654', '658', '660', '663', '668', '669', '670', '672', '679', '680', '681', '683', '686', '687', '688', '701', '705', '706', '708', '709', '710', '714', '716', '717', '723', '724', '725', '727', '733', '751', '752', '757', '758', '759', '765', '768', '770', '777', '778', '782', '783', '784', '785', '788', '790', '794', '796', '797', '798', '800', '801', '802', '804', '808', '810', '812', '817', '818', '819', '820', '824', '831', '835', '838', '839', '840', '841', '842', '844', '848', '849', '854', '858', '859', '862', '867', '873', '874', '875', '879', '881', '915', '917', '919', '921', '923', '927', '932', '934', '938', '939', '941', '949', '950', '955', '959', '964', '967', '969', '970', '972', '973', '975', '976', '977', '978', '984', '988', '992', '994', '995', '996', '1002', '1007', '1018', '1021', '1022', '1034', '1035', '1036', '1038', '1042', '1050', '1059', '1060', '1067', '1075', '1076', '1077', '1090', '1092', '1093', '1095', '1102', '1105', '1106', '1108', '1110', '1116', '1119', '1120', '1122', '1124', '1130', '1131', '1141', '1143', '1149', '1150', '1151', '1152', '1160', '1171', '1175', '1178', '1179', '1181', '1186', '1189', '1195', '1196', '1199', '1202', '1203', '1207', '1212', '1214', '1217', '1223', '1225', '1231', '1233', '1234', '1236', '1237', '1240', '1243', '1251', '1253', '1254', '1258', '1260', '1265', '1266', '1267', '1270', '1271', '1272', '1275', '1281', '1285', '1298', '1299', '1304', '1305', '1306', '1308', '1314', '1315', '1316', '1317', '1325', '1328', '1329', '1338', '1339', '1340', '1353', '1355', '1356', '1360', '1367', '1368', '1373', '1378', '1380', '1390', '1391', '1396', '1397', '1399', '1404', '1405', '1408', '1409', '1412', '1417', '1422', '1427', '1432', '1434', '1437', '1438', '1441', '1448', '1449', '1450', '1458', '1465', '1467', '1473', '1571', '1574', '1582', '1583', '1584', '1590', '1592', '1598', '1610', '1614', '1617', '1619', '1630', '1631', '1634', '1636', '1637', '1640', '1644', '1648', '1659', '1660', '1661', '1665', '1667', '1672', '1679', '1680', '1684', '1685', '1692', '1694', '1696', '1698', '1699', '1700', '1707', '1708', '1711', '1712', '1713', '1716', '1718', '1719', '1720', '1726', '1731', '1737', '1741', '1742', '1743', '1745', '1746', '1756', '1760', '1763', '1764', '1765', '1768', '1777', '1778', '1780', '1781', '1784', '1787', '1790', '1791', '1793', '1795', '1802', '1803', '1804', '1809', '1810', '1811', '1817', '1821', '1824', '1825', '1826', '1828', '1829', '1840', '1841', '1842', '1844', '1845', '1849', '1854', '1855', '1856', '1861', '1862', '1863', '1871', '1872', '1873', '1878', '1886', '1888', '1889', '1896', '1897', '1903', '1905', '1910', '1913', '1917', '1926', '1935', '1944', '1954', '1957', '1959', '1963', '1964', '1965', '1972', '1977', '1978', '1984', '1989', '1998', '2000', '2001', '2003', '2008', '2009', '2010', '2015', '2017', '2026', '2027', '2030', '2032', '2034', '2035', '2038', '2040', '2041', '2043', '2050', '2054', '2055', '2057', '2058', '2060', '2061', '2062', '2064', '2066', '2071', '2073', '2074', '2078', '2081', '2082', '2086', '2102', '2103', '2110', '2113', '2117', '2127', '2129', '2150', '2151', '2479', '2500', '2508', '2517', '2518', '2565', '2582', '2592', '2658', '2725', '2735', '2737', '2761', '2804', '2858', '2865');
    //cids = new Array('9', '9', '9', '11', '11', '11', '19', '19', '19', '28', '28', '28', '37', '37', '37', '41', '41', '41', '47', '47', '47', '51', '51', '51', '56', '56', '56', '63', '63', '63', '65', '65', '65', '68', '68', '68', '75', '75', '75', '77', '77', '77', '84', '84', '84', '89', '89', '89', '91', '91', '91', '92', '92', '92', '95', '95', '95', '96', '96', '96', '98', '98', '98', '99', '99', '99', '103', '103', '103', '110', '110', '110', '112', '112', '112', '116', '116', '116', '119', '119', '119', '120', '120', '120', '129', '129', '129', '131', '131', '131', '132', '132', '132', '134', '134', '134', '135', '135', '135', '145', '145', '145', '153', '153', '153', '154', '154', '154', '156', '156', '156', '157', '157', '157', '158', '158', '158', '160', '160', '160', '161', '161', '161', '166', '166', '166', '170', '170', '170', '171', '171', '171', '175', '175', '175', '232', '232', '232', '236', '236', '236', '239', '239', '239', '242', '242', '242', '251', '251', '251', '252', '252', '252', '263', '263', '263', '264', '264', '264', '270', '270', '270', '272', '272', '272', '274', '274', '274', '287', '287', '287', '288', '288', '288', '291', '291', '291', '294', '294', '294', '302', '302', '302', '304', '304', '304', '306', '306', '306', '311', '311', '311', '322', '322', '322', '334', '334', '334', '336', '336', '336', '344', '344', '344', '356', '356', '356', '362', '362', '362', '363', '363', '363', '375', '375', '375', '385', '385', '385', '386', '386', '386', '390', '390', '390', '397', '397', '397', '400', '400', '400', '406', '406', '406', '407', '407', '407', '408', '408', '408', '409', '409', '409', '410', '410', '410', '411', '411', '411', '412', '412', '412', '418', '418', '418', '424', '424', '424', '425', '425', '425', '426', '426', '426', '429', '429', '429', '439', '439', '439', '440', '440', '440', '442', '442', '442', '443', '443', '443', '448', '448', '448', '455', '455', '455', '457', '457', '457', '460', '460', '460', '465', '465', '465', '466', '466', '466', '469', '469', '469', '478', '478', '478', '479', '479', '479', '490', '490', '490', '492', '492', '492', '496', '496', '496', '506', '506', '506', '523', '523', '523', '540', '540', '540', '541', '541', '541', '542', '542', '542', '544', '544', '544', '548', '548', '548', '550', '550', '550', '553', '553', '553', '554', '554', '554', '557', '557', '557', '558', '558', '558', '559', '559', '559', '562', '562', '562', '563', '563', '563', '564', '564', '564', '565', '565', '565', '574', '574', '574', '575', '575', '575', '579', '579', '579', '589', '589', '589', '592', '592', '592', '596', '596', '596', '598', '598', '598', '600', '600', '600', '605', '605', '605', '606', '606', '606', '608', '608', '608', '616', '616', '616', '618', '618', '618', '622', '622', '622', '623', '623', '623', '625', '625', '625', '627', '627', '627', '631', '631', '631', '636', '636', '636', '641', '641', '641', '644', '644', '644', '648', '648', '648', '651', '651', '651', '653', '653', '653', '660', '660', '660', '664', '664', '664', '668', '668', '668', '669', '669', '669', '670', '670', '670', '679', '679', '679', '680', '680', '680', '681', '681', '681', '683', '683', '683', '688', '688', '688', '698', '698', '698', '702', '702', '702', '705', '705', '705', '709', '709', '709', '710', '710', '710', '716', '716', '716', '717', '717', '717', '718', '718', '718', '722', '722', '722', '725', '725', '725', '726', '726', '726', '733', '733', '733', '751', '751', '751', '752', '752', '752', '756', '756', '756', '757', '757', '757', '758', '758', '758', '759', '759', '759', '764', '764', '764', '768', '768', '768', '777', '777', '777', '784', '784', '784', '790', '790', '790', '796', '796', '796', '801', '801', '801', '802', '802', '802', '808', '808', '808', '810', '810', '810', '811', '811', '811', '817', '817', '817', '824', '824', '824', '831', '831', '831', '835', '835', '835', '838', '838', '838', '840', '840', '840', '842', '842', '842', '844', '844', '844', '848', '848', '848', '852', '852', '852', '854', '854', '854', '859', '859', '859', '866', '866', '866', '868', '868', '868', '874', '874', '874', '878', '878', '878', '879', '879', '879', '881', '881', '881', '915', '915', '915', '919', '919', '919', '921', '921', '921', '923', '923', '923', '925', '925', '925', '927', '927', '927', '932', '932', '932', '933', '933', '933', '935', '935', '935', '938', '938', '938', '939', '939', '939', '941', '941', '941', '949', '949', '949', '950', '950', '950', '955', '955', '955', '958', '958', '958', '961', '961', '961', '964', '964', '964', '965', '965', '965', '967', '967', '967', '969', '969', '969', '972', '972', '972', '976', '976', '976', '977', '977', '977', '978', '978', '978', '980', '980', '980', '984', '984', '984', '995', '995', '995', '1021', '1021', '1021', '1029', '1029', '1029', '1034', '1034', '1034', '1035', '1035', '1035', '1038', '1038', '1038', '1042', '1042', '1042', '1059', '1059', '1059', '1061', '1061', '1061', '1065', '1065', '1065', '1066', '1066', '1066', '1076', '1076', '1076', '1077', '1077', '1077', '1092', '1092', '1092', '1120', '1120', '1120', '1124', '1124', '1124', '1130', '1130', '1130', '1131', '1131', '1131', '1133', '1133', '1133', '1141', '1141', '1141', '1144', '1144', '1144', '1149', '1149', '1149', '1151', '1151', '1151', '1152', '1152', '1152', '1172', '1172', '1172', '1181', '1181', '1181', '1186', '1186', '1186', '1189', '1189', '1189', '1195', '1195', '1195', '1196', '1196', '1196', '1201', '1201', '1201', '1207', '1207', '1207', '1210', '1210', '1210', '1212', '1212', '1212', '1214', '1214', '1214', '1217', '1217', '1217', '1224', '1224', '1224', '1225', '1225', '1225', '1233', '1233', '1233', '1236', '1236', '1236', '1237', '1237', '1237', '1240', '1240', '1240', '1243', '1243', '1243', '1245', '1245', '1245', '1251', '1251', '1251', '1253', '1253', '1253', '1256', '1256', '1256', '1266', '1266', '1266', '1270', '1270', '1270', '1271', '1271', '1271', '1274', '1274', '1274', '1275', '1275', '1275', '1280', '1280', '1280', '1305', '1305', '1305', '1308', '1308', '1308', '1309', '1309', '1309', '1314', '1314', '1314', '1315', '1315', '1315', '1316', '1316', '1316', '1317', '1317', '1317', '1324', '1324', '1324', '1325', '1325', '1325', '1339', '1339', '1339', '1353', '1353', '1353', '1355', '1355', '1355', '1368', '1368', '1368', '1374', '1374', '1374', '1378', '1378', '1378', '1380', '1380', '1380', '1390', '1390', '1390', '1391', '1391', '1391', '1397', '1397', '1397', '1408', '1408', '1408', '1412', '1412', '1412', '1417', '1417', '1417', '1432', '1432', '1432', '1434', '1434', '1434', '1437', '1437', '1437', '1438', '1438', '1438', '1441', '1441', '1441', '1443', '1443', '1443', '1449', '1449', '1449', '1456', '1456', '1456', '1457', '1457', '1457', '1458', '1458', '1458', '1465', '1465', '1465', '1467', '1467', '1467', '1571', '1571', '1571', '1572', '1572', '1572', '1582', '1582', '1582', '1589', '1589', '1589', '1591', '1591', '1591', '1592', '1592', '1592', '1598', '1598', '1598', '1599', '1599', '1599', '1607', '1607', '1607', '1610', '1610', '1610', '1614', '1614', '1614', '1616', '1616', '1616', '1617', '1617', '1617', '1619', '1619', '1619', '1631', '1631', '1631', '1634', '1634', '1634', '1636', '1636', '1636', '1637', '1637', '1637', '1644', '1644', '1644', '1661', '1661', '1661', '1676', '1676', '1676', '1683', '1683', '1683', '1685', '1685', '1685', '1691', '1691', '1691', '1696', '1696', '1696', '1698', '1698', '1698', '1707', '1707', '1707', '1711', '1711', '1711', '1712', '1712', '1712', '1716', '1716', '1716', '1726', '1726', '1726', '1731', '1731', '1731', '1737', '1737', '1737', '1740', '1740', '1740', '1741', '1741', '1741', '1742', '1742', '1742', '1760', '1760', '1760', '1764', '1764', '1764', '1777', '1777', '1777', '1778', '1778', '1778', '1790', '1790', '1790', '1791', '1791', '1791', '1795', '1795', '1795', '1796', '1796', '1796', '1803', '1803', '1803', '1809', '1809', '1809', '1810', '1810', '1810', '1815', '1815', '1815', '1817', '1817', '1817', '1821', '1821', '1821', '1829', '1829', '1829', '1837', '1837', '1837', '1841', '1841', '1841', '1855', '1855', '1855', '1856', '1856', '1856', '1861', '1861', '1861', '1872', '1872', '1872', '1888', '1888', '1888', '1889', '1889', '1889', '1896', '1896', '1896', '1903', '1903', '1903', '1905', '1905', '1905', '1910', '1910', '1910', '1917', '1917', '1917', '1918', '1918', '1918', '1930', '1930', '1930', '1944', '1944', '1944', '1950', '1950', '1950', '1951', '1951', '1951', '1954', '1954', '1954', '1957', '1957', '1957', '1959', '1959', '1959', '1963', '1963', '1963', '1976', '1976', '1976', '1978', '1978', '1978', '1984', '1984', '1984', '1987', '1987', '1987', '1996', '1996', '1996', '2009', '2009', '2009', '2015', '2015', '2015', '2027', '2027', '2027', '2030', '2030', '2030', '2032', '2032', '2032', '2037', '2037', '2037', '2038', '2038', '2038', '2041', '2041', '2041', '2043', '2043', '2043', '2058', '2058', '2058', '2062', '2062', '2062', '2064', '2064', '2064', '2066', '2066', '2066', '2073', '2073', '2073', '2078', '2078', '2078', '2082', '2082', '2082', '2113', '2113', '2113', '2151', '2151', '2151', '2479', '2479', '2479', '2508', '2508', '2508', '2582', '2582', '2582', '2658', '2658', '2658', '2735', '2735', '2735', '2781', '2781', '2781', '2858', '2858', '2858', '2881', '2881', '2881');
    //cids = new Array('9', '11', '14', '19', '22', '37', '47', '51', '56', '61', '62', '63', '68', '77', '79', '84', '89', '92', '95', '96', '98', '100', '103', '105', '107', '109', '110', '112', '115', '116', '120', '129', '131', '151', '154', '156', '157', '158', '165', '166', '170', '171', '230', '232', '233', '234', '239', '242', '247', '251', '252', '253', '270', '272', '279', '288', '291', '295', '302', '304', '306', '311', '314', '322', '328', '329', '330', '331', '333', '334', '335', '336', '342', '348', '356', '357', '358', '363', '375', '390', '391', '407', '409', '410', '411', '422', '424', '426', '429', '431', '440', '443', '447', '448', '460', '465', '466', '469', '478', '479', '482', '483', '490', '492', '496', '497', '506', '511', '517', '534', '542', '549', '553', '554', '558', '562', '563', '564', '579', '582', '586', '592', '597', '598', '600', '605', '606', '608', '609', '615', '616', '623', '625', '629', '631', '636', '638', '641', '644', '648', '649', '651', '653', '660', '668', '670', '679', '680', '681', '683', '686', '688', '698', '699', '702', '706', '708', '709', '710', '716', '717', '751', '753', '758', '764', '768', '773', '776', '782', '784', '788', '790', '797', '800', '801', '802', '810', '811', '812', '817', '818', '819', '824', '831', '835', '839', '840', '842', '848', '852', '854', '859', '866', '867', '868', '873', '874', '881', '917', '921', '924', '927', '929', '932', '933', '935', '938', '941', '959', '964', '965', '967', '972', '973', '975', '976', '977', '984', '988', '992', '996', '1002', '1007', '1009', '1021', '1029', '1034', '1035', '1036', '1038', '1039', '1041', '1042', '1059', '1061', '1065', '1075', '1090', '1099', '1105', '1106', '1108', '1110', '1120', '1122', '1124', '1130', '1131', '1133', '1144', '1150', '1151', '1152', '1158', '1160', '1168', '1172', '1175', '1178', '1181', '1186', '1189', '1195', '1196', '1201', '1202', '1210', '1217', '1236', '1237', '1240', '1243', '1245', '1249', '1251', '1253', '1254', '1258', '1260', '1266', '1267', '1276', '1280', '1281', '1299', '1304', '1305', '1308', '1309', '1314', '1315', '1317', '1324', '1325', '1328', '1336', '1339', '1346', '1351', '1353', '1355', '1364', '1373', '1374', '1377', '1378', '1379', '1390', '1391', '1393', '1399', '1409', '1412', '1417', '1422', '1432', '1434', '1443', '1448', '1449', '1451', '1458', '1467', '1571', '1573', '1574', '1583', '1590', '1591', '1592', '1598', '1614', '1617', '1629', '1636', '1637', '1644', '1659', '1660', '1661', '1662', '1672', '1679', '1683', '1685', '1692', '1696', '1698', '1700', '1705', '1707', '1708', '1711', '1712', '1716', '1719', '1720', '1726', '1731', '1737', '1741', '1742', '1743', '1745', '1746', '1753', '1755', '1756', '1760', '1763', '1764', '1767', '1774', '1777', '1778', '1780', '1782', '1787', '1790', '1791', '1793', '1794', '1795', '1796', '1802', '1803', '1804', '1809', '1810', '1811', '1815', '1817', '1828', '1837', '1844', '1854', '1855', '1856', '1862', '1871', '1872', '1878', '1886', '1888', '1889', '1896', '1898', '1904', '1905', '1908', '1909', '1913', '1919', '1930', '1947', '1950', '1951', '1957', '1963', '1964', '1996', '2000', '2015', '2025', '2026', '2032', '2037', '2041', '2043', '2054', '2057', '2058', '2060', '2062', '2064', '2073', '2078', '2086', '2102', '2113', '2127', '2129', '2150', '2151', '2500', '2582', '2587', '2593', '2719', '2781', '2782', '2805', '2858', '2865', '2867', '2966', '3010', '3011', '3014', '3016', '3024', '3028', '3032', '3036', '3045', '3046', '3052', '3054', '3055', '3057', '3066', '3068', '3070', '3074', '3075', '3084', '3091', '3092', '3099', '3104', '3113', '3116', '3121', '3125', '3126', '3149', '3166', '3184', '3191', '3199', '3201', '3202', '3209', '3216', '3226');
    cids=new Array('6',	'9',	'11',	'14',	'19',	'22',	'23',	'28',	'37',	'41',	'43',	'47',	'51',	'56',	'63',	'68',	'77',	'81',	'82',	'83',	'84',	'89',	'95',	'96',	'99',	'100',	'101',	'103',	'107',	'110',	'112',	'115',	'116',	'117',	'119',	'120',	'128',	'129',	'131',	'132',	'137',	'144',	'151',	'153',	'154',	'156',	'157',	'158',	'160',	'161',	'162',	'165',	'166',	'170',	'171',	'177',	'230',	'232',	'233',	'235',	'236',	'239',	'240',	'241',	'242',	'247',	'251',	'252',	'253',	'263',	'264',	'269',	'270',	'272',	'274',	'276',	'277',	'281',	'285',	'287',	'288',	'290',	'291',	'295',	'298',	'302',	'303',	'304',	'305',	'311',	'314',	'319',	'320',	'322',	'328',	'333',	'334',	'336',	'342',	'348',	'349',	'356',	'357',	'358',	'362',	'363',	'364',	'375',	'382',	'386',	'387',	'388',	'390',	'391',	'395',	'400',	'407',	'408',	'409',	'410',	'411',	'412',	'417',	'422',	'424',	'425',	'426',	'429',	'431',	'436',	'442',	'443',	'447',	'455',	'458',	'459',	'460',	'465',	'466',	'467',	'478',	'479',	'482',	'490',	'492',	'493',	'496',	'499',	'500',	'504',	'506',	'512',	'513',	'521',	'525',	'534',	'540',	'541',	'542',	'543',	'544',	'548',	'549',	'550',	'553',	'554',	'557',	'558',	'559',	'562',	'565',	'568',	'575',	'579',	'582',	'588',	'592',	'600',	'605',	'608',	'612',	'614',	'615',	'616',	'618',	'622',	'623',	'629',	'638',	'639',	'641',	'644',	'649',	'651',	'654',	'658',	'660',	'668',	'669',	'670',	'672',	'677',	'679',	'680',	'681',	'683',	'686',	'688',	'694',	'698',	'699',	'701',	'702',	'705',	'708',	'709',	'710',	'717',	'723',	'724',	'725',	'727',	'732',	'733',	'751',	'752',	'753',	'758',	'759',	'764',	'768',	'773',	'774',	'776',	'778',	'779',	'784',	'785',	'788',	'790',	'796',	'797',	'798',	'800',	'801',	'802',	'807',	'808',	'810',	'811',	'817',	'818',	'819',	'823',	'824',	'828',	'831',	'840',	'848',	'849',	'852',	'853',	'854',	'858',	'859',	'865',	'867',	'873',	'874',	'875',	'879',	'880',	'881',	'915',	'917',	'921',	'924',	'927',	'933',	'935',	'938',	'942',	'943',	'950',	'959',	'964',	'965',	'967',	'972',	'973',	'975',	'976',	'977',	'978',	'984',	'988',	'989',	'992',	'995',	'996',	'999',	'1007',	'1018',	'1021',	'1025',	'1026',	'1031',	'1034',	'1036',	'1038',	'1039',	'1042',	'1046',	'1048',	'1060',	'1061',	'1065',	'1069',	'1070',	'1071',	'1072',	'1076',	'1077',	'1079',	'1085',	'1087',	'1090',	'1091',	'1092',	'1093',	'1099',	'1105',	'1106',	'1110',	'1115',	'1119',	'1120',	'1124',	'1128',	'1130',	'1131',	'1132',	'1138',	'1141',	'1144',	'1146',	'1147',	'1150',	'1151',	'1152',	'1155',	'1156',	'1158',	'1162',	'1168',	'1172',	'1175',	'1178',	'1179',	'1186',	'1189',	'1195',	'1196',	'1201',	'1202',	'1203',	'1210',	'1212',	'1214',	'1217',	'1234',	'1236',	'1237',	'1240',	'1241',	'1243',	'1245',	'1249',	'1251',	'1254',	'1260',	'1265',	'1266',	'1271',	'1272',	'1280',	'1281',	'1285',	'1288',	'1290',	'1291',	'1297',	'1299',	'1303',	'1305',	'1306',	'1307',	'1308',	'1309',	'1314',	'1315',	'1316',	'1317',	'1322',	'1324',	'1325',	'1333',	'1334',	'1336',	'1339',	'1340',	'1344',	'1346',	'1354',	'1355',	'1360',	'1372',	'1373',	'1377',	'1378',	'1379',	'1380',	'1383',	'1384',	'1390',	'1391',	'1393',	'1398',	'1399',	'1408',	'1409',	'1417',	'1420',	'1427',	'1432',	'1434',	'1437',	'1438',	'1441',	'1443',	'1448',	'1449',	'1450',	'1457',	'1458',	'1464',	'1465',	'1467',	'1473',	'1571',	'1572',	'1574',	'1578',	'1579',	'1583',	'1592',	'1593',	'1598',	'1599',	'1602',	'1605',	'1607',	'1614',	'1616',	'1617',	'1629',	'1631',	'1636',	'1637',	'1640',	'1644',	'1659',	'1660',	'1661',	'1676',	'1679',	'1680',	'1685',	'1692',	'1694',	'1698',	'1700',	'1702',	'1707',	'1708',	'1711',	'1712',	'1713',	'1716',	'1717',	'1718',	'1719',	'1720',	'1726',	'1737',	'1740',	'1746',	'1753',	'1755',	'1756',	'1760',	'1763',	'1765',	'1774',	'1778',	'1780',	'1781',	'1782',	'1787',	'1790',	'1791',	'1793',	'1795',	'1796',	'1800',	'1803',	'1804',	'1809',	'1810',	'1815',	'1817',	'1821',	'1825',	'1828',	'1829',	'1835',	'1837',	'1838',	'1840',	'1842',	'1844',	'1845',	'1854',	'1855',	'1856',	'1861',	'1862',	'1863',	'1867',	'1869',	'1872',	'1877',	'1886',	'1889',	'1896',	'1897',	'1903',	'1906',	'1910',	'1913',	'1915',	'1917',	'1926',	'1930',	'1937',	'1938',	'1947',	'1954',	'1956',	'1957',	'1959',	'1964',	'1965',	'1972',	'1984',	'1987',	'1998',	'2014',	'2017',	'2026',	'2027',	'2029',	'2031',	'2032',	'2037',	'2038',	'2041',	'2043',	'2050',	'2054',	'2055',	'2058',	'2060',	'2062',	'2065',	'2066',	'2074',	'2078',	'2081',	'2082',	'2107',	'2110',	'2113',	'2150',	'2151',	'2479',	'2500',	'2508',	'2518',	'2593',	'2719',	'2737',	'2744',	'2753',	'2754',	'2781',	'2805',	'2858',	'2865',	'2866',	'2966',	'2974',	'3005',	'3006',	'3007',	'3009',	'3021',	'3028',	'3032',	'3035',	'3036',	'3043',	'3049',	'3052',	'3054',	'3070',	'3073',	'3080',	'3087',	'3095',	'3113',	'3118',	'3123',	'3131',	'3134',	'3135',	'3149',	'3160',	'3161',	'3162',	'3180',	'3181',	'3193',	'3222',	'3243',	'3255',	'3256',	'3258',	'3259',	'3261',	'3262',	'3263',	'3410')

    //Q=select distinct intCollegeID from M_Hostel_SeatAVL where intYear=2016 and bit_DeletedFlag=0 and bitHostelstatus=0 order by intCollegeID
    //GetNoHostelID();

    //alert(cids);
    var counter = 0;
    for (var k = 0; k < cids.length; k++) {
        if (CollID == cids[k]) {
            counter++;
        }
    }
      //alert(counter);
    if (counter != 0) {
        document.getElementById('hostel').style.display = '';
        document.getElementById('rbtAccomodation1').style.display = 'none';
        document.getElementById('Opt1').style.display = 'none';
        document.getElementById('rbtAccomodation2').style.display = 'none';
        document.getElementById('Opt2').style.display = 'none';
        document.getElementById('rbtAccomodation2').checked = true;
    }
    else {
        document.getElementById('rbtAccomodation1').style.display = '';
        document.getElementById('Opt1').style.display = '';
        document.getElementById('rbtAccomodation2').style.display = '';
        document.getElementById('Opt2').style.display = '';
        document.getElementById('hostel').style.display = 'none';
        document.getElementById('rbtAccomodation2').checked = false;
       
    }
}
//===============new function for file Upload================
function OpenUpload() {
    //     if(!DropDownValidation('ddlBoard','the name of your Examination Board'))
    //            {
    //                return false;
    //            }
    //        if(!blankFieldValidation('txtYOP','Year of passing'))
    //            {
    //                return false;
    //            }
    //        if(!blankFieldValidation('txtBoardRoll','Roll No.'))
    //            {
    //                return false;
    //            }
    window.open('UploadPopUp.aspx', 'CollegeCopy', 'left=400,top=300,width=400,height=350,menubar=0,resizable=0,scrollbars=0,addressbar=0');
}
//=================================length of address field===========
function addLength(ctlAdd) {
    var add = document.getElementById(ctlAdd).value;
    var len = add.length;
    if (parseInt(len) > 350) {
        alert('Please enter house No.,street/village,post office,\n police station name within 350 characters');
        return false;
    }
}
function isAlphabet(ctl) {
    var Alphabet;
    Alphabet = /^[A-Za-z ]+$/;
    var name = document.getElementById(ctl).value;
    if (name.search(Alphabet) == -1) {
        return false;
    }
    return true;
}
function CheckRoll(Object, msg) {debugger;
    var Arr = new Array();
    var k;
    Arr = Object.split(',');

    for (k = 0; k < Arr.length; k++) {
        var str1 = document.getElementById(Arr[k]).value;
        for (var i = 0; i < str1.length; i++) {

            var ch = str1.substring(i, i + 1);
            if ((ch == ' ') || (ch == "`") || (ch == "'") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "-") || (ch == "+") || (ch == "/") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == ",") || (ch == ".") || (ch == '=') || (ch == '"') || (ch == '-')) {
                alert(msg);
                document.getElementById(Arr[k]).value = '';
                document.getElementById(Arr[k]).focus();
                return false;
            }
        }
    }
    return true;
}

function showhidegrade() {
  if (document.getElementById('rbtngpointNo').checked == true) {
      document.getElementById('tblCBSE').style.display = 'none';
        document.getElementById('tblBSE').style.display = '';
        return false;
    }
     if (document.getElementById('rbtngpointYes').checked == true) {
        document.getElementById('tblCBSE').style.display = '';
        document.getElementById('tblBSE').style.display = 'none';
        return false;
    }
}


function showhideCGPA() {
    if (((document.getElementById('ddlBoard').value == 46) && ($('#ddlYOP').val() >= 2010)) || ((document.getElementById('ddlBoard').value == 103) && ($('#ddlYOP').val() >= 2012))) {
        document.getElementById('tblCBSE').style.display = '';
        document.getElementById('tblBSE').style.display = 'none';
        document.getElementById('tblKERALA').style.display = 'none';
    }
    else if (((document.getElementById('ddlBoard').value == 116) && ($('#ddlYOP').val() >= 2010))) {
        document.getElementById('tblCBSE').style.display = 'none';
        document.getElementById('tblBSE').style.display = 'none';
        document.getElementById('tblKERALA').style.display = '';
    }
    else {
        document.getElementById('tblCBSE').style.display = 'none';
        document.getElementById('tblBSE').style.display = '';
        document.getElementById('tblKERALA').style.display = 'none';
    }
    document.getElementById('txtEnglish').value = '';
    document.getElementById('txtMath').value = '';
    document.getElementById('txtScience').value = '';
    document.getElementById('txtSocSci').value = '';
    document.getElementById('txtTotMark').value = '';
    document.getElementById('txtMaxMark').value = '';
    document.getElementById('txtCGPA').value = '';
    document.getElementById('ddlEng').selectedIndex = 0;
    document.getElementById('ddlMath').selectedIndex = 0;
    document.getElementById('ddlSc').selectedIndex = 0;
    document.getElementById('ddlSoSc').selectedIndex = 0;
    document.getElementById('ddlGrade').selectedIndex = 0;

    document.getElementById('ddlTGrade').selectedIndex = 0;
    document.getElementById('ddlKEnglish').selectedIndex = 0;
    document.getElementById('ddlKMath').selectedIndex = 0;
    document.getElementById('ddlKScience').selectedIndex = 0;
    document.getElementById('ddlKSoSc').selectedIndex = 0;
   
    

    //    if(((document.getElementById('ddlBoard').value==103) && (document.getElementById('txtYOP').value>=2012))) {
    //        document.getElementById('MarkType').style.display = '';
    //        document.getElementById('rbtnGPoint').checked = true;
    //        document.getElementById('rbtnGenMark').checked = false;
    //        document.getElementById('hdnMarkType').value="1";
    //        document.getElementById('tblCBSE').style.display = '';
    //        document.getElementById('tblBSE').style.display = 'none';     
    //    }
    //    else {
    //        document.getElementById('MarkType').style.display = 'none';
    //        document.getElementById('tblCBSE').style.display = 'none';
    //        document.getElementById('tblBSE').style.display = '';       
    //    }
}
function IsMatch() {
    var str = document.getElementById("txtCGPA").value;
    var cgpa = parseInt(str);
    if (str.indexOf(".") == -1) {
        str = str + '.00';
    }
    if (str > 10)
        return false;
    var mystring = str;
    if (mystring.match(/^\d+$|^\d+\.\d{2}$/)) {
        return true;
    }
    else if (mystring.match(/^\d+$|^\d+\.\d{1}$/)) {
        return true;
    }
    else {
        return false;
    }
}
//=============Compartment MarkChecking====================
function IsCompartmentMatch(ctl) {
    var str = document.getElementById(ctl).value;
    var cgpa = parseInt(str);
    if (str.indexOf(".") == -1) {
        str = str + '.00';
    }
    if (str > 100)
        return false;
    var mystring = str;
    if (mystring.match(/^\d+$|^\d+\.\d{2}$/)) {
        return true;
    }
    else if (mystring.match(/^\d+$|^\d+\.\d{1}$/)) {
        return true;
    }
    else {
        return false;
    }
}
//=========================TO CHECK COMAPRTMENTAL SUBJECT DETAILS================
function checkCompSubject(ctl) {
    var comp1 = document.getElementById('ddlCompSubject1').options[document.getElementById('ddlCompSubject1').selectedIndex].value.toUpperCase();
    var comp2 = document.getElementById('ddlCompSubject2').options[document.getElementById('ddlCompSubject2').selectedIndex].value.toUpperCase();
    var comp3 = document.getElementById('ddlCompSubject3').options[document.getElementById('ddlCompSubject3').selectedIndex].value.toUpperCase();
    var comp4 = document.getElementById('ddlCompSubject4').options[document.getElementById('ddlCompSubject4').selectedIndex].value.toUpperCase();
    if ((comp1 != '') && (comp2 != '') && (comp3 != '') && (comp4 != '')) {
        if ((comp1 == comp3) || (comp2 == comp3) || (comp1 == comp2) || (comp1 == comp4) || (comp2 == comp4) || (comp3 == comp4)) {
            return false;
        }
        else {
            return true;
        }
    }
    else if ((comp1 != '') && (comp2 != '')) {
        if ((comp1 == comp2)) {
            return false;
        }
        else {
            return true;
        }
    }
    else if ((comp2 != '') && (comp3 != '')) {
        if (comp2 == comp3) {
            return false;
        }
        else {
            return true;
        }
    }
    else if ((comp1 != '') && (comp3 != '')) {
        if (comp1 == comp3) {
            return false;
        }
        else {
            return true;
        }
    }


    else if ((comp1 != '') && (comp4 != '')) {
        if ((comp1 == comp4)) {
            return false;
        }
        else {
            return true;
        }
    }
    else if ((comp2 != '') && (comp4 != '')) {
        if (comp2 == comp4) {
            return false;
        }
        else {
            return true;
        }
    }
    else if ((comp3 != '') && (comp4 != '')) {
        if (comp3 == comp4) {
            return false;
        }
        else {
            return true;
        }
    }
    
    else {
        return true;
    }

}
//=======================FUNCTION TO CHECK REPEATED NUMBERS IN PHONE NOS=========
function RepeatedNumbers(ctl, len) {
    var phone = '';
    phone = document.getElementById(ctl).value;
    if (phone != '') {
        var counter = 0;
        var firstChar = 0;
        for (var i = 0; i < len; i++) {
            var chars = '';
            chars = phone.substring(i, i + 1);
            if (firstChar == chars) {
                counter = parseInt(counter) + 1;
            }
        }
        if (counter >= len) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}
//========FUNCTION TO CHECK COMPARTMENTAL===========
function checkCompartment(ctlddl, ctlpass) {

    var ddl = document.getElementById(ctlddl).options[document.getElementById(ctlddl).selectedIndex].value;
    var passM = parseInt(document.getElementById(ctlpass).value);
    var passMTop = '';
    //   return true;
    if (ddl != "") {
        if (ddl == 'ENGLISH') {

            passMTop = document.getElementById('txtEnglish').value;
            if (passMTop != passM) {
                alert('English Mark should be same with compartmental PassMark');
                return false;
            }
            else {
                return true;
            }
        }
        else if (ddl == 'MATHEMATICS') {
            passMTop = document.getElementById('txtMath').value;
            if (passMTop != passM) {
                alert('Mathematics Mark should be same with compartmental PassMark');
                return false;
            }
            else {
                return true;
            }
        }
        else if (ddl == 'SCIENCE') {
            passMTop = document.getElementById('txtScience').value;
            if (passMTop != passM) {
                alert('Science Mark should be same with compartmental PassMark');
                return false;
            }
            else {
                return true;
            }
        }
        else if (ddl == 'SOCIAL SCIENCE') {
            passMTop = document.getElementById('txtSocSci').value;
            if (passMTop != passM) {
                alert('SocialScience Mark should be same with compartmental PassMark');
                return false;
            }
            else {
                return true;
            }
        }
        else {
            passMTop = document.getElementById('txtTotMark').value;
            if (parseInt(passMTop) < passM) {
                alert('Pass Mark in Compartmental Exam can not be greater than Total Mark Secured');
                return false;
            }
            else {
                return true;
            }
        }
    }
    else {
        return true;
    }
}

//=========================TO CHECK OPTION NUMBER AS NUMERIC===================== 
function NumericValidationOption(strInput, msg, length) {
    //    var strInput=document.getElementById(ctlName).value;
    //    var Object=document.getElementById(ctlName);
    if (strInput.length > 0) {
        if (strInput.length > length) {
            alert("Maximum length of the Option sequence should be " + length + " characters long")
            Object.focus()
            return false;
        }

        for (i = 0; i < strInput.length; i++) {
            if (strInput.charAt(i) < '0' || strInput.charAt(i) > '9') {
                alert(msg)
                return false;
            }
        }
    }
    return true;
}

//====================Clear Comaprtmental Mark=============
function clearComp(ctl1, ctl2, ctl3) {
    if (document.getElementById(ctl1).selectedIndex == 0) {
        document.getElementById(ctl2).value = '';
        document.getElementById(ctl3).value = '';
    }
}
//====================Clear Roll Number Text Boxes=========
function clearRollNumber() {
    $("#txtBoardRoll").val('');
    //$( "#txtBoardRoll" ).focus();
}
//====================Exam Type=============
function ShowGrade() {

    var intboard = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    var intyr = parseInt($('#ddlYOP').val());



    if ((intyr >= 2014) && (intboard == 45)) {
        document.getElementById('tdGrade').style.display = "";
        document.getElementById('tdGradelbl').style.display = "";
        document.getElementById('tdGradeMark').style.display = "";
        document.getElementById('tdGradeMarkddl').style.display = "";
       // document.getElementById('gpoint').style.display = "none";
    }
//    else if (intboard == 45) {
//        document.getElementById('gpoint').style.display = "none";
//    }
    else {
        document.getElementById('tdGrade').style.display = "none";
        document.getElementById('tdGradelbl').style.display = "none";
        document.getElementById('tdGradeMark').style.display = "none";
        document.getElementById('tdGradeMarkddl').style.display = "none";
       // document.getElementById('gpoint').style.display = "";
    }
}

function ExamType() {

//    if (document.getElementById('txtYOP').value == '2017') {
    if ($('#ddlYOP').val() == 2018) {

        document.getElementById('rbtnAnnual').checked = true;
        document.getElementById('rbtnSuppl').checked = false;
        document.getElementById('rbtnSuppl').disabled = true;
    }
    else {

        document.getElementById('rbtnSuppl').disabled = false;
    }
}

//Use of jquery to run in mozila firefox
//====================Fill District =============
function fillDist(ctlDdlVal) {

    $('#ddlCDist option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
  
    $.ajax({   
        type: 'POST',
        url: 'JrCAFForm.aspx/fillDistrict',
        data: "{'intStateId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            
            var lstdtl = eval('(' + response.d + ')');
           
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCDist').append(newOption);
            }
        },
        dataType: 'json'
    });

}
//====================Fill Block =============
function fillBlock(ctlDdlVal) {
    $('#ddlCBlock option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    debugger;
    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/fillBlock',
        data: "{'intDistId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            debugger;
            var lstdtl = eval('(' + response.d + ')');

            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCBlock').append(newOption);

            }
        },
        dataType: 'json'
    });
}
//====================Load District =============    
function loadDistricts() {
    debugger;
    $.ajax({

        type: 'POST',
        url: 'JrCAFForm.aspx/LoadDistrict',
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCollegeDistrict').append(newOption);
            }
        },
        dataType: 'json'
    });

}

//=====================fill College===================
function loadColleges() {

    $('#ddlCollege option').each(function (j, option) { $(option).remove(); });
    var inVal = parseInt(document.getElementById('ddlCollegeDistrict').options[document.getElementById('ddlCollegeDistrict').selectedIndex].value);

    if (document.getElementById('rbtSelfFinance').checked == true) {
        collegeType = 5;
    }
    else if (document.getElementById('rbtOthersFinance').checked == true) {
        collegeType = 0;
    }
    else if (document.getElementById('rbtVocational').checked == true) {
        collegeType = 8;
    }
    else if (document.getElementById('rbtSanskrit').checked == true) {
        collegeType = 7;
    }

    $.ajax({

        type: 'POST',
        url: 'JrCAFForm.aspx/fillDistWiseColg',
        data: "{'intDistId':'" + inVal + "','intCType':'" + collegeType + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCollege').append(newOption);
            }
        },
        dataType: 'json'
    });
}
//====================Fill Stream =============
function fillStream(ctlDdlVal) {
    $('#ddlStream option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
  
    $.ajax({

        type: 'POST',
        url: 'JrCAFForm.aspx/FillStream',
        data: "{'intCollegeID':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlStream').append(newOption);
            }
        },
        dataType: 'json'
    });  
}
//====================Fill Compulsory Subject =============
function fillCompulsory(ctlCollegeVal, ctlStreamVal) {
    $('#ddlCompulsory option').each(function (j, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;

//    if (document.getElementById('rbtVocational').checked) {
//        ctlStreamVal = 16;
//    }

//    alert(Sval);

    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/FillCompulsory',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCompulsory').append(newOption);               
            }
        },
        dataType: 'json'
    });   
}
//====================Fill Elective Subject =============
function fillfElective(ctlCollegeVal, ctlStreamVal) {
    $('#ddlELE1 option').each(function (j, option) { $(option).remove(); });
    $('#ddlELE2 option').each(function (k, option) { $(option).remove(); });
    $('#ddlELE3 option').each(function (l, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({

        type: 'POST',
        url: 'JrCAFForm.aspx/FillElectives',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;

//                if (document.getElementById('rbtSanskrit').checked) {
//                    var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
//                    var newOption1 = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
//                                        
//                    $('#ddlELE1').append(newOption);
//                    $('#ddlELE2').append(newOption1);
//                   
//                }
//                else {
                    var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                    var newOption1 = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                    var newOption2 = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                    $('#ddlELE1').append(newOption);
                    $('#ddlELE2').append(newOption1);

                    $('#ddlELE3').append(newOption2);
               // }               

            }
            setElective12();
        },
        dataType: 'json'

    });

}
//====================Fill Fourth Elective Subject =============
function fillfourthElective(ctlCollegeVal, ctlStreamVal) {
    $('#ddl4thELE1 option').each(function (j, option) { $(option).remove(); });
    $('#ddl4thELE2 option').each(function (k, option) { $(option).remove(); });
    $('#ddl4thELE3 option').each(function (l, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({

        type: 'POST',
        url: 'JrCAFForm.aspx/FillFourthElectives',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                var newOption1 = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                var newOption2 = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddl4thELE1').append(newOption);
                $('#ddl4thELE2').append(newOption1);
                $('#ddl4thELE3').append(newOption2);
            }
        },
        dataType: 'json'
    });
}

//Function For the Edit Case

function fillDist_E(ctlDdlVal) {
    $('#ddlCDist option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    $.ajax({
        type: 'POST',
        url: 'UpdateCAFNew.aspx/fillDistrict',
        data: "{'intStateId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var lstdtl = eval('(' + response.d + ')');
             //alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCDist').append(newOption);
            }
        },
        dataType: 'json'
    });
}
//====================Fill Block =============
function fillBlock_E(ctlDdlVal) {

    $('#ddlCBlock option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    $.ajax({

        type: 'POST',
        url: 'UpdateCAFNew.aspx/fillBlock',
        data: "{'intDistId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCBlock').append(newOption);
            }
        },
        dataType: 'json'
    });
}
//====================Load District =============    
function loadDistricts_E() {

    $.ajax({

        type: 'POST',
        url: 'UpdateCAFNew.aspx/LoadDistrict',
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCollegeDistrict').append(newOption);
            }
        },
        dataType: 'json'
    });

}

//=====================fill College===================
function loadColleges_E() {
    $('#ddlCollege option').each(function (j, option) { $(option).remove(); });
    var inVal = parseInt(document.getElementById('ddlCollegeDistrict').options[document.getElementById('ddlCollegeDistrict').selectedIndex].value);

    if (document.getElementById('rbtSelfFinance').checked == true) {
        collegeType = 5;
    }
    else if (document.getElementById('rbtOthersFinance').checked == true) {
        collegeType = 0;
    }
    $.ajax({

        type: 'POST',
        url: 'UpdateCAFNew.aspx/fillDistWiseColg',
        data: "{'intDistId':'" + inVal + "','intCType':'" + collegeType + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCollege').append(newOption);
            }
        },
        dataType: 'json'
    });
}
//====================Fill Stream =============
function fillStream_E(ctlDdlVal) {
    $('#ddlStream option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    $.ajax({

        type: 'POST',
        url: 'UpdateCAFNew.aspx/FillStream',
        data: "{'intCollegeID':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlStream').append(newOption);
            }
        },
        dataType: 'json'
    });
}
//====================Fill Compulsory Subject =============
function fillCompulsory_E(ctlCollegeVal, ctlStreamVal) {
    $('#ddlCompulsory option').each(function (j, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({

        type: 'POST',
        url: 'UpdateCAFNew.aspx/FillCompulsory',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCompulsory').append(newOption);
            }
        },
        dataType: 'json'
    });
}
//====================Fill Elective Subject =============
function fillfElective_E(ctlCollegeVal, ctlStreamVal) {
    $('#ddlELE1 option').each(function (j, option) { $(option).remove(); });
    $('#ddlELE2 option').each(function (k, option) { $(option).remove(); });
    $('#ddlELE3 option').each(function (l, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({

        type: 'POST',
        url: 'UpdateCAFNew.aspx/FillElectives',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                var newOption1 = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                var newOption2 = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlELE1').append(newOption);
                $('#ddlELE2').append(newOption1);
                $('#ddlELE3').append(newOption2);

            }
            setElective12();
        },
        dataType: 'json'
    });
}
//====================Fill Fourth Elective Subject =============
function fillfourthElective_E(ctlCollegeVal, ctlStreamVal) {
    $('#ddl4thELE1 option').each(function (j, option) { $(option).remove(); });
    $('#ddl4thELE2 option').each(function (k, option) { $(option).remove(); });
    $('#ddl4thELE3 option').each(function (l, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({

        type: 'POST',
        url: 'UpdateCAFNew.aspx/FillFourthElectives',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            // alert(lstdtl);
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                var newOption1 = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                var newOption2 = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddl4thELE1').append(newOption);
                $('#ddl4thELE2').append(newOption1);
                $('#ddl4thELE3').append(newOption2);
            }
        },
        dataType: 'json'
    });
}

//=====================fill BSE Board Mark===================
function BoardMark() {debugger;

    var inVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    //    var yr = parseInt(document.getElementById('txtYOP').value)
    var yr = $('#ddlYOP').val();
    var roll = document.getElementById('txtBoardRoll').value

    if (document.getElementById('rbtnAnnual').checked == true && inVal == 45 && yr >= 2013 && roll != '') {
        debugger;
        $.ajax({
            type: 'POST',
            url: 'JrCAFForm.aspx/fillBSEMark',
            data: "{'vchRollNo':'" + roll + "','intYear':" + yr + "}",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
              
                var lstdtl = eval('(' + response.d + ')');
                console.log(lstdtl);
//                alert(lstdtl.AppName);
                if (lstdtl.AppName != '') {
//                    debugger; alert(lstdtl.AppName);
                    document.getElementById('txtApplName').value = lstdtl.AppName;
                    document.getElementById('txtEnglish').value = lstdtl.ENGLISH;
                    document.getElementById('txtMath').value = lstdtl.MATH;
                    document.getElementById('txtScience').value = lstdtl.SCIENCE;
                    document.getElementById('txtSocSci').value = lstdtl.SOCAILSTUDIES;
                    document.getElementById('txtTotMark').value = lstdtl.TOT;
                    document.getElementById('txtMaxMark').value = lstdtl.MAXTOTAL;

                    if (yr >= 2014) {
                        debugger;
                        $("#ddlGrade option:contains(" + lstdtl.GRADE + ")").attr('selected', 'selected');
                        $("#hdnGrade").val(lstdtl.Grade);
                        $('#txtFatherName').val(lstdtl.FNAME);
                        $('#txtMotherName').val(lstdtl.MNAME);

                        if (parseInt(lstdtl.Sex) > 0) {
                            $('#ddlGender').val(parseInt(lstdtl.Sex));
                        }
                        if (lstdtl.DOB != null) {
                            var str = lstdtl.DOB;
                            var res = str.split('/');
                        }

                        //                        if (parseInt(res[0]) > 0) {
                        $("#ddlDay").val(parseInt(res[0]));
                        $("#ddlMonth").val(parseInt(res[1]));
                        $("#ddlYear").val(parseInt(res[2]));
                        $("#ddlCState").val('1');
                        //  }
                        //                        else {
                        //                            $('#ddlDay').val('0');
                        //                            $('#ddlMonth').val('0');
                        //                            $('#ddlYear').val('0');
                        //                        }
                          fillDist(document.getElementById('ddlCState'));
                        if (parseInt(lstdtl.Category) == 1) {
                            $("#rbtGeneral").attr('checked', true);
                            document.getElementById('GENERAL').style.color = "#CC33FF";
                            document.getElementById('ST').style.color = "#000000";
                            document.getElementById('SC').style.color = "#000000";
                            document.getElementById('OTHER').style.color = "#000000";
                            document.getElementById('OBC').style.color = "#000000";
                        }
                        else if (parseInt(lstdtl.Category) == 2) {
                            $("#rbtSC").attr('checked', true);
                            document.getElementById('GENERAL').style.color = "#000000";
                            document.getElementById('ST').style.color = "#000000";
                            document.getElementById('SC').style.color = "#CC33FF";
                            document.getElementById('OTHER').style.color = "#000000";
                            document.getElementById('OBC').style.color = "#000000";
                        }
                        else if (parseInt(lstdtl.Category) == 3) {
                            $("#rbtST").attr('checked', true);
                            document.getElementById('GENERAL').style.color = "#000000";
                            document.getElementById('ST').style.color = "#CC33FF";
                            document.getElementById('SC').style.color = "#000000";
                            document.getElementById('OTHER').style.color = "#000000";
                            document.getElementById('OBC').style.color = "#000000";
                        }
                        else if (parseInt(lstdtl.Category) == 4) {
                            $("#rbtnOBC").attr('checked', true);
                            document.getElementById('GENERAL').style.color = "#000000";
                            document.getElementById('ST').style.color = "#000000";
                            document.getElementById('SC').style.color = "#000000";
                            document.getElementById('OTHER').style.color = "#000000";
                            document.getElementById('OBC').style.color = "#CC33FF";
                        }
                        else {
                            $("#rbtOther").attr('checked', true);
                            document.getElementById('GENERAL').style.color = "#000000";
                            document.getElementById('ST').style.color = "#000000";
                            document.getElementById('SC').style.color = "#000000";
                            document.getElementById('OTHER').style.color = "#CC33FF";
                            document.getElementById('OBC').style.color = "#000000";
                        }
                        //                        $("#ddlinstDistrict").val(parseInt(lstdtl[0].Dname));   
                        // if (lstdtl[0].StrName != '') {
                        $('#txtschname').val(lstdtl.StrName);
                        $('#ddlinstDistrict').val(lstdtl.Dname);

//                        document.getElementById('txtdist').style.display = "none";
                        document.getElementById('ddlinstDistrict').style.display = "";

                        //}
                    }
                    else {
                        $("#hdnGrade").val(0)
                    }

                    // fillBlock($("#ddlCDist").val());
                    catmsg();
//                     alert(lstdtl.Math);
                    $("#lblEnglishCpy").html(lstdtl.ENGLISH);
                    $("#lblMathCpy").html(lstdtl.MATH);
                    $("#lblScienceCpy").html(lstdtl.SCIENCE);
                    $("#lblSocSciCpy").html(lstdtl.SOCAILSTUDIES);
                    $("#lblTotMarkCpy").html(lstdtl.TOT);
                    $("#lblMaxMarkCpy").html(lstdtl.MAXTOTAL);
                    if (yr >= 2014) {
                        $("#lblGrade").html(lstdtl.GRADE);
                    }
                    else {
                        $("#lblGrade").html(0);
                    }
                    //$("#txtApplName").attr("readonly", "readonly");
                    $("#txtEnglish").attr("readonly", "readonly");
                    $("#txtMath").attr("readonly", "readonly");
                    $("#txtScience").attr("readonly", "readonly");
                    $("#txtSocSci").attr("readonly", "readonly");
                    $("#txtTotMark").attr("readonly", "readonly");
                    $("#txtMaxMark").attr("readonly", "readonly");
                    $("#ddlGrade").attr("disabled", "disabled");


                    document.getElementById('trBSECpy').style.display = "";
                    //document.getElementById('MarkVerification').style.display="";
                    document.getElementById('hdnMarkVerification').value = "1";
                    document.getElementById('trBSEVerCpy').style.display = "";
                    document.getElementById('rbtMarkVerifiedYCpy').checked = true;
                    document.getElementById('rbtMarkVerifiedNCpy').checked = false;

                }
                else {

                    document.getElementById('txtApplName').value = '';
                    document.getElementById('txtFatherName').value = '';
                    document.getElementById('txtMotherName').value = '';
                    document.getElementById('txtEnglish').value = '';
                    document.getElementById('txtMath').value = '';
                    document.getElementById('txtScience').value = '';
                    document.getElementById('txtSocSci').value = '';
                    document.getElementById('txtTotMark').value = '';
                    document.getElementById('txtMaxMark').value = '';
                    document.getElementById('ddlGrade').selectedIndex = 0;
                    document.getElementById('GENERAL').style.color = "#000000";
                    document.getElementById('ST').style.color = "#000000";
                    document.getElementById('SC').style.color = "#000000";
                    document.getElementById('OTHER').style.color = "#000000";
                    document.getElementById('OBC').style.color = "#000000";
                    $("#rbtGeneral").attr('checked', true);
                    document.getElementById('GENERAL').style.color = "#CC33FF";
                    $('#txtschname').val('');
                    $('#ddlGender').val('0');
                    $('#ddlDay').val('0');
                    $('#ddlMonth').val('0');
                    $('#ddlYear').val('0');
                    //$("#txtApplName").attr("readonly", false);
                    $("#txtEnglish").attr("readonly", false);
                    $("#txtMath").attr("readonly", false);
                    $("#txtScience").attr("readonly", false);
                    $("#txtSocSci").attr("readonly", false);
                    $("#txtTotMark").attr("readonly", false);
                    $("#txtMaxMark").attr("readonly", false);
                    $("#ddlGrade").removeAttr("disabled");


                    $("#lblEnglishCpy").html('');
                    $("#lblMathCpy").html('');
                    $("#lblScienceCpy").html('');
                    $("#lblSocSciCpy").html('');
                    $("#lblTotMarkCpy").html('');
                    $("#lblMaxMarkCpy").html('');
                    $("#lblGrade").html('');

                    document.getElementById('trBSECpy').style.display = "none";

                    //                    document.getElementById('txtdist').style.display = "";
                    document.getElementById('ddlinstDistrict').style.display = "none";
                    $('#ddlinstDistrict').val('0');
                    //document.getElementById('MarkVerification').style.display="none";
                    document.getElementById('hdnMarkVerification').value = "0";
                    document.getElementById('trBSEVerCpy').style.display = "none";

//                                        alert('Invalid Roll No. Please check your Board, Year of Passing and Roll No.')
//                                       document.getElementById('txtBoardRoll').value='';
//                                        document.getElementById('txtBoardRoll').focus();

                }
            },
            dataType: 'json'
        });
    }
    else {

        document.getElementById('trBSECpy').style.display = "none";
        document.getElementById('trBSEVerCpy').style.display = "none";
        //document.getElementById('MarkVerification').style.display="none";
        document.getElementById('hdnMarkVerification').value = "0";
        document.getElementById('txtApplName').value = '';
        document.getElementById('txtFatherName').value = '';
        document.getElementById('txtMotherName').value = '';
        document.getElementById('txtEnglish').value = '';
        document.getElementById('txtMath').value = '';
        document.getElementById('txtScience').value = '';
        document.getElementById('txtSocSci').value = '';
        document.getElementById('txtTotMark').value = '';
        document.getElementById('txtMaxMark').value = '';
        document.getElementById('ddlGrade').selectedIndex = 0;

        //$("#txtApplName").attr("readonly", false);
        $("#txtEnglish").attr("readonly", false);
        $("#txtMath").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtSocSci").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);
        $("#ddlGrade").removeAttr("disabled");

        $("#lblEnglishCpy").html('');
        $("#lblMathCpy").html('');
        $("#lblScienceCpy").html('');
        $("#lblSocSciCpy").html('');
        $("#lblTotMarkCpy").html('');
        $("#lblMaxMarkCpy").html('');
        $("#lblGrade").html('');

        $("#rbtGeneral").attr('checked', true);
        $('#txtschname').val('');
        document.getElementById('GENERAL').style.color = "#CC33FF";
        document.getElementById('ST').style.color = "#000000";
        document.getElementById('SC').style.color = "#000000";
        document.getElementById('OTHER').style.color = "#000000";
        document.getElementById('OBC').style.color = "#000000";
        $('#txtschname').val('');
        $('#ddlGender').val('0');
        $('#ddlDay').val('0');
        $('#ddlMonth').val('0');
        $('#ddlYear').val('0');

//        document.getElementById('txtdist').style.display = "";
        document.getElementById('ddlinstDistrict').style.display = "none";
        $('#ddlinstDistrict').val('0');
    }
    //document.getElementById('lblNotify').style.display="none"; 
}
function RollNoCheck() {
    //   var inVal=parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    //   if( document.getElementById('txtYOP').value!='2012' || inVal!=45)
    //   {    

    document.getElementById('txtBoardRoll').value = '';
    //   }

}
function DisableBSEData() {
    var inVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    if ($('#ddlYOP').val() == '2012' && inVal == 45) {
        //$("#txtApplName").attr("readonly", "readonly");
        $("#txtEnglish").attr("readonly", "readonly");
        $("#txtMath").attr("readonly", "readonly");
        $("#txtScience").attr("readonly", "readonly");
        $("#txtSocSci").attr("readonly", "readonly");
        $("#txtTotMark").attr("readonly", "readonly");
        $("#txtMaxMark").attr("readonly", "readonly");
        $("#txtMaxMark").attr("readonly", "readonly");
    }
}
//======================function to set grade================
function setGrade() {
    $("#hdnGrade").val($("#ddlGrade option:selected").text());
}

//=====================fill BSE Board Mark===================
function BoardMark_E() {

    var inVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    var yr = parseInt($('#ddlYOP').val());
    var roll = document.getElementById('txtBoardRoll').value

    if (document.getElementById('rbtnAnnual').checked == true && inVal == 45 && yr >= 2013 && roll != '') {

        $.ajax({

            type: 'POST',
            url: 'UpdateCAFNew.aspx/fillBSEMark',
            data: "{'vchRollNo':'" + roll + "'}",
            contentType: "application/json; charset=utf-8",
            success: function (response) {

                var lstdtl = eval('(' + response.d + ')');

                if (lstdtl.length > 0) {

                    document.getElementById('txtApplName').value = lstdtl[0].AppName;
                    document.getElementById('txtEnglish').value = lstdtl[0].English;
                    document.getElementById('txtMath').value = lstdtl[0].Math;
                    document.getElementById('txtScience').value = lstdtl[0].Science;
                    document.getElementById('txtSocSci').value = lstdtl[0].SocialStudy;
                    document.getElementById('txtTotMark').value = lstdtl[0].Total;
                    document.getElementById('txtMaxMark').value = lstdtl[0].MaxTotal;
                    $("#ddlGrade option:contains(" + lstdtl[0].Grade + ")").attr('selected', 'selected');
                    $("#hdnGrade").val(lstdtl[0].Grade)

                    $("#txtApplName").attr("readonly", "readonly");
                    $("#txtEnglish").attr("readonly", "readonly");
                    $("#txtMath").attr("readonly", "readonly");
                    $("#txtScience").attr("readonly", "readonly");
                    $("#txtSocSci").attr("readonly", "readonly");
                    $("#txtTotMark").attr("readonly", "readonly");
                    $("#txtMaxMark").attr("readonly", "readonly");
                    $('#ddlGrade').attr('disabled', 'disabled');

                }
                else {

                    document.getElementById('txtApplName').value = '';
                    document.getElementById('txtEnglish').value = '';
                    document.getElementById('txtMath').value = '';
                    document.getElementById('txtScience').value = '';
                    document.getElementById('txtSocSci').value = '';
                    document.getElementById('txtTotMark').value = '';
                    document.getElementById('txtMaxMark').value = '';
                    document.getElementById('ddlGrade').selectedIndex = 0;
                    $("#txtApplName").attr("readonly", false);
                    $("#txtEnglish").attr("readonly", false);
                    $("#txtMath").attr("readonly", false);
                    $("#txtScience").attr("readonly", false);
                    $("#txtSocSci").attr("readonly", false);
                    $("#txtTotMark").attr("readonly", false);
                    $("#txtMaxMark").attr("readonly", false);
                    $('#ddlGrade').removeAttr('disabled');

                    //                    alert('Invalid Roll No. Please check your Board, Year of Passing and Roll No.')
                    //                   document.getElementById('txtBoardRoll').value='';
                    //                    document.getElementById('txtBoardRoll').focus();

                }
            },
            dataType: 'json'
        });
    }
    else {
        document.getElementById('txtApplName').value = '';
        document.getElementById('txtEnglish').value = '';
        document.getElementById('txtMath').value = '';
        document.getElementById('txtScience').value = '';
        document.getElementById('txtSocSci').value = '';
        document.getElementById('txtTotMark').value = '';
        document.getElementById('txtMaxMark').value = '';
        document.getElementById('ddlGrade').selectedIndex = 0;

        $("#txtApplName").attr("readonly", false);
        $("#txtEnglish").attr("readonly", false);
        $("#txtMath").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtSocSci").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);
        $('#ddlGrade').removeAttr('disabled');

    }
}
//=================Mark Verification=================
function MarkVerify() {debugger;
    var str,
         element = document.getElementById('hdnMarkVerification');
    if (element != null) {
        str = element.value;
    }
    else {
        str = null;
    }
    if (document.getElementById('hdnMarkVerification').value == '1') {
        document.getElementById('trBSECpy').style.display = "";
        //document.getElementById('MarkVerification').style.display=""; 
        document.getElementById('trBSEVerCpy').style.display = "";

        $("#lblEnglishCpy").html($("#txtEnglish").val());
        $("#lblMathCpy").html($("#txtMath").val());
        $("#lblScienceCpy").html($("#txtScience").val());
        $("#lblSocSciCpy").html($("#txtSocSci").val());
        $("#lblTotMarkCpy").html($("#txtTotMark").val());
        $("#lblMaxMarkCpy").html($("#txtMaxMark").val());
        $("#lblGrade").html($("#ddlGrade option:selected").text());

        //$("#txtApplName").attr("readonly", "readonly");
        $("#txtEnglish").attr("readonly", "readonly");
        $("#txtMath").attr("readonly", "readonly");
        $("#txtScience").attr("readonly", "readonly");
        $("#txtSocSci").attr("readonly", "readonly");
        $("#txtTotMark").attr("readonly", "readonly");
        $("#txtMaxMark").attr("readonly", "readonly");
        $('#ddlGrade').attr('disabled', 'disabled');

        //CheckMarkVerification_Load();
    }
    else {

        $("#lblEnglishCpy").html('');
        $("#lblMathCpy").html('');
        $("#lblScienceCpy").html('');
        $("#lblSocSciCpy").html('');
        $("#lblTotMarkCpy").html('');
        $("#lblMaxMarkCpy").html('');
        $("#lblGrade").html('');

        // document.getElementById('MarkVerification').style.display="none"; 
        document.getElementById('trBSECpy').style.display = "none";
        document.getElementById('trBSEVerCpy').style.display = "none";

    }
}
//================Mark Verification Radio Button==========
function CheckMarkVerificationCpy() {
    if (document.getElementById('rbtMarkVerifiedYCpy').checked == true) {
        //        document.getElementById('rbtMarkVerifiedY').checked =true;
        //        document.getElementById('rbtMarkVerifiedN').checked =false;        
        BoardMark();

    }
    else {
        //        document.getElementById('rbtMarkVerifiedY').checked =false;
        //        document.getElementById('rbtMarkVerifiedN').checked =true;
        document.getElementById('trBSECpy').style.display = "none";
        //$("#txtApplName").attr("readonly", false);
        $("#txtEnglish").attr("readonly", false);
        $("#txtMath").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtSocSci").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);
        $('#ddlGrade').removeAttr('disabled');

        //document.getElementById('txtApplName').value = '';
        document.getElementById('txtEnglish').value = '';
        document.getElementById('txtMath').value = '';
        document.getElementById('txtScience').value = '';
        document.getElementById('txtSocSci').value = '';
        document.getElementById('txtTotMark').value = '';
        document.getElementById('txtMaxMark').value = '';
        document.getElementById('ddlGrade').selectedIndex = 0;
        // document.getElementById('lblNotify').style.display="";  
    }
}
//function CheckMarkVerification() {
//    if(document.getElementById('rbtMarkVerifiedY').checked == true)
//    {
//        document.getElementById('rbtMarkVerifiedYCpy').checked =true;
//        document.getElementById('rbtMarkVerifiedNCpy').checked =false;
//        BoardMark();
//       
//    }
//    else{
//         document.getElementById('rbtMarkVerifiedYCpy').checked =false;
//         document.getElementById('rbtMarkVerifiedNCpy').checked =true;
//         document.getElementById('trBSECpy').style.display="none"; 
//        $("#txtApplName").attr("readonly", false);
//        $("#txtEnglish").attr("readonly", false);
//        $("#txtMath").attr("readonly", false);
//        $("#txtScience").attr("readonly", false);
//        $("#txtSocSci").attr("readonly", false);
//        $("#txtTotMark").attr("readonly", false);
//        $("#txtMaxMark").attr("readonly", false);
//        
//        document.getElementById('txtApplName').value = '';
//        document.getElementById('txtEnglish').value = '';
//        document.getElementById('txtMath').value = '';
//        document.getElementById('txtScience').value = '';
//        document.getElementById('txtSocSci').value = '';
//        document.getElementById('txtTotMark').value = '';
//        document.getElementById('txtMaxMark').value = '';
//        document.getElementById('lblNotify').style.display="";  
//    }
//}
function CheckMarkVerification_Load() {
    if (document.getElementById('rbtMarkVerifiedYCpy').checked == true) {
        //        document.getElementById('rbtMarkVerifiedYCpy').checked =true;
        //        document.getElementById('rbtMarkVerifiedNCpy').checked =false;
        BoardMark();
    }
    else {
        //document.getElementById('rbtMarkVerifiedYCpy').checked =false;
        //document.getElementById('rbtMarkVerifiedNCpy').checked =true;
        document.getElementById('trBSECpy').style.display = "none";
        // $("#txtApplName").attr("readonly", false);
        $("#txtEnglish").attr("readonly", false);
        $("#txtMath").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtSocSci").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);
        $('#ddlGrade').removeAttr('disabled');
        // document.getElementById('lblNotify').style.display="";   
    }
}

function subjectvalidation() {

    var ELE1 = parseInt(document.getElementById('ddlELE1').options[document.getElementById('ddlELE1').selectedIndex].value);
    var ELE2 = parseInt(document.getElementById("ddlELE2").options[document.getElementById("ddlELE2").selectedIndex].value);
    var ELE3 = parseInt(document.getElementById("ddlELE3").options[document.getElementById("ddlELE3").selectedIndex].value);
    var ELE4 = parseInt(document.getElementById("ddl4thELE1").options[document.getElementById("ddl4thELE1").selectedIndex].value);
    var ELE5 = parseInt(document.getElementById("ddl4thELE2").options[document.getElementById("ddl4thELE2").selectedIndex].value);
    var ELE6 = parseInt(document.getElementById("ddl4thELE3").options[document.getElementById("ddl4thELE3").selectedIndex].value);


    if (ELE1 == 33 || ELE1 == 34 || ELE1 == 88 || ELE1 == 32 || ELE1 == 54 || ELE1 == 87 || ELE1 == 77) {
       
        if (ELE2 == 33 || ELE2 == 34 || ELE2 == 88 || ELE2 == 32 || ELE2 == 54 || ELE2 == 87 || ELE2 == 77 ||
            ELE3 == 33 || ELE3 == 34 || ELE3 == 88 || ELE3 == 32 || ELE3 == 54 || ELE3 == 87 || ELE3 == 77 ||
            ELE4 == 33 || ELE4 == 34 || ELE4 == 88 || ELE4 == 32 || ELE4 == 54 || ELE4 == 87 || ELE4 == 77 ||
            ELE5 == 33 || ELE5 == 34 || ELE5 == 88 || ELE5 == 32 || ELE5 == 54 || ELE5 == 87 || ELE5 == 77 ||
            ELE6 == 33 || ELE6 == 34 || ELE6 == 88 || ELE6 == 32 || ELE6 == 54 || ELE6 == 87 || ELE6 == 77) {

            alert('One language can be acceptable !');
            document.getElementById('ddlELE1').selectedIndex = 0; 
            document.getElementById('ddlELE2').selectedIndex = 0; 
            document.getElementById('ddlELE3').selectedIndex = 0;
            document.getElementById('ddl4thELE1').selectedIndex = 0;
            document.getElementById('ddl4thELE2').selectedIndex = 0;
            document.getElementById('ddl4thELE3').selectedIndex = 0;
            
            return false;
        }
    }
    if (ELE2 == 33 || ELE2 == 34 || ELE2 == 88 || ELE2 == 32 || ELE2 == 54 || ELE2 == 87 || ELE2 == 77) {
        
        if (ELE1 == 33 || ELE1 == 34 || ELE1 == 88 || ELE1 == 32 || ELE1 == 54 || ELE1 == 87 || ELE1 == 77 ||
            ELE3 == 33 || ELE3 == 34 || ELE3 == 88 || ELE3 == 32 || ELE3 == 54 || ELE3 == 87 || ELE3 == 77 ||
            ELE4 == 33 || ELE4 == 34 || ELE4 == 88 || ELE4 == 32 || ELE4 == 54 || ELE4 == 87 || ELE4 == 77 ||
            ELE5 == 33 || ELE5 == 34 || ELE5 == 88 || ELE5 == 32 || ELE5 == 54 || ELE5 == 87 || ELE5 == 77 ||
            ELE6 == 33 || ELE6 == 34 || ELE6 == 88 || ELE6 == 32 || ELE6 == 54 || ELE6 == 87 || ELE6 == 77) {

            alert('One language can be acceptable !');
            document.getElementById('ddlELE1').selectedIndex = 0;
            document.getElementById('ddlELE2').selectedIndex = 0;
            document.getElementById('ddlELE3').selectedIndex = 0;
            document.getElementById('ddl4thELE1').selectedIndex = 0;
            document.getElementById('ddl4thELE2').selectedIndex = 0;
            document.getElementById('ddl4thELE3').selectedIndex = 0;
                         
            return false;
        }
    }

    if (ELE3 == 33 || ELE3 == 34 || ELE3 == 88 || ELE3 == 32 || ELE3 == 54 || ELE3 == 87 || ELE3 == 77) {

        if (ELE1 == 33 || ELE1 == 34 || ELE1 == 88 || ELE1 == 32 || ELE1 == 54 || ELE1 == 87 || ELE1 == 77 ||
            ELE2 == 33 || ELE2 == 34 || ELE2 == 88 || ELE2 == 32 || ELE2 == 54 || ELE2 == 87 || ELE2 == 77 ||
            ELE4 == 33 || ELE4 == 34 || ELE4 == 88 || ELE4 == 32 || ELE4 == 54 || ELE4 == 87 || ELE4 == 77 ||
            ELE5 == 33 || ELE5 == 34 || ELE5 == 88 || ELE5 == 32 || ELE5 == 54 || ELE5 == 87 || ELE5 == 77 ||
            ELE6 == 33 || ELE6 == 34 || ELE6 == 88 || ELE6 == 32 || ELE6 == 54 || ELE6 == 87 || ELE6 == 77) {

            alert('One language can be acceptable !');
            document.getElementById('ddlELE1').selectedIndex = 0;
            document.getElementById('ddlELE2').selectedIndex = 0;
            document.getElementById('ddlELE3').selectedIndex = 0;
            document.getElementById('ddl4thELE1').selectedIndex = 0;
            document.getElementById('ddl4thELE2').selectedIndex = 0;
            document.getElementById('ddl4thELE3').selectedIndex = 0;

            return false;
        }
    }
     if (ELE4 == 33 || ELE4 == 34 || ELE4 == 88 || ELE4 == 32 || ELE4 == 54 || ELE4 == 87 || ELE4 == 77) {

         if (ELE1 == 33 || ELE1 == 34 || ELE1 == 88 || ELE1 == 32 || ELE1 == 54 || ELE1 == 87 || ELE1 == 77 ||
            ELE2 == 33 || ELE2 == 34 || ELE2 == 88 || ELE2 == 32 || ELE2 == 54 || ELE2 == 87 || ELE2 == 77 ||
            ELE3 == 33 || ELE3 == 34 || ELE3 == 88 || ELE3 == 32 || ELE3 == 54 || ELE3 == 87 || ELE3 == 77 ||
            ELE5 == 33 || ELE5 == 34 || ELE5 == 88 || ELE5 == 32 || ELE5 == 54 || ELE5 == 87 || ELE5 == 77 ||
            ELE6 == 33 || ELE6 == 34 || ELE6 == 88 || ELE6 == 32 || ELE6 == 54 || ELE6 == 87 || ELE6 == 77) {

             alert('One language can be acceptable !');
             document.getElementById('ddlELE1').selectedIndex = 0;
             document.getElementById('ddlELE2').selectedIndex = 0;
             document.getElementById('ddlELE3').selectedIndex = 0;
             document.getElementById('ddl4thELE1').selectedIndex = 0;
             document.getElementById('ddl4thELE2').selectedIndex = 0;
             document.getElementById('ddl4thELE3').selectedIndex = 0;

             return false;

         }
     }
     if (ELE5 == 33 || ELE5 == 34 || ELE5 == 88 || ELE5 == 32 || ELE5 == 54 || ELE5 == 87 || ELE5 == 77) {

         if (ELE1 == 33 || ELE1 == 34 || ELE1 == 88 || ELE1 == 32 || ELE1 == 54 || ELE1 == 87 || ELE1 == 77 ||
            ELE2 == 33 || ELE2 == 34 || ELE2 == 88 || ELE2 == 32 || ELE2 == 54 || ELE2 == 87 || ELE2 == 77 ||
            ELE3 == 33 || ELE3 == 34 || ELE3 == 88 || ELE3 == 32 || ELE3 == 54 || ELE3 == 87 || ELE3 == 77 ||
            ELE4 == 33 || ELE4 == 34 || ELE4 == 88 || ELE4 == 32 || ELE4 == 54 || ELE4 == 87 || ELE4 == 77 ||
            ELE6 == 33 || ELE6 == 34 || ELE6 == 88 || ELE6 == 32 || ELE6 == 54 || ELE6 == 87 || ELE6 == 77) {
   
            alert('One language can be acceptable !');
            document.getElementById('ddlELE1').selectedIndex = 0;
            document.getElementById('ddlELE2').selectedIndex = 0;
            document.getElementById('ddlELE3').selectedIndex = 0;
            document.getElementById('ddl4thELE1').selectedIndex = 0;
            document.getElementById('ddl4thELE2').selectedIndex = 0;
            document.getElementById('ddl4thELE3').selectedIndex = 0;
            return false;
        }
    }
     if (ELE6 == 33 || ELE6 == 34 || ELE6 == 88 || ELE6 == 32 || ELE6 == 54 || ELE6 == 87 || ELE6 == 77) {

         if (ELE1 == 33 || ELE1 == 34 || ELE1 == 88 || ELE1 == 32 || ELE1 == 54 || ELE1 == 87 || ELE1 == 77 ||
            ELE2 == 33 || ELE2 == 34 || ELE2 == 88 || ELE2 == 32 || ELE2 == 54 || ELE2 == 87 || ELE2 == 77 ||
            ELE3 == 33 || ELE3 == 34 || ELE3 == 88 || ELE3 == 32 || ELE3 == 54 || ELE3 == 87 || ELE3 == 77 ||
            ELE4 == 33 || ELE4 == 34 || ELE4 == 88 || ELE4 == 32 || ELE4 == 54 || ELE4 == 87 || ELE4 == 77 ||
            ELE5 == 33 || ELE5 == 34 || ELE5 == 88 || ELE5 == 32 || ELE5 == 54 || ELE5 == 87 || ELE5 == 77) {
   
            alert('One language can be acceptable !');
            document.getElementById('ddlELE1').selectedIndex = 0;
            document.getElementById('ddlELE2').selectedIndex = 0;
            document.getElementById('ddlELE3').selectedIndex = 0;
            document.getElementById('ddl4thELE1').selectedIndex = 0;
            document.getElementById('ddl4thELE2').selectedIndex = 0;
            document.getElementById('ddl4thELE3').selectedIndex = 0;     
            return false;
        }
    }

    if ((ELE1 == 76 && ELE2 == 62) || (ELE1 == 76 && ELE2 == 63)||(ELE1 == 62 && ELE2 == 76) || (ELE1 == 62 && ELE2 == 63) || (ELE1 == 63 && ELE2 == 76) || (ELE1 == 63 && ELE2 == 62)||
        (ELE1 == 76 && ELE3 == 62) || (ELE1 == 76 && ELE3 == 63)||(ELE1 == 62 && ELE3 == 76) || (ELE1 == 62 && ELE3== 63)  || (ELE1 == 63 && ELE3 == 76) || (ELE1 == 63 && ELE3 == 62)||
        (ELE2 == 76 && ELE3 == 62) || (ELE2 == 76 && ELE3 == 63)||(ELE2 == 62 && ELE3 == 76) || (ELE2 == 62 && ELE3== 63)  || (ELE2 == 63 && ELE3 == 76) || (ELE2 == 63 && ELE3 == 62)||
        (ELE1 == 76 && ELE4 == 62) || (ELE1 == 76 && ELE4 == 63)||(ELE1 == 62 && ELE4 == 76) || (ELE1 == 62 && ELE4 == 63) || (ELE1 == 63 && ELE4 == 76) || (ELE1 == 63 && ELE4 == 62)||
        (ELE2 == 76 && ELE4 == 62) || (ELE2 == 76 && ELE4 == 63)||(ELE2 == 62 && ELE4 == 76) || (ELE2 == 62 && ELE4== 63)  || (ELE2 == 63 && ELE4 == 76) || (ELE2 == 63 && ELE4 == 62)||
        (ELE3 == 76 && ELE4 == 62) || (ELE3 == 76 && ELE4 == 63)||(ELE3 == 62 && ELE4 == 76) || (ELE3 == 62 && ELE4== 63)  || (ELE3 == 63 && ELE4 == 76) || (ELE3 == 63 && ELE4 == 62)||
        (ELE1 == 76 && ELE5 == 62) || (ELE1 == 76 && ELE5 == 63)||(ELE1 == 62 && ELE5 == 76) || (ELE1 == 62 && ELE5 == 63) || (ELE1 == 63 && ELE5 == 76) || (ELE1 == 63 && ELE5 == 62)||
        (ELE2 == 76 && ELE5 == 62) || (ELE2 == 76 && ELE5 == 63)||(ELE2 == 62 && ELE5 == 76) || (ELE2 == 62 && ELE5== 63)  || (ELE2 == 63 && ELE5 == 76) || (ELE2 == 63 && ELE5 == 62)||
        (ELE3 == 76 && ELE5 == 62) || (ELE3 == 76 && ELE5 == 63)||(ELE3 == 62 && ELE5 == 76) || (ELE3 == 62 && ELE5== 63)  || (ELE3 == 63 && ELE5 == 76) || (ELE3 == 63 && ELE5 == 62)||
        (ELE4 == 76 && ELE5 == 62) || (ELE4 == 76 && ELE5 == 63)||(ELE4 == 62 && ELE5 == 76) || (ELE4 == 62 && ELE5== 63)  || (ELE4 == 63 && ELE5 == 76) || (ELE4 == 63 && ELE5 == 62)||
        (ELE1 == 76 && ELE6 == 62) || (ELE1 == 76 && ELE6 == 63)||(ELE1 == 62 && ELE6 == 76) || (ELE1 == 62 && ELE6 == 63) || (ELE1 == 63 && ELE6 == 76) || (ELE1 == 63 && ELE6 == 62)||
        (ELE2 == 76 && ELE6 == 62) || (ELE2 == 76 && ELE6 == 63)||(ELE2 == 62 && ELE6 == 76) || (ELE2 == 62 && ELE6 == 63) || (ELE2 == 63 && ELE6 == 76) || (ELE2 == 63 && ELE6 == 62)||
        (ELE3 == 76 && ELE6 == 62) || (ELE3 == 76 && ELE6 == 63)||(ELE3 == 62 && ELE6 == 76) || (ELE3 == 62 && ELE6== 63)  || (ELE3 == 63 && ELE6 == 76) || (ELE3 == 63 && ELE6 == 62)||
        (ELE4 == 76 && ELE6 == 62) || (ELE4 == 76 && ELE6 == 63)||(ELE4 == 62 && ELE6 == 76) || (ELE4 == 62 && ELE6== 63)  || (ELE4 == 63 && ELE6 == 76) || (ELE4 == 63 && ELE6 == 62)||
        (ELE5 == 76 && ELE6 == 62) || (ELE5 == 76 && ELE6 == 63)||(ELE5 == 62 && ELE6 == 76) || (ELE5 == 62 && ELE6== 63)  || (ELE5 == 63 && ELE6 == 76) || (ELE5 == 63 && ELE6 == 62)
        )
    {
        alert('Following combination are not allowed !\n1. Economics/IRPM\n2. Logic/Geography\n3. Mathematics/Home Science\n4. Education/Psychology/Indian Music\n5. Anthropology/Sociology/Statistics\n6. Oriya/Sanskrit/Percian/Hindi/Urdu/Bengali/Telugu');
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        document.getElementById('ddlELE3').selectedIndex = 0;
        document.getElementById('ddl4thELE1').selectedIndex = 0;
        document.getElementById('ddl4thELE2').selectedIndex = 0;
        document.getElementById('ddl4thELE3').selectedIndex = 0;

        return false;
    }

       if ((ELE1 == 76 && ELE2 == 76) || (ELE1 == 76 && ELE3 == 76) || (ELE1 == 76 && ELE4 == 76) || (ELE1 == 76 && ELE5 == 76) || (ELE1 == 76 && ELE6 == 76)||
           (ELE2 == 76 && ELE3 == 76) || (ELE2 == 76 && ELE4 == 76) || (ELE2 == 76 && ELE5 == 76) || (ELE2 == 76 && ELE6 == 76) ||          
           (ELE3 == 76 && ELE4 == 76) || (ELE3 == 76 && ELE5 == 76) || (ELE3 == 76 && ELE6 == 76) ||
           (ELE4 == 76 && ELE5 == 76) || (ELE4 == 76 && ELE5 == 76) ||
           (ELE5 == 76 && ELE6 == 76) ||

           (ELE1 == 62 && ELE2 == 62) || (ELE1 == 62 && ELE3 == 62) || (ELE1 == 62 && ELE4 == 62) || (ELE1 == 62 && ELE5 == 62) || (ELE1 == 62 && ELE6 == 62) ||
           (ELE2 == 62 && ELE3 == 62) || (ELE2 == 62 && ELE4 == 62) || (ELE2 == 62 && ELE5 == 62) || (ELE2 == 62 && ELE6 == 62) ||
           (ELE3 == 62 && ELE4 == 62) || (ELE3 == 62 && ELE5 == 62) || (ELE3 == 62 && ELE6 == 62) ||           
           (ELE4 == 62 && ELE5 == 62) || (ELE4 == 62 && ELE6 == 62)||
           (ELE5 == 62 && ELE6 == 62) ||

           (ELE1 == 63 && ELE2 == 63) || (ELE1 == 63 && ELE3 == 63) || (ELE1 == 63 && ELE4 == 63) || (ELE1 == 63 && ELE5 == 63) || (ELE1 == 63 && ELE6 == 63) ||
           (ELE2 == 63 && ELE3 == 63) || (ELE2 == 63 && ELE4 == 63) || (ELE2 == 63 && ELE5 == 63) || (ELE2 == 63 && ELE6 == 63) ||          
           (ELE3 == 63 && ELE4 == 63) || (ELE3 == 63 && ELE5 == 63) || (ELE3 == 63 && ELE6 == 63) ||
           (ELE4 == 63 && ELE5 == 63) || (ELE4 == 63 && ELE6 == 63)||
           (ELE5 == 63 && ELE6 == 63)
           
           ){
        alert('Same subject can not opted more than once !')
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        document.getElementById('ddlELE3').selectedIndex = 0;
        document.getElementById('ddl4thELE1').selectedIndex = 0;
        document.getElementById('ddl4thELE2').selectedIndex = 0;
        document.getElementById('ddl4thELE3').selectedIndex = 0;

        return false;
    }
    if ((ELE1 == 49 && ELE2 == 61) || (ELE1 == 49 && ELE2 == 70) || (ELE1 == 61 && ELE2 == 49) || (ELE1 == 61 && ELE2 == 70) || (ELE1 == 70 && ELE2 == 49) || (ELE1 == 70 && ELE2 == 61) ||
        (ELE1 == 49 && ELE3 == 61) || (ELE1 == 49 && ELE3 == 70) || (ELE1 == 61 && ELE3 == 49) || (ELE1 == 61 && ELE3 == 70) || (ELE1 == 70 && ELE3 == 49) || (ELE1 == 70 && ELE3 == 61) ||
        (ELE2 == 49 && ELE3 == 61) || (ELE2 == 49 && ELE3 == 70) || (ELE2 == 61 && ELE3 == 49) || (ELE2 == 61 && ELE3 == 70) || (ELE2 == 70 && ELE3 == 49) || (ELE2 == 70 && ELE3 == 61) ||
        (ELE1 == 49 && ELE4 == 61) || (ELE1 == 49 && ELE4 == 70) || (ELE1 == 61 && ELE4 == 49) || (ELE1 == 61 && ELE4 == 70) || (ELE1 == 70 && ELE4 == 49) || (ELE1 == 70 && ELE4 == 61) ||
        (ELE2 == 49 && ELE4 == 61) || (ELE2 == 49 && ELE4 == 70) || (ELE2 == 61 && ELE4 == 49) || (ELE2 == 61 && ELE4 == 70) || (ELE2 == 70 && ELE4 == 49) || (ELE2 == 70 && ELE4 == 61) ||
        (ELE3 == 49 && ELE4 == 61) || (ELE3 == 49 && ELE4 == 70) || (ELE3 == 61 && ELE4 == 49) || (ELE3 == 61 && ELE4 == 70) || (ELE3 == 70 && ELE4 == 49) || (ELE3 == 70 && ELE4 == 61) ||
        (ELE1 == 49 && ELE5 == 61) || (ELE1 == 49 && ELE5 == 70) || (ELE1 == 61 && ELE5 == 49) || (ELE1 == 61 && ELE5 == 70) || (ELE1 == 70 && ELE5 == 49) || (ELE1 == 70 && ELE5 == 61) ||
        (ELE2 == 49 && ELE5 == 61) || (ELE2 == 49 && ELE5 == 70) || (ELE2 == 61 && ELE5 == 49) || (ELE2 == 61 && ELE5 == 70) || (ELE2 == 70 && ELE5 == 49) || (ELE2 == 70 && ELE5 == 61) ||
        (ELE3 == 49 && ELE5 == 61) || (ELE3 == 49 && ELE5 == 70) || (ELE3 == 61 && ELE5 == 49) || (ELE3 == 61 && ELE5 == 70) || (ELE3 == 70 && ELE5 == 49) || (ELE3 == 70 && ELE5 == 61) ||
        (ELE4 == 49 && ELE5 == 61) || (ELE4 == 49 && ELE5 == 70) || (ELE4 == 61 && ELE5 == 49) || (ELE4 == 61 && ELE5 == 70) || (ELE4 == 70 && ELE5 == 49) || (ELE4 == 70 && ELE5 == 61) ||
        (ELE1 == 49 && ELE6 == 61) || (ELE1 == 49 && ELE6 == 70) || (ELE1 == 61 && ELE6 == 49) || (ELE1 == 61 && ELE6 == 70) || (ELE1 == 70 && ELE6 == 49) || (ELE1 == 70 && ELE6 == 61) ||
        (ELE2 == 49 && ELE6 == 61) || (ELE2 == 49 && ELE6 == 70) || (ELE2 == 61 && ELE6 == 49) || (ELE2 == 61 && ELE6 == 70) || (ELE2 == 70 && ELE6 == 49) || (ELE2 == 70 && ELE6 == 61) ||
        (ELE3 == 49 && ELE6 == 61) || (ELE3 == 49 && ELE6 == 70) || (ELE3 == 61 && ELE6 == 49) || (ELE3 == 61 && ELE6 == 70) || (ELE3 == 70 && ELE6 == 49) || (ELE3 == 70 && ELE6 == 61) ||
        (ELE4 == 49 && ELE6 == 61) || (ELE4 == 49 && ELE6 == 70) || (ELE4 == 61 && ELE6 == 49) || (ELE4 == 61 && ELE6 == 70) || (ELE4 == 70 && ELE6 == 49) || (ELE4 == 70 && ELE6 == 61) ||
        (ELE5 == 49 && ELE6 == 61) || (ELE5 == 49 && ELE6 == 70) || (ELE5 == 61 && ELE6 == 49) || (ELE5 == 61 && ELE6 == 70) || (ELE5 == 70 && ELE6 == 49) || (ELE5 == 70 && ELE6 == 61)
        ) {
        alert('Following combination are not allowed !\n1. Economics/IRPM\n2. Logic/Geography\n3. Mathematics/Home Science\n4. Education/Psychology/Indian Music\n5. Anthropology/Sociology/Statistics\n6. Oriya/Sanskrit/Percian/Hindi/Urdu/Bengali/Telugu');
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        document.getElementById('ddlELE3').selectedIndex = 0;
        document.getElementById('ddl4thELE1').selectedIndex = 0;
        document.getElementById('ddl4thELE2').selectedIndex = 0;
        document.getElementById('ddl4thELE3').selectedIndex = 0;

        return false;
    }

    if ((ELE1 == 49 && ELE2 == 49) || (ELE1 == 49 && ELE3 == 49) || (ELE1 == 49 && ELE4 == 49) || (ELE1 == 49 && ELE5 == 49) || (ELE1 == 49 && ELE6 == 49) ||
           (ELE2 == 49 && ELE3 == 49) || (ELE2 == 49 && ELE4 == 49) || (ELE2 == 49 && ELE5 == 49) || (ELE2 == 49 && ELE6 == 49) ||
           (ELE3 == 49 && ELE4 == 49) || (ELE3 == 49 && ELE5 == 49) || (ELE3 == 49 && ELE6 == 49) ||
           (ELE4 == 49 && ELE5 == 49) || (ELE4 == 49 && ELE6 == 49) ||
           (ELE5 == 49 && ELE6 == 49) ||

           (ELE1 == 61 && ELE2 == 61) || (ELE1 == 61 && ELE3 == 61) || (ELE1 == 61 && ELE4 == 61) || (ELE1 == 61 && ELE5 == 61) || (ELE1 == 61 && ELE6 == 61) ||
           (ELE2 == 61 && ELE3 == 61) || (ELE2 == 61 && ELE4 == 61) || (ELE2 == 61 && ELE5 == 61) || (ELE2 == 61 && ELE6 == 61) ||
           (ELE3 == 61 && ELE4 == 61) || (ELE3 == 61 && ELE5 == 61) || (ELE3 == 61 && ELE6 == 61) ||
           (ELE4 == 61 && ELE5 == 61) || (ELE4 == 61 && ELE6 == 61) ||
           (ELE5 == 61 && ELE6 == 61) ||

           (ELE1 == 70 && ELE2 == 70) || (ELE1 == 70 && ELE3 == 70) || (ELE1 == 70 && ELE4 == 70) || (ELE1 == 70 && ELE5 == 70) || (ELE1 == 70 && ELE6 == 70) ||
           (ELE2 == 70 && ELE3 == 70) || (ELE2 == 70 && ELE4 == 70) || (ELE2 == 70 && ELE5 == 70) || (ELE2 == 70 && ELE6 == 70) ||
           (ELE3 == 70 && ELE4 == 70) || (ELE3 == 70 && ELE5 == 70) || (ELE3 == 70 && ELE6 == 70) ||
           (ELE4 == 70 && ELE5 == 70) || (ELE5 == 70 && ELE6 == 70) ||
            (ELE5 == 70 && ELE6 == 70) 

           ) {
        alert('Same subject can not opted more than once !')
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        document.getElementById('ddlELE3').selectedIndex = 0;
        document.getElementById('ddl4thELE1').selectedIndex = 0;
        document.getElementById('ddl4thELE2').selectedIndex = 0;
        document.getElementById('ddl4thELE3').selectedIndex = 0;

        return false;
    }
    if ((ELE1 == 44 && ELE2 == 68) || (ELE1 == 68 && ELE2 == 44) ||
        (ELE1 == 44 && ELE3 == 68) || (ELE1 == 68 && ELE3 == 44) ||
        (ELE2 == 44 && ELE3 == 68) || (ELE2 == 68 && ELE3 == 44) ||
        (ELE1 == 44 && ELE4 == 68) || (ELE1 == 68 && ELE4 == 44) ||
        (ELE2 == 44 && ELE4 == 68) || (ELE2 == 68 && ELE4 == 44) ||
        (ELE3 == 44 && ELE4 == 68) || (ELE3 == 68 && ELE4 == 44)||
        (ELE1 == 44 && ELE5 == 68) || (ELE1 == 68 && ELE5 == 44) ||
        (ELE2 == 44 && ELE5 == 68) || (ELE2 == 68 && ELE5 == 44) ||
        (ELE3 == 44 && ELE5 == 68) || (ELE3 == 68 && ELE5 == 44) ||
        (ELE4 == 44 && ELE5 == 68) || (ELE4 == 68 && ELE5 == 44) ||
        (ELE1 == 44 && ELE6 == 68) || (ELE1 == 68 && ELE6 == 44) ||
        (ELE2 == 44 && ELE6 == 68) || (ELE2 == 68 && ELE6 == 44) ||
        (ELE3 == 44 && ELE6 == 68) || (ELE3 == 68 && ELE6 == 44) ||
        (ELE4 == 44 && ELE6 == 68) || (ELE4 == 68 && ELE6 == 44) ||
        (ELE5 == 44 && ELE6 == 68) || (ELE5 == 68 && ELE6 == 44)
        ) {
        alert('Following combination are not allowed !\n1. Economics/IRPM\n2. Logic/Geography\n3. Mathematics/Home Science\n4. Education/Psychology/Indian Music\n5. Anthropology/Sociology/Statistics\n6. Oriya/Sanskrit/Percian/Hindi/Urdu/Bengali/Telugu');
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        document.getElementById('ddlELE3').selectedIndex = 0;
        document.getElementById('ddl4thELE1').selectedIndex = 0;
        document.getElementById('ddl4thELE2').selectedIndex = 0;
        document.getElementById('ddl4thELE3').selectedIndex = 0;

        return false;
    }
    if ((ELE1 == 44 && ELE2 == 44) || (ELE1 == 44 && ELE3 == 44) || (ELE1 == 44 && ELE4 == 44) || (ELE1 == 44 && ELE5 == 44) || (ELE1 == 44 && ELE6 == 44) ||
           (ELE2 == 44 && ELE3 == 44) || (ELE2 == 44 && ELE4 == 44) || (ELE2 == 44 && ELE5 == 44) || (ELE2 == 44 && ELE6 == 44) ||
           (ELE3 == 44 && ELE4 == 44) || (ELE3 == 44 && ELE5 == 44) || (ELE3 == 44 && ELE6 == 44) ||
           (ELE4 == 44 && ELE5 == 44) || (ELE4 == 44 && ELE6 == 44) ||
            (ELE5 == 44 && ELE6 == 44) ||

           (ELE1 == 68 && ELE2 == 68) || (ELE1 == 68 && ELE3 == 68) || (ELE1 == 68 && ELE4 == 68) || (ELE1 == 68 && ELE5 == 68) || (ELE1 == 68 && ELE6 == 68) ||
           (ELE2 == 68 && ELE3 == 68) || (ELE2 == 68 && ELE4 == 68) || (ELE2 == 68 && ELE5 == 68) || (ELE2 == 68 && ELE6 == 68) ||
           (ELE3 == 68 && ELE4 == 68) || (ELE3 == 68 && ELE5 == 68) || (ELE3 == 68 && ELE6 == 68) ||
           (ELE4 == 68 && ELE5 == 68) || (ELE4 == 68 && ELE6 == 68) ||
          (ELE5 == 68 && ELE6 == 68) 
           ) {
        alert('Same subject can not opted more than once !')
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        document.getElementById('ddlELE3').selectedIndex = 0;
        document.getElementById('ddl4thELE1').selectedIndex = 0;
        document.getElementById('ddl4thELE2').selectedIndex = 0;
        document.getElementById('ddl4thELE3').selectedIndex = 0;

        return false;
    }
    if ((ELE1 == 31 && ELE2 == 36) || (ELE1 == 36 && ELE2 == 31) ||
        (ELE1 == 31 && ELE3 == 36) || (ELE1 == 36 && ELE3 == 31) ||
        (ELE2 == 31 && ELE3 == 36) || (ELE2 == 36 && ELE3 == 31) ||
        (ELE1 == 31 && ELE4 == 36) || (ELE1 == 36 && ELE4 == 31) ||
        (ELE2 == 31 && ELE4 == 36) || (ELE2 == 36 && ELE4 == 31) ||
        (ELE3 == 31 && ELE4 == 36) || (ELE3 == 36 && ELE4 == 31) ||
        (ELE1 == 31 && ELE5 == 36) || (ELE1 == 36 && ELE5 == 31) ||
        (ELE2 == 31 && ELE5 == 36) || (ELE2 == 36 && ELE5 == 31) ||
        (ELE3 == 31 && ELE5 == 36) || (ELE3 == 36 && ELE5 == 31) ||
        (ELE4 == 31 && ELE5 == 36) || (ELE4 == 36 && ELE5 == 31) ||
        (ELE1 == 31 && ELE6 == 36) || (ELE1 == 36 && ELE6 == 31) ||
        (ELE2 == 31 && ELE6 == 36) || (ELE2 == 36 && ELE6 == 31) ||
        (ELE3 == 31 && ELE6 == 36) || (ELE3 == 36 && ELE6 == 31) ||
        (ELE4 == 31 && ELE6 == 36) || (ELE4 == 36 && ELE6 == 31) ||
        (ELE5 == 31 && ELE6 == 36) || (ELE5 == 36 && ELE6 == 31)
        ) {
        alert('Following combination are not allowed !\n1. Economics/IRPM\n2. Logic/Geography\n3. Mathematics/Home Science\n4. Education/Psychology/Indian Music\n5. Anthropology/Sociology/Statistics\n6. Oriya/Sanskrit/Percian/Hindi/Urdu/Bengali/Telugu');
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        document.getElementById('ddlELE3').selectedIndex = 0;
        document.getElementById('ddl4thELE1').selectedIndex = 0;
        document.getElementById('ddl4thELE2').selectedIndex = 0;
        document.getElementById('ddl4thELE3').selectedIndex = 0;

        return false;
    }
    if ((ELE1 == 31 && ELE2 == 31) || (ELE1 == 31 && ELE3 == 31) || (ELE1 == 31 && ELE4 == 31) || (ELE1 == 31 && ELE5 == 31) || (ELE1 == 31 && ELE6 == 31) ||
           (ELE2 == 31 && ELE3 == 31) || (ELE2 == 31 && ELE4 == 31) || (ELE2 == 31 && ELE5 == 31) || (ELE2 == 31 && ELE6 == 31) ||
           (ELE3 == 31 && ELE4 == 31) || (ELE3 == 31 && ELE5 == 31) || (ELE3 == 31 && ELE6 == 31) ||
           (ELE4 == 31 && ELE5 == 31) || (ELE4 == 31 && ELE6 == 31) ||
           (ELE5 == 31 && ELE6 == 31) ||

           (ELE1 == 36 && ELE2 == 36) || (ELE1 == 36 && ELE3 == 36) || (ELE1 == 36 && ELE4 == 36) || (ELE1 == 36 && ELE5 == 36) || (ELE1 == 36 && ELE6 == 36) ||
           (ELE2 == 36 && ELE3 == 36) || (ELE2 == 36 && ELE4 == 36) || (ELE2 == 36 && ELE5 == 36) || (ELE2 == 36 && ELE6 == 36) ||
           (ELE3 == 36 && ELE4 == 36) || (ELE3 == 36 && ELE5 == 36) || (ELE3 == 36 && ELE6 == 36) ||
           (ELE4 == 36 && ELE5 == 36) || (ELE4 == 36 && ELE6 == 36)||
           (ELE5 == 36 && ELE6 == 36) 
           ) {
        alert('Same subject can not opted more than once !')
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        document.getElementById('ddlELE3').selectedIndex = 0;
        document.getElementById('ddl4thELE1').selectedIndex = 0;
        document.getElementById('ddl4thELE2').selectedIndex = 0;
        document.getElementById('ddl4thELE3').selectedIndex = 0;

        return false;
    }
    if ((ELE1 == 43 && ELE2 == 84) || (ELE1 == 84 && ELE2 == 43) ||
        (ELE1 == 43 && ELE3 == 84) || (ELE1 == 84 && ELE3 == 43) ||
        (ELE2 == 43 && ELE3 == 84) || (ELE2 == 84 && ELE3 == 43) ||
        (ELE1 == 43 && ELE4 == 84) || (ELE1 == 84 && ELE4 == 43) ||
        (ELE2 == 43 && ELE4 == 84) || (ELE2 == 84 && ELE4 == 43) ||
        (ELE3 == 43 && ELE4 == 84) || (ELE3 == 84 && ELE4 == 43) ||
        (ELE1 == 43 && ELE5 == 84) || (ELE1 == 84 && ELE5 == 43) ||
        (ELE2 == 43 && ELE5 == 84) || (ELE2 == 84 && ELE5 == 43) ||
        (ELE3 == 43 && ELE5 == 84) || (ELE3 == 84 && ELE5 == 43) ||
        (ELE4 == 43 && ELE5 == 84) || (ELE4 == 84 && ELE5 == 43) ||
        (ELE1 == 43 && ELE6 == 84) || (ELE1 == 84 && ELE6 == 43) ||
        (ELE2 == 43 && ELE6 == 84) || (ELE2 == 84 && ELE6 == 43) ||
        (ELE3 == 43 && ELE6 == 84) || (ELE3 == 84 && ELE6 == 43) ||
        (ELE4 == 43 && ELE6 == 84) || (ELE4 == 84 && ELE6 == 43) ||
        (ELE5 == 43 && ELE6 == 84) || (ELE5 == 84 && ELE6 == 43)
        ) {
        alert('Following combination are not allowed !\n1. Economics/IRPM\n2. Logic/Geography\n3. Mathematics/Home Science\n4. Education/Psychology/Indian Music\n5. Anthropology/Sociology/Statistics\n6. Oriya/Sanskrit/Percian/Hindi/Urdu/Bengali/Telugu');
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        document.getElementById('ddlELE3').selectedIndex = 0;
        document.getElementById('ddl4thELE1').selectedIndex = 0;
        document.getElementById('ddl4thELE2').selectedIndex = 0;
        document.getElementById('ddl4thELE3').selectedIndex = 0;

        return false;
    }
    if ((ELE1 == 43 && ELE2 == 43) || (ELE1 == 43 && ELE3 == 43) || (ELE1 == 43 && ELE4 == 43) || (ELE1 == 43 && ELE5 == 43) || (ELE1 == 43 && ELE6 == 43) ||
           (ELE2 == 43 && ELE3 == 43) || (ELE2 == 43 && ELE4 == 43) || (ELE2 == 43 && ELE5 == 43) || (ELE2 == 43 && ELE6 == 43) ||
           (ELE3 == 43 && ELE4 == 43) || (ELE3 == 43 && ELE5 == 43) || (ELE3 == 43 && ELE6 == 43) ||
           (ELE4 == 43 && ELE5 == 43) || (ELE4 == 43 && ELE6 == 43) ||
           (ELE5 == 43 && ELE6 == 43) ||

           (ELE1 == 84 && ELE2 == 84) || (ELE1 == 84 && ELE3 == 84) || (ELE1 == 84 && ELE4 == 84) || (ELE1 == 84 && ELE5 == 84) || (ELE1 == 84 && ELE6 == 84) ||
           (ELE2 == 84 && ELE3 == 84) || (ELE2 == 84 && ELE4 == 84) || (ELE2 == 84 && ELE5 == 84) || (ELE2 == 84 && ELE6 == 84) ||
           (ELE3 == 84 && ELE4 == 84) || (ELE3 == 84 && ELE5 == 84) || (ELE3 == 84 && ELE6 == 84) ||
           (ELE4 == 84 && ELE5 == 84) || (ELE4 == 84 && ELE6 == 84) ||
           (ELE5 == 84 && ELE6 == 84)
           ) {
        alert('Same subject can not opted more than once !')
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        document.getElementById('ddlELE3').selectedIndex = 0;
        document.getElementById('ddl4thELE1').selectedIndex = 0;
        document.getElementById('ddl4thELE2').selectedIndex = 0;
        document.getElementById('ddl4thELE3').selectedIndex = 0;

        return false;
    }
   
    if ((ELE1 == 211) || (ELE1 == 212) || (ELE1 == 213) || (ELE1 == 214)) {
       
        alert('Please Select First Elective from \n1. Veda or \n2. Karmakanda or \n3. Dharmashastra or \n4. Nyaya or \n5. Advaita Vedanta or \n6. Puranetihasa or \n7.Jyotisha or \n8. Yoga .');
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        return false;
    }
    if ((ELE2 == 203) || (ELE2 == 204) || (ELE2 == 205) || (ELE2 == 206) || (ELE2 == 207) ||
           (ELE2 == 208) || (ELE2 == 209) || (ELE2 == 210)) {
        alert('Please Select Second Elective from \n1. History or \n2. Political Science or \n3. Education or \n4. Economics .');
        document.getElementById('ddlELE1').selectedIndex = 0;
        document.getElementById('ddlELE2').selectedIndex = 0;
        return false;
    }    
   // vocational();
}

var counter123 = 0; var z = 0;
function vocational(select_id) {

    if (document.getElementById("rbtHonours").checked == true) {
        var subid = new Array('116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141');

        var ELE1 = parseInt(document.getElementById('ddlELE1').options[document.getElementById('ddlELE1').selectedIndex].value);
        var ELE2 = parseInt(document.getElementById("ddlELE2").options[document.getElementById("ddlELE2").selectedIndex].value);
        var ELE3 = parseInt(document.getElementById("ddlELE3").options[document.getElementById("ddlELE3").selectedIndex].value);
        var ELE4 = parseInt(document.getElementById("ddl4thELE1").options[document.getElementById("ddl4thELE1").selectedIndex].value);
        var ELE5 = parseInt(document.getElementById("ddl4thELE2").options[document.getElementById("ddl4thELE2").selectedIndex].value);
        var ELE6 = parseInt(document.getElementById("ddl4thELE3").options[document.getElementById("ddl4thELE3").selectedIndex].value);

        z = select_id.slice(-1)

        for (var k = 0; k < subid.length; k++) {
            if ((eval('ELE' + z) == subid[k])) {
                counter123++;
            }
        }
        if (counter123 > 1) {
            alert('Vocational subject can not opted more then once !');
            counter123 = 0; z = 0;
            clearDDL();
            document.getElementById('ddlCollegeDistrict').focus();
            return false;
        }
    }
}
////////var womenCollegeAry = [];
//////////====================Get Women College ID =============
////////function GetWomenCollege() {   
////////    $.ajax({
////////        type: 'POST',
////////        url: 'JrCAFForm.aspx/GetWomenCollege',
////////        contentType: "application/json; charset=utf-8",

////////        success: function (response) {
////////            womenCollegeAry = new Array();
////////            var lstdtl = eval('(' + response.d + ')');

////////            for (var i = 1; i < lstdtl.length; i++) {
////////                var mystr = lstdtl[i].IntID;
////////                womenCollegeAry.push(mystr);
////////            }
////////            //alert(womenCollegeAry);
////////        },
////////        
////////        dataType: 'json'
////////    });
////////   
////////}

//////////====================Get Not Existed Hostel ID =============
////////var cids = [];
////////function GetNoHostelID() {
////////    $.ajax({
////////        type: 'POST',
////////        url: 'JrCAFForm.aspx/GetNoHostelID',
////////        contentType: "application/json; charset=utf-8",
////////        success: function (response) {
////////            cids = new Array();
////////            var lstdtl = eval('(' + response.d + ')');
////////            for (var i = 1; i < lstdtl.length; i++) {
////////                
////////                var mystr = lstdtl[i].IntID;
////////                cids.push(mystr);
////////            }
////////        },
////////        dataType: 'json'
////////    });
////////   
////////}


//function ColgNotification()
//{
//    var collgId=parseInt(document.getElementById('ddlCollege').options[document.getElementById('ddlCollege').selectedIndex].value);
//    if (collgId==1502) {
//       $('.NotBox').modal();
//        $("#simplemodal-container").css({ "height":"185px","width":"500px" })
//    }
//   
//}
//Function to show hide CGPA of Andhra Board 
//function Andhra_showhideCGPA() {
//    
//    if(document.getElementById('rbtnGPoint').checked == true) {
//        
//        document.getElementById('tblCBSE').style.display = '';
//        document.getElementById('tblBSE').style.display = 'none'; 
//        document.getElementById('hdnMarkType').value="1";      
//    }
//    else {
//        document.getElementById('tblCBSE').style.display = 'none';
//        document.getElementById('tblBSE').style.display = '';
//        document.getElementById('hdnMarkType').value="0";       
//    }
//    document.getElementById('txtEnglish').value = '';
//    document.getElementById('txtMath').value = '';
//    document.getElementById('txtScience').value = '';
//    document.getElementById('txtSocSci').value = '';
//    document.getElementById('txtTotMark').value = '';
//    document.getElementById('txtMaxMark').value = '';
//    document.getElementById('txtCGPA').value = '';
//    document.getElementById('ddlEng').selectedIndex = 0;
//    document.getElementById('ddlMath').selectedIndex = 0;
//    document.getElementById('ddlSc').selectedIndex = 0;
//    document.getElementById('ddlSoSc').selectedIndex = 0;
//}
//function Andhra_showhideCGPAOnLoad() {
// if(((document.getElementById('ddlBoard').value==103) && (document.getElementById('txtYOP').value>=2012))) {
//        document.getElementById('MarkType').style.display = '';       
//        var MarkType= document.getElementById('hdnMarkType').value;
//       alert(MarkType);
//        if(MarkType == '2') {            
//            document.getElementById('tblCBSE').style.display = '';
//            document.getElementById('tblBSE').style.display = 'none';
//            document.getElementById('rbtnGenMark').checked = false 
//            document.getElementById('rbtnGPoint').checked = true   
//        }
//        else {
//            document.getElementById('tblCBSE').style.display = 'none';
//            document.getElementById('tblBSE').style.display = '';
//            document.getElementById('rbtnGenMark').checked = true 
//            document.getElementById('rbtnGPoint').checked = false   
//        }
//    }
//}

function EnglishOriyaFont() {

    if (document.getElementById('rbtnOriya').checked) {       

        document.getElementById('common').innerHTML = 'ସାଧାରଣ ଆବେଦନ ଫର୍ମ';
        document.getElementById('adm').innerHTML = 'କନିଷ୍ଠ ମହାବିଦ୍ୟାଳୟରେ ନାମ ଲେଖା ନିମନ୍ତେ(୨୦୧୮ -୧୯)';
       // document.getElementById('department').innerHTML = 'ଉଚ୍ଚଶିକ୍ଷା ବିଭାଗ , ଓଡିଶା ସରକାର ';
        document.getElementById('department').innerHTML = 'ବିଦ୍ୟାଳୟ ଓ ଗଣଶିକ୍ଷା ବିଭାଗ , ଓଡିଶା ସରକାର ';        
        document.getElementById('lblMarkField').innerHTML = 'ଚିହ୍ନିତ ସ୍ଥାନ ବାଧ୍ୟତା ମୂଳକ ଅଟେ';
        document.getElementById('lblp2').innerHTML = '+୨';
        document.getElementById('lblBoardName').innerHTML = 'ପରୀକ୍ଷା  ବୋର୍ଡ ନାମ';
        document.getElementById('lblYOP').innerHTML = 'ଉତ୍ତୀର୍ଣ୍ଣ ବର୍ଷ';
        document.getElementById('lblExamType').innerHTML = 'ପରୀକ୍ଷା ପ୍ରକାର';
        document.getElementById('lblRoll').innerHTML = 'ରୋଲ ନମ୍ବର';
        document.getElementById('lblphototext').innerHTML = 'ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ';

        document.getElementById('lblNat').innerHTML = 'ଜାତୀୟତା';
        document.getElementById('lblMt').innerHTML = 'ମାତୃଭାଷା';

        document.getElementById('AdharNo').innerHTML = 'ଆଧାର ନମ୍ବର';
        document.getElementById('lblApplicantName').innerHTML = 'ଦରଖାସ୍ତକାରୀଙ୍କ ନାମ';
        document.getElementById('rbtnAnnual').nextSibling.innerHTML = 'ବାର୍ଷିକ';
        document.getElementById('rbtnSuppl').nextSibling.innerHTML = 'ସପ୍ଲିମେଣ୍ଟାରି';
        document.getElementById('lblFname').innerHTML = 'ପିତା ଙ୍କ ନାମ';
        document.getElementById('lblMname').innerHTML = 'ମାତା ଙ୍କ ନାମ';
        document.getElementById('lblPD').innerHTML = 'ବ୍ୟକ୍ତିଗତ ବିବରଣୀ';
        document.getElementById('lblBloodGroup').innerHTML = 'ରକ୍ତର ଶ୍ରେଣୀ';
        document.getElementById('lblReligion').innerHTML = 'ଧର୍ମ';
        document.getElementById('lblGender').innerHTML = 'ଲିଙ୍ଗ';
        document.getElementById('lblDOB').innerHTML = 'ଜନ୍ମ ତାରିଖ'; 
        document.getElementById('lblState').innerHTML = 'ରାଜ୍ୟ';
        document.getElementById('lblDistrict').innerHTML = 'ଜିଲ୍ଲା';
        document.getElementById('lblBlock').innerHTML = 'ବ୍ଲକ / ୟୁଲବି';
        document.getElementById('lblHouseNo').innerHTML = 'ଘର ନମ୍ବର., ସାହି/ଗ୍ରାମ ,ଡାକ କାର୍ଯ୍ୟାଳୟ,ପୋଲିସ୍ ଷ୍ଟେସନ୍ ନାମ ';
        document.getElementById('lblpin').innerHTML = 'ପିନ୍ କୋଡ଼';
        document.getElementById('lbltelephone').innerHTML = 'ଟେଲିଫୋନ ନମ୍ବର';
        document.getElementById('lblMobileNo').innerHTML = 'ମୋବାଇଲ ନମ୍ବର';
        document.getElementById('lblEmail').innerHTML = 'ମେଲ୍ ଆଇଡି';
        document.getElementById('lblAreaCode').innerHTML = 'ଏରିଆ କୋଡ଼';
        document.getElementById('lblphone').innerHTML = 'ଫୋନ୍ ନମ୍ବର';
        document.getElementById('ST').innerHTML = 'ତଫସିଲ ଭୁକ୍ତ ଜନଜାତି';
        document.getElementById('SC').innerHTML = 'ତଫସିଲ ଭୁକ୍ତ ଜାତି';
        document.getElementById('OBC').innerHTML = 'ଅନ୍ୟାନ୍ୟ ପଛୁଆବର୍ଗ ଜାତି';
        document.getElementById('GENERAL').innerHTML = 'ସାଧାରଣ';
        document.getElementById('OTHER').innerHTML = 'ସାମାଜିକ ଓ ଶିକ୍ଷାଗତ ସ୍ତରରେ ପଛୁଆ ବର୍ଗ ଜାତି';
        document.getElementById('PHOH').innerHTML = 'ଶାରିରୀକ / ଅସ୍ତି ସ୍ତରରେ ଭିନ୍ନକ୍ଷମ';
        document.getElementById('ESM').innerHTML = 'ଅବସରପ୍ରାପ୍ତ ସେନା କର୍ମଚାରୀ';
        document.getElementById('CoM').innerHTML = 'ସହୀଦଙ୍କ ସନ୍ତାନ';
        document.getElementById('SDP').innerHTML = 'ସେନାରେ  କାର୍ଯ୍ୟରତ କର୍ମଚାରୀ';
        document.getElementById('NoN').innerHTML = 'ଏମାନଙ୍କ ମଧ୍ୟରୁ କୌଣସିଟି ନୁହେଁ';
        var str = "(ଓଏସଏ)";
        var osa = str.bold();
        document.getElementById('lblOSA').innerHTML = 'ତୁମେ ବାହାର ରାଜ୍ୟ ର ପିଲା  ଅଟକି ?';            
        document.getElementById('OSAN').innerHTML = 'ନା';
        document.getElementById('OSAY').innerHTML = 'ହଁ';
        document.getElementById('lblSName').innerHTML = 'ଯଦି ହଁ  ,ତାହେଲେ ରାଜ୍ୟ ନାମ ଚୟନ କରନ୍ତୁ ';
//        var str1 = "(ଓଲଏନଏସ)";
//        var OLNS = str1.bold();
        document.getElementById('lblOLNS').innerHTML = 'ତୁମେ ପଡୋଶୀ ରାଜ୍ୟରେ ବସବାସ କରୁଥିବା ଓଡିଆ କି ?'
        document.getElementById('OLNSN').innerHTML = 'ନା';
        document.getElementById('OLNSY').innerHTML = 'ହଁ';
        document.getElementById('lblOLNSSN').innerHTML = 'ଯଦି ହଁ  ,ତାହେଲେ ରାଜ୍ୟ ନାମ ଚୟନ କରନ୍ତୁ ';
        document.getElementById('NCCA').innerHTML = 'ଏନ୍ ସି ସି(ଏ)';
        document.getElementById('NCCC').innerHTML = 'ଏନ୍ ସି ସି (ସି)';
        document.getElementById('RP').innerHTML = 'ରାଜ୍ୟ ପୁରସ୍କାର';
        document.getElementById('PR').innerHTML = 'ରାଷ୍ଟ୍ରପତି ପୁରସ୍କାର';
        document.getElementById('SportS').innerHTML = 'ରାଜ୍ୟ';
        document.getElementById('SportN').innerHTML = 'ଜାତୀୟ';
        //document.getElementById('SportIN').innerHTML = 'ଆନ୍ତରଜାତୀୟ'; 
        document.getElementById('SportIN').innerHTML = 'ଆନ୍ତର୍ଜାତୀୟ';
        document.getElementById('lblColType').innerHTML = 'ମହାବିଦ୍ୟାଳୟ ପ୍ରକାର';
        // document.getElementById('SF').innerHTML = 'ସେଲ୍ଫ ଫାଇନାସ';
        document.getElementById('SF').innerHTML = 'ସ୍ଵୟଂ ନିବେସିତ';
        document.getElementById('OF').innerHTML = 'ସରକାରୀ / ସହାୟତା ପ୍ରାପ୍ତ / ଘରୋଇ';
        document.getElementById('lblDname').innerHTML = 'ଜିଲ୍ଲା ନାମ';
        document.getElementById('lblcolname').innerHTML = 'ମହାବିଦ୍ୟାଳୟ ନାମ';
        document.getElementById('lblStream').innerHTML = 'କେଉଁ  ଧାରାରେ';
        document.getElementById('comsub').innerHTML = 'ବାଧ୍ୟତାମୁଳକ ମାତୃଭାଷା';
        document.getElementById('lblESub').innerHTML = 'ଚୟନ ମୂଳକ';
        document.getElementById('lblFESub').innerHTML = 'ପ୍ରଥମ ଚୟନ';
        document.getElementById('lblSESub').innerHTML = 'ଦିତୀୟ ଚୟନ';
        document.getElementById('lblTESub').innerHTML = 'ତୃତୀୟ ଚୟନ';
        document.getElementById('ForEle').innerHTML = 'ଚତୁର୍ଥ ଚୟନ';
        document.getElementById('lblFchoice').innerHTML = 'ପ୍ରଥମ ପସନ୍ଦ';
        document.getElementById('lblSchoice').innerHTML = 'ଦିତୀୟ ପସନ୍ଦ';
        document.getElementById('lblTchoice').innerHTML = 'ତୃତୀୟ ପସନ୍ଦ ';
        document.getElementById('lblhostel').innerHTML = 'ଛାତ୍ରାବାସ ରେ ରହିବା ପାଇଁ ଆଗ୍ରହି କି ?';
        document.getElementById('Opt1').innerHTML = 'ହଁ';
        document.getElementById('Opt2').innerHTML =  'ନା';
        document.getElementById('lbladdress').innerHTML = 'ପତ୍ର ବିନିମୟର ଠିକଣା';
        document.getElementById('lblReservation').innerHTML = 'ସଂରକ୍ଷଣ ବିବରଣୀ';

        document.getElementById('2').value = 'ଦିତୀୟ ପସନ୍ଦ';
         var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var rowsLen = Rows.length
        if (rowsLen == 0) {
            document.getElementById('3').value = 'ତୃତୀୟ ପସନ୍ଦ';
            document.getElementById('4').value = 'ଚତୁର୍ଥ ପସନ୍ଦ';
            document.getElementById('5').value = 'ପଞ୍ଚମ ପସନ୍ଦ';
            document.getElementById('6').value = 'ଷଷ୍ଠ ପସନ୍ଦ';
            document.getElementById('7').value = 'ସପ୍ତମ ପସନ୍ଦ';
            document.getElementById('8').value = 'ଅଷ୍ଟମ ପସନ୍ଦ';
            document.getElementById('9').value = 'ନବମ ପସନ୍ଦ';
            document.getElementById('10').value = 'ଦଶମ ପସନ୍ଦ';
        }

        document.getElementById('lblBExam').innerHTML = 'ଦଶମ ବାର୍ଷିକ ପରୀକ୍ଷା ପ୍ରାପ୍ତ ନମ୍ବର';

        document.getElementById('note').innerHTML = 'ସୂଚନା : ଯଦି ଏଠାରେ ଦିଆଯାଇଥିବା ନମ୍ବର ଆପଣଙ୍କ ପ୍ରାପ୍ତ ନମ୍ବର ସହିତ ସମାନ ଅଛି କି ? ଯଦି ନା ନିଜର ପ୍ରକୃତ ନମ୍ବର ପୁରଣ କରନ୍ତୁ ନମ୍ବର ୯(କ) ରେ.';
        document.getElementById('Span3').innerHTML = 'ହଁ';
        document.getElementById('Span4').innerHTML = 'ନା';
        document.getElementById('lblWeightage').innerHTML = 'ସ୍ଵତନ୍ତ୍ର ମହତ୍ଵ ବିବରଣୀ ';
        document.getElementById('lbl9').innerHTML = 'ଦଶମ ବାର୍ଷିକ ପରୀକ୍ଷା ପ୍ରାପ୍ତ ନମ୍ବର/ଶ୍ରେଣୀ ର ବିବରଣୀ';
        document.getElementById('lbl9a').innerHTML = 'ଦଶମ ବାର୍ଷିକ ପରୀକ୍ଷାରେ ପ୍ରତ୍ୟେକ ବିଷୟରେ ପ୍ରାପ୍ତ ନମ୍ବର';
        document.getElementById('lbl9b').innerHTML = 'ତୁମେ ଦଶମ ବାର୍ଷିକ ପରୀକ୍ଷାରେ ସ୍ଵତନ୍ତ୍ର ରୁପେ ପାସ କରିଛନ୍ତି. ?';
        document.getElementById('CompN').innerHTML = 'ନା';
        document.getElementById('CompY').innerHTML = 'ହଁ';
        document.getElementById('lblinf').innerHTML = 'ତୁମେ ଅତି କମରେ ଗୋଟିଏ ଅଥବା ଅତି ଅଧୀକରେ ଦଶ ଗୋଟି ପସନ୍ଦ ଚୟନ କରିବା ଆବଶ୍ୟକ  ଅଟେ .';
        document.getElementById('lblpriority').innerHTML = 'ଛାତ୍ରବାସ ର ପ୍ରାଥମିକତା'; 
        document.getElementById('btnSave').value = 'ଆବେଦନ';
        document.getElementById('lbl9msg').innerHTML = 'ସୂଚନା :ଯଦି ଏଠାରେ ଦିଆଯାଇଥିବା କୌଣସି ବିଷୟ ନାହିଁ ,ଦୟାକରି ଆମର ଟୋଲଫ୍ରୀ  ନମ୍ବର ୧୫୫୩୩୫/୧୮୦୦-୩୪୫-୬୭୭୦  ରେ ଯୋଗାଯୋଗ  କରନ୍ତୁ.';
        document.getElementById('lblchoice').innerHTML = 'ସୂଚନା :ଆବେଦନ ଚୟନ କରନ୍ତୁ ନାହିଁ,ଯଦି ଆପଣ ଅଧିକ ପସନ୍ଦ କରୁଛନ୍ତି.'

        var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var rowsLen = Rows.length
        if (rowsLen == 0) {
            document.getElementById('Caption').innerHTML = 'ପ୍ରଥମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ'
        }

        document.getElementById('lbltit').innerHTML = 'ଉତ୍ତୀର୍ଣ୍ଣ ହୋଇଥିବା ପରୀକ୍ଷା ବୋର୍ଡ ର ନାମ,ବର୍ଷ,ରୋଲ୍ ନମ୍ବର (ଆଡମିଟ୍ କାର୍ଡ ଅନୁଯାଇ)';
        document.getElementById('dv9').innerHTML = 'ସୂଚନା : ତଳେ ଦିଆଯାଇଥିବା ସ୍ଥାନ ରେ ଗ୍ରେଡ ପ୍ରଦର୍ଶନ ହେବ , ଯଦି ଆପଣ  ସି.ବି.ଏସ.ଇ ଓ ୨୦୧୦  କିମ୍ବା ତା ପରବର୍ତ୍ତୀ ମସିହାରେ ପାସ  କରିଥିବେ ';
        document.getElementById('NCC').innerHTML = 'ଏନ୍ ସି ସି';
        document.getElementById('lblscout').innerHTML = 'ସ୍କାଉଟ୍ ଓ ଗାଇଡ୍';
        document.getElementById('sport').innerHTML = 'ଖେଳ';
        document.getElementById('lbloption').innerHTML = 'ବିକଳ୍ପ/ଚୟନ ବିବରଣୀ';
        document.getElementById('VF').innerHTML = 'ଧନ୍ଦାମୂଳକ';

        document.getElementById('lblN1').innerHTML = '୧.';
        document.getElementById('lblN2').innerHTML = '୨.';
        document.getElementById('lblN3').innerHTML = '୩.';
        document.getElementById('lblN4').innerHTML = '୪.';
        document.getElementById('lblN5').innerHTML = '୫.';            

        document.getElementById('lblN6').innerHTML = '୬.';
        document.getElementById('lblN6a').innerHTML = 'କ.';
        document.getElementById('lblN6b').innerHTML = 'ଖ.';
        document.getElementById('lblN6c').innerHTML = 'ଗ.';
        document.getElementById('lblN6d').innerHTML = 'ଘ.';
        document.getElementById('lblN6e').innerHTML = 'ଙ.';
        document.getElementById('lblN6f').innerHTML = 'ଚ.';
        document.getElementById('lblN6g').innerHTML = 'ଛ.';
        document.getElementById('lblN6h').innerHTML = 'ଜ.';

        document.getElementById('lblN7').innerHTML = '୭.'; 
        document.getElementById('lblN7a').innerHTML = 'କ.';
        document.getElementById('lblN7b').innerHTML = 'ଖ.';
        document.getElementById('lblN7c').innerHTML = 'ଗ.';
        document.getElementById('lblN7d').innerHTML = 'ଘ.';
        document.getElementById('lblN7e').innerHTML = 'ଙ.';

        document.getElementById('lblN8').innerHTML = '୮.';
        document.getElementById('lblN8a').innerHTML = 'କ.';
        document.getElementById('lblN8b').innerHTML = 'ଖ.';
        document.getElementById('lblN8c').innerHTML = 'ଗ.';

        document.getElementById('lblN9').innerHTML = '୯.';
        document.getElementById('lblN9a').innerHTML = 'କ.';
        document.getElementById('lblN9b').innerHTML = 'ଖ.';

        document.getElementById('lblN61').innerHTML = '୧୦.';
        document.getElementById('lblIncomeDet').innerHTML = 'ଅଭିଭାବକ ମାନଙ୍କର ରୋଜଗାର ବିବରଣୀ';
        document.getElementById('lblFocu').innerHTML = 'ବାପାଙ୍କର ବୃତ୍ତି';
        document.getElementById('lblIncome').innerHTML = 'ଅଭିଭାବଙ୍କର ବାର୍ଷିକ ରୋଜଗାର (ଏକା ସାଙ୍ଗରେ) ଟଙ୍କାରେ';
        document.getElementById('lblMocu').innerHTML = 'ମାଆଙ୍କର ବୃତ୍ତି';
        
        document.getElementById('lblN61a').innerHTML = 'କ.';
        document.getElementById('lblN61b').innerHTML = 'ଖ.';
        document.getElementById('lblN61c').innerHTML = 'ଗ.';

       
        document.getElementById('lbleduinst').innerHTML = 'ଶେଷ ଶିକ୍ଷାଗତ ଅନୁଷ୍ଠାନର ବିବରଣୀ';
        document.getElementById('lblschname').innerHTML = 'ବିଦ୍ୟାଳୟର ନାମ';
        document.getElementById('lblschloc').innerHTML = 'ବିଦ୍ୟାଳୟର ଠିକଣା';
        document.getElementById('lblinsDist').innerHTML = 'ଜିଲ୍ଲା';
        document.getElementById('lblinsYOJ').innerHTML = 'ବିଦ୍ୟାଳୟ ପ୍ରବେଶ  ବର୍ଷ';
        document.getElementById('lblYOL').innerHTML = 'ବିଦ୍ୟାଳୟ ପ୍ରସ୍ଥାନ ବର୍ଷ';
       
        document.getElementById('lblN71a').innerHTML = 'କ.';
        document.getElementById('lblN71b').innerHTML = 'ଖ.';
        document.getElementById('lblN71c').innerHTML = 'ଗ.';
        document.getElementById('lblN71d').innerHTML = 'ଘ.';
        document.getElementById('lblN71e').innerHTML = 'ଙ.';

        document.getElementById('lbla').innerHTML = 'କ.';
        document.getElementById('lblb').innerHTML = 'ଖ.';
        document.getElementById('lblc').innerHTML = 'ଗ.';
        document.getElementById('lbld').innerHTML = 'ଘ.';
        document.getElementById('lble').innerHTML = 'ଙ.';
        document.getElementById('lblf').innerHTML = 'ଚ.';
        document.getElementById('lblg').innerHTML = 'ଛ.';
        document.getElementById('S').innerHTML = 'ସଂସ୍କୃତ';

      
        document.getElementById('lblBankInfo').innerHTML = 'ବ୍ୟାଙ୍କ ସୁଚନା';
        document.getElementById('lblacno').innerHTML = 'ଖାତା ସଂଖ୍ୟା';
        document.getElementById('lblifsc').innerHTML = 'ଆଇ ଏଫ ଏସ ସି  ସଂଖ୍ୟା';
        document.getElementById('lblmicr').innerHTML = 'ଏମ ଆଇ ସି ଆର   ସଂଖ୍ୟା';
        document.getElementById('lblBdet').innerHTML = 'ବ୍ୟାଙ୍କ ବିବରଣୀ';

        if ($("#ddlAIncome").val() == 4 || $("#ddlAIncome").val() == 0) {
            document.getElementById('lblN71').innerHTML = '୧୧.';
            document.getElementById('lblN12').innerHTML = '୧୨.';
        }
        else {
            document.getElementById('lblN71').innerHTML = '୧୨.';
            document.getElementById('lblN12').innerHTML = '୧୧.';
        }


        document.getElementById('lblN12a').innerHTML = 'କ.';
        document.getElementById('lblN12b').innerHTML = 'ଖ.';
        document.getElementById('lblN12c').innerHTML = 'ଗ.';
        document.getElementById('lblN12d').innerHTML = 'ଘ.';  

        if (document.getElementById('rbtVocational').checked) {
            document.getElementById('lblh').innerHTML = 'ଛ.';
        }
        else {
            document.getElementById('lblh').innerHTML = 'ଜ.';
        }
    }
    else {
        document.getElementById('common').innerHTML = 'Common Application Form';
        document.getElementById('adm').innerHTML = ' for Admission to Junior Colleges (2018-19)';
       // document.getElementById('department').innerHTML = 'Department of Higher Education, Government of Odisha';
        document.getElementById('department').innerHTML = 'Department of School & Mass Education, Government of Odisha';
        document.getElementById('lblMarkField').innerHTML = 'Mark indicates mandatory field';
        document.getElementById('lblp2').innerHTML = '+2';
        document.getElementById('lblBoardName').innerHTML = 'Name of the Examination Board';
        document.getElementById('lblYOP').innerHTML = 'Year of Passing';
        document.getElementById('lblExamType').innerHTML = 'Exam Type';
        document.getElementById('lblRoll').innerHTML = 'Roll Number';
        document.getElementById('lblphototext').innerHTML = 'Click here to upload your photo';
        document.getElementById('lblApplicantName').innerHTML = "Applicant's Name";
        document.getElementById('rbtnAnnual').nextSibling.innerHTML = 'Annual';
        document.getElementById('rbtnSuppl').nextSibling.innerHTML = 'Supplementary';
        document.getElementById('lblFname').innerHTML = "Father's Name";
        document.getElementById('lblMname').innerHTML = "Mother's Name";
        document.getElementById('lblPD').innerHTML = 'Personal Details';

        document.getElementById('lblNat').innerHTML = 'Nationality';
        document.getElementById('lblMt').innerHTML = '	Mother Tongue';

        document.getElementById('AdharNo').innerHTML = 'Aadhaar No.';

        document.getElementById('lblBloodGroup').innerHTML = 'Blood Group';
        document.getElementById('lblReligion').innerHTML = 'Religion';
        document.getElementById('lblGender').innerHTML = 'Gender';
        document.getElementById('lblDOB').innerHTML = 'Date of Birth';
        document.getElementById('lblState').innerHTML = 'State';
        document.getElementById('lblDistrict').innerHTML = 'District';
        document.getElementById('lblBlock').innerHTML = 'Block / ULB';
        document.getElementById('lblHouseNo').innerHTML = 'House No., Street/Village, Post Office, Police Station Name ';
        document.getElementById('lblpin').innerHTML = 'PIN Code';
        document.getElementById('lbltelephone').innerHTML = 'Telephone No.';
        document.getElementById('lblMobileNo').innerHTML = 'Mobile No.';
        document.getElementById('lblEmail').innerHTML = 'e-Mail';
        document.getElementById('lblAreaCode').innerHTML = 'Area Code';
        document.getElementById('lblphone').innerHTML = 'Phone No';
        document.getElementById('ST').innerHTML = 'Schedule Tribe (ST)';
        document.getElementById('SC').innerHTML = 'Schedule Caste (SC)';
        document.getElementById('OBC').innerHTML = 'Other Backward Class (OBC)';
        document.getElementById('GENERAL').innerHTML = 'General';
        document.getElementById('OTHER').innerHTML = 'Socially and Educationally Backward Classes (SEBC)';
        document.getElementById('PHOH').innerHTML = 'Physically/Orthopedically Handicapped (PH/OH)';
        document.getElementById('ESM').innerHTML = 'Ex-Service Man (ESM)';
        document.getElementById('CoM').innerHTML = 'Children of Martyrs (CoM)';
        document.getElementById('SDP').innerHTML = 'Serving Defence Personnel (SDP)';
        document.getElementById('NoN').innerHTML = 'None';

        document.getElementById('NCCA').innerHTML = 'NCC (A)';
        document.getElementById('NCCC').innerHTML = 'NCC (C)';
        document.getElementById('RP').innerHTML = 'Rajya Puraskar (RP)';
        document.getElementById('PR').innerHTML = 'President Recognition (PR)';

        var str = "(OSA)";
        var osa = str.bold();
        document.getElementById('lblOSA').innerHTML = 'Are you an Outside State Applicant ' + osa + '?';        

        document.getElementById('OSAN').innerHTML = 'No';
        document.getElementById('OSAY').innerHTML = 'Yes';
        document.getElementById('lblSName').innerHTML = 'if Yes, Please select the State Name';

        var str1 = "(OLNS)";
        var OLNS = str1.bold();
        document.getElementById('lblOLNS').innerHTML = 'Are you an Oriya Living in Neighbouring State ' + (OLNS) + '?'

        document.getElementById('OLNSN').innerHTML = 'No';
        document.getElementById('OLNSY').innerHTML = 'Yes';
        document.getElementById('lblOLNSSN').innerHTML = 'if Yes, Please select the State Name';
        document.getElementById('SportS').innerHTML = 'State';
        document.getElementById('SportN').innerHTML = 'National';
        document.getElementById('SportIN').innerHTML = 'International';

        document.getElementById('lblColType').innerHTML = 'College Type';
        document.getElementById('SF').innerHTML = 'Self Financing';
        document.getElementById('OF').innerHTML = 'Govt. / Aided / Private';
        document.getElementById('lblDname').innerHTML = 'District Name';
        document.getElementById('lblcolname').innerHTML = 'College Name';
        document.getElementById('lblStream').innerHTML = 'Stream';
        document.getElementById('comsub').innerHTML = 'Compulsory (MIL)';
        document.getElementById('lblESub').innerHTML = 'Elective Subject';
        document.getElementById('lblFESub').innerHTML = 'First Elective';
        document.getElementById('lblSESub').innerHTML = 'Second Elective';
        document.getElementById('lblTESub').innerHTML = 'Third Elective';
        document.getElementById('ForEle').innerHTML = '4th Elective in order of preference';

        document.getElementById('lblFchoice').innerHTML = 'First Choice';
        document.getElementById('lblSchoice').innerHTML = 'Second Choice';
        document.getElementById('lblTchoice').innerHTML = 'Third Choice';
        document.getElementById('lblhostel').innerHTML = 'Are you interested to reside in hostel?';
        document.getElementById('Opt1').innerHTML = 'Yes';
        document.getElementById('Opt2').innerHTML = 'No';
        document.getElementById('lbladdress').innerHTML = 'Permanent Address';
        document.getElementById('lblReservation').innerHTML = 'Reservation Details';

        document.getElementById('2').value = '2nd Option';
         var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var rowsLen = Rows.length
        if (rowsLen == 0) {
            document.getElementById('3').value = '3rd Option';
            document.getElementById('4').value = '4th Option';
            document.getElementById('5').value = '5th Option';
            document.getElementById('6').value = '6th Option';
            document.getElementById('7').value = '7th Option';
            document.getElementById('8').value = '8th Option';
            document.getElementById('9').value = '9th Option';
            document.getElementById('10').value = '10th Option';
        }


        document.getElementById('btnSave').value = 'APPLY';

        document.getElementById('lblBExam').innerHTML = 'Mark secured in 10th Board Examination';

        document.getElementById('note').innerHTML = 'Note : If the above mark showing in the computer screen is matching with your actual mark secured, then please click on “Yes” button. If not, click on “No” button to enter your actual mark at 9(a) of this online form.';
        document.getElementById('Span3').innerHTML = 'Yes';
        document.getElementById('Span4').innerHTML = 'No';
        document.getElementById('lblWeightage').innerHTML = 'Weightage Details';
        document.getElementById('lbl9').innerHTML = 'Details of Mark/Grade Secured in 10th Board Examination';
        document.getElementById('lbl9a').innerHTML = 'Mark/Grade secured in each subject in 10th Board Examination';
        document.getElementById('lbl9b').innerHTML = 'Have you passed 10th Board Exam Compartmentally ?';

        document.getElementById('CompN').innerHTML = 'No';
        document.getElementById('CompY').innerHTML = 'Yes';

        document.getElementById('lblinf').innerHTML = 'You are required to select at least ONE and at most TEN options .';
        document.getElementById('lblpriority').innerHTML = 'Hostel Priority';
        document.getElementById('lbl9msg').innerHTML = 'Note: If any subject name not in the given list , Please call us on 155335/1800-345-6770 (Toll Free) ';
        document.getElementById('lblchoice').innerHTML = 'Note: Do not click APPLY button, if you want to select more options.';

        var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var rowsLen = Rows.length
        if (rowsLen == 0) {
            document.getElementById('Caption').innerHTML = 'Choose your 1st Option';
        }
     

        document.getElementById('lbltit').innerHTML = 'Name of the Board from which you have passed the 10th exam, Year of Exam & Roll Number (as in admit card)' ;
        document.getElementById('dv9').innerHTML = "Note: the below field will show grade point, if you select CBSE & 2010 or later as year of passing";

        document.getElementById('NCC').innerHTML = 'NCC';
        document.getElementById('lblscout').innerHTML = 'Scout & Guide';
        document.getElementById('sport').innerHTML = 'Sports';
        document.getElementById('lbloption').innerHTML = 'Option(s)/Choice(s) Details';
        document.getElementById('VF').innerHTML = 'Vocational';

        document.getElementById('S').innerHTML = 'Sanskrit';

        document.getElementById('lblN1').innerHTML = '1.';      
        document.getElementById('lblN2').innerHTML = '2.';
        document.getElementById('lblN3').innerHTML = '3.';
        document.getElementById('lblN4').innerHTML = '4.';
        document.getElementById('lblN5').innerHTML = '5.';              

        document.getElementById('lblN6').innerHTML = '6.';

        document.getElementById('lblN6a').innerHTML = 'a.';
        document.getElementById('lblN6b').innerHTML = 'b.';
        document.getElementById('lblN6c').innerHTML = 'c.';
        document.getElementById('lblN6d').innerHTML = 'd.';
        document.getElementById('lblN6e').innerHTML = 'e.';
        document.getElementById('lblN6f').innerHTML = 'f.';
        document.getElementById('lblN6g').innerHTML = 'g.';
        document.getElementById('lblN6h').innerHTML = 'h.';

        document.getElementById('lblN7').innerHTML = '7.';
        document.getElementById('lblN7a').innerHTML = 'a.';
        document.getElementById('lblN7b').innerHTML = 'b.';
        document.getElementById('lblN7c').innerHTML = 'c.';
        document.getElementById('lblN7d').innerHTML = 'd.';
        document.getElementById('lblN7e').innerHTML = 'e.';

        document.getElementById('lblN8').innerHTML = '8.';
        document.getElementById('lblN8a').innerHTML = 'a.';
        document.getElementById('lblN8b').innerHTML = 'b.';
        document.getElementById('lblN8c').innerHTML = 'c.';

        document.getElementById('lblN9').innerHTML = '9.';
        document.getElementById('lblN9a').innerHTML = 'a.';
        document.getElementById('lblN9b').innerHTML = 'b.'; 

        document.getElementById('lbla').innerHTML = 'a.';
        document.getElementById('lblb').innerHTML = 'b.';
        document.getElementById('lblc').innerHTML = 'c.';
        document.getElementById('lbld').innerHTML = 'd.';
        document.getElementById('lble').innerHTML = 'e.';
        document.getElementById('lblf').innerHTML = 'f.';
        document.getElementById('lblg').innerHTML = 'g.';

        document.getElementById('lblN61').innerHTML = '10.';
        document.getElementById('lblN61a').innerHTML = 'a.';
        document.getElementById('lblN61b').innerHTML = 'b.';
        document.getElementById('lblN61c').innerHTML = 'c.';

        document.getElementById('lblIncomeDet').innerHTML = 'Income Details of Parents';
        document.getElementById('lblFocu').innerHTML = "Father's Occupation";
        document.getElementById('lblIncome').innerHTML = 'Annual Income of the Parents (Together) in Rs. ';
        document.getElementById('lblMocu').innerHTML = "Mother's Occupation";

        
        document.getElementById('lblN71a').innerHTML = 'a.';
        document.getElementById('lblN71b').innerHTML = 'b.';
        document.getElementById('lblN71c').innerHTML = 'c.';
        document.getElementById('lblN71d').innerHTML = 'd.';
        document.getElementById('lblN71e').innerHTML = 'e.';

        document.getElementById('lbleduinst').innerHTML = 'Record of educational institution last attended';
        document.getElementById('lblschname').innerHTML = 'Name of the School';
        document.getElementById('lblschloc').innerHTML = 'Location of the School';
        document.getElementById('lblinsDist').innerHTML = 'District';
        document.getElementById('lblinsYOJ').innerHTML = 'Year of Joining';
        document.getElementById('lblYOL').innerHTML = 'Year of Leaving';
        
      
        document.getElementById('lblBankInfo').innerHTML = 'Bank Information';
        document.getElementById('lblacno').innerHTML = 'Account Number';
        document.getElementById('lblifsc').innerHTML = 'IFSC Number';
        document.getElementById('lblmicr').innerHTML = 'MICR Code';
        document.getElementById('lblBdet').innerHTML = 'Bank Details';

        document.getElementById('lblN12a').innerHTML = 'a.';
        document.getElementById('lblN12b').innerHTML = 'b.';
        document.getElementById('lblN12c').innerHTML = 'c.';
        document.getElementById('lblN12d').innerHTML = 'd.';


        if ($("#ddlAIncome").val() == 4 || $("#ddlAIncome").val() == 0) {
            document.getElementById('lblN71').innerHTML = '11.';
            document.getElementById('lblN12').innerHTML = '12.';
        }
        else {
            document.getElementById('lblN71').innerHTML = '12.';
            document.getElementById('lblN12').innerHTML = '11.';
        }
               
        if (document.getElementById('rbtVocational').checked) {
            document.getElementById('lblh').innerHTML = 'g.';
        }
        else {
            document.getElementById('lblh').innerHTML = 'h.';
        }       
    }
    if (document.getElementById('hdnType').value == '1' ) {
        document.getElementById("rbtnEnglish").disabled = false;
        document.getElementById("rbtnOriya").disabled = true;
    }
    else if( document.getElementById('hdnType').value == '2'){
         document.getElementById("rbtnEnglish").disabled = true;
         document.getElementById("rbtnOriya").disabled = false;
    }
}
function ConfirmEnglishOriyaFont() {debugger;
    if (document.getElementById('strFontOption').value == '2') {

        document.getElementById('common').innerHTML = 'ସାଧାରଣ ଆବେଦନ ଫର୍ମ';
        document.getElementById('adm').innerHTML = 'କନିଷ୍ଠ ମହାବିଦ୍ୟାଳୟରେ ନାମ ଲେଖା ନିମନ୍ତେ(୨୦୧୮ -୧୯)';
        document.getElementById('department').innerHTML = 'ବିଦ୍ୟାଳୟ ଓ ଗଣଶିକ୍ଷା ବିଭାଗ , ଓଡିଶା ସରକାର ';
        document.getElementById('flashingtext').innerHTML = 'ଦୟାକରି ଆପଣଙ୍କ ତଥ୍ୟ  ଯାଞ୍ଚ କରନ୍ତୁ , ଯଦି ଆପଣ ପରିବର୍ତ୍ତନ କରିବାକୁ  ଚାହାଁନ୍ତି , ତାହାଲେ ପୂର୍ବବର୍ତ୍ତୀ କୁ ଯାଆନ୍ତୁ .';

        document.getElementById('lblp2').innerHTML = '+୨';
        document.getElementById('lblBoardName').innerHTML = 'ପରୀକ୍ଷା  ବୋର୍ଡ ନାମ';
        document.getElementById('lblYOP').innerHTML = 'ଉତ୍ତୀର୍ଣ୍ଣ ବର୍ଷ';
        document.getElementById('lblExType').innerHTML = 'ପରୀକ୍ଷା ପ୍ରକାର';
        document.getElementById('lblRollNo').innerHTML = 'ରୋଲ ନମ୍ବର';
        document.getElementById('lblApplicantName').innerHTML = 'ଦରଖାସ୍ତକାରୀଙ୍କ ନାମ';
        document.getElementById('lblFname').innerHTML = 'ବାପାଙ୍କର ବୃତ୍ତି';
        document.getElementById('lblMname').innerHTML = 'ମାଆଙ୍କର ବୃତ୍ତି';
        document.getElementById('lblPD').innerHTML = 'ବ୍ୟକ୍ତିଗତ ବିବରଣୀ';
        document.getElementById('lblBloodGroup').innerHTML = 'ରକ୍ତର ଶ୍ରେଣୀ';
        document.getElementById('lblGender').innerHTML = 'ଲିଙ୍ଗ';
        document.getElementById('lblReligion').innerHTML = 'ଧର୍ମ';
        document.getElementById('lblDOB').innerHTML = 'ଜନ୍ମ ତାରିଖ';

        document.getElementById('lblnat').innerHTML = 'ଜାତୀୟତା';
        document.getElementById('lblmt1').innerHTML = 'ମାତୃଭାଷା';
        document.getElementById('AdharNo').innerHTML = 'ଆଧାର ନମ୍ବର';

        document.getElementById('lbladd').innerHTML = 'ପତ୍ର ବିନିମୟର ଠିକଣା';
        document.getElementById('lblState').innerHTML = 'ରାଜ୍ୟ';
        document.getElementById('lblDistrict').innerHTML = 'ଜିଲ୍ଲା';
        document.getElementById('lblBlock').innerHTML = 'ବ୍ଲକ / ୟୁଲବି';
        document.getElementById('lbladdress').innerHTML = 'ଠିକଣା';
        document.getElementById('lblPinNo').innerHTML = 'ପିନ୍ କୋଡ଼';
        document.getElementById('lbltelephone').innerHTML = 'ଟେଲିଫୋନ ନମ୍ବର';
        document.getElementById('lblMobileNo').innerHTML = 'ମୋବାଇଲ ନମ୍ବର';
        document.getElementById('lblEmail').innerHTML = 'ମେଲ୍ ଆଇଡି';
        document.getElementById('lblReservation').innerHTML = 'ସଂରକ୍ଷଣ ବିବରଣୀ';
        document.getElementById('ST').innerHTML = 'ତଫସିଲ ଭୁକ୍ତ ଜନଜାତି';
        document.getElementById('SC').innerHTML = 'ତଫସିଲ ଭୁକ୍ତ ଜାତି';
        document.getElementById('OBC').innerHTML = 'ଅନ୍ୟାନ୍ୟ ପଛୁଆବର୍ଗ ଜାତି';
        document.getElementById('GENERAL').innerHTML = 'ସାଧାରଣ';
        document.getElementById('OTHER').innerHTML = 'ସାମାଜିକ ଓ ଶିକ୍ଷାଗତ ସ୍ତରରେ ପଛୁଆ ବର୍ଗ ଜାତି';
        document.getElementById('PHOH').innerHTML = 'ଶାରିରୀକ / ଅସ୍ତି ସ୍ତରରେ ଭିନ୍ନକ୍ଷମ';
        document.getElementById('ESM').innerHTML = 'ଅବସରପ୍ରାପ୍ତ ସେନା କର୍ମଚାରୀ';
        document.getElementById('SDP').innerHTML = 'ସେନାରେ  କାର୍ଯ୍ୟରତ କର୍ମଚାରୀ';
        document.getElementById('CoM').innerHTML = 'ସହୀଦଙ୍କ ସନ୍ତାନ';
        document.getElementById('lblOSA1').innerHTML = 'ତୁମେ ବାହାର ରାଜ୍ୟ ର ପିଲା  ଅଟକି ?';
        document.getElementById('OLNS0').innerHTML = 'ତୁମେ ପଡୋଶୀ ରାଜ୍ୟରେ ବସବାସ କରୁଥିବା ଓଡିଆ କି ?';
        document.getElementById('lblWeightage').innerHTML = 'ସ୍ଵତନ୍ତ୍ର ମହତ୍ଵ ବିବରଣୀ';
        document.getElementById('NCC').innerHTML = 'ଏନ୍ ସି ସି';
        document.getElementById('lblscout').innerHTML = 'ସ୍କାଉଟ୍ ଓ ଗାଇଡ୍';
        document.getElementById('sport').innerHTML = 'ଖେଳ';
        document.getElementById('NCCA').innerHTML = 'ଏନ୍ ସି ସି (ଏ)';
        document.getElementById('NCCC').innerHTML = 'ଏନ୍ ସି ସି (ସି)';
        document.getElementById('RP').innerHTML = 'ରାଜ୍ୟ ପୁରସ୍କାର';
        document.getElementById('PR').innerHTML = 'ରାଷ୍ଟ୍ରପତି ପୁରସ୍କାର';
        document.getElementById('SportS').innerHTML = 'ରାଜ୍ୟ';
        document.getElementById('SportN').innerHTML = 'ଜାତୀୟ';
        //document.getElementById('SportIN').innerHTML = 'ଆନ୍ତରଜାତୀୟ'; 
        document.getElementById('SportIN').innerHTML = 'ଆନ୍ତର୍ଜାତୀୟ';
        document.getElementById('lbl9').innerHTML = 'ଦଶମ ବାର୍ଷିକ ପରୀକ୍ଷା ପ୍ରାପ୍ତ ନମ୍ବର/ଶ୍ରେଣୀ ର ବିବରଣୀ';

        document.getElementById('lbl9a').innerHTML = 'ଦଶମ ବାର୍ଷିକ ପରୀକ୍ଷାରେ ପ୍ରତ୍ୟେକ ବିଷୟରେ ପ୍ରାପ୍ତ ନମ୍ବର';
        document.getElementById('lbl9b').innerHTML = 'ତୁମେ ଦଶମ ବାର୍ଷିକ ପରୀକ୍ଷାରେ ସ୍ଵତନ୍ତ୍ର ରୁପେ ପାସ କରିଛନ୍ତି. ?';

        document.getElementById('lbl10th').innerHTML = '୧୦ ମ ବୋର୍ଡ ବିବରଣୀ';
        document.getElementById('lblo').innerHTML = '(ଆଡମିଟ୍ କାର୍ଡ ଅନୁଯାଇ)';

        document.getElementById('lblo').innerHTML = '(ଆଡମିଟି କାର୍ଡ ଅନୁଯାଇ)';

//        document.getElementById('lbl9i').innerHTML = 'ଉପରେ ଦିଆ ଯାଇଥିବା ନମ୍ବର ଆପଣ ବାର୍ଷିକ ଏଚ ଏସ ଇ(ଓଡିଶା) ପରୀକ୍ଷା ରେ ରଖିଛନ୍ତି କି ?';
        document.getElementById('lbloption').innerHTML = 'ବିକଳ୍ପ/ଚୟନ ବିବରଣୀ';
        document.getElementById('btnSave').value = 'ନିଶ୍ଚିତ କରିବା';
        document.getElementById('btnBack').value = 'ପୂର୍ବବର୍ତ୍ତୀ';

        document.getElementById('lblN1').innerHTML = '୧.';
        document.getElementById('lblN2').innerHTML = '୨.';
        document.getElementById('lblN3').innerHTML = '୩.';
        document.getElementById('lblN4').innerHTML = '୪.';
        document.getElementById('lblN5').innerHTML = '୫.';
        document.getElementById('lblN6').innerHTML = '୬.'; //

        document.getElementById('lblN6a').innerHTML = 'କ.';
        document.getElementById('lblN6b').innerHTML = 'ଖ.';
        document.getElementById('lblN6c').innerHTML = 'ଗ.';
        document.getElementById('lblN6d').innerHTML = 'ଘ.';
        document.getElementById('lblN6e').innerHTML = 'ଙ.';
        document.getElementById('lblN6f').innerHTML = 'ଚ.';
        document.getElementById('lblN6g').innerHTML = 'ଛ.';
        document.getElementById('lblN6h').innerHTML = 'ଜ.';

        document.getElementById('lblN7').innerHTML = '୭.'; //  
        document.getElementById('lblN7a').innerHTML = 'କ.';
        document.getElementById('lblN7b').innerHTML = 'ଖ.';
        document.getElementById('lblN7c').innerHTML = 'ଗ.';
        document.getElementById('lblN7d').innerHTML = 'ଘ.';
        // document.getElementById('lblN7e').innerHTML = 'ଙ.';

        document.getElementById('lblN8').innerHTML = '୮.';
        document.getElementById('lblN8a').innerHTML = 'କ.';
        document.getElementById('lblN8b').innerHTML = 'ଖ.';
        document.getElementById('lblN8c').innerHTML = 'ଗ.';

        document.getElementById('lblN9').innerHTML = '୯.';
        document.getElementById('lblN9a').innerHTML = 'କ.';
        document.getElementById('lblN9b').innerHTML = 'ଖ.';

        document.getElementById('lblN61').innerHTML = '୧୦.';
        document.getElementById('lblDincome').innerHTML = 'ଅଭିଭାବକ ମାନଙ୍କର ରୋଜଗାର ବିବରଣୀ';
        document.getElementById('lblFocu').innerHTML = 'ବାପାଙ୍କର ବୃତ୍ତି';
        document.getElementById('lblMocu').innerHTML = 'ମାଆଙ୍କର ବୃତ୍ତି';
        document.getElementById('lblIncome').innerHTML = 'ଅଭିଭାବଙ୍କର ବାର୍ଷିକ ରୋଜଗାର (ଏକା ସାଙ୍ଗରେ) ଟଙ୍କାରେ';

        document.getElementById('lbl61a').innerHTML = 'କ.';
        document.getElementById('lblN61b').innerHTML = 'ଖ.';
        document.getElementById('lblN61c').innerHTML = 'ଗ.';


        document.getElementById('lblN71a').innerHTML = 'କ.';
        document.getElementById('lblN71b').innerHTML = 'ଖ.';
        document.getElementById('lblN71c').innerHTML = 'ଗ.';
        document.getElementById('lblN71d').innerHTML = 'ଘ.';
        document.getElementById('lblN71e').innerHTML = 'ଙ.';

        document.getElementById('lblEduins').innerHTML = 'ଶେଷ ଶିକ୍ଷାଗତ ଅନୁଷ୍ଠାନର ବିବରଣୀ';
        document.getElementById('lblSchNm').innerHTML = 'ବିଦ୍ୟାଳୟର ନାମ';
        document.getElementById('lblschlo').innerHTML = 'ବିଦ୍ୟାଳୟର ଠିକଣା';
        document.getElementById('lblinstdist').innerHTML = 'ଜିଲ୍ଲା';
        document.getElementById('lblYOJ1').innerHTML = 'ବିଦ୍ୟାଳୟ ପ୍ରବେଶ ବର୍ଷ ';
        document.getElementById('lblYOL1').innerHTML = 'ବିଦ୍ୟାଳୟ ପ୍ରସ୍ଥାନ ବର୍ଷ';

        document.getElementById('lbNl2a').innerHTML = 'କ.';
        document.getElementById('lblN12b').innerHTML = 'ଖ.';
        document.getElementById('lblN12c').innerHTML = 'ଗ.';
        document.getElementById('lblN12d').innerHTML = 'ଘ.';

        document.getElementById('lblBankInfo').innerHTML = 'ବ୍ୟାଙ୍କ ସୁଚନା';
        document.getElementById('lblacno').innerHTML = 'ଖାତା ସଂଖ୍ୟା';
        document.getElementById('lblifsc').innerHTML = 'ଆଇ ଏଫ ଏସ ସି ସଂଖ୍ୟା';
        document.getElementById('lblmicr1').innerHTML = 'ଏମ ଆଇ ସି ଆର ସଂଖ୍ୟା';
        document.getElementById('lblBdet').innerHTML = 'ବ୍ୟାଙ୍କ ବିବରଣୀ';

        if (document.getElementById('strAIncomeval').value == '4') {
            document.getElementById('lblN71').innerHTML = '୧୧.';
            document.getElementById('lblN12').innerHTML = '୧୨.';
            document.getElementById("trBD").style.display = 'none';

        }
        else {
            document.getElementById('lblN71').innerHTML = '୧୨.';
            document.getElementById('lblN12').innerHTML = '୧୧.';
            document.getElementById("trBD").style.display = '';
        }


        document.getElementById('lblSName').innerHTML = 'ଯଦି ହଁ  ,ତାହେଲେ ରାଜ୍ୟ ନାମ ଚୟନ କରନ୍ତୁ ';
        document.getElementById('lblOLNSSN').innerHTML = 'ଯଦି ହଁ  ,ତାହେଲେ ରାଜ୍ୟ ନାମ ଚୟନ କରନ୍ତୁ ';
    }
    else {
        debugger;
        if (document.getElementById('strAIncomeval').value == '4') {
            document.getElementById('lblN71').innerHTML = '11.';
            document.getElementById('lblN12').innerHTML = '12.';
            document.getElementById("trBD").style.display = 'none';
        }
        else {
            document.getElementById('lblN71').innerHTML = '12.';
            document.getElementById('lblN12').innerHTML = '11.';
            document.getElementById("trBD").style.display = '';
        }
    }
}
function VocColType() {
    if (document.getElementById('rbtVocational').checked) {
       
        document.getElementById("4thE").style.display = 'none';       
        document.getElementById("SlblTESub").style.display = '';
        document.getElementById("SddlELE3").style.display = '';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('lblh').innerHTML = 'ଛ.';
            document.getElementById('lblStream').innerHTML = 'କେଉଁ ଧାରାରେ';
        }
        else {
            document.getElementById('lblh').innerHTML = 'g.';
            document.getElementById('lblStream').innerHTML = 'Trade';
        }
    }  
}
function SanColType() {
    if (document.getElementById('rbtSanskrit').checked) {
        document.getElementById("4thE").style.display = 'none';
        document.getElementById("SlblTESub").style.display = 'none';
        document.getElementById("SddlELE3").style.display = 'none';

        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('lblh').innerHTML = 'ଛ.';
        }
        else {
            document.getElementById('lblh').innerHTML = 'g.';
        }
    }
   
}
function ClrColType() {
 for (var i = document.getElementById('ddlCompulsory').length; i > 0; i--) {
            document.getElementById('ddlCompulsory').options[i] = null;
        }
        document.getElementById("4thE").style.display = '';
        document.getElementById("SlblTESub").style.display = '';
        document.getElementById("SddlELE3").style.display = '';
    }
    function FutureYearAlert() {
        var curr_year = parseInt(2017);
        // var year = parseInt(document.getElementById('txtYOP').value);
        var year = $("#ddlYOP").val();
        //var strYear = document.getElementById('txtYOP').value;
        var strYear = $("#ddlYOP").val();
        if (strYear != '') {
            if (year > curr_year || year < curr_year-32) {
                alert('Please enter your year of passing  between 1985 - 2017');
//                document.getElementById('txtYOP').value = '';
                //                document.getElementById('txtYOP').focus();
                $("#ddlYOP").val(0);
                $("#ddlYOP").focus();

                return false;
            }
        }
    }
    function VocationalStreamToolTip() {

        var streamID = document.getElementById('ddlStream').value;
        var tooltip = document.getElementById('tooltip');
       

            if (streamID == 4) {
                document.getElementById("ddlStream").title = 'Inland Fisheries';
                //document.tooltip.document.write = 'Inland Fisheries';
            }
            if (streamID == 5) {
                document.getElementById("ddlStream").title = 'Horticulture';
            }
            if (streamID == 6) {
                document.getElementById("ddlStream").title = 'Crop Production';
            }
            if (streamID == 7) {
                document.getElementById("ddlStream").title = 'Poultry Farming';
            }
            if (streamID == 8) {
                document.getElementById("ddlStream").title = 'Repair and Maintenance of Power Driven Farm Machinery';
            }
            if (streamID == 9) {
                document.getElementById("ddlStream").title = 'Dairying';
            }
            if (streamID == 10) {
                document.getElementById("ddlStream").title = 'Sericulture';
            }
            if (streamID == 11) {
                document.getElementById("ddlStream").title = 'Office Management';
            }
            if (streamID == 12) {
                document.getElementById("ddlStream").title = 'Insurance';
            }
            if (streamID == 13) {
                document.getElementById("ddlStream").title = 'Accountancy and Auditing';
            }
            if (streamID == 14) {
                document.getElementById("ddlStream").title = 'Tax Assistant';
            }
            if (streamID == 15) {
                document.getElementById("ddlStream").title = 'Audio Visual Technician';
            }
            if (streamID == 16) {
                document.getElementById("ddlStream").title = 'Repair & Maintenance of Electrical Domestic Appliances';
            }
            if (streamID == 17) {
                document.getElementById("ddlStream").title = 'Building Maintenance';
            }
            if (streamID == 18) {
                document.getElementById("ddlStream").title = 'Computer Technique';
            }
            if (streamID == 19) {
                document.getElementById("ddlStream").title = 'Textile Designing';
            }
            if (streamID == 20) {
                document.getElementById("ddlStream").title = 'Tourism and Travel Technique';
            }
            if (streamID == 21) {
                document.getElementById("ddlStream").title = 'Medical Laboratory Technician';
            }
            if (streamID == 22) {
                document.getElementById("ddlStream").title = 'Crèche & Pre-School Management';
            }
            if (streamID == 23) {
                document.getElementById("ddlStream").title = 'Catering and Restaurant Management';
            }        
       
    }
    //====================Fill Stream =============
    function ColVacancy() {
        debugger;
         var intColId = parseInt(document.getElementById('ddlCollege').options[document.getElementById('ddlCollege').selectedIndex].value);
         var intStrid = parseInt(document.getElementById('ddlStream').options[document.getElementById('ddlStream').selectedIndex].value);

         // alert(intStrid);
         if (intStrid == 0) {
            // clearDDL();
             return false;
         }

         $.ajax({

             type: 'POST',
             url: 'JrCAFForm.aspx/vacancyColg',
             data: "{'intColId':'" + intColId + "','intStrid':'" + intStrid + "'}",
             contentType: "application/json; charset=utf-8",
             success: function (response) {
                 debugger;

                 var lstdtl = eval('(' + response.d + ')');
                 //                 alert(intColId);
                 //                 alert(lstdtl.length);

                 if (lstdtl.length == 0) {
                     alert("There is No Vacancy of this college !");
                     clearDDL();

                 }

                 //                for (var i = 0; i < lstdtl.length; i++) {
                 //                    intslno = parseInt(i) + 1;
                 //                    var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                 //                    $('#ddlStream').append(newOption);
                 //                }
             },
             dataType: 'json'
         });
    }
    function womenCollegeCheck() {
        womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2837', '2857', '717', '718', '723', '1465', '2872', '2922', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '2881', '3280', '3304', '3244', '312', '2088', '1011', '1051', '1055', '2686', '1027', '1028', '3315', '3367', '3351', '1289', '3244', '297', '3078', '3107', '3113', '3173', '3014', '3038', '3060', '3144', '3221', '1962');

        if (!DropDownValidation('ddlGender', 'your gender')) {  
                    
            return false;
        }
        if (!DropDownValidation('ddlCollegeDistrict', 'District Name')) {            
           
            return false;
        }
        if (!DropDownValidation('ddlCollege', 'College Name')) {              
                  
            return false;
        }
           var SelCid = $("#ddlCollege").val();         
           
        var Gender = document.getElementById('ddlGender').value;
        for (var m = 0; m < womenCollegeAry.length; m++) {
            if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[m])) {
                //alert("100 alert");    
                 alert('You cannot apply for a Women’s college,\nas your Gender shows '+camelize($("#ddlGender option:selected").text()) );               
                clearDDL();
                document.getElementById('ddlCollege').focus();
                return false;
            }
        }
    }
    function validYOJ() {      
        var yoj = parseInt($("#ddlYOJ").val());
        var yol = parseInt($("#ddlYOL").val());
        if (yol < yoj && yol > 0 && yol > 0) {
            alert('Year of Leaving can not less than or equal to Year of Joining');
            $("#ddlYOJ").val('0');
            $("#ddlYOL").val('0');
            return false;
        }
        if (yol == yoj && yol > 0 && yol > 0) {
            alert('Year of Leaving can not less than or equal to Year of Joining');
            $("#ddlYOJ").val('0');
            $("#ddlYOL").val('0');
            return false;
        }
    }
    //=======IFSC Code Validation
    function isIFSCCode(ctl) {
        var regIFSCCode = /[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;
        var IFSCCode = ctl.value;

        if (IFSCCode != '') {
            if (IFSCCode.match(regIFSCCode)) {
                return true;
            }
            else {
                alert("You Entered Wrong IFSC Code \n\n ------ or------ \n\n IFSC code should be count 11 characters \n\n-> Starting 4 should be only alphabets[A-Z] \n\n->Then 0, Remaining 6 should be accepting alphanumeric");
                ctl.value = '';
                ctl.focus();
                return false;
            }
        }
    }
    function isDisplayBankDet(ctl) {
    debugger;
        var income = ctl.value;
      
        if (income == 4 || income ==0) {
            document.getElementById('trBD').style.display = 'none';
            $("#txtacno").val('');
            $("#txtifsc").val('');
            $("#txtmicr").val('');
            $("#txtBankname").val('');
            $("#txtBrname").val('');
            $("#lblN71").text('11.');
        }
        else {
            document.getElementById('trBD').style.display = '';
            $("#lblN12").text('11.');
            $("#lblN71").text('12.');
        }
        if (($("#ddlAIncome").val() == 4) && (document.getElementById('rbtnOriya').checked) || ($("#ddlAIncome").val() == 0) && (document.getElementById('rbtnOriya').checked)) {
            document.getElementById('lblN71').innerHTML = '୧୧.';
            document.getElementById('lblN12').innerHTML = '୧୨.';
        }
        else if (($("#ddlAIncome").val() < 4) && (document.getElementById('rbtnOriya').checked) && ($("#ddlAIncome").val() != 0)) {
            document.getElementById('lblN71').innerHTML = '୧୨.';
            document.getElementById('lblN12').innerHTML = '୧୧.';
        }
        else if (($("#ddlAIncome").val() == 4) && (document.getElementById('rbtnEnglish').checked) || ($("#ddlAIncome").val() == 4) && (document.getElementById('rbtnEnglish').checked)) {
            document.getElementById('lblN71').innerHTML = '11.';
            document.getElementById('lblN12').innerHTML = '12.';
        }
        else if (($("#ddlAIncome").val() < 4) && (document.getElementById('rbtnEnglish').checked) && ($("#ddlAIncome").val() != 0)) {
            document.getElementById('lblN71').innerHTML = '12.';
            document.getElementById('lblN12').innerHTML = '11.';
        }
    }
    function clearOptions(ctl) {
        var inID = ctl.value;   
            clearDDL();
        }
        function clearBYstream() {
            setElective12();
            document.getElementById('Heading1').innerHTML = "";
            document.getElementById('cutoffST1').innerHTML = "";
            $('#Heading1').empty();
            $('#Heading2').empty();

        }

        function OLNSValidation() {
            if ((document.getElementById('tableOption').getElementsByTagName("TR").length > 1) && (document.getElementById('rbtOLNSY').checked == true)) {

                var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
                var rowsLen = Rows.length
                var j = 0;

                for (var i = 1; i < rowsLen; i++) {
                    var strm = Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value;
                    var com = Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value;
                    var ele1 = Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value;
                    var ele2 = Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[0].value;                   
//                    if (ele1.search("33") == -1 && ele2.search("33") == -1) {                      
//                        alert('As you are choosing OLNS.It is mandatory to choose a subject as Oriya.')
//                        return false;
                    //                    }

                    if (strm == 1) {
                        if (com.search("46") == -1 && ele1.search("33") == -1 && ele2.search("33") == -1) {
                            alert('As you are choosing OLNS.It is mandatory to choose a subject as Odia.')
                            return false;
                        }
                    }
                    if (strm == 2) {
                        if (com.search("47") == -1 && ele1.search("33") == -1 && ele2.search("33") == -1) {
                            alert('As you are choosing OLNS.It is mandatory to choose a subject as Odia.')
                            return false;
                        }
                    }
                    if (strm == 3) {
                        if (com.search("48") == -1 && ele1.search("33") == -1 && ele2.search("33") == -1) {
                            alert('As you are choosing OLNS.It is mandatory to choose a subject as Odia.')
                            return false;
                        }
                    }                   
                }               
            }
        }

        function resetOptionByCid() {
            if ($('#ddlGender').val() == 0) {
                document.getElementById('ddlCollege').selectedIndex = 0;
            }
            document.getElementById('ddlStream').selectedIndex = 0;
            document.getElementById('ddlCompulsory').selectedIndex = 0;
            document.getElementById('ddlELE1').selectedIndex = 0;
            document.getElementById('ddlELE2').selectedIndex = 0;
            document.getElementById('ddlELE3').selectedIndex = 0;
            document.getElementById('ddl4thELE1').selectedIndex = 0;
            document.getElementById('ddl4thELE2').selectedIndex = 0;
            document.getElementById('ddl4thELE3').selectedIndex = 0;
            document.getElementById('sp1').style.display = 'none';
            document.getElementById('sp2').style.display = 'none';
            document.getElementById('sp3').style.display = 'none';
            document.getElementById('ddlELE1').style.display = '';
            document.getElementById('ddlELE2').style.display = '';
            document.getElementById('ddlELE3').style.display = '';
        }
        function resetOptionByCDid() {

            var did = parseInt(document.getElementById('ddlCollegeDistrict').options[document.getElementById('ddlCollegeDistrict').selectedIndex].value);

            if (did == 0) {
                for (var i = document.getElementById('ddlCollege').length; i > 0; i--) {
                    document.getElementById('ddlCollege').options[i] = null;
                }
            }
            document.getElementById('ddlCollege').selectedIndex = 0;
            document.getElementById('ddlStream').selectedIndex = 0;

            for (var i = document.getElementById('ddlStream').length; i > 0; i--) {
                document.getElementById('ddlStream').options[i] = null;
            }
            for (var i = document.getElementById('ddlCompulsory').length; i > 0; i--) {
                document.getElementById('ddlCompulsory').options[i] = null;
            }
            for (var i = document.getElementById('ddlELE1').length; i > 0; i--) {
                document.getElementById('ddlELE1').options[i] = null;
            }
            for (var i = document.getElementById('ddlELE2').length; i > 0; i--) {
                document.getElementById('ddlELE2').options[i] = null;
            }
            for (var i = document.getElementById('ddlELE3').length; i > 0; i--) {
                document.getElementById('ddlELE3').options[i] = null;
            }
            for (var i = document.getElementById('ddl4thELE1').length; i > 0; i--) {
                document.getElementById('ddl4thELE1').options[i] = null;
            }
            for (var i = document.getElementById('ddl4thELE2').length; i > 0; i--) {
                document.getElementById('ddl4thELE2').options[i] = null;
            }
            for (var i = document.getElementById('ddl4thELE3').length; i > 0; i--) {
                document.getElementById('ddl4thELE3').options[i] = null;
            }
            document.getElementById('sp1').style.display = 'none';
            document.getElementById('sp2').style.display = 'none';
            document.getElementById('sp3').style.display = 'none';
            document.getElementById('ddlELE1').style.display = '';
            document.getElementById('ddlELE2').style.display = '';
            document.getElementById('ddlELE3').style.display = '';

            document.getElementById('fees1').innerHTML = '';
            document.getElementById('fees2').innerHTML = '';
            document.getElementById('Heading1').innerHTML = '';
            document.getElementById('cutoffST1').innerHTML = '';
            document.getElementById('cutoffSC1').innerHTML = '';
            document.getElementById('cutoffGen1').innerHTML = '';

            document.getElementById('Heading2').innerHTML = '';
            document.getElementById('cutoffST2').innerHTML = '';
            document.getElementById('cutoffSC2').innerHTML = '';
            document.getElementById('cutoffGen2').innerHTML = '';
        }

        function catmsg() {
            if ((document.getElementById('rbtST').checked) || (document.getElementById('rbtSC').checked)) {
                document.getElementById('lblFees').innerHTML = 'Application Fees = Rs 200';
            }
            else {
                document.getElementById('lblFees').innerHTML = 'Application Fees = Rs 300';
            }

        }
        function camelize(str) {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
                return index == 0 ? letter.toUpperCase() : letter.toLowerCase();
            }).replace(/\s+/g, '');
        }