import React, { Component, Fragment } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import ROUTESCANDIDAT from "../Routes/RoutesCandidat";

/*import {Can} from '../../casl/can';
import NavbarCandidat from "./Partials/Navbars/NavbarCandidat";
import SidebarCandidat from "./Partials/Sidebars/SidebarCandidat";*/
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";

const user = JSON.parse(localStorage.getItem('profile'))

class DashboardCandidatLayout extends Component {
    render() {
return (
    <Fragment>
        {/*<NavbarCandidat {...this.props} />*/}
        <Header/>
            {user && <NavBar />}
        <Switch>
            <ROUTESCANDIDAT/>
        </Switch>
    </Fragment>
)
    }
}

export default DashboardCandidatLayout;
