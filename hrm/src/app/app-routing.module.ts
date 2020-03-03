import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuovoCandidatoComponent } from './components/recruiting-detailsArea/nuovo-candidato/nuovo-candidato.component';
import { SelezionaCandidatoComponent } from './components/recruiting-detailsArea/seleziona-candidato/seleziona-candidato.component';

const routes: Routes = [
  //{path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'nuovo candidato', component: NuovoCandidatoComponent},
  {path: 'seleziona candidato', component: SelezionaCandidatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NuovoCandidatoComponent, SelezionaCandidatoComponent]
