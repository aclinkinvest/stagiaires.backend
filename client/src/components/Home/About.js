import React from 'react'
import Navbar from "./Partials/Navbar";
import Header from "../Header/Header";

const About = () => {
   
    return (
        <>
            <Header />
        <div className="container-fluid bg-white">
                <section className="" >
                    <div className="row bg-success">
                        <div className="col-xs-12 col-md-8" style={{ padding: '100px', }}>
                            <h1 className="text-white">A propos de XXXXXXXX</h1>
                            <p className="text-white">Plateforme de recrutement spécifiquement conçue pour les étudiants et les entreprises</p>
                        </div>
                        <div className="col-xs-12 col-md-4 text-center">

                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: 0, }}>
                        <div className="col text-center">
                            <p style={{ padding: '15px', margin: 0 }}><a className="text-dark" href="#vision">Vision</a></p>
                        </div>
                        <div className="col text-center text-dark">
                            <p style={{ padding: '15px', margin: 0 }}><a className="text-dark" href="#mission">Mission</a></p>
                        </div>
                        <div className="col text-center text-dark">
                            <p style={{ padding: '15px', margin: 0 }}><a className="text-dark" href="#solution">Solition</a></p>
                        </div>
                        <div className="col text-center text-dark">
                            <p style={{ padding: '15px', margin: 0 }}><a className="text-dark" href="#valeurs">Valeurs</a></p>
                        </div>
                        <div className="col text-center text-dark">
                            <p style={{ padding: '15px', margin: 0 }}><a className="text-dark" href="#vision">Histoire</a></p>
                        </div>
                    </div>
                    <hr style={{ marginTop: 0, }} />
                </section>
                <br/><br/>
                <section className="container" id="vission">
                    <div className="row align-bottom">
                        <div className="col-xs-12 col-md-6" >
                            <img src="/images/vision.jpg" alt="vison" width="100%" height="300"/>
                        </div>
                        <div className="col-xs-12 col-md-6 ">
                            <h1 className="text-dark font-weight-bold"><strong>Notre vision</strong></h1>
                            <p style={{ textAlign: 'justify', }}>Dans un monde en pleine évolution, nous voulons aider
                            les entreprises et leurs candidats à mieux se choisir,
                            pour mieux travailler ensemble et plus longtemps.</p>
                        </div>
                    </div>
                </section>
                <section className="container" id="mission">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h1 className="text-dark font-weight-bold"><strong>Notre mission</strong></h1>
                            <p style={{ textAlign: 'justify', }}>Une recherche de stage ou de 1<sup>er</sup> emploi n’est jamais simple pour un candidat. Nous nous attachons à présenter chaque candidat sur un pied d’égalité et selon
                            des critères objectifs. </p>
                            <p style={{ textAlign: 'justify', }}>Parce que bien recruter est le premier enjeu business des entreprises, notre mission est de réduire le cycle de recrutement en proposant à l’entreprise et
                            aux candidats, une nouvelle expérience humaine, efficace et collaborative.</p>
                        </div>
                        <div className="col-xs-12 col-md-6" >
                        <img src="/images/mission.jpg" alt="vison" width="100%" height="300"/>
                        </div>
                    </div>
                </section>

                <section className="container" id="solution">
                    <div className="row">
                        <div className="col-xs-12 col-md-6" >
                        <img src="/images/solution.png" alt="vison" width="100%" height="550"/>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <h1 className="text-dark font-weight-bold mb-0"><strong>Notre solution</strong></h1>
                            <p style={{ textAlign: 'justify', }}>Nous concevons et améliorons sans cesse, des logiciels qui s’articulent autour d’une
                            plateforme unique dédiée au recrutement et spécifiquement conçue pour les entreprises
                            et les candidats.</p>
                            <p style={{ textAlign: 'justify', }}><strong>Notre offre s’appuie sur trois concepts principaux :</strong></p>
                            <ul>
                                <li>
                                    <p style={{ textAlign: 'justify', }}>Un site carrières clé en main, permettant d’engager et qualifier le candidat en déclinant votre marque employeur.</p>
                                </li>
                                <li>
                                    <p style={{ textAlign: 'justify', }}>Un progiciel OSC (ATS) enrichi d’une GRC (CRM), piloté par les RH et les opérationnels au service de l’entreprise, pour gérer les recrutements en multi-utilisateurs et animer votre base candidats.</p>
                                </li>
                                <li>
                                    <p style={{ textAlign: 'justify', }}>Une application mobile de digitalisation de CV papier directement connectée à la plateforme.</p>
                                </li>
                                <li>
                                    <p style={{ textAlign: 'justify', }}>Un module de dématérialisation de la demande d’autorisation d’embauche, permettant d’éviter les recrutements non validés et de gagner du temps. Digitalisez les demandes de recrutement dans votre entreprise et désignez des parcours de validation adaptés à vos entités. Vos équipes…</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="container" id="valeurs">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h1 className="text-dark font-weight-bold"><strong>Nos valeurs</strong></h1>
                            <p style={{ textAlign: 'justify', }}>Nos valeurs sont celles par lesquelles passent toutes nos
                            décisions relatives aux évolutions de la plateforme : simplicité,
                            écoute, confiance, expertise, exigence, innovation et flexibilité.</p>
                        </div>
                        <div className="col-xs-12 col-md-6" >
                        <img src="/images/valeur.png" alt="vison" width="100%" height="300"/>
                        </div>
                    </div>
                </section>

                <section className="container" id="equipe" style={{ marginTop: 50, }}>
                    <div className="row">
                        <div className="col-xs-12 col-md-6" >
                        <img src="/images/equipe.jpg" alt="vison" width="100%" height="300"/>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <h1 className="text-dark font-weight-bold"><strong>Notre équipe</strong></h1>
                            <p style={{ textAlign: 'justify', }}>XXX c’est d’abord une aventure d’êtres humains, qui se rejoignent sur une idée
                            et des valeurs. L’entreprise est ainsi née de l’envie de faire quelque chose pour
                            notre pays et pour les citoyens en général. Nous avons choisi l’emploi parce
                            qu’il concentre beaucoup des valeurs que nous défendons à titre personnel :
                            apprentissage, esprit d’équipe, entraide, bienveillance, engagement, sens de
                            l’action, dépassement de soi, ambition, plaisir, passion, exigence, honnêteté,
                            confiance, adaptation, autonomie. Lorsque nous recrutons, ce sont ces valeurs
                            que nous passons au tamis de notre analyse pour valider qu’elles sont
                            partagées et ainsi garantir le succès de notre entreprise commune.</p>
                        </div>
                    </div>
                </section>
                <br/><br/><br/>
            </div>
            </>
    )
}

export default About
