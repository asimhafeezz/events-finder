import { useState } from "react"
import { Cards } from "./cards"
import { Sidebar } from "./sideBar"

//interfaces
export interface FilterationValuesI {
    keyword: string,
    startDateTime: any,
    endDateTime: any,
    countryCode: string
}

export const Homepage: React.FC = () => {
    const [filterationValues , setFilterationValues] = useState<FilterationValuesI>({
        keyword: '',
        startDateTime: '',
        endDateTime: '',
        countryCode: ''
    })
    return(
        <div className="homepage-grid">
            <Sidebar filterationValues={filterationValues} setFilterationValues={setFilterationValues} />
            <Cards filterationValues={filterationValues} />
        </div>
    )
}