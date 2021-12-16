using Course.Entities;
using Course.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Globalization;

namespace Course.AulasExemplos
{
    static class AulasExemplos
    {
        static void aula77_ListExemplo()
        {
            /* 
             * Creating a new List of string 
             */
            List<string> list = new List<string>();

            /* 
             * Adding elements to the last position of the list 
             */
            list.Add("Maria");
            list.Add("Alex");
            list.Add("Bob");
            list.Add("Anna");
            list.Add("Richard");
            list.Add("Bia");

            /* 
             * Adding element to a specified index of the list
             */
            list.Insert(2, "Marco");

            /* 
             * Acessing each element of the list
             */
            Console.WriteLine("=== ELEMENTS OF THE LIST ===");
            foreach (string item in list)
            {
                Console.WriteLine(item);
            }

            /* 
             * Getting the number of elements in the list
             */
            Console.WriteLine("\n=== LIST COUNT ===");
            Console.WriteLine($"List count: {list.Count}");

            /* 
             * Getting the first element of the list that starts with the char 'A'. 
             * It is used a lambda expression (anonymous function) to create a function that
             * has a condition to check if the element will be the returned or not (in this
             * case, verifying if the first letter of the element starts with 'A').
             */
            Console.WriteLine("\n=== FIRST 'A' ===");
            string firstA = list.Find(item => item[0] == 'A');
            Console.WriteLine(firstA);

            /* 
             * Getting the last element of the list that starts with the char 'A'. 
             * It uses the same application of the "list.Find" explained before.
             */
            Console.WriteLine("\n=== LAST 'A' ===");
            string lastA = list.FindLast(item => item[0] == 'A');
            Console.WriteLine(lastA);

            /*
             * Getting the index of the first element of the list that starts with the char 'A'.
             */
            Console.WriteLine("\n=== FIRST INDEX 'A' ===");
            int firstIndexA = list.FindIndex(item => item[0] == 'A');
            Console.WriteLine(firstIndexA);

            /*
             * Getting the index of the last element of the list that starts with the char 'A'.
             */
            Console.WriteLine("\n=== LAST INDEX 'A' ===");
            int lastIndexA = list.FindLastIndex(item => item[0] == 'A');
            Console.WriteLine(lastIndexA);

            /*
             * Getting a new list with only the elements of the original list where the length
             * is greater or equal than 5.
             */
            Console.WriteLine("\n=== ELEMENTS WITH LENGTH GREATER OR EQUAL THAN 5 ===");
            List<string> listFindAll = list.FindAll(item => item.Length >= 5);
            foreach (string item in listFindAll)
            {
                Console.WriteLine(item);
            }

            /*
             * Removing from the list the first element equal to 'Alex'
             */
            Console.WriteLine("\n=== LIST WITH THE ELEMENT 'ALEX' REMOVED ===");
            list.Remove("Alex");
            foreach (string item in list)
            {
                Console.WriteLine(item);
            }

            /*
             * Removing from the list all the elements that starts with the letter 'B'
             */
            Console.WriteLine("\n=== LIST WITH ALL THE ELEMENTS STARTING WITH 'B' REMOVED ===");
            list.RemoveAll(item => item[0] == 'B');
            foreach (string item in list)
            {
                Console.WriteLine(item);
            }

            /*
             * Removing from the list an element at the specified index (position)
             */
            Console.WriteLine("\n=== LIST WITH THE ELEMENT AT INDEX 1 REMOVED ===");
            list.RemoveAt(1); // Anna
            foreach (string item in list)
            {
                Console.WriteLine(item);
            }

            /*
             * Removing from the list a quantity of elements starting from a specified position.
             * Read "list.RemoveRang(<starting position>, <quantity of elements to be removed>)
             */
            Console.WriteLine("\n=== LIST WITH 2 ELEMENTS STARTING FROM INDEX 0 REMOVED ===");
            list.RemoveRange(0, 2);
            foreach (string item in list)
            {
                Console.WriteLine(item);
            }
        }

        static void aula89_DateTimeExemplo()
        {
            Console.WriteLine("== CONSTRUCTOR (NEW) AND BUILDER (NOW, TODAY, UTCNOW) ==");

            DateTime d1 = new DateTime(2018, 11, 25);
            DateTime d2 = new DateTime(2018, 11, 25, 20, 45, 3);
            DateTime d3 = new DateTime(2018, 11, 25, 20, 45, 3, 500);

            DateTime d4 = DateTime.Now;
            DateTime d5 = DateTime.Today;
            DateTime d6 = DateTime.UtcNow;

            Console.WriteLine(d1);
            Console.WriteLine(d2);
            Console.WriteLine(d3);
            Console.WriteLine(d4);
            Console.WriteLine(d5);
            Console.WriteLine(d6);

            Console.WriteLine("\n== PARSE ==");

            DateTime d7 = DateTime.Parse("2000-08-15");
            DateTime d8 = DateTime.Parse("2000-08-15 13:05:58");

            DateTime d9 = DateTime.Parse("15/08/2000");
            DateTime d10 = DateTime.Parse("15/08/2000 13:05:58");

            Console.WriteLine(d7);
            Console.WriteLine(d8);
            Console.WriteLine(d9);
            Console.WriteLine(d10);

            Console.WriteLine("\n== PARSEEXACT ==");

            DateTime d11 = DateTime.ParseExact("2000-08-15", "yyyy-MM-dd", CultureInfo.InvariantCulture);
            DateTime d12 = DateTime.ParseExact("15/08/2000 13:05:58", "dd/MM/yyyy HH:mm:ss", CultureInfo.InvariantCulture);

            Console.WriteLine(d11);
            Console.WriteLine(d12);
        }

        static void aula90_TimeSpanExemplo()
        {
            Console.WriteLine("== CONSTRUCTOR ==");
            TimeSpan t1 = new TimeSpan();
            TimeSpan t2 = new TimeSpan(900000000L);
            TimeSpan t3 = new TimeSpan(2, 11, 21);
            TimeSpan t4 = new TimeSpan(1, 2, 11, 21);
            TimeSpan t5 = new TimeSpan(1, 2, 11, 21, 321);

            Console.WriteLine(t1);
            Console.WriteLine(t2);
            Console.WriteLine(t3);
            Console.WriteLine(t4);
            Console.WriteLine(t5);

            Console.WriteLine("\n== FROM (DAYS, HOURS, MINUTES, SECONDS, MILISECONDS, TICKS) ==");

            TimeSpan t6 = TimeSpan.FromDays(1.5);
            TimeSpan t7 = TimeSpan.FromHours(1.5);
            TimeSpan t8 = TimeSpan.FromMinutes(1.5);
            TimeSpan t9 = TimeSpan.FromSeconds(1.5);
            TimeSpan t10 = TimeSpan.FromMilliseconds(1.5);
            TimeSpan t11 = TimeSpan.FromTicks(900000000L);

            Console.WriteLine(t6);
            Console.WriteLine(t7);
            Console.WriteLine(t8);
            Console.WriteLine(t9);
            Console.WriteLine(t10);
            Console.WriteLine(t11);
        }

        static void aula91_DateTimePropriedadesOperacoes()
        {
            DateTime d = new DateTime(2001, 8, 15, 13, 45, 58);

            string s1 = d.ToLongDateString();
            string s2 = d.ToLongTimeString();
            string s3 = d.ToShortDateString();
            string s4 = d.ToShortTimeString();

            string s5 = d.ToString();

            string s6 = d.ToString("yyyy-MM-dd HH:mm:ss");
            string s7 = d.ToString("dd/MM/yyyy HH:mm:ss.fff");

            Console.WriteLine($"ToLongDateString: {s1}\n");
            Console.WriteLine($"ToLongTimeString: {s2}\n");
            Console.WriteLine($"ToShortDateString: {s3}\n");
            Console.WriteLine($"ToShortTimeString: {s4}\n");

            Console.WriteLine($"ToString(): {s5}\n");
            Console.WriteLine($"ToString('yyyy - MM - dd HH: mm:ss'): {s6}\n");
            Console.WriteLine($"ToString('dd/MM/yyyy HH:mm:ss.fff'): {s7}\n");


            DateTime d1 = new DateTime(2000, 10, 15);
            DateTime d2 = new DateTime(2000, 10, 18);

            TimeSpan t1 = d2.Subtract(d1);
            TimeSpan t2 = d1.Subtract(d2);

            Console.WriteLine($"Subtract 'd2.Subtract(d1)': {t1}\n");
            Console.WriteLine($"Subtract 'd1.Subtract(d2)': {t2}\n");
        }

        static void aula115_Enumeracores()
        {
            Order order = new Order
            {
                Id = 1080,
                Moment = DateTime.Now,
                Status = OrderStatus.PendingPayment
            };

            Console.WriteLine(order);

            // Enum to string
            string text = OrderStatus.PendingPayment.ToString();
            // string to Enum
            OrderStatus orderStatus = Enum.Parse<OrderStatus>("Delivered");

            Console.WriteLine(text);
            Console.WriteLine(orderStatus);
        }
    }
}
