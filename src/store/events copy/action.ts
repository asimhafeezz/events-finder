
import { useDispatch } from "react-redux"
import { ActionsTypes as types } from './types'

export interface ModalActionI {
    type: types.setModal,
    payload: boolean
}

export interface UseActionI {
    setOpenModal: (loadingState: boolean) => void
}


export const useAction = (): UseActionI => {
    const dispatch = useDispatch()

    //a function for setting loading state
    const setOpenModal = (loadingState: boolean): void => {
        dispatch<ModalActionI>({
            type: types.setModal,
            payload: loadingState 
        })
    }


    return {
        setOpenModal
    }
}