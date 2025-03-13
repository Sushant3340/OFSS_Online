using System;
using System.CodeDom.Compiler;
using System.ComponentModel;
using System.Diagnostics;
using System.Runtime.Serialization;

namespace OFSS_OL_Entity
{
     
 public   class CafPayment 
    {
        public string Action { get; set; }
        public int    intPaymentId      {get;set;}
        public string    pgRespCode        {get;set;}
        public string    PGTxnNo           {get;set;}
        public string    issuerRefNo       {get;set;}
        public string    authIdCode        {get;set;}
        public decimal    amount            {get;set;}
        public string    clientTxnId       {get;set;}
        public string    firstName         {get;set;}
        public string    payMode           {get;set;}
        public string    email             {get;set;}
        public string    mobileNo          {get;set;}
        public string    spRespCode        {get;set;}
        public string    cid               {get;set;}
        public string    bid               {get;set;}
        public string    clientCode        {get;set;}
        public string    payeeProfile      {get;set;}
        public string    transDate         {get;set;}
        public string    spRespStatus      {get;set;}
        public string    challanNo         {get;set;}
        public string    reMsg             {get;set;}
        public decimal    orgTxnAmount      {get;set;}
        public string    programId         {get;set;}
        public int    int_ApplicantID   {get;set;}
        public string vch_UniqueRefNo { get; set; }
        public int intPaymentInt { get; set; }
    }
}
