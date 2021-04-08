import Skeleton from 'react-loading-skeleton';
import Button from './button';
import toTitleCase from '@helpers/toTitleCase';

const Featured = ({ product, addToCart }) => (
  <div className="flex flex-col w-full px-2 py-6 max-w-5xl">
    <div className="flex w-full justify-between pb-4">
      <h2 className="font-bold text-lg">{product ? product.data.name: <Skeleton />}</h2>
      <div className="hidden lg:block">
        <Button
          text="ADD TO CART"
          type="primary"
          onClick={() => product && addToCart(product)}
        />
      </div>
    </div>
    <div className="flex flex-col w-full relative">
      <div className="relative">
        {product ? <img
          src={product.data.image.src}
          alt={product.data.image.alt}
          className="w-full"
        /> : <Skeleton width={'100%'} height={420} />}
        <div className="absolute px-6 py-3 bg-pure bottom-0">
          Photo of the day
        </div>
      </div>
    </div>
    <div className="block lg:hidden w-full mt-5">
      <Button
        text="ADD TO CART"
        type="primary"
        onClick={() => product && addToCart(product)}
      />
    </div>
    <div className="flex flex-col lg:flex-row justify-between w-full mt-5">
      <div className="w-full lg:w-2/3 flex flex-col mb-3 lg:pr-7">
        {product ? <><h2 className="font-bold text-lg">
          About the {toTitleCase(product.data.name)}
        </h2>
        <h2 className="font-bold text-lg text-secondary py-3">
          {toTitleCase(product.data.category)}
        </h2>
        <p className="text-xs leading-relaxed text-secondary">
          {product.data.details.description}
        </p></> : <>
        <Skeleton/>
<Skeleton count={5}/></>}
      </div>
      <div className="w-full lg:w-1/3 flex flex-col">
        <h2 className="font-bold text-lg">People also buy</h2>
        <div className="flex w-full justify-between py-3">
          {product ? <>
          {product.data.details.recommendations.map((image, key) => <img key={key}
            src={image.src}
            alt={image.alt}
            className="w-1/4 max-h-36"
          />)}</> : <>
          <Skeleton width={83.33} height={124.98} />
          <Skeleton width={83.33} height={124.98} />
          <Skeleton width={83.33} height={124.98} />
          </>}
        </div>
        <div className="w-full flex justify-start lg:justify-end">
          <div className="flex flex-col w-max">
            <h2 className="flex justify-start lg:justify-end font-bold text-lg">
              Details
            </h2>
            {product ? <><span className="flex justify-start lg:justify-end text-xs text-secondary my-2">
              Size: {product.data.details.dimmentions.width} x{' '}
              {product.data.details.dimmentions.height} pixel
            </span>
            <span className="flex justify-start lg:justify-end text-xs text-secondary">
              Size: {Number(product.data.details.size) / 1000} mb
            </span></> : <Skeleton count={2} />}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Featured;
