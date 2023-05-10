import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components/components.component';
import { ChatComponent } from './chat_app/chat/chat.component';
import { MessageComponent } from './chat_app/message/message.component';
import { AllGroupCampingComponent } from './GroupCamping/components/all-group-camping/all-group-camping.component';
import { AddgroupcampingComponent } from './AddGroupCamping/components/addgroupcamping/addgroupcamping.component';
import { MapComponent } from './map/map.component';
import { RechercheGpComponent } from './RechercheGp/components/recherche-gp/recherche-gp.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },

{ path: 'home', component: ComponentsComponent },

{ path:'chatroom',component:ChatComponent,children:[
  
{path:':chatroomId',component:MessageComponent}    ]

},

{path:"groupcamping",component:AllGroupCampingComponent},
{path:"AddGroupCamping",component:AddgroupcampingComponent},
{path:"map",component:MapComponent},
{path:"search",component:RechercheGpComponent}


];

@NgModule({
  imports: [CommonModule,BrowserModule,RouterModule.forRoot(routes,{useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
