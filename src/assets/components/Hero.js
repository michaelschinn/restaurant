import React, {Component} from "react";

export default function Hero() 
{
    return( 
        <>
            <section>
                <article>
                    <div id="hero" className="carousel slide" data-bs-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-bs-target="#hero" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#hero" data-bs-slide-to="1"></li>
                        <li data-bs-target="#hero" data-bs-slide-to="2"></li>
                      </ol>
                      <div className="carousel-inner">
                            <div className="carousel-item active">
                              <div className="bg-dark text-white text-center display-1 py-5">Slide 1 goes here.</div>
                            </div>
                            <div className="carousel-item">
                              <div className="bg-dark text-white text-center display-1 py-5">Slide 2 goes here.</div>
                            </div>
                            <div className="carousel-item">
                              <div className="bg-dark text-white text-center display-1 py-5">Slide 3 goes here.</div>
                            </div>
                      </div>
                      <a className="carousel-control-prev" href="#hero" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only display-6">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#hero" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only display-6">Next</span>
                      </a>
                    </div>
                </article>
            </section>
        </>
    );
}