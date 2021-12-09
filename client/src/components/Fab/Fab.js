import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddClient from '../Invoice/AddClient';


const FabButton = () => {

  const location = useLocation()
  const mainButtonStyles = {backgroundColor: '#1976D2'}
  const [open, setOpen] = useState(false)


  // if(location.pathname === '/invoice') return null

    return (
        <div>
           <AddClient setOpen={setOpen} open={open} />
          <Fab
            mainButtonStyles={mainButtonStyles}
            icon={ <AddIcon />}
            alwaysShowTitle={true}
          >

            {location.pathname !== '/dashboard' && (
              <Action
                  text="Nouveau CV Pro"
                  onClick={() => window.location.href='/dashboard'}
                >
                  <CreateIcon />
              </Action>
            )}

            <Action
                text="Nouvelle candidature"
                onClick={() => setOpen((prev) => !prev)}
              >
                <PersonAddIcon />
            </Action>

          </Fab>
        </div>
    )
}

export default FabButton
