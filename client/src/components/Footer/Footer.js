import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Footer.module.css'
import FabButton from '../Fab/Fab'

const Footer = () => {
    const location = useLocation()
    const [user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <footer>
            <div className="utf-footer-copyright-item sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">Copyright &copy; 2021 Stagiaires.tg Tous droits reservés. | <Link to="/">Mentions légales</Link> | <Link to="/">Politique de confidentialité</Link></div>
                        </div>
                    </div>
                </div>
            {user && (
            <FabButton />
            )}
        </footer>
    )
}

export default Footer
