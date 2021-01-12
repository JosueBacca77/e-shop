import './App.css';
import Menu from './components/Menu/Menu'
import Home from "./components/Home/Home";
import {temporalArticles} from './Data/data';
import {headings} from './Data/data';
import ArticleDetailContainer from "./components/Article/ArticleContainer/ArticleDetailContainer";
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Heading from "./components/Headings/Heading";
import ErrorPage from "./components/General/ErrorPage/ErrorPage";
import {errorStrings} from "./components/General/constants/strings";
import Cart from "./components/Cart/Cart";
import {Store} from "./Store/index"
import {useState} from "react";


function App() {

    const [cart, setCart] = useState({
        items: [],
        total: 0
    })

  return (
      <Store.Provider value={[cart, setCart]}>
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
                  <Route path='/cart'>
                      <Cart />
                  </Route>
                  <Route path='*'>
                      <ErrorPage text={errorStrings.pageNotFound}/>
                  </Route>

              </Switch>

          </BrowserRouter>
      </Store.Provider >
  );
}

export default App;
