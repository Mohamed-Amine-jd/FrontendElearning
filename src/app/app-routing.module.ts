import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeconnecterComponent } from './components/seconnecter/seconnecter.component';
import { SinscrireComponent } from './components/sinscrire/sinscrire.component';


const routes: Routes = [
 
  {
    path: 'sinscrire',
    component: SinscrireComponent,
  },
   
  {
    path: 'seconnecter',
    component: SeconnecterComponent,
  },


  
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }