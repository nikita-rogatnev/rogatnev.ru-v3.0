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
                    portfolio
                </div>
            </section>
        </div>
    );
}

export default portfolio;
