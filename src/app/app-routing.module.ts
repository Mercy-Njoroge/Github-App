import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // { path: 'user', component: GithubComponent},
  // { path: 'about', component: AboutComponent},
  // { path:'**', component:NotFoundComponent},
  //{ path: '', redirectTo:"/user", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
