import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { TopicsComponent } from './topics/topics.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import{GooglePayButtonModule} from '@google-pay/button-angular';
import { DiscussionComponent } from './discussion/discussion.component';
import { UserService } from './user.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    PricingComponent,
    TopicsComponent,
    ChatComponent,
    PaymentComponent,
    DiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    GooglePayButtonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideHttpClient(withFetch()),
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
