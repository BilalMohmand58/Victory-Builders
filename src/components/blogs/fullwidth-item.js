import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import classes from './blog.module.scss';

function BlogFullwidthItem({ blog }) {
    const { title, shortDiscription, blogMeta, slug, thumbnail } = blog; // fixed typo here
    const imagePath = thumbnail.fields.file.url;
    const linkPath = `/blogs/${slug}`;

    return (
        <Col lg={{ span: 4 }} md={{ span: 6 }}>
            <div className={classes.blog_item}>
                <Link href={linkPath}>
                    <div className={classes.blog_img}>
                        <img className="img-full" src={imagePath} alt={title} />
                    </div>
                </Link>
                <div className={classes.blog_content}>
                    <span className={classes.blog_meta}>{blogMeta}</span>
                    <h3 className={classes.blog_title}>
                        <Link href={linkPath}>{title}</Link>
                    </h3>
                    <p className={classes.blog_desc}>{shortDiscription}</p>
                    <ul className={classes.blog_btn__wrap}>
                        <li>
                            <Link
                                href={linkPath}
                                className={classes.blog_btn__link}
                            >
                                Read more
                            </Link>
                        </li>
                        <li>
                            <Link href={linkPath}>35 Comments</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
    );
}

BlogFullwidthItem.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        shortDiscription: PropTypes.string,
        blogMeta: PropTypes.string,
        slug: PropTypes.string.isRequired,
        thumbnail: PropTypes.shape({
            fields: PropTypes.shape({
                file: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
};

export default BlogFullwidthItem;
