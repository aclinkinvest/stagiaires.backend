import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home'
import CGU from '../Home/CGU';
import BlogCandidate from '../Home/BlogCandidate';
import BlogRecruiter from '../Home/BlogRecruiter';
import OffresListe from '../Home/OffresListe';
import Login from '../Login/Login';
import RecruteursListe from '../Home/RecruteursListe';
import Faq from '../Home/Faq';
import AProposDeNous from '../Home/AProposDeNous';
import Contacts from '../Home/Contacts';
import AnnuaireDesEcoles from '../Home/AnnuaireDesEcoles';
/*import VotreSiteCarrierePage from '../Components/Pages/Dashboard/Recruteur/VotreSiteCarrierePage';*/

const ROUTES = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Accueil} />
            <Route exact path="/offres-stages" render={() => <OffresListe />} />
            <Route exact path="/recruteurs" component={RecruteursListe} />
            <Route exact path="/ecoles" component={AnnuaireDesEcoles} />
            <Route exact path="/a-propos-de-nous" component={AProposDeNous} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/cgu" component={CGU} />
            <Route exact path="/blog-du-candidat" component={BlogCandidate} />
            <Route exact path="/blog-du-recruteur" component={BlogRecruiter} />
            <Route exact path="/connexion" component={Login} />
        </Switch>
    );
}

export default ROUTES;
