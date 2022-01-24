using System;
using System.Diagnostics;

namespace Lab7
{
    public class SpeedRadar
    {
        int speedLimit = 0;

        public SpeedRadar(int speedLimit)
        {
            this.speedLimit = speedLimit;
        }

        public FineTypeEnum SetFine(int currentSpeed)
        {

            var speedGroup = GetSpeedGroup();

            if (speedGroup == SpeedGroupEnum.LowSpeed)
            {
                return CalculateFineTypeForLowSpeed(currentSpeed);
            }
            if (speedGroup == SpeedGroupEnum.HighSpeed)
            {
                return CalculateFineTypeForHighSpeed(currentSpeed);
            }

            throw new Exception();
        }

        private   SpeedGroupEnum GetSpeedGroup()
        {
            return speedLimit <= 60 ? SpeedGroupEnum.LowSpeed : SpeedGroupEnum.HighSpeed;
        }

        private FineTypeEnum CalculateFineTypeForLowSpeed(int currentSpeed)
        {
            if (currentSpeed <= speedLimit)
            {
                return FineTypeEnum.NoFine;
            }

            if (currentSpeed <= speedLimit + 20)
            {
                return FineTypeEnum.OnTheSpotFine;
            }

            if (currentSpeed <= speedLimit + 47)
            {
                return FineTypeEnum.DayFine;
            }

            return FineTypeEnum.DrivingLicenceCancelled;
        }

        private FineTypeEnum CalculateFineTypeForHighSpeed(int currentSpeed)
        {

            if (currentSpeed <= speedLimit)
            {
                return FineTypeEnum.NoFine;
            }

            if (currentSpeed <= speedLimit + 20)
            {
                return FineTypeEnum.OnTheSpotFine;
            }

            if (currentSpeed <= speedLimit + 50)
            {
                return FineTypeEnum.DayFine;
            }

            return FineTypeEnum.DrivingLicenceCancelled;
        }

    }
}
