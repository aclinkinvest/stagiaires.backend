import React, { useState } from 'react'
import Field from './Field'
import useStyles from './styles'
import styles from './Login.module.css'
import { GoogleLogin } from 'react-google-login'
import {useDispatch} from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { signup, signin } from '../../redux/actions/auth'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { createProfile } from '../../redux/actions/profile'
// import Google from './Google'
import { useSnackbar } from 'react-simple-snackbar'
import ProgressButton from 'react-progress-button'



const initialState ={ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', profilePicture: '', bio: '', role: 'candidate'}

const Login = (props) => {

    const classes = useStyles();
    const [formData, setFormData] = useState(initialState)
    const [isSignup, setIsSignup] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false);
     // eslint-disable-next-line 
    const [openSnackbar, closeSnackbar] = useSnackbar()
    const user = JSON.parse(localStorage.getItem('profile'))
    
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleChange =(e)=> {
        setFormData( {...formData, [e.target.name] : e.target.value} )
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        if(isSignup) {
            dispatch(signup(formData, openSnackbar))
        } else {
            dispatch(signin(formData, openSnackbar))
        }
    }


    const switchMode =() => {
        setIsSignup((prevState) => !prevState)
    }

    const googleSuccess = async (res) => {
        console.log(res)
        const result = res?.profileObj
        const token = res?.tokenId
        dispatch(createProfile({name: result?.name, email: result?.email, userId: result?.googleId, phoneNumber: '', businessName: '', contactAddress: '', logo: result?.imageUrl, website: ''}))

        try {
            dispatch({ type: "AUTH", data: {result, token}})

            window.location.href='/#/dashboard'
            
        } catch (error) {
            console.log(error)
        }
    }
    const googleError =(error) => {
        console.log(error)
        console.log("Google Sign In was unsuccessful. Try again later")
    }


    if(user) {
      history.push('/#/dashboard')
    }

    return (
    <div className="container margin-top-40">
            <div className="row">
              <div className="col-xl-6 offset-xl-3">
                <div className="utf-login-register-page-aera margin-bottom-50">
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {/*<Typography component="h1" variant="h5">{ isSignup ? 'S\'inscrire' : 'Se connecter' }</Typography>*/}
          <div className="utf-welcome-text-item">
                    <h3>Bienvenue sur <b>stagiaires.tg</b>, <br />connectez-vous pour continuer</h3>
                          <Button onClick={switchMode}>
                            { isSignup ? 'Je suis déjà inscrit, Me connecter!' : "Je n'ai pas de compte ? M'inscrire !" }
                          </Button>
                </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Field name="firstName" label="Prénom" handleChange={handleChange} autoFocus half />
              <Field name="lastName" label="Nom" handleChange={handleChange} half />
            </>
            )}
            <Field name="email" label="Adresse email" handleChange={handleChange} type="email" />
            <Field name="password" label="Mot de passe" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Field name="confirmPassword" label="Confirmer le mot de passe" handleChange={handleChange} type="password" /> }
          </Grid>
            { !isSignup && <Link to="/forgot"><p style={{textAlign: 'center', color: '#1d7dd6', marginTop: '20px'}}>Mot de passe oublié?</p></Link> }
          <div className={styles.buttons}>
               <div>
                    <ProgressButton>{ isSignup ? 'S\'inscrire' : 'Se connecter' }</ProgressButton>
                </div>
                {/*<div>*/}
                {/*    <GoogleLogin*/}
                {/*    clientId = {process.env.REACT_APP_GOOGLE_CLIENT_ID}*/}
                {/*    render={(renderProps) => (*/}
                {/*        <button className={styles.googleBtn} onClick={renderProps.onClick} disabled={renderProps.disabled} >Google</button>*/}
                {/*    )}*/}
                {/*    onSuccess={googleSuccess}*/}
                {/*    onFailure={googleError}*/}
                {/*    cookiePolicy="single_host_origin"*/}
                {/*/>*/}
                {/*</div>*/}
          </div>
            <div className="utf-social-login-separator-item"><span>ou</span></div>
                <div className="utf-social-login-buttons-block">
                    <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Facebook</button>
                    <button className="google-login ripple-effect"><i className="icon-brand-google"></i> Gmail</button>
                    <button className="linkedin-login ripple-effect"><i className="icon-brand-linkedin"></i> Linkedin</button>
                    <button className="instagram-login ripple-effect"><i className="icon-brand-instagram"></i> Instagram</button>
                </div>
        </form>
                </div>
              </div>
            </div>
    </div>

    )
}

export default Login
