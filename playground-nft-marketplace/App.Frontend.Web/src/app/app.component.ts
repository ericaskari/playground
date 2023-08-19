import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { BootstrapStoreSelector } from "@ericaskari/state";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { SmoothScrollbarService } from "../services/smooth-scrollbar.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
    @HostBinding("class.app-primary-theme")
    primaryTheme = localStorage.getItem('theme') === 'app-primary-theme';

    // @HostBinding("class.app-dark-theme")
    // darkTheme = localStorage.getItem('theme') === 'app-dark-theme';

    @HostBinding("class.mat-typography") typography = true

    version$: Observable<string> = this.store.select(BootstrapStoreSelector.bootstrapData)
        .pipe(map(x => x ? x.version : '-'));

    constructor(private store: Store, private smoothScrollbarService: SmoothScrollbarService) {
    }

    ngOnInit(): void {
        this.smoothScrollbarService.init();
    }

    changeTheme(checked: boolean) {
        // this.darkTheme = checked;
        // this.primaryTheme = !checked;
        // localStorage.setItem('theme', checked ? 'app-dark-theme' : 'app-primary-theme');
    }
}
