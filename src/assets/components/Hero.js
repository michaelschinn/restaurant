import React, {Component} from "react";

export default function Hero() 
{
    return( 
        <>
            <section>
                <article>
                    <div id="hero" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li data-target="#hero" data-slide-to="0" class="active"></li>
                        <li data-target="#hero" data-slide-to="1"></li>
                        <li data-target="#hero" data-slide-to="2"></li>
                      </ol>
                      <div class="carousel-inner">
                        b5-carousel-item
                      </div>
                      <a class="carousel-control-prev" href="#hero" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#hero" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                </article>
            </section>
        </>
    );
}