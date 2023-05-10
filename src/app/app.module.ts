import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComponentsModule } from './components/components/components.module';
import { MessageComponent } from './chat_app/message/message.component';
import { ChatComponent } from './chat_app/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddChatroomComponent } from './chat_app/Pop_up/add-chatroom/add-chatroom.component';
import { EditChatroomComponent } from './chat_app/Pop_up/edit-chatroom/edit-chatroom.component';
import { AllGroupCampingComponent } from './GroupCamping/components/all-group-camping/all-group-camping.component';
import { AddgroupcampingComponent } from './AddGroupCamping/components/addgroupcamping/addgroupcamping.component';
import { MapComponent } from './map/map.component';
import { RechercheGpComponent } from './RechercheGp/components/recherche-gp/recherche-gp.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    MessageComponent,
    AddChatroomComponent,
    EditChatroomComponent,
    AllGroupCampingComponent,
    AddgroupcampingComponent,
    MapComponent,
    RechercheGpComponent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
