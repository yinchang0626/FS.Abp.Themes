import { TemplateRef } from '@angular/core';
// import { MSServiceNavConfig, MSMenu } from '../ms/ms.interfaces';
// import { MSProduct } from '../ms/services/product.service';
export namespace Page {
  export interface State {    
    pageConfig: PageConfig;
  }

  export interface PageConfig {
    [key:string]:any; 
  }
}
