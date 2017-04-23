using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course_Booking.Models
{
    public class InMemoryCourseRepository: ICourseRepository
    {
        private static List<Course> _db = new List<Course>();

        public InMemoryCourseRepository()
        {
            if(_db.Count > 1)
            {
                return;
            }
            _db.Add(new Course { id = 1, title = "ASP .Net Basics", description = "ASP .Net Course for beginners", reference = "ASPNETB001", duration = 6, fees = 500, status = "open", location = "Net Hall 1", totalplaces = 100, availableplaces = 90 });
            _db.Add(new Course { id = 2, title = "ASP .Net Advanced", description = "ASP .Net Course for middle level programmers", reference = "ASPNETA001", duration = 10, fees = 1500, status = "open", location = "Net Hall 3", totalplaces = 100, availableplaces = 60 });
            _db.Add(new Course { id = 3, title = "JavaScript with 12 Projects", description = "JavaScript Course with 12 interactive Project work", reference = "JSCRM001", duration = 9, fees = 1000, status = "open", location = "Net Hall 2", totalplaces = 100, availableplaces = 50 });
            _db.Add(new Course { id = 4, title = "AngularJS", description = "AngularJS Course for developers with some JavaScript knowledge", reference = "JSCRM006", duration = 6, fees = 1000, status = "open", location = "Net Hall 5", totalplaces = 100, availableplaces = 30 });
            _db.Add(new Course { id = 5, title = "ReactJS", description = "ReactJS Course for developers with some JavaScript knowledge", reference = "JSCRM007", duration = 6, fees = 1000, status = "open", location = "Net Hall 5", totalplaces = 100, availableplaces = 90 });
            _db.Add(new Course { id = 6, title = "HTML5 Basics", description = "HTML5 Basics", reference = "HTMLB001", duration = 6, fees = 500, status = "open", location = "Net Hall 1", totalplaces = 100, availableplaces = 10 });
            _db.Add(new Course { id = 7, title = "Bootstrap", description = "Bootstrap", reference = "BSTB001", duration = 6, fees = 500, status = "open", location = "Net Hall 1", totalplaces = 100, availableplaces = 0 });
            _db.Add(new Course { id = 8, title = "JQuery and Ajax", description = "JQuery and Ajax", reference = "JSCRM007", duration = 6, fees = 500, status = "open", location = "Net Hall 1", totalplaces = 100, availableplaces = 0 });
            _db.Add(new Course { id = 9, title = "SQL Server Development", description = "SQL Server Development", reference = "SQL001", duration = 15, fees = 2500, status = "open", location = "Net Hall 1", totalplaces = 100, availableplaces = 0 });
            _db.Add(new Course { id = 10, title = "ASP .Net Web API", description = "ASP .Net Web API Development with Project work", reference = "ASPNETB010", duration = 18, fees = 2500, status = "open", location = "Net Hall 1", totalplaces = 100, availableplaces = 0 });
        }

        public void Add(Course course)
        {
            _db.Add(course);
        }
        public IEnumerable<Course> GetAll()
        {
            return _db.ToList();
        }
        public Course GetByID(int id)
        {
            return _db.FirstOrDefault(c => c.id == id);

        }
        public IEnumerable<Course> GetByTitle(string title)
        {
            return _db.Where(c => c.title.ToUpper().Contains(title.ToUpper())).ToList();       

        }
        public void Delete(int id)
        {
            _db.Remove(_db.FirstOrDefault(d => d.id == id));
        }

        public void Update(Course course)
        {
            foreach (Course c in _db)
            {
                if (c.id == course.id)
                {
                    _db.Remove(c);
                    _db.Add(course);
                    break;
                }
            }
        }

    }
}
