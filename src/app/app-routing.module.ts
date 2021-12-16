import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelComponent } from './marvel/marvel.component';
import { DcComponent } from './dc/dc.component';

const routes: Routes = [
  {path:'marvel', component: MarvelComponent},
  {path: 'dc', component: DcComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
