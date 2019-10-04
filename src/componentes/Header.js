import React,{ useState } from "react";
import './Header.scss';
import mao from '../imagens/mao.png';

const Header = () => {
    return(
        <div className="Header">
            <div className="texto">
                <h1>Notify<span>.</span></h1>
            </div>
            <div className="mao">
                <img src={mao} alt="mão segurando celular"/>
            </div> 
        </div>
    );
}
    
export default Header;