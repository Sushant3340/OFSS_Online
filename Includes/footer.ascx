<%@ Control Language="C#" AutoEventWireup="true" CodeFile="footer.ascx.cs" Inherits="includes_footer" %>
<div class="footer">
    Online Facilitation System for Students. All rights reserved @2018
</div>
<!-- Large Modal Window Panel -->
<div class="modal fade bs-example-modal-lg" id="pageModal" tabindex="-1" role="dialog"
    aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">
                </h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;</button>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>
<!-- Medium Modal Window Panel -->
<div class="modal fade" id="pageModal-md" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;</button>
                <h4 class="modal-title" id="myModalLabel">
                </h4>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>
<asp:HiddenField ID="hdnExcelValue" runat="server" />
<asp:HiddenField ID="hdnExcelFile" runat="server" />
<asp:Button ID="btnExcel" runat="server" Text="Button" Style="display: none" OnClick="btnExcel_Click" />
<script type="text/javascript">
    $(document).ready(function () {
        $("#anchExcel").click(function (e) {
            if ($("#viewTable").length) {
                var cloneTable = $("#viewTable").clone();
                cloneTable.find('table').attr('border', '1px');
                cloneTable.find('table tbody th').css({
                    "background-color": "yellow"
                });
                cloneTable.find('th.noPrint').remove();
                cloneTable.find('td.noPrint').remove();
                cloneTable.find('tr.noPrint').remove();

                cloneTable.find('input[type=text],select,textarea').each(function () {
                    var elementType = $(this).prop('tagName');
                    if (elementType == 'SELECT')
                        var textVal = $(this).find("option:selected").text();
                    else
                        var textVal = $(this).val();
                    $(this).replaceWith('<label>' + textVal + '</label>');
                });

                cloneTable.find('input[type=radio]').remove();

                //                cloneTable.find("input[type='radio']").each(function (i, x) {
                //                    if (!$(x).is(":checked")) {
                //                        cloneTable.find("" + $(this).attr("id") + "").remove();
                //                        cloneTable.find("label[for='" + $(this).attr("id") + "']").remove();
                //                    }
                //                    if ($(x).is(":checked")) {
                //                        $(this).replaceWith('<label>' + $("label[for='" + $(this).attr("id") + "']").text() + '</label>');
                //                    }
                //                });

                cloneTable.find('a').each(function () {
                    var anchorVal = $(this).text();
                    $(this).replaceWith('<span>' + anchorVal + '</span>');
                });

                var html = cloneTable.html();
                html = $.trim(html);
                html = html.replace(/>/g, '&gt;');
                html = html.replace(/</g, '&lt;');
                $("input[id$='hdnExcelValue']").val(html);
                $("input[id$='hdnExcelFile']").val(excelFileName);
                $("[id*=btnExcel]").click();
            }
            else
                jAlert('', '<strong>viewTable is undefined. Please assign viewTable as id of the div in which gridview resides.</strong>', Title);
        });
    });
</script>
