import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { of } from 'rxjs';
import { BikeIndexService } from '../services/bike-index.service';

const mockBikeIndexService = {
    getBikesByCity: jasmine.createSpy().and.returnValue(of({ bikes: [] })),
    getBikeById: jasmine.createSpy().and.returnValue(of({})),
};

describe('DetailsComponent', () => {
    let component: DetailsComponent;
    let fixture: ComponentFixture<DetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DetailsComponent],
            providers: [
                { provide: BikeIndexService, useValue: mockBikeIndexService }
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(DetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
