using System;
namespace Lab6
{
    public class PriceAlert
    {
        double threshholdPrice = 0;

        bool alerted = false;

        public PriceAlert(double threshholdPrice)
        {
            this.threshholdPrice = threshholdPrice;
        }

        public void CheckAlert(double currentPrice)
        {
            if(alerted)
            {
                return;
            }

            if(currentPrice > threshholdPrice)
            {
                Console.WriteLine($"Warning, the price goes over {threshholdPrice}");
                alerted = true;
            }

        }
    }
}
