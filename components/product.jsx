import { IKImage } from 'imagekitio-react';
import Button from './button';
import toTitleCase from '@helpers/toTitleCase';

const Product = ({ product, addToCart }) => (
    <div className="flex flex-col w-72 lg:mx-10 mb-5 hover-trigger">
      <div className="relative w-full">
        <IKImage
          urlEndpoint='https://ik.imagekit.io/03bj5xmyl'
          src={product.data.image.src}
          lqip={{ active: true, quality: 20 }}
          width={'100%'}
          loading="lazy"
        />
        <div className="absolute w-full bottom-0 hover-target">
          <Button text="ADD TO CART" type="primary"  onClick={() => addToCart(product)}/>
        </div>
        {product.data.bestseller && <div className="absolute bg-pure p-1 px-5 text-sm w-28 top-0 left-0">
          Best seller
        </div>}
      </div>
      <div className="flex flex-col w-full">
        <span className="text-xs font-bold text-secondary pt-2">{toTitleCase(product.data.category)}</span>
        <h1 className="text-xl font-bold py-0.5">{toTitleCase(product.data.name)}</h1>
        <span className="text-secondary pb-1">$ {product.data.price}</span>
      </div>
    </div>
  );

export default Product;