import React, {useState, useEffect} from 'react';
import { jsxClosingElement } from '@babel/types';

function Shop() {

  useEffect(() =>{
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.theapinetwork.com/store/get");
    const items = await data.json();
    
    console.log(items.items);
    setItems(items.items);
  }

  return (
    <div>
        {items.map(item => (
          <h3>{item.name}</h3>
        ))}
    </div>
  );
}

export default Shop;