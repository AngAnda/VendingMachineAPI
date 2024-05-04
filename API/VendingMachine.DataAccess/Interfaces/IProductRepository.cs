using VendingMachine.DataAccess.Entities;

namespace VendingMachine.DataAccess.Interfaces
{
    public interface IProductRepository
    {

        int Create(Product product);
        void Delete(int id);
        Product Get(int id);
        List<Product> GetAll();
        bool ProductExistsWithId(int id);
        void Update(int id, Product product);
    }
}