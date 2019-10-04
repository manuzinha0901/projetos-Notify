import React,{ useState } from "react";
import './Header.scss';
import mao from '../imagens/mao.png';

const Header = () => {
    return(
        <div className="Header">
            <h1>Notify<span>.</span></h1>
            <img className="mao" src={mao} alt="mão segurando celular"/> 
        </div>
    );
}
    
export default Header;