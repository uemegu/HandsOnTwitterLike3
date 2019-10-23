import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; // 追加
import { ListComponent } from './list/list.component'; // 追加

const routes: Routes = [
  { path: 'login', component: LoginComponent } ,  // 追加
  { path: 'list', component: ListComponent } ,  // 追加
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // 追加
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
