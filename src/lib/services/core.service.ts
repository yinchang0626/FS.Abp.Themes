import { Injectable, Optional, Inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { RouterState } from '@ngxs/router-plugin';
import { UpdateProfile } from '../actions/router.actions';
import { RoutesRecognized, Router, RouterStateSnapshot } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CoreConfigService } from './core-config.service';
import { AddReplaceableComponent, eLayoutType, ConfigStateService } from '@abp/ng.core';
import { Router as FSRouter } from '../models/router'
import { RouterStateService } from './router-state.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(
    private store: Store,
    private configStateService: ConfigStateService,
    private routerStateService: RouterStateService,
    @Optional() @Inject('CoreOptions') private options: any
  ) { }
  onAppComponentOnInit(router: Router) {
    this.setLayout();
    this.setProfile(router);
  }
  setLayout() {
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
  setProfile(router: Router) {
    router.events
      .pipe(
        filter(event => event instanceof RoutesRecognized),
        map((e: RoutesRecognized) => {
          let routes = this.configStateService.getOne('routes');
          let processor: FSRouter.Processor = new FSRouter.Processor(routes, e.state);
          let profile = processor.currentProfileOfRoute;
          return profile;
        }),
        map(p => {
          return this.routerStateService.dispatchUpdateProfile(p);
        })
      ).subscribe();
  }
}
