import { CourseDetailsComponent } from './../course-details/course-details.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AssignCourse } from 'src/app/Model/AssignCourse';
import { SkillsDevelopmentService } from 'src/app/Services/skills-development.service';

@Component({
  selector: 'app-available-course',
  templateUrl: './available-course.component.html',
  styleUrls: ['./available-course.component.scss']
})
export class AvailableCourseComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  totalRec : number;
  page: number = 1;
  courseType : ["none" , "general" , "medical"]
  courseLocation : ["none" , "online" , "onsite"]
  coursesList: any [] = []
  fileName = '';

  constructor(private service : SkillsDevelopmentService , private dailog : MatDialog) { }

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

  openDetails(course : any)
  {
     this.dailog.open(CourseDetailsComponent , {
       data : {id : course.id , name : course.courseName},
       position : {top:"10%" },
       width : "50%"
     })
  }

}
