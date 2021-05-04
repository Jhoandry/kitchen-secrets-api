import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/header/index'
import Search from './component/search/index'
import ScoreDetail from './component/scoreDetail/index'

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/">
              <Search/>
            </Route>
            <Route path="/home">
              <Search/>
            </Route>
            <Route path="/scores">
              <ScoreDetail />
            </Route>
          </Switch>
        </Router>
    </div>
  );
};

export default App;
