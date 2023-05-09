import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components/components.component';
import { MessageComponent } from './chat_app/message/message.component';
import { PostComponent } from './Post/post/post/post.component';
import { UpdatePostComponent } from './Post/update-post/update-post.component';
import { DashboardComponent } from './Equipment/dashboard/dashboard.component';
import { TemplateComponent } from './Equipment/template/template.component';
import { PaymentComponent } from './Equipment/payment/payment.component';
import { AuthGuard } from './Equipment/guards/auth.guard';
import { NotfoundComponent } from './Equipment/notfound/notfound.component';
import { LoginComponent } from './Equipment/login/login.component';
import { AjouterComponent } from './Equipment/dashboard/ajouter/ajouter.component';
import { ListeComponent } from './Equipment/dashboard/liste/liste.component';
import { UserGuard } from './Equipment/guards/user.guard';
import { OrdersComponent } from './Equipment/dashboard/orders/orders.component';
import { ListepaymentComponent } from './Equipment/dashboard/listepayment/listepayment.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommentComponent } from './comment/comment.component';
import { SignupComponent } from './user_module/signup/signup.component';
import { ChatComponent } from './chat_app/chat/chat.component';
import { UserDetailsComponent } from './user_module/user-details/user-details.component';



const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'users/get-user-by-id/:id', component: UserDetailsComponent },
{path:'post',component:PostComponent},
{path:'updatePost/:id',component:UpdatePostComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path: 'home',component: ComponentsComponent },
{path:'shop',  component:TemplateComponent}
,{path:'payment',component:PaymentComponent},

{path: 'signup', component: SignupComponent },

{ path: 'home', component: ComponentsComponent },

{ path:'chatroom',component:ChatComponent,canActivate:[UserGuard],children:[
{path:':chatroomId',component:MessageComponent}]},

{path:'shop',component:TemplateComponent}
,{path:'payment',component:PaymentComponent},
{path:'add',component:DashboardComponent,canActivate:[AuthGuard],children:[
  {path:'ajouter',component:AjouterComponent},
  {path:'liste',component:ListeComponent},
  {path:'orders',component:OrdersComponent},
  {path:'listepayment',component:ListepaymentComponent}
]},

{path: 'comments', component:CommentComponent},

{path: 'accueil', component:AccueilComponent},

{path: 'pop-up', component:PopUpComponent},

{path:'login',component:LoginComponent},
{path:'**',component:NotfoundComponent}
];



@NgModule({
  imports: [CommonModule,BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]})

export class AppRoutingModule { }
