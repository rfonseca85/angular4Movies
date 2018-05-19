import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BootstrapGridComponent } from './home/bootstrap-grid/bootstrap-grid.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BootstrapGridComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
