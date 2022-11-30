import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCourses = () =>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  addCourse = (dataToSend:any) =>
  {
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }
  viewFriends =() =>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }

  addFriends = (dataToSend:any) =>
  {
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",dataToSend)

  }
}
