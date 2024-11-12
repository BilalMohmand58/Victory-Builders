import Head from 'next/head';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import classes from '../../components/blogs/blog.module.scss';
import Breadcrumb from '../../components/breadcrumb';
import PageNavigation from '../../components/page-navigation';
import BlogFullwidthItem from '../../components/blogs/fullwidth-item';
import client from '../../lib/contentful-client';

function DefaultBlogPage({ blogs }) {
    return (
        <>
            <Head>
                <title>Blogs - Victory Builders</title>
                <meta name="description" content="All Blogs" />
            </Head>
            <Breadcrumb
                subTitle="Our Blog"
                title="blogs"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <div>
                <Container>
                    <Row className="g-0">
                        <Col lg={{ span: 12 }}>
                            <div className={classes.blog}>
                                <Container>
                                    <Row className="g-min-lg-30 g-y-max-md-25">
                                        {blogs.map((blog) => (
                                            <BlogFullwidthItem
                                                key={blog.sys.id}
                                                blog={blog.fields}
                                            />
                                        ))}
                                    </Row>
                                    <PageNavigation />
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const allItems = await client.getEntries({ content_type: 'blog' });

    return {
        props: {
            blogs: allItems.items,
        },
        revalidate: 10,
    };
}

DefaultBlogPage.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            sys: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
            fields: PropTypes.shape({
                title: PropTypes.string.isRequired,
                shortDescription: PropTypes.string,
                slug: PropTypes.string.isRequired,
                blogMeta: PropTypes.string,
                thumbnail: PropTypes.shape({
                    fields: PropTypes.shape({
                        file: PropTypes.shape({
                            url: PropTypes.string.isRequired,
                        }).isRequired,
                    }).isRequired,
                }).isRequired,
            }).isRequired,
        })
    ).isRequired,
};

export default DefaultBlogPage;
