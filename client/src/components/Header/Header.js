import React, { useState, useEffect } from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import styles from './Header.module.css'

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Navbar from "../Home/Partials/Navbar";
import ItemsMenuHeader from "../../Routes/HomeItemsMenu";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));



const Header = (props) => {
    const dispatch = useDispatch()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const history = useHistory()
    const location = useLocation()


    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])


    const logout =() => {
        dispatch({ type: 'LOGOUT' })
        history.push('/')
        setUser(null)
    }  


    useEffect(()=> {
        const token = user?.token
        // setUser(JSON.parse(localStorage.getItem('profile')))
        //If token expires, logout the user
        if(token) {
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()) logout()
        }
        // eslint-disable-next-line
    }, [location, user]) //when location changes, set the user





  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event ) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };


  const openLink =(link) => {
      history.push(`/${link}`)
      setOpen(false);
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);




    if(!user) return (
          <Navbar {...props} />
    )
    return (
    //     <div className={styles.header}>
    //         <div className={classes.root}>
    //   <div>
    //     <Button
    //       ref={anchorRef}
    //       aria-controls={open ? 'menu-list-grow' : undefined}
    //       aria-haspopup="true"
    //       onClick={handleToggle}
    //     >
    //       <Avatar style={{backgroundColor: '#1976D2'}}>{user?.result?.name?.charAt(0)}</Avatar>
    //     </Button>
    //     <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
    //       {({ TransitionProps, placement }) => (
    //         <Grow
    //           {...TransitionProps}
    //           style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
    //         >
    //           <Paper elevation={3}>
    //             <ClickAwayListener onClickAway={handleClose}>
    //               <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
    //                 <MenuItem onClick={() => openLink('settings') }>{(user?.result?.name).split(" ")[0]}</MenuItem>
    //                 <MenuItem onClick={()=> logout()} >Logout</MenuItem>
    //               </MenuList>
    //             </ClickAwayListener>
    //           </Paper>
    //         </Grow>
    //       )}
    //     </Popper>
    //   </div>
    // </div>
    //
    //
    //     </div>
        <div>
                <header id="utf-header-container-block" className="fullwidth dashboard-header not-sticky">
                    <div id="header">
                        <div className="container">
                            <div className="utf-left-side">
                                <div id="logo"> <a href="/"><img src="images/logo-stagiaire-tg.png" alt="" /></a> </div>
                                <nav id="navigation">
                                    <ul id="responsive">
                                        {
                                            ItemsMenuHeader.map((item, index) => {
                                                return (
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

                            <div className="utf-right-side">
                                <div className="utf-header-widget-item hide-on-mobile">
                                    <div className="utf-header-notifications">
                                        <div className="utf-header-notifications-trigger notifications-trigger-icon"> <a href="#"><i className="icon-feather-bell"></i><span>5</span></a> </div>
                                        <div className="utf-header-notifications-dropdown-block">
                                            <div className="utf-header-notifications-headline">
                                                <h4>Voir toutes les notifications</h4>
                                            </div>
                                            <div className="utf-header-notifications-content">
                                                <div className="utf-header-notifications-scroll" data-simplebar>
                                                    <ul>
                                                        {/*<NotificationsHeader />*/}
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="javascript:void(0);" className="utf-header-notifications-button ripple-effect utf-button-sliding-icon">Voir toutes les notifications<i className="icon-feather-chevrons-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="utf-header-widget-item">
                                    <div className="utf-header-notifications user-menu">
                                        <div className="utf-header-notifications-trigger user-profile-title">
                                            <a href="/#">
                                                <div className="user-avatar status-online"><Avatar style={{backgroundColor: '#1976D2'}}>{user?.result?.name?.charAt(0)}</Avatar> </div>
                                                <div className="user-name">Bonjour, {(user?.result?.name).split(" ")[0]}! </div>
                                            </a>
                                        </div>
                                        <div className="utf-header-notifications-dropdown-block">
                                            <ul className="utf-user-menu-dropdown-nav">
                                                <li><Link to="/#"><i className="icon-material-outline-dashboard"></i> Espace personnel</Link></li>
                                                <li><Link to="/settings"><i className="icon-feather-user"></i> Mon Profil</Link></li>
                                                <li><i className="icon-material-outline-power-settings-new"></i> <button onClick={()=> logout()} >Déconnexion</button>  </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <span className="mmenu-trigger">
                                    <button className="hamburger utf-hamburger-collapse-item" type="button"> <span className="utf-hamburger-box-item"> <span className="utf-hamburger-inner-item"></span> </span> </button>
                                </span>
                            </div>

                        </div>
                    </div>
                </header>
                <div className="clearfix"></div>
            </div>
    )
}

export default Header
