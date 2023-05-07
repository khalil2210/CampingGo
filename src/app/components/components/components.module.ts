import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';


import { ComponentsComponent } from './components.component';
import { DashboardComponent } from '../../Equipment/dashboard/dashboard.component'
import { PaymentComponent } from '../../Equipment/payment/payment.component';
import { TemplateComponent } from 'src/app/Equipment/template/template.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        ReactiveFormsModule
    ],
    declarations: [
        ComponentsComponent,
        DashboardComponent,
        PaymentComponent,
        TemplateComponent

    ],
    entryComponents: [],
    exports:[ ComponentsComponent,DashboardComponent ]
})
export class ComponentsModule { }
