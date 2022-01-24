using System;

namespace Lab7
{
    public class Main
    {
        public Main()
        {
        }


        public void Start()
        {
            Triangle triangle = new(10);

            var speedLimit = 50;

            SpeedRadar speedRadar = new(speedLimit);

            for (int speed = 0; speed < 200; speed++)
            {

                var fine = speedRadar.SetFine(speed);

                Console.WriteLine($"Speed limit is: {speedLimit}  |  Current speed is: {speed}  |  Fine: {fine}");

            }
        }
    }
}
