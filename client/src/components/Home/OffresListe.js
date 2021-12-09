import React, { useEffect } from "react";
// import { Offre } from "../../../models/Offre";
// import BarIndex from '../Home/Partials/BarIndex';
// import OffreComponent from '../../Layouts/Items/Single/OffreComponent';
import NewsletterSubscribe from '../Home/Partials/NewsletterSubscribe';
/*import { ItemAnnoce } from "../../../classesUtilies/ItemAnnoce";*/
import '../../Styles/style.css';
import Footer from "../Home/Partials/Footer";

import { connect, useDispatch, useSelector } from "react-redux";
import Navbar from "./Partials/Navbar";
import Header from "../Header/Header";
  function OffresListe(props: any)  {

    const listCategories: Array<string> = [
      "Customer Service",
      "Data Analytics",
      "Web Designing",
      "Software Develop",
      "Sales & Marketing"
    ];

    const dispatch = useDispatch();

    const o: Array<any> = [];

    // useEffect(() => {
    //   dispatch({
    //     type: actions.ALL_OFFERS,
    //     action: actionsCreator.index().then((response) => {
    //       console.log(response);
    //       o.concat(response.data);
    //       console.log(o);
    //     }).catch((error) =>{
    //       console.log('error occured')
    //     })

    //   });
    // }, [dispatch]);

    /*useEffect(() => {
      dispatch(actionsCreator.index())
    },[dispatch]);*/

    // useEffect(() => {
    //   actionsCreator.index().then((response) => {
    //     console.log('response', response);
    //     response.data.forEach((item:any) => o.push(item));
    //     console.log('o', o);
    //     console.log('ol', o.length);
    //   }).catch((error) =>{
    //     console.log('error occured')
    //   })
    // })

    /*const toutes_les_offres = useSelector((state: RootState) => state.offers);
    console.log('toutes',toutes_les_offres);*/

    /*const offres = o.map((item:any) => <OffreComponent offre={item} />);
    console.log('all', offres);*/


    /*const listeAnonces001: Array<ItemAnnoce> = [

    ]
    const listeAnonces002: Array<ItemAnnoce> = [
      new ItemAnnoce("images/pubs/4.png"),
      new ItemAnnoce("images/04.jpg"),
      new ItemAnnoce("images/09.jpg"),
    new ItemAnnoce("images/09.jpg"),
    new ItemAnnoce("images/09.jpg"),
    new ItemAnnoce("images/09.jpg"),
    new ItemAnnoce("images/09.jpg"),
    new ItemAnnoce("images/09.jpg"),
    new ItemAnnoce("images/02.jpg")
  ]*/

  // const recherchePlus = (e: any) => {
  //   this.setState({
  //     recherchePlus: !this.state.recherchePlus
  //   });
  // }

  const categories = listCategories.map((item) => <option>{item}</option>);
    // const lesoffres = toutes_les_offres.map((item: Offre) => <OffreComponent offre={item} />);
    return (
		<><Header/>
            <div style={{backgroundColor: "#cac7c7"}}>
                {/*<BarIndex racine={"Accueil"}>Offres de stage et de 1er emploi</BarIndex>*/}
{/* <!-- Search Jobs Start --> */}

<div className="container margin-top-10 margin-bottom-10 padding-bottom-10" style={{backgroundColor: "#eeeefc"}}>
  <form>
    <div className="row padding-top-5">
      <div className="col-md-3">
      <label /* for="mots_cles" */ className="form-label padding-left-15">Mots clés</label>
      <input type="text" className="form-control" id="mots_cles" placeholder="Mots clés de la recherche" />
    </div>
    <div className="col-md-3">
      <label /* for="date_debut" */ className="form-label padding-left-20">Date de début</label>
      <select id="inputState" className="form-select">
        <option>janvier</option>
        <option>février</option>
        <option>mars</option>
        <option>avril</option>
        <option>mai</option>
        <option>juin</option>
        <option>juillet</option>
        <option>août</option>
        <option>septembre</option>
        <option>octobre</option>
        <option>novembre</option>
        <option>décembre</option>
      </select>
    </div>
    <div className="col-md-3">
      <label /* for="duree" */ className="form-label padding-left-20">Durée du stage</label>
      <select id="inputState" className="form-select">
        <option>Peu importe</option>
              <option>- de 1 mois</option>
              <option> 1 mois</option>
              <option>1 à 2 mois</option>
              <option>  2 mois</option>
              <option>+ de 2 mois</option>
              <option>2 à 3 mois</option>
              <option> 3 mois</option>
              <option>+ de 3 mois</option>
      </select>
    </div>
    <div className="col-md-3">
      <label /* for="type_stages" */ className="form-label padding-left-20">Type</label>
      <select id="inputState" className="form-select">
        <option>Peu importe</option>
              <option>Premier emploi</option>
              <option>Stage d'observation</option>
              <option>Stage fin d'études</option>
              <option>Stage en alternance</option>
              <option>Stage fonctionnel</option>
              <option>Stage à distance</option>
              <option>Bénévolat</option>
      </select>
    </div>
    </div>

    {/* <div style={{ display: (this.state.recherchePlus) ? "block" : "none"}}> */}
    <div style={{ display: "none"}}>
    <div className="row collapse" id="recherchePlus">
      <div className="col-md-4">
      <label /* for="ville" */ className="form-label padding-left-20">Niveau d'études</label>
      <select id="inputState" className="form-select">
        <option>BEPC</option>
              <option>CAP</option>
              <option>BAC</option>
              <option>BAC +1</option>
              <option>BAC +2</option>
              <option>BAC +3</option>
              <option>BAC +4</option>
              <option>BAC +5</option>
              <option>Tous</option>
      </select>
    </div>
    <div className="col-md-4">
      <label /* for="inputZip" */ className="form-label padding-left-20">Formation</label><select id="inputState" className="form-select">
        <option>Ingénieurie</option>
        <option>Finances</option>
      </select>
    </div>
    <div className="col-md-4">
      <label /* for="inputState" */ className="form-label padding-left-20">Ville</label>
      <select id="inputState"  className="form-select">
        <option>Adéta</option>
              <option>Afagnan</option>
              <option>Agou-Gadjepe</option>
      <option>Agoè-Nyivé</option>
      <option>Amlamé</option>
      <option>Anié</option>
      <option>Aného</option>
      <option>Atakpamé</option>
      <option>Badou</option>
      <option>Bafilo</option>
      <option>Bassar</option>
      <option>Biankouri</option>
      <option>Blitta</option>
      <option>Cinkassé</option>
      <option>Danyi-Apéyémé</option>
      <option>Dapaong</option>
      <option>Djarkpanga</option>
      <option>Elavagnon</option>
      <option>Gal/angachi</option>
      <option>Gando</option>
      <option>Guérin-Kouka</option>
      <option>Kandé</option>
      <option>Kara</option>
      <option>Kougnohou</option>
      <option>Kpagouda</option>
      <option>Kpalimé</option>
      <option>Kévé</option>
      <option>Lomé</option>
      <option>Mandouri</option>
      <option>Mango</option>
      <option>Naki-Est</option>
      <option>Niamtougou</option>
      <option>Notsé</option>
      <option>Pagouda</option>
      <option>Sansanné-Mango</option>
      <option>Sokodé</option>
      <option>Sotouboua</option>
      <option>Tabligbo</option>
      <option>Tandjouaré</option>
      <option>Tchamba</option>
      <option>Tohoun</option>
      <option>Tsévié</option>
      <option>Vogan</option>
      </select>
    </div>
    </div>
  </div>
<div className="row margin-top-10">
  <div className="col-md-2">
    <a id="changeRsh" type="button" data-toggle="collapse"
      style={{ cursor: "pointer", color: "blue"}} >
      {/* style={{ cursor: "pointer", color: "blue"}} onClick={(e) => this.recherchePlus(e)} > */}
        {/* {(this.state.recherchePlus) ? "Afficher moins" : "Afficher plus"} */}
        Afficher moins
    </a>
  </div>
  <div className="col-md-6"></div>
  <div className="col-md-2">
    <button className="btn btn-danger bg-danger bg-danger-personnalise">
      <i className="icon-feather-refresh-ccw"></i> Réinitialiser
    </button>
  </div>
  <div className="col-md-2">
    <button className="btn btn-primary bg-primary-personnalise">
      <i className="icon-feather-search"></i> Rechercher
    </button>
  </div>
</div>
</form>
</div>



{/* <!-- Search Jobs End --> */}





{/*  <!-- Page Content --> */}
  <div className="container" style={{backgroundColor: "#eeeefc"}}>
    <div className="row padding-top-10">
      <div className="col-xl-4 col-lg-4">

          {/* <CardRegister /> */}

		      {/* <Anonces listeAnnoces={this.listeAnonces002} /> */}


          <a href="#" target="_blank" title="javascript:void(0)"><img src="images/pubs/1.webp" alt="" style={{marginBottom:"10px", width:"350px"}} /></a>
		<a href="#" target="_blank" title="javascript:void(0)"><img src="images/pubs/4.jpg" alt="" style={{marginBottom:"10px", width:"350px"}} /></a>

			<div className="utf-quote-box utf-jobs-listing-utf-quote-box">
				<div className="utf-quote-info">
					<h4>Faites une différence <br /> avec le CV en ligne !</h4>
					<p>Votre CV Pro en quelques minutes !</p>
					<a href="register.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0">Démarrer <i className="icon-feather-chevrons-right"></i></a>
				</div>
		</div>

		<a href="#" target="_blank" title="javascript:void(0)"><img src="images/pubs/6.jpg" alt="" style={{marginBottom:"10px", width:"350px"}} /></a>
		<a href="#" target="_blank" title="javascript:void(0)"><img src="images/04.jpg" alt="" style={{marginBottom:"10px", width:"350px"}} /></a>
		<a href="#" target="_blank" title="javascript:void(0)"><img src="images/pubs/9.png" alt="" style={{marginBottom:"10px", width:"350px"}} /></a>
		<a href="#" target="_blank" title="javascript:void(0)"><img src="images/pubs/10.png" alt="" style={{marginBottom:"10px", width:"350px"}} /></a>
		<a href="#" target="_blank" title="javascript:void(0)"><img src="images/pubs/2.png" alt="" style={{marginBottom:"10px", width:"350px"}} /></a>
		<a href="#" target="_blank" title="javascript:void(0)"><img src="images/09.jpg" alt="" style={{marginBottom:"10px", width:"350px"}} /></a>
		<a href="#" target="_blank" title="javascript:void(0)"><img src="images/pubs/7.jpg" alt="" style={{marginBottom:"10px", width:"350px"}} /></a>



        </div>

      <div className="col-xl-8 col-lg-8">

        <div className="utf-notify-box-aera margin-top-15">
          <div className="utf-switch-container-item">
            <span>Affichage de 1–10 résultats sur {o?.length} emplois :</span>
          </div>
		  <div className="sort-by">
				<span>Trier par:</span>
				<select className="selectpicker hide-tick">
					<option>A to Z</option>
					<option>Plus récent</option>
					<option>Plus ancien</option>
					<option>Aléatoire</option>
				</select>
			</div>
        </div>

        <div className="utf-listings-container-part compact-list-layout margin-top-35">

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/groupe_togocom.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>TOGOCOM</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Web Designer </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 6 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/ceet.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>CEET</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage de fin d'études</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Développeur Web PHP </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/moov_africa.png" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>MOOV AFRICA TOGO</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Premier emploi </span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Chargé(e) de reportings </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 1 an</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/ebusiness_africa.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>E-Business Africa</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Assistant(e) marketeur </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>

					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/gta.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>GTA / C2A Vie</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Bénévolat</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Assistant comptable </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>

					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/bollore_logistics.png" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>Bolloré Logistics</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Administrateur réseaux et systèmes </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/bia_togo.png" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>BIA Togo</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Gestionnaire de comptes </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/bureau_veritas.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>Bureau Veritas</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Assistant(e) Gestionnaire des Ressources Humaines </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/ask_gras_savoye.png" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>ASK GRAS SAVOYE</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Designer Graphique </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/bank_atlantique.png" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>Banque Atlantique</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Gestionnaire logistique </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/bb_lome.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>Brasserie BB Lomé</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Ingénieur des eaux </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/boluda_togo.png" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>Boluda Togo</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Commercial </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/ags_frasers.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>AGS Frasers</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Analyste des ventes </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/amexfield_togo_steel.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>AMEX TOGO STEEL</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Mécanicien de meules</span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/groupe_togocom.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>TOGOCOM</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Conseiller(e) clientèle </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

			<a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/aget_togo.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>AGET Togo</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Assistant(e) de Direction </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>

		</div>

        {/* <!-- Pagination --> */}
        <div className="clearfix"></div>
        <div className="row">
          <div className="col-md-12">
            <div className="utf-pagination-container-aera margin-top-30 margin-bottom-60">
              <nav className="pagination">
                <ul>
                  <li className="utf-pagination-arrow"><a href="#"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                  <li><a href="#" className="current-page">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li className="utf-pagination-arrow"><a href="#"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <NewsletterSubscribe />
  <Footer />
            </div >
			</>
        );
}
export default OffresListe;
