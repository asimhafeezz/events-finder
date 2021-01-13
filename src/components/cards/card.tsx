import { EventI } from "../../store/events/action"

interface CardPropsI {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>,
	event: EventI
}

export const Card: React.FC<CardPropsI> = ({event , setOpen}) => {
	const { name, images, dates , _embedded } = event
	return (
			<section className='card'>
				<img src={images[0].url} alt='flag images' />
				<h3 onClick={() => setOpen(true)}>{name}</h3>
				<p>{dates.start.localDate}</p>
				<h4>{_embedded?.venues[0].name}</h4>
			</section>
	)
}

export default Card
