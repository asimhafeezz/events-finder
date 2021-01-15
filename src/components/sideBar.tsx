import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAction } from "../store/events/action"
import { StoreStateT } from "../store/rootReducer"
import { FilterationValuesI } from "./home"
import { Select } from "./util/select"

interface SidebarI {
    filterationValues: FilterationValuesI,
    setFilterationValues: React.Dispatch<React.SetStateAction<FilterationValuesI>>
}

export const Sidebar: React.FC<SidebarI> = ({ filterationValues , setFilterationValues}) => {
    const events = useSelector((state: StoreStateT) => state.events.events)
    const countries: string[] = useSelector((state: StoreStateT) => state.events.countries)

    //countries
    const {fetchAllCountries} = useAction()

    useEffect(()=>{
        fetchAllCountries()
    },[])
    
    const onChangeHandler = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilterationValues({
            ...filterationValues,
            [e.currentTarget.name]: e.currentTarget.value
        } as FilterationValuesI)
    }

    return(
        <div className="sidebar">
            <h1>Event Finder</h1>
            <form>
                <input type="text" name="keyword" placeholder="Search By Keyword" value={filterationValues.keyword} onChange={onChangeHandler} />
                <select name="countryCode" value={filterationValues.countryCode} onChange={onChangeHandler}>
                    <option value="">Country Code</option>
                    <option value="US">US</option>
                    {
                        countries.map((item , i) => (
                            <option key={i} value={item}>{item}</option>
                        ))
                    }
                </select>
                <input
                type="text"
                onFocus={(e) => (e.currentTarget.type = "datetime-local")}
                onBlur={(e) => (e.currentTarget.type = "text")}
                name="startDateTime"
                placeholder="Select Start Date"
                value={filterationValues.startDateTime}
                onChange={onChangeHandler}
                />
                <input
                type="text"
                onFocus={(e) => (e.currentTarget.type = "datetime-local")}
                onBlur={(e) => (e.currentTarget.type = "text")}
                name="endDateTime"
                placeholder="Select End Date"
                value={filterationValues.endDateTime}
                onChange={onChangeHandler}
                />
                </form>

            {/* <section className="button-section">
                <button>Filter</button>
            </section> */}
        </div>
    )
}