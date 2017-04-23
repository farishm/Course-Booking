using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course_Booking.Models
{
    public interface ICourseRepository
    {
        void Add(Course course);
        IEnumerable<Course> GetAll();
        Course GetByID(int id);
        IEnumerable<Course> GetByTitle(string title);
        void Delete(int id);
        void Update(Course course);
    }
}
