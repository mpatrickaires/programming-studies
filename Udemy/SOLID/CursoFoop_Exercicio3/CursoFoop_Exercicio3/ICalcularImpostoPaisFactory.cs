using System;
using System.Collections.Generic;
using System.Text;

namespace CursoFoop_Exercicio3
{
    interface ICalcularImpostoPaisFactory
    {
        public ICalcularImpostoPais GetCalcularImpostoPais(Pais pais);
    }
}
