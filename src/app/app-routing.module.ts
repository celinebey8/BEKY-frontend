import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientComponent } from './patient-list/patient/patient.component';
import { PatientMenuComponent } from './patient-list/patient-menu/patient-menu.component';
import { GraphComponent } from './patient-list/patient-menu/patient-menu-components/graph/graph.component';
import { VitalsComponent } from './patient-list/patient-menu/patient-menu-components/vitals/vitals.component';
import { NotesComponent } from './patient-list/patient-menu/patient-menu-components/notes/notes.component';
import { HistoryComponent } from './patient-list/patient-menu/patient-menu-components/history/history.component';

import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';

import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PatientUserInfoComponent } from './patient-user-info/patient-user-info.component';
import { PatientDetailComponent } from './patient-list/patient-menu/patient-menu-components/patient-detail/patient-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'patients', component: ServicesComponent, canActivate: [AuthGuard] },
  {
    path: 'patient/:id', component: PatientMenuComponent, canActivate: [AuthGuard], children: [
      { path: 'vitals', component: VitalsComponent },
      { path: 'graph', component: GraphComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'info', component: PatientDetailComponent }

    ]
  },
  {
    path: 'patient-info', component: PatientUserInfoComponent, canActivate: [AuthGuard], children: [
      { path: 'vitals', component: VitalsComponent },
      { path: 'graph', component: GraphComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'info', component: PatientDetailComponent }
    ]
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },

  { path: 'login', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  {  path: "**", redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }