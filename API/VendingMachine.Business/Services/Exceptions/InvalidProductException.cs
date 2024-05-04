namespace VendingMachine.Business.Exceptions
{
    public class InvalidProductException : Exception
    {
        public static readonly string exceptionMessage = "Invalid product";
        public InvalidProductException() : base(exceptionMessage)
        {
        }
    }
}