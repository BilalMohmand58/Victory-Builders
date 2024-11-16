import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutTwo from '../../components/about/index-2';
import BannerTwo from '../../components/banner/index-2';
import BannerFour from '../../components/banner/index-4';
import BrandOne from '../../components/brand';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import AllServices from '../../components/services/all-services';
import Breadcrumb from '../../components/breadcrumb';
import Testimonial from '../../components/testimonial';
import { getAllItems } from '../../lib/items-util';

function ServicePage({
    aboutItemsTwo,
    services,
    serviceSectionItems,
    bannerTwoItems,
    brandItems,
    bannerFourItems,
    bannerSection,
    testimonialItems,
    testimonialSectionItems,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Services - Victory Builders</title>
                <meta
                    name="description"
                    content="Victory Builders - Construction Industry, We specialize in delivering premium construction services, ensuring every project is completed with quality, precision, and customer satisfaction.."
                />
            </Head>
            <Breadcrumb
                subTitle="What we do"
                title="Our Services"
                desc="We specialize in delivering premium construction services, ensuring every project is completed with quality, precision, and customer satisfaction."
            />
            <AboutTwo aboutItemsTwo={aboutItemsTwo} />
            <AllServices
                services={services}
                serviceSectionItems={serviceSectionItems}
            />
            <BannerTwo bannerTwoItems={bannerTwoItems} />
            {/* <BrandOne brandItems={brandItems} /> */}
            <BannerFour
                bannerFourItems={bannerFourItems}
                bannerSection={bannerSection}
            />
            ;
            <Testimonial
                testimonialItems={testimonialItems}
                testimonialSectionItems={testimonialSectionItems}
            />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const aboutItemsTwo = getAllItems('about-2');
    const AllServices = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const bannerTwoItems = getAllItems('banner-2');
    const brandItems = getAllItems('brand');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const bannerFourItems = getAllItems('banner-4');
    const bannerSection = getAllItems('banner-section');
    const testimonialItems = getAllItems('testimonial');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItemsTwo,
            services: AllServices,
            serviceSectionItems,
            bannerTwoItems,
            brandItems,
            bannerFourItems,
            bannerSection,
            testimonialItems,
            testimonialSectionItems,
            newsletterItems,
            footerItems,
        },
    };
}

ServicePage.propTypes = {
    aboutItemsTwo: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    bannerFourItems: PropTypes.instanceOf(Object).isRequired,
    bannerSection: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServicePage;
