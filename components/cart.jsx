import { IKImage } from 'imagekitio-react';
import Image from 'next/image';
import Button from './button';
import toTitleCase from '@helpers/toTitleCase';

const renderItem = (product, key) => (
  <div className="flex w-full justify-between" key={key}>
    <div className="w-2/3 flex flex-col py-1">
      <span className="text-xs text-bold pt-1">{toTitleCase(product.data.name)}</span>
      <span className="text-lg text-secondary pb-1">$ {product.data.price}</span>
    </div>
    <div className="w-1/3">
      <IKImage
        urlEndpoint='https://ik.imagekit.io/03bj5xmyl'
        src={`${product.data.image.src}?tr=w-140,h-90`}
        lqip={{ active: true, quality: 20 }}
        width={140}
        loading="lazy"
      />
    </div>
  </div>
)

const Cart = ({ items, setIsCartOpen, clearCart }) => (
  <div
    className="absolute bg-pure right-1 border-2 border-line p-4 top-12 w-72 z-10"
  >
    <div className="absolute top-1 -right-2 px-4 cursor-pointer" onClick={() => {setIsCartOpen(false)}}>
      <Image
        src={`/assets/cancel.svg`}
        alt="select"
        width={11}
        height={11}
        priority
      />
    </div>
    <div className="mb-5 mt-6">
      {items.length > 0 ? items.map((item, key) => renderItem(item, key)) : <div className="text-secondary">No item available</div>}
    </div>
   
    <hr className="w-full border-line mb-14 " />
    <div className="flex px-4 justify-evenly absolute py-7 bottom-0 left-0 w-full">
      <div className="w-full px-3 mx-auto">
        <Button  type="secondary" text="Clear" onClick={clearCart}/>
      </div>
    </div>
  </div>
);

export default Cart;