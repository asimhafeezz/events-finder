import {Card} from "./card"
//material ui pagination
import Pagination from "@material-ui/lab/Pagination";
//store interface
import { StoreStateT } from '../../store/rootReducer'
//redux
import { useSelector } from 'react-redux'
import { Spinner } from "../util/spinner"
import { useEffect, useState } from "react"
import { useAction } from "../../store/events/action"

export interface QueryParamsFetchEventsI {
    page?: number,
    id?: string
}

interface CardsPropsI {
}

export const Cards: React.FC<CardsPropsI> = () => {

    const { fetchEvents } = useAction()

    //local state
    const [page , setPage] = useState<number>(1)

    // call on render
    useEffect(()=>{
        const queryParams: QueryParamsFetchEventsI = {
            page: page
        }
        fetchEvents(queryParams)
    },[page])

    //store state
    const events = useSelector((state: StoreStateT) => state.events.events)
    const loadingEvents = useSelector((state: StoreStateT) => state.events.loading)
    
	return loadingEvents ? <Spinner /> : (
        <div className="cards-container">
        <div className="cards">
            {
                events.map((event , i) => (
                    <Card key={i} event={event} />
                ))
            }
        </div>
        <section className="pagination-section">
        <Pagination
        page={page}
        onChange={(_, value) => setPage(value)}
        count={49}
        color="primary"
        defaultPage={1}
      />
        </section>
        </div>
	)
}
