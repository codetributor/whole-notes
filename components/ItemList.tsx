"use client";

import urlFor from "@/lib/urlFor";
import { addToBasket } from "@/slices/basketSlice";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { idText } from "typescript";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  items: Item[];
};

function ItemList({ items }: Props) {
  const dispatch = useDispatch();
  const addItemToBasket = (
    id: any,
    itemUrl: any,
    itemTitle: any,
    itemPrice: any,
    itemDescription: any
  ) => {
    const product = {
      id,
      url: itemUrl,
      title: itemTitle,
      price: itemPrice,
      description: itemDescription,
    };
    dispatch(addToBasket(product));
  };
  console.log(items[0]._id);
  return (
    <div>
      <hr className="border-blue-400 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-x-10 gap-y-16 pb-24">
        {items.map((item) => (
          <div key={item._id} className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-96 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(item.mainImage).url()}
                alt={item.title}
                fill
              />
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                  <p className="font-bold">{item.title}</p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex-1">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <p className="underline text-lg font-bold">{item.title}</p>
                  <p className="mx-2 font-bold text-1xl">${item.price}</p>
                </div>
                <div>
                  <p className="text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  addItemToBasket(
                    item._id,
                    urlFor(item.mainImage).url(),
                    item.title,
                    item.price,
                    item.description
                  );
                }}
                className="text-white w-full bg-gray-400 px-4 py-1 rounded-md mt-1"
              >
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
