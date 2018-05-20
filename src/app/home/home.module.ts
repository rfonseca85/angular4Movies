import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app.routing.module';
import { BootstrapGridComponent } from './bootstrap-grid/bootstrap-grid.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppComponent } from '../app.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        BootstrapGridComponent,
        NavigationComponent,
        TablesComponent
    ],
    exports: [
        NavigationComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class HomeModule { }
