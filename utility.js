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
        var wage=[];
        var totalWage1=[];
        dailyWage=WAGE_PER_HOUR*FULL_DAY_HOUR;
        monthWage=dailyWage*WORKING_DAYS_PER_MONTH;
        console.log("Monthly Wage:"+monthWage);
        while (days<20 && workingHours<100)
        {
            let empCheck=Math.floor(Math.random()*2);
            switch(empCheck)
            {
                case 0:
                    dailyWage=WAGE_PER_HOUR*FULL_DAY_HOUR;
                    wage.push(dailyWage);
                    monthWage=dailyWage*WORKING_DAYS_PER_MONTH;
                    workingHours=workingHours+FULL_DAY_HOUR;
                    break;
                case 1:
                    dailyWage=WAGE_PER_HOUR*PART_TIME_HOUR;
                    wage.push(dailyWage);
                    monthWage=dailyWage*WORKING_DAYS_PER_MONTH;
                    workingHours=workingHours+PART_TIME_HOUR;
                    break;
                default:
                    console.log("Wrong choice");
            }
            days++;
            totalWage = totalWage+dailyWage;
            totalWage1.push(totalWage);
        }
        //totalWage=(workingHours*days*WAGE_PER_HOUR);
        wage.push(totalWage);
        console.log("Total Wages is:",totalWage);
        console.log("Daily Wage along with total wage:");
        console.log("Daily Wages:",wage,"Total Wages:",totalWage1);
        return totalWage;
    }
    workHours = () =>{
        let dailyWage=WAGE_PER_HOUR*FULL_DAY_HOUR;
        let workHours=dailyWage/WAGE_PER_HOUR;
        console.log("Work Hours:",workHours);
    }
}
module.exports = new EmployeeWageComputation();
