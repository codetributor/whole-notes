import type { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

export default async function createCheckoutSession(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { items } = req.body;

  console.log(items);

  const itemsArray: any = [];

  items.map((item: any) => {
    let product = {
      price: item.priceId,
      quantity: 1,
    };
    itemsArray.push(product);
  });

  const session = await stripe.checkout.sessions.create({
    line_items: itemsArray,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
  });
  res.status(200).json({ id: session.id });
}
