import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Computer Science Engineering" where="Graphic Era Hill University" from="July 2012" to="2016"/>
            <Widecard title="12th" where="Army Public School, Clement town Dehradun, Uttarakhand" from="2011" to="2012"/>
            <Widecard title="10th" where="K.V Ranikhet, Uttarakhand" from="2009" to="2010"/>
            </div>
            )
        }
    }

export default Education
