import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent,RegisterComponent} from '../../components';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
