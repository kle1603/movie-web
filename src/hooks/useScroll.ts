// import PropTypes from "prop-types";

import { useEffect } from "react";
import { useState } from "react";

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return [scrollY];
};

useScroll.propTypes = {};

export default useScroll;
