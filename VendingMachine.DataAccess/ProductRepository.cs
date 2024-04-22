using VendingMachine.DataAccess.Entities;
using VendingMachine.DataAccess.Interfaces;

namespace VendingMachine.DataAccess
{
    public class ProductRepository : IProductRepository
    {
        private static readonly List<Product> _products = new List<Product>
        {
            new Product
            {
                Id = 1,
                Name = "Coca Cola",
                Description = "Coca Cola 33cl",
                Quantity = 10,
                Price = 1.5f
            },
            new Product
            {
                Id = 2,
                Name = "Fanta",
                Description = "Fanta 33cl",
                Quantity = 10,
                Price = 1.5f
            },
            new Product
            {
                Id = 3,
                Name = "Sprite",
                Description = "Sprite 33cl",
                Quantity = 10,
                Price = 1.5f
            },
            new Product
            {
                Id = 4,
                Name = "Pepsi",
                Description = "Pepsi 33cl",
                Quantity = 10,
                Price = 1.5f
            }
        };

        public List<Product> GetAll()
        {
            return _products;
        }

        public void Delete(int id)
        {
            _products.RemoveAll(p => p.Id == id);
        }

        public void Update(int id, Product product)
        {
            var index = _products.FindIndex(p => p.Id == id);
            _products[index] = product;
        }

        public int Create(Product product)
        {
            _products.Add(product);
            return _products.Last().Id;
        }

        public Product Get(int id)
        {
            return _products.FirstOrDefault(p => p.Id == id);

        }

        public bool ProductExistsWithId(int id)
        {
            return _products.Any(p => p.Id == id);
        }
    }
}