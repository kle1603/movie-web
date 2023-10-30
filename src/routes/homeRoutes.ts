import configs from "../configs";

import Layout from "../layouts/Layout";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import OnlyHeader from "../layouts/OnlyHeader";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Add from "../pages/Add";
import Edit from "../pages/Edit";

const homeRoutes = [
    {
        id: 1,
        path: configs.routes.home,
        component: Home,
        layout: Layout,
    },
    {
        id: 2,
        path: configs.routes.detail,
        component: Detail,
        layout: Layout,
    },
    {
        id: 3,
        path: configs.routes.contact,
        component: Contact,
        layout: Layout,
    },
    {
        id: 4,
        path: configs.routes.login,
        component: Login,
        layout: OnlyHeader,
    },
    {
        id: 5,
        path: configs.routes.dashboard,
        component: Dashboard,
        layout: DashboardLayout,
    },
    {
        id: 6,
        path: configs.routes.add,
        component: Add,
        layout: DashboardLayout,
    },
    {
        id: 7,
        path: configs.routes.edit,
        component: Edit,
        layout: DashboardLayout,
    },
];

export default homeRoutes;
