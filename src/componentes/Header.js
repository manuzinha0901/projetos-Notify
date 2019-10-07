import React,{ useState } from "react";
import './Header.scss';
import mao from '../imagens/mao.png';
import Icones from "./Icones";
import symbol from '../imagens/symbol.png';
import window from '../imagens/window'

const Header = () => {
    return(
        <div className="Header">
            <div className="texto">
                <h1>Notify<span>.</span></h1>
                <Icones icone={symbol}/>
                <Icones icone={window}/>                        
            </div>
            <div className="mao">
                <img src={mao} alt="mão segurando celular"/>
            </div> 
        </div>
    );
}

export default Header;