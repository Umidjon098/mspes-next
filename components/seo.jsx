import Head from "next/head";

export default function SEO({ title, description, image, keywords }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title ? `${title}` : "Mspes"}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mspes" key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:site_name" content="EVOS" key="ogsitename" />
      <meta property="og:image" content={image || "/mspes.jpg"} key="ogimage" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title ? `${title}` : `Mspes`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="Mspes" />
      <meta name="twitter:creator" content="Mspes" />
      <meta name="twitter:image" content={image || "/mspes.jpg"} />
      <link rel="icon" href="/mspes.jpg" />
    </Head>
  );
}
