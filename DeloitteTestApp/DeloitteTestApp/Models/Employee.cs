using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DeloitteTestApp.Models
{
    public class Employee
    {
        public int WorkerID { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string WorkTitle { get; set; }
        public string Department { get; set; }
    }
}