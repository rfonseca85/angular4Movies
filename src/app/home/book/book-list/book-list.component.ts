import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Observable } from 'rxjs/Rx';
import { Book } from '../../shared/models/book.model';
import { HttpService } from '../../../shared/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    public books;

    constructor(//private bookService: BookService, 
        private httpService: HttpService,
        private route: ActivatedRoute
    ) { 

        //getting data from resolver
        this.books = this.route.snapshot.data.books;

    }

    ngOnInit() {
        //this.getBooks();
    }


    // getBooks() {
    //     this.bookService.getBooks().subscribe(
    //         response => {
    //             this.books = response;
    //         }
    //     );
    // }


}
