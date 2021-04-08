export default ({ sortBy = 'ALPHABET', direction = 'ASC', data = [] }) => {
  const ascending = data.sort((prev, next) => {
    if (sortBy === 'ALPHABET') {
      return prev.data.name.toLowerCase() < next.data.name.toLowerCase()
        ? -1
        : next.data.name.toLowerCase() > prev.data.name.toLowerCase()
        ? 1
        : 0;
    } else {
      return parseFloat(prev.data.price) - parseFloat(next.data.price);
    }
  });

  return direction === 'DESC' ? ascending.reverse() : ascending;
};
