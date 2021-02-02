import './App.css';
import Menu from './components/Menu/Menu'
import Home from "./components/Home/Home";
import {temporalArticles} from './Data/data';
import ArticleDetailContainer from "./components/Article/ArticleContainer/ArticleDetailContainer";
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Heading from "./components/Headings/Heading";
import ErrorPage from "./components/General/ErrorPage/ErrorPage";
import {errorStrings} from "./components/General/constants/strings";
import Cart from "./components/Cart/Cart";
import {Store} from "./Store/index"
import React, {useState} from "react";
import Buy from "./components/Buy/Buy";
import {initialStore} from "./Store/ManageContext";


function App() {

    const [cart, setCart] = useState(initialStore)

  return (
      <Store.Provider value={[cart, setCart]}>
          <BrowserRouter>

              <Menu />

              <div
                  className='default-background'
                  style={{
                      backgroundImage: `url(${`${'/Images/back-ground.jpg'}`})`,
                  }}
              >

              <Switch>

                  <Route exact path='/'>
                      <Home articles={temporalArticles} />
                  </Route>

                  <Route path="/heading/:name?">
                      <Heading />
                  </Route>

                  <Route path='/detail/:id'>
                      <ArticleDetailContainer />
                  </Route>

                  <Route path='/cart'>
                      <Cart />
                  </Route>

                  <Route path='/buy'>
                      <Buy />
                  </Route>

                  <Route path='*'>
                      <ErrorPage text={errorStrings.pageNotFound}/>
                  </Route>

              </Switch>
              </div>

          </BrowserRouter>
      </Store.Provider >
  );
}

export default App;
