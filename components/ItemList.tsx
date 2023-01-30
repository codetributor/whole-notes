import urlFor from "@/lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  items: Item[];
};

function ItemList({ items }: Props) {
  return (
    <div>
      <hr className="border-blue-400 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-x-10 gap-y-16 pb-24">
        {items.map((item) => (
          <ClientSideRoute key={item._id} route={`/item/${item.slug.current}`}>
            <div className="flex flex-col group cursor-pointer">
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
                <div className="flex items-center">
                  <p className="underline text-lg font-bold">{item.title}</p>
                  <p className="mx-2 font-bold text-1xl">${item.price}</p>
                </div>
                <button className="text-white bg-gray-400 px-4 py-1 rounded-md mt-1">
                  add to cart
                </button>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
