import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div key={id} className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        alt={`Image of ${title}`}
        src={image}
        width={200}
        height={200}
        objectFit="contain"
      />
      <h4 className="my-3">{title}</h4>
      <p className="text-xs mb-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to cart
      </button>
    </div>
  );
}
