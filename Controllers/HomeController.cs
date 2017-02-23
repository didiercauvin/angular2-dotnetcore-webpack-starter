using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    public class RestaurantController : Controller
    {
        public string Get()
        {
            return "API OK";
        }

    }
}
