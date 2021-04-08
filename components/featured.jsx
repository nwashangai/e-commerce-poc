import Button from './button';
import { IKImage } from 'imagekitio-react';
import toTitleCase from '@helpers/toTitleCase';

const Featured = ({ product, addToCart }) => (<div className="flex flex-col w-full px-2 py-6 max-w-5xl">
  <div className="flex w-full justify-between pb-4">
    <h2 className="font-bold text-lg">{product.data.name}</h2>
    <div className="hidden lg:block"><Button text="ADD TO CART" type="primary" onClick={() => addToCart(product)} /></div>
  </div>
  <div className="flex flex-col w-full relative">
    <div className="relative">
      <IKImage
        urlEndpoint='https://ik.imagekit.io/03bj5xmyl'
        src={product.data.image.src}
        lqip={{ active: true, quality: 20 }}
        width={'100%'}
        loading="lazy"
      />
      <div className="absolute px-6 py-3 bg-pure bottom-0">Photo of the day</div>
    </div>
  </div>
  <div className="block lg:hidden w-full mt-5">
    <Button text="ADD TO CART" type="primary" onClick={() => addToCart(product)} />
  </div>
  <div className="flex flex-col lg:flex-row justify-between w-full mt-5">
    <div className="w-full lg:w-2/3 flex flex-col mb-3 lg:pr-7">
      <h2 className="font-bold text-lg">About the {toTitleCase(product.data.name)}</h2>
      <h2 className="font-bold text-lg text-secondary py-3">{toTitleCase(product.data.category)}</h2>
      <p className="text-xs leading-relaxed text-secondary">{product.data.details.description}</p>
    </div>
    <div className="w-full lg:w-1/3 flex flex-col">
      <h2 className="font-bold text-lg">People also buy</h2>
      <div className="flex w-full justify-between py-3">
        <IKImage
          urlEndpoint='https://ik.imagekit.io/03bj5xmyl'
          src={product.data.details.recommendations[0].src}
          lqip={{ active: true, quality: 20 }}
          className="w-1/4 max-h-36"
          loading="lazy"
        />
        <IKImage
          urlEndpoint='https://ik.imagekit.io/03bj5xmyl'
          src={product.data.details.recommendations[1].src}
          lqip={{ active: true, quality: 20 }}
          className="w-1/4 max-h-36"
          loading="lazy"
        />
        <IKImage
          urlEndpoint='https://ik.imagekit.io/03bj5xmyl'
          src={product.data.details.recommendations[2].src}
          lqip={{ active: true, quality: 20 }}
          className="w-1/4 max-h-36"
          loading="lazy"
        />
      </div>
      <div className="w-full flex justify-start lg:justify-end">
        <div className="flex flex-col w-max">
          <h2 className="flex justify-start lg:justify-end font-bold text-lg">Details</h2>
          <span className="flex justify-start lg:justify-end text-xs text-secondary my-2">Size: {product.data.details.dimmentions.width} x {product.data.details.dimmentions.height} pixel</span>
          <span className="flex justify-start lg:justify-end text-xs text-secondary">Size: {Number(product.data.details.size) / 1000} mb</span>
        </div>
      </div>
    </div>
  </div>
</div>)

export default Featured