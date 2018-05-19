import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
