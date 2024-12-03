import { Col, Container, Row } from 'react-bootstrap';

import classes from '../team/team.module.scss';

function UpcomingProjects() {
    return (
        <div className={classes.area}>
            <Container>
                <div className={classes.section}>
                    <div className={classes.section__wrap}>
                        <div className={classes.section_title}>
                            <span>Upcoming Project:</span>
                            <h2>Grand Prairie Gardens</h2>
                        </div>
                        <div className={classes.section_desc}>
                            <p>
                                Victory Builders is excited to partner with
                                Maidaan Properties to bring Grand Prairie
                                Gardens to life. As one of our visionary
                                projects, Grand Prairie Gardens will feature
                                community-centered amenities and high-quality
                                construction, creating a lasting and inviting
                                environment for future residents.
                            </p>
                        </div>
                    </div>
                </div>

                <Row>
                    <Col lg={{ span: 6 }}>
                        <div className={classes.item}>
                            <div className={classes.img}>
                                <img
                                    src="https://www.barrowbridgeconstructionltd.co.uk/wp-content/uploads/2017/05/shutterstock_566187289-min.jpg"
                                    alt=""
                                    className="img-full"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 6 }}>
                        <div className={classes.item}>
                            <div className={classes.img}>
                                <img
                                    src="https://www.barrowbridgeconstructionltd.co.uk/wp-content/uploads/2017/05/shutterstock_566187289-min.jpg"
                                    alt=""
                                    className="img-full"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UpcomingProjects;
