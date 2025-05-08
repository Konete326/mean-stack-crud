import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { AboutComponent } from './pages/about/about.component';
import { ViewuserComponent } from './pages/viewuser/viewuser.component';

export const routes: Routes = [
  {
 path: '',
 component: HomeComponent, 
 pathMatch: 'full'

  },
  {
  path: 'insert',
  component: AdduserComponent, 
   },{
   path: 'insert/:id',
  component: AdduserComponent, 
   },
   {
    path: 'edit/:id',
    component: EdituserComponent, 
     },
     {
        path: 'about',
        component: AboutComponent, 
         },

 {
        path: 'view',
        component: ViewuserComponent, 
         }
];
