import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientComponent } from './patient-list/patient/patient.component';
import { PatientDetailComponent } from './patient-list/patient-detail/patient-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'patients', component: ServicesComponent, children: [
      { path: ':id', component: PatientDetailComponent }
    ]
  },
  { path: 'contact', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


