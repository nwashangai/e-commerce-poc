import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>My Shop</title>
        <meta
          name="Description"
          content="A good place to start your shopping"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
