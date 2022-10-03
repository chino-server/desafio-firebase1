
import './App.css';
import CardList from './Components/CardList/CardList';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from './Components/ItemDetail/ItemDetail';

const App = ()=> {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<CardList/>}/>
          <Route path='/detail/:id' element={<ItemDetail />} />

        </Routes>
      </Router>
      
     
       
       
  
    
    </div>
  );
}

export default App;
