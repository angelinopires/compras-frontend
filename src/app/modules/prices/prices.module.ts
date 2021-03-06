import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { CreateComponent, DashboardComponent } from '@prices/pages';

// MODULES
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { PipesModule } from '@pipes/pipes.module';
import { PricesRoutingModule } from './prices-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [CreateComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialUiModule,
    PipesModule,
    PricesRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class PricesModule {}

