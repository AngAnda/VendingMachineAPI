namespace VendingMachine.Business.Exceptions
{
    public class ProductAlreadyExistsException : Exception
    {
        private static readonly string exceptionMessage = "Product already exists";
        public ProductAlreadyExistsException() : base(exceptionMessage)
        {
        }
    }
}