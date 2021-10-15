import React, {Component} from "react";
import { render } from "react-dom";

export default function Header() 
{
    return( 
        <>
            <header className="text-center position-relative">
                <div className="cursive display-1 title1">Michelangelos</div>
                <div className="chef d-inline-block m-0"></div>
                <div className="cursive display-1 title2">Kitchen</div>
            </header>
        </>
    );
}