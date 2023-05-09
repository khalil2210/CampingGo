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
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentsModule } from './components/components/components.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageComponent } from './chat_app/message/message.component';
import { ChatComponent } from './chat_app/chat/chat.component';
import { NotfoundComponent } from './Equipment/notfound/notfound.component';
import { LoginComponent } from './Equipment/login/login.component';
import { AjouterComponent } from './Equipment/dashboard/ajouter/ajouter.component';
import { ListeComponent } from './Equipment/dashboard/liste/liste.component';
import { OrdersComponent } from './Equipment/dashboard/orders/orders.component';
import { ListepaymentComponent } from './Equipment/dashboard/listepayment/listepayment.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ReviewComponent } from './review/review.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { SignupComponent } from './user_module/signup/signup.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    MessageComponent,
    CommentComponent,
      AccueilComponent,
      PopUpComponent,
      ReviewComponent,
      UpdateReviewComponent,
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
    NgxStarRatingModule,
    NgbRatingModule




  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
