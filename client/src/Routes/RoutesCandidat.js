import {Redirect, Route, Switch} from 'react-router-dom';
import Invoice from "../components/Invoice/Invoice";
import Invoices from "../components/Invoices/Invoices";
import Settings from "../components/Settings/Settings";
import Dashboard from "../components/Dashboard/Dashboard";
import ClientList from "../components/Clients/ClientList";
import Forgot from "../components/Password/Forgot";
import Reset from "../components/Password/Reset";
import InvoiceDetails from "../components/InvoiceDetails/InvoiceDetails";

const ROUTESCANDIDAT = () => {
    return(
        <Switch>
          <Route path="/invoice" exact component={Invoice} />
          <Route path="/edit/invoice/:id" exact component={Invoice} />
          <Route path="/invoice/:id" exact component={InvoiceDetails} />
          <Route path="/invoices" exact component={Invoices} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/customers" exact component={ClientList} />
          <Route path="/forgot" exact component={Forgot} />
          <Route path="/reset/:token" exact component={Reset} />
          <Redirect exact from="/new-invoice" to="/invoice" />
        </Switch>
    );
}

export default ROUTESCANDIDAT;
