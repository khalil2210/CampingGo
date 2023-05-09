import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components/components.component';
import { TemplateComponent } from './Equipment/template/template.component';
import { PaymentComponent } from './Equipment/payment/payment.component';
import { ChatComponent } from './chat_app/chat/chat.component';
import { MessageComponent } from './chat_app/message/message.component';
import { CommentComponent } from './comment/comment.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ReviewComponent } from './review/review.component';
import { UpdateReviewComponent } from './update-review/update-review.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{ path: 'home',component: ComponentsComponent },
{path:'shop',  component:TemplateComponent}
,{path:'payment',component:PaymentComponent},

{ path:'chatroom',component:ChatComponent,children:[
  
{path:':chatroomId',component:MessageComponent}]},

{path: 'comments', component:CommentComponent},

{path: 'accueil', component:AccueilComponent},

{path: 'review', component:ReviewComponent},
{path: 'pop-up/:id', component:ReviewComponent},






];

@NgModule({
  imports: [CommonModule,BrowserModule,RouterModule.forRoot(routes)],
  exports: []})

export class AppRoutingModule { }
