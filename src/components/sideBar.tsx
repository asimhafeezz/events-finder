import { useSelector } from "react-redux"
import { StoreStateT } from "../store/rootReducer"
import { Select } from "./util/select"

export const Sidebar: React.FC = () => {
    const events = useSelector((state: StoreStateT) => state.events.events)

    return(
        <div className="sidebar">
            <h1>Events</h1>
            <Select events={events}  />
            <Select events={events}  />
            <Select events={events}  />
            <Select events={events}  />

            <section className="button-section">
                <button>Filter</button>
            </section>
        </div>
    )
}