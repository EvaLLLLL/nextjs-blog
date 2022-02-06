import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Alert from "../../components/alert";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/xiaoliuya.png" />
      </Head>

      <h1>First Post</h1>

      <Alert type="success">success alert</Alert>
      <Alert type="error">error alert</Alert>
    </Layout>
  );
}
