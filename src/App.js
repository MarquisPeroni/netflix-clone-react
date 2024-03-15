import './App.css';
import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import MyMovies from './components/MyMovies';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <MyNavbar />
      <MyHeader/>
        <MyMovies title="Harry Potter" category="Trending Now" />
        <MyMovies title="The Lord of The Rings" category="Watch It Again" />
        <MyMovies title="Dragon Ball Z" category="New Releases" />
        <MyMovies title="Blade Runner" category="New Releases" />
        <MyMovies title="One Piece" category="New Releases" />
      <MyFooter/>
    </div>
  );
}

export default App;
