using System;
using System.IO;
using System.Collections.Generic;

namespace WorkingWithFiles.Exemplos
{
    static class AulasExemplos
    {
        public static void Aula186_File_FileInfo_IOException()
        {
            string sourcePath = @"E:\Programacao\Udemy\C#\WorkingWithFiles\examples\file1.txt";
            string destinationPath = @"E:\Programacao\Udemy\C#\WorkingWithFiles\examples\file2.txt";

            try
            {
                FileInfo fileInfo = new FileInfo(sourcePath);
                    
                if (File.Exists(destinationPath))
                {
                    File.Delete(destinationPath);
                    Console.WriteLine($"Deleted file in: {destinationPath}");
                }


                // Copies the file but throws an exception if the destination file 
                // already exists

                fileInfo.CopyTo(destinationPath);


                // Copies the file but if the destination file already exists it will 
                // overwrite the content (and will not throw an exception)
                fileInfo.CopyTo(destinationPath, true);
                Console.WriteLine($"Created new file in: {destinationPath}");

                Console.WriteLine("\n== ReadAllLines ==");
                string[] lines = File.ReadAllLines(sourcePath);
                foreach (string line in lines)
                {
                    Console.WriteLine(line);
                }

                Console.WriteLine("\n== ReadAllText ==");
                string content = File.ReadAllText(sourcePath);
                Console.WriteLine(content);
            }
            catch (IOException e)
            {
                Console.WriteLine($"An error ocurred: {e.Message}");
            }
        }

        public static void Aula187_FileStream_StreamReader()
        {
            string path = @"E:\Programacao\Udemy\C#\WorkingWithFiles\examples\file1.txt";

            //FileStream fileStream = null;
            StreamReader streamReader = null;
            try
            {
                //fileStream = new FileStream(path, FileMode.Open);
                //streamReader = new StreamReader(fileStream);


                // Modo de instanciação do StreamReader sem precisar instanciar também
                // separadamente o FileStream (o "File.OpenText()" já retorna uma instância
                // do StreamReader ("new StreamReader()"))
                streamReader = File.OpenText(path);

                Console.WriteLine("== ReadLine ==");
                while (!streamReader.EndOfStream)
                {
                    string line = streamReader.ReadLine();
                    Console.WriteLine(line);
                }

                // Retornando o StreamReader para o início do arquivo
                streamReader.DiscardBufferedData();
                streamReader.BaseStream.Seek(0, SeekOrigin.Begin);

                Console.WriteLine("\n== ReadToEnd ==");
                string content = streamReader.ReadToEnd();
                Console.WriteLine(content);

            }
            catch (IOException e)
            {
                Console.WriteLine($"An error ocurred: {e.Message}");
            }
            finally
            {
                if (streamReader != null) streamReader.Close();
                //if (fileStream != null) fileStream.Close();
            }
        }

        public static void Aula188_BlocoUsing()
        {
            string path = @"E:\Programacao\Udemy\C#\WorkingWithFiles\examples\file1.txt";

            try
            {
                // Com o using, o objeto criado dentro dos parênteses (por exemplo, o
                // "fileStream") será automaticamente liberado da memória assim que for
                // encerrado o bloco do using. Dessa forma, não é necessário utilizar o
                // finally com a expressão "if (fileStream != null) fileStream.Close()"

                // Outro ponto é que com múltiplos using encadeados, pode-se omitir o abre
                // e fecha chaves ({}) dos using que não seja o último; isso porque todo o
                // using aninhado e o seu bloco de execução será automaticamente posto no
                // escopo do using superior (esse comportamento é semelhante ao do bloco if
                // também com a omissão das chaves, onde apenas a primeira linha abaixo dele
                // será considerada em seu bloco de execução)
                using (FileStream fileStream = new FileStream(path, FileMode.Open))
                using (StreamReader streamReader = new StreamReader(fileStream))
                {
                    while (!streamReader.EndOfStream)
                    {
                        Console.WriteLine(streamReader.ReadLine());
                    }
                }
            }
            catch (IOException e)
            {
                Console.WriteLine($"An error ocurred: {e.Message}");
            }
        }

        public static void Aula189_StreamWriter()
        {
            string sourcePath = @"E:\Programacao\Udemy\C#\WorkingWithFiles\examples\file1.txt";
            string destinationPath = @"E:\Programacao\Udemy\C#\WorkingWithFiles\examples\file2.txt";

            try
            {
                string[] lines = File.ReadAllLines(sourcePath);

                // "FileMode.Truncate" irá abrir o arquivo e deletar todo o seu conteúdo
                using (FileStream fileStream = new FileStream(destinationPath, FileMode.Truncate))
                using (StreamWriter streamWriter = new StreamWriter(fileStream))
                {
                    foreach (string line in lines)
                    {
                        streamWriter.WriteLine(line.ToUpper());
                    }
                }
            }
            catch (IOException e)
            {
                Console.WriteLine($"An error ocurred: {e.Message}");
            }
        }

        public static void Aula190_Directory_DirectoryInfo()
        {
            string path = @"E:\Programacao\Udemy\C#\WorkingWithFiles\examples\myfolder";

            try
            {
                // Assim como no File e FileInfo, é possível utilizar tanto o
                // Directory (static) quanto o DirectoryInfo (instanciação) ao lidar
                // com as pastas

                // Usando Directory
                IEnumerable<string> folders = Directory.EnumerateDirectories(path, "*.*",
                    SearchOption.AllDirectories);

                Console.WriteLine("== EnumerateDirectories ==");
                foreach (string folder in folders)
                {
                    Console.WriteLine(folder);
                }

                // Usando DirectoryInfo
                DirectoryInfo directoryInfo = new DirectoryInfo(path);

                // Ao ter certeza do tipo de uma variável, pode-se utilizar o "var" no lugar
                // de declarar explicitamente esse tipo (nesse caso, a variável "files" irá
                // receber o tipo "IEnumerable<FileInfo>" de retorno da função "EnumerateFiles"
                var files = directoryInfo.EnumerateFiles("*.*",
                    SearchOption.AllDirectories);

                Console.WriteLine("\n== EnumerateFiles ==");
                foreach (var file in files)
                {
                    Console.WriteLine(file);
                }

                Directory.CreateDirectory(path + @"\newfolder");
            }
            catch (IOException e)
            {
                Console.WriteLine($"An error ocurred: {e.Message}");
            }
        }

        public static void Aula191_Path()
        {
            string path = @"E:\Programacao\Udemy\C#\WorkingWithFiles\examples\file1.txt";

            Console.WriteLine("== System Related ==");
            Console.WriteLine($"DirectorySeparatorChar: {Path.DirectorySeparatorChar}");
            Console.WriteLine($"PathSeparator: {Path.PathSeparator}");
            Console.WriteLine($"GetTempPath: {Path.GetTempPath()}");

            Console.WriteLine("\n== Informed Path Related ==");
            Console.WriteLine($"GetDirectoryName: {Path.GetDirectoryName(path)}");
            Console.WriteLine($"GetFileName: {Path.GetFileName(path)}");
            Console.WriteLine($"GetFileNameWithoutExtension: {Path.GetFileNameWithoutExtension(path)}");
            Console.WriteLine($"GetExtension: {Path.GetExtension(path)}");
            Console.WriteLine($"GetFullPath: {Path.GetFullPath(path)}");
        }
    }
}
