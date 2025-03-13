<%@ Page Language="C#" AutoEventWireup="true" CodeFile="OLHome.aspx.cs" Inherits="_OLHome" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head runat="server">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Home, Website Home Page, The Department of Higher Education of the State Looks after education at University, Post-Graduate, Graduate and Higher Secondary level. It also provides Vocational Education in order to prepare the Youth for self-employment. Higher Education Department facilitate to students for e-Admission in both Junior and Degree Colleges Students." />
    <meta name="publisher" content="HigherEducationDepartment" />
    <title>Welcome :: Online Facilitation System for Students (OFSS)</title>
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <!-- Stylesheet
		================================================== -->
    <link rel="stylesheet" type="text/css" href="css/sams-home.css">
    <link rel="stylesheet" type="text/css" href="css/animate.min.css">
    <script src="js/jquery.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/modernizr.js"></script>
    <script src="js/jquery.animateSlider.js" type="text/javascript"></script>
    <script src="js/main.js" type="text/javascript"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style>
        .bg-facebook
        {
            background-color: #3457a7;
        }
        .social-box a:hover
        {
            opacity: 0.8;
        }
        .navbar
        {
            border-radius: 0;
        }
        #menu.navbar-default
        {
            background-color: #095181;
            margin-bottom: 0;
        }
        #footer-section
        {
            background: #095181;
            color: #FFF;
        }
        .iticontainer
        {
            margin-top: 15%;
        }
        .aboutcontent
        {
            padding: 50px;
            background-color: #f5f5f5;
            text-align: justify;
        }
        .aboutcontent h2
        {
            font-size: 35px;
            margin: 0 0 10px 0;
        }
        .aboutcontent h3
        {
            color: #19669e;
            font-size: 30px;
            margin: 0 0 35px 0;
        }
        /*.bg-gray {background-color: #ebebeb; border-bottom: dashed 2px #FFF; border-right: dashed 2px #FFF;}*/
        .more-btn.bg-blue
        {
            background-color: #09527f;
            border: 0;
            color: #FFF;
            padding: 12px 35px;
            margin-top: 50px;
            font-size: 20px;
        }
        .more-btn.bg-blue:hover
        {
            background-color: #044770;
        }
        .bg-gray:nth-child(2n)
        {
            border-right: 0;
        }
        .bg-gray:nth-child(3n)
        {
            border-bottom: 0;
        }
        .bg-gray:nth-child(4n)
        {
            border-bottom: 0;
            border-right: 0;
        }
        .portlet
        {
            padding: 30px 10px 40px 10px;
            -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
            -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
            box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
            background-color: #ebebeb;
        }
        .portlet img
        {
            display: block;
            margin: 20px auto 40px auto;
        }
        .more-btn
        {
            background-color: #ffa800;
            border-color: #ffa800;
            color: #000000;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 22px;
        }
        .more-btn:hover
        {
            background-color: rgba(255, 168, 0,0.7);
        }
        .no-bg
        {
            background-color: transparent;
            border-color: #ff8601;
            color: #ff8601;
            font-size: 18px;
            padding-left: 20px;
            padding-right: 20px;
            float: right;
        }
        p
        {
            margin-bottom: 50px;
        }
        @media only screen and (max-width: 1600px)
        {
            .iticontainer
            {
                margin-top: 8%;
            }
        }
        @media only screen and (max-width: 1366px)
        {
            .iticontainer
            {
                margin-top: 6%;
            }
            .portlet
            {
                padding: 30px 10px 25px 10px;
            }
            .portlet img
            {
                margin: 5px auto 25px auto;
            }
            .aboutcontent
            {
                padding: 21px 30px;
            }
            .aboutcontent h2
            {
                font-size: 32px;
            }
            .aboutcontent h3
            {
                font-size: 25px;
                margin: 0 0 15px 0;
            }
            #menu
            {
                padding: 10px;
            }
            .more-btn
            {
                font-size: 18px;
                padding: 5px 15px;
            }
        }
        @media only screen and (max-width: 1152px)
        {
            .iticontainer
            {
                margin-top: 10%;
            }
            p
            {
                margin-bottom: 30px;
            }
            .portlet img
            {
                margin: 10px auto 30px auto;
            }
        }
        @media only screen and (max-width: 800px)
        {
            .iticontainer
            {
                margin-bottom: 80px;
            }
            .bg-gray
            {
                margin-bottom: 30px;
            }
            .mobi-app img
            {
                width: 30%;
                margin-top: 9px;
            }
            .copywrite
            {
                padding-bottom: 10px;
                margin-bottom: 10px;
                border-bottom: solid 1px #FFF;
            }
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="container" id="maincontaint">
        <div class="iticontainer">
           <%-- <div class="row">
                <div class="col-md-10 col-sm-5 bg-gray" align="center">
                    Welcome to Sams Web
                </div>
            </div>--%>
            <div class="row">
                <div class="col-md-3 col-sm-5 bg-gray">
                    <div class="portlet">
                      <%--  <a href="ONLINE_CAF/JrCAFForm.aspx" class="btn more-btn btn-block"
                            target="_blank">Intermediate Application</a--%>
                        <a href="#" class="btn more-btn btn-block" target="_blank">Intermediate Application</a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-5 bg-gray">
                    <div class="portlet">
                    <%--    <a href="ONLINE_CAF_Degree/CAFDEG.aspx" class="btn more-btn btn-block"
                            target="_blank">Degree Application</a>--%>
                        <a href="#" class="btn more-btn btn-block" target="_blank">Degree Application</a>
                    </div>
                </div>
                <%--<div class="col-md-3 col-sm-5 bg-gray">
                    <div class="portlet">
                        <a href="ONLINE_CAF_ITI/CAFForm.aspx" class="btn more-btn btn-block"
                            target="_blank">ITI Application</a>
                    </div>
                </div>--%>
            </div>
        </div>
    </div>
    </form>
    <script src="js/jcarousellite_1.0.1c4.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $.fillCopyright('copy', 'SAMS');

            $(".varticalnewsticker").jCarouselLite({
                vertical: true,
                hoverPause: true,
                visible: 1,
                auto: 500,
                speed: 3000
            });
        });


        var windowHeight = $(window).height();
        var winW = $(window).width();
        var menutopHeight = $('#menu').innerHeight();
        var footerHeight = $('#footer-section').innerHeight();

        if (winW >= 801) {
            $('#maincontaint').css('height', windowHeight - (menutopHeight + footerHeight + 6));
        }
    </script>
</body>
</html>
