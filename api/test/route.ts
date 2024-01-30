// pages/api/test.ts

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Your API logic goes here
    const data = { message: "This is a sample API response" };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error processing API request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
