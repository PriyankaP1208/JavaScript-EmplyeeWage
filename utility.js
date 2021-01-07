class EmployeeWageComputation{
     employeeAttendance()
    {
        let employee=Math.floor(Math.random()*2);
        if(employee==1)
        {
            console.log("Employee is present");
            return 1;
        }
        else
        {
            console.log("Employee is not present");
            return 0;
        }
    }
    dailyEmpWage()
    { 
        const WAGE_PER_HOUR=20;
        const FULLDAY_PER_HOUR=8;
        let dailyWage;
        let x=this.employeeAttendance();
        if(x==1)
        {
            dailyWage=WAGE_PER_HOUR*FULLDAY_PER_HOUR;
            console.log("Daily employee wage:", dailyWage);
        }
    }
}
module.exports=new EmployeeWageComputation();