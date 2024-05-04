using VendingMachine.DataAccess.Entities;
using VendingMachine.DataAccess.Interfaces;

namespace VendingMachine.DataAccess
{
    public class ProductRepositorySqlite : IProductRepository
    {

        private readonly VendingMachineDbContext _context;

        public ProductRepositorySqlite(VendingMachineDbContext context)
        {
            _context = context;
        }

        public int Create(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return _context.Products.Select(p => p.Id).Where(id => id == product.Id).FirstOrDefault();
        }

        public void Delete(int id)
        {
            _context.Products.Remove(_context.Products.Find(id));
            _context.SaveChanges();
        }

        public Product Get(int id)
        {
            return _context.Products.Find(id);
        }

        public List<Product> GetAll()
        {
            return _context.Products.ToList();
        }

        public bool ProductExistsWithId(int id)
        {
            return _context.Products.Any(p => p.Id == id);
        }

        public void Update(int id, Product product)
        {

            var existingProduct = _context.Products.Find(id);

            existingProduct.Name = product.Name;
            existingProduct.Description = product.Description;
            existingProduct.Quantity = product.Quantity;
            existingProduct.Price = product.Price;

            _context.SaveChanges();
        }
    }
}
