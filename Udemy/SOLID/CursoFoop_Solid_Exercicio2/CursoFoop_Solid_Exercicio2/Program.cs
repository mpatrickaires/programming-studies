using System;

namespace CursoFoop_Solid_Exercicio2
{
    class Program
    {
        static void Main(string[] args)
        {
            ILogger log = new ArquivoLogger(log);
            var pedido = new Pedido();
            pedido.AdicionarPedido();
            Console.ReadLine();
        }
    }
}
