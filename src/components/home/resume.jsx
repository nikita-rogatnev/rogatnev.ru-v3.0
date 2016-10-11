import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function resume({children}) {
    return (
        <div className="main__container">
            <section className="resume" id="resume">
                <div className="resume__container">
                    resume
                </div>
            </section>
        </div>
    );
}

export default resume;
