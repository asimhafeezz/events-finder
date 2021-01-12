import {Card} from "./card"

//store interface
import { StoreStateT } from '../../store/rootReducer'
//redux
import { useSelector } from 'react-redux'
import { Spinner } from "../util/spinner"

export const Cards: React.FC = () => {
    const events = useSelector((state: StoreStateT) => state.events.events)
    const loadingEvents = useSelector((state: StoreStateT) => state.events.loading)
    
	return loadingEvents ? <Spinner /> : (
        <div className="cards">
            {
                events.map((event , i) => (
                    <Card key={i} {...event} />
                ))
            }
        </div>
	)
}
