import React from 'react';
import {useRoutes} from "react-router-dom";
import HomePageComponent from "../components/first-page-component/home-page-component";
import SecondPage from "../components/second-page-component/second-home";
import CommingSoonHomePage from "../components/comming-soon-page-component/comming-soon-home-page";
import DonateHome from "../components/donate-page-component/donate-home";
import ThirdPageHome from "../components/third-page-component/third-page-home";
import RequestHome from "../components/request-page-component/request-home";
import AcceptRequestHome from "../components/accept-request-component/accept-request-home";
import RequestSupport from "../components/request-support-component/request-support";
import JoinSessionComponent from "../components/join-session-component/join-session-component";
import ResetPasswordHome from "../components/reset-password-page-component/reset-password-home";
import RequestSessionDetailsComponent from "../components/request & session details/request-&-session-details-component";
import CreateRequest from "../components/create-request-component/create-request";

const RouterConfigs = () => {
    return useRoutes([

        {
            path: "/",
            element: <HomePageComponent/>,
            children: [
                {
                    index: true,
                    element: <HomePageComponent/>
                }
            ]
        },

        {
            path: "/second",
            element: <SecondPage />,
        },
        {
            path: "/third",
            element: <ThirdPageHome />,
        },
        {
            path:"/commingsoon",
            element:<CommingSoonHomePage/>,
        },
        {
            path:"/donate",
            element:<DonateHome/>,
        },
        {
            path:"/request",
            element:<RequestHome/>,
        },
        {
            path:"/request_support",
            element:<RequestSupport/>,
        },
        {
            path:"/accept_request",
            element:<AcceptRequestHome/>,
        },
        {
            path:"/create_request",
            element:<CreateRequest/>,
        },
        {
            path:"/create_session",
            element:<JoinSessionComponent/>,
        },
        {
            path:"/reset_password",
            element:<ResetPasswordHome/>,
        },
        {
            path:"/session_details",
            element:<RequestSessionDetailsComponent/>
        }
    ]);
};

export default RouterConfigs;
