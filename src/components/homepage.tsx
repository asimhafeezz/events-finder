import { useEffect, useState } from "react"
import { Cards } from "./cards"

import { Sidebar } from "./sideBar"

export const Homepage: React.FC = () => {
    
    
    return(
        <div className="homepage-grid">
            <Sidebar />
            <Cards />
        </div>
    )
}