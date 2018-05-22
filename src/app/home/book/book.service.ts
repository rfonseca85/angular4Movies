import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Book } from '../shared/models/book.model';
import { HttpService } from '../../shared/services/http.service';
import { EndpointType } from '../../shared/enums/endpoint-type.enum';

@Injectable()
export class BookService {

    constructor
    (
        private httpService: HttpService
    ) { }

    // getBooks() {
    //     return this.http.get(this.url + '/books');
    // }

    getBooks(): Observable<Array<Book>>
    {
        return this.httpService.get("books", EndpointType.LOCAL);
    }

    saveBook(book: Book): Observable<any>
    {
        return this.httpService.post("book", book, EndpointType.LOCAL);
    }

    // getServices(): Observable<Array<Service>>
    // {
    //     return this.httpService.get("services", EndpointType.ADMIN);
    // }

    // getService(serviceId: string): Observable<any>
    // {
    //     return this.httpService.get(`services/${serviceId}`, EndpointType.ADMIN);
    // }

    // saveService(service: Service): Observable<any>
    // {
    //     return this.httpService.post("services", service, EndpointType.ADMIN);
    // }


}

