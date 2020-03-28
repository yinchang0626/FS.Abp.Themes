import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CoreModule as AbpCoreModule } from '@abp/ng.core';

export const themesRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, AbpCoreModule, RouterModule]
})
export class CoreModule { }
