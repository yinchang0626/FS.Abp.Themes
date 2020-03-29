import { TemplateRef } from '@angular/core';
export namespace Page {
  export interface State {    
    pageConfig: PageConfig;
  }

  export interface PageConfig {
    [key:string]:any; 
  }
}
