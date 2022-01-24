import {
    createAction,
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
    props,
    StoreModule
} from '@ngrx/store';
import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { Actions, createEffect, EffectsModule, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

const stateName = 'bootstrap';

export enum BootstrapStoreEventMsg {
    AppStarted = /*                             */ '[Bootstrap][AppService] AppStarted',
    BootstrapSucceededAndFinished = /*          */ '[Bootstrap][BootstrapEffect] BootstrapSucceededAndFinished',
}

interface BootstrapData {
    version: string;
}

export abstract class BootstrapStoreAction {
    public static AppStarted = createAction(BootstrapStoreEventMsg.AppStarted);

    public static BootstrapSucceededAndFinished = createAction(
        BootstrapStoreEventMsg.BootstrapSucceededAndFinished, props<{ bootstrapData: BootstrapData }>());
}


export interface BootstrapStoreState {
    finished: boolean;
    bootstrapData: BootstrapData | null
}

export const BootstrapStoreReducer = createReducer<BootstrapStoreState>(
    {
        finished: false,
        bootstrapData: null
    },

    on(BootstrapStoreAction.BootstrapSucceededAndFinished, (state, { bootstrapData }): BootstrapStoreState => {
        return {
            finished: true,
            bootstrapData
        };
    })
);


@Injectable()
export class BootstrapStoreEffect {

    CheckServerHealthActions = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(BootstrapStoreAction.AppStarted),
                concatMap(() =>
                    this.httpClient
                        .get<BootstrapData>('/assets/app-version.json')
                ),
                map((bootstrapData) =>
                    BootstrapStoreAction
                        .BootstrapSucceededAndFinished({ bootstrapData })
                ));
    });

    constructor(
        private actions$: Actions,
        private httpClient: HttpClient
    ) {
    }
}


export abstract class BootstrapStoreSelector {
    public static getState = createFeatureSelector<BootstrapStoreState>(stateName);

    public static bootstrapData = createSelector(BootstrapStoreSelector.getState, (state) => state.bootstrapData);

    public static finished = createSelector(BootstrapStoreSelector.getState, (state) => state.finished);
}


@NgModule({
    providers: [],
    imports: [
        StoreModule.forFeature(stateName, BootstrapStoreReducer),
        EffectsModule.forFeature([ BootstrapStoreEffect ])
    ]
})
export class BootstrapStoreModule {
    static forRoot(): ModuleWithProviders<BootstrapStoreModule> {
        return {
            ngModule: BootstrapStoreModule,
            providers: []
        };
    }
}
