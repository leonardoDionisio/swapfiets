import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoadingService } from './services/loading.service';
import { BehaviorSubject, of } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

const mockActivatedRoute = {
    snapshot: { paramMap: { get: (key: string) => 'mockedValue' } },
    queryParams: of({}),
    params: of({}),
};

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let loading$: LoadingService;
    let loadingState: BehaviorSubject<boolean>;

    beforeEach(async () => {
        loadingState = new BehaviorSubject<boolean>(false);

        await TestBed.configureTestingModule({
            imports: [MatProgressBarModule, CommonModule, RouterOutlet, AppComponent, HeaderComponent],
            providers: [
                {
                    provide: LoadingService,
                    useValue: { loadingState: loadingState.asObservable()  }
                },
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        loading$ = TestBed.inject(LoadingService);

        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should not show progress bar when not loading', () => {
        loadingState.next(false);
        fixture.detectChanges();

        const progressBar = fixture.debugElement.query(By.css('mat-progress-bar'));
        expect(progressBar).toBeFalsy();
    });

    it('should render header component', () => {
        const headerElement = fixture.debugElement.query(By.directive(HeaderComponent));
        expect(headerElement).toBeTruthy();
    });

});
