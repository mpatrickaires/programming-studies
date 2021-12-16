using System.Globalization;

namespace Course
{
    class Produto
    {
        /* Implementando atributos privados */
        private string _nome;
        /* 
         * Definindo propriedades autoimplementadas (só podem serem usadas quando não 
         * houver lógica de implementação (ex.: validação) para o get ou o set 
         */
        public double Preco { get; private set; }
        public int Quantidade { get; private set; }

        /* Implementando construtores */
        public Produto()
        {
            Quantidade = 10;
        }

        public Produto(string nome, double preco) : this()
        {
            _nome = nome;
            Preco = preco;
        }

        public Produto(string nome, double preco, int quantidade) : this(nome, preco)
        {
            Quantidade = quantidade;
        }

        /* Definindo manualmente uma propriedade Nome para o atributo _nome */
        public string Nome
        {
            get { return _nome; }
            set
            {
                if (value != null && value.Length > 1)
                {
                    _nome = value;
                }
            }
        }

        /* Implementando outros métodos da classe */
        public double ValorTotalEmEstoque()
        {
            return Preco * Quantidade;
        }

        public override string ToString()
        {
            return _nome + ", $ " + Preco.ToString("F2", CultureInfo.InvariantCulture) +
                ", " + Quantidade + " unidades, Total: $ " +
                ValorTotalEmEstoque().ToString("F2", CultureInfo.InvariantCulture);
        }

        public void AdicionarProdutos(int quantidade)
        {
            Quantidade += quantidade;
        }

        public void RemoverProdutos(int quantidade)
        {
            Quantidade -= quantidade;
        }
    }
}
