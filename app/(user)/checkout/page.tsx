"use client";

import CheckoutProduct from "@/components/CheckoutProduct";
import { selectItems } from "@/slices/basketSlice";
import { useSelector } from "react-redux";

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <main className="lg-flex mx-auto">
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
      <div></div>
    </main>
  );
}

export default Checkout;
