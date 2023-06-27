import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CallComponent } from './call/call.component';
import { DetailsComponent } from './details/details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NewFeedbackComponent } from './new-feedback/new-feedback.component';
import { ServicesComponent } from './services/services.component';

const ROUTES: Routes = [

  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent,children:
  [
    {path:'details',component:DetailsComponent},

  ]},
  {path:'details/:item',component:DetailsComponent},

  {path:'feedback',component:FeedbackComponent},
  {path:'new-feedback',component:NewFeedbackComponent},
  {path:'call',component:CallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
