
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { fetchTours } from '../http/tourAPI';
import { Context } from '../index';
import TourTable from './TourTable';

const ShowUsersButton = observer(() => {
    const [open, setOpen] = useState(false);
    // const {tour} = useContext(Context);
  
    // useEffect(() => {
    //   fetchTours().then(data => { 
    //     tour.setTours(data)
    //   })
    // }, []);

    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="outline-secondary"
          className="mt-1 search-button"
        >
          Show tours
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <TourTable/>
          </div>
        </Collapse>
      </>
    );
  });
  
 export default ShowUsersButton;