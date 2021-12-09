import React from 'react'
import styles from './Settings.module.css'
import Form from './Form/Form'
import { useHistory } from 'react-router-dom'
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const Settings = () => {

    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('profile'))


    if(!user) {
        history.push('/login')
      }
    

    return (
        <><Header/>
            {user && <NavBar />}
        <div className={styles.pageContainer}>
           
        <section className={styles.hero}>
            <h1>Profil</h1>
            <div className={styles.paragraph}>
                <p>Modifier / Mettre à jour votre profil</p>
            </div>
        </section>
        <section className={styles.stat}>
        
            <Form user={user} />
        </section>
       
    </div>
            </>
    )
}

export default Settings
