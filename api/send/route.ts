import { Resend } from "resend";
import * as React from "react";
import EmailTemplate from "@/components/email/TamplateEmail";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail: string = process.env.FORM_EMAIL || "";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, subject, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: EmailTemplate({
        subject: subject,
        message: message,
      }) as React.ReactElement,
    });

    // Check if 'error' is defined and not null
    if ("error" in response && response.error !== null) {
      // Handle the error
      return res.status(500).json({ error: response.error });
    }

    // Check if 'data' is defined
    if ("data" in response) {
      // Use the actual structure of your response
      const data = response.data;
      return res.json({ data });
    } else {
      // Handle the case where 'data' doesn't exist in the response
      console.error("Unexpected response structure:", response);
      return res.status(500).json({ error: "Unexpected response structure" });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
}
