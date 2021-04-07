import { useState, useEffect } from 'react';
import queryString from 'query-string'
import useSWR from 'swr';

const defaultParams = {
  page: 1,
  total: 21,
  sort: [],
  maxPrice: undefined,
  minPrice: 50,
  categories: ['people']
}

export default () => {
  const [params, setState] = useState(defaultParams)
  useEffect((_) => {
    //
  }, []);
  const { data: products } = useSWR(_=> `/api/products?${queryString.stringify({...params, total: undefined})}`);
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <div>{products && products.data.map(product => <div>{product.data.name}</div>)}</div>
    </div>
  );
};
