// JScript File
//Created By :- Satyajit Rath
//Created On :- 04 -January-2018


var xmlHttp = null;
var ctlTofill;
var TOK;
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
var PassHons;
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
var randomNo;
var PassHonsText;
var valu = 'Y';
//======================FUNCTION TO LOAD DISTRICT======================
function loadXMLDOC() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}
///=======For Upload Images==================///////////
function OpenUpload() {
    window.open('UploadPopUpDeg.aspx', 'CollegeCopy', 'left=400,top=300,width=400,height=350,menubar=0,resizable=0,scrollbars=0,addressbar=0');
}
//====================Load District =============//    
function loadDistricts() {
   
    $.ajax({
        type: 'POST',
        url: 'CAFDEG.aspx/LoadDistrict',
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
        }
    });

    
    
}




//====================Load Colleges =============// 
function loadColleges() {

    $('#ddlCollege option').each(function (j, option) { $(option).remove(); });
    var inVal = parseInt(document.getElementById('ddlCollegeDistrict').options[document.getElementById('ddlCollegeDistrict').selectedIndex].value);
    var intGender;

    if ($("#rbtOthersFinance").is(":checked")) {
        collegeType = 0;
    }
    if ($("#rbtSanskrit").is(":checked")) {
        collegeType = 7;
    }
    intGender = $("#ddlGender").val();
    $.ajax({
        type: 'POST',
        url: 'CAFDeg.aspx/fillDistWiseColg',
        data: "{'intDistId':'" + inVal + "','intCType':'" + collegeType + "','intGender':'" + intGender + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlCollege').append(newOption);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption = $('<option value="' + value.IntID + '">' + value.StrName + '</option>');
                $('#ddlCollege').append(newOption);
            });
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
        }
    });
}

function loadCutOffMark() {
 

    var xmlColls = null;
    $.ajax({
        type: 'POST',
        url: 'CAFDeg.aspx/loadCutMark',
        contentType: "application/json; charset=utf-8",
        data: "{'CollegeId':'" + $("#ddlCollege").val() + "','StreamId':'" + $("#ddlStream").val() + "'}",
        success: function (response) {
            BindCutoffData(response.d, $("#ddlStream").val());
        },
        dataType: 'json'
    });
}


function GetEligibilityValue(VchRollCode,VchRollNo,intMaxMarks,intAggrMarks,intJunStream,intHonSubject,intHonStream,intBSEB,intYear) {
//    var VchRollCode = '4305', VchRollNo = '30001', intMaxMarks = 0, intAggrMarks = 0, intJunStream = 1, intHonSubject = 54, intHonStream = 3, intBSEB = 1, intYear = 2010;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "CAFDEG.aspx/GetStudentEligibility_Deg",
        data: "{'VchRollCode':'" + VchRollCode + "','VchRollNo':'" + VchRollNo + "', 'intMaxMarks':'" + intMaxMarks + "','intAggrMarks':'" + intAggrMarks + "','intJunStream':'" + intJunStream + "', 'intHonSubject':'" + intHonSubject + "', 'intHonStream':'" + intHonStream + "','intBSEB':'" + intBSEB + "','intYear':'" + intYear + "'}",
        success: function (Result) {
            if (Result.d != null && Result.d != undefined) {
                alert(Result.d[0].bit_Eligiblity);
                alert(Result.d[0].message);
            }
            else {
                alert("No data found");
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

//BIND CUTOFF MARK DATA
function BindCutoffData(data, strmid) {
  
    if (document.getElementById('rbtVocational').checked) {
        //VocationalStreamToolTip();
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
        });
    }
}


function clearMarks() {

    $('#txtMath').text("");
    $('#txtEnglish').text("");
    $('#txtScience').text("");
    $('#txtMathematics').text("");
    $('#txtBiology').text("");
    $('#txtTotMark').text("");
    $('#txtMaxMark').text("");

}
//====================Fill Stream =============

function UncheckStreamPref() {
    var collgId = parseInt(document.getElementById('ddlCollege').options[document.getElementById('ddlCollege').selectedIndex].value);
    var streamId = parseInt(document.getElementById('ddlStream').options[document.getElementById('ddlStream').selectedIndex].value);
    if ((collgId == 198) && (streamId == 3)) {
        document.getElementById('rbtPass').disabled = false;
    }
}
function fillStream(ctlDdlVal, CtlRbtnVal) {

    $('#ddlStream option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    var Upsval;
    if ((CtlRbtnVal.checked) && (parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value) == 24) && document.getElementById('rbtOthersFinance').checked) {
        Upsval = 1;
    }
    else {
        Upsval = 2;
    }
    $.ajax({
        type: 'POST',
        url: 'CAFDeg.aspx/FillStream',
        data: "{'intCollegeID':'" + inVal + "','UpsStream':'" + Upsval + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
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
        }
    });
}
//====================Fill Elective Subject =============//

function fillfElective(ctlCollegeVal, ctlStreamVal) {

    $('#ddlELE1 option').each(function (j, option) { $(option).remove(); });
    var CVal = ctlCollegeVal.value;
    var Sval = ctlStreamVal.value;
    $.ajax({

        type: 'POST',
        url: 'CAFDEG.aspx/FillElectives',
        data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlELE1').append(newOption);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption = $('<option value="' + value.int_SubjectID + '">' + value.vch_SubjectName + '</option>');
                $('#ddlELE1').append(newOption);
            });
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
        }
    });
}
function fillfElectiveAuto(ctlCollegeVal, ctlStreamVal) {
    if (document.getElementById('rbtHonours').checked) {
        $('#ddlELE1 option').each(function (j, option) { $(option).remove(); });
        var CVal = ctlCollegeVal.value;
        var Sval = ctlStreamVal.value;
        $.ajax({
            type: 'POST',
            url: 'CAFDEG.aspx/FillElectives',
            data: "{'intCollegeID':'" + CVal + "','intStreamId':'" + Sval + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (response) {
                var newOption = $('<option value="0">--SELECT--</option>');
                $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                    var newOption = $('<option value="' + value.int_SubjectID + '">' + value.vch_SubjectName + '</option>');
                    $('#ddlELE1').append(newOption);
                });
            },
            error: function (response) {
                var msg = jQuery.parseJSON(response.responseText);
                console.log("Message: " + msg.Message);
                console.log("StackTrace: " + msg.StackTrace);
                console.log("ExceptionType: " + msg.ExceptionType);
            }
        });
    }
}

//====================Fill District =============//
function fillDist(ctlDdlVal) {

    $('#ddlCDist option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    $.ajax({
        type: 'POST',
        url: 'CAFDeg.aspx/fillDistrict',
        data: "{'intStateId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlCDist').append(newOption);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption = $('<option value="' + value.int_DistrictID + '">' + value.vch_DistrictName + '</option>');
                $('#ddlCDist').append(newOption);
            });
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
        }
    });
}
//====================Fill Block =============
function fillBlock(ctlDdlVal) {
    $('#ddlCBlock option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    $.ajax({
        type: 'POST',
        url: 'CAFDeg.aspx/fillBlock',
        data: "{'intDistId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlCBlock').append(newOption);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption = $('<option value="' + value.int_BlockID + '">' + value.vch_BlockName + '</option>');
                $('#ddlCBlock').append(newOption);
            });
        },
        error: function (response) {
            var msg = jQuery.parseJSON(response.responseText);
            console.log("Message: " + msg.Message);
            console.log("StackTrace: " + msg.StackTrace);
            console.log("ExceptionType: " + msg.ExceptionType);
        }
    });
}


function ColVacancy() {
 
    var intColId = parseInt(document.getElementById('ddlCollege').options[document.getElementById('ddlCollege').selectedIndex].value);
    var intStrid = parseInt(document.getElementById('ddlStream').options[document.getElementById('ddlStream').selectedIndex].value);
    var intSubid = parseInt(document.getElementById('ddlELE1').options[document.getElementById('ddlELE1').selectedIndex].value);
    $.ajax({
        type: 'POST',
        url: 'CAFDeg.aspx/vacancyColg',
        data: "{'intColId':'" + intColId + "','intStrid':'" + intStrid + "','intSubid':'" + intSubid + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var lstdtl = eval('(' + response.d + ')');
            //alert(lstdtl[0].Vacancy);
            if (lstdtl[0].Vacancy == 0) {
                alert("There is No Vacancy of this college !");
                clearDDL();
            }
        },
        dataType: 'json'
    });
}


function IsHonours() {
    debugger;
//    var intColId = parseInt(document.getElementById('ddlCollege').options[document.getElementById('ddlCollege').selectedIndex].value);
    var intPrvStream = 0;
    if (document.getElementById('rbtArts').checked == true) {
        intPrvStream = 1;
    }
    if (document.getElementById('rbtScience').checked == true) {
        intPrvStream = 2;
    }
    if (document.getElementById('rbtCommerce').checked == true) {
        intPrvStream = 3;
    }
    if (document.getElementById('rbtVocational').checked == true) {
        intPrvStream = 4;
    }
    if (document.getElementById('rbtDiploma').checked == true) {
        intPrvStream = 5;
    }
    if (document.getElementById('rbtUpashastri').checked == true) {
        intPrvStream = 6;
    }
    if (document.getElementById('rbtMaulvi').checked == true) {
        intPrvStream = 7;
    }

    var intStrid = parseInt(document.getElementById('ddlStream').options[document.getElementById('ddlStream').selectedIndex].value);
    var intSubid = parseInt(document.getElementById('ddlELE1').options[document.getElementById('ddlELE1').selectedIndex].value);
    var subjectName = document.getElementById('ddlELE1').options[document.getElementById('ddlELE1').selectedIndex].text;
    var yop = parseInt($('#ddlYOP').val());
    var rollno = $('#txtBoardRoll').val();  
    var rollCode = $('#txtRollCode').val();
    var totalmark = parseInt($('#txtTotMark').val());
    var maxmark = parseInt($('#txtMaxMark').val());

    $.ajax({
        type: 'POST',
        url: 'CAFDeg.aspx/IsHonoursSubject',
        data: "{'intCurStream':'" + intStrid + "', 'intSubid':'" + intSubid + "', 'intYOP':'" + yop + "', 'strRollNo':'" + rollno + "', 'strRollCode':'" + rollCode + "', 'intPrevStream':'" + intPrvStream + "', 'intTotalMark':'" + totalmark + "', 'intMaxMark':'" + maxmark + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var lstdtl = JSON.parse(JSON.stringify(response.d));         
            if (lstdtl[0].strId == 2) {
                alert("You can not apply for subject " + subjectName + " as Honours because your secured mark less than 45% in " + subjectName + " subject in intermediate.");
                clearDDL();
            }
            else if (lstdtl[0].strId == 3) {
                alert("You can not apply for subject " + subjectName + " as Honours  because your aggregate mark less than 45%  in intermediate.");
                clearDDL();
            }
            else if (lstdtl[0].strId == 4) {
                alert("You can not apply for subject " + subjectName + " as Honours because your aggregate mark less than 50% in intermediate.");
                clearDDL();
            }
            else if (lstdtl[0].strId == 5) {
                alert("You are not eligible to apply for [Subject name] subject.");
                clearDDL();
            }

        },
        dataType: 'json'
    });
     
}





function CheckDuplicateEmail() {

    var Email = document.getElementById('txtCEmail').value;
    $.ajax({
        type: 'POST',
        url: 'CAFDEG.aspx/ChkEmailStatus',
        data: "{'vchEmail':'" + Email + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
            });
            var lstdtl = JSON.parse(JSON.stringify(response.d));
         
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


function CheckMobNo() {
    
    var MobNo = document.getElementById('txtCMobNo').value;
    $.ajax({
        type: 'POST',
        url: 'CAFDEG.aspx/ChkMobStatus',
        data: "{'vchMobNo':'" + MobNo + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
            });
            var lstdtl = JSON.parse(JSON.stringify(response.d));
                     
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



//=================Fill CHSE Mark on roll number unchange ===============
var examtype = 0; var NAME1; var StreamName1; var MIL1; var ENGLISH1; var CHEMISTRY1; var BIOLOGY1; var MATH1; var TOT1; var MAXTOTAL1; var FNAME1; var MNAME1;
var CAT1; var GENDER1; var SCHOOL1; var DISTRICT1; var DOB1;
function CHSEMark() {

    var inVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    var yr = parseInt($('#ddlYOP').val());
    var roll = $('#txtBoardRoll').val();  //document.getElementById('txtBoardRoll').value
    var rollCode = $('#txtRollCode').val();
    
    if (parseInt(inVal) == 35) {
        document.getElementById('tdRollCdH').style.display = "";
        document.getElementById('tdRollCdF').style.display = "";
        $('#txtdist').hide();
        $('#ddlinstDistrict').show();
       
    }
    else {

        document.getElementById('tdRollCdH').style.display = "none";
        document.getElementById('tdRollCdF').style.display = "none";
        $('#txtdist').show();
        $('#ddlinstDistrict').hide();
 
    }

   // if (document.getElementById('rbtnAnnual').checked == true && parseInt(inVal) == 35 && (yr >= 2013) && roll != '') {
    if ( parseInt(inVal) == 35 && (yr >= 2008) && roll != '') {
        $.ajax({
            type: 'POST',
            url: 'CAFDeg.aspx/fillCHSEMark',
            data: "{'vchRollNo':'" + roll + "','intYear':'" + yr + "','RollCode':'" + rollCode + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (response) {
                var lstdtl;

                $.each(response, function (index, value) {
                    lstdtl = value[0].vch_StreamName == '' ? "" : value[0].vch_StreamName;
                    NAME1 = value[0].NAME == '' ? "" : value[0].NAME;
                    FNAME1 = value[0].FNAME == '' ? " " : value[0].FNAME;
                    MNAME1 = value[0].MNAME == '' ? " " : value[0].MNAME;
                    CAT1 = value[0].CAT == '' ? " " : value[0].MNAME;
                    GENDER1 = value[0].GENDER;
                    SCHOOL1 = value[0].SCHOOL == '' ? " " : value[0].SCHOOL;
                    DISTRICT1 = value[0].DISTRICT == '' ? " " : value[0].DISTRICT;
                    MIL1 = value[0].MIL;
                    ENGLISH1 = value[0].ENGLISH;
                    CHEMISTRY1 = value[0].CHEMISTRY;
                    BIOLOGY1 = value[0].BIOLOGY;
                    MATH1 = value[0].MATH;
                    TOT1 = value[0].TOT;
                    MAXTOTAL1 = value[0].MAXTOTAL;

                });

                $("#rbtArts").checked = false;
                $("#rbtScience").checked = false;
                $("#rbtDiploma").checked = false;
                $("#rbtCommerce").checked = false;
                $("#rbtVocational").checked = false;
                $("#rbtUpashastri").checked = false;
                $("#rbtMaulvi").checked = false;

                if (lstdtl !== 'undefined') {
                    document.getElementById('trCouncilMark').style.display = "";
                    //     document.getElementById('trMarkVerify').style.display = "";
                    if (lstdtl == "Arts") {
                        document.getElementById('rbtArts').checked = true;
                        //   $("#rbtArts").prop("checked", true);
                        //   $("#rbtArts").checked = true;
                        $("#rbtArts").attr('disabled', false);
                        $("#rbtScience").checked = false;
                        $("#rbtScience").attr('disabled', true);
                        $("#rbtDiploma").checked = false;
                        $("#rbtDiploma").attr('disabled', true);
                        $("#rbtCommerce").checked = false;
                        $("#rbtCommerce").attr('disabled', true);
                        $("#rbtVocational").checked = false;
                        $("#rbtVocational").attr('disabled', true);
                        $("#rbtUpashastri").checked = false;
                        $("#rbtUpashastri").attr('disabled', true);
                        $("#rbtMaulvi").checked = false;
                        $("#rbtMaulvi").attr('disabled', true);
                        $('#tdChemistryHCpy').hide();
                        $('#tdChemistryBCpy').hide();
                        $('#tdMathHCpy').hide();
                        $('#tdMathBCpy').hide();
                        $('#tdBiologyHCpy').hide();
                        $('#tdBiologyBCpy').hide();
                        $("#lblCHSEStream").html('Arts');

                        $('#tdChemistryH').hide();
                        $('#tdChemistryB').hide();
                        $('#tdMathH').hide();
                        $('#tdMathB').hide();
                        $('#tdBiologyH').hide();
                        $('#tdBiologyB').hide();

                        examtype = 1;

                    }

                    else if (lstdtl == "Science") {

                        $("#rbtArts").checked = false;
                        $("#rbtArts").attr('disabled', true);
                        // $("#rbtScience").checked = true;
                        document.getElementById('rbtScience').checked = true;
                        $("#rbtScience").attr('disabled', false);
                        $("#rbtDiploma").checked = false;
                        $("#rbtDiploma").attr('disabled', true);
                        $("#rbtCommerce").checked = false;
                        $("#rbtCommerce").attr('disabled', true);
                        $("#rbtVocational").checked = false;
                        $("#rbtVocational").attr('disabled', true);
                        $('#tdChemistryHCpy').show();
                        $('#tdChemistryBCpy').show();
                        $('#tdMathHCpy').show();
                        $('#tdMathBCpy').show();
                        $('#tdBiologyHCpy').show();
                        $('#tdBiologyBCpy').show();
                        $("#lblCHSEStream").html('Science');
                        examtype = 2;
                    }
                    else if (lstdtl == "Commerce") {

                        $("#rbtArts").checked = false;
                        $("#rbtArts").attr('disabled', true);
                        $("#rbtScience").checked = false;
                        $("#rbtScience").attr('disabled', true);
                        $("#rbtDiploma").checked = false;
                        $("#rbtDiploma").attr('disabled', true);
                        // $("#rbtCommerce").checked = true;
                        document.getElementById('rbtCommerce').checked = true;
                        $("#rbtCommerce").attr('disabled', false);
                        $("#rbtVocational").checked = false;
                        $("#rbtVocational").attr('disabled', true);
                        $('#tdChemistryHCpy').hide();
                        $('#tdChemistryBCpy').hide();
                        $('#tdMathHCpy').hide();
                        $('#tdMathBCpy').hide();
                        $('#tdBiologyHCpy').hide();
                        $('#tdBiologyBCpy').hide();
                        $("#lblCHSEStream").html('Commerce');

                        $('#tdChemistryH').hide();
                        $('#tdChemistryB').hide();
                        $('#tdMathH').hide();
                        $('#tdMathB').hide();
                        $('#tdBiologyH').hide();
                        $('#tdBiologyB').hide();
                        examtype = 3;
                    }
                    else if (lstdtl == "Vocational") {

                        $("#rbtArts").checked = false;
                        $("#rbtArts").attr('disabled', true);
                        $("#rbtScience").checked = false;
                        $("#rbtScience").attr('disabled', true);
                        $("#rbtDiploma").checked = false;
                        $("#rbtDiploma").attr('disabled', true);
                        $("#rbtCommerce").checked = false;
                        $("#rbtCommerce").attr('disabled', true);
                        //$("#rbtVocational").checked = true;
                        document.getElementById('rbtVocational').checked = true;
                        $("#rbtVocational").attr('disabled', false);

                        $('#tdChemistryHCpy').show();
                        $('#tdChemistryBCpy').show();
                        $('#tdMathHCpy').show();
                        $('#tdMathBCpy').show();
                        $('#tdBiologyHCpy').show();
                        $('#tdBiologyBCpy').show();
                        $("#lblCHSEStream").html('Vocational');
                        examtype = 4;
                    }
                    else {

                        $("#rbtArts").checked = false;
                        $("#rbtArts").attr('disabled', true);
                        $("#rbtScience").checked = false;
                        $("#rbtScience").attr('disabled', true);
                        $("#rbtDiploma").checked = false;
                        $("#rbtDiploma").attr('disabled', true);
                        $("#rbtCommerce").checked = false;
                        $("#rbtCommerce").attr('disabled', true);
                        $("#rbtVocational").checked = false;
                        $("#rbtVocational").attr('disabled', true);

                        $('#tdChemistryHCpy').show();
                        $('#tdChemistryBCpy').show();
                        $('#tdMathHCpy').show();
                        $('#tdMathBCpy').show();
                        $('#tdBiologyHCpy').show();
                        $('#tdBiologyBCpy').show();

                    }
                    $("#rbtMarkVerifiedYCpy").checked = true;
                    $("#rbtMarkVerifiedNCpy").checked = false;

                    $('#txtApplName').val(NAME1);
                    $('#txtFatherName').val(FNAME1);
                    $('#txtMotherName').val(MNAME1);
                    $('#ddlGender').val(GENDER1);

                    //                    var str = DOB1;
                    //                    var res = str.split('/');
                    //                    $("#ddlDay").val(parseInt(res[0]));
                    //                    $("#ddlMonth").val(parseInt(res[1]));
                    //                    $("#ddlYear").val(parseInt(res[2]));

                    $('#txtschname').val(SCHOOL1);
                    $('#ddlinstDistrict').val(DISTRICT1);

                    //                    if (DISTRICT1 > 0) {
                    //                        $('#txtdist').hide();
                    //                        $('#ddlinstDistrict').show();
                    //                    }
                    //                    else {
                    //                        $('#ddlinstDistrict').hide();
                    //                        $('#txtdist').show();
                    //                    }
                    $("#txtMath").val(MIL1);
                    $("#txtEnglish").val(ENGLISH1);
                    $("#txtScience").val(CHEMISTRY1);
                    $("#txtMathematics").val(MATH1);
                    $("#txtBiology").val(BIOLOGY1);
                    $("#txtTotMark").val(TOT1);
                    $("#txtMaxMark").val(MAXTOTAL1);

                    $("#lblMILCpy").html(MIL1);
                    $("#lblEnglishCpy").html(ENGLISH1);
                    $("#lblCheCpy").html(CHEMISTRY1);
                    $("#lblMathCpy").html(MATH1);
                    $("#lblBioCpy").html(BIOLOGY1);
                    $("#lblTotMarkCpy").html(TOT1);
                    $("#lblMaxMarkCpy").html(MAXTOTAL1);

                    if ($("#txtMath").val() == '' || $("#txtMath").val() == ' ' || $("#txtMath").val() == '0') {

                        $("#txtMath").attr("readonly", false);
                        $("#txtMath").val('0');
                    }
                    else {
                        $("#txtMath").attr("readonly", "readonly");
                    }

                    if ($("#txtEnglish").val() == '' || $("#txtEnglish").val() == ' ' || $("#txtEnglish").val() == '0') {
                        $("#txtEnglish").attr("readonly", false);
                        $("#txtEnglish").val('0');
                    }
                    else {
                        $("#txtEnglish").attr("readonly", "readonly");
                    }

                    if ($("#txtScience").val() == '' || $("#txtScience").val() == ' ' || $("#txtScience").val() == '0') {
                        $("#txtScience").attr("readonly", false);
                        $("#txtScience").val('0');
                    }
                    else {
                        $("#txtScience").attr("readonly", "readonly");
                    }

                    if ($("#txtMathematics").val() == '' || $("#txtMathematics").val() == ' ' || $("#txtMathematics").val() == '0') {
                        $("#txtMathematics").attr("readonly", false);
                        $("#txtMathematics").val('0');
                    }
                    else {
                        $("#txtMathematics").attr("readonly", "readonly");
                    }

                    if ($("#txtBiology").val() == '' || $("#txtBiology").val() == ' ' || $("#txtBiology").val() == '0') {
                        $("#txtBiology").attr("readonly", false);
                        $("#txtBiology").val('0');
                    }
                    else {
                        $("#txtBiology").attr("readonly", "readonly");
                    }

                    if ($("#txtTotMark").val() == '' || $("#txtTotMark").val() == ' ' || $("#txtTotMark").val() == '0') {
                        $("#txtTotMark").attr("readonly", false);
                        $("#txtTotMark").val('0');
                    }
                    else {
                        $("#txtTotMark").attr("readonly", "readonly");
                    }

                    if ($("#txtMaxMark").val() == '' || $("#txtMaxMark").val() == ' ' || $("#txtMaxMark").val() == '0') {
                        $("#txtMaxMark").attr("readonly", false);
                       
                    }
                    else {
                        $("#txtMaxMark").attr("readonly", "readonly");
                    }

                    $("#hdnMarkVerification").val("1");
                    $("#rbtMarkVerifiedYCpy").checked = true;
                    $("#rbtMarkVerifiedNCpy").checked = false;

                    if ($("#txtApplName").val() == ' ' || $("#txtApplName").val() == '' || $("#txtApplName").val() == 'NA') {
                        $("#txtApplName").attr("readonly", false);
                    }
                    else {
                        $("#txtApplName").attr("readonly", "readonly");
                    }

                    if ($("#txtFatherName").val() == ' ' || $("#txtFatherName").val() == '' || $("#txtFatherName").val() == 'NA') {
                        $("#txtFatherName").attr("readonly", false);
                    }
                    else {
                        $("#txtFatherName").attr("readonly", "readonly");
                    }

                    if ($("#txtMotherName").val() == ' ' || $("#txtMotherName").val() == '' || $("#txtMotherName").val() == 'NA') {
                        $("#txtMotherName").attr("readonly", false);
                    }
                    else {
                        $("#txtMotherName").attr("readonly", "readonly");
                    }

                    if ($("#txtschname").val() != ' ' || $("#txtschname").val() != '') {
                        $("#txtschname").attr("readonly", false);
                    }
                    else {
                        $("#txtschname").attr("readonly", "readonly");
                    }
                }
                else {
                    $("#txtApplName").html('');
                    $("#txtMath").html('0');
                    $("#txtEnglish").html('');
                    $("#txtScience").html('');
                    $("#txtMathematics").html('');
                    $("#txtBiology").html('');
                    $("#txtTotMark").html('');
                    $("#txtMaxMark").html('');

                    $("#txtMath").attr("readonly", false);
                    $("#txtEnglish").attr("readonly", false);
                    $("#txtScience").attr("readonly", false);
                    $("#txtMathematics").attr("readonly", false);
                    $("#txtBiology").attr("readonly", false);
                    $("#txtTotMark").attr("readonly", false);
                    $("#txtMaxMark").attr("readonly", false);

                    $("#txtApplName").attr("readonly", false);
                    $("#txtFatherName").attr("readonly", false);
                    $("#txtMotherName").attr("readonly", false);
                    $("#txtschname").attr("readonly", false);

                    var boardid = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
                    if (boardid == 65 || boardid == 72) {

                        $("#rbtDiploma").checked = true;
                        $("#rbtDiploma").disabled = false;
                        $("#rbtArts").disabled = true;
                        $("#rbtDiploma").disabled = true;
                        $("#rbtCommerce").disabled = true;
                        $("#rbtVocational").disabled = true;

                    }
                    else {
                        $("#rbtDiploma").disabled = true;
                        $("#rbtDiploma").checked = false;

                    }
                    $("#lblMILCpy").html('');
                    $("#lblEnglishCpy").html('');
                    $("#lblCheCpy").html('');
                    $("#lblMathCpy").html('');
                    $("#lblBioCpy").html('');
                    $("#lblTotMarkCpy").html('');
                    $("#lblMaxMarkCpy").html('');

                    $('#trCouncilMark').hide();
                    $('#trMarkVerify').hide();
                    $('#hdnMarkVerification').val("0");

                    //  document.getElementById('hidCHSEMark').value = "0";
                }

            },
            failure: function (response) {
                //  document.getElementById('hidCHSEMark').value = "0";
                alert(response.d);
            }

        });


    }

    else {
   
        document.getElementById('trCouncilMark').style.display = "none";
        document.getElementById('hdnMarkVerification').value = "0";
        document.getElementById('trMarkVerify').style.display = "none";
        $("#txtApplName").html("");
        $("#txtMath").html("");
        $("#txtEnglish").html("");
        $("#txtScience").html("");
        $("#txtMathematics").html("");
        $("#txtBiology").html("");
        $("#txtTotMark").html("");
        $("#txtMaxMark").html("");

        $("#txtMath").attr("readonly", false);
        $("#txtEnglish").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtMathematics").attr("readonly", false);
        $("#txtBiology").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);
        var boardid = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
        if (boardid == 65 || boardid == 72) {
       
            $("#rbtDiploma").checked = true;
            $("#rbtDiploma").disabled = false;
            $("#rbtArts").disabled = true;
            $("#rbtScience").disabled = true;
            $("#rbtCommerce").disabled = true;
            $("#rbtVocational").disabled = true;
        }
        else {
            $("#rbtDiploma").checked = true;
            $("#rbtDiploma").disabled = false;
        }
        $("#lblMILCpy").html('');
        $("#lblEnglishCpy").html('');
        $("#lblCheCpy").html('');
        $("#lblMathCpy").html('');
        $("#lblBioCpy").html('');
        $("#lblTotMarkCpy").html('');
        $("#lblMaxMarkCpy").html('');

    //    document.getElementById('hidCHSEMark').value = "0";

    }
}

function ExamType() {

    if ($('#ddlYOP').val() == "2018") {
        document.getElementById('rbtnAnnual').checked = true;
//        document.getElementById('rbtnSuppl').checked = false;
//        document.getElementById('rbtnSuppl').disabled = true;
    }
    else {
       // document.getElementById('rbtnSuppl').disabled = false;
    }


}


//===============================add options==================//
//=============function for checking wheather it is not confimed CAF or New CAF============//

//=======================Get Option Details================
function getOptions() {

    var a = chkReturn();
    if (a == true) {
        var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
        var rowsLen = Rows.length
        var tds;
        var collegeIds = '';
        var streams = '';
        var PassHon = '';
        var electiveSub = '';
        var Hostel = '';
        var totMarks = $("#txtTotMark").val();
        var maxMarks = $("#txtMaxMark").val();
        var Percentage = (totMarks / maxMarks) * 100;
        //===========================if there is only one option===========

        if (Rows.length < 2) {
            collegeIds = $("#ddlCollege").val();
            streams = $("#ddlStream").val();
            electiveSub = $("#ddlELE1").val();
//            if ($("#rbtAccomodation1").is(":checked")) {
//                Hostel = 1;
//            }
//            if ($("#rbtAccomodation2").is(":checked")) {
//                Hostel = 2;
//            }
            if (($('#ddlELE1').val()) > 0) {
                if (($('#ddlELE1').val()) >= 301 && ($('#ddlELE1').val()) <= 305) {
                    PassHon = 1;
                }
                else {
                    PassHon = 2;
                }
            }
//            womenCollegeAry = new Array('1461', '2485', '2672', '2677', '2690', '2699', '183', '188', '190', '192', '195', '201', '203', '205', '209', '210', '214', '217', '220', '223', '224', '246', '275', '365', '378', '381', '398', '432', '464', '528', '530', '587', '603', '635', '647', '659', '675', '693', '704', '729', '730', '769', '825', '829', '845', '856', '885', '979', '997', '1082', '1096', '1097', '1114', '1127', '1163', '1167', '1191', '1226', '1300', '1362', '1382', '1385', '1462', '1470', '1471', '1611', '1643', '1671', '1751', '1773', '1785', '1834', '1880', '1885', '1907', '1929', '1952', '1967', '2046', '2077', '2133', '2145', '2839', '1056', '2726', '2734', '2704', '2707', '2711', '2801', '2819', '198', '721', '734', '947', '1389', '1832', '2879', '3293', '1289', '3244', '297', '3344', '3507');
//            var SelCid = $("#ddlCollege").val();
//            var Gender = $("#ddlGender").val();

//            $.each(womenCollegeAry, function (key, value) {
//                if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[key])) {
//                    alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));
//                    clearDDL();
//                    $("#ddlCollege").focus();
//                    return false;
//                }
//            });

            //===============Checking Stream in Options=======
            var biology;
            biology = $("#txtBiology").val();
            if (biology == '') {
                biology = 0;
            }
            var MathMark = $("#txtMathematics").val();
            var intMath;
            if (MathMark == '') {
                intMath = 0;
            }
            if ((document.getElementById('rbtCommerce').checked == true) || (document.getElementById('rbtArts').checked == true) ) {
                if ((streams == '2')) {
                    alert('You can apply for Arts/Commerce Stream only');
                    $("#ddlStream").attr('selectedIndex', 0);
                    $("#ddlStream").focus();
                    return false;
                }
            }

            if ((document.getElementById('rbtMaulvi').checked == true) || (document.getElementById('rbtUpashastri').checked == true)) {
                if (streams == '2' || streams == '3') {
                    alert('You can apply for Arts Stream only');
                    $("#ddlStream").attr('selectedIndex', 0);
                    $("#ddlStream").focus();
                    return false;
                }
            }

            if (((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) && (biology == 0)) {
                if (streams == 5) {
                    alert('You can not apply for CBZ Stream\nbecause you have not taken subject as CBZ in intermediate');
                    $("#ddlStream").attr('selectedIndex', 0);
                    $("#ddlStream").focus();
                    return false;
                }
            }

            if (((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) && (intMath == 0)) {
                if ((streams == 4) && ((document.getElementById('ddlELE1').value == 20))) {
                    alert('You can not apply for Mathematics Honours\nbecause you have not taken subject as Mathematics in intermediate');

                    if ($('#ddlELE1').val() == 20) {
                        $("#ddlELE1").attr('selectedIndex', 0);
                        $("#ddlELE1").focus();

                    }
                    return false;
                }
            }
        }
        else {
            for (var i = 1; i < rowsLen; i++) {
                //================Store CollegeIds======================
                if (collegeIds == '') {
                    collegeIds = Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value
                }
                else { collegeIds = collegeIds + '~' + Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value }
             


          

                  womenCollegeAry = new Array();
                  womenCollegeAry = $("#hidCollegeidGender").val().split(',');
    
      
                var SelCid = Rows[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value;
                var Gender = document.getElementById('ddlGender').value;

                var status = "0";
                $.each(womenCollegeAry, function (key, value) {

                    if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[key])) {
                        alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));
                        clearDDL();
                        $("#ddlCollege").focus();
                        status = "1";
                        return false;
                    }
                });
                if (status=="1") {
                    return false;
                }
            
                //=================Stream Ids===========================
                if (streams == '')
                { streams = Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value }
                else
                { streams = streams + '~' + Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value }
                //===============Checking Stream in Options=======
                var biology;
                biology = $("#txtBiology").val();
                var SelCid = Rows[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value;
                var SelMid = Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value;
                if (biology == '') {
                    biology = 0;
                }
                var MathMark = $("#txtMathematics").val();
                var intMath;
                if (MathMark == '') {
                    intMath = 0;
                }
                if ((document.getElementById('rbtCommerce').checked == true) || (document.getElementById('rbtArts').checked == true)  ) {
                    if ((SelCid == '2')) {
                        alert('You can apply for Arts/Commerce Stream only');
                        $("#ddlStream").attr('selectedIndex', 0);
                        $("#ddlStream").focus();
                        return false;
                    }
                }

                if ((document.getElementById('rbtMaulvi').checked == true) || (document.getElementById('rbtUpashastri').checked == true)) {
                    if ( SelCid == '2' || SelCid == '3' ) {
                        alert('You can apply for Arts Stream only');
                        $("#ddlStream").attr('selectedIndex', 0);
                        $("#ddlStream").focus();
                        return false;
                    }
                }

                if (((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) && (biology == 0)) {
                    if (SelCid == 5) {
                        alert('You can not apply for CBZ Stream\nbecause you have not entered Biology Mark');
                        $("#ddlStream").attr('selectedIndex', 0);
                        $("#ddlStream").focus();
                        return false;
                    }
                }

                var honsIds = Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value;
                mathAry = new Array();
                mathAry = honsIds.split('~');

                for (var l = 0; l < mathAry.length; l++) {
                    if (intMath == 0 && mathAry[l] == 20) {
                        alert('You can not apply for Mathematics Honours\n ');
                        return false;
                    }
                }
                //===================Pass Honours Details==============
                if (PassHon == '')
                { PassHon = Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value }
                else
                { PassHon = PassHon + '~' + Rows[i].getElementsByTagName("TD")[3].getElementsByTagName("input")[0].value }
                //==========================Elective ids================
                if (electiveSub == '')
                { electiveSub = Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value }
                else
                { electiveSub = electiveSub + '/' + Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value }
                //==================Hostel Option=============================
//                if (Hostel == '') {
//                    Hostel = Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[1].value
//                }
//                else { Hostel = Hostel + '~' + Rows[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[1].value }
//                //============================================================
            }

        }

        if ((Rows.length < 21) && (Rows.length >= 2)) {
            var lastCid = $("#ddlCollege").val();
            var lastSid = $("#ddlStream").val();
            var lastH1id = $("#ddlELE1").val();
            var lastReside;
            var lastpassHon;


            if (($('#ddlELE1').val()) > 0) {
                if (($('#ddlELE1').val()) >= 301 && ($('#ddlELE1').val()) <= 305) {
                    lastpassHon = 1;
                }
                else {
                    lastpassHon = 2;
                    PHText = 'HONOURS';
                }
            }

            womenCollegeAry = new Array('1461', '2485', '2672', '2677', '2690', '2699', '183', '188', '190', '192', '195', '201', '203', '205', '209', '210', '214', '217', '220', '223', '224', '246', '275', '365', '378', '381', '398', '432', '464', '528', '530', '587', '603', '635', '647', '659', '675', '693', '704', '729', '730', '769', '825', '829', '845', '856', '885', '979', '997', '1082', '1096', '1097', '1114', '1127', '1163', '1167', '1191', '1226', '1300', '1362', '1382', '1385', '1462', '1470', '1471', '1611', '1643', '1671', '1751', '1773', '1785', '1834', '1880', '1885', '1907', '1929', '1952', '1967', '2046', '2077', '2133', '2145', '2839', '1056', '2726', '2734', '2704', '2707', '2711', '2801', '2819', '198', '721', '734', '947', '1389', '1832', '2879', '3293', '1289', '3244', '297', '3344', '3507');
            var SelCid = $("#ddlCollege").val(); //document.getElementById('ddlCollege').value;
            var Gender = $("#ddlGender").val(); // document.getElementById('ddlGender').value;

            $.each(womenCollegeAry, function (key, value) {
                if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[key])) {
                    alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));
                    clearDDL();
                    $("#ddlCollege").focus();
                    return false;
                }
            });


            
            //===============Checking Stream in Options=======
            var biology;
            biology = $("#txtBiology").val();
            if (biology == '') {
                biology = 0;
            }
            var MathMark = $("#txtMathematics").val();
            var intMath;
            if (MathMark == '') {
                intMath = 0;
            }
        
            var ChemisMark = $("#txtScience").val();
            var intChemis;
            if (ChemisMark == '' || ChemisMark == '0') {
                intChemis = 0;
            }

            if ((document.getElementById('rbtCommerce').checked == true) || (document.getElementById('rbtArts').checked == true)) {
                if ((lastSid == '2') ) {
                    alert('You can apply for Arts/Commerce Stream only');
                    $("#ddlStream").attr('selectedIndex', 0);
                    $("#ddlStream").focus();
                    return false;
                }
            }

            if ((document.getElementById('rbtMaulvi').checked == true) || (document.getElementById('rbtUpashastri').checked == true)) {
                if ( lastSid == '2' ||  lastSid == '3' ) {
                    alert('You can apply for Arts Stream only');
                    $("#ddlStream").attr('selectedIndex', 0);
                    $("#ddlStream").focus();
                    return false;
                }
            }

            if (((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) && (biology == 0)) {
                if (lastSid == 5) {
                    alert('You can not apply for CBZ Stream\nbecause  you have not taken subject as Biology in intermediate');
                    $("#ddlStream").attr('selectedIndex', 0);
                    $("#ddlStream").focus();
                    return false;
                }
            }
            if (((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) && (intMath == 0)) {
                if ((lastSid == 4) && ((document.getElementById('ddlELE1').value == 20))) {
                    alert('You can not apply for Mathematics Honours\nbecause you have not taken subject as Mathematics in intermediate');
                    if (document.getElementById('ddlELE1').value == 20) {
                        $("#ddlELE1").attr('selectedIndex', 0);
                        $("#ddlELE1").focus();
                    }
                    return false;
                }
            }

            if ((document.getElementById('rbtScience').checked == true) ){
                if ((lastSid == '2') && ((document.getElementById('ddlELE1').value == 36)) && parseInt(intMath)==0) {
                    alert('You can not apply for Mathematics Honours\nbecause  you have not taken subject as Mathematics in intermediate');
                    if (document.getElementById('ddlELE1').value == 36) {
                        $("#ddlELE1").attr('selectedIndex', 0);
                        $("#ddlELE1").focus();
                    }
                    return false;
                }
                
                if ((lastSid == '2') && ((document.getElementById('ddlELE1').value == 35)) && parseInt(intChemis) == 0) {
                    alert('You can not apply for Chemistry Honours\nbecause you have not taken subject as Mathematics in Chemistry in intermediate');
                    if (document.getElementById('ddlELE1').value == 35) {
                        $("#ddlELE1").attr('selectedIndex', 0);
                        $("#ddlELE1").focus();
                    }
                    return false;
                }

                if ((lastSid == '2') && ((document.getElementById('ddlELE1').value == 34)) && parseInt(biology)==0) {
                    alert('You can not apply for Botany Honours\nbecause you have not taken subject as Biology in intermediate');
                    if (document.getElementById('ddlELE1').value == 34) {
                        $("#ddlELE1").attr('selectedIndex', 0);
                        $("#ddlELE1").focus();
                    }
                    return false;
                }

                if ((lastSid == '2') && ((document.getElementById('ddlELE1').value == 38)) && parseInt(biology)==0) {
                    alert('You can not apply for Zoology Honours\nbecause  you have not taken subject as Biology in intermediate');
                    if (document.getElementById('ddlELE1').value == 38) {
                        $("#ddlELE1").attr('selectedIndex', 0);
                        $("#ddlELE1").focus();
                    }
                    return false;
                }


            }


            if ((lastCid != 0) && (lastSid != 0) && (lastpassHon != '')) {
                collegeIds = collegeIds + '~' + lastCid;
                streams = streams + '~' + lastSid;
                PassHon = PassHon + '~' + lastpassHon;
                electiveSub = electiveSub + '/' + lastH1id
//                Hostel = Hostel + '~' + lastReside;
            }
        }

    
        $("#hidCollege").val(collegeIds);
        $("#hidStream").val(streams);
        $("#hidStreamPref").val(PassHon);
        $("#hidElectives").val(electiveSub);
//        $("#hidHostel").val(Hostel);


        //============Counting No of Options==============
        var optLen;
        if (collegeIds.indexOf('~') > 0) {
            optNo = new Array();
            optNo = collegeIds.split("~");
            optLen = optNo.length + ' options'; ;
        }
        else {
            optLen = 1 + ' option';
        }

        if (confirm('You have entered ' + optLen + '.\nClick OK to submit.\nClick Cancel to add more options.')) {
            return true;
        }
        else {
            return false;
        }
    }
    else
        return false;
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

function checkConfirmationStatus() {
    if ($("#hidCollege").val() != '') {
        NotConfirmOptions();
        $("#tblChoice").css("display", '');
    }
}


function PreInsti() {
  
    if ($("#ddlBoard").val() == '35') {
        $('#txtdist').hide();
        $('#ddlinstDistrict').show();
    
    } else {

        $('#txtdist').show();
        $('#ddlinstDistrict').hide();
        $("#ddlinstDistrict")[0].selectedIndex = 0;

    }


    if ($("#ddlBoard").val() == '35') {
        document.getElementById('tdRollCdH').style.display = "";
        document.getElementById('tdRollCdF').style.display = "";

        document.getElementById('divBseb').style.display = "";
        document.getElementById('divOther').style.display = "none";


        document.getElementById('tdComp12').style.display = "none";
        document.getElementById('tdComp3').style.display = "none";
        document.getElementById('tdChemistryH').style.display = "none";
        document.getElementById('tdMathH').style.display = "none";
        document.getElementById('tdBiologyH').style.display = "none";


        document.getElementById('tdNRBMIL').style.display = "none";
        document.getElementById('tdEnglish').style.display = "none";
        document.getElementById('tdChemistryB').style.display = "none";
        document.getElementById('tdMathB').style.display = "none";
        document.getElementById('tdBiologyB').style.display = "none";

    }
    else {

        document.getElementById('tdRollCdH').style.display = "none";
        document.getElementById('tdRollCdF').style.display = "none";

        document.getElementById('divBseb').style.display = "none";
        document.getElementById('divOther').style.display = "";

        document.getElementById('tdComp12').style.display = "none";
        document.getElementById('tdComp3').style.display = "";
        document.getElementById('tdChemistryH').style.display = "";
        document.getElementById('tdMathH').style.display = "";
        document.getElementById('tdBiologyH').style.display = "";

        document.getElementById('tdNRBMIL').style.display = "none";
        document.getElementById('tdEnglish').style.display = "";
        document.getElementById('tdChemistryB').style.display = "";
        document.getElementById('tdMathB').style.display = "";
        document.getElementById('tdBiologyB').style.display = "";

    }

    if ($("#ddlBoard").val() == '68') 
    {
        document.getElementById('divUnivercity').style.display = "";
        document.getElementById('tdComp3').style.display = "";
        document.getElementById('tdEnglish').style.display = "";
    }
    else {
        document.getElementById('divUnivercity').style.display = "none";

    }
}

//==================================Back from Confirm CAF Page=======================================

function NotConfirmOptions() {
    //======================Details====================
    var College = $("#hidCollege").val();
    collegeAry = new Array();
    collegeAry = College.split("|");
    var Stream = $("#hidStream").val();
    streamAry = new Array();
    streamAry = Stream.split("|");
    var Electives = $("#hidElectives").val();
    ElectivesAry = new Array();
    ElectivesAry = Electives.split("|")
    //===============getting Elective Ids================
    EleIdsAry = new Array();
    EleNamesAry = new Array();
    EleIdsAry = ElectivesAry[0].split("/");
    EleNamesAry = ElectivesAry[1].split("/");
    //=================================================
    var cids = collegeAry[0];
    StreamId = streamAry[0];
    Elective1 = EleIdsAry[0];
//    Accomodation = $("#hidHostel").val();
    PassHons = $("#hidStreamPref").val();
    //=========================Getting names=================
    CText = collegeAry[1];
    SText = streamAry[1];
    E1Text = EleNamesAry[0];
    //======================================================
    optAry = new Array();
    colAry = new Array();
    sAry = new Array();
    ele1Ary = new Array();
    ele2Ary = new Array();
    ele3Ary = new Array();
    hosAry = new Array();
    phAry = new Array();
    //============for text=================
    colAry1 = new Array();
    sAry1 = new Array();
    ele1Ary1 = new Array();
    ele2Ary1 = new Array();
    ele3Ary1 = new Array();
    //================================
    if (cids.indexOf('~') > 0) {
        //==============Splitiing the text & ids==========
        //optAry=optionId.split('~');
        colAry = cids.split('~');
        colAry1 = CText.split('~');
        sAry = StreamId.split('~');
        sAry1 = SText.split('~');
        ele1Ary = Elective1.split('~');
        ele1Ary1 = E1Text.split('~');
//        hosAry = Accomodation.split('~');
        phAry = PassHons.split('~');
        //================================================
        for (var i = 0; i < colAry.length; i++) {
            CollegeId = colAry[i];
            CText = colAry1[i];
            StreamId = sAry[i];
            SText = sAry1[i];
            Elective1 = ele1Ary[i];
            E1Text = ele1Ary1[i];
//            Accomodation = hosAry[i];
            PassHons = phAry[i];
            NotConfirmRow();
        }
    }
    else {
        CollegeId = collegeAry[0];
        StreamId = streamAry[0];
        Elective1 = EleIdsAry[0];
        Elective2 = EleIdsAry[1];
        Elective3 = EleIdsAry[2];
//        Accomodation = $("#hidHostel").val();
        PassHons = $("#hidStreamPref").val();
        //=========================Getting names=================
        CText = collegeAry[1];
        SText = streamAry[1];
        E1Text = EleNamesAry[0];
        E2Text = EleNamesAry[1];
        E3Text = EleNamesAry[2];
        //=======================================================
        NotConfirmRow();
    }

}

//=======================  view optionDetails==================
function ConfirmOptions() {
    
    var cids = document.getElementById('hidCollege').value; //$("#hidCollege").val(); //
    //======================================================
    StreamId = document.getElementById('hidStream').value; //$("#hidStream").val(); // 
    PassHons = document.getElementById('hidStreamPref').value; //$("#hidStreamPref").val(); //
    Elective1 = document.getElementById('hidElective1').value; //$("#hidElective1").val(); //
//    Accomodation = document.getElementById('hidHostel').value; // $("#hidHostel").val(); //
    //=========================Getting names=================
    CText = document.getElementById('hidCname').value; //$("#hidCname").val(); // 
    SText = document.getElementById('hidSname').value; // $("#hidSname").val(); //
    E1Text = document.getElementById('hidE1name').value; // $("#hidE1name").val(); // 
    //======================================================
    colAry = new Array();
    sAry = new Array();
    phAry = new Array();
    ele1Ary = new Array();
    hosAry = new Array();
    //============for text=================
    colAry1 = new Array();
    sAry1 = new Array();
    ele1Ary1 = new Array();
    //================================
    if (cids.indexOf('~') > 0) {
        //==============Splitiing the text & ids==========
        colAry = cids.split('~');
        colAry1 = CText.split('~');
        sAry = StreamId.split('~');
        sAry1 = SText.split('~');
        phAry = PassHons.split('~');
        ele1Ary = Elective1.split('~');
        ele1Ary1 = E1Text.split('~');
//       hosAry = Accomodation.split('~');
        //================================================
        for (var i = 0; i < colAry.length; i++) {
            CollegeId = colAry[i];
            CText = colAry1[i];
            StreamId = sAry[i];
            SText = sAry1[i];
            PassHons = phAry[i];
            Elective1 = ele1Ary[i];
            E1Text = ele1Ary1[i];
//            Accomodation = hosAry[i];
            ConfirmRow();
        }
    }
    else {
        CollegeId = document.getElementById('hidCollege').value; // $("#hidCollege").val();
        StreamId =document.getElementById('hidStream').value;  //$("#hidStream").val();
        PassHons =document.getElementById('hidStreamPref').value;  //$("#hidStreamPref").val();
        Elective1 =document.getElementById('hidElective1').value;  //$("#hidElective1").val();
//        Accomodation =document.getElementById('hidHostel').value;  //$("#hidHostel").val();
        //=========================Getting names=================
        CText =document.getElementById('hidCname').value;  //$("#hidCname").val();
        SText =document.getElementById('hidSname').value; //$("#hidSname").val(); 
        E1Text =document.getElementById('hidE1name').value;  //$("#hidE1name").val();
        //=======================================================
        ConfirmRow();
    }


 

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
        OptionText = "<font color='#CC33FF' size='3'><B>TWELVETH</B></font>"
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
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[6][0] + "<input type='hidden'  value=" + optionArray[6][1] + "></input>"
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[2][0] + "&nbsp;</br>" + "<input type='hidden' value=" + optionArray[2][1] + "~" + "></input>" + "<input type='hidden' value=" + optionArray[5][1] + "></input>"
   var td6 = document.createElement("TD")
    td6.innerHTML = optionArray[5][0]
    for (i = 1; i < 6; i++) {
        row.appendChild(eval("td" + i));
    }
    tbody.appendChild(row);
}


function catmsg() {
    if ((document.getElementById('rbtST').checked) || (document.getElementById('rbtSC').checked)) {
        $('#lblFees').text("Application Fees = Rs 200");
    }
    else {
        $('#lblFees').text("Application Fees = Rs 300");
    }
}


/////////////////////////////////////////
function Diploma() {
    debugger;
    var boardid = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    if (boardid == 65 || boardid == 72) {

        $("#rbtDiploma").checked = true;
        $("#rbtDiploma").disabled = false;
        $("#rbtArts").disabled = true;
        $("#rbtScience").disabled = true;
        $("#rbtCommerce").disabled = true;
        $("#rbtVocational").disabled = true;
        $("#rbtUpashastri").disabled = true;
        $("#rbtMaulvi").disabled = true;     
        showHideChemistry();
    }
    else if (boardid == 24) {
     
//        $("#rbtUpashastri").checked = true;
//        $("#rbtDiploma").disabled = true;
//        $("#rbtArts").disabled = true;
//        $("#rbtScience").disabled = true;
//        $("#rbtCommerce").disabled = true;
//        $("#rbtVocational").disabled = true;
//        $("#rbtUpashastri").disabled = false;
//        showHideChemistry();
//        clearDDL();
    }
    else {
    
        $("#rbtDiploma").checked = false;
        $("#rbtDiploma").disabled = true;
        $("#rbtArts").disabled = false;
        $("#rbtScience").disabled = false;
        $("#rbtScience").checked = true;
        $("#rbtCommerce").disabled = false;
        $("#rbtVocational").disabled = false;
        $("#rbtUpashastri").disabled = true;
        $("#rbtUpashastri").checked = false;
        $("#rbtMaulvi").disabled = true;
        $("#rbtMaulvi").checked = false;


      showHideChemistry();

    }
}
function showHideChemistry() {
    debugger;
    if ((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtVocational').checked == true) || (document.getElementById('rbtDiploma').checked == true)) {
        var boardid = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
        if (boardid != '35') {
            $('#tdChemistryH').show();
            $('#tdChemistryB').show();
            $('#tdMathH').show();
            $('#tdMathB').show();
            $('#tdBiologyH').show();
            $('#tdBiologyB').show();
        }
      
    }
    else if ((document.getElementById('rbtArts').checked == true) || (document.getElementById('rbtCommerce').checked == true) || (document.getElementById('rbtUpashastri').checked == true) || (document.getElementById('rbtMaulvi').checked == true)) {
    debugger;
        $('#tdChemistryH').hide();
        $('#tdChemistryB').hide();
        $('#tdMathH').hide();
        $('#tdMathB').hide();
        $('#tdBiologyH').hide();
        $('#tdBiologyB').hide();
    }
}

//=====================display options======================
///Not Done
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
        $('#2').hide();
        $('#3').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//            //            document.getElementById('2').style.display = 'none';
//            //            document.getElementById('3').style.display = '';
//        }
//        else {
//            Caption = "Choose your 2nd Option";
        //        }

        Caption = "Enter here for 2nd Option / अपना दूसरा विकल्प चुनें";
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
        $('#3').hide();
        $('#4').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 3rd Option";

        //        }
        Caption = "Enter here for 3rd Option / अपना तीसरा विकल्प चुनें";
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
        $('#4').hide();
        $('#5').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 4th Option";

        //        }
        Caption = "Enter here for 4th Option / अपना चौथा विकल्प चुनें";
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
        $('#5').hide();
        $('#6').show();

//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 5th Option";
        //        }
        Caption = "Enter here for 5th Option / अपना पांचवां विकल्प चुनें";
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
        $('#6').hide();
        $('#7').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 6th Option";
        //        }
        Caption = "Enter here for 6th Option / अपना छठी विकल्प चुनें";
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
        $('#7').hide();
        $('#8').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//        }
//        else {
//            Caption = "Choose your 7th Option";
        //        }
        Caption = "Enter here for 7th Option / अपना ७ वां विकल्प चुनें";
    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
        $('#8').hide();
        $('#9').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 8th Option";

        //        }
        Caption = "Enter here for 8th Option / अपना ८ वां विकल्प चुनें";
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
        $('#9').hide();
        $('#10').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 9th Option";
        //        }
        Caption = "Enter here for 9th Option / अपना ९ वां विकल्प चुनें";
    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
        $('#10').hide();
        $('#11').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 10th Option";

        //        }
        Caption = "Enter here for 10th Option / अपना १० वां विकल्प चुनें";
    }
    if (optText == 10) {
        $('#11').hide();
        $('#12').show();
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଏକାଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 11th Option";
        //        }
        Caption = "Enter here for 11th Option / अपना ११ वां विकल्प चुनें";
    }
    if (optText == 11) {
        OptionText = "<font color='#CC33FF' size='3'><B>ELEVENTH</B></font>"
        $('#12').hide();
        $('#13').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଦ୍ୱାଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 12th Option"
        //        }
        Caption = "Enter here for 12th Option / अपना १२ वां विकल्प चुनें";
    }
    if (optText == 12) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWELVETH</B></font>"
        $('#13').hide();
        $('#14').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ତ୍ରାୟୋଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 13th Option"
        //        }
        Caption = "Enter here for 13th Option / अपना १३ वां विकल्प चुनें";
    }
    if (optText == 13) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRTEENTH</B></font>"
        $('#14').hide();
        $('#15').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଚତୁର୍ଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 14th Option"
        //        }
        Caption = "Enter here for 14th Option / अपना १४ वां विकल्प चुनें";
    }
    if (optText == 14) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTEENTH</B></font>"
        $('#15').hide();
        $('#16').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ପାଞ୍ଚଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 15th Option"
        //        }
        Caption = "Enter here for 15th Option / अपना  १५ वां विकल्प चुनें";
    }
    if (optText == 15) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTEENTH</B></font>"
        $('#16').hide();
        $('#17').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            document.getElementById('10').value = 'ଦଶମ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି';
//            Caption = "ଷୋଡଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 16th Option"
        //        }
        Caption = "Enter here for 16th Option / अपना १६ वां विकल्प चुनें";
    }
    if (optText == 16) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTEENTH</B></font>"
        $('#17').hide();
        $('#18').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ସପ୍ତଦଶ  ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 17th Option"
        //        }
        Caption = "Enter here for 17th Option / अपना १७ वां विकल्प चुनें";
    }
    if (optText == 17) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTEENTH</B></font>"
        $('#18').hide();
        $('#19').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଅଷ୍ଟଦଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 18th Option"
        //        }
        Caption = "Enter here for 18th Option / अपना १८ वां विकल्प चुनें";
    }
    if (optText == 18) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTEENTH</B></font>"
        $('#19').hide();
        $('#20').show();
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ଉନବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 19th Option"
        //        }
        Caption = "Enter here for 19th Option / अपना १९ वां विकल्प चुनें";
    }
    if (optText == 19) {
        $('#20').show();
        OptionText = "<font color='#CC33FF' size='3'><B>NINETEENTH</B></font>"
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ବିଂଶ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//        }
//        else {
//            Caption = "Choose your 20th Option"
        //        }
        Caption = "Enter here for 20th Option / अपना २० वां विकल्प चुनें";
        document.getElementById('20').className = "optioninctive";
        document.getElementById('20').disabled = true;
    }
    if (optText == 20) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWENTIETH</B></font>"
//        if (document.getElementById('rbtnOriya').checked) {
//            Caption = "ବିଂଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//        }
//        else {
//            Caption = "You have already added 20 Options"
//        }
    }

    td1.innerHTML = OptionText;
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[6][0] + "<input type='hidden'  value=" + optionArray[6][1] + "></input>"
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[2][0] + "</br>" + "<input type='hidden' value=" + optionArray[2][1] + "~" + "></input>" + "<input type='hidden' value=" + optionArray[5][1] + "></input>"
    var td6 = document.createElement("TD")
    td6.innerHTML = "<a href='javascript:remove(" + optText + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option'/></a>"

    for (i = 1; i < 7; i++) {
        row.appendChild(eval("td" + i));
    }
    tbody.appendChild(row);
    document.getElementById('Caption').innerHTML = Caption;
}
//=========================Add Option Details====================
function ConfirmOptionData() {
    
    optionArray = new Array(9);
    optionArray[0] = new Array();
    optionArray[1] = new Array();
    optionArray[2] = new Array();
    optionArray[3] = new Array();
    optionArray[4] = new Array();
    optionArray[5] = new Array();
    optionArray[6] = new Array();
    optionArray[0][0] = CText;
    optionArray[0][1] = CollegeId;
    optionArray[1][0] = SText;
    optionArray[1][1] = StreamId;
    if (Elective1 == 0) {
        optionArray[2][0] = ''
        optionArray[2][1] = Elective1;
    }
    else {
        optionArray[2][0] = E1Text;
        optionArray[2][1] = Elective1;
    }

    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================
    if (Elective2 == 0) {
        optionArray[3][0] = '';
        optionArray[3][1] = Elective2;
    }
    else {
        optionArray[3][0] = E2Text;
        optionArray[3][1] = Elective2;
    }
    if (Elective3 == 0) {
        optionArray[4][0] = '';
        optionArray[4][1] = Elective3;
    }
    else {
        optionArray[4][0] = E3Text;
        optionArray[4][1] = Elective3;
    }
    //==========================================================================================================
    var AccText;
//    if (Accomodation == 1) {
//        Accomodation = 1;
//        AccText = 'YES';
//    }
//    if (Accomodation == 2) {
//        Accomodation = 2;
//        AccText = 'NO';
//    }
    optionArray[5][0] = AccText;
    optionArray[5][1] = Accomodation;
    var passText;
    if (PassHons == 1) {
        PassHons = 1;
        passText = 'PASS';
    }
    if (PassHons == 2) {
        PassHons = 2;
        passText = 'HONOURS';
    }
    optionArray[6][0] = passText;
    optionArray[6][1] = PassHons;
}
//=========================Add Option Details=====================================
function NotConfirmOptionData() {
    optionArray = new Array(8);
    optionArray[0] = new Array();
    optionArray[1] = new Array();
    optionArray[2] = new Array();
    optionArray[3] = new Array();
    optionArray[4] = new Array();
    optionArray[5] = new Array();
    optionArray[6] = new Array();
    optionArray[0][0] = CText;
    optionArray[0][1] = CollegeId;
    optionArray[1][0] = SText;
    optionArray[1][1] = StreamId;
    if (Elective1 == 0) {
        optionArray[2][0] = '';
        optionArray[2][1] = Elective1;
    }
    else {
        optionArray[2][0] = E1Text;
        optionArray[2][1] = Elective1;
    }

    //=====================checking if there is no fourth 2nd & 3rd fourth elective selection================
    if (Elective2 == 0) {
        optionArray[3][0] = '';
        optionArray[3][1] = Elective2;
    }
    else {
        optionArray[3][0] = E2Text;
        optionArray[3][1] = Elective2;
    }
    if (Elective3 == 0) {
        optionArray[4][0] = '';
        optionArray[4][1] = Elective3;
    }
    else {
        optionArray[4][0] = E3Text;
        optionArray[4][1] = Elective3;
    }
    //==========================================================================================================
    var AccText;
//    if (Accomodation == 1) {
//        Accomodation = 1;
//        AccText = 'YES';
//    }
//    if (Accomodation == 2) {
//        Accomodation = 2;
//        AccText = 'NO';
//    }
    optionArray[5][0] = AccText;
    optionArray[5][1] = Accomodation;
    var PassHonText;
    if (PassHons == 1) {
        PassHons = 1;
        PassHonText = 'PASS';
    }
    if (PassHons == 2) {
        PassHons = 2;
        PassHonText = 'HONOURS';
    }
    optionArray[6][0] = PassHonText;
    optionArray[6][1] = PassHons;
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
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//                }
//                else {
//                    Caption = "Choose your 2nd Option"
                //                }
                Caption = "Enter here for 2nd Option / अपना दूसरा विकल्प चुनें"
            }
            if (i == 2) {
                OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//                }
//                else {
//                    Caption = "Choose your 3rd Option"
                //                }
                Caption = "Enter here for 3rd Option / अपना तीसरा विकल्प चुनें"
            }
            if (i == 3) {
                OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//                }
//                else {
//                    Caption = "Choose your 4th Option"
                //                }
                Caption = "Enter here for 4th Option / अपना चौथा विकल्प चुनें"
            }
            if (i == 4) {
                OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
//                }
//                else {
//                    Caption = "Choose your 5th Option"
                //                }
                Caption = "Enter here for 5th Option / अपना पांचवां विकल्प चुनें"
            }
            if (i == 5) {
                OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//                }
//                else {
//                    Caption = "Choose your 6th Option"
                //                }
                Caption = "Enter here for 6th Option / अपना छठी विकल्प चुनें"
            }
            if (i == 6) {
                OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ସପ୍ତମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//                }
//                else {
//                    Caption = "Choose your 7th Option"
                //                }
                Caption = "Enter here for 7th Option / अपना ७ वां विकल्प चुनें"
            }
            if (i == 7) {
                OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଅଷ୍ଟମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//                }
//                else {
//                    Caption = "Choose your 8th Option"
                //                }
                Caption = "Enter here for 8th Option / अपना ८ वां विकल्प चुनें"
            }
            if (i == 8) {
                OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ନବମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//                }
//                else {
//                    Caption = "Choose your 9th Option"

                //                }
                Caption = "Enter here for 9th Option / अपना ९ वां विकल्प चुनें"
            }
            if (i == 9) {
                OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଦଶମ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//                }
//                else {
//                    Caption = "Choose your 10th Option"
                //                }
                Caption = "Enter here for 10th Option / अपना १० वां विकल्प चुनें"
            }
            if (i == 10) {
                OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ଏକାଦଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 11th Options"
                //                }
                Caption = "Enter here for 11th Option / अपना ११ वां विकल्प चुनें"
            }
            if (i == 11) {
                OptionText = "<font color='#CC33FF' size='3'><B>ELEVENTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ଦ୍ୱାଦଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 12th Options"
                //                }
                Caption = "Enter here for 12th Option / अपना १२ वां विकल्प चुनें"
            }
            if (i == 12) {
                OptionText = "<font color='#CC33FF' size='3'><B>TWELVETH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ତ୍ରାୟୋଦଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 13th Options"
                //                }
                Caption = "Enter here for 13th Option / अपना १३ वां विकल्प चुनें"
            }
            if (i == 13) {
                OptionText = "<font color='#CC33FF' size='3'><B>THIRTEENTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ଚତୁର୍ଦଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 14th Options"
                //                }
                Caption = "Enter here for 14th Option / अपना १४ वां विकल्प चुनें"
            }
            if (i == 14) {
                OptionText = "<font color='#CC33FF' size='3'><B>FOURTEENTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ପଞ୍ଚଦଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 15th Options"
                //                }
                Caption = "Enter here for 15th Option / अपना  १५ वां विकल्प चुनें"
            }
            if (i == 15) {
                OptionText = "<font color='#CC33FF' size='3'><B>FIFTEENTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ଷୋଡଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 16th Options"
                //                }
                Caption = "Enter here for 16th Option / अपना १६ वां विकल्प चुनें"
            }
            if (i == 16) {
                OptionText = "<font color='#CC33FF' size='3'><B>SIXTEENTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ସପ୍ତଦଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 17th Options"
                //                }
                Caption = "Enter here for 17th Option / अपना १७ वां विकल्प चुनें"
            }
            if (i == 17) {
                OptionText = "<font color='#CC33FF' size='3'><B>SEVENTEENTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ଅଷ୍ଟଦଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 18th Options"
                //                }
                Caption = "Enter here for 18th Option / अपना १८ वां विकल्प चुनें"
            }
            if (i == 18) {
                OptionText = "<font color='#CC33FF' size='3'><B>EIGHTEENTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ଉନବିଂଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 19th Options"
                //                }
                Caption = "Enter here for 19th Option / अपना १९ वां विकल्प चुनें"
            }
            if (i == 19) {
                OptionText = "<font color='#CC33FF' size='3'><B>NINETEENTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ବିଂଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 20th Options"
                //                }
                Caption = "Enter here for 20th Option / अपना २० वां विकल्प चुनें"
            }
            if (i == 20) {
                OptionText = "<font color='#CC33FF' size='3'><B>TWENTIETH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଆପଣ ବିଂଶ ପର୍ଯନ୍ତ ପସନ୍ଦ ଚୟନ କରିସାରିଛନ୍ତି "
//                }
//                else {
//                    Caption = "You have added 20th Options"
                //                }
                Caption = "You have added 20 Options / आपने 20 विकल्प जोड़े हैं"
            }
            //================================================================
            Rows[i].getElementsByTagName("TD")[0].innerHTML = OptionText;
            Rows[i].getElementsByTagName("TD")[5].innerHTML = "<a href='javascript:remove(" + i + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option'/></a>"
        }
        if (rowsLen == 1) 
        {
            document.getElementById('tblChoice').style.display = 'none';
//            if (document.getElementById('rbtnOriya').checked) {
//                document.getElementById('Caption').innerHTML = "ପ୍ରଥମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ"
//            }
//            else {
//                document.getElementById('Caption').innerHTML = 'Choose your 1st Option';
//            }
            $('#3').hide();
            $('#2').show();
            //            document.getElementById('3').style.display = 'none';
            //            document.getElementById('2').style.display = '';
            Caption = "Enter here for 1st Option / अपना पहला विकल्प चुनें"
            document.getElementById('Caption').innerHTML = Caption;
        }
        else {
            document.getElementById('Caption').innerHTML = Caption;
        }
        for (var k = 1; k < 21; k++) {
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
//                if (document.getElementById('rbtnOriya').checked) {

//                    if (nth == '2nd') {
//                        nth = 'ଦିତୀୟ';
//                    }
//                    else if (nth == '3rd') {
//                        nth = 'ତୃତୀୟ';
//                    }
//                    else if (nth == '4th') {
//                        nth = 'ଚତୁର୍ଥ';
//                    }
//                    else if (nth == '5th') {
//                        nth = 'ପଞ୍ଚମ';
//                    }
//                    else if (nth == '6th') {
//                        nth = 'ଷଷ୍ଠ';
//                    }
//                    else if (nth == '7th') {
//                        nth = 'ସପ୍ତମ';
//                    }
//                    else if (nth == '8th') {
//                        nth = 'ଅଷ୍ଟମ';
//                    }
//                    else if (nth == '9th') {
//                        nth = 'ନବମ';
//                    }
//                    else if (nth == '10th') {
//                        nth = 'ଦଶମ';
//                    }
//                    document.getElementById(k + 1).value = nth + ' ' + 'ପସନ୍ଦ';

//                }
//                else {
                    document.getElementById(k + 1).value = nth + ' Option';

                    if (k > 1) {
                        document.getElementById(k + 1).style.display = '';
                        document.getElementById(k + 1).className = "optionbtnNew";
                        document.getElementById(k + 1).value = nth + ' Option';
                        document.getElementById(k + 2).style.display = 'none';

                    }
               // }
                document.getElementById(k + 1).className = "optionbtnNew";
            }
        }
    }
}
//================Delete Option in Edit Page==========================================
function removeEdit(id) {
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
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଦିତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//                }
//                else {
//                    Caption = "Choose your 2nd Option";
//                }
            }
            if (i == 2) {
                OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ତୃତୀୟ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//                }
//                else {
//                    Caption = "Choose your 3rd Option";
//                }
            }
            if (i == 3) {
                OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଚତୁର୍ଥ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ";
//                }
//                else {
//                    Caption = "Choose your 4th Option";
//                }
            }
            if (i == 4) {
                OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ପଞ୍ଚମ ପସନ୍ଦ  ଚୟନ କରନ୍ତୁ";
//                }
//                else {
//                    Caption = "Choose your 5th Option";
//                }
            }
            if (i == 5) {
                OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"
//                if (document.getElementById('rbtnOriya').checked) {
//                    Caption = "ଷଷ୍ଠ ପସନ୍ଦ ଚୟନ କରନ୍ତୁ"
//                }
//                else {
//                    Caption = "Choose your 6th Option"
//                }
            }
            if (i == 6) {
                OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"

            }
            if (i == 7) {
                OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"

            }
            if (i == 8) {
                OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"

            }
            if (i == 9) {
                OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"

            }
            if (i == 10) {
                OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"

            }
            Rows[i].getElementsByTagName("TD")[0].innerHTML = OptionText;
            Rows[i].getElementsByTagName("TD")[5].innerHTML = "<a href='javascript:removeEdit(" + i + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option'/></a>"
            Rows[i].getElementsByTagName("TD")[6].innerHTML = "<input type='text' class='input' maxlength='1' size='1' value=" + i + "></input>"
        }
        if (rowsLen == 1) {
            document.getElementById('tblChoice').style.display = 'none';
            document.getElementById('Caption').innerHTML = 'Choose your 1st Option';
            document.getElementById('2').disabled = false;
        }
        else {
            document.getElementById('Caption').innerHTML = Caption;
        }
        for (var k = 1; k < 11; k++) {
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
                else if (k < 11) {
                    document.getElementById(k + 1).disabled = false;
                    document.getElementById(k + 1).value = 'Click here for ' + nth + ' Option';
                    document.getElementById(k + 1).className = "option";
                }
            }
        }
    }
}

//=====Call on Page Load to set Value 
function MarkIntigrationLoad() {
    
    if (document.getElementById('hdnMarkVerification').value == "1") {
        document.getElementById('trCouncilMark').style.display = "";
        document.getElementById('trMarkVerify').style.display = "none";
        $('#trCouncilMark').show();
 
        $("#lblMILCpy").html($("#txtMath").val());
        $("#lblEnglishCpy").html($("#txtEnglish").val());
        $("#lblCheCpy").html($("#txtScience").val());
        $("#lblMathCpy").html($("#txtMathematics").val());
        $("#lblBioCpy").html($("#txtBiology").val());
        $("#lblTotMarkCpy").html($("#txtTotMark").val());
        $("#lblMaxMarkCpy").html($("#txtMaxMark").val());

        $("#txtMath").attr("readonly", "readonly");
        $("#txtEnglish").attr("readonly", "readonly");
        $("#txtScience").attr("readonly", "readonly");
        $("#txtMathematics").attr("readonly", "readonly");
        $("#txtBiology").attr("readonly", "readonly");
        $("#txtTotMark").attr("readonly", "readonly");
        $("#txtMaxMark").attr("readonly", "readonly");

        CheckMarkVerification_Load();
    }
    else {
        //        document.getElementById('trCouncilMark').style.display = "none";
        //        document.getElementById('trMarkVerify').style.display = "none";
        //tdRollCdF
        $('#trCouncilMark').hide();
        $('#trMarkVerify').hide();

        $("#txtMath").attr("readonly", false);
        $("#txtEnglish").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtMathematics").attr("readonly", false);
        $("#txtBiology").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);

        var inVal = $("#ddlBoard").val();

        if (parseInt(inVal) == 35) {
            document.getElementById('tdRollCdH').style.display = "";
            document.getElementById('tdRollCdF').style.display = "";
            $('#txtdist').hide();
            $('#ddlinstDistrict').show();
        }
        else {
            document.getElementById('tdRollCdH').style.display = "none";
            document.getElementById('tdRollCdF').style.display = "none";
            $('#txtdist').show();
            $('#ddlinstDistrict').hide();
        }

    }
}
//====This will call on Page load to set mark verify Yes Or No
function CheckMarkVerification_Load() {
    if (document.getElementById('rbtMarkVerifiedYCpy').checked == true) {
        CHSEMark();
    }
    else {
        $("#txtMath").attr("readonly", false);
        $("#txtEnglish").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtMathematics").attr("readonly", false);
        $("#txtBiology").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);

    }
}
//========================function to check Mark details=============
function BoardMarkCheck() {
    var Eng = $("#txtEnglish").val();
    var Math = $("#txtMath").val();
    var Sci = $("#txtScience").val();
    var Mathematics = $("#txtMathematics").val();
    var Bio = $("#txtBiology").val();
    var Tot = $("#txtTotMark").val();
    var Max = $("#txtMaxMark").val();

    if (MIL == "" || isNaN(MIL)) {
        MIL = 0;
    }
    else {
        MIL = $("#txtMath").val();
    }
    if (Sci == "" || isNaN(Sci)) {
        Sci = 0;
    }
    else {
        Sci = $("#txtScience").val();
    }
    if (Bio == "" || isNaN(Bio)) {
        Bio = 0;
    }
    else {
        Bio = $("#txtBiology").val();
    }
    if (Math == "" || isNaN(Math)) {
        Math = 0;
    }
    else {
        Math = $("#txtMathematics").val();
    }
    
    var inTotal = parseInt(Eng) + parseInt(Math) + parseInt(Sci) + parseInt(Bio) + parseInt(Mathematics);

    // Math id represent the MIL

    if (parseInt(Math) >= parseInt(Tot)) {
        alert('Comp(1+2) Mark cannot be greater than or equal to Total Mark');
        $("#txtMath").focus();
        return false;
    }
    if (parseInt(Math) >= parseInt(Max)) {
        alert('Comp(1+2) Mark cannot be greater than or equal to Maximum Mark');
        $("#txtMath").focus();
        return false;
    }

    var BodVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);

    if (BodVal != '35') {
        if (parseInt(inTotal) >= parseInt(Tot)) {
            alert('Total Subjects marks cannot be greater than or equal to Total Mark');
            $("#txtTotMark").focus();
            return false;
        }
        if (parseInt(inTotal) >= parseInt(Max)) {
            alert('Total Subjects marks cannot be greater than or equal to Maximum Mark');
            $("#txtMaxMark").focus();
            return false;
        } 
    }

 
//    if (BodVal != 25) {

//        if (parseInt(Eng) == 0) 
//        {
//            alert('English Mark cannot be 0(zero)');
//            $("#txtEnglish").focus();
//            return false;
//        }
//        if (MIL == 0) {
//            alert('NRB/MIL Mark cannot be 0(zero)');
//            $("#txtMath").focus();
//            return false;
//        }

//    }


    if (parseInt(Eng) >= parseInt(Tot)) {
        alert('English Mark cannot be greater than or equal to Total Mark');
        $("#txtEnglish").focus();
        return false;
    }
    if (parseInt(Eng) >= parseInt(Max)) {
        alert('English Mark cannot be greater than or equal to Maximum Mark');
        $("#txtEnglish").focus();
        return false;
    }
    //=============if strream is science============== 
    if ((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) {
        var BodVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
        if (BodVal != 25) {
//            if (Sci == 0) {
//                alert('Chemistry Mark cannot be 0(zero)');
//                $("#txtScience").focus();
//                return false;
//            }
        }
        if (BodVal != '35') {
            if (parseInt(Sci) >= parseInt(Tot)) {
                alert('Chemistry Mark cannot be greater than or equal to Total Mark');
                $("#txtScience").focus();
                return false;
            }
            if (parseInt(Sci) >= parseInt(Max)) {
                alert('Chemistry Mark cannot be greater than or equal to Maximum Mark');
                $("#txtScience").focus();
                return false;
            }

            if (parseInt(Bio) >= parseInt(Tot)) {
                alert('Biology Mark cannot be greater than or equal to Total Mark');
                $("#txtBiology").focus();
                return false;
            }
            if (parseInt(Bio) >= parseInt(Max)) {
                alert('Biology Mark cannot be greater than or equal to Maximum Mark');
                $("#txtBiology").focus();
                return false;
            }
            if (parseInt(Mathematics) >= parseInt(Tot)) {
                alert('Mathematics Mark cannot be greater than or equal to Total Mark');
                $("#txtMathematics").focus();
                return false;
            }
            if (parseInt(Mathematics) >= parseInt(Max)) {
                alert('Mathematics Mark cannot be greater than or equal to Maximum Mark');
                $("#txtMathematics").focus();
                return false;
            } 
        }
    }
    //========================================================
    
    if (parseInt(Tot) == 0) {
       
        alert('Total Mark secured in all subjects cannot be 0(zero)');
        $("#txtTotMark").focus();
        return false;
    }
    if (BodVal != '35') {
        if (parseInt(inTotal) > parseInt(Tot)) {
            alert('The sum of your individual marks cannot be greater than the MAXIMUM MARKS');
            $("#txtTotMark").focus();
            return false;
        }
    }
    if (parseInt(Max) == 0) {
        alert('Maximum Mark cannot be 0(zero)');
        $("#txtMaxMark").focus();
        return false;
    }
    if (BodVal != '35') {
        if (parseInt(Tot) > parseInt(Max)) {
            alert('Total Mark secured in all subjects cannot be greater than or equal to Maximum Mark');
            $("#txtTotMark").focus();
            return false;
        } 
    }
}

//============================ women College Checking=================

//function womenCollegeCheck() {
//    womenCollegeAry = new Array('1461', '2485', '2672', '2677', '2690', '2699', '183', '188', '190', '192', '195', '201', '203', '205', '209', '210', '214', '217', '220', '223', '224', '246', '275', '365', '378', '381', '398', '432', '464', '528', '530', '587', '603', '635', '647', '659', '675', '693', '704', '729', '730', '769', '825', '829', '845', '856', '885', '979', '997', '1082', '1096', '1097', '1114', '1127', '1163', '1167', '1191', '1226', '1300', '1362', '1382', '1385', '1462', '1470', '1471', '1611', '1643', '1671', '1751', '1773', '1785', '1834', '1880', '1885', '1907', '1929', '1952', '1967', '2046', '2077', '2133', '2145', '2839', '1056', '2726', '2734', '2704', '2707', '2711', '2801', '2819', '198', '721', '734', '947', '1389', '1832', '2879', '3293', '1289', '3244', '297', '3344', '3392', '3344', '3507');
//    if (!DropDownValidation('ddlGender', 'your gender')) {
//        return false;
//    }
//    if (!DropDownValidation('ddlCollegeDistrict', 'District Name')) {
//        return false;
//    }
//    if (!DropDownValidation('ddlCollege', 'College Name')) {
//        return false;
//    }
//    var SelCid = $("#ddlCollege").val();
//    var Gender = $("#ddlGender").val(); //document.getElementById('ddlGender').value;
//    $.each(womenCollegeAry, function (key, value) {
//        if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[key])) {
//            alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));
//            clearDDL();
//            $("#ddlCollege").focus();
//            return false;
//        }
//    });
//}


function checkPass() {
    var CollID = ($("#ddlCollege").val());  //document.getElementById('ddlCollege').value;
    cids = new Array("138", "666", "104", "121", "155", "169", "182", "184", "186", "189", "193", "194", "197", "198", "200", "202", "204", "206",
                     "208", "209", "211", "213", "215", "218", "221", "273", "645", "1612");
    var counter = 0;
    $.each(cids, function (key, value) {
        if (CollID == value) {
            counter++;
        }
    });
    if (counter != 0) {
        $("#rbtPass").checked = true;
        $("#rbtHonours").checked = false;
    }
    else {
        $("#rbtPass").checked = false;
        $("#rbtHonours").checked = false;
        $("#rbtPass").disabled = false;
    }
}


function setHonours() {
    var streamID = document.getElementById("ddlStream").value;
    if (streamID > 5 && streamID != 8) {
        var setVal = document.getElementById('ddlELE1').options[1].value;
        setTimeout('setEle("1")', 500);

        $("#ddlCollege").hide();
        $("#sp1").shhow();

        if ((document.getElementById('rbtPass').disabled == false) && (document.getElementById('rbtHonours').checked == false)) {
            document.getElementById('rbtPass').disabled = true;
            document.getElementById('rbtHonours').checked = true;
        }
        document.getElementById('sp1').innerHTML = document.getElementById('ddlELE1').options[1].text;
    }
    else if (streamID == 8) {
        setTimeout('setEle("0")', 500);
        document.getElementById('ddlELE1').value = 0;
        document.getElementById('ddlELE1').style.display = "";
        document.getElementById('sp1').innerHTML = "";
        document.getElementById('sp1').style.display = "none";
        checkPass();
    }
    else {
        setTimeout('setEle("0")', 500);
        document.getElementById('ddlELE1').value = 0;
        document.getElementById('ddlELE1').style.display = "";
        document.getElementById('sp1').innerHTML = "";
        document.getElementById('sp1').style.display = "none";
        checkPass();
    }
}

///Not Done
function RemoveAllOptions(fillctlname) {
    for (var i = document.getElementById(fillctlname).length; i > 0; i--) {
        document.getElementById(fillctlname).options[i] = null;
    }
}

function RestrictStream() {
    
    var streams;
    streams = ($("#ddlStream").val());
    var biology;
    biology = ($("#txtBiology").val());
    if (biology == '') {
        biology = 0;
    }
    if ((document.getElementById('rbtCommerce').checked == true) || (document.getElementById('rbtArts').checked == true)) {
        if ((streams == '2')) {
            alert('You can apply for Arts/Commerce Stream only');
            $("#ddlStream").attr('selectedIndex', 0);
            $("#ddlStream").focus();
            return false;
        }
    }

    if ((document.getElementById('rbtMaulvi').checked == true) || (document.getElementById('rbtUpashastri').checked == true)) {
        if ( streams == '2' || streams == '3') {
            alert('You can apply for Arts Stream only');
            $("#ddlStream").attr('selectedIndex', 0);
            $("#ddlStream").focus();
            return false;
        }
    }

    if (((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtVocational').checked == true)) && (biology == 0)) {
        if (streams == 5) {
            alert('You can not apply for Biological Science Stream\nbecause you have not entered Biology Mark');
            $("#ddlStream").attr('selectedIndex', 0);
            $("#ddlStream").focus();
            return false;
        }
    }
}

//=============Updating Options(Adding new Option in Apply Page)======================	
function updateRow(ctlId) {
    
    //==============if he is clicking the add option buttons before delecting any ddl========
    var Rows = document.getElementById('tableOption').getElementsByTagName("TR");
    if ((Rows.length < 2) && (document.getElementById('ddlCollege').value == 0) && (document.getElementById('ddlStream').value == 0) && (document.getElementById('ddlELE1').value == 0)) {
        alert('Please Choose your 1st Option');
        return false;
    }
    if (!DropDownValidation('ddlGender', 'your gender'))
        return false;
    if ((document.getElementById('rbtArts').checked == false) && (document.getElementById('rbtCommerce').checked == false) && (document.getElementById('rbtScience').checked == false) && (document.getElementById('rbtVocational').checked == false) && (document.getElementById('rbtDiploma').checked == false) && (document.getElementById('rbtUpashastri').checked == false) && (document.getElementById('rbtMaulvi').checked == false)) {
        alert('Please check stream in Intermediate Exam');
        return false;
    }
    if (!DropDownValidation('ddlCollegeDistrict', 'District Name'))
        return false;
    if (!DropDownValidation('ddlCollege', 'College Name'))
        return false;
    //================RESTRICTING MALE APPLICANT APPLYING FOR FOR WOMENS COLLEGE========
    womenCollegeAry = new Array('1461', '2485', '2672', '2677', '2690', '2699', '183', '188', '190', '192', '195', '201', '203', '205', '209', '210', '214', '217', '220', '223', '224', '246', '275', '365', '378', '381', '398', '432', '464', '528', '530', '587', '603', '635', '647', '659', '675', '693', '704', '729', '730', '769', '825', '829', '845', '856', '885', '979', '997', '1082', '1096', '1097', '1114', '1127', '1163', '1167', '1191', '1226', '1300', '1362', '1382', '1385', '1462', '1470', '1471', '1611', '1643', '1671', '1751', '1773', '1785', '1834', '1880', '1885', '1907', '1929', '1952', '1967', '2046', '2077', '2133', '2145', '2839', '1056', '2726', '2734', '2704', '2707', '2711', '2801', '2819', '198', '721', '734', '947', '1389', '1832', '2879', '3293', '1289', '3244', '297', '3344', '3392', '3344', '3507');
    //select * from M_college where int_CollegeType=4 and bit_deletedflag=0 and int_collegeid not in ('1461', '2485', '2672', '2677', '2690', '2699', '183', '188', '190', '192', '195', '201', '203', '205', '209', '210', '214', '217', '220', '223', '224', '246', '275', '365', '378', '381', '398', '432', '464', '528', '530', '587', '603', '635', '647', '659', '675', '693', '704', '729', '730', '769', '825', '829', '845', '856', '885', '979', '997', '1082', '1096', '1097', '1114', '1127', '1163', '1167', '1191', '1226', '1300', '1362', '1382', '1385', '1462', '1470', '1471', '1611', '1643', '1671', '1751', '1773', '1785', '1834', '1880', '1885', '1907', '1929', '1952', '1967', '2046', '2077', '2133', '2145', '2846', '2839', '1056', '2726', '2734', '2704', '2707', '2711', '2801', '2819', '198', '721', '734', '947', '1389', '1832', '2879')
    var SelCid = document.getElementById('ddlCollege').value;
    var Gender = document.getElementById('ddlGender').value;


    $.each(womenCollegeAry, function (key, value) {
        if (((Gender == 1) || (Gender == 3)) && (SelCid == womenCollegeAry[key])) {
            alert('You cannot apply for a Women’s college,\nas your Gender shows ' + camelize($("#ddlGender option:selected").text()));
            clearDDL();
            $("#ddlCollege").focus();
            return false;
        }
    });

    //==========================================================
    if (!DropDownValidation('ddlStream', 'Stream Name'))
        return false;
    if (!DropDownValidation('ddlELE1', 'Subject'))
        return false;


//    if (!blankFieldValidation('txtEnglish', 'English Mark'))
//        return false;

    if (!NumericValidation('txtEnglish', 'Please write only numeric values for MARKS', '3'))
        return false;

//    if (!blankFieldValidation('txtMath', 'NRB/MIL Mark'))
//        return false;

    if (!NumericValidation('txtMath', 'Please write only numeric values for MARKS', '3'))
        return false;
    //=============if stream is science=================
    if ((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) {
//        if (!blankFieldValidation('txtScience', 'Chemistry Mark'))
        //            return false;

        var Sci1 = parseInt($("#txtScience").val());
        if (Sci1 == "" || isNaN(Sci1)) {
            $("#txtScience").val('0');
        }


        if (!NumericValidation('txtScience', 'Please write only numeric values for MARKS', '3'))
            return false;
        if (!NumericValidation('txtBiology', 'Please write only numeric values for MARKS', '3'))
            return false;
    }
    if (!blankFieldValidation('txtTotMark', 'Total Mark secured in all subjects'))
        return false;
    if (!NumericValidation('txtTotMark', 'Please write only numeric values for MARKS', '4'))
        return false;
    if (!blankFieldValidation('txtMaxMark', 'Maximum Mark'))
        return false;
    if (!NumericValidation('txtMaxMark', 'Please write only numeric values for MARKS', '4'))
        return false;
    if (parseInt(document.getElementById('txtTotMark').value) > parseInt(document.getElementById('txtMaxMark').value)) {
        alert('Total Mark secured in all subjects cannot be greater than Maximum Mark');
        $("#txtTotMark").focus();
        return false;
    }
    //===================checking applied stream & +2 stream==========
    var streams;
    streams = $("#ddlStream").val();
    var biology;
    biology = $("#txtBiology").val();
    if (biology == '') {
        biology = 0;
    }
    var MathMark = $("#txtMathematics").val();
    var intMath;
    if (MathMark == '') {
        intMath = 0;
    }
    
    var ChemisMark = $("#txtScience").val();
    var intChemis;
    if (ChemisMark == '' || ChemisMark == '0') {
        intChemis = 0;
    }

    if ((document.getElementById('rbtCommerce').checked == true) || (document.getElementById('rbtArts').checked == true) ) {
        if ((streams == '2')) {
            alert('You can apply for Arts/Commerce Stream only');
            $("#ddlStream").attr('selectedIndex', 0);
            $("#ddlStream").focus();
            return false;
        }
    }

    if ((document.getElementById('rbtMaulvi').checked == true) || (document.getElementById('rbtUpashastri').checked == true)) {
        if ( streams == '2'|| streams == '3') {
            alert('You can apply for Arts Stream only');
            $("#ddlStream").attr('selectedIndex', 0);
            $("#ddlStream").focus();
            return false;
        }
    }
    if (((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) && (parseFloat( biology) == 0)) {
        if (streams == 5) {
            alert('You can not apply for Biological Science Stream\nbecause you have not entered Biology Mark');
            $("#ddlStream").attr('selectedIndex', 0);
            $("#ddlStream").focus();
            return false;
        }
    }

    if (((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) && (parseFloat(intMath) == 0)) {

        if ((streams == 4) && ((document.getElementById('ddlELE1').value == 20))) {
            alert('You can not apply for Mathematics Honours\nbecause you have not entered Mathematics Mark');
            if (document.getElementById('ddlELE1').value == 20) {
                $("#ddlELE1").attr('selectedIndex', 0);
                $("#ddlELE1").focus();
            }
            return false;
        }
    }

    if ((document.getElementById('rbtScience').checked == true)) {
        if ((streams == '2') && ((document.getElementById('ddlELE1').value == 36)) && parseInt(intMath) == 0) {
            alert('You can not apply for Mathematics Honours\nbecause you have not taken subject as Mathematics in intermediate');
            if (document.getElementById('ddlELE1').value == 36) {
                $("#ddlELE1").attr('selectedIndex', 0);
                $("#ddlELE1").focus();
            }
            return false;
        }
     
        if ((streams == '2') && ((document.getElementById('ddlELE1').value == 35)) && parseInt(intChemis) == 0) {
            alert('You can not apply for Chemistry Honours\nbecause you have not taken subject as Chemistry in intermediate');
            if (document.getElementById('ddlELE1').value == 35) {
                $("#ddlELE1").attr('selectedIndex', 0);
                $("#ddlELE1").focus();
            }
            return false;
        }

        if ((streams == '2') && ((document.getElementById('ddlELE1').value == 34)) && parseInt(biology) == 0) {
            alert('You can not apply for Botany Honours\nbecause you have not taken subject as Biology in intermediate');
            if (document.getElementById('ddlELE1').value == 34) {
                $("#ddlELE1").attr('selectedIndex', 0);
                $("#ddlELE1").focus();
            }
            return false;
        }

        if ((streams == '2') && ((document.getElementById('ddlELE1').value == 38)) && parseInt(biology) == 0) {
            alert('You can not apply for Zoology Honours\nbecause you have not taken subject as Biology  in intermediate');
            if (document.getElementById('ddlELE1').value == 38) {
                $("#ddlELE1").attr('selectedIndex', 0);
                $("#ddlELE1").focus();
            }
            return false;
        }
    }







    var PassHon;
    if (($('#ddlELE1').val()) > 0) {
        if (($('#ddlELE1').val()) >= 301 && ($('#ddlELE1').val()) <= 305) {
            PassHon = 1;
            PHText = 'PASS';
        }
        else {
            PassHon = 2;
            PHText = 'HONOURS';
        }
    }

    var totMarks = $('#txtTotMark').val();  //; parseInt(document.getElementById('txtTotMark').value);
    var maxMarks = $('#txtMaxMark').val(); // parseInt(document.getElementById('txtMaxMark').value);
    var Percentage = (totMarks / maxMarks) * 100;
    //============================================================
   // if ((document.getElementById('rbtAccomodation1').checked == false) && (document.getElementById('rbtAccomodation2').checked == false)) {
//        alert('Please select hostel option');
//        return false;
  //  }
    var totRow = document.getElementById('tableOption').getElementsByTagName("TR").length
    var tRow = document.getElementById('tableOption').getElementsByTagName("TR");
    //===================Variables=======================
    var addedCollege;
    var addedStream;
    var cuurntCid = $('#ddlCollege').val();
    var cuurntSid = $('#ddlStream').val();
    var cuurntEleSid = $('#ddlELE1').val();
    collAry = new Array();
    strAry = new Array();
    var colCntr = 0;
    var stCntr = 0;
    //=========================================================

    if (totRow < 21) {
        //============Calling Add row Function============
        if (totRow > 1) {
            for (var i = 1; i < totRow; i++) {
                addedCollege = parseInt(tRow[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value);
                addedStream = parseInt(tRow[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value);
                addedSub = parseInt(tRow[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value);

                if ((addedCollege == cuurntCid) && (addedStream == cuurntSid) && (addedSub == cuurntEleSid)) {
                    colCntr = parseInt(colCntr) + 1;
                }
            }
            if (parseInt(colCntr) > 0) {
                alert('You cannot add more than 1 option in same College , Stream & Subject');
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
                    return false;
                }
                else {
                    addRow()
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
                return false;
            }
            else {
                addRow()
            }
        }
        //===============================================================
    }
    else {
        alert("You have already added Twenty Options")
        clearDDL();
    }
    RemoveAllOptions('ddlCollege');
    document.getElementById('ddlCollegeDistrict').focus();



}
//=================Adding Option Row in Apply Page=======================
function addRow() {
   
    updateOptionData();
    var tbody = document.getElementById('tableOption').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    td1.innerHTML = document.getElementById('tableOption').getElementsByTagName("TR").length
    var optText = document.getElementById('tableOption').getElementsByTagName("TR").length;
    var OptionText;
    var Caption;
  
    if (optText == 1) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIRST</B></font>"

        Caption = "Enter here for 2nd Option / अपना दूसरा विकल्प चुनें"
        $('#2').hide();
        $('#3').show();
    }
    if (optText == 2) {
        OptionText = "<font color='#CC33FF' size='3'><B>SECOND</B></font>"

        Caption = "Enter here for 3rd Option / अपना तीसरा विकल्प चुनें";
        $('#3').hide();
        $('#4').show();
    }
    if (optText == 3) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRD</B></font>"

        Caption = "Enter here for 4th Option / अपना चौथा विकल्प चुनें";
        $('#4').hide();
        $('#5').show();
    }
    if (optText == 4) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTH</B></font>"

        Caption = "Enter here for 5th Option / अपना पांचवां विकल्प चुनें";
        $('#5').hide();
        $('#6').show();
    }
    if (optText == 5) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTH</B></font>"

        Caption = "Enter here for 6th Option / अपना छठी विकल्प चुनें";
        $('#6').hide();
        $('#7').show();
    }
    if (optText == 6) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTH</B></font>"

        Caption = "Enter here for 7th Option / अपना ७ वां विकल्प चुनें";
        $('#7').hide();
        $('#8').show();
    }
    if (optText == 7) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTH</B></font>"

        Caption = "Enter here for 8th Option / अपना ८ वां विकल्प चुनें";
        $('#8').hide();
        $('#9').show();
    }
    if (optText == 8) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTH</B></font>"

        Caption = "Enter here for 9th Option / अपना ९ वां विकल्प चुनें";
        $('#9').hide();
        $('#10').show();
    }
    if (optText == 9) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINTH</B></font>"

        Caption = "Enter here for 10th Option / अपना १० वां विकल्प चुनें";
        $('#10').hide();
        $('#11').show();
    }
    if (optText == 10) {
        OptionText = "<font color='#CC33FF' size='3'><B>TENTH</B></font>"

        Caption = "Enter here for 11th Option / अपना ११ वां विकल्प चुनें";
        $('#11').hide();
        $('#12').show();
    }
    if (optText == 11) {
        OptionText = "<font color='#CC33FF' size='3'><B>ELEVENTH</B></font>"

        Caption = "Enter here for 12th Option / अपना १२ वां विकल्प चुनें";
        $('#12').hide();
        $('#13').show();
    }
    if (optText == 12) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWELVETH</B></font>"

        Caption = "Enter here for 13th Option / अपना १३ वां विकल्प चुनें";
        $('#13').hide();
        $('#14').show();
    }
    if (optText == 13) {
        OptionText = "<font color='#CC33FF' size='3'><B>THIRTEENTH</B></font>"

        Caption = "Enter here for 14th Option / अपना १४ वां विकल्प चुनें";
        $('#14').hide();
        $('#15').show();
    }
    if (optText == 14) {
        OptionText = "<font color='#CC33FF' size='3'><B>FOURTEENTH</B></font>"

        Caption = "Enter here for 15th Option / अपना  १५ वां विकल्प चुनें";

        $('#15').hide();
        $('#16').show();
    }
    if (optText == 15) {
        OptionText = "<font color='#CC33FF' size='3'><B>FIFTEENTH</B></font>"

        Caption = "Enter here for 16th Option / अपना १६ वां विकल्प चुनें";
        $('#16').hide();
        $('#17').show();
    }
    if (optText == 16) {
        OptionText = "<font color='#CC33FF' size='3'><B>SIXTEENTH</B></font>"
        document.getElementById('10').value = 'You have selected 10th Option';

        Caption = "Enter here for 17th Option / अपना १७ वां विकल्प चुनें";
        $('#17').hide();
        $('#18').show();
    }
    if (optText == 17) {
        OptionText = "<font color='#CC33FF' size='3'><B>SEVENTEENTH</B></font>"

        Caption = "Enter here for 18th Option / अपना १८ वां विकल्प चुनें";
        $('#18').hide();
        $('#19').show();
    }
    if (optText == 18) {
        OptionText = "<font color='#CC33FF' size='3'><B>EIGHTEENTH</B></font>"

        Caption = "Enter here for 19th Option / अपना १९ वां विकल्प चुनें";
        $('#19').hide();
        $('#20').show();
    }
    if (optText == 19) {
        OptionText = "<font color='#CC33FF' size='3'><B>NINETEENTH</B></font>"
        Caption = "Enter here for 20th Option / अपना २० वां विकल्प चुनें";
        document.getElementById('20').className = "optioninctive";
        document.getElementById('20').disabled = true;
    }
    if (optText == 20) {
        OptionText = "<font color='#CC33FF' size='3'><B>TWENTIETH</B></font>"
        Caption = "You have added 20 Options";
    }

    td1.innerHTML = OptionText;

    //=================================================================
    var td2 = document.createElement("TD")
    td2.innerHTML = optionArray[0][0] + "<input type='hidden' value=" + optionArray[0][1] + "></input>"
    var td3 = document.createElement("TD")
    td3.innerHTML = optionArray[1][0] + "<input type='hidden'  value=" + optionArray[1][1] + "></input>"
    var td4 = document.createElement("TD")
    td4.innerHTML = optionArray[6][0] + "<input type='hidden'  value=" + optionArray[6][1] + "></input>"
    var td5 = document.createElement("TD")
    td5.innerHTML = optionArray[2][0] + "</br>" + "<input type='hidden' value=" + optionArray[2][1] + "~" + "></input>" + "<input type='hidden' value=" + optionArray[5][1] + "></input>"
    var td6 = document.createElement("TD")
    td6.innerHTML = "<a href='javascript:remove(" + optText + ");void(0)'><img src='../images/delete_btn.gif' border='0' title='Click here to delete this option'/></a>"
    for (i = 1; i < 7; i++) {
        row.appendChild(eval("td" + i));
    }
    tbody.appendChild(row);


    document.getElementById('tblChoice').style.display = '';
    document.getElementById('Caption').innerHTML = Caption;
    resetOption();
    clearDDL();
    //======================================
}
function CheckMarkVerificationCpy() {
    if (document.getElementById('rbtMarkVerifiedYCpy').checked == true) {
        CHSEMark();
    }
    else {
        document.getElementById('trCouncilMark').style.display = "none";
        $("#txtMath").attr("readonly", false);
        $("#txtEnglish").attr("readonly", false);
        $("#txtScience").attr("readonly", false);
        $("#txtMathematics").attr("readonly", false);
        $("#txtBiology").attr("readonly", false);
        $("#txtTotMark").attr("readonly", false);
        $("#txtMaxMark").attr("readonly", false);


        $("#txtMath").html('');
        $("#txtEnglish").html('');
        $("#txtMathematics").html('');
        $("#txtScience").html('');
        $("#txtBiology").html('');
        $("#txtTotMark").html('');
        $("#txtMaxMark").html('');
        $("#rbtArts").disabled = false;
        $("#rbtScience").disabled = false;
        $("#rbtCommerce").disabled = false;
        $("#rbtVocational").disabled = false;
        $("#rbtDiploma").disabled = false;

 
        document.getElementById('rbtArts').disabled = false
        document.getElementById('rbtScience').disabled = false
        document.getElementById('rbtCommerce').disabled = false
        document.getElementById('rbtVocational').disabled = false
        document.getElementById('rbtDiploma').disabled = true

    }
}

function highlightCollegeType() {
    if (document.getElementById('rbtOthersFinance').checked) {

        $("#OF").css("color", "#CC33FF");
        $("#S").css("color", "#000000");
        clearDDL();
    }
    else if (document.getElementById('rbtSanskrit').checked) {
        $("#S").css("color", "#CC33FF");
        $("#OF").css("color", "#000000");
        clearDDL();
    }

}



//=========================Add Option Details=====================================
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
    var PassHonours;
    var PHText;

    if (($("#ddlELE1").val()) > 0) {
        if (($("#ddlELE1").val()) >= 301 && ($("#ddlELE1").val()) <= 305) {
            PassHonours = 1;
            PHText = 'PASS';
        }
        else {
            PassHonours = 2;
            PHText = 'HONOURS';
        }
    }
    optionArray[6][0] = PHText;
    optionArray[6][1] = PassHonours;
    if (document.getElementById("ddlELE1").value == 0) {
        optionArray[2][0] = '';
        optionArray[2][1] = document.getElementById("ddlELE1").value;
    }
    else {
        optionArray[2][0] = document.getElementById("ddlELE1").options[document.getElementById("ddlELE1").selectedIndex].text;
        optionArray[2][1] = document.getElementById("ddlELE1").value;
    }
    var Accomodation = 0;
    var AccText
//    if (document.getElementById('rbtAccomodation1').checked == true) {
//        Accomodation = 1;
//        AccText = document.getElementById('rbtAccomodation1').Text;
//    }
//    if (document.getElementById('rbtAccomodation2').checked == true) {
//        Accomodation = 2;
//        AccText = document.getElementById('rbtAccomodation2').Text;
//    }

    optionArray[5][0] = AccText;
    optionArray[5][1] = Accomodation;
}

 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////Validation Starts///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//==================================DOB Validation==================
//=======================Validation for options==================
//Form Validations
function ValidateForm() {
  
    if (!DropDownValidation('ddlBoard', 'the name of your Examination Board')) {
        return false;
    }

    if (parseInt(document.getElementById('ddlBoard').value) == 68) {

        if (!blankFieldValidation('txtUniversity', 'Board name')) {
            return false;
        }
        if (!chkSingleQuote('txtUniversity'))
            return false;
        if (!WhiteSpaceValidation1st('txtUniversity'))
            return false;
    }
    if (!DropDownValidation('ddlYOP', 'Year of passing')) {
        return false;
    }
    if ((document.getElementById('rbtnAnnual').checked == false) & (document.getElementById('rbtnSuppl').checked == false)) {
        alert('Please Choose Exam Type');
        return false;
    }

    if (!checkPassingYear())
        return false;

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
    var selDate = $("#ddlDay").val();
    var selMonth = $("#ddlMonth").val();
    var selYear = $("#ddlYear").val();
    if ((selDate > 0) && (selMonth > 0) && (selYear > 0)) {
        if (!(isValidDate(selYear, selMonth, selDate))) {
            alert('Please enter valid date of birth !');
            $("#ddlDay").focus();
            return false;
        }
    }
    //==================checking diff. between DOB & YOP==============
    var year = $("#ddlYear").val();
    var yop = $("#ddlYOP").val();
    var gap =  parseInt(yop) - parseInt(year);
    if (parseInt(gap) <= 14) {
        alert('The difference of age between the birth year and Intermediate passing year should be greater than 14');
        $("#ddlYear").focus();
        return false;
    }

    //35 - Bihar board id
    if (parseInt(document.getElementById('ddlBoard').value) == 35 ) {
        if (!blankFieldValidation('txtRollCode', 'Roll Code.')) {
            return false;
        }
        if (!chkSingleQuote('txtRollCode'))
            return false;
        if (!WhiteSpaceValidation1st('txtRollCode'))
            return false;
    }


    if (!blankFieldValidation('txtBoardRoll', 'Roll No.')) {
        return false;
    }
    if (!chkSingleQuote('txtBoardRoll')) {
        return false;
    }
    if (!WhiteSpaceValidation1st('txtBoardRoll')) {
        return false;
    }
    if ((document.getElementById('txtBoardRoll').value == '0') || (document.getElementById('txtBoardRoll').value == '00') || (document.getElementById('txtBoardRoll').value == '000') || (document.getElementById('txtBoardRoll').value == '0000') || (document.getElementById('txtBoardRoll').value == '00000') || (document.getElementById('txtBoardRoll').value == '000000') || (document.getElementById('txtBoardRoll').value == '0000000') || (document.getElementById('txtBoardRoll').value == '00000000') || (document.getElementById('txtBoardRoll').value == '000000000') || (document.getElementById('txtBoardRoll').value == '0000000000') || (document.getElementById('txtBoardRoll').value == '00000000000') || (document.getElementById('txtBoardRoll').value == '000000000000')) {
        alert('Roll No. can not be 0');
        return false;
    }
    if (!blankFieldValidation('txtApplName', 'Applicant Name')) {
        return false;
    }

    if (!chkSingleQuote('txtApplName')) {
        return false;
    }
    if (!WhiteSpaceValidation1st('txtApplName')) {
        return false;
    }

    if ($("#txtApplName").val().length == 1) {
        alert("Applicant's Name is too short");
        $('#txtApplName').focus();
        return false;
    }
//    if (!isAlphabet('txtApplName')) {
//        alert('Please enter only Alphabets');
//        $("#txtApplName").val("");
//        $("#txtApplName").focus();
//        return false;
//    }
  
    if (!blankFieldValidation('txtFatherName', "Father's Name")) {
        return false;
    }
    if ($("#txtFatherName").val().length == 1) {
        alert("Father's Name is too short");
        $('#txtFatherName').focus();
        return false;
    }
  
    if (!chkSingleQuote('txtFatherName')) {
        return false;
    }
    if (!WhiteSpaceValidation1st('txtFatherName')) {
        return false;
    }
//    if (!isAlphabet('txtFatherName')) {
//        alert('Please enter only Alphabets');
//        $("#txtFatherName").val("");
//        $("#txtFatherName").focus();
//        return false;
//    }
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
//    if (!isAlphabet('txtMotherName')) {
//        alert('Please enter only Alphabets');
//        $("#txtMotherName").val("");
//        $("#txtMotherName").focus();
//        return false;
//    }

    if (document.getElementById('hdnImgAppl').value == "") {
        alert("Please Upload your photo !");
        return false;
    }

    //========================Sream Validation==================
    if ((document.getElementById('rbtArts').checked == false) && (document.getElementById('rbtScience').checked == false) && (document.getElementById('rbtCommerce').checked == false) && (document.getElementById('rbtVocational').checked == false) && (document.getElementById('rbtDiploma').checked == false) && (document.getElementById('rbtUpashastri').checked == false) && (document.getElementById('rbtMaulvi').checked == false)) {
        alert('Please check stream in Intermediate Board Exam');
        return false;
    }


    //=========================Mark Validation==================   

//    if (!blankFieldValidation('txtEnglish', 'English Mark')) {
//        return false;
    //    }

    if (!NumericValidation('txtEnglish', 'Please write only numeric values for MARKS', '3'))
        return false;

//    if (!blankFieldValidation('txtMath', 'NRB/MIL Mark')) {
//        return false;
//    }

    if (!NumericValidation('txtMath', 'Please write only numeric values for MARKS', '3'))
        return false;
    //=============if stream is science=================
    if ((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) {
//        if (!blankFieldValidation('txtScience', 'Chemistry Mark')) {
//            return false;
        //        }

      var Sci3 = $("#txtScience").val();
        if (Sci3 == "" || isNaN(Sci3)) {
            $("#txtScience").val('0');
        }


        if (!NumericValidation('txtScience', 'Please write only numeric values for MARKS', '3'))
            return false;

        if (!NumericValidation('txtBiology', 'Please write only numeric values for MARKS', '3'))
            return false;

    }
    
    if (!blankFieldValidation('txtTotMark', 'Total Mark secured in all subjects')) {
        return false;
    }
    if (!NumericValidation('txtTotMark', 'Please write only numeric values for MARKS', '4'))
        return false;
    if (!blankFieldValidation('txtMaxMark', 'Maximum Mark')) {
        return false;
    }
    if (!NumericValidation('txtMaxMark', 'Please write only numeric values for MARKS', '4'))
        return false;
    if (parseInt(document.getElementById('txtTotMark').value) > parseInt(document.getElementById('txtMaxMark').value)) {
        alert('Total Mark secured in all subjects cannot be greater than Maximum Mark');
        document.getElementById('txtTotMark').focus();
        return false;
    }
 
    //=================Compare mark with total mark & Maxmimum mark=========

    var Eng = parseInt($("#txtEnglish").val());
    var MIL = parseInt($("#txtMath").val());
    var Sci = parseInt($("#txtScience").val());
    var Math = parseInt($("#txtMathematics").val());
    var Bio = parseInt($("#txtBiology").val());
    var Tot = parseInt($("#txtTotMark").val());
    var Max = parseInt($("#txtMaxMark").val());
    if (MIL == "" || isNaN(MIL)) {
        MIL = 0;
    }
    else {
        MIL = $("#txtMath").val();
    }
    if (Sci == "" || isNaN(Sci)) {
        Sci = 0;
    }
    else {
        Sci = $("#txtScience").val();
    }
    if (Bio == "" || isNaN(Bio)) {
        Bio = 0;
    }
    else {
        Bio = $("#txtBiology").val();
    }
    if (Math == "" || isNaN(Math)) {
        Math = 0;
    }
    else {
        Math = $("#txtMathematics").val();
    }
   
    //var inTotal = parseInt(Eng + MIL + Sci + Bio + Math);
    var inTotal = parseInt(Eng) + parseInt(Math) + parseInt(Sci) + parseInt(Bio) + parseInt(MIL);
    if (MIL >= Tot) {
        alert('Comp(1+2) Mark cannot be greater than or equal to Total Mark.');
        $("#txtMath").focus();
        return false;
    }
    if (MIL >= Max) {
        alert('Comp(1+2) Mark cannot be greater than or equal to Maximum Mark');
        $("#txtMath").focus();
        return false;
    }

    var BodVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
    if (BodVal != '35') {
        if (parseInt(inTotal) >= parseInt(Tot)) {
            alert('Total Subjects marks cannot be greater than or equal to Total Mark');
            $("#txtTotMark").focus();
            return false;
        }
        if (parseInt(inTotal) >= parseInt(Max)) {
            alert('Total Subjects marks cannot be greater than or equal to Maximum Mark');
            $("#txtMaxMark").focus();
            return false;
        } 
    }
   
//    if (BodVal != 25) {
//        if (Eng == 0) 
//        {
//            alert('English Mark cannot be 0(zero)');
//            $("#txtEnglish").focus();
//            return false;
//        }
//        if (MIL == 0) {
//            alert('NRB/MIL Mark cannot be 0(zero)');
//            $("#txtMath").focus();
//            return false;
//        }
//    }
   
    if (Eng >= Tot) {

        alert('English Mark cannot be greater than or equal to Total Mark');
        $("#txtEnglish").focus();
        return false;
    }
    if (Eng >= Max) {
        alert('English Mark cannot be greater than or equal to Maximum Mark');
        $("#txtEnglish").focus();
        return false;
    }
    //=============if strream is science============== 
    if ((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) {
        var BodVal = parseInt(document.getElementById('ddlBoard').options[document.getElementById('ddlBoard').selectedIndex].value);
        if (BodVal != 25) {
//            if (Sci == 0) {
//                alert('Chemistry Mark cannot be 0(zero)');
//                $("#txtScience").focus();
//                return false;
            //            }
         var Sci2  = $("#txtScience").val();
            if (Sci2 == "" || isNaN(Sci2)) {
                $("#txtScience").val('0');
            }

        }
        if (Sci >= Tot) {
            alert('Chemistry Mark cannot be greater than or equal to Total Mark');
            document.getElementById('txtScience').focus();
            return false;
        }
        if (Sci >= Max) {
            alert('Chemistry Mark cannot be greater than or equal to Maximum Mark');
            $("#txtScience").focus();
            return false;
        }
        if (Bio >= Tot) {
            alert('Biology Mark cannot be greater than or equal to Total Mark');
            $("#txtBiology").focus();
            return false;
        }
        if (Bio >= Max) {
            alert('Biology Mark cannot be greater than or equal to Maximum Mark');
            $("#txtBiology").focus();
            return false;
        }
    }

    //==============if stream is vocational==================
    if ((document.getElementById('rbtVocational').checked == true)) {
        if (Sci >= Tot) {
            alert('Chemistry Mark cannot be greater than or equal to Total Mark');
            $("#txtScience").focus();
            return false;
        }
        if (Sci >= Max) {
            alert('Chemistry Mark cannot be greater than or equal to Maximum Mark');
            $("#txtScience").focus();
            return false;
        }
        if (Bio >= Tot) {
            alert('Biology Mark cannot be greater than or equal to Total Mark');
            $("#txtBiology").focus();
            return false;
        }
        if (Bio >= Max) {
            alert('Biology Mark cannot be greater than or equal to Maximum Mark');
            $("#txtBiology").focus();
            return false;
        }
    }
  
    //========================================================
    if (Tot == 0) {
        alert('Total Mark secured in all subjects cannot be 0(zero)');
        $("#txtTotMark").focus();
        return false;
    }
    if (BodVal != '35') {
        if (inTotal > Tot) {
            alert('The sum of your individual marks cannot be greater than the Total Mark Secured');
            $("#txtTotMark").focus();
            return false;
        }
    }
    if (Max == 0) {
        alert('Maximum Mark cannot be 0(zero)');
        $("#txtMaxMark").focus();
        return false;
    }
   
    //================================Mark Validation End====================   
    //Compartmental Validation
    if (document.getElementById('rbtCompartmentalY').checked == true) {
        if (!blankFieldValidation('txtCompSubject1', 'Subject1'))
            return false;
        if (!WhiteSpaceValidation1st('txtCompSubject1'))
            return false;
        if (!blankFieldValidation('txtCompFMark1', 'Fail Mark in previous exam'))
            return false;
        if (!NumericValidation('txtCompFMark1', 'Please write only numeric values for MARKS', '3'))
            return false;
        if (!blankFieldValidation('txtCompPMark1', 'Pass Mark in previous exam'))
            return false;
        if (!NumericValidation('txtCompPMark1', 'Please write only numeric values for MARKS', '3'))
            return false;
        var f1 = $("#txtCompFMark1").val();
        var p1 = $("#txtCompPMark1").val();

        if (parseInt(f1) >= parseInt(p1)) {
            alert('Fail Mark cannot be greater than or equal to Pass Mark');
            $("#txtCompFMark1").focus();
            return false;
        }
        if (document.getElementById('txtCompFMark2').value != '' || document.getElementById('txtCompPMark2').value != '') {
            if (!blankFieldValidation('txtCompSubject2', 'Subject2'))
                return false;
        }
        if (document.getElementById('txtCompSubject2').value != '') {
            if (!WhiteSpaceValidation1st('txtCompSubject2'))
                return false;
            if (!blankFieldValidation('txtCompFMark2', 'Fail Mark in previous exam for 2nd subject'))
                return false;
            if (!NumericValidation('txtCompFMark2', 'Please write only numeric values for MARKS', '3'))
                return false;
            if (!blankFieldValidation('txtCompPMark2', 'Pass Mark in previous exam for 2nd subject'))
                return false;
            if (!NumericValidation('txtCompPMark2', 'Please write only numeric values for MARKS', '3'))
                return false;
            var f2 = $("#txtCompFMark2").val();
            var p2 = $("#txtCompPMark2").val();
            if (parseInt(f2) >= parseInt(p2)) {
                alert('Fail Mark cannot be greater than or equal to Pass Mark for 2nd subject');
                $("#txtCompFMark2").focus();
                return false;
            }
        }  
       
     
        if (document.getElementById('txtCompFMark3').value != '' || document.getElementById('txtCompPMark3').value != '') {
            if (!blankFieldValidation('txtCompSubject3', 'Subject3'))
                return false;
        }
   
        if (document.getElementById('txtCompSubject3').value != '') {
         
            if (!WhiteSpaceValidation1st('txtCompSubject3'))
                return false;
         
            if (!blankFieldValidation('txtCompFMark3', 'Fail Mark in Previous Exam for 3rd subject'))
                return false;
        
            if (!NumericValidation('txtCompFMark3', 'Please write only numeric values for MARKS', '3'))
                return false;
          
            if (!blankFieldValidation('txtCompPMark3', 'Pass Mark in Previous Exam for 3rd subject'))
                return false;
        
            if (!NumericValidation('txtCompPMark3', 'Please write only numeric values for MARKS', '3'))
                return false;
          
            var f3 = $("#txtCompFMark3").val();
            var p3 = $("#txtCompPMark3").val();

            if (parseInt(f3) >= parseInt(p3)) {
                alert('Fail Mark cannot be greater than or equal to Pass Mark for 3rd subject');
                $("#txtCompFMark3").focus(); 
                return false;
            }
           
        }
 
//        if (!checkCompSubject('1')) {
//            alert('You cannot enter same subject\ntwice for Comaprtment subject');
//            return false;
//        }
    }
 
    //--------Record of educational institution last attended-------
    if (!blankFieldValidation('txtschname', 'Name of the College'))
        return false;

    if (!blankFieldValidation('txtschloc', 'Location of the College'))
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
    //--------End-------


    //----Personal Details 
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
    if (!blankFieldValidation('txtCPS', 'House no.,village name,police station')) {
        return false;
    }
    if ($("#txtCPS").val().length == 1) {
        alert('House No., Street/Village, Post Office, Police Station Name is too short');
        $('#txtCPS').focus();
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
        alert('Pin Code cannot be less than 6digit !');
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
        $("#txtCPC").val("");
        $("#txtCPC").focus();
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
        $("#txtCTCode").val("");
        $("#txtCTCode").focus();
        return false;
    }
 
    var strAreaCode = document.getElementById('txtCTCode').value;
    if ((strAreaCode != '') && (strAreaCode.length < 3)) {
        alert('Area Code cannot be less than 3digit');
        $("#txtCTCode").focus();
        return false;
    }
   
    if (!blankFieldValidation('txtCMobNo', 'Mobile Number')) {
        return false;
    }
    if (!chkSingleQuote('txtCMobNo'))
        return false;

    if (!WhiteSpaceValidation1st('txtCMobNo'))
        return false;
    if (!NumericValidation('txtCMobNo', 'Please write only numeric values for Mobile No.', '10'))
        return false;
    if (!RepeatedNumbers('txtCMobNo', 2)) {
        alert('Please write valid Mobile No.');
        $("#txtCMobNo").val("");
        $("#txtCMobNo").focus();
        return false;
    }

    var strMob = document.getElementById('txtCMobNo').value;
    if ((strMob != '') && (strMob.length < 10)) {
        alert('Mobile No. cannot be less than 10digit');
        $("#txtCMobNo").focus();
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
        $("#txtCTeleNo").val("");
        $("#txtCTeleNo").focus();
        return false;
    }

    var strPhone = document.getElementById('txtCTeleNo').value;
    if ((strPhone != '') && (strPhone.length < 5)) {
        alert('Phone No. cannot be less than 5digit');
        $("#txtCTeleNo").focus();
        return false;
    }

    //=====================For Reservation category==================
    if ((document.getElementById('rbtST').checked == false) && (document.getElementById('rbtSC').checked == false) && (document.getElementById('rbtOther').checked == false) && (document.getElementById('rbtnOBC').checked == false) && (document.getElementById('rbtGeneral').checked == false) && (document.getElementById('rbtBCW').checked == false)) {
        alert('Please select ST/SC/OBC/SEBC/General category');
        return false;
    }


    //Option Validation
    var dIndex = $("#ddlCollegeDistrict").val();
    var cIndex = $("#ddlCollege").val();
    var sIndex = $("#ddlStream").val();
    var e1Index = $("#ddlELE1").val();
//    if ((document.getElementById('tableOption').getElementsByTagName("TR").length == 1) && (cIndex == 0) && (sIndex == 0)) {
//        alert('Please select minimum 1 Option details ');
//        document.getElementById('ddlCollege').focus();
//        return false;
//    }

    if ((document.getElementById('tableOption').getElementsByTagName("TR").length == 1)) {
        if (dIndex == 0) 
        {
            alert('Please select minimum 1 Option details ');
            document.getElementById('ddlCollegeDistrict').focus();
            return false;
        }
        else {
            if (!DropDownValidation('ddlCollegeDistrict', 'District')) {
                return false;
            }
            if (!DropDownValidation('ddlCollege', 'College Name')) {
                return false;
            }
            if (!DropDownValidation('ddlStream', 'Stream Name')) {
                return false;
            }
            if (!DropDownValidation('ddlELE1', 'Subject Name')) {
                return false;
            }
        }
    }


    if ((document.getElementById('tableOption').getElementsByTagName("TR").length >= 1) && (dIndex != 0)) {

        if (!DropDownValidation('ddlCollege', 'College Name')) {
            return false;
        }
        if (!DropDownValidation('ddlStream', 'Stream Name')) {
            return false;
        }

        //===================checking applied stream & +2 stream==========
        var streams;
        streams = $("#ddlStream").val();
        var biology;
        biology = $("#txtBiology").val();
        if (biology == '') {
            biology = 0;
        }
        if ((document.getElementById('rbtCommerce').checked == true) || (document.getElementById('rbtArts').checked == true) ) {
            if ((streams =='2')) {
                alert('You can apply for Arts/Commerce Stream only');
                $("#ddlStream").attr('selectedIndex', 0);
                $("#ddlStream").focus();
                return false;
            }
        }

        if ((document.getElementById('rbtMaulvi').checked == true) || (document.getElementById('rbtMaulvi').checked == true)) {
            if (streams == '2' || streams == '3') {
                alert('You can apply for Arts Stream only');
                $("#ddlStream").attr('selectedIndex', 0);
                $("#ddlStream").focus();
                return false;
            }
        }

        if (((document.getElementById('rbtScience').checked == true) || (document.getElementById('rbtDiploma').checked == true)) && (biology == 0)) {
            if (streams == 5) {
                alert('You can not apply for CBZ Stream\nbecause you have not entered Biology Mark');
                $("#ddlStream").attr('selectedIndex', 0);
                $("#ddlStream").focus();
                return false;
            }
        }
        if (!DropDownValidation('ddlELE1', 'Subject'))
            return false;
//        if ((document.getElementById('rbtAccomodation1').checked == false) && (document.getElementById('rbtAccomodation2').checked == false)) {
//            alert('Please select hostel option ');
//            return false;
//        }
 
        //===================checking same college and stream in button click=======================
        var addedCollege;
        var addedStream;
        var chseddl = $("#ddlBoard").val();
        var cuurntCid = $("#ddlCollege").val();
        var cuurntSid = $("#ddlStream").val();
        var totRow = document.getElementById('tableOption').getElementsByTagName("TR").length;
        var tRow = document.getElementById('tableOption').getElementsByTagName("TR");
        var cuurntEleSid = $("#ddlELE1").val();
        collAry = new Array();
        strAry = new Array();
        var colCntr = 0;
        var stCntr = 0;
        for (var i = 1; i < totRow; i++) {
            addedCollege = parseInt(tRow[i].getElementsByTagName("TD")[1].getElementsByTagName("input")[0].value);
            addedStream = parseInt(tRow[i].getElementsByTagName("TD")[2].getElementsByTagName("input")[0].value);
            addedSub = parseInt(tRow[i].getElementsByTagName("TD")[4].getElementsByTagName("input")[0].value);
            if ((addedCollege == cuurntCid) && (addedStream == cuurntSid) && (addedSub == cuurntEleSid)) {
                colCntr = parseInt(colCntr) + 1;
            }
        }
        if (parseInt(colCntr) > 0) {
            alert('You cannot add more than 1 option in same College , Stream & Subject');
            clearDDL();
            return false;
        }


        //===================end same college and stream in button click=======================   
    }

    //===========IF THERE IS DATA IN ADD MORE TABLE AND ALSO SELECTED ON DDL=====         
    if ((document.getElementById('tableOption').getElementsByTagName("TR").length >= 21) && (cIndex != 0) && (sIndex != 0)) {
        alert('You have already added 20 options\n this Option cannot be added');
        clearDDL();
    }
    //=============OPTION DETAILS END==============

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
    if (!DropDownValidation('ddlDay', 'the Day of your date of birth'))
        return false;
    if (!DropDownValidation('ddlMonth', 'the Month of your date of birth'))
        return false;
    if (!DropDownValidation('ddlYear', 'the Year of your date of birth'))
        return false;
    var selDate = $("#ddlDay").val();
    var selMonth = $("#ddlMonth").val();
    var selYear = $("#ddlYear").val();
    if ((selDate > 0) && (selMonth > 0) && (selYear > 0)) {
        if (!(isValidDate(selYear, selMonth, selDate))) {
            alert('Please enter valid dob');
            $("#ddlDay").focus();
            return false;
        }
    }

}
//==================================Repeated Numbers==================
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

//==================================Passing Validation==================
function checkPassingYear() {
    var curr_year = parseInt(2018);
    var year = $('#ddlYOP').val();
    var strYear = $('#ddlYOP').val();
    if (strYear != '') {
        if (year > curr_year) {
            alert('Please enter year between 1963 to 2018');
            $('#ddlYOP').val(0);
            $('#ddlYOP').focus();
            return false;
        }
        else if (year < parseInt(curr_year) - 55) {
            alert('Please enter year between 1963 to 2018');
            $('#ddlYOP').val(0);
            $('#ddlYOP').focus();
            return false;
        }
        else if (strYear.length < 4) {
            alert('Please enter year between 1963 to 2018');
            $('#ddlYOP').val(0);
            $('#ddlYOP').focus();
            return false;
        }
    }
    else {
        alert('Year of passing cannot be left blank');
        $('#ddlYOP').val(0);
        $('#ddlYOP').focus();
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
            if ((ch == "`") || (ch == "'") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "-") || (ch == "+") || (ch == "/") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == ",") || (ch == '=') || (ch == '"') || (ch == '-')) {
                alert(msg);
                document.getElementById(Arr[k]).value = '';
                document.getElementById(Arr[k]).focus();
                return false;
            }
        }
    }
    return true;
}
function CheckSpeCharacterName(Object, msg) {//For Name input in CAF(Restrict Special character except ')
    var Arr = new Array();
    var k;
    Arr = Object.split(',');

    for (k = 0; k < Arr.length; k++) {
        var str1 = document.getElementById(Arr[k]).value;

        for (var i = 0; i < str1.length; i++) {

            var ch = str1.substring(i, i + 1);
            if ((ch == "`") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "-") || (ch == "+") || (ch == "/") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == ",")  || (ch == '=') || (ch == '"') || (ch == '-')) {
                alert(msg);
                document.getElementById(Arr[k]).value = '';
                document.getElementById(Arr[k]).focus();
                return false;
            }
        }
    }
    return true;
}
//======================Check Board Roll================
function checkBoardRoll(Object, msg) {
    var Arr = new Array();
    var k;
    Arr = Object.split(',');
    for (k = 0; k < Arr.length; k++) {
        var str1 = document.getElementById(Arr[k]).value;
        for (var i = 0; i < str1.length; i++) {
            var ch = str1.substring(i, i + 1);
            if ((ch == "`") || (ch == "'") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "+") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == ",")  || (ch == '=') || (ch == '"')) {
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
        $("#" + ctl).val("");
        return false;
    }
}
//===============Email validation==================  
function checkEmail(ctl) {
    if (!EmailValidation(ctl)) {
        $("#" + ctl).val("");
        return false;
    } else {
        CheckDuplicateEmail();
    }
}
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).replace(/\s+/g, '');
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

//===================Function for Dropdownvalidation=========
//function DropDownValidation(ctlName, msg) {
//    var val = $("#" + ctlName).val();  //document.getElementById(ctlName).value;
//    if (val == 0)  {
//        alert('Please select ' + msg);
//        $("#" + ctlName).focus();
//        return false;
//    }
//    else {
//        return true;
//    }
//}

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

    var val = $("#" + ctlName).val(); // document.getElementById(ctlName).value;
    if (val == '') {
        alert(msg + ' cannot be left blank');
        $("#" + ctlName).focus();
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

function addLength(ctlAdd) {
    var add = document.getElementById(ctlAdd).value;
    var len = add.length;
    if (len > 500) {
        alert('Please enter house no.,street/village,post office,\n police station name within 350 characters');
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
            if ((ch == "`") || (ch == "'") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "+") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == ".") || (ch == '=') || (ch == '"')) {
                alert('Special characters except space,hypen,comma & slash are not allowed');
                document.getElementById(Arr[k]).value = '';
                document.getElementById(Arr[k]).focus();
                return false;
            }
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
            if ((ch == "`") || (ch == "'") || (ch == ">") || (ch == "<") || (ch == "!") || (ch == "^") || (ch == "%") || (ch == "?") || (ch == "~") || (ch == "!") || (ch == "@") || (ch == "#") || (ch == "$") || (ch == "&") || (ch == "*") || (ch == "(") || (ch == ")") || (ch == "_") || (ch == "+") || (ch == "|") || (ch == "[") || (ch == "]") || (ch == "{") || ch == "}" || (ch == ":") || (ch == ";") || (ch == ".") || (ch == '=') || (ch == '"')) {
                alert('Special characters except space,hypen,comma & slash are not allowed');
                document.getElementById(Arr[k]).value = '';
                document.getElementById(Arr[k]).focus();
                return false;
            }
        }
    }
    return true;
}
//=============================================================
function addLength(ctlAdd) {
   
    var add = $("#" + ctlAdd).val(); // document.getElementById(ctlAdd).value;
    var len = add.length;
    if (len > 350) {
        alert('Please enter house no.,street/village,post office,\n police station name within 350 characters');
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////Highlight Reservation Category//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//===================Function to highlight Reservation Category1==========

function highLight(ctlchk, ctlspan, msg) {
    if (document.getElementById(ctlchk).checked == true) {
        document.getElementById(ctlspan).style.color = "#CC33FF";
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
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Reset and clear ////////////////////////////////////////////////////

function resetOptionByCid() {
    if ($('#ddlGender').val() == 0) {
        $("#ddlCollege").attr('selectedIndex', 0);
    }
    $("#ddlStream").attr('selectedIndex', 0);
    $("#ddlELE1").attr('selectedIndex', 0);
}

function resetOption() {
    $("#ddlCollege").attr('selectedIndex', 0);
    $("#ddlStream").attr('selectedIndex', 0);
    $("#ddlELE1").attr('selectedIndex', 0);
    $("#ddlELE2").attr('selectedIndex', 0);
    $("#ddlELE3").attr('selectedIndex', 0);

    $("#ddlELE1").disable = false;
    $("#ddlELE2").disable = false;
}
//==============Clear ddl values on college on change==========		      
function clearDDL() {
    document.getElementById('ddlCollegeDistrict').selectedIndex = 0;
    document.getElementById('ddlCollege').selectedIndex = 0;
    for (var i = document.getElementById('ddlStream').length; i > 0; i--) {
        document.getElementById('ddlStream').options[i] = null;
    }
    for (var i = document.getElementById('ddlELE1').length; i > 0; i--) {
        document.getElementById('ddlELE1').options[i] = null;
    }
    for (var i = document.getElementById('ddlCollege').length; i > 0; i--) {
        document.getElementById('ddlCollege').options[i] = null;
    }
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

    for (var i = document.getElementById('ddlELE1').length; i > 0; i--) {
        document.getElementById('ddlELE1').options[i] = null;
    }
}

function clearRollNo() {
    document.getElementById('txtBoardRoll').value = ''
    $("txtBoardRoll").html('');
}

//=======================Function to highlight the Weightage & reservation details============
function highLight(ctlchk, ctlspan, msg) {
    if (document.getElementById(ctlchk).checked == true) {
        document.getElementById(ctlspan).style.color = "#CC33FF";
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


    $("#WBC").css("color", "#000000");
    $("#GENERAL").css("color", "#000000");
    $("#ST").css("color", "#000000");
    $("#SC").css("color", "#000000");
    $("#OTHER").css("color", "#000000");
    $("#OBC").css("color", "#000000");


    if (document.getElementById('rbtST').checked == true) {
        $("#ST").css("color", "#CC33FF");
     
    }
    else if (document.getElementById('rbtSC').checked == true) {
        $("#SC").css("color", "#CC33FF");
       // 
    }
    else if (document.getElementById('rbtOther').checked == true) {
        $("#OTHER").css("color", "#CC33FF");
      //  
    }
    else if (document.getElementById('rbtnOBC').checked == true) {
        $("#OBC").css("color", "#CC33FF");
       // 
    }
    else if (document.getElementById('rbtGeneral').checked == true) {
        $("#GENERAL").css("color", "#CC33FF");
      //  
    }
    else if (document.getElementById('rbtBCW').checked == true) {
        $("#WBC").css("color", "#CC33FF");
      //  
    }

 }
 //===============Function to highlite specialy enabled category============

 function highlitespecialyEnabled() {
     $("#Span2").css("color", "#000000");
     $("#Span1").css("color", "#000000");
 
    if (document.getElementById('chkPHOHN').checked == true) {
         $("#Span2").css("color", "#CC33FF");
          }
     else if (document.getElementById('chkPHOHY').checked == true) {
         $("#Span1").css("color", "#CC33FF");
        }
 }
//===============Function to highlight Reservation category2================
function highlightCat2() {

    $('#NoN').text("None");
    $('#ESM').text("Ex-Service Man (ESM)");
    $('#CoM').text("Children of Martyrs (CoM)");
    $('#SDP').text("Serving Defence Personnel (SDP)");

    if (document.getElementById('rbtESM').checked == true) {
        $("#ESM").css("color", "#CC33FF");
        $("#SDP").css("color", "#000000");
        $("#CoM").css("color", "#000000");
        $("#NoN").css("color", "#000000");
       // 
    }
    else if (document.getElementById('rbtSDP').checked == true) {
        $("#SDP").css("color", "#CC33FF");
        $("#ESM").css("color", "#000000");
        $("#CoM").css("color", "#000000");
        $("#NoN").css("color", "#000000");
       // 
    }
    else if (document.getElementById('rbtCoM').checked == true) {
        $("#CoM").css("color", "#CC33FF");
        $("#ESM").css("color", "#000000");
        $("#SDP").css("color", "#000000");
        $("#NoN").css("color", "#000000");
        //
    }
    else if (document.getElementById('rbtNon').checked == true) {
        $("#NoN").css("color", "#CC33FF");
        $("#ESM").css("color", "#000000");
        $("#SDP").css("color", "#000000");
        $("#CoM").css("color", "#000000");
       // 
    }
}
//=======================highlight osa ==========================
function highlightOSA() {

    if (document.getElementById('rbtCompartmentalY').checked == true) {
        $("#CompY").css("color", "#CC33FF");
        $("#CompN").css("color", "#000000");
    }
    if (document.getElementById('rbtCompartmentalN').checked == true) {
        $("#CompN").css("color", "#CC33FF");
        $("#CompY").css("color", "#000000");

    }
}

function highlightPassHonours() {
    if (document.getElementById('rbtPass').checked == true) {
        $("#SPass").css("color", "#CC33FF");
        $("#SHonours").css("color", "#000000");


    }
    if (document.getElementById('rbtHonours').checked == true) {
        $("#SHonours").css("color", "#CC33FF");
        $("#SPass").css("color", "#000000");

    }
}
function FutureYearAlert() {
    var curr_year = parseInt(2018);
    var year = $('#ddlYOP').val();
    var strYear = $('#ddlYOP').val();
    if (strYear != '') {
        if (year > curr_year || year < parseInt(curr_year) - 55) {
            alert('Please enter year between 1962 to 2018');
            $('#ddlYOP').val(0);
            $('#ddlYOP').focus();
            return false;
        }
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
function isDisplayBankDet(ctl) {

    var income = ctl.value;
    if (income == 4 || income == 0) {
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
}