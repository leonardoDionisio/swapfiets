import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const mockActivatedRoute = {
    snapshot: { paramMap: { get: (key: string) => 'mockedValue' } },
    queryParams: of({}),
    params: of({}),
};

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderComponent],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
