import React, { useState } from "react";
import "./MenuButtons.scss";
import MenuContainer from "./MenuContainer";

function MenuButtons() {
    const [openMenu, setOpenMenu] = useState("");

    console.log(openMenu)

    return (
        <>
            <div className="container">
                <button className="container__btn" onClick={() => setOpenMenu("new_lesson")}>Nieuwe les aanmaken</button>
                <button className="container__btn" onClick={() => setOpenMenu("overview")}>Overzicht lessen</button>
                <button className="container__btn" onClick={() => setOpenMenu("reports")}>Les rapporten</button>
                <button className="container__btn" onClick={() => setOpenMenu("active")}>Actieve les bekijken</button>
            </div>
            <MenuContainer menu={openMenu} />
        </>
    );
}

export default MenuButtons;
