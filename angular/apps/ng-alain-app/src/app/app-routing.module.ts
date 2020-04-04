import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountConfigService } from '@abp/ng.account.config';
import { addAbpRoutes, eLayoutType, ABP } from '@abp/ng.core';
const routes: Routes = [

    {
        path: 'account',
        loadChildren: () => import('./lazy-libs/account-wrapper.module').then(m => m.AccountWrapperModule)
    },
    {
        path: 'identity',
        loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule)
    },
    {
        path: 'tenant-management',
        loadChildren: () => import('@abp/ng.tenant-management').then(m => m.TenantManagementModule)
    },
    {
        path: 'setting-management',
        loadChildren: () => import('@abp/ng.setting-management').then(m => m.SettingManagementModule)
    },
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: {
            routes: {
                name: '::Menu:Home',
                parentName: 'AbpUiNavigation::Menu:Administration',
                path: 'home',
                iconClass: 'fa fa-home',
            } as ABP.Route,
        },
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
            // Pls refer to https://ng-alain.com/components/reuse-tab
            scrollPositionRestoration: 'top',
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
