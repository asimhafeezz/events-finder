import { FetchEventActionI, LoadingEventActionI, FetchAllEventActionI , FetchEventByActionI} from './action';

export enum ActionsTypes {
    fetchEvents,
    setLoading,
    fetchAllEvents,
    fetchEventById
}

export type Action = FetchEventActionI | LoadingEventActionI | FetchAllEventActionI | FetchEventByActionI