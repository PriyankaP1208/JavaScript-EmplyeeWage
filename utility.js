class EmployeeWageComputation{
    employeeWage()
    {
        const WAGE_PER_HOUR=20;
        const FULLDAY_PER_HOUR=8;
        const PART_TIME_HOUR=8;
        const WORKING_DAYS_PER_MONTH=20;
        let employee;
        let no=Math.floor(Math.random()*3);
        console.log("Enter choice 1.Employee Attendance 2.Employee daily wage 3.Part time Wage",no);
        switch(no)
        {
            case 0:
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
            case 1:
                let dailyWage;
                dailyWage=WAGE_PER_HOUR*FULLDAY_PER_HOUR;
                console.log("Daily employee wage:", dailyWage);
                break;
            case 2:
                let emp=Math.floor(Math.random()*8);
                let partTimeWage;
                partTimeWage=emp*PART_TIME_HOUR;
                console.log("Daily employee wage:", partTimeWage);
                break;
            default:
                console.log("Wrong choice.");
        }
        let monthWage;
        monthWage=WAGE_PER_HOUR*WORKING_DAYS_PER_MONTH;
        console.log("Wages for a month:"+monthWage);
    }
}
module.exports=new EmployeeWageComputation();