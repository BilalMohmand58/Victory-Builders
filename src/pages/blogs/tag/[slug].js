import Head from 'next/head';
import PropTypes from 'prop-types';
import BlogLeftSidebar from '../../../components/blogs/leftsidebar';
import { getBlogCategories } from '../../../lib/blog-categories';
import { getAllItems } from '../../../lib/items-util';
import { getBlogTags } from '../../../lib/blog-tags';

function BlogTagPage({ categories, tags, blogs, blogsSidebar }) {
    return (
        <>
            <Head>
                <title>Blog Tags - OxyBuild</title>
                <meta name="description" content="All Blogs" />
            </Head>
            <BlogLeftSidebar
                blogs={blogs}
                blogsSidebar={blogsSidebar}
                categories={categories}
                tags={tags}
            />
        </>
    );
}

export const getStaticProps = ({ params }) => {
    const { slug } = params;
    const blogs = getAllItems('blogs');
    const blogsSidebar = getAllItems('blog-sidebar');
    const filteredblogs = blogs
        .map((blog) => ({
            ...blog,
            uniqueTag: blog.tag.find((tag) => tag === slug),
        }))
        .filter((blog) => blog.uniqueTag === slug);
    const tags = getBlogTags();
    const categories = getBlogCategories();

    return {
        props: {
            blogs: filteredblogs,
            categories,
            tags,
            blogsSidebar,
        },
    };
};

export const getStaticPaths = () => {
    const tags = getBlogTags();

    return {
        paths: tags.map((tag) => ({
            params: { slug: tag },
        })),
        fallback: false,
    };
};

BlogTagPage.propTypes = {
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default BlogTagPage;
