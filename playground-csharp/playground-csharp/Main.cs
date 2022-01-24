using System;
namespace Lab4
{
    public class Main
    {
        public Main()
        {
        }


        public void Start()
        {

            DoTheLoops();

            DoTheDice();

        }

        private void DoTheLoops()
        {

            LoopTester loopTester = new();

            loopTester.DoTheLoops();

        }

        private void DoTheDice()
        {

            Dice dice = new();


            var diceValue = dice.Throw();

            var count = 0;

            do
            {

                diceValue = dice.Throw();

                count += 1;

                Console.WriteLine($"{count}th throw: This time i got: {diceValue}");

            }
            while (diceValue != 6);

            Console.WriteLine($"Took me {count} times to get a 6");

        }


    }
}
