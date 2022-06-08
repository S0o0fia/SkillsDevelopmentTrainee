import { AssignCourse } from './../../../Model/AssignCourse';
import { SkillsDevelopmentService } from './../../../Services/skills-development.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-all-cources',
  templateUrl: './all-cources.component.html',
  styleUrls: ['./all-cources.component.scss']
})
export class AllCourcesComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  totalRec : number;
  page: number = 1;
  courseType : ["none" , "general" , "medical"]
  courseLocation : ["none" , "online" , "onsite"]
  coursesList: any [] = []

  constructor(private service : SkillsDevelopmentService) { }

  ngOnInit(): void {
      this.LoadData();
  }

  LoadData()
  {
    this.service.getCoursesforTrainee(sessionStorage.getItem('ssd')).subscribe(
      (res : any)=> {
        this.coursesList = res

      } ,
      err => console.log(err)
    )
  }

  AssignCourse(id  : number)
  {

    console.log(id)
    let Body : AssignCourse = {
      ssd: sessionStorage.getItem('ssd'),
      courseId : id
    }
    this.service.assignCourseToTrainee(Body).subscribe(
      (data)=> {
           console.log(data),
           this.LoadData()
      },
      (err)=> console.log(err)
    )
  }

}