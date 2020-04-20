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
  }
  //https://github.com/abpframework/abp/issues/3379
  dispatchDeeply(route: ABP.FullRoute) {
    this.store.dispatch(new PatchRouteByName(
      route.name,
      route
    )).subscribe(x => {
      if (hasChildren(route)) {
        route.children.forEach(innerRoute => {
          if (hasChildren(innerRoute)) {
            this.dispatchDeeply(innerRoute);
          }
        })
      }
    });
    function hasChildren(route: ABP.FullRoute) {
      return !!route.children && route.children.length > 0;

    }
  }


}
