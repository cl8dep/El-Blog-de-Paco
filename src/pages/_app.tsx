import React from "react";
import { AppContext } from "next/app";
import Script from 'next/script'
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "../config";

import "../assets/styles/pace.css";
import "../assets/styles/styles.css";
import "../assets/styles/code.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class MyApp extends React.Component<MyAppProps> {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }

  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link
            rel="manifest"
            href={`${process.env.NEXT_PUBLIC_HOSTNAME}/manifest.json`}
          />
          <meta
            name="msapplication-TileColor"
            content={theme.palette.primary.main}
          />

          <Script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></Script>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
            }}
          />
        </Head>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "es",
            url: "https://eventos.streamingcuba.com",
            title: "El Blog de Paco",
            description: "Nuestros eventos al alcance de todos.",
          }}
          titleTemplate="%s"
          defaultTitle="El Blog de Paco"
          description="Nuestros eventos al alcance de todos."
        />
        {this.props.error || this.state.error ? (
          <this.props.Component {...this.props.pageProps} />
        ) : (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <this.props.Component {...this.props.pageProps} />
            <Footer />
          </ThemeProvider>
        )}
      </>
    );
  }

  static async getInitialProps({ ctx }: AppContext) {
    const req = ctx.req;
    const pathname = ctx.pathname;
    const res = ctx.res;

    if (!req || !pathname || !res) {
      return {};
    }

    const hasError = res && res.statusCode >= 400;
    return { error: hasError };
  }
}

interface MyAppProps {
  Component: any;
  pageProps: any;
  user: any;
  error: boolean;
  version: string;
}

export default MyApp;
