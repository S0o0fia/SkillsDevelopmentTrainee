import { SkillsDevelopmentService } from './../../../Services/skills-development.service';
import { AvailableCourseComponent } from './../available-course/available-course.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  trainerData    : any;
  constructor(
    public dialogRef: MatDialogRef<AvailableCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private service : SkillsDevelopmentService ,
  ) { }

  ngOnInit(): void {

     this.service.getCourseDetails(this.data.id).subscribe(
       (res)=> this.trainerData = res ,
       (err)=> console.log(err)
     )
  }

}
