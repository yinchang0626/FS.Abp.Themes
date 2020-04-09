import { AddRoute, ABP, addAbpRoutes, eLayoutType, GetAppConfiguration, PatchRouteByName, ConfigStateService, ConfigState } from '@abp/ng.core';
import { Injectable, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { CodesTreeService } from '@fs/coding-management/core';
import { timeInterval, tap, map, first } from 'rxjs/operators';
import {AddReplaceableComponent} from '@abp/ng.core';

//todo 改rxjs對應取得config後的事件
@Injectable({
  providedIn: 'root'
})
export class CoreConfigService {
  constructor(
    private store:Store,
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
    console.log('yc',options);


    //if (options.layouts.length > 0) {

      // this.store.dispatch(
      //   new AddReplaceableComponent({
      //     component: LayoutDefaultComponent,
      //     key: 'Theme.ApplicationLayoutComponent',
      //   })
      // );
      // this.store.dispatch(
      //   new AddReplaceableComponent({
      //     component: LayoutPassportComponent,
      //     key: 'Theme.AccountLayoutComponent',
      //   })
      // );
      // this.store.dispatch(
      //   new AddReplaceableComponent({
      //     component: LayoutFullScreenComponent,
      //     key: 'Theme.EmptyLayoutComponent',
      //   })
      // );
    //}



  }
}
