import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entry, Bio } from '../interfaces/portfolio.interfaces';
import { Observable, catchError } from 'rxjs';


@Injectable({providedIn: 'root'})
export class PortfolioService {
    private baseUrl:string = 'https://dev.moradev.dev/portfolio/api';
    constructor(private httpClientService: HttpClient) { 

    }

    getBioEntries():Observable<Entry<Bio>[]>{
        return this.httpClientService.get<Entry<Bio>[]>(
            `${this.baseUrl}/bio`
        ).pipe(
            catchError(e => [])
        );
    }
}