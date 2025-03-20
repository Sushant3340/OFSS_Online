Imports System.Drawing
Imports System.Drawing.Imaging
Partial Class ONLINE_CAF_BarCode39
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim Input As String = UCase(Request.QueryString("ID").ToString())
        If Input = "" Then Input = "123"
        Dim ValidInput As String = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%*"
        Dim ValidCodes As String = "4191459566472786097041902596264733841710595784729059950476626106644590602984801043246599624767444602600464775861090446866032248034439186013047842447705803036526582823575858090365863556658042365383495434978353624150635770"
        Dim i As Integer
        For i = 1 To Input.Length
            If InStr(1, ValidInput, Mid(Input, i, 1)) = 0 Then
                Response.Write("Invalid input")
                Response.End()
            End If
        Next
        Input = UCase(IIf(Left(Input, 1) = "*", "", "*") & Input & IIf(Right(Input, 1) = "*", "", "*"))
        Dim bmp As Bitmap = New Bitmap(Input.Length * 16, 35)
        Dim g As Graphics = Graphics.FromImage(bmp)
        g.FillRectangle(New SolidBrush(Color.White), 0, 0, Input.Length * 16, 35)
        Dim p As New Pen(Color.Black, 1)
        Dim BarValue, BarX As Integer
        Dim BarSlice As Short
        For i = 1 To Input.Length
            Try
                BarValue = Val(Mid(ValidCodes, ((InStr(1, ValidInput, Mid(Input, i, 1)) - 1) * 5) + 1, 5))
                BarValue = IIf(BarValue = 0, 36538, BarValue)
                For BarSlice = 15 To 0 Step -1
                    If BarValue >= 2 ^ BarSlice Then
                        g.DrawLine(p, BarX, 0, BarX, 35)
                        BarValue = BarValue - (2 ^ BarSlice)
                    End If
                    BarX += 1
                Next
            Catch
            End Try
        Next
        bmp.Save(Response.OutputStream, ImageFormat.Gif)
        g.Dispose()
        bmp.Dispose()
    End Sub
End Class
