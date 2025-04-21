import { Component, Input, OnInit } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";

@Component({
    selector: 'app-bike-map',
    imports: [GoogleMapsModule],
    templateUrl: './bike-map.component.html',
    styleUrl: './bike-map.component.scss'
})
export class BikeMapComponent {
    @Input({required: true}) center!: google.maps.LatLngLiteral;

    public map!: google.maps.Map;
    public zoom = 15;
    public options: google.maps.MapOptions = {
        mapTypeId: 'roadmap',
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: false,
        minZoom: 3,
    };

    public circleCenter!: google.maps.LatLngLiteral;
    public circleOptions: google.maps.CircleOptions = {
        draggable: false,
        editable: false,
        fillColor: 'red',
        strokeColor: 'red',
        strokeOpacity: 0.4
    };

    public theftRadiusArea!: {
        radius: number,
        coord: google.maps.LatLngLiteral
    }

    onMapInitialized(mapInstance: google.maps.Map) {
        this.map = mapInstance;
        this.theftRadiusArea = {radius: 500, coord: this.center}
    }
}
