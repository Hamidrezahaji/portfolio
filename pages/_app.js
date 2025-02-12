import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hamidreza Haji - UX/UI Designer</title>
        <meta name="description" content="Experienced UX/UI Designer with over 8 years of experience in developing digital products." />
        <meta name="keywords" content="UX/UI Designer, Product Designer, Portfolio" />
        <meta name="author" content="Hamidreza Haji" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}