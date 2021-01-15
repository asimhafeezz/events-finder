import { Card } from './card'
//material ui pagination
import Pagination from '@material-ui/lab/Pagination'
//store interface
import { StoreStateT } from '../../store/rootReducer'
//redux
import { useSelector } from 'react-redux'
import { Spinner } from '../util/spinner'
import { useEffect, useState } from 'react'
import { useAction } from '../../store/events/action'
import { FilterationValuesI } from '../home'

export interface QueryParamsFetchEventsI {
	page?: number
	id?: string
	keyword?: string
	startDateTime?: string
	endDateTime?: string
	countryCode?: string
}

interface CardsPropsI {
	filterationValues: FilterationValuesI
}

export const Cards: React.FC<CardsPropsI> = ({ filterationValues }) => {
	const { fetchEvents } = useAction()

	//local state
	const [page, setPage] = useState<number>(1)

	// call on render
	useEffect(() => {
		const {
			keyword,
			startDateTime,
			endDateTime,
			countryCode,
		} = filterationValues
		const queryParams: QueryParamsFetchEventsI = {
			page: page,
			keyword,
			startDateTime,
			endDateTime,
			countryCode,
		}
		fetchEvents(queryParams)
	}, [page, filterationValues])

	//store state
	const events = useSelector((state: StoreStateT) => state.events.events)
	const loadingEvents = useSelector(
		(state: StoreStateT) => state.events.loading
	)

	return loadingEvents ? (
		<Spinner />
	) : (
		<div className='cards-container'>
			{events && events.length === 0 ? (
				<section className='center'>
					<h3>Not Found</h3>
				</section>
			) : (
				<>
					<div className='cards'>
						{events && events.map((event, i) => <Card key={i} event={event} />)}
					</div>

					<section className='pagination-section'>
						<Pagination
							page={page}
							onChange={(_, value) => setPage(value)}
							count={47}
							color='primary'
							style={{ color: 'azure' }}
							defaultPage={1}
						/>
					</section>
				</>
			)}
		</div>
	)
}
