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
import request from '@helpers/cachedRequest';

const defaultParams = {
  page: 1,
  sort: ['ALPHABET', 'ASC'],
  maxPrice: undefined,
  minPrice: undefined,
  categories: [],
};

export default () => {
  const [params, setParams] = useState(defaultParams);
  const [isFilter, setIsFilter] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoadinng, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(null);
  const { data: featured } = useSWR((_) => `/api/featured`);
  const { data: categories } = useSWR((_) => `/api/categories`);
  const { data: priceRange } = useSWR((_) => `/api/prices`);

  const addItemToCart = (item) => {
    setCart([...addToCart(item, cart)]);
    setIsCartOpen(true);
  };

  const clearCart = () => {
    setCart([]);
    setIsCartOpen(false);
  };

  const filterCategory = (categoryName) => {
    let newCategories = params.categories;
    const position = newCategories.findIndex((item) => item === categoryName);
    if (position >= 0) {
      newCategories.splice(position, 1);
      setParams({ ...params, categories: [...newCategories] });
    } else {
      setParams({ ...params, categories: [...newCategories, categoryName] });
    }
  };

  const filterPriceRange = (range) => {
    setParams({ ...params, maxPrice: range.max, minPrice: range.min });
  };

  const paginate = (page) => {
    setParams({ ...params, page });
  };

  const setSort = (sort = 'ALPHABET') => {
    setParams({ ...params, sort: [sort, params.sort[1]] });
  };

  const toggleSort = () => {
    setParams({
      ...params,
      sort: [params.sort[0], params.sort[1] === 'ASC' ? 'DESC' : 'ASC'],
    });
  };

  useEffect(
    (_) => {
      setIsLoading(true);
      request(`/api/products?${queryString.stringify({ ...params })}`)
        .then((data) => {
          setIsLoading(false);
          setProducts(data);
        })
        .catch((_) => setProducts(null));
    },
    [params]
  );
  return (
    <>
      <Header
        cart={cart}
        clearCart={clearCart}
        isCartOpen={isCartOpen}
        toggleCart={setIsCartOpen}
      />

      <main className="flex-1 lg:container max-w-5xl md:px-1">
        <div className="flex flex-col items-center justify-center">
          {featured && (
            <Featured product={featured} addToCart={addItemToCart} />
          )}
          <hr className="w-full border-line" />
          <ProductHeader
            toggleFilter={setIsFilter}
            toggleSort={toggleSort}
            setSort={setSort}
            sort={params.sort}
          />
          <div className="flex w-full p-2">
            <Filter
              categories={categories}
              priceRange={priceRange}
              activeCategories={params.categories}
              filterCategory={filterCategory}
              minPrice={params.minPrice}
              maxPrice={params.maxPrice}
              filterPriceRange={filterPriceRange}
            />
            {isLoadinng ? (
              <div className="m-auto">loading...</div>
            ) : (
              products && (
                <Products
                  next={products.next}
                  prev={products.prev}
                  current={params.page}
                  total={products.total}
                  limit={4}
                  paginate={paginate}
                >
                  {products.data.map((product, key) => (
                    <Product
                      key={key}
                      product={product}
                      addToCart={addItemToCart}
                    />
                  ))}
                </Products>
              )
            )}
          </div>
          {isFilter && (
            <div className="fixed bg-pure top-2 lg:hidden w-full h-screen z-10">
              <div
                className="absolute top-1 right-2.5 px-4 cursor-pointer"
                onClick={() => setIsFilter(false)}
              >
                <Image
                  src={`/assets/cancel.svg`}
                  alt="select"
                  width={11}
                  height={11}
                  priority
                />
              </div>
              <h2 className="font-bold text-lg px-4 my-3">Filter</h2>
              <div className="px-4 my-3">
                <Filter
                  show
                  categories={categories}
                  priceRange={priceRange}
                  activeCategories={params.categories}
                  filterCategory={filterCategory}
                  minPrice={params.minPrice}
                  maxPrice={params.maxPrice}
                  filterPriceRange={filterPriceRange}
                />
              </div>
              <hr className="w-full absolute border-line bottom-20" />
              <div className="flex px-4 justify-evenly absolute py-7 bottom-0 w-full">
                <div className="w-36">
                  <Button
                    type="secondary"
                    text="Cancel"
                    onClick={() => setIsFilter(false)}
                  />
                </div>
                <div className="w-36">
                  <Button type="primary" text="Save" />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
