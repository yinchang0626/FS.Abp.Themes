import { AddRoute, ABP, PatchRouteByName, ConfigStateService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, flatMap, mergeMap } from 'rxjs/operators';
import { Observable, of, forkJoin } from 'rxjs';

//todo 改rxjs對應取得config後的事件
@Injectable({
  providedIn: 'root'
})
export class CoreConfigService {
  constructor(
    private store: Store,
    private configStateService: ConfigStateService
  ) {
  }
  dispatchAddOrPatchRoute$(route: ABP.FullRoute) {
    if (!!this.configStateService.getRoute(null, route.name)) {
      return this.dispatchDeeply$(route);
    }
    return this.store.dispatch(new AddRoute(route))
      .pipe(
        mergeMap(() => {
          return this.dispatchDeeply$(route);
        })
      );


  }
  //todo remove change to dispatchDeeply$
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

  private dispatchDeeply$(route: ABP.FullRoute): Observable<any> {
    return this.store.dispatch(new PatchRouteByName(route.name, route)).pipe(
      map(r => {
        return {
          parent: route,
          children: route.children.filter(innerRoute => hasChildren(innerRoute))
        };
      }),
      flatMap((parentWithChildren: any) =>
        forkJoin([
          of(parentWithChildren.parent),
          ...parentWithChildren.children.map(c => this.dispatchDeeply$(c))
        ])
      )
    );
    function hasChildren(route: ABP.FullRoute) {
      return !!route.children && route.children.length > 0;

    }
  }


}
