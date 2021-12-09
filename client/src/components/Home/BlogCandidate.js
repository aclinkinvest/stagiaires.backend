import React from 'react'
import NewsletterSubscribe from '../Home/Partials/NewsletterSubscribe';
import Footer from "../Home/Partials/Footer";
import Navbar from "./Partials/Navbar";
import Header from "../Header/Header";

const BlogCandidate = () => {
   
    return (
        <><Header />
        <div>
                {/*<BarIndex racine={"Accueil"}>Blog du candidat</BarIndex>*/}
                <div className="section">
                    <div className="container margin-top-20 padding-top-30" style={{ backgroundColor: "gainsboro", height: "200px" }}>
                        <div className="col-12 text-center" style={{ verticalAlign: "middle" }}>
                            <h1><span style={{ fontSize: "50px" }}>Le blog du candidat</span><br /> <br /> Conseils, découvertes et astuces pour une recherche efficace</h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                <div className="margin-top-20 margin-bottom-0">
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/conseil_reussir_entretien.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>5 conseils pour réussir son entretien d’embauche.</h3>
                                            <span className="blog-post-info">Par, ATCHA Tofic</span>
                                            <span className="blog-post-date">12 Jan 2021</span>
                                            <p>
                                                L’entretien d’embauche dans une start-up est un exercice bien particulier et différent de celui auquel on peut être confronté(e) dans une...
                                            </p>
                                        </div>
                                        <div className="entry-icon"></div>
                                    </a>
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/cv_gagnant.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>Les conseils pour un CV gagnant.</h3>
                                            <span className="blog-post-info">By, KOMLAN Adèle</span>
                                            <span className="blog-post-date">08 Nov, 2020</span>
                                            <p>
                                                Aujourd’hui, qu’on soit en recherche d’emploi ou qu’on souhaite en changer, il est important d’avoir un CV de qualité. Mais qu’est-ce que...
                                            </p>
                                        </div>
                                    </a>
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/profil_surqualifie.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>Le recruteur considère que je suis sur-qualifié(e): que faire ?.</h3>
                                            <span className="blog-post-info">Par, DOTSEY Gisèle</span>
                                            <span className="blog-post-date">04 Oct 2020</span>
                                            <p>
                                                Si certains candidats peinent à décrocher un emploi par manque d’expérience ou de compétences, d’autres effraient les recruteurs en...
                                            </p>
                                        </div>
                                    </a>
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/defauts.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>Ces défauts que vous pouvez admettre… en entretien d’embauche !</h3>
                                            <span className="blog-post-info">Par, AMAH Kwatcha</span>
                                            <span className="blog-post-date">19 Juil, 2021</span>
                                            <p>
                                                « Citez-moi 3 de vos principaux défauts » : on ne compte plus le nombre de candidats qui ont été pris d’angoisse à l’écoute de cette...
                                            </p>
                                        </div>
                                    </a>
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/optimiser.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>Optimiser une candidature spontanée.</h3>
                                            <span className="blog-post-info">Par, ALI Williams</span>
                                            <span className="blog-post-date">30 Avr, 2020</span>
                                            <p>
                                                Faire une candidature spontanée : nos conseils Vous êtes las d’éplucher jour après jour les offres d’emplois ? Chaque jour vous vous...
                                            </p>
                                        </div>
                                    </a>
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/cv_chrono.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>Faire un CV : ordre chronologique ou inversé ?</h3>
                                            <span className="blog-post-info">Par, BARANDAO Isidore</span>
                                            <span className="blog-post-date">04 Mar, 2021</span>
                                            <p>
                                                Au moment de la rédaction d’un CV, une question se pose souvent dès les premières lignes : faut-il mettre les informations dans l’ordre...
                                            </p>
                                        </div>
                                        <div className="entry-icon"></div>
                                    </a>
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/cv_gagnant.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>Les conseils pour un CV gagnant.</h3>
                                            <span className="blog-post-info">By, KOMLAN Adèle</span>
                                            <span className="blog-post-date">08 Nov, 2020</span>
                                            <p>
                                                Aujourd’hui, qu’on soit en recherche d’emploi ou qu’on souhaite en changer, il est important d’avoir un CV de qualité. Mais qu’est-ce que...
                                            </p>
                                        </div>
                                    </a>
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/profil_surqualifie.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>Le recruteur considère que je suis sur-qualifié(e): que faire ?.</h3>
                                            <span className="blog-post-info">Par, DOTSEY Gisèle</span>
                                            <span className="blog-post-date">04 Oct 2020</span>
                                            <p>
                                                Si certains candidats peinent à décrocher un emploi par manque d’expérience ou de compétences, d’autres effraient les recruteurs en...
                                            </p>
                                        </div>
                                    </a>
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/defauts.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>Ces défauts que vous pouvez admettre… en entretien d’embauche !</h3>
                                            <span className="blog-post-info">Par, AMAH Kwatcha</span>
                                            <span className="blog-post-date">19 Juil, 2021</span>
                                            <p>
                                                « Citez-moi 3 de vos principaux défauts » : on ne compte plus le nombre de candidats qui ont été pris d’angoisse à l’écoute de cette...
                                            </p>
                                        </div>
                                    </a>
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/reussir_premier_jour.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>Dix conseils pour réussir son premier jour de travail… et sa période d’essai.</h3>
                                            <span className="blog-post-info">Par, ASSIKI Marc</span>
                                            <span className="blog-post-date">13 Déc, 2020</span>
                                            <p>
                                                C’est votre premier jour au sein d’une nouvelle entreprise ? La première impression que vous donnerez devra être la bonne, autant pour...
                                            </p>
                                        </div>
                                    </a>
                                    <a href="blog-post-right-sidebar.html" className="blog-post">
                                        <div className="utf-blog-post-thumbnail">
                                            <div className="utf-blog-post-thumbnail-inner">
                                                <img src="images/blog/optimiser.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="utf-blog-post-content">
                                            <h3>Optimiser une candidature spontanée.</h3>
                                            <span className="blog-post-info">Par, ALI Williams</span>
                                            <span className="blog-post-date">30 Avr, 2020</span>
                                            <p>
                                                Faire une candidature spontanée : nos conseils Vous êtes las d’éplucher jour après jour les offres d’emplois ? Chaque jour vous vous...
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="clearfix"></div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="utf-pagination-container-aera margin-top-10 margin-bottom-50">
                                            <nav className="pagination">
                                                <ul>
                                                    <li className="utf-pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                                    <li><a href="#" className="current-page ripple-effect">1</a></li>
                                                    <li><a href="#" className="ripple-effect">2</a></li>
                                                    <li><a href="#" className="ripple-effect">3</a></li>
                                                    <li className="utf-pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="utf-sidebar-container-aera">
                                    <div className="utf-sidebar-widget-item">
                                        <div className="utf-detail-banner-add-section">
                                            <a href="#"><img src="images/pubs/8.png" width="350" alt="banner-add-2" /></a>
                                        </div>
                                    </div>
                                    <div className="utf-sidebar-widget-item">
                                        <div className="utf-detail-banner-add-section">
                                            <a href="#"><img src="images/pubs/6.jpg" width="350" alt="banner-add-2" /></a>
                                        </div>
                                    </div>

                                    <div className="utf-sidebar-widget-item">
                                        <div className="utf-quote-box">
                                            <div className="utf-quote-info">
                                                <h4>Faites la différence avec le CV pro en ligne!</h4>
                                                <p>Construisez votre CV Pro Digital en quelques minutes! Commencez sans plus attendre</p>
                                                <a href="register.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Create an Account <i className="icon-feather-chevrons-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="utf-sidebar-widget-item">
                                        <h3>Recherches Blog</h3>
                                        <div className="utf-input-with-icon">
                                            <input type="text" placeholder="Mots clés..." />
                                            <i className="icon-material-outline-search"></i>
                                        </div>
                                    </div>

                                    <div className="utf-sidebar-widget-item">
                                        <h3>Dernières publications</h3>
                                        <ul className="utf-featured-list">
                                            <li className="utf-sidebr-pro-widget">
                                                <div className="utf-blog-thumb-info">
                                                    <div className="utf-blog-thumb-info-image">
                                                        <img src="images/blog/confinement.webp" alt="" />
                                                    </div>
                                                    <div className="utf-blog-thumb-info-content">
                                                        <h4><a href="blog-post-right-sidebar.html">Confinement : optimisez votre recherche d’emploi !</a></h4>
                                                        <p>30 Mai, 2021</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="utf-sidebr-pro-widget">
                                                <div className="utf-blog-thumb-info">
                                                    <div className="utf-blog-thumb-info-image">
                                                        <img src="images/blog/regles_d_or.webp" alt="" />
                                                    </div>
                                                    <div className="utf-blog-thumb-info-content">
                                                        <h4><a href="blog-post-right-sidebar.html">6 règles d’or pour réussir son parcours en alternance !</a></h4>
                                                        <p>24 oct, 2020</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="utf-sidebr-pro-widget">
                                                <div className="utf-blog-thumb-info">
                                                    <div className="utf-blog-thumb-info-image">
                                                        <img src="images/blog/defauts.webp" alt="" />
                                                    </div>
                                                    <div className="utf-blog-thumb-info-content">
                                                        <h4><a href="blog-post-right-sidebar.html">Ces défauts que vous pouvez admettre… en entretien d’embauche !</a></h4>
                                                        <p>08 Mar, 2020</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="utf-sidebar-widget-item">
                                        <h3>Categorie</h3>
                                        <div className="utf-sidebar-categorie">
                                            <ul>
                                                <li><a href="#"><i className="icon-feather-chevrons-right"></i> Business</a></li>
                                                <li><a href="#"><i className="icon-feather-chevrons-right"></i> Investment</a></li>
                                                <li><a href="#"><i className="icon-feather-chevrons-right"></i> Marketing</a></li>
                                                <li><a href="#"><i className="icon-feather-chevrons-right"></i> Web Designing</a></li>
                                                <li><a href="#"><i className="icon-feather-chevrons-right"></i> Graphic Designing</a></li>
                                                <li><a href="#"><i className="icon-feather-chevrons-right"></i> Photographic</a></li>
                                                <li><a href="#"><i className="icon-feather-chevrons-right"></i> PHP Developer</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="utf-sidebar-widget-item">
                                        <h3>Sujets</h3>
                                        <div className="task-tags">
                                            <a href="#"><span>Business</span></a>
                                            <a href="#"><span>Consulting</span></a>
                                            <a href="#"><span>Camera</span></a>
                                            <a href="#"><span>Photographic</span></a>
                                            <a href="#"><span>Investment</span></a>
                                            <a href="#"><span>Assurance</span></a>
                                            <a href="#"><span>Secutity</span></a>
                                        </div>
                                    </div>

                                    <div className="utf-sidebar-widget-item">
                                        <div className="utf-detail-banner-add-section">
                                            <a href="#"><img src="images/pubs/5.jpg" alt="banner-add-2" /></a>
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
    )
}

export default BlogCandidate
