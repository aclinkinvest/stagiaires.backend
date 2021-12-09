import React, { Component, Fragment } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import ROUTESCANDIDAT from "../../Routes/RoutesCandidat";

import {Can} from '../../casl/can';
import NavbarCandidat from "./Partials/Navbars/NavbarCandidat";
import SidebarCandidat from "./Partials/Sidebars/SidebarCandidat";

class DashboardCandidatLayout extends Component {
    render() {
return (
    <Fragment>
        <NavbarCandidat {...this.props} />
        <Switch>
        <div className="utf-dashboard-container-aera"> 
            <div className="utf-dashboard-sidebar-item">
            <SidebarCandidat/>
            </div>
             
                {/* {routes.map((route:any, idx) => {
                    return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                render={props => (
                                    <route.component {...props} /> 
                                )} 
                            />
                    ) : (null);
                })} */}
                <ROUTESCANDIDAT/>
            
                <Redirect from="/candidat" to="/candidat/dashboard" />
             
            {/* <!-- Dashboard Content / End -->  */}
        </div>
        </Switch>
    </Fragment>
)
    }
}

export default DashboardCandidatLayout;
