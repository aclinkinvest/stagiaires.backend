import React from 'react'
import Typed from 'react-typed';
import NewsletterSubscribe from './Partials/NewsletterSubscribe';
import NosMeilleursPartenaires from './Partials/NosMeilleursPartenaires';
import Footer from "./Partials/Footer";
import { Link } from 'react-router-dom';

const About = () => {
   
    return (
        <div>
        <div className="intro-banner"
        style={{
          // paddingBottom:"70px",
          backgroundImage: "url(images/bg-home2.jpg)",
          backgroundSize: 'cover',
          width: '100%',
          backgroundPosition: '90%'
        }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="utf-banner-headline-text-part  margin-top-5">
                  <h3>A LA RECHERCHE
                    <span className="typed-words">
                      <Typed
                        strings={["&nbsp;D'UN STAGE ?", "&nbsp;D'UN 1<sup>er</sup> EMPLOI ?"]}
                        typeSpeed={50}
                        backSpeed={50}
                        backDelay={1000}
                        startDelay={500}
                        loop={true}
                        showCursor={true}

                      />
                  </span>
                  </h3>
                  <span className="banner_text">Bienvenue sur le premier assistant virtuel qui facilite  <br /> la vie des <b style={{ color: "white", fontSize: "26px;" }}>étudiants</b>, des <b style={{ color: "white", fontSize: "26px;" }}>jeunes diplômés</b> et des <b style={{ color: "white", fontSize: "26px;" }}>recruteurs</b> </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <ul style={{ alignItems: "center" }} className="intro-stats margin-top-50">
                  <li
                    style={{
                      marginRight: "60px", marginLeft: "60px",
                      borderRadius: "4px", border: "1px solid rgba(255, 255, 255, 0.10)",
                      lineHeight: "60px"
                    }}
                  ><Link to="/creer-compte-candidat">
                      <strong style={{ fontSize: "25px", fontFamily: "arial" }} > <b>JE SUIS CANDIDAT</b> </strong>
                    </Link>
                  </li>
                  <li
                    style={{ backgroundColor: "#1E9A75", marginRight: "60px", borderRadius: "4px", border: "1px solid rgba(255, 255, 255, 0.10)", lineHeight: "60px" }}

                  >
                    <Link to="/creer-compte-recruteur">
                      <strong style={{ fontSize: "25px" }}> <b>JE SUIS RECRUTEUR</b> </strong>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="section padding-top-40 padding-bottom-10">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">

                    <div className="col-md-12">
                      <NosMeilleursPartenaires />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center" }} className="centered">
              <h3 style={{ color: "white", fontWeight: "bolder", fontSize: "30px" }}> <b>C'EST FACILE !</b></h3>
            </div>
          </div>
        </div>

        <div className="section padding-bottom-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-12">
                <div className="icon-box with-line bg-box">
                  <div className="utf-icon-box-circle">
                    <div className="utf-icon-box-circle-inner"> <i className="icon-line-awesome-user-secret"></i></div>
                  </div>
                  <h3>1. Crée gratuitement ton CV Pro en ligne !</h3>
                  <p>Création d'un espace privé Gratuit & meilleur matching des offres à ton profil,...</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12">
                <div className="icon-box with-line bg-box">
                  <div className="utf-icon-box-circle">
                    <div className="utf-icon-box-circle-inner"> <i className="icon-line-awesome-user-plus"></i></div>
                  </div>
                  <h3>2. Sélectionne tes critères</h3>
                  <p>Villes, Métiers, Poste, Date, etc….<br /><br /></p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12">
                <div className="icon-box bg-box">
                  <div className="utf-icon-box-circle">
                    <div className="utf-icon-box-circle-inner"> <i className="icon-line-awesome-edit"></i></div>
                  </div>
                  <h3>3. Postule en un clic <br /><br /></h3>
                  <p>Nous pouvons le faire chaque jour automatiquement pour les offres qui te correspondent !</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12">
                <div className="icon-box bg-box">
                  <div className="utf-icon-box-circle">
                    <div className="utf-icon-box-circle-inner"> <i className="icon-line-awesome-save"></i></div>
                  </div>
                  <h3>4.	Suis en temps réel l’évolution de tes candidatures !</h3>
                  <p>Reçois les notifications sur ton smartphone des recruteurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="margin-bottom-80"
          style={{
            backgroundImage: "url(images/recruteur.jpg)",
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
            backgroundPosition: '100%'
          }}>
          <div className="text-content white-font" >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                  <h2>Accroche recruteur</h2>
                  <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type setting, remaining essentially unchanged.
                    It was popularised.<br /><br />Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type setting, remaining essentially unchanged.
                    It was popularised.<br /><br /></p>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="download-img">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <NewsletterSubscribe />
        <Footer />
      </div>
    )
}

export default About
