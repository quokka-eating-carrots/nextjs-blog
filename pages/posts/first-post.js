import Head from 'next/head';
import Layout from '../../components/Layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>첫 번째글</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
