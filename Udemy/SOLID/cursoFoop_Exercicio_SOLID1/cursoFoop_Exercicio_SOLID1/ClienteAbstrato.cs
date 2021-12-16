using System;
using System.Collections.Generic;
using System.Text;

namespace cursoFoop_Exercicio_SOLID1
{
    abstract class ClienteAbstrato
    {
        public string Nome { get; set; }
        public string Pais { get; set; }
        public string Email { get; set; }
        public static List<Cliente> GetClientes()
        {
            List<Cliente> listaClientes = new List<Cliente>();
            return listaClientes;
        }
    }
}
