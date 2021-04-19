
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import OrderTable from './OrderTable';

const ShowUsersButton = observer(() => {
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
          Show orders
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <OrderTable/>
          </div>
        </Collapse>
      </>
    );
  });
  
 export default ShowUsersButton;