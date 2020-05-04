import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div style={{
            height: '50px', backgroundColor: "#262626", width: "100%",
            textAlign: "center",
            padding: "1rem",
            bottom: "0",
            position: "relative",
            left: "0",
            right: "0"


        }}>
            <b style={{
                color: "#1890ff",
                borderRadius: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                marginTop: "2rem"
            }}>

                <span style={{ color: "white" }}>
                    <FontAwesomeIcon style={{ color: "whitesmoke", fontSize: ".75rem" }} icon={faGlobeAmericas} />
                </span> {' '} global covid-19 tracker

                <span style={{ fontSize: ".75rem", color: "whitesmoke" }}>
                    <a style={{ textDecoration: "None" }} href="https://juancodeatatime.github.io/myPortfolio/">
                        {' '}By Juan Rivera
            </a>
                </span>

            </b>

        </div>
    )
}

export default Footer
