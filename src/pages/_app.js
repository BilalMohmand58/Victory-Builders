import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';

<<<<<<< HEAD
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Component {...pageProps} />
            <ScrollToTop />
        </Layout>
=======
// function MyApp({ Component, pageProps }) {
//     return (
//         <Layout>
//             <Head>
//                 <meta
//                     name="viewport"
//                     content="width=device-width, initial-scale=1"
//                 />
//                 <link rel="icon" href="/favicon.png" />
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

import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from '../components/error-404/index.module.scss';

function MyApp() {
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [windowWidth, setWindowWidth] = useState(0); // Default value for windowWidth

    useEffect(() => {
        // Set the target date 10 days from today
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 10); // Set target to 10 days from today

        const interval = setInterval(() => {
            updateTimer(targetDate);
        }, 1000);

        // Adjust font size based on window width (only in the browser)
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Check if window is available (only in browser)
        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);
        }

        return () => {
            clearInterval(interval);
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    const updateTimer = (targetDate) => {
        const now = new Date();
        const timeLeft = targetDate - now; // Time left in milliseconds

        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }

        // Calculate remaining days, hours, minutes, and seconds
        const remainingDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Days
        const remainingHours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ); // Hours
        const remainingMinutes = Math.floor(
            (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
        ); // Minutes
        const remainingSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Seconds

        // Format hours, minutes, and seconds to have leading zeroes if necessary
        setDays(remainingDays);
        setHours(remainingHours < 10 ? `0${remainingHours}` : remainingHours);
        setMinutes(
            remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes
        );
        setSeconds(
            remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
        );
    };

    // Inline CSS styles with dynamic font size based on screen width
    const timerStyles = {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginTop: '20px',
        flexWrap: 'wrap',
    };

    const timeSectionStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#222',
        color: '#fff',
        padding: '15px 20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        marginBottom: '10px',
    };

    const timeNumberStyles = {
        fontSize: windowWidth < 600 ? '1.5rem' : '2.5rem', // Reduce font size on small screens
        fontWeight: 'bold',
        color: '#eb9d0c',
        marginBottom: '5px',
    };

    const timeLabelStyles = {
        fontSize: windowWidth < 600 ? '0.8rem' : '1rem', // Adjust label font size
        fontWeight: '500',
        color: '#aaa',
        textTransform: 'uppercase',
    };

    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <div className={classes.content}>
                            <h2 className={classes.subtitle}>Coming Soon</h2>
                            <h2 className={classes.subtitle}>
                                <span>Victory Builders</span>
                            </h2>
                            <p className={classes.desc}>
                                Stay tuned, Victory Builders is launching soon.
                                Thank you for your patience.
                            </p>

                            <div style={timerStyles}>
                                <div style={timeSectionStyles}>
                                    <div style={timeNumberStyles}>{days}</div>
                                    <span style={timeLabelStyles}>Days</span>
                                </div>
                                <div style={timeSectionStyles}>
                                    <div style={timeNumberStyles}>{hours}</div>
                                    <span style={timeLabelStyles}>Hours</span>
                                </div>
                                <div style={timeSectionStyles}>
                                    <div style={timeNumberStyles}>
                                        {minutes}
                                    </div>
                                    <span style={timeLabelStyles}>Minutes</span>
                                </div>
                                <div style={timeSectionStyles}>
                                    <div style={timeNumberStyles}>
                                        {seconds}
                                    </div>
                                    <span style={timeLabelStyles}>Seconds</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
>>>>>>> c84605835f4a04a72f80ddfd49a2f7f4efd7b8e0
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
