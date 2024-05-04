using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using VendingMachine.Business.Mappers;
using VendingMachine.Business.Services;
using VendingMachine.DataAccess;
using VendingMachine.DataAccess.Interfaces;

namespace VendingMachine.Business
{
    public static class ServicesExtensions
    {
        public static void AddBusinessServices(this IServiceCollection services)
        {
            services.AddScoped<IProductService, ProductService>();
            //services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IProductRepository, ProductRepositorySqlite>();
        }

        public static void AddDataAccessServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<VendingMachineDbContext>(options =>
                 options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));
        }

        public static void AddAutoMapper(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(DtoProfile).Assembly);
        }
    }
}