import { Injectable, Optional, Inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { RouterState } from '@ngxs/router-plugin';
import { UpdateProfile } from '../actions/router.actions';
import { RoutesRecognized, Router, RouterStateSnapshot } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CoreConfigService } from './core-config.service';
import { AddReplaceableComponent, eLayoutType, ConfigStateService } from '@abp/ng.core';
import { Router as FSRouter } from '../models/router'

@Injectable({
  providedIn: 'root'
})
export class RouterStateService {
  constructor(
    private store: Store,
    private configStateService: ConfigStateService,
    @Optional() @Inject('CoreOptions') private options: any
  ) { }
  getParamKeyValue(paramKey: string, router: RouterStateSnapshot = null) {
    if (!router)
      router = this.store.selectSnapshot(RouterState.state);
    let targetRouter = this.searchTree(router.root, paramKey);
    if (targetRouter) return targetRouter.params[paramKey];
    return null;
  }
  private searchTree(element, property) {
    if (property in element.params) {
      return element;
    } else if (element.children != null) {
      var i;
      var result = null;
      for (i = 0; result == null && i < element.children.length; i++) {
        result = this.searchTree(element.children[i], property);
      }
      return result;
    }
    return null;
  }

  dispatchUpdateProfile(...args: ConstructorParameters<typeof UpdateProfile>) {
    let result=this.store.dispatch(new UpdateProfile(...args));
    return result;
  }
}
