import { NgModule, ModuleWithProviders, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CoreModule as AbpCoreModule,noop } from '@abp/ng.core';

export const themesRoutes: Route[] = [];
import { NgxsModule } from '@ngxs/store';
import { RouterState } from './states/router.state';
import { CoreOptionsService } from './services/core-options.service';

export interface CoreOptions {
  showDev: boolean;
}

export function coreOptionsFactory(options: CoreOptions) {
  return {
    showDev: true,
    ...options,
  };
}

export const CoreOptions = new InjectionToken('CoreOptions');

@NgModule({
  imports: [
    CommonModule, 
    AbpCoreModule, 
    RouterModule,
    
    NgxsModule.forFeature([ RouterState ])
  ]
})
export class CoreModule { 
  static forRoot(options = {} as CoreOptions): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: CoreOptions, useValue: options },
        {
          provide: 'CoreOptions',
          useFactory: coreOptionsFactory,
          deps: [CoreOptions],
        },
        { provide: APP_INITIALIZER, deps: [CoreOptionsService], useFactory: noop, multi: true }
      ],
    };
  }  
}
