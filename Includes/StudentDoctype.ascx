<%@ Control Language="C#" AutoEventWireup="true" CodeFile="StudentDoctype.ascx.cs"
    Inherits="includes_StudentDoctype" %>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta charset="utf-8" />
<title>OFSS Online Facilitiation System For Students</title>
<meta name="description" content="overview &amp; stats" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<!-- bootstrap & fontawesome -->
<link href="../style/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="../css/font-awesome.min.css" />
<link rel="stylesheet" href="../css/ace.min.css" />
<link href="../css/Studentdashboard.css" rel="stylesheet" type="text/css" />
<link href="../js/JqAlert/jQuery.alert.css" rel="stylesheet" type="text/css" />
<link href="../css/chosen.css" rel="stylesheet" type="text/css" />
<link href="../css/bootstrap-datepicker3.min.css" rel="stylesheet" type="text/css" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<!--[if lte IE 9]>
			<link rel="stylesheet" href="../css/ace-part2.min.css" class="ace-main-stylesheet" />
		<![endif]-->
<link rel="stylesheet" href="../css/ace-skins.min.css" />
<link rel="stylesheet" href="../css/ace-rtl.min.css" />
<!--[if lte IE 9]>
		  <link rel="stylesheet" href="../css/ace-ie.min.css" />
		<![endif]-->
<!-- inline styles related to this page -->
<!-- ace settings handler -->
<!-- HTML5shiv and Respond.js for IE8 to support HTML5 elements and media queries -->
<!--[if lte IE 8]>
		<script src="../js/html5shiv.min.js"></script>
		<script src="../js/respond.min.js"></script>
		<![endif]-->
<script src="../js/JqAlert/CSMValidation.js" type="text/javascript"></script>
<script src="../js/JqAlert/jQuery.js" type="text/javascript"></script>
<script src="../js/JqAlert/jQuery.alert.js" type="text/javascript"></script>
<script src="../js/jquery-2.2.4.js" type="text/javascript"></script>
<script src="../js/ace.min.js" type="text/javascript"></script>
<script src="../js/ace-extra.min.js" type="text/javascript"></script>
<script src="../js/tether.min.js" type="text/javascript"></script>
<script src="../js/bootstrap.min.js" type="text/javascript"></script>
<script src="../js/bootstrap-datepicker.min.js" type="text/javascript"></script>
<script src="../js/chosen.jquery.js" type="text/javascript"></script>
<script src="../js/custom.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function () {

        setnavigation();
        // $.fillCopyright("copy", '');

    });

    function setnavigation() {
        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);
        var str = path.substring(path.lastIndexOf('/') + 1).replace(/[^a-zA-Z ]/g, "");

        $('.nav-list a').each(function () {

            var href = $(this).attr('href');
            var curUrl = href.substring(href.lastIndexOf('/') + 1).replace(/[^a-zA-Z ]/g, "");

            if (str === curUrl) {
                $(this).closest('li').parent().parent().find('a').addClass('active');
                $(this).closest('li').addClass('active');
            }
        });
    };

</script>
<script>
    $.fillCopyright = function (selDiv, title) {
        var curDate = new Date();
        var curYear = curDate.getFullYear();
        var copyVal = "Copyright &copy; " + curYear + " SAMS Application";
        $('#' + selDiv).html(copyVal);
    }
</script>
