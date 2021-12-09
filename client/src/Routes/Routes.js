import {Redirect, Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home'
import CGU from '../components/Home/CGU';
import BlogCandidate from '../components/Home/BlogCandidate';
import BlogRecruiter from '../components/Home/BlogRecruiter';
import OffresListe from '../components/Home/OffresListe';
import Login from '../components/Login/Login';
import RecruteursListe from '../components/Home/RecruteursListe';
import Faq from '../components/Home/Faq';
import AProposDeNous from '../components/Home/AProposDeNous';
import Contacts from '../components/Home/Contacts';
import AnnuaireDesEcoles from '../components/Home/AnnuaireDesEcoles';
import Invoice from "../components/Invoice/Invoice";
import InvoiceDetails from "../components/InvoiceDetails/InvoiceDetails";
import Invoices from "../components/Invoices/Invoices";
import Settings from "../components/Settings/Settings";
import Dashboard from "../components/Dashboard/Dashboard";
import ClientList from "../components/Clients/ClientList";
import Forgot from "../components/Password/Forgot";
import Reset from "../components/Password/Reset";

const ROUTES = () => {
    return(
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/offres-stages" render={() => <OffresListe />} />
            <Route exact path="/recruteurs" component={RecruteursListe} />
            <Route exact path="/ecoles" component={AnnuaireDesEcoles} />
            <Route exact path="/a-propos-de-nous" component={AProposDeNous} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/cgu" component={CGU} />
            <Route exact path="/blog-du-candidat" component={BlogCandidate} />
            <Route exact path="/blog-du-recruteur" component={BlogRecruiter} />
            <Route exact path="/invoice" component={Invoice()} />
          <Route exact path="/edit/invoice/:id" component={Invoice} />
          <Route exact path="/invoice/:id" component={InvoiceDetails} />
          <Route exact path="/invoices" component={Invoices} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/customers" component={ClientList} />
          <Route exact path="/forgot" component={Forgot} />
          <Route exact path="/reset/:token" component={Reset} />
          <Redirect exact from="/new-invoice" to="/invoice" />
          <Redirect exact from="/" to="/home" />
        </Switch>
    );
}

export default ROUTES;
