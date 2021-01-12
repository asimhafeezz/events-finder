import { EventI } from "../../store/events/action"

interface PropsI {
    events: EventI[]
}

export const Select: React.FC<PropsI> = ({events}) => {
    return <select placeholder="Select One">
        {
            events.map((item , i) => (
                <option key={i} value={item.id}>{item.name}</option>
            ))
        }
    </select>
}