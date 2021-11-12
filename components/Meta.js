import Head from "next/head";
import { meta } from "../utils/meta";

export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={meta.keywords} />
      <meta name="description" content={meta.description} />
      <meta charSet="utf-8" />
      <title>{meta.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
