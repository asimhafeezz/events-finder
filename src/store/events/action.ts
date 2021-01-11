import { useDispatch } from "react-redux"
import axios from 'axios'
import { ActionsTypes as types } from './types'

const url: string = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=sK6sqAtjpwLuOky6TFLJVidiimUvGYaB"  

export interface TodoI {
    id: number,
    title: string,
    completed: boolean
}

export interface FetchEventActionI {
    type: types.fetchEvents,
    payload: any
}

export interface UseActionI {
    fetchEvents: () => Promise<void>
}



export const useAction = (): UseActionI => {
    const dispatch = useDispatch()

    const fetchEvents = async (): Promise<void> => {
    const res = await axios.get<any>(url)

    console.log(res.data)

    dispatch<FetchEventActionI>({
        type: types.fetchEvents,
        payload: res.data
    })
    }
    return {
        fetchEvents
    }
}