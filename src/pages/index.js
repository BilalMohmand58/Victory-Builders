import Head from 'next/head';
import PropTypes from 'prop-types';
import { createClient } from 'contentful';
import AboutOne from '../components/about';
import BannerOne from '../components/banner';
import BannerTwo from '../components/banner/index-2';
import BrandOne from '../components/brand';
import Counter from '../components/counter';
import Hero from '../components/home-page/hero';
import HomePageServices from '../components/home-page/homepage-services';
import LatestBlog from '../components/home-page/latest-blog';
import LatestProject from '../components/home-page/latest-project';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import Team from '../components/team';
import Testimonial from '../components/testimonial';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import UpcomingProjects from '../components/upcomingproject';

const client = createClient({
    space: 'r7m5srze2050',
    accessToken: '-iFsrujrQd6O5Zk-xT1LKX8hXzUHK_5EsGeAMEoAadE',
});

function HomePage({
    heroItems,
    bannerItems,
    aboutItems,
    projects,
    projectSectionItems,
    brandItems,
    services,
    serviceSectionItems,
    bannerTwoItems,
    teamItems,
    teamSectionItems,
    testimonialItems,
    testimonialSectionItems,
    blogs,
    blogSectionItems,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Home - VictoryBuilders</title>
                <meta name="description" content="Victory Builder - Start Building Your Victory" />
            </Head>
            <Hero heroItems={heroItems} />
            <BannerOne bannerItems={bannerItems} />
            <AboutOne aboutItems={aboutItems} />
            {/* <LatestProject
                projects={projects}
                projectSectionItems={projectSectionItems}
            /> */}

            {/* <BrandOne brandItems={brandItems} /> */}
            <HomePageServices
                services={services}
                serviceSectionItems={serviceSectionItems}
            />
            <BannerTwo bannerTwoItems={bannerTwoItems} />
            <Counter />
            {/* <Team teamItems={teamItems} teamSectionItems={teamSectionItems} /> */}
            <UpcomingProjects />
            <Testimonial
                testimonialItems={testimonialItems}
                testimonialSectionItems={testimonialSectionItems}
            />
            <LatestBlog blogs={blogs} blogSectionItems={blogSectionItems} />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export async function getStaticProps() {
    const heroItems = getAllItems('heros');
    const bannerItems = getAllItems('banner');
    const aboutItems = getAllItems('about');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const brandItems = getAllItems('brand');
    const services = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const HomePageServices = getFeaturedItems(services);
    const bannerTwoItems = getAllItems('banner-2');
    const teamItems = getAllItems('team');
    const teamSectionItems = getAllItems('team-section');
    const testimonialItems = getAllItems('testimonial');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const blogSectionItems = getAllItems('blog-section');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    // Fetch blogs from Contentful
    const blogResponse = await client.getEntries({
        content_type: 'blog',
        // order: '-fields.date',
        limit: 5, // Fetch only the latest 5 blog posts
    });

    const blogs = blogResponse.items.map((item) => ({
        title: item.fields.title,
        slug: item.fields.slug,
        date: item.fields.date,
        shortDescription: item.fields.shortDiscription,
        thumbnailUrl: item.fields.thumbnail?.fields.file.url,
    }));

    return {
        props: {
            heroItems,
            bannerItems,
            aboutItems,
            projectSectionItems,
            projects: LatestProject,
            brandItems,
            services: HomePageServices,
            serviceSectionItems,
            bannerTwoItems,
            teamItems,
            teamSectionItems,
            testimonialItems,
            testimonialSectionItems,
            blogSectionItems,
            blogs,
            newsletterItems,
            footerItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    bannerItems: PropTypes.instanceOf(Object).isRequired,
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
