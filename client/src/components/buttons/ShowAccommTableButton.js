
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import AccommTable from '../tables/AccommTable';

const ShowAccommTableButton = observer(() => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="outline-secondary"
          className="mt-1 search-button"
        >
          Show accommodation
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <AccommTable/>
          </div>
        </Collapse>
      </>
    );
  });
  
 export default ShowAccommTableButton;