import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomerAreaComponent } from './customer-area/customer-area.component';
import { MarketComponent } from './market/market.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'area-do-cliente', component: CustomerAreaComponent },
  { path: 'mercado', component: MarketComponent },
];
