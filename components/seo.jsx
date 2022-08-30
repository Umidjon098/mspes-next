import Head from "next/head";

export default function SEO({ title, description, image, keywords }) {
  return (
    <Head>
      <title>{title ? `${title}` : "mspes.kz"}</title>
      <meta data-n-head="ssr" charSet="utf-8" />
      <meta
        data-n-head="ssr"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        data-n-head="ssr"
        name="robots"
        data-hid="robots"
        content="index, follow"
      />
      <meta
        data-n-head="ssr"
        name="googlebot"
        data-hid="googlebot"
        content="index, follow"
      />
      <meta data-n-head="ssr" name="description" content={description} />
      <meta
        data-n-head="ssr"
        name="keywords"
        content={
          keywords
            ? keywords
            : "maqola, transport, poyezd, temiryo'l, texnika, tarix, ijitimoiy, iqtisodiy, taqriz, ilmiy ish, ilmiy maqola, fan, ta'lim | статья, транспорт, поезд, Железнодорожный, технологии, История, Социальное, Экономическая, обзор, исследовательская работа, исследовательская работа, наука, Образование | article, transport, train, railway, technology, history, social, economic, review, research paper, research paper, science, education"
        }
      />
      <meta
        data-n-head="ssr"
        data-hid="name"
        name="itemprop"
        content="Ilmiy maqolalar mspes.kz | Hаучные статьи mspes.kz | scientific articles mspes.kz"
      />
      <meta
        data-n-head="ssr"
        data-hid="og:url"
        property="og:url"
        content="https://mspes.kz"
      />
      <meta data-n-head="ssr" property="og:type" content="website" />
      <meta
        data-n-head="ssr"
        property="og:title"
        content="mspes.kz"
        key="ogtitle"
      />
      <meta
        data-n-head="ssr"
        property="og:description"
        content={description}
        key="ogdesc"
      />
      <meta
        data-n-head="ssr"
        data-hid="og:site_name"
        property="og:site_name"
        content="mspes.kz"
      />
      <meta property="og:image" content={image || "/mspes.jpg"} key="ogimage" />
      <meta
        data-n-head="ssr"
        data-hid="twitter:url"
        name="twitter:url"
        content="https://mspes.kz"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title ? `${title}` : `mspes.kz`} />
      <meta name="twitter:description" content={description} />
      <meta
        data-n-head="ssr"
        data-hid="twitter:creator"
        name="twitter:creator"
        content="@mspes.kz"
      />
      <meta
        data-n-head="ssr"
        data-hid="twitter:site"
        name="twitter:site"
        content="@mspes.kz"
      />
      <meta
        data-n-head="ssr"
        name="twitter:image"
        content={image || "/mspes.jpg"}
      />
      <link rel="icon" href="/mspes.jpg" />
    </Head>
  );
}
