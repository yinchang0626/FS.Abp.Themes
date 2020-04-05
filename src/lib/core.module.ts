import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CoreModule as AbpCoreModule } from '@abp/ng.core';

export const themesRoutes: Route[] = [];
import { NgxsModule } from '@ngxs/store';
import { RouterState } from './states/router.state';
@NgModule({
  imports: [
    CommonModule, 
    AbpCoreModule, 
    RouterModule,
    
    NgxsModule.forFeature([ RouterState ])
  ]
})
export class CoreModule { }
