import { useContext, useState } from 'react';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Dropdown,  FormControl } from 'react-bootstrap';
import {Context} from '../index';
import VioletButton from './buttons/VioletButton';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      ref={ref}
      className="country-toggle-link"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <i className="fa fa-caret-down ml-1"/>
    </a>
  ));
  
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to search..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );
  
const CountryDropdown = observer(() => {
  const {tour} = useContext(Context);
  const [chosenCountry, setChosenCountry] = useState(null);
  return (
    <Dropdown>
      <VioletButton 
      text={
        <Dropdown.Toggle
        as={CustomToggle}
        variant="outline-secondary"
        title="Country"
        id="input-group-dropdown-1"
        >
          {
          chosenCountry == null 
          ?
          "Country"
          :
          chosenCountry
        }
        </Dropdown.Toggle>
      }>
      </VioletButton>
      <Dropdown.Menu as={CustomMenu}>
        {tour.tours && tour.tours.map(country => 
            <Dropdown.Item href="#" className="country-dropdown-item" onClick={() => {setChosenCountry(country.country)}} key={country.id}>{country.country}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default CountryDropdown;