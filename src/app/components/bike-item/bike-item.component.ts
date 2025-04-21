import { Component, Input, OnChanges } from '@angular/core';
import { bikeItem } from '../../models/bike.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bike-item',
    imports: [MatIconModule, RouterModule, CommonModule],
    templateUrl: './bike-item.component.html',
    styleUrl: './bike-item.component.scss'
})
export class BikeItemComponent  implements OnChanges {
    @Input() bike!: bikeItem;
    public reportedDate!: number;

    ngOnChanges(): void {
        if (this.bike.date_stolen) {
            this.reportedDate = this.bike.date_stolen;
        }
    }
}
