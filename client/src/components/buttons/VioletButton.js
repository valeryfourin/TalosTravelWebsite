import React from 'react';
import { Button } from "react-bootstrap";
import '../../styles/VioletButton.scss';

const VioletButton = (props) => {
    return (
        <Button variant="outline-secondary" className="mt-1 search-button" {...props}>
          {props.text}
        </Button>
    )
};

export default VioletButton;