import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import Script from 'next/script';
// Load DM Sans typeface
import 'typeface-dm-sans';
import 'components/style.css';

// Load other package css file
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';

// AOS.init();

// You can also pass an optional settings object
// below listed default settings

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);
  
  
  
<!-- Google tag (gtag.js) -->
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-SD43VJXWZS"></Script>
<Script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SD43VJXWZS');
</Script>


  return <Component {...pageProps} />;
}
