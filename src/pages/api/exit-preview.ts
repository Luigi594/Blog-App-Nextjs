import { NextApiRequest, NextApiResponse } from "next";
import { draftMode } from "next/headers";

export async function exit(req: NextApiRequest, res: NextApiResponse) {
  draftMode().disable();
  res.clearPreviewData();
  res.writeHead(307, { Location: "/" });
  res.end();
}
