import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpEvent } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EndpointType } from '../enums/endpoint-type.enum';

@Injectable()
export class HttpService
{
    private readonly BASE_URI_ENDPOINT: any =
    {
        "LOCAL": environment.localUrl,
        "REAL": environment.localUrl
    };
    
    constructor (private http: HttpClient) { }

    getUrl(endpointExtension: string, uriType?: EndpointType): string
    {
        uriType ? null : uriType = EndpointType.REAL;

        const baseEndpoint = this.BASE_URI_ENDPOINT[EndpointType[uriType]];

        return `${baseEndpoint}/${endpointExtension}`;
    }

    getOptions(options: any): any
    {
        let headers: HttpHeaders = new HttpHeaders({
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Expires": "Sat, 01 Jan 2000 00:00:00 GMT"
        });

        let op = { headers: headers };

        if (options)
            return Object.assign(op, options);

        return op;
    }

    get<T>(endpoint: string, uriType?: EndpointType, options?: any): Observable<any>
    {
        let url = this.getUrl(endpoint,uriType);

        let op = this.getOptions(options);

        return this.getResponse(this.http.get<T>(url, op));
    }

    post<T>(endpoint: string, body: any, uriType?: EndpointType, options?: any): Observable<any>
    {
        let url = this.getUrl(endpoint,uriType);

        let op = this.getOptions(options);

        return this.getResponse(this.http.post<T>(url, body, op));
    }

    put<T>(endpoint: string, body: any, uriType?: EndpointType, options?: any): Observable<any>
    {
        let url = this.getUrl(endpoint,uriType);

        let op = this.getOptions(options);

        return this.getResponse(this.http.put<T>(url, body, op))
    }

    delete<T>(endpoint: string, body: any, uriType?: EndpointType, options?: any): Observable<any>
    {
        let url = this.getUrl(endpoint,uriType);

        let op = this.getOptions(options);

        op.body = body;

        return this.getResponse(this.http.request('delete', url, op));
    }

    private getResponse(observable: Observable<any>): Observable<any>
    {
        return observable.map(response => {
            return response["details"] ? response["details"] : response;
        });
    }
}
