
import { HomeComponent } from './Components/SkillsDevelopment/home/home.component';
import { SideBarComponent } from './Components/SkillsDevelopment/Shared/side-bar/side-bar.component';
import { SkillsDevelopmentRegisterComponent } from './Components/SkillsDevelopment/skills-development-register/skills-development-register.component';
import { SkillsDevelopmentLoginComponent } from './Components/SkillsDevelopment/skills-development-login/skills-development-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCourcesComponent } from './Components/SkillsDevelopment/all-cources/all-cources.component';

const routes: Routes = [
{path:'Login' , component: SkillsDevelopmentLoginComponent} ,
{path:'SkillsDevelopmentRegister' , component: SkillsDevelopmentRegisterComponent} ,
{path:'Home' , component : HomeComponent ,
     children : [
       {path :'AllCourses' , component : AllCourcesComponent }

     ] },
{path: '',  redirectTo: '', pathMatch: 'full',}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
