import './App.css';
import Menu from './components/Menu/Menu'
import Home from "./components/Home/Home";
import {temporalArticles} from './constants/data';
import {headings} from './constants/data';
import ArticleDetailContainer from "./components/Article/ArticleContainer/ArticleDetailContainer";
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Heading from "./components/Headings/Heading";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {errorStrings} from "./constants/strings";


function App() {

  return (
      <BrowserRouter>

          <Menu headings={headings} />

          <Switch>

              <Route exact path='/'>
                  <Home articles={temporalArticles} />
              </Route>
              <Route path="/heading/:id?">
                  <Heading />
              </Route>
              <Route path='/detail/:id'>
                  <ArticleDetailContainer />
              </Route>
              <Route path='*'>
                  <ErrorPage text={errorStrings.pageNotFound}/>
              </Route>

          </Switch>

      </BrowserRouter>
  );
}

export default App;
