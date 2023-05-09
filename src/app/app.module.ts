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

import { AllGroupCampingComponent } from './GroupCamping/components/all-group-camping/all-group-camping.component';
import { AddgroupcampingComponent } from './AddGroupCamping/components/addgroupcamping/addgroupcamping.component';
import { MapComponent } from './map/map.component';
import { RechercheGpComponent } from './RechercheGp/components/recherche-gp/recherche-gp.component';

import { MessageComponent } from './chat_app/message/message.component';
import { ChatComponent } from './chat_app/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './Post/post/post/post.component';
import { UpdatePostComponent } from './Post/update-post/update-post.component';
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
import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
      SignupComponent,
      AllGroupCampingComponent,
      AddgroupcampingComponent,
      MapComponent,
      RechercheGpComponent,
      NotfoundComponent,
      LoginComponent,
      AjouterComponent,
      ListeComponent,
      OrdersComponent,
      ListepaymentComponent,
      PopUpComponent,
      SignupComponent,
      SignupComponent,
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
    NgxStarRatingModule,
    NgbRatingModule,
    Ng2SearchPipeModule
    




  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
