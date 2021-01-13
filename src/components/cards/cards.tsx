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
}

export const Cards: React.FC = () => {

    const { fetchEvents, setEventsLoading } = useAction()

    //local state
    const [page , setPage] = useState<number>(1)

    // call on render
    useEffect(()=>{
        setEventsLoading(true)
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
                    <Card key={i} {...event} />
                ))
            }
        </div>
        <section className="pagination-section">
        <Pagination
        page={page}
        onChange={(e, value) => setPage(value)}
        count={49}
        color="primary"
        defaultPage={1}
      />
        </section>
        </div>
	)
}
