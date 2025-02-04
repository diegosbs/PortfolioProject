using PortfolioApi.Models;
using System.Collections.Generic;

namespace PortfolioApi.Services
{
    public interface ICoursesService
    {
        IEnumerable<Course> GetCourses();
    }
}
