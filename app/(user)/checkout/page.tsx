"use client";

import CheckoutProduct from "@/components/CheckoutProduct";
import { selectItems, selectTotal } from "@/slices/basketSlice";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
const STRIPE_PK = process.env.stripe_public_key;

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [pk, setPk]: any = useState();
  const [stripePromise, setStripePromise]: any = useState(null);

  useEffect(() => {
    console.log("UE set timeout");
    setTimeout(() => {
      console.log("timeout fired!");
      setPk(STRIPE_PK);
    }, 500);
  }, []);

  useEffect(() => {
    console.log("ue PK");
    console.log({ pk });
    if (pk && !stripePromise) {
      console.log("loadStripe");

      setStripePromise(loadStripe(pk));
    }
  }, [pk, stripePromise]);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    console.log(stripe);
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
    });
    console.log(checkoutSession.data.id);
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      console.warn(result.error.message);
    }
  };
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
              priceId={item.priceId}
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
            <button
              role="link"
              onClick={createCheckoutSession}
              className="text-white w-full bg-gray-400 px-4 py-1 rounded-md mt-1"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </main>
  );
}

export default Checkout;
