using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course_Booking.Models
{
    public class Course
    {
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string reference { get; set; }        
        public int duration { get; set; }
        public int fees { get; set; }
        public string status { get; set; }
        public string location { get; set; }        
        public int totalplaces { get; set; }
        public int availableplaces { get; set; }
    }
}
