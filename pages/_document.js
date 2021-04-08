import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://ik.imagekit.io/03bj5xmyl" />
          <link rel="dns-prefetch" href="https://ik.imagekit.io/03bj5xmyl" />
        </Head>
        <body className="font-archivo">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
