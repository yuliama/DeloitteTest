using DeloitteTestApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DeloitteTestApp.Controllers
{
    public class HomeController : ApiController
    {
        public HomeController()
        {

        }
        public IHttpActionResult Get()
        {
            try
            {
                var employessRepository = new EmployeesRepository();
                var employees = employessRepository.Retrieve();
                return Ok(employees);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        public IHttpActionResult Get(string search)
        {
            try
            {
                search = search.ToLower();

                var employessRepository = new EmployeesRepository();
                var employees = employessRepository.Retrieve();
                return Ok(employees.Where(e => e.Name.ToLower().Contains(search) || e.WorkTitle.ToLower().Contains(search)));
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
