import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/header/index'
import Search from './component/search/index'

function App() {
  return (
    <div className="App">
        <Header/>
        <Search/>
    </div>
  );
}

export default App;
