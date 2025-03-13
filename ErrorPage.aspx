<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ErrorPage.aspx.cs" Inherits="Dashboard_ErrorPage" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta charset="utf-8" />
    <meta name="description" content="overview &amp; stats" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
    <title>OFSS Portal, Govt. of Bihar</title>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- jQuery 2.1.4 -->
    <script src="./js/jQuery-2.1.4.min.js"></script>
    <!-- Tell the browser to be responsive to screen width -->
    <style>
        .header
        {
            padding: 10px 20px 5px 0px;
        }
        .header h3
        {
            font-size: 30px;
            color: #D05050;
        }
        .error-con
        {
            padding: 30px 0px 20px 0px;
            font-size: 16px;
            font-weight: normal;
        }
        .wrapper
        {
            background: #fafafa;
        }
        .eror{margin: 0 auto;  width: 800px;text-align: center; margin-top:2em;}
        .btn{ border-radius:0px;}
         .wrapper img{ max-width:100%;}
         @media (max-width:650px) {
             .eror { width: 375px;}
             }
        
    </style>
    <script type="text/javascript">
        function preventBack() { window.history.forward(); }
        setTimeout("preventBack()", 0);
        window.onunload = function () { null };
    </script>
</head>
<body class="hold-transition skin-blue sidebar-mini">
    <form runat="server" id="form1">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div class="wrapper">
        <%-- <uctopHeader:topHeader ID="topHeader1" runat="server" />--%>
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">
        <%--<ucLeftPanel:LeftPannel ID="leftMenu1" runat="server" />--%>
      </aside>
        <!-- Content Wrapper. Contains page content -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                 <div class="eror">
                    <img src="images/errorimg.png" style="width:100px; height:100px;" alt=""/>
                    <h3>
                        Looks like something went wrong !
                    </h3>
                    <div class="error-con">
                        <p>
                            The application encountered an error processing the request. Please try again later.
                            We are sorry for the inconvenience. Help us improve your experience by sending an
                            error report.
                        </p>
                        <a href='#' id="home" runat="server" class="btn btn-danger" title="Click here to go home">
                            Back to Home <i class="glyphicon glyphicon glyphicon-log-in"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="clearfix">
                </div>
            </div>
        </div>
    </div>
    </form>
</body>
</html>
