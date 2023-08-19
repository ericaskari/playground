using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace DotNetPlayground
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            var webClient = new WebClient();

            var html = webClient.DownloadString("https://google.com");

            Console.WriteLine(html);
        }
    }
}
