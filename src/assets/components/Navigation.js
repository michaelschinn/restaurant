import React, {Component} from "react";

export default function Navigation() 
{
    return( 
        <>
            <nav className="">
                <ul className="nav justify-content-center">
                    <li className="nav-item pr-3">Hero</li>
                    <li className="nav-item px-3">About</li>
                    <li className="nav-item pl-3">Location</li>
                </ul>
            </nav>
        </>
    );
}