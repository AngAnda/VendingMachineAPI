using AutoMapper;
using VendingMachine.Business.Dtos;
using VendingMachine.Business.DTOs;
using VendingMachine.Business.Exceptions;
using VendingMachine.DataAccess.Entities;
using VendingMachine.DataAccess.Interfaces;

namespace VendingMachine.Business.Services
{
    public class ProductService : IProductService
    {
        private readonly IMapper _mapper;
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }

        public int CreateProduct(ProductDto productDto)
        {

            var product = _mapper.Map<Product>(productDto);

            if (_productRepository.ProductExistsWithId(product.Id))
                throw new ProductAlreadyExistsException();

            return _productRepository.Create(product);
        }

        public void DeleteProduct(int id)
        {
            _productRepository.Delete(id);
        }

        public ProductOutputDto GetProduct(int id)
        {
            var product = _productRepository.Get(id);
            if (!_productRepository.ProductExistsWithId(id))
            {
                throw new ProductNotFoundException();
            }
            return _mapper.Map<ProductOutputDto>(product);
        }

        public List<ProductOutputDto> GetProducts()
        {
            return _mapper.Map<List<ProductOutputDto>>(_productRepository.GetAll());
        }

        public void UpdateProduct(int id, ProductDto updatedProductDto)
        {
            if (!_productRepository.ProductExistsWithId(id))
            {
                throw new ProductNotFoundException();
            }
            var product = _mapper.Map<Product>(updatedProductDto);
            _productRepository.Update(id, product);
        }

    }
}