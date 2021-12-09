import { Route, Switch } from 'react-router-dom';
import DashboardCandidat from '../Components/Pages/Dashboard/Candidat/DashboardCandidat';
import MonProfil from '../Components/Pages/Dashboard/Candidat/MonProfil';
import BanqueCV from '../Components/Pages/Dashboard/Candidat/BanqueCV';
import CVPro from '../Components/Pages/Dashboard/Candidat/CVPro';
import MesRecherches from '../Components/Pages/Dashboard/Candidat/MesRecherches';
import MesDemandes from '../Components/Pages/Dashboard/Candidat/MesDemandes';
import CreateCVPro from '../Components/Pages/Dashboard/Candidat/CreateCVPro';
import ImportCV from '../Components/Pages/Dashboard/Candidat/ImportCV';

const ROUTESCANDIDAT = () => {
    return(
        <Switch>
            
            <Route exact path="/candidat/dashboard" component={DashboardCandidat} />
            <Route exact path="/candidat/profil" component={MonProfil} />
            
            <Route exact path="/candidat/demandes" component={MesDemandes} />
            <Route exact path="/candidat/recherches" component={MesRecherches} />

            <Route exact path="/candidat/banque-de-cv" component={BanqueCV} />
            <Route exact path="/candidat/cv-pro" component={CVPro} />
            <Route exact path="/candidat/ajouter-cv-pro" component={CreateCVPro} />
            <Route exact path="/candidat/importer-cv" component={ImportCV} />
            
        </Switch>
    );
}

export default ROUTESCANDIDAT;
