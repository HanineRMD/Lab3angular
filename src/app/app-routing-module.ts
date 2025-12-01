import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Contact} from './contact/contact';
import { Home } from './home/home';

const routes: Routes = [
  
   { path: '', redirectTo: 'home', pathMatch: 'full' },   { path: 'home', component: Home },
   { path: 'login', component: Login},
   { path: 'contact/:id', component: Contact },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
