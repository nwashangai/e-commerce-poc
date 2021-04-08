import Image from 'next/image';

const Products = (props) => (
    <div className="flex flex-col flex-grow mb-5">
      <div className="flex justify-evenly flex-wrap">
        {props.children}
      </div>
      <div className="flex mx-auto">
        <span className="mx-2">
          <Image
            src={`/assets/left-icon.svg`}
            alt="select"
            width={11}
            height={11}
            priority
          />
        </span>
        {new Array(5).fill(0).map((item, index) => <span className="mx-2" key={index}>{index + 1}</span>)}
        <span className="mx-2">
          <Image
            src={`/assets/right-icon.svg`}
            alt="select"
            width={11}
            height={11}
            priority
          />
        </span>
      </div>
    </div>
  );

export default Products;