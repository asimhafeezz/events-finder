import { useEffect } from 'react'
// import ReactDom from 'react-dom'

//redux


//interfaces
interface ModalI {
    children: React.ReactNode,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const ModalData: React.FC<ModalI> = ({ children, setOpen, open }) => {
    // const ModalData: React.FC = ({ open, children, onClose }) => {
    // if (!open) return false

    if(open === false) return null
    
    // const Portal: HTMLElement | null = document.getElementById('portal')
    

	return (
		<div className='modal'>
			<div className='overlay' />
			<div className='modal-data'>
				<section className='display-setting-button'>
					<div className="button" onClick={() => setOpen(false)}>
						<img src='/cancel.png' width={15} alt="cancel button img" />
					</div>
				</section>
				<section>{children}</section>
			</div>
		</div>
	)
}

export const Modal: React.FC<ModalI> = ({ children, open , setOpen }) => {
    

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		}
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [open])

	return (
		<div>
			<ModalData open={open} setOpen={setOpen}>
				{children}
			</ModalData>
		</div>
	)
}