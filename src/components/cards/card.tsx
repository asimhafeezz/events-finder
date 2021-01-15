import { useHistory } from 'react-router-dom'
import { EventI } from '../../store/events/action'

interface CardPropsI {
	event: EventI
}

export const Card: React.FC<CardPropsI> = ({ event }) => {
	const { id, name, images, dates, _embedded } = event

	//use history
	const { push } = useHistory()
	return (
		<section className='card'>
			<img src={images[0].url} alt='flag images' />
			<h3 onClick={() => push(`/${id}`)}>{name}</h3>
			<p>{dates.start.dateTime}</p>
			<h4>{_embedded?.venues[0].name}</h4>
		</section>
	)
}

export default Card
