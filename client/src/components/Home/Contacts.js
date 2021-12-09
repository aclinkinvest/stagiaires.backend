import React from "react";
/*import BarIndex from '../Home/Partials/BarIndex';*/
import NewsletterSubscribe from '../Home/Partials/NewsletterSubscribe';
import Footer from "../Home/Partials/Footer";
import Navbar from "./Partials/Navbar";
import Header from "../Header/Header";

class Contacts extends React.Component {
    render() {
        return(
            <><Header />
           <div>
                {/*<BarIndex racine={"Accueil"}>Contact</BarIndex>*/}
                <div className="container">
                <div className="row  margin-top-10  margin-bottom-0">


                <div className="col-xl-12 col-lg-12">
                    <section id="contact" className="margin-bottom-10">
                    <div className="utf-boxed-list-headline-item margin-bottom-10">
                        <h3><i className="icon-material-outline-description"></i> Nous contacter</h3>
                    </div>
                    <div className="utf-contact-form-item">
                        <form method="post" name="contactform" id="contactform">
                            <div className="row">
                    <div className="col-md-8">
                        <div>
                        <textarea className="utf-with-border" name="comments" cols={40} rows={10} id="comments" placeholder="Message..." required></textarea>
                        </div>
                    </div>
                            <div className="col-md-4">
                        <div className="utf-no-border">
                        <input className="utf-with-border" name="name" type="text" id="lastname" placeholder="Nom" required />
                    </div>
                                <div className="utf-no-border">
                                <input className="utf-with-border" name="name" type="text" id="firstname" placeholder="Prénom" required />
                                </div>
                    <div className="utf-no-border">
                        <input className="utf-with-border" name="email" type="email" id="email" placeholder="Adresse email" required />
                    </div>
                    <div className="utf-no-border">
                        <input className="utf-with-border" name="subject" type="text" id="subject" placeholder="Sujet" required />
                    </div>
                    <div className="utf-centered-button">
                        <input type="submit" className="submit button" id="submit" value="Envoyer" />
                    </div>
                            </div>
                            </div>


                        </form>
                    </div>
                    </section>
                </div>
                <div className="col-xl-12 col-lg-12">
                    <div className="utf-boxed-list-headline-item margin-bottom-10">
                            <h3><i className="icon-feather-map-pin"></i> Nos coordonnées</h3>
                        </div>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="utf-contact-location-info-aera margin-bottom-10">
                        <div className="contact-address">
                            <ul>
                            <li><strong>Editeur du site:</strong> Société XXXXXX sarl</li>
                            <li><strong>Capital:</strong> 1 000 000 FCFA </li>
                            <li><strong>Numéro RCCM:</strong> xxxxxxxxxxxxx </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="utf-contact-location-info-aera margin-bottom-10">
                        <div className="contact-address">
                            <ul>
                            <li><strong>e-mail:</strong> <a href="#">contact@stagiaire.tg</a></li>
                            <li><strong>Téléphone:</strong> xxxxxxxxxxxxx </li>
                            <li><strong>Addresse:</strong> 946 rue des ibis, Nyékonakpoe - XXBPXXXX Lomé - Togo.</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
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


export default Contacts;