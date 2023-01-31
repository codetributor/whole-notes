"use client";

import CheckoutProduct from "@/components/CheckoutProduct";
import { selectItems, selectTotal } from "@/slices/basketSlice";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  return (
    <main className="lg:flex mx-auto">
      <div className="flex-grow m-5 shadow-sm">
        {/*left section*/}
        <div className="flex flex-col p-5 space-y-10">
          <h1 className="text-3xl text-gray-400 border-b pb-4">
            {items.length == 0 ? "Your basket is empty" : "Shopping Basket"}
          </h1>
          {items.map((item: any) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              url={item.url}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/*right section*/}
      <div
        className={`flex flex-col p-10 shadow-md ${!items.length && "hidden"}`}
      >
        {items.length > 0 && (
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items):{" "}
              <span className="font-bold"></span>
              <Currency quantity={total} currency="USD" />
            </h2>
            <button className="text-white w-full bg-gray-400 px-4 py-1 rounded-md mt-1">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </main>
  );
}

export default Checkout;
