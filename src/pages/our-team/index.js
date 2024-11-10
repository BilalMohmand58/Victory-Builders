import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import TeamTwo from '../../components/team/index-2';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';
import CounterTwo from '../../components/counter/index-2';

function OurClients({ teamItemsTwo, newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Our Team - Oxybuild</title>
                <meta
                    name="description"
                    content="OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                />
            </Head>
            <Breadcrumb
                subTitle="Our Team"
                title="Professional"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <TeamTwo teamItemsTwo={teamItemsTwo} />
            <CounterTwo />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const teamItemsTwo = getAllItems('team-02');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            teamItemsTwo,
            newsletterItems,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    teamItemsTwo: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;
