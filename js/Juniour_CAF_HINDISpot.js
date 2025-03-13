
// JScript File
var xmlHttp = null;
var ctlTofill;
var ctlEle1;
var ctlEle2;
var ctlEle3;
var ctlfEle1;
var ctlfEle2;
var ctlfEle3;
//================valriable For Option Details=====================
var dist;
var block;
var RollNo;
var CollegeId;
var StreamId;
var CompulsoryId;
var CompulsoryId1; //------------------Added By Banaja
var CompulsoryId2; //------------------Added By Banaja
var CompulsoryId3; //------------------Added By Banaja
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
var CompSId1;
var CompSId2;
var CompSId3;
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

//BIND CUTOFF MARK DATA
function BindCutoffData(data, strmid) {
    if (document.getElementById('rbtVocational').checked) {
        VocationalStreamToolTip();
    }
    else {
        document.getElementById("ddlStream").removeAttribute('title');
    }
    if (data.length > 0) {
        $.each(JSON.parse(JSON.stringify(data)), function (index, value) {

            var cutoffST = 0;
            var cutoffSC = 0;
            var cutoffGen = 0;
            var cutoffST2 = 0;
            var cutoffSC2 = 0;
            var cutoffGen2 = 0;

            cutoffST = value.int_MarkST_Per ? value.int_MarkST_Per : false;
            cutoffSC = value.int_MarkSC_Per ? value.int_MarkSC_Per : false;
            cutoffGen = value.int_MarkGen_Per ? value.int_MarkGen_Per : false;

            cutoffST2 = value.int_MarkST_II_Per ? value.int_MarkST_II_Per : false;
            cutoffSC2 = value.int_MarkSC_II_Per ? value.int_MarkSC_II_Per : false;
            cutoffGen2 = value.int_MarkGen_II_Per ? value.int_MarkGen_II_Per : false;

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
        });
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
    //-----------Added BY Banaja(24-05-2018)---------------
    for (var i = document.getElementById('ddlFC').length; i > 0; i--) {
        document.getElementById('ddlFC').options[i] = null;
    }

    for (var i = document.getElementById('ddlMB').length; i > 0; i--) {
        document.getElementById('ddlMB').options[i] = null;
    }
    for (var i = document.getElementById('ddlLL').length; i > 0; i--) {
        document.getElementById('ddlLL').options[i] = null;
    }
    //---------------End------------------------------------
    document.getElementById('ddlELE1').disabled = false;
    document.getElementById('ddlELE2').disabled = false;
    document.getElementById('ddlELE3').disabled = false;
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
function updateOptionData1() {

    optionArray = new Array(13);
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
    optionArray[11] = new Array();

    var TextLen = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text.length;
    optionArray[0][0] = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text;
    optionArray[0][1] = document.getElementById("ddlCollege").value;
    optionArray[1][0] = document.getElementById("ddlStream").options[document.getElementById("ddlStream").selectedIndex].text;
    optionArray[1][1] = document.getElementById("ddlStream").value;
    optionArray[2][0] = document.getElementById("ddlFC").options[document.getElementById("ddlFC").selectedIndex].text; //------------1
    optionArray[2][1] = document.getElementById("ddlFC").value;
    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================

    if (document.getElementById("ddlELE1").value == 0) {
        optionArray[3][0] = '';
        optionArray[3][1] = document.getElementById("ddlELE1").value;
    }
    else {
        optionArray[3][0] = document.getElementById("ddlELE1").options[document.getElementById("ddlELE1").selectedIndex].text;
        optionArray[3][1] = document.getElementById("ddlELE1").value;
    }

    if (document.getElementById("ddlELE2").value == 0) {
        optionArray[4][0] = '';
        optionArray[4][1] = document.getElementById("ddlELE2").value;
    }
    else {
        optionArray[4][0] = document.getElementById("ddlELE2").options[document.getElementById("ddlELE2").selectedIndex].text;
        optionArray[4][1] = document.getElementById("ddlELE2").value;
    }


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
    //==========================================================================================================
    var Accomodation = 0;
    var AccText
    optionArray[9][0] = AccText;
    optionArray[9][1] = Accomodation;

    optionArray[10][0] = document.getElementById("ddlMB").options[document.getElementById("ddlMB").selectedIndex].text; //------------1
    optionArray[10][1] = document.getElementById("ddlMB").value;
    optionArray[11][0] = document.getElementById("ddlLL").options[document.getElementById("ddlLL").selectedIndex].text; //------------1
    optionArray[11][1] = document.getElementById("ddlLL").value;

}
//=================Adding Option Row in Apply Page=======================
function addRow() {
    updateOptionData1();

    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
    var OptionText;
    var Caption;

    $("#ddlGender").attr("disabled", "disabled");
    $("#rbtGeneral").attr("disabled", "disabled");
    $("#rbtSC").attr("disabled", "disabled");
    $("#rbtST").attr("disabled", "disabled");
    $("#rbtnOBC").attr("disabled", "disabled");
    $("#rbtOther").attr("disabled", "disabled");


    if (optText == 1) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
        Caption = "Choose your 2nd Option /अपना दूसरा विकल्प चुनें";
        document.getElementById('2').style.display = 'none';
        document.getElementById('3').style.display = '';
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
        document.getElementById('3').style.display = 'none';
        document.getElementById('4').style.display = '';
        Caption = "Choose your 3rd Option / अपना तीसरा विकल्प चुनें";
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
        document.getElementById('4').style.display = 'none';
        document.getElementById('5').style.display = '';
        Caption = "Choose your 4th Option / अपना चौथा विकल्प चुनें"
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
        document.getElementById('5').style.display = 'none';
        document.getElementById('6').style.display = '';
        Caption = "Choose your 5th Option / अपना 5 वां विकल्प चुनें"
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
        document.getElementById('6').style.display = 'none';
        document.getElementById('7').style.display = '';
        Caption = "Choose your 6th Option/ अपना 6 वां विकल्प चुनें"
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
        document.getElementById('7').style.display = 'none';
        document.getElementById('8').style.display = '';
        Caption = "Choose your 7th Option/ अपना 7 वां विकल्प चुनें"

    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
        document.getElementById('8').style.display = 'none';
        document.getElementById('9').style.display = '';
        Caption = "Choose your 8th Option/ अपना 8 वां विकल्प चुनें"
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
        document.getElementById('9').style.display = 'none';
        document.getElementById('10').style.display = '';
        Caption = "Choose your 9th Option/ अपना 9 वां विकल्प चुनें"

    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINETH</B></font>"
        document.getElementById('10').style.display = 'none';
        document.getElementById('11').style.display = '';
        Caption = "Choose your 10th Option/ अपना 10 वां विकल्प चुनें"
    }
    if (optText == 10) {
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
        document.getElementById('11').style.display = 'none';
        document.getElementById('12').style.display = '';
        Caption = "Choose your 11th Option/ अपना 11 वां विकल्प चुनें"
    }
    if (optText == 11) {
        OptionText = "<font color='#CC33FF' size='3'><B>ELEVENTH</B></font>"
        document.getElementById('12').style.display = 'none';
        document.getElementById('13').style.display = '';
        Caption = "Choose your 12th Option/ अपना 12 वां विकल्प चुनें"
    }
    if (optText == 12) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWELFTH</B></font>"
        document.getElementById('13').style.display = 'none';
        document.getElementById('14').style.display = '';
        Caption = "Choose your 13th Option/ अपना 13 वां विकल्प चुनें"
    }
    if (optText == 13) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRTEENTH</B></font>"
        document.getElementById('14').style.display = 'none';
        document.getElementById('15').style.display = '';
        Caption = "Choose your 14th Option/ अपना 14 वां विकल्प चुनें"
    }

    if (optText == 14) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTEENTH</B></font>"
        document.getElementById('15').style.display = 'none';
        document.getElementById('16').style.display = '';
        Caption = "Choose your 15th Option/ अपना 15 वां विकल्प चुनें"
    }

    if (optText == 15) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTEENTH</B></font>"
        document.getElementById('16').style.display = 'none';
        document.getElementById('17').style.display = '';
        Caption = "Choose your 16th Option/ अपना 16 वां विकल्प चुनें"
    }

    if (optText == 16) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTEENTH</B></font>"
        document.getElementById('17').style.display = 'none';
        document.getElementById('18').style.display = '';
        Caption = "Choose your 17th Option/ अपना 17 वां विकल्प चुनें"
    }

    if (optText == 17) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTEENTH</B></font>"
        document.getElementById('18').style.display = 'none';
        document.getElementById('19').style.display = '';
        Caption = "Choose your 18th Option/ अपना 18 वां विकल्प चुनें"
    }

    if (optText == 18) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTEENTH</B></font>"
        document.getElementById('19').style.display = 'none';
        document.getElementById('20').style.display = '';
        Caption = "Choose your 19th Option/ अपना 19 वां विकल्प चुनें"
    }

    if (optText == 19) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINETEENTH</B></font>"
        Caption = "Choose your 20th Option/ अपना 20 वां विकल्प चुनें";
        document.getElementById('20').className = "optioninctive";
        document.getElementById('20').disabled = true;
    }
    if (optText == 20) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWENTIETH</B></font>"

        Caption = "You have added 20 Options/ आपने 20 विकल्प जोड़े हैं"
    }
    td1.innerHTML = OptionText;
    //=================================================================
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"

    //------------Added By Banaja--------------------------
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[2][0] + "</br>" + optionArray[10][0] + "</br>" + optionArray[11][0] + "<input type='hidden' value=" + optionArray[2][1] + "~" + optionArray[10][1] + "~" + optionArray[11][1] + "></input>"
    td4.style.display = 'none';
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[3][0] + "</br>" + optionArray[4][0] + "</br>" + optionArray[5][0] + "<input type='hidden' value=" + optionArray[3][1] + "~" + optionArray[4][1] + "~" + optionArray[5][1] + "></input>"
    td5.style.display = 'none';
    var td6 = document.createElement("TD")
    td6.innerHTML = optionArray[6][0] + "<input type='hidden' value=" + optionArray[6][1] + "></input>" + "<input type='hidden' value=" + optionArray[9][1] + "></input>"
    td6.style.display = 'none';

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

    //======================================
}

//==================Reset the contents after row addition==========
function resetOption() {
    document.getElementById('ddlCollege').selectedIndex = 0;
    document.getElementById('ddlStream').selectedIndex = 0;
    document.getElementById('ddlELE1').selectedIndex = 0;
    document.getElementById('ddlELE2').selectedIndex = 0;
    document.getElementById('ddlELE3').selectedIndex = 0;
    document.getElementById('ddl4thELE1').selectedIndex = 0;
    document.getElementById('ddlELE1').disabled = false;
    document.getElementById('ddlELE2').disabled = false;
    //--------------------------Added by Banaja--------------------
    document.getElementById('ddlMB').selectedIndex = 0;
    document.getElementById('ddlLL').selectedIndex = 0;
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
                Caption = "Choose your 2nd Option / अपना दूसरा विकल्प चुनें";
            }
            if (i == 2) {

                OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
                Caption = "Choose your 3rd Option / अपना तीसरा विकल्प चुनें"
            }
            if (i == 3) {

                OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
                Caption = "Choose your 4th Option / अपना चौथा विकल्प चुनें"
            }
            if (i == 4) {

                OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
                Caption = "Choose your 5th Option / अपना 5 वां विकल्प चुनें"
            }
            if (i == 5) {

                OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
                Caption = "Choose your 6th Option / अपना 6 वां विकल्प चुनें"
            }
            if (i == 6) {

                OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
                Caption = "Choose your 7th Option / अपना 7 वां विकल्प चुनें"
            }
            if (i == 7) {

                OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
                Caption = "Choose your 8th Option / अपना 8 वां विकल्प चुनें"
            }
            if (i == 8) {

                OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
                Caption = "Choose your 9th Option / अपना 9 वां विकल्प चुनें"
            }
            if (i == 9) {

                OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
                Caption = "Choose your 10th Option / अपना 10 वां विकल्प चुनें"
            }

            if (i == 10) {

                OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
                Caption = "Choose your 11th Option / अपना 11 वां विकल्प चुनें"
            }

            if (i == 11) {

                OptionText = "<font color='#CC33FF' size='3'><B>ELEVENTH</B></font>"
                Caption = "Choose your 12th Option / अपना 12 वां विकल्प चुनें"
            }

            if (i == 12) {

                OptionText = "<font color='#CC33FF' size='3'><B>TWELFTH</B></font>"
                Caption = "Choose your 13th Option / अपना 13 वां विकल्प चुनें"
            }
            if (i == 13) {

                OptionText = "<font color='#CC33FF' size='3'><B>THIRTEENTH</B></font>"
                Caption = "Choose your 14th Option / अपना 14 वां विकल्प चुनें"
            }
            if (i == 14) {

                OptionText = "<font color='#CC33FF' size='3'><B>FOURTEENTH</B></font>"
                Caption = "Choose your 15th Option / अपना 15 वां विकल्प चुनें"
            }
            if (i == 15) {

                OptionText = "<font color='#CC33FF' size='3'><B>FIFTEENTH</B></font>"
                Caption = "Choose your 16th Option / अपना 16 वां विकल्प चुनें"
            }
            if (i == 16) {

                OptionText = "<font color='#CC33FF' size='3'><B>SIXTEENTH</B></font>"
                Caption = "Choose your 17th Option / अपना 17 वां विकल्प चुनें"
            }
            if (i == 17) {

                OptionText = "<font color='#CC33FF' size='3'><B>SEVENTEENTH</B></font>"
                Caption = "Choose your 18th Option / अपना 18 वां विकल्प चुनें"
            }
            if (i == 18) {

                OptionText = "<font color='#CC33FF' size='3'><B>EIGHTEENTH</B></font>"
                Caption = "Choose your 19th Option / अपना 19 वां विकल्प चुनें"
            }
            if (i == 19) {

                OptionText = "<font color='#CC33FF' size='3'><B>NINETEENTH</B></font>"
                Caption = "Choose your 20th Option / अपना 20 वां विकल्प चुनें"
            }
            if (i == 20) {

                OptionText = "<font color='#CC33FF' size='3'><B>TWENTIETH</B></font>"
                Caption = "You have added 20 Options / आपने 20 विकल्प जोड़े हैं"
            }
            //================================================================
            Rows[i].getElementsByTagName("TD")[0].innerHTML = OptionText;
            Rows[i].getElementsByTagName("TD")[3].innerHTML = "<a href='javascript:remove(" + i + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option'/></a>"
        }
        if (rowsLen == 1) {
            document.getElementById('tblChoice').style.display = 'none';

            document.getElementById('Caption').innerHTML = 'Choose your 1st Option / अपना पहला विकल्प चुनें';
            document.getElementById('3').style.display = 'none';
            document.getElementById('2').style.display = '';
            document.getElementById('2').value = '3rd Option / तीसरा विकल्प';
        }
        else {
            document.getElementById('Caption').innerHTML = Caption;
        }
        for (var k = 1; k <= 20; k++) {
            if (k == rowsLen) {
                var nth;
                var hnth;
                document.getElementById(k + 1).disabled = false;
                if (k + 1 == 2) {
                    nth = '2nd'
                    hnth = 'दूसरा'
                }
                else if (k + 1 == 3) {
                    nth = '3rd'
                    hnth = 'तीसरा'
                }
                else if (k + 1 > 3) {
                    nth = k + 1 + 'th'
                    hnth = k + 1 + ' वां'
                }

                if (document.getElementById('rbtnOriya').checked) {

                    if (nth == '2nd') {
                        nth = 'दूसरा';
                    }
                    else if (nth == '3rd') {
                        nth = 'तीसरा ';
                    }
                    else if (nth == '4th') {
                        nth = 'चौथा';
                    }
                    else if (nth == '5th') {
                        nth = '5 वां';
                    }
                    else if (nth == '6th') {
                        nth = '6 वां';
                    }
                    else if (nth == '7th') {
                        nth = '7 वां';
                    }
                    else if (nth == '8th') {
                        nth = '8 वां';
                    }
                    else if (nth == '9th') {
                        nth = '9 वां';
                    }
                    else if (nth == '10th') {
                        nth = '10 वां';
                    }
                    else if (nth == '11th') {
                        nth = '11 वां';
                    }
                    else if (nth == '12th') {
                        nth = '12 वां';
                    }
                    else if (nth == '13th') {
                        nth = '13 वां';
                    }
                    else if (nth == '14th') {
                        nth = '14 वां';
                    }
                    else if (nth == '15th') {
                        nth = '15 वां';
                    }
                    else if (nth == '16th') {
                        nth = '16 वां';
                    }
                    else if (nth == '17th') {
                        nth = '17 वां';
                    }
                    else if (nth == '18th') {
                        nth = '18 वां';
                    }
                    else if (nth == '19th') {
                        nth = '19 वां';
                    }
                    else if (nth == '20th') {
                        nth = '20 वां';
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

                    document.getElementById(k + 1).value = nth + ' Option/ ' + hnth + ' विकल्प';
                    if (k > 1) {
                        document.getElementById(k + 1).className = "optionbtnNew";
                        document.getElementById(k + 1).value = nth + ' Option/ ' + hnth + ' विकल्प';
                        document.getElementById(k + 2).style.display = 'none';
                        document.getElementById(k + 1).style.display = '';
                    }
                }

                document.getElementById(k + 1).className = "optionbtnNew";
            }
        }
    }

    if (document.getElementById('tableOption').getElementsByTagName("TR").length <= 1) {

        $("#ddlGender").removeAttr("disabled", "disabled");
        $("#rbtGeneral").removeAttr("disabled", "disabled");
        $("#rbtSC").removeAttr("disabled", "disabled");
        $("#rbtST").removeAttr("disabled", "disabled");
        $("#rbtnOBC").removeAttr("disabled", "disabled");
        $("#rbtOther").removeAttr("disabled", "disabled");
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
                Caption = "Choose your 2nd Option/ अपना दूसरा विकल्प चुनें";
            }
            if (i == 2) {
                OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
                Caption = "Choose your 3rd Option/ अपना तीसरा विकल्प चुनें";
            }
            if (i == 3) {
                OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
                Caption = "Choose your 4th Option / अपना चौथा विकल्प चुनें";
            }
            if (i == 4) {
                OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
                Caption = "Choose your 5th Option / अपना 5 वां विकल्प चुनें";
            }
            if (i == 5) {
                OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
                Caption = "Choose your 6th Option / अपना 6 वां विकल्प चुनें"
            }
            if (i == 6) {
                OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
                Caption = "Choose your 7th Option / अपना 7 वां विकल्प चुनें"
            }
            if (i == 7) {
                OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
                Caption = "Choose your 8th Option / अपना 8 वां विकल्प चुनें"
            }
            if (i == 8) {
                OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
                Caption = "Choose your 9th Option / अपना 9 वां विकल्प चुनें"
            }
            if (i == 9) {
                OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
                Caption = "Choose your 10th Option / अपना 10 वां विकल्प चुनें"
            }
            if (i == 10) {
                OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
                Caption = "Choose your 11th Option / अपना 11 वां विकल्प चुनें"
            }
            if (i == 11) {
                OptionText = "<font color='#CC33FF' size='3'><B>ELEVENTH</B></font>"
                Caption = "Choose your 12th Option / अपना 12 वां विकल्प चुनें"
            }
            if (i == 12) {
                OptionText = "<font color='#CC33FF' size='3'><B>TWELFTH</B></font>"
                Caption = "Choose your 13th Option / अपना 13 वां विकल्प चुनें"
            }
            if (i == 13) {
                OptionText = "<font color='#CC33FF' size='3'><B>THIRTEENTH</B></font>"
                Caption = "Choose your 14th Option / अपना 14 वां विकल्प चुनें"
            }
            if (i == 14) {
                OptionText = "<font color='#CC33FF' size='3'><B>FOURTEENTH</B></font>"
                Caption = "Choose your 15th Option / अपना 15 वां विकल्प चुनें"
            }
            if (i == 15) {
                OptionText = "<font color='#CC33FF' size='3'><B>FIFTEENTH</B></font>"
                Caption = "Choose your 16th Option / अपना 16 वां विकल्प चुनें"
            }
            if (i == 16) {
                OptionText = "<font color='#CC33FF' size='3'><B>SIXTEENTH</B></font>"
                Caption = "Choose your 17th Option / अपना 17 वां विकल्प चुनें"
            }
            if (i == 17) {
                OptionText = "<font color='#CC33FF' size='3'><B>SEVENTEENTH</B></font>"
                Caption = "Choose your 18th Option / अपना 18 वां विकल्प चुनें"
            }
            if (i == 18) {
                OptionText = "<font color='#CC33FF' size='3'><B>EIGHTEENTH</B></font>"
                Caption = "Choose your 19th Option / अपना 19 वां विकल्प चुनें"
            }
            if (i == 19) {
                OptionText = "<font color='#CC33FF' size='3'><B>NINETEENTH</B></font>"
                Caption = "Choose your 20th Option / अपना 20 वां विकल्प चुनें"
            }
            if (i == 20) {
                OptionText = "<font color='#CC33FF' size='3'><B>TWENTIETH</B></font>"
                Caption = "You have added 20 Options / आपने 20 विकल्प जोड़े हैं "
            }
            Rows[i].getElementsByTagName("TD")[0].innerHTML = OptionText;
            Rows[i].getElementsByTagName("TD")[6].innerHTML = "<a href='javascript:removeEdit(" + i + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option' /></a>"
            Rows[i].getElementsByTagName("TD")[7].innerHTML = "<a href='javascript:Edit(" + i + ");void(0)'><img src='../images/editIcon.gif' border='0' title='Click here to edit this option' /></a>"
            Rows[i].getElementsByTagName("TD")[8].innerHTML = "<input type='text' class='input' maxlength='1' size='1' value=" + i + "></input>";
        }
        if (rowsLen == 1) {
            document.getElementById('tblChoice').style.display = 'none';
            document.getElementById('Caption').innerHTML = 'Choose your 1st Option / अपना पहला विकल्प चुनें';
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
                    document.getElementById('2').value = nth + ' ' + 'ପସନ୍ଦ';
                }
                else if (k + 1 < 7) {
                    document.getElementById(k + 1).disabled = false;
                    document.getElementById(k + 1).value = 'Click here for ' + nth + ' Option';
                    document.getElementById(k + 1).className = "option";
                }
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

    if (document.getElementById('rbtnOriya').checked) {
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
    if (document.getElementById('ddlELE1').value == document.getElementById('ddlELE2').value) {
        debugger;
        if (document.getElementById('ddlELE1').value != '0' && document.getElementById('ddlELE2').value != '0') {
            alert('First or second or third elective subject cannot be same');
            document.getElementById('ddlELE2').focus();
            return false;
        }
    }
    //============================================================
    if (document.getElementById('rbtSanskrit').checked == false) {

    }
    //============================================================
    if (document.getElementById('rbtVocational').checked == false && document.getElementById('rbtSanskrit').checked == false) {
        var fElectiveval1 = document.getElementById('ddl4thELE1').value;
        var oElectiveval1 = document.getElementById('ddlELE1').value;
        var oElectiveval2 = document.getElementById('ddlELE2').value;
        var oElectiveval3 = document.getElementById('ddlELE3').value;
        //========================Checking fourth elective=============
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
    if (totRow < 21) {
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
                //                alert('You cannot add more than 1 option in same college & stream'); // Commented for SPOT CAF
                //                clearDDL();
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
        alert("You have already added Twenty options");
        clearDDL();
    }
}
//=======================Get Option Details================
function getOptions() {

    var a = chkReturn();

    if (a == true) {

        var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var rowsLen = Rows.length;
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
            // compulsory = document.getElementById('ddlCompulsory').value;//----------------------------1
            compulsory = document.getElementById('ddlFC').value;
            compulsory = compulsory + '~' + document.getElementById('ddlMB').value;
            compulsory = compulsory + '~' + document.getElementById('ddlLL').value;
            electiveSub = document.getElementById('ddlELE1').value;
            electiveSub = electiveSub + '~' + document.getElementById('ddlELE2').value;
            electiveSub = electiveSub + '~' + document.getElementById('ddlELE3').value;
            Felective = document.getElementById('ddl4thELE1').value;

        }
        else {
            //=============if more than one option============================
            for (var i = 1; i < rowsLen; i++) {
                //================Store CollegeIds======================
                if (collegeIds == '') {
                    collegeIds = Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value
                }
                else { collegeIds = collegeIds + '~' + Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value }

                womenCollegeAry = new Array();

                var SelCid = Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value;
                var Gender = document.getElementById('ddlGender').value;
                if (Gender == 1) {
                    womenCollegeAry = $("#hdnFemaleCol").val().split(',');
                }
                else if (Gender == 2) {
                    womenCollegeAry = $("#hdnMaleCol").val().split(',');
                }
                else if (Gender == 3) {
                    womenCollegeAry = $("#hdnMFCol").val().split(',');
                }

                for (var m = 0; m < womenCollegeAry.length; m++) {
                    if ((Gender == 1) && (SelCid == womenCollegeAry[m])) {
                        alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()) + '\nPlease remove Women’s College from the Option list.');
                        clearDDL();
                        return false;
                    }
                    else if ((Gender == 2) && (SelCid == womenCollegeAry[m])) {
                        alert('You cannot apply for a Boy’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()) + '\nPlease remove Boy’s College from the Option list.');
                        clearDDL();
                        return false;
                    }
                    else if ((Gender == 3) && (SelCid == womenCollegeAry[m])) {
                        alert('You cannot apply for a Boy’s or Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()) + '\nPlease remove Women’s / Boy’s College from the Option list.');
                        clearDDL();
                        return false;
                    }
                }

                //=================Stream Ids===========================
                if (streams == '') { streams = Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value }
                else { streams = streams + '~' + Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value }


                if (compulsory == '') {
                    compulsory = '0~0~0';
                }
                else {
                    compulsory = compulsory + '/' + '0~0~0';
                }

                if (electiveSub == '') {
                    electiveSub = '0~0~0';
                }
                else {
                    electiveSub = electiveSub + '/' + '0~0~0';
                }
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
                //                alert('You cannot add more than 1 option in same college & stream'); //Commented for SPOT CAF
                //                clearDDL();
                //                return false;
            }
        }

        if ((Rows.length < 21) && (Rows.length >= 2)) {

            var lastcollegeIds = document.getElementById('ddlCollege').value;
            var laststreams = document.getElementById('ddlStream').value;
            var lastcompulsory = document.getElementById('ddlFC').value;
            lastcompulsory = lastcompulsory + '~' + document.getElementById('ddlMB').value;
            lastcompulsory = lastcompulsory + '~' + document.getElementById('ddlLL').value;
            var lastelectiveSub = document.getElementById('ddlELE1').value;
            lastelectiveSub = lastelectiveSub + '~' + document.getElementById('ddlELE2').value;
            lastelectiveSub = lastelectiveSub + '~' + document.getElementById('ddlELE3').value;
            var lastFelective = document.getElementById('ddl4thELE1').value;
            lastFelective = lastFelective + '~' + document.getElementById('ddl4thELE2').value;
            lastFelective = lastFelective + '~' + document.getElementById('ddl4thELE3').value;

            var lastReside;

            if ((lastcollegeIds != 0) && (laststreams != 0) && (lastcompulsory != '') && (lastelectiveSub != '') && (lastFelective != '')) {
                debugger;
                collegeIds = collegeIds + '~' + lastcollegeIds;
                streams = streams + '~' + laststreams;
                compulsory = compulsory + '/' + lastcompulsory;
                electiveSub = electiveSub + '/' + lastelectiveSub;
                Felective = Felective + '~' + lastFelective;
                //                Hostel = Hostel + '~' + lastReside;
            }
        }

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

        var markmsg = '';
        markmsg = VerifyMarks();

        if (markmsg != '') {
            msg = markmsg + '\nClick OK to submit.\nClick Cancel to modify.';
        }
        else {
            msg = 'Click OK to submit.\nClick Cancel to modify.';
        }


        if (confirm(msg)) {
            $("#ddlGender").removeAttr("disabled", "disabled");
            $("#rbtGeneral").removeAttr("disabled", "disabled");
            $("#rbtSC").removeAttr("disabled", "disabled");
            $("#rbtST").removeAttr("disabled", "disabled");
            $("#rbtnOBC").removeAttr("disabled", "disabled");
            $("#rbtOther").removeAttr("disabled", "disabled");

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

    if (!DropDownValidation('ddlBoard', ' the Name of your Examination Board')) {
        return false;
    }

    if (parseInt(document.getElementById('ddlBoard').value) == 131) {

        if (!blankFieldValidation('txtOtherBoard', 'Board name')) {
            return false;
        }
        if (!WhiteSpaceValidation1st('txtOtherBoard'))
            return false;
    }

    if (!DropDownValidation('ddlYOP', 'Year of Passing')) {
        return false;
    }

    if ((document.getElementById('rbtnAnnual').checked == false) & (document.getElementById('rbtnSuppl').checked == false)) {
        alert('Please Choose Exam Type');
        $('#rbtnAnnual').focus();

        return false;
    }

    if (!DropDownValidation('ddlDay', 'the Day of your Date of Birth')) {
        return false;
    }
    if (!DropDownValidation('ddlMonth', 'the Month of your Date of Birth')) {
        return false;
    }
    if (!DropDownValidation('ddlYear', 'the Year of your Date of Birth')) {
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
    var yop = parseInt($('#ddlYOP').val());

    var gap = parseInt(yop) - parseInt(year);
    //alert(gap);
    if (gap < 13) {
        //        alert('The difference of age between the birth year and 10th passing year should be equal or greater than 13');
        alert('The difference of age between the birth year and 10th passing year should be greater than 13');
        document.getElementById('ddlYear').focus();
        return false;
    }

    //=== if Bihar board check Roll Code else Not
    if (parseInt(document.getElementById('ddlBoard').value) == 109) {
        if (!blankFieldValidation('txtRollCode', 'Roll Code')) {
            return false;
        }
        if (!chkSingleQuote('txtRollCode'))
            return false;
        if (!WhiteSpaceValidation1st('txtRollCode'))
            return false;
    }

    // === end===

    if (!blankFieldValidation('txtBoardRoll', 'Roll Number')) {
        return false;
    }
    if (!chkSingleQuote('txtBoardRoll'))
        return false;
    if (!WhiteSpaceValidation1st('txtBoardRoll'))
        return false;

    if (yop == 2024 && parseInt(document.getElementById('ddlBoard').value) == 109) {

        if ($("#txtUniqueId").val() != '' && $("#txtUniqueId").val() != null) {

            if (!NumericValidation('txtUniqueId', "Please Enter only numeric values for Applicant's Unique Id", "13"))
                return false;
        }
    }
    if (!blankFieldValidation('txtApplName', "Applicant Name")) {
        return false;
    }
    if ($("#txtApplName").val().length == 1) {
        alert("Applicant's Name is too short");
        $('#txtApplName').focus();
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
    if ($("#txtFatherName").val().length == 1) {
        alert("Father's Name is too short");
        $('#txtFatherName').focus();
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
    if ($("#txtMotherName").val().length == 1) {
        alert("Mother's Name is too short");
        $('#txtMotherName').focus();
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

    if (document.getElementById('hdnImgAppl').value == "") {
        alert("Please Upload your photo !");
        document.getElementById('ImgAppl').focus();
        return false;
    }

    //=========================Mark Validation===================
    var board = $('#ddlBoard').val();
    var yop = $('#ddlYOP').val();
    if (((board == 46) && (yop >= 2010) && (yop <= 2017)) || ((board == 103) && (yop >= 2012))) { //modified by Ritika lath on 12th Aug 2020

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

        var Tot = parseInt(document.getElementById('txtCGPA').value);
        var Max = 10.00;

        var perc = 0.00;
        if (isNaN(Max) || isNaN(Tot)) {
            perc = 0.00;
        } else {
            perc = ((Tot / Max) * 100).toFixed(2);
        }

        if (perc < 30.00) {
            alert('"Your CAF could not be proceeded as you are not fulfilling the Admission Apply Eligibility Criteria./ आपका CAF आगे नहीं बढ़ाया जा सका क्योंकि आप एडमिशन अप्लाई की पात्रता मानदंड को पूरा नहीं कर रहे हैं"');
            document.getElementById('txtCGPA').focus();
            return false;
        }

    }
    else if ((board == 116) && (yop >= 2010)) {
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

    else {
        if (!blankFieldValidation('txtMaxMark', 'Total Full Marks'))
            return false;
        if (!NumericValidation('txtMaxMark', 'Please Enter only numeric values for MARKS', '4'))
            return false;
        if (!blankFieldValidation('txtTotMark', 'Total Marks Obtained'))
            return false;
        if (!NumericValidation('txtTotMark', 'Please Enter only numeric values for MARKS', '4'))
            return false;

        if (parseInt(document.getElementById('txtTotMark').value) > parseInt(document.getElementById('txtMaxMark').value)) {
            alert('Total Mark Obtained cannot be greater than Total Full Marks');
            document.getElementById('txtTotMark').focus();
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

        if (Tot == 0) {
            alert('Total Marks Obtained cannot be 0(zero)');
            document.getElementById('txtTotMark').focus();
            return false;
        }
        if (inTotal > Tot) {
            alert('The sum of your individual marks cannot be greater than the Total Marks Obtained');
            document.getElementById('txtTotMark').focus();
            return false;
        }
        if (Tot >= Max) {
            alert('Total Marks Obtained cannot be greater than or equal to Total Full Marks');
            document.getElementById('txtTotMark').focus();
            return false;
        }
        if (Max == 0) {
            alert('Total Full Marks cannot be 0(zero)');
            document.getElementById('txtMaxMark').focus();
            return false;
        }

        if (Eng >= Tot) {
            alert('English Mark cannot be greater than or equal to Total Marks Obtained');
            document.getElementById('txtEnglish').focus();
            return false;
        }
        if (Eng >= Max) {
            alert('English Mark cannot be greater than or equal to Total Full Marks');
            document.getElementById('txtEnglish').focus();
            return false;
        }

        if (Math >= Tot) {
            alert('Mathematics Mark cannot be greater than or equal Total Marks Obtained');
            document.getElementById('txtMath').focus();
            return false;
        }
        if (Math >= Max) {
            alert('Mathematics Mark cannot be greater than or equal to Total Full Marks');
            document.getElementById('txtMath').focus();
            return false;
        }

        if (Sci >= Tot) {
            alert('Science Mark cannot be greater than or equal to Total Marks Obtained');
            document.getElementById('txtScience').focus();
            return false;
        }
        if (Sci >= Max) {
            alert('Science Mark cannot be greater than or equal to Total Full Marks');
            document.getElementById('txtScience').focus();
            return false;
        }

        if (SoSci >= Tot) {
            alert('Social Science Mark cannot be greater than or equal to Total Marks Obtained');
            document.getElementById('txtSocSci').focus();
            return false;
        }
        if (SoSci >= Max) {
            alert('Social Science Mark cannot be greater than or equal to Total Full Marks');
            document.getElementById('txtSocSci').focus();
            return false;
        }

        var perc = 0.00;
        if (isNaN(Max) || isNaN(Tot)) {
            perc = 0.00;
        } else {
            perc = ((Tot / Max) * 100).toFixed(2);
        }


        if (perc < 30.00) {
            alert('Your CAF could not be proceeded as you are not fulfilling the Admission Apply Eligibility Criteria./ आपका CAF आगे नहीं बढ़ाया जा सका क्योंकि आप एडमिशन अप्लाई की पात्रता मानदंड को पूरा नहीं कर रहे हैं');
            document.getElementById('txtMaxMark').focus();
            return false;
        }
        if (perc >= 100.00) {
            alert('Please enter valid total marks obtained');
            document.getElementById('txtTotMark').focus();
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

        if (!NumericValidation('txtCompFMark1', 'Please Enter only numeric values for MARKS', '3'))
            return false;
        if (!blankFieldValidation('txtCompPMark1', 'Pass Mark in previous exam'))
            return false;

        if (!NumericValidation('txtCompPMark1', 'Please Enter only numeric values for MARKS', '3'))
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

            if (!NumericValidation('txtCompFMark2', 'Please Enter only numeric values for MARKS', '3'))
                return false;
            if (!blankFieldValidation('txtCompPMark2', 'Pass Mark in previous exam for 2nd subject'))
                return false;
            if (!NumericValidation('txtCompPMark2', 'Please Enter only numeric values for MARKS', '3'))
                return false;

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

            if (!NumericValidation('txtCompFMark3', 'Please Enter only numeric values for MARKS', '3'))
                return false;
            if (!blankFieldValidation('txtCompPMark3', 'Pass Mark in previous exam for 3rd subject'))
                return false;
            if (!NumericValidation('txtCompPMark3', 'Please Enter only numeric values for MARKS', '3'))
                return false;

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

            if (!NumericValidation('txtCompFMark4', 'Please Enter only numeric values for MARKS', '3'))
                return false;
            if (!blankFieldValidation('txtCompPMark4', 'Pass Mark in previous exam for 4th subject'))
                return false;
            if (!NumericValidation('txtCompPMark4', 'Please Enter only numeric values for MARKS', '3'))
                return false;

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
            alert('You cannot enter same subject\ntwice for Compartment subject');
            return false;
        }

    }
    if (!blankFieldValidation('txtschname', 'Name of the School'))
        return false;
    if (!chkSingleQuote('txtschname'))
        return false;
    if (!WhiteSpaceValidation1st('txtschname'))
        return false;
    if ($("#txtschname").val().length == 1) {
        alert("School Name is too short");
        $('#txtschname').focus();
        return false;
    }

    if (!blankFieldValidation('txtschloc', 'Address of the School'))
        return false;
    if (!chkSingleQuote('txtschloc'))
        return false;
    if (!WhiteSpaceValidation1st('txtschloc'))
        return false;
    if ($("#txtschloc").val().length == 1) {
        alert("Address of the School is too short");
        $('#txtschloc').focus();
        return false;
    }

    if (document.getElementById('txtschloc').value != '') {
        var add = document.getElementById('txtCPS').value;
        var len = add.length;
        if (parseInt(len) > 100) {
            alert('Please enter Address of the School  within 100 characters');
            return false;
        }
    }

    if (!DropDownValidation('ddlinstDistrict', 'District'))
        return false;
    // }


    if (!DropDownValidation('ddlYOJ', 'Year of Joining'))
        return false;

    if (!DropDownValidation('ddlYOL', 'Year of Leaving'))
        return false;




    if (!DropDownValidation('ddlGender', 'your Gender')) {
        return false;
    }
    if (!DropDownValidation('ddlMt', 'Mother Tongue')) {
        return false;
    }

    if (!DropDownValidation('ddlNationality', 'Nationality')) {
        return false;
    }

    //===================For Correspondence address===================
    if (!DropDownValidation('ddlCState', 'State')) {
        return false;
    }
    if (!DropDownValidation('ddlCDist', 'District')) {
        return false;
    }
    if (!DropDownValidation('ddlCBlock', 'Block/Municipality')) {
        return false;
    }
    if (!blankFieldValidation('txtCPS', 'House No., Street/Village, Post Office, Police Station Name')) {
        return false;
    }

    if (!WhiteSpaceValidation1st('txtCPS'))
        return false;
    if ($("#txtCPS").val().length == 1) {
        alert("Address of the SchoolHouse No., Street/Village, Post Office, Police Station Name is too short");
        $('#txtCPS').focus();
        return false;
    }
    if (document.getElementById('txtCPS').value != '') {
        var add = document.getElementById('txtCPS').value;
        var len = add.length;
        if (parseInt(len) > 100) {
            alert('Please enter House No., Street/Village, Post Office, Police Station Name within 100 characters');
            return false;
        }
    }

    if (!blankFieldValidation('txtCPC', 'PIN Code')) {
        return false;
    }
    if (!chkSingleQuote('txtCPC'))
        return false;
    if (!WhiteSpaceValidation1st('txtCPC'))
        return false;
    if (!NumericValidation('txtCPC', 'Please write only numeric values for PIN Code', '6'))
        return false;
    if (!RepeatedNumbers('txtCPC', 1)) {
        alert('Please write valid PIN');
        document.getElementById('txtCPC').value = '';
        document.getElementById('txtCPC').focus();
        return false;
    }
    var strpin = document.getElementById('txtCPC').value;
    if ((strpin != '') && (strpin.length < 6)) {
        alert('PIN Code should be of 6 digits only');
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

    if (!blankFieldValidation('txtCMobNo', 'Mobile No.')) {
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

    if (document.getElementById('hdnMobSts').value == "1") {
        alert('This Mobile No. already Registered. Please enter another Mobile No.');
        document.getElementById('txtCMobNo').focus();
        return false;
    }

    if (!blankFieldValidation('txtCEmail', 'E-mail')) {
        return false;
    }
    if (!chkSingleQuote('txtCEmail'))
        return false;
    if (!WhiteSpaceValidation1st('txtCEmail'))
        return false;
    if (!EmailValidation('txtCEmail'))
        return false;

    if (document.getElementById('hdnEmailSts').value == "1") {
        alert('This E-mail ID already Registered. Please enter another E-mail ID.');
        document.getElementById('txtCEmail').focus();
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
    //=====================For Reservation category==================
    if ((document.getElementById('rbtST').checked == false) &&
        (document.getElementById('rbtSC').checked == false) &&
        (document.getElementById('rbtOther').checked == false) &&
        (document.getElementById('rbtnOBC').checked == false) &&
        (document.getElementById('rbtGeneral').checked == false) &&
        (document.getElementById('rbtBCW').checked == false)) {
        alert('Please select General/SC/ST/BC/EBC/WBC category');
        return false;
    }

    //Compartmental Validation Ends
    //Option Validation
    //============Checking if the applicant choose 1 option only=================
    var cIndex = document.getElementById('ddlCollege').value;
    var sIndex = document.getElementById('ddlStream').value;
    //var compIndex = document.getElementById('ddlCompulsory').value;//----------------------------1
    var comp1Index = 0; //  document.getElementById('ddlFC').value;
    var comp2Index = 0; // document.getElementById('ddlMB').value;
    var comp3Index = 0; // document.getElementById('ddlLL').value;
    var e1Index = 0; // document.getElementById('ddlELE1').value;
    var e2Index = 0; // document.getElementById('ddlELE2').value;
    var e3Index = 0; // document.getElementById('ddlELE3').value;
    var f1Index = 0; //  document.getElementById('ddl4thELE1').value;

    //    if ((document.getElementById('tableOption').getElementsByTagName("TR").length < 6) && (cIndex == 0) && (sIndex == 0) && (comp1Index == 0) && (comp2Index == 0) && (comp3Index == 0) && (e1Index == 0) && (e2Index == 0) && (e3Index == 0) && (f1Index == 0)) {
    //        alert('Please select minimum 5 Option details ');
    //        document.getElementById('ddlCollege').focus();
    //        return false;
    //    }

    //    if ((cIndex != 0) && (sIndex != 0)) {
    //        if ((document.getElementById('tableOption').getElementsByTagName("TR").length < 5)) {
    //            alert('Please select minimum 5 Option details ');
    //            document.getElementById('ddlCollege').focus();
    //            return false;
    //        }
    //    }

    //    if ((document.getElementById('tableOption').getElementsByTagName("TR").length >= 1) && (cIndex != 0)) {
    //        if (!DropDownValidation('ddlCollege', 'College Name'))
    //            return false;
    //        if (!DropDownValidation('ddlStream', 'Stream Name'))
    //            return false;
    //        //=======================Checking Elective values1=============
    //        if (document.getElementById('ddlELE1').value == document.getElementById('ddlELE2').value) {
    //            if (document.getElementById('ddlELE1').value != '0' && document.getElementById('ddlELE2').value != '0') {
    //                alert('First or second or third elective subject cannot be same');
    //                document.getElementById('ddlELE2').focus();
    //                return false;
    //            }
    //        }

    //    }

    //===========IF THERE IS DATA IN ADD MORE TABLE AND ALSO SELECTED ON DDL=====
    //    if ((document.getElementById('tableOption').getElementsByTagName("TR").length >= 21) && (cIndex != 0) && (sIndex != 0) && (comp1Index != 0) && (comp2Index != 0) && (comp3Index != 0) && (e1Index != 0) && (e2Index != 0) && (e3Index != 0) && (f1Index != 0)) {
    //        alert('You have already added 20 options\n this Option cannot be added');
    //        clearDDL();
    //    }

    //    if (document.getElementById('rbtnYes').checked == false && document.getElementById('rbtnNo').checked == false) {
    //        alert('Please select whether you want to add more options or not.');
    //        document.getElementById('rbtnYes').focus();
    //        return false;
    //    }
    //    if (document.getElementById('rbtnYes').checked == true && document.getElementById('rbtnNo').checked == false) {
    //        alert('Please select No if you do not want to add more options.');
    //        document.getElementById('rbtnNo').focus();
    //        return false;
    //    }


    if (document.getElementById('rbtnKGABC_0').checked) {
        //if (document.getElementById('ddlBoard').value != 109) {
        //    alert('Please select BSEB,Bihar as Name of the Examination Board as you passed 10th exam from Kasturba Gandhi Balika Vidyalaya?');
        //    return false;
        //}
        //if (document.getElementById('ddlGender').value != 2) {
        //    alert('Please select Female as gender as you passed 10th exam from Kasturba Gandhi Balika Vidyalaya?');
        //    return false;
        //}

        if (document.getElementById('ddlBoard').value != 109 || document.getElementById('ddlGender').value != 2) {
            alert('For Choosing Yes, you must be a female student and should have passed Class Tenth examination from Bihar School Examination Board (BSEB), while residing at Kasturba Gandhi Balika Chhatravas.');
            return false;
        }
    }

    if (document.getElementById('cbAadharAgree').checked == false) {
        if (document.getElementById('txtAadhar').value == '') {
            alert('Please enter Aadhaar number');
            return false;
        }
        if (document.getElementById('txtAadhar').value.length != 12 || ValidAadhaarNo(document.getElementById('txtAadhar').value) == false) {
            alert('Invalid Aadhaar number');
            return false;
        }
    }


    if (document.getElementById('cbAgree1').checked == false) {
        alert('Please Confirm.');
        document.getElementById('cbAgree1').focus();
        return false;
    }

    if (document.getElementById('cbAgree2').checked == false) {
        alert('Please Confirm.');
        document.getElementById('cbAgree2').focus();
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
    //CompulsoryId = document.getElementById('hidComplusory').value;

    CompulsoryId1 = document.getElementById('hidComplusory1').value;
    CompulsoryId2 = document.getElementById('hidComplusory2').value;
    CompulsoryId3 = document.getElementById('hidComplusory3').value;
    Elective1 = document.getElementById('hidElective1').value;
    Elective2 = document.getElementById('hidElective2').value;
    Elective3 = document.getElementById('hidElective3').value;
    FElective1 = document.getElementById('hidFElelective1').value;

    //=========================Getting names=================
    CText = document.getElementById('hidCname').value;
    SText = document.getElementById('hidSname').value;
    //CompSId = document.getElementById('hidCompName').value;

    CompSId1 = document.getElementById('hidCompName1').value;
    CompSId2 = document.getElementById('hidCompName2').value;
    CompSId3 = document.getElementById('hidCompName3').value;
    E1Text = document.getElementById('hidE1name').value;
    E2Text = document.getElementById('hidE2name').value;
    E3Text = document.getElementById('hidE3name').value;
    F1Text = document.getElementById('hidF1Ele').value;

    //======================================================
    optAry = new Array();
    colAry = new Array();
    sAry = new Array();
    // compAry = new Array();
    compAry1 = new Array();
    compAry2 = new Array();
    compAry3 = new Array();
    ele1Ary = new Array();
    ele2Ary = new Array();
    ele3Ary = new Array();
    fele1Ary = new Array();
    //    fele2Ary = new Array();
    //    fele3Ary = new Array();
    hosAry = new Array();
    //============for text=================
    colAry1 = new Array();
    sAry1 = new Array();
    //compAry1 = new Array();
    compAry11 = new Array();
    compAry21 = new Array();
    compAry31 = new Array();
    ele1Ary1 = new Array();
    ele2Ary1 = new Array();
    ele3Ary1 = new Array();
    fele1Ary1 = new Array();

    //================================
    if (cids.indexOf('~') > 0) {
        //==============Splitiing the text & ids==========
        optAry = optionId.split('~');
        colAry = cids.split('~');
        colAry1 = CText.split('~');
        sAry = StreamId.split('~');
        sAry1 = SText.split('~');

        compAry1 = CompulsoryId1.split('~');
        compAry11 = CompSId1.split('~');
        compAry2 = CompulsoryId2.split('~');
        compAry21 = CompSId2.split('~');
        compAry3 = CompulsoryId3.split('~');
        compAry31 = CompSId3.split('~');

        ele1Ary = Elective1.split('~');
        ele1Ary1 = E1Text.split('~');
        ele2Ary = Elective2.split('~');
        ele2Ary1 = E2Text.split('~');
        ele3Ary = Elective3.split('~');
        ele3Ary1 = E3Text.split('~');
        fele1Ary = FElective1.split('~');
        fele1Ary1 = F1Text.split('~');

        fele3Ary1 = F3Text.split('~');
        hosAry = Accomodation.split('~');
        //================================================
        for (var i = 0; i < colAry.length; i++) {
            optionId = optAry[i];
            CollegeId = colAry[i];
            CText = colAry1[i];
            StreamId = sAry[i];
            SText = sAry1[i];

            CompulsoryId1 = compAry1[i];
            CompSId1 = compAry11[i];
            CompulsoryId2 = compAry2[i];
            CompSId2 = compAry21[i];
            CompulsoryId3 = compAry3[i];
            CompSId3 = compAry31[i];

            Elective1 = ele1Ary[i];
            E1Text = ele1Ary1[i];
            Elective2 = ele2Ary[i];
            E2Text = ele2Ary1[i];
            Elective3 = ele3Ary[i];
            E3Text = ele3Ary1[i];
            FElective1 = fele1Ary[i];
            F1Text = fele1Ary1[i];

            Accomodation = hosAry[i];
            DisplayRow();
        }
    }
    else {
        optionId = document.getElementById('hidOptionIds').value;
        CollegeId = document.getElementById('hidCollege').value;
        StreamId = document.getElementById('hidStream').value;
        CompulsoryId1 = document.getElementById('hidComplusory1').value;
        CompulsoryId2 = document.getElementById('hidComplusory2').value;
        CompulsoryId3 = document.getElementById('hidComplusory3').value;

        Elective1 = document.getElementById('hidElective1').value;
        Elective2 = document.getElementById('hidElective2').value;
        Elective3 = document.getElementById('hidElective3').value;
        FElective1 = document.getElementById('hidFElelective1').value;

        //=========================Getting names=================
        CText = document.getElementById('hidCname').value;
        SText = document.getElementById('hidSname').value;
        CompSId1 = document.getElementById('hidCompName1').value;
        CompSId2 = document.getElementById('hidCompName2').value;
        CompSId3 = document.getElementById('hidCompName3').value;

        E1Text = document.getElementById('hidE1name').value;
        E2Text = document.getElementById('hidE2name').value;
        E3Text = document.getElementById('hidE3name').value;
        F1Text = document.getElementById('hidF1Ele').value;

        //=======================================================
        DisplayRow();
    }
}
///===============================add options==================
//=========================Add Option Details=====================================
function showOptionData() {
    optionArray = new Array(13);
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
    optionArray[11] = new Array();
    optionArray[12] = new Array();
    optionArray[0][0] = CText;
    optionArray[0][1] = CollegeId;
    optionArray[1][0] = SText;
    optionArray[1][1] = StreamId;
    optionArray[2][0] = CompSId1;
    optionArray[2][1] = CompulsoryId1;
    optionArray[3][0] = E1Text;
    optionArray[3][1] = Elective1;
    optionArray[4][0] = E2Text;
    optionArray[4][1] = Elective2;
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

    //==========================================================================================================
    var AccText;

    optionArray[9][0] = AccText;
    optionArray[9][1] = Accomodation;
    optionArray[10][0] = '';
    optionArray[10][1] = optionId;
    optionArray[11][0] = CompSId2;
    optionArray[11][1] = CompulsoryId2;
    optionArray[12][0] = CompSId3;
    optionArray[12][1] = CompulsoryId3;
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

    if (optText == 1) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
        Caption = "Choose your 2nd Option/ अपना दूसरा विकल्प चुनें";
        document.getElementById('2').style.display = 'none';
        document.getElementById('3').style.display = '';
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
        Caption = "Choose your 3rd Option/ अपना तीसरा विकल्प चुनें"
        document.getElementById('3').value = 'You have selected 3rd Option';
        document.getElementById('3').className = "optioninctive";
        document.getElementById('3').disabled = true;
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
        Caption = "Choose your 4th Option/ अपना चौथा विकल्प चुनें"
        document.getElementById('4').value = 'You have selected 4th Option';
        document.getElementById('4').className = "optioninctive";
        document.getElementById('4').disabled = true;
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
        Caption = "Choose your 5th Option/ अपना 5 वां विकल्प चुनें"
        document.getElementById('5').value = 'You have selected 5th Option';
        document.getElementById('5').className = "optioninctive";
        document.getElementById('5').disabled = true;
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
        Caption = "Choose your 6th Option/ अपना 6 वां विकल्प चुनें"
        document.getElementById('6').value = 'You have selected 6th Option';
        document.getElementById('6').className = "optioninctive";
        document.getElementById('6').disabled = true;
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
        Caption = "Choose your 7th Option/ अपना 7 वां विकल्प चुनें"
        document.getElementById('7').value = 'You have selected 7th Option';
        document.getElementById('7').className = "optioninctive";
        document.getElementById('7').disabled = true;
    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
        Caption = "Choose your 8th Option/ अपना 8 वां विकल्प चुनें"
        document.getElementById('8').value = 'You have selected 8th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('8').className = "optioninctive";
        document.getElementById('8').disabled = true;
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
        Caption = "Choose your 9th Option/ अपना 9 वां विकल्प चुनें"
        document.getElementById('9').value = 'You have selected 9th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('9').className = "optioninctive";
        document.getElementById('9').disabled = true;
    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
        Caption = "Choose your 10th Option/ अपना 10 वां विकल्प चुनें"
        document.getElementById('10').value = 'You have selected 10th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('10').className = "optioninctive";
        document.getElementById('10').disabled = true;
    }
    if (optText == 10) {
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
        Caption = "Choose your 11th Option/ अपना 11 वां विकल्प चुनें"
        document.getElementById('11').value = 'You have selected 11th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('11').className = "optioninctive";
        document.getElementById('11').disabled = true;
    }
    if (optText == 11) {
        OptionText = "<font color='#CC33FF' size='3'><B>ELEVENTH</B></font>"
        Caption = "Choose your 12th Option/ अपना 12 वां विकल्प चुनें"
        document.getElementById('12').value = 'You have selected 12th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('12').className = "optioninctive";
        document.getElementById('12').disabled = true;
    }
    if (optText == 12) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWELFTH</B></font>"
        Caption = "Choose your 13th Option/ अपना 13 वां विकल्प चुनें"
        document.getElementById('13').value = 'You have selected 13th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('13').className = "optioninctive";
        document.getElementById('13').disabled = true;
    }
    if (optText == 13) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRTEENTH</B></font>"
        Caption = "Choose your 14th Option/ अपना 14 वां विकल्प चुनें"
        document.getElementById('14').value = 'You have selected 14th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('14').className = "optioninctive";
        document.getElementById('14').disabled = true;
    }

    if (optText == 14) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTEENTH</B></font>"
        Caption = "Choose your 15th Option/ अपना 15 वां विकल्प चुनें"
        document.getElementById('15').value = 'You have selected 15th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('15').className = "optioninctive";
        document.getElementById('15').disabled = true;
    }

    if (optText == 15) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTEENTH</B></font>"
        Caption = "Choose your 16th Option/ अपना 16 वां विकल्प चुनें"
        document.getElementById('16').value = 'You have selected 16th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('16').className = "optioninctive";
        document.getElementById('16').disabled = true;
    }

    if (optText == 16) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTEENTH</B></font>"
        Caption = "Choose your 17th Option/ अपना 17 वां विकल्प चुनें"
        document.getElementById('17').value = 'You have selected 17th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('17').className = "optioninctive";
        document.getElementById('17').disabled = true;
    }

    if (optText == 17) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTEENTH</B></font>"
        Caption = "Choose your 18th Option/ अपना 18 वां विकल्प चुनें"
        document.getElementById('18').value = 'You have selected 18th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('18').className = "optioninctive";
        document.getElementById('18').disabled = true;
    }
    if (optText == 18) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTEENTH</B></font>"
        Caption = "Choose your 19th Option/ अपना 19 वां विकल्प चुनें"
        document.getElementById('19').value = 'You have selected 19th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('19').className = "optioninctive";
        document.getElementById('19').disabled = true;
    }
    if (optText == 19) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINETEENTH</B></font>"
        Caption = "Choose your 20th Option/ अपना 20 वां विकल्प चुनें"
        document.getElementById('20').value = 'You have selected 20th Option';
        //Caption = "You have added 6 Options"
        document.getElementById('20').className = "optioninctive";
        document.getElementById('20').disabled = true;
    }


    if (optText == 20) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWENTIETH</B></font>"
        Caption = "You have added 20 Options/ आपने 20 विकल्प जोड़े हैं"
    }
    td1.innerHTML = OptionText;
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"

    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[2][0] + "</br>" + optionArray[11][0] + "</br>" + optionArray[12][0] + "<input type='hidden' value=" + optionArray[2][1] + "~" + optionArray[11][1] + "~" + optionArray[12][1] + "></input>"
    td4.innerHTML.style.display = 'none';
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[3][0] + "</br>" + optionArray[4][0] + "</br>" + optionArray[5][0] + "<input type='hidden' value=" + optionArray[3][1] + "~" + optionArray[4][1] + "~" + optionArray[5][1] + "></input>"
    td5.innerHTML.style.display = 'none';
    var td6 = document.createElement("TD")
    td6.innerHTML = optionArray[6][0] + "</br>" + "<input type='hidden' value=" + optionArray[6][1] + "></input>" + "<input type='hidden' value=" + optionArray[9][1] + "></input>"
    td6.innerHTML.style.display = 'none';
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
            // compulsory = document.getElementById('ddlCompulsory').value;//-----------------1
            compulsory = document.getElementById('ddlFC').value;
            compulsory = compulsory + '~' + document.getElementById('ddlMB').value;
            compulsory = compulsory + '~' + document.getElementById('ddlLL').value;
            electiveSub = document.getElementById('ddlELE1').value;
            electiveSub = electiveSub + '~' + document.getElementById('ddlELE2').value;
            electiveSub = electiveSub + '~' + document.getElementById('ddlELE3').value;
            Felective = document.getElementById('ddl4thELE1').value;
            options = 1;

            //alert("3rd alert");
            var SelCid = document.getElementById('ddlCollege').value;
            var Gender = document.getElementById('ddlGender').value;
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

                //=================Stream Ids===========================
                if (streams == '') { streams = Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value }
                else { streams = streams + '~' + Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value }

                //=====================Compulsory Ids===================
                if (compulsory == '') { compulsory = Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value }
                else { compulsory = compulsory + '/' + Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value }
                //==========================Elective ids================
                if (electiveSub == '') { electiveSub = Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value }
                else { electiveSub = electiveSub + '/' + Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value }
                //==============================Fourth Elective ids======
                if (Felective == '') { Felective = Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[0].value }
                else { Felective = Felective + '~' + Rows[i].getElementsByTagName("TD")[5].getElementsByTagName("input")[0].value }
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
            // var lastcompulsory = document.getElementById('ddlCompulsory').value;//---------------------1
            var lastcompulsory = document.getElementById('ddlFC').value;
            lastcompulsory = lastcompulsory + '~' + document.getElementById('ddlMB').value;
            lastcompulsory = lastcompulsory + '~' + document.getElementById('ddlLL').value;

            var lastelectiveSub = document.getElementById('ddlELE1').value;
            lastelectiveSub = lastelectiveSub + '~' + document.getElementById('ddlELE2').value;
            lastelectiveSub = lastelectiveSub + '~' + document.getElementById('ddlELE3').value;
            var lastFelective = document.getElementById('ddl4thELE1').value;
            var lastReside;

            var lastoptions = Rows.length;

            if ((lastcollegeIds != 0) && (laststreams != 0) && (lastcompulsory != 0) && (lastelectiveSub != '') && (lastFelective != '')) {
                collegeIds = collegeIds + '~' + lastcollegeIds;
                streams = streams + '~' + laststreams;
                compulsory = compulsory + '/' + lastcompulsory;
                electiveSub = electiveSub + '/' + lastelectiveSub;
                Felective = Felective + '~' + lastFelective;
                //                Hostel = Hostel + '~' + lastReside;
                options = options + '~' + lastoptions;
            }
        }

        document.getElementById('hidOptions').value = options;
        document.getElementById('hidCollege').value = collegeIds;
        document.getElementById('hidStream').value = streams;
        document.getElementById('hidComplusory').value = compulsory;
        document.getElementById('hidElectives').value = electiveSub;
        document.getElementById('hidFourthElelectives').value = Felective;
        //        document.getElementById('hidHostel').value = Hostel;
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
            msg = 'Click OK to submit.\nClick Cancel  to modify.';
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
    debugger;

    optionArray = new Array(12);
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
    optionArray[11] = new Array();
    optionArray[12] = new Array();
    var TextLen = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text.length;
    optionArray[0][0] = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text;
    optionArray[0][1] = document.getElementById("ddlCollege").value;
    optionArray[1][0] = document.getElementById("ddlStream").options[document.getElementById("ddlStream").selectedIndex].text;
    optionArray[1][1] = document.getElementById("ddlStream").value;

    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================
    //alert((document.getElementById("ddlELE3").value)s

    if (document.getElementById("ddlELE1").value == 0) {
        optionArray[3][0] = '';
        optionArray[3][1] = document.getElementById("ddlELE1").value;
    }
    else {
        optionArray[3][0] = document.getElementById("ddlELE1").options[document.getElementById("ddlELE1").selectedIndex].text;
        optionArray[3][1] = document.getElementById("ddlELE1").value;
    }

    if (document.getElementById("ddlELE2").value == 0) {
        optionArray[4][0] = '';
        optionArray[4][1] = document.getElementById("ddlELE2").value;
    }
    else {
        optionArray[4][0] = document.getElementById("ddlELE2").options[document.getElementById("ddlELE2").selectedIndex].text;
        optionArray[4][1] = document.getElementById("ddlELE2").value;
    }


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


    var Accomodation = 0;
    var AccText

    optionArray[9][0] = AccText;
    optionArray[9][1] = Accomodation;

    //-----------Added By banaja For Add another 3 Compulsory Subject----------------------------------------
    optionArray[10][0] = document.getElementById("ddlFC").options[document.getElementById("ddlFC").selectedIndex].text;
    optionArray[10][1] = document.getElementById("ddlFC").value;

    optionArray[11][0] = document.getElementById("ddlMB").options[document.getElementById("ddlMB").selectedIndex].text;
    optionArray[11][1] = document.getElementById("ddlMB").value;

    optionArray[12][0] = document.getElementById("ddlLL").options[document.getElementById("ddlLL").selectedIndex].text;
    optionArray[12][1] = document.getElementById("ddlLL").value;
    //==========================================================================================================
}
//=================Adding Option Row=======================
function CreateNewRow() {
    updateOptionData();
    debugger;
    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
    var OptionText;
    var Caption;
    if (optText == 1) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
        Caption = "Choose your 2nd Option/ अपना दूसरा विकल्प चुनें"
        document.getElementById('2').value = 'You have selected 2nd Option';
        document.getElementById('2').className = "optioninctive";
        document.getElementById('2').disabled = true;
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
        Caption = "Choose your 3rd Option/ अपना तीसरा विकल्प चुनें"
        document.getElementById('3').value = 'You have selected 3rd Option';
        document.getElementById('3').className = "optioninctive";
        document.getElementById('3').disabled = true;
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
        Caption = "Choose your 4th Option/ अपना चौथा विकल्प चुनें"
        document.getElementById('4').value = 'You have selected 4th Option';
        document.getElementById('4').className = "optioninctive";
        document.getElementById('4').disabled = true;
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
        Caption = "Choose your 5th Option/ अपना 5 वां विकल्प चुनें"
        document.getElementById('5').value = 'You have selected 5th Option';
        document.getElementById('5').className = "optioninctive";
        document.getElementById('5').disabled = true;
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
        Caption = "Choose your 6th Option/ अपना 6 वां विकल्प चुनें"
        document.getElementById('6').value = 'You have selected 6th Option';
        document.getElementById('6').className = "optioninctive";
        document.getElementById('6').disabled = true;
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
        Caption = "Choose your 7th Option/ अपना 7 वां विकल्प चुनें"
        document.getElementById('7').value = 'You have selected 7th Option';
        document.getElementById('7').className = "optioninctive";
        document.getElementById('7').disabled = true;
    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
        Caption = "Choose your 8th Option/ अपना 8 वां विकल्प चुनें";
        document.getElementById('8').value = 'You have selected 8th Option';
        document.getElementById('8').className = "optioninctive";
        document.getElementById('8').disabled = true;
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
        Caption = "Choose your 9th Option/ अपना 9 वां विकल्प चुनें";
        document.getElementById('9').value = 'You have selected 9th Option';
        document.getElementById('9').className = "optioninctive";
        document.getElementById('9').disabled = true;
    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
        Caption = "Choose your 10th Option/ अपना 10 वां विकल्प चुनें";
        document.getElementById('10').value = 'You have selected 10th Option';
        document.getElementById('10').className = "optioninctive";
        document.getElementById('10').disabled = true;
    }
    if (optText == 10) {
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
        Caption = "Choose your 11th Option/ अपना 11 वां विकल्प चुनें";
        document.getElementById('11').value = 'You have selected 11th Option';
        document.getElementById('11').className = "optioninctive";
        document.getElementById('11').disabled = true;
    }
    if (optText == 11) {
        OptionText = "<font color='#CC33FF' size='3'><B>ELEVENTH</B></font>"
        Caption = "Choose your 12th Option/ अपना 12 वां विकल्प चुनें";
        document.getElementById('12').value = 'You have selected 12th Option';
        document.getElementById('12').className = "optioninctive";
        document.getElementById('12').disabled = true;
    }
    if (optText == 12) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWELFTH</B></font>"
        Caption = "Choose your 13th Option/ अपना 13 वां विकल्प चुनें";
        document.getElementById('13').value = 'You have selected 13th Option';
        document.getElementById('13').className = "optioninctive";
        document.getElementById('13').disabled = true;
    }
    if (optText == 13) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRTEENTH</B></font>"
        Caption = "Choose your 14th Option/ अपना 14 वां विकल्प चुनें";
        document.getElementById('14').value = 'You have selected 14th Option';
        document.getElementById('14').className = "optioninctive";
        document.getElementById('14').disabled = true;
    }
    if (optText == 14) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTEENTH</B></font>"
        Caption = "Choose your 15th Option/ अपना 15 वां विकल्प चुनें";
        document.getElementById('15').value = 'You have selected 15th Option';
        document.getElementById('15').className = "optioninctive";
        document.getElementById('15').disabled = true;
    }
    if (optText == 15) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTEENTH</B></font>"
        Caption = "Choose your 16th Option/ अपना 16 वां विकल्प चुनें";
        document.getElementById('16').value = 'You have selected 15th Option';
        document.getElementById('16').className = "optioninctive";
        document.getElementById('16').disabled = true;
    }
    if (optText == 16) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTEENTH</B></font>"
        Caption = "Choose your 17th Option/ अपना 17 वां विकल्प चुनें";
        document.getElementById('17').value = 'You have selected 17th Option';
        document.getElementById('17').className = "optioninctive";
        document.getElementById('17').disabled = true;
    }
    if (optText == 17) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTEENTH</B></font>"
        Caption = "Choose your 18th Option/ अपना 18 वां विकल्प चुनें";
        document.getElementById('18').value = 'You have selected 18th Option';
        document.getElementById('18').className = "optioninctive";
        document.getElementById('18').disabled = true;
    }
    if (optText == 18) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTEENTH</B></font>"
        Caption = "Choose your 19th Option/ अपना 19 वां विकल्प चुनें";
        document.getElementById('19').value = 'You have selected 19th Option';
        document.getElementById('19').className = "optioninctive";
        document.getElementById('19').disabled = true;
    }
    if (optText == 19) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINETEENTH</B></font>"
        Caption = "Choose your 20th Option/ अपना 20 वां विकल्प चुनें";
        document.getElementById('20').value = 'You have selected 20th Option';
        document.getElementById('20').className = "optioninctive";
        document.getElementById('20').disabled = true;
    }
    if (optText == 20) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWENTIETH</B></font>"
        Caption = "You have added 20 Options/ आपने 20 विकल्प जोड़े हैं";
    }
    td1.innerHTML = OptionText;
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"

    //    var td4 = document.createElement("TD")
    //    td4.innerHTML = optionArray[10][0] + "</br>" + optionArray[11][0] + "</br>" + optionArray[12][0] + "<input type='hidden' value=" + optionArray[10][1] + "~" + optionArray[11][1] + "~" + optionArray[12][1] + "></input>"
    //    var td5 = document.createElement("TD")
    //    td5.innerHTML = optionArray[3][0] + "</br>" + optionArray[4][0] + "</br>" + optionArray[5][0] + "<input type='hidden' value=" + optionArray[3][1] + "~" + optionArray[4][1] + "~" + optionArray[5][1] + "></input>"
    //    var td6 = document.createElement("TD")
    //    td6.innerHTML = optionArray[6][0] + "<input type='hidden' value=" + optionArray[6][1] + "></input>" + "<input type='hidden' value=" + optionArray[9][1] + "></input>"

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

    //==========================================================
    if (!DropDownValidation('ddlStream', 'Stream Name'))
        return false;
    //=======================Checking Elective values2=============
    if (document.getElementById('ddlELE2').value == document.getElementById('ddlELE3').value) {
        debugger;
        if (document.getElementById('ddlELE2').value != '0' && document.getElementById('ddlELE3').value != '0') {
            alert('First or second or third elective subject cannot be same');
            document.getElementById('ddlELE3').focus();
            return false;
        }
    }
    if (document.getElementById('ddlELE1').value == document.getElementById('ddlELE3').value) {
        debugger;
        if (document.getElementById('ddlELE1').value != '0' && document.getElementById('ddlELE3').value != '0') {
            alert('First or second or third elective subject cannot be same');
            document.getElementById('ddlELE3').focus();
            return false;
        }
    }
    //============================================================
    if (!DropDownValidation('ddl4thELE1', 'Please select your fourth elective subject according\n to the preference you want'))
        return false;
    //==============================================================
    var fElectiveval1 = document.getElementById('ddl4thELE1').value;
    var oElectiveval1 = document.getElementById('ddlELE1').value;
    var oElectiveval2 = document.getElementById('ddlELE2').value;
    var oElectiveval3 = document.getElementById('ddlELE3').value;

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
    if (totRow < 21) {
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
                //                alert('You cannot add more than 1 option in same college & stream');// Comented for SPOT CAF
                //                clearDDL();
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
        alert("You have already added Twenty options");
        clearDDL();
    }

}

//============Function to set Elective Subjects when stream is Science===========
function setEle(ele1, ele2, ele3, comp1, comp2, comp3) {
    document.getElementById("ddlFC").value = comp1;
    document.getElementById("ddlMB").value = comp2;
    document.getElementById("ddlLL").value = comp3;
    document.getElementById('ddlELE1').value = ele1;
    document.getElementById('ddlELE2').value = ele2;
    document.getElementById('ddlELE3').value = ele3;
}

function setElective12() {
    var streamID = document.getElementById("ddlStream").value;

    if (streamID == 2)//for Science==================
    {
        setTimeout('setEle("49","0","0","2","0","0")', 1000);  //    49  Chemistry  2  NRB-HINDI
        document.getElementById('ddlELE1').value = 49;
        document.getElementById('ddlELE2').value = 0;
        document.getElementById('ddlELE3').value = 0;

        for (var i = 0; i < document.getElementById('ddlELE3').length; i++) {
            if ((document.getElementById('ddlELE3').options[i].value == '13') || (document.getElementById('ddlELE3').options[i].value == '14')) {
                document.getElementById('ddlELE3').options[i] = null;
                document.getElementById('ddl4thELE1').options[i] = null;
            }
        }
    }
    else if (streamID == 3) {
        setTimeout('setEle("0","0","0","3","0","0")', 1000);  // 31 Accountancy  39 Business Mathematics and Statistics  40 Business Studies and Management   3 NRB-HINDI
        document.getElementById('ddlELE1').value = 0;
        document.getElementById('ddlELE2').value = 0;
        document.getElementById('ddlELE3').value = 0;
        for (var i = 0; i < document.getElementById('ddl4thELE1').length; i++) {
            if ((document.getElementById('ddl4thELE1').options[i].value == '1') || (document.getElementById('ddl4thELE1').options[i].value == '2') || (document.getElementById('ddl4thELE1').options[i].value == '3')) {
                document.getElementById('ddl4thELE1').options[i] = null;
            }
        }
    }
    else if (streamID == 1) {
        setTimeout('setEle("0","0","0","1","0","0")', 1000);  //  1 NRB-HINDI
        document.getElementById('ddlELE1').value = 0;
        document.getElementById('ddlELE2').value = 0;
        document.getElementById('ddlELE3').value = 0;
    }
    else if (streamID == 0) {
        setTimeout('setEle("0","0","0","0","0","0")', 1000);
        document.getElementById('ddlELE1').value = 0;
        document.getElementById('ddlELE2').value = 0;
        document.getElementById('ddlELE3').value = 0;

        document.getElementById('ddlELE1').style.display = "";
        document.getElementById('ddlELE2').style.display = "";
        document.getElementById('ddlELE3').style.display = "";
    }

    else if ((document.getElementById('rbtSanskrit').checked) && (streamID == 24)) {
        setTimeout('setEle("0","0","0","215")', 1000);
    }
    else if ((document.getElementById('rbtVocational').checked) && (streamID == 4)) {
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
        alert('English Mark cannot be greater than or equal to Total Marks obtained');
        document.getElementById('txtEnglish').focus();
        return false;
    }
    if (Eng >= Max) {
        alert('English Mark cannot be greater than or equal to Total Full Marks');
        document.getElementById('txtEnglish').focus();
        return false;
    }
    //    if (Math == 0) {
    //        alert('Mathematics Mark cannot be 0(zero)');
    //        document.getElementById('txtMath').focus();
    //        return false;
    //    }
    if (Math >= Tot) {
        alert('Mathematics Mark cannot be greater than or equal to Total Marks obtained');
        document.getElementById('txtMath').focus();
        return false;
    }
    if (Math >= Max) {
        alert('Mathematics Mark cannot be greater than or equal to Total Full Marks');
        document.getElementById('txtMath').focus();
        return false;
    }
    //    if (Sci == 0) {
    //        alert('Science Mark cannot be 0(zero)');
    //        document.getElementById('txtScience').focus();
    //        return false;
    //    }
    if (Sci >= Tot) {
        alert('Science Mark cannot be greater than or equal to Total Marks obtained');
        document.getElementById('txtScience').focus();
        return false;
    }
    if (Sci >= Max) {
        alert('Science Mark cannot be greater than or equal to Total Full Marks');
        document.getElementById('txtScience').focus();
        return false;
    }
    //    if (SoSci == 0) {
    //        alert('Social Science Mark cannot be 0(zero)');
    //        document.getElementById('txtSocSci').focus();
    //        return false;
    //    }
    if (SoSci >= Tot) {
        alert('Social Science Mark cannot be greater than or equal to Total Marks obtained');
        document.getElementById('txtSocSci').focus();
        return false;
    }
    if (SoSci >= Max) {
        alert('Social Science Mark cannot be greater than or equal to Total Full Marks');
        document.getElementById('txtSocSci').focus();
        return false;
    }
    if (Tot == 0) {
        alert('Total Mark obtained cannot be 0(zero)');
        document.getElementById('txtTotMark').focus();
        return false;
    }
    if (inTotal > Tot) {
        alert('The sum of your individual marks cannot be greater than the Total Marks obtained');
        document.getElementById('txtTotMark').focus();
        return false;
    }
    if (Max == 0) {
        alert('Total Full Marks cannot be 0(zero)');
        document.getElementById('txtMaxMark').focus();
        return false;
    }

    if (Tot > Max) {
        alert('Total Marks obtained cannot be greater than Total Full Marks');
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


//================Special Character Validation===========
function CheckSpeCharacterName(Object, msg) {//For Name input in CAF(Restrict Special character except ')
    var Arr = new Array();
    var k;
    Arr = Object.split(',');

    for (k = 0; k < Arr.length; k++) {
        var str1 = document.getElementById(Arr[k]).value;

        for (var i = 0; i < str1.length; i++) {

            var ch = str1.substring(i, i + 1);
            if ((ch == "`") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "-") || (ch == "+") || (ch == "/") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == ",") || (ch == ".") || (ch == '=') || (ch == '"') || (ch == '-') || (ch == "'")) {
                alert(msg);
                document.getElementById(Arr[k]).value = '';
                document.getElementById(Arr[k]).focus();
                return false;
            }
        }
    }
    return true;
}


function CheckSpeCharacterSchoolName(Object, msg) {//For Name input in CAF(Restrict Special character except ')
    var Arr = new Array();
    var k;
    Arr = Object.split(',');

    for (k = 0; k < Arr.length; k++) {
        var str1 = document.getElementById(Arr[k]).value;

        for (var i = 0; i < str1.length; i++) {

            var ch = str1.substring(i, i + 1);
            if ((ch == "`") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == ",") || (ch == ".") || (ch == '=') || (ch == '"') || (ch == "'")) {
                alert(msg);
                document.getElementById(Arr[k]).value = '';
                document.getElementById(Arr[k]).focus();
                return false;
            }
        }
    }
    return true;
}
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
    else {
        if (document.getElementById(ctl).value != '') {
            CheckDuplicateEmail();
        }
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
    }
    else {
        document.getElementById(ctlspan).style.color = "#000000";
        document.getElementById(ctlspan).innerHTML = msg;
    }
}
//===================Function to highlight Reservation Category1==========
function highlightCat1() {
    if (document.getElementById('rbtST').checked == true) {

    }
    else if (document.getElementById('rbtSC').checked == true) {

    }
    else if (document.getElementById('rbtOther').checked == true) {

    }
    else if (document.getElementById('rbtnOBC').checked == true) {


    }
    else if (document.getElementById('rbtBCW').checked == true) {


    }
    else if (document.getElementById('rbtGeneral').checked == true) {

    }
}
//===============Function to highlight Reservation category2================

function highlightCat2() {
    if (document.getElementById('rbtESM').checked == true) {
    }
    else if (document.getElementById('rbtSDP').checked == true) {

    }
    else if (document.getElementById('rbtCoM').checked == true) {

    }
    else if (document.getElementById('rbtNon').checked == true) {

    }
}
//=======================highlight osa ==========================
function highlightOSA() {

    if (document.getElementById('rbtCompartmentalY').checked == true) {
        document.getElementById('CompY').style.color = "#CC33FF";
        var text = 'Yes';
        document.getElementById('CompY').innerHTML = text;
        document.getElementById('CompN').style.color = "#000000";
        document.getElementById('CompN').innerHTML = 'No';
        // EnglishOriyaFont();
    }
    if (document.getElementById('rbtCompartmentalN').checked == true) {
        document.getElementById('CompN').style.color = "#CC33FF";
        var text = 'No';
        document.getElementById('CompN').innerHTML = text;
        document.getElementById('CompY').style.color = "#000000";
        document.getElementById('CompY').innerHTML = 'Yes';
        //  EnglishOriyaFont();
    }
}

//======================function to highlight College Type============
function highlightCollegeType() {
    if (document.getElementById('rbtSelfFinance').checked == true) {

    }
    if (document.getElementById('rbtVocational').checked == true) {

    }
    if (document.getElementById('rbtOthersFinance').checked == true) {

    }
    if (document.getElementById('rbtSanskrit').checked == true) {

    }
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

function IsNumeric(ctlName) {
    var strInput = document.getElementById(ctlName).value;
    var Object = document.getElementById(ctlName);
    for (i = 0; i < strInput.length; i++) {
        if (strInput.charAt(i) < '0' || strInput.charAt(i) > '9') {
            document.getElementById(ctlName).value = '';
            Object.focus()
            return false;
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

    // var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   // var reg = /^(?:[\w\!\#\$\%\&\'\\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    var reg = /^([a-zA-Z0-9_.])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
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
function EmailValidation1(ctlName) {

    var strInput = document.getElementById(ctlName).value;
    var Object = document.getElementById(ctlName);

    //var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    var address = strInput;
    if (strInput != '') {
        if (reg.test(address) == false) {
            alert('Please write a valid e-Mail ID');
            document.getElementById(ctlName).value = '';
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

//Added by Ritika lath on 13th April 2020 to validate Address Field
function ValidateAddress(cntr, chr) {
    maxLen = chr; // max number of characters allowed            
    var strValue = $('#' + cntr).val();
    if (strValue.length > maxLen) {
        var msg = "Maximum allowed characters for House No., Street/Village, Post Office, Police Station is " + chr;
        alert(msg);
        $('#' + cntr).val(strValue.substring(0, maxLen));
        $('#' + cntr).focus();
    }
    else {
        CheckAddress(cntr);
    }
}

//======================check special characters in address field================
function checkLength(cntr, chr) {
    maxLen = chr; // max number of characters allowed            
    var strValue = $('#' + cntr).val();
    if (strValue.length > maxLen) {
        var msg = "Maximum allowed characters for House No., Street/Village, Post Office, Police Station is " + chr;
        alert(msg);
        $('#' + cntr).val(strValue.substring(0, maxLen));
        $('#' + cntr).focus();
    }
}
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
                document.getElementById(Arr[k]).value = '';
                document.getElementById(Arr[k]).focus();
                return false;
            }
        }
    }
    return true;
}

function AllowAlphabet(e, id) {
    var k = 0;
    isIE = document.all ? 1 : 0
    keyEntry = !isIE ? e.which : event.keyCode;

    if ($('#' + id).val().length == 0 && (keyEntry == 32 || keyEntry == 46)) {
        k = 1;
    }
    if (k == 0 && (((keyEntry >= '65') && (keyEntry <= '90')) || ((keyEntry >= '97') && (keyEntry <= '122')) || (keyEntry == '46') || (keyEntry == '32') || (keyEntry == '44')))
        return true;
    else {
        return false;
    }
}
///=======================  view optionDetails==================
function ConfirmOptions() {
    debugger;
    var cids = document.getElementById('hidCollege').value;
    //======================================================
    StreamId = document.getElementById('hidStream').value;
    //CompulsoryId = document.getElementById('hidComplusory').value;
    CompulsoryId1 = document.getElementById('hidComplusory1').value;
    CompulsoryId2 = document.getElementById('hidComplusory2').value;
    CompulsoryId3 = document.getElementById('hidComplusory3').value;
    Elective1 = document.getElementById('hidElective1').value;
    Elective2 = document.getElementById('hidElective2').value;
    Elective3 = document.getElementById('hidElective3').value;
    FElective1 = document.getElementById('hidFElelective1').value;
    //=========================Getting names=================
    CText = document.getElementById('hidCname').value;
    SText = document.getElementById('hidSname').value;
    //CompSId = document.getElementById('hidCompName').value;
    CompSId1 = document.getElementById('hidCompName1').value;
    CompSId2 = document.getElementById('hidCompName2').value;
    CompSId3 = document.getElementById('hidCompName3').value;
    E1Text = document.getElementById('hidE1name').value;
    E2Text = document.getElementById('hidE2name').value;
    E3Text = document.getElementById('hidE3name').value;
    F1Text = document.getElementById('hidF1Ele').value;
    //======================================================
    optAry = new Array();
    colAry = new Array();
    sAry = new Array();
    //compAry = new Array();
    compAry1 = new Array();
    compAry2 = new Array();
    compAry3 = new Array();
    ele1Ary = new Array();
    ele2Ary = new Array();
    ele3Ary = new Array();
    fele1Ary = new Array();
    //============for text=================
    colAry1 = new Array();
    sAry1 = new Array();
    //compAry = new Array();
    compAry11 = new Array();
    compAry21 = new Array();
    compAry31 = new Array();
    ele1Ary1 = new Array();
    ele2Ary1 = new Array();
    ele3Ary1 = new Array();
    fele1Ary1 = new Array();


    //================================
    if (cids.indexOf('~') > 0) {
        //==============Splitiing the text & ids==========
        colAry = cids.split('~');
        colAry1 = CText.split('~');
        sAry = StreamId.split('~');
        sAry1 = SText.split('~');
        compAry1 = CompulsoryId1.split('~');
        compAry11 = CompSId1.split('~');
        compAry2 = CompulsoryId2.split('~');
        compAry21 = CompSId2.split('~');
        compAry3 = CompulsoryId3.split('~');
        compAry31 = CompSId3.split('~');

        ele1Ary = Elective1.split('~');
        ele1Ary1 = E1Text.split('~');
        ele2Ary = Elective2.split('~');
        ele2Ary1 = E2Text.split('~');
        ele3Ary = Elective3.split('~');
        ele3Ary1 = E3Text.split('~');

        fele1Ary = FElective1.split('~');
        fele1Ary1 = F1Text.split('~');
        //================================================

        for (var i = 0; i < colAry.length; i++) {
            //optionId=optAry[i];
            CollegeId = colAry[i];
            CText = colAry1[i];
            StreamId = sAry[i];
            SText = sAry1[i];

            CompulsoryId1 = compAry1[i];
            CompSId1 = compAry11[i];
            CompulsoryId2 = compAry2[i];
            CompSId2 = compAry21[i];
            CompulsoryId3 = compAry3[i];
            CompSId3 = compAry31[i];

            Elective1 = ele1Ary[i];
            E1Text = ele1Ary1[i];
            Elective2 = ele2Ary[i];
            E2Text = ele2Ary1[i];
            Elective3 = ele3Ary[i];
            E3Text = ele3Ary1[i];

            FElective1 = fele1Ary[i];
            F1Text = fele1Ary1[i];

            ConfirmRow();
        }
    }
    else {
        //optionId=document.getElementById('hidOptionIds').value;  
        CollegeId = document.getElementById('hidCollege').value;
        StreamId = document.getElementById('hidStream').value;
        // CompulsoryId = document.getElementById('hidComplusory').value;

        CompulsoryId1 = document.getElementById('hidComplusory1').value;
        CompulsoryId2 = document.getElementById('hidComplusory2').value;
        CompulsoryId2 = document.getElementById('hidComplusory3').value;
        Elective1 = document.getElementById('hidElective1').value;
        Elective2 = document.getElementById('hidElective2').value;
        Elective3 = document.getElementById('hidElective3').value;
        FElective1 = document.getElementById('hidFElelective1').value;

        //=========================Getting names=================
        CText = document.getElementById('hidCname').value;

        SText = document.getElementById('hidSname').value;
        CompSId1 = document.getElementById('hidCompName1').value;
        CompSId2 = document.getElementById('hidCompName2').value;
        CompSId3 = document.getElementById('hidCompName3').value;
        E1Text = document.getElementById('hidE1name').value;
        E2Text = document.getElementById('hidE2name').value;
        E3Text = document.getElementById('hidE3name').value;
        F1Text = document.getElementById('hidF1Ele').value;
        //=======================================================
        ConfirmRow();
    }

}
///===============================add options==================
//=========================Add Option Details=====================================
function ConfirmOptionData() {

    optionArray = new Array(13);
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
    optionArray[2][0] = CompSId1;
    optionArray[2][1] = CompulsoryId1;

    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================

    if (Elective1 == 0) {
        optionArray[3][0] = '';
        optionArray[3][1] = 'NA';
    }
    else {
        optionArray[3][0] = E1Text;
        optionArray[3][1] = Elective1;
    }

    if (Elective2 == 0) {
        optionArray[4][0] = '';
        optionArray[4][1] = 'NA';
    }
    else {
        optionArray[4][0] = E2Text;
        optionArray[4][1] = Elective2;
    }

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

    optionArray[9][0] = CompSId2;
    optionArray[9][1] = CompulsoryId2;
    optionArray[10][0] = CompSId3;
    optionArray[10][1] = CompulsoryId3;
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
    if (optText == 11) {
        OptionText = "<font color='#CC33FF' size='3'><B>ELEVENTH</B></font>"
    }
    if (optText == 12) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWELFTH</B></font>"
    }
    if (optText == 13) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRTEENTH</B></font>"
    }
    if (optText == 14) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTEENTH</B></font>"
    }
    if (optText == 15) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTEENTH</B></font>"
    }
    if (optText == 16) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTEENTH</B></font>"
    }
    if (optText == 17) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTEENTH</B></font>"
    }
    if (optText == 18) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTEENTH</B></font>"
    }
    if (optText == 19) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINETEENTH</B></font>"
    }
    if (optText == 20) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWENTIETH</B></font>"
    }
    td1.innerHTML = OptionText;
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"
    var td44 = document.createElement("TD")
    td44.innerHTML = optionArray[2][0] + "</br>" + optionArray[9][0] + "</br>" + optionArray[10][0] + "<input type='hidden' value=" + optionArray[2][1] + "~" + optionArray[9][1] + "~" + optionArray[10][1] + "></input>"

    for (i = 1; i < 4; i++) {
        row.appendChild(eval("td" + i));
    }
    tbody.appendChild(row);

}
//=========================================view OptionsDetails in Applied CAF Page===================
//==================================Back from Confirm CAF Page=======================================
function NotConfirmOptions() {
    debugger;
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
    //----------Added By Banaja For Get Compulsory Ids------------
    ComIdsAry = new Array();
    ComNamesAry = new Array();
    ComIdsAry = CompulsoryAry[0].split("/");
    ComNamesAry = CompulsoryAry[1].split("/");

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

    //=================================================
    var cids = collegeAry[0];
    StreamId = streamAry[0];
    //CompulsoryId = CompulsoryAry[0];
    CompulsoryId1 = ComIdsAry[0];
    CompulsoryId2 = ComIdsAry[1];
    CompulsoryId3 = ComIdsAry[2];

    Elective1 = EleIdsAry[0];
    Elective2 = EleIdsAry[1];
    Elective3 = EleIdsAry[2];
    FElective1 = fElectiveAry[0];
    //=========================Getting names=================
    CText = collegeAry[1];
    SText = streamAry[1];
    // CompSId = CompulsoryAry[1];
    CompSId1 = ComNamesAry[0];
    CompSId2 = ComNamesAry[1];
    CompSId3 = ComNamesAry[2];

    E1Text = EleNamesAry[0];
    E2Text = EleNamesAry[1];
    E3Text = EleNamesAry[2];
    F1Text = fElectiveAry[1];
    //    F2Text = fEleNamesAry[1];
    //    F3Text = fEleNamesAry[2];
    //======================================================
    optAry = new Array();
    colAry = new Array();
    sAry = new Array();
    // compAry = new Array();
    compAry1 = new Array();
    compAry2 = new Array();
    compAry3 = new Array();
    ele1Ary = new Array();
    ele2Ary = new Array();
    ele3Ary = new Array();
    fele1Ary = new Array();
    //    fele2Ary = new Array();
    //    fele3Ary = new Array();
    hosAry = new Array();
    //============for text=================
    colAry1 = new Array();
    sAry1 = new Array();
    //compAry1 = new Array();
    compAry11 = new Array();
    compAry21 = new Array();
    compAry31 = new Array();
    ele1Ary1 = new Array();
    ele2Ary1 = new Array();
    ele3Ary1 = new Array();
    fele1Ary1 = new Array();
    //    fele2Ary1 = new Array();
    //    fele3Ary1 = new Array();
    //================================
    if (cids.indexOf('~') > 0) {
        //==============Splitiing the text & ids==========
        //optAry=optionId.split('~');
        colAry = cids.split('~');
        colAry1 = CText.split('~');
        sAry = StreamId.split('~');
        sAry1 = SText.split('~');
        compAry1 = CompulsoryId1.split('~');
        compAry11 = CompSId1.split('~');
        compAry2 = CompulsoryId2.split('~');
        compAry21 = CompSId2.split('~');
        compAry3 = CompulsoryId3.split('~');
        compAry31 = CompSId3.split('~');

        ele1Ary = Elective1.split('~');
        ele1Ary1 = E1Text.split('~');
        ele2Ary = Elective2.split('~');
        ele2Ary1 = E2Text.split('~');
        ele3Ary = Elective3.split('~');
        ele3Ary1 = E3Text.split('~');
        fele1Ary = FElective1.split('~');
        fele1Ary1 = F1Text.split('~');
        //================================================

        for (var i = 0; i < colAry.length; i++) {
            //optionId=optAry[i];
            CollegeId = colAry[i];
            CText = colAry1[i];
            //var TextLen=CText.length;
            //CText=CText.substring(4,TextLen);
            StreamId = sAry[i];
            SText = sAry1[i];
            //            CompulsoryId = compAry[i];
            //            CompSId = compAry1[i];
            CompulsoryId1 = compAry1[i];
            CompSId1 = compAry11[i];
            CompulsoryId2 = compAry2[i];
            CompSId2 = compAry21[i];
            CompulsoryId3 = compAry3[i];
            CompSId3 = compAry31[i];

            Elective1 = ele1Ary[i];
            E1Text = ele1Ary1[i];
            Elective2 = ele2Ary[i];
            E2Text = ele2Ary1[i];
            Elective3 = ele3Ary[i];
            E3Text = ele3Ary1[i];
            FElective1 = fele1Ary[i];
            F1Text = fele1Ary1[i];
            NotConfirmRow();
        }
    }
    else {
        //optionId=document.getElementById('hidOptionIds').value;  
        CollegeId = collegeAry[0];
        StreamId = streamAry[0];
        //CompulsoryId = CompulsoryAry[0];


        CompulsoryId1 = ComIdsAry[0];
        CompulsoryId2 = ComIdsAry[1];
        CompulsoryId3 = ComIdsAry[2];


        Elective1 = EleIdsAry[0];
        Elective2 = EleIdsAry[1];
        Elective3 = EleIdsAry[2];
        FElective1 = fElectiveAry[0];
        //=========================Getting names=================
        CText = collegeAry[1];
        //var TextLen=CText.length;
        //CText=CText.substring(4,TextLen);
        SText = streamAry[1];

        // CompSId = CompulsoryAry[1];

        CompSId1 = ComNamesAry[0];
        CompSId2 = ComNamesAry[1];
        CompSId3 = ComNamesAry[2];

        E1Text = EleNamesAry[0];
        E2Text = EleNamesAry[1];
        E3Text = EleNamesAry[2];
        F1Text = fElectiveAry[1];
        //=======================================================
        NotConfirmRow();
    }

}
///===============================add options==================
//=========================Add Option Details=====================================
function NotConfirmOptionData() {
    optionArray = new Array(13);
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
    optionArray[11] = new Array();
    optionArray[12] = new Array();

    optionArray[0][0] = CText;
    optionArray[0][1] = CollegeId;
    optionArray[1][0] = SText;
    optionArray[1][1] = StreamId;
    optionArray[2][0] = CompSId1;
    optionArray[2][1] = CompulsoryId1;
    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================

    if (Elective1 == 0) {
        optionArray[3][0] = '';
        optionArray[3][1] = 'NA';
    }
    else {
        optionArray[3][0] = E1Text;
        optionArray[3][1] = Elective1;
    }


    if (Elective2 == 0) {
        optionArray[4][0] = '';
        optionArray[4][1] = 'NA';
    }
    else {
        optionArray[4][0] = E2Text;
        optionArray[4][1] = Elective2;
    }

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

    optionArray[11][0] = CompSId2;
    optionArray[11][1] = CompulsoryId2;

    optionArray[12][0] = CompSId3;
    optionArray[12][1] = CompulsoryId3;
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

    if (optText == 1) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
        Caption = "Choose your 2nd Option/ अपना दूसरा विकल्प चुनें";
        document.getElementById('2').style.display = 'none';
        document.getElementById('3').style.display = '';
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
        document.getElementById('3').style.display = 'none';
        document.getElementById('4').style.display = '';
        Caption = "Choose your 3rd Option/ अपना तीसरा विकल्प चुनें"
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
        document.getElementById('4').style.display = 'none';
        document.getElementById('5').style.display = '';
        Caption = "Choose your 4th Option/ अपना चौथा विकल्प चुनें"
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
        document.getElementById('5').style.display = 'none';
        document.getElementById('6').style.display = '';
        Caption = "Choose your 5th Option/ अपना 5 वां विकल्प चुनें"
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
        document.getElementById('6').style.display = 'none';
        document.getElementById('7').style.display = '';
        Caption = "Choose your 6th Option/ अपना 6 वां विकल्प चुनें"
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
        document.getElementById('7').style.display = 'none';
        document.getElementById('8').style.display = '';
        Caption = "Choose your 7th Option/ अपना 7 वां विकल्प चुनें"
    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
        document.getElementById('8').style.display = 'none';
        document.getElementById('9').style.display = '';
        Caption = "Choose your 8th Option/ अपना 8 वां विकल्प चुनें"
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
        document.getElementById('9').style.display = 'none';
        document.getElementById('10').style.display = '';
        Caption = "Choose your 9th Option/ अपना 9 वां विकल्प चुनें"
    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
        document.getElementById('10').style.display = 'none';
        document.getElementById('11').style.display = '';
        Caption = "Choose your 10th Option/ अपना 10 वां विकल्प चुनें"
    }
    if (optText == 10) {
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
        document.getElementById('11').style.display = 'none';
        document.getElementById('12').style.display = '';
        Caption = "Choose your 11th Option/ अपना 11 वां विकल्प चुनें"
    }
    if (optText == 11) {
        OptionText = "<font color='#CC33FF' size='3'><B>ELEVENTH</B></font>"
        document.getElementById('12').style.display = 'none';
        document.getElementById('13').style.display = '';
        Caption = "Choose your 12th Option/ अपना 12 वां विकल्प चुनें"
    }
    if (optText == 12) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWELFTH</B></font>"
        document.getElementById('13').style.display = 'none';
        document.getElementById('14').style.display = '';
        Caption = "Choose your 13th Option/ अपना 13 वां विकल्प चुनें"
    }
    if (optText == 13) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRTEENTH</B></font>"
        document.getElementById('14').style.display = 'none';
        document.getElementById('15').style.display = '';
        Caption = "Choose your 14th Option/ अपना 14 वां विकल्प चुनें"
    }
    if (optText == 14) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTEENTH</B></font>"
        document.getElementById('15').style.display = 'none';
        document.getElementById('16').style.display = '';
        Caption = "Choose your 15th Option/ अपना 15 वां विकल्प चुनें"
    }
    if (optText == 15) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTEENTH</B></font>"
        document.getElementById('16').style.display = 'none';
        document.getElementById('17').style.display = '';
        Caption = "Choose your 16th Option/ अपना 16 वां विकल्प चुनें"
    }
    if (optText == 16) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTEENTH</B></font>"
        document.getElementById('17').style.display = 'none';
        document.getElementById('18').style.display = '';
        Caption = "Choose your 17th Option/ अपना 17 वां विकल्प चुनें"
    }
    if (optText == 17) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTEENTH</B></font>"
        document.getElementById('18').style.display = 'none';
        document.getElementById('19').style.display = '';
        Caption = "Choose your 18th Option/ अपना 18 वां विकल्प चुनें"
    }
    if (optText == 18) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTEENTH</B></font>"
        document.getElementById('19').style.display = 'none';
        document.getElementById('20').style.display = '';
        Caption = "Choose your 19th Option/ अपना 19 वां विकल्प चुनें"
    }
    if (optText == 19) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINETEENTH</B></font>"
        Caption = "Choose your 20th Option/ अपना 20 वां विकल्प चुनें";
        document.getElementById('20').value = 'You have selected 20th Option';
        document.getElementById('20').className = "optioninctive";
        document.getElementById('20').disabled = true;
    }

    if (optText == 20) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWENTIETH</B></font>"

        Caption = "You have added 20 Options/ आपने 20 विकल्प जोड़े हैं"
    }

    td1.innerHTML = OptionText;

    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"

    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"

    //    var td4 = document.createElement("TD")
    //    td4.innerHTML = optionArray[2][0] + "</br>" + optionArray[11][0] + "</br>" + optionArray[12][0] + "<input type='hidden' value=" + optionArray[2][1] + "~" + optionArray[11][1] + "~" + optionArray[12][1] + "></input>"
    //    td4.innerHTML.style.display = 'none';
    //    var td5 = document.createElement("TD")
    //    td5.innerHTML = optionArray[3][0] + "</br>" + optionArray[4][0] + "</br>" + optionArray[5][0] + "<input type='hidden' value=" + optionArray[3][1] + "~" + optionArray[4][1] + "~" + optionArray[5][1] + "></input>"
    //    td5.innerHTML.style.display = 'none';
    //    var td6 = document.createElement("TD")
    //    td6.innerHTML = optionArray[6][0]  + "<input type='hidden' value=" + optionArray[6][1]  + "></input>"
    //    td6.innerHTML.style.display = 'none';

    var td4 = document.createElement("TD")
    td4.innerHTML = "<a href='javascript:remove(" + optText + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option'/></a>"
    debugger;
    for (i = 1; i < 5; i++) {
        row.appendChild(eval("td" + i));
    }
    tbody.appendChild(row);
    document.getElementById('Caption').innerHTML = Caption;
}
//=============function for checking wheather it is not confimed CAF or New CAF============
function checkConfirmationStatus() {
    if (document.getElementById('hidCollege').value != '') {
        NotConfirmOptions();
        // document.getElementById('tblChoice').style.display = ''; // visible false from SPOT CAF
    }
}
//============================Hostel facility Checking=================
function checkHostel() {
    var CollID = document.getElementById('ddlCollege').value;
    //alert(CollID);
    cids = new Array('6', '9', '11', '14', '19', '22', '23', '28', '37', '41', '43', '47', '51', '56', '63', '68', '77', '81', '82', '83', '84', '89', '95', '96', '99', '100', '101', '103', '107', '110', '112', '115', '116', '117', '119', '120', '128', '129', '131', '132', '137', '144', '151', '153', '154', '156', '157', '158', '160', '161', '162', '165', '166', '170', '171', '177', '230', '232', '233', '235', '236', '239', '240', '241', '242', '247', '251', '252', '253', '263', '264', '269', '270', '272', '274', '276', '277', '281', '285', '287', '288', '290', '291', '295', '298', '302', '303', '304', '305', '311', '314', '319', '320', '322', '328', '333', '334', '336', '342', '348', '349', '356', '357', '358', '362', '363', '364', '375', '382', '386', '387', '388', '390', '391', '395', '400', '407', '408', '409', '410', '411', '412', '417', '422', '424', '425', '426', '429', '431', '436', '442', '443', '447', '455', '458', '459', '460', '465', '466', '467', '478', '479', '482', '490', '492', '493', '496', '499', '500', '504', '506', '512', '513', '521', '525', '534', '540', '541', '542', '543', '544', '548', '549', '550', '553', '554', '557', '558', '559', '562', '565', '568', '575', '579', '582', '588', '592', '600', '605', '608', '612', '614', '615', '616', '618', '622', '623', '629', '638', '639', '641', '644', '649', '651', '654', '658', '660', '668', '669', '670', '672', '677', '679', '680', '681', '683', '686', '688', '694', '698', '699', '701', '702', '705', '708', '709', '710', '717', '723', '724', '725', '727', '732', '733', '751', '752', '753', '758', '759', '764', '768', '773', '774', '776', '778', '779', '784', '785', '788', '790', '796', '797', '798', '800', '801', '802', '807', '808', '810', '811', '817', '818', '819', '823', '824', '828', '831', '840', '848', '849', '852', '853', '854', '858', '859', '865', '867', '873', '874', '875', '879', '880', '881', '915', '917', '921', '924', '927', '933', '935', '938', '942', '943', '950', '959', '964', '965', '967', '972', '973', '975', '976', '977', '978', '984', '988', '989', '992', '995', '996', '999', '1007', '1018', '1021', '1025', '1026', '1031', '1034', '1036', '1038', '1039', '1042', '1046', '1048', '1060', '1061', '1065', '1069', '1070', '1071', '1072', '1076', '1077', '1079', '1085', '1087', '1090', '1091', '1092', '1093', '1099', '1105', '1106', '1110', '1115', '1119', '1120', '1124', '1128', '1130', '1131', '1132', '1138', '1141', '1144', '1146', '1147', '1150', '1151', '1152', '1155', '1156', '1158', '1162', '1168', '1172', '1175', '1178', '1179', '1186', '1189', '1195', '1196', '1201', '1202', '1203', '1210', '1212', '1214', '1217', '1234', '1236', '1237', '1240', '1241', '1243', '1245', '1249', '1251', '1254', '1260', '1265', '1266', '1271', '1272', '1280', '1281', '1285', '1288', '1290', '1291', '1297', '1299', '1303', '1305', '1306', '1307', '1308', '1309', '1314', '1315', '1316', '1317', '1322', '1324', '1325', '1333', '1334', '1336', '1339', '1340', '1344', '1346', '1354', '1355', '1360', '1372', '1373', '1377', '1378', '1379', '1380', '1383', '1384', '1390', '1391', '1393', '1398', '1399', '1408', '1409', '1417', '1420', '1427', '1432', '1434', '1437', '1438', '1441', '1443', '1448', '1449', '1450', '1457', '1458', '1464', '1465', '1467', '1473', '1571', '1572', '1574', '1578', '1579', '1583', '1592', '1593', '1598', '1599', '1602', '1605', '1607', '1614', '1616', '1617', '1629', '1631', '1636', '1637', '1640', '1644', '1659', '1660', '1661', '1676', '1679', '1680', '1685', '1692', '1694', '1698', '1700', '1702', '1707', '1708', '1711', '1712', '1713', '1716', '1717', '1718', '1719', '1720', '1726', '1737', '1740', '1746', '1753', '1755', '1756', '1760', '1763', '1765', '1774', '1778', '1780', '1781', '1782', '1787', '1790', '1791', '1793', '1795', '1796', '1800', '1803', '1804', '1809', '1810', '1815', '1817', '1821', '1825', '1828', '1829', '1835', '1837', '1838', '1840', '1842', '1844', '1845', '1854', '1855', '1856', '1861', '1862', '1863', '1867', '1869', '1872', '1877', '1886', '1889', '1896', '1897', '1903', '1906', '1910', '1913', '1915', '1917', '1926', '1930', '1937', '1938', '1947', '1954', '1956', '1957', '1959', '1964', '1965', '1972', '1984', '1987', '1998', '2014', '2017', '2026', '2027', '2029', '2031', '2032', '2037', '2038', '2041', '2043', '2050', '2054', '2055', '2058', '2060', '2062', '2065', '2066', '2074', '2078', '2081', '2082', '2107', '2110', '2113', '2150', '2151', '2479', '2500', '2508', '2518', '2593', '2719', '2737', '2744', '2753', '2754', '2781', '2805', '2858', '2865', '2866', '2966', '2974', '3005', '3006', '3007', '3009', '3021', '3028', '3032', '3035', '3036', '3043', '3049', '3052', '3054', '3070', '3073', '3080', '3087', '3095', '3113', '3118', '3123', '3131', '3134', '3135', '3149', '3160', '3161', '3162', '3180', '3181', '3193', '3222', '3243', '3255', '3256', '3258', '3259', '3261', '3262', '3263', '3410')

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

    }
    else {

    }
}
//===============new function for file Upload================
function OpenUpload() {

    window.open('UploadPopUpJr.aspx', 'CollegeCopy', 'left=460,top=300,width=460,height=350,menubar=0,resizable=0,scrollbars=0,addressbar=0');
}
//=================================length of address field===========
function addLength(ctlAdd) {
    var add = document.getElementById(ctlAdd).value;
    var len = add.length;
    if (parseInt(len) > 350) {
        alert('Please enter house No.,street/village,post office,\n police station name within 350 characters');
        $('#' + ctlAdd).val(add.substring(0, len));
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

//modified by Ritika lath on 12th Aug 2020
function CheckRoll(Object, msg, length) {

    var Arr = new Array();
    var k;
    Arr = Object.split(',');

    for (k = 0; k < Arr.length; k++) {

        // if (!(document.getElementById('tableOption').getElementsByTagName("TR").length > 1)) {

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
    // }
    return true;
}

function CheckLengthOnly(cntr, len) {
    if (event.keyCode == 32) {
        event.returnValue = false;
        return false;
    }

    var str1 = $("#" + cntr).val();
    if (str1.length >= len && $("#ddlBoard").val() == "109") {
        return false;
    }
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

        if ((document.getElementById('ddlBoard').value == 46) && ($('#ddlYOP').val() >= 2018)) {
            document.getElementById('tblCBSE').style.display = 'none';
            document.getElementById('tblBSE').style.display = '';
            document.getElementById('tblKERALA').style.display = 'none';
        }

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

    document.getElementById('ddlTGrade').selectedIndex = 0;
    document.getElementById('ddlKEnglish').selectedIndex = 0;
    document.getElementById('ddlKMath').selectedIndex = 0;
    document.getElementById('ddlKScience').selectedIndex = 0;
    document.getElementById('ddlKSoSc').selectedIndex = 0;

    //For bihar board 
    if (document.getElementById('ddlBoard').value == '109') {

        document.getElementById('tdEng').style.display = 'none';
        document.getElementById('tdMath').style.display = 'none';
        document.getElementById('tdScience').style.display = 'none';
        document.getElementById('tdSoScience').style.display = 'none';

        document.getElementById('tdEngMrk').style.display = 'none';
        document.getElementById('tdMathMrk').style.display = 'none';
        document.getElementById('tdScienceMrk').style.display = 'none';
        document.getElementById('tdSoScienceMrk').style.display = 'none';
        document.getElementById('tdRollcodeMsg').style.display = 'none';
    }
    else {

    }
    //for other board
    if (document.getElementById('ddlBoard').value == '131') {
        document.getElementById('divOtherBoard').style.display = '';
    }
    else {
        document.getElementById('divOtherBoard').style.display = 'none';
    }
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
//=========================TO CHECK COMPARTMENTAL SUBJECT DETAILS================
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

//====================Clear Compartmental Mark=============
function clearComp(ctl1, ctl2, ctl3) {
    if (document.getElementById(ctl1).selectedIndex == 0) {
        document.getElementById(ctl2).value = '';
        document.getElementById(ctl3).value = '';
    }
}
//====================Clear Roll Number Text Boxes=========
function clearRollNumber() {
    $("#txtBoardRoll").val('');
    $("#txtRollCode").val('');
    $("#ddlDay").val('0');
    $("#ddlMonth").val('0');
    $("#ddlYear").val('0');
    //$( "#txtBoardRoll" ).focus();
}

//added by Ritika lath on 13th May 2020 to clear roll number nd roll code for date change
function ClearRollValuesOnly() {
    $("#txtBoardRoll").val('');
    $("#txtRollCode").val('');
}

function ClearYearOfPassing() {
    $("#ddlYOP").val('0');
}
//====================Exam Type=============
function ShowGrade() {

    var intboard = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    var intyr = parseInt($('#ddlYOP').val());
    if ((intyr >= 2014) && (intboard == 45)) {
        document.getElementById('tdGradeMark').style.display = "none";
        document.getElementById('tdGradeMarkddl').style.display = "none";
        // document.getElementById('gpoint').style.display = "none";
    }
    else {
        document.getElementById('tdGradeMark').style.display = "none";
        document.getElementById('tdGradeMarkddl').style.display = "none";
    }
}

function ExamType() {

    //    if (document.getElementById('txtYOP').value == '2017') {
    //if ($('#ddlYOP').val() == 2022) {

    //    document.getElementById('rbtnAnnual').checked = true;
    //    document.getElementById('rbtnSuppl').checked = false;
    //    document.getElementById('rbtnSuppl').disabled = true;
    //}
    //else {

    //    document.getElementById('rbtnSuppl').disabled = false;
    //}
}

//Use of jquery to run in mozila firefox
//====================Fill District =============
function fillDist(ctlDdlVal) {
    debugger;
    $('#ddlCDist option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;

    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/fillDistrict',
        data: "{'intStateId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var Option = $('<option value="0">--SELECT--</option>');
            $('#ddlCDist').append(Option);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                Option = $('<option value="' + value.int_DistrictID + '">' + value.vch_DistrictName + '</option>');
                $('#ddlCDist').append(Option);
            });
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        },
        dataType: 'json'
    });

}
//====================Fill Block =============
function fillBlock(ctlDdlVal) {
    $('#ddlCBlock option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;

    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/fillBlock',
        data: "{'intDistId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var Option = $('<option value="0">--SELECT--</option>');
            $('#ddlCBlock').append(Option);

            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                Option = $('<option value="' + value.int_BlockID + '">' + value.vch_BlockName + '</option>');
                $('#ddlCBlock').append(Option);
            });
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        },
        dataType: 'json'
    });
}
//====================Load District =============    
function loadDistricts() {
    $('#ddlCollegeDistrict option').each(function (j, option) { $(option).remove(); });
    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/LoadDistrict',
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var Option = $('<option value="0">--SELECT--</option>');
            $('#ddlCollegeDistrict').append(Option);

            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                Option = $('<option value="' + value.int_DistrictID + '">' + value.vch_DistrictName + '</option>');
                $('#ddlCollegeDistrict').append(Option);
            });
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        },
        dataType: 'json'
    });

}

//=====================fill College===================
function loadColleges() {

    var inVal = parseInt(document.getElementById('ddlCollegeDistrict').options[document.getElementById('ddlCollegeDistrict').selectedIndex].value);

    if (inVal != '0') {
        $('#ddlCollege option').each(function (j, option) { $(option).remove(); });

        var intGender = parseInt(document.getElementById('ddlGender').options[document.getElementById('ddlGender').selectedIndex].value);

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

        //Find reservation category
        //1 for all general college
        //2 for SC college
        //3 for BE and EBC college
        //4 for ST college
        var restype = 0;

        if (document.getElementById('rbtGeneral').checked == true) {
            restype = 1;
        }
        else if (document.getElementById('rbtSC').checked == true) {
            restype = 2;
        }
        else if (document.getElementById('rbtST').checked == true) {
            restype = 4;
        }
        else if (document.getElementById('rbtnOBC').checked == true) {
            restype = 3;
        }
        else if (document.getElementById('rbtOther').checked == true) {
            restype = 3;
        }

        $.ajax({

            type: 'POST',
            url: 'JrCAFForm.aspx/fillDistWiseColg',
            data: "{'intDistId':'" + inVal + "','intCType':'" + collegeType + "','intGender':'" + intGender + "','restype':'" + restype + "'}",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var Option = $('<option value="0">--SELECT--</option>');
                $('#ddlCollege').append(Option);

                $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                    Option = $('<option value="' + value.CID + '">' + value.CNAME + '</option>');
                    $('#ddlCollege').append(Option);
                });
            },
            error: function (response) {
                var msg = jQuery.parseJSON(response.responseText);
                console.log("Message: " + msg.Message);
                console.log("StackTrace: " + msg.StackTrace);
                console.log("ExceptionType: " + msg.ExceptionType);
                // AjaxFailed;
            },
            dataType: 'json'
        });
    }

}

function OptionValidation(ctrlName) {

    if (document.getElementById('tableOption').getElementsByTagName("TR").length > 1) {
        //All Option need to clear while changing the Gender option.
        var msg = '';
        if (ctrlName == 'ddlGender') {
            $('#ddlGender').val($('#hidGender').val());

            msg = 'You must need to delete all selected college option first and then change your gender and then you will have to select collge option again.';
        }
        var category = $('#hidCategory').val();
        if (ctrlName == 'cast') {
            msg = 'You must need to delete all selected college option first and then change your reservation details and then you will have to select collge option again.';
        }

        if (category == '1') {
            $("#rbtGeneral").attr('checked', true);
        }
        else if (category == '2') {
            $("#rbtSC").attr('checked', true);
        }
        else if (category == '3') {
            $("#rbtST").attr('checked', true);
        }
        else if (category == '4') {
            $("#rbtnOBC").attr('checked', true);
        }
        if (category == '5') {
            $("#rbtOther").attr('checked', true);
        }

        alert(msg);
        return false;
    }
}

//====================Fill Stream =============
function fillStream(ctlDdlVal) {
    $('#ddlStream option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    // 
    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/FillStream',
        data: "{'intCollegeID':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            //  alert(response);
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlStream').append(newOption);

            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption = $('<option value="' + value.int_StreamID + '">' + value.vch_StreamName + '</option>');
                $('#ddlStream').append(newOption);
            });
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }
    });
}

//////Added BY Banaja For 1St Complulsory ddl-------------
function fillCompulsory1(ctlCollegeVal, ctlStreamVal) {
    $('#ddlFC option').each(function (j, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/fillCompulsory1',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption1 = $('<option value="' + value.int_SubjectID + '">' + value.vch_SubjectName + '</option>');
                $('#ddlFC').append(newOption1);
            });

        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }
    });
}
//////Added BY Banaja For 2nd Complulsory ddl-------------
function fillCompulsory2(ctlCollegeVal, ctlStreamVal) {
    $('#ddlMB option').each(function (j, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/fillCompulsory2',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlMB').append(newOption);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption1 = $('<option value="' + value.int_SubjectID + '">' + value.vch_SubjectName + '</option>');
                $('#ddlMB').append(newOption1);
            });

        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }
    });
}
//////Added BY Banaja For 3rd Complulsory ddl-------------
function fillCompulsory3(ctlCollegeVal, ctlStreamVal) {
    $('#ddlLL option').each(function (j, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/fillCompulsory3',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlLL').append(newOption);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption1 = $('<option value="' + value.int_SubjectID + '">' + value.vch_SubjectName + '</option>');
                $('#ddlLL').append(newOption1);
            });

        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }
    });
}
//====================Fill Elective Subject 1 =============
function fillfElective(ctlCollegeVal, ctlStreamVal) {
    $('#ddlELE1 option').each(function (j, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({

        type: 'POST',
        url: 'JrCAFForm.aspx/FillElectives',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlELE1').append(newOption);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption11 = $('<option value="' + value.int_SubjectID + '">' + value.vch_SubjectName + '</option>');
                $('#ddlELE1').append(newOption11);
            });
            setElective12();
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }
    });
}

//====================Fill Elective Subject 2 =============
function fillfElective2(ctlCollegeVal, ctlStreamVal) {
    $('#ddlELE2 option').each(function (k, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/fillfElective2',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOptions = $('<option value="0">--SELECT--</option>');
            $('#ddlELE2').append(newOptions);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption22 = $('<option value="' + value.int_SubjectID + '">' + value.vch_SubjectName + '</option>');
                $('#ddlELE2').append(newOption22);
            });
            setElective12();
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }
    });
}
//====================Fill Elective Subject 3 =============
function fillfElective3(ctlCollegeVal, ctlStreamVal) {
    $('#ddlELE3 option').each(function (l, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/fillfElective3',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOptionss = $('<option value="0">--SELECT--</option>');
            $('#ddlELE3').append(newOptionss);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption33 = $('<option value="' + value.int_SubjectID + '">' + value.vch_SubjectName + '</option>');
                $('#ddlELE3').append(newOption33);
            });
            setElective12();
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }
    });
}
//====================Fill Fourth Elective Subject  =============
function fillfourthElective(ctlCollegeVal, ctlStreamVal) {
    $('#ddl4thELE1 option').each(function (j, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({

        type: 'POST',
        url: 'JrCAFForm.aspx/FillFourthElectives',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddl4thELE1').append(newOption);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption1 = $('<option value="' + value.int_SubjectID + '">' + value.vch_SubjectName + '</option>');
                $('#ddl4thELE1').append(newOption1);
            });

        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }
    });
}

//================Check Duplicate Mob No=================
function CheckMobNo() {
    if (document.getElementById('txtCMobNo').value != '') {

        var MobNo = document.getElementById('txtCMobNo').value;
        $.ajax({
            type: 'POST',
            url: 'JrCAFForm.aspx/ChkMobStatus',
            data: "{'vchMobNo':'" + MobNo + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (response) {
                $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                });
                var lstdtl = JSON.parse(JSON.stringify(response.d));
                console.log(lstdtl);
                //                alert(lstdtl.AppName);

                if (lstdtl.length > 0) {
                    if (parseInt(lstdtl[0].int_MobStatus) > 0) {
                        document.getElementById("hdnMobSts").value = '1';
                        $(".right").hide();
                        $(".wrong").show();
                    }
                    else {
                        document.getElementById("hdnMobSts").value = '0';
                        $(".right").show();
                        $(".wrong").hide();

                    }
                }
            },
            error: function (response) {
                document.getElementById('hdnMobSts').value = "1";
                var msg = jQuery.parseJSON(response.responseText);
                console.log("Message: " + msg.Message);
                console.log("StackTrace: " + msg.StackTrace);
                console.log("ExceptionType: " + msg.ExceptionType);
                // AjaxFailed;
            }
        });
    }
    else {
        document.getElementById("hdnMobSts").value = '0';
        $(".right").hide();
        $(".wrong").hide();
    }
}

//=================Check Duplicate Email

function CheckDuplicateEmail() {

    var Email = document.getElementById('txtCEmail').value;
    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/ChkEmailStatus',
        data: "{'vchEmail':'" + Email + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
            });
            var lstdtl = JSON.parse(JSON.stringify(response.d));
            console.log(lstdtl);
            // alert(lstdtl.AppName);

            if (lstdtl.length > 0) {
                if (parseInt(lstdtl[0].int_EmailStatus) > 0) {
                    document.getElementById("hdnEmailSts").value = '1';
                    $(".eright").hide();
                    $(".ewrong").show();
                }
                else {
                    document.getElementById("hdnEmailSts").value = '0';
                    $(".eright").show();
                    $(".ewrong").hide();
                }
            }
        },
        error: function (response) {
            document.getElementById('hdnEmailSts').value = "1";
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }
    });

}


function ShowProgress() {
    //    setTimeout(function () {
    //        var modal = $('<div />');
    //        modal.addClass("modal");
    //        $('body').append(modal);
    //        var loading = $(".loading");
    //        loading.show();
    //        var top = Math.max($(window).height() / 2 - loading[0].offsetHeight / 2, 0);
    //        var left = Math.max($(window).width() / 2 - loading[0].offsetWidth / 2, 0);
    //        loading.css({ top: top, left: left });
    //    }, 200); 
    $(".loading").show();
}


function HideProgress() {
    //    var modal = $('<div />');
    //    modal.removeClass("modal");
    //    $('body').append(modal);
    //    var loading = $(".loading");
    $(".loading").hide();

    //    var top = Math.max($(window).height() / 2 - loading[0].offsetHeight / 2, 0);
    //    var left = Math.max($(window).width() / 2 - loading[0].offsetWidth / 2, 0);
    //    loading.css({ top: top, left: left });
}

//=====================fill BSE Board Mark===================
//=====================fill BSE Board Mark===================
function BoardMark() {

    //condition added by ritika lath on 02 april 2020 as when option is added gender is disabled and gender has to be autopopulated in many cvases
    //if (document.getElementById('tableOption').getElementsByTagName("TR").length > 1) {
    //    alert('You must need to delete all selected college option first and then change any of the values from RollNo, Roll Code, Year of Passing, Date Of Birth, Exam Type and Board');
    //    return false;
    //}
    //else {
    var inVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    //var yr = parseInt(document.getElementById('txtYOP').value)
    var yr = $('#ddlYOP').val();
    var dd = parseInt(document.getElementById('ddlDay').options[document.getElementById('ddlDay').selectedIndex].value);
    var mm = parseInt(document.getElementById('ddlMonth').options[document.getElementById('ddlMonth').selectedIndex].value);
    var yy = parseInt(document.getElementById('ddlYear').options[document.getElementById('ddlYear').selectedIndex].value);
    var dob = mm + '-' + dd + '-' + yy;
    var intExamType = 0;
    if (document.getElementById('rbtnAnnual').checked == true) {
        intExamType = 1;
    }
    else if (document.getElementById('rbtnSuppl').checked == true) {
        intExamType = 2;
    }

    var rollcd = document.getElementById('txtRollCode').value;
    var roll = document.getElementById('txtBoardRoll').value;

    if (inVal == 109 || inVal == 118) {
        document.getElementById('tdRollCdH').style.display = "";
        document.getElementById('tdRollCdF').style.display = "";
    }
    else {
        document.getElementById('tdRollCdH').style.display = "none";
        document.getElementById('tdRollCdF').style.display = "none";
    }

    if (inVal == 109 && yr >= 2010 && roll != '') {

        document.getElementById('txtApplName').value = '';
        document.getElementById('txtFatherName').value = '';
        document.getElementById('txtMotherName').value = '';
        document.getElementById('txtschname').value = '';
        //document.getElementById('txtMaxMark').value = '';
        document.getElementById('txtTotMark').value = '';
    }

    if (inVal == 109) {
        $("#txtApplName").attr("readonly", true);
        $("#txtFatherName").attr("readonly", true);
        $("#txtMotherName").attr("readonly", true);
        $("#txtschname").attr("readonly", true);
        $("#txtMaxMark").attr("readonly", true);
        $("#txtTotMark").attr("readonly", true);
    }

    if (yr == 2024 && inVal == 109) {
        document.getElementById('lblUniqueId').style.display = '';
        document.getElementById('txtUniqueId').style.display = '';
        $('#tdlblUniqId').show();
        $('#tdtxtuniqueId').show();

    }
    else {
        document.getElementById('lblUniqueId').style.display = 'none';
        document.getElementById('txtUniqueId').style.display = 'none';
        $('#tdlblUniqId').hide();
        $('#tdtxtuniqueId').hide();
    }

    var isValid = true;
    var strMessage = '';
    var controlid = '';
    debugger;
    if (inVal == 109) {

        /*Added By Ritika Lath on 14th April 2020 to validate Roll Number and Roll Code for BSEB only*/
        var regexNumeric = /^[0-9][0-9]*$/
        if (rollcd != null && rollcd != undefined && rollcd != '' && rollcd.length != 5) {
            isValid = false;
            strMessage = "Invalid roll code. Roll Code for BSEB, Board should be of length - 5";
            controlid = 'txtRollCode';
        }
        else if (rollcd != null && rollcd != undefined && rollcd != '' && (!regexNumeric.test(rollcd))) {
            isValid = false;
            strMessage = "Only numbers are allowed in Roll Code for BSEB, Board!!";
            controlid = 'txtRollCode';
        }
        else if (roll != null && roll != undefined && roll != '' && (roll.length < 4 || roll.length > 7)) {
            isValid = false;
            strMessage = "Invalid roll number. Roll number length for BSEB, Board should be between 4 and 7";
            controlid = 'txtBoardRoll';
        }
        else if (roll != null && roll != undefined && roll != '' && (!regexNumeric.test(roll))) {
            isValid = false;
            strMessage = "Only numbers are allowed in Roll Number for BSEB, Board!!";
            controlid = 'txtBoardRoll';
        }
    }

    if (!isValid) {
        alert(strMessage);
        $("#" + controlid).val('');
        setTimeout(function () {
            $("#" + controlid).focus();
        });
    }
    else {


        if ((intExamType == 1 || intExamType == 2) && inVal == 109 && yr >= 2010 && roll != '' && $('#ddlDay').val() != '0' && $('#ddlMonth').val() != '0' && $('#ddlYear').val() != '0' && roll != '' && rollcd != '') {
            debugger;

            $.ajax({
                type: 'POST',
                url: 'JrCAFForm.aspx/fillBSEMark',
                data: "{'vchRollNo':'" + roll + "','intYear':" + yr + ",'vchRollCd':'" + rollcd + "','vchDOB':'" + dob + "','intExamType':" + intExamType + "}",
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function (response) {
                    $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                    });
                    var lstdtl = JSON.parse(JSON.stringify(response.d));
                    if (lstdtl.length > 0) {

                        //Invalid date validation.
                        if ($('#ddlDay').val() != '0' && $('#ddlMonth').val() != '0' && $('#ddlYear').val() != '0') {
                            if (lstdtl[0].DOB == "Invalid Date") {
                                var dmsg = $('#ddlDay').val() + '-' + $('#ddlMonth').val() + '-' + $('#ddlYear').val() + ' is Invalid Date';
                                $('#ddlDay').val('0');
                                $('#ddlMonth').val('0');
                                $('#ddlYear').val('0');
                                alert(dmsg);
                                return false;
                            }
                        }

                        if (yr >= 2010) { //data is present in db check for grade 

                            var grade = lstdtl[0].GRADE;
                            if (grade == 1) { //1 means pass , logic added by Ritika lath on 08-04-2019

                                document.getElementById('txtApplName').value = lstdtl[0].NAME;
                                $('#txtUniqueId').val(lstdtl[0].pStrName);

                                $('#txtFatherName').val(lstdtl[0].FNAME);
                                $('#txtMotherName').val(lstdtl[0].MNAME);
                                document.getElementById('txtTotMark').value = lstdtl[0].TOT;
                                //document.getElementById('txtMaxMark').value = lstdtl[0].MAXTOTAL;

                                if (parseInt(lstdtl[0].Sex) > 0) {
                                    $('#ddlGender').val(parseInt(lstdtl[0].Sex));
                                }
                                if (lstdtl[0].DOB != null) {
                                    var str = lstdtl[0].DOB;
                                    var res = str.split('/');
                                }

                                $('#ddlYOL').val(lstdtl[0].int_YearOfPassing);
                                $("#lblyearOfLeaving").html($('#ddlYOL option:selected').html()).css("display", "");
                                $('#ddlYOL').css("display", "none");
                                $('#ddlYOL').val(lstdtl[0].int_YearOfPassing);

                                $("#ddlCState").val('1');

                                fillDist(document.getElementById('ddlCState'));

                                if (parseInt(lstdtl[0].Category) == 1) {
                                    $("#rbtGeneral").prop('checked', true);
                                }
                                else if (parseInt(lstdtl[0].Category) == 2) {
                                    $("#rbtSC").prop('checked', true);
                                }
                                else if (parseInt(lstdtl[0].Category) == 3) {
                                    $("#rbtST").prop('checked', true);
                                }
                                else if (parseInt(lstdtl[0].Category) == 4) {
                                    $("#rbtnOBC").prop('checked', true);
                                }
                                else if (parseInt(lstdtl[0].Category) == 6) {
                                    $("#rbtBCW").prop('checked', true);
                                }
                                else {
                                    $("#rbtOther").prop('checked', true);
                                }

                                //added by Ritika Lath to set ews for no general category on 1st May 2020
                                if (!(parseInt(lstdtl[0].Category) == 1)) {
                                    $("#rbtEWSNo").prop('checked', true);
                                    $("#rbtEWSYes").attr('disabled', 'disabled');
                                    $("#rbtEWSNo").attr('disabled', 'disabled');
                                }
                                else {
                                    $("#rbtEWSNo").prop('checked', true);
                                    $("#rbtEWSYes").removeAttr("disabled");
                                    $("#rbtEWSNo").removeAttr("disabled");
                                }

                                $('#txtschname').val(lstdtl[0].SCHOOL);
                                $('#ddlinstDistrict').val(lstdtl[0].DISTRICT);
                                $("#lblSchoolDistrict").html($('#ddlinstDistrict option:selected').html()).css("display", "");
                                $('#ddlinstDistrict').css("display", "none");
                                //document.getElementById('ddlinstDistrict').style.display = "";

                                //}

                                document.getElementById('hdnUniqueId').value = lstdtl[0].pStrName;
                                if (lstdtl[0].pStrName != null && lstdtl[0].pStrName != '') {
                                    $("#txtUniqueId").attr("readonly", true);

                                }
                                else {
                                    $("#txtUniqueId").attr("readonly", false);

                                }

                                $("#txtApplName").attr("readonly", true);
                                $("#txtFatherName").attr("readonly", true);
                                $("#txtMotherName").attr("readonly", true);
                                $("#txtschname").attr("readonly", true);
                                $("#lblResultMsg").hide();
                                $("#btnSave").show();
                            }
                            else {

                                alert('Your CAF could not be proceeded as you are not fulfilling the Admission Apply Eligibility Criteria./ आपका CAF आगे नहीं बढ़ाया जा सका क्योंकि आप एडमिशन अप्लाई की पात्रता मानदंड को पूरा नहीं कर रहे हैं');
                                $("#lblResultMsg").show();
                                $("#lblResultMsg").text('Your CAF could not be proceeded as you are not fulfilling the Admission Apply Eligibility Criteria./ आपका CAF आगे नहीं बढ़ाया जा सका क्योंकि आप एडमिशन अप्लाई की पात्रता मानदंड को पूरा नहीं कर रहे हैं');

                                if (lstdtl[0].pStrName != null && lstdtl[0].pStrName != '') {
                                    $("#txtUniqueId").attr("readonly", true);
                                }
                                else {
                                    $("#txtUniqueId").attr("readonly", false);
                                }

                                $("#txtApplName").attr("readonly", true);
                                $("#txtFatherName").attr("readonly", true);
                                $("#txtMotherName").attr("readonly", true);
                                $("#txtschname").attr("readonly", true);
                                $("#txtTotMark").attr("readonly", true);
                                $("#txtMaxMark").attr("readonly", true);
                                $("#lblSchoolDistrict").css("display", "none").html('');
                                $('#ddlinstDistrict').css("display", "");
                                $("#lblyearOfLeaving").css("display", "none").html('');
                                $('#ddlYOL').css("display", "").val('0');
                                $("#btnSave").hide();
                            }
                        }

                        else {

                            $("#hdnGrade").val(0)
                            document.getElementById('ddlinstDistrict').style.display = "";

                            $("#txtUniqueId").attr("readonly", false);

                            $("#txtApplName").attr("readonly", false);
                            $("#txtFatherName").attr("readonly", false);
                            $("#txtMotherName").attr("readonly", false);
                            $("#txtschname").attr("readonly", false);
                            $("#rbtSC").attr("disabled", false);
                            $("#rbtST").attr("disabled", false);
                            $("#rbtnOBC").attr("disabled", false);
                            $("#rbtOther").attr("disabled", false);
                            $("#rbtBCW").attr("disabled", false);
                            $("#rbtGeneral").attr("disabled", false);
                            $("#lblSchoolDistrict").css("display", "none").html('');
                            $('#ddlinstDistrict').css("display", "");
                            $("#lblyearOfLeaving").css("display", "none").html('');
                            $('#ddlYOL').css("display", "").val('0');
                            $("#rbtEWSNo").prop('checked', true);
                            $("#rbtEWSYes").removeAttr("disabled");
                            $("#rbtEWSNo").removeAttr("disabled");

                        }
                        $("#lblTotMarkCpy").html(lstdtl[0].TOT);
                        $("#lblMaxMarkCpy").html(lstdtl[0].MAXTOTAL);
                        if (yr >= 2014) {

                            $("#lblGrade").html(lstdtl[0].GRADE);
                        }
                        else {
                            $("#lblGrade").html(0);
                        }
                        $("#txtTotMark").attr("readonly", "readonly");
                        $("#txtMaxMark").attr("readonly", "readonly");
                        document.getElementById('hdnValidateSts').value = "1";
                    }
                    else {
                        document.getElementById('txtUniqueId').value = '';
                        document.getElementById('txtApplName').value = '';
                        document.getElementById('txtFatherName').value = '';
                        document.getElementById('txtMotherName').value = '';
                        document.getElementById('txtTotMark').value = '';
                        //document.getElementById('txtMaxMark').value = '';
                        document.getElementById('GENERAL').style.color = "#000000";
                        document.getElementById('ST').style.color = "#000000";
                        document.getElementById('SC').style.color = "#000000";
                        document.getElementById('OTHER').style.color = "#000000";
                        document.getElementById('OBC').style.color = "#000000";
                        $("#rbtGeneral").prop('checked', true);
                        document.getElementById('GENERAL').style.color = "#CC33FF";
                        $('#txtschname').val('');
                        $('#ddlGender').val('0');

                        $("#txtTotMark").attr("readonly", false);
                        $("#txtMaxMark").attr("readonly", false);

                        $("#lblTotMarkCpy").html('');
                        $("#lblMaxMarkCpy").html('');
                        $("#lblGrade").html('');

                        $("#txtUniqueId").attr("readonly", false);
                        $("#txtApplName").attr("readonly", false);
                        $("#txtFatherName").attr("readonly", false);
                        $("#txtMotherName").attr("readonly", false);
                        $("#txtschname").attr("readonly", false);
                        $("#rbtSC").attr("disabled", false);
                        $("#rbtST").attr("disabled", false);
                        $("#rbtnOBC").attr("disabled", false);
                        $("#rbtOther").attr("disabled", false);
                        $("#rbtBCW").attr("disabled", false);
                        $("#rbtGeneral").attr("disabled", false);
                        $("#btnSave").show();
                        $("#lblResultMsg").hide();
                        document.getElementById('ddlinstDistrict').style.display = "";
                        $('#ddlinstDistrict').val('0');
                        document.getElementById('hdnValidateSts').value = "0";
                        $("#lblSchoolDistrict").css("display", "none").html('');
                        $('#ddlinstDistrict').css("display", "");
                        $("#lblyearOfLeaving").css("display", "none").html('');
                        $('#ddlYOL').css("display", "").val('0');
                        $("#rbtEWSNo").prop('checked', true);
                        $("#rbtEWSYes").removeAttr("disabled");
                        $("#rbtEWSNo").removeAttr("disabled");

                    }
                    if (inVal == 109) {
                        $("#txtUniqueId").attr("readonly", false);
                        $("#txtApplName").attr("readonly", false);
                        $("#txtFatherName").attr("readonly", false);
                        $("#txtMotherName").attr("readonly", false);
                        $("#txtschname").attr("readonly", false);
                        $("#txtMaxMark").attr("readonly", false);
                        $("#txtTotMark").attr("readonly", false);
                    }

                    if (document.getElementById('hdnValidateSts').value == '1') {
                        if (lstdtl[0].pStrName != null && lstdtl[0].pStrName != '') {
                            $("#txtUniqueId").attr("readonly", true);
                        }
                        else {
                            $("#txtUniqueId").attr("readonly", false);
                        }
                        $("#txtApplName").attr("readonly", true);
                        $("#txtFatherName").attr("readonly", true);
                        $("#txtMotherName").attr("readonly", true);
                        $("#txtschname").attr("readonly", true);
                        $("#txtMaxMark").attr("readonly", true);
                        $("#txtTotMark").attr("readonly", true);
                    }
                },
                error: function (response) {
                    document.getElementById('hdnValidateSts').value = "0";
                    var msg = jQuery.parseJSON(response.responseText);
                    console.log("Message: " + msg.Message);
                    console.log("StackTrace: " + msg.StackTrace);
                    console.log("ExceptionType: " + msg.ExceptionType);
                },
                // your ajax code
                beforeSend: function () {
                    $.blockUI();
                },
                complete: function () {
                    $.unblockUI();
                    $(".blockUI").fadeOut("slow");
                }
            });

        }
        else {
            document.getElementById('txtUniqueId').value = '';
            document.getElementById('txtApplName').value = '';
            document.getElementById('txtFatherName').value = '';
            document.getElementById('txtMotherName').value = '';
            document.getElementById('txtTotMark').value = '';
            // document.getElementById('txtMaxMark').value = '';

            $("#txtTotMark").attr("readonly", false);
            $("#txtMaxMark").attr("readonly", false);

            $("#txtUniqueId").attr("readonly", false);

            $("#txtApplName").attr("readonly", false);
            $("#txtFatherName").attr("readonly", false);
            $("#txtMotherName").attr("readonly", false);
            $("#txtschname").attr("readonly", false);
            $("#rbtSC").attr("disabled", false);
            $("#rbtST").attr("disabled", false);
            $("#rbtnOBC").attr("disabled", false);
            $("#rbtOther").attr("disabled", false);
            $("#rbtBCW").attr("disabled", false);
            $("#rbtGeneral").attr("disabled", false);
            $("#rbtEWSNo").prop('checked', true);
            $("#rbtEWSYes").removeAttr("disabled");
            $("#rbtEWSNo").removeAttr("disabled");
            $("#lblTotMarkCpy").html('');
            $("#lblMaxMarkCpy").html('');
            $("#lblGrade").html('');

            $("#rbtGeneral").prop('checked', true);
            $('#txtschname').val('');

            $('#txtschname').val('');
            $('#ddlGender').attr("disabled", false);
            $('#ddlGender').val('0');
            document.getElementById('ddlinstDistrict').style.display = "";
            $("#lblSchoolDistrict").css("display", "none").html('');
            $("#lblyearOfLeaving").css("display", "none").html('');
            $('#ddlYOL').css("display", "").val('0');
            $('#ddlinstDistrict').val('0');

            document.getElementById('hdnValidateSts').value = "0";
        }

        //    if (parseInt(document.getElementById('ddlBoard').value) == 109 && parseInt(document.getElementById('ddlYOP').value) > 2009) {
        //        $("#txtMaxMark").val(500);
        //        $("#txtMaxMark").attr("readonly", true);
        //    }

        // }


    }
}

function VerifyMarks() {
    var msg = '';
    var board = $("#ddlBoard").val();
    var yop = $("#ddlYOP").val();
    if (((board == 46) && (yop >= 2010) && (yop <= 2017)) || ((board == 103) && (yop >= 2012))) {
        msg = 'Total CGPA - ' + document.getElementById('txtCGPA').value;
    }
    else if (board == 116) {
        msg = 'Total Grade -' + $("#ddlTGrade").val();
    }
    else {
        msg = 'Total Full Marks - ' + $("#txtMaxMark").val() + ', Total Marks Obtained -' + $("#txtTotMark").val();
    }
    return msg;
}



/*
 * ===================================get maximum mark by board year==================================
Modified by RItika Lath on 2nd June 2020 as BSEB all maximum mark is 500 nt brining from database
 */
function fillMaximumMark() {
    var boardId = $("#ddlBoard").val();
    var yop = $("#ddlYOP").val();

    //if (!(document.getElementById('tableOption').getElementsByTagName("TR").length > 1)) {
    if (boardId != null && boardId != undefined && boardId != '' && boardId == '109') {

        $("#txtMaxMark").val(500);
        $("#txtMaxMark").attr("readonly", true);
    }

    //if (parseInt(document.getElementById('ddlBoard').value) == 47 && parseInt(document.getElementById('ddlYOP').value) <= 2017) {
    //    $("#txtMaxMark").val(10);
    //    $("#txtMaxMark").attr("readonly", true);
    //}

}

function RollNoCheck() {
    document.getElementById('txtBoardRoll').value = '';
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
}

//================Mark Verification Radio Button==========
function CheckMarkVerificationCpy() {
    if (document.getElementById('rbtMarkVerifiedYCpy').checked == true) {

        BoardMark();
    }
    else {

        //$("#txtApplName").attr("readonly", false);
        $("#txtEnglish").attr("readonly", false);
        $("#txtMath").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtSocSci").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);
        document.getElementById('txtEnglish').value = '';
        document.getElementById('txtMath').value = '';
        document.getElementById('txtScience').value = '';
        document.getElementById('txtSocSci').value = '';
        document.getElementById('txtTotMark').value = '';
        document.getElementById('txtMaxMark').value = '';

    }
}
//--------Added By Banaja For Subject Validation-----------------------------
function ELEsubjectvalidation() {

    var ELE1 = parseInt(document.getElementById('ddlELE1').options[document.getElementById('ddlELE1').selectedIndex].value);
    var ELE2 = parseInt(document.getElementById("ddlELE2").options[document.getElementById("ddlELE2").selectedIndex].value);
    var ELE3 = parseInt(document.getElementById("ddlELE3").options[document.getElementById("ddlELE3").selectedIndex].value);
    var ELE4 = parseInt(document.getElementById("ddl4thELE1").options[document.getElementById("ddl4thELE1").selectedIndex].value);
    if (ELE1 != 0 && ELE2 != 0 && ELE3 != 0 && ELE4 != 0) {

        if (ELE1 == ELE2 || ELE1 == ELE3 || ELE1 == ELE4 || ELE2 == ELE3 || ELE2 == ELE4 || ELE3 == ELE4) {

            alert('One language can be acceptable !');
            document.getElementById('ddlELE1').selectedIndex = 0;
            document.getElementById('ddlELE2').selectedIndex = 0;
            document.getElementById('ddlELE3').selectedIndex = 0;
            document.getElementById('ddl4thELE1').selectedIndex = 0;

            return false;
        }
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

    if ((ELE1 == 76 && ELE2 == 62) || (ELE1 == 76 && ELE2 == 63) || (ELE1 == 62 && ELE2 == 76) || (ELE1 == 62 && ELE2 == 63) || (ELE1 == 63 && ELE2 == 76) || (ELE1 == 63 && ELE2 == 62) ||
        (ELE1 == 76 && ELE3 == 62) || (ELE1 == 76 && ELE3 == 63) || (ELE1 == 62 && ELE3 == 76) || (ELE1 == 62 && ELE3 == 63) || (ELE1 == 63 && ELE3 == 76) || (ELE1 == 63 && ELE3 == 62) ||
        (ELE2 == 76 && ELE3 == 62) || (ELE2 == 76 && ELE3 == 63) || (ELE2 == 62 && ELE3 == 76) || (ELE2 == 62 && ELE3 == 63) || (ELE2 == 63 && ELE3 == 76) || (ELE2 == 63 && ELE3 == 62) ||
        (ELE1 == 76 && ELE4 == 62) || (ELE1 == 76 && ELE4 == 63) || (ELE1 == 62 && ELE4 == 76) || (ELE1 == 62 && ELE4 == 63) || (ELE1 == 63 && ELE4 == 76) || (ELE1 == 63 && ELE4 == 62) ||
        (ELE2 == 76 && ELE4 == 62) || (ELE2 == 76 && ELE4 == 63) || (ELE2 == 62 && ELE4 == 76) || (ELE2 == 62 && ELE4 == 63) || (ELE2 == 63 && ELE4 == 76) || (ELE2 == 63 && ELE4 == 62) ||
        (ELE3 == 76 && ELE4 == 62) || (ELE3 == 76 && ELE4 == 63) || (ELE3 == 62 && ELE4 == 76) || (ELE3 == 62 && ELE4 == 63) || (ELE3 == 63 && ELE4 == 76) || (ELE3 == 63 && ELE4 == 62) ||
        (ELE1 == 76 && ELE5 == 62) || (ELE1 == 76 && ELE5 == 63) || (ELE1 == 62 && ELE5 == 76) || (ELE1 == 62 && ELE5 == 63) || (ELE1 == 63 && ELE5 == 76) || (ELE1 == 63 && ELE5 == 62) ||
        (ELE2 == 76 && ELE5 == 62) || (ELE2 == 76 && ELE5 == 63) || (ELE2 == 62 && ELE5 == 76) || (ELE2 == 62 && ELE5 == 63) || (ELE2 == 63 && ELE5 == 76) || (ELE2 == 63 && ELE5 == 62) ||
        (ELE3 == 76 && ELE5 == 62) || (ELE3 == 76 && ELE5 == 63) || (ELE3 == 62 && ELE5 == 76) || (ELE3 == 62 && ELE5 == 63) || (ELE3 == 63 && ELE5 == 76) || (ELE3 == 63 && ELE5 == 62) ||
        (ELE4 == 76 && ELE5 == 62) || (ELE4 == 76 && ELE5 == 63) || (ELE4 == 62 && ELE5 == 76) || (ELE4 == 62 && ELE5 == 63) || (ELE4 == 63 && ELE5 == 76) || (ELE4 == 63 && ELE5 == 62) ||
        (ELE1 == 76 && ELE6 == 62) || (ELE1 == 76 && ELE6 == 63) || (ELE1 == 62 && ELE6 == 76) || (ELE1 == 62 && ELE6 == 63) || (ELE1 == 63 && ELE6 == 76) || (ELE1 == 63 && ELE6 == 62) ||
        (ELE2 == 76 && ELE6 == 62) || (ELE2 == 76 && ELE6 == 63) || (ELE2 == 62 && ELE6 == 76) || (ELE2 == 62 && ELE6 == 63) || (ELE2 == 63 && ELE6 == 76) || (ELE2 == 63 && ELE6 == 62) ||
        (ELE3 == 76 && ELE6 == 62) || (ELE3 == 76 && ELE6 == 63) || (ELE3 == 62 && ELE6 == 76) || (ELE3 == 62 && ELE6 == 63) || (ELE3 == 63 && ELE6 == 76) || (ELE3 == 63 && ELE6 == 62) ||
        (ELE4 == 76 && ELE6 == 62) || (ELE4 == 76 && ELE6 == 63) || (ELE4 == 62 && ELE6 == 76) || (ELE4 == 62 && ELE6 == 63) || (ELE4 == 63 && ELE6 == 76) || (ELE4 == 63 && ELE6 == 62) ||
        (ELE5 == 76 && ELE6 == 62) || (ELE5 == 76 && ELE6 == 63) || (ELE5 == 62 && ELE6 == 76) || (ELE5 == 62 && ELE6 == 63) || (ELE5 == 63 && ELE6 == 76) || (ELE5 == 63 && ELE6 == 62)
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

    if ((ELE1 == 76 && ELE2 == 76) || (ELE1 == 76 && ELE3 == 76) || (ELE1 == 76 && ELE4 == 76) || (ELE1 == 76 && ELE5 == 76) || (ELE1 == 76 && ELE6 == 76) ||
        (ELE2 == 76 && ELE3 == 76) || (ELE2 == 76 && ELE4 == 76) || (ELE2 == 76 && ELE5 == 76) || (ELE2 == 76 && ELE6 == 76) ||
        (ELE3 == 76 && ELE4 == 76) || (ELE3 == 76 && ELE5 == 76) || (ELE3 == 76 && ELE6 == 76) ||
        (ELE4 == 76 && ELE5 == 76) || (ELE4 == 76 && ELE5 == 76) ||
        (ELE5 == 76 && ELE6 == 76) ||

        (ELE1 == 62 && ELE2 == 62) || (ELE1 == 62 && ELE3 == 62) || (ELE1 == 62 && ELE4 == 62) || (ELE1 == 62 && ELE5 == 62) || (ELE1 == 62 && ELE6 == 62) ||
        (ELE2 == 62 && ELE3 == 62) || (ELE2 == 62 && ELE4 == 62) || (ELE2 == 62 && ELE5 == 62) || (ELE2 == 62 && ELE6 == 62) ||
        (ELE3 == 62 && ELE4 == 62) || (ELE3 == 62 && ELE5 == 62) || (ELE3 == 62 && ELE6 == 62) ||
        (ELE4 == 62 && ELE5 == 62) || (ELE4 == 62 && ELE6 == 62) ||
        (ELE5 == 62 && ELE6 == 62) ||

        (ELE1 == 63 && ELE2 == 63) || (ELE1 == 63 && ELE3 == 63) || (ELE1 == 63 && ELE4 == 63) || (ELE1 == 63 && ELE5 == 63) || (ELE1 == 63 && ELE6 == 63) ||
        (ELE2 == 63 && ELE3 == 63) || (ELE2 == 63 && ELE4 == 63) || (ELE2 == 63 && ELE5 == 63) || (ELE2 == 63 && ELE6 == 63) ||
        (ELE3 == 63 && ELE4 == 63) || (ELE3 == 63 && ELE5 == 63) || (ELE3 == 63 && ELE6 == 63) ||
        (ELE4 == 63 && ELE5 == 63) || (ELE4 == 63 && ELE6 == 63) ||
        (ELE5 == 63 && ELE6 == 63)

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
        (ELE3 == 44 && ELE4 == 68) || (ELE3 == 68 && ELE4 == 44) ||
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
        (ELE4 == 36 && ELE5 == 36) || (ELE4 == 36 && ELE6 == 36) ||
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

}


function EnglishOriyaFont() { }

function EnglishOriyaFont1() {

    if (document.getElementById('rbtnOriya').checked) {

        document.getElementById('common').innerHTML = 'साधारण आबेदन पत्र';
        document.getElementById('adm').innerHTML = ' महाविद्यालय मे दाखीले के लिए (२୦१८ -१९)';
        // document.getElementById('department').innerHTML = 'ଉଚ୍ଚଶିକ୍ଷା ବିଭାଗ , ଓଡିଶା ସରକାର ';
        document.getElementById('department').innerHTML = 'स्कूल और जन शिक्षा विभाग, बिहार सरकार';
        document.getElementById('lblMarkField').innerHTML = '* मार्क अनिवार्य क्षेत्र इंगित करता है';
        document.getElementById('lblp2').innerHTML = 'मध्यम';
        document.getElementById('lblBoardName').innerHTML = 'परीक्षा बोर्ड का नाम';
        document.getElementById('lblYOP').innerHTML = 'उत्तीर्ण होने का वर्ष';
        document.getElementById('lblExamType').innerHTML = 'परीक्षा प्रकार';
        document.getElementById('lblRoll').innerHTML = 'रोल नंबर ';
        document.getElementById('lblphototext').innerHTML = 'अपनी तस्वीर अपलोड करने के लिए यहां क्लिक करें';

        document.getElementById('lblNat').innerHTML = 'राष्ट्रीयता';
        document.getElementById('lblMt').innerHTML = 'मातृ भाषा';

        document.getElementById('AdharNo').innerHTML = 'आधार संख्या';
        document.getElementById('lblApplicantName').innerHTML = 'आवेदक का नाम';
        document.getElementById('rbtnAnnual').nextSibling.innerHTML = 'वार्षिक';
        document.getElementById('rbtnSuppl').nextSibling.innerHTML = 'पूरक';
        document.getElementById('lblFname').innerHTML = 'पिता का नाम';
        document.getElementById('lblMname').innerHTML = 'मां का नाम';
        document.getElementById('lblPD').innerHTML = 'व्यक्तिगत विवरण';
        document.getElementById('lblBloodGroup').innerHTML = 'रक्त समूह';
        document.getElementById('lblReligion').innerHTML = 'धर्म';
        document.getElementById('lblGender').innerHTML = 'लिंग';
        document.getElementById('lblDOB').innerHTML = 'जन्म की तारीख';
        document.getElementById('lblState').innerHTML = 'राज्य';
        document.getElementById('lblDistrict').innerHTML = 'जिला';
        document.getElementById('lblBlock').innerHTML = 'ब्लॉक / यूएलबी';
        document.getElementById('lblHouseNo').innerHTML = 'हाउस नंबर, स्ट्रीट / ग्राम, डाकघर, पुलिस स्टेशन का नाम ';
        document.getElementById('lblpin').innerHTML = 'पिन कोड';
        document.getElementById('lbltelephone').innerHTML = 'टेलीफ़ोन नंबर';
        document.getElementById('lblMobileNo').innerHTML = 'मोबाइल नंबर';
        document.getElementById('lblEmail').innerHTML = 'ई-मेल';
        document.getElementById('lblAreaCode').innerHTML = 'क्षेत्र कोड - ';
        document.getElementById('lblphone').innerHTML = 'फोन नंबर';
        document.getElementById('ST').innerHTML = 'अनुसूचित जनजाति';
        document.getElementById('SC').innerHTML = 'अनुसूचित जाति';
        document.getElementById('OBC').innerHTML = 'अन्य पिछड़ा वर्ग';
        document.getElementById('GENERAL').innerHTML = 'साधारण';
        document.getElementById('OTHER').innerHTML = 'सामाजिक और शैक्षिक रूप से पिछड़ा वर्ग';
        document.getElementById('PHOH').innerHTML = 'शारीरिक रूप से / आर्थोपेडिक रूप से विकलांग';
        document.getElementById('ESM').innerHTML = 'पूर्व सेवा आदमी';
        document.getElementById('CoM').innerHTML = 'शहीदों के बच्चे';
        document.getElementById('SDP').innerHTML = 'रक्षा कार्मिकों की सेवा';
        document.getElementById('NoN').innerHTML = 'कोई नहीं';

        document.getElementById('NCCA').innerHTML = 'एनसीसी';
        document.getElementById('NCCC').innerHTML = 'एनसीसी';
        document.getElementById('RP').innerHTML = 'राज्य पुरस्कार';
        document.getElementById('PR').innerHTML = 'राष्ट्रपति मान्यता';
        document.getElementById('SportS').innerHTML = 'राज्य';
        document.getElementById('SportN').innerHTML = 'राष्ट्रीय';
        //document.getElementById('SportIN').innerHTML = 'ଆନ୍ତରଜାତୀୟ'; 
        document.getElementById('SportIN').innerHTML = 'अंतरराष्ट्रीय';
        document.getElementById('lblColType').innerHTML = 'कॉलेज का प्रकार';
        // document.getElementById('SF').innerHTML = 'ସେଲ୍ଫ ଫାଇନାସ';
        document.getElementById('SF').innerHTML = 'स्व वित्तपोषण';
        document.getElementById('OF').innerHTML = 'सरकारी / एडेड / प्राइवेट';
        document.getElementById('lblDname').innerHTML = 'जिला का नाम';
        document.getElementById('lblcolname').innerHTML = 'कॉलेज का नाम';
        document.getElementById('lblStream').innerHTML = 'धारा ';
        document.getElementById('comsub').innerHTML = 'अनिवार्य (एमआईएल)';
        document.getElementById('lblESub').innerHTML = 'वैकल्पिक विषय';
        document.getElementById('lblFESub').innerHTML = 'पहला इलैक्टिव';
        document.getElementById('lblSESub').innerHTML = 'दूसरा इलैक्टिव';
        document.getElementById('lblTESub').innerHTML = 'तीसरा इलैक्टिव';
        document.getElementById('ForEle').innerHTML = 'वरीयता के क्रम में चौथे इलैक्टिव';
        document.getElementById('lblFchoice').innerHTML = 'पहली पसंद';
        document.getElementById('lblSchoice').innerHTML = 'दूसरी पसंद';
        document.getElementById('lblTchoice').innerHTML = 'तीसरा पसंद ';
        document.getElementById('lblhostel').innerHTML = 'क्या आप छात्रावास में रहना चाहते हैं ?';
        document.getElementById('Opt1').innerHTML = 'हाँ';
        document.getElementById('Opt2').innerHTML = 'नहीं';
        document.getElementById('lbladdress').innerHTML = 'स्थाई पता';
        document.getElementById('lblReservation').innerHTML = 'आरक्षण का विवरण';

        document.getElementById('2').value = 'दूसरा विकल्प';
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
        document.getElementById('lblWeightage').innerHTML = 'वजन विवरण ';
        document.getElementById('lbl9').innerHTML = '10 वीं बोर्ड परीक्षा में मार्क / ग्रेड का विवरण';
        document.getElementById('lbl9a').innerHTML = '10 वीं बोर्ड परीक्षा में प्रत्येक विषय में मार्क / ग्रेड सुरक्षित';
        document.getElementById('lbl9b').innerHTML = 'क्या आपने 10 वीं बोर्ड परीक्षा Compartmentally उत्तीर्ण की है? . ?';
        document.getElementById('CompN').innerHTML = 'नहीं';
        document.getElementById('CompY').innerHTML = 'हाँ';
        document.getElementById('lblinf').innerHTML = 'आपको कम से कम एक और अधिकतम पंद्रह विकल्पों का चयन करना होगा।';
        document.getElementById('lblpriority').innerHTML = 'ଛାତ୍ରବାସ ର ପ୍ରାଥମିକତା';
        document.getElementById('btnSave').value = 'लागू करें';
        document.getElementById('lbl9msg').innerHTML = 'सूचना: यदि दी गई सूची में कोई विषय नाम नहीं है, तो कृपया हमें 155335 / 1800-345-6770 पर कॉल करें (टोल फ्री)।';
        document.getElementById('lblchoice').innerHTML = 'नोट: यदि आप अधिक विकल्प चुनना चाहते हैं, तो लागू बटन पर क्लिक न करें।'

        var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var rowsLen = Rows.length
        if (rowsLen == 0) {
            document.getElementById('Caption').innerHTML = 'ପ୍ରଥମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ'
        }

        document.getElementById('lbltit').innerHTML = 'बोर्ड का नाम चुनें जिसे आपने 10 वीं की परीक्षा उत्तीर्ण की है, परीक्षा का वर्ष और रोल संख्या (प्रवेश पत्र के रूप में)';
        document.getElementById('dv9').innerHTML = 'ध्यान दें: यदि आप सीबीएसई और 2010 का चयन करें या बाद में पास होने के वर्ष के रूप में, नीचे दिए गए फील्ड, ग्रेड बिंदु दिखाएंगे ';
        document.getElementById('NCC').innerHTML = 'एनसीसी';
        document.getElementById('lblscout').innerHTML = 'स्काउट और गाइड';
        document.getElementById('sport').innerHTML = 'खेल';
        document.getElementById('lbloption').innerHTML = 'ବିକଳ୍ପ/ଚୟନ ବିବରଣୀ';
        document.getElementById('VF').innerHTML = 'व्यवसायिक';

        document.getElementById('lblN1').innerHTML = '१.';
        document.getElementById('lblN2').innerHTML = '२.';
        document.getElementById('lblN3').innerHTML = '३.';
        document.getElementById('lblN4').innerHTML = '४.';
        document.getElementById('lblN5').innerHTML = '५.';

        document.getElementById('lblN6').innerHTML = '६.';
        document.getElementById('lblN6a').innerHTML = 'क.';
        document.getElementById('lblN6b').innerHTML = 'ख.';
        document.getElementById('lblN6c').innerHTML = 'ग.';
        document.getElementById('lblN6d').innerHTML = 'घ.';
        document.getElementById('lblN6e').innerHTML = 'ङ.';
        document.getElementById('lblN6f').innerHTML = 'च.';
        document.getElementById('lblN6g').innerHTML = 'छ.';
        document.getElementById('lblN6h').innerHTML = 'ज.';

        document.getElementById('lblN7').innerHTML = '७.';
        document.getElementById('lblN7a').innerHTML = 'क.';
        document.getElementById('lblN7b').innerHTML = 'ख.';
        document.getElementById('lblN7c').innerHTML = 'ग.';
        document.getElementById('lblN7d').innerHTML = 'घ.';
        document.getElementById('lblN7e').innerHTML = 'ङ.';

        document.getElementById('lblN8').innerHTML = '८.';
        document.getElementById('lblN8a').innerHTML = 'क.';
        document.getElementById('lblN8b').innerHTML = 'ख.';
        document.getElementById('lblN8c').innerHTML = 'ग.';

        document.getElementById('lblN9').innerHTML = '९.';
        document.getElementById('lblN9a').innerHTML = 'क.';
        document.getElementById('lblN9b').innerHTML = 'ख.';

        document.getElementById('lblN61').innerHTML = '१०.';
        document.getElementById('lblIncomeDet').innerHTML = 'माता-पिता का आय विवरण';
        document.getElementById('lblFocu').innerHTML = 'पिता का व्यवसाय';
        document.getElementById('lblIncome').innerHTML = 'माता-पिता की वार्षिक आय (एक साथ) रु।';
        document.getElementById('lblMocu').innerHTML = 'मां का व्यवसाय';

        document.getElementById('lblN61a').innerHTML = 'क.';
        document.getElementById('lblN61b').innerHTML = 'ख.';
        document.getElementById('lblN61c').innerHTML = 'ग.';


        document.getElementById('lbleduinst').innerHTML = 'शैक्षणिक संस्थान का रिकॉर्ड पिछले भाग में उपस्थित था';
        document.getElementById('lblschname').innerHTML = 'स्कूल का नाम';
        document.getElementById('lblschloc').innerHTML = 'विद्यालय का स्थान';
        document.getElementById('lblinsDist').innerHTML = 'जिला';
        document.getElementById('lblinsYOJ').innerHTML = 'शामिल होने का वर्ष';
        document.getElementById('lblYOL').innerHTML = 'छोड़ने का वर्ष';

        document.getElementById('lblN71a').innerHTML = 'क.';
        document.getElementById('lblN71b').innerHTML = 'ख.';
        document.getElementById('lblN71c').innerHTML = 'ग.';
        document.getElementById('lblN71d').innerHTML = 'घ.';
        document.getElementById('lblN71e').innerHTML = 'ङ.';

        document.getElementById('lbla').innerHTML = 'क.';
        document.getElementById('lblb').innerHTML = 'ख.';
        document.getElementById('lblc').innerHTML = 'ग.';
        document.getElementById('lbld').innerHTML = 'घ.';
        document.getElementById('lble').innerHTML = 'ङ.';
        document.getElementById('lblf').innerHTML = 'च.';
        document.getElementById('lblg').innerHTML = 'छ.';
        document.getElementById('S').innerHTML = 'संस्कृत';


        document.getElementById('lblBankInfo').innerHTML = 'बैंक सूचना';
        document.getElementById('lblacno').innerHTML = 'खाता संख्या';
        document.getElementById('lblifsc').innerHTML = 'आई एफ एस सी कोड';
        document.getElementById('lblmicr').innerHTML = 'एम आई सी आर कोड';
        document.getElementById('lblBdet').innerHTML = 'बैंक विवरण';

        if ($("#ddlAIncome").val() == 4 || $("#ddlAIncome").val() == 0) {
            document.getElementById('lblN71').innerHTML = '११.';
            //            document.getElementById('lblN12').innerHTML = '१२.';
        }
        else {
            document.getElementById('lblN71').innerHTML = '१२.';
            //            document.getElementById('lblN12').innerHTML = '११.';
        }


        document.getElementById('lblN12a').innerHTML = 'क.';
        document.getElementById('lblN12b').innerHTML = 'ख.';
        document.getElementById('lblN12c').innerHTML = 'ग.';
        document.getElementById('lblN12d').innerHTML = 'घ.';

        if (document.getElementById('rbtVocational').checked) {
            document.getElementById('lblh').innerHTML = 'छ.';
        }
        else {
            document.getElementById('lblh').innerHTML = 'ज.';
        }
    }
    else {
        document.getElementById('common').innerHTML = 'Common Application Form';
        document.getElementById('adm').innerHTML = ' for Admission to Junior Colleges (2024-26)';
        // document.getElementById('department').innerHTML = 'Department of Higher Education, Government of Bihar';
        document.getElementById('department').innerHTML = 'Department of School & Mass Education, Government of Bihar';
        document.getElementById('lblMarkField').innerHTML = '* Mark indicates mandatory field';
        document.getElementById('lblp2').innerHTML = 'Intermediate';
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

        document.getElementById('lblinf').innerHTML = 'You are required to select at least ONE and at most FIFTEEN options .आप न्यूनतम एक विकल्प एवम अधिकतम बीस विकल्प यहाँ भर सकते हैं|';
        document.getElementById('lblpriority').innerHTML = 'Hostel Priority';
        document.getElementById('lbl9msg').innerHTML = 'Note: If any subject name not in the given list , Please call us on 155335/1800-345-6770 (Toll Free) ';
        document.getElementById('lblchoice').innerHTML = 'Note: Do not click APPLY button, if you want to select more options.';

        var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var rowsLen = Rows.length
        if (rowsLen == 0) {
            document.getElementById('Caption').innerHTML = 'Choose your 1st Option';
        }

        document.getElementById('lbltit').innerHTML = 'Name of the Board from which you have passed the 10th exam, Year of Exam & Roll Number (as in admit card)';
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
            document.getElementById('lblN71').innerHTML = '6.';
            document.getElementById('lblN12').innerHTML = '12.';
        }
        else {
            document.getElementById('lblN71').innerHTML = '6.';
            document.getElementById('lblN12').innerHTML = '11.';
        }

        if (document.getElementById('rbtVocational').checked) {
            document.getElementById('lblh').innerHTML = 'g.';
        }
        else {
            document.getElementById('lblh').innerHTML = 'h.';
        }
    }
    if (document.getElementById('hdnType').value == '1') {
        document.getElementById("rbtnEnglish").disabled = false;
        document.getElementById("rbtnOriya").disabled = true;
    }
    else if (document.getElementById('hdnType').value == '2') {
        document.getElementById("rbtnEnglish").disabled = true;
        document.getElementById("rbtnOriya").disabled = false;
    }
}
function ConfirmEnglishOriyaFont() {

    if (document.getElementById('strFontOption').value == '2') {
        document.getElementById('common').innerHTML = 'साधारण आबेदन पत्र';
        document.getElementById('adm').innerHTML = ' महाविद्यालय मे दाखीले के लिए ';
        document.getElementById('department').innerHTML = 'स्कूल और जन शिक्षा विभाग, बिहार सरकार';
        document.getElementById('flashingtext').innerHTML = 'ଦୟାକରି ଆପଣଙ୍କ ତଥ୍ୟ  ଯାଞ୍ଚ କରନ୍ତୁ , ଯଦି ଆପଣ ପରିବର୍ତ୍ତନ କରିବାକୁ  ଚାହାଁନ୍ତି , ତାହାଲେ ପୂର୍ବବର୍ତ୍ତୀ କୁ ଯାଆନ୍ତୁ .';

        document.getElementById('lblp2').innerHTML = 'मध्यम';
        document.getElementById('lblBoardName').innerHTML = 'परीक्षा बोर्ड का नाम';
        document.getElementById('lblYOP').innerHTML = 'उत्तीर्ण होने का वर्ष';
        document.getElementById('lblExType').innerHTML = 'परीक्षा प्रकार';
        document.getElementById('lblRollNo').innerHTML = 'रोल नंबर';
        document.getElementById('lblApplicantName').innerHTML = 'आवेदक का नाम';
        document.getElementById('lblFname').innerHTML = 'पिता का नाम';
        document.getElementById('lblMname').innerHTML = 'मां का नाम';
        document.getElementById('lblPD').innerHTML = 'व्यक्तिगत विवरण';
        document.getElementById('lblBloodGroup').innerHTML = 'रक्त समूह';
        document.getElementById('lblGender').innerHTML = 'लिंग';
        document.getElementById('lblReligion').innerHTML = 'धर्म';
        document.getElementById('lblDOB').innerHTML = 'जन्म की तारीख';

        document.getElementById('lblnat').innerHTML = 'राष्ट्रीयता';
        document.getElementById('lblmt').innerHTML = 'मातृ भाषा';
        document.getElementById('AdharNo').innerHTML = 'आधार संख्या';

        document.getElementById('lbladd').innerHTML = 'ପତ୍ର ବିନିମୟର ଠିକଣା';
        document.getElementById('lblState').innerHTML = 'राज्य';
        document.getElementById('lblDistrict').innerHTML = 'जिला';
        document.getElementById('lblBlock').innerHTML = 'ब्लॉक / यूएलबी';
        document.getElementById('lbladdress').innerHTML = 'स्थाई पता';
        document.getElementById('lblPinNo').innerHTML = 'पिन कोड';
        document.getElementById('lbltelephone').innerHTML = 'टेलीफ़ोन नंबर';
        document.getElementById('lblMobileNo').innerHTML = 'मोबाइल नंबर';
        document.getElementById('lblEmail').innerHTML = 'ई-मेल';
        document.getElementById('lblReservation').innerHTML = 'आरक्षण का विवरण';
        document.getElementById('ST').innerHTML = 'अनुसूचित जनजाति';
        document.getElementById('SC').innerHTML = 'अनुसूचित जाति';
        document.getElementById('OBC').innerHTML = 'अन्य पिछड़ा वर्ग';
        document.getElementById('GENERAL').innerHTML = 'साधारण';
        document.getElementById('OTHER').innerHTML = 'सामाजिक और शैक्षिक रूप से पिछड़ा वर्ग';
        document.getElementById('PHOH').innerHTML = 'शारीरिक रूप से / आर्थोपेडिक रूप से विकलांग';
        document.getElementById('ESM').innerHTML = 'अवकाश प्राप्त सेना';
        document.getElementById('SDP').innerHTML = 'रक्षा कार्मिकों की सेवा';
        document.getElementById('CoM').innerHTML = 'शहीदों के बच्चे';
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

        document.getElementById('lbl10th').innerHTML = '10 वीं बोर्ड विवरण';
        document.getElementById('lblo').innerHTML = '(प्रवेश पत्र के अनुसार)';

        document.getElementById('lblo').innerHTML = '(प्रवेश पत्र के अनुसार)';
        document.getElementById('lbloption').innerHTML = 'विकल्प विस्तार';
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
            document.getElementById('lblN71').innerHTML = '११.';
            document.getElementById('lblN12').innerHTML = '१२.';
            document.getElementById("trBD").style.display = 'none';
        }
        else {
            document.getElementById('lblN71').innerHTML = '१२.';
            document.getElementById('lblN12').innerHTML = '११.';
            document.getElementById("trBD").style.display = '';
        }
        document.getElementById('lblSName').innerHTML = 'ଯଦି ହଁ  ,ତାହେଲେ ରାଜ୍ୟ ନାମ ଚୟନ କରନ୍ତୁ ';
        document.getElementById('lblOLNSSN').innerHTML = 'ଯଦି ହଁ  ,ତାହେଲେ ରାଜ୍ୟ ନାମ ଚୟନ କରନ୍ତୁ ';
    }
    else {
        if (document.getElementById('strAIncomeval').value == '4') {
            document.getElementById('lblN71').innerHTML = '6.';
            document.getElementById('lblN12').innerHTML = '12.';
            document.getElementById("trBD").style.display = 'none';
        }
        else {
            document.getElementById('lblN71').innerHTML = '6.';
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
            document.getElementById('lblStream').innerHTML = 'धारा';
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
    document.getElementById("4thE").style.display = '';
    document.getElementById("SlblTESub").style.display = '';
    document.getElementById("SddlELE3").style.display = '';
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
//====================Fill college vacancy =============
function ColVacancy() {
    var intColId = parseInt(document.getElementById('ddlCollege').options[document.getElementById('ddlCollege').selectedIndex].value);
    var intStrid = parseInt(document.getElementById('ddlStream').options[document.getElementById('ddlStream').selectedIndex].value);
    if (intStrid == 0) {
        return false;
    }
    $.ajax({
        type: 'POST',
        url: 'JrCAFForm.aspx/vacancyColg',
        data: "{'intColId':'" + intColId + "','intStrid':'" + intStrid + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                //                      alert(value.int_CollegeID);
            });
            var lstdtl = JSON.parse(JSON.stringify(response.d));

            if (lstdtl.length == 0) {
                alert("There is No Vacancy of this college !");
                clearDDL();
            }
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }
    });
}

function validYOJ() {
    var yoj = parseInt($("#ddlYOJ").val());
    var yol = parseInt($("#ddlYOL").val());

    if (yol < yoj && yol > 0 && yol > 0) {
        alert('Year of Leaving can not less than or equal to Year of Joining');
        $("#ddlYOJ").val('0');

        //aded by Ritika lath on 20th April 2020
        if (!($("#ddlBoard").val() == "109")) {
            $("#ddlYOL").val('0');
        }

        return false;
    }
    if (yol == yoj && yol > 0 && yol > 0) {
        alert('Year of Leaving can not less than or equal to Year of Joining');
        $("#ddlYOJ").val('0');
        //aded by Ritika lath on 20th April 2020
        if (!($("#ddlBoard").val() == "109")) {
            $("#ddlYOL").val('0');
        }
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
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).replace(/\s+/g, '');
}
