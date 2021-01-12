import { FetchEventActionI, LoadingEventActionI } from './action';

export enum ActionsTypes {
    fetchEvents,
    setLoading
}

export type Action = FetchEventActionI | LoadingEventActionI