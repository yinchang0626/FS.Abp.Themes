import { NgModule, ModuleWithProviders, InjectionToken, APP_INITIALIZER, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CoreModule as AbpCoreModule, noop } from '@abp/ng.core';

export const themesRoutes: Route[] = [];
import { NgxsModule } from '@ngxs/store';
import { RouterState } from './states/router.state';
import { CoreConfigService } from './services/core-config.service';
import { PageBarComponent } from './components/page-bar.component';

export interface CoreOptions {
  showDev: boolean;
  layouts: Type<any>[];
}

export function coreOptionsFactory(options: CoreOptions) {
  return {
    showDev: true,
    ...options,
  };
}

export const CORE_OPTIONS = new InjectionToken('CoreOptions');

@NgModule({
  declarations:[
    PageBarComponent
  ],
  imports: [
    CommonModule,
    AbpCoreModule,
    RouterModule,

    NgxsModule.forFeature([RouterState])
  ],
  exports:[
    AbpCoreModule,
    PageBarComponent
  ]
})
export class CoreModule {
  static forRoot(options:CoreOptions): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: CORE_OPTIONS, useValue: options },
        {
          provide: 'CoreOptions',
          useFactory: coreOptionsFactory,
          deps: [CORE_OPTIONS],
        },
        { provide: APP_INITIALIZER, deps: [CoreConfigService], useFactory: noop, multi: true }
      ],
    };
  }
}
