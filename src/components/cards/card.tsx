import { EventI } from "../../store/events/action"

export const Card: React.FC<EventI> = (props) => {
	const { name, images, dates , _embedded } = props
	return (
			<section className='card'>
				<img src={images[0].url} alt='flag images' />
				<h3>{name}</h3>
				<p>{dates.start.localDate}</p>
				<h4>{_embedded?.venues[0].name}</h4>
			</section>
	)
}

export default Card
