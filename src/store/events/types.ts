import { FetchEventActionI, LoadingEventActionI, FetchAllCountriesActionI , FetchEventByIdActionI} from './action';

export enum ActionsTypes {
    fetchEvents,
    setLoading,
    fetchAllCountries,
    fetchEventById
}

export type Action = FetchEventActionI | LoadingEventActionI | FetchAllCountriesActionI | FetchEventByIdActionI