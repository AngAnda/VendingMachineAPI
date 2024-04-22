using AutoMapper;
using VendingMachine.Business.Dtos;
using VendingMachine.Business.DTOs;
using VendingMachine.DataAccess.Entities;

namespace VendingMachine.Business.Mappers
{
    public class DtoProfile : Profile
    {
        public DtoProfile()
        {
            CreateMap<Product, ProductOutputDto>();
            CreateMap<ProductDto, Product>();
        }

    }
}