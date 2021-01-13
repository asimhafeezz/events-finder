import { Homepage } from './components';
import './styles/main.scss';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import { Detailpage } from './components/detailpage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          </Switch>
          <Switch>
          <Route exact path="/:id" component={Detailpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
