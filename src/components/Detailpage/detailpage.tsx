import { ImageSlider } from './carousel'
import { RouteComponentProps } from "react-router-dom"
import { useEffect , useState} from 'react'
import { useAction } from '../../store/events/action'
import { StoreStateT } from '../../store/rootReducer'
import { useSelector } from 'react-redux'
import { Spinner } from '../util/spinner'

interface RouteParams {
    id: string
}
interface DetailpageProps extends RouteComponentProps<RouteParams> {}

export const Detailpage: React.FC<DetailpageProps> = (props) => {
    const { match } = props

    //useActions redux
    const { fetchEventById } = useAction()
    //store state
    const event = useSelector((state: StoreStateT) => state.events.event)
    //local states
    const [loading , setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchEventById(match.params.id , setLoading)
    },[])
    
    return loading ? <Spinner /> : (
        <div className="detailpage">
            <h1>{event.name}</h1>
            <hr />
            <ImageSlider images={event.images} />
            <hr />
            <h5>Starting Data: <span style={{color: 'gray'}}>{event.dates.start.dateTime}</span></h5>
            <h5>Venue: <span style={{color: 'gray'}}>{event._embedded?.venues[0].name}</span></h5>
            {
                event.products && (
                    <>
                    <hr />
                    {/* products */}
                    <h5>Products</h5>
                    <section className="products">
                        {
                            event.products?.map((item , i) => (
                                <h6 key={item.id}><a href={item.url} target="blank">{i+1}: {item.name}</a></h6>
                                ))
                            }
                    </section>
                    <hr />
                    </>
                )
            }
            <section className="button-section">
            <button><a href={event.url} target="blank">Buy Event Ticket</a></button>
            </section>
        </div>
    )
}