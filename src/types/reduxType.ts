import {store} from "../store";

type rootState = ReturnType<typeof store.getState>;
type appDispatch = typeof store.dispatch;

export type {
    rootState,
    appDispatch
}