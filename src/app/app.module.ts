import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { NavigationComponent } from './home/navigation/navigation.component';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
