using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class RegistraOcorrencia
    {
        private readonly IRegistro _registro;
        public RegistraOcorrencia(IRegistro registro)
        {
            this._registro = registro;
        }
        public void RegistraInfo(string mensagem)
        {
            this._registro.RegistraInfo(mensagem);
        }
    }
}
