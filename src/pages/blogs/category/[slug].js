import Head from 'next/head';
import PropTypes from 'prop-types';
import BlogLeftSidebar from '../../../components/blogs/leftsidebar';
import { getBlogCategories } from '../../../lib/blog-categories';
import { getAllItems } from '../../../lib/items-util';
import { getBlogTags } from '../../../lib/blog-tags';

function BlogCategoryPage({ categories, tags, blogs, blogsSidebar }) {
    return (
        <>
            <Head>
                <title>Blog Category - OxyBuild</title>
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
            uniqueCategory: blog.category.find(
                (cate) => cate?.split('|')[0]?.trim() === slug
            ),
        }))
        .filter((blog) => blog.uniqueCategory?.split('|')[0]?.trim() === slug);
    const categories = getBlogCategories();
    const tags = getBlogTags();

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
    const categories = getBlogCategories();

    return {
        paths: categories.map((category) => ({
            params: { slug: category.split('|')[0].trim() },
        })),
        fallback: false,
    };
};

BlogCategoryPage.propTypes = {
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default BlogCategoryPage;
