import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Homepage from './components/pages/homepage/Homepage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Homepage />}>
         
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
