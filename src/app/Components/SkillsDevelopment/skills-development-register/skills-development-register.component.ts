import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SkillsDevelopmentService } from './../../../Services/skills-development.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/Helpers/passwordMatch';

@Component({
  selector: 'app-skills-development-register',
  templateUrl: './skills-development-register.component.html',
  styleUrls: ['./skills-development-register.component.scss'],
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

  trigger('slideLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-50%)', opacity: 0 }),
      animate('750ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateX(-50%)', 'opacity': 0 }))
    ])
  ])
]
})
export class SkillsDevelopmentRegisterComponent implements OnInit {

  public signUpForm: FormGroup ;
  public Universties: any = [];
  public Colleges: any = [];
  public BirthPlace: any = [];
  public EgyptGovernate : any = [];
  public selectedIndex: number = 0 ;
  public formData : FormData;
  public hide : boolean = true ;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(public formBuilder: FormBuilder ,
                private router : Router,
                private snackbar : MatSnackBar,
                private services : SkillsDevelopmentService
                 ) {
   this.formData = new FormData();
   this.signUpForm = this.formBuilder.group({
     fullEnglishName : ['' , [ Validators.required , Validators.pattern('[a-zA-Z ]*')]] ,
     fullArabicName : [''  , [ Validators.required  , Validators.pattern('[\u0621-\u064A ]*')]],
     gender : [0 , Validators.required],
     ssd : ['' , Validators.required],
     phone : ['' , Validators.required],
     nationality : ['' , Validators.required],
     dob : ['' , Validators.required],
     email : ['' , [Validators.required , Validators.pattern('^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.edu.eg]$')]],
     username : ['' , Validators.required],
     password : ['' , Validators.required],
     sceintifcDegree : ['' , Validators.required],
     currentJob : ['' , Validators.required],
     university : ['' , Validators.required],
     faculity : ['' , Validators.required],
     spaceilist : [0 , Validators.required],
     belongToUni : [0 , Validators.required],
     },

    );

   }

    ngOnInit()
    {

    }

    checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
      let pass = group.get('password').value;
      let confirmPass = group.get('confirmPassword').value
      return pass === confirmPass ? null : { mustMatch: true }
    }


    //for next button
    nextStep()
   {
     this.selectedIndex++;
   }

    //for pervious button
   previousStep()
   {
     this.selectedIndex--;
   }

    //when form get submitted
   onSubmit(form : any) {
      this.services.AddnewSkillsDevelopement(form.value).subscribe(
        (data : any)=> {
          console.log(data)
          sessionStorage.setItem('ssd' , data.ssd)
          sessionStorage.setItem('token' , data.token)
          this.router.navigate(['/Home/AllCourses'])
        } ,
        err=> {
          if(err.error == 12)
          {
             this.snackbar.open("هذا المستخدم مسجل من قبل" , null ,  {duration : 3000});
          }
        }
      )
     }

}
