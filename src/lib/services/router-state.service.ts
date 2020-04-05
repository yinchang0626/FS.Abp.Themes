import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { RouterState } from '@ngxs/router-plugin';
import { UpdateProfile } from '../actions/router.actions';

@Injectable({
  providedIn: 'root'
})
export class RouterStateService {
  constructor(private store: Store) { }

  getParamKeyValue(paramKey: string) {    
    let router = this.store.selectSnapshot(RouterState.state);
    let targetRouter = this.searchTree(router.root, paramKey);
    if (targetRouter) return targetRouter.params[paramKey];
    return null
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
    return this.store.dispatch(new UpdateProfile(...args));
  }
}
