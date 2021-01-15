import { QueryParamsFetchEventsI } from './../../components/cards/cards';
import { useDispatch } from "react-redux"
import axios from 'axios'
import { ActionsTypes as types } from './types'

const url: string = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=sK6sqAtjpwLuOky6TFLJVidiimUvGYaB"  


export interface FetchEventActionI {
    type: types.fetchEvents,
    payload: EventI[]
}

export interface FetchAllEventActionI {
    type: types.fetchAllEvents,
    payload: EventI[]
}

export interface FetchEventByActionI {
    type: types.fetchEventById,
    payload: EventI
}

export interface LoadingEventActionI {
    type: types.setLoading,
    payload: boolean
}

export interface UseActionI {
    fetchEvents: (queryParams: QueryParamsFetchEventsI) => Promise<void>,
    fetchAllEvents: () => Promise<void>,
    setEventsLoading: (loadingState: boolean) => void,
    fetchEventById: (id: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
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
    const fetchEvents = async ({page , keyword}: QueryParamsFetchEventsI): Promise<void> => {
    setEventsLoading(true)
    const res = await axios.get<ResEventDataI>(url + `&page=${page}&size=21&keyword=${keyword}`)

    setEventsLoading(false)

    dispatch<FetchEventActionI>({
        type: types.fetchEvents,
        payload: res.data._embedded?.events || []
    })
    }

    //a function for fetching just all events
    const fetchAllEvents = async (): Promise<void> => {
    const res = await axios.get<ResEventDataI>(url)

    dispatch<FetchAllEventActionI>({
        type: types.fetchAllEvents,
        payload: res.data._embedded.events
    })
    }

    //a function for fetching a specific event by id
    const fetchEventById = async (id: string , setLoading: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> => {
        const res = await axios.get<ResEventDataI>(url + `&id=${id}`)
        dispatch<FetchEventByActionI>({
            type: types.fetchEventById,
            payload: res.data._embedded.events[0]
        })

        setLoading(false)
        console.log("specific event" , res.data._embedded.events[0])
    
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
        setEventsLoading,
        fetchAllEvents,
        fetchEventById
    }
}