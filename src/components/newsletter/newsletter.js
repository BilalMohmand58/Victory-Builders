// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import classes from './newsletter.module.scss';

// function Newsletter({ newsletterItems }) {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!email) {
//             setMessage('Please enter a valid email.');
//             return;
//         }
//         setIsLoading(true); // Start loading

//         try {
//             const response = await fetch('../../pages/api/subscribe', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ email }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setMessage('Subscription successful!');
//                 setEmail('');
//             } else {
//                 setMessage(data.message || 'An error occurred.');
//             }
//         } catch (error) {
//             setMessage('Network error. Please try again.');
//         } finally {
//             setIsLoading(false); // Stop loading
//         }
//     };

//     return (
//         <div className={`${classes.bg}`}>
//             <Container>
//                 <Row>
//                     {newsletterItems?.map((newsletterItem) => (
//                         <Col lg={{ span: 12 }} key={newsletterItem.id}>
//                             <div className={classes.item}>
//                                 <h2 className={classes.title}>
//                                     {newsletterItem?.title}
//                                 </h2>
//                                 <form className={classes.form} onSubmit={handleSubmit}>
//                                     <input
//                                         className={classes.input_field}
//                                         type="email"
//                                         placeholder="To get updates, enter your email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                     <div className={classes.btn__wrap}>
//                                         <button
//                                             type="submit"
//                                             className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}
//                                             disabled={isLoading}
//                                         >
//                                             {isLoading ? 'Subscribing...' : 'Subscribe now'}
//                                         </button>
//                                     </div>
//                                     {message && <p className={classes.message}>{message}</p>}
//                                 </form>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// Newsletter.propTypes = {
//     newsletterItems: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// export default Newsletter;
// import PropTypes from 'prop-types';
// import { Col, Container, Row } from 'react-bootstrap';
// import classes from './newsletter.module.scss';

// function Newsletter({ newsletterItems }) {
//     return (
//         <div className={`${classes.bg}`}>
//             <Container>
//                 <Row>
//                     {newsletterItems?.map((newsletterItem) => (
//                         <Col lg={{ span: 12 }} key={newsletterItem.id}>
//                             <div className={classes.item}>
//                                 <h2 className={classes.title}>
//                                     {newsletterItem?.title}
//                                 </h2>
//                                 <form className={classes.form}>
//                                     <input
//                                         className={classes.input_field}
//                                         type="email"
//                                         placeholder="To get update, enter your email"
//                                     />
//                                     <div className={classes.btn__wrap}>
//                                         <button
//                                             type="submit"
//                                             className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}
//                                         >
//                                             Subscribe now
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// Newsletter.propTypes = {
//     newsletterItems: PropTypes.instanceOf(Object).isRequired,
// };

// export default Newsletter;
import { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './newsletter.module.scss';

function Newsletter({ newsletterItems }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs
            .send(
                'service_m4b4qh5', // Replace with your EmailJS service ID
                'template_2puvcfa', // Replace with your EmailJS template ID
                { email }, // Email data to be sent
                '1ScSGwq6xl7Pz6CZ5' // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log('Success:', result.text);
                    setStatus('Thanks for subscribing!');
                    setTimeout(() => {
                        setStatus('');
                    }, 1000);
                    setEmail(''); // Clear email field
                },
                (error) => {
                    console.log('Error:', error.text);
                    setStatus('Failed to subscribe. Please try again.');
                }
            );
    };

    return (
        <div className={`${classes.bg}`}>
            <Container>
                <Row>
                    {newsletterItems?.map((newsletterItem) => (
                        <Col lg={{ span: 12 }} key={newsletterItem.id}>
                            <div className={classes.item}>
                                <h2 className={classes.title}>
                                    {newsletterItem?.title}
                                </h2>
                                <form
                                    className={classes.form}
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        className={classes.input_field}
                                        type="email"
                                        placeholder="To get updates, enter your email"
                                        required
                                        value={email}
                                        onChange={handleChange}
                                    />
                                    <div className={classes.btn__wrap}>
                                        <button
                                            type="submit"
                                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}
                                        >
                                            Subscribe now
                                        </button>
                                    </div>
                                </form>
                                {status && (
                                    <p className={classes.status}>{status}</p>
                                )}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

Newsletter.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
};

export default Newsletter;
