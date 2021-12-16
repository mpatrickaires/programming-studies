using System;
using System.Globalization;

namespace Interfaces.ExemploAula.ExemploIComparable.Entities
{
    class Employee : IComparable
    {
        public string Name { get; set; }
        public double Salary { get; set; }

        public Employee(string csvEmployee)
        {
            string[] employee = csvEmployee.Split(',');

            Name = employee[0];
            Salary = double.Parse(employee[1], CultureInfo.InvariantCulture);
        }

        public int CompareTo(object obj)
        {
            // Verificando se o tipo do argumento "obj" é "Employee", visto que será necessário realizar
            // o downcasting posteriormente
            if (!(obj is Employee))
            {
                throw new ArgumentException("Argument error! Object type must be Employee");
            }

            // Downcasting da classe base "object" para a subclasse "Employee" (visto que todas as
            // classes herdam de "object")
            Employee employee = obj as Employee;

            // COMO FUNCIONA O "CompareTo"
            // Ele compara valores do mesmo tipo e determina (com uma implementação interna) se um valor
            // é maior, menor ou igual ao outro (os tipos base string, int, double e etc. já possuem a
            // sua própria implementação interna dessa função. Por exemplo, a string faz a checagem de
            // ordem alfabética do texto e o int faz a checagem de ordem numérica). 
            // A implementação do CompareTo é utilizado no método "List.Sort()". Portanto, se for usar
            // esse método da lista e o tipo de seus elementos for uma classe própria, será necessário
            // implementar a interface "IComparable" e montar a lógica da função "CompareTo"  
            //
            // O "CompareTo" retorna três valores distintos (-1, 0, 1) de acordo com o resultado da
            // comparação, tomando como base sempre a variável que chamou a função. 
            // Exemplo: ("<variavel>.CompareTo(<outraVariavel>)"
            // Nesse caso, o valor será baseado em <variavel> ser menor, igual ou maior que <outraVariavel>.
            //
            // Significado de cada um dos valores tomando como base
            // "<variavel>.CompareTo(<outraVariavel>)":
            // -1 = <variavel> é menor que <outraVariavel>
            //  0 = <variavel> é igual a <outraVariavel>
            //  1 = <variavel> é maior que <outraVariavel>
            //
            // Implementando seu próprio CompareTo para um objeto que você criou, basta colocar um
            // símbolo de menos no valor de retorno para que ele seja feito em ordem decrescente.
            // Nesse caso do Employee, se for feita a ordenação baseada pelo salário, seria:
            // Salário Crescente: "return Salary.CompareTo(employee.Salary)"
            // Salário Decrescente: "return -Salary.CompareTo(employee.Salary)"

            // Comparação pelo nome. Caso os nomes sejam iguais, será feita também a comparação pelo
            // salário.
            int compareValue = Name.CompareTo(employee.Name);
            return (compareValue != 0) ? compareValue : Salary.CompareTo(employee.Salary);
        }

        public override string ToString()
        {
            return $"{Name}, {Salary:C}";
        }
    }
}
