import React, {Component} from "react";

export default function Navigation() 
{
    return( 
        <>
            <nav className="py-3 sticky-top text-white">
                <ul className="nav justify-content-center">
                    <li className="nav-item pr-3 display-6">
                        <a className="text-white text-decoration-none" href="#"><small>Specials</small></a>
                    </li>
                    <li className="nav-item px-3 display-6">
                    <small>•</small>
                    </li>
                    <li className="nav-item px-1 display-6">
                        <a className="text-white text-decoration-none" href="#"><small>Menu</small></a>
                    </li>
                    <li className="nav-item px-3 display-6">
                    <small>•</small>
                    </li>
                    <li className="nav-item pl-3 display-6">
                        <a className="text-white text-decoration-none" href="#"><small>Location</small></a>
                    </li>
                </ul>
            </nav>
        </>
    );
}