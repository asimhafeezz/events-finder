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
            <ImageSlider images={event.images} />
        </div>
    )
}