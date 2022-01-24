using System;

namespace Lab6
{
    public class Main
    {
        public Main()
        {
        }

        public void Start()
        {
            FoodBasket foodBasket = new(100);
            PriceAlert priceAlert = new(105);

            for (var i = 1; i <= 12; i++)
            {
                Console.WriteLine($"FoodBasket price for {i} month is:{foodBasket.GetPrice()}");
                foodBasket.IncreaseMonthly();
                priceAlert.CheckAlert(foodBasket.GetPrice());
            }
        }
    }
}
