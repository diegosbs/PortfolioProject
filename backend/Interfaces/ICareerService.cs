
using PortfolioApi.Models;
using System.Collections.Generic;

namespace PortfolioApi.Services
{
    public interface ICareerService
    {
        IEnumerable<CareerItem> GetCareer();
    }
}
