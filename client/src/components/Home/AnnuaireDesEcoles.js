import React from "react";
import AnnuaireDesEcolesComponent from '../../Layouts/Items/Single/AnnuaireDesEcolesComponent';
import NewsletterSubscribe from '../Home/Partials/NewsletterSubscribe';
import Footer from "../Home/Partials/Footer";
import Navbar from "./Partials/Navbar";
import Header from "../Header/Header";
/*import BarIndex from '../Home/Partials/BarIndex';*/

class AnnuaireDesEcoles extends React.Component {

    listeAnnuaireEcole = [
        {bgImage: "images/bg-home.jpg", imageSchool: "images/schools/universite_de_lome.png",
        schoolName: "Université de Lomé", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "images/schools/universite_de_kara.png",
        schoolName: "Université de Kara", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "images/schools/ipnet_insitute_of_technology.jpg",
        schoolName: "Ipnet \n Institute of Technology ", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "images/schools/htib_atlantis.jpg",
        schoolName: "HTIB ATLANTIS ", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: " Institut Polytechnique  \nDEFITECH \t", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "ECOLE DES CADRES \n\t", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "Ecole Supérieure d’Audit et\n de Management (ESAM) \t", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "ESGIS\n", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "JUMAU-ITA\n", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "IRFODEL\n", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "ESIAG AMOR DEI\n", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "Ecole Supérieure des Ponts\n  et Chaussées (ESPC)\n", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "Institut Supérieur \n AGATA CARELLI", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "Institut Universitaire  \n FORMATEC", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "Ecole Supérieure des Affaires (ESA)", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "FIMAC\n", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "HTIB ATLANTIS \n", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "CFP\n ANCILLA", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "IHERIS\n", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "IAEC\n", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: " ESAG-NDE\n", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "Ecole Supérieure\n ALMA", cv: "2 612 CV", views: " 1262 Vues"},

        {bgImage: "images/bg-home.jpg", imageSchool: "",
        schoolName: "Northern Institute of Technology (NIT-Togo)", cv: "2 612 CV", views: " 1262 Vues"}

    ];
    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <><Header />
            <div  style={{backgroundColor: "#cac7c7"}}>
                {/*<BarIndex search={true} racine={"Accueil"}>Enseignement Supérieur Public et Privé</BarIndex>*/}
                <div className="section margin-top-65 padding-bottom-55">
                    <div className="container">
                        <div className="row">
                            {
                                this.listeAnnuaireEcole.map((item, index) =>{
                                    return(<AnnuaireDesEcolesComponent key={index} ecole={item} />);
                                })
                            }


                        </div>
                    </div>
                </div>

                <NewsletterSubscribe />
                <Footer />
            </div>
                </>
        );
    }
}

export default AnnuaireDesEcoles;
