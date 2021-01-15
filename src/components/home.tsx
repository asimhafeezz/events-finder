import { useState } from "react"
import { Cards } from "./cards"
import { Sidebar } from "./sideBar"

//interfaces
export interface FilterationValuesI {
    keyword: string,
    country: string
}

export const Homepage: React.FC = () => {
    const [filterationValues , setFilterationValues] = useState<FilterationValuesI>({
        keyword: '',
        country: ''
    })
    return(
        <div className="homepage-grid">
            <Sidebar filterationValues={filterationValues} setFilterationValues={setFilterationValues} />
            <Cards filterationValues={filterationValues} />
        </div>
    )
}