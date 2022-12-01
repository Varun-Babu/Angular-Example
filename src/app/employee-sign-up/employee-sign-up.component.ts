import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-sign-up',
  templateUrl: './employee-sign-up.component.html',
  styleUrls: ['./employee-sign-up.component.css']
})
export class EmployeeSignUpComponent {
  username=""
  password=""
  confirmpassword=""
  joiningdate = ""
  experience = ""
  degree = ""
  gender = ""
  parentname = ""
  email= ""
  mobile = ""
  country = ""
  state = ""
  pincode = ""
  street = ""
  houseno = ""
  lastname = ""
  firstname = ""
  id = ""



  constructor(private route:Router){}


  readValue = () =>{
    let data:any = {"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
    if (this.password == this.confirmpassword) {
      alert("employee created")
      this.route.navigate(['/employeelogin'])
      
    } else {
      alert("invalid credentials")
    }
}
}