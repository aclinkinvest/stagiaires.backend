import React from "react";
import { connect } from "react-redux";
// import Login from '../Layouts/Authentication/Login';
// import RegisterPopup from '../Layouts/Authentication/RegisterPopup';

import * as actionsCreator from '../../redux/actions/auth';

interface IRecipeProps {
    location?: any;
    user?: any;
    history?: any;
    dispatch?: any;
    login?: any;
}

interface IStateInit {
    username?: string,
    password?: string,
    loading?: boolean,
    error?: boolean,
}

class LoginRegisterPopup extends React.Component<IRecipeProps, IStateInit> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loading: false,
            error: false,
        };
    }
    componentDidMount() {
        // if(this.props.user)
        // {
        //     this.props.history.push('/');
        // }
    }

    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value

        });
        console.log(e.target.name);
        this.setState({ error: false });
    }

    handleErrorState = () => {
        this.setState({ error: false });
    }

    login = (e: any) => {
        e.preventDefault();
        this.setState({ loading: true });
        let { dispatch, login, history } = this.props;
        const params = this.state;

        login(params).then((res: any) => {
            // dispatch({ type: actions.LOGIN, payload: res.data });
            this.setState({ loading: false });
            history.push('/candidate/dashboard');
        }).catch((err: any) => {
            this.setState({ loading: false, error: true });
        });
    }
    render() {
        const { password, username, loading, error } = this.state;
        return (
            <div id="utf-signin-dialog-block" className="zoom-anim-dialog mfp-hide dialog-with-tabs">
                <div className="utf-signin-form-part">
                    <ul className="utf-popup-tabs-nav-item">
                        <li><a href="#login">Connexion</a></li>
                        <li><a href="#register">S'inscrire</a></li>
                    </ul>
                    <div className="utf-popup-container-part-tabs">
                        <div className="utf-popup-tab-content-item" id="login">
                            {/*<Login*/}
                            {/*    username={username}*/}
                            {/*    password={password}*/}
                            {/*    loading={loading}*/}
                            {/*    error={error}*/}
                            {/*    handleChange={this.handleChange}*/}
                            {/*    onSubmit={this.login}*/}
                            {/*    handleErrorState={this.handleErrorState}*/}
                            {/*/>*/}
                        </div>
                        <div className="utf-popup-tab-content-item" id="register">
                            {/*<RegisterPopup />*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        // user: state.authUser.user
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch: dispatch,
        login: (params: any) => actionsCreator.login(params)
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginRegisterPopup);
