import { useEffect, useState } from "react";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userData = localStorage.getItem("userData");

    // console.log(userData);

    useEffect(() => {
        if (userData) {
            setIsLoggedIn(true);
            // console.log("useAuth: ", isLoggedIn);
            // console.log(isLoggedIn);
        } else {
            setIsLoggedIn(false);
        }
    }, [userData]);

    return { isLoggedIn };
};

export default useAuth;
