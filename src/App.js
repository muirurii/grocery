import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Homepage from './components/pages/homepage/Homepage';
import Loader from './components/loader/Loader';
import Shop from './components/pages/Shop/Shop';
import About from './components/pages/About/About';
import LogIn from './components/pages/LogIn/LogIn';
import SignUp from './components/pages/SignUp/SignUp';
import Cart from './components/layout/Cart/Cart';
import ProductPage from './components/pages/Shop/Product';
import { GlobalProvider } from './components/store/GlobalState';

function App() {
  const[loadingState,setLoadingState] = useState(true);

  useEffect(()=>{
      setLoadingState(false)
  },[]);

  return loadingState ? <Loader /> : (
    <GlobalProvider >
      <Router>
          <Header />
          <Cart />
          <Routes>
            <Route path="/" element={ <Homepage />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/shop/:productname" element={<ProductPage/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
          <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
