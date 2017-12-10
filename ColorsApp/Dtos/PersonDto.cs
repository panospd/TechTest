using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace ColorsApp.Dtos
{
    [DataContract]
    public class PersonDto
    {
        [DataMember]
        public int PersonId { get; set; }
        [DataMember]
        public string FirstName { get; set; }

        [DataMember]
        public string LastName { get; set; }

        [DataMember]
        public string FullName {
            get
            {
                return FirstName + " " + LastName;
            }
            
        }
        [DataMember]
        public bool IsAuthorised { get; set; }
        
        public bool IsValid { get; set; }

        [DataMember]
        public bool IsEnabled { get; set; }


        [DataMember]
        public List<ColourDto> Colours { get; set; }
    }
}