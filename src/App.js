// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './ECOM/Components/Header';
import Home from './ECOM/Components/Home';
import ItemDetails from './ECOM/Components/ItemDetails';
//
import {Route , Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
 
 
    <Routes>
        <Route path='/Find-Your-Meal' element={<Home/>} />
        <Route path='/Find-Your-Meal/detail/:id' element={<ItemDetails />} />


    </Routes>
    </>
    
  );
}

export default App;
