using System;
using System.Collections.Generic;
using System.Text;

namespace CursoSOLID_SRP
{
    interface IEmail
    {
        string EmailSubject { get; set; }
        string EmailFrom { get; set; }
        string EmailTo { get; set; }
        string EmailBody { get; set; }

        void Enviar(string emailBody);
    }
}
