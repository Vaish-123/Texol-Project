import './App.css';
import AddProducts from './components/AddProducts/AddProducts';
import GetProducts from './components/ViewProducts/ViewProducts';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListWarehouse from './components/ListWarehouse/ListWarehouse';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/addproducts'>
            <AddProducts />
          </Route>
          <Route exact path='/'>
            <GetProducts />
          </Route>
          <Route exact path='/addwarehouse'>
            <AddWarehouse />
          </Route>
          <Route exact path='/listwarehouse'>
            <ListWarehouse />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;