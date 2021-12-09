import React from "react";

interface AnnuaireDesEcolesComponentProps{
    ecole: any
}
class AnnuaireDesEcolesComponent extends React.Component<AnnuaireDesEcolesComponentProps, {}> {
    constructor(props: any){
        super(props);
    }

    render(){
        const urlImageBg = "url(" + this.props.ecole.bgImage + ")";
        return(
            <div className="col-xl-3 col-md-6 col-lg-4"> 
				<a href="jobs-list-layout-leftside.html" className="photo-box large" style={{backgroundImage: urlImageBg}} data-background-image={urlImageBg}>
				  <div className="utf-opening-box-content-part">
                      
					{
                    (this.props.ecole.imageSchool !== undefined && this.props.ecole.imageSchool !== "") 
                        ? <div className="utf-category-box-icon-item"> <img src={this.props.ecole.imageSchool} alt="" /> </div> 
                        : null
                    }

					<h3>{this.props.ecole.schoolName} <br /> &nbsp; </h3>
                        <div className="items-foot">
                            <span className="ecoles-cvpro" style={{backgroundColor: "black"}}> {this.props.ecole.cv}</span>
                            <span className="btn btn-success " style={{fontSize: "20px", backgroundColor: "green;"}}> <b>Voir</b></span>
                            <span className="ecoles-vues" style={{backgroundColor: "black"}}>{this.props.ecole.views}</span>
                        </div>
                            
				  </div>
				</a> 
			</div>
        );
    }
}

export default AnnuaireDesEcolesComponent;