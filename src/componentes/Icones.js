import React from 'react';
import './Icones.scss';


const Icones = ({icone}) => {
    return(
        <div className="Icones">
            <img src={icone} alt="icone" />
        </div>
    )
}

export default Icones;
