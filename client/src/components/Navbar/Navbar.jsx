import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faHome, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css'

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="text-primary" light className={styles.navbar}>
                <NavbarBrand href="/" className="mr-auto">
                    <FontAwesomeIcon className={styles.fontAI} icon={faGlobeAmericas} />
                    <span className={styles.navLogo}> GLOBAL COVID-19 TRACKER</span></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} id={styles.toggler} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/" style={{ color: "whitesmoke" }} className={styles.navItems}>
                                <FontAwesomeIcon icon={faHome} /> {'\u00A0'}{' '}
                                Home</Link>
                        </NavItem>
                        {/* <NavItem>
                            <Link to="/chartspage" style={{ color: "whitesmoke" }} className={styles.navItems}>
                                <FontAwesomeIcon icon={faChartBar} /> {'\u00A0'}{' '}
                                Data By Country</Link>
                        </NavItem> */}
                        <NavItem>
                            <Link to="/aboutdeveloper" style={{ color: "whitesmoke" }} className={styles.navItems} >
                                <FontAwesomeIcon icon={faLaptopCode} />  {'\u00A0'}{' '}
                                 About Developer</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;