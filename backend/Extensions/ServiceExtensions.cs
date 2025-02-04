using Microsoft.Extensions.DependencyInjection;
using PortfolioApi.Services;

namespace PortfolioApi.Extensions
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IAboutService, AboutService>();
            services.AddScoped<ICareerService, CareerService>();
            services.AddScoped<ICoursesService, CoursesService>();

            return services;
        }
    }
}
