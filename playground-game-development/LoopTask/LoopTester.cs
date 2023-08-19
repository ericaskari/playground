namespace LoopTask;

public class LoopTester
{
    public void DoTheLoops()
    {
        const int passengerLimit = 4;

        Console.WriteLine ("for loop:");
        for(var pc = 0; pc <= passengerLimit; pc++)
        {
            Console.WriteLine("Now I have " + pc + " passengers");
        }

        for(int i = 0; i < 5; i++){
            Console.WriteLine("i = " + i);
        }

        for(int i = 0; i < 8; i++)
        {
            if(i != 4) {
                Console.WriteLine("i = " + i);
            }
        }

        bool stop = false;

        int count = 0;

        while (!stop) {
            if (count == 2)
            {
                stop = true;
            }

            Console.WriteLine ("count = " + count);

            count++;
        }

    }
}