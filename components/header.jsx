import Image from 'next/image';
import Cart from './cart';

const Header = ({ cart, isCartOpen, toggleCart, clearCart }) => {
  return (
    <header className="flex w-full justify-between p-2 pt-5 border-b border-solid border-line">
      <div>
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={145}
          height={20}
          priority
        />
      </div>
      <div className="relative cursor-pointer">
        <div onClick={() => toggleCart(true)}>
          <Image
            src="/assets/shopping-cart.svg"
            alt="logo"
            width={50}
            height={35}
            priority
          />
        </div>
        {cart.length > 0 && (
          <div className="absolute bg-primary text-pure py-0 px-1 text-xs bottom-0 right-0">
            {cart.length}
          </div>
        )}
        {isCartOpen && (
          <Cart items={cart} setIsCartOpen={toggleCart} clearCart={clearCart} />
        )}
      </div>
    </header>
  );
};

export default Header;
