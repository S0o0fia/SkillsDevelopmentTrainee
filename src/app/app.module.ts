import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsDevelopmentLoginComponent } from './Components/SkillsDevelopment/skills-development-login/skills-development-login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SkillsDevelopmentRegisterComponent } from './Components/SkillsDevelopment/skills-development-register/skills-development-register.component';
import { SideBarComponent } from './Components/SkillsDevelopment/Shared/side-bar/side-bar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MenuItems } from './Helpers/menu';
import { HomeComponent } from './Components/SkillsDevelopment/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AllCourcesComponent } from './Components/SkillsDevelopment/all-cources/all-cources.component';
import { FooterComponent } from './Components/SkillsDevelopment/Shared/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    SkillsDevelopmentLoginComponent,
    SkillsDevelopmentRegisterComponent,
    SideBarComponent,
    HomeComponent,
    AllCourcesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule ,
    MatDatepickerModule,
    MatSidenavModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatSnackBarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    PerfectScrollbarModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),

    MatButtonModule,
    MatInputModule

  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  	MenuItems
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
