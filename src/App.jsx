import './App.css';
import Menu from './components/Menu/Menu'
import Home from "./components/Home/Home";
import ArticleDetailContainer from "./components/Article/ArticleContainer/ArticleDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Heading from "./components/Headings/Heading";
import ErrorPage from "./components/General/ErrorPage/ErrorPage";
import {errorStrings} from "./components/General/constants/strings";
import Cart from "./components/Cart/Cart";
import {Store} from "./Store/index"
import {useState} from "react";
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


const App=()=> {

const [cart, setCart] = useState(initialStore)

  return (
    <AuthProvider>
        <ArticleFilter>
        <Store.Provider value={[cart, setCart]}>
          <BrowserRouter>
              <div className='default-background main-container'>
                  <Menu />

                  <div id="body">

                        <Routes>
                            
                            <Route path='/' element={<Home />} />

                            <Route path="/heading/:name?" element={<Heading />} />

                            <Route path='/detail/:id' element={<ArticleDetailContainer />} />

                            <Route path='/cart' element={<PrivateRoute component={Cart} />} />

                            <Route path='/buy' element={<PrivateRoute component={Buy} />} />

                            <Route path='/purchases' element={<PrivateRoute component={PurchaseContainer} />} />

                            <Route path="/signup" element={<PublicRoute restricted={true} component={SignUp} />} />
                            
                            <Route path="/login" element={<PublicRoute restricted={true} component={LogIn} />} />

                            <Route path='*' element={<ErrorPage text={errorStrings.pageNotFound}/>} />

                        </Routes>

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