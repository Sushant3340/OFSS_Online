using System.Runtime.Serialization;

namespace CustomFaults
{
    /// <summary>
    /// Handle the custom error message
    /// </summary>
    /// <Createdby>Manas Bej</Createdby>
    [DataContract]
  public   class CustomFault
    {
        public CustomFault(string message)
        {
            this.ErrorMsg = message;
        }        
        /// <summary>
        /// ErrorNumber : is to provide a custome error code
        /// </summary>
        [DataMember(Order = 0)]
        public int ErrorNumber { get; set; }
        /// <summary>
        /// ErrorMsg : Custome error message
        /// </summary>
        [DataMember(Order = 1)]
        public string ErrorMsg { get; set; }
        /// <summary>
        /// Description : Details decription about the error
        /// </summary>
        [DataMember(Order = 2)]
        public string  Description { get; set; }
        
    }
}
