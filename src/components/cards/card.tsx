
export const Card: React.FC = () => {
	const imgURL = "https://miro.medium.com/max/2400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg"
	return (
			<section className='card'>
				<img src={imgURL} alt='flag images' />
				<h3>Event Name</h3>
				<p>Event Data from to...</p>
			</section>
	)
}

export default Card
