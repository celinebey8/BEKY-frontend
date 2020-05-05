import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { environment } from '../environments/environment';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { PatientComponent } from './patient-list/patient/patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AsyncPipe } from '@angular/common';
import { GraphComponent } from './patient-list/patient-menu/patient-menu-components/graph/graph.component';
import { NotesComponent } from './patient-list/patient-menu/patient-menu-components/notes/notes.component';
import { VitalsComponent } from './patient-list/patient-menu/patient-menu-components/vitals/vitals.component';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { PatientMenuComponent } from './patient-list/patient-menu/patient-menu.component';
import { HistoryComponent } from './patient-list/patient-menu/patient-menu-components/history/history.component';
import { AboutUsComponent } from './about-us/about-us.component'

import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';

import { AuthService } from "./shared/services/auth.service";
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    PatientComponent,
    PatientListComponent,
    AboutUsComponent,
    PatientMenuComponent,
    GraphComponent,
    NotesComponent,
    VitalsComponent,
    HistoryComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'mdp-beky'),             
    AngularFireAuthModule,
    AngularFireDatabaseModule,  
    AngularFireMessagingModule,
    AngularFirestoreModule,
    HttpClientModule,
    jqxChartModule
  ],
  providers: [AsyncPipe, AuthService,AuthGuard, SecureInnerPagesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
