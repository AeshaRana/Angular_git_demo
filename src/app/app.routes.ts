import { Routes } from '@angular/router';
import { LoginComponent } from './login.component/login.component';
import { ButtonComponent } from './button.component/button.component';
import { RegistrationComponent } from './registration.component/registration.component';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { CartComponent } from './cart/cart.component/cart.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegistrationComponent
    },
    {
        path:'cart',
        component:CartComponent
    }


];
