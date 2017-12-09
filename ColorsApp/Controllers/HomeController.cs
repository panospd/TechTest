using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ColorsApp.Controllers
{
    public class HomeController : Controller
    {
        TechTestDbContext _context = new TechTestDbContext();
        public ActionResult Index()
        {
            
            return View();
        }
    }
}