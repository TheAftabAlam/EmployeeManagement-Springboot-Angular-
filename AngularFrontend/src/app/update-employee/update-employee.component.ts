import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  id:number;
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService, private router:Router,private activateRoute:ActivatedRoute){

  }
  ngOnInit():void{
    this.id= this.activateRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>console.log(error));
  }

  saveEmployee()
  {
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList()
    },
    error=>console.log(error));
  }

  goToEmployeeList()
  {
    this.router.navigate(['/employees']);
  }


  onSubmit(){
    console.log(this.employee)
    this.saveEmployee()
  }
}
