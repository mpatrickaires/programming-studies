using System;
using System.Collections.Generic;
using System.Text;

namespace CursoFoop_Solid_Exercicio2
{
    class ArquivoLogger : ILogger
    {
        private readonly string caminho;
        public ArquivoLogger(string _caminho)
        {
            caminho = _caminho;
        }
        public void Registrar(string mensagem)
        {
            // Salva em arquivo
        }
    }
}
