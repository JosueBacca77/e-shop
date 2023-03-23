import './App.css';
import Menu from './components/Menu/Menu'
import Home from "./components/Home/Home";
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
import Footer from "./components/General/Footer";
import PurchaseContainer from "./components/MyPurchases/PurchaseContainer";
import LogIn from "./components/User/Login/Login";
import SignUp from "./components/User/SignUp/SignUp";
import { AuthProvider } from './AuthContext';
import PrivateRoute from "./components/Routers/PrivateRouter"
import PublicRoute from "./components/Routers/PublicRouter"
import { ArticleFilter } from './ArticleFilterContext';


function App() {

const [cart, setCart] = useState(initialStore)

  return (
    <AuthProvider>
        <ArticleFilter>
        <Store.Provider value={[cart, setCart]}>
          <BrowserRouter>
              <div className='default-background main-container'>
                  <Menu />

                  <div id="body">

                        <Switch>
                            
                            <Route exact path='/'>
                                <Home />
                            </Route>

                            <Route path="/heading/:name?">
                                <Heading />
                            </Route>

                            <Route path='/detail/:id'>
                                <ArticleDetailContainer />
                            </Route>

                            <PrivateRoute component={Cart} path='/cart' exact/>

                            <PrivateRoute component={Buy} path='/buy' exact/>

                            <PrivateRoute component={PurchaseContainer} path='/purchases' exact/>

                            <PublicRoute restricted={true} component={SignUp} path="/signup" exact />
                            
                            <PublicRoute restricted={true} component={LogIn} path="/login" exact />

                            <Route path='*'>
                                <ErrorPage text={errorStrings.pageNotFound}/>
                            </Route>

                        </Switch>

                  </div>
                  <Footer />
              </div>

          </BrowserRouter>
      </Store.Provider >
        </ArticleFilter>
      
      </AuthProvider>
  );
}

export default App;
