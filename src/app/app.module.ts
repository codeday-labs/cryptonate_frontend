import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardCampaignComponent } from './card-campaign/card-campaign.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CreateCampaign2Component } from './create-campaign2/create-campaign2.component';
import { CreateCampaign3Component } from './create-campaign3/create-campaign3.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavbarComponent } from './navbar/navbar.component';

import * as Layout from './_layout';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    CardCampaignComponent,
    CreateCampaignComponent,
    CreateCampaign2Component,
    CreateCampaign3Component,
    HomeComponent,
    MyProfileComponent,
    NavbarComponent,
    ...Layout.layouts
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'signup', component:  SignupComponent},
      { path: 'Donate', component:  CardCampaignComponent},
      { path: 'Fundraise', component:  Layout.MainLayoutComponent,
    children:[{
      path:'',
      component:CreateCampaignComponent
    } ,
     { path: 'Details', component:  CreateCampaign2Component},
      { path: 'Picture', component:  CreateCampaign3Component}
    ]},
      { path: 'Profile', component:  MyProfileComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
