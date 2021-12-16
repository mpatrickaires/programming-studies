using System;
using System.Collections.Generic;
using System.Text;

namespace cursoFoop_Exercicio_SOLID1
{
    abstract class ExportarCSVAbstrato
    {
        public static string ExportarCSV(StringBuilder stringBuilder, List<ClienteAbstrato> dados)
        {
            foreach (var item in dados)
            {
                stringBuilder.AppendFormat($"{item.Nome},{item.Pais},{item.Email}");
                stringBuilder.AppendLine();
            }
            return stringBuilder.ToString();
        }
    }
}
