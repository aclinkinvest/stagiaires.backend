import React from "react";

class RecruteurComponent extends React.Component {
    render() {
        return(
			<div className="col-xl-4 col-md-6 col-sm-12">
				<div className="utf-company-inner-alignment">
					<a href="#" className="company">
						
						
						<span className="company-logo"><img src="images/entreprises/01.png" alt="" /></span>
						<h4>G Technicals Solutions</h4>
						<h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> Web Designer, Web Developers</span></h5>
						<p className="text-muted"><i className="icon-material-outline-location-on"></i> 2767 Concord Street, Charlotte</p>
						<div className="utf-star-rating" data-rating="4.5"></div>
					</a>
				</div>						
			</div>
        );
    }
}

export default RecruteurComponent;