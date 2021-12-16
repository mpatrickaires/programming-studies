using System;

namespace CursoSOLID_SRP
{
    class Program
    {
        static void Main(string[] args)
        {
            IEmail email = new Email("emailSubject", "emailFrom", "emailTo");
            ILogger logger = new Logger("path");
            var pedido = new Pedido(email, logger);

            pedido.IncluirPedido();
        }
    }
}
