
using PortfolioApi.Models;

namespace PortfolioApi.Services
{
    public class AboutService : IAboutService
    {
        public About GetAbout()
        {
            return new About
            {
                Name = "Seu Nome",
                Title = "Desenvolvedor Full Stack",
                Bio = "Breve descrição sobre você, seus interesses e habilidades."
            };
        }
    }
}
