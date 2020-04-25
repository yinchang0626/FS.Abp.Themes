import { TemplateRef, Injector } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { ConfigStateService, ABP } from '@abp/ng.core';
export namespace Router {
  export interface State {
    profile: Profile;
  }

  export interface Profile {
    [key: string]: any;
  }
  export class RouteModel {
    parent: RouteModel;
    route: ABP.FullRoute;
  }

  export class Processor {
    get currentUrl(): string {
      return decodeURI(this.routerState.url);
    }
    get flattedRoutes(): RouteModel[] {
      return this.routes
        .map(r => this.convertTreeToList(r))
        .reduce((a, b) => { return a.concat(b); });
    }
    get currentRoute(): RouteModel {
      return this.flattedRoutes.find(rr => this.formatParams(rr.route.url) == this.currentUrl);
    }
    get profilesOfRoute(): any {
      let result = [];
      let node = this.currentRoute;
      pushNode(node);
      while (!!node.parent) {
        node = node.parent;
        pushNode(node);
      }
      return result;

      function pushNode(node) {
        if (!!node.route['profile']) {
          result.push(node.route);
        }
      }
    }
    get currentProfileOfRoute(): any {
      let result = {};
      let stack=this.profilesOfRoute;
      while(stack.length !== 0){
        let node = stack.pop();
        result={...result,...node.profile};
      }
      return result;
    }

    constructor(
      private routes: ABP.FullRoute[],
      private routerState: RouterStateSnapshot
    ) {

    }

    private formatParams(text: string) {
      if (!text) return '';
      let regexp = /(?<=\:)([^(:\/\ )]+)/g;
      let result = text;
      let match = text.match(regexp);
      if (!!match) {
        text.match(regexp).forEach(i => {
          let itemId = this.getParamKeyValue(i);
          result = result.replace(":" + i, itemId);
        });
      }
      return result;
    }

    private convertTreeToList(root): RouteModel[] {
      var stack: RouteModel[] = [], array: RouteModel[] = [], hashMap = {};
      stack.push({ parent: null, route: root } as RouteModel);

      while (stack.length !== 0) {
        var node = stack.pop();
        this.visitNode(node, hashMap, array);
        if (!!node.route.children) {
          for (var i = node.route.children.length - 1; i >= 0; i--) {
            stack.push({ parent: node, route: node.route.children[i] } as RouteModel);
          }
        }
      }

      return array;
    }

    private visitNode(node: RouteModel, hashMap, array) {
      if (!hashMap[node.route.url]) {
        hashMap[node.route.url] = true;
        array.push(node);
      }
    }

    private getParamKeyValue(paramKey: string) {
      let targetRouter = this.searchTree(this.routerState.root, paramKey);
      if (targetRouter) return targetRouter.params[paramKey];
      return null;
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
  }
}
