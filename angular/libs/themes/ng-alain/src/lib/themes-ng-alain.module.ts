import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { SharedModule } from './shared/shared.module';
import { SampleModule } from './sample/sample.module';
import { Store } from '@ngxs/store';
import { AddRoute,ABP } from '@abp/ng.core';
import { ThemesModule } from '@fs/themes';
import { ThemesNgAlainRoutingModule } from './themes-ng-alain-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ThemesModule,
    ThemesNgAlainRoutingModule,
    SampleModule

  ]
})
export class ThemesNgAlainModule {
}
