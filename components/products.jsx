import Image from 'next/image';

const Products = (props) => (
  <div className="flex flex-col flex-grow mb-5">
    <div className="flex justify-evenly flex-wrap">{props.children}</div>
    <div className="flex mx-auto">
      <span
        className="mx-2 cursor-pointer"
        onClick={() => (!!props.prev ? props.paginate(props.prev) : null)}
      >
        <Image
          src={`/assets/left-icon.svg`}
          alt="select"
          width={11}
          height={11}
          priority
        />
      </span>
      {new Array(
        props.total % 4 === 0 ? props.total / 4 : Math.ceil(props.total / 4)
      )
        .fill(0)
        .map((item, index) => (
          <span
            className={`${
              props.current === index + 1
                ? 'text-primary font-bold'
                : 'text-secondary'
            } mx-2 cursor-pointer`}
            key={index}
            onClick={() => props.paginate(index + 1)}
          >
            {index + 1}
          </span>
        ))}
      <span
        className="mx-2 cursor-pointer"
        onClick={() => (!!props.next ? props.paginate(props.next) : null)}
      >
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
