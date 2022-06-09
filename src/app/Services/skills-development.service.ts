import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssignCourse } from '../Model/AssignCourse';

@Injectable({
  providedIn: 'root'
})

export class SkillsDevelopmentService {

  baseUrl : string = 'http://localhost:65535/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'})

    };
  constructor(public http : HttpClient) { }

  public AddnewSkillsDevelopement (data : any )
  {
    let url = '/SkillsDevelopmentTrainee/AddNewTrainee' ;
    return this.http.post(this.baseUrl+url , data);
  }


  public SkillsDevelopmentLogin (data : any)
  {

    let url = '/SkillsDevelopmentTrainee/SkillsTraineeLogin';
    return this.http.post(this.baseUrl+url , data);
  }

  public getCoursesforTrainee(ssd: any)
  {
      let url = '/SkillsDevelopmentCourses/GetCourseforTrainee/'+ssd;
      return this.http.get(this.baseUrl+url);
  }


  public assignCourseToTrainee(data : AssignCourse)
  {
      let url = '/SkillsDevelopmentCourses/AssignCoursetoTrainee';
      return this.http.post(this.baseUrl+url , data);
  }

  public uploadReceiptFile (formData : FormData ,  courseId : number , ssd : string)
  {
    let url = `/SkillsDevelopmentCourses/AddTraineeReciept/${courseId}/${ssd}`
    return this.http.post(this.baseUrl+url , formData);
  }

}
