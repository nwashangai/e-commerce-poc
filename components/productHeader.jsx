import { useState } from 'react';
import Image from 'next/image';

const Header = ({ toggleFilter }) => (
    <header className="flex w-full justify-between p-2 py-5">
      <pre>
        <div className="flex font-archivo">
          <span className="">Photograph / </span>
          <span className="text-secondary">Premium Photos</span>
        </div>
      </pre>
      <pre>
      <div className="hidden lg:block flex font-archivo">
        <Image
          src="/assets/sort.svg"
          alt="sort"
          width={10}
          height={10}
          priority
        />
        <span className="text-xs text-secondary"> Sort By </span>
        <span className="text-xs">Price </span>
        <Image
          src="/assets/down-icon.svg"
          alt="down"
          width={10}
          height={10}
          priority
        />
      </div>
      <div className="relative lg:hidden" onClick={() => toggleFilter(true)}>
        <Image
          src="/assets/menu.svg"
          alt="down"
          width={20}
          height={20}
          priority
        />
      </div>
      </pre>
    </header>
  );

export default Header;
