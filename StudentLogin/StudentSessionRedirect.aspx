<%@ Page Language="C#" AutoEventWireup="true" CodeFile="StudentSessionRedirect.aspx.cs"
    Inherits="StudentLogin_StudentSessionRedirect" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>OFSS :: Online Facilitation System for Students, Govt. of Bihar</title>
    <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <style>
        .container {
            width: 40%;
            border: 1px solid #eee !important;
            padding-right: 0px;
            padding-left: 0px;
            margin-top: 3em;
        }

        .header {
            min-height: 10px;
            vertical-align: middle;
            padding: 10px;
            text-align: center;
        }

        .containt {
            width: 100%;
            background: #f5f5f5;
            vertical-align: middle;
            text-align: center;
        }

        .glyphicon {
            font-size: 20px;
        }

        .footer {
            padding-right: 20px;
            border-top: 1px solid #eee;
        }

        .btn {
            border-radius: 0px;
        }

        .h4, .h5, .h6, h4, h5, h6 {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    </style>
    <script type="text/javascript" language="javascript">
        function noBack() { window.history.forward(); }
    </script>
</head>
<body onload="noBack();">
    <form id="form1" runat="server">
        <div class="container">
            <div class="containt">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <img src="../images/icon-timeout.png" />
                        <h4>Sorry !! Session has expired</h4>

                        <a href="StudentLogin.aspx" class="btn btn-danger btn-block" style="text-decoration: none; font-size: 18px;">Login again <i class="glyphicon glyphicon-log-in"></i></a>

                    </div>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
