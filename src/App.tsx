import React, { useDeferredValue, useState, useTransition } from 'react';
import './App.css';
import { productList } from './components/productList';

function App() {

  const product = productList();
  // const [isPending, startTransition] = useTransition();
  const [productValue, setProduct] = useState(product)
  // const deferredProducts = useDeferredValue(productValue);

  const filterData = (value: string) => {
    // startTransition(() => { 
      setProduct(product.filter((ele: string) => ele.includes(value))) 
    // })
  }

  return (
    <div className="App">
      <input placeholder='search' onChange={(e) => filterData(e.target.value)} /><br/>
      {/* {isPending && <span>Loading...</span>} */}
      {
        productValue.map((ele: string) =>
          <div className='product-btn'>
            {ele}
          </div>)
      }
    </div>
  );
}

export default App;
