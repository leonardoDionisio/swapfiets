import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { of } from 'rxjs';
import { BikeIndexService } from '../../services/bike-index.service';

const mockBikeIndexService = {
    getBikesByCity: jasmine.createSpy().and.returnValue(of({ bikes: [] })),
    getBikeById: jasmine.createSpy().and.returnValue(of({})),
};

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SearchComponent],
            providers: [
                { provide: BikeIndexService, useValue: mockBikeIndexService },
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
