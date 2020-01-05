using System.Net.Http.Headers;
using System.Web.Http;

namespace DeloitteTestApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services               

            config.EnableCors();

            // Web API routes
            config.MapHttpAttributeRoutes();
                                                            
            config.Formatters.Add(new BrowserJsonFormatter());

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
