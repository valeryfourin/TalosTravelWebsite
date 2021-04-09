import React from 'react';
import {NavLink} from 'react-router-dom';
import { OFFERS_ROUTE } from '../utils/consts';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 1,
            images: [
                "./images/logos/talostravellogoBigTVioletFly.png",
                "./images/logos/talostravellogoBigTBlueFly.png",
                "./images/logos/talostravellogoBigT.png"
            ]
        }
    }

    
    changeImgOnHover = (() => {
        
            if (this.state.currentImage < this.state.images.length - 1) {
                this.setState({
                    currentImage: this.state.currentImage + 1
                });
            } else {
                this.setState({
                    currentImage: 0
                });
            }
    });

    render() {
        return (
            <NavLink to={OFFERS_ROUTE} onMouseOver={this.changeImgOnHover} id="navLink" href="#home">
            <img src={this.state.images[this.state.currentImage]} className="logo" id="logo" alt="logo" />
            </NavLink>
        );
    }
}
