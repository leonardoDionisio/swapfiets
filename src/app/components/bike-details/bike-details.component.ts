import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { bikeDetailsItens } from '../../models/bike.model';
import { CommonModule } from '@angular/common';
import { BikeMapComponent } from '../bike-map/bike-map.component';

@Component({
  selector: 'app-bike-details',
  imports: [ CommonModule, BikeMapComponent ],
  templateUrl: './bike-details.component.html',
  styleUrl: './bike-details.component.scss'
})
export class BikeDetailsComponent implements OnInit {
    @Input({required: true}) bike!: bikeDetailsItens;
    public reportedDate = '';
    public mainImage = '';
    public selectedImageIndex = 0;
    public center!: google.maps.LatLngLiteral

    ngOnInit(): void {
        const image = this.bike.large_img ? this.bike.large_img : this.bike.thumb;
        if (image) {
            this.setMainImage(image, 0);
        }

        if (this.bike.stolen_record) {
            this.center = {
                lat: this.bike.stolen_record?.latitude,
                lng: this.bike.stolen_record?.longitude
            }
        }
    }

    setMainImage(image: string, index: number) {
        this.mainImage = image;
        this.selectedImageIndex = index;
    }
}
