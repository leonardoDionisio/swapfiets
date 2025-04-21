import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bikeDetails, bikeList } from '../models/bike.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BikeIndexService {
    private http = inject(HttpClient);
    private readonly API_URL = environment.bikeIndexapiUrl;

    getBikesByCity(location: string, page: number, per_page: number): Observable<bikeList> {
        const params = {
            page: page,
            per_page: per_page,
            location: location,
            distance: 10,
            stolenness: 'proximity',
        };

        return this.http.get<bikeList>(`${this.API_URL}/search`, { params });
    }

    getBikeById(id: number): Observable<bikeDetails> {
        return this.http.get<bikeDetails>(`${this.API_URL}/bikes/${id}`);
    }
}
