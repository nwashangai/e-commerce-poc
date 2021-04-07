const filterByCategories = (list, data) => {
  return data.filter((product) => list.includes(product.data.category));
};

const filterByPriceRange = (range, data) => {
  return data.filter(
    (product) =>
      product.data.price > (range.min || Number.NEGATIVE_INFINITY) &&
      product.data.price < (range.max || Infinity)
  );
};

export default (filterBy, value, data) => {
  switch (filterBy) {
    case 'categories':
      return filterByCategories(value, data);
      break;

    case 'priceRage':
      return filterByPriceRange(value, data);
      break;

    default:
      return data;
      break;
  }
};
