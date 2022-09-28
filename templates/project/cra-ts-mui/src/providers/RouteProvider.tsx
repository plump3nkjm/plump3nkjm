import {Route, RouteProps, Redirect} from 'react-router-dom'
import {getSession} from "@/utils/SessionUtil";
import React from "react";

export const RouteWrapper = ({component: Component, layout: Layout, ...rest} : {component: React.FC, layout: React.FC<{children: React.ReactNode}>, exact?: any, path: string}) => {
    return (
        <Route {...rest} render={(props: RouteProps) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        }/>
    );
}

export const Auth = ({children}: {children: React.ReactNode}) : any => {
    const isAuthenticated = getSession('token') !== null;

    return isAuthenticated  ? children : <Redirect to={'/login'} />
}