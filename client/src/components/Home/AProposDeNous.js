import React from 'react'
import NewsletterSubscribe from '../Home/Partials/NewsletterSubscribe';
import NosMeilleursPartenaires from '../Home/Partials/NosMeilleursPartenaires';
import Footer from "../Home/Partials/Footer";
import Navbar from "./Partials/Navbar";
import Header from "../Header/Header";

const AProposDeNous = () => {
    return (
        <><Header />
        <div>
                {/*<BarIndex racine={"Accueil"}>A propos de nous</BarIndex>*/}

                <div className="container  margin-top-40 margin-bottom-45">
        <p>
            <h2 className="text-center">
          Dans un monde en pleine évolution, nous voulons aider <br /> les entreprises et leurs candidats à mieux se choisir, <br /> pour mieux travailler ensemble et plus longtemps.
          </h2>
        </p>
        </div>
  <div className="container">

    <div className="row">
      <div className="col-xl-4 col-lg-4">
        <div style={{height: "45px"}}></div>
        <div>
          <img src="images/notre_mission.jpg" height="270" width="350" alt="" />
        </div>
      </div>

      <div className="col-xl-8 col-lg-8">
        <div className="blog-post single-post margin-top-5">
          <div className="utf-blog-post-content">
            <p className="margin-bottom-20 centered">
              <h1 style={{fontSize: "6em"}}>Notre mission</h1>
               <span style={{fontSize: "19px"}}> Une recherche de stage ou de 1er emploi n’est jamais simple pour un candidat. Nous nous attachons à présenter chaque candidat sur un pied d’égalité et selon des critères objectifs.  <br />Parce que bien recruter est le premier enjeu business des entreprises, notre mission est de réduire le cycle de recrutement en proposant à l’entreprise et aux candidats, une nouvelle expérience humaine, efficace et collaborative.
               </span>
             </p>
          </div>
        </div>
      </div>
    </div>

    <div className="row">

      <div className="col-xl-8 col-lg-8">
        <div className="blog-post single-post margin-top-5">
          <div className="utf-blog-post-content">
            <p>
              <h1 style={{fontSize: "6em"}}>Notre solution</h1>
              <span style={{fontSize: "19px", marginTop: "15px"}}>
                Nous concevons et améliorons sans cesse, des logiciels qui s’articulent autour d’une plateforme unique dédiée au recrutement et spécifiquement conçue pour les entreprises et les candidats.
              </span><br />
              <div style={{height: "5px"}}></div>
              <span style={{fontSize: "18px"}}> <b>Nos solution pour les entreprises s’appuie sur quatre concepts principaux :</b> </span> <br />
              <ul style={{marginTop: "5px"}}>
                <li>  Un progiciel piloté par les RH en multi-utilisateurs, associant les opérationnels au service de l’entreprise, pour gérer les recrutements et animer votre base candidats.</li>
              <li>  Un site carrières clé en main, permettant d’engager et qualifier le candidat en déclinant votre marque employeur.</li>
              <li> Une multidiffusion en un clic sur les autres plateformes.</li>
              <li>  Une application de digitalisation de CV papier directement connectée à la plateforme.</li>
              </ul>
              <span style={{fontSize: "18px"}}><b>Nos solution pour les candidats s’appuie sur quatre concepts principaux :</b></span> <br />
              <ul style={{marginTop: "5px"}}>
              <li>  Une visibilité accrue avec le CV Pro en ligne qui permet aux recruteurs de sélectionner votre profil plus rapidement.</li>
              <li>  Etablissez vos critères de recherche depuis votre profil et automatiquement nous sélectionnons pour vous les offres de stage ou de premier emploi les plus adaptées.</li>
              <li>  Si vous le souhaitez, la plateforme peut automatiquement postuler à votre place aux offres correspondant à vos critères de recherche.</li>
              <li>  Des notifications en temps réel vous sont envoyées sur votre mobile pour toutes nouvelles offres, candidatures, sélection par des recruteurs ou demandes de contact vous concernant.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-4">
        <div style={{height: "100px"}}></div>
        <div>
          <img src="images/notre_solution2.jpg" height="500" width="350" alt="" />
        </div>
    </div>

    <div className="row">
      <div className="col-xl-4 col-lg-4">
        <div style={{height: "42px"}}></div>
        <div>
          <img src="images/nos_valeurs2.jpg" height="300" width="350" alt="" />
        </div>
      </div>

      <div className="col-xl-8 col-lg-8">
        <div className="blog-post single-post margin-top-5">
          <div className="utf-blog-post-content">
             <p className="margin-top-20 margin-bottom-20">
              <h1 style={{fontSize: "6em"}}>Nos valeurs</h1>
              <span style={{fontSize: "19px"}}>
                Nos valeurs sont le reflet de notre histoire, notre identité et nos ambitions.
                Aujourd’hui comme hier, elles incarnent notre culture d’entreprise et s’expriment
                au travers des actions quotidiennes de l’ensemble de nos équipes. Elles structurent
                  notre approche professionnelle et façonnent nos relations avec l’ensemble de nos utilisateurs et partenaires.
                  Nos valeurs sont aussi appliquées aux évolutions de la plateforme : éthique, simplicité, expertise, innovation, exigence,
                écoute, flexibilité et confiance.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="row">

      <div className="col-xl-8 col-lg-8">
        <div className="blog-post single-post margin-top-5">
          <div className="utf-blog-post-content">
            <p>
              <h1 style={{fontSize: "6em"}}>Notre équipe</h1>
              <span style={{fontSize: "19px"}}>
                XXX c’est d’abord une aventure d’êtres humains, qui se rejoignent sur une idée et des valeurs.
                 L’entreprise est ainsi née de l’envie de faire quelque chose pour notre pays et pour les citoyens en général.
                  Nous avons choisi l’emploi parce qu’il concentre beaucoup des valeurs que nous défendons à titre personnel :
                   apprentissage, esprit d’équipe, entraide, bienveillance, engagement, sens de l’action, dépassement de soi,
                   ambition, plaisir, passion, exigence, honnêteté, confiance, adaptation, autonomie.
            </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-4">
        <div style={{height: "45px"}}></div>
        <div>
          <img src="images/notre_equipe.png" height="295" width="350" alt="" />
        </div>
      </div>
      </div>
    </div>
  </div>

            {/* <!-- Logo Carousel --> */}
            <div className="section padding-top-60 padding-bottom-50">
                <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                    <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                        <h3>Nos partenaires</h3>
                        <div className="utf-headline-display-inner-item"></div>
                    </div>
                    <div className="col-md-12">
                        <NosMeilleursPartenaires />
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

export default AProposDeNous
