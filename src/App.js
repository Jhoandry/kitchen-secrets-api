import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/header/index'
import Search from './component/search/index'

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Search/>
    </div>
  );
};

export default App;
