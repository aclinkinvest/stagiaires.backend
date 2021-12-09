import React from "react";
import { Offre } from "../../../../models/Offre";

interface OffreProps {
    offre: Offre
}

interface OffreState {
}

class OffreComponent extends React.Component<OffreProps, OffreState> {
    offre:Offre;
    constructor(props: any){
        super(props);
        this.offre = this.props.offre;
    }
    render() {
        return(
            
			<a href="#" className="utf-job-listing">
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/groupe_togocom.jpg" alt="" /> </div>
				
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style={{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>{this.offre?.nom_entreprise}</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> {this.offre?.type_de_stage}</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>
				  <span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste">{this.offre?.titre_du_poste}</span>
				  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> {this.offre?.date_de_debut}</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> {this.offre?.duree_de_stage}</li>
						 
					</ul>
				</div>
				<div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> {this.offre?.ville_du_stage}</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> {this.offre?.avantages_lies}</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> {this.offre?.date_de_publication}</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> {this.offre?.date_limite}</span>
					</ul>
				  </div>
				</div>
				<span data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard" className="bookmark-icon"></span> 
			   </div>
			</a> 
			// <a href="#" className="utf-job-listing">
			//   <div className="utf-job-listing-details"> 
			// 	<div className="utf-job-listing-company-logo"> <img src="images/entreprises/groupe_togocom.jpg" alt="" /> </div>
				
			// 	<div className="utf-job-listing-description">
			// 		<div className="utf-job-listing-footer">
			// 			<ul className="comp-s-type">

			// 				<span style={{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>TOGOCOM</b> </span>

			// 			 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage Fonctionnel</span>
			// 			</ul>
			// 		</div>
			// 	  <div className="utf-job-listing-footer">
			// 		<ul>
			// 	  <span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste">Web Designer</span>
			// 	  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
			// 			<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 6 mois</li>
						 
			// 		</ul>
			// 	</div>
			// 	<div className="utf-job-listing-footer">
			// 		<ul>
			// 		  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
			// 		  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
			// 		  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
			// 		  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
			// 		</ul>
			// 	  </div>
			// 	</div>
			// 	<span data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard" className="bookmark-icon"></span> 
			//    </div>
			// </a> 
        );
    }
}

export default OffreComponent;