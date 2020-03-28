import { Select, Action, Selector, State, StateContext, createSelector } from '@ngxs/store';
import { RouterState } from '@ngxs/router-plugin';
import snq from 'snq';
import { Page } from '../models/page';
import { Injectable } from '@angular/core';
import { SetPageConfig, PatchPageConfigByName } from '../actions/page.actions'
import { ConfigState, ABP, GetAppConfiguration, ConfigStateService, Config, LocalizationPipe } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { Store, Actions, ofActionSuccessful } from '@ngxs/store';
import { MSProduct,MSMenu } from '@fs/ng-alain-ms/basic'
import { RouterStateSnapshot } from '@angular/router';
import * as _ from 'lodash';
@State<Page.State>({
  name: 'PageState',
  defaults: {
    pageConfig: {  }
  } as Page.State,
})
@Injectable()
export class PageState {
  @Selector()
  static getAll(state: Page.State) {
    return state;
  }
  static getOne(key: string) {
    const selector = createSelector([PageState], (state: Page.State) => {
      return state[key];
    });
    return selector;
  }
  static getDeep(keys: string[] | string) {
    if (typeof keys === 'string') {
      keys = keys.split('.');
    }

    if (!Array.isArray(keys)) {
      throw new Error('The argument must be a dot string or an string array.');
    }

    const selector = createSelector([ConfigState], (state: Config.State) => {
      return (keys as string[]).reduce((acc, val) => {
        if (acc) {
          return acc[val];
        }

        return undefined;
      }, state);
    });

    return selector;
  }
  constructor(
    private localizationPipe: LocalizationPipe,
    private store: Store,
    private configStateService: ConfigStateService
  ) {
  }

  

 




  private isGrantedPolicy(requiredPolicy: string) {
    if (!!requiredPolicy) {
      return this.configStateService.getGrantedPolicy(requiredPolicy);
    }
    return true;
  }





@Action(PatchPageConfigByName)
patchPageConfigByName(
  { patchState,getState }: StateContext<Page.State>, 
  { name,newValue }: PatchPageConfigByName) {    
    let pageConfig: Page.PageConfig = getState().pageConfig;    
    pageConfig[name] = newValue;      
    return patchState({
      pageConfig
    });
}
 

  @Action(SetPageConfig)
  setPageConfig({ patchState }: StateContext<Page.State>, { pageConfig }: SetPageConfig) {
    return patchState({
      pageConfig
    });
  }

}
