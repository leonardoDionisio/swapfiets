import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { SearchComponent } from '../components/search/search.component';
import { BikeItemComponent } from '../components/bike-item/bike-item.component';
import { MatIconModule } from '@angular/material/icon';
import { ContentPlaceholderComponent } from '../components/content-placeholder/content-placeholder.component';

import { LoadingService } from '../services/loading.service';
import { bikeItem } from '../models/bike.model';
import { BikeIndexService } from '../services/bike-index.service';

const mockBikeIndexService = {
    getBikesByCity: jasmine.createSpy().and.returnValue(of({ bikes: [] })),
    getBikeById: jasmine.createSpy().and.returnValue(of({})),
};

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    const mockLoadingService = {
        loadingState: of(false),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [
            HomeComponent, // standalone component
            SearchComponent,
            BikeItemComponent,
            MatIconModule,
            ContentPlaceholderComponent,
        ],
        providers: [
            provideAnimations(),
            { provide: BikeIndexService, useValue: mockBikeIndexService },
            { provide: LoadingService, useValue: mockLoadingService },
        ],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should set isFetching to false when loading state is false', () => {
        expect(component.isFetching).toBeFalse();
    });

    it('should load bike list and detect empty result', () => {
        const bikes: bikeItem[] = [];
        component.loadBikeList(bikes);
        expect(component.bikes).toEqual([]);
        expect(component.isResultEmpty).toBeTrue();
    });
});
