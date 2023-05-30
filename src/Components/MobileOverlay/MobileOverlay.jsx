import React, { useEffect, useState } from "react";
import "./MobileOverlay.scss";

const MobileOverlay = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1250);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!isMobile) {
        return null;
    }

    return (
        <div className="mobile-overlay">
            <div className="mobile-overlay-content">
                <h2>Ga naar een groter scherm voor het dashboard</h2>
            </div>
        </div>
    );
};

export default MobileOverlay;
