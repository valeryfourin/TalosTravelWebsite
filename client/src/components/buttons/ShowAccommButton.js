
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { fetchAccomms } from '../../http/tourAPI';
import { Context } from '../../index';
import AccommList from '../lists/AccommList';

const ShowAccommButton = observer((props) => {
    const [open, setOpen] = useState(false);
    const {tour} = useContext(Context);
  
    useEffect(() => {
      fetchAccomms().then(data => { 
        tour.setAccomms(data)
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
          Show available accommodation
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <AccommList tour={props.tour}/>
          </div>
        </Collapse>
      </>
    );
  });
  
 export default ShowAccommButton;