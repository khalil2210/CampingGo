import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComponentsModule } from './components/components/components.module';
import { MessageComponent } from './chat_app/message/message.component';
import { ChatComponent } from './chat_app/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddChatroomComponent } from './chat_app/Pop_up/add-chatroom/add-chatroom.component';
import { EditChatroomComponent } from './chat_app/Pop_up/edit-chatroom/edit-chatroom.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './Post/post/post/post.component';
import { UpdatePostComponent } from './Post/update-post/update-post.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    MessageComponent,
    AddChatroomComponent,
    EditChatroomComponent,
    PostComponent,
    UpdatePostComponent,
    
  ],

  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
