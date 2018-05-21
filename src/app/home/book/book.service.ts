import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../shared/models/book.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {

    url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    // getAuthorList(): Observable<any> {
    //     return this.http.get(this.url + "/author")
    //        );
    // }

    getBooks() {
        return this.http.get(this.url + '/books');
    }

    createBook(book: Book) {
        let body = JSON.stringify(book);
        return this.http.post('/book/', body, httpOptions);
    }



}