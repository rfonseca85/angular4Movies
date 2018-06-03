import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { BookService } from './book.service';

@Injectable()
export class BookResolver implements Resolve<Observable<any>> {
  
  constructor(private bookService: BookService,) {}

  resolve() {
    return this.bookService.getBooks();
  }
}