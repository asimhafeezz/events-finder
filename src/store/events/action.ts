import { QueryParamsFetchEventsI } from './../../components/cards/cards';
import { useDispatch } from "react-redux"
import axios from 'axios'
import { ActionsTypes as types } from './types'

const url: string = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=sK6sqAtjpwLuOky6TFLJVidiimUvGYaB"  


export interface FetchEventActionI {
    type: types.fetchEvents,
    payload: EventI[]
}

export interface LoadingEventActionI {
    type: types.setLoading,
    payload: boolean
}

export interface UseActionI {
    fetchEvents: (queryParams: QueryParamsFetchEventsI) => Promise<void>,
    setEventsLoading: (loadingState: boolean) => void
}


export interface EventI {
    id: string,
    name: string,
    url: string,
    images: {
        url: string,
    }[],
    dates: {
        start: {
            localDate: string
        }
    },
    products?:{
        id: string,
        url: string,
        name: string
    }[],
    _embedded?: {
        venues: {
            name: string
        }[]
    }
}

interface ResEventDataI {
    _embedded:{
        events: EventI[]
    }
}



export const useAction = (): UseActionI => {
    const dispatch = useDispatch()

    //a function for fetching events
    const fetchEvents = async ({page}: QueryParamsFetchEventsI): Promise<void> => {
    const res = await axios.get<ResEventDataI>(url + `&page=${page}`)

    setEventsLoading(false)

    dispatch<FetchEventActionI>({
        type: types.fetchEvents,
        payload: res.data._embedded.events
    })
    }

    //a function for setting loading state
    const setEventsLoading = (loadingState: boolean): void => {
        dispatch<LoadingEventActionI>({
            type: types.setLoading,
            payload: loadingState 
        })
    }


    return {
        fetchEvents,
        setEventsLoading
    }
}