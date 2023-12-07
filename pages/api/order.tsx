import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;
   const { productId } = req.query;
   const orderId = Math.ceil(Math.random() * 100);
   if (method == "POST") {
      res.status(200).json({
         recivedProduct: productId,
         orderId,
         message: `Genera compra en DB y redirege a mercadopago/${orderId}`,
      });
   }
}
