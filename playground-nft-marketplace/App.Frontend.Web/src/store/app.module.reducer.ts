import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from "../environments/environment";


export interface AppModuleState {
}

export const rootActionReducerMap: ActionReducerMap<AppModuleState> = {};

export const rootMetaReducers: MetaReducer<AppModuleState>[] = !environment.production ? [] : [];
