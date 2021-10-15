import React, {Component} from "react";

export default class Location extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                <article id='location' className="container">
                    <div className="row">
                        <div className="col p-5 h6">
                            <p>
                                Michelangelos Kitchen<br/>
                                A: 348 E Main St, Lexington, KY 40507<br/>
                                P: (859) 960-4600<br/>
                                E: Support@Michelangelos<br/>
                            </p>
                        </div>
                        <div className="col text-center p5">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=348%20E%20Main%20St,%20Lexington,%20KY%2040507&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    <a href="https://fmovies-online.net">fmovies</a>
                                    <br />
                                    <a href="https://www.embedgooglemap.net">google map insert</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        );
    }
}