namespace CursoSOLID_SRP
{
    class Email : IEmail
    {
        private string _emailSubject;
        private string _emailFrom;
        private string _emailTo;
        private string _emailBody;
        public Email(string emailSubject, string emailFrom, string emailTo)
        {
            this._emailSubject = emailSubject;
            this._emailFrom = emailFrom;
            this._emailTo = emailTo;
        }
        public string EmailSubject { get; set; }
        public string EmailFrom { get; set; }
        public string EmailTo { get; set; }
        public string EmailBody { get; set; }

        public void Enviar(string emailBody)
        {
            // Código de enviar e-mail
        }
    }
}
