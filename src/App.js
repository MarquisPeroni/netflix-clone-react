import './App.css';
import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <MyHeader/>
      <MyFooter/>
    </div>
  );
}

export default App;
