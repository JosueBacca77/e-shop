import './App.css';
import Menu from './components/Menu/Menu'
import Home from "./components/Home/Home";
import {temporalArticles} from './constants/data';
import {rubros} from './constants/data';
import ArticleDetail from "./Article/ArticleDetail";
import ArticleDetailContainer from "./Article/ArticleContainer/ArticleDetailContainer";

function App() {
    console.log(temporalArticles[0])
  return (
    <div className="App">
      <Menu rubros={rubros} />
      {/*<Home articles={temporalArticles} />*/}
      {/*<ArticleDetail article={temporalArticles[0]}/>*/}
      <ArticleDetailContainer />
    </div>
  );
}

export default App;
