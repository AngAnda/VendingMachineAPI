using Microsoft.EntityFrameworkCore;
using VendingMachine.DataAccess.Entities;

namespace VendingMachine.DataAccess
{
    public class VendingMachineDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public VendingMachineDbContext(DbContextOptions<VendingMachineDbContext> options) : base(options)
        {
        }


    }
}
