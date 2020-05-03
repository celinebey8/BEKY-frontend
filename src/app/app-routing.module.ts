import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientComponent } from './patient-list/patient/patient.component';
import { PatientDetailComponent } from './patient-list/patient-detail/patient-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PatientMenuComponent } from './patient-list/patient-menu/patient-menu.component';
import { GraphComponent } from './patient-list/patient-menu/patient-menu-components/graph/graph.component';
import { VitalsComponent } from './patient-list/patient-menu/patient-menu-components/vitals/vitals.component';
import { NotesComponent } from './patient-list/patient-menu/patient-menu-components/notes/notes.component';
import { HistoryComponent } from './patient-list/patient-menu/patient-menu-components/history/history.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
 
  {
    path: 'patients', component: ServicesComponent
  },
  {
    path: 'patient/:id', component: PatientMenuComponent, children: [
      { path: 'vitals', component: VitalsComponent },
      { path: 'graph', component: GraphComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'history', component: HistoryComponent}

    ]
  },
  // { path: 'patient/:id', component: PatientMenuComponent },

  // { path: 'vitals', component: VitalsComponent, outlet: 'outletmenu' },
  // { path: 'graph', component: GraphComponent , outlet: 'outletmenu'},
  // { path: 'notes', component: NotesComponent, outlet: 'outletmenu' },

  { path: 'contact', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


