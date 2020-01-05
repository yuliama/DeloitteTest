using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace DeloitteTestApp.Models
{
    public class EmployeesRepository
    {
        /// <summary>
        /// Retrieves the list of products.
        /// </summary>
        /// <returns></returns>
        internal List<Employee> Retrieve()
        {
            var filePath = HostingEnvironment.MapPath(@"~/App_Data/employees.json");

            var json = System.IO.File.ReadAllText(filePath);

            var employees = JsonConvert.DeserializeObject<List<Employee>>(json);

            return employees;
        }
    }
}