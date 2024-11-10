import Head from 'next/head';
import PropTypes from 'prop-types';
import BlogRightSidebar from '../../components/blogs/rightsidebar';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import { getBlogCategories } from '../../lib/blog-categories';
import { getBlogTags } from '../../lib/blog-tags';
import { getAllItems } from '../../lib/items-util';

function BlogLeftSidebarPage({
    blogs,
    blogsSidebar,
    categories,
    tags,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Blogs RightSidebar - OxyBuild</title>
                <meta name="description" content="All Blogs" />
            </Head>
            <Breadcrumb
                subTitle="Our Blog"
                title="Right Sidebar"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <BlogRightSidebar
                blogs={blogs}
                blogsSidebar={blogsSidebar}
                categories={categories}
                tags={tags}
            />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('blogs');
    const categories = getBlogCategories();
    const tags = getBlogTags();
    const blogsSidebar = getAllItems('blog-sidebar');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            blogs: allItems,
            categories,
            tags,
            blogsSidebar,
            newsletterItems,
            footerItems,
        },
    };
}

BlogLeftSidebarPage.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default BlogLeftSidebarPage;
