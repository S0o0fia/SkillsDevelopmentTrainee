import { MatSnackBar } from '@angular/material/snack-bar';
import { SkillsDevelopmentService } from './../../../Services/skills-development.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-development-login',
  templateUrl: './skills-development-login.component.html',
  styleUrls: ['./skills-development-login.component.scss'],
  animations:[
    trigger('slideRight', [
    transition(':enter', [
      style({ transform: 'translateX(50%)', opacity: 0 }),
      animate('750ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateX(50%)', 'opacity': 0 }))
    ])
  ]) ,

  trigger('slideUp', [
    transition(':enter', [
      style({ transform: 'translateY(-50%)', opacity: 0 }),
      animate('900ms ease-in', style({ transform: 'translateY(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateY(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateY(-50%)', 'opacity': 0 }))
    ])
  ])
]
})
export class SkillsDevelopmentLoginComponent implements OnInit {

  hide : boolean = true ;
  public signinForm: FormGroup ;
  constructor( private formBuilder: FormBuilder ,
     private snack : MatSnackBar,
     private router : Router ,  private service : SkillsDevelopmentService) {

    this.signinForm = this.formBuilder.group({
      email : ['' , Validators.required] ,
      Paasword : ['' , Validators.required]
    })

  }

  ngOnInit(): void {
  }

  onSubmit(data : any)
  {
     this.service.SkillsDevelopmentLogin(data.value).subscribe(
       (data : any)=> {
         sessionStorage.setItem("ssd" , data.ssd)
         sessionStorage.setItem("token" , data.token)
         this.router.navigate(['/Home/AllCourses'])
       },
       err=>{
          this.snack.open("اسم المتسخدم او كلمة المرور  غير صحيحة" , null);
       }
     )
  }
}
