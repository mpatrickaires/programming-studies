using System;
using System.Collections.Generic;
using System.Text;

namespace CursoFoop_OCP_ExtensionMethods2.Extensions
{
    public static class ProdutoExtension
    {
        public static double MargemLucro(this Produto produto) {
            var lucroLiquido = produto.Venda - produto.Custo;
            var margemLucro = ((lucroLiquido / produto.Venda) * 100);
            
            return Math.Round(Convert.ToDouble(margemLucro), 2);
        }
    }
}
