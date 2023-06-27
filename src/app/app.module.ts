import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { NewFeedbackComponent } from './new-feedback/new-feedback.component';
import { DetailsComponent } from './details/details.component';
import { ColorStyleDirective } from './color-style.directive';
import { MyPipePipe } from './my-pipe.pipe';
import { CallComponent } from './call/call.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MenuComponent,
    HomeComponent,
    ServicesComponent,
    FeedbackComponent,
    NewFeedbackComponent,
    DetailsComponent,
    ColorStyleDirective,
    MyPipePipe,
    CallComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
