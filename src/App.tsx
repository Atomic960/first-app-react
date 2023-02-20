import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {Card} from './Card/Card'

export const items = [
  {"name":"caccola","description":"caccolona","price":3000},
  {"name":"domenico","description":"caccolona","price":3000},
  {"name":"caccola","description":"caccolona","price":3000},
  {"name":"caccola","description":"caccolona","price":3000}
]

function App() {
  const renderList = items.map((item, index) => <Card caccola={items}/> );
  return (
    <div className="App">
    <Header />
    
    {renderList}
    
    </div>
  );
}

export default App;
