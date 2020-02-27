import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuovoCandidatoComponent } from './components/recruiting-detailsArea/nuovo-candidato/nuovo-candidato.component';

const routes: Routes = [
  //{path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'nuovo candidato', component: NuovoCandidatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NuovoCandidatoComponent]
