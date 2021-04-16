
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { fetchUsers } from '../http/userAPI';
import { Context } from '../index';
import UserTable from './UserTable';

const ShowToursButton = observer(() => {
    const [open, setOpen] = useState(false);
    const {user} = useContext(Context);
  
    useEffect(() => {
      fetchUsers().then(data => { 
        user.setUsers(data)
      })
    }, []);

    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="outline-secondary"
          className="mt-1 search-button"
        >
          Show users
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <UserTable/>
          </div>
        </Collapse>
      </>
    );
  });
  
 export default ShowToursButton;