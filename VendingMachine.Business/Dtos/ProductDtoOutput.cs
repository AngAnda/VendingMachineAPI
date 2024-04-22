namespace VendingMachine.Business.Dtos
{
    public class ProductOutputDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }

        public int Quantity { get; set; }

        public double Price { get; set; }

    }
}