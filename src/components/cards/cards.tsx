import {Card} from "./card"

//store interface
import { StoreStateT } from '../../store/rootReducer'
//redux
import { useSelector } from 'react-redux'

export const Cards: React.FC = () => {
    const events = useSelector((state: StoreStateT) => state.events.events)
    
	return (
        <div className="cards">
            {
                events.map((event , i) => (
                    <Card key={i} {...event} />
                ))
            }
        </div>
	)
}
