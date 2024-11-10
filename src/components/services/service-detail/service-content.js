import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import RichText from '../../rich-text';
import classes from './index.module.scss';
import OurServices from './our-services';

function ServiceContent({ service, richTexts, ourServices }) {
    const imagePath = `/images/services/${service?.slug}/${service?.largeImage}`;

    return (
        <Col lg={{ span: 12 }} className="pe-lg-45">
            <div className="banner">
                <img
                    className="img-full"
                    src={imagePath}
                    alt={service?.title}
                />
            </div>
            <div className={classes.content}>
                <h2 className={classes.title}>{service?.title}</h2>
                <h3 className={classes.subtitle}>{service?.detailSubTitle}</h3>
                <p className={classes.desc}>{service?.detailDesc}</p>
            </div>
            <div style={{ display: 'none' }}>
                <RichText richTexts={richTexts} />
                <OurServices ourServices={ourServices} />
            </div>
        </Col>
    );
}

ServiceContent.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    ourServices: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceContent;
