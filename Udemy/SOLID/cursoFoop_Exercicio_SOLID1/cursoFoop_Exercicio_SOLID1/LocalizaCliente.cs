using System.Collections.Generic;
using System.Text;

namespace cursoFoop_Exercicio_SOLID1
{
    class LocalizaCliente
    {
        private readonly ClienteAbstrato cliente;
        public LocalizaCliente(ClienteAbstrato _cliente)
        {
            cliente = _cliente;
        }
        public static ClienteAbstrato ProcuraPorPais(ClienteAbstrato cliente, string pais)
        {
            var resultado = ClienteAbstrato.GetClientes().Find(n => n.Pais == pais);
            return resultado;
        }
        public static ClienteAbstrato ProcuraPorNome(string nome)
        {
            var resultado = ClienteAbstrato.GetClientes().Find(n => n.Nome == nome);
            return resultado;
        }
    }
}
