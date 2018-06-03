import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { AppRoutingModule } from '../../app.routing.module';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book.component';
import { AppComponent } from '../../app.component';
import { HomeModule } from '../home.module';
import { BookService } from './book.service';
import { HttpService } from '../../shared/services/http.service';
import { BookResolver } from './book.resolver';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule
    ],
    declarations: [
        BookComponent,
        BookCreateComponent,
        BookListComponent
    ],
    exports: [
    ],
    providers: [
        BookService,
        HttpService,
        BookResolver
    ],
    bootstrap: [AppComponent]
})

export class BookModule { }
