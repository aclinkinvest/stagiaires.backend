import React from 'react';
import { Link } from 'react-router-dom';

import ItemsMenuHeader from '../../../Routes/HomeItemsMenu';
import LoginRegisterPopup from '../../Popup/LoginRegisterPopup';

interface IRecipeProps {
    location?: any;
}

class Navbar extends React.Component<IRecipeProps> {
    rightContentLoginOrProfil(){
        return(
            <div className="utf-right-side">

                <div className="utf-header-widget-item"> <Link to="/login" className="log-in-button"><i className="icon-feather-log-in"></i> <span>CONNEXION</span></Link> </div>

                <span className="mmenu-trigger">
                    <button className="hamburger utf-hamburger-collapse-item" type="button"> <span className="utf-hamburger-box-item"> <span className="utf-hamburger-inner-item"></span> </span> </button>
                </span>
            </div>
        );
    }
    render(){
        const {location} = this.props;
        return(
            <div>
                <header id="utf-header-container-block">
                    <div id="header">
                    <div className="container">
                        <div className="utf-left-side">
                        <div id="logo"> <a href="/"><img src="images/logo-stagiaire-tg.png" alt="" /></a> </div>
                        <nav id="navigation">
                            <ul id="responsive">
                                {
                                    ItemsMenuHeader.map((item, index) => {
                                        return(
                                            <li key={index}>
                                                <Link className={`${item.cName} ${location?.pathname === item.url ? "current" : ""}`} to={item.url}>{item.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        <div className="clearfix"></div>
                        </div>

                        {this.rightContentLoginOrProfil()}

                    </div>
                    </div>
                </header>
                <div className="clearfix"></div>
                <LoginRegisterPopup/>
            </div>
        );
    }

}

export default Navbar;