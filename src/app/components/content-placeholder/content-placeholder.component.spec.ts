import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentPlaceholderComponent } from './content-placeholder.component';

describe('ContentPlaceholderComponent', () => {
    let component: ContentPlaceholderComponent;
    let fixture: ComponentFixture<ContentPlaceholderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContentPlaceholderComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ContentPlaceholderComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        component.type = 'bike-card';
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should default to 1 item when count is not set', () => {
        component.type = 'details';
        fixture.detectChanges();
        component.ngOnInit();
        expect(component.countArray.length).toBe(1);
    });

    it('should create an array of the given count', () => {
        component.type = 'bike-card';
        component.count = 5;
        component.ngOnInit();
        expect(component.countArray.length).toBe(5);
    });
});
