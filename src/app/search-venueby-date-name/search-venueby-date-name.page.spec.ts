import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchVenuebyDateNamePage } from './search-venueby-date-name.page';

describe('SearchVenuebyDateNamePage', () => {
  let component: SearchVenuebyDateNamePage;
  let fixture: ComponentFixture<SearchVenuebyDateNamePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVenuebyDateNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchVenuebyDateNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
