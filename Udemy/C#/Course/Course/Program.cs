using Course.Entities;
using Course.Entities.Enums;
using Course.Entities.Exceptions;
using System;
using System.Collections.Generic;
using System.Globalization;

namespace Course
{
    class Program
    {
        static void Main(string[] args)
        {
            Reservation reservation = null;

            int roomNumber = ReadInt("Room number: ");
            do
            {
                try
                {
                    DateTime checkIn = ReadDate("Check-in date (DD/MM/YYYY): ");
                    DateTime checkOut = ReadDate("Check-out date (DD/MM/YYYY): ");
                    reservation = new Reservation(roomNumber, checkIn, checkOut);
                }
                catch (ReservationException e)
                {
                    Console.WriteLine(e.Message);
                }
            } while (reservation == null);

            Console.WriteLine($"Reservation: {reservation}");

            Console.WriteLine("\n==Enter data to update the reservation ==");
            do
            {
                try
                {
                    DateTime updateCheckIn = ReadDate("Check-in date (DD/MM/YYYY): ");
                    DateTime updateCheckOut = ReadDate("Check-out date (DD/MM/YYYY): ");
                    reservation.SetDates(updateCheckIn, updateCheckOut);
                    Console.WriteLine($"Reservation: {reservation}");

                    break;
                }
                catch (ReservationException e)
                {
                    Console.WriteLine(e.Message);
                }
            } while (true);
        }

        static int ReadInt(string text)
        {
            int? number = null;
            do
            {
                try
                {
                    Console.Write(text);
                    number = int.Parse(Console.ReadLine());
                }
                catch (FormatException)
                {
                    Console.WriteLine("Invalid value! The value must be a number.");
                }
                catch (OverflowException)
                {
                    Console.WriteLine("Invalid value! It was either too big or too small.");
                }
            } while (number == null);

            return (int)number;
        }

        static DateTime ReadDate(string text)
        {
            DateTime date = new DateTime();
            do
            {
                try
                {
                    Console.Write(text);
                    date = DateTime.ParseExact(Console.ReadLine(), "dd/MM/yyyy",
                        CultureInfo.InvariantCulture);
                }
                catch (FormatException)
                {
                    Console.WriteLine("Invalid value! Date format must be day/month/year.");
                }
                catch (ArgumentNullException)
                {
                    Console.WriteLine("Invalid input! You must insert a value.");
                }
            } while (date == DateTime.MinValue);

            return date;
        }
    }
}
