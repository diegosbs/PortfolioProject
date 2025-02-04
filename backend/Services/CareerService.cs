using PortfolioApi.Models;
using System.Collections.Generic;

namespace PortfolioApi.Services
{
    public class CareerService : ICareerService
    {
        public IEnumerable<CareerItem> GetCareer()
        {
            return new List<CareerItem>
            {
                new CareerItem 
                { 
                    Company = "Empresa 1", 
                    Position = "Cargo 1", 
                    Period = "2018 - 2020", 
                    Description = "Atividades realizadas na empresa 1." 
                },
                new CareerItem 
                { 
                    Company = "Empresa 2", 
                    Position = "Cargo 2", 
                    Period = "2020 - 2023", 
                    Description = "Atividades realizadas na empresa 2." 
                }
            };
        }
    }
}
