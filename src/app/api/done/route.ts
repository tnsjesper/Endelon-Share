import { QuickDB } from "quick.db";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const db = new QuickDB();


  console.log(body);
  console.log(body.input);
  console.log(body.uuid);

  // await db.set(body.uuid, { input: `${body.input}` })

  return new Response(JSON.stringify({ hello: "world" }));
}
