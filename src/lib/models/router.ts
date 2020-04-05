import { TemplateRef } from '@angular/core';
export namespace Router {
  export interface State {    
    profile: Profile;
  }

  export interface Profile {
    [key:string]:any; 
  }
}
