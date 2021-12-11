import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // To fix the issue with material UI for server side rendering (overidding styles).
  // materialUI collide with makeStyle JSS style after page refresh
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
