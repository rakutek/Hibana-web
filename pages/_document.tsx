import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class DefaultDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <Head>
          <title />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
