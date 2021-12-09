import { Component, Fragment } from 'react';
// import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Switch} from 'react-router-dom';
/* import Can from '../../casl/can'; */
import ROUTES from '../../Routes/Routes';
import Navbar from './Partials/Navbars/Navbar';

class AppLayout extends Component {
    render() {
return (
    <Fragment>
        {/* <div id="wrapper"> */}
        <Navbar {...this.props} />
        {/* <LoginRegisterPopup/> */}
        <Switch>
           {/*  {routes.map((route:any, idx) => {
                return route.component ? (
                    <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        render={props => (
                            // <Can I="view" a={route.name}>
                                <route.component {...props} />
                            // </Can>     
                        )} 
                    />
                ) : (null);
            })} */}
            <ROUTES />
            {/* <Redirect from="/" to="/home" />   */} 
        </Switch>
        {/* </div> */}

        
    </Fragment>
)
    }
}

export default AppLayout;
