import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
        <title>URBAN SCIENCE MEP</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="URBAN SCIENCE MEP" />
          <meta name="keywords" content="URBAN SCIENCE MEP" />
          <meta name="author" content="URBAN SCIENCE MEP" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="google" content="notranslate" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="format-detection" content="address=no" />
          <meta name="format-detection" content="email=no" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="MobileOptimized" content="320" />
          <meta name="referrer" content="origin" />
      
      <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-SD43VJXWZS`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SD43VJXWZS', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

        {/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}
        </Head>
        
        <body style={{overflowX:'hidden'}}>
          <Main />
          <NextScript />
          {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script> */}
          {/* <script>
           AOS.init();
           </script>   */}
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
