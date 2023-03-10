import { addToBasket, removeFromBasket } from "@/slices/basketSlice";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";

function CheckoutProduct({ id, url, title, price, description, priceId }: any) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      url,
      title,
      price,
      description,
      priceId,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div>
      <div className="grid grid-cols-5">
        <img src={url} height={400} width={100} />
        <div className="col-span-3 mx-5">
          <p>{title}</p>
          <Currency quantity={price} currency={"USD"} />
          <p className="text-gray-500 line-clamp-2">{description}</p>
        </div>
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <button
            onClick={addItemToBasket}
            className="text-white w-full text-xs md:text-sm cursor-pointer focus:outline-none focus:ring-gray-500 active:from-gray-500 bg-gradient-to-b from-gray-200 to-gray-400 px-4 py-1 rounded-md mt-auto"
          >
            add to basket
          </button>
          <button
            onClick={removeItemFromBasket}
            className="text-white w-full text-xs md:text-sm cursor-pointer focus:outline-none focus:ring-gray-500 active:from-gray-500 bg-gradient-to-b from-gray-200 to-gray-400 px-4 py-1 rounded-md mt-auto"
          >
            remove to basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
