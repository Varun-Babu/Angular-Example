import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  Username=""
  Password=""

  constructor(private route:Router){}

  readValue = () =>{
    let data:any = {"Username":this.Username,"Password":this.Password}
    console.log(data)

    if (this.Username=="1122" && this.Password=="12345" ) {
      this.route.navigate(['/addcourses'])
      
    } else {
      alert("invalid credentials")
      
    }

  }
}
