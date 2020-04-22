import { Select, Action, Selector, State, StateContext, createSelector } from '@ngxs/store';
import { Router } from '../models/router';
import { Injectable } from '@angular/core';
import { UpdateProfile } from '../actions/router.actions'
import { ConfigState, ConfigStateService, Config, LocalizationPipe } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import * as _ from 'lodash';
@State<Router.State>({
  name: 'RouterState',
  defaults: {
    profile: {

    }
  } as Router.State,
})
@Injectable()
export class RouterState {
  @Selector()
  static getProfile({ profile }: Router.State): Router.Profile {
    return profile;
  }



  constructor(
    private localizationPipe: LocalizationPipe,
    private store: Store,
    private configStateService: ConfigStateService
  ) {
  }

  @Action(UpdateProfile)
  updateProfile({ patchState, getState }: StateContext<Router.State>, { payload }: UpdateProfile) {
    let oldValue: Router.Profile = getState().profile;
    let profile = { ...oldValue, ...payload };
    return patchState({
      profile
    });
  }

}
