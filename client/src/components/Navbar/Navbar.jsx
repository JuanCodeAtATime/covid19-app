import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
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
                            <NavLink href="/components/" style={{ color: "whitesmoke" }}>Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://github.com/reactstrap/reactstrap"
                                style={{ color: "whitesmoke" }}
                            >About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;