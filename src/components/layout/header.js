import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaSearch, FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import classes from './header.module.scss';
import { OffcanvasData } from './offcanvas-data';

function Header() {
    const router = useRouter();

    // Header Sticky Activation
    const header = useRef();
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? header.current?.classList.add('is-sticky')
            : header.current?.classList.remove('is-sticky');
    };
    // End here

    // Header Search Toggle Activation
    const [search, setSearch] = useState(false);

    const SearchToggle = () => {
        search ? setSearch(false) : setSearch(true);
    };
    // End here

    // Offcanvas Activation
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);

    useEffect(() => {
        setOffcanvas(false);
    }, [router.pathname]);

    const [submenuOpenId, setSubmenuOpenId] = useState({});

    const showSubmenuClickHandler = (id) =>
        setSubmenuOpenId((prevData) => ({
            [id.toString()]: !prevData[id.toString()],
        }));

    // End here

    return (
        <>
            <header className={classes.area}>
                <div className={classes.top}>
                    <Container>
                        <Row>
                            <Col
                                xl={{ span: 4, offset: 2 }}
                                lg={{ span: 5, offset: 2 }}
                                className="d-none d-lg-block"
                            >
                                <div className={classes.info}>
                                    <div className={classes.contact_number}>
                                        <img
                                            src="/images/header/icon/phone.png"
                                            alt="Phone"
                                        />
                                        <Link href="/">
                                        +92304 1113309
                                        </Link>
                                    </div>
                                    <div className={classes.time_schedule}>
                                        <img
                                            src="/images/header/icon/mail.png"
                                            alt="Phone"
                                        />
                                        <span>info@buildvictory.com</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={{ span: 6 }} className="d-block d-lg-none">
                                <div className="header-logo">
                                    <Link href="/" className={classes.logo}>
                                        <img
                                            src="/images/logo/light.png"
                                            alt="Header Lisght Logo"
                                        />
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={6} lg={4} sm={6}>
                                <div className={classes.right}>
                                    <div>
                                        <Link href="/contact">
                                            Get in Touch
                                            {/* 
                                            <span>/ Register</span> */}
                                        </Link>
                                    </div>
                                    <div
                                        className={`${
                                            search
                                                ? 'search-show'
                                                : 'search-hide'
                                        } d-block d-lg-none search-holder`}
                                    >
                                        <buton
                                            className={classes.search__btn}
                                            onClick={SearchToggle}
                                        >
                                            <FaSearch />
                                        </buton>
                                        <form className="search-form">
                                            <input
                                                className="search-input"
                                                type="search"
                                                name="search"
                                                placeholder="Search"
                                            />
                                            <button
                                                className="search-inner__btn"
                                                type="submit"
                                            >
                                                <FaSearch />
                                            </button>
                                        </form>
                                    </div>
                                    <div className={classes.offcanvas}>
                                        <buton
                                            className={`${classes.offcanvas__btn} d-block d-lg-none menu-bar-button`}
                                            onClick={showOffcanvas}
                                        >
                                            <FaBars />
                                        </buton>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div ref={header} className={`sticky_holder ${classes.main}`}>
                    <Container>
                        <Row>
                            <Col
                                xl={{ span: 10, offset: 2 }}
                                className="d-none d-lg-block"
                            >
                                <nav className={classes.menu}>
                                    <ul className={classes.menu__list}>
                                        <li>
                                            <Link href="/">
                                                <span>Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <span>About Us</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blogs">
                                                <span>Blogs</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <span>Services</span>
                                            </Link>
                                        </li>

                                        {/* <li className={classes.dropdown_holder}>
                                            <Link href="/projects/project-fullwidth">
                                                <span>Projects</span>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/projects/project-2-columns">
                                                        Project 2 Columns
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/projects/project-gallery">
                                                        Project Gallery
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/projects/project-slider">
                                                        Project Slider
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={classes.dropdown_holder}>
                                            <Link href="/">
                                                <span>Pages</span>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/our-clients">
                                                        Our Clients
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/our-team">
                                                        Our Team
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/our-working-process">
                                                        Our Working Process
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={classes.dropdown_holder}>
                                            <Link href="/blogs/blog-fullwidth">
                                                <span>Blogs</span>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/blogs/blog-leftsidebar">
                                                        Blog Left Sidebar
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blogs/blog-rightsidebar">
                                                        Blog Right Sidebar
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                        <li>
                                            <Link href="/contact">
                                                <span>Contact</span>
                                            </Link>
                                        </li>
                                        <div style={{ display: 'none' }}>
                                            <li className={classes.separator}>
                                                <Link href="/contact">
                                                    <span>Contact</span>
                                                </Link>
                                            </li>
                                            <li
                                                className={`${
                                                    search
                                                        ? 'search-show'
                                                        : 'search-hide'
                                                }`}
                                            >
                                                <buton
                                                    className={
                                                        classes.search__btn
                                                    }
                                                    onClick={SearchToggle}
                                                >
                                                    <FaSearch />
                                                </buton>
                                                <form className="search-form">
                                                    <input
                                                        className="search-input"
                                                        type="search"
                                                        name="search"
                                                        placeholder="Search"
                                                    />
                                                    <button
                                                        className="search-inner__btn"
                                                        type="submit"
                                                    >
                                                        <FaSearch />
                                                    </button>
                                                </form>
                                            </li>
                                        </div>
                                    </ul>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                    <div className={`${classes.fixed__logo} d-none d-lg-flex`}>
                        <Link href="/" className={classes.logo}>
                            <img
                                src="/images/logo/dark.png"
                            />
                        </Link>
                    </div>
                </div>
            </header>
            <div className="offcanvas-menu-holder" onClick={showOffcanvas}>
                <div
                    className={
                        offcanvas
                            ? 'offcanvas-menu-wrap active'
                            : 'offcanvas-menu-wrap'
                    }
                >
                    <nav
                        className="offcanvas-menu"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="offcanvas-menu-items">
                            <li className="offcanvas-top">
                                <button
                                    type="button"
                                    className="offcanvas-close-btn"
                                    aria-label="Right Align"
                                >
                                    <IoCloseOutline onClick={showOffcanvas} />
                                </button>
                            </li>
                            {OffcanvasData.map((item) => {
                                const { submenu } = item;
                                return (
                                    <li
                                        key={item.id}
                                        className={`${item.cName}${
                                            submenuOpenId[item.id.toString()]
                                                ? ' active'
                                                : ''
                                        }`}
                                        onClick={
                                            submenu
                                                ? () =>
                                                      showSubmenuClickHandler(
                                                          item.id
                                                      )
                                                : () => {}
                                        }
                                    >
                                        <Link
                                            href={item.path}
                                            className={
                                                item?.submenu
                                                    ? 'has-children'
                                                    : ''
                                            }
                                        >
                                            {item.title}
                                        </Link>
                                        {submenu && (
                                            <ul className="submenu">
                                                {submenu?.map((submenuItem) => (
                                                    <li key={submenuItem.id}>
                                                        <Link
                                                            href={
                                                                submenuItem.link
                                                            }
                                                        >
                                                            {submenuItem.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;
