import React, {Component} from "react";
import Menu from "./Menu";

export default function Hero() 
{
    return( 
        <>
            <section>
                <article>
                    <div id="hero" className="carousel slide shadow-lg" data-bs-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-bs-target="#hero" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#hero" data-bs-slide-to="1"></li>
                        <li data-bs-target="#hero" data-bs-slide-to="2"></li>
                      </ol>
                      <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div id="hero-image-1" className=" text-center py-5 position-relative">
                                    <span className="text-white display-1 text-shadow mb-4 cursive">Egg Extravaganza</span><br />
                                    <span className="display-6 text-white px-5 text-shadow2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dictum erat.</span><br />
                                    <span className="display-4 text-white px-5 text-shadow2 cursive">$15.99</span>
                                    <div className="bg-tint"></div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div id="hero-image-2" className="text-center py-5 position-relative">
                                    <span className="text-white display-1 text-shadow mb-4 cursive">Fruit Filled Waffels</span><br />
                                    <span className="display-6 text-white px-5 text-shadow2 mb-4">Aenean consectetur, orci quis lacinia gravida, risus ex consequat velit, nec elem.</span><br />
                                    <span className="display-4 text-white px-5 text-shadow2 cursive">$9.99</span>
                                    <div className="bg-tint"></div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div id="hero-image-3" className=" text-center py-5 position-relative">
                                    <span className="text-white display-1 text-shadow mb-4 cursive">Eggy Tomatoes & Toast</span><br />
                                    <span className="display-6 text-white px-5 text-shadow2 mb-4">Donec ultrices ligula quis velit tristique posuere. Sed dignissim dui vel quam por.</span><br />
                                    <span className="display-4 text-white px-5 text-shadow2 cursive">$12.99</span>
                                    <div className="bg-tint"></div>
                                </div>
                            </div>
                      </div>
                      <a className="carousel-control-prev" href="#hero" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only display-6"></span>
                      </a>
                      <a className="carousel-control-next" href="#hero" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only display-6"></span>
                      </a>
                    </div>
                </article>
            </section>
        </>
    );
}