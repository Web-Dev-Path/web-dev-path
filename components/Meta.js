import Head from "next/head";
import { title, keywords, description } from "../utils/meta";

export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
