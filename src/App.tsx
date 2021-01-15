import { Homepage as Home } from './components'
//scss
import './styles/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Detailpage } from './components/Detailpage/detailpage'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const App: React.FC = () => {
	const theme = createMuiTheme({
		palette: {
			type: 'dark',
		},
	})
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/:id' component={Detailpage} />
					</Switch>
				</Router>
			</div>
		</ThemeProvider>
	)
}

export default App
