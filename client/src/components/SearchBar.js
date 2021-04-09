import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import {  InputGroup, Row, Button } from 'react-bootstrap';
import '../styles/SearchBar.scss';
import '../styles/Calendar.scss';
import GuestsCount from './GuestsCount';
import CountryDropdown from './CountryDropdown';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const SearchBar = observer(() => {
    
    const [value, onChange] = useState([new Date(), new Date()]);
    return (
        <Row className="search-bar ">
            <InputGroup  className="mb-3 input-group">

                <CountryDropdown className="input-item"/>

                <DateRangePicker 
                    className="calendar input-item"
                    onChange={onChange}
                    value={value}
                    minDate={new Date()}/>
                
                <GuestsCount className="input-item"/>

                <Button variant="outline-secondary" id="find-btn" className="input-item"><h6>Search!</h6></Button>

            </InputGroup>
        </Row>
    );
});

export default SearchBar;