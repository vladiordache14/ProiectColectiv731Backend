import {Component, Input, OnInit} from '@angular/core';
import {Advert} from "../advert";
import {AdvertService} from "../service/advert.service";

@Component({
  selector: 'app-adverts',
  providers: [AdvertService],
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit{
  adverts: Advert[] = [];
  showConfirmationDialog = false;
  advertToDeactivate: Advert | null = null;

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void {
    this.loadAdverts();
  }

  loadAdverts(): void {
    this.advertService.getActiveAdverts().subscribe(adverts => {
      for (let advert of adverts) {
        advert.selectedIndex = 0;
      }
      this.adverts = adverts;
    });
  }

  selectImage(advert: Advert, index: number): void {
    advert.selectedIndex = index;
  }

  showConfirmation(advert: Advert): void {
    this.advertToDeactivate = advert;
    this.showConfirmationDialog = true;
  }

  onConfirmation(confirmed: boolean): void {
    this.showConfirmationDialog = false;

    if (confirmed && this.advertToDeactivate) {
      this.deactivateAdvert(this.advertToDeactivate);
    }

    this.advertToDeactivate = null;
  }

  deactivateAdvert(advert: Advert): void {
    this.advertService.deactivateAdvert(advert.advertId).subscribe(() => {
      console.log('Advert deactivated successfully.');

      this.loadAdverts();
    });
  }


  /*deactivateAdvert(advert: Advert): void {
    this.advertService.deactivateAdvert(advert.advertId).subscribe(() => {
      console.log('Advert deactivated successfully.');

      // Update local list to remove the deactivated advert
      this.adverts = this.adverts.filter(a => a.advertId !== advert.advertId);

      // Optionally, trigger a reload of active adverts
      this.loadAdverts();
    });
  }*/
}
