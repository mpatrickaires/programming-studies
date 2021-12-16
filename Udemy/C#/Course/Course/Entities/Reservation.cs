using Course.Entities.Exceptions;
using System;

namespace Course.Entities
{
    class Reservation
    {
        public int RoomNumber { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }

        public Reservation()
        {
        }

        public Reservation(int roomNumber, DateTime checkIn, DateTime checkOut)
        {
            RoomNumber = roomNumber;
            SetDates(checkIn, checkOut);
        }

        public int Duration()
        {
            return (int)CheckOut.Subtract(CheckIn).Days;
        }

        private void ValidateDates(DateTime checkIn, DateTime checkOut)
        {
            DateTime now = DateTime.Now;
            if (checkIn < now || checkOut < now)
            {
                throw new ReservationException("Reservation Error: Reservation dates must be future dates!");
            }

            if (checkOut < checkIn)
            {
                throw new ReservationException("Reservation Error: Check-out date must be after check-in date!");
            }

        }

        public void SetDates(DateTime checkIn, DateTime checkOut)
        {
            ValidateDates(checkIn, checkOut);
            CheckIn = checkIn;
            CheckOut = checkOut;
        }

        public override string ToString()
        {
            return $"Room {RoomNumber}, check-in: {CheckIn.ToString("dd/MM/yyyy")}, " +
                   $"check-out: {CheckOut.ToString("dd/MM/yyyy")}, {Duration()} nights";
        }
    }
}
