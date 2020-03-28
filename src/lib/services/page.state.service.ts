import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { PageState } from '../states/page.state';
import { SetPageConfig,PatchPageConfigByName } from '../actions/page.actions';

@Injectable({
  providedIn: 'root',
})
export class PageStateService {
  constructor(private store: Store) { }


  getAll() {
    return this.store.selectSnapshot(PageState.getAll);
  }

  getOne(...args: Parameters<typeof PageState.getOne>) {
    return this.store.selectSnapshot(PageState.getOne(...args));
  }
 
  // update SetPageConfig
  dispatchSetPageConfig(...args: ConstructorParameters<typeof SetPageConfig>) {
    return this.store.dispatch(new SetPageConfig(...args));
  }


  dispatchSetPageConfigByName(...args: ConstructorParameters<typeof PatchPageConfigByName>){
    return this.store.dispatch(new PatchPageConfigByName(...args));
  }


}