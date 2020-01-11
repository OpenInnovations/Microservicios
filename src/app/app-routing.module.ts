import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatFormComponent } from './cat-form/cat-form.component';


const routes: Routes = [
  { path: 'view', component: CatListComponent },
  { path: 'regst', component: CatFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
