import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// cheing set routing
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// import component Presentational Components
import { NavbarComponent } from './components/view-components/navbar/navbar.component';
import { HomeComponent } from './components/areas/home/home.component';
import { FooterComponent } from './components/view-components/footer/footer.component';
import { NuovoCandidatoComponent } from './components/recruiting-detailsArea/nuovo-candidato/nuovo-candidato.component';
// add animattions with platform-browser
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import forms with angular
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

//import material
import {MatExpansionModule} from '@angular/material/expansion';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material';
//mport { MatInputModule} from '@angular/material/';

//import material style component
// my services
import { ChedaAnagraficaServiceService } from './Services/SchedaAnagraficaService/cheda-anagrafica-service.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents,
    HomeComponent,
    NuovoCandidatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    //MatFormFieldModule
    //MatInputModule
  ],
  providers: [ChedaAnagraficaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
