import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { CreateComponent, DashboardComponent } from '@prices/pages';
import { MainStructureComponent } from '@shared/components';

const routes: Routes = [
  {
    path: '',
    component: MainStructureComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'criar',
        component: CreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricesRoutingModule {}
