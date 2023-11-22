import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AdvertService } from "../service/advert.service";
import { AdvertsComponent } from "../components/adverts.component";

@NgModule({
  declarations: [
    AdvertsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AdvertService
  ],
  exports: [
    AdvertsComponent
  ]
})
export class AdvertsModule { }
