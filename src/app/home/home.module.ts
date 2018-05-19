import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app.routing.module';
import { BootstrapGridComponent } from './bootstrap-grid/bootstrap-grid.component';


@NgModule({
    imports: [

    ],
    declarations: [
        BootstrapGridComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class HomeModule { }
