import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            src="https://analytics.us.umami.is/script.js"
            data-website-id="828802b9-caaa-4521-bb32-cb22140956e7"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
