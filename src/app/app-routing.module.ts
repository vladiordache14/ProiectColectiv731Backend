import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RouterModule, Routes } from '@angular/router';
import { First_pageComponent } from './offers/components/first_page/first_page.component';
import { AuthGuard } from './authentication/guards/auth-guard';

const routes: Routes = [
  {
    path: 'first_page',
    loadChildren: () =>
      import('./offers/module/first_page.module').then(
        (m) => m.First_pageModule
      ),
  },
  {
    path: 'adverts',
    loadChildren: () =>
      import('./offers/module/adverts.module').then((m) => m.AdvertsModule), canActivate: [AuthGuard('adverts')]
  },
  // {
  //   path: '**',
  //   redirectTo: 'adverts',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
