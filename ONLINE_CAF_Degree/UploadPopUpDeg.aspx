<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UploadPopUpDeg.aspx.cs" Inherits="CAF_UploadPopUpDeg" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head id="Head1" runat="server">
    <title>Welcome :: Online Facilitation System for Students (OFSS)</title>
    <script language="javascript" type="text/javascript">

        function ShowImage() {
            debugger;
            var id = '<%=strFilename%>';
            var status = '<%=Status%>';
            if (status == 'YES') {
//                window.opener.document.getElementById('ImgAppl').src = document.getElementById('hidImgPth').value + id;
                window.opener.document.getElementById('ImgAppl').src = document.getElementById('hidImgPth').value ;
                window.opener.document.getElementById('hdnImgAppl').value = id;
                window.close();
            }
            else {
                alert('You have not uploaded your photo.');
                window.opener.document.getElementById('hdnImgAppl').value = '';
            }
        }

        function closeThis() {
            if (confirm('Are you sure to cancel uploading photo')) {
                return true;
            }
            else {
                return false;
            }

        }
        function check() {
            if (event.keyCode == 93) {
                alert('Not allowed');
                return false;
            }
        }    

    </script>
    <script language="javascript" type="text/javascript">
        function ShowPreview(ctlFldUpload) {
            var fname = document.getElementById(ctlFldUpload).value;
            if (fname == '') {
                alert('Please select a file');
                return false;
            }
            //================Checking Extension===================

            extArray = new Array(".jpg", ".jpeg", ".png", ".bmp", ".gif");
            var allowSubmit = false;
            if (!fname) return;
            while (fname.indexOf("\\") != -1)
                fname = fname.slice(fname.indexOf("\\") + 1);
            ext = fname.slice(fname.lastIndexOf(".")).toLowerCase();

            for (var i = 0; i < extArray.length; i++) {
                if (extArray[i] == ext) { allowSubmit = true; break; }
            }
            if (allowSubmit) {

                return true;
            }
            else {
                alert("Please upload a file with extension of " + (extArray.join("  ")));
                return false;
            }

        }    
    </script>
    <script language="javascript" type="text/javascript">
        var message = "Right Click Disabled";
        function RightClickDisable(keyp) {
            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && (event.button == 2)) //Google chrome browser
            { alert(message); return false; }
            if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) //Microsoft IE browser
            {
                alert(message); return false;
            }
        }
        document.onmousedown = RightClickDisable;
    </script>
    <style type="text/css">
        body
        {
            font-family: Tahoma, Geneva, sans-serif;
            font-size: 11px;
            color: #333333;
            border: 3px solid #CCCCCC;
            padding: 10px;
            margin-top: 10px;
            height: 300px;
            background-color: #e0eefb;
        }
        .submitBtn
        {
            font-size: 12px;
            font-weight: bold;
            border: 1px solid #0A3450;
            color: #FFF;
            background-color: #105a8b;
            padding: 2px;
        }
        .smlfont
        {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
            font-weight: normal;
            color: #333333;
            text-decoration: none;
        }
        .h3
        {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 18px;
            font-weight: bold;
            color: #333333;
            text-decoration: none;
        }
    </style>
</head>
<body onkeydown="check();">
    <form id="form1" runat="server">
    <asp:HiddenField ID="hidImgPth" runat="server" />
    <div>
        <table border="0" cellpadding="2" cellspacing="0" width="100%">
            <tr>
                <td>
                    <h3>
                        Upload a picture of yourself</h3>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:FileUpload runat="server" ID="imgUpload" />&nbsp;<asp:Button runat="server"
                        Text="Upload" OnClientClick="return ShowPreview('imgUpload');" CssClass="submitBtn"
                        ID="upload" OnClick="upload_Click"  />
                </td>
            </tr>
            <tr>
                <td>
                    You can upload a JPG, JPEG, GIF,BMP or PNG file. (Do not upload pictures containing celebrities,
                    nudity, artwork or copyrighted images.) Note: The photo you specify here will be
                    used across CAF, ID Card, Library Card etc.
                </td>
            </tr>
            <tr>
                <td align="center">
                    <asp:Image runat="server" ID="imgPreview" Height="120px" Width="125px" Visible="false" />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <input type="button" value="&nbsp;&nbsp;Ok&nbsp;&nbsp;" class="submitBtn" onclick="ShowImage();" />
                    <asp:Button runat="server" ID="btnCancel" Text="Cancel" CssClass="submitBtn" OnClientClick="return closeThis();" />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <font color="#FF3333" size="3">
                        <asp:Label ID="lblMsg" runat="server" Visible="false"></asp:Label></font>
                </td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
