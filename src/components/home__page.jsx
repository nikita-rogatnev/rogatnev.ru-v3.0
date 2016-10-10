import React from 'react';
import {Link} from 'react-router';

function home__page() {
    const reactLink = 'https://github.com/facebook/react';
    const reactRouterLink = 'https://github.com/reactjs/react-router';
    const ghPagesLink = 'https://pages.github.com/';
    const repoReadmeLink = 'https://github.com/rogatnev-nikita/rogatnev-nikita.github.io#readme';

    return (
        <div className="main__content container-fluid">
            <section className="intro row" id="intro">
                <div className="col-xs-12">
                    1
                </div>
            </section>
            <section className="about row" id="about">
                <div className="col-xs-12">
                    2
                </div>
            </section>
            <section className="resume row" id="resume">
                <div className="col-xs-12">
                    3
                </div>
            </section>
            <section className="portfolio row" id="portfolio">
                <div className="col-xs-12">
                    4
                </div>
            </section>
            <section className="certificates row" id="certificates">
                <div className="col-xs-12">
                    5
                </div>
            </section>
            <section className="blog row" id="blog">
                <div className="col-xs-12">
                    6
                </div>
            </section>
            <section className="contact row" id="contact">
                <div className="col-xs-12">
                    7
                </div>
            </section>
        </div>
    );
}

export default home__page;
