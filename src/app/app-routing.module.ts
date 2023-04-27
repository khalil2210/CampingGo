import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components/components.component';
import { DashboardComponent } from './Equipment/dashboard/dashboard.component';
import { TemplateComponent } from './Equipment/template/template.component';
import { PaymentComponent } from './Equipment/payment/payment.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
{ path: 'home',             component: ComponentsComponent },
{path:'shop',                    component:TemplateComponent}
,{path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [CommonModule,BrowserModule,RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
