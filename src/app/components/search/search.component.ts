import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BikeIndexService } from '../../services/bike-index.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { bikeItem, bikeList } from '../../models/bike.model';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-search',
    imports: [MatInputModule, MatAutocompleteModule, ReactiveFormsModule, CommonModule, MatSelectModule],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
    @Output() bikeList: EventEmitter<bikeItem[]> = new EventEmitter();
    private bike$ = inject(BikeIndexService);
    private fb = inject(FormBuilder);

    public searchCtrl = this.fb.group({
        city: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
        page: new FormControl(1, {nonNullable: true, validators: [Validators.required]}),
        per_page: new FormControl(6, {nonNullable: true, validators: [Validators.required]}),
    });

    public cities = ['Amsterdam', 'Eindhoven', 'Lelystad', 'Groningen', 'São Paulo']
    public filteredOptions!: Observable<string[]>;
    public pages = [6, 12, 18, 24, 30];

    ngOnInit(): void {
        this.filteredOptions = this.searchCtrl.controls.city.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
        );
    }

    onSubmit($event: SubmitEvent) {
        $event.preventDefault();
    }

    getBikes() {
        if (this.searchCtrl.valid) {
            this.bike$.getBikesByCity(
                this.searchCtrl.controls.city.value,
                this.searchCtrl.controls.page.value,
                this.searchCtrl.controls.per_page.value
            ).subscribe((data: bikeList) => {
                this.bikeList.emit(data.bikes);
            })
        }
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.cities.filter(option => option.toLowerCase().includes(filterValue));
    }
}
