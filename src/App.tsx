import { Homepage as Home } from './components';
import './styles/main.scss';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import { Detailpage } from './components/detailpage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Detailpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
