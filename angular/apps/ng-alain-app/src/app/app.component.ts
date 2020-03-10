import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { VERSION as VERSION_ALAIN, TitleService } from '@delon/theme';
import { VERSION as VERSION_ZORRO, NzModalService } from 'ng-zorro-antd';
import { Store } from '@ngxs/store';
import { ConfigState } from '@abp/ng.core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
    constructor(
        el: ElementRef,
        renderer: Renderer2,
        private router: Router,
        private titleSrv: TitleService,
        private htmlSrv: Title ,
        private modalSrv: NzModalService,
        private store:Store,
        private meta: Meta
    ) {
        renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
        renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
        this.loadAbpSetting();
    }

    ngOnInit() {
        this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => {
            this.modalSrv.closeAll();

        });

        
    }
    
    loadAbpSetting(){
        let settingTitle = this.store.selectSnapshot(ConfigState.getSetting('Themes.Website.Title'));
        let description =  this.store.selectSnapshot(ConfigState.getSetting('Themes.Website.Description'));
        this.titleSrv.prefix = settingTitle;
        this.htmlSrv.setTitle(settingTitle);
        this.meta.updateTag({name:'description',content:description});
    }
}
