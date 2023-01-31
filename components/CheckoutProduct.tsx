import { addToBasket, removeFromBasket } from "@/slices/basketSlice";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";

function CheckoutProduct({ id, url, title, price, description }: any) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      url,
      title,
      price,
      description,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
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
          className="text-white w-full bg-gray-400 px-4 py-1 rounded-md mt-auto"
        >
          add to basket
        </button>
        <button
          onClick={() => {
            removeItemFromBasket();
          }}
          className="text-white w-full bg-gray-400 px-4 py-1 rounded-md mt-auto"
        >
          remove to basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
