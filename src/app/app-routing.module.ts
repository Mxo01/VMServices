import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from './Components/services-page/services-page.component';
import { MxoPageComponent } from './Components/mxo-page/mxo-page.component';
import { InfoComponent } from './Components/info/info.component';

const routes: Routes = [
  { path: '', component: ServicesPageComponent },
  { path: 'info', component: InfoComponent},
  { path: 'Mxo' , component: MxoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
