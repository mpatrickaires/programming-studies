using System;
using System.IO;

namespace CursoSOLID_SRP
{
    class Pedido
    {
        private IEmail _email;
        private ILogger _logger;
        public Pedido(IEmail email, ILogger logger)
        {
            this._email = email;
            this._logger = logger;
        }
        public long Quantidade { get; set; }
        public DateTime Data { get; set; }
        public void IncluirPedido()
        {
            try
            {
                // Codigo para incluir o pedido
                // Após incluir então envia o email
                this._email.Enviar("Pedido");
            }
            catch (Exception ex)
            {
                _logger.Info(ex.ToString());
            }
        }
        public void DeletaPedido()
        {
            try
            {
                //Codigo para deletar o pedido gerado
            }
            catch (Exception ex)
            {
                _logger.Info(ex.ToString());
            }
        }
    }
}
