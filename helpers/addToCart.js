export default (item, cart) => {
  const isItemInCart = cart.find((product) => product.id === item.id);
  const newCart = isItemInCart ? cart : [...cart, item];
  return newCart;
};
