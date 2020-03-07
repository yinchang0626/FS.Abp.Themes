import { noop } from '@abp/ng.core';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ThemesConfigService } from './services/themes-config.service';

@NgModule({
  providers: [{ provide: APP_INITIALIZER, deps: [ThemesConfigService], useFactory: noop, multi: true }],
})
export class ThemesConfigModule {}
