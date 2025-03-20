import { Handlers, PageProps } from "$fresh/server.ts";

type Data = { text: string };

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const uuid = crypto.randomUUID();
    const resp = await ctx.render({ text: uuid });
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function AboutPage(props: PageProps<Data>) {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.{props.data.text}</p>
    </main>
  );
}
