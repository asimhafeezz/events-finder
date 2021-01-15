import { useSelector } from "react-redux"
import { StoreStateT } from "../store/rootReducer"
import { FilterationValuesI } from "./home"
import { Select } from "./util/select"

interface SidebarI {
    filterationValues: FilterationValuesI,
    setFilterationValues: React.Dispatch<React.SetStateAction<FilterationValuesI>>
}

export const Sidebar: React.FC<SidebarI> = ({ filterationValues , setFilterationValues}) => {
    const events = useSelector((state: StoreStateT) => state.events.events)

    //  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //      const el = e.currentTarget as HTMLInputElement
    //      setFilterationValues({
    //          [el.name]: e.currentTarget.value
    //      } as FilterationValuesI)
    //  }

    return(
        <div className="sidebar">
            <h1>Events</h1>
            <form>
                <input type="text" placeholder="Search By Keyword" value={filterationValues.keyword} onChange={(e) => setFilterationValues({keyword: e.currentTarget.value} as FilterationValuesI)} />
            <Select events={events}  />
            </form>

            {/* <section className="button-section">
                <button>Filter</button>
            </section> */}
        </div>
    )
}