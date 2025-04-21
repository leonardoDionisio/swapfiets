import { Component, inject, OnInit } from '@angular/core';
import { SearchComponent } from '../components/search/search.component';
import { bikeItem } from '../models/bike.model';
import { BikeItemComponent } from '../components/bike-item/bike-item.component';
import { MatIconModule } from '@angular/material/icon';
import { ContentPlaceholderComponent } from '../components/content-placeholder/content-placeholder.component';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Component({
    selector: 'app-home',
    imports: [SearchComponent, BikeItemComponent, MatIconModule, ContentPlaceholderComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    public bikes!: bikeItem[];
    public isResultEmpty = false;
    private loading$ = inject(LoadingService);
    public isFetching = false;

    ngOnInit(): void {
        this.loading$.loadingState.pipe(delay(0)).subscribe(loading => {
            this.isFetching = loading;
        })
    }

    loadBikeList(bikeList: bikeItem[]) {
        this.bikes = bikeList;
        this.isResultEmpty = bikeList.length === 0;
    }
}

