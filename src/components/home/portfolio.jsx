import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function portfolio({children}) {
    return (
        <div className="main__container">
            <section className="portfolio" id="portfolio">
                <div className="portfolio__container">
                    <div className="portfolio__heading">
                        <svg>
                            <use xlinkHref="#glasses"></use>
                        </svg>
                        <h1>Latest works</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default portfolio;
