import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABCardsComponent } from './ab-cards/ab-cards.component';

const routes: Routes = [
  {
    path: '',
    component: ABCardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
