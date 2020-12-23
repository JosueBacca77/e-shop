import './App.css';
import Menu from './components/Menu/Menu'
import Home from "./components/Home/Home";
import {temporalArticles} from './constants/data';
import {rubros} from './constants/data';
import ArticleDetail from "./Article/Article";

function App() {
    console.log(temporalArticles[0])
  return (
    <div className="App">
      <Menu rubros={rubros} />
      {/*<Home articles={temporalArticles} />*/}
      <ArticleDetail article={temporalArticles[0]}/>
    </div>
  );
}

export default App;
