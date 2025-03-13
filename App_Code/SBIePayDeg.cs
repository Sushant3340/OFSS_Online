using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OFSS_OL_Entity
{
    public class SBIePayDeg
    {
     public string Action {get;set;}
     public string MerchantOrderNo {get;set;}
	 public string UniqueRefNo {get;set;}
	 public string StudName {get;set;}
	 public string SBIePayReferenceID {get;set;}
	 public string Status {get;set;}
	 public decimal Amount {get;set;}
     public decimal ActualAmount { get; set; }
	 public string Currency {get;set;}
	 public string Paymode {get;set;}
	 public string OtherDetails {get;set;}
	 public string Reason {get;set;}
	 public string BankCode {get;set;}
	 public string BankReferenceNumber {get;set;}
	 public string TransactionDate {get;set;}
	 public string Country {get;set;}
     public string CIN { get; set; }
    }
}

