

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
var imcType;
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
        document.getElementById('cutoffST1').innerHTML = '';
        document.getElementById('cutoffSC1').innerHTML = '';
        document.getElementById('cutoffGen1').innerHTML = '';

        document.getElementById('Heading2').innerHTML = '';

        document.getElementById('cutoffST2').innerHTML = '';
        document.getElementById('cutoffSC2').innerHTML = '';
        document.getElementById('cutoffGen2').innerHTML = '';
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




//==============Clear ddl values on college on change==========		      
function clearDDL() {
    debugger;
    document.getElementById('ddlCollegeDistrict').selectedIndex = 0;

    document.getElementById('ddlCollege').selectedIndex = 0;
    document.getElementById('HType').innerHTML = '';
    document.getElementById('Heading1').innerHTML = '';
    document.getElementById('cutoffST1').innerHTML = '';
    document.getElementById('cutoffSC1').innerHTML = '';
    document.getElementById('cutoffGen1').innerHTML = '';
    document.getElementById('Heading2').innerHTML = '';
    document.getElementById('cutoffST2').innerHTML = '';
    document.getElementById('cutoffSC2').innerHTML = '';
    document.getElementById('cutoffGen2').innerHTML = '';
    document.getElementById('trHPriority').style.display = 'none';


    document.getElementById('ddlStream').selectedIndex = 0;
    if (document.getElementById('rbtnOriya').checked) {
        document.getElementById('rbtAccomodation1').checked = false;
        document.getElementById('rbtAccomodation2').checked = false;
        document.getElementById('Opt2').style.color = "#000000";
        document.getElementById('Opt1').style.color = "#000000";
        document.getElementById('hostel').style.display = 'none';
        document.getElementById('Opt1').innerHTML = 'ହଁ';
        document.getElementById('Opt2').innerHTML = 'ନା';
    }
    else {
        document.getElementById('rbtAccomodation1').checked = false;
        document.getElementById('rbtAccomodation2').checked = false;
        document.getElementById('Opt2').style.color = "#000000";
        document.getElementById('Opt2').innerHTML = 'No';
        document.getElementById('Opt1').style.color = "#000000";
        document.getElementById('Opt1').innerHTML = 'Yes';
        document.getElementById('hostel').style.display = 'none';
    }
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

    optionArray[2][0] = '';
    optionArray[2][1] = '';

    optionArray[3][0] = '';
    optionArray[3][1] = '';
    optionArray[4][0] = '';
    optionArray[4][1] = '';

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
    optionArray[2][0] = AccText;
    optionArray[2][1] = Accomodation;


    var imcType = 0;
    var imcText
    if (document.getElementById('rbtnTradeWise').checked == true) {
        imcType = 1;
        imcText = "IMC"
    } else {
        imcType = 0;
        imcText = "REGULAR"
    }
    optionArray[3][0] = imcText;
    optionArray[3][1] = imcType;


}
//=================Adding Option Row in Apply Page=======================
function addRow() {
    updateOptionData();
    debugger;
    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
    var OptionText;
    var Caption;

    if (optText == 1) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ପ୍ରଥମ </B></font>"
            Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
            Caption = "Choose your 2nd Option"
        }
    }
    if (optText == 2) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଦିତୀୟ</B></font>"
            Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
            Caption = "Choose your 3rd Option"
        }

    }
    if (optText == 3) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ତୃତୀୟ</B></font>"
            Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
            Caption = "Choose your 4th Option"
        }

    }
    if (optText == 4) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଚତୁର୍ଥ</B></font>"
            Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
            Caption = "Choose your 5th Option"
        }


    }
    if (optText == 5) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ପଞ୍ଚମ</B></font>"
            Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
            Caption = "Choose your 6th Option"

        }

    }
    if (optText == 6) {

        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଷଷ୍ଠ</B></font>"
            Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
            Caption = "Choose your 7th Option"
        }
    }

    if (optText == 7) {

        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ସପ୍ତମ</B></font>"
            Caption = "ଅଷ୍ଟମ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
            Caption = "Choose your 8th Option"
        }
    }

    if (optText == 8) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଅଷ୍ଟମ</B></font>"
            Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
            Caption = "Choose your 9th Option"
        }
    }
    if (optText == 9) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ନବମ</B></font>"
            Caption = "ଦଶମ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>NINETH</B></font>"
            Caption = "You have added 10th Options"
        }
    }
    if (optText == 10) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଦଶମ</B></font>"
            Caption = "ଏକାଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Tenth</B></font>"
            Caption = "You have added 11th Options"
        }
    }

    if (optText == 11) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଏକାଦଶ</B></font>"
            Caption = "ଦ୍ୱାଦଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Eleventh</B></font>"
            Caption = "You have added 12th  Options"
        }
    }

    if (optText == 12) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଦ୍ୱାଦଶ</B></font>"
            Caption = "ତ୍ରାୟୋଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Twelveth</B></font>"
            Caption = "You have added 13th  Options"
        }
    }
    if (optText == 13) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ତ୍ରାୟୋଦଶ</B></font>"
            Caption = "ଚତୁର୍ଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Thirteenth</B></font>"
            Caption = "You have added 14th  Options"
        }
    }

    if (optText == 14) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B> ଚତୁର୍ଦଶ</B></font>"
            Caption = "ପାଞ୍ଚଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Fourteenth</B></font>"
            Caption = "You have added 15th  Options"
        }
    }

    if (optText == 15) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ପଞ୍ଚଦଶ</B></font>"
            Caption = "ଷୋଡଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Fifteenth</B></font>"
            Caption = "You have added 16th  Options"
        }
    }

    if (optText == 16) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଷୋଡଶ</B></font>"
            Caption = "ସପ୍ତଦଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Sixteenth</B></font>"
            Caption = "You have added 17th  Options"
        }
    }


    if (optText == 17) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ସପ୍ତଦଶ </B></font>"
            Caption = "ଅଷ୍ଟଦଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Seventeenth</B></font>"
            Caption = "You have added 18th  Options"
        }
    }

    if (optText == 18) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଅଷ୍ଟଦଶ </B></font>"
            Caption = "ଉନବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Eighteenth</B></font>"
            Caption = "You have added 19th  Options"
        }
    }

    if (optText == 19) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଉନବିଂଶ </B></font>"
            Caption = "ବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Nineteenth</B></font>"
            Caption = "You have added 20th  Options"
        }
    }

    if (optText == 19) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଉନବିଂଶ </B></font>"
            Caption = "ବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Nineteenth</B></font>"
            Caption = "You have added 20th  Options"
        }
    }

    if (optText == 20) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ବିଂଶ </B></font>"
            Caption = "ଏକବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Tweenth</B></font>"
            Caption = "You have added 21th  Options"
        }
    }


    if (optText == 21) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଏକବିଂଶ </B></font>"
            Caption = "ଦ୍ୱୟବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Twenty First </B></font>"
            Caption = "You have added 22th  Options"
        }
    }

    if (optText == 22) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଦ୍ୱୟବିଂଶ</B></font>"
            Caption = "ତ୍ରୟବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Second</B></font>"
            Caption = "You have added 23th  Options"
        }
    }


    if (optText == 23) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B></B>ତ୍ରୟବିଂଶ</font>"
            Caption = "ଚତୁରବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Third </B></font>"
            Caption = "You have added 24th  Options"
        }
    }

    if (optText == 24) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଚତୁରବିଂଶ</B></font>"
            Caption = "ପାଞ୍ଚବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Fouth </B></font>"
            Caption = "You have added 25th  Options"
        }
    }

    if (optText == 25) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ପାଞ୍ଚବିଂଶ</B></font>"
            Caption = "ଷଷ୍ଠବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Fifth </B></font>"
            Caption = "You have added 26th  Options"
        }
    }
    if (optText == 26) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଷଷ୍ଠବିଂଶ</B></font>"
            Caption = "ସପ୍ତବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Sixth </B></font>"
            Caption = "You have added 27th  Options"
        }
    }

    if (optText == 27) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ସପ୍ତବିଂଶ</B></font>"
            Caption = "ଅଷ୍ଟବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Seventh </B></font>"
            Caption = "You have added 28th  Options"
        }
    }

    if (optText == 28) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଅଷ୍ଟବିଂଶ</B></font>"
            Caption = " ଉନତ୍ରିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Eighth </B></font>"
            Caption = "You have added 29th  Options"
        }
    }


    if (optText == 29) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଉନତ୍ରିଂଶ</B></font>"
            Caption = "ତ୍ରିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Nineth </B></font>"
            Caption = "You have added 30th  Options"
        }
    }

    if (optText > 29) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B> ନମ୍ବର  " + (parseInt(optText)) + "</B></font>"
            Caption = "ନମ୍ବର " + (parseInt(optText) + 1) + " ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        } else {

            OptionText = "<font color='#CC33FF' size='3'><B> Option " + (parseInt(optText)) + "</B></font>"
            Caption = "Choose your" + (parseInt(optText) + 1) + " th Option";
        }
    }
    td1.innerHTML = OptionText;

    //=================================================================
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden' value=" + optionArray[1][1] + "></input>"
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[3][0] + "<input type='hidden' value=" + optionArray[3][1] + "></input>"
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[2][0] + "<input type='hidden' value=" + optionArray[2][1] + "></input>"

    var td6 = document.createElement("TD")
    td6.innerHTML = "<a href='javascript:remove(" + optText + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option' /></a>"
    for (i = 1; i < 7; i++) {
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
}
//===============Delete Options=================	
function remove(id) {
    debugger;
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
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ପ୍ରଥମ </B></font>"
                    Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
                    Caption = "Choose your 2nd Option"
                }

            }
            if (i == 2) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଦିତୀୟ</B></font>"
                    Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
                    Caption = "Choose your 3rd Option"
                }

            }
            if (i == 3) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ତୃତୀୟ</B></font>"
                    Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
                    Caption = "Choose your 4th Option"
                }

            }
            if (i == 4) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଚତୁର୍ଥ</B></font>"
                    Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
                    Caption = "Choose your 5th Option"
                }


            }
            if (i == 5) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ପଞ୍ଚମ</B></font>"
                    Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
                    Caption = "Choose your 6th Option"

                }

            }
            if (i == 6) {

                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଷଷ୍ଠ</B></font>"
                    Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
                    Caption = "Choose your 7th Option"
                }
            }

            if (i == 7) {

                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ସପ୍ତମ</B></font>"
                    Caption = "ଅଷ୍ଟମ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
                    Caption = "Choose your 8th Option"
                }
            }

            if (i == 8) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଅଷ୍ଟମ</B></font>"
                    Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
                    Caption = "Choose your 9th Option"
                }
            }
            if (i == 9) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ନବମ</B></font>"
                    Caption = "ଦଶମ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>NINETH</B></font>"
                    Caption = "You have added 10th Options"
                }
            }
            if (i == 10) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଦଶମ</B></font>"
                    Caption = "ଏକାଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Tenth</B></font>"
                    Caption = "You have added 11th Options"
                }
            }

            if (i == 11) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଏକାଦଶ</B></font>"
                    Caption = "ଦ୍ୱାଦଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Eleventh</B></font>"
                    Caption = "You have added 12th  Options"
                }
            }

            if (i == 12) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଦ୍ୱାଦଶ</B></font>"
                    Caption = "ତ୍ରାୟୋଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Twelevth</B></font>"
                    Caption = "You have added 13th  Options"
                }
            }
            if (i == 13) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ତ୍ରାୟୋଦଶ</B></font>"
                    Caption = "ଚତୁର୍ଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Thirteenth</B></font>"
                    Caption = "You have added 14th  Options"
                }
            }

            if (i == 14) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B> ଚତୁର୍ଦଶ</B></font>"
                    Caption = "ପାଞ୍ଚଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Fourteenth</B></font>"
                    Caption = "You have added 15th  Options"
                }
            }

            if (i == 15) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ପଞ୍ଚଦଶ</B></font>"
                    Caption = "ଷୋଡଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Fifteenth</B></font>"
                    Caption = "You have added 16th  Options"
                }
            }

            if (i == 16) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଷୋଡଶ</B></font>"
                    Caption = "ସପ୍ତଦଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Sixteenth</B></font>"
                    Caption = "You have added 17th  Options"
                }
            }


            if (i == 17) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ସପ୍ତଦଶ </B></font>"
                    Caption = "ଅଷ୍ଟଦଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Seventeenth</B></font>"
                    Caption = "You have added 18th  Options"
                }
            }

            if (i == 18) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଅଷ୍ଟଦଶ </B></font>"
                    Caption = "ଉନବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Eighteenth</B></font>"
                    Caption = "You have added 19th  Options"
                }
            }

            if (i == 19) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଉନବିଂଶ </B></font>"
                    Caption = "ବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Nineteenth</B></font>"
                    Caption = "You have added 20th  Options"
                }
            }
            if (i == 20) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ବିଂଶ </B></font>"
                    Caption = "ଏକବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Tweenth</B></font>"
                    Caption = "You have added 21th  Options"
                }
            }


            if (i == 21) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଏକବିଂଶ </B></font>"
                    Caption = "ଦ୍ୱୟବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>Tweenth</B></font>"
                    Caption = "You have added 22th  Options"
                }
            }

            if (i == 22) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଦ୍ୱୟବିଂଶ</B></font>"
                    Caption = "ତ୍ରୟବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>twenty Second</B></font>"
                    Caption = "You have added 23th  Options"
                }
            }


            if (i == 23) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B></B>ତ୍ରୟବିଂଶ</font>"
                    Caption = "ଚତୁରବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>twenty Third </B></font>"
                    Caption = "You have added 24th  Options"
                }
            }

            if (i == 24) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଚତୁରବିଂଶ</B></font>"
                    Caption = "ପାଞ୍ଚବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>twenty Fouth </B></font>"
                    Caption = "You have added 25th  Options"
                }
            }

            if (i == 25) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ପାଞ୍ଚବିଂଶ</B></font>"
                    Caption = "ଷଷ୍ଠବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>twenty Fifth </B></font>"
                    Caption = "You have added 26th  Options"
                }
            }
            if (i == 26) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଷଷ୍ଠବିଂଶ</B></font>"
                    Caption = "ସପ୍ତବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>twenty Sixth </B></font>"
                    Caption = "You have added 27th  Options"
                }
            }

            if (i == 27) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ସପ୍ତବିଂଶ</B></font>"
                    Caption = "ଅଷ୍ଟବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>twenty Seventh </B></font>"
                    Caption = "You have added 28th  Options"
                }
            }

            if (i == 28) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଅଷ୍ଟବିଂଶ</B></font>"
                    Caption = " ଉନତ୍ରିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>twenty Eighth </B></font>"
                    Caption = "You have added 29th  Options"
                }
            }


            if (i == 29) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B>ଉନତ୍ରିଂଶ</B></font>"
                    Caption = "ତ୍ରିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                }
                else {
                    OptionText = "<font color='#CC33FF' size='3'><B>twenty Nineth </B></font>"
                    Caption = "You have added 30th  Options"
                }
            }

            if (i > 29) {
                if (document.getElementById('rbtnOriya').checked) {
                    OptionText = "<font color='#CC33FF' size='3'><B> ନମ୍ବର  " + (parseInt(optText)) + "</B></font>"
                    Caption = "ନମ୍ବର " + (parseInt(optText) + 1) + " ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
                } else {

                    OptionText = "<font color='#CC33FF' size='3'><B> Option " + (parseInt(optText)) + "</B></font>"
                    Caption = "Choose your" + (parseInt(optText) + 1) + " th Option";
                }
            }


            //================================================================

            Rows[i].getElementsByTagName("TD")[0].innerHTML = OptionText;
            Rows[i].getElementsByTagName("TD")[5].innerHTML = "<a href='javascript:remove(" + i + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option'/></a>"
        }
        if (rowsLen == 1) {
            document.getElementById('tblChoice').style.display = 'none';
            if (document.getElementById('rbtnOriya').checked) {
                document.getElementById('Caption').innerHTML = 'ପ୍ରଥମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ';
            } else {
                document.getElementById('Caption').innerHTML = 'Choose your 1st Option';
            }
        }
        else {
            document.getElementById('Caption').innerHTML = Caption;
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
                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
                }
                else {
                    Caption = "Choose your 2nd Option";
                }
            }
            if (i == 2) {
                OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
                }
                else {
                    Caption = "Choose your 3rd Option";
                }
            }
            if (i == 3) {
                OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"

                if (document.getElementById('rbtnOriya').checked) {
                    Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
                }
                else {
                    Caption = "Choose your 4th Option";
                }

            }
            if (i == 4) {
                OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"


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
                    Caption = "ଆପଣ ଷଷ୍ଠ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
                }
                else {
                    Caption = "You have added 6 Options"
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
                    document.getElementById('2').value = nth + ' ' + 'ପସନ୍ଦ';
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
    debugger;

    var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
    if ($('#rbtnInstituteWise').is(':checked')) {
        if ((Rows.length < 2) && (document.getElementById('ddlCollege').value == 0)) {
            alert('Please Choose your 1st Option');
            return false;
        }
        if (!DropDownValidation('ddlCollege', 'Institute'))
            return false;
        if (!DropDownValidation('ddlStream', 'Trade'))
            return false;
    }
    else {

        // FOR imc 
        if ((Rows.length < 2) && (document.getElementById('ddlCollege').value == 0)) {
            alert('Please Choose your 1st Option');
            return false;
        }

        if (!DropDownValidation('ddlCollege', 'Institute'))
            return false;
        if (!DropDownValidation('ddlStream', 'Trade'))
            return false;
    }

    //================RESTRICTING MALE APPLICANT APPLYING FOR FOR WOMENS COLLEGE========

    var SelCid = document.getElementById('ddlCollege').value;

    if (document.getElementById('rbtnOriya').checked) {
        document.getElementById("rbtnEnglish").disabled = true;
        document.getElementById("rbtnOriya").disabled = false;
    }
    else {
        document.getElementById("rbtnEnglish").disabled = false;
        document.getElementById("rbtnOriya").disabled = true;
    }

    //==========================================================

    var fElectiveval1 = '0';
    var fElectiveval2 = '1';
    var fElectiveval3 = '2';
    var oElectiveval1 = '3';
    var oElectiveval2 = '4';
    var oElectiveval3 = '5';

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

    //For Both IMC and Regular
    var cuurntImcId;
    if ($('#rbtnTradeWise').is(':checked')) {
        cuurntImcId = 1;
    }
    else {
        cuurntImcId = 0;
    }
    imcAry = new Array();
    var imcAry = 0;
    var addedImc = 0;


    collAry = new Array();
    strAry = new Array();
    var colCntr = 0;
    var stCntr = 0;


    //=========================================================

    //============Calling Add row Function============
    //================Here checking for duplicate option entry=======
    if (totRow > 1) {
        for (var i = 1; i < totRow; i++) {
            addedCollege = parseInt(tRow[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value);
            addedStream = parseInt(tRow[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value);
            addedImc = parseInt(tRow[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value);

            //Here for Both IMC and Regular
            if ((addedCollege == cuurntCid) && (addedStream == cuurntSid) && (addedImc == cuurntImcId)) {
                colCntr = parseInt(colCntr) + 1;
            }
        }
        if ((parseInt(colCntr) > 0)) {
            alert('You cannot add more than 1 option in same Institute & Trade');
            clearDDL();
        }
        else {
            var optLen = document.getElementById('tableOption').getElementsByTagName("TR").length;
            var id = ctlId - 1;
            var k;
            var j;
            addRow();
        }
    }
    else {
        var optLen = document.getElementById('tableOption').getElementsByTagName("TR").length;
        var id = ctlId - 1;
        var k;
        var j;
        addRow();

    }
    //===============================================================


}
//=======================Get Option Details================
function getOptions() {
    debugger;
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
        var IMC = '';
        var colCntr = 0;
        //alert(Rows);

        //===========================if there is only one option===========        
        if (Rows.length < 2) {
            debugger;
            collegeIds = document.getElementById('ddlCollege').value;
            //streams = streams + '~' + document.getElementById('ddlStream').value;
            streams = document.getElementById('ddlStream').value;
            compulsory = '0';

            electiveSub = '0';
            electiveSub = electiveSub + '~' + '0';
            electiveSub = electiveSub + '~' + '0';
            Felective = '0';
            Felective = Felective + '~' + '0';
            Felective = Felective + '~' + '0'

            if (document.getElementById('rbtAccomodation1').checked == true) {
                Hostel = 1;
            }
            if (document.getElementById('rbtAccomodation2').checked == true) {
                Hostel = 2;
            }
            if ($('#rbtnTradeWise').is(':checked')) {
                IMC = 1;
            }
            else {
                IMC = 0;
            }

            //================RESTRICTING MALE APPLICANT APPLYING FOR FOR WOMENS COLLEGE========
            // womenCollegeAry = new Array('3', '8', '9', '13', '16', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655',  '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943','2950');
            womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '3280');

            var SelCid = document.getElementById('ddlCollege').value;
            var Gender = document.getElementById('ddlGender').value;

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
                // womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '3280');
                SelCid = new Array();
                SelCid = Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value;
                var Gender = document.getElementById('ddlGender').value;
                //=================Stream Ids===========================
                // streams = 0;
                if (streams == '') {
                    streams = Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value
                } else {
                    streams = streams + '~' + Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value
                }
                compulsory = '0';
                electiveSub = '0';
                Felective = '0';

                //==================Hostel Option=============================
                if (Hostel == '') {
                    Hostel = Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value
                }
                else {
                    Hostel = Hostel + '~' + Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value
                }
                if (IMC == '') {
                    IMC = Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value
                }
                else {
                    IMC = IMC + '~' + Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value
                }
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
                alert('You cannot add more than 1 option in same college ');
                clearDDL();
                return false;
            }

        }


        var lastcollegeIds = document.getElementById('ddlCollege').value;
        var laststreams = document.getElementById('ddlStream').value;
        var lastcompulsory = '0';
        var lastelectiveSub = '0';
        lastelectiveSub = lastelectiveSub + '~' + '0';
        lastelectiveSub = lastelectiveSub + '~' + '0';
        var lastFelective = '0';
        lastFelective = lastFelective + '~' + '0';
        lastFelective = lastFelective + '~' + '0';
        var lastReside;

        if (document.getElementById('rbtAccomodation1').checked == true) {
            lastReside = 1
        }
        if (document.getElementById('rbtAccomodation2').checked == true) {
            lastReside = 2
        }

        womenCollegeAry = new Array('3', '8', '9', '13', '16', '2881', '21', '22', '28', '30', '33', '36', '39', '41', '49', '53', '57', '60', '72', '113', '133', '134', '168', '245', '274', '279', '280', '295', '305', '306', '311', '315', '322', '336', '351', '358', '363', '374', '375', '379', '391', '397', '418', '463', '470', '483', '494', '498', '513', '523', '526', '529', '586', '602', '614', '631', '636', '646', '658', '660', '664', '671', '683', '692', '699', '716', '727', '733', '768', '798', '824', '828', '844', '854', '879', '882', '896', '897', '924', '925', '941', '945', '950', '978', '989', '996', '1014', '1022', '1029', '1042', '1052', '1066', '1067', '1089', '1095', '1099', '1106', '1111', '1124', '1162', '1165', '1179', '1189', '1225', '1246', '1265', '1276', '1285', '1295', '1299', '1304', '1309', '1329', '1346', '1361', '1364', '1379', '1387', '1393', '1401', '1467', '1572', '1584', '1610', '1642', '1656', '1670', '1683', '1713', '1752', '1771', '1784', '1794', '1802', '1818', '1828', '1829', '1833', '1852', '1864', '1879', '1886', '1898', '1906', '1910', '1930', '1939', '1951', '1987', '1995', '2031', '2035', '2045', '2062', '2074', '2132', '2500', '2516', '2561', '2562', '2565', '2655', '2701', '2719', '2728', '2752', '2754', '2761', '2768', '2825', '2837', '2857', '2872', 2922, '717', '718', '723', '1465', '2942', '2943', '2950', '3014', '3038', '3060', '3083', '3101', '3177', '3208', '3181', '3144', '3221', '3078', '3107', '3113', '3226', '3173', '1289', '297', '1045', '3280');
        var SelCid = document.getElementById('ddlCollege').value;
        var Gender = document.getElementById('ddlGender').value;

        if ((lastcollegeIds != 0) && (lastcompulsory != 0) && (lastelectiveSub != '') && (lastFelective != '')) {
            collegeIds = collegeIds + '~' + lastcollegeIds;
            streams = streams + '~' + laststreams;
            compulsory = compulsory + '~' + lastcompulsory;
            electiveSub = electiveSub + '/' + lastelectiveSub;
            Felective = Felective + '/' + lastFelective;
            Hostel = Hostel + '~' + lastReside;
        }

        document.getElementById('hidCollege').value = collegeIds;
        document.getElementById('hidStream').value = streams;
        document.getElementById('hidComplusory').value = compulsory;
        document.getElementById('hidElectives').value = electiveSub;
        document.getElementById('hidFourthElelectives').value = Felective;
        document.getElementById('hidHostel').value = Hostel;
        document.getElementById('hidImc').value = IMC;

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

    if ($('#rbtn8ThPass').is(':checked')) {
        if (!blankFieldValidation('txtSchoolName', 'School Name')) {
            return false;
        }
        if (!isAlphabet('txtSchoolName')) {
            alert('Please Valid School Name');
            document.getElementById('txtSchoolName').value = '';
            document.getElementById('txtSchoolName').focus();
            return false;
        }
    }
    else {
        if (!DropDownValidation('ddlBoard', 'the name of your Examination Board')) {
            return false;
        }
    }

    if ($('#rbtn10thFail').is(':checked')) {
        if (!blankFieldValidation('txtYOP', 'Year Of Failing')) {
            return false;
        }
    } else {
        if (!blankFieldValidation('txtYOP', 'Year Of Passing')) {
            return false;
        }
    }
    if ((document.getElementById('rbtnAnnual').checked == false) & (document.getElementById('rbtnSuppl').checked == false)) {
        alert('Please Choose Exam Type');
        return false;
    }
    if (!NumericValidation('txtYOP', $("#lblYearofPassing").html(), '4'))
        return false;
    if (!checkPassingYear())
        return false;
    if (!blankFieldValidation('txtBoardRoll', 'Roll No.')) {
        return false;
    }
    if (!ZeroValidationOption('txtBoardRoll', 'Roll No.')) {
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
    if (document.getElementById('hdnImgAppl').value == "") {
        alert("Please Upload Your Photo !");
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
    var yop = parseInt(document.getElementById('txtYOP').value);
    var gap = yop - year;
    if (gap < 14) {
        //        alert('The difference of age between the birth year and 10th passing year should be equal or greater than 13');
        alert('The difference of age between the birth year and ' + $("#lblYearofPassing").html() + ' should be greater than 14');
        document.getElementById('ddlYear').focus();
        return false;
    }
    //    if (document.getElementById('txtAadharCardNo').value != '') {
    //        if (document.getElementById('txtAadharCardNo').value.length < 12) {
    //            alert("Adhar No. should have 12 digit !");
    //            document.getElementById('txtAadharCardNo').focus();
    //            return false;
    //        }
    //        return true;
    //    }


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
    if (!WhiteSpaceValidation1st('txtCPS'))
        return false;
    if (document.getElementById('txtCPS').value != '') {
        var add = document.getElementById('txtCPS').value;
        var len = add.length;
        if (parseInt(len) > 500) {
            alert('Please enter house no.,street/village,post office,\n police station name within 350 characters');
            return false;
        }
    }

    var strpin = document.getElementById('txtCPC').value;
    if ((strpin != '') && (strpin.length < 6)) {
        alert('Pin Code cannot be less than 6digit');
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
    //    if (!NumericValidation('txtCTeleNo', 'Please write only numeric values for Phone No.', '7'))
    //        return false;
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

    var strPhone = document.getElementById('txtCTeleNo').value;
    if ((strPhone != '') && (strPhone.length > 7)) {
        alert('Phone No. cannot be More than 7 digit');
        document.getElementById('txtCTeleNo').focus();
        return false;
    }




    if (!blankFieldValidation('txtCMobNo', 'Mobile No'))
        return false;
    if (!blankFieldValidation('txtAadharCardNo', 'Aadhar Card'))
        return false;
    var strPhone = document.getElementById('txtAadharCardNo').value;
    if ((strPhone != '') && (strPhone.length < 12)) {
        alert('Aadhar Card. cannot be less than 12 digit');
        document.getElementById('txtAadharCardNo').focus();
        return false;
    }


    //new

    if (!ZeroValidationOption('txtRationCardNo', 'Ration Card No.')) {
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
    var strMobA = document.getElementById('txtAlterNateMobileNo').value;
    if ((strMobA != '') && (strMobA.length < 10)) {
        alert('Alternate Mobile No. cannot be less than 10digit');
        document.getElementById('txtAlterNateMobileNo').focus();
        return false;
    }
    if (!chkSingleQuote('txtRationCardNo'))
        return false;
    if (!WhiteSpaceValidation1st('txtRationCardNo'))
        return false;
    if (!chkSingleQuote('txtBankName'))
        return false;
    if (!WhiteSpaceValidation1st('txtBankName'))
        return false;
    ///New
    if (!ZeroValidationOption('txtBankName', 'Bank Name.')) {
        return false;
    }
    if (!chkSingleQuote('txtBranchName'))
        return false;
    if (!WhiteSpaceValidation1st('txtBranchName'))
        return false;
    ///New
    if (!ZeroValidationOption('txtBranchName', 'Branch Name.')) {
        return false;
    }
    if (!chkSingleQuote('txtAccountNo'))
        return false;
    ///New
    if (!ZeroValidationOption('txtAccountNo', 'AccountNo.')) {
        return false;
    }
    if (!WhiteSpaceValidation1st('txtAccountNo'))
        return false;
    if (!chkSingleQuote('txtIFSCCode'))
        return false;
    if (!WhiteSpaceValidation1st('txtIFSCCode'))
        return false;
    ///New
    if (!ZeroValidationOption('txtIFSCCode', 'IFSCCode.')) {
        return false;
    }


    if ($("#ddlCommunity").val() != '0') {
        if (!$('#rbtST').is(':checked')) {
            alert('Please choose ST as reservation if you belong to special community');
            return false;
        }
    }
    if ($('#chkPHOH').is(':checked')) {
        if (!DropDownValidation('ddlPercentage', 'Percentage Of Disability')) {
            return false;
        }
    }
    if ($('#chkSports').is(':checked')) {
        if (!DropDownValidation('ddlSportsLevel', 'Sports Level')) {
            return false;
        }
    }
    //=====================For Reservation category==================
    if ((document.getElementById('rbtST').checked == false) && (document.getElementById('rbtSC').checked == false) && (document.getElementById('rbtGeneral').checked == false) && (document.getElementById('rbtnOBC').checked == false)) {
        alert('Please select ST/SC/OBC/General category');
        return false;
    }
    if ($('#rbtnBuildingYes').is(':checked')) {
        if (!blankFieldValidation('txtCardNo', 'Labour Card No'))
            return false;
        if (!chkSingleQuote('txtCardNo'))
            return false;
        if (!WhiteSpaceValidation1st('txtCardNo'))
            return false;
        if (!ZeroValidationOption('txtCardNo', 'Labour Card No.')) {
            return false;
        }
    }

    //===============Function to  To Income of parents ================
    //    function parentincome() {

    if ($('#rbnOrphan2').is(':checked')) {
        debugger;
        $('.trhideclass1').show();
        $('.trhideclass2').show();

        if (!DropDownValidation('ddlFOcu', 'Fathers Occupation')) {
            return false;
        }
        if (!DropDownValidation('ddlMOcu', 'Mothers Occupation')) {
            return false;
        }
        if (!DropDownValidation('ddlAIncome', 'Annual Income of the Parents')) {
            return false;
        }
    } else if ($('#rbnOrphan1').is(':checked')) {
        $('.trhideclass1').hide();
        $('.trhideclass2').hide();
    }
    //=========================Mark Validation===================

    if (((document.getElementById('txtYOP').value == 2018) && ($('#rbtn10thPass').is(':checked'))) || (document.getElementById('txtYOP').value == 2018) && ($('#rbtn10thFail').is(':checked'))) {


    } else {
        if (((document.getElementById('ddlBoard').value == 46) && (document.getElementById('txtYOP').value >= 2010)) || ((document.getElementById('ddlBoard').value == 103) && (document.getElementById('txtYOP').value >= 2012))) {

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
        else if ((document.getElementById('ddlBoard').value == 116) && (document.getElementById('txtYOP').value >= 2010)) {
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
            var intYear = parseInt(document.getElementById('txtYOP').value);
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


            if (($('#rbtn10thPass').is(':checked')) && ($('#rbtn8ThPass').is(':checked'))) {
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
            } else {
                if (Eng > Tot) {
                    alert('English Mark cannot be greater than Total Mark');
                    document.getElementById('txtEnglish').focus();
                    document.getElementById('txtEnglish').value = "";
                    return false;
                }
                if (Eng > Max) {
                    alert('English Mark cannot be greater than  Maximum Mark');
                    document.getElementById('txtEnglish').focus();
                    document.getElementById('txtEnglish').value = "";
                    return false;
                }
                if (Math > Tot) {
                    alert('Mathematics Mark cannot be greater than Total Mark');
                    document.getElementById('txtMath').focus();
                    document.getElementById('txtMath').value = "";

                    return false;
                }
                if (Math > Max) {
                    alert('Mathematics Mark cannot be greater than Maximum Mark');
                    document.getElementById('txtMath').focus();
                    document.getElementById('txtMath').value = "";
                    return false;
                }
                if (Sci > Tot) {
                    alert('Science Mark cannot be greater than Total Mark');
                    document.getElementById('txtScience').focus();
                    document.getElementById('txtScience').value = "";
                    return false;
                }
                if (Sci > Max) {
                    alert('Science Mark cannot be greater than Maximum Mark');
                    document.getElementById('txtScience').focus();
                    document.getElementById('txtScience').value = "";

                    return false;
                }

                if (SoSci > Tot) {
                    alert('Social Science Mark cannot be greater than   Total Mark');
                    document.getElementById('txtSocSci').focus();
                    document.getElementById('txtSocSci').value = "";
                    return false;
                }
                if (SoSci > Max) {
                    alert('Social Science Mark cannot be greater than   Maximum Mark');
                    document.getElementById('txtSocSci').focus();
                    document.getElementById('txtSocSci').value = "";
                    return false;
                }
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
    }
    //================================Mark Validation End====================                  
    if (document.getElementById('rbtCompartmentalY').checked == true) {
        if (!DropDownValidation('ddlCompSubject1', 'Subject1'))
            return false;
        if (!blankFieldValidation('txtCompFMark1', 'Fail Mark in previous exam for First Subject'))
            return false;

        if (!NumericValidation('txtCompFMark1', 'Please write only numeric values for MARKS', '3'))
            return false;
        if (!blankFieldValidation('txtCompPMark1', 'Pass Mark in previous exam for First Subject'))
            return false;

        if (!NumericValidation('txtCompPMark1', 'Please write only numeric values for MARKS', '3'))
            return false;
        var f1 = parseFloat(document.getElementById('txtCompFMark1').value);
        var p1 = parseFloat(document.getElementById('txtCompPMark1').value);
        if (f1 >= p1) {
            alert('Fail Mark cannot be greater than or equal to Pass Mark');
            document.getElementById('txtCompFMark1').focus();
            return false;
        }
        if ((document.getElementById('ddlBoard').value != 46) && (document.getElementById('txtYOP').value <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
            if (!checkCompartment('ddlCompSubject1', 'txtCompPMark1'))
                return false;
        }
        if (document.getElementById('ddlCompSubject2').options[document.getElementById('ddlCompSubject2').selectedIndex].value != '') {
            if (!DropDownValidation('ddlCompSubject1', 'Subject1'))
                return false;
            if (!blankFieldValidation('txtCompFMark1', 'Fail Mark in previous exam for first Subject'))
                return false;
            if (!blankFieldValidation('txtCompPMark1', 'Pass Mark in previous exam for first Subject'))
                return false;
            if (!blankFieldValidation('txtCompFMark2', 'Fail Mark in previous exam for 2nd subject'))
                return false;

            if (!NumericValidation('txtCompFMark2', 'Please write only numeric values for MARKS', '3'))
                return false;
            if (!blankFieldValidation('txtCompPMark2', 'Pass Mark in previous exam for 2nd subject'))
                return false;
            if (!NumericValidation('txtCompPMark2', 'Please write only numeric values for MARKS', '3'))
                return false;

            var f2 = parseFloat(document.getElementById('txtCompFMark2').value);
            var p2 = parseFloat(document.getElementById('txtCompPMark2').value);
            if (f2 >= p2) {
                alert('Fail Mark cannot be greater than or equal to Pass Mark');
                document.getElementById('txtCompFMark2').focus();
                return false;
            }
            if ((document.getElementById('ddlBoard').value != 46) && (document.getElementById('txtYOP').value <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
                if (!checkCompartment('ddlCompSubject2', 'txtCompPMark2'))
                    return false;
            }
        }

        if (document.getElementById('ddlCompSubject3').options[document.getElementById('ddlCompSubject3').selectedIndex].value != '') {

            if (!DropDownValidation('ddlCompSubject2', 'Subject2'))
                return false;
            if (!blankFieldValidation('txtCompFMark2', 'Fail Mark in previous exam for 2nd subject'))
                return false;
            if (!blankFieldValidation('txtCompPMark2', 'Pass Mark in previous exam for 2nd subject'))
                return false;
            if (!blankFieldValidation('txtCompFMark3', 'Fail Mark in previous exam for 3rd subject'))
                return false;

            if (!NumericValidation('txtCompFMark3', 'Please write only numeric values for MARKS', '3'))
                return false;
            if (!blankFieldValidation('txtCompPMark3', 'Pass Mark in previous exam for 3rd subject'))
                return false;
            if (!NumericValidation('txtCompPMark3', 'Please write only numeric values for MARKS', '3'))
                return false;

            var f3 = parseFloat(document.getElementById('txtCompFMark3').value);
            var p3 = parseFloat(document.getElementById('txtCompPMark3').value);
            if (f3 >= p3) {
                alert('Fail Mark cannot be greater than or equal to Pass Mark');
                document.getElementById('txtCompFMark3').focus();
                return false;
            }
            if ((document.getElementById('ddlBoard').value != 46) && (document.getElementById('txtYOP').value <= 2014) && (document.getElementById('ddlBoard').value != 103)) {
                if (!checkCompartment('ddlCompSubject3', 'txtCompPMark3'))
                    return false;
            }
        }
        //For 4th subject compartmental
        if (document.getElementById('ddlCompSubject4').options[document.getElementById('ddlCompSubject4').selectedIndex].value != '') {

            if (!DropDownValidation('ddlCompSubject3', 'Subject3'))
                return false;
            if (!blankFieldValidation('txtCompFMark3', 'Fail Mark in previous exam for 3rd subject'))
                return false;
            if (!blankFieldValidation('txtCompPMark3', 'Pass Mark in previous exam for 3rd subject'))
                return false;
            if (!blankFieldValidation('txtCompFMark4', 'Fail Mark in previous exam for 4th subject'))
                return false;

            if (!NumericValidation('txtCompFMark4', 'Please write only numeric values for MARKS', '4'))
                return false;
            if (!blankFieldValidation('txtCompPMark4', 'Pass Mark in previous exam for 4th subject'))
                return false;
            if (!NumericValidation('txtCompPMark4', 'Please write only numeric values for MARKS', '4'))
                return false;

            var f4 = parseFloat(document.getElementById('txtCompFMark4').value);
            var p4 = parseFloat(document.getElementById('txtCompPMark4').value);
            if (f4 >= p4) {
                alert('Fail Mark cannot be greater than or equal to Pass Mark');
                document.getElementById('txtCompFMark4').focus();
                return false;
            }
            if ((document.getElementById('ddlBoard').value != 46) && (document.getElementById('txtYOP').value <= 2014) && (document.getElementById('ddlBoard').value != 103)) {

                if (!checkCompartment('ddlCompSubject4', 'txtCompPMark4'))
                    return false;
            }
        }
        //End for 4th Subject compartmental
        if (!checkCompSubject('1')) {
            alert('You cannot enter same subject\ntwice for Comaprtment subject');
            return false;
        }
    }

    //Compartmental Validation Ends
    //Option Validation
    //============Checking if the applicant choose 1 option only=================
    var cIndex = document.getElementById('ddlCollege').value;
    var sIndex = document.getElementById('ddlStream').value;

    if ((document.getElementById('tableOption').getElementsByTagName("TR").length < 2) && (cIndex == 0) && (sIndex == 0)) {
        alert('Please select minimum 1 Option details ');
        document.getElementById('ddlCollege').focus();
        return false;
    }
    if ((document.getElementById('tableOption').getElementsByTagName("TR").length >= 1) && (cIndex != 0)) {
        if (!DropDownValidation('ddlCollege', 'Institute '))
            return false;
        if (!DropDownValidation('ddlStream', 'Trade'))
            return false;
        //============================================================
        if ((document.getElementById('rbtAccomodation1').checked == false) && (document.getElementById('rbtAccomodation2').checked == false)) {
            alert('Please select hostel option ');
            return false;
        }
    }
}

function BSEMarkValidation() {
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
    var intYear = parseInt(document.getElementById('txtYOP').value);
    if ((document.getElementById('ddlBoard').value == 45) && intYear == 2016) {

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
    debugger;
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
    imcType = document.getElementById('hidImc').value;
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
    imcAry = new Array();
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
        imcAry = imcType.split('~');
        //================================================
        for (var i = 0; i < colAry.length; i++) {
            optionId = optAry[i];
            CollegeId = colAry[i];
            CText = colAry1[i];
            StreamId = 0;
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
            imcType = imcAry[i];
            DisplayRow();
        }
    }

    else {
        optionId = document.getElementById('hidOptionIds').value;
        CollegeId = document.getElementById('hidCollege').value;
        StreamId = document.getElementById('hidStream').value; ;
        CompulsoryId = document.getElementById('hidComplusory').value;
        Elective1 = document.getElementById('hidElective1').value;
        Elective2 = document.getElementById('hidElective2').value;
        Elective3 = document.getElementById('hidElective3').value;
        FElective1 = document.getElementById('hidFElelective1').value;
        FElective2 = document.getElementById('hidFElelective2').value;
        FElective3 = document.getElementById('hidFElelective3').value;
        Accomodation = document.getElementById('hidHostel').value;
        imcType = document.getElementById('hidImc').value;
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

    optionArray = new Array(10);
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

    var AccText;
    if (Accomodation == 1) {
        Accomodation = 1;
        AccText = document.getElementById('rbtAccomodation1').Text;
    }
    if (Accomodation == 2) {
        Accomodation = 2;
        AccText = document.getElementById('rbtAccomodation2').Text;
    }
    var imcText;
    if (imcType == 1) {
        imcType = 1;
        imcText = "IMC";
    }
    if (imcType == 0) {
        imcType = 0;
        imcText = "REGULAR";
    }
    optionArray[2][0] = AccText;
    optionArray[2][1] = Accomodation;
    optionArray[3][0] = imcText;
    optionArray[3][1] = imcType;
}
///=====================display options======================

//=======================get Edited options==================
//=======================Get Option Details================

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
    optionArray = new Array(10);
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

    if ($('#rbtnInstituteWise').is(':checked')) {
        var TextLen = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text.length;
        optionArray[0][0] = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text;
        optionArray[0][1] = document.getElementById("ddlCollege").value;
        optionArray[1][0] = document.getElementById("ddlStream").options[document.getElementById("ddlStream").selectedIndex].text;
        optionArray[1][1] = document.getElementById("ddlStream").value;
    }


    else {
        var TextLen = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text.length;
        optionArray[0][0] = document.getElementById("ddlCollege").options[document.getElementById("ddlCollege").selectedIndex].text;
        optionArray[0][1] = document.getElementById("ddlCollege").value;
        optionArray[1][0] = document.getElementById("ddlStream").options[document.getElementById("ddlStream").selectedIndex].text;
        optionArray[1][1] = document.getElementById("ddlStream").value;
    }

    //==========================================================================================================
    var Accomodation = 0;
    var AccText
    if (document.getElementById('rbtAccomodation1').checked == true) {
        Accomodation = 1;
        AccText = "Yes";
    }
    if (document.getElementById('rbtAccomodation2').checked == true) {
        Accomodation = 2;
        AccText = "No";
    }

    optionArray[2][0] = AccText;
    optionArray[2][1] = Accomodation;

    var imcType = 0;
    var imcText
    if (document.getElementById('rbtnTradeWise').checked == true) {
        imcType = 1;
        imcText = "IMC"
    } else {
        imcType = 0;
        imcText = "Regular"
    }
    optionArray[3][0] = imcText;
    optionArray[3][1] = imcType;
}
//========================function to check Mark details=============
function BoardMarkCheck() {
    debugger;
    var Eng = parseInt(document.getElementById('txtEnglish').value);
    var Math = parseInt(document.getElementById('txtMath').value);
    var Sci = parseInt(document.getElementById('txtScience').value);
    var SoSci = parseInt(document.getElementById('txtSocSci').value);
    var Tot = parseInt(document.getElementById('txtTotMark').value);
    var Max = parseInt(document.getElementById('txtMaxMark').value);
    var inTotal = parseInt(Eng + Math + Sci + SoSci);


    if (($('#rbtn10thPass').is(':checked')) && ($('#rbtn8ThPass').is(':checked'))) {
        if (Eng >= Tot) {
            alert('English Mark cannot be greater than or equal to Total Mark');
            document.getElementById('txtEnglish').focus();
            document.getElementById('txtEnglish').value = "";
            return false;
        }
        if (Eng >= Max) {
            alert('English Mark cannot be greater than or equal to Maximum Mark');
            document.getElementById('txtEnglish').focus();
            document.getElementById('txtEnglish').value = "";
            return false;
        }
        if (Math >= Tot) {
            alert('Mathematics Mark cannot be greater than or equal to Total Mark');
            document.getElementById('txtMath').focus();
            document.getElementById('txtMath').value = "";
            return false;
        }
        if (Math >= Max) {
            alert('Mathematics Mark cannot be greater than or equal to Maximum Mark');
            document.getElementById('txtMath').focus();
            document.getElementById('txtMath').value = "";
            return false;
        }
        if (Sci >= Tot) {
            alert('Science Mark cannot be greater than or equal to Total Mark');
            document.getElementById('txtScience').focus();
            document.getElementById('txtScience').value = "";
            return false;
        }
        if (Sci >= Max) {
            alert('Science Mark cannot be greater than or equal to Maximum Mark');
            document.getElementById('txtScience').focus();
            document.getElementById('txtScience').value = "";
            return false;
        }

        if (SoSci >= Tot) {
            alert('Social Science Mark cannot be greater than or equal to Total Mark');
            document.getElementById('txtSocSci').focus();
            document.getElementById('txtSocSci').value = "";
            return false;
        }
        if (SoSci >= Max) {
            alert('Social Science Mark cannot be greater than Maximum Mark');
            document.getElementById('txtSocSci').focus();
            document.getElementById('txtSocSci').value = "";
            return false;
        }
    } else {
        if (Eng > Tot) {
            alert('English Mark cannot be greater than Total Mark');
            document.getElementById('txtEnglish').focus();
            document.getElementById('txtEnglish').value = "";
            return false;
        }
        if (Eng > Max) {
            alert('English Mark cannot be greater than  Maximum Mark');
            document.getElementById('txtEnglish').focus();
            document.getElementById('txtEnglish').value = "";
            return false;
        }
        if (Math > Tot) {
            alert('Mathematics Mark cannot be greater than Total Mark');
            document.getElementById('txtMath').focus();
            document.getElementById('txtMath').value = "";

            return false;
        }
        if (Math > Max) {
            alert('Mathematics Mark cannot be greater than Maximum Mark');
            document.getElementById('txtMath').focus();
            document.getElementById('txtMath').value = "";
            return false;
        }
        if (Sci > Tot) {
            alert('Science Mark cannot be greater than Total Mark');
            document.getElementById('txtScience').focus();
            document.getElementById('txtScience').value = "";
            return false;
        }
        if (Sci > Max) {
            alert('Science Mark cannot be greater than Maximum Mark');
            document.getElementById('txtScience').focus();
            document.getElementById('txtScience').value = "";

            return false;
        }

        if (SoSci > Tot) {
            alert('Social Science Mark cannot be greater than   Total Mark');
            document.getElementById('txtSocSci').focus();
            document.getElementById('txtSocSci').value = "";
            return false;
        }
        if (SoSci > Max) {
            alert('Social Science Mark cannot be greater than   Maximum Mark');
            document.getElementById('txtSocSci').focus();
            document.getElementById('txtSocSci').value = "";
            return false;
        }
    }

    if (Tot == 0) {
        alert('Total Mark cannot be 0(zero)');
        document.getElementById('txtTotMark').focus();
        document.getElementById('txtTotMark').value = "";
        return false;
    }
    if (inTotal > Tot) {
        alert('The sum of your individual marks cannot be greater than the Total Mark Secured');
        document.getElementById('txtTotMark').focus();
        document.getElementById('txtTotMark').value = "";
        return false;
    }
    if (Max == 0) {
        alert('Maximum Mark cannot be 0(zero)');
        document.getElementById('txtMaxMark').focus();
        document.getElementById('txtMaxMark').value = "";
        return false;
    }

    if (Tot > Max) {
        alert('Total Mark cannot be greater than Maximum Mark');
        document.getElementById('txtTotMark').focus();
        document.getElementById('txtTotMark').value = "";
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
            alert('Please enter valid Date Of Birth !');
            document.getElementById('ddlDay').focus();
            return false;
        }
    }

}

//======================Year of passing validation=============
function checkPassingYear() {
    var curr_year = parseInt(2018);
    var year = parseInt(document.getElementById('txtYOP').value);
    var strYear = document.getElementById('txtYOP').value;
    if (strYear != '') {
        if (year > curr_year) {
            alert('Please enter your ' + $("#lblYearofPassing").html() + '  between 1977 - 2018');
            document.getElementById('txtYOP').value = '';
            document.getElementById('txtYOP').focus();
            return false;
        }
        else if (year < parseInt(curr_year) - 41) {
            alert('Please enter your ' + $("#lblYearofPassing").html() + '  between 1977 - 2018');
            document.getElementById('txtYOP').value = '';
            document.getElementById('txtYOP').focus();
            return false;
        }
        else if (strYear.length < 4) {
            alert('Please enter your ' + $("#lblYearofPassing").html() + '  between 1977 - 2018');
            document.getElementById('txtYOP').value = '';
            document.getElementById('txtYOP').focus();
            return false;
        }
    }
    else {
        alert('' + $("#lblYearofPassing").html() + ' cannot be left blank');
        document.getElementById('txtYOP').value = '';
        document.getElementById('txtYOP').focus();
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
        document.getElementById('GENERAL').style.color = "#000000";
        document.getElementById('GENERAL').innerHTML = 'GENERAL';
        document.getElementById("txtCasteCertNum").style.display = '';
        document.getElementById('OBC').style.color = "#000000";
        document.getElementById('OBC').innerHTML = 'OBC/SEBC';
        //document.getElementById(ObjTxtId).disabled = false;
        EnglishOriyaFont();
    }
    else if (document.getElementById('rbtSC').checked == true) {
        document.getElementById('SC').style.color = "#CC33FF";
        var text = 'Schedule Caste (SC)';
        document.getElementById('SC').innerHTML = text;
        document.getElementById('ST').style.color = "#000000";
        document.getElementById('ST').innerHTML = 'Schedule Tribe (ST)';
        document.getElementById('GENERAL').style.color = "#000000";
        document.getElementById('GENERAL').innerHTML = 'GENERAL';
        document.getElementById('OBC').style.color = "#000000";
        document.getElementById('OBC').innerHTML = 'OBC/SEBC';
        document.getElementById("txtCasteCertNum").style.display = '';
        //document.getElementById(ObjTxtId).disabled = false;
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
        document.getElementById('OBC').style.color = "#000000";
        document.getElementById('OBC').innerHTML = 'OBC/SEBC';
        document.getElementById("txtCasteCertNum").style.display = 'none';
        // document.getElementById(ObjTxtId).disabled = true;
        EnglishOriyaFont();
    }

    else if (document.getElementById('rbtnOBC').checked == true) {

        document.getElementById('OBC').style.color = "#CC33FF";
        var text = 'OBC/SEBC';
        document.getElementById('OBC').innerHTML = text;
        document.getElementById('ST').style.color = "#000000";
        document.getElementById('ST').innerHTML = 'Schedule Tribe (ST)';
        document.getElementById('SC').style.color = "#000000";
        document.getElementById('SC').innerHTML = 'Schedule Caste (SC)';
        document.getElementById('GENERAL').style.color = "#000000";
        document.getElementById('GENERAL').innerHTML = 'GENERAL';
        document.getElementById("txtCasteCertNum").style.display = 'none';
        //document.getElementById(ObjTxtId).disabled = true;
        EnglishOriyaFont();
    }

}

//===============Function to highlight Reservation category2================

function removeStar() {
    if (document.getElementById('rbnOrphan1').checked == true) {
        document.getElementById("FatherOc").style.display = 'none';
        document.getElementById("MotherOc").style.display = 'none';
        document.getElementById("AnnualIn").style.display = 'none';
        document.getElementById("AnnualincomeCart").style.display = 'none';

    } else {
        document.getElementById("FatherOc").style.display = '';
        document.getElementById("MotherOc").style.display = '';
        document.getElementById("AnnualIn").style.display = '';
        document.getElementById("AnnualincomeCart").style.display = '';
    }

}

//function hideShowBuilding() {
//    if ($('#rbtnBuildingYes').is(':checked')) {
//        $("#lblCardLabel").show();
//        $("#txtCardNo").show();
//        $("#txtCardNo").focus();
//    }
//    else if ($('#rbtnBuildingNo').is(':checked')) {
//        $("#lblCardLabel").hide();
//        $("#txtCardNo").hide();
//    }
//}


function highlightCat2() {
    //    if (document.getElementById('rbtESM').checked == true) {
    //        document.getElementById('ESM').style.color = "#CC33FF";
    //        var text = 'Ex-Service Man (ESM)';
    //        document.getElementById('ESM').innerHTML = text;
    //        document.getElementById('SDP').style.color = "#000000";
    //        document.getElementById('SDP').innerHTML = 'Serving Defence Personnel (SDP)';
    //        document.getElementById('CoM').style.color = "#000000";
    //        document.getElementById('CoM').innerHTML = 'Children of Martyrs (CoM)'
    //        document.getElementById('NoN').style.color = "#000000";
    //        document.getElementById('NoN').innerHTML = 'None';
    //        EnglishOriyaFont();
    //    }
    if (document.getElementById('rbtSDP').checked == true) {
        document.getElementById('SDP').style.color = "#CC33FF";
        var text = 'Serving Defence Personnel (SDP)';
        document.getElementById('SDP').innerHTML = text;
        //        document.getElementById('ESM').style.color = "#000000";
        //        document.getElementById('ESM').innerHTML = 'Ex-Service Man (ESM)';
        //        document.getElementById('CoM').style.color = "#000000";
        //        document.getElementById('CoM').innerHTML = 'Children of Martyrs (CoM)'
        document.getElementById('NoN').style.color = "#000000";
        document.getElementById('NoN').innerHTML = 'None';
        EnglishOriyaFont();
    }
    //    else if (document.getElementById('rbtCoM').checked == true) {
    //        document.getElementById('CoM').style.color = "#CC33FF";
    //        var text = 'Children of Martyrs (CoM)';
    //        document.getElementById('CoM').innerHTML = text;
    //        document.getElementById('ESM').style.color = "#000000";
    //        document.getElementById('ESM').innerHTML = 'Ex-Service Man (ESM)';
    //        document.getElementById('SDP').style.color = "#000000";
    //        document.getElementById('SDP').innerHTML = 'Serving Defence Personnel (SDP)'
    //        document.getElementById('NoN').style.color = "#000000";
    //        document.getElementById('NoN').innerHTML = 'None';
    //        EnglishOriyaFont();
    //    }
    else if (document.getElementById('rbtNon').checked == true) {
        document.getElementById('NoN').style.color = "#CC33FF";
        var text = 'None';
        document.getElementById('NoN').innerHTML = text;
        //        document.getElementById('ESM').style.color = "#000000";
        //        document.getElementById('ESM').innerHTML = 'Ex-Service Man (ESM)';
        //        document.getElementById('CoM').style.color = "#000000";
        //        document.getElementById('CoM').innerHTML = 'Children of Martyrs (CoM)';
        document.getElementById('SDP').style.color = "#000000";
        document.getElementById('SDP').innerHTML = 'Serving Defence Personnel (SDP)'

        EnglishOriyaFont();
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
        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('Opt1').innerHTML = 'ହଁ';
            document.getElementById('Opt2').innerHTML = 'ନା';
        }
        else {
            document.getElementById('Opt1').innerHTML = 'Yes';
            document.getElementById('Opt2').innerHTML = 'No';
        }
        document.getElementById('Opt2').style.color = "#000000";
    }
    if (document.getElementById('rbtAccomodation2').checked == true) {
        document.getElementById('Opt2').style.color = "#CC33FF";
        var text = 'No';
        if (document.getElementById('rbtnOriya').checked) {
            document.getElementById('Opt1').innerHTML = 'ହଁ';
            document.getElementById('Opt2').innerHTML = 'ନା';
        }
        else {
            document.getElementById('Opt1').innerHTML = 'Yes';
            document.getElementById('Opt2').innerHTML = 'No';
        }
        document.getElementById('Opt1').style.color = "#000000";
    }

}
//======================function to highlight College Type============
function highlightCollegeType() {
    if (document.getElementById('rbtSelfFinance').checked == true) {
        document.getElementById('SF').style.color = "#CC33FF";
        document.getElementById('SF').innerHTML = 'Self Financing';
        document.getElementById('OF').style.color = "#000000";
        document.getElementById('OF').innerHTML = 'Others';
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
        document.getElementById('OF').innerHTML = 'Others';
        document.getElementById('SF').style.color = "#000000";
        document.getElementById('SF').innerHTML = 'Self Financing';
        document.getElementById('S').style.color = "#000000";
        document.getElementById('VF').innerHTML = 'Sanskrit';
        clearDDL();
        EnglishOriyaFont();
    }
    if (document.getElementById('rbtOthersFinance').checked == true) {
        document.getElementById('OF').style.color = "#CC33FF";
        document.getElementById('OF').innerHTML = 'Others';
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
        document.getElementById('OF').innerHTML = 'Others';
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
            document.getElementById(ctlName).value = document.getElementById(ctlName).value.replace("'", ""); ;
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
                document.getElementById(Arr[k]).focus();
                return false;
            }
        }
    }
    return true;
}
///=======================  view optionDetails==================
function ConfirmOptions() {
    debugger;
    var cids = document.getElementById('hidCollege').value;

    //======================================================
    optionId = document.getElementById('hidOptionIds').value;
    StreamId = document.getElementById('hidStream').value;

    CompulsoryId = '0';
    Elective1 = '0';
    Elective2 = '0';
    Elective3 = '0';
    FElective1 = '0';
    FElective2 = '0'
    FElective3 = '0'
    Accomodation = document.getElementById('hidHostel').value;
    imcType = document.getElementById('hidImc').value;
    //=========================Getting names=================
    CText = document.getElementById('hidCname').value;
    SText = document.getElementById('hidSname').value;

    CompSId = '';
    E1Text = '';
    E2Text = '';
    E3Text = '';
    F1Text = '';
    F2Text = '';
    F3Text = '';
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
        if (document.getElementById('optionId') != null) {
            if (document.getElementById('optionId').innerHTML != null) {
                optAry = optionId.split('~');
            }
        }



        // optAry = optionId.split('~');
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
        imcAry = imcType.split('~');
        //================================================

        for (var i = 0; i < colAry.length; i++) {
            optionId = optAry[i];
            CollegeId = colAry[i];
            CText = colAry1[i];
            var TextLen = CText.length;
            //CText = CText.substring(5, TextLen);
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
            imcType = imcAry[i];
            ConfirmRow();
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
        imcType = document.getElementById('hidImc').value;
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
    debugger;
    optionArray = new Array(10);
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




    var imcText;

    if (imcType == 1) {
        imcText = 'IMC';
    } else {
        imcText = 'REGULAR';
    }
    optionArray[10][0] = imcText;
    optionArray[10][1] = imcType;
}

///=====================display options======================
function ConfirmRow() {
    debugger;
    ConfirmOptionData();

    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
    var OptionText;
    OptionText = "<font color='#CC33FF' size='3'><B>OPTION-" + optText + "</B></font>"

    td1.innerHTML = OptionText;
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[9][0] + "<input type='hidden'  value=" + optionArray[9][1] + "></input>"

    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[10][0] + "<input type='hidden' value=" + optionArray[10][1] + "></input>"
    //var td5 = document.createElement("TD")
    // td5.innerHTML = optionArray[10][0] + "<input type='hidden' value=" + optionArray[10][1] + "></input>"
    //
    //Tables  for IMC


    ///

    for (i = 1; i < 6; i++) {
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
    imcType = document.getElementById('hidImc').value;


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
    imcAry = new Array();

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
        //optAry = optionId.split('~');
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
        imcAry = imcType.split('~');
        //================================================

        for (var i = 0; i < colAry.length; i++) {

            // optionId = optAry[i];
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
            imcType = imcAry[i];
            NotConfirmRow();
        }
    }
    else {

        if (document.getElementById('hidOptionIds') != null) {
            if (document.getElementById('hidOptionIds').innerHTML != null) {
                optionId = document.getElementById('hidOptionIds').value;
            }
        }
        //optionId = document.getElementById('hidOptionIds').value;
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
        imcType = document.getElementById('hidImc').value;
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
        //=======================================================
        NotConfirmRow();
    }

}
///===============================add options==================
//=========================Add Option Details=====================================
function NotConfirmOptionData() {

    optionArray = new Array(10);
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



    var imcText
    if (imcType == 1) {
        imcText = "IMC";
    } else {
        imcType = 0;
        imcText = "REGULAR";
    }

    // alert(imcType);

    optionArray[10][0] = imcText;
    optionArray[10][1] = imcType;


}
///=====================display options======================
function NotConfirmRow() {

    if (document.getElementById('rbtnOriya').checked) {
        document.getElementById("rbtnEnglish").disabled = true;
        document.getElementById("rbtnOriya").disabled = false;
    }
    else {
        document.getElementById("rbtnEnglish").disabled = false;
        document.getElementById("rbtnOriya").disabled = true;
    }





    NotConfirmOptionData();
    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;

    var OptionText;
    var Caption;
    OptionText = "<font color='#CC33FF' size='3'><B>OPTION-" + optText + "</B></font>"
    if (optText == 1) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ପ୍ରଥମ </B></font>"
            Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"
            Caption = "Choose your 2nd Option"
        }

    }
    if (optText == 2) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଦିତୀୟ</B></font>"
            Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
            Caption = "Choose your 3rd Option"
        }

    }
    if (optText == 3) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ତୃତୀୟ</B></font>"
            Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
            Caption = "Choose your 4th Option"
        }

    }
    if (optText == 4) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଚତୁର୍ଥ</B></font>"
            Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
            Caption = "Choose your 5th Option"
        }


    }
    if (optText == 5) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ପଞ୍ଚମ</B></font>"
            Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
            Caption = "Choose your 6th Option"

        }

    }
    if (optText == 6) {

        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଷଷ୍ଠ</B></font>"
            Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
            Caption = "Choose your 7th Option"
        }
    }

    if (optText == 7) {

        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ସପ୍ତମ</B></font>"
            Caption = "ଅଷ୍ଟମ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
            Caption = "Choose your 8th Option"
        }
    }

    if (optText == 8) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଅଷ୍ଟମ</B></font>"
            Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
            Caption = "Choose your 9th Option"
        }
    }
    if (optText == 9) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ନବମ</B></font>"
            Caption = "ଦଶମ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>NINETH</B></font>"
            Caption = "You have added 10th Options"
        }
    }
    if (optText == 10) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଦଶମ</B></font>"
            Caption = "ଏକାଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Tenth</B></font>"
            Caption = "You have added 11th Options"
        }
    }

    if (optText == 11) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଏକାଦଶ</B></font>"
            Caption = "ଦ୍ୱାଦଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Eleventh</B></font>"
            Caption = "You have added 12th  Options"
        }
    }

    if (optText == 12) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଦ୍ୱାଦଶ</B></font>"
            Caption = "ତ୍ରାୟୋଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Twelevth</B></font>"
            Caption = "You have added 13th  Options"
        }
    }


    if (optText == 13) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ତ୍ରାୟୋଦଶ</B></font>"
            Caption = "ଚତୁର୍ଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Thirteenth</B></font>"
            Caption = "You have added 14th  Options"
        }
    }

    if (optText == 14) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B> ଚତୁର୍ଦଶ</B></font>"
            Caption = "ପାଞ୍ଚଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Fourteenth</B></font>"
            Caption = "You have added 15th  Options"
        }
    }

    if (optText == 15) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ପଞ୍ଚଦଶ</B></font>"
            Caption = "ଷୋଡଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Fifteenth</B></font>"
            Caption = "You have added 16th  Options"
        }
    }

    if (optText == 16) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଷୋଡଶ</B></font>"
            Caption = "ସପ୍ତଦଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Sixteenth</B></font>"
            Caption = "You have added 17th  Options"
        }
    }


    if (optText == 17) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ସପ୍ତଦଶ </B></font>"
            Caption = "ଅଷ୍ଟଦଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Seventeenth</B></font>"
            Caption = "You have added 18th  Options"
        }
    }

    if (optText == 18) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଅଷ୍ଟଦଶ </B></font>"
            Caption = "ଉନବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Eighteenth</B></font>"
            Caption = "You have added 19th  Options"
        }
    }

    if (optText == 19) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଉନବିଂଶ </B></font>"
            Caption = "ବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Nineteenth</B></font>"
            Caption = "You have added 20th  Options"
        }
    }

    if (optText == 19) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଉନବିଂଶ </B></font>"
            Caption = "ବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Nineteenth</B></font>"
            Caption = "You have added 20th  Options"
        }
    }

    if (optText == 20) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ବିଂଶ </B></font>"
            Caption = "ଏକବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Tweenth</B></font>"
            Caption = "You have added 21th  Options"
        }
    }


    if (optText == 21) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଏକବିଂଶ </B></font>"
            Caption = "ଦ୍ୱୟବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>Tweenth</B></font>"
            Caption = "You have added 22th  Options"
        }
    }

    if (optText == 22) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଦ୍ୱୟବିଂଶ</B></font>"
            Caption = "ତ୍ରୟବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Second</B></font>"
            Caption = "You have added 23th  Options"
        }
    }


    if (optText == 23) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B></B>ତ୍ରୟବିଂଶ</font>"
            Caption = "ଚତୁରବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Third </B></font>"
            Caption = "You have added 24th  Options"
        }
    }

    if (optText == 24) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଚତୁରବିଂଶ</B></font>"
            Caption = "ପାଞ୍ଚବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Fouth </B></font>"
            Caption = "You have added 25th  Options"
        }
    }

    if (optText == 25) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ପାଞ୍ଚବିଂଶ</B></font>"
            Caption = "ଷଷ୍ଠବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Fifth </B></font>"
            Caption = "You have added 26th  Options"
        }
    }
    if (optText == 26) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଷଷ୍ଠବିଂଶ</B></font>"
            Caption = "ସପ୍ତବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Sixth </B></font>"
            Caption = "You have added 27th  Options"
        }
    }

    if (optText == 27) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ସପ୍ତବିଂଶ</B></font>"
            Caption = "ଅଷ୍ଟବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Seventh </B></font>"
            Caption = "You have added 28th  Options"
        }
    }

    if (optText == 28) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଅଷ୍ଟବିଂଶ</B></font>"
            Caption = " ଉନତ୍ରିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Eighth </B></font>"
            Caption = "You have added 29th  Options"
        }
    }


    if (optText == 29) {
        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B>ଉନତ୍ରିଂଶ</B></font>"
            Caption = "ତ୍ରିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        }
        else {
            OptionText = "<font color='#CC33FF' size='3'><B>twenty Nineth </B></font>"
            Caption = "You have added 30th  Options"
        }
    }

    if (optText > 29) {

        if (document.getElementById('rbtnOriya').checked) {
            OptionText = "<font color='#CC33FF' size='3'><B> ନମ୍ବର " + (parseInt(optText)) + "</B></font>"
            Caption = "ନମ୍ବର " + (parseInt(optText) + 1) + " ପସନ୍ଦ ଚୟନ କରନ୍ତୁ "
        } else {

            OptionText = "<font color='#CC33FF' size='3'><B> Option " + (parseInt(optText)) + "</B></font>"
            Caption = "Choose your" + (parseInt(optText) + 1) + " th Option";
        }
    }

    td1.innerHTML = OptionText;


    td1.innerHTML = OptionText;
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden' value=" + optionArray[1][1] + "></input>"
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[10][0] + "<input type='hidden' value=" + optionArray[10][1] + "></input>"
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[9][0] + "<input type='hidden' value=" + optionArray[9][1] + "></input>"

    var td6 = document.createElement("TD")
    td6.innerHTML = "<a href='javascript:remove(" + optText + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option' /></a>"
    for (i = 1; i < 7; i++) {
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

    cids = new Array('9', '11', '14', '19', '22', '37', '47', '51', '56', '61', '62', '63', '68', '77', '79', '84', '89', '92', '95', '96', '98', '100', '103', '105', '107', '109', '110', '112', '115', '116', '120', '129', '131', '151', '154', '156', '157', '158', '165', '166', '170', '171', '230', '232', '233', '234', '239', '242', '247', '251', '252', '253', '270', '272', '279', '288', '291', '295', '302', '304', '306', '311', '314', '322', '328', '329', '330', '331', '333', '334', '335', '336', '342', '348', '356', '357', '358', '363', '375', '390', '391', '407', '409', '410', '411', '422', '424', '426', '429', '431', '440', '443', '447', '448', '460', '465', '466', '469', '478', '479', '482', '483', '490', '492', '496', '497', '506', '511', '517', '534', '542', '549', '553', '554', '558', '562', '563', '564', '579', '582', '586', '592', '597', '598', '600', '605', '606', '608', '609', '615', '616', '623', '625', '629', '631', '636', '638', '641', '644', '648', '649', '651', '653', '660', '668', '670', '679', '680', '681', '683', '686', '688', '698', '699', '702', '706', '708', '709', '710', '716', '717', '751', '753', '758', '764', '768', '773', '776', '782', '784', '788', '790', '797', '800', '801', '802', '810', '811', '812', '817', '818', '819', '824', '831', '835', '839', '840', '842', '848', '852', '854', '859', '866', '867', '868', '873', '874', '881', '917', '921', '924', '927', '929', '932', '933', '935', '938', '941', '959', '964', '965', '967', '972', '973', '975', '976', '977', '984', '988', '992', '996', '1002', '1007', '1009', '1021', '1029', '1034', '1035', '1036', '1038', '1039', '1041', '1042', '1059', '1061', '1065', '1075', '1090', '1099', '1105', '1106', '1108', '1110', '1120', '1122', '1124', '1130', '1131', '1133', '1144', '1150', '1151', '1152', '1158', '1160', '1168', '1172', '1175', '1178', '1181', '1186', '1189', '1195', '1196', '1201', '1202', '1210', '1217', '1236', '1237', '1240', '1243', '1245', '1249', '1251', '1253', '1254', '1258', '1260', '1266', '1267', '1276', '1280', '1281', '1299', '1304', '1305', '1308', '1309', '1314', '1315', '1317', '1324', '1325', '1328', '1336', '1339', '1346', '1351', '1353', '1355', '1364', '1373', '1374', '1377', '1378', '1379', '1390', '1391', '1393', '1399', '1409', '1412', '1417', '1422', '1432', '1434', '1443', '1448', '1449', '1451', '1458', '1467', '1571', '1573', '1574', '1583', '1590', '1591', '1592', '1598', '1614', '1617', '1629', '1636', '1637', '1644', '1659', '1660', '1661', '1662', '1672', '1679', '1683', '1685', '1692', '1696', '1698', '1700', '1705', '1707', '1708', '1711', '1712', '1716', '1719', '1720', '1726', '1731', '1737', '1741', '1742', '1743', '1745', '1746', '1753', '1755', '1756', '1760', '1763', '1764', '1767', '1774', '1777', '1778', '1780', '1782', '1787', '1790', '1791', '1793', '1794', '1795', '1796', '1802', '1803', '1804', '1809', '1810', '1811', '1815', '1817', '1828', '1837', '1844', '1854', '1855', '1856', '1862', '1871', '1872', '1878', '1886', '1888', '1889', '1896', '1898', '1904', '1905', '1908', '1909', '1913', '1919', '1930', '1947', '1950', '1951', '1957', '1963', '1964', '1996', '2000', '2015', '2025', '2026', '2032', '2037', '2041', '2043', '2054', '2057', '2058', '2060', '2062', '2064', '2073', '2078', '2086', '2102', '2113', '2127', '2129', '2150', '2151', '2500', '2582', '2587', '2593', '2719', '2781', '2782', '2805', '2858', '2865', '2867', '2966', '3010', '3011', '3014', '3016', '3024', '3028', '3032', '3036', '3045', '3046', '3052', '3054', '3055', '3057', '3066', '3068', '3070', '3074', '3075', '3084', '3091', '3092', '3099', '3104', '3113', '3116', '3121', '3125', '3126', '3149', '3166', '3184', '3191', '3199', '3201', '3202', '3209', '3216', '3226');
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
    window.open('UploadPopUpITI.aspx', 'CollegeCopy', 'left=400,top=300,width=400,height=350,menubar=0,resizable=0,scrollbars=0,addressbar=0');
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
function CheckRoll(Object, msg) {
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
    if (((document.getElementById('ddlBoard').value == 46) && (document.getElementById('txtYOP').value >= 2010)) || ((document.getElementById('ddlBoard').value == 103) && (document.getElementById('txtYOP').value >= 2012))) {
        document.getElementById('tblCBSE').style.display = '';
        document.getElementById('tblBSE').style.display = 'none';
        document.getElementById('tblKERALA').style.display = 'none';
    }
    else if (((document.getElementById('ddlBoard').value == 116) && (document.getElementById('txtYOP').value >= 2010))) {
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
function chkDuplicate() {

    var comp1 = document.getElementById('ddlCompSubject1').options[document.getElementById('ddlCompSubject1').selectedIndex].value.toUpperCase();
    var comp2 = document.getElementById('ddlCompSubject2').options[document.getElementById('ddlCompSubject2').selectedIndex].value.toUpperCase();
    var comp3 = document.getElementById('ddlCompSubject3').options[document.getElementById('ddlCompSubject3').selectedIndex].value.toUpperCase();
    var comp4 = document.getElementById('ddlCompSubject4').options[document.getElementById('ddlCompSubject4').selectedIndex].value.toUpperCase();
    array_elements = [comp1, comp2, comp3, comp4];

    var isduplicate = false

    var removeItem = 0;
    var results = [];
    array_elements = jQuery.grep(array_elements, function (value) {
        return value != removeItem;
    });

    var sortedarray = array_elements.slice().sort();
    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length - 1; i++) {
        if (array_elements[i + 1] == array_elements[i]) {

            results.push(array_elements[i]);
        }
    }
    if (results.length > 0)
        isduplicate = true;
    else
        isduplicate = false;
    return isduplicate;

}
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

//=========================TO CHECK OPTION 0  AS NUMERIC===================== 
function ZeroValidationOption(strInput, msg) {
    debugger;
    var val = document.getElementById(strInput).value;
    if ((val === "0") || (val === "00") || (val === "000")) {
        alert("Please Enter Valid " + msg);
        document.getElementById(strInput).focus();
        return false;
    }
    return true;
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
    var intyr = parseInt(document.getElementById('txtYOP').value);


    document.getElementById('marks').style.display = "";
    if ((intyr >= 2014) && (intboard == 45)) {
        document.getElementById('tdGrade').style.display = "";
        document.getElementById('tdGradelbl').style.display = "";
        document.getElementById('tdGradeMark').style.display = "";
        document.getElementById('tdGradeMarkddl').style.display = "";
        // document.getElementById('gpoint').style.display = "none";
    }
    else {
        document.getElementById('tdGrade').style.display = "none";
        document.getElementById('tdGradelbl').style.display = "none";
        document.getElementById('tdGradeMark').style.display = "none";
        document.getElementById('tdGradeMarkddl').style.display = "none";
        // document.getElementById('gpoint').style.display = "";

    }
}

function ExamType() {
    if (document.getElementById('txtYOP').value == '2018') {
        document.getElementById('rbtnAnnual').checked = true;
        document.getElementById('rbtnSuppl').disabled = true;
    }
    else {
        if (!$('#rbtn8ThPass').is(':checked'))
            document.getElementById('rbtnSuppl').disabled = false;
    }
}

//Use of jquery to run in mozila firefox
//====================Fill District =============
//=======To fill Correspondance District and Block
function fillDistC(ctlDdlVal) {
    $('#ddlDistrictC option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;

    $.ajax({

        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/fillDistrict',
        data: "{'intStateId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');

            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlDistrictC').append(newOption);
            }
        },
        dataType: 'json'
    });

}
//====================Fill Block =============
function fillBlockC(ctlDdlVal) {
    $('#ddlBlockC option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    $.ajax({

        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/fillBlock',
        data: "{'intDistId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');

            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlBlockC').append(newOption);
            }
        },
        dataType: 'json'
    });
}
//End to Fill District and Block
function fillDist(ctlDdlVal) {
    debugger;
    $('#ddlCDist option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;

    $.ajax({
        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/fillDistrict',
        data: "{'intStateId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlCDist').append(newOption);

            var dataCount = JSON.parse(JSON.stringify(response.d)).length;
            if (dataCount != 0) {
                $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                    var newOption = $('<option value="' + value.int_DistrictID + '">' + value.vch_DistrictName + '</option>');
                    $('#ddlCDist').append(newOption);
                });
            }
            else {
                var newOption = $('<option value="457">OTHER</option>');
                $('#ddlCDist').append(newOption);
            }
        },
        error: function (response) {
            hideLoader();
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
            // AjaxFailed;
        }

    });

}
//====================Fill Block =============
function fillBlock(ctlDdlVal) {
    debugger;
    $('#ddlCBlock option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    $.ajax({
        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/fillBlock',
        data: "{'intDistId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlCBlock').append(newOption);
            if (JSON.parse(JSON.stringify(response.d)).length > 0) {
                $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                    var newOption = $('<option value="' + value.int_BlockID + '">' + value.vch_BlockName + '</option>');
                    $('#ddlCBlock').append(newOption);
                });
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
//====================Load District =============    
function loadDistricts() {
    $.ajax({
        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/LoadDistrict',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption = $('<option value="' + value.IntID + '">' + value.StrName + '</option>');
                $('#ddlCollegeDistrict').append(newOption);
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

//=====================fill College===================
function loadColleges(CollegeTypeID) {

    $('#ddlCollege option').each(function (j, option) { $(option).remove(); });
    var inVal = parseInt(document.getElementById('ddlCollegeDistrict').options[document.getElementById('ddlCollegeDistrict').selectedIndex].value);
    collegeType = 0;

    $.ajax({
        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/FillAllInstitutes',
        data: "{'DisablityType':'" + CollegeTypeID + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (data) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlCollege').append(newOption);
            $.each(JSON.parse(JSON.stringify(data.d)), function (index, value) {
                var newOption = $('<option value="' + value.CID + '">' + value.CNAME + '</option>');
                $('#ddlCollege').append(newOption);
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
//====================Fill Stream =============
function fillStream(ctlDdlVal, typeID, DisabilityType) {

    $('#ddlStream option').each(function (j, option) { $(option).remove(); });
    $('#ddlStreamNew option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;

    $.ajax({

        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/FillStream',
        data: "{'intCollegeID':'" + inVal + "','intcollegeType':'" + typeID + "','DisabilityType':'" + DisabilityType + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlStream').append(newOption);
            $('#ddlStreamNew').append(newOption);

            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption = $('<option value="' + value.int_StreamID + '">' + value.vch_StreamName + '</option>');
                $('#ddlStream').append(newOption);
                $('#ddlStreamNew').append(newOption);
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
function fillStreamIMC(ctlDdlVal, typeID, DisabilityType) {

    $('#ddlStream option').each(function (j, option) { $(option).remove(); });
    $('#ddlStreamNew option').each(function (j, option) { $(option).remove(); });

    var inVal = ctlDdlVal.value;
    $.ajax({
        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/FillStreamIMC',
        data: "{'intCollegeID':'" + inVal + "','intcollegeType':'" + typeID + "','DisabilityType':'" + DisabilityType + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlStream').append(newOption);
            $('#ddlStreamNew').append(newOption);

            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption = $('<option value="' + value.int_StreamID + '">' + value.vch_StreamName + '</option>');
                $('#ddlStream').append(newOption);
                $('#ddlStreamNew').append(newOption);
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
//====================Fill All Trades========================
function FillAllTrade(collegetype, disabilitytype) {

    $('#ddlStreamNew option').each(function (j, option) { $(option).remove(); });
    $.ajax({

        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/FillAllTrade',
        contentType: "application/json; charset=utf-8",
        data: "{'intCollegeType':'" + collegetype + "','DisabilityType':'" + disabilitytype + "'}",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');

            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlStreamNew').append(newOption);
            }
        },
        dataType: 'json'
    });

}
//====================Fill Stream =============
function fillTradeCollegewise(ctlDdlVal, DisabilityType) {
    $('#ddlCollegeNew option').each(function (j, option) { $(option).remove(); });

    var inVal = ctlDdlVal.value;
    $.ajax({

        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/FillCollegeTradeWise',
        data: "{'TradeID':'" + inVal + "','DisabilityType':'" + DisabilityType + "'}",
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
                $('#ddlCollegeNew').append(newOption);

            }
        },
        dataType: 'json'
    });
}
function FillIMCCollege(clgtype, DisabilityType) {
    $('#ddlCollege option').each(function (j, option) { $(option).remove(); });
    debugger;
    //var inVal = parseInt(document.getElementById('ddlCollegeDistrict').options[document.getElementById('ddlCollegeDistrict').selectedIndex].value);
    //collegeType = 0;


    $.ajax({
        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/fillInstitutewiseIMC',
        data: "{'colgtype':'" + clgtype + "','DisabilityType':'" + DisabilityType + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (data) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlCollege').append(newOption);

            $.each(JSON.parse(JSON.stringify(data.d)), function (index, value) {
                var newOption = $('<option value="' + value.int_CollegeID + '">' + value.vch_CollegeName + '</option>');
                $('#ddlCollege').append(newOption);
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
//====================Fill Compulsory Subject =============
function fillCompulsory(ctlCollegeVal, ctlStreamVal) {
    $('#ddlCompulsory option').each(function (j, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;

    $.ajax({
        type: 'POST',
        url: '../ONLINE_CAF_ITI/CAFForm.aspx/FillCompulsory',
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

//=====================fill BSE Board Mark===================
function BoardMark() {

    var inVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    var yr = parseInt(document.getElementById('txtYOP').value)
    var roll = document.getElementById('txtBoardRoll').value

    if (document.getElementById('rbtnAnnual').checked == true && inVal == 45 && yr >= 2013 && roll != '') {

        $.ajax({
            type: 'POST',
            url: '../ONLINE_CAF_ITI/CAFForm.aspx/fillBSEMark',
            data: "{'vchRollNo':'" + roll + "','intYear':'" + yr + "'}",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                debugger;
                var dataCount = JSON.parse(JSON.stringify(response.d)).length;
                if (dataCount != 0) {
                    $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                        document.getElementById('txtApplName').value = value.NAME;
                        document.getElementById('txtEnglish').value = value.ENGLISH;
                        document.getElementById('txtMath').value = value.MATH;
                        document.getElementById('txtScience').value = value.SCIENCE;
                        document.getElementById('txtSocSci').value = value.SOCAILSTUDIES;
                        document.getElementById('txtTotMark').value = value.TOT;
                        document.getElementById('txtMaxMark').value = value.MAXTOTAL;
                        if (yr >= 2014) {
                            $("#ddlGrade option:contains(" + value.GRADE + ")").attr('selected', 'selected');
                            $("#hdnGrade").val(value.GRADE);

                            $('#txtFatherName').val(value.FNAME);
                            $('#txtMotherName').val(value.MNAME);

                            $('#ddlGender').val(parseInt(value.GENDER));

                            var str = value.DOB;
                            var res = str.split('/');

                            $("#ddlDay").val(parseInt(res[0]));
                            $("#ddlMonth").val(parseInt(res[1]));
                            $("#ddlYear").val(parseInt(res[2]));
                            $("#ddlCState").val('1');
                            $("#ddlStateC").val('1');
                        }
                        else {
                            $("#hdnGrade").val(0)
                        }

                        $("#lblEnglishCpy").html(value.ENGLISH);
                        $("#lblMathCpy").html(value.MATH);
                        $("#lblScienceCpy").html(value.SCIENCE);
                        $("#lblSocSciCpy").html(value.SOCAILSTUDIES);
                        $("#lblTotMarkCpy").html(value.TOT);
                        $("#lblMaxMarkCpy").html(value.MAXTOTAL);
                        if (yr >= 2014) {
                            $("#lblGrade").html(value.GRADE);
                        }
                        else {
                            $("#lblGrade").html(0);
                        }

                        $("#txtEnglish").attr("readonly", "readonly");
                        $("#txtMath").attr("readonly", "readonly");
                        $("#txtScience").attr("readonly", "readonly");
                        $("#txtSocSci").attr("readonly", "readonly");
                        $("#txtTotMark").attr("readonly", "readonly");
                        $("#txtMaxMark").attr("readonly", "readonly");
                        $("#ddlGrade").attr("disabled", "disabled");

                        document.getElementById('trBSECpy').style.display = "";
                        document.getElementById('hdnMarkVerification').value = "1";
                        document.getElementById('trBSEVerCpy').style.display = "";
                        document.getElementById('rbtMarkVerifiedYCpy').checked = true;
                        document.getElementById('rbtMarkVerifiedNCpy').checked = false;
                    });
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
                    document.getElementById('hdnMarkVerification').value = "0";
                    document.getElementById('trBSEVerCpy').style.display = "none";
                }
            },
            dataType: 'json'
        });
    }
    else {

        document.getElementById('trBSECpy').style.display = "none";
        document.getElementById('trBSEVerCpy').style.display = "none";
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
    }

}


//=====================fill Caste Certificate===================
function CastCertificate(vch_Barcode) {
    debugger;
    var inVal = vch_Barcode.value;
    var Name = $("#txtApplName").val();
    if ($("#txtCasteCertNum").val() != "") {
        $.ajax({
            type: 'POST',
            url: 'CAFForm.aspx/CasteCertificate',
            data: "{'vch_Barcode':'" + inVal + "','vch_Name':'" + Name + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (response) {
                var lstdtl = JSON.parse(JSON.stringify(response.d));
                console.log(lstdtl);
                if (lstdtl.length > 0) {
                    if (lstdtl[0].int_CategoryId == '2') {
                        $("#rbtnSC").attr('checked', 'checked');
                    }
                    if (lstdtl[0].int_CategoryId == '3') {
                        $("#rbtST").attr('checked', 'checked');
                    }
                    $(".right").show();
                    $(".wrong").hide();
                    $("#hdnCasteStatus").val('1');
                    hdnCasteStatus
                }

                else {
                    $(".wrong").show();
                    $(".right").hide();
                    $("#hdnCasteStatus").val('0');
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
}
//=====================fill Income Certificate===================
function IncomeCertificate(vch_Barcode) {

    var inVal = vch_Barcode.value;

    if ($("#txtAnnualCart").val() != "") {
        $.ajax({
            type: 'POST',
            url: 'CAFForm.aspx/IncomeCastCertificate',
            data: "{'vch_Barcode':'" + inVal + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (response) {
                var lstdtl = JSON.parse(JSON.stringify(response.d));
                console.log(lstdtl);
                if (lstdtl.length > 0) {
                    $(".inright").show();
                    $(".inwrong").hide();
                    //$("#ddlAnnualIncome").val(lstdtl[0].int_CategoryId);
                    $("#hdnIncomeStatus").val('1');
                }

                else {

                    $(".inright").hide();
                    $(".inwrong").show();
                    $("#hdnIncomeStatus").val('0');

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
}

function BindBankData() {

    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "CAFForm.aspx/GetBankDetails",
        data: '{"IFSC":"' + $("#txtIFSCCode").val() + '"}',
        success: function (msg) {
            var dataCount = JSON.parse(JSON.stringify(msg.d)).length;
            if (dataCount == 0) {
                $("#txtBankName").val('');
                $("#txtBranchName").val('');
                $("#txtIFSCCode").val('');
                $("#txtIFSCCode").focus();
                alert('Invalid IFS Code');


            }
            else {
                $.each(JSON.parse(JSON.stringify(msg.d)), function (index, value) {
                    $("#txtBankName").val(value.BankName);
                    $("#txtBranchName").val(value.BranchName);
                    //$("#txtAccountNo").focus();
                });
            }
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
        }
    });
}










function RollNoCheck() {
    document.getElementById('txtBoardRoll').value = '';
}
function DisableBSEData() {
    var inVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    if (document.getElementById('txtYOP').value == '2012' && inVal == 45) {
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
    var yr = parseInt(document.getElementById('txtYOP').value)
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
function MarkVerify() {

    if (document.getElementById('hdnMarkVerification').value == "1") {
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

        CheckMarkVerification_Load();
    }
    else {

        $("#lblEnglishCpy").html('');
        $("#lblMathCpy").html('');
        $("#lblScienceCpy").html('');
        $("#lblSocSciCpy").html('');
        $("#lblTotMarkCpy").html('');
        $("#lblMaxMarkCpy").html('');
        $("#lblGrade").html('');

        document.getElementById('trBSECpy').style.display = "none";
        document.getElementById('trBSEVerCpy').style.display = "none";

    }
}
//================Mark Verification Radio Button==========
function CheckMarkVerificationCpy() {
    if (document.getElementById('rbtMarkVerifiedYCpy').checked == true) {
        BoardMark();
    }
    else {
        document.getElementById('trBSECpy').style.display = "none";

        $("#txtEnglish").attr("readonly", false);
        $("#txtMath").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtSocSci").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);
        $('#ddlGrade').removeAttr('disabled');
        document.getElementById('txtEnglish').value = '';
        document.getElementById('txtMath').value = '';
        document.getElementById('txtScience').value = '';
        document.getElementById('txtSocSci').value = '';
        document.getElementById('txtTotMark').value = '';
        document.getElementById('txtMaxMark').value = '';
        document.getElementById('ddlGrade').selectedIndex = 0;

    }
}

function CheckMarkVerification_Load() {
    if (document.getElementById('rbtMarkVerifiedYCpy').checked == true) {
        BoardMark();
    }
    else {
        document.getElementById('trBSECpy').style.display = "none";
        $("#txtEnglish").attr("readonly", false);
        $("#txtMath").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtSocSci").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);
        $('#ddlGrade').removeAttr('disabled');
    }
}

//For the CAF Page
function EnglishOriyaFont() {
    debugger;
    if (document.getElementById('rbtnOriya').checked) {

        document.getElementById('common').innerHTML = 'ସାଧାରଣ ଆବେଦନ ଫର୍ମ';
        document.getElementById('adm').innerHTML = 'ସରକାରୀ ଆଇ.ଟି.ଆଇ ରେ ନାମ ଲେଖା ନିମନ୍ତେ(୨୦୧୮ -୧୯)';
        document.getElementById('department').innerHTML = 'କଳା ବିକାଶ ଏବଂ ବୈଷୟିକ ଶିକ୍ଷା  ବିଭାଗ , ଓଡିଶା ସରକାର ';
        document.getElementById('lblMarkField').innerHTML = 'ଚିହ୍ନିତ ସ୍ଥାନ ବାଧ୍ୟତା ମୂଳକ ଅଟେ';
        //document.getElementById('lblp2').innerHTML = 'ଆଇ.ଟି.ଆଇ';

        document.getElementById('lblBExam').innerHTML = 'ଦଶମ ବାର୍ଷିକ ପରୀକ୍ଷା ପ୍ରାପ୍ତ ନମ୍ବର';
        document.getElementById('note').innerHTML = 'ସୂଚନା : ଯଦି ଏଠାରେ ଦିଆଯାଇଥିବା ନମ୍ବର ଆପଣଙ୍କ ପ୍ରାପ୍ତ ନମ୍ବର ସହିତ ସମାନ ଅଛି କି ? ଯଦି ନା ନିଜର ପ୍ରକୃତ ନମ୍ବର ପୁରଣ କରନ୍ତୁ ନମ୍ବର ୯(କ) ରେ';

        document.getElementById('Span3').innerHTML = 'ହଁ';
        document.getElementById('Span4').innerHTML = 'ନା';


        if (document.getElementById("rbtn8ThPass").checked) {
            document.getElementById('lblBoardName').innerHTML = 'ବିଦ୍ୟାଳୟ ର ନାମ';
        } else {
            document.getElementById('lblBoardName').innerHTML = 'ପରୀକ୍ଷା ବୋର୍ଡ ନାମ';
        }

        if (document.getElementById("rbtn10thFail").checked) {
            document.getElementById('lblYOP').innerHTML = 'ଅକୃତକାର୍ଯ୍ୟ ବର୍ଷ';
        } else {
            document.getElementById('lblYOP').innerHTML = 'ଉତ୍ତୀର୍ଣ୍ଣ ବର୍ଷ';
        }


        document.getElementById('lblExamType').innerHTML = 'କେଉଁ ପ୍ରକାର ପରୀକ୍ଷା';
        document.getElementById('lblRoll').innerHTML = 'ରୋଲ ନମ୍ବର';
        document.getElementById('lblphototext').innerHTML = 'ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ';
        document.getElementById('10thPass').innerHTML = 'ଦଶମ ଶ୍ରେଣୀ ପାଶ';
        document.getElementById('10thFail').innerHTML = 'ଦଶମ ଶ୍ରେଣୀ ଫେଲ';
        document.getElementById('8thPass').innerHTML = 'ଅଷ୍ଟମ ଶ୍ରେଣୀ ପାଶ୍';
        document.getElementById('lblQualification').innerHTML = 'ଶିକ୍ଷାଗତଯୋଗ୍ୟତା';
        document.getElementById('lbltit8thpass').innerHTML = 'କେଉଁ ବିଦ୍ୟାଳୟର ରୁ ଅଷ୍ଟମ ଶ୍ରେଣୀ ପାଶ କଲ, କେଉଁ ବର୍ଷ ଓ ରୋଲ ନମ୍ବର ';
        document.getElementById('lbltit10thFail').innerHTML = 'କେଉଁ ବୋର୍ଡରୁ ଦଶମ ଶ୍ରେଣୀ ଫେଲ  ? କେଉଁ ବର୍ଷ ଓ ରୋଲ ନମ୍ବର (ଆଡମିଟ କାର୍ଡ ଅନୁଯାୟୀ)';
        document.getElementById('lbltit10thPass').innerHTML = 'କେଉଁ ବୋର୍ଡରୁ ଦଶମ ଶ୍ରେଣୀ ପାଶ କଲ ? କେଉଁ ବର୍ଷ ଓ ରୋଲ ନମ୍ବର (ଆଡମିଟ କାର୍ଡ ଅନୁଯାୟୀ)';
        document.getElementById('lblApplicantName').innerHTML = 'ଦରଖାସ୍ତକାରିଙ୍କ ନାମ';
        document.getElementById('rbtnAnnual').nextSibling.innerHTML = 'ବାର୍ଷିକ';
        document.getElementById('rbtnSuppl').nextSibling.innerHTML = 'ସପ୍ଲିମେଣ୍ଟାରି';
        document.getElementById('lblFname').innerHTML = 'ପିତା ଙ୍କ ନାମ';
        document.getElementById('lblMname').innerHTML = 'ମାତା ଙ୍କ ନାମ';
        document.getElementById('lblPD').innerHTML = 'ବ୍ୟକ୍ତିଗତ ସୂଚନା';
        document.getElementById('lblBloodGroup').innerHTML = 'ରକ୍ତର ଶ୍ରେଣୀ';
        document.getElementById('lblReligion').innerHTML = 'ଧର୍ମ';
        document.getElementById('lblGender').innerHTML = 'ଲିଙ୍ଗ';
        document.getElementById('lblDOB').innerHTML = 'ଜନ୍ମ ତାରିଖ';
        document.getElementById('lblHighestQua').innerHTML = 'ସର୍ବ ଶେଷ ଶିକ୍ଷାଗତ ଯୋଗ୍ୟତା';
        document.getElementById('lbladdress').innerHTML = 'ଘର ଠିକଣା';
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
        document.getElementById('Label8').innerHTML = 'ବିକଲ୍ପ ମୋବାଇଲ ନମ୍ବର';
        document.getElementById('Label12').innerHTML = 'ଆଧାର କାର୍ଡ ନମ୍ବର';
        document.getElementById('Label14').innerHTML = 'ରାସନ କାର୍ଡ ନମ୍ବର';
        document.getElementById('Label10').innerHTML = 'ବ୍ୟାଙ୍କ  ସୂଚନା';
        document.getElementById('Label16').innerHTML = 'ବ୍ୟାଙ୍କର ନାମ';
        document.getElementById('Label18').innerHTML = 'ଶାଖାର ନାମ';
        document.getElementById('Label23').innerHTML = 'ଏକାଉଣ୍ଟ ନମ୍ବର  / ପାଶ ବହିର ନମ୍ବର';
        document.getElementById('Label20').innerHTML = 'ଆଇ ଏଫ ଏସ ସି କୋର୍ଡ';
        document.getElementById('lblReservation').innerHTML = 'ସଂରକ୍ଷଣ ସମ୍ପର୍କରେ ସୂଚନା';
        document.getElementById('ST').innerHTML = 'ତଫସିଲ ଭୁକ୍ତ ଜନଜାତି';
        document.getElementById('SC').innerHTML = 'ତଫସିଲ ଭୁକ୍ତ ଜାତି';
        document.getElementById('OBC').innerHTML = 'ଅନ୍ୟାନ୍ୟ ପଛୁଆବର୍ଗ ଜାତି';
        document.getElementById('GENERAL').innerHTML = 'ସାଧାରଣ';
        document.getElementById('PHOH').innerHTML = 'ଭିନ୍ନ କ୍ଷମ';
        document.getElementById('spansports').innerHTML = 'କ୍ରୀଡା';
        document.getElementById('spangreencard').innerHTML = 'ଗ୍ରୀନ କାର୍ଡ ଅଛିକି ?';
        document.getElementById('spanMinority').innerHTML = 'ସଂଖ୍ୟାଲଘୁ ସମ୍ପ୍ରଦାୟ';
        document.getElementById('SDP').innerHTML = 'ଅବସରପ୍ରାପ୍ତ ସୈନିକ';
        document.getElementById('NoN').innerHTML = 'କୌଣସି ବର୍ଗର ନୁହନ୍ତି ';
        document.getElementById('Label24').innerHTML = 'ସ୍ବତନ୍ତ୍ର ଗୋଷ୍ଠି ବା ବର୍ଗର';
        document.getElementById('rbtnBuildingYes').innerHTML = 'ହଁ';
        document.getElementById('rbtnBuildingNo').innerHTML = 'ନା';
        document.getElementById('Label25').innerHTML = 'ପିତା ମାତା ନିର୍ମାଣ  ଶ୍ରମିକ  ଶ୍ରେଣୀର କି?';

        document.getElementById('lblIncomeDet').innerHTML = 'ପିତା ମାତାଙ୍କର ଆୟ ସଂମ୍ପର୍କରେ ସୂଚନା';
        document.getElementById('lblFocu').innerHTML = 'ପିତାଙ୍କର ବୃତ୍ତି';
        document.getElementById('lblMocu').innerHTML = 'ମାତାଙ୍କର ବୃତ୍ତି';
        document.getElementById('lblIncome').innerHTML = 'ପିତା ଓ ମାତାଙ୍କର  ମୋଟ ଆୟ';
        document.getElementById('dv9').innerHTML = 'ସୂଚନା : ତଳେ ଦିଆଯାଇଥିବା ସ୍ଥାନ ରେ ଗ୍ରେଡ ପ୍ରଦର୍ଶନ ହେବ , ଯଦି ଆପଣ  ସି.ବି.ଏସ.ଇ ଓ ୨୦୧୦  କିମ୍ବା ତା ପରବର୍ତ୍ତୀ ମସିହାରେ ପାସ  କରିଥିବେ ';
        document.getElementById('lbl9').innerHTML = 'ମାର୍କର ବିବରଣୀ, ପରୀକ୍ଷାରେ ମିଳିଥିବା ଗ୍ରେଡ';
        document.getElementById('lbl9a').innerHTML = 'ପ୍ରତି ବିଷୟରେ ରଖିଥିବା ନମ୍ବର ଓ  ମିଳିଥିବା ଗ୍ରେଡ';
        document.getElementById('lbl9b').innerHTML = 'ଦଶମ ଶ୍ରେଣୀ କମ୍ପାର୍ଟମେଣ୍ଟାଲରେ ପାଶ୍ କରିଛନ୍ତି କି?';
        document.getElementById('CompN').innerHTML = 'ନା';
        document.getElementById('CompY').innerHTML = 'ହଁ';
        document.getElementById('rbtnBuildingN').innerHTML = 'ନା';
        document.getElementById('rbtnBuildingY').innerHTML = 'ହଁ';



        //document.getElementById('Institutewise').innerHTML = 'ଏତଦ୍ ବ୍ୟତୀତ କେଉଁ  କେଉଁ ଅନୁଷ୍ଠାନରେ କେଉଁ ବିଷୟ ପ୍ରତି ଆଗ୍ରହ ରହରଛି ତାହା ଉଲ୍ଲେଖ କର';
        document.getElementById('Institutewise').innerHTML = 'ପ୍ରତିଷ୍ଠାନ';
        document.getElementById('TradeWise').innerHTML = 'ଆଇ.ଏମ.ସି';  // 'ଟ୍ରେଡ';
        document.getElementById('Caption').innerHTML = 'ପ୍ରଥମ ପସନ୍ଦ ଲେଖ';
        //document.getElementById('Label2').innerHTML = 'ଟ୍ରେଡ ';
        document.getElementById('lblStream').innerHTML = 'ଟ୍ରେଡ ';
        document.getElementById('lblcolname').innerHTML = 'ପ୍ରତିଷ୍ଠାନ';

        //document.getElementById('Label4').innerHTML = 'ପ୍ରତିଷ୍ଠାନ';
        document.getElementById('lblhostel').innerHTML = 'ହଷ୍ଟେଲ ରହିବାକୁ ଆଗ୍ରହୀ କି?';
        document.getElementById('lblchoice').innerHTML = 'ଯଦି ଅଧିକ ପସନ୍ଦ ଖୋଜୁଛନ୍ତି ,ଆପ୍ଲାଏ ବଟମରେ କ୍ଲିକ କରନାହିଁ';

        document.getElementById('btnSave').innerHTML = 'ଆବେଦନ';
        document.getElementById('Opt1').innerHTML = 'ହଁ';
        document.getElementById('Opt2').innerHTML = 'ନା';
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
        document.getElementById('Label7').innerHTML = 'ଝ.';
        document.getElementById('Label11').innerHTML = 'ଞ.';
        document.getElementById('Label13').innerHTML = 'ଟ.';
        document.getElementById('Label9').innerHTML = '୭.';
        document.getElementById('Label15').innerHTML = 'କ.';
        document.getElementById('Label17').innerHTML = 'ଖ.';
        document.getElementById('Label22').innerHTML = 'ଗ.';
        document.getElementById('Label19').innerHTML = 'ଘ.';
        document.getElementById('lblN8').innerHTML = '୮.';
        document.getElementById('lblN7a').innerHTML = 'କ.';
        document.getElementById('lblN7b').innerHTML = 'ଖ.';
        document.getElementById('lblN7c').innerHTML = 'ଗ.';
        document.getElementById('Label6').innerHTML = 'ଘ.';
        document.getElementById('Label21').innerHTML = 'ଙ.';
        document.getElementById('lblN61').innerHTML = '୯.';
        //document.getElementById('lblN61a').innerHTML = 'କ.';
        document.getElementById('lblN61a').innerHTML = 'ଖ.';
        document.getElementById('lblN61b').innerHTML = 'ଗ.';
        document.getElementById('lblN61c').innerHTML = 'ଘ.';


        document.getElementById('lblN9').innerHTML = '୧୦.';
        document.getElementById('lblN9a').innerHTML = 'କ.';
        document.getElementById('lblN9b').innerHTML = 'ଖ.';

        document.getElementById('lblc').innerHTML = 'କ.';
        document.getElementById('lbld').innerHTML = 'ଖ.';
        document.getElementById('lblh').innerHTML = 'ଗ.';

        if (document.getElementById('Label1') != null) {
            document.getElementById('Label1').innerHTML = 'କ.';
        }
        if (document.getElementById('Label3') != null) {
            document.getElementById('Label3').innerHTML = 'ଖ.';
        }

        if (document.getElementById('lbl9msg') != null) {
            document.getElementById('lbl9msg').innerHTML = 'ସୂଚନା :ଯଦି ଏଠାରେ ଦିଆଯାଇଥିବା କୌଣସି ବିଷୟ ନାହିଁ ,ଦୟାକରି ଆମର ଟୋଲଫ୍ରୀ ନମ୍ବର ୧୮୦୦-୩୪୫-୬୭୭୦ ରେ ଯୋଗାଯୋଗ କରନ୍ତୁ.';
        }
        document.getElementById('4').value = 'ଅଧିକ ପସନ୍ଦ ଚାହୁଁଛନ୍ଦି ତେବେ ଆଡ ବଟମରେ କ୍ଲିକ କରନ୍ତୁ';
        document.getElementById('btnSave').value = "ଆବେଦନ "

        document.getElementById('Label27').innerHTML = 'ଆପଣ ପିତୃମାତୃହୀନ କି ?';
        document.getElementById('Orphan1').innerHTML = 'ହଁ';
        document.getElementById('Orphan2').innerHTML = 'ନା';
        document.getElementById('Label26').innerHTML = 'କ.';

        document.getElementById('lbloption').innerHTML = 'ପସନ୍ଦ ବିବରଣୀ ';
        if (document.getElementById('lblCardLabel') != null) {
            document.getElementById('lblCardLabel').innerHTML = 'ଶ୍ରମିକ ପରିଚୟ ପତ୍ର ନମ୍ବର';
        }


        if (document.getElementById('divTradeNote') != null) {
            document.getElementById('divTradeNote').innerHTML = 'SCTEVT';
        }

        if (document.getElementById('divIMC') != null) {
            document.getElementById('divIMC').innerHTML = 'ଆଇ.ଏମ.ସି';
        }




    } else {
        document.getElementById('lblphototext').innerHTML = 'Click here to upload your photo';
        document.getElementById('common').innerHTML = 'Common Application Form';
        document.getElementById('adm').innerHTML = ' for Admission to Government ITIs(2018-19)';
        document.getElementById('department').innerHTML = 'Skill Development and Techincal Education Department, Government of Odisha';
        document.getElementById('lblMarkField').innerHTML = ' Mark indicates mandatory field';
        document.getElementById('lblBExam').innerHTML = 'Mark secured in 10th Board Examination';
        document.getElementById('note').innerHTML = 'Note : If the above mark showing in the computer screen is matching with your actual mark secured, then please click on “Yes” button. If not, click on “No” button to enter your actual mark at 9(a) of this online form.';

        document.getElementById('Span3').innerHTML = 'Yes';
        document.getElementById('Span4').innerHTML = 'No';


        if (document.getElementById("rbtn8ThPass").checked) {
            document.getElementById('lblBoardName').innerHTML = 'Name of School';
        } else {
            document.getElementById('lblBoardName').innerHTML = 'Name of the Examination Board';
        }
        if (document.getElementById("rbtn10thFail").checked) {
            document.getElementById('lblYOP').innerHTML = 'Year of Failing';
        } else {
            document.getElementById('lblYOP').innerHTML = 'Year of Passing';
        }



        document.getElementById('lblExamType').innerHTML = 'Exam Type';

        if (document.getElementById('lblQualification') != null) {
            document.getElementById('lblQualification').innerHTML = 'Qualification';
        }


        document.getElementById('lblRoll').innerHTML = 'Roll Number';
        document.getElementById('lbltit8thpass').innerHTML = 'Name of the School from which you have passed the 8th exam, Year of Exam &amp; Roll Number';
        document.getElementById('lbltit10thFail').innerHTML = 'Name of the Board from which you failed the 10th exam, Year of Exam &amp; Roll Number (as in admit card)';
        document.getElementById('lbltit10thPass').innerHTML = 'Name of the Board from which you have passed the 10th exam, Year of Exam &amp; Roll Number (as in admit card)';

        document.getElementById('10thPass').innerHTML = '10th Class Pass';
        document.getElementById('10thFail').innerHTML = '10th Fail';
        document.getElementById('8thPass').innerHTML = '8th Class Pass';

        document.getElementById('lblApplicantName').innerHTML = "Applicant's Name";
        document.getElementById('rbtnAnnual').nextSibling.innerHTML = 'Annual';
        document.getElementById('rbtnSuppl').nextSibling.innerHTML = 'Supplementary';
        document.getElementById('lblFname').innerHTML = "Father's Name";
        document.getElementById('lblMname').innerHTML = "Mother's Name";
        document.getElementById('lblPD').innerHTML = 'Personal Details';
        document.getElementById('lblBloodGroup').innerHTML = 'Blood Group';
        document.getElementById('lblReligion').innerHTML = 'Religion';
        document.getElementById('lblGender').innerHTML = 'Gender';
        document.getElementById('lblDOB').innerHTML = 'Date of Birth';
        document.getElementById('lblHighestQua').innerHTML = 'Highest Qualification ';

        document.getElementById('lbladdress').innerHTML = 'Residence Address';
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
        document.getElementById('Label8').innerHTML = 'Alternate Mobile No';
        document.getElementById('Label12').innerHTML = 'Aadhar Card No.';
        document.getElementById('Label14').innerHTML = 'Ration Card No';

        document.getElementById('Label10').innerHTML = 'Bank Details';
        document.getElementById('Label16').innerHTML = 'Name of Bank';
        document.getElementById('Label18').innerHTML = 'Branch Name';
        document.getElementById('Label23').innerHTML = 'Account No';
        document.getElementById('Label20').innerHTML = 'IFSC Code';

        document.getElementById('lblReservation').innerHTML = 'Reservation Details';
        document.getElementById('ST').innerHTML = 'Schedule Tribe (ST)';
        document.getElementById('SC').innerHTML = 'Schedule Caste (SC)';
        document.getElementById('OBC').innerHTML = 'Other Backward Class (OBC)';
        document.getElementById('GENERAL').innerHTML = 'General';
        document.getElementById('PHOH').innerHTML = 'People with Disability (PwD)';
        document.getElementById('spansports').innerHTML = 'Sports';
        document.getElementById('spangreencard').innerHTML = 'Green Card';
        document.getElementById('spanMinority').innerHTML = 'Minority';
        document.getElementById('SDP').innerHTML = 'Ex-Service Man (ESM)';
        document.getElementById('NoN').innerHTML = 'None';
        document.getElementById('Label24').innerHTML = 'Special Community';


        if (document.getElementById('Label25') != null) {
            if (document.getElementById('Label25').innerHTML != null) {
                document.getElementById('Label25').innerHTML = ' Whether Parent belongs to building and Construction worker';
            }
        }



        document.getElementById('CompN').innerHTML = 'No';
        document.getElementById('CompY').innerHTML = 'Yes';
        document.getElementById('rbtnBuildingN').innerHTML = 'No';
        document.getElementById('rbtnBuildingY').innerHTML = 'Yes';



        document.getElementById('lblIncomeDet').innerHTML = 'Income Details of Parents';
        document.getElementById('lblFocu').innerHTML = 'Father' + 's Occupation';
        document.getElementById('lblMocu').innerHTML = 'Mother' + 's Occupation';
        document.getElementById('lblIncome').innerHTML = 'Annual Income of the Parents (Together) in Rs.';


        document.getElementById('dv9').innerHTML = "Note: the below field will show grade point, if you select CBSE & 2010 or later as year of passing";
        document.getElementById('lbl9').innerHTML = 'Details of Mark/Grade Secured in Examination';
        document.getElementById('lbl9a').innerHTML = ' Mark/Grade secured in each subject';
        document.getElementById('lbl9b').innerHTML = 'Have you passed 10th Board Exam Compartmentally ?';

        document.getElementById('Caption').innerHTML = 'Choose your 1st Option';
        document.getElementById('Institutewise').innerHTML = 'Institute wise';

        document.getElementById('lblcolname').innerHTML = 'Institute';
        document.getElementById('TradeWise').innerHTML = 'IMC';
        document.getElementById('lblhostel').innerHTML = 'Are you interested to reside in hostel?';
        document.getElementById('lblchoice').innerHTML = 'Note: Do not click APPLY button, if you want to select more options.';

        document.getElementById('btnSave').value = 'APPLY';

        document.getElementById('Opt1').innerHTML = 'Yes';
        document.getElementById('Opt2').innerHTML = 'No';

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
        document.getElementById('Label7').innerHTML = 'i.';
        document.getElementById('Label11').innerHTML = 'j.';
        document.getElementById('Label13').innerHTML = 'k.';


        document.getElementById('Label19').innerHTML = '7.';
        document.getElementById('Label15').innerHTML = 'a.';
        document.getElementById('Label17').innerHTML = 'b.';
        document.getElementById('Label22').innerHTML = 'c.';
        document.getElementById('Label19').innerHTML = 'd.';


        document.getElementById('lblN8').innerHTML = '8.';
        document.getElementById('lblN7a').innerHTML = 'a.';
        document.getElementById('lblN7b').innerHTML = 'b.';
        document.getElementById('lblN7c').innerHTML = 'c.';
        document.getElementById('Label6').innerHTML = 'd.';
        document.getElementById('Label21').innerHTML = 'e.';

        document.getElementById('lblN61').innerHTML = '9.';
        document.getElementById('Label26').innerHTML = 'a.';
        document.getElementById('lblN61a').innerHTML = 'b.';
        document.getElementById('lblN61b').innerHTML = 'c.';
        document.getElementById('lblN61c').innerHTML = 'd.';



        document.getElementById('lblN9').innerHTML = '10.';
        document.getElementById('lblN9a').innerHTML = 'a.';
        document.getElementById('lblN9b').innerHTML = 'b.';

        document.getElementById('lblc').innerHTML = 'a.'
        document.getElementById('lbld').innerHTML = 'b.';
        document.getElementById('lblh').innerHTML = 'c.';
        document.getElementById('lbl9msg').innerHTML = " Note: If any subject name not in the given list , Please call us on 1800-345-6770 (Toll Free)"
        document.getElementById('4').value = 'Click to Add More Option';


        document.getElementById('lbloption').innerHTML = 'Option(s)/Choice(s) Details ';
        document.getElementById('Label27').innerHTML = ' Are you a orphan ?';
        document.getElementById('Label26').innerHTML = 'a.';
        document.getElementById('Orphan1').innerHTML = 'Yes';
        document.getElementById('Orphan2').innerHTML = 'No';

        if (document.getElementById('lblCardLabel') != null) {
            if (document.getElementById('lblCardLabel').innerHTML != null) {
                document.getElementById('lblCardLabel').innerHTML = 'Labour Card No';
            }
        }
    }
}
function ConfirmEnglishOriyaFont(value) {
    if (value == 2) {
        debugger;
        document.getElementById('common').innerHTML = 'ସାଧାରଣ ଆବେଦନ ଫର୍ମ';
        document.getElementById('adm').innerHTML = 'ସରକାରୀ ଆଇ.ଟି.ଆଇ ରେ ନାମ ଲେଖା ନିମନ୍ତେ(୨୦୧୮ -୧୯)';
        document.getElementById('department').innerHTML = 'କଳା ବିକାଶ ଏବଂ ବୈଷୟିକ ଶିକ୍ଷା, ଓଡିଶା ସରକାର ';


        //        
        //       if (!$('#rbtn8ThPass').is(':checked')){
        //            document.getElementById('lblBoardName').innerHTML = 'ପରୀକ୍ଷା ବୋର୍ଡ ନାମ';
        //        } else {
        //            document.getElementById('lblBoardName').innerHTML = 'ବିଦ୍ୟାଳୟ ର ନାମ';
        //        }

        document.getElementById('lblBoardName').innerHTML = 'ପରୀକ୍ଷା  ବୋର୍ଡ ନାମ';



        document.getElementById('lblYOP').innerHTML = 'ଉତ୍ତୀର୍ଣ୍ଣ ବର୍ଷ';
        document.getElementById('lblExType').innerHTML = 'କେଉଁ ପ୍ରକାର ପରୀକ୍ଷା';
        document.getElementById('lblRollNo').innerHTML = 'ରୋଲ ନମ୍ବର';

        document.getElementById('lbl10th').innerHTML = ' ଦଶମ ବୋର୍ଡ ବିବରଣୀ  ';
        document.getElementById('lblo').innerHTML = 'ଆଡମିଟ କାର୍ଡ ଅନୁଯାୟୀ';

        document.getElementById('flashingtext').innerHTML = ' ଦୟାକରି ଆପଣଙ୍କ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ , ଯଦି ଆପଣ ପରିବର୍ତ୍ତନ କରିବାକୁ ଚାହାଁନ୍ତି , ତାହାଲେ ପୂର୍ବବର୍ତ୍ତୀ କୁ ଯାଆନ୍ତୁ .';
        document.getElementById('lblApplicantName').innerHTML = 'ଦରଖାସ୍ତକାରିଙ୍କ ନାମ';
        document.getElementById('lblFname').innerHTML = 'ପିତା ଙ୍କ ନାମ';
        document.getElementById('lblMname').innerHTML = 'ମାତା ଙ୍କ ନାମ';
        document.getElementById('lblPD').innerHTML = 'ବ୍ୟକ୍ତିଗତ ସୂଚନା';
        document.getElementById('lblBloodGroup').innerHTML = 'ରକ୍ତର ଶ୍ରେଣୀ';
        document.getElementById('lblReligion').innerHTML = 'ଧର୍ମ';
        document.getElementById('lblGender').innerHTML = 'ଲିଙ୍ଗ';
        document.getElementById('lblDOB').innerHTML = 'ଜନ୍ମ ତାରିଖ';

        if (document.getElementById('Label25') != null) {
            if (document.getElementById('Label25').innerHTML != null) {
                document.getElementById('Label25').innerHTML = 'ସର୍ବ ଶେଷ ଶିକ୍ଷାଗତ ଯୋଗ୍ୟତା';
            }
        }




        document.getElementById('lbladd').innerHTML = 'ଘର ଠିକଣା';
        document.getElementById('lblState').innerHTML = 'ରାଜ୍ୟ';
        document.getElementById('lblDistrict').innerHTML = 'ଜିଲ୍ଲା';
        document.getElementById('lblBlock').innerHTML = 'ବ୍ଲକ / ୟୁଲବି';
        document.getElementById('lblPinNo').innerHTML = 'ପିନ୍ କୋଡ଼';
        document.getElementById('lbltelephone').innerHTML = 'ଟେଲିଫୋନ ନମ୍ବର';
        document.getElementById('lblMobileNo').innerHTML = 'ମୋବାଇଲ ନମ୍ବର';
        document.getElementById('lblEmail').innerHTML = 'ମେଲ୍ ଆଇଡି';
        document.getElementById('lblAreaCode').innerHTML = 'ଏରିଆ କୋଡ଼';

        document.getElementById('Label8').innerHTML = 'ବିକଲ୍ପ ମୋବାଇଲ ନମ୍ବର';
        document.getElementById('Label12').innerHTML = 'ଆଧାର କାର୍ଡ ନମ୍ବର';
        document.getElementById('Label15').innerHTML = 'ରାସନ କାର୍ଡ ନମ୍ବର';
        document.getElementById('Label22').innerHTML = 'ବ୍ୟାଙ୍କ  ସୂଚନା';
        document.getElementById('Label10').innerHTML = 'ବ୍ୟାଙ୍କର ନାମ';
        document.getElementById('Label17').innerHTML = 'ଶାଖାର ନାମ';
        document.getElementById('Label20').innerHTML = 'ଏକାଉଣ୍ଟ ନମ୍ବର  / ପାଶ ବହିର ନମ୍ବର';
        document.getElementById('Label18').innerHTML = 'ଆଇ ଏଫ ଏସ ସି କୋର୍ଡ';
        document.getElementById('lblReservation').innerHTML = 'ସଂରକ୍ଷଣ ସମ୍ପର୍କରେ ସୂଚନା';
        document.getElementById('ST').innerHTML = 'ତଫସିଲ ଭୁକ୍ତ ଜନଜାତି';
        document.getElementById('SC').innerHTML = 'ତଫସିଲ ଭୁକ୍ତ ଜାତି';
        document.getElementById('OBC').innerHTML = 'ଅନ୍ୟାନ୍ୟ ପଛୁଆବର୍ଗ ଜାତି';
        document.getElementById('GENERAL').innerHTML = 'ସାଧାରଣ';
        document.getElementById('PHOH').innerHTML = 'ଭିନ୍ନ କ୍ଷମ';
        document.getElementById('ESM').innerHTML = 'କ୍ରୀଡା';
        document.getElementById('SDP').innerHTML = 'ଗ୍ରୀନ କାର୍ଡ ଅଛିକି ?';
        document.getElementById('CoM').innerHTML = 'ସଂଖ୍ୟାଲଘୁ ସମ୍ପ୍ରଦାୟ';
        document.getElementById('Label2').innerHTML = 'ଅବସରପ୍ରାପ୍ତ ସୈନିକ';
        document.getElementById('Label4').innerHTML = 'ସ୍ବତନ୍ତ୍ର ଗୋଷ୍ଠି ବା ବର୍ଗର';
        document.getElementById('Label5').innerHTML = 'ପିତା ମାତା ନିର୍ମାଣ  ଶ୍ରମିକ  ଶ୍ରେଣୀର କି?';


        document.getElementById('lblCasteCert').innerHTML = 'ଜାତି ପ୍ରମାଣପତ୍ର ନମ୍ବର';
        document.getElementById('lblIncomeCert').innerHTML = 'ବୃତ୍ତି ପ୍ରମାଣପତ୍ର ନମ୍ବର';


        document.getElementById('lblIncomeDet').innerHTML = 'ପିତା ମାତାଙ୍କର ଆୟ ସଂମ୍ପର୍କରେ ସୂଚନା';
        document.getElementById('lblFocu').innerHTML = 'ପିତାଙ୍କର ବୃତ୍ତି';
        document.getElementById('lblMocu').innerHTML = 'ମାତାଙ୍କର ବୃତ୍ତି';
        document.getElementById('lblIncome').innerHTML = 'ପିତା ଓ ମାତାଙ୍କର  ମୋଟ ଆୟ';
        document.getElementById('lbl9').innerHTML = 'ମାର୍କର ବିବରଣୀ, ପରୀକ୍ଷାରେ ମିଳିଥିବା ଗ୍ରେଡ';
        document.getElementById('lbl9a').innerHTML = 'ପ୍ରତି ବିଷୟରେ ରଖିଥିବା ନମ୍ବର ଓ  ମିଳିଥିବା ଗ୍ରେଡ';


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
        document.getElementById('lbladdress').innerHTML = 'ଘର ନମ୍ବର., ସାହି/ଗ୍ରାମ ,ଡାକ କାର୍ଯ୍ୟାଳୟ,ପୋଲିସ୍ ଷ୍ଟେସନ୍ ନାମ ';
        document.getElementById('lblN6e').innerHTML = 'ଙ.';
        document.getElementById('lblN6f').innerHTML = 'ଚ.';
        document.getElementById('lblN6g').innerHTML = 'ଛ.';
        document.getElementById('lblN6h').innerHTML = 'ଜ.';
        document.getElementById('Label7').innerHTML = 'ଝ.';
        document.getElementById('Label11').innerHTML = 'ଞ.';
        document.getElementById('Label13').innerHTML = 'ଟ.';
        document.getElementById('Label21').innerHTML = '୭.';
        document.getElementById('Label9').innerHTML = 'କ.';
        document.getElementById('Label16').innerHTML = 'ଖ.';
        document.getElementById('Label19').innerHTML = 'ଗ.';
        document.getElementById('Label13').innerHTML = 'ଘ.';
        document.getElementById('lblN7').innerHTML = '୮.';
        document.getElementById('lblN7a').innerHTML = 'କ.';
        document.getElementById('lblN7b').innerHTML = 'ଖ.';
        document.getElementById('Label1').innerHTML = 'ଗ.';
        document.getElementById('Label3').innerHTML = 'ଘ.';

        document.getElementById('lblN61').innerHTML = '୯.';

        document.getElementById('lblN61a').innerHTML = 'କ.';
        document.getElementById('lblN61b').innerHTML = 'ଖ.';
        document.getElementById('lblN61c').innerHTML = 'ଗ.';
        document.getElementById('Label14').innerHTML = 'ଟ.';


        document.getElementById('lblN9').innerHTML = '୧୦.';
        document.getElementById('lblN9a').innerHTML = 'କ.';

        if (document.getElementById('lblN9b') != null) {
            if (document.getElementById('lblN9b').innerHTML != null) {
                document.getElementById('lblN9b').innerHTML = 'ଖ.';
            }
        }



        document.getElementById('btnSave').value = 'ନିଶ୍ଚିତ କରନ୍ତୁ  ';
        document.getElementById('btnBack').value = 'ସଂଶୋଧନ କରିବା ପାଇଁ ପୂର୍ବକୁ ଫେରନ୍ତୁ';

        document.getElementById('lbloption').innerHTML = 'ପସନ୍ଦ ବିବରଣୀ ';
        document.getElementById('lblN10').innerHTML = '୧୧.';


        if (document.getElementById('Label6') != null) {
            if (document.getElementById('Label6').innerHTML != null) {
                document.getElementById('Label6').innerHTML = 'ଶ୍ରମିକ ପରିଚୟ ପତ୍ର ନମ୍ବର';
            }
        }

        if (document.getElementById('lbl9b') != null) {
            if (document.getElementById('lbl9b').innerHTML != null) {
                document.getElementById('lbl9b').innerHTML = 'ଦଶମ ଶ୍ରେଣୀ  କମ୍ପାର୍ଟମେଣ୍ଟାଲରେ  ପାଶ୍ କରିଛନ୍ତି କି?';
            }
        }
        if (document.getElementById('lbl9i') != null) {
            if (document.getElementById('lbl9i').innerHTML != null) {
                document.getElementById('lbl9i').innerHTML = 'ଉପରେ ଦିଆ ଯାଇଥିବା ନମ୍ବର ଆପଣ ବାର୍ଷିକ ଏଚ ଏସ ଇ(ଓଡିଶା) ପରୀକ୍ଷା ରେ ରଖିଛନ୍ତି କି ?'
            }
        }

        //        if (document.getElementById('Label6') != null) {
        //            document.getElementById('Label6').innerHTML = 'ଶ୍ରମିକ ପରିଚୟ ପତ୍ର ନମ୍ବର';
        //        }
        //        if (document.getElementById('lbl9b').innerHTML != null) {
        //            document.getElementById('lbl9b').innerHTML = 'ଦଶମ ଶ୍ରେଣୀ  କମ୍ପାର୍ଟମେଣ୍ଟାଲରେ  ପାଶ୍ କରିଛନ୍ତି କି?';
        //        }
        //        if (document.getElementById('lbl9i').innerHTML != null) {
        //            document.getElementById('lbl9i').innerHTML = 'ଉପରେ ଦିଆ ଯାଇଥିବା ନମ୍ବର ଆପଣ ବାର୍ଷିକ ଏଚ ଏସ ଇ(ଓଡିଶା) ପରୀକ୍ଷା ରେ ରଖିଛନ୍ତି କି ?'
        //        }


    } else {

        //         document.getElementById('common').innerHTML = 'Common Application Form';
        //        document.getElementById('adm').innerHTML = ' for Admission to Government ITIs(2018-19)';
        //        document.getElementById('department').innerHTML = 'Skill Development and Techincal Education Department, Government of Odisha';
        //        document.getElementById('lblBoardName').innerHTML = 'Name of the Examination Board';
        //        document.getElementById('lblYOP').innerHTML = 'Year of Passing';
        //        document.getElementById('lblExamType').innerHTML = 'Exam Type';
        //        if (document.getElementById('lblQualification') != null) {
        //            document.getElementById('lblQualification').innerHTML = 'Qualification';
        //        }
        //        document.getElementById('lblRoll').innerHTML = 'Roll Number';
        //        document.getElementById('lbl10th').innerHTML = '10th Class Pass';
        //        document.getElementById('lblApplicantName').innerHTML = "Applicant's Name";
        //        document.getElementById('lblFname').innerHTML = "Father's Name";
        //        document.getElementById('lblMname').innerHTML = "Mother's Name";
        //        document.getElementById('lblPD').innerHTML = 'Personal Details';
        //        document.getElementById('lblBloodGroup').innerHTML = 'Blood Group';
        //        document.getElementById('lblReligion').innerHTML = 'Religion';
        //        document.getElementById('lblGender').innerHTML = 'Gender';
        //        document.getElementById('lblDOB').innerHTML = 'Date of Birth';
        //      //  document.getElementById('lblHighestQua').innerHTML = 'Highest Qualification ';
        //        document.getElementById('lbladdress').innerHTML = 'Residence Address';
        //        document.getElementById('lblState').innerHTML = 'State';
        //        document.getElementById('lblDistrict').innerHTML = 'District';
        //        document.getElementById('lblBlock').innerHTML = 'Block / ULB';
        //        document.getElementById('lbladdress').innerHTML = ' ';

        //        document.getElementById('lbladdress').innerHTML = 'House No., Street/Village, Post Office, Police Station Name ';
        //        document.getElementById('lblPinNo').innerHTML = 'PIN Code';
        //        document.getElementById('lbltelephone').innerHTML = 'Telephone No.';
        //        document.getElementById('lblMobileNo').innerHTML = 'Mobile No.';
        //        document.getElementById('lblEmail').innerHTML = 'e-Mail';
        //        document.getElementById('lblAreaCode').innerHTML = 'Area Code';
        //        //document.getElementById('lblphone').innerHTML = 'Phone No';
        //        document.getElementById('Label8').innerHTML = 'Alternate Mobile No';
        //        document.getElementById('Label12').innerHTML = 'Aadhar Card No.';
        //        document.getElementById('Label14').innerHTML = 'k.';

        //        document.getElementById('Label22').innerHTML = 'Bank Details';
        //        document.getElementById('Label16').innerHTML = 'b.';
        //        document.getElementById('Label18').innerHTML = 'Branch Name';
        //        document.getElementById('Label20').innerHTML = 'Account No';
        //        document.getElementById('Label18').innerHTML = 'IFSC Code';

        //        document.getElementById('lblReservation').innerHTML = 'Reservation Details';
        //        document.getElementById('ST').innerHTML = 'Schedule Tribe (ST)';
        //        document.getElementById('SC').innerHTML = 'Schedule Caste (SC)';
        //        document.getElementById('OBC').innerHTML = 'Other Backward Class (OBC)';
        //        document.getElementById('GENERAL').innerHTML = 'General';
        //        document.getElementById('PHOH').innerHTML = 'People with Disability (PwD)';
        //        document.getElementById('ESM').innerHTML = 'Sports';
        ////        document.getElementById('spangreencard').innerHTML = 'Green Card';
        ////        document.getElementById('spanMinority').innerHTML = 'Minority';
        //        document.getElementById('SDP').innerHTML = 'Ex-Service Man (ESM)';
        ////        document.getElementById('NoN').innerHTML = 'None';
        //        document.getElementById('Label24').innerHTML = 'Special Community';
        //        document.getElementById('Label25').innerHTML = ' Whether Parent belongs to building and Construction worker';

        //     

        ////        document.getElementById('CompN').innerHTML = 'No';
        ////        document.getElementById('CompY').innerHTML = 'Yes';
        ////        document.getElementById('rbtnBuildingN').innerHTML = 'No';
        ////        document.getElementById('rbtnBuildingY').innerHTML = 'Yes';



        //        document.getElementById('lblIncomeDet').innerHTML = 'Income Details of Parents';
        //        document.getElementById('lblFocu').innerHTML = 'Father' + 's Occupation';
        //        document.getElementById('lblMocu').innerHTML = 'Mother' + 's Occupation';
        //        document.getElementById('lblIncome').innerHTML = 'Annual Income of the Parents (Together) in Rs.';


        //       // document.getElementById('dv9').innerHTML = "Note: the below field will show grade point, if you select CBSE & 2010 or later as year of passing";
        //        document.getElementById('lbl9').innerHTML = 'Details of Mark/Grade Secured in Examination';
        //        document.getElementById('lbl9a').innerHTML = ' Mark/Grade secured in each subject';
        //        document.getElementById('lbl9b').innerHTML = 'Have you passed 10th Board Exam Compartmentally ?';

        //        //document.getElementById('Caption').innerHTML = 'Choose your 1st Option';
        //       //document.getElementById('Institutewise').innerHTML = 'Institute wise';
        //       //document.getElementById('TradeWise').innerHTML = 'IMC';
        //       //        document.getElementById('Label2').innerHTML = 'Trade';
        //       //        document.getElementById('lblStream').innerHTML = 'Trade';
        //        document.getElementById('lblcolname').innerHTML = 'Institute';
        //        document.getElementById('lbl9i').innerHTML = 'Have you secured above mark in your Annual HSE(O) examination ?';
        //        document.getElementById('lblhostel').innerHTML = 'Are you interested to reside in hostel?';
        //        document.getElementById('lblchoice').innerHTML = 'Note: Do not click APPLY button, if you want to select more options.';
        //        document.getElementById('lbloption').innerHTML = 'Option(s)/Choice(s) Details ';
        //        document.getElementById('btnSave').value = 'APPLY';

        //        document.getElementById('Opt1').innerHTML = 'Yes';
        //        document.getElementById('Opt2').innerHTML = 'No';

        //        document.getElementById('lblN1').innerHTML = '1.';
        //        document.getElementById('lblN2').innerHTML = '2.';
        //        document.getElementById('lblN3').innerHTML = '3.';
        //        document.getElementById('lblN4').innerHTML = '4.';
        //        document.getElementById('lblN5').innerHTML = '5.';
        //        document.getElementById('lblN6').innerHTML = '6.';

        //        document.getElementById('lblN6a').innerHTML = 'a.';
        //        document.getElementById('lblN6b').innerHTML = 'b.';
        //        document.getElementById('lblN6c').innerHTML = 'c.';
        //        document.getElementById('lblN6d').innerHTML = 'd.';
        //        document.getElementById('lblN6e').innerHTML = 'e.';
        //        document.getElementById('lblN6f').innerHTML = 'f.';
        //        document.getElementById('lblN6g').innerHTML = 'g.';
        //        document.getElementById('lblN6h').innerHTML = 'h.';
        //        document.getElementById('Label7').innerHTML = 'i.';
        //        document.getElementById('Label11').innerHTML = 'j.';
        //        document.getElementById('Label13').innerHTML = 'k.';


        //        document.getElementById('Label19').innerHTML = '7.';
        //        document.getElementById('Label15').innerHTML = 'a.';
        //        document.getElementById('Label17').innerHTML = 'b.';
        //        document.getElementById('Label19').innerHTML = 'd.';
        //        document.getElementById('lblN8').innerHTML = '8.';
        //        document.getElementById('lblN7a').innerHTML = 'a.';
        //        document.getElementById('lblN7b').innerHTML = 'b.';
        //        document.getElementById('lblN7c').innerHTML = 'c.';
        //        document.getElementById('Label6').innerHTML = 'd.';
        //        document.getElementById('Label21').innerHTML = 'e.';
        //        document.getElementById('lblN61').innerHTML = '9.';
        //        document.getElementById('lblN61a').innerHTML = 'a.';
        //        document.getElementById('lblN61b').innerHTML = 'b.';
        //        document.getElementById('lblN61c').innerHTML = 'c.';
        //        document.getElementById('lblN9').innerHTML = '10.';
        //        document.getElementById('lblN9a').innerHTML = 'a.';
        //        document.getElementById('lblN9b').innerHTML = 'b.';
        //        document.getElementById('lblc').innerHTML = 'a.'
        //        document.getElementById('lbld').innerHTML = 'b.';
        //        document.getElementById('lblh').innerHTML = 'c.';
        //        document.getElementById('lbl9msg').innerHTML = " Note: If any subject name not in the given list , Please call us on 1800-345-6770 (Toll Free)"
        //        document.getElementById('Label1').innerHTML = 'a.';
        //        document.getElementById('Label3').innerHTML = 'b.';
        //        document.getElementById('lblCardLabel').innerHTML = 'Labour Card No';

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
            //            document.getElementById('lblStream').innerHTML = 'Trade';
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

    //    if ($('#rbtn10thFail').is(':checked')) {
    //        var curr_year = parseInt(2017);
    //        var PreYear = parseInt(1976);
    //    } else {
    var curr_year = parseInt(2018);
    var PreYear = parseInt(1977);
    //    }


    var year = parseInt(document.getElementById('txtYOP').value);
    var strYear = document.getElementById('txtYOP').value;

    if (strYear != '') {
        if (year > curr_year || year < PreYear) {
            alert('Please enter your ' + $("#lblYearofPassing").html() + ' between  ' + PreYear + ' - ' + curr_year);
            document.getElementById('txtYOP').value = '';
            document.getElementById('txtYOP').focus();
            return false;
        }
    }
}
function VocationalStreamToolTip() {
}
