import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SplashComponent} from './splash/splash.component'
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  { path: 'menu', component: MenuComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
