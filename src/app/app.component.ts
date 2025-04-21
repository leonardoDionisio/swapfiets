import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingService } from './services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        MatProgressBarModule,
        CommonModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    private loading$ = inject(LoadingService);
    public isLoading: Observable<boolean> = new BehaviorSubject<boolean>(false);

    ngOnInit(): void {
        this.isLoading = this.loading$.loadingState.pipe(delay(0));
    }
}
