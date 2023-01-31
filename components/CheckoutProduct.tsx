import Currency from "react-currency-formatter";

function CheckoutProduct({ id, url, title, price, description }: any) {
  return (
    <div className="grid grid-cols-5">
      <img src={url} height={400} width={100} />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <Currency quantity={price} currency={"USD"} />
        <p className="text-gray-500 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
