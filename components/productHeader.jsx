import { useState } from 'react';
import Image from 'next/image';
import toTitleCase from '@helpers/toTitleCase';

const Header = ({ toggleFilter, setSort, sort, toggleSort }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const setSortData = (name) => {
    setSort(name);
    setShowDropdown(false);
  };

  return (
    <header className="flex w-full justify-between p-2 py-5">
      <pre>
        <div className="flex font-archivo">
          <span className="">Photograph / </span>
          <span className="text-secondary">Premium Photos</span>
        </div>
      </pre>
      <pre>
        <div className="relative hidden lg:block flex font-archivo">
          <Image
            src="/assets/sort.svg"
            alt="sort"
            width={10}
            height={10}
            priority
            onClick={toggleSort}
            className="cursor-pointer"
          />
          <span className="text-xs text-secondary"> Sort By </span>
          <span
            className="text-xs cursor-pointer"
            onClick={() => setShowDropdown(true)}
          >
            {toTitleCase(sort[0].toLowerCase())}{' '}
          </span>
          {showDropdown && (
            <div className="absolute -bottom-18 right-0 border-2 border-line z-10 hidden lg:flex flex-col bg-pure">
              <span
                className="w-full p-2 pb-1 text-sm hover:bg-hover cursor-pointer"
                onClick={() => setSortData('PRICE')}
              >
                Price
              </span>
              <span
                className="w-full p-2 pt-1 text-sm hover:bg-hover cursor-pointer"
                onClick={() => setSortData('ALPHABET')}
              >
                Alphabet
              </span>
            </div>
          )}
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
};

export default Header;
