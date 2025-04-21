import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-content-placeholder',
    imports: [],
    templateUrl: './content-placeholder.component.html',
    styleUrl: './content-placeholder.component.scss'
})
export class ContentPlaceholderComponent implements OnInit {
    @Input({required: true}) type!: 'bike-card' | 'details';
    @Input() count = 1;
    public countArray = [];

    ngOnInit(): void {
        this.countArray = Array.from({ length: this.count });
    }
}
