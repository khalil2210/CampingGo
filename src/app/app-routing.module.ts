import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components/components.component';
import { ChatComponent } from './chat_app/chat/chat.component';
import { MessageComponent } from './chat_app/message/message.component';
import { CommentComponent } from './comment/comment.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },

{ path: 'home', component: ComponentsComponent },

{ path:'chatroom',component:ChatComponent,children:[
  
{path:':chatroomId',component:MessageComponent}]},

{path: 'comments', component:CommentComponent},

{path: 'accueil', component:AccueilComponent}


];

@NgModule({
  imports: [CommonModule,BrowserModule,RouterModule.forRoot(routes,{useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
