import CheckBox from './checkbox';
import toTitleCase from '@helpers/toTitleCase';

const formatPrice = (price) => {
  if (price.min && price.max) {
    return `$ ${price.min} - $ ${price.max}`;
  } else if (price.max) {
    return `Lower than $ ${price.max}`;
  } else {
    return `More than $ ${price.min}`;
  }
};

const Filter = ({
  show,
  activeCategories,
  priceRange,
  categories,
  filterCategory,
  filterPriceRange,
  minPrice,
  maxPrice,
}) => (
  <div
    className={`${show ? '' : 'hidden'} lg:block lg:-mr-14 flex flex-col w-52`}
  >
    <div className="flex flex-col w-full">
      <h2 className="font-bold text-sm my-2">Category</h2>
      <div className="flex flex-col">
        {categories &&
          categories.map((category, key) => (
            <CheckBox
              key={key}
              text={toTitleCase(category)}
              isActive={activeCategories.includes(category)}
              onClick={filterCategory}
              value={category}
            />
          ))}
      </div>
    </div>
    <hr className="w-full border-line my-3" />
    <div className="flex flex-col w-full">
      <h2 className="font-bold text-sm my-2">Price range</h2>
      <div className="flex flex-col">
        {priceRange &&
          priceRange.map((range, key) => (
            <CheckBox
              key={key}
              text={formatPrice(range)}
              onClick={filterPriceRange}
              isActive={range.min == minPrice && range.max == maxPrice}
              value={range}
            />
          ))}
      </div>
    </div>
  </div>
);

export default Filter;
