import { Component, inject, Input, OnInit } from '@angular/core';
import { BikeIndexService } from '../services/bike-index.service';
import { bikeDetailsItens } from '../models/bike.model';
import { BikeDetailsComponent } from '../components/bike-details/bike-details.component';
import { CommonModule } from '@angular/common';
import { ContentPlaceholderComponent } from '../components/content-placeholder/content-placeholder.component';

@Component({
  selector: 'app-details',
  imports: [BikeDetailsComponent, CommonModule, ContentPlaceholderComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
    @Input() id!: number;
    private bike$ = inject(BikeIndexService);
    public bikeDetail!: bikeDetailsItens;
    public reportedDate!: number;


    ngOnInit(): void {
        this.bike$.getBikeById(this.id).subscribe(bikeDetails => {
            this.bikeDetail = bikeDetails.bike;

            if (this.bikeDetail.date_stolen) {
                this.reportedDate = this.bikeDetail.date_stolen;
            }
        });
    }
}
