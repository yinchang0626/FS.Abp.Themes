import { AddRoute, ABP, addAbpRoutes, eLayoutType, GetAppConfiguration, PatchRouteByName, ConfigStateService, ConfigState } from '@abp/ng.core';
import { Injectable, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { CodesTreeService } from '@fs/coding-management/core';
import { timeInterval, tap, map, first } from 'rxjs/operators';

//todo 改rxjs對應取得config後的事件
@Injectable({
  providedIn: 'root'
})
export class CoreConfigService {
  constructor(
    @Optional() @Inject('OTA_OPTIONS') private options: any
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
        children:[]
      }
    ]);
  }
}
