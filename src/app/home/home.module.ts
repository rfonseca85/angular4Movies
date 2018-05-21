import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app.routing.module';
import { BootstrapGridComponent } from './bootstrap-grid/bootstrap-grid.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppComponent } from '../app.component';
import { TablesComponent } from './tables/tables.component';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookModule } from './book/book.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        BookModule
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
