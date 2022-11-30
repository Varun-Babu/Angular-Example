import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeSignUpComponent } from './employee-sign-up/employee-sign-up.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';


const myRoute : Routes =[
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"viewcourses",
    component:ViewCoursesComponent
  },
  {
    path:"viewfriends",
    component:ViewFriendsComponent
  },
  {
    path:"employeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"employeesignup",
    component:EmployeeSignUpComponent
  },
  {
    path:"addcourses",
    component:AddCoursesComponent
  },
  {
    path:"addfriends",
    component:AddFriendsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent,
    ViewCoursesComponent,
    ViewFriendsComponent,
    EmployeeLoginComponent,
    EmployeeSignUpComponent,
    AddCoursesComponent,
    AddFriendsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
