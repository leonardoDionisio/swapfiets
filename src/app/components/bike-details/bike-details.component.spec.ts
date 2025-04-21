import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeDetailsComponent } from './bike-details.component';
import { CommonModule } from '@angular/common';
import { bikeDetailsItens } from '../../models/bike.model';
import { BikeMapComponent } from '../bike-map/bike-map.component';

const googleMapsMock: any = {
    maps: {
      Map: class MockMap {
        constructor() {}
      },
      Marker: class MockMarker {
        constructor() {}
      },
      LatLng: class MockLatLng {
        constructor(lat: number, lng: number) {}
      },
    },
};

declare global {
    interface Window {
      google: typeof googleMapsMock;
    }
}

describe('BikeDetailsComponent', () => {
    let component: BikeDetailsComponent;
    let fixture: ComponentFixture<BikeDetailsComponent>;

    const mockBike: bikeDetailsItens = {
        id: 1,
        title: 'Test Bike',
        thumb: 'thumb.jpg',
        large_img: 'large.jpg',
        description: 'Test description',
        date_stolen: 1234567890,
        stolen_record: {
            id: 4,
            date_stolen: 1741352400,
            latitude: 40.7128,
            longitude: -74.0060,
            location: 'Amsterdam',
            theft_description: "Description test",
            locking_description: "",
            lock_defeat_description: "",
            police_report_number: "Report number",
            police_report_department: "Amsterdam",
            created_at: 1741353824,
            create_open311: false,
        },
        registration_created_at: null,
        registration_updated_at: null,
        api_url: null,
        manufacturer_id: null,
        paint_description: null,
        name: null,
        frame_size: null,
        rear_tire_narrow: null,
        front_tire_narrow: null,
        type_of_cycle: null,
        test_bike: null,
        rear_wheel_size_iso_bsd: null,
        front_wheel_size_iso_bsd: null,
        handlebar_type_slug: null,
        frame_material_slug: null,
        front_gear_type_slug: null,
        rear_gear_type_slug: null,
        extra_registration_number: null,
        additional_registration: null,
        public_images: [],
        components: []
    };

    beforeEach(async () => {
        window.google = googleMapsMock;

        await TestBed.configureTestingModule({
            imports: [CommonModule, BikeDetailsComponent, BikeMapComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(BikeDetailsComponent);
        component = fixture.componentInstance;
        component.bike = mockBike;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should set map center from stolen_record location', () => {
        expect(component.center).toEqual({
            lat: mockBike.stolen_record!.latitude,
            lng: mockBike.stolen_record!.longitude
        });
    });

    it('should change the main image when setMainImage is called', () => {
        component.setMainImage('new-image.jpg', 2);
        expect(component.mainImage).toBe('new-image.jpg');
        expect(component.selectedImageIndex).toBe(2);
    });
});
