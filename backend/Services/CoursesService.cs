using PortfolioApi.Models;
using System.Collections.Generic;

namespace PortfolioApi.Services
{
    public class CoursesService : ICoursesService
    {
        public IEnumerable<Course> GetCourses()
        {
            return new List<Course>
            {
                new Course 
                { 
                    Title = "Curso 1", 
                    Institution = "Instituição 1", 
                    Year = "2019" 
                },
                new Course 
                { 
                    Title = "Curso 2", 
                    Institution = "Instituição 2", 
                    Year = "2021" 
                }
            };
        }
    }
}
