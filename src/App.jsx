import './App.css';
import Menu from './components/Menu/Menu'
import Home from "./components/Home/Home";
import {temporalArticles} from './constants';
import {rubros} from './constants';

function App() {
  return (
    <div className="App">
      <Menu rubros={rubros} />
      <Home articles={temporalArticles} />
    </div>
  );
}

export default App;
