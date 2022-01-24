import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, tap } from 'rxjs/operators';

import { Observable } from "rxjs";
import { BootstrapStoreAction, BootstrapStoreSelector } from "@ericaskari/state";


@Injectable({
    providedIn: 'root'
})
export class BootstrapService {

    constructor(private httpClient: HttpClient, private store: Store) {
    }

    initializeApp(): Observable<boolean> {
        this.store.dispatch(BootstrapStoreAction.AppStarted());

        return this.store
            .select(BootstrapStoreSelector.finished)
            .pipe(tap(console.log), first());
    }
}
