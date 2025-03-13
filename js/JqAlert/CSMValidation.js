
//*****************Global Method******************
function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
};
var Title = "OFSS Portal, Govt. of Bihar";
//*****************End Global*********************
//function JConfirmation(ControlName, MessageControlName) {
//    jConfirm(ControlName, MessageControlName, Title, function (r) {
//        debugger;
//        if (r) {
//            //                    $('#<%=btnsubmit.ClientID %>').val(r);
//            //                    $('#<%=btnsubmit.ClientID %>')[0].click();
//            document.getElementById(ControlName).value = "";
//            document.getElementById(ControlName).click();
//            return true;
//        }
//        else {
//            return false;
//        }
//    });
//}
function JConfirmation(ControlName, MessageControlName, ControlType ,ControlTypeValue) {
    jConfirm(ControlName, MessageControlName, Title, function (r) {
        debugger;
        if (r) {
            $('#'+ControlName).attr(ControlType, ControlTypeValue);
            $('#'+ControlName).click();
            return true;
        }
        else {
            return false;
        }
    });
}
//*************For TextBox Validation*************
//Blank Field Validation

function blankFieldValidation(ControlName, MessageControlName) {
    if ($('#' + ControlName).val() == '') {
        //$('#' + ControlName).focus();
        jAlert(ControlName, '<strong>' + MessageControlName + ' cannot be left blank !</strong>', Title);
        return false;
    }
    else {
        return true;
    }
}


function WhiteSpaceValidation1st(ControlName, MessageControlName) {
      if ($('#' + ControlName).val().charAt(0) == ' ') {
        $('#' + ControlName).focus();

        jAlert(ControlName,'<strong>White Space is not allowed in first place of ' + MessageControlName +' !</strong>', Title);
        return false;
    }
    else {
        return true;
    }
}

function WhiteSpaceValidationLast(ControlName, MessageControlName) {
    var strVal = $('#' + ControlName).val();
// alert(strVal.length);
  //  return false;
    if (strVal.substr(strVal.length - 1) == ' ') {
        $('#' + ControlName).focus();
        jAlert(ControlName,'<strong>White Space is not allowed in last place of ' + MessageControlName + ' !</strong>', Title);
        return false;
    }
    else {
        return true;
    }
}



//*********End Textbox Validation************************
function SpecialCharacter1st(ControlName, MessageControlName) {
    if ($('#' + ControlName).val().charAt(0) == "'") {
        jAlert(ControlName,'<strong> ' + MessageControlName + ' is not allowed! </strong>', Title);
        return false;
    }
    else {
        return true;
    }
}

//*********For EmailId Validation******************************
function EmailValidation(Controlname,MessageControlName) {

    var strVal = $('#' + Controlname).val();
    if (strVal != '') {

        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!expr.test(strVal)) {
            jAlert(Controlname, '<strong>Invalid ' + MessageControlName + ' !</strong>', Title);
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
//**************End EmailId Validation*************************


//*************For Dropdownlist Validation*************
//Blank Field Validation

function DropDownValidation(ControlName, FieldName) {
    if ($('#' + ControlName).val() == '' || $('#' + ControlName).val() == '0') {
        jAlert(ControlName, '<strong>Please select ' + FieldName + '  !</strong>', Title);
        return false;
    }
    else {
        return true;
    }
}
function checkInput(ControlName,MessageControlName) {
    
    var obj = $('#' + ControlName).val();
    if (obj != '') {
        if (obj.length < 10) {
            jAlert(ControlName,'<strong>' + MessageControlName + ' should be at least 10 characters long!</strong>', Title);
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

//function SucessMessage(Messages, isNavigation, URL) {

//    jAlert('<strong>' + Messages + '</strong>','dfdfd');
//    if (isNavigation == 'Y') {
//        window.location.href = URL;
//    }
//}
////*********End Dropdownlist Validation************************



//*********File Upload Control Validation***********************

function ValidBlankFile(ControlName, MessageName) {
  
    file = $('#' + ControlName).val();
       if (file == '') {
        jAlert(ControlName,'<strong>' + MessageControlName + ' </strong>', Title);
        return false;
    }

}
//Extention Should be pass with comma separated like "jpeg,jpg,gif,bmp,png"
function ValidFileExtention(ControlName, fileExtensions) {
    var fileExtension = fileExtensions.split(','); // ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    file = $('#' + ControlName).val();
    var extension = file.substr((file.lastIndexOf('.') + 1));

    if ($.inArray(extension, fileExtension) == -1) {
        jAlert(ControlName,'<strong> Only ' + fileExtension.join(', ') + ' file allowed  !</strong>', Title);
        return false;
    }

}

function ValidFileSize(ControlName, SizeInMB, Units) {
    var uploadControl = document.getElementById(ControlName);
    //  alert(uploadControl.files[0].size);
    var convertMb = 0;
    if (Units == 'MB') {
        convertMb = eval(SizeInMB) * 1024 * 1024;
    }
    else {
        convertMb = eval(SizeInMB) * 1024;
    }


    if (uploadControl.files[0].size > convertMb) {
        jAlert(ControlName,'<strong> File size should be less than  ' + SizeInMB + ' ' + Units + ' !</strong>', Title);
        $('#' + ControlName).val('');
        return false;
    }
}

//Extention Should be pass with comma separated like "jpeg,jpg,gif,bmp,png"
function ValidFileExtentionAndSize(ControlName, fileExtensions, SizeInMB, Units) {
    var fileExtension = fileExtensions.split(','); // ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    file = $('#' + ControlName).val();
    var extension = file.substr((file.lastIndexOf('.') + 1));

    if ($.inArray(extension, fileExtension) == -1) {
        jAlert(ControlName,'<strong> Only ' + fileExtension.join(', ') + ' file allowed  !</strong>', Title);
        $('#' + ControlName).val('');
        return false;
    }
    else {
      //  alert("dfdf:");

        var uploadControl = document.getElementById(ControlName);
        //  alert(uploadControl.files[0].size);
        var convertMb = 0;
        if (Units == 'MB') {
            convertMb = eval(SizeInMB) * 1024 * 1024;
        }
        else {
            convertMb = eval(SizeInMB) * 1024;
        }


        if (uploadControl.files[0].size > convertMb) {
            jAlert(ControlName,'<strong> File size should be less than  ' + SizeInMB + ' ' + Units + ' !</strong>', Title);
            $('#' + ControlName).val('');
            return false;
        }
    }

}
//*********End File Upload Control Validation ****************

function AlphabetOnly(obj) {

    var TCode = obj.value;
    if (TCode.charAt(0) == " ") {
        jAlert(obj,'<strong> White space is not allowed in first place! !</strong>', Title);
        if (TCode.length > 1)
            obj.value = TCode.substring(1, TCode.length);
        else
            obj.value = "";
        return false;
    }
    if (/[^a-zA-Z\s]/.test(TCode)) {
        TCode = TCode.replace(/[^a-zA-Z\s]/g, "")
        obj.value = TCode;
        jAlert(obj, '<strong> Invalid Character(s) are not allowed!</strong>', Title);
        return false;
    }
}
function AlphanumericOnly(obj) {

    var TCode = $('#' + obj).val();
    if (TCode.charAt(0) == " ") {
        jAlert(obj, '<strong> White space is not allowed in first place!</strong>', Title);
        if (TCode.length > 1)
            $('#' + obj).val(TCode.substring(1, TCode.length));
        else
            $('#' + obj).val("");
        return false;
    }
    if (/[^a-zA-Z0-9\s]/.test(TCode)) {
        TCode = TCode.replace(/[^a-zA-Z0-9\s]/g, "")
        $('#' + obj).val(TCode);
        jAlert(obj, '<strong> Invalid Character(s) are not allowed!</strong>', Title);
      
        return false;
    }
}
function AlphanumericWithSpecialChar(obj, sp, numTextSize) {

    var textVal = $('#' + obj).val();
    var ch = "";
    var re = "/[^a-zA-Z0-9" + sp + "\\s]/";
    var InvalidChars = "~`!@#$%^&*()-_+=|\}]{[':;,.><?/"
    if (textVal.length > 0) {
        if (InvalidChars.indexOf(textVal.charAt(0)) != -1 || textVal.charAt(0) == " ") {
            $('#' + obj).val(textVal.substring(1, textVal.length));
            jAlert(obj, '<strong>White space(s) with ' + sp + ' Character(s) are allowed in first place!</strong>', Title);


            return false;

        }
        for (i = 0; i < sp.length; i++) {
            ch = sp.charAt(i);
            InvalidChars = InvalidChars.replace(ch, '');
        }
        for (j = 0; j < InvalidChars.length; j++) {
            ch = InvalidChars.charAt(j);

            if (textVal.indexOf(ch) != -1) {

                jAlert(obj, '<strong> Only alphanumeric and ' + sp + ' Character(s) are allowed!</strong>', Title);
                var stringV = textVal.replace(ch, '');

                $('#' + obj).val(stringV);

                return false;
            }
        }
        if (/[^a-zA-Z0-9@().:|\s]/.test(textVal)) {
            for (i = 0; i < sp.length; i++) {
                ch = sp.charAt(i);
                InvalidChars = InvalidChars.replace(ch, '');
            }

        }
    }
    if (textVal.length > parseInt(numTextSize)) {
        obj.value = textVal.substring(0, numTextSize);
        jAlert(obj, '<strong> Entered Text Exceeds ' + numTextSize + ' Characters.</strong>', Title);
        return false;
    }
}

function extractNumber(obj, decimalPlaces, allowNegative) {

    var temp = obj.value;

    // avoid changing things if already formatted correctly
    var reg0Str = '[0-9]*';
    if (decimalPlaces > 0) {
        reg0Str += '\\.?[0-9]{0,' + decimalPlaces + '}';
    } else if (decimalPlaces < 0) {
        reg0Str += '\\.?[0-9]*';
    }
    reg0Str = allowNegative ? '^-?' + reg0Str : '^' + reg0Str;
    reg0Str = reg0Str + '$';
    var reg0 = new RegExp(reg0Str);
    if (reg0.test(temp)) return true;

    // first replace all non numbers
    var reg1Str = '[^0-9' + (decimalPlaces != 0 ? '.' : '') + (allowNegative ? '-' : '') + ']';
    var reg1 = new RegExp(reg1Str, 'g');
    temp = temp.replace(reg1, '');

    if (allowNegative) {
        // replace extra negative
        var hasNegative = temp.length > 0 && temp.charAt(0) == '-';
        var reg2 = /-/g;
        temp = temp.replace(reg2, '');
        if (hasNegative) temp = '-' + temp;
    }

    if (decimalPlaces != 0) {
        var reg3 = /\./g;
        var reg3Array = reg3.exec(temp);
        if (reg3Array != null) {
            // keep only first occurrence of .
            //  and the number of places specified by decimalPlaces or the entire string if decimalPlaces < 0
            var reg3Right = temp.substring(reg3Array.index + reg3Array[0].length);
            reg3Right = reg3Right.replace(reg3, '');
            reg3Right = decimalPlaces > 0 ? reg3Right.substring(0, decimalPlaces) : reg3Right;
            temp = temp.substring(0, reg3Array.index) + '.' + reg3Right;
        }
    }

    obj.value = temp;
}

function validateEmail(eId) {
    var sEmail;
    sEmail =$('#' + eId).val() ;

    if (sEmail.length > 0) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;


        }
        else {
            //            jAlert(eId, '<strong>Invalid Email ID!</strong>', ModalTitle);

            eId.value = "";
            eId.focus();
            jAlert(eId, '<strong> Invalid Email ID!</strong>', Title);
            return false;

        }
    }
}

function alphanumeric(alphane,msg) {

    var strVal = $('#' + alphane).val();

    var numaric = strVal;
    var NumCnt = 0;
    var CharCnt = 0;
    for (var j = 0; j < numaric.length; j++) {
        var alphaa = numaric.charAt(j);
        var hh = alphaa.charCodeAt(0);
       
        if ((hh >= 48 && hh <= 57)) {
            NumCnt = NumCnt + 1;
        }
        if ((hh > 64 && hh < 91) || (hh > 96 && hh < 123)) {
            CharCnt = CharCnt + 1;
        }

    }
    if (CharCnt > 0) {
        return true;
    }
    else {
        jAlert(alphane, msg + ' should be alphanumeric!', Title);
       
        return false;
    }

}


function Check_Value(e) {


    var ids = e.id;
    var str;
    str = e.value;

    switch (str.charCodeAt(0)) {


        case 32:
            {

                jAlert(ids, '<strong>White Space Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 33:
            {
                jAlert(ids, '<strong>! Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e); 
                return false;
            }
        case 37:
            {
                jAlert(ids, '<strong>% Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 38:
            {
                jAlert(ids, '<strong>& Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 40:
            {
                jAlert(ids, '<strong>( Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 41:
            {
                jAlert(ids, '<strong>) Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 42:
            {
                jAlert(ids, '<strong>* Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 43:
            {
                jAlert(ids, '<strong>+ Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 44:
            {
                jAlert(ids, '<strong>, Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 45:
            {
                jAlert(ids, '<strong>- Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 46:
            {
                jAlert(ids, '<strong>. Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 47:
            {
                jAlert(ids, '<strong>/ Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 48:
            {
                jAlert(ids, '<strong>0 Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 49:
            {
                jAlert(ids, '<strong>1 Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 50:
            {
                jAlert(ids, '<strong>2 Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 51:
            {
                jAlert(ids, '<strong>3 Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 52:
            {
                jAlert(ids, '<strong>4 Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 53:
            {
                jAlert(ids, '<strong>5 Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 54:
            {
                jAlert(ids, '<strong>6 Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 55:
            {
                jAlert(ids, '<strong>7 Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 56:
            {
                jAlert(ids, '<strong>8 Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
        case 57:
            {
                jAlert(ids, '<strong>9 Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }

        case 58:
            {
                jAlert(ids, '<strong>: Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }


        case 61:
            {
                jAlert(ids, '<strong>= Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
       
        case 63:
            {
                jAlert(ids, '<strong>? Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
       
        case 64:
            {
                jAlert(ids, '<strong>@ Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
       
        
       
        
        case 92:
            {
                jAlert(ids, '<strong>\ Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }


        case 95:
            {
                jAlert(ids, '<strong>_ Not allowed in 1st Place!!! !</strong>', ModalTitle);
                e.value = str.substring(1, str.length);
                Check_Value(e);
                return false;
            }
    }
}