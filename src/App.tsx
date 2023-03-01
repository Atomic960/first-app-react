import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from './components/Card/Container/Container';
import { Card } from './components/Card/Card';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  qty: number;
}
export interface Rating {
  rate: number;
  count: number;
}

const App = () => {
  const [price, setPrice] = useState(0);
  const [items, setItems]= useState<Product[]>([]);
  //   {type: "iphone", description: 'An iphone just for cool people', price: 800, qty: 0},
  //   {type: "samsung", description: 'A samsung just for wrong people', price: 400,  qty: 0},
  //   {type: "ps5", description: 'A ps5 just for geek people', price: 500,  qty: 0},
  //   {type: "dabliu", description: 'A tv that Pignataro buy for class', price: 500,  qty: 0}
  //]) 
  // useEffect(() => {
  //   console.log("array vuoto");

  // }, [])

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data:Product[] = await response.json();
        const items = data.map((item)=> ({...item, qty:0}))
        setItems(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
},[]);

  useEffect(() => {
    setPrice(items.reduce((acc, {price, qty})=> acc + price * qty, 0));
  }, [items]);

  return (
    <>
      <h1>{price}</h1>
      {items.map((item, index) => 
        <Container key={index}>
          <Card key={index} setItems={setItems} product={item} index={index}></Card>
        </Container>
      )}
      
    </>
    )
}

export default App;