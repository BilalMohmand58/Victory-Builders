

import { Col, Container, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import Link from 'next/link';
import { Fragment } from 'react';
import classes from './footer.module.scss';

function Footer2() {
    const staticFooterData = {
        id: 'footer-01',
        footerLogo: '/images/logo/white.png',
        footerLogoAlt: 'Footer Logo',
        excerpt:
            '<b>Start Building Your Victory Today!</b> <br/> Connect with us to discuss your project',
        informationTitle: 'Information',
        informationList: [
            { id: 'informationList-01', title: 'About us', path: 'about' },
            { id: 'informationList-02', title: 'Our Services', path: 'services' },
            { id: 'informationList-03', title: 'Our blog', path: 'blog' },
            { id: 'informationList-04', title: 'Contact us', path: 'contact' },
        ],
        quickLinkTitle: 'Our Services',
        quickLinkList: [
            {
                id: 'quickLinkList-01',
                title: 'Modern Architecture',
                path: 'services/architecture',
            },
            {
                id: 'quickLinkList-02',
                title: 'Residential & Commercial Construction',
                path: 'services/construction',
            },
            {
                id: 'quickLinkList-03',
                title: 'Renovation & Remodelling',
                path: 'services/renovation',
            },
        ],
        contactInfoTitle: 'Contact Info',
        widgetAddress:
            '3700 N Classen Blvd, Oklahoma City, OK 73118, <span class="text-primary">USA</span>',
        widgetNumber: '',
        additionWidgetAddress: '(405) 861-1738',
        additionWidgetNumber: '',
        socialList: [
            {
                id: 'socialList-01',
                socialIcon: 'FaFacebookF',
                path: 'https://www.facebook.com/profile.php?id=61569970799631',
            },
            {
                id: 'socialList-02',
                socialIcon: 'FaInstagram',
                path: 'https://www.instagram.com/build.victory/',
            },
            {
                id: 'socialList-03',
                socialIcon: 'FaTiktok',
                path: 'https://www.tiktok.com/@build.victory',
            },
            {
                id: 'socialList-04',
                socialIcon: 'FaLinkedinIn',
                path: 'https://www.linkedin.com/company/victory-builder',
            },
        ],
    };

    return (
        <footer>
        
                <div className={`${classes.bg}`}>
                    <Container>
                        <Row>
                            <Col lg={{ span: 3 }}>
                                <div className={classes.widget__item}>
                                    <Link href="/" className={classes.logo}>
                                        <img
                                            src={staticFooterData.footerLogo}
                                            alt={staticFooterData.footerLogoAlt}
                                        />
                                    </Link>
                                    <p
                                        className={classes.desc}
                                        dangerouslySetInnerHTML={{
                                            __html: staticFooterData.excerpt,
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col
                                xl={{ span: 3 }}
                                lg={{ span: 2 }}
                                sm={{ span: 6 }}
                                className="ps-xl-80 pt-40 pt-lg-0"
                            >
                                <div className={classes.widget__item}>
                                    <h2 className={classes.widget__title}>
                                        {staticFooterData.informationTitle}
                                    </h2>
                                    <ul className={classes.widget__list}>
                                        {staticFooterData.informationList.map((item) => (
                                            <li key={item.id}>
                                                <Link href={`/${item.path}`}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                            <Col
                                lg={{ span: 3 }}
                                sm={{ span: 6 }}
                                className="ps-lg-50 pt-40 pt-lg-0"
                            >
                                <div className={classes.widget__item}>
                                    <h2 className={classes.widget__title}>
                                        {staticFooterData.quickLinkTitle}
                                    </h2>
                                    <ul className={classes.widget__list}>
                                        {staticFooterData.quickLinkList.map((item) => (
                                            <li key={item.id}>
                                                <Link href={`/${item.path}`}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                            <Col
                                xl={{ span: 3 }}
                                lg={{ span: 4 }}
                                className="pt-40 pt-lg-0"
                            >
                                <div className={classes.widget__item}>
                                    <h2 className={classes.widget__title}>
                                        {staticFooterData.contactInfoTitle}
                                    </h2>
                                    <div
                                        className={`pb-25 ${classes.widget__info}`}
                                    >
                                        <p
                                            className={classes.widget_address}
                                            dangerouslySetInnerHTML={{
                                                __html: staticFooterData.widgetAddress,
                                            }}
                                        />
                                        <span className={classes.widget_number}>
                                            {staticFooterData.widgetNumber}
                                        </span>
                                    </div>
                                    <div className={classes.widget__info}>
                                        <p
                                            className={classes.widget_address}
                                            dangerouslySetInnerHTML={{
                                                __html: staticFooterData.additionWidgetAddress,
                                            }}
                                        />
                                        <span className={classes.widget_number}>
                                            {staticFooterData.additionWidgetNumber}
                                        </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={classes.bottom}>
                    <Container>
                        <Row>
                            <Col md={{ span: 6 }} sm={{ span: 4 }}>
                                <ul className={classes.social}>
                                    {staticFooterData.socialList.map((item) => {
                                        const Social = FaIcons[item.socialIcon];
                                        return (
                                            <li key={item.id}>
                                                <Link href={`${item.path}`}>
                                                    <Social />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Col>
                            <Col md={{ span: 6 }} sm={{ span: 8 }}>
                                <div className={classes.copyright}>
                                    <span className={classes.text}>
                                        © {new Date().getFullYear()} Victory Builder
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        
        </footer>
    );
}

export default Footer2;
