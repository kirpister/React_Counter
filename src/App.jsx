import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      
      <Header /> 
     
      <Main />

      <Footer />
    
    </div>
  );
};

export default App;

// App is the root component
// <Header /> is calling the Header component