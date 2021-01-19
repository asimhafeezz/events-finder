import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAction, CountriesI } from '../store/events/action'
import { StoreStateT } from '../store/rootReducer'
import { FilterationValuesI } from './home'

interface SidebarI {
	filterationValues: FilterationValuesI
	setFilterationValues: React.Dispatch<React.SetStateAction<FilterationValuesI>>
}

export const Sidebar: React.FC<SidebarI> = ({
	filterationValues,
	setFilterationValues,
}) => {
	const countries: CountriesI[] = useSelector(
		(state: StoreStateT) => state.events.countries
	)

	//countries
	const { fetchAllCountries } = useAction()

	useEffect(() => {
		fetchAllCountries()
	}, [])

	const onChangeHandler = (
		e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFilterationValues({
			...filterationValues,
			[e.currentTarget.name]: e.currentTarget.value,
		} as FilterationValuesI)
	}

	const resetFilteration = () => {
		setFilterationValues({
			keyword: '',
			countryCode: '',
			startDateTime: '',
			endDateTime: '',
		})
	}

	return (
		<div className='sidebar'>
			<h1>Events Finder</h1>
			<section>
				<input
					type='text'
					name='keyword'
					placeholder='Search By Keyword'
					value={filterationValues.keyword}
					onChange={onChangeHandler}
				/>
				<select
					name='countryCode'
					value={filterationValues.countryCode}
					onChange={onChangeHandler}>
					<option value=''>Select Country</option>
					{countries.map(({ name, alpha2Code }, i) => (
						<option key={i} value={alpha2Code}>
							{name}
						</option>
					))}
				</select>
				<input
					type='text'
					onFocus={e => (e.currentTarget.type = 'datetime-local')}
					onBlur={e => (e.currentTarget.type = 'text')}
					name='startDateTime'
					placeholder='Select Start Date'
					value={filterationValues.startDateTime}
					onChange={onChangeHandler}
				/>
				<input
					type='text'
					onFocus={e => (e.currentTarget.type = 'datetime-local')}
					onBlur={e => (e.currentTarget.type = 'text')}
					name='endDateTime'
					placeholder='Select End Date'
					value={filterationValues.endDateTime}
					onChange={onChangeHandler}
				/>
				<button onClick={resetFilteration}>Reset</button>
			</section>
		</div>
	)
}
