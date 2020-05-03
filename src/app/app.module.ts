import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { PatientComponent } from './patient-list/patient/patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailComponent } from './patient-list/patient-detail/patient-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AsyncPipe } from '@angular/common';
import { GraphComponent } from './patient-list/patient-menu/patient-menu-components/graph/graph.component';
import { NotesComponent } from './patient-list/patient-menu/patient-menu-components/notes/notes.component';
import { VitalsComponent } from './patient-list/patient-menu/patient-menu-components/vitals/vitals.component';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { PatientMenuComponent } from './patient-list/patient-menu/patient-menu.component';
import { HistoryComponent } from './patient-list/patient-menu/patient-menu-components/history/history.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    PatientComponent,
    PatientListComponent,
    PatientDetailComponent,
    ContactUsComponent,
    PatientMenuComponent,
    GraphComponent,
    NotesComponent,
    VitalsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'mdp-beky'),
    AngularFireDatabaseModule,               
    AngularFireAuthModule,
    AngularFireMessagingModule,
    HttpClientModule,
    jqxChartModule
  ],
  providers: [AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
