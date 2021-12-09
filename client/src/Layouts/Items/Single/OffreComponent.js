import React from "react";
import { Offre } from "../../../../models/Offre";

interface OfferProps {
    offer: Offre
}

interface OfferState {
}

class OffreComponent extends React.Component<OfferProps, OfferState> {
    offer:Offre;
    constructor(props: any){
        super(props);
        this.offer = this.props.offer;
    }
    render() {
        return(
            
			<a href="#" className="utf-job-listing">
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/groupe_togocom.jpg" alt="" /> </div>
				
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style={{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>{this.offer?.nom_entreprise}</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> {this.offer?.type_de_stage}</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>
				  <span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste">{this.offer?.titre_du_poste}</span>
				  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> {this.offer?.date_de_debut}</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> {this.offer?.duree_de_stage}</li>
						 
					</ul>
				</div>
				<div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> {this.offer?.ville_du_stage}</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> {this.offer?.avantages_lies}</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> {this.offer?.date_de_publication}</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> {this.offer?.date_limite}</span>
					</ul>
				  </div>
				</div>
				<span data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard" className="bookmark-icon"></span> 
			   </div>
			</a> 

        );
    }
}

export default OffreComponent;