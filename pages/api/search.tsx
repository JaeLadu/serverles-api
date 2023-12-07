import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;
   if (method == "GET") {
      res.status(200).json({
         recivedQuery: req.query,
         message: `Devolvería resultado de búsqueda en query`,
      });
   }
}
