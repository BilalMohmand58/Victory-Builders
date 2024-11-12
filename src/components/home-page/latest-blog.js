import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './latest-blog.module.scss';
import SwiperComps, { Slide } from '../swiper';

function LatestBlog({ blogs, blogSectionItems, settings }) {
    settings = {
        pagination: false,
        spaceBetween: 30,
        breakpoints: {
            1200: { slidesPerView: 3 },
            992: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
        },
    };

    return (
        <div className={classes.area}>
            <Container>
                {blogSectionItems?.map((item) => (
                    <div className={classes.section__holder} key={item.id}>
                        <div className={classes.section_title__wrap}>
                            <div className={classes.section_title}>
                                <span className={classes.sub_title}>
                                    {item?.subTitle}
                                </span>
                                <h2 className={classes.title}>{item?.title}</h2>
                            </div>
                            <p className={classes.section_desc}>
                                {item?.excerpt}
                            </p>
                        </div>
                    </div>
                ))}
                <Row>
                    <Col lg={{ span: 12 }}>
                        <div className={classes.slider}>
                            <SwiperComps settings={settings}>
                                {blogs.map((blog) => (
                                    <Slide
                                        className={classes.blog__item}
                                        key={blog.slug}
                                    >
                                        <div className={classes.blog_item}>
                                            <Link
                                                href={`/blogs/${blog.slug}`}
                                                className={classes.blog_img}
                                            >
                                                <img
                                                    className="img-full"
                                                    src={blog.thumbnailUrl}
                                                    alt={blog.title}
                                                />
                                            </Link>
                                            <div
                                                className={classes.blog_content}
                                            >
                                                <span
                                                    className={
                                                        classes.blog_meta
                                                    }
                                                >
                                                    {new Date(blog.date).toLocaleDateString()}
                                                </span>
                                                <h3
                                                    className={
                                                        classes.blog_title
                                                    }
                                                 
                                                >
                                                    <Link
                                                        href={`/blogs/${blog.slug}`}
                                                           style={{
                                                        color:"#eb9d0c"
                                                    }}
                                                    >
                                                        {blog.title}
                                                    </Link>
                                                </h3>
                                                <p
                                                    className={
                                                        classes.blog_desc
                                                    }
                                                >
                                                    {blog.shortDescription}
                                                </p>
                                                <ul
                                                    className={
                                                        classes.blog_btn__wrap
                                                    }
                                                >
                                                    <li>
                                                        <Link
                                                            href={`/blogs/${blog.slug}`}
                                                            className={
                                                                classes.blog_btn__link
                                                            }
                                                            style={{
                                                                color:"#eb9d0c"
                                                            }}
                                                        >
                                                            Read more
                                                        </Link>
                                                    </li>
                                                    {/* <li>
                                                        <Link href="#">
                                                            35 Comments
                                                        </Link>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </Slide>
                                ))}
                            </SwiperComps>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

LatestBlog.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            shortDescription: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string,
        })
    ).isRequired,
    blogSectionItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default LatestBlog;
