import React from 'react';
import '../../../Styles/Collapsible.css';

interface CollapsiblePropos {
    title?: string;
}
interface CollapsibleState {
    open?: any
}

class CollapsiblePersonnalise extends React.Component<CollapsiblePropos, CollapsibleState> {
    constructor(props: any){
        super(props);
        this.state = {
        open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
        }
        togglePanel(e: any){
        this.setState({open: !this.state.open})
        }
        render() {
    return (<div>
        <div onClick={(e)=>this.togglePanel(e)} className="header">
            {this.props.title}</div>
            {this.state.open ? (
            <div className="content">
            {this.props.children}
            </div>
            ) : null}
        </div>
        );
    }
}

export default CollapsiblePersonnalise;