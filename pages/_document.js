import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <Script
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: ``,
            }}
          />

          {/* <div id='bro_reservation'></div><input type='hidden' id='cid' value='nVl0nR9tAGBmFccxf4xvDg%3d%3d' /><input type='hidden' id='dbaid' value='L4JAaOi0gExXw5xek9dmgQ%3d%3d' /> <script type='text/javascript'> (function () { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://bookridesonline.com/web/reservation.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })(); </script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
