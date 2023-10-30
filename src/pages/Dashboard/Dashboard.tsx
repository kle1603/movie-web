import TableDashboard from "../../components/TableDashboard";
import { useNavigate } from "react-router-dom";
import configs from "../../configs";

import { useEffect } from "react";

const Dashboard = () => {
    const navigate = useNavigate();
    const userData = localStorage.getItem("userData");

    useEffect(() => {
        if (!userData) {
            navigate(configs.routes.home);
        }
    }, [userData, navigate]);

    return <>{userData ? <TableDashboard /> : <></>}</>;
};

export default Dashboard;
