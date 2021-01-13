import { useState } from "react"
import { Cards } from "./cards"
import { Sidebar } from "./sideBar"
import { Modal } from "./util/model"

export const Homepage: React.FC = () => {
    const [open , setOpen] = useState<boolean>(false)
    return(
        <>
        <div className="homepage-grid">
            <Sidebar />
            <Cards setOpen={setOpen} />
        </div>
        <Modal open={open} setOpen={setOpen}>
            <h1>Hi I am a Modal!!!</h1>
        </Modal>
        </>
    )
}