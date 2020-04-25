import { createServiceFactory, SpectatorService, SpyObject } from '@ngneat/spectator/jest';
import { InjectionToken } from '@angular/core';
import { RouterStateService } from '../services/router-state.service';
import { Store } from '@ngxs/store';
import * as RouteActions from '../actions/router.actions';



describe('RouterStateService', () => {
  let service: RouterStateService;
  let spectator: SpectatorService<RouterStateService>;
  let store: SpyObject<Store>;
 const CORE_OPTIONS = new InjectionToken('CoreOptions');
  const createService = createServiceFactory({ service: RouterStateService,providers:[
    { provide: CORE_OPTIONS, useValue: {} }
  ], mocks: [Store] });
  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    store = spectator.get(Store);
  });
  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
