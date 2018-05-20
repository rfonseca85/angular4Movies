import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { BootstrapGridComponent } from './bootstrap-grid/bootstrap-grid.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        BootstrapGridComponent

    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class HomeModule { }
