import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import ProjectSidebar from '../project-sidebar';
import ProjectContent from './project-content';

function ProjectDetail({
    project,
    richTexts,
    projectsOverview,
    projectsSidebar,
}) {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <ProjectContent
                        project={project}
                        richTexts={richTexts}
                        projectsOverview={projectsOverview}
                    />
                    <div style={{ display: 'none' }}>
                        <ProjectSidebar projectsSidebar={projectsSidebar} />
                    </div>
                </Row>
            </Container>
        </div>
    );
}

ProjectDetail.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    projectsOverview: PropTypes.instanceOf(Object).isRequired,
    projectsSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectDetail;
