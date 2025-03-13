$(function () {
    $('#indentGenerate, #supplyOrderGenerate, #supplyOrderGenerateMd, #supplyCementOrderGenerate').click(function () {
        var btnID = $(this).attr('id');
        var windowName = "GeneratePage";
        var wOption = "width=1280,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
        var cloneTable = $("#viewTable").clone();
        cloneTable.find('input[type=text],select,textarea').each(function () {
            var elementType = $(this).prop('tagName');
            if (elementType == 'SELECT')
                var textVal = $(this).find("option:selected").text();
            else
                var textVal = $(this).val();
            $(this).replaceWith('<label>' + textVal + '</label>');
        });
        cloneTable.find('a').each(function () {
            var anchorVal = $(this).text();
            $(this).replaceWith('<label>' + anchorVal + '</label>');
        });
        var wWinPrint = window.open("", windowName, wOption);
        wWinPrint.document.open();
        wWinPrint.document.write("<html><head><link href='../css/Print.css' rel='stylesheet' /><link href='../css/font-awesome.min.css' rel='stylesheet' /><title></title></head><body>");
        wWinPrint.document.write('<div style="padding:5px; margin-bottom:10px; border-bottom:#aeaeae solid 3px;"><img src=../img/HP_Govt.png height=55 style="float: left;margin-right: 10px;" /><div style="float: left;padding-top: 10px;"><h1>Himachal Pradesh State Civil Supplies Corporation Ltd</h1></div><div style="clear: both;"></div></div>');
        if (btnID == "indentGenerate") {
            wWinPrint.document.write("<br /><br /><div class='header'>M/s BHUBAN POWER & STEEL LTD.,<br />Factory Address : CHANDIGARH AMBALA ROAD, DERABASSI, DISTT. MOHALI-140507<br />Regd. Office: 3 INDUSTRIAL AREA, PHASE-1, CHANDIGARH-160002</div>")
            wWinPrint.document.write("<hr /><div class='hd_title text-center'>DETAIL SHOWING RATES, DIVISION-WISE/DIA-WISE QUANTITIES & AMOUNTS F.O.R. DESTINATION FOR EXCISE DUTY NON-EXEMPT GI PIPES (September, 2014)</div><br />");
        } else if (btnID == "supplyOrderGenerate") {
            wWinPrint.document.write("<br /><br /><div class='header'>M/s APL APOLLO TUBES LTD,<br />REGD. OFFICE 37 HARGOVIND ENCLAVE, VIKAS MARG, DELHI-110092</div>")
            wWinPrint.document.write("<hr /><div class='hd_title text-center'>DETAIL SHOWING THE DIVISION-WISE/DIA-WISE QUANTITY, RATES & AMOUNTS AT NEAREST RAIL HEAD FOR EXCISE DUTY EXEMPTED GI PIPES (September, 2014)</div><br />");
        } else if (btnID == "supplyOrderGenerateMd") {
            wWinPrint.document.write("<br /><br /><div class='header'>M/s APL APOLLO TUBES LTD,<br />REGD. OFFICE 37 HARGOVIND ENCLAVE, VIKAS MARG, DELHI-110092</div>")
            wWinPrint.document.write("<hr /><div class='hd_title text-center'>DETAIL SHOWING THE  QUANTITY, RATES & AMOUNTS AT NEAREST RAIL HEAD FOR EXCISE DUTY EXEMPTED MEDICINE (September, 2014)</div><br />");
        } else if (btnID == "supplyCementOrderGenerate") {
            wWinPrint.document.write("<br /><br /><div class='header'>Ambuja Cement LTD,Khalini, Shimla-3</div>")
        }

        wWinPrint.document.write("<div id='printContent'>" + cloneTable.html() + "</div>");
        //wWinPrint.document.write("<div id='printFooter'>"+printFooter+"</div>");
        wWinPrint.document.write("</body></html>");
        wWinPrint.document.close();
        wWinPrint.focus();
        return wWinPrint;
    });

    activeRadio();
    $(document).on('click', 'input[type="radio"]', function () {
        activeRadio();
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('input[type="radio"]').each(function () {
        $(this).parent().parent().find('.requireed').addClass('mandatory-new');
    });
    $('input[type="checkbox"]').each(function () {
        $(this).parent().parent().find('.requireed').addClass('mandatory-new');
    });
    /*$('#viewTable .table td').each(function () {
    var htydiv = $('#viewTable .table td').html();
    //alert(htydiv);
    if (htydiv == ('<div style="height: 20px; padding: 5px; font-weight: bold; font-size: medium; color: silver"> No Records Found.</div>')) {
    alert('yes');
    }
    });*/
    $(document).on("click", ".input-group-addon", function () {
        $(this).prev('.date-picker').focus();
    });
    if ($('#viewTable .table td div').attr('style') == ('height: 20px; padding: 5px; font-weight: bold; font-size: medium; color: silver')) {

        //        alert('yes');
    }
    $('#viewTable .table td').find('div').addClass('nored');

    if ($('.table').hasClass('table-striped')) { }

    else {
        // alert('no');
        $('.table').addClass('table-striped');
    }



});

function activeRadio() {
    $('input[type="radio"]').each(function () {
        if ($(this).is(':checked')) {
            $(this).closest('label').addClass('actvRadio');
        } else {
            $(this).closest('label').removeClass('actvRadio');
        }
    });
}
function openHTMLStrModal(header, body, footer) {
    $('#pageModal .modal-header #myModalLabel').html(header);
    $('#pageModal .modal-body').html(body);
    $('#pageModal .modal-footer').html(footer);
    if (footer == "") { $('#pageModal .modal-footer').remove(); }
    $('#pageModal').modal();
}
function openPageModal(header, page, footer, frm_hit) {
    $('#pageModal .modal-header #myModalLabel').html(header);
    //$('#pageModal .modal-body').load(page);
    $('#pageModal .modal-body').html("<iframe width='100%' height='" + frm_hit + "px' src='" + page + "' frameborder='0' scrolling='yes'></iframe>");
    $('#pageModal .modal-footer').html(footer);
    if (footer == "") { $('#pageModal .modal-footer').remove(); }
    $('#pageModal').modal();
}
function openPageModal_MD(header, page, footer, frm_hit) {
    $('#pageModal-md .modal-header #myModalLabel').html(header);
    $('#pageModal .modal-body').load(page);
    //$('#pageModal-md .modal-body').html("<iframe width='100%' height='" + frm_hit + "px' src='" + page + "' frameborder='0'></iframe>");
    $('#pageModal-md .modal-footer').html(footer);
    if (footer == "") { $('#pageModal-md .modal-footer').remove(); }
    $('#pageModal-md').modal();
}
//Added by Kunja Bihari Sahoo For Refresh parent page after close modal page
function hidePageModal(opt) {
    $('#pageModal').modal('hide');
    $('#pageModal .modal-header #myModalLabel').html("");
    $('#pageModal .modal-body').html("");
    $('#pageModal .modal-footer').html("");
    if (opt.reload == true) {
        location.reload();
    }
}


// Validation

var Title = "OFSS Online, Govt. of Bihar";

//------------------------------------Created By satyajeet mukherjee on 10/08/2014------------------------------------------

function setCookie(cname, cvalue, exdays) {

    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {

    var name = cname + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "0";
}
var ii = 0;
function MaintainScroll() {
    // alert('0')
    //  alert(this.getCookie("CurrentScrollPos"));
    $(window).scrollTop(this.getCookie("CurrentScrollPos"));
    ii = 1;
}

$(window).scroll(function () {
    if (ii == 0) {
        // alert('1')
        document.cookie = "CurrentScrollPos=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        var height = $(window).scrollTop();
        //alert(height);
        this.setCookie("CurrentScrollPos", height, 1);
    }
    else {
        //    alert('2')
        $(window).scrollTop(this.getCookie("CurrentScrollPos"));
        var height1 = $(window).scrollTop();
        //    alert(height1);
        this.setCookie("CurrentScrollPos", height1, 1);
        ii = 0;
    }

});
//------------------------------------Created By satyajeet mukherjee on 10/08/2014------------------------------------------

//-----------------------------------Created by Swasti on 07/01/2016---------------------------------------------------------

var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

//Blanck Dropdownlist validation
function ValidateDropdown(cntr, strText) {
    var strValue = $('#' + cntr).val();
    if (strValue.length == 0 || strValue == "0") {
        //        alert("Please select " + strText);
        //        $('#' + cntr).focus();
        jAlert(cntr, '<strong>Please select ' + strText + '</strong>', Title);
        return false;
    }
    else
        return true;
}

//Blankfield validation for textbox
function BlankTextBox(cntr, strText) {
    var strValue = $('#' + cntr).val();
    if (strValue == "") {
        //        alert(strText + " can not be left blank");
        //        $('#' + cntr).focus();
        jAlert(cntr, '<strong>' + strText + ' can not be left blank</strong>', Title);
        return false;
    }
    else
        return true;
}

//Email validation
function ValidateEmail(cntr) {
    var email = $('#' + cntr).val();
    //alert(email);
    if (email != "") {
        var reg = /^[A-Za-z0-9]([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!reg.test(email)) {
            //            alert('Enter a valid email id');
            //            $('#' + cntr).focus();
            jAlert(cntr, '<strong>Enter a valid email id</strong>', Title);
            return false;
        }
        else
            return true;
    }
    else
        return true;
};

//Mobile No. validation
function MobileNumber(cntr) {
    var Mobile = /^[7-9][0-9]{9}$/
    var entered_no = $('#' + cntr).val();
    if (!Mobile.test(entered_no)) {
        //        alert('Enter a valid Mobile Number');
        //        $('#' + cntr).focus();
        jAlert(cntr, '<strong>Enter a valid Mobile Number</strong>', Title);
        return false;
    }
    else
        return true;
}

//Decimal validation
function DecimalNumber(cntr, strText) {
    var regexPattern = /^\d{0,18}(\.\d{1,3})?$/;
    var entered_value = $('#' + cntr).val();
    if (!regexPattern.test(entered_value)) {
        //        alert('Enter a valid ' + strText);
        //        $('#' + cntr).focus();
        jAlert(cntr, '<strong>Enter a valid ' + strText + '</strong>', Title);
        return false;
    }
    else
        return true;
}

//First Special characters Or White space are not allowed
function IsSpecialCharacter1stPalce(cntr) {
    var strValue = $('#' + cntr).val();
    // alert(strValue);
    if (strValue != "") {
        var FistChar = strValue.charAt(0);
        if (/^[a-zA-Z0-9]*$/.test(FistChar) == false) {
            //            alert('Special characters Or White space are not allowed at first place !!!');
            //            $('#' + cntr).focus();
            jAlert(cntr, '<strong>Special characters Or White space are not allowed at first place !!!</strong>', Title);
            return false;
        } else { return true; }
        return true;
    }
    else
        return true;
}
//First  White space are not allowed
function IsWhiteSpace1stPalce(cntr) {
    var strValue = $('#' + cntr).val();
    // alert(strValue);
    if (strValue != "") {
        var FistChar = strValue.charAt(0);
        if (FistChar == " ") {
            //            alert('White space are not allowed at 1st place !!!');
            //            $('#' + cntr).focus();
            jAlert(cntr, '<strong>White space are not allowed at 1st place !!!</strong>', Title);
            return false;
        } else { return true; }
        return true;
    }
    else
        return true;
}

//To Check Length of a string
function checkLength(cntr, chr) {
    maxLen = chr; // max number of characters allowed            
    var strValue = $('#' + cntr).val();
    //alert(strValue); alert(strValue.length);
    if (strValue.length > maxLen) {
        // Alert message if maximum limit is reached.        
        var msg = "You have reached your maximum limit of characters allowed";
        //        alert(msg);
        jAlert(cntr, '<strong>' + msg + '</strong>', Title);
        // Reached the Maximum length so trim the textarea
        $('#' + cntr).val(strValue.substring(0, maxLen));
        $(".remaining").val(0);
    }
    else {
        // Maximum length not reached so update the value of my_text counter
        $(".remaining").val(maxLen - strValue.length);
    }
}

//Minimum Length validation
function MinimumLengthValidation(textbox, length) {
    try {
        var textbox = $('#' + textbox);
        if (textbox.val().length < length) {
            //            alert("Please enter minimum " + length + " characters or numbers");
            //            textbox.focus();
            jAlert(textbox, '<strong>Please enter minimum ' + length + ' characters or numbers</strong>', Title);
            return false;
        }
        else {
            return true;
        }

    } catch (e) {

    }
}
function MinimumLengthValidationForNumeric(textbox, length) {
    try {
        var textbox = $('#' + textbox);
        if (textbox.val().length < length) {
            //            alert("Please enter minimum " + length + " numbers");
            //            textbox.focus();
            jAlert(textbox, '<strong>Please enter minimum ' + length + ' numbers</strong>', Title);
            return false;
        }
        else {
            return true;
        }

    } catch (e) {

    }
}

function CompareDateRange(Controlname1, Controlname2, Fieldname1, Fieldname2) {
    var fromDate = $("input#" + Controlname1).val();
    var toDate = $("input#" + Controlname2).val();
    //alert(fromDate+'==='+toDate);
    if (toDate != "") {
        var dateParts = fromDate.split("-");
        var newDateStr = dateParts[1] + " " + dateParts[0] + ", " + dateParts[2];
        var fdate = new Date(newDateStr);
        // alert(fdate);
        var dateParts1 = toDate.split("-");
        var newDateStr1 = dateParts1[1] + " " + dateParts1[0] + ", " + dateParts1[2];
        var tdate = new Date(newDateStr1);
        // alert(tdate);
        if (fdate > tdate) {
            //            alert("Invalid Date Range!\n" + Fieldname2 + " can not be before " + Fieldname1);
            //            $("input#" + Controlname2).focus();
            jAlert(Controlname2, '<strong>Invalid Date Range!\n' + Fieldname2 + " can not be before " + Fieldname1 + '</strong>', Title);
            return false;
        }
        return true;
    }
}

function CompareTwoDate(Controlname1, Controlname2, Fieldname1, Fieldname2) {
    var fromDate = $("input#" + Controlname1).val();
    var toDate = $("input#" + Controlname2).val();
    //alert(fromDate+'==='+toDate);
    if (toDate != "") {
        var dateParts = fromDate.split("-");
        var newDateStr = dateParts[1] + " " + dateParts[0] + ", " + dateParts[2];
        var fdate = new Date(newDateStr);
        // alert(fdate);
        var dateParts1 = toDate.split("-");
        var newDateStr1 = dateParts1[1] + " " + dateParts1[0] + ", " + dateParts1[2];
        var tdate = new Date(newDateStr1);
        // alert(tdate);
        if (fdate > tdate) {
            //            alert(Fieldname2 + " can not be before " + Fieldname1);
            //            $("input#" + Controlname2).focus();
            jAlert(Controlname2, '<strong>' + Fieldname2 + " can not be before " + Fieldname1 + '</strong>', Title);
            return false;
        }
        return true;
    }
}
function CompareTwoDateGreater(Controlname1, Controlname2, Fieldname1, Fieldname2) {
    var fromDate = $("input#" + Controlname1).val();
    var toDate = $("input#" + Controlname2).val();
    //alert(fromDate+'==='+toDate);
    if (toDate != "") {
        var dateParts = fromDate.split("-");
        var newDateStr = dateParts[1] + " " + dateParts[0] + ", " + dateParts[2];
        var fdate = new Date(newDateStr);
        // alert(fdate);
        var dateParts1 = toDate.split("-");
        var newDateStr1 = dateParts1[1] + " " + dateParts1[0] + ", " + dateParts1[2];
        var tdate = new Date(newDateStr1);
        // alert(tdate);
        if (fdate >= tdate) {
            //            alert(Fieldname2 + " can not be before or equal to " + Fieldname1);
            //            $("input#" + Controlname2).focus();
            jAlert(Controlname2, '<strong>' + Fieldname2 + " can not be before or equal to " + Fieldname1 + '</strong>', Title);
            return false;
        }
        return true;
    }
}

function CheckZero(cntr, strText) {
    var strValue = $('#' + cntr).val();
    if (strValue == "0") {
        //        alert(strText + " can not be zero");
        //        $('#' + cntr).focus();
        jAlert(cntr, '<strong>' + strText + ' can not be zero</strong>', Title);
        return false;
    }
    else
        return true;
}

var tdate = new Date();
var dd = tdate.getDate(); //yields day
var MMM = month[tdate.getMonth()]; //yields month
var yyyy = tdate.getFullYear(); //yields year
var curDate = dd + "-" + MMM + "-" + yyyy;

function CheckGreaterDate(cntr, strText) {
    var myDate = $("input#" + cntr).val();
    // alert(myDate + '===' + curDate);
    if (curDate != "") {
        var dateParts = myDate.split("-");
        var newDateStr = dateParts[1] + " " + dateParts[0] + ", " + dateParts[2];
        var cDate = new Date(newDateStr);
        //alert(cDate);
        var dateParts1 = curDate.split("-");
        var newDateStr1 = dateParts1[1] + " " + dateParts1[0] + ", " + dateParts1[2];
        var tdate = new Date(newDateStr1);
        //alert(tdate);
        if (cDate > tdate) {
            //            alert(strText + " must be less than or equal to current date");
            //            $('#' + cntr).focus();
            jAlert(cntr, '<strong>' + strText + ' must be less than or equal to current date</strong>', Title);
            return false;
        }
        return true;
    }
}
function CompareGreaterDate(Controlname1, Controlname2, Fieldname1, Fieldname2) {
    var fromDate = $("input#" + Controlname1).val();
    var toDate = $("input#" + Controlname2).val();
    // alert(myDate + '===' + curDate);
    //alert(fromDate+'==='+toDate);
    if (toDate != "") {
        var dateParts = fromDate.split("-");
        var newDateStr = dateParts[1] + " " + dateParts[0] + ", " + dateParts[2];
        var fdate = new Date(newDateStr);
        // alert(fdate);
        var dateParts1 = toDate.split("-");
        var newDateStr1 = dateParts1[1] + " " + dateParts1[0] + ", " + dateParts1[2];
        var tdate = new Date(newDateStr1);
        // alert(tdate);
        if (tdate > fdate) {
            //            alert(Fieldname2 + " can not be greater than " + Fieldname1);
            //            $("input#" + Controlname2).focus();
            jAlert(Controlname2, '<strong>' + Fieldname2 + ' can not be greater than ' + Fieldname1 + '</strong>', Title);
            return false;
        }
        return true;
    }
}
function CheckLessDate(cntr, strText) {
    var myDate = $("input#" + cntr).val();
    var now = new Date();
    //alert(myDate + '===' + curDate);
    if (curDate != "") {
        var dateParts = myDate.split("-");
        var newDateStr = dateParts[1] + " " + dateParts[0] + ", " + dateParts[2];
        var cDate = new Date(newDateStr);
        //alert(cDate);
        var dateParts1 = curDate.split("-");
        var newDateStr1 = dateParts1[1] + " " + dateParts1[0] + ", " + dateParts1[2];
        var tdate = new Date(newDateStr1);
        //alert(tdate);
        if (cDate < tdate) {
            //            alert(strText + " must be greater than or equal to current date");
            //            $('#' + cntr).focus();
            jAlert(cntr, '<strong>' + strText + ' must be greater than or equal to current date</strong>', Title);
            return false;
        }
        return true;
    }
}

//Checkbox validation
function CheckUncheckGrid() {
    var totChk = $('.RowCheck input[type="checkbox"]').length;
    var totChecked;
    $('[id$=chkSelectAll]').change(function () {
        if ($(this).is(':checked')) {
            $('.RowCheck input[type="checkbox"]').prop('checked', true);
        } else {
            $('.RowCheck input[type="checkbox"]').prop('checked', false);
        }
    });
    $('.RowCheck input[type="checkbox"]').change(function () {
        totChecked = $('.RowCheck input[type="checkbox"]:checked').length;
        if (totChecked == totChk) {
            $('[id$=chkSelectAll]').prop('checked', true);
        } else {
            $('[id$=chkSelectAll]').prop('checked', false);
        }
    });
}

function CheckTime(ctrlDate, cntrFromTime, cntrToTime) {
    var myDate = $("input#" + ctrlDate).val();
    var myFromTime = $("input#" + cntrFromTime).val();
    var myToTime = $("input#" + cntrToTime).val();
    //alert(myDate + '===' + curDate);
    if (myDate != "") {
        var dateParts = myDate.split("-");
        var newDateStr = dateParts[1] + " " + dateParts[0] + ", " + dateParts[2];
        var StartTime = new Date(newDateStr + ' ' + myFromTime);
        // alert(StartTime);       
        //        var dateParts1 = curDate.split("-");
        //        var newDateStr1 = dateParts1[1] + " " + dateParts1[0] + ", " + dateParts1[2];
        var EndTime = new Date(newDateStr + ' ' + myToTime);
        //alert(EndTime);
        var DiffTime = new Number(EndTime.getTime() - StartTime.getTime());
        if (DiffTime < 0) {
            //            alert('Out Time Can Not Be Earlier Than In Time');
            //            $('#txtOutTime').focus();
            jAlert($('#txtOutTime'), '<strong>Out Time Can Not Be Earlier Than In Time</strong>', Title);
            return false;
        }
        return true;
    }
}

function DateDifference(Controlname1, Controlname2, DType) {
    var fromDate = $("input#" + Controlname1).val();
    var toDate = $("input#" + Controlname2).val();
    //alert(fromDate+'==='+toDate);
    if (toDate != "") {
        var dateParts = fromDate.split("-");
        var newDateStr = dateParts[1] + " " + dateParts[0] + ", " + dateParts[2];
        var fdate = new Date(newDateStr);
        // alert(fdate);
        var dateParts1 = toDate.split("-");
        var newDateStr1 = dateParts1[1] + " " + dateParts1[0] + ", " + dateParts1[2];
        var tdate = new Date(newDateStr1);
        // alert(tdate);
        var diff_date = tdate - fdate; alert(diff_date);
        var num_years = diff_date / 31536000000;
        var num_months = (diff_date % 31536000000) / 2628000000;
        var num_days = ((diff_date % 31536000000) % 2628000000) / 86400000;

        if (DType == "D") {
            return Math.floor(num_days);
        }
        if (DType == "M") {
            return Math.floor(num_months);
        }
        if (DType == "Y") {
            return Math.floor(num_years);
        }
    }
}

function groupTable($rows, startIndex, total) {
    if (total === 0) {
        return;
    }
    var i, currentIndex = startIndex, count = 1, lst = [];
    var tds = $rows.find('td:eq(' + currentIndex + ')');
    var ctrl = $(tds[0]);
    lst.push($rows[0]);
    for (i = 1; i <= tds.length; i++) {
        if (ctrl.text() == $(tds[i]).text()) {
            count++;
            $(tds[i]).addClass('deleted');
            lst.push($rows[i]);
        }
        else {
            if (count > 1) {
                ctrl.attr('rowspan', count);
                groupTable($(lst), startIndex + 1, total - 1)
            }
            count = 1;
            lst = [];
            ctrl = $(tds[i]);
            lst.push($rows[i]);
        }
    }
}



// For checking max length (controlId, CharacterLimit, SpanId)
function chkMaxLength(e, t, n) { try { if (document.getElementById(e) != null) { e = document.getElementById(e) } if (e != null) { if (e.value[0] == " ") { e.value = e.value.substr(1, e.value.length); e.value = e.value.trim() } if (e.value.length > t) { e.value = e.value.substring(0, t); alert("Maximum " + t + " characters are allowed."); e.focus() } } n = document.getElementById(n); if (n != null) { if (e.value.length == 0) { $(n).html("Maximum " + t + " characters are allowed.") } else { $(n).html(t - e.value.length + " characters are left.") } } } catch (r) { } }

// To check decimal (controlId, DecimalPlaces)
function CheckDecimal(e, t) { try { var n = ""; var r; if (parseInt(t)) { r = t } else { r = 2 } var i = document.getElementById(e); if (i == "undefined" || i == null) { i = e } if (typeof i.value === "undefined") { n = i.innerHTML.trim() } else { n = i.value.trim() } if (n.split(".").length - 1 > 1 || n.charAt(n.length - 1) == "." || n.charAt(0) == ".") { if (typeof i.value === "undefined") { setTimeout(function () { alert("Please enter valid decimal !"); $("#" + i.getAttribute("id")).effect("shake", { direction: "left", times: 2, distance: 5 }, 800) }, 1) } else { setTimeout(function () { alert("Please enter valid decimal !"); $(i).focus() }, 1) } return false } else { if (n.substr(n.lastIndexOf(".") + 1, n.length).length > r && n.lastIndexOf(".") > -1) { if (typeof i.value === "undefined") { setTimeout(function () { alert("Only " + r + " digits are allowed after decimal !"); $("#" + i.getAttribute("id")).effect("shake", { direction: "left", times: 2, distance: 5 }, 800) }, 1) } else { setTimeout(function () { alert("Only " + r + " digits are allowed after decimal !"); $(i).focus() }, 1) } return false } else { return true } } } catch (s) { } }

// To make decimal (controlId, DecimalPlace)
function makeDecimal(e, t) { var n = document.getElementById(e); var r; if (parseInt(t)) { r = t } else { r = 2 } if (n == "undefined" || n == null) { n = e } if (typeof n.value === "undefined") { if (n.innerHTML.trim().length > 0) { n.innerHTML = parseFloat(n.innerHTML.trim()).toFixed(r) } } else { if (n.value.trim().length > 0) { n.value = parseFloat(n.value.trim()).toFixed(r) } } }

// Remove Initial space (controlId)
function RemoveInitialSpace(e) { var t = document.getElementById(e); if (t == "undefined" || t == null) { t = e } try { if (t.value[0] == " ") { t.value = t.value.substr(1, t.value.length); t.value = t.value.trim() } } catch (n) { } }
// Scroll to Page top
$.fn.scrollView = function () { return this.each(function () { $("html, body").animate({ scrollTop: $(this).offset().top - 20 }, 100) }) }

function CheckBeforeDelete(e, t) {
    try {
        var n = false; $("#" + e + " tr").find("td:nth-child(" + t + ")").each(function () {
            if ($(this).find("input:checkbox").prop("checked") === true) { n = true }
        });
        if (n) {
            if (confirm(" Are you sure you want to Delete the Record(s) !")) {
                return true
            } else {
                return false
            }
        } else {
            setTimeout(function () {
                alert("Please select a Record to Delete !");
                $("#" + e + " tr").each(function () {
                    //if (!$(this).find("td:eq(" + (parseInt(t) - 1) + ")").find("input:checkbox").prop("disabled")) {
                    if ($(this).find("td:eq(" + (parseInt(t) - 1) + ")").find('.RowCheck').length > 0) {
                        $(this).find("td:eq(" + (parseInt(t) - 1) + ")").effect("highlight", { color: "#d9534f" }, 1e3)
                    }
                })
            }, 1); return false
        }
    } catch (r) { alert(r) }
}




//--------------------------------------------------------------------------------------------------------------------------

//---------------------------------------- Included By Bindeswari on 07-Jan-2015 ----------------------------------------------------------------------------------

function ValidateEmail(cntr) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var strValue = $('#' + cntr).val();
    if (!filter.test(strValue)) {
        //        alert("Plese Enter a Valid Email!");
        //        $('#' + cntr).focus();
        jAlert(cntr, '<strong>Plese Enter a Valid Email!</strong>', Title);
        return false;
    }
    else
        return true;
}
function SelectToArchive(e, t) {
    try {
        var n = false; $("#" + e + " tr").find("td:nth-child(" + t + ")").each(function () {
            if ($(this).find("input:checkbox").prop("checked") === true) { n = true }
        });
        if (n) {
            if (confirm(" Are you sure you want to Archive the Record(s) !")) {
                return true
            } else {
                return false
            }
        } else {
            setTimeout(function () {
                alert("Please select a Record to Archive !");
                $("#" + e + " tr").each(function () {
                    //if (!$(this).find("td:eq(" + (parseInt(t) - 1) + ")").find("input:checkbox").prop("disabled")) {
                    if ($(this).find("td:eq(" + (parseInt(t) - 1) + ")").find('.RowCheck').length > 0) {
                        $(this).find("td:eq(" + (parseInt(t) - 1) + ")").effect("highlight", { color: "#d9534f" }, 1e3)
                    }
                })
            }, 1); return false
        }
    } catch (r) { alert(r) }
}
//---------------------------------------- Included By Bindeswari on 07-Jan-2015 ----------------------------------------------------------------------------------

//---------------------------------------Included By Rakesh Rana On 12-01-2016 -----------------------------------------------------------------------------


(function ($) {

    $.fn.extend({
        limiter: function (limit, elem1) {
            $(this).on("keyup focus", function () {
                setCount(this, elem1);
            });
            function setCount(src, elem1) {
                var chars = src.value.length;
                if (chars > limit) {
                    src.value = (src.value.substr(0, limit));
                    chars = limit;
                }
                elem1.text(limit - chars);
            }
            setCount($(this)[0], elem1);
        }
    });
})(jQuery);

function checkForFileType(ctrl, objArray) {
    var id = ctrl.id;
    var fileExtension = objArray;
    if ($.inArray($("#" + id).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
        //        alert("Invalid format. Please choose valid file format!!!");
        //        $("#" + id).focus();
        jAlert(cntr, '<strong>Invalid format. Please choose valid file format!!!</strong>', Title);
        $("#" + id).val('');
        return false;
    }
}
function ConfirmAction(cntr) {
    var msg = 'Are you sure you want to ' + $('#' + cntr).val() + '?';
    jConfirm(cntr, msg, Title, function (r) {
        if (r) {
            __doPostBack(cntr, '');
            return true;
        }
        else {
            return false;
        }
    });
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------

// Added by Jyotijeeban Jena
//To Check the checkbox selected in the gridview for Submit
function CheckGridSubmit(e, t, Message) {
    try {
        var n = false; $("#" + e + " tr").find("td:nth-child(" + t + ")").each(function () {
            if ($(this).find("input:checkbox").prop("checked") === true) { n = true }
        });
        if (n) {
            return true;
        }
        else {
            setTimeout(function () {
                jAlert(e, '<strong>Please select a record to ' + Message + '!</strong>', Title);

                $("#" + e + " tr").each(function () {
                    //if (!$(this).find("td:eq(" + (parseInt(t) - 1) + ")").find("input:checkbox").prop("disabled")) {
                    if ($(this).find("td:eq(" + (parseInt(t) - 1) + ")").find('.RowCheck').length > 0) {
                        $(this).find("td:eq(" + (parseInt(t) - 1) + ")").effect("highlight", { color: "#d9534f" }, 1e3)
                    }
                })
            }, 1); return false;
        }
    } catch (r) { alert(r) }
}



function checkLengthBySpanId(cntr, chr, spanid) {
    maxLen = chr; // max number of characters allowed            
    var strValue = $('#' + cntr).val();
    //alert(strValue); alert(strValue.length);
    if (strValue.length > maxLen) {
        // Alert message if maximum limit is reached.        
        var msg = "You have reached your maximum limit of characters allowed";
        jAlert(cntr, '<strong>' + msg + '</strong>', Title);
        //        alert(msg);
        // Reached the Maximum length so trim the textarea
        $('#' + cntr).val(strValue.substring(0, maxLen));
        $('#' + spanid).val(0);
    }
    else {
        // Maximum length not reached so update the value of my_text counter
        $('#' + spanid).val(maxLen - strValue.length);
    }
}



function ValidateFile(cntr, strText) {
    //debugger;
    var strValue = $('#' + cntr).get(0).files.length;
    if (strValue == "0") {
        //        alert("Please upload " + strText + " copy");
        jAlert(cntr, '<strong>Please upload ' + strText + ' copy</strong>', Title);
        return false;
    }
    else
        return true;
}

function CheckFileType(cntr, ftype) {

    // Get the file upload control file extension
    var extn = $('#' + cntr).val().split('.').pop().toLowerCase();
    if (extn != '') {
        //debugger;        
        // Create array with the files extensions to upload
        var fileListToUpload;
        if (parseInt(ftype) == 1)
            fileListToUpload = new Array('pdf', 'gif', 'jpg', 'jpeg');
        else if (parseInt(ftype) == 2)
            fileListToUpload = new Array('gif', 'jpg', 'jpeg', 'png');
        else
            fileListToUpload = new Array('pdf');

        //Check the file extension is in the array.               
        var isValidFile = $.inArray(extn, fileListToUpload);

        // isValidFile gets the value -1 if the file extension is not in the list.  
        if (isValidFile == -1) {
            if (parseInt(ftype) == 1)
            //                alert('Please select a valid file of type pdf/gif/jpeg.');
                jAlert(cntr, '<strong>Please select a valid file of type pdf/gif/jpeg.</strong>', Title);
            else if (parseInt(ftype) == 2)
            //                alert('Please select a valid file of type gif/jpeg/png.');
                jAlert(cntr, '<strong>Please select a valid file of type gif/jpeg/png.</strong>', Title);
            else
            //                alert('Please select a valid pdf file only');
                jAlert(cntr, '<strong>Please select a valid pdf file only.</strong>', Title);
            $('#' + cntr).replaceWith($('#' + cntr).val('').clone(true));
        }
        else {
            // Restrict the file size to 500 KB.
            if ($('#' + cntr).get(0).files[0].size > (1024 * 500)) {
                //                alert('File size should not exceed 500 KB.');
                jAlert(cntr, '<strong>File size should not exceed 500 KB.</strong>', Title);
                $('#' + cntr).replaceWith($('#' + cntr).val('').clone(true));
            }
            if ($('#' + cntr).get(0).files[0].name.length > 50) {
                //                alert('File Name should be maximum 50 Characters');
                jAlert(cntr, '<strong>File Name should be maximum 50 Characters</strong>', Title);
                $('#' + cntr).replaceWith($('#' + cntr).val('').clone(true));
            }
            else
                return true;
        }
    }
    else
        return true;
}

function CheckFileTypeSize(cntr, ftype, fileSize, msg) {

    // Get the file upload control file extension
    var extn = $('#' + cntr).val().split('.').pop().toLowerCase();
    if (extn != '') {
        //debugger;        
        // Create array with the files extensions to upload
        var fileListToUpload;
        if (parseInt(ftype) == 1)
            fileListToUpload = new Array('pdf', 'gif', 'jpg', 'jpeg');
        else if (parseInt(ftype) == 2)
            fileListToUpload = new Array('gif', 'jpg', 'jpeg', 'png');
        else
            fileListToUpload = new Array('pdf');

        //Check the file extension is in the array.               
        var isValidFile = $.inArray(extn, fileListToUpload);

        // isValidFile gets the value -1 if the file extension is not in the list.  
        if (isValidFile == -1) {
            if (parseInt(ftype) == 1)
            //                alert('Please select a valid file of type pdf/gif/jpeg.');
                jAlert(cntr, '<strong>Please select a valid file of type pdf/gif/jpeg.</strong>', Title);
            else if (parseInt(ftype) == 2)
            //                alert('Please select a valid file of type gif/jpeg/png.');
                jAlert(cntr, '<strong>Please select a valid file of type gif/jpeg/png.</strong>', Title);
            else
            //                alert('Please select a valid pdf file only');
                jAlert(cntr, '<strong>Please select a valid pdf file only.</strong>', Title);
            $('#' + cntr).replaceWith($('#' + cntr).val('').clone(true));
        }
        else {
            // Restrict the file size to 500 KB.
            if ($('#' + cntr).get(0).files[0].size > (1024 * fileSize)) {
                jAlert(cntr, '<strong>File size should not exceed ' + msg + '.</strong>', Title);
                $('#' + cntr).replaceWith($('#' + cntr).val('').clone(true));
            }
            if ($('#' + cntr).get(0).files[0].name.length > 50) {
                //                alert('File Name should be maximum 50 Characters');
                jAlert(cntr, '<strong>File Name should be maximum 50 Characters</strong>', Title);
                $('#' + cntr).replaceWith($('#' + cntr).val('').clone(true));
            }
            else
                return true;
        }
    }
    else
        return true;
}

function jAlertSubmit(ControlName, MessageControlName, URL) {
    jAlert(ControlName, MessageControlName, Title, function (r) {
        //                debugger;
        if (r) {
            $(ControlName).attr("title", "Click here to submit/update");
            location.href = URL;
            return true;
        }
        else {
            return false;
        }
    });
}