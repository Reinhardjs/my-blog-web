import Head from "next/head";
import "../styles/globals.css";
import Format from "../layout/format";

function MyApp({ Component, pageProps }) {
  return (
    <Format>
      <Head>
        <script
          async={true}
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3292440827260317"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </Format>
  );
}

export default MyApp;
