import React from 'react'

const Footer = () => {
   
    return (
        <div className="utf-footer-section-item-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-12">
                                <div className="utf-footer-item-links">
                                    <a href="index.html"><img className="footer-logo" src="images/footer_logo.png" alt="" /></a>
                                    <p>
                                        Dans un monde en pleine mutation digitale, nous mettons à votre disposition une plateforme innovante, simple et intuitive pour aider les entreprises et leurs candidats à relever ce défi numérique pour mieux se choisir, afin de mieux travailler ensemble et plus longtemps.
                                    </p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-3 col-sm-6">
                                <div className="utf-footer-item-links">
                                    <h3>Utilisation</h3>
                                    <ul>
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Mention légales</span></a></li>
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Conditions Générales d’Utilisation</span></a></li>
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Conditions Générales de vente</span></a></li>
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Politique de confidentialité</span></a></li>
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Politique des cookies</span></a></li>
                                        <li><a href="login.html"><i className="icon-feather-chevrons-right"></i> <span>Mon Compte</span></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-3 col-sm-6">
                                <div className="utf-footer-item-links">
                                    <h3>Aide</h3>
                                    <ul>
                                        <li><a href="faq.html"><i className="icon-feather-chevrons-right"></i> <span>FAQ Foire aux Questions</span></a></li>
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Conseils et astuces Candidats</span></a></li>
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Logiciel de recrutement SaaS</span></a></li>
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Tarifs & Packs Recruteurs</span></a></li>
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Demander une Démo</span></a></li>
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Faire un Essai Gratuit</span></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-md-3 col-sm-6">
                                <div className="utf-footer-item-links">
                                    <h3>L'entreprise</h3>
                                    <ul>
                                        <li><a href="a-propos.html"><i className="icon-feather-chevrons-right"></i> <span>A propos de nous</span></a></li>
                                        <li><a href="contact.html"><i className="icon-feather-chevrons-right"></i> <span>Nous contacter</span></a></li>
                                        <li><a href="recruteurs-liste.html"><i className="icon-feather-chevrons-right"></i> <span>Nos partenaires</span></a></li>
                                        {/* <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Blog</span></a></li> */}
                                        <li><a href="#"><i className="icon-feather-chevrons-right"></i> <span>Liens utiles</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Footer
