import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
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
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './Post/post/post/post.component';
import { UpdatePostComponent } from './Post/update-post/update-post.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NotfoundComponent } from './Equipment/notfound/notfound.component';
import { LoginComponent } from './Equipment/login/login.component';
import { AjouterComponent } from './Equipment/dashboard/ajouter/ajouter.component';
import { ListeComponent } from './Equipment/dashboard/liste/liste.component';
import { OrdersComponent } from './Equipment/dashboard/orders/orders.component';
import { ListepaymentComponent } from './Equipment/dashboard/listepayment/listepayment.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { SignupComponent } from './user_module/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    MessageComponent,
    PostComponent,
    UpdatePostComponent,
    NotfoundComponent,
    LoginComponent,
    AjouterComponent,
    ListeComponent,
    OrdersComponent,
    ListepaymentComponent,
    PopUpComponent,
    SignupComponent
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
