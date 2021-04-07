export default ({ sortBy = 'ALPHABET', direction = 'ASC', data = [] }) => {
  const ascending = data.sort((prev, next) => {
    if (sortBy === 'ALPHABET') {
      const prevName = prev.data.name.toLowerCase();
      const nextName = next.data.name.toLowerCase();

      return prevName < nextName ? -1 : prevName > nextName ? 1 : 0;
    } else {
      return parseFloat(prev.data.price) - parseFloat(next.data.price);
    }
  });

  return direction === 'DESC' ? ascending.reverse() : ascending;
};
