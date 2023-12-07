import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const { mail, code } = req.body;
   const { method } = req;
   const token = Math.random() * code;
   if (method == "POST") {
      res.status(200).json({
         recivedMail: mail,
         recivedCode: code,
         message: `Tu token es: ${token}`,
      });
   }
}
