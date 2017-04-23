using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Course_Booking.Models;


namespace Course_Booking.Controllers
{
    [Route("api/[controller]")]
    public class CoursesController : Controller
    {
        private ICourseRepository courseRepo;

        public CoursesController(ICourseRepository _courseRepo)
        {
            courseRepo = _courseRepo;
            //courseRepo = new InMemoryCourseRepository();
        }
        // GET: api/courses
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return courseRepo.GetAll();
        }

        // GET: api/courses/main
        [Route("main")]       
        public IEnumerable<Course> MainCourses()
        {
            return courseRepo.GetAll().Take(8);
        }

        // GET api/course/1
        [HttpGet("{id}", Name = "GetCourse")]
        public IActionResult GetById(int id)
        {
            var course = courseRepo.GetByID(id);           
            return new ObjectResult(course);
        }

        // GET: api/courses/title/{title}
        [Route("title/{title}")]
        public IEnumerable<Course> GetByTitle(string title)
        {
            return courseRepo.GetByTitle(title);
           
        }

        [HttpPost]
        public IActionResult Post([FromBody]Course _course)
        {
            courseRepo.Add(_course);
            return CreatedAtRoute("GetCourse", new { id = _course.id }, _course);
        }
     

        [HttpPut]
        public IActionResult Put([FromBody]Course _course)
        {        
            courseRepo.Update(_course);
            return new NoContentResult();
        }

       [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {       
            courseRepo.Delete(id);
            return new NoContentResult();
        }
    }
}
