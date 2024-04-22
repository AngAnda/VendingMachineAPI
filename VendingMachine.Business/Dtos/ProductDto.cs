using System.ComponentModel.DataAnnotations;

namespace VendingMachine.Business.DTOs
{
    public class ProductDto
    {

        [Required]
        [MinLength(3)]
        public string Name { get; set; }

        [Required]
        [StringLength(100), MinLength(3)]
        public string Description { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        [Range(0, 100)]
        public double Price { get; set; }

    }
}