import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  Username=""
  Password=""

  constructor(private route:Router){}


  readValue = () =>{
    let data:any = {"Username":this.Username,"Password":this.Password}
    console.log(data)
    if (this.Username == "admin" && this.Password == "nestdigital") {
      this.route.navigate(['/viewcourses'])
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
