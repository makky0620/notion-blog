import { AppProps } from "next/app";
import React from "react";
import "../styles/output.css";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
