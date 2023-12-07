import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;
   if (method == "POST") {
      res.status(200).json({
         message: `Recibe señal de pago procesado y hace cosas...`,
      });
   }
}
