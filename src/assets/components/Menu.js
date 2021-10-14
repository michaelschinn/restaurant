import React, {Component} from "react";
import MenuItem from "./MenuItem";

export default class Menu extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                <main id='menu'>
                    <section>
                        <MenuItem />
                    </section>
                </main>
            </>
        );
    }
}