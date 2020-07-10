import { NextApiRequest, NextApiResponse } from "next";

export default (_: NextApiRequest, response: NextApiResponse): void => {
  response.statusCode = 200;
  response.json({ staus: "OK" });
};
