using System;
namespace Lab5
{
    public class Main
    {
        public Main()
        {
        }


        public void Start()
        {

            FoodBasket foodBasket = new(100);

            for(var i = 1; i <= 12; i++)
            {
                Console.WriteLine($"FoodBasket price for {i} month is:{foodBasket.GetPrice()}");
                foodBasket.IncreaseMonthly();
            }


        }
    }
}
