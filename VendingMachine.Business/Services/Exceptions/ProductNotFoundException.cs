namespace VendingMachine.Business.Exceptions
{
    public class ProductNotFoundException : Exception
    {
        private static readonly string exceptionMessage = "Product not found";
        public ProductNotFoundException() : base(exceptionMessage)
        {
        }
    }
}