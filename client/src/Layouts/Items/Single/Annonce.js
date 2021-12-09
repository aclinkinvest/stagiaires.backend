import React from "react";

interface AnonceProps {
    image: string;
    url: string;
    style?: any;
}

interface AnonceState {
}
class Annonce extends React.Component<AnonceProps, AnonceState> {

    image: string;
    url: string;
    style?: any;
    constructor(props: any){
        super(props);
        this.image = this.props.image;
        this.url = this.props.url;
        this.style = (this.props?.style) ? this.props?.style : {marginBottom:"10px", width:"350px"} ;
    }


    render() {
        return(
            <a href={this.url} style={this.style} target="_blank" title="javascript:void(0)"><img src={this.image} alt="" style={this.style} /></a>	
        );
    }
}

export default Annonce;