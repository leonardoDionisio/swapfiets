import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeMapComponent } from './bike-map.component';
import { GoogleMapsModule } from '@angular/google-maps';

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

describe('BikeMapComponent', () => {
    let component: BikeMapComponent;
    let fixture: ComponentFixture<BikeMapComponent>;

    const mockCenter = {
        lat: 37.7749,
        lng: -122.4194
    };

    beforeEach(async () => {
        window.google = googleMapsMock;
        await TestBed.configureTestingModule({
            imports: [GoogleMapsModule, BikeMapComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(BikeMapComponent);
        component = fixture.componentInstance;
        component.center = mockCenter;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should receive the center input correctly', () => {
        expect(component.center).toEqual(mockCenter);
    });

    it('should set theftRadiusArea on map initialization', () => {
        const fakeMapInstance = {} as google.maps.Map;
        component.onMapInitialized(fakeMapInstance);

        expect(component.map).toBe(fakeMapInstance);
        expect(component.theftRadiusArea).toEqual({
            radius: 500,
            coord: mockCenter
        });
    });
});
