namespace CursoFoop_Exercicio3
{
    class CalcularImposto
    {
        public static decimal Calcular(decimal valor, decimal deducao, Pais pais, 
            ICalcularImpostoPaisFactory calcularImpostoPaisFactory)
        {
            decimal valorImposto = 0;
            decimal valorBase = valor - deducao;
            valorImposto = calcularImpostoPaisFactory.GetCalcularImpostoPais(pais).Calcular(valorBase);
            return valorImposto;
        }
    }
}
