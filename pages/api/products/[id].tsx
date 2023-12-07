import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;
   const id = req.url?.split("/")[3];
   if (method == "GET") {
      res.status(200).json({
         productId: id,
         message: `Devolvería toda la data del producto que recibió el ID`,
      });
   }
}
