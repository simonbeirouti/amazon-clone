import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

export default function CheckoutProduct({
  id,
  title,
  price,
  description,
  //   category,
  image,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      //   category,
      image,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt={`Product image of ${title}`}
      />
      <div key={id} className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="text-xs my-2 line-clamp-3">{description}</div>
        <Currency quantity={price} currency="USD" />
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button mt-auto my-auto">
          Add to basket
        </button>
        <button
          onClick={removeItemFromBasket}
          className="button mt-auto my-auto"
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
}
