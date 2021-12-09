import React from "react";
/*import { Recruteur } from "../../../models/Recruteur";
import Anonces from '../../Layouts/Items/List/Anonces';*/
/*import BarIndex from "../Home/Partials/BarIndex";*/
/*import CardRegister from '../Home/Partials/CardRegister';
import RecruteurComponent from '../../Layouts/Items/Single/RecruteurComponent';*/
import NewsletterSubscribe from '../Home/Partials/NewsletterSubscribe';
import Footer from "../Home/Partials/Footer";
/*import { ItemAnnoce } from "../../../classesUtilies/ItemAnnoce";*/
import { Carousel } from "react-bootstrap";
import Navbar from "./Partials/Navbar";
import Header from "../Header/Header";

class RecruteursListe extends React.Component {
	/*listeRecruteurs: Array<Recruteur> = [
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur(),
		new Recruteur()
	]
	listeAnonces: Array<ItemAnnoce> = [
		new ItemAnnoce("images/11.jpg"),
		new ItemAnnoce("images/03.jpg"),
		new ItemAnnoce("images/06.jpg"),
		new ItemAnnoce("images/011.jpg")
	]*/
	render() {
		/*const recruteurs = this.listeRecruteurs.map((item) => <RecruteurComponent />);*/
		return (
			<><Header />
			<div>
				<div style={{ backgroundColor: "#cac7c7" }}>
					{/*<BarIndex racine={"Accueil"}>Les entreprises qui recrutent</BarIndex>*/}
					<div className="container margin-top-20 margin-bottom-20" style={{ backgroundColor: "gainsboro" }}>
						<div className="col-12 text-center">
							<h1 style={{ fontWeight: "bolder", color: "white" }}>Vous êtes recruteur ?</h1>
							<p>
								<h3>
									La performance des recruteurs et le talent des candidats <br /> se rencontrent grâce à
									<b>stagiaires.tg</b>
								</h3>
							</p>
						</div>
					</div>
					<div className="container" style={{ backgroundColor: "#eeeefc" }}>
						<div className="row margin-top-20">
							<div className="utf-companies-list-aera">

								<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
									<Carousel interval={5000}>
										<Carousel.Item>
											<img
												className="d-block w-100 h-100"
												src="images/pubs/6.jpg"
												alt="First slide"
											/>
										</Carousel.Item>
										<Carousel.Item>
											<img
												className="d-block w-100 h-100"
												src="images/pubs/9.png"
												alt="Second slide"
											/>
										</Carousel.Item>
										<Carousel.Item>
											<img
												className="d-block w-100 h-100"
												src="images/pubs/8.png"
												alt="Third slide"
											/>
										</Carousel.Item>
										<Carousel.Item>
											<img
												className="d-block w-100 h-100"
												src="images/pubs/10.png"
												alt="Fourth slide"
											/>
										</Carousel.Item>
									</Carousel>

								</div>
								<div className="col-xl-8 col-lg-8">
									<div>
										<div className="text-center">
											<h2>Les entreprises qui recrutent</h2>
										</div>
									</div>
									<div className="row">
										<div className="col-4 padding-left-0">

											<Carousel interval={4000}>
												<Carousel.Item>
													<div className="utf-company-inner-alignment d-block w-100">
														<a href="site-carriere-bblome.html" className="company">


															<span className="company-logo"><img src="images/entreprises/groupe_togocom.jpg" alt="" /></span>
															<h4>TOGOCOM</h4>
															<h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> Télécommunications</span></h5>
															<p className="text-muted"><i className="icon-material-outline-location-on"></i> Lomé, Bvd du 13 Janvier</p>
														</a>
													</div>
												</Carousel.Item>
												<Carousel.Item>
													<div className="utf-company-inner-alignment d-block w-100">
														<a href="site-carriere-bblome.html" className="company">

															<span className="company-logo"><img src="images/entreprises/ceet.jpg" alt="" /></span>
															<h4>CEET</h4>
															<h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> Eléctricité, énergies renouvelables</span></h5>
															<p className="text-muted"><i className="icon-material-outline-location-on"></i> Lomé, Nyekonakpoe</p>
														</a>
													</div>
												</Carousel.Item>
												<Carousel.Item>
													<div className="utf-company-inner-alignment d-block w-100">
														<a href="site-carriere-bblome.html" className="company">

															<span className="company-logo"><img src="images/entreprises/moov_africa.png" alt="" /></span>
															<h4>MOOV Afica Togo</h4>
															<h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> Télécoms</span>
															</h5>
															<p className="text-muted"><i className="icon-material-outline-location-on"></i> Lomé, Avenue de la paix.</p>
														</a>
													</div>
												</Carousel.Item>
											</Carousel>
										</div>
										<div className="col-4 padding-left-0">
											<Carousel interval={3000}>
												<Carousel.Item>
													<div className="utf-company-inner-alignment d-block w-100">
														<a href="site-carriere-bblome.html" className="company">

															<span className="company-logo"><img src="images/entreprises/gta.jpg" alt="" /></span>
															<h4>GTA</h4>
															<h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> Assurances vies</span></h5>
															<p className="text-muted"><i className="icon-material-outline-location-on"></i>Lomé, Agbalepedogan</p>
														</a>
													</div>
												</Carousel.Item>
												<Carousel.Item>
													<div className="utf-company-inner-alignment d-block w-100">
														<a href="site-carriere-bblome.html" className="company">


															<span className="company-logo"><img src="images/entreprises/bollore_logistics.png" alt="" /></span>
															<h4>Bolloré Logistics</h4>
															<h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> Transports marins</span></h5>
															<p className="text-muted"><i className="icon-material-outline-location-on"></i> Lomé, zone portuaire</p>
														</a>
													</div>
												</Carousel.Item>
												<Carousel.Item>
													<div className="utf-company-inner-alignment d-block w-100">
														<a href="site-carriere-bblome.html" className="company">

															<span className="company-logo"><img src="images/entreprises/ebusiness_africa.jpg" alt="" /></span>
															<h4>E-Business Africa</h4>
															<h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> Web Designer, Web Developers</span></h5>
															<p className="text-muted"><i className="icon-material-outline-location-on"></i> Lomé, Adidogomé.</p>
														</a>
													</div>
												</Carousel.Item>
											</Carousel>
										</div>
										<div className="col-4 padding-left-0">
											<Carousel interval={4500}>
												<Carousel.Item>
													<div className="utf-company-inner-alignment d-block w-100">
														<a href="site-carriere-bblome.html" className="company">


															<span className="company-logo"><img src="images/entreprises/bia_togo.png" alt="" /></span>
															<h4> BIA Togo</h4>
															<h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> Banques</span>
															</h5>
															<p className="text-muted"><i className="icon-material-outline-location-on"></i> Lomé, centre ville.</p>
														</a>
													</div>
												</Carousel.Item>
												<Carousel.Item>
													<div className="utf-company-inner-alignment d-block w-100">
														<a href="site-carriere-bblome.html" className="company">

															<span className="company-logo"><img src="images/entreprises/boluda_togo.png" alt="" /></span>
															<h4>Boluda Togo</h4>
															<h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> Web Designer, Web Developers</span></h5>
															<p className="text-muted"><i className="icon-material-outline-location-on"></i> Lomé; Totsi
															</p>
														</a>
													</div>
												</Carousel.Item>
												<Carousel.Item>
													<div className="utf-company-inner-alignment d-block w-100">
														<a href="site-carriere-bblome.html" className="company">

															<span className="company-logo"><img src="images/entreprises/ask_gras_savoye.png" alt="" /></span>
															<h4>ASK Gras Savoye</h4>
															<h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> Centre d'appel</span></h5>
															<p className="text-muted"><i className="icon-material-outline-location-on"></i> Lomé, Avenou, Bvd du 30 Aout</p>
														</a>
													</div>
												</Carousel.Item>
											</Carousel>
										</div>
									</div>
								</div>

							</div>
						</div>


					</div>
					<div className="container" style={{ backgroundColor: "#ffffff" }}>
						<div className="row padding-top-20">
							<div className="col-12">
								<div className="text-center">
									<h1 className="" style={{ fontWeight: "bolder", fontSize: "60px" }}>Comment ça marche ?</h1>
								</div>
							</div>
						</div>
						<div className="row padding-top-20">
							<div className="col-12">
								<ul className="nav justify-content-center">
									<li className="nav-item">
										<a className="nav-link active" href="#">Multidiffuser vos offres d'emploi &nbsp;&nbsp;&nbsp;|</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Piloter vos recrutements &nbsp;&nbsp;&nbsp;|</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Valoriser votre marque employeur &nbsp;&nbsp;&nbsp;|</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Analyser et anticiper vos recrutements</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="row padding-top-60 padding-left-40 padding-right-40">
							<div className="col-5">
								<img src="images/multidiffuser.png" alt="" />
							</div>
							<div className="col-7">
								<h2>
									<b>La multi-diffusion de vos offres d’emploi</b>
								</h2>
								<h3>
									Démultipliez votre visibilité et gagneZ en efficacité
								</h3>
								<p>
									Vous saisissez une fois votre annonce et nous la diffusons sur plus de 30 sites d’emploi gratuits et
									payants (à la carte), selon vos besoins.
								</p>
								<ul>
									<li>Touchez des milliers de candidats</li>
									<li>Ciblez les sites en fonction de la nature du poste</li>
									<li>Générez simplement du trafic sur vos annonces</li>
								</ul>
							</div>
						</div>
						<div className="row padding-top-60 padding-left-40 padding-right-40">
							<div className="col-7">
								<h2>
									<b>La gestion de vos recrutements</b>
								</h2>
								<h3>
									Pilotez vos offres et les candidatures efficacement
								</h3>
								<p>
									Offres d’emploi, candidatures, messagerie, événements, notations…
									Tout est centralisé sur une seule et même plateforme et accessible à tous les membres de votre
									équipe !
								</p>
							</div>
							<div className="col-5">
								<img src="images/gestion_recrutement.png" alt="" />
							</div>
						</div>

						<div className="row padding-top-60 padding-left-40 padding-right-40">
							<div className="col-5">
								<img src="images/multidiffuser.png" alt="" />
							</div>
							<div className="col-7">
								<h2>
									<b>Votre marque employeur</b>
								</h2>
								<h3>
									Valorisez votre entreprise simplement !
								</h3>
								<p>
									Disposez d’une page carrière, un mini-site de recrutement simple et personnalisable, sans coût de
									développement supplémentaire.
								</p>
							</div>
						</div>
						<div className="row padding-top-60 text-center padding-left-40 padding-right-40">
							<div className="col-12">
								<h2>
									<b>Analyses et anticipation</b>
								</h2>
								<h3>Optimisez continuellement vos processus de recrutement</h3>
								<p>
									Le véritable luxe : gagnez suffisamment en temps et en performance <br /> pour pouvoir vous permettre
									de penser à demain.
								</p>
							</div>
						</div>
						<div className="row padding-top-60 padding-left-40 padding-right-40">
							<div className="col-5">
								<img src="images/multidiffuser.png" alt="" />
							</div>
							<div className="col-7">
								<h2>
									<b>Statistiques</b>
								</h2>
								<p>
									Nombre de candidats par offre, temps moyen pour recruter un candidat, réactivité de l’équipe, source
									des candidatures…
								</p>
								<p>
									Visualisez les performances de vos recrutements et de vos actions, pour optimiser vos process !
								</p>
							</div>
						</div>
						<div className="row padding-top-60 padding-left-40 padding-right-40">
							<div className="col-7" style={{ textAlign: "end" }}>
								<h2>
									<b>CVthèque et viviers de candidats</b>
								</h2>
								<p>
									Au fil des recrutements, créez vos propres viviers de talents et retrouvez les profils les plus
									intéressants.
								</p>
								<p>
									Accédez également à la CVthèque <b>stagiaires.tg</b>, constituée de candidatures spontanées de profils
									aussi variés que compétents.
								</p>
							</div>
							<div className="col-5">
								<img src="images/gestion_recrutement.png" alt="" />
							</div>
						</div>

						<div className="row padding-top-20 padding-bottom-20 text-center">
							<div className="col-12">
								<button className="btn btn-secondary btn-lg">
									Démarrer maintenant
								</button>
							</div>
						</div>
					</div>

				</div>

				<div className="container margin-top-20 padding-top-60" style={{ backgroundColor: "gainsboro", height: "200px" }}>
					<div className="col-12 text-center btn" style={{ verticalAlign: "middle" }}>
						<h1 style={{ fontWeight: "bolder", color: "white" }}>Demandez <button className="btn btn-large btn-primary" style={{ fontWeight: "bolder", fontSize: "x-large" }}> une démo !</button> </h1>
					</div>
				</div>
				<NewsletterSubscribe />
				<Footer />
			</div>
				</>
		);
	}
}
export default RecruteursListe;
