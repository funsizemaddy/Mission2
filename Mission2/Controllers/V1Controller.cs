using Microsoft.AspNetCore.Mvc;
using Mission2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Controlers
{
    public class V1Controller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet] 
        public IActionResult grade_calc()
        {
            return View();
        }
        [HttpPost]
        public IActionResult grade_calc( GradecalcModel model)
        {
            return View();
        }
    }
}
