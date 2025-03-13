


//====================Load District =============//    
function loadDistricts() {
    debugger;
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/LoadDistrict',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption = $('<option value="' + value.IntID + '">' + value.StrName + '</option>');
                $('#ddlNSAMSDistrict').append(newOption);
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
//====================Fill District =============//
function fillDist(ctlDdlVal) {
    debugger;
    $('#ddlNSAMSDistrict option').each(function (j, option) { $(option).remove(); });
    $('#ddlNSAMSCollegeName option').each(function (j, option) { $(option).remove(); });
    var inVal = ctlDdlVal.value;
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/fillDistrict',
        data: "{'intStateId':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            var newOption = $('<option value="0">--SELECT--</option>');
            $('#ddlNSAMSDistrict').append(newOption);
            $.each(JSON.parse(JSON.stringify(response.d)), function (index, value) {
                var newOption = $('<option value="' + value.int_DistrictID + '">' + value.vch_DistrictName + '</option>');
                $('#ddlNSAMSDistrict').append(newOption);
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
        url: 'Cafas.aspx/fillBlock',
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

/////Need To Be checked
function loadLastExam() {
 

    var sctypee = 1000;
    if (document.getElementsByName('radiolistScholarship')[0].checked) {
        sctypee = 1;
    }
    if (document.getElementsByName('radiolistScholarship')[1].checked) {
        sctypee = 2;
    }
    if (document.getElementsByName('radiolistScholarship')[2].checked) {
        sctypee = 3;
    }
    if (document.getElementsByName('radiolistScholarship')[3].checked) {
        sctypee = 4;
    }
    $('#drpLastExamName').empty();
    $('#drpLastExamName').append('<option>--Select--</option>');
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/fillLastExam',
        data: "{'intGrpId':'" + sctypee + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#drpLastExamName').append(newOption);
            }
        },
        dataType: 'json'
    });

}




function loadColleges() {

    var incoltype; var sctype = 1000;
    // $('#ddlSAMSCollegeName option').each(function (j, option) { $(option).remove(); });

    for (var i = document.getElementById('ddlSAMSCollegeName').length; i > 0; i--) {
        document.getElementById('ddlSAMSCollegeName').options[i] = null;
    }

    var inVal = parseInt(document.getElementById('ddlSAMSDistrict').options[document.getElementById('ddlSAMSDistrict').selectedIndex].value);

    if (document.getElementsByName('radiolistScholarship')[0].checked) {
        sctype = 1;
    }
    if (document.getElementsByName('radiolistScholarship')[1].checked) {
        sctype = 2;
    }

    if (document.getElementById('rbtSAMSColList').checked && sctype == 1) {
        incoltype = 1;
    }
    else if (document.getElementById('rbtSAMSColList').checked && sctype == 2) {
        incoltype = 2;
    }
    else {
        incoltype = 3;
    }

    //alert(sctype + "/" + inVal);

    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/fillDistWiseColg',
        data: "{'intDistId':'" + inVal + "','intCType':'" + sctype + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
             for (var i = 0; i < lstdtl.length; i++) {
           
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlSAMSCollegeName').append(newOption);
            }
            // alert(intslno);
        },
        dataType: 'json'
    });
}


function loadXMLDOC() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

function AssignCollegeCode() {
    document.getElementById('hidCollegeID').value = '';
    document.getElementById('hidCCode').value = '';
    document.getElementById('hidCollegeName').value = ''

    var xmlColls = null;
    var xmlhttps = loadXMLDOC();
    xmlhttps.open("GET", "M_COLLEGE_CAFAS.xml", false);
    xmlhttps.send();
    xmlColls = xmlhttps.responseXML;
    var Ccode;
    if (xmlColls != null) {
        if (document.getElementById('rbtSAMSColList').checked) {
            var Cid = parseInt(document.getElementById('ddlSAMSCollegeName').options[document.getElementById('ddlSAMSCollegeName').selectedIndex].value);
        }
        else if (document.getElementById('rbtNSAMSColList').checked) {
            var Cid = parseInt(document.getElementById('ddlNSAMSCollege').options[document.getElementById('ddlNSAMSCollege').selectedIndex].value);
        }
        var col = xmlColls.getElementsByTagName("Table");
        var j;
        for (j = 0; j < col.length; j++) {
            var innerCid = parseInt(col[j].getElementsByTagName("CID")[0].childNodes[0].nodeValue);

            if (innerCid == Cid) {
                Ccode = col[j].getElementsByTagName("CCODE")[0].childNodes[0].nodeValue;
            }
        }
        if (document.getElementById('rbtSAMSColList').checked) {

            document.getElementById('txtSAMSCollegeCode').value = Ccode;

            document.getElementById('hidCollegeName').value = document.getElementById('ddlSAMSCollegeName').options[document.getElementById('ddlSAMSCollegeName').selectedIndex].text;
            document.getElementById('hidCollegeID').value = Cid;
            document.getElementById('hidCCode').value = Ccode;
            alert(Ccode);
        }
        else if (document.getElementById('rbtNSAMSColList').checked) {
            document.getElementById('txtNSAMsCCode').value = Ccode;

            document.getElementById('hidCollegeName').value = document.getElementById('ddlNSAMSCollege').options[document.getElementById('ddlNSAMSCollege').selectedIndex].text;
            document.getElementById('hidCollegeID').value = Cid;
            document.getElementById('hidCCode').value = Ccode;
            alert(Ccode);
        }
    }
}


//==================================================
function fillPDist(ctlDdlVal) {
    $('#ddlCDist option').each(function (j, option) { $(option).remove(); });
    for (var i = document.getElementById('ddlCBlock').length; i > 0; i--) {
        document.getElementById('ddlCBlock').options[i] = null;
    }

    var inVal = ctlDdlVal.value;
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/fillDistrict',
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

//==================================================
function fillNonSubj(ctlDdlVal) {
    $('#ddlSubject option').each(function (j, option) { $(option).remove(); });

    for (var i = document.getElementById('ddlSubject').length; i > 0; i--) {
        document.getElementById('ddlSubject').options[i] = null;
    }
    var inVal = ctlDdlVal.value;
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/fillSubject',
        data: "{'intCourseID':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlSubject').append(newOption);

            }
        },
        dataType: 'json'
    });
}
//==================================================
function fillOthSubj(ctlDdlVal) {
    $('#ddlothsub option').each(function (j, option) { $(option).remove(); });

    for (var i = document.getElementById('ddlothsub').length; i > 0; i--) {
        document.getElementById('ddlothsub').options[i] = null;
    }
    var inVal = ctlDdlVal.value;
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/fillSubject',
        data: "{'intCourseID':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlothsub').append(newOption);

            }
        },
        dataType: 'json'
    });
}
//==================================================
function FillBoard(ctlDdlVal) {
    $('#ddlBoard option').each(function (j, option) { $(option).remove(); });

    for (var i = document.getElementById('ddlBoard').length; i > 0; i--) {
        document.getElementById('ddlBoard').options[i] = null;
    }

    var inVal = $("#drpLastExamName").val()
    if (inVal == 5) {
        inVal = 2;
    }
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/GetBoardDetails',
        data: "{'ExamID':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlBoard').append(newOption);

            }
        },
        dataType: 'json'
    });
}

function loadNonSamsColleges() {

    //    $('#ddlNSAMSCollegeName option').each(function (j, option) { $(option).remove(); });
    var sctype = 1000;

    for (var i = document.getElementById('ddlNSAMSCollegeName').length; i > 0; i--) {
        document.getElementById('ddlNSAMSCollegeName').options[i] = null;
    }
    var inVal = parseInt(document.getElementById('ddlNSAMSDistrict').options[document.getElementById('ddlNSAMSDistrict').selectedIndex].value);

    if (document.getElementsByName('radiolistScholarship')[0].checked) {
        sctype = 1;
    }
    if (document.getElementsByName('radiolistScholarship')[1].checked) {
        sctype = 2;
    }
    if (document.getElementsByName('radiolistScholarship')[2].checked) {
        sctype = 3;
    }
    if (document.getElementsByName('radiolistScholarship')[3].checked) {
        sctype = 4;
    }
    //alert(sctype);
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/fillDistWiseColg',
        data: "{'intDistId':'" + inVal + "','intCType':'" + sctype + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlNSAMSCollegeName').append(newOption);
            }
        },
        dataType: 'json'
    });
}

function loadCourses() {

    var sctypee = 1000;
    $('#ddlCourseName option').each(function (j, option) { $(option).remove(); });
    if (document.getElementsByName('radiolistScholarship')[0].checked) {
        sctypee = 1;
    }
    if (document.getElementsByName('radiolistScholarship')[1].checked) {
        sctypee = 2;
    }
    if (document.getElementsByName('radiolistScholarship')[2].checked) {
        sctypee = 3;
    }
    if (document.getElementsByName('radiolistScholarship')[3].checked) {
        sctypee = 4;
    }

    if (sctypee == 2 || sctypee == 4) {
        $('#divNonSub').show();
    }
    else {
        $('#divNonSub').hide();
    }

    //alert(sctype);
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/fillCourseGrpWise',
        data: "{'intGrpId':'" + sctypee + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlCourseName').append(newOption);
            }
        },
        dataType: 'json'
    });
}
function loadCoursesOther() {

    var sctypee = 1000;
    $('#ddlOthCourse option').each(function (j, option) { $(option).remove(); });
    if (document.getElementsByName('radiolistScholarship')[0].checked) {
        sctypee = 1;
    }
    if (document.getElementsByName('radiolistScholarship')[1].checked) {
        sctypee = 2;
    }
    if (document.getElementsByName('radiolistScholarship')[2].checked) {
        sctypee = 3;
    }
    if (document.getElementsByName('radiolistScholarship')[3].checked) {
        sctypee = 4;
    }

    if (sctypee == 2 || sctypee == 4) {
        $('#divOthSub').show();
    }
    else {
        $('#divOthSub').hide();
    }

    //alert(sctype);
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/fillCourseGrpWise',
        data: "{'intGrpId':'" + sctypee + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + lstdtl[i].StrName + '</option>');
                $('#ddlOthCourse').append(newOption);
            }
        },
        dataType: 'json'
    });
}

//=====================fill BSE Board Mark===================
function FillDetails() {

    $(document).ajaxComplete(function () {
        $("#wait").css("display", "none");
    });

    //    $("#nxt").attr('disabled', true);
    //    $("#nxt").css({ "pointer-events": "pointer" });

    for (var i = document.getElementById('ddlCDist').length; i > 0; i--) {
        document.getElementById('ddlCDist').options[i] = null;
    }

    for (var i = document.getElementById('ddlCBlock').length; i > 0; i--) {
        document.getElementById('ddlCBlock').options[i] = null;
    }
    var Val = 0;

    if (document.getElementsByName('radiolistScholarship')[0].checked) {
        Val = 1;
    }
    else if (document.getElementsByName('radiolistScholarship')[1].checked) {
        Val = 2;
    }
    else if ((document.getElementsByName('radiolistScholarship')[2].checked) || (document.getElementsByName('radiolistScholarship')[3].checked))
    // || (document.getElementsByName('radiolistScholarship')[4].checked))
    {
        Val = 3;
    }
    else {
        Val = 0;
    }

    if (Val == 0) {
        alert("Please select the Scholarship Type");
        $("#ddlScholarType").focus();
        $("#txtRollNo0").val('');
        $("#txtRollNo1").val('');
        return false;
    }


    $('#ER').hide();
    $('#NR1').hide();
    $('#NR2').hide();

    var RollNo = $("#txtRollNo0").val().substring(2, 4).toUpperCase();

    var SesVal;
    if (RollNo == 14) {
        var SesVal = '20' + RollNo;
    }
    if (RollNo == 15) {
        var SesVal = '20' + RollNo;
    }
    if (RollNo == 16) {
        var SesVal = '20' + RollNo;
    }


    var Rollno = document.getElementById('txtRollNo0').value + "-" + document.getElementById('txtRollNo1').value;
    var colid = parseInt(document.getElementById('ddlSAMSCollegeName').options[document.getElementById('ddlSAMSCollegeName').selectedIndex].value);
    var Strmid = parseInt(document.getElementById('ddlSAMSStreamName').options[document.getElementById('ddlSAMSStreamName').selectedIndex].value);


    if ((document.getElementsByName('radiolistScholarship')[0].checked == true) &&
                (document.getElementsByName('radiolistScholarship')[1].checked == false) && (document.getElementsByName('radiolistScholarship')[2].checked == false) &&
                (document.getElementsByName('radiolistScholarship')[3].checked == false))
    // && (document.getElementsByName('radiolistScholarship')[4].checked == false))
    {

        if (document.getElementById('ddlSAMSDistrict').value == '--SELECT') {
            alert("Please select the District");
            $("#ddlSAMSDistrict").focus();
            $("#txtRollNo0").val('');
            $("#txtRollNo1").val('');
            return false;
        }

        if (!DropDownValidation('ddlSAMSCollegeName', 'Institute Name')) {
            $("#txtRollNo0").val('');
            $("#txtRollNo1").val('');
            return false;
        }
    }

    if ((document.getElementsByName('radiolistScholarship')[0].checked == false) &&
                (document.getElementsByName('radiolistScholarship')[1].checked == true) && (document.getElementsByName('radiolistScholarship')[2].checked == false) &&
                (document.getElementsByName('radiolistScholarship')[3].checked == false))
    //&& (document.getElementsByName('radiolistScholarship')[4].checked == false))
    {

        if (document.getElementById('ddlSAMSDistrict').value == '--SELECT') {
            alert("Please select the District");
            $("#ddlSAMSDistrict").focus();
            $("#txtRollNo0").val('');
            $("#txtRollNo1").val('');
            return false;
        }

        if (!DropDownValidation('ddlSAMSCollegeName', 'Institute Name')) {
            $("#txtRollNo0").val('');
            $("#txtRollNo1").val('');
            return false;
        }

        if (!DropDownValidation('ddlSAMSStreamName', 'Stream'))
            return false;
    }

    if ($("#txtRollNo1").val().length < 3 && $("#txtRollNo1").val().length > 0) {
        alert('Please Enter valid Roll Number !')
        //        $("#txtRollNo1").val('');
        return false;
    }








    if (SesVal <= 2016 && SesVal >= 2014 && document.getElementById('txtRollNo0').value != '' && document.getElementById('txtRollNo1').value != '') {
        $(document).ajaxStart(function () {
            $("#wait").css("display", "block");
        });
        $.ajax({
            type: 'POST',
            url: 'Cafas.aspx/fillStDetails',
            data: "{'strRoll':'" + Rollno + "','intYear':'" + SesVal + "','Stype':'" + Val + "','colid':'" + colid + "','strmid':'" + Strmid + "'}",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var lstdtl = eval('(' + response.d + ')');

                if (lstdtl.length > 0) {

                    //=====================Starts Assign Values =================================

                    $(document).ajaxStart(function () {
                        $("#wait").css("display", "block");
                    });
                    var strDOA = lstdtl[0].DOA;
                    var resDOA = strDOA.split('/');
                    $("#ddlSDayIN").val(resDOA[1]);
                    $("#ddlSMonthIN").val(resDOA[0].toUpperCase());
                    $("#ddlSYearIN").val(resDOA[2]);
                    $('#txtApplName').val(lstdtl[0].AppName)
                    $('#txtHolderName').val(lstdtl[0].AppName);
                    $("#ddlGender").val(lstdtl[0].Sex);
                    var str = lstdtl[0].DOB;
                    var res = str.split('/');
                    $("#ddlDay").val(res[1]);
                    $("#ddlMonth").val(res[0].toUpperCase());
                    $("#ddlYear").val(res[2]);
                    $("#ddlReligion").val(lstdtl[0].Religion);
                    $("#ddlMotherTongue").val('15');
                    // alert(lstdtl[0].MotherToung);
                    $("#ddlCategory").val(lstdtl[0].Category);
                    if (lstdtl[0].Ph == "True") {
                        document.getElementById("chkPH").checked = true;
                    }
                    $('#txtCMobNo').val(lstdtl[0].Mob);
                    $('#txtAdharNo').val(lstdtl[0].AdharNo);
                    $('#txtFatherName').val(lstdtl[0].Fname);
                    $('#txtMotherName').val(lstdtl[0].Mname);
                    $("#ddlCState").val(lstdtl[0].Sid);
                    $('#ddlCDist').append($('<option>', {
                        value: lstdtl[0].Did,
                        text: lstdtl[0].Dname
                    }));
                    $("#ddlCDist").val(lstdtl[0].Did);
                    $('#ddlCBlock').append($('<option>', {
                        value: lstdtl[0].Bid,
                        text: lstdtl[0].Bname
                    }));
                    $("#ddlCBlock").val(lstdtl[0].Bid);
                    $('#txtCPS').val(lstdtl[0].Address);
                    $('#txtCPC').val(lstdtl[0].Pin);
                    var strph = lstdtl[0].Phno;
                    var resph = strph.split('/');
                    if (resph.length == 3) {
                        $('#txtCTCode').val(resph[0]);
                        $('#txtCTeleNo').val(resph[2]);
                    }
                    $('#txtCEmail').val(lstdtl[0].Email);
                    if (Val == 1) {
                        $('#txtLastExamName').val('HSE');
                        $('#txtLastExamName').attr('readonly', 'true');
                    }
                    if (Val == 2) {
                        $('#txtLastExamName').val('CHSE');
                        $('#txtLastExamName').attr('readonly', 'true');
                    }
                    $('#txtLastBoardName').val(lstdtl[0].Board);
                    $('#txtLastYOP').val(lstdtl[0].Yop);
                    $("#ddlMarkType").val(1);
                    $('#txtMarkSecured').val(parseFloat(lstdtl[0].Total));
                    $('#txtMaxMark').val(lstdtl[0].MaxTotal);

                    //=====================End Assign Values ======================================

                    //=====================Start Assign Photo Value ===============================
                    var Pathurl;
                    if (document.getElementsByName('radiolistScholarship')[0].checked) {
                        Pathurl = 'http://dc1.dheorissa.in/ONLINE_CAF/APPL_IMAGES';
                    }
                    if (document.getElementsByName('radiolistScholarship')[1].checked) {
                        Pathurl = 'http://dc1.dheorissa.in/ONLINE_CAF_DEG/APPL_IMAGES';
                    }
                    Pathurl = 'http://dc2.dheodisha.gov.in/CAFAS/IMAGES17/'
                    if (SesVal >= 2015) {
                        document.getElementById("ImgAppl").src = Pathurl + SesVal.toString().substring(2) + '/' + lstdtl[0].Bid + '/' + lstdtl[0].Image;
                        document.getElementById("hidImgsourcepath").value = Pathurl + SesVal.toString().substring(2) + '/' + lstdtl[0].Bid + '/' + lstdtl[0].Image;

                    }
                    else {
                        document.getElementById("ImgAppl").src = Pathurl + SesVal.toString().substring(2) + '/' + lstdtl[0].Image;
                        document.getElementById("hidImgsourcepath").value = Pathurl + SesVal.toString().substring(2) + '/' + lstdtl[0].Image;

                    }

                    document.getElementById("hdnImgAppl").value = lstdtl[0].Image;



                    //=====================End Assign Photo Value ===================================   
                    //====================Start Assign Values For HiddenFiels ========================

                    $("#hidCategoryId").val(lstdtl[0].Category);
                    $("#hidReligionID").val(lstdtl[0].Religion);
                    $("#hidpDOBday").val(res[1]);
                    $("#hidpDOBmonth").val(res[0].toUpperCase());
                    $("#hidpDOByear").val(res[2]);
                    $("#hidgenderID").val(lstdtl[0].Sex);
                    $("#hidMotherTongueID").val(lstdtl[0].MotherToung);
                    $("#hidpDOAday").val(resDOA[1]);
                    $("#hidpDOAmonth").val(resDOA[0].toUpperCase());
                    $("#hidpDOyear").val(resDOA[2]);
                    $("#hidStateID").val(lstdtl[0].Sid);
                    $("#hidpDistID").val(lstdtl[0].Did);
                    $("#hidpDistName").val(lstdtl[0].Dname);
                    $("#hidBlockID").val(lstdtl[0].Bid);
                    $("#hidBlockName").val(lstdtl[0].Bname);

                    //========================End Assign Values For HiddenFiels ==============================
                    Disable();
                    $(document).ajaxComplete(function () {
                        $("#wait").css("display", "none");
                    });
                }
                else {
                    clearAfterRollno();
                    alert("Roll Number is not available !");
                    $(document).ajaxComplete(function () {
                        $("#wait").css("display", "none");
                    });
                }
            },
            dataType: 'json'
        });
    }
    else {
        $(document).ajaxComplete(function () {
            $("#wait").css("display", "none");
        });
        alert("Roll Number cannot left blank !");
        return false;
    }
}

//======================Disable Fields================================
function Disable() {

    if ($('#ddlSDayIN').val() != 0) {
        $('#ddlSDayIN').attr("disabled", "disabled");
    }
    else {
        $('#ddlSDayIN').val(0);
        $("#ddlSDayIN").prop("disabled", false);
    }
    if ($('#ddlSMonthIN').val() != 0) {
        $('#ddlSMonthIN').attr("disabled", "disabled");
    }
    else {
        $('#ddlSMonthIN').val(0);
        $("#ddlSMonthIN").prop("disabled", false);
    }
    if ($('#ddlSYearIN').val() != 0) {
        $('#ddlSYearIN').attr("disabled", "disabled");
    }
    else {
        $('#ddlSYearIN').val(0);
        $("#ddlSYearIN").prop("disabled", false);
    }
    if ($('#txtApplName').val() != '') {
        $('#txtApplName').attr('readonly', 'true');
    }
    else {
        $('#txtApplName').val('');
        $("#txtApplName").attr('readonly', false);
    }

    if ($('#ddlGender').val() != 0) {
        $('#ddlGender').attr("disabled", "disabled");
    }
    else {
        $('#ddlGender').val(0);
        $("#ddlGender").prop("disabled", false);
    }
    if ($('#ddlDay').val() != 0) {
        $('#ddlDay').attr("disabled", "disabled");
    }
    else {
        $('#ddlDay').val(0);
        $("#ddlDay").prop("disabled", false);
    }
    if ($('#ddlMonth').val() != 0) {
        $('#ddlMonth').attr("disabled", "disabled");
    }
    else {
        $('#ddlMonth').val(0);
        $("#ddlMonth").prop("disabled", false);
    }
    if ($('#ddlYear').val() != 0) {
        $('#ddlYear').attr("disabled", "disabled");
    }
    else {
        $('#ddlYear').val(0);
        $("#ddlYear").prop("disabled", false);
    }
    if ($('#ddlReligion').val() != 0) {
        $('#ddlReligion').attr("disabled", "disabled");
    }
    else {
        $('#ddlReligion').val(0);
        $("#ddlReligion").prop("disabled", false);
    }
    if ($('#ddlNationality').val() != 0) {
        $('#ddlNationality').attr("disabled", "disabled");
    }
    else {
        $('#ddlNationality').val(0);
        $("#ddlNationality").prop("disabled", false);
    }
    if ($('#ddlCategory').val() != 0) {
        $('#ddlCategory').attr("disabled", "disabled");
    }
    else {
        $('#ddlCategory').val(0);
        $("#ddlCategory").prop("disabled", false);
    }

    if ($('#chkPH').prop("checked") == true) {
        $("#chkPH").attr('readonly', 'true');
    }
    else {
        $("#chkPH").attr('checked', false);
        $("#chkPH").attr('readonly', 'false');

    }
    if ($('#txtFatherName').val() != '') {
        $('#txtFatherName').attr('readonly', 'true');
    }
    else {
        $('#txtFatherName').val('');
        $("#txtFatherName").attr('readonly', false);
    }
    if ($('#txtMotherName').val() != '') {
        $('#txtMotherName').attr('readonly', 'true');
    }
    else {
        $('#txtMotherName').val('');
        $("#txtMotherName").attr('readonly', false);
    }
    if ($('#ddlCState').val() != 0) {
        $('#ddlCState').attr("disabled", "disabled");
    }
    else {
        $('#ddlCState').val(0);
        $("#ddlCState").prop("disabled", false);
    }
    if ($('#ddlCDist').val() != 0) {
        $('#ddlCDist').attr("disabled", "disabled");
    }
    else {
        $('#ddlCDist').val(0);
        $("#ddlCDist").prop("disabled", false);
    }
    if ($('#ddlCBlock').val() != 0) {
        $('#ddlCBlock').attr("disabled", "disabled");
    }
    else {
        $('#ddlCBlock').val(0);
        $("#ddlCBlock").prop("disabled", false);
    }
    if ($('#txtCPS').val() != '') {
        $('#txtCPS').attr('readonly', 'true');
    }
    else {
        $('#txtCPS').val('');
        $("#txtCPS").attr('readonly', false);
    }
    if ($('#txtCPC').val() != '') {
        $('#txtCPC').attr('readonly', 'true');
    }
    else {
        $('#txtCPC').val('');
        $("#txtCPC").attr('readonly', false);
    }
    if ($('#txtLastExamName').val() != '') {
        $('#txtLastExamName').attr('readonly', 'true');
    }
    else {
        $('#txtLastExamName').val('');
        $("#txtLastExamName").attr('readonly', false);
    }
    if ($('#txtLastBoardName').val() != '') {
        $('#txtLastBoardName').attr('readonly', 'true');
    }
    else {
        $('#txtLastBoardName').val('');
        $("#txtLastBoardName").attr('readonly', false);
    }
    if ($('#txtLastYOP').val() != '') {
        $('#txtLastYOP').attr('readonly', 'true');
    }
    else {
        $('#txtLastYOP').val('');
        $("#txtLastYOP").attr('readonly', false);
    }
    if ($('#ddlMarkType').val() != 0) {
        $('#ddlMarkType').attr("disabled", "disabled");
    }
    else {
        $('#ddlMarkType').val(0);
        $("#ddlMarkType").prop("disabled", false);
    }
    if ($('#txtMarkSecured').val() != '') {
        $('#txtMarkSecured').attr('readonly', 'true');
    }
    else {
        $('#txtMarkSecured').val('');
        $("#txtMarkSecured").attr('readonly', false);
    }
    if ($('#txtMaxMark').val() != '') {
        $('#txtMaxMark').attr('readonly', 'true');
    }
    else {
        $('#txtMaxMark').val('');
        $("#txtMaxMark").attr('readonly', false);
    }
}

function OpenUpload() {
    if (document.getElementById("hdnImgAppl").value == "") {
        window.open('UploadPopUp.aspx', 'CollegeCopy', 'left=400,top=300,width=400,height=350,menubar=0,resizable=0,scrollbars=0,addressbar=0');
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
    alert(strInput);
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


//===========================function for Zero at firstplace========
var PatternsDict = new Object()
PatternsDict.whitespacepat = /\s+/
function ZeroValidation1st(ctlName) {
    var str1 = document.getElementById(ctlName).value;
    var Object = document.getElementById(ctlName);
    var objregExp = new RegExp(PatternsDict.whitespacepat)

    if (str1.charAt(0) == "0") {
        alert('Invalid Mobile No.');
        document.getElementById(ctlName).value = '';
        Object.focus()
        return false;

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



//====================Clear All Fields =============
function SCTypeclear() {

    //  $("#rbtSAMSColList").attr('checked', true);
    //    $("#rbtNSAMSColList").attr('checked', false);
    if (document.getElementsByName('radiolistScholarship')[2].checked) {
        $('#subduration').show();
        $('#subother').hide();
    }

    $("#rbtNSAMSColList").attr('checked', true);
    $('.samlist').hide();

    $('.samlist1').hide();
    $('#ER').hide();
    $('#NR1').hide();
    $('#NR2').hide();
    $('.nonsamlist').hide();

    $("#cbse").hide();
    $("#ncbse").show();
    $("#hdnCBSEstatus").val('');

    $('#ddlSAMSDistrict').val('--SELECT');
    for (var i = document.getElementById('ddlSAMSCollegeName').length; i > 0; i--) {
        document.getElementById('ddlSAMSCollegeName').options[i] = null;
    }
    $('.nonsamlistRank').hide();
    $('.PGCourse').hide();
    $('.nonsamlistRank1').hide();
    $('.nonsamlistRank2').hide();

    //    $('#lblothers').hide();
    $('#txtInstName').hide();
    $("#ddlSAMSCollegeName").show();


    if (document.getElementsByName('radiolistScholarship')[2].checked == true || document.getElementsByName('radiolistScholarship')[3].checked == true) {
        $('.TecCourse').show();
        $('.NTecCourse').hide();
    }
    else {
        $('.TecCourse').hide();
        $('.NTecCourse').show();
    }


    if ((document.getElementsByName('radiolistScholarship')[2].checked) && (document.getElementById('rbtNSAMSColList').checked) || (document.getElementsByName('radiolistScholarship')[2].checked) && (document.getElementById('rbtOthers').checked)) {
        $('.duration').show();
    }
    else {
        $('.duration').hide();
    }




    loadLastExam()

    //    if (document.getElementsByName('radiolistScholarship')[0].checked == true) {
    //        $("#drpLastExamName").val(1);
    //        $('#drpLastExamName').attr("disabled", "disabled");

    //    }
    //    else if (document.getElementsByName('radiolistScholarship')[1].checked == true) {
    //        $("#drpLastExamName").val(2);
    //        $('#drpLastExamName').attr("disabled", false);
    //    }
    //    else  {
    //        $("#drpLastExamName").val(4);
    //        $('#drpLastExamName').attr("disabled", "disabled");

    //    }

    var value = $("#drpLastExamName").val()

    FillBoard(value)

    //    if (document.getElementsByName('radiolistScholarship')[2].checked == true || document.getElementsByName('radiolistScholarship')[3].checked == true)
    //       // || document.getElementsByName('radiolistScholarship')[4].checked == true)
    //         {

    //        $("#rbtNSAMSColList").attr('checked', true);
    ////        $("#rbtNSAMSColList").attr('disabled', false);
    //        $("#rbtSAMSColList").attr('disabled', 'disabled');

    //        $('.samlist').hide();
    //        $('.nonsamlist').hide();

    //        $('#Rformat').hide();
    //        $('.nonsamlistRank1').hide();
    //        $('.nonsamlistRank2').hide();
    //        // $('.samlist').hide();

    //        $("#R0").css("display", "none");
    //        $("#R1").css("display", "none");
    //        $("#R2").css("display", "none");
    //    }
    //    else {

    ////        $("#rbtNSAMSColList").attr('disabled', 'disabled');
    //        $("#rbtSAMSColList").attr('disabled', false);
    //    }


    //    if ((document.getElementsByName('radiolistScholarship')[0].checked == true) && (document.getElementsByName('radiolistScholarship')[3].checked == false)
    //       && (document.getElementsByName('radiolistScholarship')[1].checked == false) && (document.getElementsByName('radiolistScholarship')[2].checked == false))
    //      // && (document.getElementsByName('radiolistScholarship')[4].checked == false)) 
    //      {
    //        $('.samlist1').show();
    //        $('#Rformat').hide();
    //        $('#Rformat').text('(e.g. : IS16-001 / IA16-001 / IC16-001 / IK16-001 / IV16-001)');
    //        $('#lblothers').show();
    //    }


    //    if ((document.getElementsByName('radiolistScholarship')[3].checked == false) && (document.getElementsByName('radiolistScholarship')[0].checked == false)
    //       && (document.getElementsByName('radiolistScholarship')[1].checked == true) && (document.getElementsByName('radiolistScholarship')[2].checked == false))
    //      // && (document.getElementsByName('radiolistScholarship')[4].checked == false)) 
    //       {
    //        $('.samlist1').show();
    //        $('#Rformat').hide();
    //        $("#ddlSAMSStreamName").val('0');        
    //        $('#Rformat').text('(e.g. : BS16-001 / BA16-001 / BC16-001 / BK16-001)');
    //        $('#lblothers').show();
    //       
    //    }
    //    else {
    //        $('.samlist1').hide();       
    //    }
    //    

    //    if (document.getElementsByName('radiolistScholarship')[3].checked == false && document.getElementsByName('radiolistScholarship')[0].checked == false
    //       && document.getElementsByName('radiolistScholarship')[1].checked == false && document.getElementsByName('radiolistScholarship')[2].checked == true)
    //      // && document.getElementsByName('radiolistScholarship')[4].checked == false) 
    //       {
    //        $("#spEName").hide();
    //        $("#sprank").hide();

    //        $('.nonsamlistRank1').show();
    //        $('.nonsamlistRank2').show();
    //        $('.PGCourse').hide();
    //    }
    //    else {
    //        $("#spEName").show();
    //        $("#sprank").show();

    //    }

    //    if (document.getElementsByName('radiolistScholarship')[3].checked == true && document.getElementsByName('radiolistScholarship')[0].checked == false
    //       && document.getElementsByName('radiolistScholarship')[1].checked == false && document.getElementsByName('radiolistScholarship')[2].checked == false)
    //      // && document.getElementsByName('radiolistScholarship')[4].checked == false)
    //       {

    //        $('.nonsamlistRank1').hide();
    //        $('.nonsamlistRank2').hide();
    //        $('.PGCourse').show();
    //    }
    //    else {
    //        $('.PGCourse').hide();
    //    }

    //    if (document.getElementsByName('radiolistScholarship')[3].checked == false && document.getElementsByName('radiolistScholarship')[0].checked == false
    //       && document.getElementsByName('radiolistScholarship')[1].checked == false && document.getElementsByName('radiolistScholarship')[2].checked == false)
    //      // && document.getElementsByName('radiolistScholarship')[4].checked == true) 
    //      {

    //        $("#ddlGender").val('2');
    //        $('#ddlGender').attr("disabled", "disabled");
    //        $("#hidgenderID").val('2');

    //        $('.PGCourse').show();
    //        $('.nonsamlistRank1').hide();
    //        $('.nonsamlistRank2').show();
    //    }
    //    else {
    //        $("#ddlGender").val('0');
    //        $("#ddlGender").prop("disabled", false);
    //        $("#hidgenderID").val('0');
    //    }
    $('#ddlSAMSDistrict').find('option[value=35]').remove();

}

function CorDuration() {
    var xmlColls = null;
    var xmlhttps = loadXMLDOC();
    xmlhttps.open("GET", "M_Course.xml", false);
    xmlhttps.send();
    xmlColls = xmlhttps.responseXML;
    if (xmlColls != null) {
        var Coid = parseInt(document.getElementById('ddlCourseName').options[document.getElementById('ddlCourseName').selectedIndex].value);
        var col = xmlColls.getElementsByTagName("Table");
        var j;
        if (Coid != 29) {
            $('#subduration').show();
            $('#subother').hide();
            for (j = 0; j < col.length; j++) {
                var innerCid = parseInt(col[j].getElementsByTagName("int_CourseID")[0].childNodes[0].nodeValue);

                if (innerCid == Coid) {
                    courDur = col[j].getElementsByTagName("int_Duration")[0] ? col[j].getElementsByTagName("int_Duration")[0].childNodes[0].nodeValue : false;
                    document.getElementById('txtduration').value = courDur;
                    document.getElementById('txtduration').disabled = true;
                    break;
                }
            }
        }
        else {
            $('#subduration').hide();
            $('#subother').show();
        }
    }
    else {
        document.getElementById('txtCourseDuration').value = '';
    }
    if (document.getElementById('ddlCourseName').value == '--SELECT COURSE') {
        document.getElementById('txtCourseDuration').value = '';
    }

}

///Course Duration For other  
/// By Satyajit
function CorDuration1() {

    var xmlColls = null;
    var xmlhttps = loadXMLDOC();
    xmlhttps.open("GET", "M_Course.xml", false);
    xmlhttps.send();
    xmlColls = xmlhttps.responseXML;
    if (xmlColls != null) {
        var Coid = parseInt(document.getElementById('ddlOthCourse').options[document.getElementById('ddlOthCourse').selectedIndex].value);
        var col = xmlColls.getElementsByTagName("Table");
        var j;
        if (Coid != 29) {
            $('#durationOther').show();
            $('#subdurationOther').hide();
            for (j = 0; j < col.length; j++) {
                var innerCid = parseInt(col[j].getElementsByTagName("int_CourseID")[0].childNodes[0].nodeValue);

                if (innerCid == Coid) {
                    courDur = col[j].getElementsByTagName("int_Duration")[0] ? col[j].getElementsByTagName("int_Duration")[0].childNodes[0].nodeValue : false;
                    document.getElementById('txtdurationoth').value = courDur;
                    document.getElementById('txtdurationoth').disabled = true;
                    break;
                }
            }
        }
        else {
            $('#durationOther').hide();
            $('#subdurationOther').show();
        }
    }
    else {
        document.getElementById('txtduration').value = '';
    }
    if (document.getElementById('ddlCourseName').value == '--SELECT COURSE') {
        document.getElementById('txtCourseDuration').value = '';
    }

}




function districtassign() {
    $('#hidColName').val($('#ddlSAMSDistrict').find('option:selected').val());
}

function assignval() {

    if (document.getElementById('rbtNSAMSColList').checked) {
        $('#hidpColID').val($('#ddlNSAMSCollegeName').find('option:selected').val());
        $('#hidpColName').val($('#ddlNSAMSCollegeName').find('option:selected').text());
        $('#Rformat').text('');
        $('#hdnCourseID').val($('#ddlCourseName').find('option:selected').val());

        var CourceNameID = $('#ddlCourseName').find('option:selected').val();
        if (CourceNameID != '29') {
            $('#hdnCourseName').val($('#ddlCourseName').find('option:selected').text());
            $('#hdnCouserDuration').val($('#txtduration').val());
        } else {
            $('#hdnCourseName').val($('#txtSubName').val());
        }

        $('#hdnSubid').val($('#ddlSubject').find('option:selected').val());
        $('#hdnSubName').val($('#ddlSubject').find('option:selected').text());
    }
    else {
        $('#hdnCourseID').val($('#ddlOthCourse').find('option:selected').val());
        var CourceNameID = $('#ddlOthCourse').find('option:selected').val();
        if (CourceNameID != '29') {
            $('#hdnCourseName').val($('#ddlOthCourse').find('option:selected').text());
            $('#hdnCouserDuration').val($('#txtdurationoth').val());
        } else {
            $('#hdnCourseName').val($('#txtdurationothName').val());
        }

        $('#hdnSubid').val($('#ddlothsub').find('option:selected').val());
        $('#hdnSubName').val($('#ddlothsub').find('option:selected').text());
    }

    $("#hidDistID").val($('#ddlNSAMSDistrict').find('option:selected').val());
    $("#hidDistName").val($('#ddlNSAMSDistrict').find('option:selected').text());


    $("#hidpDistID").val($('#ddlCDist').find('option:selected').val());
    $("#hidpDistName").val($('#ddlCDist').find('option:selected').text());

    $("#hidBlockID").val($('#ddlCBlock').find('option:selected').val());
    $("#hidBlockName").val($('#ddlCBlock').find('option:selected').text());


    $('#hdnExamID').val($('#drpLastExamName').find('option:selected').val());
    $('#hdnExamName').val($('#drpLastExamName').find('option:selected').text());

    $('#hdnBoardId').val($('#ddlBoard').find('option:selected').val());
    $('#hdnBoardName').val($('#ddlBoard').find('option:selected').text());

    $('#hdnPrinMob').val($('#txtPrinMob').val());


    var arr = $("#ddlSAMSCollegeName").find('option:selected').text().split('-');
    var RCCode = $("#ddlSAMSCollegeName").find('option:selected').text().split('-');



    if ((arr[1].trim() == "CBSE") && ((document.getElementsByName('radiolistScholarship')[0].checked == true) ||
        (document.getElementsByName('radiolistScholarship')[1].checked == false) || (document.getElementsByName('radiolistScholarship')[2].checked == false) ||
        (document.getElementsByName('radiolistScholarship')[3].checked == false))
    //|| (document.getElementsByName('radiolistScholarship')[4].checked == false))
         ||
        (RCCode[1].trim() == "19051909") && ((document.getElementsByName('radiolistScholarship')[0].checked == false) ||
        (document.getElementsByName('radiolistScholarship')[1].checked == true) || (document.getElementsByName('radiolistScholarship')[2].checked == false) ||
        (document.getElementsByName('radiolistScholarship')[3].checked == false))
    //|| (document.getElementsByName('radiolistScholarship')[4].checked == false))
         ||
        (RCCode[1].trim() == "Revenshaw") && ((document.getElementsByName('radiolistScholarship')[0].checked == false) ||
        (document.getElementsByName('radiolistScholarship')[1].checked == true) || (document.getElementsByName('radiolistScholarship')[2].checked == false) ||
        (document.getElementsByName('radiolistScholarship')[3].checked == false))
    //|| (document.getElementsByName('radiolistScholarship')[4].checked == false))

        ) {


        $("#cbse").show();
        $("#ncbse").hide();
        $("#Rformat").val('');
        $('#Rformat').hide();
        $("#hdnCBSEstatus").val('CBSE');

    }
    else {
        $('#Rformat').hide();
        // $('#lblRformat').text('IS16-001 / IA16-001 / IC16-001');
        $("#cbse").hide();
        $("#ncbse").show();
        $("#hdnCBSEstatus").val('');
    }
    OtherSubEnable();
}
function assignval1() {
    $("#txtRollNo0").val('');
    $("#txtRollNo1").val('');
    $("#txtCBSERollno").val('');
    $("#ddlSAMSStreamName").val('0');
}
function MarkCgpaReflact() {
    var MarkType = parseInt(document.getElementById('ddlMarkType').options[document.getElementById('ddlMarkType').selectedIndex].value);
    if (MarkType == 2) {
        $('#lbltypeSecured').text('CGPA');
        $('#lbltypescore').text('CGPA');
    }
    else {
        $('#lbltypeSecured').text('Mark');
        $('#lbltypescore').text('Mark');
    }
}
function clearSamsNsams() {

    if ((document.getElementsByName('radiolistScholarship')[2].checked) && (document.getElementById('rbtNSAMSColList').checked)) {
        $('.duration').show();
    }
    else if ((document.getElementsByName('radiolistScholarship')[2].checked) && (document.getElementById('rbtOthers').checked)) {
        $('.durationOth').show();
    }
    else {
        $('.duration').hide();
        $('.durationOth').hide();
    }
    $('#txtduration').val('');
    $('#txtdurationoth').val('');

    if ((document.getElementById('rbtNSAMSColList').checked) || (document.getElementById('rbtOthers').checked)) {
        $('#ddlNSAMSDistrict').val('--SELECT');
        $('#ddlNSAMSCollegeName').val(0);
        for (var i = document.getElementById('ddlNSAMSCollegeName').length; i > 0; i--) {
            document.getElementById('ddlNSAMSCollegeName').options[i] = null;
        }
        $('#txtNSAMSMailingAddress').val('');
        $('#ddlCourseName').val('--SELECT COURSE');
        $('#txtCourseDuration').val('');
        $('#txtARollno').val('');
        $('#ddlNSDayIN').val(0);
        $('#ddlNSMonthIN').val(0);
        $('#ddlNSYearIN').val(0);


        $('#txtAddressothstate').val('');
        $('#txtInstiwebsite').val('');
        $('#ddlOthCourse').val('--SELECT COURSE');
        $('#txtInstName').val('');
        $('#txtCBSERollno').val('');
        $('#ddlSDayIN').val(0);
        $('#ddlSMonthIN').val(0);
        $('#ddlSYearIN').val(0);



    }
    if (document.getElementById('rbtotherState').checked) {
        $('#txtInstituteName').val('');
        $('#txtAddressothstate').val('');
        $('#txtInstiwebsite').val('');
    }
    if (document.getElementById('rbtodishaSt').checked) {
        $('#ddlNSAMSDistrict').val('--SELECT');
        $('#ddlNSAMSCollegeName').val(0);
        for (var i = document.getElementById('ddlNSAMSCollegeName').length; i > 0; i--) {
            document.getElementById('ddlNSAMSCollegeName').options[i] = null;
        }
        $('#txtNSAMSMailingAddress').val('');
        $('#ddlCourseName').val('--SELECT COURSE');
        $('#txtCourseDuration').val('');
        $('#txtARollno').val('');
        $('#ddlNSDayIN').val(0);
        $('#ddlNSMonthIN').val(0);
        $('#ddlNSYearIN').val(0);
    }
    if (document.getElementById('rbtOthers').checked) {
        $('#txtInstituteName').val('');
        $("#ddlSAMSCollegeName").hide();
        $("#txtInstName").show();
        $("#cbse").show();
        $("#ncbse").hide();
        // $("#ddlDist").addOption(35, "OTHERS");

        $('#ddlSAMSDistrict').append($('<option>', {
            value: '35',
            text: 'OTHERS'
        }));
        $("#txtInstName").val('');
        $("#txtCBSERollno").val('');
        $('.samlist1').hide();
        $('.redtxtind').hide();

    }
    else {
        $("#ddlSAMSCollegeName").show();
        $("#txtInstName").hide();
        $("#cbse").hide();
        $("#ncbse").show();
        $("#txtInstName").val('');
        $("#txtCBSERollno").val('');
        $('#ddlSAMSDistrict').find('option[value=35]').remove();

        //            if (((document.getElementsByName('radiolistScholarship')[0].checked == false) &&
        //            (document.getElementsByName('radiolistScholarship')[1].checked == true) && (document.getElementsByName('radiolistScholarship')[2].checked == false) && (document.getElementsByName('radiolistScholarship')[3].checked == false)))//&& (document.getElementsByName('radiolistScholarship')[4].checked == false))) 
        //            {
        //               $('.samlist1').show();
        //            }
        //            else {
        //                $('.samlist1').hide();
        //            }
        $('.redtxtind').hide();
    }

}


function clearAfterRollno() {
    //    debugger;
    $('#ddlSDayIN').val(0);
    $("#ddlSDayIN").prop("disabled", false);
    $('#ddlSMonthIN').val(0);
    $("#ddlSMonthIN").prop("disabled", false);
    $('#ddlSYearIN').val(0);
    $("#ddlSYearIN").prop("disabled", false);
    $("#txtApplName").val('');
    $("#txtApplName").attr('readonly', false);
    $('#ddlGender').val(0);
    $("#ddlGender").prop("disabled", false);
    $('#ddlDay').val(0);
    $("#ddlDay").prop("disabled", false);
    $('#ddlMonth').val(0);
    $("#ddlMonth").prop("disabled", false);
    $('#ddlYear').val(0);
    $("#ddlYear").prop("disabled", false);
    $('#ddlReligion').val(0);
    $("#ddlReligion").prop("disabled", false);
    $("#ddlNationality").prop("disabled", false);
    $('#ddlMotherTongue').val(15);
    $('#ddlCategory').val(0);
    $("#ddlCategory").prop("disabled", false);
    $("#chkPH").attr('checked', false);
    $('#txtCMobNo').val('');
    $('#txtAdharNo').val('');
    $('#txtFatherName').val('');
    $("#txtFatherName").attr('readonly', false);
    $('#ddlFProfession').val(0);
    $('#txtFIncome').val('');
    $('#lblTotalIncome').val('');
    $('#txtMotherName').val('');
    $("#txtMotherName").attr('readonly', false);
    $('#ddlMProfession').val(0);
    $('#txtMIncome').val('');
    $('#ddlCState').val(0);
    $("#ddlCState").prop("disabled", false);
    $('#ddlCDist').val(0);
    $("#ddlCDist").prop("disabled", false);
    $('#ddlCBlock').val(0);
    $("#ddlCBlock").prop("disabled", false);
    $('#txtCPS').val('');
    $("#txtCPS").attr('readonly', false);
    $('#txtCPC').val('');
    $("#txtCPC").attr('readonly', false);
    $('#txtCTCode').val('');
    $('#txtCTeleNo').val('');
    $('#txtCEmail').val('');
    $('#txtLastExamName').val('');
    $("#txtLastExamName").attr('readonly', false);
    $('#txtLastBoardName').val('');
    $("#txtLastBoardName").attr('readonly', false);
    $('#txtLastYOP').val('');
    $("#txtLastYOP").attr('readonly', false);

    $('#txtCourses').val('');
    $('#txtCDuration').val('');

    if ($('#radiolistScholarship').find(":checked").val() >= 3) {
        $('#ddlMarkType').val(2);
        $('#lbltypeSecured').text('CGPA');
        $('#lbltypescore').text('CGPA');
        //        $('#txtMarkSecured').val('00.0');
    }
    else {
        $('#ddlMarkType').val(1);
        $('#lbltypeSecured').text('Mark');
        $('#lbltypescore').text('Mark');
    }
    $("#ddlMarkType").prop("disabled", false);
    $('#txtMarkSecured').val('');
    $("#txtMarkSecured").attr('readonly', false);
    $('#txtMaxMark').val('');
    $("#txtMaxMark").attr('readonly', false);
    $('#txtHolderName').val('');
    $("#txtMaxMark").attr('readonly', false);
    $('#txtAccountNo').val('');
    $('#txtIFSCCode').val('');
    $('#txtMICRCode').val('');
    $('#ddlBankName').val('--SELECT BANK NAME');
    $('#txtBankName').val('');
    $('#txtBankTelphoneNo').val('');

    //    if ($('#radiolistScholarship').find(":checked").val() == 1) {

    //        $("#cbse").hide();
    //        $('#Rformat').show();
    //        $('#Rformat').text('(e.g. : IS16-001 / IA16-001 / IC16-001 / IK16-001 / IV16-001)');
    //    }
    //    else if ($('#radiolistScholarship').find(":checked").val() == 2) {
    //        $('#Rformat').show();
    //        $('#Rformat').text('(e.g. : BS16-001 / BA16-001 / BC16-001 / BK16-001)');
    //    }
    //    else {
    //        $('#Rformat').hide();
    //    }

    //=========================Clear Non Sams Odisha===========================
    $('#ddlNSAMSDistrict').val('--SELECT');
    for (var i = document.getElementById('ddlNSAMSCollegeName').length; i > 0; i--) {
        document.getElementById('ddlNSAMSCollegeName').options[i] = null;
    }
    //    $('#ddlNSAMSCollegeName').val(0);
    $('#txtNSAMSMailingAddress').val('');
    $('#ddlCourseName').val('--SELECT COURSE');
    $('#txtCourseDuration').val('');
    $('#txtEntranceName').val('');
    $('#txtRank').val('');
    $('#txtARollno').val('');
    $('#ddlNSDayIN').val(0);
    $('#ddlNSMonthIN').val(0);
    $('#ddlNSYearIN').val(0);
    //==========================Clear Non Sams Other State=====================
    $('#txtInstituteName').val('');
    $('#txtAddressothstate').val('');
    $('#txtInstiwebsite').val('');
    document.getElementById("ImgAppl").src = "../images/noimage.png";
    document.getElementById("hdnImgAppl").value = "";
}
//var counter=0;
//function validation() {
//    if (counter == 0) {
//        if (document.getElementsByName('radiolistScholarship')[0].checked == false && document.getElementsByName('radiolistScholarship')[1].checked == false &&
//            document.getElementsByName('radiolistScholarship')[2].checked == false && document.getElementsByName('radiolistScholarship')[3].checked == false &&
//            document.getElementsByName('radiolistScholarship')[4].checked == false) {
//            alert("Please select the Scholarship Type !");
//        }
//        if(document.getElementsByName('radiolistScholarship')[0].checked == false && document.getElementsByName('radiolistScholarship')[1].checked == false)
//    }
//        counter = counter++;
//}

function validation() {
    /////Scholarship information -----------------------
    if (document.getElementsByName('radiolistScholarship')[0].checked == false && document.getElementsByName('radiolistScholarship')[1].checked == false
        && document.getElementsByName('radiolistScholarship')[2].checked == false && document.getElementsByName('radiolistScholarship')[3].checked == false)
    //&& document.getElementsByName('radiolistScholarship')[4].checked == false) 
    {
        alert("Please Select The Scholarship Type !");
        return false;
    }

    /////Applicant information -----------------------
    //============start Junior Merit==========
    if (document.getElementsByName('radiolistScholarship')[0].checked) {
        if (document.getElementById('rbtNSAMSColList').checked) {
            if (!DropDownValidation('ddlNSAMSDistrict', 'District Name'))
                return false;
            if (!DropDownValidation('ddlNSAMSCollegeName', 'Institute Name'))
                return false;

            if (!DropDownValidation('ddlCourseName', 'Course Name'))
                return false;
            //            if (!blankFieldValidation('txtARollno', "Roll Number"))
            //                return false;

            if (!DropDownValidation('ddlNSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
        }
        else if (document.getElementById('rbtOthers').checked) {
            if (!blankFieldValidation('txtInstName', "Institute Name"))
                return false;
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
            if (!DropDownValidation('ddlOthCourse', 'Course Name'))
                return false;
            if (!blankFieldValidation('txtPrinMob', "Principal Mobile Number"))
                return false;
            if (!ZeroValidation1st('txtPrinMob'))
                return false;
            var LengthPMob = $("#txtPrinMob").val().length;
            if (LengthPMob != 10) {
                alert("Please enter valid Principal Mobile Number !");
                $("#txtPrinMob").focus();
                return false;
            }
            //            if (!blankFieldValidation('txtCBSERollno', "Roll Number"))
            //                return false;
            if (!DropDownValidation('ddlSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
        }

    }
    //============end Junior Merit==========
    //============start Senior Merit==========
    else if (document.getElementsByName('radiolistScholarship')[1].checked) {
        if (document.getElementById('rbtNSAMSColList').checked) {
            if (!DropDownValidation('ddlNSAMSDistrict', 'District Name'))
                return false;
            if (!DropDownValidation('ddlNSAMSCollegeName', 'Institute Name'))
                return false;

            if (!DropDownValidation('ddlCourseName', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlCourseName').value;
            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
                if (!DropDownValidation('ddlSubject', 'Subject Name'))
                    return false;
                if (document.getElementById('ddlSubject').value == 307) {
                    if (!blankFieldValidation('txtSubName', "Subject Name"))
                        return false;
                }
            }

            //            if (!blankFieldValidation('txtARollno', "Roll Number"))
            //                return false;

            if (!DropDownValidation('ddlNSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
        }
        else if (document.getElementById('rbtOthers').checked) {
            if (!blankFieldValidation('txtInstName', "Institute Name"))
                return false;
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
            if (!DropDownValidation('ddlOthCourse', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlOthCourse').value;
            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
                if (!DropDownValidation('ddlothsub', 'Subject Name'))
                    return false;
                if (document.getElementById('ddlothsub').value == 307) {
                    if (!blankFieldValidation('txtothSubName', "Subject Name"))
                        return false;
                }
            }
            if (!blankFieldValidation('txtPrinMob', "Principal Mobile Number"))
                return false;
            if (!ZeroValidation1st('txtPrinMob'))
                return false;
            var LengthPMob = $("#txtPrinMob").val().length;
            if (LengthPMob != 10) {
                alert("Please enter valid Principal Mobile Number !");
                $("#txtPrinMob").focus();
                return false;
            }
            //            if (!blankFieldValidation('txtCBSERollno', "Roll Number"))
            //                return false;
            if (!DropDownValidation('ddlSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
        }
    }
    //============end Senior Merit==========
    //============Start Technical / Professional Merit==========
    else if (document.getElementsByName('radiolistScholarship')[2].checked) {
        if (document.getElementById('rbtNSAMSColList').checked) {
            if (!DropDownValidation('ddlNSAMSDistrict', 'District Name'))
                return false;
            if (!DropDownValidation('ddlNSAMSCollegeName', 'Institute Name'))
                return false;

            if (!DropDownValidation('ddlCourseName', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlCourseName').value;


            //            if (CourseVal > 10 ) && ( CourseVal < 30) {
            //                if (!DropDownValidation('ddlSubject', 'Subject Name'))
            //                    return false;
            //            }

            //            if (!blankFieldValidation('txtARollno', "Roll Number"))
            //                return false;

            if (!DropDownValidation('ddlNSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
        }
        else if (document.getElementById('rbtOthers').checked) {
            if (!blankFieldValidation('txtInstName', "Institute Name"))
                return false;
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
            if (!DropDownValidation('ddlOthCourse', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlOthCourse').value;
            //            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
            //                if (!DropDownValidation('ddlothsub', 'Subject Name'))
            //                    return false;
            //            }
            if (!blankFieldValidation('txtPrinMob', "Principal Mobile Number"))
                return false;
            if (!ZeroValidation1st('txtPrinMob'))
                return false;
            var LengthPMob = $("#txtPrinMob").val().length;
            if (LengthPMob != 10) {
                alert("Please enter valid Principal Mobile Number !");
                $("#txtPrinMob").focus();
                return false;
            }
            //            if (!blankFieldValidation('txtCBSERollno', "Roll Number"))
            //                return false;
            if (!DropDownValidation('ddlSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
        }
    }
    //============END Technical / Professional Merit==========
    //============Start P.G. Merit Merit==========
    else if (document.getElementsByName('radiolistScholarship')[3].checked) {
        if (document.getElementById('rbtNSAMSColList').checked) {
            if (!DropDownValidation('ddlNSAMSDistrict', 'District Name'))
                return false;
            if (!DropDownValidation('ddlNSAMSCollegeName', 'Institute Name'))
                return false;

            if (!DropDownValidation('ddlCourseName', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlCourseName').value;
            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
                if (!DropDownValidation('ddlSubject', 'Subject Name'))
                    return false;
                if (document.getElementById('ddlSubject').value == 307) {
                    if (!blankFieldValidation('txtSubName', "Subject Name"))
                        return false;
                }
            }

            //            if (!blankFieldValidation('txtARollno', "Roll Number"))
            //                return false;

            if (!DropDownValidation('ddlNSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
        }
        else if (document.getElementById('rbtOthers').checked) {
            if (!blankFieldValidation('txtInstName', "Institute Name"))
                return false;
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
            if (!DropDownValidation('ddlOthCourse', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlOthCourse').value;
            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
                if (!DropDownValidation('ddlothsub', 'Subject Name'))
                    return false;
                if (document.getElementById('ddlothsub').value == 307) {
                    if (!blankFieldValidation('txtothSubName', "Subject Name"))
                        return false;
                }
            }
            if (!blankFieldValidation('txtPrinMob', "Principal Mobile Number"))
                return false;
            if (!ZeroValidation1st('txtPrinMob'))
                return false;
            var LengthPMob = $("#txtPrinMob").val().length;
            if (LengthPMob != 10) {
                alert("Please enter valid Principal Mobile Number !");
                $("#txtPrinMob").focus();
                return false;
            }
            //            if (!blankFieldValidation('txtCBSERollno', "Roll Number"))
            //                return false;
            if (!DropDownValidation('ddlSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
        }
    }
    //============END P.G. Merit ==========

    if (document.getElementById("hdnImgAppl").value == '') {
        alert("Please upload your photo !");
        return false;
    }
    //     || document.getElementById("hidImgsourcepath").value == ''

    if (!blankFieldValidation('txtApplName', "Applicant Name"))
        return false;
    if (!DropDownValidation('ddlGender', 'Gender'))
        return false;

    if (!DropDownValidation('ddlDay', 'Day, from Date of Birth'))
        return false;
    if (!DropDownValidation('ddlMonth', 'Month, from Date of Birth'))
        return false;
    if (!DropDownValidation('ddlYear', 'Year, from Date of Birth'))
        return false;

    var selAdmYear = parseInt(document.getElementById('ddlNSYearIN').value);
    var selbirthYear = parseInt(document.getElementById('ddlYear').value);



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

    if (!DropDownValidation('ddlReligion', 'Religion'))
        return false;
    if (!DropDownValidation('ddlNationality', 'Nationality'))
        return false;
    if (!DropDownValidation('ddlMotherTongue', 'Mother Tonue'))
        return false;
    if (!DropDownValidation('ddlCategory', 'Cateory'))
        return false;
    if (!blankFieldValidation('txtCMobNo', "Mobile Number"))
        return false;
    if (!ZeroValidation1st('txtCMobNo'))
        return false;
    var txtLength = $("#txtCMobNo").val().length;
    if (txtLength != 10) {
        alert("Please enter valid Mobile Number !");
        $("#txtCMobNo").focus();
        return false;
    }
    //    if (!blankFieldValidation('txtAdharNo', "Aadhaar Number"))
    //        return false;

    if (!ValidAadhaarNo($("#txtAdharNo").val())) {
        alert('Invalid Aadhar number');
        $("#txtAdharNo").val('');
        return false;
    }

    /////Parent Guidian information -----------------------
    if (!blankFieldValidation('txtFatherName', "Father Name"))
        return false;
    if (!DropDownValidation('ddlFProfession', 'Father Profession'))
        return false;
    if (!blankFieldValidation('txtFIncome', "Father Annual Income"))
        return false;
    if (!blankFieldValidation('txtMotherName', "Mother Name"))
        return false;
    if (!DropDownValidation('ddlMProfession', 'Mother Profession'))
        return false;
    if (!blankFieldValidation('txtMIncome', "Mother Annual Income"))
        return false;
    if (document.getElementById('fldDocsFather').value == '') {
        alert('Please Upload a Income Certificate of Parent');
        document.getElementById('fldDocsFather').focus()
        return false;
    }
    if (document.getElementById('fldDocsFather').value.lastIndexOf(".pdf") == -1) {
        alert("Please upload only pdf file");
        document.getElementById('fldDocsFather').focus();
        return false;
    }

    /////Permanent address information -----------------------
    if (!DropDownValidation('ddlCState', 'State'))
        return false;
    if (!DropDownValidation('ddlCDist', 'District'))
        return false;
    if (!DropDownValidation('ddlCBlock', 'Block'))
        return false;
    if (!blankFieldValidation('txtCPS', "Address"))
        return false;
    if (document.getElementById('fldDocsResident').value == '') {
        alert('Please Upload a Residential Certificate');
        document.getElementById('fldDocsResident').focus()
        return false;
    }
    if (document.getElementById('fldDocsResident').value.lastIndexOf(".pdf") == -1) {
        alert("Please upload only pdf file");
        document.getElementById('fldDocsResident').focus();
        return false;
    }

    //    if (!blankFieldValidation('txtCPC', "PIN Code"))
    //        return false;

    if ($("#txtCEmail").val() != '') {
        if (!EmailValidation('txtCEmail'))
            return false;
    }

    /////Examinations information -----------------------
    if (!DropDownValidation('drpLastExamName', 'Exam Name'))
        return false;
    if (!DropDownValidation('ddlBoard', 'Name of Board / Council / University'))
        return false;
    if (!DropDownValidation('ddlLastYop', 'Year of Passing'))
        return false;

    if (!DropDownValidation('ddlMarkType', 'Mark Secured'))
        return false;
    if (!blankFieldValidation('txtMarkSecured', "Mark Secured"))
        return false;
    if (!blankFieldValidation('txtMaxMark', "Maximum Mark"))
        return false;
    if (document.getElementById('fldDocsMark').value == '') {
        alert('Please Upload a Mark Certificate');
        document.getElementById('fldDocsMark').focus()
        return false;
    }
    if (document.getElementById('fldDocsMark').value.lastIndexOf(".pdf") == -1) {
        alert("Please upload only pdf file");
        document.getElementById('fldDocsMark').focus();
        return false;
    }
    /////Bank information -----------------------

    if (!blankFieldValidation('txtHolderName', "Beneficiary Name"))
        return false;
    if (!blankFieldValidation('txtAccountNo', "Account Number"))
        return false;
    if (!blankFieldValidation('txtIFSCCode', "IFSC Number"))
        return false;

    //    if (!blankFieldValidation('txtMICRCode', "MICR Code"))
    //        return false;
    //    if (!DropDownValidation('ddlBankName', 'Bank Name'))
    //        return false;
    if (document.getElementById('ddlBankName').value == '--SELECT BANK NAME') {
        alert("Please select the Bank Name !");
        document.getElementById('ddlBankName').focus();
        return false;
    }
    if (!blankFieldValidation('txtBankName', "Branch Name"))
        return false;

    //isIFSCCode('txtIFSCCode');
    if (document.getElementById('fldDocsBankAcnt').value == '') {
        alert('Please Upload First Page of your Bank Passbook');
        document.getElementById('fldDocsBankAcnt').focus()
        return false;
    }
    if (document.getElementById('fldDocsBankAcnt').value.lastIndexOf(".pdf") == -1) {
        alert("Please upload only pdf file");
        document.getElementById('fldDocsBankAcnt').focus();
        return false;
    }

    //alert('hi');
    if (confirm('Have you verified your form ?')) {
        if (confirm('Do you want to confirm this ?')) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function parentAnuIncomeCheck() {

    //if ((document.getElementsByName('radiolistScholarship')[4].checked == false)) {
    var totincome = parseInt($("#txtFIncome").val() == '' ? 0 : $("#txtFIncome").val()) + parseInt($("#txtMIncome").val() == '' ? 0 : $("#txtMIncome").val())
    if (totincome > 600000) {
        alert("Parents annual income should not greater then 6 lakhs !");
        $("#txtFIncome").val(''); $("#txtMIncome").val('');
        return false;
    }
    // }

}


function FAnuIncomevalid() {

    if ($("#txtFatherName").val() == '') {
        alert('Father Name cannot left blank !')
        $("#txtFIncome").val('');
        $("#txtFatherName").focus();
        return false;
    }
    var prof = parseInt(document.getElementById('ddlFProfession').options[document.getElementById('ddlFProfession').selectedIndex].value);

    if (prof == 0) {
        alert('Father Prefession cannot left blank !')
        $("#txtFIncome").val('');
        $("#ddlFProfession").focus();
        return false;
    }
    parentAnuIncomeTotal();
}

function MAnuIncomevalid() {

    if ($("#txtMotherName").val() == '') {
        alert('Mother Name cannot left blank !')
        $("#txtMIncome").val('');
        $("#txtMotherName").focus();
        return false;
    }
    var prof = parseInt(document.getElementById('ddlMProfession').options[document.getElementById('ddlMProfession').selectedIndex].value);

    if (prof == 0) {
        alert('Mother Prefession cannot left blank !')
        $("#txtMIncome").val('');
        $("#ddlMProfession").focus();
        return false;
    }
    parentAnuIncomeTotal();
}
function parentAnuIncomeTotal() {
    var totincome = parseInt($("#txtFIncome").val() == '' ? 0 : $("#txtFIncome").val()) + parseInt($("#txtMIncome").val() == '' ? 0 : $("#txtMIncome").val())
    $("#lblTotalIncome").text(totincome);

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
            alert("You Entered Wrong IFSC Code \n\n ------ or------ \n\n IFSC code should be count 11 \n\n-> Starting 4 should be only alphabets[A-Z] \n\n->Then 0, Remaining 6 should be accepting only alphanumeric");
            ctl.value = '';
            ctl.focus();
            return false;
        }
    }
}

function rollnolength() {
    var txtLength = $("#txtRollNo0").val().length;
    if ($("#txtRollNo0").val() != '') {
        if (txtLength != 4) {
            alert("Please enter valid Roll Number !");
            $("#txtRollNo0").val(''); $("#txtRollNo1").val('');
            $("#txtRollNo0").focus();
            return false;
        }
        if (document.getElementsByName('radiolistScholarship')[0].checked) {
            var Roll0 = $("#txtRollNo0").val().substring(0, 2).toUpperCase();
            var Roll1 = $("#txtRollNo0").val().substring(2, 4).toUpperCase();

            if (!(Roll0 == 'IA' || Roll0 == 'IC' || Roll0 == 'IS' || Roll0 == 'IK' || Roll0 == 'IV')) {
                alert("Roll Number starts with IS,IA,IC,IK,IV !");
                $("#txtRollNo0").val(''); $("#txtRollNo1").val('');
                $("#txtRollNo0").focus();
                return false;
            }
            if (Roll1 != '16') {
                alert("Roll Number accept only current year!");
                $("#txtRollNo0").val(''); $("#txtRollNo1").val('');
                $("#txtRollNo0").focus();
                return false;
            }
        }
        if (document.getElementsByName('radiolistScholarship')[1].checked) {
            var Roll0 = $("#txtRollNo0").val().substring(0, 2).toUpperCase();
            var Roll1 = $("#txtRollNo0").val().substring(2, 4).toUpperCase();

            if ((inVal == 1) && !(Roll0 == 'BA')) {
                alert("Roll Number starts with BA !");
                $("#txtRollNo0").val(''); $("#txtRollNo1").val('');
                $("#txtRollNo0").focus();
                return false;
            }
            if ((inVal == 4 || inVal == 5 || inVal == 8) && !(Roll0 == 'BS')) {
                alert("Roll Number starts with BS !");
                $("#txtRollNo0").val(''); $("#txtRollNo1").val('');
                $("#txtRollNo0").focus();
                return false;
            }
            if ((inVal == 3) && !(Roll0 == 'BC')) {
                alert("Roll Number starts with BC !");
                $("#txtRollNo0").val(''); $("#txtRollNo1").val('');
                $("#txtRollNo0").focus();
                return false;
            }

            if ((inVal == 12) && !(Roll0 == 'BK')) {
                alert("Roll Number starts with BK !");
                $("#txtRollNo0").val(''); $("#txtRollNo1").val('');
                $("#txtRollNo0").focus();
                return false;
            }
            //            if (!(Roll0 == 'BA' || Roll0 == 'BC' || Roll0 == 'BS' || Roll0 == 'BK')) {
            //                alert("Roll Number starts with BS,BA,BC,BK !");
            //                $("#txtRollNo0").val(''); $("#txtRollNo1").val('');
            //                $("#txtRollNo0").focus();
            //                return false;
            //            }
            if (Roll1 != '16') {
                alert("Roll Number accept only current year!");
                $("#txtRollNo0").val(''); $("#txtRollNo1").val('');
                $("#txtRollNo0").focus();
                return false;
            }
        }
    }

}
function validroll() {
    var txtLength1 = $("#txtRollNo1").val().length;
    if (txtLength1 < 3) {
        alert("Please enter valid Roll Number !");
        $("#txtRollNo1").val('');
        $("#txtRollNo1").focus();
        return false;
    }
}
function adharnolength() {
    var txtLength = $("#txtAdharNo").val().length;

    if (txtLength != 12 && txtLength > 0) {
        alert("Please enter valid Aadhaar Number !");
        $("#txtAdharNo").val('');
        $("#txtAdharNo").focus();
        return false;
    }
}
function YOPlength() {
    var txtLength = $("#txtLastYOP").val().length;

    if (txtLength != 4 && txtLength > 0) {
        alert("Please enter valid Year of passing !");
        $("#txtLastYOP").focus();
        $("#txtLastYOP").val('');
    }
    if ((parseInt($("#txtLastYOP").val()) > 2016) || (parseInt($("#txtLastYOP").val()) < 2010)) {
        alert("Year of passing should not greater than 2016 and less then 2010 !");
        $("#txtLastYOP").val('');
        return false;
    }

}
function Moblength() {
    var txtLength = $("#txtCMobNo").val().length;
    if (txtLength != 10) {
        alert("Please enter valid Mobile Number !");
        $("#txtCMobNo").focus();
    }
}
function pinlength() {
    var txtLength = $("#txtCPC").val().length;
    if (txtLength != 6 && txtLength > 0) {
        alert("Please enter valid Pin Code !");
        $("#txtCPC").val('');
        $("#txtCPC").focus();
    }
}
function validmark() {
    if (parseInt($("#txtMarkSecured").val()) <= 0) {
        alert("Secured Mark should not less then or equal to Zero!");
        $("#txtMarkSecured").val('');
        return false;
    }

    if (parseInt($("#txtMarkSecured").val()) > parseInt($("#txtMaxMark").val())) {
        alert("Secured Mark should not greater then Max Mark!");
        $("#txtMarkSecured").val(''); $("#txtMaxMark").val('');
        return false;
    }
}

//========================VALIDATION OF ALL PANEL====================================================
//======================== Start Validation of Scholarship Information===============================
function validateSTypeNext() {

    if (document.getElementsByName('radiolistScholarship')[0].checked == false && document.getElementsByName('radiolistScholarship')[1].checked == false &&
            document.getElementsByName('radiolistScholarship')[2].checked == false && document.getElementsByName('radiolistScholarship')[3].checked == false
    //           && document.getElementsByName('radiolistScholarship')[4].checked == false
           ) {
        alert("Please select the Scholarship Type !");
        return false;
    }
    else {
        $("#fst").hide();
        $("#snd").show();
        $('.tab-panel-cafastrail li').removeClass('active');
        $('.tab-panel-cafastrail li.applicant-info').addClass('active');
    }
}
//======================== End Validation of Scholarship Information===============================
//======================== Start Validation of Applicant Information===============================
//===========Modified By Bairagi on 30/August/2017===========
function validateAppinforNext() {
    //============start Junior Merit==========
    if (document.getElementsByName('radiolistScholarship')[0].checked) {
        if (document.getElementById('rbtNSAMSColList').checked) {
            if (!DropDownValidation('ddlNSAMSDistrict', 'District Name'))
                return false;
            if (!DropDownValidation('ddlNSAMSCollegeName', 'Institute Name'))
                return false;

            if (!DropDownValidation('ddlCourseName', 'Course Name'))
                return false;
            //            if (!blankFieldValidation('txtARollno', "Roll Number"))
            //                return false;

            if (!DropDownValidation('ddlNSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
            //                        if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                            return false;
        }
        else if (document.getElementById('rbtOthers').checked) {
            if (!blankFieldValidation('txtInstName', "Institute Name"))
                return false;
            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
                return false;
            if (!DropDownValidation('ddlOthCourse', 'Course Name'))
                return false;
            if (!blankFieldValidation('txtPrinMob', "Principal Mobile Number"))
                return false;
            if (!ZeroValidation1st('txtPrinMob'))
                return false;
            var LengthPMob = $("#txtPrinMob").val().length;
            if (LengthPMob != 10) {
                alert("Please enter valid Principal Mobile Number !");
                $("#txtPrinMob").focus();
                return false;
            }
            //            if (!blankFieldValidation('txtCBSERollno', "Roll Number"))
            //                return false;
            if (!DropDownValidation('ddlSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
        }

    }
    //============end Junior Merit==========
    //============start Senior Merit==========
    else if (document.getElementsByName('radiolistScholarship')[1].checked) {
        if (document.getElementById('rbtNSAMSColList').checked) {
            if (!DropDownValidation('ddlNSAMSDistrict', 'District Name'))
                return false;
            if (!DropDownValidation('ddlNSAMSCollegeName', 'Institute Name'))
                return false;

            if (!DropDownValidation('ddlCourseName', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlCourseName').value;
            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
                if (!DropDownValidation('ddlSubject', 'Subject Name'))
                    return false;
                if (document.getElementById('ddlSubject').value == 307) {
                    if (!blankFieldValidation('txtSubName', "Subject Name"))
                        return false;
                }
            }

            //            if (!blankFieldValidation('txtARollno', "Roll Number"))
            //                return false;

            if (!DropDownValidation('ddlNSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
        }
        else if (document.getElementById('rbtOthers').checked) {
            if (!blankFieldValidation('txtInstName', "Institute Name"))
                return false;
            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
                return false;
            if (!DropDownValidation('ddlOthCourse', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlOthCourse').value;
            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
                if (!DropDownValidation('ddlothsub', 'Subject Name'))
                    return false;
                if (document.getElementById('ddlothsub').value == 307) {
                    if (!blankFieldValidation('txtothSubName', "Subject Name"))
                        return false;
                }
            }
            if (!blankFieldValidation('txtPrinMob', "Principal Mobile Number"))
                return false;
            if (!ZeroValidation1st('txtPrinMob'))
                return false;
            var LengthPMob = $("#txtPrinMob").val().length;
            if (LengthPMob != 10) {
                alert("Please enter valid Principal Mobile Number !");
                $("#txtPrinMob").focus();
                return false;
            }
            //            if (!blankFieldValidation('txtCBSERollno', "Roll Number"))
            //                return false;
            if (!DropDownValidation('ddlSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
        }
    }
    //============end Senior Merit==========
    //============Start Technical / Professional Merit==========
    else if (document.getElementsByName('radiolistScholarship')[2].checked) {
        if (document.getElementById('rbtNSAMSColList').checked) {
            if (!DropDownValidation('ddlNSAMSDistrict', 'District Name'))
                return false;
            if (!DropDownValidation('ddlNSAMSCollegeName', 'Institute Name'))
                return false;

            if (!DropDownValidation('ddlCourseName', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlCourseName').value;


            $('#drpLastExamName').empty();
            $('#drpLastExamName').append('<option>--Select--</option>');
            if (CourseVal > 9 && CourseVal < 30) {
                var newOption = $('<option value="' + 5 + '"> 12th Board Examination  </option>');
                $('#drpLastExamName').append(newOption);
            } else {
                var newOption = $('<option value="' + 3 + '"> Degree Examination  </option>');
                $('#drpLastExamName').append(newOption);

            }

            //            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
            //                if (!DropDownValidation('ddlSubject', 'Subject Name'))
            //                    return false;
            //            }

            //            if (!blankFieldValidation('txtARollno', "Roll Number"))
            //                return false;

            if (!DropDownValidation('ddlNSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
        }
        else if (document.getElementById('rbtOthers').checked) {
            if (!blankFieldValidation('txtInstName', "Institute Name"))
                return false;
            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
                return false;
            if (!DropDownValidation('ddlOthCourse', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlOthCourse').value;


            $('#drpLastExamName').empty();
            $('#drpLastExamName').append('<option>--Select--</option>');
            if (CourseVal > 9 && CourseVal < 30) {
                var newOption = $('<option value="' + 5 + '"> 12th Board Examination  </option>');
                $('#drpLastExamName').append(newOption);
            } else {
                var newOption = $('<option value="' + 3 + '"> Degree Examination  </option>');
                $('#drpLastExamName').append(newOption);

            }



            //            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
            //                if (!DropDownValidation('ddlothsub', 'Subject Name'))
            //                    return false;
            //            }
            if (!blankFieldValidation('txtPrinMob', "Principal Mobile Number"))
                return false;
            if (!ZeroValidation1st('txtPrinMob'))
                return false;
            var LengthPMob = $("#txtPrinMob").val().length;
            if (LengthPMob != 10) {
                alert("Please enter valid Principal Mobile Number !");
                $("#txtPrinMob").focus();
                return false;
            }
            //            if (!blankFieldValidation('txtCBSERollno', "Roll Number"))
            //                return false;
            if (!DropDownValidation('ddlSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
        }
    }
    //============END Technical / Professional Merit==========
    //============Start P.G. Merit Merit==========
    else if (document.getElementsByName('radiolistScholarship')[3].checked) {
        if (document.getElementById('rbtNSAMSColList').checked) {
            if (!DropDownValidation('ddlNSAMSDistrict', 'District Name'))
                return false;
            if (!DropDownValidation('ddlNSAMSCollegeName', 'Institute Name'))
                return false;

            if (!DropDownValidation('ddlCourseName', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlCourseName').value;
            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
                if (!DropDownValidation('ddlSubject', 'Subject Name'))
                    return false;
                if (document.getElementById('ddlSubject').value == 307) {
                    if (!blankFieldValidation('txtSubName', "Subject Name"))
                        return false;
                }
            }

            //            if (!blankFieldValidation('txtARollno', "Roll Number"))
            //                return false;

            if (!DropDownValidation('ddlNSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlNSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
            //            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
            //                return false;
        }
        else if (document.getElementById('rbtOthers').checked) {
            if (!blankFieldValidation('txtInstName', "Institute Name"))
                return false;
            if (!blankFieldValidation('txtAddressothstate', "Institute Address"))
                return false;
            if (!DropDownValidation('ddlOthCourse', 'Course Name'))
                return false;
            var CourseVal = document.getElementById('ddlOthCourse').value;
            if (CourseVal == 5 || CourseVal == 7 || CourseVal == 9) {
                if (!DropDownValidation('ddlothsub', 'Subject Name'))
                    return false;
                if (document.getElementById('ddlothsub').value == 307) {
                    if (!blankFieldValidation('txtothSubName', "Subject Name"))
                        return false;
                }
            }
            if (!blankFieldValidation('txtPrinMob', "Principal Mobile Number"))
                return false;
            if (!ZeroValidation1st('txtPrinMob'))
                return false;
            var LengthPMob = $("#txtPrinMob").val().length;
            if (LengthPMob != 10) {
                alert("Please enter valid Principal Mobile Number !");
                $("#txtPrinMob").focus();
                return false;
            }
            //            if (!blankFieldValidation('txtCBSERollno', "Roll Number"))
            //                return false;
            if (!DropDownValidation('ddlSDayIN', 'Day, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSMonthIN', 'Month, from Date of admission'))
                return false;
            if (!DropDownValidation('ddlSYearIN', 'Year, from Date of admission'))
                return false;

            var selDate1 = document.getElementById('ddlNSDayIN').value;
            var selMonth1 = document.getElementById('ddlNSMonthIN').value;
            var selYear1 = document.getElementById('ddlNSYearIN').value;

            if ((selDate1 > 0) && (selMonth1 > 0) && (selYear1 > 0)) {
                if (!(isValidDate(selYear1, selMonth1, selDate1))) {
                    alert('Please enter valid Date Of admission !');
                    document.getElementById('ddlNSDayIN').focus();
                    return false;
                }
            }
        }
    }
    //============END P.G. Merit ==========

    if (document.getElementById("hdnImgAppl").value == '') {
        alert("Please upload your photo !");
        $("#ImgAppl").focus();
        return false;
    }
    //     || document.getElementById("hidImgsourcepath").value == ''
    if (!blankFieldValidation('txtApplName', "Applicant Name"))
        return false;
    if (!DropDownValidation('ddlGender', 'Gender'))
        return false;

    if (!DropDownValidation('ddlDay', 'Day, from Date of Birth'))
        return false;
    if (!DropDownValidation('ddlMonth', 'Month, from Date of Birth'))
        return false;
    if (!DropDownValidation('ddlYear', 'Year, from Date of Birth'))
        return false;

    var selAdmYear = parseInt(document.getElementById('ddlNSYearIN').value);
    var selbirthYear = parseInt(document.getElementById('ddlYear').value);



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

    if (!DropDownValidation('ddlReligion', 'Religion'))
        return false;
    if (!DropDownValidation('ddlNationality', 'Nationality'))
        return false;
    if (!DropDownValidation('ddlMotherTongue', 'Mother Tonue'))
        return false;
    if (!DropDownValidation('ddlCategory', 'Cateory'))
        return false;
    if (!blankFieldValidation('txtCMobNo', "Mobile Number"))
        return false;
    if (!ZeroValidation1st('txtCMobNo'))
        return false;
    var txtLength = $("#txtCMobNo").val().length;
    if (txtLength != 10) {
        alert("Please enter valid Mobile Number !");
        $("#txtCMobNo").focus();
        return false;
    }
    //    if (!blankFieldValidation('txtAdharNo', "Aadhaar Number"))
    //        return false;

    if (!ValidAadhaarNo($("#txtAdharNo").val())) {
        alert('Invalid Aadhar number');
        $("#txtAdharNo").val('');
        return false;
    }

    else {
        $("#snd").hide();
        $("#Trd").show();
        $('.tab-panel-cafastrail li').removeClass('active');
        $('.tab-panel-cafastrail li.parent-info').addClass('active');
    }

}
function validateAppinforPrv() {
    $("#snd").hide();
    $("#fst").show();
    $('.tab-panel-cafastrail li').removeClass('active');
    $('.tab-panel-cafastrail li.scholarship-info').addClass('active');
}
//======================== End Validation of Applicant Information===============================
//======================== Start Validation of Parent/Guardian Information=======================
function validateParentinforNext() {
    //    $("#Trd").hide();
    //    $("#Fth").show();
    //    $('.tab-panel-cafastrail li').removeClass('active');
    //    $('.tab-panel-cafastrail li.address-info').addClass('active');

    if (!blankFieldValidation('txtFatherName', "Father Name"))
        return false;
    if (!DropDownValidation('ddlFProfession', 'Father Profession'))
        return false;
    if (!blankFieldValidation('txtFIncome', "Father Annual Income"))
        return false;
    if (!blankFieldValidation('txtMotherName', "Mother Name"))
        return false;
    if (!DropDownValidation('ddlMProfession', 'Mother Profession'))
        return false;
    if (!blankFieldValidation('txtMIncome', "Mother Annual Income"))
        return false;
    if (document.getElementById('fldDocsFather').value == '') {
        alert('Please Upload a Income Certificate of Parent');
        document.getElementById('fldDocsFather').focus()
        return false;
    }
    if (document.getElementById('fldDocsFather').value.lastIndexOf(".pdf") == -1) {
        alert("Please upload only pdf file");
        document.getElementById('fldDocsFather').focus();
        return false;
    }
    //     var MotherAnnulIncom = $("#txtMIncome").val();
    //     if (MotherAnnulIncom > 0) {
    //         if (document.getElementById('fldDocsMother').value == '') {
    //             alert('Please Upload a Income Certificate of Mother');
    //             document.getElementById('fldDocsMother').focus()
    //             return false;
    //         }
    //         if (document.getElementById('fldDocsMother').value.lastIndexOf(".pdf") == -1) {
    //             alert("Please upload only pdf file");
    //             document.getElementById('fldDocsMother').focus();
    //             return false;
    //         }
    //     }
    else {
        $("#Trd").hide();
        $("#Fth").show();
        $('.tab-panel-cafastrail li').removeClass('active');
        $('.tab-panel-cafastrail li.address-info').addClass('active');
    }
}
function validateParentinforPrv() {
    $("#Trd").hide();
    $("#snd").show();
    $('.tab-panel-cafastrail li').removeClass('active');
    $('.tab-panel-cafastrail li.applicant-info').addClass('active');
}
//======================== End Validation of Parent/Guardian Information=========================
//======================== Start Validation of Permanent Address Information=====================
function validatePerAddNext() {

    //    $("#Fth").hide();
    //    $("#Fvth").show();
    //    $('.tab-panel-cafastrail li').removeClass('active');
    //    $('.tab-panel-cafastrail li.examinations-info').addClass('active');

    if (!DropDownValidation('ddlCState', 'State'))
        return false;
    if (!DropDownValidation('ddlCDist', 'District'))
        return false;
    if (!DropDownValidation('ddlCBlock', 'Block'))
        return false;
    if (!blankFieldValidation('txtCPS', "Address"))
        return false;
    if (document.getElementById('fldDocsResident').value == '') {
        alert('Please Upload a Residential Certificate');
        document.getElementById('fldDocsResident').focus()
        return false;
    }
    if (document.getElementById('fldDocsResident').value.lastIndexOf(".pdf") == -1) {
        alert("Please upload only pdf file");
        document.getElementById('fldDocsResident').focus();
        return false;
    }
    //    if (!blankFieldValidation('txtCPC', "PIN Code"))
    //        return false;
    else {
        $("#Fth").hide();
        $("#Fvth").show();
        $('.tab-panel-cafastrail li').removeClass('active');
        $('.tab-panel-cafastrail li.examinations-info').addClass('active');

    }
    if ($("#txtCEmail").val() != '') {
        if (!EmailValidation('txtCEmail'))
            return false;
    }
    else {

    }


}

function validatePerAddPvr() {
    $("#Fth").hide();
    $("#Trd").show();
    $('.tab-panel-cafastrail li').removeClass('active');
    $('.tab-panel-cafastrail li.parent-info').addClass('active');
}
//======================== End Validation of Permanent Address Information=====================
//======================== Start Validation of Exam Information================================
function validateExaminforNext() {
    //    if (!blankFieldValidation('txtLastExamName', "Exam Name"))
    //        return false;
    //    if (!blankFieldValidation('txtLastBoardName', "Name of Board / Council / University "))
    //        return false;
    if (!DropDownValidation('drpLastExamName', 'Exam Name'))
        return false;
    if (!DropDownValidation('ddlBoard', 'Name of Board / Council / University'))
        return false;

    //    if (!blankFieldValidation('txtLastYOP', "Year of Passing"))
    //        return false;
    if (!DropDownValidation('ddlLastYop', 'Year of Passing'))
        return false;

    if (!DropDownValidation('ddlMarkType', 'Mark Secured'))
        return false;
    if (!blankFieldValidation('txtMarkSecured', "Mark Secured"))
        return false;
    if (!blankFieldValidation('txtMaxMark', "Maximum Mark"))
        return false;
    if (document.getElementById('fldDocsMark').value == '') {
        alert('Please Upload a Mark Certificate');
        document.getElementById('fldDocsMark').focus()
        return false;
    }
    if (document.getElementById('fldDocsMark').value.lastIndexOf(".pdf") == -1) {
        alert("Please upload only pdf file");
        document.getElementById('fldDocsMark').focus();
        return false;
    }
    else {
        $("#Fvth").hide();
        $("#Sith").show();
        $('.tab-panel-cafastrail li').removeClass('active');
        $('.tab-panel-cafastrail li.bank-info').addClass('active');
    }

}
function validateExaminforPvr() {
    $("#Fvth").hide();
    $("#Fth").show();
    $('.tab-panel-cafastrail li').removeClass('active');
    $('.tab-panel-cafastrail li.address-info').addClass('active');
}
//======================== End Validation of Exam Information==================================

function validateBankinfoPvr() {
    $("#Sith").hide();
    $("#Fvth").show();
    $('.tab-panel-cafastrail li').removeClass('active');
    $('.tab-panel-cafastrail li.examinations-info').addClass('active');
}

//validation()
function CheckDecimal(control) {
    var counter = 0;
    var cntrl = document.getElementById(control);
    if (cntrl == 'undefined' || cntrl == null) {
        cntrl = control;
    }
    if (cntrl.value.trim().length > 0) {
        var pos = cntrl.value.trim().indexOf(".");
        while (pos > -1) {
            counter = counter + 1;
            pos = cntrl.value.trim().indexOf(".", pos + 1);
        }
    }

    if (counter > 1 || cntrl.value.trim().charAt(cntrl.value.trim().length - 1) == ".") {
        alert("Please enter valid decimal !");
        cntrl.focus();
        return false;
    }
    else {
        var decvalue = cntrl.value.trim();
        var path1_length1 = decvalue.length;
        var path1_length2 = decvalue.lastIndexOf('.');
        var path1_decno = decvalue.substr(path1_length2 + 1, path1_length1);
        if (path1_decno.length > 3 && path1_length2 > -1) {
            alert("Only 3 digits are allowed after decimal !");
            cntrl.focus();
            return false;
        }
        else {
            return true;
        }
    }
}
function makeDecimal(control) {
    var cntrl = document.getElementById(control);
    if (cntrl == 'undefined' || cntrl == null) {
        cntrl = control;
    }
    if (cntrl.value.trim().length > 0) {
        cntrl.value = parseFloat(cntrl.value.trim()).toFixed(3);
    }
}

//function AddComma(text) {
////    if ($('#radiolistScholarship').find(":checked").val() >= 3) {
////        switch (text.value.length) {
////            case 1:
////                document.getElementById("<%=txtMarkSecured.ClientID %>").value = "0.0" + text.value;
////                break;
////            default:
////                var data = text.value.replace(".", "");
////                var first = data.substring(0, (data.length - 2));
////                var second = data.substring(data.length - 2);
////                var temp = Math.abs(first) + "." + second;
////                document.getElementById("<%=txtMarkSecured.ClientID %>").value = temp;
//        //        }



//    }
//}


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



var d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];

// permutation table p
var p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
];

// inverse table inv
var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

// converts string or number to an array and inverts it
function generateVerhoeff(array) {

    if (Object.prototype.toString.call(array) == "[object Number]") {
        array = String(array);
    }

    if (Object.prototype.toString.call(array) == "[object String]") {
        array = array.split("").map(Number);
    }

    return array.reverse();

}

// generates checksum
function generate(array) {

    var c = 0;
    var invertedArray = generateVerhoeff(array);

    for (var i = 0; i < invertedArray.length; i++) {
        c = d[c][p[((i + 1) % 8)][invertedArray[i]]];
    }

    return inv[c];
}

// validates checksum
function ValidAadhaarNo(array) {

    var c = 0;
    var invertedArray = generateVerhoeff(array);

    for (var i = 0; i < invertedArray.length; i++) {
        c = d[c][p[(i % 8)][invertedArray[i]]];
    }
    if (c != 0)
        return false;
    else
        return true;

}

//===============Email validation==================  
function checkEmail(ctl) {
    if (!EmailValidation(ctl)) {
        document.getElementById(ctl).value = '';
        return false;
    }
}

//===============Pin Code validation==================  
function checkPin(ctl) {
    alert(ctl.value);
}

function loadAadharDetls() {

    if (!blankFieldValidation('txtApplName', "Applicant Name"))
        return false;

    if (!DropDownValidation('ddlGender', 'Gender'))
        return false;

    if (!DropDownValidation('ddlDay', 'Day, from Date of Birth'))
        return false;
    if (!DropDownValidation('ddlMonth', 'Month, from Date of Birth'))
        return false;
    if (!DropDownValidation('ddlYear', 'Year, from Date of Birth'))
        return false;
    //    if (!blankFieldValidation('txtAdharNo', "Aadhaar Number"))
    //        return false;
    //validateAppinforNext();

    $('#chk').attr('checked', false);
    $('#ER').hide();
    $('#NR1').hide();
    $('#NR2').hide();

    var adhar = $('#txtAdharNo').val();
    var gender;
    var check;
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/GetAadharDetails',
        data: "{'AadharNo':'" + adhar + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
            if (lstdtl.length > 0) {
                var vmonth = parseInt(document.getElementById('ddlMonth').options[document.getElementById('ddlMonth').selectedIndex].value);
                var vDOB = $('#ddlYear').val() + '-' + vmonth + '-' + $('#ddlDay').val()

                for (var i = 0; i < lstdtl.length; i++) {

                    var from = lstdtl[0].DOB.split("-");
                    var f = new Date(from[2], from[1] - 1, from[0]);

                    var to = vDOB.split("-");
                    var t = new Date(to[2], to[1] - 1, to[0]);

                    if (Date.parse(f) == Date.parse(t)) {
                        check = 1;
                        $(document).ajaxStart(function () {
                            $("#wait").css("display", "block");
                        });

                        $('#lblName').text(lstdtl[0].StrName);
                        if (lstdtl[0].Fname == 'F') {
                            gender = "Female";
                        }
                        if (lstdtl[0].Fname == 'M') {
                            gender = "Male";
                        }
                        $('#lblGender').text(gender);
                        $('#lblDOB').text(lstdtl[0].DOB);

                        $(document).ajaxComplete(function () {
                            $("#wait").css("display", "none");
                        });

                    }
                    else {
                        $(document).ajaxComplete(function () {
                            $("#wait").css("display", "none");
                        });
                        $('#lblName').text('');
                        $('#lblGender').text('');
                        $('#lblDOB').text('');
                    }
                }
            }
            if (check == 1) {
                //                    $('#NR1').text('Varified');
                $('#ER').show();
                $('#NR1').show();
                $("#hdnAdharStatus").val('1');
            }
            else {
                //                    $('#NR1').text('Not Varified');
                $('#ER').hide();
                $('#NR1').show();
                $('#NR2').show();
                $("#hdnAdharStatus").val('2');
            }

            $("#nxt").attr('disabled', false);
            $("#nxt").css({ "pointer-events": "auto" });
            check = 0;
        },
        dataType: 'json'
    });
}

function ValidateAccountNo() {
    var outerAccNo = $("#txtAccountNo").val();
    var xmlColls = null;
    var xmlhttps = loadXMLDOC();
    xmlhttps.open("GET", "M_BankAccountNo.xml", false);
    xmlhttps.send();
    xmlColls = xmlhttps.responseXML;
    if ($("#txtAccountNo").val() != '') {
        if (xmlColls != null) {

            var col = xmlColls.getElementsByTagName("Table");
            var j;
            for (j = 0; j < col.length; j++) {
                var innerAccNo = parseInt(col[j].getElementsByTagName("accountNo")[0].childNodes[0].nodeValue);
                if (innerAccNo == outerAccNo) {
                    alert('You have already applied for the session 2015-2016, you are eligible only for renewal Scholarship!');
                    $("#txtAccountNo").val('');
                }
            }
        }
    }
}


//function GetBankBranch() {
//    var IFSCCode = $("#txtIFSCCode").val().toUpperCase();
//    var flag = 0;
//    var xmlColls = null;
//    var xmlhttps = loadXMLDOC();
//    xmlhttps.open("GET", "M_BankBranch.xml", false);
//    xmlhttps.send();
//    xmlColls = xmlhttps.responseXML;
//    if ($("#txtIFSCCode").val() != '') {
//        if (xmlColls != null) {

//            var col = xmlColls.getElementsByTagName("Table");
//            var j;
//           
//            for (j = 0; j < col.length; j++) {

//                var innerifsccode = col[j].getElementsByTagName("vchIFSC")[0].childNodes[0].nodeValue;
//                var Bankid = col[j].getElementsByTagName("intBankId")[0].childNodes[0].nodeValue;
//                var BranchName = col[j].getElementsByTagName("vchBranchName")[0].childNodes[0].nodeValue;

//                if (innerifsccode == IFSCCode) {
//                    $("#ddlBankName").val(Bankid);
//                    $("#txtBankName").val(BranchName);
//                    j = col.length;
//                    flag = 1;
//                    alert(flag);
//                }
//                else {
//                   
//                    flag = 0;     
//                }             
//            }
//        }
//    }
//    if (flag == 0) {
//        alert("Invalid IFSC code, please try again !")
//        $("#txtIFSCCode").val('');
//        $("#ddlBankName").val('--SELECT BANK NAME');
//        $("#txtBankName").val('');
//      
//    }
//}
//
function GetBankBranch() {

    if ($("#txtIFSCCode").val() != '') {

        $.ajax({
            type: 'POST',
            url: 'Cafas.aspx/fillBankBranch',
            data: "{'Ifsccode':'" + $("#txtIFSCCode").val() + "'}",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var lstdtl = eval('(' + response.d + ')');

                if (lstdtl.length > 0) {
                    $("#ddlBankName").val(lstdtl[0].Bid);
                    $("#txtBankName").val(lstdtl[0].Bname);
                    $("#hdnBankID").val(lstdtl[0].Bid);
                    $("#hdnBankName").val($("#ddlBankName option:selected").text());

                    $(document).ajaxComplete(function () {
                        $("#wait").css("display", "none");
                    });
                }
                else {
                    $(document).ajaxComplete(function () {
                        $("#wait").css("display", "none");
                    });
                    alert('Invalid IFSC Code !')
                    $("#ddlBankName").val(0);
                    $("#txtBankName").val('');
                    $("#txtIFSCCode").val('');
                }
            },
            dataType: 'json'
        });
    }
}





function durationEnable() {
    var inVal;
    if ((document.getElementsByName('radiolistScholarship')[2].checked) && (document.getElementById('rbtNSAMSColList').checked)) {
        inVal = parseInt(document.getElementById('ddlCourseName').options[document.getElementById('ddlCourseName').selectedIndex].value);
        // alert(inVal);
        if (inVal == 29) {
            $("#txtduration").prop("disabled", false);
        }
        else {
            $('#txtduration').attr("disabled", "disabled");
        }
    }
    else {
        inVal = parseInt(document.getElementById('ddlOthCourse').options[document.getElementById('ddlOthCourse').selectedIndex].value);
        if (inVal == 29) {
            $("#txtdurationoth").prop("disabled", false);
        }
        else {
            $('#txtdurationoth').attr("disabled", "disabled");
        }
    }

}


function OtherSubEnable() {
    var subVal;
    if (document.getElementById('rbtNSAMSColList').checked) {
        subVal = parseInt(document.getElementById('ddlSubject').options[document.getElementById('ddlSubject').selectedIndex].value);
        if (subVal == 307) {
            $('.othSubName1').show();
        }
        else {
            $('.othSubName1').hide();
        }
    }
    else {
        subVal = parseInt(document.getElementById('ddlothsub').options[document.getElementById('ddlothsub').selectedIndex].value);
        if (subVal == 307) {
            $('.othSubName2').show();
        }
        else {
            $('.othSubName2').hide();
        }
    }
}

//''Added By Satyajit

function ChangeDropDown() {
    //    debugger;

    $('#ddlNSAMSDistrict').val(0);
    $('#ddlNSAMSCollegeName').val(0);
    $('#txtInstName').text('');
    $('#txtPrinMob').text('');
    $('#txtCBSERollno').text('');

    $('#ddlCourseName').val(0);
    $('#ddlSubject').val(0);
    $('#ddlNSAMSDistrict').val(0);
    $('#ddlNSAMSCollegeName').val(0);


    $('#ddlSDayIN').val(0);
    $("#ddlSDayIN").prop("disabled", false);
    $('#ddlSMonthIN').val(0);
    $("#ddlSMonthIN").prop("disabled", false);
    $('#ddlSYearIN').val(0);
    $("#ddlSYearIN").prop("disabled", false);
    $("#txtApplName").val('');
    $("#txtApplName").attr('readonly', false);
    $('#ddlGender').val(0);
    $("#ddlGender").prop("disabled", false);
    $('#ddlDay').val(0);
    $("#ddlDay").prop("disabled", false);
    $('#ddlMonth').val(0);
    $("#ddlMonth").prop("disabled", false);
    $('#ddlYear').val(0);
    $("#ddlYear").prop("disabled", false);
    $('#ddlReligion').val(0);
    $("#ddlReligion").prop("disabled", false);
    $("#ddlNationality").prop("disabled", false);
    $('#ddlMotherTongue').val(15);
    $('#ddlCategory').val(0);
    $("#ddlCategory").prop("disabled", false);
    $("#chkPH").attr('checked', false);
    $('#txtCMobNo').val('');
    $('#txtAdharNo').val('');
    $('#txtFatherName').val('');
    $("#txtFatherName").attr('readonly', false);
    $('#ddlFProfession').val(0);
    $('#txtFIncome').val('');
    $('#lblTotalIncome').empty();
    $('#txtMotherName').val('');
    $("#fldDocsFather").val('');
    $("#fldDocsResident").val('');
    $("#fldDocsMark").val('');
    $("#fldDocsBankAcnt").val('');
    $('#txtdurationothName').val('');
    $('#txtdurationoth').val('');

    $("#txtMotherName").attr('readonly', false);
    $('#ddlMProfession').val(0);
    $('#txtMIncome').val('');
    $('#ddlCState').val(0);
    $("#ddlCState").prop("disabled", false);
    $('#ddlCDist').val(0);
    $("#ddlCDist").prop("disabled", false);
    $('#ddlCBlock').val(0);
    $("#ddlCBlock").prop("disabled", false);
    $('#txtCPS').val('');
    $("#txtCPS").attr('readonly', false);
    $('#txtCPC').val('');
    $("#txtCPC").attr('readonly', false);
    $('#txtCTCode').val('');
    $('#txtCTeleNo').val('');
    $('#txtCEmail').val('');
    $('#txtLastExamName').val('');
    $("#txtLastExamName").attr('readonly', false);
    $('#txtLastBoardName').val('');
    $("#txtLastBoardName").attr('readonly', false);
    $('#txtLastYOP').val('');
    $("#txtLastYOP").attr('readonly', false);

    $('#txtCourses').val('');
    $('#txtCDuration').val('');

    $('#txtduration').val('');
    $('#txtdurationoth').val('');

    if ($('#radiolistScholarship').find(":checked").val() >= 3) {
        $('#ddlMarkType').val(2);
        $('#lbltypeSecured').text('CGPA');
        $('#lbltypescore').text('CGPA');
    }
    else {
        $('#ddlMarkType').val(1);
        $('#lbltypeSecured').text('Mark');
        $('#lbltypescore').text('Mark');
    }
    $("#ddlMarkType").prop("disabled", false);
    $('#txtMarkSecured').val('');
    $("#txtMarkSecured").attr('readonly', false);
    $('#txtMaxMark').val('');
    $("#txtMaxMark").attr('readonly', false);
    $('#txtHolderName').val('');
    $("#txtMaxMark").attr('readonly', false);
    $('#txtAccountNo').val('');
    $('#txtIFSCCode').val('');
    $('#txtMICRCode').val('');
    $('#ddlBankName').val('--SELECT BANK NAME');
    $('#txtBankName').val('');
    $('#txtBankTelphoneNo').val('');
    //=========================Clear Non Sams Odisha===========================
    $('#ddlNSAMSDistrict').val('--SELECT');
    for (var i = document.getElementById('ddlNSAMSCollegeName').length; i > 0; i--) {
        document.getElementById('ddlNSAMSCollegeName').options[i] = null;
    }
    $('#txtNSAMSMailingAddress').val('');
    $('#ddlCourseName').val('--SELECT COURSE');
    $('#txtCourseDuration').val('');
    $('#txtEntranceName').val('');
    $('#txtRank').val('');
    $('#txtARollno').val('');
    $('#ddlNSDayIN').val(0);
    $('#ddlNSMonthIN').val(0);
    $('#ddlNSYearIN').val(0);
    //==========================Clear Non Sams Other State=====================
    $('#txtInstituteName').val('');
    $('#txtAddressothstate').val('');
    $('#txtInstiwebsite').val('');
    document.getElementById("ImgAppl").src = "../images/noimage.png";
    document.getElementById("hdnImgAppl").value = "";

}

function FillDuration() {
    //    debugger;
    //    $('#ddlBoard option').each(function (j, option) { $(option).remove(); });
    //    for (var i = document.getElementById('ddlBoard').length; i > 0; i--) {
    //        document.getElementById('ddlBoard').options[i] = null;
    //    }
    //    //  var inVal = ctlDdlVal.value;
    var inVal = $("#ddlOthCourse").val()
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/getDuration',
        data: "{'CourseID':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + '</option>');
                //$('#ddlBoard').append(newOption);
                $('#txtdurationoth').text(newOption);
            }
        },
        dataType: 'json'
    });
}
function FillDuration() {
    //    debugger;
    var inVal = $("#ddlCourseName").val()
    $.ajax({
        type: 'POST',
        url: 'Cafas.aspx/getDuration',
        data: "{'CourseID':'" + inVal + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var lstdtl = eval('(' + response.d + ')');
            var storedata = '';
            var intslno = 0;
            for (var i = 0; i < lstdtl.length; i++) {
                intslno = parseInt(i) + 1;
                var newOption = $('<option value="' + lstdtl[i].IntID + '">' + '</option>');
                //$('#ddlBoard').append(newOption);
                $('#txtduration').text(newOption);
            }
        },
        dataType: 'json'
    });
}

function MarkValidation() {

    var sctype; var SecMark ; var TotMark ; var percentage;
    if (document.getElementsByName('radiolistScholarship')[0].checked) {
        sctype = 1;
    }
    if (document.getElementsByName('radiolistScholarship')[1].checked) {
        sctype = 2;
    }
  
    SecMark = $('#txtMarkSecured').val();  
    TotMark = $('#txtMaxMark').val();

    percentage = ((parseFloat(SecMark) / parseFloat(TotMark)) * 100).toFixed(2);  

    if (sctype == 1) {
        if ($('#ddlGender').val() == 1 && percentage < 74.67) {
            alert("Your secured percentage is " + percentage + " . So you are not eligible to apply \n e-Medhabruti 2017-18.For further information, please refer to  \n letter no 624,dated-06/01/2018 in the www.medhabruti.org website .");
            $('#txtMarkSecured').val(''); $('#txtMaxMark').val('')
            return false;
        }
        if ($('#ddlGender').val() == 2 && percentage < 76.00) {
            alert(percentage);
            alert("Your secured percentage is " + percentage + " . So you are not eligible to apply \n e-Medhabruti 2017-18.For further information, please refer to  \n letter no 624,dated-06/01/2018 in the www.medhabruti.org website .");
            $('#txtMarkSecured').val(''); $('#txtMaxMark').val('')
            return false;
        }
    }
    if (sctype == 2) {
        if ($('#ddlGender').val() == 1 && percentage < 63.50) {
            alert("Your secured percentage is " + percentage + " . So you are not eligible to apply \n e-Medhabruti 2017-18.For further information, please refer to  \n letter no 624,dated-06/01/2018 in the www.medhabruti.org website .");
            $('#txtMarkSecured').val(''); $('#txtMaxMark').val('')
            return false;
        }
        if ($('#ddlGender').val() == 2 && percentage < 66.33) {
            alert("Your secured percentage is " + percentage + " . So you are not eligible to apply \n e-Medhabruti 2017-18.For further information, please refer to  \n letter no 624,dated-06/01/2018 in the www.medhabruti.org website .");
            $('#txtMarkSecured').val(''); $('#txtMaxMark').val('')
            return false;
        }
    }
}

function chkMarkValidation() {
    if ($('#txtMarkSecured').val() != "") {
        MarkValidation();
    }
}



































