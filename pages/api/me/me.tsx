import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const token = req.headers.authorization?.split(" ")[1];
   const { method } = req;
   if (method == "GET") {
      res.status(200).json({
         recivedtoken: token,
         message: `Devolvería info del user como mail, nombre, etc`,
      });
   }
   if (method == "PATCH") {
      res.status(200).json({
         message: "Actualiza la info del user",
         recivedtoken: token,
      });
   }
}
