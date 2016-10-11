import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function about({children}) {
    return (
        <div className="main__container">
            <section className="about" id="about">
                <div className="about__container">
                    about
                </div>
            </section>
        </div>
    );
}

export default about;
