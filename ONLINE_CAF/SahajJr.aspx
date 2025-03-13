<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SahajJr.aspx.cs" Inherits="ONLINE_CAF_SahajJr" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>OFSS | SAHAJ </title>
    <script src="../js/jquery-2.2.4.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#Button1").click();
        });
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <asp:HiddenField runat="server" ID="Uniquerefid" />
    <asp:HiddenField runat="server" ID="StudName" />
    <asp:HiddenField runat="server" ID="StudId" />
    <asp:HiddenField runat="server" ID="AppFee" />
    <asp:HiddenField runat="server" ID="service_provider_id" />
    <asp:HiddenField runat="server" ID="response_url" />
    <asp:HiddenField runat="server" ID="Checksumkey" />
    <asp:Button ID="Button1" runat="server" Style="display: none;" />
    </form>
</body>
</html>
