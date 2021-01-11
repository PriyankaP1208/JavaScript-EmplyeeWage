const WAGE_PER_HOUR=20;
const FULL_DAY_HOUR=8;
const PART_TIME_HOUR=4;
const WORKING_DAYS_PER_MONTH=20;
class EmployeeWageComputation{
   employeeWage()
    {
        let dailyWage;
        let monthWage;
        let partTimeWage;
        let workingHours=0;
        let totalWage=0;
        let days=0;
        let no=Math.floor(Math.random()*3)+1;
        console.log("Enter choice 1.Employee Attendance 2.Employee daily wage 3.Part time Wage");
        console.log(no);
        switch(no)
        {
            case 1:
                let employee=Math.floor(Math.random()*2);
                if(employee==1)
                {
                    console.log("Employee is present");
                }
                else
                {
                    console.log("Employee is not present");
                }
                break;
            case 2:
                dailyWage=WAGE_PER_HOUR*FULL_DAY_HOUR;
                console.log("Daily employee wage:", dailyWage);
                break;
            case 3:
                let emp=Math.floor(Math.random()*8);
                partTimeWage=WAGE_PER_HOUR*PART_TIME_HOUR;
                console.log("Daily employee wage:", partTimeWage);
                break;
            default:
                console.log("Wrong choice.");
        }
        dailyWage=WAGE_PER_HOUR*FULL_DAY_HOUR;
        monthWage=dailyWage*WORKING_DAYS_PER_MONTH;
        console.log("Monthly Wage:"+monthWage);
        let empCheck=Math.floor(Math.random()*2);
        while (days<20 && workingHours<100)
        {
            switch(empCheck)
            {
                case 0:
                    dailyWage=WAGE_PER_HOUR*FULL_DAY_HOUR;
                    monthWage=dailyWage*WORKING_DAYS_PER_MONTH;
                    workingHours=workingHours+FULL_DAY_HOUR;
                    break;
                case 1:
                    dailyWage=WAGE_PER_HOUR*PART_TIME_HOUR;
                    monthWage=dailyWage*WORKING_DAYS_PER_MONTH;
                    workingHours=workingHours+PART_TIME_HOUR;
                    break;
                default:
                    console.log("Wrong choice");
            }
            days++;
        }
        totalWage=(workingHours*days*WAGE_PER_HOUR);
        console.log("Total Wages is:",totalWage);
        return totalWage;
    }
    workHours = () =>{
        let dailyWage=WAGE_PER_HOUR*FULL_DAY_HOUR;
        let workHours=dailyWage/WAGE_PER_HOUR;
        console.log("Work Hours:",workHours);
    }
}
module.exports = new EmployeeWageComputation();
