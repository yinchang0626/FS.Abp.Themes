import { Router } from '../models/router';

export class UpdateProfile {
  static readonly type = '[Router] UpdateProfile';
  constructor(public payload: Router.Profile) {}
}
