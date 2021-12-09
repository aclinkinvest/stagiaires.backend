import React from "react";

interface FaqProps {
    faq?: any
}

interface FaqState {
}


class FaqComponent extends React.Component<FaqProps, FaqState> {
    faq = {
        'name' :'',
        'description':''
    };
    constructor(props: any){
        super(props);
        this.faq = this.props.faq;
    }
    render() {
        return(
            <div className="utf-accordion-item js-accordion-item">
                <div className="accordion-header js-accordion-header">{this.faq.name}</div>
                <div className="accordion-body js-accordion-body"> 
                <div className="utf-accordion-content">{this.faq.description}</div>
                </div>
            </div>
        );
    }
}

export default FaqComponent;