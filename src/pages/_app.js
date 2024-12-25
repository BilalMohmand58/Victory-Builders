// import Head from 'next/head';
// import PropTypes from 'prop-types';
// import Layout from '../components/layout/layout';
// import '../styles/globals.scss';
// import { ScrollToTop } from '../components/scroll';

// function MyApp({ Component, pageProps }) {
//     return (
//         <Layout>
//             <Head>
//                 <meta
//                     name="viewport"
//                     content="width=device-width, initial-scale=1"
//                 />
//                 <link rel="icon" href="/favicon.ico" />
//                  {/* Klaviyo Script */}
//                  <script
//                     async
//                     type="text/javascript"
//                     src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=R6tVP6"
//                 />
//             </Head>
//             <Component {...pageProps} />
//             <ScrollToTop />
//         </Layout>
//     );
// }

// MyApp.propTypes = {
//     Component: PropTypes.func.isRequired,
//     pageProps: PropTypes.instanceOf(Object).isRequired,
// };

// export default MyApp;

import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                {/* Klaviyo Script */}
                <script
                    async
                    type="text/javascript"
                    src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=R6tVP6"
                />
                {/* Google Analytics Script */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-T0GFQT0JMJ"
                ></script>
                <script>
                    {`window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', 'G-T0GFQT0JMJ');`}
                </script>
            </Head>
            <Component {...pageProps} />
            <ScrollToTop />
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
