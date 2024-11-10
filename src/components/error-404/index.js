import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function Error404() {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <div className={classes.content}>
                            <h1 className={classes.title}>404</h1>
                            <h2 className={classes.subtitle}>
                                <span>Sorry,</span> this page not found!
                            </h2>
                            <p className={classes.desc}>
                                Seems like nothing was found at this location.
                                Try something else or you can go back to the
                                homepage following the button below!
                            </p>
                            <div className={`${classes.btn_wrap}`}>
                                <Link
                                    href="/"
                                    className={`${classes.btn} ${classes.btn_primary} ${classes.btn_hover__secondary}`}
                                >
                                    Back To Home
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Error404;
