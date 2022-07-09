import Image from "next/image";
import {
  MenuIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 bg-yellow-400 hover:bg-yellow-500 rounded-md cursor-pointer flex-grow">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello, Simon Beirouti</p>
            <p className="font-extrabold md:text-sm">Accounts &amp; Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">&amp; Orders</p>
          </div>
          <div className="flex items-center relative link">
            <span className="absolute top-0 right-0 md:right-11 bg-yellow-400 h-4 w-4 rounded-full text-center text-black font-bold">
              2
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline text-white font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amazon_blue-light space-x-3 p-2 pl-6 text-white text-sm h-10 flex items-center">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden sm:inline-flex">Prime</p>
        <p className="link hidden sm:inline-flex">Electronics</p>
        <p className="link hidden md:inline-flex">Health &amp; Peronsal Care</p>
        <p className="link hidden lg:inline-flex">Food &amp; Groceries</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      </div>
    </header>
  );
}
