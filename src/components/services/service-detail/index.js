import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import ServiceSidebar from '../service-sidebar';
import classes from './index.module.scss';
import ServiceContent from './service-content';

function ServiceDetail({
    service,
    sidebarList,
    richTexts,
    ourServices,
    servicesSidebar,
}) {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <ServiceContent
                        service={service}
                        richTexts={richTexts}
                        ourServices={ourServices}
                    />
                    <div style={{ display: 'none' }}>
                        <ServiceSidebar
                            sidebarList={sidebarList}
                            servicesSidebar={servicesSidebar}
                        />
                    </div>
                </Row>
            </Container>
        </div>
    );
}

ServiceDetail.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    sidebarList: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    ourServices: PropTypes.instanceOf(Object).isRequired,
    servicesSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceDetail;
