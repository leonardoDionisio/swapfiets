import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeItemComponent } from './bike-item.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { bikeItem } from '../../models/bike.model';
import { of } from 'rxjs';

const mockActivatedRoute = {
    snapshot: { paramMap: { get: (key: string) => 'mockedValue' } },
    queryParams: of({}),
    params: of({}),
};

describe('BikeItemComponent', () => {
    let component: BikeItemComponent;
    let fixture: ComponentFixture<BikeItemComponent>;

    const mockBike: bikeItem = {
        id: 1,
        title: 'City Cruiser',
        thumb: 'thumb.jpg',
        date_stolen: 1672527600,
        stolen_location: 'San Francisco',
        cycle_type_slug: null,
        description: null,
        external_id: null,
        frame_colors: null,
        frame_model: null,
        is_stock_img: null,
        large_img: null,
        location_found: null,
        manufacturer_name: null,
        propulsion_type_slug: null,
        registry_name: null,
        registry_url: null,
        serial: null,
        status: null,
        stolen: null,
        stolen_coordinates: null,
        url: null,
        year: null
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MatIconModule, RouterModule, CommonModule, BikeItemComponent],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(BikeItemComponent);
        component = fixture.componentInstance;
        component.bike = mockBike;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});
