import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useContext } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Homepage from './components/pages/homepage/Homepage';
import Shop from './components/pages/Shop/Shop';
import About from './components/pages/About/About';
import LogIn from './components/pages/LogIn/LogIn';
import SignUp from './components/pages/SignUp/SignUp';
import Cart from './components/layout/Cart/Cart';
import { GlobalProvider } from './components/store/GlobalState';

function App() {


  return (
    <GlobalProvider >
      <Router>
          <Header />
          <Cart />
          <Routes>
            <Route path="/" element={ <Homepage />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
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
