import React, { useEffect, useRef, useState } from "react";
import "./Navigation.scss";
import logo from "../../Assets/logo.svg";
import { useLocation } from "react-router-dom";

function Navigation() {
    const [show, setShow] = useState(false);
    const loc = useLocation();
    const nav = useRef();
    const showSetter = () => {
        setShow(!show);
    };

    useEffect(() => {
        if (loc.pathname.includes("login")) {
            nav.current.style.display = "none";
        } else {
            nav.current.style.display = "flex"
        }
    }, [loc]);

    return (
        <>
            <aside ref={nav} className="sidenav">
                <div className="title">
                    <img
                        className="sidenav__logo"
                        src={logo}
                        alt="logo van de site"
                    />
                </div>

                <div className="sidenav__popUpWrapper">
                    <button onClick={showSetter} className="sidenav__button">
                        actieve les bekijken
                    </button>
                    <div
                        className={
                            show ? "sidenav__popUp active" : "sidenav__popUp"
                        }
                    >
                        element
                    </div>
                </div>

                <ul className="sidenav__list">
                    <li className="sidenav__list-item">
                        <a href="#">Profiel</a>
                    </li>
                    <li className="sidenav__list-item">
                        <a href="#">Instellingen</a>
                    </li>
                    <li className="sidenav__list-item">
                        <a href="#">Hulpmiddelen </a>
                    </li>
                    <li className="sidenav__list-item">
                        <a className="sidenav__list-item-logout" href="/login">
                            Afmelden
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}

export default Navigation;
