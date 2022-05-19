import React from 'react';
import './App.css';
import Checkout from './Checkout';
import Home from './Home';
import Nanbar from './Nanbar';
import {  Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <main>
       <Provider store={store}>
          <Nanbar/>
     <Routes>
       <Route  path="/" element={<Home/>}/>
       <Route path="/check" element={<Checkout/>}/>
     </Routes>
     </Provider>
 
    </main>
  );
}

export default App;