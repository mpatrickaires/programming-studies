using System;

namespace Course.Entities.Exceptions
{
    class ReservationException : ApplicationException
    {
        public ReservationException(string message) : base(message)
        {
        }
    }
}
