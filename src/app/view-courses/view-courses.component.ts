import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent {
  constructor(private api:ApiService){
    api.getCourses().subscribe(
      (response) =>{
        this.data =response; 
      }
    ) 
  }
  data:any = []
}
