using System;
using System.Collections.Generic;
using System.Text;

namespace CursoFoop_Exercicio3
{
    class CalcularImpostoPaisFactory : ICalcularImpostoPaisFactory
    {
        public ICalcularImpostoPais GetCalcularImpostoPais(Pais pais)
        {
            switch (pais)
            {
                case Pais.Brasil:
                    return new CalcularImpostoBrasil();
                case Pais.USA:
                    return new CalcularImpostoUSA();
                case Pais.UK:
                    return new CalcularImpostoUK();
                default:
                    throw new NotImplementedException("País não encontrado!");
            }
        }
    }
}
