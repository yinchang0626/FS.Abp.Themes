import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CoreModule as AbpCoreModule } from '@abp/ng.core';

export const themesRoutes: Route[] = [];
import { NgxsModule } from '@ngxs/store';
import { PageState } from './states/page.state';
@NgModule({
  imports: [
    CommonModule, 
    AbpCoreModule, 
    RouterModule,
    
    NgxsModule.forFeature([ PageState ])
  ]
})
export class CoreModule { }
