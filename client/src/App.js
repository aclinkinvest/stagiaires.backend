import React, {Fragment} from 'react'
import { BrowserRouter, Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom'
import SnackbarProvider from 'react-simple-snackbar'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ROUTES from './Routes/Routes'
import ROUTESCANDIDAT from './Routes/Routes'
import DashboardCandidatLayout from "./Layouts/DashboardCandidatLayout";
import AppLayout from "./Layouts/AppLayout";

function App() {

  const user = JSON.parse(localStorage.getItem('profile'))

  return (
      <Router>
          <Fragment>
      <SnackbarProvider>
          {/*<Header/>*/}
        {/*<Switch>
            <Route path="" children={props => <AppLayout {...props} />} />
            <Route path="candidat/:path?" render={props => <DashboardCandidatLayout {...props} />} />
        </Switch>*/}
          {/*<Route path={["/invoice", "/edit/invoice/:id", "/invoice/:id", "/settings", "/dashboard", "/customers", "/forgot", "/reset/:token", "/new-invoice"]} >
              <DashboardCandidatLayout/>
          </Route>
          <Route path={["/home", "/a-propos-de-nous", "/contacts", "/cgu", "/offres-stages", "/ecoles", "/recruteurs", "/faq", "/login", "/blog-du-candidat", "/blog-du-recruteur"]}>
              <AppLayout/>
          </Route>*/}

          <ROUTES/>
        <Footer />
        </SnackbarProvider>
              </Fragment>
      </Router>
  );
}

export default App;
