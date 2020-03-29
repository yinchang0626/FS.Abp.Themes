import { Page } from '../models/page';


export class PatchPageConfigByName {
  static readonly type = '[Page] Patch PageConfig By Name';
  constructor(public name: string, public newValue: Partial<Page.PageConfig>) {}
}


export class SetPageConfig {
  static readonly type = '[Page] Set PageConfig';
  constructor(public pageConfig: Page.PageConfig) { }
}

