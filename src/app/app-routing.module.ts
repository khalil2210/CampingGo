import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components/components.component';
import { ChatComponent } from './chat_app/chat/chat.component';
import { MessageComponent } from './chat_app/message/message.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },

{ path: 'home', component: ComponentsComponent },

{ path:'chatroom',component:ChatComponent,children:[

{path:':chatroomId',component:MessageComponent}

]
},];

@NgModule({
  imports: [CommonModule,BrowserModule,RouterModule.forRoot(routes,{useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
