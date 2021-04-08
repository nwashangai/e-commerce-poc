import { useState, useEffect } from 'react';
import queryString from 'query-string';
import useSWR from 'swr';
import Image from 'next/image';


// components
import Button from '@components/button';
import Featured from '@components/featured';
import Filter from '@components/filter';
import Header from '@components/header';
import Products from '@components/products';
import ProductHeader from '@components/productHeader';
import Product from '@components/product';

// utilities
import addToCart from '@helpers/addToCart';

const defaultParams = {
  page: 1,
  total: 21,
  sort: [],
  maxPrice: undefined,
  minPrice: undefined,
  categories: []
}

export default () => {
  const [params, setState] = useState(defaultParams)
  const [isFilter, setIsFilter] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([])
  const { data: products } = useSWR(_=> `/api/products?${queryString.stringify({...params, total: undefined})}`);
  const { data: featured } = useSWR(_=> `/api/featured`);

  const addItemToCart = (item) => {
    setCart([...addToCart(item, cart)]);
    setIsCartOpen(true);
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  }

  const clearCart = () => {
    setCart([]);
    setIsCartOpen(false);
  };
  
  useEffect((_) => {
    //
  }, []);
  return (
    <>
      <Header cart={cart} clearCart={clearCart} isCartOpen={isCartOpen} toggleCart={setIsCartOpen} />

      <main className="flex-1 lg:container max-w-5xl md:px-1">
        <div className="flex flex-col items-center justify-center">
          {featured && <Featured product={featured} addToCart={addItemToCart} />}
          <hr className="w-full border-line" />
          <ProductHeader toggleFilter={setIsFilter} />
          <div className="flex w-full p-2">
            <Filter />
            {
              products
                && <Products>
                    {products.data.map((product, key) => <Product key={key} product={product} addToCart={addItemToCart} />)}
                  </Products>
            }
          </div>
          {
            isFilter
              && <div className="fixed bg-pure top-2 lg:hidden w-full h-screen z-10">
                  <div className="absolute top-1 right-2.5 px-4 cursor-pointer" onClick={() => setIsFilter(false)}>
                    <Image
                      src={`/assets/cancel.svg`}
                      alt="select"
                      width={11}
                      height={11}
                      priority
                    />
                  </div>
                  <h2 className="font-bold text-lg px-4 my-3">Filter</h2>
                  <div className="px-4 my-3"><Filter show /></div>
                  <hr className="w-full absolute border-line bottom-20" />
                  <div className="flex px-4 justify-evenly absolute py-7 bottom-0 w-full">
                    <div className="w-36">
                      <Button  type="secondary" text="Cancel" onClick={() => setIsFilter(false)}/>
                    </div>
                    <div className="w-36">
                      <Button  type="primary" text="Save"/>
                    </div>
                  </div>
                </div>
          }
          {/* <div>{products && products.data.map(product => <div>{product.data.name}</div>)}</div> */}
        </div>
      </main>
    </>
  );
};
