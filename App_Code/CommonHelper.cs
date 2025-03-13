using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
using System.Xml.Serialization;
using System.Web.UI.HtmlControls;


public static class CommonHelper
{

    static string MailUserName = ConfigurationManager.AppSettings["MailServerUserName"];
    static string MailPassword = ConfigurationManager.AppSettings["MailServerPassword"];
    static string MailPort = ConfigurationManager.AppSettings["MailPort"];
    static string MailHost = ConfigurationManager.AppSettings["ServerName"];
    static string CertificatePath = ConfigurationManager.AppSettings["CertificatePath"];
    static string CertificateExist = ConfigurationManager.AppSettings["CertificateExist"];

    // Cretaed by Kunja Bihari Sahoo on 04-11-2016
    public static void Redirect(string url, string target, string windowFeatures)
    {
        HttpContext context = HttpContext.Current;

        if ((string.IsNullOrEmpty(target) || target.Equals("_self", StringComparison.OrdinalIgnoreCase)) && string.IsNullOrEmpty(windowFeatures))
        {
            context.Response.Redirect(url);
        }
        else
        {
            Page page = (Page)context.Handler;
            if (page == null)
            {
                throw new InvalidOperationException("Cannot redirect to new window outside Page context.");
            }
            url = page.ResolveClientUrl(url);

            string script = null;
            if (!string.IsNullOrEmpty(windowFeatures))
            {
                script = "window.open(\"{0}\", \"{1}\", \"{2}\");";
            }
            else
            {
                script = "window.open(\"{0}\", \"{1}\");";
            }

            script = string.Format(script, url, target, windowFeatures);
            ScriptManager.RegisterStartupScript(page, typeof(Page), "Redirect", script, true);
        }
    }
    public static string Validate_Regex_Alphanumeric(TextBox ctl, string ctlName)
    {
        try
        {
            if (Regex.IsMatch(ctl.Text, @"^[a-zA-Z0-9]*$"))
            {
                str = "PASS";
            }
            else
            {
                str = "Please enter only alphanumeric characters in place of " + ctlName + " !";
            }

        }

        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        return str;
    }
    public static string Validate_Regex_Number(TextBox ctl, string ctlName)
    {
        try
        {
            if (Regex.IsMatch(ctl.Text, @"^[0-9]*$"))
            {
                str = "PASS";
            }
            else
            {
                str = "Please enter only numbers in place of " + ctlName + " !";
            }

        }

        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        return str;
    }
    public static string Validate_Regex_Alphanumeric_SplChar(TextBox ctl, string ctlName)
    {
        try
        {
            if (Regex.IsMatch(ctl.Text, @"^[a-zA-Z0-9 ./-]*$"))
            {
                str = "PASS";
            }
            else
            {
                str = "Please enter alphanumeric characters spl chars .,/,- and space in place of " + ctlName + " !";
            }

        }

        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        return str;
    }
    public static string Validate_Regex_Alphanumeric_SplChar1(TextBox ctl, string ctlName)
    {
        try
        {
            if (Regex.IsMatch(ctl.Text, @"^[a-zA-Z0-9 .()]*$"))
            {
                str = "PASS";
            }
            else
            {
                str = "Please enter alphanumeric characters spl chars .,(,) and space in place of " + ctlName + " !";
            }

        }

        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        return str;
    }
    public static string Validate_Regex_Alphanumeric_SplChar_Space(TextBox ctl, string ctlName)
    {
        try
        {
            if (Regex.IsMatch(ctl.Text, @"^[a-zA-Z0-9 -]*$"))
            {
                str = "PASS";
            }
            else
            {
                str = "Please enter alphanumeric characters,spl char - and space in place of " + ctlName + " !";
            }

        }

        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        return str;
    }
    //************************************* Server side Control Validation function ***************************************


    static string str = string.Empty;
    public static string ValidateTextbox_First_Char(TextBox ctl, string lbltext)
    {
        try
        {
            if (ctl.Text != "")
            {
                if (ctl.Text.Substring(0, 1) == " ")
                {
                    str = "Does not allow White Space(s) in first place of " + lbltext + " !";
                    // ctl.Focus();
                }
                else if (ctl.Text.Substring(0, 1) == "!" | ctl.Text.Substring(0, 1) == "@" | ctl.Text.Substring(0, 1) == "#" | ctl.Text.Substring(0, 1) == "$" | ctl.Text.Substring(0, 1) == "%" | ctl.Text.Substring(0, 1) == "^" | ctl.Text.Substring(0, 1) == "&" | ctl.Text.Substring(0, 1) == "*" | ctl.Text.Substring(0, 1) == "(" | ctl.Text.Substring(0, 1) == ")" | ctl.Text.Substring(0, 1) == "-" | ctl.Text.Substring(0, 1) == "_" | ctl.Text.Substring(0, 1) == "+" | ctl.Text.Substring(0, 1) == "=" | ctl.Text.Substring(0, 1) == "{" | ctl.Text.Substring(0, 1) == "}" | ctl.Text.Substring(0, 1) == "[" | ctl.Text.Substring(0, 1) == "]" | ctl.Text.Substring(0, 1) == "|" | ctl.Text.Substring(0, 1) == ";" | ctl.Text.Substring(0, 1) == ":" | ctl.Text.Substring(0, 1) == "<" | ctl.Text.Substring(0, 1) == ">" | ctl.Text.Substring(0, 1) == "?" | ctl.Text.Substring(0, 1) == "." | ctl.Text.Substring(0, 1) == "," | ctl.Text.Substring(0, 1) == "/" | ctl.Text.Substring(0, 1) == "\\" | ctl.Text.Substring(0, 1) == "~" | ctl.Text.Substring(0, 1) == "`" | ctl.Text.Substring(0, 1) == "\"" | ctl.Text.Substring(0, 1) == "\'")
                {
                    str = "Does not allow Special Characters in first place of " + lbltext + " !";
                    //ctl.Clear();
                    // ctl.Focus();
                }
                else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
                {
                    str = "Does not allow White Space(s) in last place of " + lbltext + " !";
                    //ctl.Focus();
                }
                else if ((ctl.Text.Contains('!')) | (ctl.Text.Contains('%')) | (ctl.Text.Contains('<')) | (ctl.Text.Contains('>')) | (ctl.Text.Contains('=')) | (ctl.Text.Contains('\"')) | (ctl.Text.Contains('\'')))
                {
                    str = "Does not allow !,%,<,>,=,\", and single quote characters in " + lbltext + " !";
                    //ctl.Clear();
                    // ctl.Focus();
                }
                else
                {
                    str = "PASS";
                }
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }


    static string[] StringFormat = { "<button", "<form", "<iframe", "<input", "<script", "<select", "<textarea", "<svg", "onload", "onerror", "alert" };
    public static string ValidateCKEditor(TextBox ctl, string ctlname)
    {
        try
        {

            //ctl.Text = HttpUtility.HtmlDecode(ctl.Text);
            if ((string.IsNullOrEmpty(ctl.Text)))
            {
                str = ctlname + " " + "can not be left blank";
                ctl.Focus();
            }
            else if (ctl.Text.Substring(0, 1) == " ")
            {
                str = ctlname + " " + "White Space(s) not allowed in first place";
                ctl.Focus();
            }

            else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
            {
                str = ctlname + " " + "does not allow White Space(s) in last place";
                ctl.Focus();
            }

            else
            {
                str = "PASS";
            }



            for (int i = 0; i < StringFormat.Count() - 1; i++)
            {
                if (ctl.Text.Contains(StringFormat[i]))
                {
                    str = ctlname + " " + "does not allow string " + StringFormat[i].ToString();
                    ctl.Focus();
                    break;
                }

            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        return str;
    }


    public static string ValidateCKEditor_NonMandatory(TextBox ctl, string ctlname)
    {
        try
        {

            //ctl.Text = HttpUtility.HtmlDecode(ctl.Text);
            if (ctl.Text.Substring(0, 1) == " ")
            {
                str = ctlname + " " + "White Space(s) not allowed in first place";
                ctl.Focus();
            }

            else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
            {
                str = ctlname + " " + "does not allow White Space(s) in last place";
                ctl.Focus();
            }

            else
            {
                str = "PASS";
            }



            for (int i = 0; i < StringFormat.Count() - 1; i++)
            {
                if (ctl.Text.Contains(StringFormat[i]))
                {
                    str = ctlname + " " + "does not allow string " + StringFormat[i].ToString();
                    ctl.Focus();
                    break;
                }

            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        return str;
    }

    public static string ValidateTextbox_Mandatory_Numbers(TextBox ctl, string ctlname, int sz, int minSize = 0)
    {
        try
        {
            int n;

            bool isNumeric = int.TryParse(ctl.Text, out n);


            if ((string.IsNullOrEmpty(ctl.Text)))
            {
                str = ctlname + " " + "can not be left blank";
                ctl.Focus();
            }
            else if (ctl.Text.Substring(0, 1) == " ")
            {
                str = ctlname + " " + "White Space(s) not allowed in first place";
                ctl.Focus();
            }
            else if (ctl.Text.Substring(0, 1) == "!" | ctl.Text.Substring(0, 1) == "@" | ctl.Text.Substring(0, 1) == "#" | ctl.Text.Substring(0, 1) == "$" | ctl.Text.Substring(0, 1) == "%" | ctl.Text.Substring(0, 1) == "^" | ctl.Text.Substring(0, 1) == "&" | ctl.Text.Substring(0, 1) == "*" | ctl.Text.Substring(0, 1) == "(" | ctl.Text.Substring(0, 1) == ")" | ctl.Text.Substring(0, 1) == "-" | ctl.Text.Substring(0, 1) == "_" | ctl.Text.Substring(0, 1) == "+" | ctl.Text.Substring(0, 1) == "=" | ctl.Text.Substring(0, 1) == "{" | ctl.Text.Substring(0, 1) == "}" | ctl.Text.Substring(0, 1) == "[" | ctl.Text.Substring(0, 1) == "]" | ctl.Text.Substring(0, 1) == "|" | ctl.Text.Substring(0, 1) == ";" | ctl.Text.Substring(0, 1) == ":" | ctl.Text.Substring(0, 1) == "<" | ctl.Text.Substring(0, 1) == ">" | ctl.Text.Substring(0, 1) == "?" | ctl.Text.Substring(0, 1) == "." | ctl.Text.Substring(0, 1) == "," | ctl.Text.Substring(0, 1) == "/" | ctl.Text.Substring(0, 1) == "\\" | ctl.Text.Substring(0, 1) == "~" | ctl.Text.Substring(0, 1) == "`" | ctl.Text.Substring(0, 1) == "\"" | ctl.Text.Substring(0, 1) == "\'" | ctl.Text.Substring(0, 1) == "&")
            {
                str = ctlname + " " + "does not allow Special Characters in first place";
                //ctl.Clear();
                ctl.Focus();
            }
            else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
            {
                str = ctlname + " " + "does not allow White Space(s) in last place";
                ctl.Focus();
            }
            else if ((ctl.Text == "'"))
            {
                str = ctlname + " " + "does not allow Single Quote";
                // ctl.Clear();
                ctl.Focus();
            }

            else if ((ctl.Text.Contains('\'')) | (ctl.Text.Contains('!')) | (ctl.Text.Contains('$')) | (ctl.Text.Contains('%')) | (ctl.Text.Contains('^')) | (ctl.Text.Contains('*')) | (ctl.Text.Contains('<')) | (ctl.Text.Contains('>')) | (ctl.Text.Contains('~')) | (ctl.Text.Contains('+')) | (ctl.Text.Contains('=')) | (ctl.Text.Contains('{')) | (ctl.Text.Contains('}')) | (ctl.Text.Contains('[')) | (ctl.Text.Contains(']')) | (ctl.Text.Contains('|')) | (ctl.Text.Contains(';')) | (ctl.Text.Contains('`')) | (ctl.Text.Contains('-')) | (ctl.Text.Contains('_')) | (ctl.Text.Contains('"')) | (ctl.Text.Contains('\\')) | (ctl.Text.Contains('/')) | (ctl.Text.Contains('&')))
            {
                str = ctlname + " " + "does not allow Special characters";
                //ctl.Clear();
                ctl.Focus();
            }
            else if ((minSize > 0) && ctl.Text.Length < minSize)
            {
                int cnt = 0;
                cnt = ctl.Text.Length;
                if ((cnt < minSize))
                {
                    str = ctlname + " " + "allows minimum" + " " + minSize.ToString() + " " + "character(s)";
                    ctl.Focus();
                }
            }
            else if ((sz > 0) && ctl.Text.Length > sz)
            {
                int cnt = 0;
                cnt = ctl.Text.Length;
                if ((cnt > sz))
                {
                    ctl.MaxLength = sz;
                    str = ctlname + " " + "allows Maximum" + " " + sz.ToString() + " " + "character(s)";
                    ctl.Focus();
                }
            }


            else if (ctl.Text.Contains('.'))
            {
                decimal value;
                if (!Decimal.TryParse(ctl.Text, out value))
                {
                    str = ctlname + " " + "is not a numeric value";
                    ctl.Focus();
                }
                else
                {
                    str = "PASS";
                }
            }
            else if (isNumeric == false)
            {
                str = ctlname + " " + "is not a numeric value";
                ctl.Focus();

            }

            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateTextbox_NonMandatory_Numbers(TextBox ctl, string ctlname, int sz, int minSize = 0)
    {
        try
        {
            int n;




            if (ctl.Text != "")
            {
                bool isNumeric = int.TryParse(ctl.Text, out n);
                if (ctl.Text.Substring(0, 1) == " ")
                {
                    str = ctlname + " " + "White Space(s) not allowed in first place";
                    ctl.Focus();
                }
                else if (ctl.Text.Substring(0, 1) == "!" | ctl.Text.Substring(0, 1) == "@" | ctl.Text.Substring(0, 1) == "#" | ctl.Text.Substring(0, 1) == "$" | ctl.Text.Substring(0, 1) == "%" | ctl.Text.Substring(0, 1) == "^" | ctl.Text.Substring(0, 1) == "&" | ctl.Text.Substring(0, 1) == "*" | ctl.Text.Substring(0, 1) == "(" | ctl.Text.Substring(0, 1) == ")" | ctl.Text.Substring(0, 1) == "-" | ctl.Text.Substring(0, 1) == "_" | ctl.Text.Substring(0, 1) == "+" | ctl.Text.Substring(0, 1) == "=" | ctl.Text.Substring(0, 1) == "{" | ctl.Text.Substring(0, 1) == "}" | ctl.Text.Substring(0, 1) == "[" | ctl.Text.Substring(0, 1) == "]" | ctl.Text.Substring(0, 1) == "|" | ctl.Text.Substring(0, 1) == ";" | ctl.Text.Substring(0, 1) == ":" | ctl.Text.Substring(0, 1) == "<" | ctl.Text.Substring(0, 1) == ">" | ctl.Text.Substring(0, 1) == "?" | ctl.Text.Substring(0, 1) == "." | ctl.Text.Substring(0, 1) == "," | ctl.Text.Substring(0, 1) == "/" | ctl.Text.Substring(0, 1) == "\\" | ctl.Text.Substring(0, 1) == "~" | ctl.Text.Substring(0, 1) == "`" | ctl.Text.Substring(0, 1) == "\"" | ctl.Text.Substring(0, 1) == "\'" | ctl.Text.Substring(0, 1) == "&")
                {
                    str = ctlname + " " + "does not allow Special Characters in first place";
                    //ctl.Clear();
                    ctl.Focus();
                }
                else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
                {
                    str = ctlname + " " + "does not allow White Space(s) in last place";
                    ctl.Focus();
                }
                else if ((ctl.Text == "'"))
                {
                    str = ctlname + " " + "does not allow Single Quote";
                    // ctl.Clear();
                    ctl.Focus();
                }

                else if ((ctl.Text.Contains('\'')) | (ctl.Text.Contains('!')) | (ctl.Text.Contains('$')) | (ctl.Text.Contains('%')) | (ctl.Text.Contains('^')) | (ctl.Text.Contains('*')) | (ctl.Text.Contains('<')) | (ctl.Text.Contains('>')) | (ctl.Text.Contains('~')) | (ctl.Text.Contains('+')) | (ctl.Text.Contains('=')) | (ctl.Text.Contains('{')) | (ctl.Text.Contains('}')) | (ctl.Text.Contains('[')) | (ctl.Text.Contains(']')) | (ctl.Text.Contains('|')) | (ctl.Text.Contains(';')) | (ctl.Text.Contains('`')) | (ctl.Text.Contains('-')) | (ctl.Text.Contains('_')) | (ctl.Text.Contains('"')) | (ctl.Text.Contains('\\')) | (ctl.Text.Contains('/')) | (ctl.Text.Contains('&')))
                {
                    str = ctlname + " " + "does not allow Special characters";
                    //ctl.Clear();
                    ctl.Focus();
                }
                else if ((minSize > 0) && ctl.Text.Length < minSize)
                {
                    int cnt = 0;
                    cnt = ctl.Text.Length;
                    if ((cnt < minSize))
                    {
                        str = ctlname + " " + "allows minimum" + " " + minSize.ToString() + " " + "character(s)";
                        ctl.Focus();
                    }
                }
                else if ((sz > 0) && ctl.Text.Length > sz)
                {
                    int cnt = 0;
                    cnt = ctl.Text.Length;
                    if ((cnt > sz))
                    {
                        ctl.MaxLength = sz;
                        str = ctlname + " " + "allows Maximum" + " " + sz.ToString() + " " + "character(s)";
                        ctl.Focus();
                    }
                }


                else if (ctl.Text.Contains('.'))
                {
                    decimal value;
                    if (!Decimal.TryParse(ctl.Text, out value))
                    {
                        str = ctlname + " " + "is not a numeric value";
                        ctl.Focus();
                    }
                    else
                    {
                        str = "PASS";
                    }
                }
                else if (isNumeric == false)
                {
                    str = ctlname + " " + "is not a numeric value";
                    ctl.Focus();

                }

                else
                {
                    str = "PASS";
                }

            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateTextbox_NonMandatory_AlphaNumeric(TextBox ctl, string ctlname, int sz, int minSize = 0)
    {
        try
        {
            if (ctl.Text != "")
            {
                if (ctl.Text.Substring(0, 1) == " ")
                {
                    str = ctlname + " " + "does not allow White Space(s) in first place";
                    ctl.Focus();
                }
                else if (ctl.Text.Substring(0, 1) == "!" | ctl.Text.Substring(0, 1) == "@" | ctl.Text.Substring(0, 1) == "#" | ctl.Text.Substring(0, 1) == "$" | ctl.Text.Substring(0, 1) == "%" | ctl.Text.Substring(0, 1) == "^" | ctl.Text.Substring(0, 1) == "&" | ctl.Text.Substring(0, 1) == "*" | ctl.Text.Substring(0, 1) == "(" | ctl.Text.Substring(0, 1) == ")" | ctl.Text.Substring(0, 1) == "-" | ctl.Text.Substring(0, 1) == "_" | ctl.Text.Substring(0, 1) == "+" | ctl.Text.Substring(0, 1) == "=" | ctl.Text.Substring(0, 1) == "{" | ctl.Text.Substring(0, 1) == "}" | ctl.Text.Substring(0, 1) == "[" | ctl.Text.Substring(0, 1) == "]" | ctl.Text.Substring(0, 1) == "|" | ctl.Text.Substring(0, 1) == ";" | ctl.Text.Substring(0, 1) == ":" | ctl.Text.Substring(0, 1) == "<" | ctl.Text.Substring(0, 1) == ">" | ctl.Text.Substring(0, 1) == "?" | ctl.Text.Substring(0, 1) == "." | ctl.Text.Substring(0, 1) == "," | ctl.Text.Substring(0, 1) == "/" | ctl.Text.Substring(0, 1) == "\\" | ctl.Text.Substring(0, 1) == "~" | ctl.Text.Substring(0, 1) == "`" | ctl.Text.Substring(0, 1) == "\"" | ctl.Text.Substring(0, 1) == "\'" | ctl.Text.Substring(0, 1) == "&")
                {
                    str = ctlname + " " + "does not allow Special Characters in first place";
                    //ctl.Clear();
                    ctl.Focus();
                }
                else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
                {
                    str = ctlname + " " + "does not allow White Space(s) in last place";
                    ctl.Focus();
                }
                else if ((ctl.Text == "'"))
                {
                    str = ctlname + " " + "does not allow Single Quote ";
                    // ctl.Clear();
                    ctl.Focus();
                }

                else if ((ctl.Text.Contains('!')) | (ctl.Text.Contains('%')) | (ctl.Text.Contains('<')) | (ctl.Text.Contains('>')) | (ctl.Text.Contains('=')) | (ctl.Text.Contains("'")))
                {
                    str = ctlname + " " + "does not allow Special character ";
                    //ctl.Clear();
                    ctl.Focus();
                }
                else if ((minSize > 0) && ctl.Text.Length < minSize)
                {
                    int cnt = 0;
                    cnt = ctl.Text.Length;
                    if ((cnt < minSize))
                    {
                        str = ctlname + " " + "allows minimum" + " " + minSize.ToString() + " " + "character(s)";
                        ctl.Focus();
                    }
                }
                else if ((sz > 0) && ctl.Text.Length > sz)
                {
                    int cnt = 0;
                    cnt = ctl.Text.Length;
                    if ((cnt > sz))
                    {
                        ctl.MaxLength = sz;
                        str = ctlname + " " + "allows Maximum" + " " + sz.ToString() + " " + "character(s)";
                        ctl.Focus();
                    }
                }

                else
                {
                    str = "PASS";
                }
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateTextbox_Mandatory_Alphabets(TextBox ctl, string ctlname, int sz, int minSize = 0)
    {
        try
        {
            if ((string.IsNullOrEmpty(ctl.Text)))
            {
                str = ctlname + " can not be left blank";
                ctl.Focus();
            }
            else if (ctl.Text.Substring(0, 1) == " ")
            {
                str = ctlname + " does not allow White Space(s) in first place";
                ctl.Focus();
            }
            else if (ctl.Text.Substring(0, 1) == "!" | ctl.Text.Substring(0, 1) == "@" | ctl.Text.Substring(0, 1) == "#" | ctl.Text.Substring(0, 1) == "$" | ctl.Text.Substring(0, 1) == "%" | ctl.Text.Substring(0, 1) == "^" | ctl.Text.Substring(0, 1) == "&" | ctl.Text.Substring(0, 1) == "*" | ctl.Text.Substring(0, 1) == "(" | ctl.Text.Substring(0, 1) == ")" | ctl.Text.Substring(0, 1) == "-" | ctl.Text.Substring(0, 1) == "_" | ctl.Text.Substring(0, 1) == "+" | ctl.Text.Substring(0, 1) == "=" | ctl.Text.Substring(0, 1) == "{" | ctl.Text.Substring(0, 1) == "}" | ctl.Text.Substring(0, 1) == "[" | ctl.Text.Substring(0, 1) == "]" | ctl.Text.Substring(0, 1) == "|" | ctl.Text.Substring(0, 1) == ";" | ctl.Text.Substring(0, 1) == ":" | ctl.Text.Substring(0, 1) == "<" | ctl.Text.Substring(0, 1) == ">" | ctl.Text.Substring(0, 1) == "?" | ctl.Text.Substring(0, 1) == "." | ctl.Text.Substring(0, 1) == "," | ctl.Text.Substring(0, 1) == "/" | ctl.Text.Substring(0, 1) == "\\" | ctl.Text.Substring(0, 1) == "~" | ctl.Text.Substring(0, 1) == "`" | ctl.Text.Substring(0, 1) == "\"" | ctl.Text.Substring(0, 1) == "\'" | ctl.Text.Substring(0, 1) == "&")
            {
                str = ctlname + " does not allow Special Characters in first place";
                //ctl.Clear();
                ctl.Focus();
            }
            else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
            {
                str = ctlname + " does not allow White Space(s) in last place";
                ctl.Focus();
            }
            else if ((ctl.Text == "'"))
            {
                str = ctlname + " does not allow Single Quote";
                // ctl.Clear();
                ctl.Focus();
            }

            else if ((ctl.Text.Contains('!')) | (ctl.Text.Contains('%')) | (ctl.Text.Contains('<')) | (ctl.Text.Contains('>')) | (ctl.Text.Contains('=')) | (ctl.Text.Contains("'")))
            {
                str = ctlname + " does not allow Special characters";
                //ctl.Clear();
                ctl.Focus();
            }
            else if (ctl.Text.ToString().Contains('1') || ctl.Text.ToString().Contains('2') || ctl.Text.ToString().Contains('3') || ctl.Text.ToString().Contains('4') || ctl.Text.ToString().Contains('5') || ctl.Text.ToString().Contains('6') || ctl.Text.ToString().Contains('7') || ctl.Text.ToString().Contains('8') || ctl.Text.ToString().Contains('9') || ctl.Text.ToString().Contains('0'))
            {
                str = ctlname + " does not allow Numbers";
                ctl.Focus();
            }
            else if ((minSize > 0) && ctl.Text.Length < minSize)
            {
                int cnt = 0;
                cnt = ctl.Text.Length;
                if ((cnt < minSize))
                {
                    str = ctlname + " allows minimum " + minSize.ToString() + " character(s)";
                    ctl.Focus();
                }
            }
            else if ((sz > 0) && ctl.Text.Length > sz)
            {
                int cnt = 0;
                cnt = ctl.Text.Length;
                if ((cnt > sz))
                {
                    ctl.MaxLength = sz;
                    str = ctlname + " allows Maximum " + sz.ToString() + " character(s)";
                    ctl.Focus();
                }

            }

            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateTextbox_NonMandatory_Alphabets(TextBox ctl, string ctlname, int sz, int minSize = 0)
    {
        try
        {
            if (ctl.Text != "")
            {
                if (ctl.Text.Substring(0, 1) == " ")
                {
                    str = ctlname + " does not allow White Space(s) in first place";
                    ctl.Focus();
                }
                else if (ctl.Text.Substring(0, 1) == "!" | ctl.Text.Substring(0, 1) == "@" | ctl.Text.Substring(0, 1) == "#" | ctl.Text.Substring(0, 1) == "$" | ctl.Text.Substring(0, 1) == "%" | ctl.Text.Substring(0, 1) == "^" | ctl.Text.Substring(0, 1) == "&" | ctl.Text.Substring(0, 1) == "*" | ctl.Text.Substring(0, 1) == "(" | ctl.Text.Substring(0, 1) == ")" | ctl.Text.Substring(0, 1) == "-" | ctl.Text.Substring(0, 1) == "_" | ctl.Text.Substring(0, 1) == "+" | ctl.Text.Substring(0, 1) == "=" | ctl.Text.Substring(0, 1) == "{" | ctl.Text.Substring(0, 1) == "}" | ctl.Text.Substring(0, 1) == "[" | ctl.Text.Substring(0, 1) == "]" | ctl.Text.Substring(0, 1) == "|" | ctl.Text.Substring(0, 1) == ";" | ctl.Text.Substring(0, 1) == ":" | ctl.Text.Substring(0, 1) == "<" | ctl.Text.Substring(0, 1) == ">" | ctl.Text.Substring(0, 1) == "?" | ctl.Text.Substring(0, 1) == "." | ctl.Text.Substring(0, 1) == "," | ctl.Text.Substring(0, 1) == "/" | ctl.Text.Substring(0, 1) == "\\" | ctl.Text.Substring(0, 1) == "~" | ctl.Text.Substring(0, 1) == "`" | ctl.Text.Substring(0, 1) == "\"" | ctl.Text.Substring(0, 1) == "\'" | ctl.Text.Substring(0, 1) == "&")
                {
                    str = ctlname + " does not allow Special Characters in first place";
                    //ctl.Clear();
                    ctl.Focus();
                }
                else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
                {
                    str = ctlname + " does not allow White Space(s) in last place";
                    ctl.Focus();
                }
                else if ((ctl.Text == "'"))
                {
                    str = ctlname + " does not allow Single Quote";
                    // ctl.Clear();
                    ctl.Focus();
                }

                else if ((ctl.Text.Contains('!')) | (ctl.Text.Contains('%')) | (ctl.Text.Contains('<')) | (ctl.Text.Contains('>')) | (ctl.Text.Contains('=')) | (ctl.Text.Contains("'")))
                {
                    str = ctlname + " does not allow Special characters";
                    //ctl.Clear();
                    ctl.Focus();
                }
                else if (ctl.Text.ToString().Contains('1') || ctl.Text.ToString().Contains('2') || ctl.Text.ToString().Contains('3') || ctl.Text.ToString().Contains('4') || ctl.Text.ToString().Contains('5') || ctl.Text.ToString().Contains('6') || ctl.Text.ToString().Contains('7') || ctl.Text.ToString().Contains('8') || ctl.Text.ToString().Contains('9') || ctl.Text.ToString().Contains('0'))
                {
                    str = ctlname + " does not allow Numbers";
                    ctl.Focus();
                }
                else if ((minSize > 0) && ctl.Text.Length < minSize)
                {
                    int cnt = 0;
                    cnt = ctl.Text.Length;
                    if ((cnt < minSize))
                    {
                        str = ctlname + " allows minimum " + minSize.ToString() + " character(s)";
                        ctl.Focus();
                    }
                }
                else if ((sz > 0) && ctl.Text.Length > sz)
                {
                    int cnt = 0;
                    cnt = ctl.Text.Length;
                    if ((cnt > sz))
                    {
                        ctl.MaxLength = sz;
                        str = ctlname + " allows Maximum " + sz.ToString() + " character(s)";
                        ctl.Focus();
                    }

                }

                else
                {
                    str = "PASS";
                }
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateMobile(TextBox ctl, string ctlname, string strMandate)
    {
        try
        {
            long n;


            if (strMandate.ToUpper() == "YES")
            {
                if ((string.IsNullOrEmpty(ctl.Text)))
                {
                    str = ctlname + " can not be left blank";
                    ctl.Focus();
                }
                else if ((ctl.Text.Length < 10))
                {

                    str = "Mobile Number should not be less than 10 digits";
                    ctl.Focus();

                }
                else if (long.TryParse(ctl.Text, out n) == false)
                {
                    str = ctlname + " is not a numeric value";
                    ctl.Focus();

                }
                else
                {
                    str = "PASS";
                }
            }
            else
            {
                if (ctl.Text != "")
                {
                    if ((ctl.Text.Length < 10))
                    {

                        str = "Mobile Number should not be less than 10 digits";
                        ctl.Focus();

                    }
                    else if (long.TryParse(ctl.Text, out n) == false)
                    {
                        str = ctlname + " is not a numeric value";
                        ctl.Focus();

                    }
                    else
                    {
                        str = "PASS";
                    }
                }
                else
                {
                    str = "PASS";
                }
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateEmailTextBox(TextBox ctl, string ctlname, int sz)
    {
        try
        {
            if (ctl.Text != "")
            {
                //if (ctl.Text.Substring(0, 1) == " ")
                //{
                //    str = "White Space(s) not allowed in first place";
                //    ctl.Focus();
                //}
                if (ctl.Text.Substring(0, 1) == "!" | ctl.Text.Substring(0, 1) == "@" | ctl.Text.Substring(0, 1) == "#" | ctl.Text.Substring(0, 1) == "$" | ctl.Text.Substring(0, 1) == "%" | ctl.Text.Substring(0, 1) == "^" | ctl.Text.Substring(0, 1) == "&" | ctl.Text.Substring(0, 1) == "*" | ctl.Text.Substring(0, 1) == "(" | ctl.Text.Substring(0, 1) == ")" | ctl.Text.Substring(0, 1) == "-" | ctl.Text.Substring(0, 1) == "_" | ctl.Text.Substring(0, 1) == "+_" | ctl.Text.Substring(0, 1) == "=" | ctl.Text.Substring(0, 1) == "{" | ctl.Text.Substring(0, 1) == "}" | ctl.Text.Substring(0, 1) == "[" | ctl.Text.Substring(0, 1) == "]" | ctl.Text.Substring(0, 1) == "|" | ctl.Text.Substring(0, 1) == ";" | ctl.Text.Substring(0, 1) == ":" | ctl.Text.Substring(0, 1) == "<" | ctl.Text.Substring(0, 1) == ">" | ctl.Text.Substring(0, 1) == "?" | ctl.Text.Substring(0, 1) == "." | ctl.Text.Substring(0, 1) == ",")
                {
                    str = ctlname + " Special characters not allowed in first place";
                    ctl.Focus();
                }
                //else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
                //{
                //    str = ctlname + " White Space(s) not allowed in last place";
                //    ctl.Focus();
                //}
                else if ((ctl.Text == "'"))
                {
                    str = ctlname + " Single Quote not allowed";
                    ctl.Focus();
                }

                else if ((ctl.Text.Contains('\'')) | (ctl.Text.Contains('!')) | (ctl.Text.Contains('%')) | (ctl.Text.Contains('^')) | (ctl.Text.Contains('&')) | (ctl.Text.Contains('*')) | (ctl.Text.Contains('(')) | (ctl.Text.Contains(')')) | (ctl.Text.Contains('<')) | (ctl.Text.Contains('>')) | (ctl.Text.Contains('~')) | (ctl.Text.Contains(')')) | (ctl.Text.Contains('-')) | (ctl.Text.Contains('+')) | (ctl.Text.Contains('=')) | (ctl.Text.Contains('{')) | (ctl.Text.Contains('}')) | (ctl.Text.Contains(']')) | (ctl.Text.Contains('[')) | (ctl.Text.Contains('|')) | (ctl.Text.Contains(';')) | (ctl.Text.Contains(':')) | (ctl.Text.Contains('?')) | (ctl.Text.Contains(',')) | (ctl.Text.Contains('/')) | (ctl.Text.Contains('\\')) | (ctl.Text.Contains('"')) | (ctl.Text.Contains('`')) | (ctl.Text.Contains('^')) | (ctl.Text.Contains('~')) | (ctl.Text.Contains('&')))
                {
                    str = ctlname + " Special character not allowed";
                    ctl.Focus();
                }
                else if (ctl.Text.Contains("@") == false)
                {
                    str = ctlname + " is not valid";
                    ctl.Focus();
                }
                else if ((sz > 0) && ctl.Text.Length > sz)
                {
                    int cnt = 0;
                    cnt = ctl.Text.Length;
                    if ((cnt > sz))
                    {
                        ctl.MaxLength = sz;
                        str = ctlname + "Maximum" + " " + sz + " character(s) allowed";
                        ctl.Focus();
                    }
                }
                else
                {
                    str = "PASS";
                }
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string Validatedropdown(DropDownList ctl, string ctlname)
    {

        try
        {
            if ((ctl.SelectedValue == "0"))
            {
                str = "Please select" + " " + ctlname;
                ctl.Focus();
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateTextbox_Mandatory_AlphaNumeric(TextBox ctl, string ctlname, int sz, int minSize = 0)
    {
        try
        {
            if ((string.IsNullOrEmpty(ctl.Text)))
            {
                str = ctlname + " can not be left blank";
                ctl.Focus();
            }
            else if (ctl.Text.Substring(0, 1) == " ")
            {
                str = ctlname + " does not allow White Space(s) in first place";
                ctl.Focus();
            }
            else if (ctl.Text.Substring(0, 1) == "!" | ctl.Text.Substring(0, 1) == "@" | ctl.Text.Substring(0, 1) == "#" | ctl.Text.Substring(0, 1) == "$" | ctl.Text.Substring(0, 1) == "%" | ctl.Text.Substring(0, 1) == "^" | ctl.Text.Substring(0, 1) == "&" | ctl.Text.Substring(0, 1) == "*" | ctl.Text.Substring(0, 1) == "(" | ctl.Text.Substring(0, 1) == ")" | ctl.Text.Substring(0, 1) == "-" | ctl.Text.Substring(0, 1) == "_" | ctl.Text.Substring(0, 1) == "+" | ctl.Text.Substring(0, 1) == "=" | ctl.Text.Substring(0, 1) == "{" | ctl.Text.Substring(0, 1) == "}" | ctl.Text.Substring(0, 1) == "[" | ctl.Text.Substring(0, 1) == "]" | ctl.Text.Substring(0, 1) == "|" | ctl.Text.Substring(0, 1) == ";" | ctl.Text.Substring(0, 1) == ":" | ctl.Text.Substring(0, 1) == "<" | ctl.Text.Substring(0, 1) == ">" | ctl.Text.Substring(0, 1) == "?" | ctl.Text.Substring(0, 1) == "." | ctl.Text.Substring(0, 1) == "," | ctl.Text.Substring(0, 1) == "/" | ctl.Text.Substring(0, 1) == "\\" | ctl.Text.Substring(0, 1) == "~" | ctl.Text.Substring(0, 1) == "`" | ctl.Text.Substring(0, 1) == "\"" | ctl.Text.Substring(0, 1) == "\'" | ctl.Text.Substring(0, 1) == "&")
            {
                str = ctlname + " does not allow Special Characters in first place";
                ctl.Focus();
            }
            else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
            {
                str = ctlname + " does not allow White Space(s) in last place";
                ctl.Focus();
            }
            else if ((ctl.Text == "'"))
            {
                str = ctlname + " does not allow Single Quote";
                ctl.Focus();
            }

            else if ((ctl.Text.Contains('!')) | (ctl.Text.Contains('%')) | (ctl.Text.Contains('<')) | (ctl.Text.Contains('>')) | (ctl.Text.Contains('=')) | (ctl.Text.Contains("'")))
            {
                str = ctlname + " does not allow Special character";
                ctl.Focus();
            }
            else if ((minSize > 0) && ctl.Text.Length < minSize)
            {
                int cnt = 0;
                cnt = ctl.Text.Length;
                if ((cnt < minSize))
                {
                    str = ctlname + " allows minimum " + minSize.ToString() + " character(s)";
                    ctl.Focus();
                }
            }
            else if ((sz > 0) && ctl.Text.Length > sz)
            {
                int cnt = 0;
                cnt = ctl.Text.Length;
                if ((cnt > sz))
                {
                    ctl.MaxLength = sz;
                    str = ctlname + " allows Maximum " + sz.ToString() + " character(s)";
                    ctl.Focus();
                }
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateListbox(ListBox ctl, string strAlrtMsg, int intHaveSelectOption = 0)
    {
        try
        {
            //If Select option is available in the List Box
            if (intHaveSelectOption == 1)
            {
                if (ctl.Items.Count <= 1)
                {
                    str = strAlrtMsg;
                    ctl.Focus();
                }
                else
                {
                    str = "PASS";
                }

            }
            else
            {
                if (ctl.Items.Count < 1)
                {
                    str = strAlrtMsg;
                    ctl.Focus();
                }
                else
                {
                    str = "PASS";
                }
            }

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateRadioButtonList(RadioButtonList ctl, string ctlname, int intMaxRangeVal = 0)
    {
        //intMaxRangeVal is the maximum listItem value which is optional
        try
        {
            if ((ctl.SelectedValue == "0") || (ctl.SelectedValue == ""))
            {
                str = "Please select" + " " + ctlname;
                ctl.Focus();
            }
            else if (intMaxRangeVal > 0)
            {
                if (Convert.ToInt32(ctl.SelectedValue) > intMaxRangeVal)
                {
                    str = "Please select" + " " + ctlname;
                    ctl.Focus();
                }
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidDateCurrentdate(TextBox txtDate, string ctlname)
    {
        try
        {
            if (string.IsNullOrEmpty(txtDate.Text))
            {
                str = ctlname + " can not be left blank";
                txtDate.Focus();
            }

            else if (Convert.ToDateTime(txtDate.Text) > Convert.ToDateTime(DateTime.Now.Date.ToShortDateString()))
            {
                str = ctlname + " can not be greater than current date";
                txtDate.Focus();
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string CurrentDateLessValidator(TextBox txtdateto, string ctlname)
    {
        try
        {
            if (string.IsNullOrEmpty(txtdateto.Text))
            {
                str = ctlname + " " + "can not be left blank";
                txtdateto.Focus();
            }

            else if (Convert.ToDateTime(txtdateto.Text) < Convert.ToDateTime(DateTime.Now.Date.ToShortDateString()))
            {
                str = ctlname + " " + "can not be before Current Date";
                txtdateto.Focus();
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string DateDifferenceValidator(TextBox txtdatefrom, TextBox txtdateto, string ctrlname)
    {
        try
        {

            if (Convert.ToDateTime(txtdatefrom.Text) > Convert.ToDateTime(txtdateto.Text))
            {
                str = ctrlname + " " + "End date cannot before Start date ";
                txtdateto.Focus();
            }

            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateTextbox_Mandatory_Decimal(TextBox ctl, string ctlname, int sz, int minSize = 0)
    {
        try
        {



            double outVar;
            bool isdecimal = double.TryParse(ctl.Text, out outVar);

            if ((string.IsNullOrEmpty(ctl.Text)))
            {
                str = ctlname + " can not be left blank";
                ctl.Focus();
            }
            else if (outVar == 0.0)
            {
                str = ctlname + " can not be left blank";
                ctl.Focus();
            }
            else if (ctl.Text.Substring(0, 1) == " ")
            {
                str = ctlname + " " + "White Space(s) not allowed in first place";
                ctl.Focus();
            }
            else if (ctl.Text.Substring(0, 1) == "!" | ctl.Text.Substring(0, 1) == "@" | ctl.Text.Substring(0, 1) == "#" | ctl.Text.Substring(0, 1) == "$" | ctl.Text.Substring(0, 1) == "%" | ctl.Text.Substring(0, 1) == "^" | ctl.Text.Substring(0, 1) == "&" | ctl.Text.Substring(0, 1) == "*" | ctl.Text.Substring(0, 1) == "(" | ctl.Text.Substring(0, 1) == ")" | ctl.Text.Substring(0, 1) == "-" | ctl.Text.Substring(0, 1) == "_" | ctl.Text.Substring(0, 1) == "+" | ctl.Text.Substring(0, 1) == "=" | ctl.Text.Substring(0, 1) == "{" | ctl.Text.Substring(0, 1) == "}" | ctl.Text.Substring(0, 1) == "[" | ctl.Text.Substring(0, 1) == "]" | ctl.Text.Substring(0, 1) == "|" | ctl.Text.Substring(0, 1) == ";" | ctl.Text.Substring(0, 1) == ":" | ctl.Text.Substring(0, 1) == "<" | ctl.Text.Substring(0, 1) == ">" | ctl.Text.Substring(0, 1) == "?" | ctl.Text.Substring(0, 1) == "." | ctl.Text.Substring(0, 1) == "," | ctl.Text.Substring(0, 1) == "/" | ctl.Text.Substring(0, 1) == "\\" | ctl.Text.Substring(0, 1) == "~" | ctl.Text.Substring(0, 1) == "`" | ctl.Text.Substring(0, 1) == "\"" | ctl.Text.Substring(0, 1) == "\'" | ctl.Text.Substring(0, 1) == "&")
            {
                str = ctlname + " " + "does not allow Special Characters in first place";
                //ctl.Clear();
                ctl.Focus();
            }
            else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
            {
                str = ctlname + " " + "does not allow White Space(s) in last place";
                ctl.Focus();
            }
            else if ((ctl.Text == "'"))
            {
                str = ctlname + " " + "does not allow Single Quote";
                // ctl.Clear();
                ctl.Focus();
            }

            else if ((ctl.Text.Contains('\'')) | (ctl.Text.Contains('!')) | (ctl.Text.Contains('$')) | (ctl.Text.Contains('%')) | (ctl.Text.Contains('^')) | (ctl.Text.Contains('*')) | (ctl.Text.Contains('<')) | (ctl.Text.Contains('>')) | (ctl.Text.Contains('~')) | (ctl.Text.Contains('+')) | (ctl.Text.Contains('=')) | (ctl.Text.Contains('{')) | (ctl.Text.Contains('}')) | (ctl.Text.Contains('[')) | (ctl.Text.Contains(']')) | (ctl.Text.Contains('|')) | (ctl.Text.Contains(';')) | (ctl.Text.Contains('`')) | (ctl.Text.Contains('-')) | (ctl.Text.Contains('_')) | (ctl.Text.Contains('"')) | (ctl.Text.Contains('\\')) | (ctl.Text.Contains('/')) | (ctl.Text.Contains('&')))
            {
                str = ctlname + " " + "does not allow Special characters";
                //ctl.Clear();
                ctl.Focus();

            }


            else if ((minSize > 0) && ctl.Text.Length < minSize)
            {
                int cnt = 0;
                cnt = ctl.Text.Length;
                if ((cnt < minSize))
                {
                    str = ctlname + " " + "allows minimum" + " " + minSize.ToString() + " " + "character(s)";
                    ctl.Focus();
                }
            }
            else if ((sz > 0) && ctl.Text.Length > sz)
            {
                int cnt = 0;
                cnt = ctl.Text.Length;
                if ((cnt > sz))
                {
                    ctl.MaxLength = sz;
                    str = ctlname + " " + "allows maximum" + " " + sz.ToString() + " " + "character(s)";
                    ctl.Focus();
                }
            }
            //else if (!(ctl.Text.Contains('1') || ctl.Text.Contains('2') || ctl.Text.Contains('1') || ctl.Text.Contains('3')) || ctl.Text.Contains('4') || ctl.Text.Contains('5') || ctl.Text.Contains('6') || ctl.Text.Contains('7') || ctl.Text.Contains('8') || ctl.Text.Contains('9') || ctl.Text.Contains('0'))
            //{
            //    str = ctlname + " " + " is not a decimal no.  ";
            //    //ctl.Clear();
            //    ctl.Focus();
            //}

            else if ((ctl.Text.ToUpper().Contains('A')) || (ctl.Text.Contains('B')) || (ctl.Text.Contains('C')) || (ctl.Text.Contains('D')) || (ctl.Text.Contains('E')) || (ctl.Text.Contains('F')) || (ctl.Text.Contains('G')) || (ctl.Text.Contains('H')) || (ctl.Text.Contains('I')) || (ctl.Text.Contains('J')) || (ctl.Text.Contains('K')) ||
                (ctl.Text.Contains('L')) || (ctl.Text.Contains('M')) || (ctl.Text.Contains('N')) || (ctl.Text.Contains('O')) || (ctl.Text.Contains('P')) || (ctl.Text.Contains('Q')) || (ctl.Text.Contains('R')) || (ctl.Text.Contains('S')) || (ctl.Text.Contains('T')) || (ctl.Text.Contains('U')) || (ctl.Text.Contains('V')) ||
                (ctl.Text.Contains('W')) || (ctl.Text.Contains('X')) || (ctl.Text.Contains('Y')) || (ctl.Text.Contains('Z')))
            {
                str = ctlname + " " + "is a decimal no. which does not allow alphabets ";
                //ctl.Clear();
                ctl.Focus();
            }
            else if (isdecimal == false)
            {
                str = ctlname + " " + "is not a decimal value";
                ctl.Focus();

            }
            else
            {
                str = "PASS";
            }

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    public static string ValidateTextbox_NonMandatory_Decimal(TextBox ctl, string ctlname, int sz, int minSize = 0)
    {
        try
        {
            double outVar;
            bool isdecimal = double.TryParse(ctl.Text, out outVar);

            if (ctl.Text != "")
            {


                if (ctl.Text.Substring(0, 1) == " ")
                {
                    str = ctlname + " " + "White Space(s) not allowed in first place";
                    ctl.Focus();
                }
                else if (ctl.Text.Substring(0, 1) == "!" | ctl.Text.Substring(0, 1) == "@" | ctl.Text.Substring(0, 1) == "#" | ctl.Text.Substring(0, 1) == "$" | ctl.Text.Substring(0, 1) == "%" | ctl.Text.Substring(0, 1) == "^" | ctl.Text.Substring(0, 1) == "&" | ctl.Text.Substring(0, 1) == "*" | ctl.Text.Substring(0, 1) == "(" | ctl.Text.Substring(0, 1) == ")" | ctl.Text.Substring(0, 1) == "-" | ctl.Text.Substring(0, 1) == "_" | ctl.Text.Substring(0, 1) == "+" | ctl.Text.Substring(0, 1) == "=" | ctl.Text.Substring(0, 1) == "{" | ctl.Text.Substring(0, 1) == "}" | ctl.Text.Substring(0, 1) == "[" | ctl.Text.Substring(0, 1) == "]" | ctl.Text.Substring(0, 1) == "|" | ctl.Text.Substring(0, 1) == ";" | ctl.Text.Substring(0, 1) == ":" | ctl.Text.Substring(0, 1) == "<" | ctl.Text.Substring(0, 1) == ">" | ctl.Text.Substring(0, 1) == "?" | ctl.Text.Substring(0, 1) == "." | ctl.Text.Substring(0, 1) == "," | ctl.Text.Substring(0, 1) == "/" | ctl.Text.Substring(0, 1) == "\\" | ctl.Text.Substring(0, 1) == "~" | ctl.Text.Substring(0, 1) == "`" | ctl.Text.Substring(0, 1) == "\"" | ctl.Text.Substring(0, 1) == "\'" | ctl.Text.Substring(0, 1) == "&")
                {
                    str = ctlname + " " + "does not allow Special Characters in first place";
                    //ctl.Clear();
                    ctl.Focus();
                }
                else if (ctl.Text.Substring(ctl.Text.Length - 1, 1) == " ")
                {
                    str = ctlname + " " + "does not allow White Space(s) in last place";
                    ctl.Focus();
                }
                else if ((ctl.Text == "'"))
                {
                    str = ctlname + " " + "does not allow Single Quote";
                    // ctl.Clear();
                    ctl.Focus();
                }

                else if ((ctl.Text.Contains('\'')) | (ctl.Text.Contains('!')) | (ctl.Text.Contains('$')) | (ctl.Text.Contains('%')) | (ctl.Text.Contains('^')) | (ctl.Text.Contains('*')) | (ctl.Text.Contains('<')) | (ctl.Text.Contains('>')) | (ctl.Text.Contains('~')) | (ctl.Text.Contains('+')) | (ctl.Text.Contains('=')) | (ctl.Text.Contains('{')) | (ctl.Text.Contains('}')) | (ctl.Text.Contains('[')) | (ctl.Text.Contains(']')) | (ctl.Text.Contains('|')) | (ctl.Text.Contains(';')) | (ctl.Text.Contains('`')) | (ctl.Text.Contains('-')) | (ctl.Text.Contains('_')) | (ctl.Text.Contains('"')) | (ctl.Text.Contains('\\')) | (ctl.Text.Contains('/')) | (ctl.Text.Contains('&')))
                {
                    str = ctlname + " " + "does not allow Special characters";
                    //ctl.Clear();
                    ctl.Focus();

                }


                else if ((minSize > 0) && ctl.Text.Length < minSize)
                {
                    int cnt = 0;
                    cnt = ctl.Text.Length;
                    if ((cnt < minSize))
                    {
                        str = ctlname + " " + "allows minimum" + " " + minSize.ToString() + " " + "character(s)";
                        ctl.Focus();
                    }
                }
                else if ((sz > 0) && ctl.Text.Length > sz)
                {
                    int cnt = 0;
                    cnt = ctl.Text.Length;
                    if ((cnt > sz))
                    {
                        ctl.MaxLength = sz;
                        str = ctlname + " " + "allows maximum" + " " + sz.ToString() + " " + "character(s)";
                        ctl.Focus();
                    }
                }
                //else if (!(ctl.Text.Contains('1') || ctl.Text.Contains('2') || ctl.Text.Contains('1') || ctl.Text.Contains('3')) || ctl.Text.Contains('4') || ctl.Text.Contains('5') || ctl.Text.Contains('6') || ctl.Text.Contains('7') || ctl.Text.Contains('8') || ctl.Text.Contains('9') || ctl.Text.Contains('0'))
                //{
                //    str = ctlname + " " + " is not a decimal no.  ";
                //    //ctl.Clear();
                //    ctl.Focus();
                //}
                else if (!(ctl.Text.Contains('.') || ctl.Text.Contains('4')))
                {
                    str = ctlname + " " + ". is not a decimal no.  ";
                    //ctl.Clear();
                    ctl.Focus();
                }
                else if ((ctl.Text.ToUpper().Contains('A')) || (ctl.Text.Contains('B')) || (ctl.Text.Contains('C')) || (ctl.Text.Contains('D')) || (ctl.Text.Contains('E')) || (ctl.Text.Contains('F')) || (ctl.Text.Contains('G')) || (ctl.Text.Contains('H')) || (ctl.Text.Contains('I')) || (ctl.Text.Contains('J')) || (ctl.Text.Contains('K')) ||
                    (ctl.Text.Contains('L')) || (ctl.Text.Contains('M')) || (ctl.Text.Contains('N')) || (ctl.Text.Contains('O')) || (ctl.Text.Contains('P')) || (ctl.Text.Contains('Q')) || (ctl.Text.Contains('R')) || (ctl.Text.Contains('S')) || (ctl.Text.Contains('T')) || (ctl.Text.Contains('U')) || (ctl.Text.Contains('V')) ||
                    (ctl.Text.Contains('W')) || (ctl.Text.Contains('X')) || (ctl.Text.Contains('Y')) || (ctl.Text.Contains('Z')))
                {
                    str = ctlname + " " + "is a decimal no. which does not allow alphabets ";
                    //ctl.Clear();
                    ctl.Focus();
                }
                else if (isdecimal == false)
                {
                    str = ctlname + " " + "is not a decimal value";
                    ctl.Focus();

                }

                else
                {
                    str = "PASS";
                }
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    #region "Check Valid Date"
    public static string CheckDate(TextBox ctl, string ctlname)
    {
        try
        {
            if (ctl.Text.Trim() != "")
            {
                DateTime Temp;
                if (DateTime.TryParse(ctl.Text, out Temp) == true)
                {
                    str = "PASS";
                }
                else
                {
                    str = ctlname + " " + "is not a valid date ";
                    ctl.Focus();
                }
            }
            else
            {
                str = ctlname + " " + "can not be left blank ";
                ctl.Focus();
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    #endregion
    #region "Validate Date Range"
    public static string ValidateDateRange(TextBox FrstCntrl, TextBox ScndCntrl, string FrstCntrlName, string ScndCntrlName)
    {
        try
        {
            if ((FrstCntrl.Text.Trim() != "") && (ScndCntrl.Text.Trim() != ""))
            {
                if (Convert.ToDateTime(FrstCntrl.Text.Trim()) > Convert.ToDateTime(ScndCntrl.Text.Trim()))
                {
                    str = "Invalid Date Range! " + ScndCntrlName + " can not be before " + FrstCntrlName;
                    FrstCntrl.Focus();
                }
                else
                {
                    str = "PASS";
                }
            }
            else
            {
                str = FrstCntrlName + " " + "and " + ScndCntrlName + " can not be left blank ";
                FrstCntrl.Focus();
                if (ScndCntrl.Text.Trim() != "")
                {
                    ScndCntrl.Focus();
                }
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    #endregion
    #region "Check Todays Date"
    public static string CheckTodaysDate(TextBox txtDate, string ctlname)
    {
        try
        {
            if (string.IsNullOrEmpty(txtDate.Text))
            {
                str = ctlname + " can not be left blank";
                txtDate.Focus();
            }

            else if (Convert.ToDateTime(txtDate.Text) != Convert.ToDateTime(DateTime.Now.Date.ToShortDateString()))
            {
                str = ctlname + " can not be less than or greater than current date";
                txtDate.Focus();
            }
            else
            {
                str = "PASS";
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        return str;
    }
    #endregion
    //********************End of Server side Control Validation function **********************************************************
    public static string GetEnumDescription(Enum value)
    {
        FieldInfo fi = value.GetType().GetField(value.ToString());

        DescriptionAttribute[] attributes =
            (DescriptionAttribute[])fi.GetCustomAttributes(
            typeof(DescriptionAttribute),
            false);

        if (attributes != null && attributes.Length > 0)
            return attributes[0].Description;
        else
            return value.ToString();
    }
    public static string SerializeToXMLString<T>(this T toSerialize)
    {
        XmlSerializer xmlSerializer = new XmlSerializer(toSerialize.GetType());
        StringWriter textWriter = new StringWriter();

        xmlSerializer.Serialize(textWriter, toSerialize);
        return textWriter.ToString();
    }
    public static string SessionUserKey { get { return "UserId"; } }
    public static string SessionDeptIdKey { get { return "DeptId"; } }
    public static string SessionDeptNameKey { get { return "Department"; } }
    public static string SessionUserNameKey { get { return "userName"; } }
    public static string SessionLevelIDKey { get { return "LevelID"; } }
    public static string SessionDesigIDKey { get { return "DesigID"; } }

    public static void MergeRows(GridView gridView)
    {
        for (int rowIndex = gridView.Rows.Count - 2; rowIndex >= 0; rowIndex--)
        {
            GridViewRow row = gridView.Rows[rowIndex];
            GridViewRow previousRow = gridView.Rows[rowIndex + 1];

            for (int i = 0; i < row.Cells.Count; i++)
            {
                if (row.Cells[i].Text == previousRow.Cells[i].Text)
                {
                    row.Cells[i].RowSpan = previousRow.Cells[i].RowSpan < 2 ? 2 :
                                           previousRow.Cells[i].RowSpan + 1;
                    previousRow.Cells[i].Visible = false;
                }
            }
        }
    }

    #region Added By Satyajeet Mukherjee

    /// <summary>
    /// Added by Satyajeet Mukherjee On 18-01-2016
    /// </summary>
    /// <param name="page"></param>
    /// <returns></returns>

    private static byte[] GetPasswordBytes()
    {
        // The real password characters is stored in System.SecureString
        // Below code is to converting System.SecureString into Byte[]


        byte[] ba = null;


        ba = new byte[] { 1, 2, 3, 4, 5, 6, 7, 8 };


        return System.Security.Cryptography.SHA1.Create().ComputeHash(ba);
    }

    public static byte[] EncryptionKey
    {
        get
        {
            return GetPasswordBytes();
        }
    }

    private static byte[] key = {
		
	        };

    public static string AESEncrypt(string stringToEncrypt)
    {
        try
        {


            return AES.Encrypt(stringToEncrypt.Trim(), EncryptionKey);
        }
        catch (Exception e)
        {
            return e.Message;
        }
    }

    public static string AESDecrypt(string stringToEncrypt)
    {
        try
        {

            return AES.Decrypt(stringToEncrypt, EncryptionKey);
        }
        catch (Exception e)
        {
            return e.Message;
        }
    }

    public static NameValueCollection GetQueryString(string EncryptedUri)
    {
        string querystring = string.Empty;
        EncryptedUri = EncryptedUri.Replace(" ", "+");
        NameValueCollection qscoll;
        try
        {
            string url = AESDecrypt(EncryptedUri);
            int iqs = url.IndexOf('?');
            // If query string variables exist, put them in
            // a string.
            if (iqs >= 0)
            {
                querystring = (iqs < url.Length - 1) ? url.Substring(iqs + 1) : String.Empty;
            }

            // Parse the query string variables into a NameValueCollection.
            qscoll = HttpUtility.ParseQueryString(querystring);


            
        }
        catch (Exception ex)
        {
            throw ex;
        }
        return qscoll;
    }

    public static void CmnRelativeRedirectUrl(string Url)
    {


        string path = Url.Remove(Url.IndexOf('?'));

        HttpContext.Current.Response.Redirect(path + "?param=" + AESEncrypt(Url));
    }
    public static string GetSecureUrl(string Url)
    {
        string path = Url.Remove(Url.IndexOf('?'));
        return path + "?param=" + AESEncrypt(Url);
    }


    #endregion

    #region "Populating Commission YearDropDown List Control"
    public static void PopulateCommissionInvoiceYear(DropDownList ddlYear)
    {
        ddlYear.Items.Clear();
        ddlYear.Items.Add(new ListItem("--Select--", "0"));
        if (DateTime.Now.Month == 1)
        {
            ddlYear.Items.Add(new ListItem(((DateTime.Now.Year) - 1).ToString(), ((DateTime.Now.Year) - 1).ToString()));
        }
        else
        {
            ddlYear.Items.Add(new ListItem((DateTime.Now.Year).ToString(), (DateTime.Now.Year).ToString()));
        }

    }
    #endregion
    #region "Populating Commission Month DropDown List Control"
    public static void PopulateCommissionInvoiceMonth(DropDownList ddlMonth)
    {
        ddlMonth.Items.Clear();
        ddlMonth.Items.Add(new ListItem("--Select--", "0"));
        int intMonth = 0;
        string strMonthName = string.Empty;
        string strMonthValue = string.Empty;
        if (DateTime.Now.Month == 1)
        {
            intMonth = 12;
        }
        else
        {
            intMonth = DateTime.Now.Month - 1;
        }

        switch (intMonth)
        {
            case 1:
                strMonthName = "Jan";
                strMonthValue = "1";
                break;
            case 2:
                strMonthName = "Feb";
                strMonthValue = "2";
                break;
            case 3:
                strMonthName = "Mar";
                strMonthValue = "3";
                break;
            case 4:
                strMonthName = "Apr";
                strMonthValue = "4";
                break;
            case 5:
                strMonthName = "May";
                strMonthValue = "5";
                break;
            case 6:
                strMonthName = "June";
                strMonthValue = "6";
                break;
            case 7:
                strMonthName = "July";
                strMonthValue = "7";
                break;
            case 8:
                strMonthName = "Aug";
                strMonthValue = "8";
                break;
            case 9:
                strMonthName = "Sep";
                strMonthValue = "9";
                break;
            case 10:
                strMonthName = "Oct";
                strMonthValue = "10";
                break;
            case 11:
                strMonthName = "Nov";
                strMonthValue = "11";
                break;
            case 12:
                strMonthName = "Dec";
                strMonthValue = "12";
                break;
        }
        ddlMonth.Items.Add(new ListItem(strMonthName, strMonthValue));
    }
    #endregion

    public static Boolean GetPostBackControlId(System.Web.UI.Page page, string ControlList)
    {
        if (!page.IsPostBack)
            return true;
        System.Web.UI.Control control = null;
        string controlName = page.Request.Params["__EVENTTARGET"];
        if (!String.IsNullOrEmpty(controlName))
        {
            control = page.FindControl(controlName);
        }
        else
        {
            string controlId;
            System.Web.UI.Control foundControl;
            foreach (string ctl in page.Request.Form)
            {
                if (ctl.EndsWith(".x") || ctl.EndsWith(".y"))
                {
                    controlId = ctl.Substring(0, ctl.Length - 2);
                    foundControl = page.FindControl(controlId);
                }
                else
                {
                    foundControl = page.FindControl(ctl);
                }
                if (!(foundControl is Button || foundControl is ImageButton)) continue;
                control = foundControl;
                break;
            }
        }
        return Array.Exists(ControlList.Split(','), element => element.Equals((control == null ? String.Empty : control.ID), StringComparison.OrdinalIgnoreCase));
    }

  

   

    public static string check(TextBox txt, string strMand, string ctlname, int intSize, string allowchar = "")
    {

        string strMessage = "pass";
        try
        {
            string id = txt.ID;
            if (strMand == "M")
            {
                if (txt.Text == "")
                {
                    strMessage = ctlname + " can not be left blank";
                    return strMessage;
                }
            }
            if (txt.Text != "")
            {
                string FirststChar = txt.Text.Substring(0, 1);
                if (FirststChar == " ")
                {
                    strMessage = ctlname + " does not allow White Space(s) in first place";
                    return strMessage;
                }

                else if (FirststChar == "=" || FirststChar == "," || FirststChar == "-" || FirststChar == "." || FirststChar == "\\" || FirststChar == "(" || FirststChar == ")" || FirststChar == "/" || FirststChar == " " || FirststChar == "_" || FirststChar == ":")
                {
                    strMessage = ctlname + " does not allow " + FirststChar + " in first place";
                    return strMessage;
                }
                else if (txt.Text.Substring(txt.Text.Length - 1, 1) == " ")
                {
                    strMessage = ctlname + " " + "does not allow White Space(s) in last place";
                    return strMessage;
                }
                else if (allowchar != "")
                {

                    string spcialchar = "!@#$%^&*()_+=-{}[]';:|\\?/>.<,~`|";
                    char[] allowcharecter = allowchar.ToCharArray();
                    foreach (char c in allowcharecter)
                    {
                        int index = spcialchar.IndexOf(c);
                        if (index != -1)
                        {
                            spcialchar = spcialchar.Remove(index, 1);
                        }

                    }
                    char[] specialchararray = spcialchar.ToCharArray();
                    foreach (char c in specialchararray)
                    {
                        if (txt.Text.Contains(c.ToString()))
                        {
                            strMessage = ctlname + " does not allow " + c.ToString() + "";
                            return strMessage;
                        }
                    }

                }
                else if (allowchar == "")
                {

                    string spcialchar = "!@#$%^&*()_+=-{}[]';:|\\?/>.<,~`|";
                    char[] specialchararray = spcialchar.ToCharArray();
                    foreach (char c in specialchararray)
                    {
                        if (txt.Text.Contains(c.ToString()))
                        {
                            strMessage = ctlname + " does not allow " + c.ToString() + "";
                            return strMessage;
                        }
                    }
                }
                if (txt.Text.Length > intSize)
                {
                    strMessage = ctlname + " does not allow more than " + intSize + " characters";
                    return strMessage;
                }

                else
                {

                }
            }

        }
        catch
        {
            strMessage = "Fail";
        }
        return strMessage;

    }

    public static void DisplayPaging(int gIntRowsCount, GridView grdViewRegStatus, Label lblPaging, LinkButton lbtnAll)
    {
       
        if (grdViewRegStatus.Rows.Count > 0)
        {

            if (gIntRowsCount > grdViewRegStatus.PageSize)
            {
                lblPaging.Visible = true;
                lbtnAll.Visible = true;
            }
            else
            {
                lblPaging.Visible = true;
                lbtnAll.Visible = false;
            }
            if (grdViewRegStatus.PageIndex + 1 == grdViewRegStatus.PageCount)
            {
                lblPaging.Text = "Results <b>" + (Convert.ToInt32((grdViewRegStatus.PageIndex * grdViewRegStatus.PageSize)) + 1) + "</b> - <b>" + gIntRowsCount + " " + "Of" + " " + gIntRowsCount + "</b>";
            }
            else
            {
                lblPaging.Text = "Results <b>" + (Convert.ToInt32((grdViewRegStatus.PageIndex * grdViewRegStatus.PageSize)) + 1) + "</b> - <b>" + ((grdViewRegStatus.PageIndex + 1) * grdViewRegStatus.PageSize) + " " + "Of" + " " + gIntRowsCount + "</b>";
            }
        }
        else
        {
            lblPaging.Visible = false;
            lbtnAll.Visible = false;
        }
    }


    public static string EncryptPwd(string strPassword)
    {
        UTF8Encoding Ue = new UTF8Encoding();
        string pwdString = null;
        MD5CryptoServiceProvider Md5 = new MD5CryptoServiceProvider();
        byte[] ByteHash = Md5.ComputeHash(Ue.GetBytes(strPassword));
        pwdString = BitConverter.ToString(ByteHash);
        pwdString = pwdString.Replace("-", null);
        return pwdString;
    }
    public static DataSet ToDataSet<T>(this IList<T> list)
    {
        Type elementType = typeof(T);
        DataSet ds = new DataSet();
        DataTable t = new DataTable();
        ds.Tables.Add(t);

        //add a column to table for each public property on T
        foreach (var propInfo in elementType.GetProperties())
        {
            Type ColType = Nullable.GetUnderlyingType(propInfo.PropertyType) ?? propInfo.PropertyType;

            t.Columns.Add(propInfo.Name, ColType);
        }

        //go through each property on T and add each value to the table
        foreach (T item in list)
        {
            DataRow row = t.NewRow();

            foreach (var propInfo in elementType.GetProperties())
            {
                row[propInfo.Name] = propInfo.GetValue(item, null) ?? DBNull.Value;
            }

            t.Rows.Add(row);
        }

        return ds;
    }

    public static string GetPhotoDetails(int year)
    {
        string strResult = "";
        string path = ConfigurationManager.AppSettings["StrPath"].ToString();
        if ((year == 2013))
        {
            strResult = (path + @"SAMS\ONLINE_CAF\APPL_IMAGES\");
        }
        else if ((year == 2011))
        {
            strResult = (path + @"SAMS\ONLINE_CAF\APPL_IMAGES12\");
        }
        else
        {
            strResult = (path + "SAMS\\ONLINE_CAF\\APPL_IMAGES" + (year.ToString().Substring(2, 2) + "\\"));
        }

        return strResult;
    }
    public static string ViewPhotoDetails(int year)
    {
        string strResult = "";
        string path = ConfigurationManager.AppSettings["StrPathView"].ToString();
        if ((year == 2013))
        {
            strResult = (path + "SAMS/ONLINE_CAF/APPL_IMAGES/");
        }
        else if ((year == 2011))
        {
            strResult = (path + "SAMS/ONLINE_CAF/APPL_IMAGES12/");
        }
        else
        {
            strResult = (path + "SAMS/ONLINE_CAF/APPL_IMAGES" + (year.ToString().Substring(2, 2) + "/"));
        }

        return strResult;
    }

    public static string GetPhotoDetailsDegree(int year)
    {
        string strResult = "";
        string path = ConfigurationManager.AppSettings["photopathdeg"].ToString();

        if ((year == 2011))
        {
            strResult = (path + "\\ONLINE_CAF_DEG\\APPL_IMAGES12\\");
        }
        else
        {
            strResult = (path + ("\\ONLINE_CAF_DEG\\APPL_IMAGES" + (year.ToString().Substring(2, 2) + "\\")));
        }

        return strResult;
    }



    public static string ViewPhotoDetailsDegree(int year)
    {
        string strResult = "";
        string path = ConfigurationManager.AppSettings["photopathdegview"].ToString();
        if ((year == 2011))
        {
            strResult = (path + "/ONLINE_CAF_DEG/APPL_IMAGES12/");
        }
        else
        {
            strResult = (path + ("/ONLINE_CAF_DEG/APPL_IMAGES" + (year.ToString().Substring(2, 2) + "/")));
        }

        return strResult;
    }

    public static string GetXMLFromObject(object o)
    {
        StringWriter sw = new StringWriter();
        XmlTextWriter tw = null;
        try
        {
            XmlSerializer serializer = new XmlSerializer(o.GetType());
            tw = new XmlTextWriter(sw);
            serializer.Serialize(tw, o);
        }
        catch (Exception ex)
        {
            //Handle Exception Code
        }
        finally
        {
            sw.Close();
            if (tw != null)
            {
                tw.Close();
            }
        }
        return sw.ToString();
    }

    public static Object ObjectToXML(string xml, Type objectType)
    {
        StringReader strReader = null;
        XmlSerializer serializer = null;
        XmlTextReader xmlReader = null;
        Object obj = null;
        try
        {
            strReader = new StringReader(xml);
            serializer = new XmlSerializer(objectType);
            xmlReader = new XmlTextReader(strReader);
            obj = serializer.Deserialize(xmlReader);
        }
        catch (Exception exp)
        {
            //Handle Exception Code
        }
        finally
        {
            if (xmlReader != null)
            {
                xmlReader.Close();
            }
            if (strReader != null)
            {
                strReader.Close();
            }
        }
        return obj;
    }

 

    #region "Export Grid to Excel"
    /// <summary>
    /// Export Grid to Excel
    /// </summary>
    /// <param name="strFileName"></param>
    /// <param name="grd"></param>
    /// <param name="title"></param>
    /// <param name="details"></param>
    /// <param name="year"></param>
    /// <param name="check"></param>
    /// <returns></returns>
    public static HtmlForm ExportToExcel(string strFileName, Control grd, string title = null, string details = null, string year = null, bool check = false)
    {
        string attachment = "attachment; filename=" + strFileName + ".xls";
        HttpContext.Current.Response.ClearContent();
        HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";
        HttpContext.Current.Response.AddHeader("content-disposition", attachment);
        StringWriter sw = new StringWriter();
        HtmlTextWriter htw = new HtmlTextWriter(sw);
        if (check)
        {
            RemoveControls(grd);
        }
        // Create a form to contain the grid
        HtmlForm frm = new HtmlForm();
        grd.Parent.Controls.Add(frm);
        //frm.Attributes("runat") = "server";
        frm.Controls.Add(grd);
        frm.RenderControl(htw);

        StringBuilder sbContent = new StringBuilder();
        sbContent.Append("<font color='#0000FF' size='4' font-style='bold'>");
        sbContent.Append(title);
        sbContent.Append("</font>");
        sbContent.Append("<font color='#0000FF'>");
        sbContent.Append("<br>");
        sbContent.Append(details);
        sbContent.Append("<br>");
        if (!string.IsNullOrEmpty(year))
        {
            sbContent.Append("Year : " + year);
        }
        sbContent.Append("</font>");
        HttpContext.Current.Response.Write(sbContent);
        HttpContext.Current.Response.Write(sw.ToString());
        HttpContext.Current.Response.End();
        return frm;
    }

    private static void RemoveControls(Control grdReport)
    {
        Literal literal = new Literal();
        for (int i = 0; i <= grdReport.Controls.Count - 1; i++)
        {
            if (grdReport.Controls[i] is HyperLink)
            {
                literal.Text = (grdReport.Controls[i] as HyperLink).Text;
                Boolean isVisible = (grdReport.Controls[i] as HyperLink).Visible;
                grdReport.Controls.Remove(grdReport.Controls[i]);
                if (isVisible)
                {
                    grdReport.Controls.AddAt(i, literal);
                }
            }
            else if (grdReport.Controls[i] is LinkButton)
            {
                literal.Text = (grdReport.Controls[i] as LinkButton).Text;
                Boolean isVisible = (grdReport.Controls[i] as LinkButton).Visible;
                grdReport.Controls.Remove(grdReport.Controls[i]);
                if (isVisible)
                {
                    grdReport.Controls.AddAt(i, literal);
                }

            }
            if (grdReport.Controls[i].HasControls())
            {
                RemoveControls(grdReport.Controls[i]);
            }
        }
    }
    #endregion

    #region "Paging methods"
    /// <summary>
    /// Populate page number links
    /// </summary>
    /// <param name="rptPager"></param>
    /// <param name="recordCount"></param>
    /// <param name="currentPage"></param>
    /// <param name="PageSize"></param>
    public static void PopulatePager(Repeater rptPager, int recordCount, int currentPage, int PageSize)
    {
        List<ListItem> pages = new List<ListItem>();
        int startIndex, endIndex;
        int pagerSpan = 5;

        if (PageSize > recordCount)
        {
            PageSize = recordCount;
        }


        //Calculate the Start and End Index of pages to be displayed.
        double dblPageCount = (double)((decimal)recordCount / Convert.ToDecimal(PageSize));
        int pageCount = (int)Math.Ceiling(dblPageCount);
        startIndex = currentPage > 1 && currentPage + pagerSpan - 1 < pagerSpan ? currentPage : 1;
        endIndex = pageCount > pagerSpan ? pagerSpan : pageCount;
        if (currentPage > pagerSpan % 2)
        {
            if (currentPage == 2)
            {
                endIndex = 5;
            }
            else
            {
                endIndex = currentPage + 2;
            }
        }
        else
        {
            endIndex = (pagerSpan - currentPage) + 1;
        }

        if (endIndex - (pagerSpan - 1) > startIndex)
        {
            startIndex = endIndex - (pagerSpan - 1);
        }

        if (endIndex > pageCount)
        {
            endIndex = pageCount;
            startIndex = ((endIndex - pagerSpan) + 1) > 0 ? (endIndex - pagerSpan) + 1 : 1;
        }

        //Add the First Page Button.
        if (currentPage > 1)
        {
            pages.Add(new ListItem("First", "1"));
        }

        //Add the Previous Button.
        if (currentPage > 1)
        {
            pages.Add(new ListItem("<<", (currentPage - 1).ToString()));
        }

        for (int i = startIndex; i <= endIndex; i++)
        {
            pages.Add(new ListItem(i.ToString(), i.ToString(), i != currentPage));
        }

        //Add the Next Button.
        if (currentPage < pageCount)
        {
            pages.Add(new ListItem(">>", (currentPage + 1).ToString()));
        }

        //Add the Last Button.
        if (currentPage != pageCount)
        {
            pages.Add(new ListItem("Last", pageCount.ToString()));
        }

        if (pages.Count == 1)
        {
            rptPager.DataSource = null;

        }
        else
        {
            rptPager.DataSource = pages;
        }
        rptPager.DataBind();
        // return pages;
    }

    /// <summary>
    /// To fill page size dropdown .......
    /// </summary>
    /// <param name="ddl">Dropdownlist for page size</param>
    public static void PopulatePageSize(DropDownList ddl)
    {
        object[] objArray = new object[]  {
        10,20,50,100,500,1000,1500
     };

        ddl.DataSource = objArray;
        ddl.DataBind();

    }
    #endregion
    #region GridviewMergeHeader
    public static void ApplyGridHeaderCellStyle(TableCell HeaderCell, string strText, Int16 intColSpan, Int16 intRowSpan, HorizontalAlign hAlign, string ColorCode)
    {

        HeaderCell.Text = strText;

        HeaderCell.ColumnSpan = intColSpan;

        HeaderCell.RowSpan = intRowSpan;

        HeaderCell.ForeColor = System.Drawing.Color.Black;

        HeaderCell.HorizontalAlign = hAlign;

        HeaderCell.VerticalAlign = VerticalAlign.Bottom;

        HeaderCell.Style.Add("font-weight", "bold");

        HeaderCell.Style.Add("background-color", ColorCode);

        HeaderCell.Style.Add("color", "white");

        HeaderCell.Style.Add("background-repeat", "repeat-x");

        HeaderCell.Style.Add("background-position", "top");

        HeaderCell.Style.Add("vertical-align", "middle");

    }
    #endregion

    public static string FormatString(string strVal)
    {
        try
        {
            System.Globalization.CultureInfo CInfo = new System.Globalization.CultureInfo("hi-IN");
            strVal = Convert.ToInt64(strVal).ToString("N", CInfo);
            strVal = strVal.Replace(".00", "");
            return strVal;
        }
        catch
        {
            return strVal;
        }
    }
}




#region Security
/// <summary>
/// Created By satyajeet Mukherjee on 18-01-2016
/// Single Parameter With Encryption
/// </summary>

public static class AES
{

    private static byte[] AES_Encrypt(byte[] bytesToBeEncrypted, byte[] passwordBytes)
    {
        byte[] encryptedBytes = null;

        // Set your salt here, change it to meet your flavor:
        byte[] saltBytes = passwordBytes;
        // Example:
        //saltBytes = new byte[] { 1, 2, 3, 4, 5, 6, 7, 8 };

        using (MemoryStream ms = new MemoryStream())
        {
            using (RijndaelManaged AES = new RijndaelManaged())
            {
                AES.KeySize = 256;
                AES.BlockSize = 128;

                var key = new Rfc2898DeriveBytes(passwordBytes, saltBytes, 1000);
                AES.Key = key.GetBytes(AES.KeySize / 8);
                AES.IV = key.GetBytes(AES.BlockSize / 8);

                AES.Mode = CipherMode.CBC;

                using (CryptoStream cs = new CryptoStream(ms, AES.CreateEncryptor(), CryptoStreamMode.Write))
                {
                    cs.Write(bytesToBeEncrypted, 0, bytesToBeEncrypted.Length);
                    cs.Close();
                }
                encryptedBytes = ms.ToArray();
            }
        }

        return encryptedBytes;
    }

    private static byte[] AES_Decrypt(byte[] bytesToBeDecrypted, byte[] passwordBytes)
    {
        byte[] decryptedBytes = null;
        // Set your salt here to meet your flavor:
        byte[] saltBytes = passwordBytes;
        // Example:
        //saltBytes = new byte[] { 1, 2, 3, 4, 5, 6, 7, 8 };

        using (MemoryStream ms = new MemoryStream())
        {
            using (RijndaelManaged AES = new RijndaelManaged())
            {
                AES.KeySize = 256;
                AES.BlockSize = 128;

                var key = new Rfc2898DeriveBytes(passwordBytes, saltBytes, 1000);
                AES.Key = key.GetBytes(AES.KeySize / 8);
                AES.IV = key.GetBytes(AES.BlockSize / 8);

                AES.Mode = CipherMode.CBC;

                using (CryptoStream cs = new CryptoStream(ms, AES.CreateDecryptor(), CryptoStreamMode.Write))
                {
                    cs.Write(bytesToBeDecrypted, 0, bytesToBeDecrypted.Length);
                    cs.Close();
                }
                decryptedBytes = ms.ToArray();
            }
        }

        return decryptedBytes;
    }

    public static string Encrypt(string text, byte[] passwordBytes)
    {
        //  passwordBytes=System.Text.Encoding.UTF8.GetBytes(sEncryptionKey);
        byte[] originalBytes = Encoding.UTF8.GetBytes(text);
        byte[] encryptedBytes = null;

        // Hash the password with SHA256 key = 
        passwordBytes = SHA1.Create().ComputeHash(passwordBytes);

        // Getting the salt size
        int saltSize = GetSaltSize(passwordBytes);
        // Generating salt bytes
        byte[] saltBytes = GetRandomBytes(saltSize);

        // Appending salt bytes to original bytes
        byte[] bytesToBeEncrypted = new byte[saltBytes.Length + originalBytes.Length];
        for (int i = 0; i < saltBytes.Length; i++)
        {
            bytesToBeEncrypted[i] = saltBytes[i];
        }
        for (int i = 0; i < originalBytes.Length; i++)
        {
            bytesToBeEncrypted[i + saltBytes.Length] = originalBytes[i];
        }

        encryptedBytes = AES_Encrypt(bytesToBeEncrypted, passwordBytes);

        return Convert.ToBase64String(encryptedBytes);
    }

    public static string Decrypt(string decryptedText, byte[] passwordBytes)
    {
        //  passwordBytes = System.Text.Encoding.UTF8.GetBytes(sEncryptionKey);
        byte[] bytesToBeDecrypted = Convert.FromBase64String(decryptedText);

        // Hash the password with SHA256
        passwordBytes = SHA1.Create().ComputeHash(passwordBytes);

        byte[] decryptedBytes = AES_Decrypt(bytesToBeDecrypted, passwordBytes);

        // Getting the size of salt
        int saltSize = GetSaltSize(passwordBytes);

        // Removing salt bytes, retrieving original bytes
        byte[] originalBytes = new byte[decryptedBytes.Length - saltSize];
        for (int i = saltSize; i < decryptedBytes.Length; i++)
        {
            originalBytes[i - saltSize] = decryptedBytes[i];
        }

        return Encoding.UTF8.GetString(originalBytes);
    }

    private static int GetSaltSize(byte[] passwordBytes)
    {
        var key = new Rfc2898DeriveBytes(passwordBytes, passwordBytes, 1000);
        byte[] ba = key.GetBytes(2);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < ba.Length; i++)
        {
            sb.Append(Convert.ToInt32(ba[i]).ToString());
        }
        int saltSize = 0;
        string s = sb.ToString();
        foreach (char c in s)
        {
            int intc = Convert.ToInt32(c.ToString());
            saltSize = saltSize + intc;
        }

        return saltSize;
    }

    private static byte[] GetRandomBytes(int length)
    {
        byte[] ba = new byte[length];
        RNGCryptoServiceProvider.Create().GetBytes(ba);
        return ba;
    }

}


#endregion





