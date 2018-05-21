import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Observable } from 'rxjs/Rx';
import { Book } from '../../shared/models/book.model';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    public books;

    constructor(private bookService: BookService) { }

    ngOnInit() {
       this.getBooks();
    }


    getBooks() {
        this.bookService.getBooks().subscribe(
            data => {
                this.books = data
            }
        );
    }


}
