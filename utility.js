class EmployeeWageComputation{
    employeeAttendance=()=>
    {
        let employee=Math.floor(Math.random()*2);
        if(employee==1)
        {
            console.log("Employee is present");
        }
        else
        {
            console.log("Employee is not present");
        }
    }
}
module.exports=new EmployeeWageComputation();