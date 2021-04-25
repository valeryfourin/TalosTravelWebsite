import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import {Context} from '../../index';
import '../../styles/TourList.scss';

const TourList = observer((props) => {
    const {tour} = useContext(Context);

    return (
        <ul>
            {tour.accomms.map(accomm => 
                <>
                <li key={accomm.id} >
                    <b>{accomm.title}</b>
                    <p>address: {accomm.address}</p>
                    <p>type: {accomm.type}</p>
                    <p>{accomm.stars} stars</p>
                    <Image src={process.env.REACT_APP_API_URL + accomm.img} style={{margin: 'auto'}} className="w-100 tour-preview"/>
                    <p>{accomm.description}</p>

                </li>
                <div style={{textAlign: 'right'}}><h6>{accomm.price}$/night</h6></div>
                </>)}
        </ul>
    );
});

export default TourList;