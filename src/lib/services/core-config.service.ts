import { AddRoute, ABP, addAbpRoutes, eLayoutType, GetAppConfiguration, PatchRouteByName, ConfigStateService, ConfigState } from '@abp/ng.core';
import { Injectable, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { timeInterval, tap, map, first } from 'rxjs/operators';
import { AddReplaceableComponent } from '@abp/ng.core';

//todo 改rxjs對應取得config後的事件
@Injectable({
  providedIn: 'root'
})
export class CoreConfigService {
  constructor(
    private actions$: Actions,
    private store: Store,
    @Optional() @Inject('CoreOptions') private options: any
  ) {
    let showDev = !options || options.showDev;

    addAbpRoutes([
      {
        name: 'Development',
        path: '',
        order: 0,
        wrapper: true,
        iconClass: 'fa fa-wrench',
        invisible: !showDev,
        children: []
      }
    ]);

    this.actions$
      .pipe(ofActionDispatched(GetAppConfiguration))
      .pipe(first())
      .subscribe(()=>this.SetLayout());    

  }
  SetLayout(){
    let LayoutDefaultComponent = this.options.layouts.find(x => x.type == eLayoutType.application);
    let LayoutPassportComponent = this.options.layouts.find(x => x.type == eLayoutType.account);
    let LayoutFullScreenComponent = this.options.layouts.find(x => x.type == eLayoutType.empty);
    if (!!LayoutDefaultComponent) {
      this.store.dispatch(
        new AddReplaceableComponent({
          component: LayoutDefaultComponent,
          key: 'Theme.ApplicationLayoutComponent',
        })
      );
    }
    if (!!LayoutPassportComponent) {
      this.store.dispatch(
        new AddReplaceableComponent({
          component: LayoutPassportComponent,
          key: 'Theme.AccountLayoutComponent',
        })
      );
    }
    if (!!LayoutFullScreenComponent) {
      this.store.dispatch(
        new AddReplaceableComponent({
          component: LayoutFullScreenComponent,
          key: 'Theme.EmptyLayoutComponent',
        })
      );
    }    
  }
}
