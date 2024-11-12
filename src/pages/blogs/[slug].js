import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { IoSearchOutline } from 'react-icons/io5';
import { Col, Container, Row } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import client from '../../lib/contentful-client';
import Breadcrumb from '../../components/breadcrumb';
import classes from '../../components/blogs/blog.module.scss';

export async function getStaticPaths() {
    const entries = await client.getEntries({ content_type: 'blog' });

    const paths = entries.items.map((entry) => ({
        params: { slug: entry.fields.slug },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const blog = await client
        .getEntries({
            content_type: 'blog',
            'fields.slug': slug,
            limit: 1,
        })
        .then((res) => res.items[0] || null); // Handle if no blog is found

    const blogsSidebar = await client
        .getEntries({
            content_type: 'blog',
            order: '-fields.date',
            limit: 3,
        })
        .then((res) => res.items);

    return {
        props: {
            blog,
            blogsSidebar,
        },
        revalidate: 10,
    };
}

function BlogDetailPage({ blog, blogsSidebar }) {
    if (!blog) {
        return <p>Blog not found.</p>; // Handle not found case
    }

    const { title, discription, featureImage } = blog.fields; // Corrected "discription" to "Discription"
    const featureImageUrl = featureImage.fields.file.url;

    return (
        <>
            <Head>
                <title>{title} - OxyBuild</title>
                <meta name="Description" content={`Read about ${title}`} />
            </Head>
            <Breadcrumb
                subTitle="Blog Details"
                title={title}
                desc=""
            />
            <div style={{ marginTop: '50px' }}>
                <Container>
                    <Row>
                        <Col lg={{ span: 8 }} className="pe-lg-45">
                            <div className="banner">
                                <img
                                    className="img-full"
                                    src={featureImageUrl}
                                    alt={title}
                                />
                            </div>
                            <div className={classes.content}>
                                <h2 className={classes.title}>{title}</h2>
                                <div className={classes.item}>
                                    <div>
                                        {documentToReactComponents(discription)}{' '}
                                        {/* Handle rich text */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 4 }}>
                            <div className={classes.sidebar}>
                                <div className="sidebar-inner">
                                    {/* Search Widget */}
                                    <div
                                        className={`${classes.sidebar_widget} mb-40`}
                                    >
                                        <h2 className={classes.sidebar_title}>
                                            {title}
                                        </h2>
                                        <form className={classes.sidebar_form}>
                                            <input
                                                className={
                                                    classes.searchbox_input
                                                }
                                                type="search"
                                                name="search"
                                                placeholder="Type your keyword..."
                                            />
                                            <button
                                                type="button"
                                                className={
                                                    classes.searchbox_btn
                                                }
                                            >
                                                <IoSearchOutline />
                                            </button>
                                        </form>
                                    </div>

                                    {/* Popular Posts Widget */}
                                    <div
                                        className={`${classes.sidebar_widget} mb-40`}
                                    >
                                        <h2
                                            className={`${classes.sidebar_title} mb-25`}
                                        >
                                            Latest post
                                        </h2>
                                        <div
                                            className={
                                                classes.sidebar_list__slider
                                            }
                                        >
                                            {blogsSidebar.map((sidebarBlog) => (
                                                <div
                                                    key={sidebarBlog.sys.id}
                                                    className={
                                                        classes.sidebar_list__item
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            classes.sidebar_list__content
                                                        }
                                                    >
                                                        <h3
                                                            className={
                                                                classes.sidebar_list__title
                                                            }
                                                        >
                                                            <Link
                                                                href={`/blogs/${sidebarBlog.fields.slug}`}
                                                            >
                                                                <div>
                                                                    <img
                                                                        src={
                                                                            sidebarBlog
                                                                                .fields
                                                                                .thumbnail
                                                                                .fields
                                                                                .file
                                                                                .url
                                                                        }
                                                                        alt={
                                                                            sidebarBlog
                                                                                .fields
                                                                                .title
                                                                        }
                                                                        className={
                                                                            classes.sidebar_list__img
                                                                        }
                                                                    />
                                                                </div>
                                                            </Link>
                                                        </h3>
                                                        <p
                                                            className={
                                                                classes.sidebar_list__meta
                                                            }
                                                            style={{
                                                                color: 'rgb(87 89 91)',
                                                            }}
                                                        >
                                                            {
                                                                sidebarBlog
                                                                    .fields
                                                                    .title
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

BlogDetailPage.propTypes = {
    blog: PropTypes.shape({
        fields: PropTypes.shape({
            title: PropTypes.string.isRequired,
            discription: PropTypes.string,
            slug: PropTypes.string.isRequired,
            featureImage: PropTypes.shape({
                fields: PropTypes.shape({
                    file: PropTypes.shape({
                        url: PropTypes.string.isRequired,
                    }).isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    blogsSidebar: PropTypes.arrayOf(
        PropTypes.shape({
            sys: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
            fields: PropTypes.shape({
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
                thumbnail: PropTypes.shape({
                    fields: PropTypes.shape({
                        file: PropTypes.shape({
                            url: PropTypes.string.isRequired,
                        }).isRequired,
                    }).isRequired,
                }).isRequired,
                shortDiscription: PropTypes.string,
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default BlogDetailPage;
