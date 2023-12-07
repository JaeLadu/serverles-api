import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const { mail } = req.body;
   const { method } = req;
   if (method == "POST") {
      res.status(200).json({
         recivedMail: mail,
         message: `Mail enviado a ${JSON.stringify(mail)}`,
      });
   }
}
