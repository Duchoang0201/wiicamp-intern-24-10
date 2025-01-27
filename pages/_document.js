import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" title="Exclusive" suppressHydrationWarning="false">
      <Head>
        <link rel="preload" href="/path/to/image.ext" as="image" />
        <meta
          name="description"
          content=" Where luxury meets exclusivity in a meticulously curated digital haven, offering rare treasures and bespoke experiences tailored to the most discerning tastes. Welcome to a realm of sophistication and personalized indulgence at your fingertips."
          key="desc"
        />
        <meta
          itemProp="og:image"
          content="../components/Layouts/IndexPage/HerroBanner/Banner.jpg"
        />
      </Head>
      <body>
        {/* <Header /> */}

        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
